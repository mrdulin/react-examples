webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(353);

	__webpack_require__(173);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(87);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(27);

	var _reactRedux = __webpack_require__(6);

	__webpack_require__(94);

	var _routes = __webpack_require__(262);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(100);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createElement = function createElement(Component, props) {
	    // console.log(Component, props);
	    return _react2.default.createElement(Component, props);
	};

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _store2.default },
	    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default, createElement: createElement, render: function render(props) {
	            return _react2.default.createElement(_reactRouter.RouterContext, props);
	        } })
	), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * React v15.1.0
	 *
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(40),o=e(148),i={focusDOMComponent:function(){o(r.getNodeFromInstance(this))}};t.exports=i},{148:148,40:40}],2:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case S.topCompositionStart:return M.compositionStart;case S.topCompositionEnd:return M.compositionEnd;case S.topCompositionUpdate:return M.compositionUpdate}}function a(e,t){return e===S.topKeyDown&&t.keyCode===_}function u(e,t){switch(e){case S.topKeyUp:return-1!==b.indexOf(t.keyCode);case S.topKeyDown:return t.keyCode!==_;case S.topKeyPress:case S.topMouseDown:case S.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(E?o=i(e):R?u(e,n)&&(o=M.compositionEnd):a(e,n)&&(o=M.compositionStart),!o)return null;T&&(R||o!==M.compositionStart?o===M.compositionEnd&&R&&(l=R.getData()):R=m.getPooled(r));var c=g.getPooled(o,t,n,r);if(l)c.data=l;else{var p=s(n);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case S.topCompositionEnd:return s(t);case S.topKeyPress:var n=t.which;return n!==P?null:(k=!0,w);case S.topTextInput:var r=t.data;return r===w&&k?null:r;default:return null}}function p(e,t){if(R){if(e===S.topCompositionEnd||u(e,t)){var n=R.getData();return m.release(R),R=null,n}return null}switch(e){case S.topPaste:return null;case S.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case S.topCompositionEnd:return T?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=N?c(e,n):p(e,n),!o)return null;var i=y.getPooled(M.beforeInput,t,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(16),h=e(20),v=e(140),m=e(21),g=e(97),y=e(101),C=e(158),b=[9,13,27,32],_=229,E=v.canUseDOM&&"CompositionEvent"in window,x=null;v.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var N=v.canUseDOM&&"TextEvent"in window&&!x&&!r(),T=v.canUseDOM&&(!E||x&&x>8&&11>=x),P=32,w=String.fromCharCode(P),S=f.topLevelTypes,M={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[S.topCompositionEnd,S.topKeyPress,S.topTextInput,S.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[S.topBlur,S.topCompositionEnd,S.topKeyDown,S.topKeyPress,S.topKeyUp,S.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[S.topBlur,S.topCompositionStart,S.topKeyDown,S.topKeyPress,S.topKeyUp,S.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[S.topBlur,S.topCompositionUpdate,S.topKeyDown,S.topKeyPress,S.topKeyUp,S.topMouseDown]}},k=!1,R=null,D={eventTypes:M,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=D},{101:101,140:140,158:158,16:16,20:20,21:21,97:97}],3:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=u},{}],4:[function(e,t,n){"use strict";var r=e(3),o=e(140),i=(e(70),e(142),e(114)),a=e(153),u=e(160),s=(e(164),u(function(e){return a(e)})),l=!1,c="cssFloat";if(o.canUseDOM){var p=document.createElement("div").style;try{p.font=""}catch(d){l=!0}void 0===document.documentElement.style.cssFloat&&(c="styleFloat")}var f={createMarkupForStyles:function(e,t){var n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];null!=o&&(n+=s(r)+":",n+=i(r,o,t)+";")}return n||null},setValueForStyles:function(e,t,n){var o=e.style;for(var a in t)if(t.hasOwnProperty(a)){var u=i(a,t[a],n);if("float"!==a&&"cssFloat"!==a||(a=c),u)o[a]=u;else{var s=l&&r.shorthandPropertyExpansions[a];if(s)for(var p in s)o[p]="";else o[a]=""}}}};t.exports=f},{114:114,140:140,142:142,153:153,160:160,164:164,3:3,70:70}],5:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(165),i=e(25),a=e(154);o(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){e.length!==t.length?a(!1):void 0,this._callbacks=null,this._contexts=null;for(var n=0;n<e.length;n++)e[n].call(t[n]);e.length=0,t.length=0}},checkpoint:function(){return this._callbacks?this._callbacks.length:0},rollback:function(e){this._callbacks&&(this._callbacks.length=e,this._contexts.length=e)},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),i.addPoolingTo(r),t.exports=r},{154:154,165:165,25:25}],6:[function(e,t,n){"use strict";function r(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function o(e){var t=N.getPooled(k.change,D,e,T(e));b.accumulateTwoPhaseDispatches(t),x.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue(!1)}function a(e,t){R=e,D=t,R.attachEvent("onchange",o)}function u(){R&&(R.detachEvent("onchange",o),R=null,D=null)}function s(e,t){return e===M.topChange?t:void 0}function l(e,t,n){e===M.topFocus?(u(),a(t,n)):e===M.topBlur&&u()}function c(e,t){R=e,D=t,I=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(R,"value",U),R.attachEvent?R.attachEvent("onpropertychange",d):R.addEventListener("propertychange",d,!1)}function p(){R&&(delete R.value,R.detachEvent?R.detachEvent("onpropertychange",d):R.removeEventListener("propertychange",d,!1),R=null,D=null,I=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==I&&(I=t,o(e))}}function f(e,t){return e===M.topInput?t:void 0}function h(e,t,n){e===M.topFocus?(p(),c(t,n)):e===M.topBlur&&p()}function v(e,t){return e!==M.topSelectionChange&&e!==M.topKeyUp&&e!==M.topKeyDown||!R||R.value===I?void 0:(I=R.value,D)}function m(e){return e.nodeName&&"input"===e.nodeName.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function g(e,t){return e===M.topClick?t:void 0}var y=e(16),C=e(17),b=e(20),_=e(140),E=e(40),x=e(90),N=e(99),T=e(122),P=e(129),w=e(130),S=e(158),M=y.topLevelTypes,k={change:{phasedRegistrationNames:{bubbled:S({onChange:null}),captured:S({onChangeCapture:null})},dependencies:[M.topBlur,M.topChange,M.topClick,M.topFocus,M.topInput,M.topKeyDown,M.topKeyUp,M.topSelectionChange]}},R=null,D=null,I=null,O=null,A=!1;_.canUseDOM&&(A=P("change")&&(!("documentMode"in document)||document.documentMode>8));var L=!1;_.canUseDOM&&(L=P("input")&&(!("documentMode"in document)||document.documentMode>11));var U={get:function(){return O.get.call(this)},set:function(e){I=""+e,O.set.call(this,e)}},F={eventTypes:k,extractEvents:function(e,t,n,o){var i,a,u=t?E.getNodeFromInstance(t):window;if(r(u)?A?i=s:a=l:w(u)?L?i=f:(i=v,a=h):m(u)&&(i=g),i){var c=i(e,t);if(c){var p=N.getPooled(k.change,c,n,o);return p.type="change",b.accumulateTwoPhaseDispatches(p),p}}a&&a(e,u,t)}};t.exports=F},{122:122,129:129,130:130,140:140,158:158,16:16,17:17,20:20,40:40,90:90,99:99}],7:[function(e,t,n){"use strict";function r(e,t){return Array.isArray(t)&&(t=t[1]),t?t.nextSibling:e.firstChild}function o(e,t,n){c.insertTreeBefore(e,t,n)}function i(e,t,n){Array.isArray(t)?u(e,t[0],t[1],n):m(e,t,n)}function a(e,t){if(Array.isArray(t)){var n=t[1];t=t[0],s(e,t,n),e.removeChild(n)}e.removeChild(t)}function u(e,t,n,r){for(var o=t;;){var i=o.nextSibling;if(m(e,o,r),o===n)break;o=i}}function s(e,t,n){for(;;){var r=t.nextSibling;if(r===n)break;e.removeChild(r)}}function l(e,t,n){var r=e.parentNode,o=e.nextSibling;o===t?n&&m(r,document.createTextNode(n),o):n?(v(o,n),s(r,o,t)):s(r,e,t)}var c=e(8),p=e(12),d=e(74),f=(e(40),e(70),e(113)),h=e(134),v=e(135),m=f(function(e,t,n){e.insertBefore(t,n)}),g=p.dangerouslyReplaceNodeWithMarkup,y={dangerouslyReplaceNodeWithMarkup:g,replaceDelimitedText:l,processUpdates:function(e,t){for(var n=0;n<t.length;n++){var u=t[n];switch(u.type){case d.INSERT_MARKUP:o(e,u.content,r(e,u.afterNode));break;case d.MOVE_EXISTING:i(e,u.fromNode,r(e,u.afterNode));break;case d.SET_MARKUP:h(e,u.content);break;case d.TEXT_CONTENT:v(e,u.content);break;case d.REMOVE_NODE:a(e,u.fromNode)}}}};t.exports=y},{113:113,12:12,134:134,135:135,40:40,70:70,74:74,8:8}],8:[function(e,t,n){"use strict";function r(e){if(v){var t=e.node,n=e.children;if(n.length)for(var r=0;r<n.length;r++)m(t,n[r],null);else null!=e.html?t.innerHTML=e.html:null!=e.text&&d(t,e.text)}}function o(e,t){e.parentNode.replaceChild(t.node,e),r(t)}function i(e,t){v?e.children.push(t):e.node.appendChild(t.node)}function a(e,t){v?e.html=t:e.node.innerHTML=t}function u(e,t){v?e.text=t:d(e.node,t)}function s(){return this.node.nodeName}function l(e){return{node:e,children:[],html:null,text:null,toString:s}}var c=e(9),p=e(113),d=e(135),f=1,h=11,v="undefined"!=typeof document&&"number"==typeof document.documentMode||"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent&&/\bEdge\/\d/.test(navigator.userAgent),m=p(function(e,t,n){t.node.nodeType===h||t.node.nodeType===f&&"object"===t.node.nodeName.toLowerCase()&&(null==t.node.namespaceURI||t.node.namespaceURI===c.html)?(r(t),e.insertBefore(t.node,n)):(e.insertBefore(t.node,n),r(t))});l.insertTreeBefore=m,l.replaceChildWithTree=o,l.queueChild=i,l.queueHTML=a,l.queueText=u,t.exports=l},{113:113,135:135,9:9}],9:[function(e,t,n){"use strict";var r={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};t.exports=r},{}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(154),i={MUST_USE_PROPERTY:1,HAS_SIDE_EFFECTS:2,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,injectDOMPropertyConfig:function(e){var t=i,n=e.Properties||{},a=e.DOMAttributeNamespaces||{},s=e.DOMAttributeNames||{},l=e.DOMPropertyNames||{},c=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var p in n){u.properties.hasOwnProperty(p)?o(!1):void 0;var d=p.toLowerCase(),f=n[p],h={attributeName:d,attributeNamespace:null,propertyName:p,mutationMethod:null,mustUseProperty:r(f,t.MUST_USE_PROPERTY),hasSideEffects:r(f,t.HAS_SIDE_EFFECTS),hasBooleanValue:r(f,t.HAS_BOOLEAN_VALUE),hasNumericValue:r(f,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:r(f,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:r(f,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(!h.mustUseProperty&&h.hasSideEffects?o(!1):void 0,h.hasBooleanValue+h.hasNumericValue+h.hasOverloadedBooleanValue<=1?void 0:o(!1),s.hasOwnProperty(p)){var v=s[p];h.attributeName=v}a.hasOwnProperty(p)&&(h.attributeNamespace=a[p]),l.hasOwnProperty(p)&&(h.propertyName=l[p]),c.hasOwnProperty(p)&&(h.mutationMethod=c[p]),u.properties[p]=h}}},a=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",u={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:a,ATTRIBUTE_NAME_CHAR:a+"\\-.0-9\\uB7\\u0300-\\u036F\\u203F-\\u2040",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},injection:i};t.exports=u},{154:154}],11:[function(e,t,n){"use strict";function r(e){return l.hasOwnProperty(e)?!0:s.hasOwnProperty(e)?!1:u.test(e)?(l[e]=!0,!0):(s[e]=!0,!1)}function o(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&1>t||e.hasOverloadedBooleanValue&&t===!1}var i=e(10),a=(e(40),e(48),e(70),e(132)),u=(e(164),new RegExp("^["+i.ATTRIBUTE_NAME_START_CHAR+"]["+i.ATTRIBUTE_NAME_CHAR+"]*$")),s={},l={},c={createMarkupForID:function(e){return i.ID_ATTRIBUTE_NAME+"="+a(e)},setAttributeForID:function(e,t){e.setAttribute(i.ID_ATTRIBUTE_NAME,t)},createMarkupForRoot:function(){return i.ROOT_ATTRIBUTE_NAME+'=""'},setAttributeForRoot:function(e){e.setAttribute(i.ROOT_ATTRIBUTE_NAME,"")},createMarkupForProperty:function(e,t){var n=i.properties.hasOwnProperty(e)?i.properties[e]:null;if(n){if(o(n,t))return"";var r=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&t===!0?r+'=""':r+"="+a(t)}return i.isCustomAttribute(e)?null==t?"":e+"="+a(t):null},createMarkupForCustomAttribute:function(e,t){return r(e)&&null!=t?e+"="+a(t):""},setValueForProperty:function(e,t,n){var r=i.properties.hasOwnProperty(t)?i.properties[t]:null;if(r){var a=r.mutationMethod;if(a)a(e,n);else{if(o(r,n))return void this.deleteValueForProperty(e,t);if(r.mustUseProperty){var u=r.propertyName;r.hasSideEffects&&""+e[u]==""+n||(e[u]=n)}else{var s=r.attributeName,l=r.attributeNamespace;l?e.setAttributeNS(l,s,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&n===!0?e.setAttribute(s,""):e.setAttribute(s,""+n)}}}else if(i.isCustomAttribute(t))return void c.setValueForAttribute(e,t,n)},setValueForAttribute:function(e,t,n){r(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){var n=i.properties.hasOwnProperty(t)?i.properties[t]:null;if(n){var r=n.mutationMethod;if(r)r(e,void 0);else if(n.mustUseProperty){var o=n.propertyName;n.hasBooleanValue?e[o]=!1:n.hasSideEffects&&""+e[o]==""||(e[o]="")}else e.removeAttribute(n.attributeName)}else i.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=c},{10:10,132:132,164:164,40:40,48:48,70:70}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(8),i=e(140),a=e(145),u=e(146),s=e(150),l=e(154),c=/^(<[^ \/>]+)/,p="data-danger-index",d={dangerouslyRenderMarkup:function(e){i.canUseDOM?void 0:l(!1);for(var t,n={},o=0;o<e.length;o++)e[o]?void 0:l(!1),t=r(e[o]),t=s(t)?t:"*",n[t]=n[t]||[],n[t][o]=e[o];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,v=n[t];for(h in v)if(v.hasOwnProperty(h)){var m=v[h];v[h]=m.replace(c,"$1 "+p+'="'+h+'" ')}for(var g=a(v.join(""),u),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(p)&&(h=+C.getAttribute(p),C.removeAttribute(p),d.hasOwnProperty(h)?l(!1):void 0,d[h]=C,f+=1)}}return f!==d.length?l(!1):void 0,d.length!==e.length?l(!1):void 0,d},dangerouslyReplaceNodeWithMarkup:function(e,t){if(i.canUseDOM?void 0:l(!1),t?void 0:l(!1),"HTML"===e.nodeName?l(!1):void 0,"string"==typeof t){var n=a(t,u)[0];e.parentNode.replaceChild(n,e)}else o.replaceChildWithTree(e,t)}};t.exports=d},{140:140,145:145,146:146,150:150,154:154,8:8}],13:[function(e,t,n){"use strict";var r=e(158),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null})];t.exports=o},{158:158}],14:[function(e,t,n){"use strict";var r={onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0},o={getNativeProps:function(e,t){if(!t.disabled)return t;var n={};for(var o in t)!r[o]&&t.hasOwnProperty(o)&&(n[o]=t[o]);return n}};t.exports=o},{}],15:[function(e,t,n){"use strict";var r=e(16),o=e(20),i=e(40),a=e(103),u=e(158),s=r.topLevelTypes,l={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},c={eventTypes:l,extractEvents:function(e,t,n,r){if(e===s.topMouseOver&&(n.relatedTarget||n.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var u;if(r.window===r)u=r;else{var c=r.ownerDocument;u=c?c.defaultView||c.parentWindow:window}var p,d;if(e===s.topMouseOut){p=t;var f=n.relatedTarget||n.toElement;d=f?i.getClosestInstanceFromNode(f):null}else p=null,d=t;if(p===d)return null;var h=null==p?u:i.getNodeFromInstance(p),v=null==d?u:i.getNodeFromInstance(d),m=a.getPooled(l.mouseLeave,p,n,r);m.type="mouseleave",m.target=h,m.relatedTarget=v;var g=a.getPooled(l.mouseEnter,d,n,r);return g.type="mouseenter",g.target=v,g.relatedTarget=h,o.accumulateEnterLeaveDispatches(m,g,p,d),[m,g]}};t.exports=c},{103:103,158:158,16:16,20:20,40:40}],16:[function(e,t,n){"use strict";var r=e(157),o=r({bubbled:null,captured:null}),i=r({topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{157:157}],17:[function(e,t,n){"use strict";var r=e(18),o=e(19),i=e(63),a=e(110),u=e(118),s=e(154),l={},c=null,p=function(e,t){e&&(o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},d=function(e){return p(e,!0)},f=function(e){return p(e,!1)},h={injection:{injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},putListener:function(e,t,n){"function"!=typeof n?s(!1):void 0;var o=l[t]||(l[t]={});o[e._rootNodeID]=n;var i=r.registrationNameModules[t];i&&i.didPutListener&&i.didPutListener(e,t,n)},getListener:function(e,t){var n=l[t];return n&&n[e._rootNodeID]},deleteListener:function(e,t){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=l[t];o&&delete o[e._rootNodeID]},deleteAllListeners:function(e){for(var t in l)if(l[t][e._rootNodeID]){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t),delete l[t][e._rootNodeID]}},extractEvents:function(e,t,n,o){for(var i,u=r.plugins,s=0;s<u.length;s++){var l=u[s];if(l){var c=l.extractEvents(e,t,n,o);c&&(i=a(i,c))}}return i},enqueueEvents:function(e){e&&(c=a(c,e))},processEventQueue:function(e){var t=c;c=null,e?u(t,d):u(t,f),c?s(!1):void 0,i.rethrowCaughtError()},__purge:function(){l={}},__getListenerBank:function(){return l}};t.exports=h},{110:110,118:118,154:154,18:18,19:19,63:63}],18:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(n>-1?void 0:a(!1),!l.plugins[n]){t.extractEvents?void 0:a(!1),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)o(r[i],t,i)?void 0:a(!1)}}}function o(e,t,n){l.eventNameDispatchConfigs.hasOwnProperty(n)?a(!1):void 0,l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];i(u,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){l.registrationNameModules[e]?a(!1):void 0,l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(154),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(e){u?a(!1):void 0,u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(s[n]?a(!1):void 0,s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{154:154}],19:[function(e,t,n){"use strict";function r(e){return e===y.topMouseUp||e===y.topTouchEnd||e===y.topTouchCancel}function o(e){return e===y.topMouseMove||e===y.topTouchMove}function i(e){return e===y.topMouseDown||e===y.topTouchStart}function a(e,t,n,r){var o=e.type||"unknown-event";e.currentTarget=C.getNodeFromInstance(r),t?v.invokeGuardedCallbackWithCatch(o,n,e):v.invokeGuardedCallback(o,n,e),e.currentTarget=null}function u(e,t){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)a(e,t,n[o],r[o]);else n&&a(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null}function s(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=s(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchInstances;Array.isArray(t)?m(!1):void 0,e.currentTarget=t?C.getNodeFromInstance(n):null;var r=t?t(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,r}function p(e){return!!e._dispatchListeners}var d,f,h=e(16),v=e(63),m=e(154),g=(e(164),{injectComponentTree:function(e){d=e},injectTreeTraversal:function(e){f=e}}),y=h.topLevelTypes,C={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:c,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,getInstanceFromNode:function(e){return d.getInstanceFromNode(e)},getNodeFromInstance:function(e){return d.getNodeFromInstance(e)},isAncestor:function(e,t){return f.isAncestor(e,t)},getLowestCommonAncestor:function(e,t){return f.getLowestCommonAncestor(e,t)},getParentInstance:function(e){return f.getParentInstance(e)},traverseTwoPhase:function(e,t,n){return f.traverseTwoPhase(e,t,n)},traverseEnterLeave:function(e,t,n,r,o){return f.traverseEnterLeave(e,t,n,r,o)},injection:g};t.exports=C},{154:154,16:16,164:164,63:63}],20:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return C(e,r)}function o(e,t,n){var o=t?y.bubbled:y.captured,i=r(e,n,o);i&&(n._dispatchListeners=m(n._dispatchListeners,i),n._dispatchInstances=m(n._dispatchInstances,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&v.traverseTwoPhase(e._targetInst,o,e)}function a(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?v.getParentInstance(t):null;v.traverseTwoPhase(n,o,e)}}function u(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=C(e,r);o&&(n._dispatchListeners=m(n._dispatchListeners,o),n._dispatchInstances=m(n._dispatchInstances,e))}}function s(e){e&&e.dispatchConfig.registrationName&&u(e._targetInst,null,e)}function l(e){g(e,i)}function c(e){g(e,a)}function p(e,t,n,r){v.traverseEnterLeave(n,r,u,e,t)}function d(e){g(e,s)}var f=e(16),h=e(17),v=e(19),m=e(110),g=e(118),y=(e(164),f.PropagationPhases),C=h.getListener,b={accumulateTwoPhaseDispatches:l,accumulateTwoPhaseDispatchesSkipTarget:c,accumulateDirectDispatches:d,accumulateEnterLeaveDispatches:p};t.exports=b},{110:110,118:118,16:16,164:164,17:17,19:19}],21:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(165),i=e(25),a=e(126);o(r.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),i.addPoolingTo(r),t.exports=r},{126:126,165:165,25:25}],22:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_PROPERTY,i=r.injection.HAS_BOOLEAN_VALUE,a=r.injection.HAS_SIDE_EFFECTS,u=r.injection.HAS_NUMERIC_VALUE,s=r.injection.HAS_POSITIVE_NUMERIC_VALUE,l=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,c={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+r.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:i,allowTransparency:0,alt:0,async:i,autoComplete:0,autoPlay:i,capture:i,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:o|i,cite:0,classID:0,className:0,cols:s,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:i,coords:0,crossOrigin:0,data:0,dateTime:0,"default":i,defer:i,dir:0,disabled:i,download:l,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:i,formTarget:0,frameBorder:0,headers:0,height:0,hidden:i,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:i,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:o|i,muted:o|i,name:0,nonce:0,noValidate:i,open:i,optimum:0,pattern:0,placeholder:0,poster:0,preload:0,profile:0,radioGroup:0,readOnly:i,rel:0,required:i,reversed:i,role:0,rows:s,rowSpan:u,sandbox:0,scope:0,scoped:i,scrolling:0,seamless:i,selected:o|i,shape:0,size:s,sizes:0,span:s,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:u,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:o|a,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,"typeof":0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:i,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{}};t.exports=c},{10:10}],23:[function(e,t,n){"use strict";function r(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},r=(""+e).replace(t,function(e){return n[e]});return"$"+r}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"},r="."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1);return(""+r).replace(t,function(e){return n[e]})}var i={escape:r,unescape:o};t.exports=i},{}],24:[function(e,t,n){"use strict";function r(e){null!=e.checkedLink&&null!=e.valueLink?l(!1):void 0}function o(e){r(e),null!=e.value||null!=e.onChange?l(!1):void 0}function i(e){r(e),null!=e.checked||null!=e.onChange?l(!1):void 0}function a(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}var u=e(81),s=e(80),l=e(154),c=(e(164),{button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0}),p={value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func},d={},f={checkPropTypes:function(e,t,n){for(var r in p){if(p.hasOwnProperty(r))var o=p[r](t,r,e,s.prop);o instanceof Error&&!(o.message in d)&&(d[o.message]=!0,a(n))}},getValue:function(e){return e.valueLink?(o(e),e.valueLink.value):e.value},getChecked:function(e){return e.checkedLink?(i(e),e.checkedLink.value):e.checked},executeOnChange:function(e,t){return e.valueLink?(o(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(i(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(void 0,t):void 0}};t.exports=f},{154:154,164:164,80:80,81:81}],25:[function(e,t,n){"use strict";var r=e(154),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},s=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},l=function(e){var t=this;e instanceof t?void 0:r(!1),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=10,p=o,d=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||p,n.poolSize||(n.poolSize=c),n.release=l,n},f={addPoolingTo:d,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u,fiveArgumentPooler:s};t.exports=f},{154:154}],26:[function(e,t,n){"use strict";var r=e(165),o=e(29),i=e(31),a=e(30),u=e(44),s=e(60),l=(e(61),e(81)),c=e(91),p=e(131),d=(e(164),s.createElement),f=s.createFactory,h=s.cloneElement,v=r,m={
	Children:{map:o.map,forEach:o.forEach,count:o.count,toArray:o.toArray,only:p},Component:i,createElement:d,cloneElement:h,isValidElement:s.isValidElement,PropTypes:l,createClass:a.createClass,createFactory:f,createMixin:function(e){return e},DOM:u,version:c,__spread:v};t.exports=m},{131:131,164:164,165:165,29:29,30:30,31:31,44:44,60:60,61:61,81:81,91:91}],27:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=h++,d[e[m]]={}),d[e[m]]}var o,i=e(165),a=e(16),u=e(18),s=e(64),l=e(109),c=e(127),p=e(129),d={},f=!1,h=0,v={topAbort:"abort",topAnimationEnd:c("animationend")||"animationend",topAnimationIteration:c("animationiteration")||"animationiteration",topAnimationStart:c("animationstart")||"animationstart",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:c("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),g=i({},s,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(g.handleTopLevel),g.ReactEventListener=e}},setEnabled:function(e){g.ReactEventListener&&g.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!g.ReactEventListener||!g.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,o=r(n),i=u.registrationNameDependencies[e],s=a.topLevelTypes,l=0;l<i.length;l++){var c=i[l];o.hasOwnProperty(c)&&o[c]||(c===s.topWheel?p("wheel")?g.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):p("mousewheel")?g.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):g.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):c===s.topScroll?p("scroll",!0)?g.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):g.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",g.ReactEventListener.WINDOW_HANDLE):c===s.topFocus||c===s.topBlur?(p("focus",!0)?(g.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),g.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):p("focusin")&&(g.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),g.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),o[s.topBlur]=!0,o[s.topFocus]=!0):v.hasOwnProperty(c)&&g.ReactEventListener.trapBubbledEvent(c,v[c],n),o[c]=!0)}},trapBubbledEvent:function(e,t,n){return g.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return g.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(void 0===o&&(o=document.createEvent&&"pageX"in document.createEvent("MouseEvent")),!o&&!f){var e=l.refreshScrollValues;g.ReactEventListener.monitorScrollValue(e),f=!0}}});t.exports=g},{109:109,127:127,129:129,16:16,165:165,18:18,64:64}],28:[function(e,t,n){"use strict";function r(e,t,n){var r=void 0===e[n];null!=t&&r&&(e[n]=i(t))}var o=e(83),i=e(128),a=(e(23),e(136)),u=e(137),s=(e(164),{instantiateChildren:function(e,t,n){if(null==e)return null;var o={};return u(e,r,o),o},updateChildren:function(e,t,n,r,u){if(t||e){var s,l;for(s in t)if(t.hasOwnProperty(s)){l=e&&e[s];var c=l&&l._currentElement,p=t[s];if(null!=l&&a(c,p))o.receiveComponent(l,p,r,u),t[s]=l;else{l&&(n[s]=o.getNativeNode(l),o.unmountComponent(l,!1));var d=i(p);t[s]=d}}for(s in e)!e.hasOwnProperty(s)||t&&t.hasOwnProperty(s)||(l=e[s],n[s]=o.getNativeNode(l),o.unmountComponent(l,!1))}},unmountChildren:function(e,t){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];o.unmountComponent(r,t)}}});t.exports=s},{128:128,136:136,137:137,164:164,23:23,83:83}],29:[function(e,t,n){"use strict";function r(e){return(""+e).replace(b,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function i(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function a(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);g(e,i,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,i=e.keyPrefix,a=e.func,u=e.context,s=a.call(u,t,e.count++);Array.isArray(s)?l(s,o,n,m.thatReturnsArgument):null!=s&&(v.isValidElement(s)&&(s=v.cloneAndReplaceKey(s,i+(!s.key||t&&t.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function l(e,t,n,o,i){var a="";null!=n&&(a=r(n)+"/");var l=u.getPooled(t,a,o,i);g(e,s,l),u.release(l)}function c(e,t,n){if(null==e)return e;var r=[];return l(e,r,null,t,n),r}function p(e,t,n){return null}function d(e,t){return g(e,p,null)}function f(e){var t=[];return l(e,t,null,m.thatReturnsArgument),t}var h=e(25),v=e(60),m=e(146),g=e(137),y=h.twoArgumentPooler,C=h.fourArgumentPooler,b=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},h.addPoolingTo(o,y),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},h.addPoolingTo(u,C);var _={forEach:a,map:c,mapIntoWithKeyPrefixInternal:l,count:d,toArray:f};t.exports=_},{137:137,146:146,25:25,60:60}],30:[function(e,t,n){"use strict";function r(e,t){var n=E.hasOwnProperty(t)?E[t]:null;N.hasOwnProperty(t)&&(n!==b.OVERRIDE_BASE?m(!1):void 0),e&&(n!==b.DEFINE_MANY&&n!==b.DEFINE_MANY_MERGED?m(!1):void 0)}function o(e,t){if(t){"function"==typeof t?m(!1):void 0,f.isValidElement(t)?m(!1):void 0;var n=e.prototype,o=n.__reactAutoBindPairs;t.hasOwnProperty(C)&&x.mixins(e,t.mixins);for(var i in t)if(t.hasOwnProperty(i)&&i!==C){var a=t[i],l=n.hasOwnProperty(i);if(r(l,i),x.hasOwnProperty(i))x[i](e,a);else{var c=E.hasOwnProperty(i),p="function"==typeof a,d=p&&!c&&!l&&t.autobind!==!1;if(d)o.push(i,a),n[i]=a;else if(l){var h=E[i];!c||h!==b.DEFINE_MANY_MERGED&&h!==b.DEFINE_MANY?m(!1):void 0,h===b.DEFINE_MANY_MERGED?n[i]=u(n[i],a):h===b.DEFINE_MANY&&(n[i]=s(n[i],a))}else n[i]=a}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in x;o?m(!1):void 0;var i=n in e;i?m(!1):void 0,e[n]=r}}}function a(e,t){e&&t&&"object"==typeof e&&"object"==typeof t?void 0:m(!1);for(var n in t)t.hasOwnProperty(n)&&(void 0!==e[n]?m(!1):void 0,e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=l(e,o)}}var p=e(165),d=e(31),f=e(60),h=(e(80),e(79),e(77)),v=e(147),m=e(154),g=e(157),y=e(158),C=(e(164),y({mixins:null})),b=g({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],E={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},x={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=p({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=p({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=p({},e.propTypes,t)},statics:function(e,t){i(e,t)},autobind:function(){}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t,"replaceState")},isMounted:function(){return this.updater.isMounted(this)}},T=function(){};p(T.prototype,d.prototype,N);var P={createClass:function(e){var t=function(e,t,n){this.__reactAutoBindPairs.length&&c(this),this.props=e,this.context=t,this.refs=v,this.updater=n||h,this.state=null;var r=this.getInitialState?this.getInitialState():null;"object"!=typeof r||Array.isArray(r)?m(!1):void 0,this.state=r};t.prototype=new T,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],_.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.prototype.render?void 0:m(!1);for(var n in E)t.prototype[n]||(t.prototype[n]=null);return t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=P},{147:147,154:154,157:157,158:158,164:164,165:165,31:31,60:60,77:77,79:79,80:80}],31:[function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||o}var o=e(77),i=(e(70),e(112),e(147)),a=e(154);e(164);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?a(!1):void 0,this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};t.exports=r},{112:112,147:147,154:154,164:164,70:70,77:77}],32:[function(e,t,n){"use strict";var r=e(7),o=e(46),i={processChildrenUpdates:o.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,unmountIDFromEnvironment:function(e){}};t.exports=i},{46:46,7:7}],33:[function(e,t,n){"use strict";var r=e(154),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkup:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){o?r(!1):void 0,i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkup=e.replaceNodeWithMarkup,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{154:154}],34:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}function o(e){}function i(e,t){}function a(e){return e.prototype&&e.prototype.isReactComponent}var u=e(165),s=e(33),l=e(35),c=e(60),p=e(63),d=e(69),f=(e(70),e(76)),h=e(80),v=(e(79),e(83)),m=e(89),g=e(147),y=e(154),C=e(136);e(164);o.prototype.render=function(){var e=d.get(this)._currentElement.type,t=e(this.props,this.context,this.updater);return i(e,t),t};var b=1,_={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._nativeParent=null,this._nativeContainerInfo=null,this._updateBatchNumber=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedNodeType=null,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._topLevelWrapper=null,this._pendingCallbacks=null,this._calledComponentWillUnmount=!1},mountComponent:function(e,t,n,r){this._context=r,this._mountOrder=b++,this._nativeParent=t,this._nativeContainerInfo=n;var u,s=this._processProps(this._currentElement.props),l=this._processContext(r),p=this._currentElement.type,f=this._constructComponent(s,l);a(p)||null!=f&&null!=f.render||(u=f,i(p,u),null===f||f===!1||c.isValidElement(f)?void 0:y(!1),f=new o(p)),f.props=s,f.context=l,f.refs=g,f.updater=m,this._instance=f,d.set(f,this);var h=f.state;void 0===h&&(f.state=h=null),"object"!=typeof h||Array.isArray(h)?y(!1):void 0,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var v;return v=f.unstable_handleError?this.performInitialMountWithErrorHandling(u,t,n,e,r):this.performInitialMount(u,t,n,e,r),f.componentDidMount&&e.getReactMountReady().enqueue(f.componentDidMount,f),v},_constructComponent:function(e,t){return this._constructComponentWithoutOwner(e,t)},_constructComponentWithoutOwner:function(e,t){var n,r=this._currentElement.type;return n=a(r)?new r(e,t,m):r(e,t,m)},performInitialMountWithErrorHandling:function(e,t,n,r,o){var i,a=r.checkpoint();try{i=this.performInitialMount(e,t,n,r,o)}catch(u){r.rollback(a),this._instance.unstable_handleError(u),this._pendingStateQueue&&(this._instance.state=this._processPendingState(this._instance.props,this._instance.context)),a=r.checkpoint(),this._renderedComponent.unmountComponent(!0),r.rollback(a),i=this.performInitialMount(e,t,n,r,o)}return i},performInitialMount:function(e,t,n,r,o){var i=this._instance;i.componentWillMount&&(i.componentWillMount(),this._pendingStateQueue&&(i.state=this._processPendingState(i.props,i.context))),void 0===e&&(e=this._renderValidatedComponent()),this._renderedNodeType=f.getType(e),this._renderedComponent=this._instantiateReactComponent(e);var a=v.mountComponent(this._renderedComponent,r,t,n,this._processChildContext(o));return a},getNativeNode:function(){return v.getNativeNode(this._renderedComponent)},unmountComponent:function(e){if(this._renderedComponent){var t=this._instance;if(t.componentWillUnmount&&!t._calledComponentWillUnmount)if(t._calledComponentWillUnmount=!0,e){var n=this.getName()+".componentWillUnmount()";p.invokeGuardedCallback(n,t.componentWillUnmount.bind(t))}else t.componentWillUnmount();this._renderedComponent&&(v.unmountComponent(this._renderedComponent,e),this._renderedNodeType=null,this._renderedComponent=null,this._instance=null),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,this._topLevelWrapper=null,d.remove(t)}},_maskContext:function(e){var t=this._currentElement.type,n=t.contextTypes;if(!n)return g;var r={};for(var o in n)r[o]=e[o];return r},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._currentElement.type,n=this._instance,r=n.getChildContext&&n.getChildContext();if(r){"object"!=typeof t.childContextTypes?y(!1):void 0;for(var o in r)o in t.childContextTypes?void 0:y(!1);return u({},e,r)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{"function"!=typeof e[i]?y(!1):void 0,a=e[i](t,i,o,n)}catch(u){a=u}a instanceof Error&&(r(this),n===h.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement?v.receiveComponent(this,this._pendingElement,e,this._context):null!==this._pendingStateQueue||this._pendingForceUpdate?this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context):this._updateBatchNumber=null},updateComponent:function(e,t,n,r,o){var i,a,u=this._instance,s=!1;this._context===o?i=u.context:(i=this._processContext(o),s=!0),t===n?a=n.props:(a=this._processProps(n.props),s=!0),s&&u.componentWillReceiveProps&&u.componentWillReceiveProps(a,i);var l=this._processPendingState(a,i),c=!0;!this._pendingForceUpdate&&u.shouldComponentUpdate&&(c=u.shouldComponentUpdate(a,l,i)),this._updateBatchNumber=null,c?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,a,l,i,e,o)):(this._currentElement=n,this._context=o,u.props=a,u.state=l,u.context=i)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=u({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var s=r[a];u(i,"function"==typeof s?s.call(n,i,e,t):s)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a,u,s,l=this._instance,c=Boolean(l.componentDidUpdate);c&&(a=l.props,u=l.state,s=l.context),l.componentWillUpdate&&l.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,l.props=t,l.state=n,l.context=r,this._updateRenderedComponent(o,i),c&&o.getReactMountReady().enqueue(l.componentDidUpdate.bind(l,a,u,s),l)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(C(r,o))v.receiveComponent(n,o,e,this._processChildContext(t));else{var i=v.getNativeNode(n);v.unmountComponent(n,!1),this._renderedNodeType=f.getType(o),this._renderedComponent=this._instantiateReactComponent(o);var a=v.mountComponent(this._renderedComponent,e,this._nativeParent,this._nativeContainerInfo,this._processChildContext(t));this._replaceNodeWithMarkup(i,a,n)}},_replaceNodeWithMarkup:function(e,t,n){s.replaceNodeWithMarkup(e,t,n)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e;l.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{l.current=null}return null===e||e===!1||c.isValidElement(e)?void 0:y(!1),e},attachRef:function(e,t){var n=this.getPublicInstance();null==n?y(!1):void 0;var r=t.getPublicInstance(),o=n.refs===g?n.refs={}:n.refs;o[e]=r},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){var e=this._instance;return e instanceof o?null:e},_instantiateReactComponent:null},E={Mixin:_};t.exports=E},{136:136,147:147,154:154,164:164,165:165,33:33,35:35,60:60,63:63,69:69,70:70,76:76,79:79,80:80,83:83,89:89}],35:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],36:[function(e,t,n){"use strict";var r=e(40),o=e(59),i=e(72),a=e(83),u=e(90),s=e(91),l=e(116),c=e(124),p=e(133);e(164);o.inject();var d={findDOMNode:l,render:i.render,unmountComponentAtNode:i.unmountComponentAtNode,version:s,unstable_batchedUpdates:u.batchedUpdates,unstable_renderSubtreeIntoContainer:p};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:r.getClosestInstanceFromNode,getNodeFromInstance:function(e){return e._renderedComponent&&(e=c(e)),e?r.getNodeFromInstance(e):null}},Mount:i,Reconciler:a});t.exports=d},{116:116,124:124,133:133,164:164,40:40,59:59,72:72,83:83,90:90,91:91}],37:[function(e,t,n){"use strict";var r=e(14),o={getNativeProps:r.getNativeProps};t.exports=o},{14:14}],38:[function(e,t,n){"use strict";function r(e,t){t&&(X[e._tag]&&(null!=t.children||null!=t.dangerouslySetInnerHTML?O(!1):void 0),null!=t.dangerouslySetInnerHTML&&(null!=t.children?O(!1):void 0,"object"==typeof t.dangerouslySetInnerHTML&&K in t.dangerouslySetInnerHTML?void 0:O(!1)),null!=t.style&&"object"!=typeof t.style?O(!1):void 0)}function o(e,t,n,r){if(!(r instanceof D)){var o=e._nativeContainerInfo,a=o._node&&o._node.nodeType===q,u=a?o._node:o._ownerDocument;V(t,u),r.getReactMountReady().enqueue(i,{inst:e,registrationName:t,listener:n})}}function i(){var e=this;b.putListener(e.inst,e.registrationName,e.listener)}function a(){var e=this;S.postMountWrapper(e)}function u(){var e=this;e._rootNodeID?void 0:O(!1);var t=F(e);switch(t?void 0:O(!1),e._tag){case"iframe":case"object":e._wrapperState.listeners=[E.trapBubbledEvent(C.topLevelTypes.topLoad,"load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];for(var n in Y)Y.hasOwnProperty(n)&&e._wrapperState.listeners.push(E.trapBubbledEvent(C.topLevelTypes[n],Y[n],t));break;case"img":e._wrapperState.listeners=[E.trapBubbledEvent(C.topLevelTypes.topError,"error",t),E.trapBubbledEvent(C.topLevelTypes.topLoad,"load",t)];break;case"form":e._wrapperState.listeners=[E.trapBubbledEvent(C.topLevelTypes.topReset,"reset",t),E.trapBubbledEvent(C.topLevelTypes.topSubmit,"submit",t)];break;case"input":case"select":case"textarea":e._wrapperState.listeners=[E.trapBubbledEvent(C.topLevelTypes.topInvalid,"invalid",t)]}}function s(){M.postUpdateWrapper(this)}function l(e){Z.call($,e)||(Q.test(e)?void 0:O(!1),$[e]=!0)}function c(e,t){return e.indexOf("-")>=0||null!=t.is}function p(e){var t=e.type;l(t),this._currentElement=e,this._tag=t.toLowerCase(),this._namespaceURI=null,this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._nativeNode=null,this._nativeParent=null,this._rootNodeID=null,this._domID=null,this._nativeContainerInfo=null,this._wrapperState=null,this._topLevelWrapper=null,this._flags=0}var d=e(165),f=e(1),h=e(4),v=e(8),m=e(9),g=e(10),y=e(11),C=e(16),b=e(17),_=e(18),E=e(27),x=e(32),N=e(37),T=e(39),P=e(40),w=e(47),S=e(49),M=e(50),k=e(54),R=(e(70),e(73)),D=e(87),I=(e(146),e(115)),O=e(154),A=(e(129),e(158)),L=(e(163),e(138),e(164),T),U=b.deleteListener,F=P.getNodeFromInstance,V=E.listenTo,B=_.registrationNameModules,j={string:!0,number:!0},W=A({style:null}),K=A({__html:null}),H={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null},q=11,Y={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},z={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},G={listing:!0,pre:!0,textarea:!0},X=d({menuitem:!0},z),Q=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,$={},Z={}.hasOwnProperty,J=1;p.displayName="ReactDOMComponent",p.Mixin={mountComponent:function(e,t,n,o){this._rootNodeID=J++,this._domID=n._idCounter++,this._nativeParent=t,this._nativeContainerInfo=n;var i=this._currentElement.props;switch(this._tag){case"iframe":case"object":case"img":case"form":case"video":case"audio":this._wrapperState={listeners:null},e.getReactMountReady().enqueue(u,this);break;case"button":i=N.getNativeProps(this,i,t);break;case"input":w.mountWrapper(this,i,t),i=w.getNativeProps(this,i),e.getReactMountReady().enqueue(u,this);break;case"option":S.mountWrapper(this,i,t),i=S.getNativeProps(this,i);break;case"select":M.mountWrapper(this,i,t),i=M.getNativeProps(this,i),e.getReactMountReady().enqueue(u,this);break;case"textarea":k.mountWrapper(this,i,t),i=k.getNativeProps(this,i),e.getReactMountReady().enqueue(u,this)}r(this,i);var s,l;null!=t?(s=t._namespaceURI,l=t._tag):n._tag&&(s=n._namespaceURI,l=n._tag),(null==s||s===m.svg&&"foreignobject"===l)&&(s=m.html),s===m.html&&("svg"===this._tag?s=m.svg:"math"===this._tag&&(s=m.mathml)),this._namespaceURI=s;var c;if(e.useCreateElement){var p,d=n._ownerDocument;if(s===m.html)if("script"===this._tag){var h=d.createElement("div"),g=this._currentElement.type;h.innerHTML="<"+g+"></"+g+">",p=h.removeChild(h.firstChild)}else p=d.createElement(this._currentElement.type,i.is||null);else p=d.createElementNS(s,this._currentElement.type);P.precacheNode(this,p),this._flags|=L.hasCachedChildNodes,this._nativeParent||y.setAttributeForRoot(p),this._updateDOMProperties(null,i,e);var C=v(p);this._createInitialChildren(e,i,o,C),c=C}else{var b=this._createOpenTagMarkupAndPutListeners(e,i),_=this._createContentMarkup(e,i,o);c=!_&&z[this._tag]?b+"/>":b+">"+_+"</"+this._currentElement.type+">"}switch(this._tag){case"button":case"input":case"select":case"textarea":i.autoFocus&&e.getReactMountReady().enqueue(f.focusDOMComponent,this);break;case"option":e.getReactMountReady().enqueue(a,this)}return c},_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(B.hasOwnProperty(r))i&&o(this,r,i,e);else{r===W&&(i&&(i=this._previousStyleCopy=d({},t.style)),i=h.createMarkupForStyles(i,this));var a=null;null!=this._tag&&c(this._tag,t)?H.hasOwnProperty(r)||(a=y.createMarkupForCustomAttribute(r,i)):a=y.createMarkupForProperty(r,i),a&&(n+=" "+a)}}return e.renderToStaticMarkup?n:(this._nativeParent||(n+=" "+y.createMarkupForRoot()),n+=" "+y.createMarkupForID(this._domID))},_createContentMarkup:function(e,t,n){var r="",o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&(r=o.__html);else{var i=j[typeof t.children]?t.children:null,a=null!=i?null:t.children;if(null!=i)r=I(i);else if(null!=a){var u=this.mountChildren(a,e,n);r=u.join("")}}return G[this._tag]&&"\n"===r.charAt(0)?"\n"+r:r},_createInitialChildren:function(e,t,n,r){var o=t.dangerouslySetInnerHTML;if(null!=o)null!=o.__html&&v.queueHTML(r,o.__html);else{var i=j[typeof t.children]?t.children:null,a=null!=i?null:t.children;if(null!=i)v.queueText(r,i);else if(null!=a)for(var u=this.mountChildren(a,e,n),s=0;s<u.length;s++)v.queueChild(r,u[s])}},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){var i=t.props,a=this._currentElement.props;switch(this._tag){case"button":i=N.getNativeProps(this,i),a=N.getNativeProps(this,a);break;case"input":w.updateWrapper(this),i=w.getNativeProps(this,i),a=w.getNativeProps(this,a);break;case"option":i=S.getNativeProps(this,i),a=S.getNativeProps(this,a);break;case"select":i=M.getNativeProps(this,i),a=M.getNativeProps(this,a);break;case"textarea":k.updateWrapper(this),i=k.getNativeProps(this,i),a=k.getNativeProps(this,a)}r(this,a),this._updateDOMProperties(i,a,e),this._updateDOMChildren(i,a,e,o),"select"===this._tag&&e.getReactMountReady().enqueue(s,this)},_updateDOMProperties:function(e,t,n){var r,i,a;for(r in e)if(!t.hasOwnProperty(r)&&e.hasOwnProperty(r)&&null!=e[r])if(r===W){var u=this._previousStyleCopy;for(i in u)u.hasOwnProperty(i)&&(a=a||{},a[i]="");this._previousStyleCopy=null}else B.hasOwnProperty(r)?e[r]&&U(this,r):(g.properties[r]||g.isCustomAttribute(r))&&y.deleteValueForProperty(F(this),r);for(r in t){var s=t[r],l=r===W?this._previousStyleCopy:null!=e?e[r]:void 0;if(t.hasOwnProperty(r)&&s!==l&&(null!=s||null!=l))if(r===W)if(s?s=this._previousStyleCopy=d({},s):this._previousStyleCopy=null,l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(a=a||{},a[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(a=a||{},a[i]=s[i])}else a=s;else if(B.hasOwnProperty(r))s?o(this,r,s,n):l&&U(this,r);else if(c(this._tag,t))H.hasOwnProperty(r)||y.setValueForAttribute(F(this),r,s);else if(g.properties[r]||g.isCustomAttribute(r)){var p=F(this);null!=s?y.setValueForProperty(p,r,s):y.deleteValueForProperty(p,r)}}a&&h.setValueForStyles(F(this),a,this)},_updateDOMChildren:function(e,t,n,r){var o=j[typeof e.children]?e.children:null,i=j[typeof t.children]?t.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:t.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,n,r):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&this.updateMarkup(""+u):null!=l&&this.updateChildren(l,n,r)},getNativeNode:function(){return F(this)},unmountComponent:function(e){switch(this._tag){case"iframe":case"object":case"img":case"form":case"video":case"audio":var t=this._wrapperState.listeners;if(t)for(var n=0;n<t.length;n++)t[n].remove();break;case"html":case"head":case"body":O(!1)}this.unmountChildren(e),P.uncacheNode(this),b.deleteAllListeners(this),x.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._domID=null,this._wrapperState=null},getPublicInstance:function(){return F(this)}},d(p.prototype,p.Mixin,R.Mixin),t.exports=p},{1:1,10:10,11:11,115:115,129:129,138:138,146:146,154:154,158:158,16:16,163:163,164:164,165:165,17:17,18:18,27:27,32:32,37:37,39:39,4:4,40:40,47:47,49:49,50:50,54:54,70:70,73:73,8:8,87:87,9:9}],39:[function(e,t,n){"use strict";var r={hasCachedChildNodes:1};t.exports=r},{}],40:[function(e,t,n){"use strict";function r(e){for(var t;t=e._renderedComponent;)e=t;return e}function o(e,t){var n=r(e);n._nativeNode=t,t[v]=n}function i(e){var t=e._nativeNode;t&&(delete t[v],e._nativeNode=null)}function a(e,t){if(!(e._flags&h.hasCachedChildNodes)){var n=e._renderedChildren,i=t.firstChild;e:for(var a in n)if(n.hasOwnProperty(a)){var u=n[a],s=r(u)._domID;if(null!=s){for(;null!==i;i=i.nextSibling)if(1===i.nodeType&&i.getAttribute(f)===String(s)||8===i.nodeType&&i.nodeValue===" react-text: "+s+" "||8===i.nodeType&&i.nodeValue===" react-empty: "+s+" "){o(u,i);continue e}d(!1)}}e._flags|=h.hasCachedChildNodes}}function u(e){if(e[v])return e[v];for(var t=[];!e[v];){if(t.push(e),!e.parentNode)return null;e=e.parentNode}for(var n,r;e&&(r=e[v]);e=t.pop())n=r,t.length&&a(r,e);return n}function s(e){var t=u(e);return null!=t&&t._nativeNode===e?t:null}function l(e){if(void 0===e._nativeNode?d(!1):void 0,e._nativeNode)return e._nativeNode;for(var t=[];!e._nativeNode;)t.push(e),e._nativeParent?void 0:d(!1),e=e._nativeParent;for(;t.length;e=t.pop())a(e,e._nativeNode);return e._nativeNode}var c=e(10),p=e(39),d=e(154),f=c.ID_ATTRIBUTE_NAME,h=p,v="__reactInternalInstance$"+Math.random().toString(36).slice(2),m={getClosestInstanceFromNode:u,getInstanceFromNode:s,getNodeFromInstance:l,precacheChildNodes:a,precacheNode:o,uncacheNode:i};t.exports=m},{10:10,154:154,39:39}],41:[function(e,t,n){"use strict";function r(e,t){var n={_topLevelWrapper:e,_idCounter:1,_ownerDocument:t?t.nodeType===o?t:t.ownerDocument:null,_node:t,_tag:t?t.nodeName.toLowerCase():null,_namespaceURI:t?t.namespaceURI:null};return n}var o=(e(138),9);t.exports=r},{138:138}],42:[function(e,t,n){"use strict";function r(e,t,n,r,o,i){}var o=e(56),i=(e(164),[]),a={addDevtool:function(e){i.push(e)},removeDevtool:function(e){for(var t=0;t<i.length;t++)i[t]===e&&(i.splice(t,1),t--)},onCreateMarkupForProperty:function(e,t){r("onCreateMarkupForProperty",e,t)},onSetValueForProperty:function(e,t,n){r("onSetValueForProperty",e,t,n)},onDeleteValueForProperty:function(e,t){r("onDeleteValueForProperty",e,t)}};a.addDevtool(o),t.exports=a},{164:164,56:56}],43:[function(e,t,n){"use strict";var r=e(165),o=e(8),i=e(40),a=function(e){this._currentElement=null,this._nativeNode=null,this._nativeParent=null,this._nativeContainerInfo=null,this._domID=null};r(a.prototype,{mountComponent:function(e,t,n,r){var a=n._idCounter++;this._domID=a,this._nativeParent=t,this._nativeContainerInfo=n;var u=" react-empty: "+this._domID+" ";if(e.useCreateElement){var s=n._ownerDocument,l=s.createComment(u);return i.precacheNode(this,l),o(l)}return e.renderToStaticMarkup?"":"<!--"+u+"-->"},receiveComponent:function(){},getNativeNode:function(){return i.getNodeFromInstance(this)},unmountComponent:function(){i.uncacheNode(this)}}),t.exports=a},{165:165,40:40,8:8}],44:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(60),i=(e(61),e(159)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",
	b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{159:159,60:60,61:61}],45:[function(e,t,n){"use strict";var r={useCreateElement:!0};t.exports=r},{}],46:[function(e,t,n){"use strict";var r=e(7),o=e(40),i={dangerouslyProcessChildrenUpdates:function(e,t){var n=o.getNodeFromInstance(e);r.processUpdates(n,t)}};t.exports=i},{40:40,7:7}],47:[function(e,t,n){"use strict";function r(){this._rootNodeID&&d.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=s.executeOnChange(t,e);c.asap(r,this);var o=t.name;if("radio"===t.type&&null!=o){for(var i=l.getNodeFromInstance(this),a=i;a.parentNode;)a=a.parentNode;for(var u=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),d=0;d<u.length;d++){var f=u[d];if(f!==i&&f.form===i.form){var h=l.getInstanceFromNode(f);h?void 0:p(!1),c.asap(r,h)}}}return n}var i=e(165),a=e(14),u=e(11),s=e(24),l=e(40),c=e(90),p=e(154),d=(e(164),{getNativeProps:function(e,t){var n=s.getValue(t),r=s.getChecked(t),o=i({type:void 0},a.getNativeProps(e,t),{defaultChecked:void 0,defaultValue:void 0,value:null!=n?n:e._wrapperState.initialValue,checked:null!=r?r:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange});return o},mountWrapper:function(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:t.defaultChecked||!1,initialValue:null!=n?n:null,listeners:null,onChange:o.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=t.checked;null!=n&&u.setValueForProperty(l.getNodeFromInstance(e),"checked",n||!1);var r=s.getValue(t);null!=r&&u.setValueForProperty(l.getNodeFromInstance(e),"value",""+r)}});t.exports=d},{11:11,14:14,154:154,164:164,165:165,24:24,40:40,90:90}],48:[function(e,t,n){"use strict";var r=e(42);t.exports={debugTool:r}},{42:42}],49:[function(e,t,n){"use strict";var r=e(165),o=e(29),i=e(40),a=e(50),u=(e(164),{mountWrapper:function(e,t,n){var r=null;if(null!=n){var o=n;"optgroup"===o._tag&&(o=o._nativeParent),null!=o&&"select"===o._tag&&(r=a.getSelectValueContext(o))}var i=null;if(null!=r)if(i=!1,Array.isArray(r)){for(var u=0;u<r.length;u++)if(""+r[u]==""+t.value){i=!0;break}}else i=""+r==""+t.value;e._wrapperState={selected:i}},postMountWrapper:function(e){var t=e._currentElement.props;if(null!=t.value){var n=i.getNodeFromInstance(e);n.setAttribute("value",t.value)}},getNativeProps:function(e,t){var n=r({selected:void 0,children:void 0},t);null!=e._wrapperState.selected&&(n.selected=e._wrapperState.selected);var i="";return o.forEach(t.children,function(e){null!=e&&("string"!=typeof e&&"number"!=typeof e||(i+=e))}),i&&(n.children=i),n}});t.exports=u},{164:164,165:165,29:29,40:40,50:50}],50:[function(e,t,n){"use strict";function r(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=s.getValue(e);null!=t&&o(this,Boolean(e.multiple),t)}}function o(e,t,n){var r,o,i=l.getNodeFromInstance(e).options;if(t){for(r={},o=0;o<n.length;o++)r[""+n[o]]=!0;for(o=0;o<i.length;o++){var a=r.hasOwnProperty(i[o].value);i[o].selected!==a&&(i[o].selected=a)}}else{for(r=""+n,o=0;o<i.length;o++)if(i[o].value===r)return void(i[o].selected=!0);i.length&&(i[0].selected=!0)}}function i(e){var t=this._currentElement.props,n=s.executeOnChange(t,e);return this._rootNodeID&&(this._wrapperState.pendingUpdate=!0),c.asap(r,this),n}var a=e(165),u=e(14),s=e(24),l=e(40),c=e(90),p=(e(164),!1),d={getNativeProps:function(e,t){return a({},u.getNativeProps(e,t),{onChange:e._wrapperState.onChange,value:void 0})},mountWrapper:function(e,t){var n=s.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,listeners:null,onChange:i.bind(e),wasMultiple:Boolean(t.multiple)},void 0===t.value||void 0===t.defaultValue||p||(p=!0)},getSelectValueContext:function(e){return e._wrapperState.initialValue},postUpdateWrapper:function(e){var t=e._currentElement.props;e._wrapperState.initialValue=void 0;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var r=s.getValue(t);null!=r?(e._wrapperState.pendingUpdate=!1,o(e,Boolean(t.multiple),r)):n!==Boolean(t.multiple)&&(null!=t.defaultValue?o(e,Boolean(t.multiple),t.defaultValue):o(e,Boolean(t.multiple),t.multiple?[]:""))}};t.exports=d},{14:14,164:164,165:165,24:24,40:40,90:90}],51:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0);try{u.startContainer.nodeType,u.endContainer.nodeType}catch(s){return null}var l=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),c=l?0:u.toString().length,p=u.cloneRange();p.selectNodeContents(e),p.setEnd(u.startContainer,u.startOffset);var d=r(p.startContainer,p.startOffset,p.endContainer,p.endOffset),f=d?0:p.toString().length,h=f+c,v=document.createRange();v.setStart(n,o),v.setEnd(i,a);var m=v.collapsed;return{start:m?h:f,end:m?f:h}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();void 0===t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i=void 0===t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=l(e,o),s=l(e,i);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(140),l=e(125),c=e(126),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:u};t.exports=d},{125:125,126:126,140:140}],52:[function(e,t,n){"use strict";var r=e(59),o=e(86),i=e(91);r.inject();var a={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:i};t.exports=a},{59:59,86:86,91:91}],53:[function(e,t,n){"use strict";var r=e(165),o=e(7),i=e(8),a=e(40),u=(e(70),e(115)),s=e(154),l=(e(138),function(e){this._currentElement=e,this._stringText=""+e,this._nativeNode=null,this._nativeParent=null,this._domID=null,this._mountIndex=0,this._closingComment=null,this._commentNodes=null});r(l.prototype,{mountComponent:function(e,t,n,r){var o=n._idCounter++,s=" react-text: "+o+" ",l=" /react-text ";if(this._domID=o,this._nativeParent=t,e.useCreateElement){var c=n._ownerDocument,p=c.createComment(s),d=c.createComment(l),f=i(c.createDocumentFragment());return i.queueChild(f,i(p)),this._stringText&&i.queueChild(f,i(c.createTextNode(this._stringText))),i.queueChild(f,i(d)),a.precacheNode(this,p),this._closingComment=d,f}var h=u(this._stringText);return e.renderToStaticMarkup?h:"<!--"+s+"-->"+h+"<!--"+l+"-->"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;if(n!==this._stringText){this._stringText=n;var r=this.getNativeNode();o.replaceDelimitedText(r[0],r[1],n)}}},getNativeNode:function(){var e=this._commentNodes;if(e)return e;if(!this._closingComment)for(var t=a.getNodeFromInstance(this),n=t.nextSibling;;){if(null==n?s(!1):void 0,8===n.nodeType&&" /react-text "===n.nodeValue){this._closingComment=n;break}n=n.nextSibling}return e=[this._nativeNode,this._closingComment],this._commentNodes=e,e},unmountComponent:function(){this._closingComment=null,this._commentNodes=null,a.uncacheNode(this)}}),t.exports=l},{115:115,138:138,154:154,165:165,40:40,7:7,70:70,8:8}],54:[function(e,t,n){"use strict";function r(){this._rootNodeID&&d.updateWrapper(this)}function o(e){var t=this._currentElement.props,n=s.executeOnChange(t,e);return c.asap(r,this),n}var i=e(165),a=e(14),u=e(11),s=e(24),l=e(40),c=e(90),p=e(154),d=(e(164),{getNativeProps:function(e,t){null!=t.dangerouslySetInnerHTML?p(!1):void 0;var n=i({},a.getNativeProps(e,t),{defaultValue:void 0,value:void 0,children:e._wrapperState.initialValue,onChange:e._wrapperState.onChange});return n},mountWrapper:function(e,t){var n=t.defaultValue,r=t.children;null!=r&&(null!=n?p(!1):void 0,Array.isArray(r)&&(r.length<=1?void 0:p(!1),r=r[0]),n=""+r),null==n&&(n="");var i=s.getValue(t);e._wrapperState={initialValue:""+(null!=i?i:n),listeners:null,onChange:o.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=s.getValue(t);null!=n&&u.setValueForProperty(l.getNodeFromInstance(e),"value",""+n)}});t.exports=d},{11:11,14:14,154:154,164:164,165:165,24:24,40:40,90:90}],55:[function(e,t,n){"use strict";function r(e,t){"_nativeNode"in e?void 0:s(!1),"_nativeNode"in t?void 0:s(!1);for(var n=0,r=e;r;r=r._nativeParent)n++;for(var o=0,i=t;i;i=i._nativeParent)o++;for(;n-o>0;)e=e._nativeParent,n--;for(;o-n>0;)t=t._nativeParent,o--;for(var a=n;a--;){if(e===t)return e;e=e._nativeParent,t=t._nativeParent}return null}function o(e,t){"_nativeNode"in e?void 0:s(!1),"_nativeNode"in t?void 0:s(!1);for(;t;){if(t===e)return!0;t=t._nativeParent}return!1}function i(e){return"_nativeNode"in e?void 0:s(!1),e._nativeParent}function a(e,t,n){for(var r=[];e;)r.push(e),e=e._nativeParent;var o;for(o=r.length;o-- >0;)t(r[o],!1,n);for(o=0;o<r.length;o++)t(r[o],!0,n)}function u(e,t,n,o,i){for(var a=e&&t?r(e,t):null,u=[];e&&e!==a;)u.push(e),e=e._nativeParent;for(var s=[];t&&t!==a;)s.push(t),t=t._nativeParent;var l;for(l=0;l<u.length;l++)n(u[l],!0,o);for(l=s.length;l-- >0;)n(s[l],!1,i)}var s=e(154);t.exports={isAncestor:o,getLowestCommonAncestor:r,getParentInstance:i,traverseTwoPhase:a,traverseEnterLeave:u}},{154:154}],56:[function(e,t,n){"use strict";var r,o=(e(10),e(18),e(164),{onCreateMarkupForProperty:function(e,t){r(e)},onSetValueForProperty:function(e,t,n){r(t)},onDeleteValueForProperty:function(e,t){r(t)}});t.exports=o},{10:10,164:164,18:18}],57:[function(e,t,n){"use strict";function r(e,t,n,r,o,i){}function o(e){}var i=(e(140),e(162),e(164),[]),a={addDevtool:function(e){i.push(e)},removeDevtool:function(e){for(var t=0;t<i.length;t++)i[t]===e&&(i.splice(t,1),t--)},beginProfiling:function(){},endProfiling:function(){},getFlushHistory:function(){},onBeginFlush:function(){r("onBeginFlush")},onEndFlush:function(){r("onEndFlush")},onBeginLifeCycleTimer:function(e,t){o(e),r("onBeginLifeCycleTimer",e,t)},onEndLifeCycleTimer:function(e,t){o(e),r("onEndLifeCycleTimer",e,t)},onBeginReconcilerTimer:function(e,t){o(e),r("onBeginReconcilerTimer",e,t)},onEndReconcilerTimer:function(e,t){o(e),r("onEndReconcilerTimer",e,t)},onBeginProcessingChildContext:function(){r("onBeginProcessingChildContext")},onEndProcessingChildContext:function(){r("onEndProcessingChildContext")},onNativeOperation:function(e,t,n){o(e),r("onNativeOperation",e,t,n)},onSetState:function(){r("onSetState")},onSetDisplayName:function(e,t){o(e),r("onSetDisplayName",e,t)},onSetChildren:function(e,t){o(e),r("onSetChildren",e,t)},onSetOwner:function(e,t){o(e),r("onSetOwner",e,t)},onSetText:function(e,t){o(e),r("onSetText",e,t)},onMountRootComponent:function(e){o(e),r("onMountRootComponent",e)},onMountComponent:function(e){o(e),r("onMountComponent",e)},onUpdateComponent:function(e){o(e),r("onUpdateComponent",e)},onUnmountComponent:function(e){o(e),r("onUnmountComponent",e)}};t.exports=a},{140:140,162:162,164:164}],58:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(165),i=e(90),a=e(108),u=e(146),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:i.flushBatchedUpdates.bind(i)},c=[l,s];o(r.prototype,a.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o,i){var a=d.isBatchingUpdates;d.isBatchingUpdates=!0,a?e(t,n,r,o,i):p.perform(e,null,t,n,r,o,i)}};t.exports=d},{108:108,146:146,165:165,90:90}],59:[function(e,t,n){"use strict";function r(){E||(E=!0,g.EventEmitter.injectReactEventListener(m),g.EventPluginHub.injectEventPluginOrder(a),g.EventPluginUtils.injectComponentTree(p),g.EventPluginUtils.injectTreeTraversal(f),g.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:_,EnterLeaveEventPlugin:u,ChangeEventPlugin:i,SelectEventPlugin:b,BeforeInputEventPlugin:o}),g.NativeComponent.injectGenericComponentClass(c),g.NativeComponent.injectTextComponentClass(h),g.DOMProperty.injectDOMPropertyConfig(s),g.DOMProperty.injectDOMPropertyConfig(C),g.EmptyComponent.injectEmptyComponentFactory(function(e){return new d(e)}),g.Updates.injectReconcileTransaction(y),g.Updates.injectBatchingStrategy(v),g.Component.injectEnvironment(l))}var o=e(2),i=e(6),a=e(13),u=e(15),s=e(22),l=e(32),c=e(38),p=e(40),d=e(43),f=e(55),h=e(53),v=e(58),m=e(65),g=e(67),y=e(82),C=e(92),b=e(93),_=e(94),E=!1;t.exports={inject:r}},{13:13,15:15,2:2,22:22,32:32,38:38,40:40,43:43,53:53,55:55,58:58,6:6,65:65,67:67,82:82,92:92,93:93,94:94}],60:[function(e,t,n){"use strict";var r=e(165),o=e(35),i=(e(164),e(112),"function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103),a={key:!0,ref:!0,__self:!0,__source:!0},u=function(e,t,n,r,o,a,u){var s={$$typeof:i,type:e,key:t,ref:n,props:u,_owner:a};return s};u.createElement=function(e,t,n){var r,i={},s=null,l=null,c=null,p=null;if(null!=t){l=void 0===t.ref?null:t.ref,s=void 0===t.key?null:""+t.key,c=void 0===t.__self?null:t.__self,p=void 0===t.__source?null:t.__source;for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(i[r]=t[r])}var d=arguments.length-2;if(1===d)i.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];i.children=f}if(e&&e.defaultProps){var v=e.defaultProps;for(r in v)void 0===i[r]&&(i[r]=v[r])}return u(e,s,l,c,p,o.current,i)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceKey=function(e,t){var n=u(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},u.cloneElement=function(e,t,n){var i,s=r({},e.props),l=e.key,c=e.ref,p=e._self,d=e._source,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=o.current),void 0!==t.key&&(l=""+t.key);var h;e.type&&e.type.defaultProps&&(h=e.type.defaultProps);for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(void 0===t[i]&&void 0!==h?s[i]=h[i]:s[i]=t[i])}var v=arguments.length-2;if(1===v)s.children=n;else if(v>1){for(var m=Array(v),g=0;v>g;g++)m[g]=arguments[g+2];s.children=m}return u(e.type,l,c,p,d,f,s)},u.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.exports=u},{112:112,164:164,165:165,35:35}],61:[function(e,t,n){"use strict";function r(){if(p.current){var e=p.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e,t){e._store&&!e._store.validated&&null==e.key&&(e._store.validated=!0,i("uniqueKey",e,t))}function i(e,t,n){var o=r();if(!o){var i="string"==typeof n?n:n.displayName||n.name;i&&(o=" Check the top-level render call using <"+i+">.")}var a=h[e]||(h[e]={});if(a[o])return null;a[o]=!0;var u={parentOrOwner:o,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==p.current&&(u.childOwner=" It was passed a child from "+t._owner.getName()+"."),u}function a(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];l.isValidElement(r)&&o(r,t)}else if(l.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var i=d(e);if(i&&i!==e.entries)for(var a,u=i.call(e);!(a=u.next()).done;)l.isValidElement(a.value)&&o(a.value,t)}}function u(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{"function"!=typeof t[i]?f(!1):void 0,a=t[i](n,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in v)&&(v[a.message]=!0,r())}}function s(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&u(n,t.propTypes,e.props,c.prop),"function"==typeof t.getDefaultProps}}var l=e(60),c=e(80),p=(e(79),e(35)),d=(e(112),e(123)),f=e(154),h=(e(164),{}),v={},m={createElement:function(e,t,n){var r="string"==typeof e||"function"==typeof e,o=l.createElement.apply(this,arguments);if(null==o)return o;if(r)for(var i=2;i<arguments.length;i++)a(arguments[i],e);return s(o),o},createFactory:function(e){var t=m.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=l.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)a(arguments[o],r.type);return s(r),r}};t.exports=m},{112:112,123:123,154:154,164:164,35:35,60:60,79:79,80:80}],62:[function(e,t,n){"use strict";var r,o={injectEmptyComponentFactory:function(e){r=e}},i={create:function(e){return r(e)}};i.injection=o,t.exports=i},{}],63:[function(e,t,n){"use strict";function r(e,t,n,r){try{return t(n,r)}catch(i){return void(null===o&&(o=i))}}var o=null,i={invokeGuardedCallback:r,invokeGuardedCallbackWithCatch:r,rethrowCaughtError:function(){if(o){var e=o;throw o=null,e}}};t.exports=i},{}],64:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue(!1)}var o=e(17),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{17:17}],65:[function(e,t,n){"use strict";function r(e){for(;e._nativeParent;)e=e._nativeParent;var t=p.getNodeFromInstance(e),n=t.parentNode;return p.getClosestInstanceFromNode(n)}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){var t=f(e.nativeEvent),n=p.getClosestInstanceFromNode(t),o=n;do e.ancestors.push(o),o=o&&r(o);while(o);for(var i=0;i<e.ancestors.length;i++)n=e.ancestors[i],v._handleTopLevel(e.topLevelType,n,e.nativeEvent,f(e.nativeEvent))}function a(e){var t=h(window);e(t)}var u=e(165),s=e(139),l=e(140),c=e(25),p=e(40),d=e(90),f=e(122),h=e(151);u(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),c.addPoolingTo(o,c.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:l.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?s.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?s.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);s.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{122:122,139:139,140:140,151:151,165:165,25:25,40:40,90:90}],66:[function(e,t,n){"use strict";var r={logTopLevelRenders:!1};t.exports=r},{}],67:[function(e,t,n){"use strict";var r=e(10),o=e(17),i=e(19),a=e(33),u=e(30),s=e(62),l=e(27),c=e(75),p=e(90),d={Component:a.injection,Class:u.injection,DOMProperty:r.injection,EmptyComponent:s.injection,EventPluginHub:o.injection,EventPluginUtils:i.injection,EventEmitter:l.injection,NativeComponent:c.injection,Updates:p.injection};t.exports=d},{10:10,17:17,19:19,27:27,30:30,33:33,62:62,75:75,90:90}],68:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(51),i=e(143),a=e(148),u=e(149),s={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if(void 0===r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{143:143,148:148,149:149,51:51}],69:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],70:[function(e,t,n){"use strict";var r=e(57);t.exports={debugTool:r}},{57:57}],71:[function(e,t,n){"use strict";var r=e(111),o=/\/?>/,i=/^<\!\-\-/,a={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return i.test(e)?e:e.replace(o," "+a.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},canReuseMarkup:function(e,t){var n=t.getAttribute(a.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var o=r(e);return o===n}};t.exports=a},{111:111}],72:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){return e?e.nodeType===D?e.documentElement:e.firstChild:null}function i(e){return e.getAttribute&&e.getAttribute(M)||""}function a(e,t,n,r,o){var i;if(C.logTopLevelRenders){var a=e._currentElement.props,u=a.type;i="React mount: "+("string"==typeof u?u:u.displayName||u.name),console.time(i)}var s=_.mountComponent(e,n,null,m(e,t),o);i&&console.timeEnd(i),e._renderedComponent._topLevelWrapper=e,U._mountImageIntoNode(s,t,e,r,n)}function u(e,t,n,r){var o=x.ReactReconcileTransaction.getPooled(!n&&g.useCreateElement);o.perform(a,null,e,t,o,n,r),x.ReactReconcileTransaction.release(o)}function s(e,t,n){for(_.unmountComponent(e,n),t.nodeType===D&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}function l(e){var t=o(e);if(t){var n=v.getInstanceFromNode(t);return!(!n||!n._nativeParent)}}function c(e){var t=o(e),n=t&&v.getInstanceFromNode(t);return n&&!n._nativeParent?n:null}function p(e){var t=c(e);return t?t._nativeContainerInfo._topLevelWrapper:null}var d=e(8),f=e(10),h=e(27),v=(e(35),e(40)),m=e(41),g=e(45),y=e(60),C=e(66),b=(e(70),e(71)),_=e(83),E=e(89),x=e(90),N=e(147),T=e(128),P=e(154),w=e(134),S=e(136),M=(e(164),f.ID_ATTRIBUTE_NAME),k=f.ROOT_ATTRIBUTE_NAME,R=1,D=9,I=11,O={},A=1,L=function(){this.rootID=A++};L.prototype.isReactComponent={},L.prototype.render=function(){return this.props};var U={TopLevelWrapper:L,_instancesByReactRootID:O,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return U.scrollMonitor(n,function(){E.enqueueElementInternal(e,t),r&&E.enqueueCallbackInternal(e,r)}),e},_renderNewRootComponent:function(e,t,n,r){!t||t.nodeType!==R&&t.nodeType!==D&&t.nodeType!==I?P(!1):void 0,h.ensureScrollValueMonitoring();var o=T(e);x.batchedUpdates(u,o,t,n,r);var i=o._instance.rootID;return O[i]=o,o},renderSubtreeIntoContainer:function(e,t,n,r){return null==e||null==e._reactInternalInstance?P(!1):void 0,U._renderSubtreeIntoContainer(e,t,n,r)},_renderSubtreeIntoContainer:function(e,t,n,r){E.validateCallback(r,"ReactDOM.render"),y.isValidElement(t)?void 0:P(!1);var a=y(L,null,null,null,null,null,t),u=p(n);if(u){var s=u._currentElement,c=s.props;if(S(c,t)){var d=u._renderedComponent.getPublicInstance(),f=r&&function(){r.call(d)};return U._updateRootComponent(u,a,n,f),d}U.unmountComponentAtNode(n)}var h=o(n),v=h&&!!i(h),m=l(n),g=v&&!u&&!m,C=U._renderNewRootComponent(a,n,g,null!=e?e._reactInternalInstance._processChildContext(e._reactInternalInstance._context):N)._renderedComponent.getPublicInstance();return r&&r.call(C),C},render:function(e,t,n){return U._renderSubtreeIntoContainer(null,e,t,n)},unmountComponentAtNode:function(e){!e||e.nodeType!==R&&e.nodeType!==D&&e.nodeType!==I?P(!1):void 0;var t=p(e);return t?(delete O[t._instance.rootID],x.batchedUpdates(s,t,e,!1),!0):(l(e),1===e.nodeType&&e.hasAttribute(k),!1)},_mountImageIntoNode:function(e,t,n,i,a){if(!t||t.nodeType!==R&&t.nodeType!==D&&t.nodeType!==I?P(!1):void 0,i){var u=o(t);if(b.canReuseMarkup(e,u))return void v.precacheNode(n,u);var s=u.getAttribute(b.CHECKSUM_ATTR_NAME);u.removeAttribute(b.CHECKSUM_ATTR_NAME);var l=u.outerHTML;u.setAttribute(b.CHECKSUM_ATTR_NAME,s);var c=e,p=r(c,l);" (client) "+c.substring(p-20,p+20)+"\n (server) "+l.substring(p-20,p+20),t.nodeType===D?P(!1):void 0}if(t.nodeType===D?P(!1):void 0,a.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);d.insertTreeBefore(t,e,null)}else w(t,e),v.precacheNode(n,t.firstChild)}};t.exports=U},{10:10,128:128,134:134,136:136,147:147,154:154,164:164,27:27,35:35,40:40,41:41,45:45,60:60,66:66,70:70,71:71,8:8,83:83,89:89,90:90}],73:[function(e,t,n){"use strict";function r(e,t,n){return{type:p.INSERT_MARKUP,content:e,fromIndex:null,fromNode:null,toIndex:n,afterNode:t}}function o(e,t,n){return{type:p.MOVE_EXISTING,content:null,fromIndex:e._mountIndex,fromNode:d.getNativeNode(e),toIndex:n,afterNode:t}}function i(e,t){return{type:p.REMOVE_NODE,content:null,fromIndex:e._mountIndex,fromNode:t,toIndex:null,afterNode:null}}function a(e){return{type:p.SET_MARKUP,content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}function u(e){return{type:p.TEXT_CONTENT,content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}function s(e,t){return t&&(e=e||[],e.push(t)),e}function l(e,t){c.processChildrenUpdates(e,t)}var c=e(33),p=(e(70),e(74)),d=(e(35),e(83)),f=e(28),h=(e(146),e(117)),v=e(154),m={Mixin:{_reconcilerInstantiateChildren:function(e,t,n){return f.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,r,o){var i;return i=h(t),f.updateChildren(e,i,n,r,o),i},mountChildren:function(e,t,n){var r=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=d.mountComponent(u,t,this,this._nativeContainerInfo,n);u._mountIndex=i++,o.push(s)}return o},updateTextContent:function(e){var t=this._renderedChildren;f.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&v(!1);var r=[u(e)];l(this,r)},updateMarkup:function(e){var t=this._renderedChildren;f.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&v(!1);var r=[a(e)];l(this,r)},updateChildren:function(e,t,n){this._updateChildren(e,t,n)},_updateChildren:function(e,t,n){var r=this._renderedChildren,o={},i=this._reconcilerUpdateChildren(r,e,o,t,n);if(i||r){var a,u=null,c=0,p=0,f=null;for(a in i)if(i.hasOwnProperty(a)){var h=r&&r[a],v=i[a];h===v?(u=s(u,this.moveChild(h,f,p,c)),c=Math.max(h._mountIndex,c),h._mountIndex=p):(h&&(c=Math.max(h._mountIndex,c)),u=s(u,this._mountChildAtIndex(v,f,p,t,n))),p++,f=d.getNativeNode(v)}for(a in o)o.hasOwnProperty(a)&&(u=s(u,this._unmountChild(r[a],o[a])));u&&l(this,u),this._renderedChildren=i}},unmountChildren:function(e){var t=this._renderedChildren;f.unmountChildren(t,e),this._renderedChildren=null},moveChild:function(e,t,n,r){return e._mountIndex<r?o(e,t,n):void 0},createChild:function(e,t,n){return r(n,t,e._mountIndex)},removeChild:function(e,t){return i(e,t)},_mountChildAtIndex:function(e,t,n,r,o){var i=d.mountComponent(e,r,this,this._nativeContainerInfo,o);return e._mountIndex=n,this.createChild(e,t,i)},_unmountChild:function(e,t){var n=this.removeChild(e,t);return e._mountIndex=null,n}}};t.exports=m},{117:117,146:146,154:154,28:28,33:33,35:35,70:70,74:74,83:83}],74:[function(e,t,n){"use strict";var r=e(157),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});t.exports=o},{157:157}],75:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return c?void 0:s(!1),new c(e)}function i(e){return new d(e)}function a(e){return e instanceof d}var u=e(165),s=e(154),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{154:154,165:165}],76:[function(e,t,n){"use strict";var r=e(60),o=e(154),i={NATIVE:0,COMPOSITE:1,EMPTY:2,getType:function(e){return null===e||e===!1?i.EMPTY:r.isValidElement(e)?"function"==typeof e.type?i.COMPOSITE:i.NATIVE:void o(!1)}};t.exports=i},{154:154,60:60}],77:[function(e,t,n){"use strict";function r(e,t){}var o=(e(164),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){r(e,"forceUpdate")},enqueueReplaceState:function(e,t){r(e,"replaceState")},enqueueSetState:function(e,t){r(e,"setState")}});t.exports=o},{164:164}],78:[function(e,t,n){"use strict";var r=e(154),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o.isValidOwner(n)?void 0:r(!1),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o.isValidOwner(n)?void 0:r(!1);var i=n.getPublicInstance();i&&i.refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{154:154}],79:[function(e,t,n){"use strict";var r={};t.exports=r},{}],80:[function(e,t,n){"use strict";var r=e(157),o=r({prop:null,context:null,childContext:null});t.exports=o},{157:157}],81:[function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function o(e){function t(t,n,r,o,i,a){if(o=o||x,a=a||r,null==n[r]){var u=b[i];return t?new Error("Required "+u+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function i(e){function t(t,n,r,o,i){var a=t[n],u=m(a);if(u!==e){var s=b[o],l=g(a);return new Error("Invalid "+s+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return o(t)}function a(){return o(_.thatReturns(null))}function u(e){function t(t,n,r,o,i){if("function"!=typeof e)return new Error("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){var u=b[o],s=m(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<a.length;l++){var c=e(a,l,r,o,i+"["+l+"]");if(c instanceof Error)return c}return null}return o(t)}function s(){function e(e,t,n,r,o){
	if(!C.isValidElement(e[t])){var i=b[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return o(e)}function l(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=b[o],u=e.name||x,s=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return o(t)}function c(e){function t(t,n,o,i,a){for(var u=t[n],s=0;s<e.length;s++)if(r(u,e[s]))return null;var l=b[i],c=JSON.stringify(e);return new Error("Invalid "+l+" `"+a+"` of value `"+u+"` "+("supplied to `"+o+"`, expected one of "+c+"."))}return o(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function p(e){function t(t,n,r,o,i){if("function"!=typeof e)return new Error("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],u=m(a);if("object"!==u){var s=b[o];return new Error("Invalid "+s+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an object."))}for(var l in a)if(a.hasOwnProperty(l)){var c=e(a,l,r,o,i+"."+l);if(c instanceof Error)return c}return null}return o(t)}function d(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var u=e[a];if(null==u(t,n,r,o,i))return null}var s=b[o];return new Error("Invalid "+s+" `"+i+"` supplied to "+("`"+r+"`."))}return o(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function f(){function e(e,t,n,r,o){if(!v(e[t])){var i=b[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return o(e)}function h(e){function t(t,n,r,o,i){var a=t[n],u=m(a);if("object"!==u){var s=b[o];return new Error("Invalid "+s+" `"+i+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var c=e[l];if(c){var p=c(a,l,r,o,i+"."+l);if(p)return p}}return null}return o(t)}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||C.isValidElement(e))return!0;var t=E(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function g(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:x}var C=e(60),b=e(79),_=e(146),E=e(123),x="<<anonymous>>",N={array:i("array"),bool:i("boolean"),func:i("function"),number:i("number"),object:i("object"),string:i("string"),any:a(),arrayOf:u,element:s(),instanceOf:l,node:f(),objectOf:p,oneOf:c,oneOfType:d,shape:h};t.exports=N},{123:123,146:146,60:60,79:79}],82:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=i.getPooled(null),this.useCreateElement=e}var o=e(165),i=e(5),a=e(25),u=e(27),s=e(68),l=e(108),c={initialize:s.getSelectionInformation,close:s.restoreSelection},p={initialize:function(){var e=u.isEnabled();return u.setEnabled(!1),e},close:function(e){u.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f=[c,p,d],h={getTransactionWrappers:function(){return f},getReactMountReady:function(){return this.reactMountReady},checkpoint:function(){return this.reactMountReady.checkpoint()},rollback:function(e){this.reactMountReady.rollback(e)},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null}};o(r.prototype,l.Mixin,h),a.addPoolingTo(r),t.exports=r},{108:108,165:165,25:25,27:27,5:5,68:68}],83:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(84),i=(e(70),e(154)),a={mountComponent:function(e,t,n,o,i){var a=e.mountComponent(t,n,o,i);return e._currentElement&&null!=e._currentElement.ref&&t.getReactMountReady().enqueue(r,e),a},getNativeNode:function(e){return e.getNativeNode()},unmountComponent:function(e,t){o.detachRefs(e,e._currentElement),e.unmountComponent(t)},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||i!==e._context){var u=o.shouldUpdateRefs(a,t);u&&o.detachRefs(e,a),e.receiveComponent(t,n,i),u&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t,n){return e._updateBatchNumber!==n?void(null!=e._updateBatchNumber&&e._updateBatchNumber!==n+1?i(!1):void 0):void e.performUpdateIfNecessary(t)}};t.exports=a},{154:154,70:70,84:84}],84:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(78),a={};a.attachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&r(n,e,t._owner)}},a.shouldUpdateRefs=function(e,t){var n=null===e||e===!1,r=null===t||t===!1;return n||r||t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&o(n,e,t._owner)}},t.exports=a},{78:78}],85:[function(e,t,n){"use strict";var r={isBatchingUpdates:!1,batchedUpdates:function(e){}};t.exports=r},{}],86:[function(e,t,n){"use strict";function r(e,t){var n;try{return f.injection.injectBatchingStrategy(p),n=d.getPooled(t),n.perform(function(){var r=v(e),o=c.mountComponent(r,n,null,a(),h);return t||(o=l.addChecksumToMarkup(o)),o},null)}finally{d.release(n),f.injection.injectBatchingStrategy(u)}}function o(e){return s.isValidElement(e)?void 0:m(!1),r(e,!1)}function i(e){return s.isValidElement(e)?void 0:m(!1),r(e,!0)}var a=e(41),u=e(58),s=e(60),l=(e(70),e(71)),c=e(83),p=e(85),d=e(87),f=e(90),h=e(147),v=e(128),m=e(154);t.exports={renderToString:o,renderToStaticMarkup:i}},{128:128,147:147,154:154,41:41,58:58,60:60,70:70,71:71,83:83,85:85,87:87,90:90}],87:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.useCreateElement=!1}var o=e(165),i=e(25),a=e(108),u=[],s={enqueue:function(){}},l={getTransactionWrappers:function(){return u},getReactMountReady:function(){return s},destructor:function(){},checkpoint:function(){},rollback:function(){}};o(r.prototype,a.Mixin,l),i.addPoolingTo(r),t.exports=r},{108:108,165:165,25:25}],88:[function(e,t,n){"use strict";var r=e(165),o=e(36),i=e(52),a=e(26),u=r({__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:o,__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:i},a);t.exports=u},{165:165,26:26,36:36,52:52}],89:[function(e,t,n){"use strict";function r(e){a.enqueueUpdate(e)}function o(e,t){var n=i.get(e);return n?n:null}var i=(e(35),e(69)),a=e(90),u=e(154),s=(e(164),{isMounted:function(e){var t=i.get(e);return t?!!t._renderedComponent:!1},enqueueCallback:function(e,t,n){s.validateCallback(t,n);var i=o(e);return i?(i._pendingCallbacks?i._pendingCallbacks.push(t):i._pendingCallbacks=[t],void r(i)):null},enqueueCallbackInternal:function(e,t){e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)},validateCallback:function(e,t){e&&"function"!=typeof e?u(!1):void 0}});t.exports=s},{154:154,164:164,35:35,69:69,90:90}],90:[function(e,t,n){"use strict";function r(){w.ReactReconcileTransaction&&_?void 0:m(!1)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=p.getPooled(),this.reconcileTransaction=w.ReactReconcileTransaction.getPooled(!0)}function i(e,t,n,o,i,a){r(),_.batchedUpdates(e,t,n,o,i,a)}function a(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;t!==g.length?m(!1):void 0,g.sort(a),y++;for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;r._pendingCallbacks=null;var i;if(f.logTopLevelRenders){var u=r;r._currentElement.props===r._renderedComponent._currentElement&&(u=r._renderedComponent),i="React update: "+u.getName(),console.time(i)}if(h.performUpdateIfNecessary(r,e.reconcileTransaction,y),i&&console.timeEnd(i),o)for(var s=0;s<o.length;s++)e.callbackQueue.enqueue(o[s],r.getPublicInstance())}}function s(e){return r(),_.isBatchingUpdates?(g.push(e),void(null==e._updateBatchNumber&&(e._updateBatchNumber=y+1))):void _.batchedUpdates(s,e)}function l(e,t){_.isBatchingUpdates?void 0:m(!1),C.enqueue(e,t),b=!0}var c=e(165),p=e(5),d=e(25),f=e(66),h=(e(70),e(83)),v=e(108),m=e(154),g=[],y=0,C=p.getPooled(),b=!1,_=null,E={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),T()):g.length=0}},x={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},N=[E,x];c(o.prototype,v.Mixin,{getTransactionWrappers:function(){return N},destructor:function(){this.dirtyComponentsLength=null,p.release(this.callbackQueue),this.callbackQueue=null,w.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return v.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),d.addPoolingTo(o);var T=function(){for(;g.length||b;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(b){b=!1;var t=C;C=p.getPooled(),t.notifyAll(),p.release(t)}}},P={injectReconcileTransaction:function(e){e?void 0:m(!1),w.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e?void 0:m(!1),"function"!=typeof e.batchedUpdates?m(!1):void 0,"boolean"!=typeof e.isBatchingUpdates?m(!1):void 0,_=e}},w={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:s,flushBatchedUpdates:T,injection:P,asap:l};t.exports=w},{108:108,154:154,165:165,25:25,5:5,66:66,70:70,83:83}],91:[function(e,t,n){"use strict";t.exports="15.1.0"},{}],92:[function(e,t,n){"use strict";var r={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},o={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering","in":0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},i={Properties:{},DOMAttributeNamespaces:{xlinkActuate:r.xlink,xlinkArcrole:r.xlink,xlinkHref:r.xlink,xlinkRole:r.xlink,xlinkShow:r.xlink,xlinkTitle:r.xlink,xlinkType:r.xlink,xmlBase:r.xml,xmlLang:r.xml,xmlSpace:r.xml},DOMAttributeNames:{}};Object.keys(o).forEach(function(e){i.Properties[e]=0,o[e]&&(i.DOMAttributeNames[e]=o[e])}),t.exports=i},{}],93:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&l.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e,t){if(_||null==y||y!==p())return null;var n=r(y);if(!b||!h(b,n)){b=n;var o=c.getPooled(g.select,C,e,t);return o.type="select",o.target=y,a.accumulateTwoPhaseDispatches(o),o}return null}var i=e(16),a=e(20),u=e(140),s=e(40),l=e(68),c=e(99),p=e(149),d=e(130),f=e(158),h=e(163),v=i.topLevelTypes,m=u.canUseDOM&&"documentMode"in document&&document.documentMode<=11,g={select:{phasedRegistrationNames:{bubbled:f({onSelect:null}),captured:f({onSelectCapture:null})},dependencies:[v.topBlur,v.topContextMenu,v.topFocus,v.topKeyDown,v.topMouseDown,v.topMouseUp,v.topSelectionChange]}},y=null,C=null,b=null,_=!1,E=!1,x=f({onSelect:null}),N={eventTypes:g,extractEvents:function(e,t,n,r){if(!E)return null;var i=t?s.getNodeFromInstance(t):window;switch(e){case v.topFocus:(d(i)||"true"===i.contentEditable)&&(y=i,C=t,b=null);break;case v.topBlur:y=null,C=null,b=null;break;case v.topMouseDown:_=!0;break;case v.topContextMenu:case v.topMouseUp:return _=!1,o(n,r);case v.topSelectionChange:if(m)break;case v.topKeyDown:case v.topKeyUp:return o(n,r)}return null},didPutListener:function(e,t,n){t===x&&(E=!0)}};t.exports=N},{130:130,140:140,149:149,158:158,16:16,163:163,20:20,40:40,68:68,99:99}],94:[function(e,t,n){"use strict";var r=e(16),o=e(139),i=e(20),a=e(40),u=e(95),s=e(96),l=e(99),c=e(100),p=e(102),d=e(103),f=e(98),h=e(104),v=e(105),m=e(106),g=e(107),y=e(146),C=e(119),b=e(154),_=e(158),E=r.topLevelTypes,x={abort:{phasedRegistrationNames:{bubbled:_({onAbort:!0}),captured:_({onAbortCapture:!0})}},animationEnd:{phasedRegistrationNames:{bubbled:_({onAnimationEnd:!0}),captured:_({onAnimationEndCapture:!0})}},animationIteration:{phasedRegistrationNames:{bubbled:_({onAnimationIteration:!0}),captured:_({onAnimationIterationCapture:!0})}},animationStart:{phasedRegistrationNames:{bubbled:_({onAnimationStart:!0}),captured:_({onAnimationStartCapture:!0})}},blur:{phasedRegistrationNames:{bubbled:_({onBlur:!0}),captured:_({onBlurCapture:!0})}},canPlay:{phasedRegistrationNames:{bubbled:_({onCanPlay:!0}),captured:_({onCanPlayCapture:!0})}},canPlayThrough:{phasedRegistrationNames:{bubbled:_({onCanPlayThrough:!0}),captured:_({onCanPlayThroughCapture:!0})}},click:{phasedRegistrationNames:{bubbled:_({onClick:!0}),captured:_({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:_({onContextMenu:!0}),captured:_({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:_({onCopy:!0}),captured:_({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:_({onCut:!0}),captured:_({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:_({onDoubleClick:!0}),captured:_({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:_({onDrag:!0}),captured:_({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:_({onDragEnd:!0}),captured:_({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:_({onDragEnter:!0}),captured:_({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:_({onDragExit:!0}),captured:_({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:_({onDragLeave:!0}),captured:_({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:_({onDragOver:!0}),captured:_({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:_({onDragStart:!0}),captured:_({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:_({onDrop:!0}),captured:_({onDropCapture:!0})}},durationChange:{phasedRegistrationNames:{bubbled:_({onDurationChange:!0}),captured:_({onDurationChangeCapture:!0})}},emptied:{phasedRegistrationNames:{bubbled:_({onEmptied:!0}),captured:_({onEmptiedCapture:!0})}},encrypted:{phasedRegistrationNames:{bubbled:_({onEncrypted:!0}),captured:_({onEncryptedCapture:!0})}},ended:{phasedRegistrationNames:{bubbled:_({onEnded:!0}),captured:_({onEndedCapture:!0})}},error:{phasedRegistrationNames:{bubbled:_({onError:!0}),captured:_({onErrorCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:_({onFocus:!0}),captured:_({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:_({onInput:!0}),captured:_({onInputCapture:!0})}},invalid:{phasedRegistrationNames:{bubbled:_({onInvalid:!0}),captured:_({onInvalidCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:_({onKeyDown:!0}),captured:_({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:_({onKeyPress:!0}),captured:_({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:_({onKeyUp:!0}),captured:_({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:_({onLoad:!0}),captured:_({onLoadCapture:!0})}},loadedData:{phasedRegistrationNames:{bubbled:_({onLoadedData:!0}),captured:_({onLoadedDataCapture:!0})}},loadedMetadata:{phasedRegistrationNames:{bubbled:_({onLoadedMetadata:!0}),captured:_({onLoadedMetadataCapture:!0})}},loadStart:{phasedRegistrationNames:{bubbled:_({onLoadStart:!0}),captured:_({onLoadStartCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:_({onMouseDown:!0}),captured:_({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:_({onMouseMove:!0}),captured:_({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:_({onMouseOut:!0}),captured:_({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:_({onMouseOver:!0}),captured:_({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:_({onMouseUp:!0}),captured:_({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:_({onPaste:!0}),captured:_({onPasteCapture:!0})}},pause:{phasedRegistrationNames:{bubbled:_({onPause:!0}),captured:_({onPauseCapture:!0})}},play:{phasedRegistrationNames:{bubbled:_({onPlay:!0}),captured:_({onPlayCapture:!0})}},playing:{phasedRegistrationNames:{bubbled:_({onPlaying:!0}),captured:_({onPlayingCapture:!0})}},progress:{phasedRegistrationNames:{bubbled:_({onProgress:!0}),captured:_({onProgressCapture:!0})}},rateChange:{phasedRegistrationNames:{bubbled:_({onRateChange:!0}),captured:_({onRateChangeCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:_({onReset:!0}),captured:_({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:_({onScroll:!0}),captured:_({onScrollCapture:!0})}},seeked:{phasedRegistrationNames:{bubbled:_({onSeeked:!0}),captured:_({onSeekedCapture:!0})}},seeking:{phasedRegistrationNames:{bubbled:_({onSeeking:!0}),captured:_({onSeekingCapture:!0})}},stalled:{phasedRegistrationNames:{bubbled:_({onStalled:!0}),captured:_({onStalledCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:_({onSubmit:!0}),captured:_({onSubmitCapture:!0})}},suspend:{phasedRegistrationNames:{bubbled:_({onSuspend:!0}),captured:_({onSuspendCapture:!0})}},timeUpdate:{phasedRegistrationNames:{bubbled:_({onTimeUpdate:!0}),captured:_({onTimeUpdateCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:_({onTouchCancel:!0}),captured:_({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:_({onTouchEnd:!0}),captured:_({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:_({onTouchMove:!0}),captured:_({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:_({onTouchStart:!0}),captured:_({onTouchStartCapture:!0})}},transitionEnd:{phasedRegistrationNames:{bubbled:_({onTransitionEnd:!0}),captured:_({onTransitionEndCapture:!0})}},volumeChange:{phasedRegistrationNames:{bubbled:_({onVolumeChange:!0}),captured:_({onVolumeChangeCapture:!0})}},waiting:{phasedRegistrationNames:{bubbled:_({onWaiting:!0}),captured:_({onWaitingCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:_({onWheel:!0}),captured:_({onWheelCapture:!0})}}},N={topAbort:x.abort,topAnimationEnd:x.animationEnd,topAnimationIteration:x.animationIteration,topAnimationStart:x.animationStart,topBlur:x.blur,topCanPlay:x.canPlay,topCanPlayThrough:x.canPlayThrough,topClick:x.click,topContextMenu:x.contextMenu,topCopy:x.copy,topCut:x.cut,topDoubleClick:x.doubleClick,topDrag:x.drag,topDragEnd:x.dragEnd,topDragEnter:x.dragEnter,topDragExit:x.dragExit,topDragLeave:x.dragLeave,topDragOver:x.dragOver,topDragStart:x.dragStart,topDrop:x.drop,topDurationChange:x.durationChange,topEmptied:x.emptied,topEncrypted:x.encrypted,topEnded:x.ended,topError:x.error,topFocus:x.focus,topInput:x.input,topInvalid:x.invalid,topKeyDown:x.keyDown,topKeyPress:x.keyPress,topKeyUp:x.keyUp,topLoad:x.load,topLoadedData:x.loadedData,topLoadedMetadata:x.loadedMetadata,topLoadStart:x.loadStart,topMouseDown:x.mouseDown,topMouseMove:x.mouseMove,topMouseOut:x.mouseOut,topMouseOver:x.mouseOver,topMouseUp:x.mouseUp,topPaste:x.paste,topPause:x.pause,topPlay:x.play,topPlaying:x.playing,topProgress:x.progress,topRateChange:x.rateChange,topReset:x.reset,topScroll:x.scroll,topSeeked:x.seeked,topSeeking:x.seeking,topStalled:x.stalled,topSubmit:x.submit,topSuspend:x.suspend,topTimeUpdate:x.timeUpdate,topTouchCancel:x.touchCancel,topTouchEnd:x.touchEnd,topTouchMove:x.touchMove,topTouchStart:x.touchStart,topTransitionEnd:x.transitionEnd,topVolumeChange:x.volumeChange,topWaiting:x.waiting,topWheel:x.wheel};for(var T in N)N[T].dependencies=[T];var P=_({onClick:null}),w={},S={eventTypes:x,extractEvents:function(e,t,n,r){var o=N[e];if(!o)return null;var a;switch(e){case E.topAbort:case E.topCanPlay:case E.topCanPlayThrough:case E.topDurationChange:case E.topEmptied:case E.topEncrypted:case E.topEnded:case E.topError:case E.topInput:case E.topInvalid:case E.topLoad:case E.topLoadedData:case E.topLoadedMetadata:case E.topLoadStart:case E.topPause:case E.topPlay:case E.topPlaying:case E.topProgress:case E.topRateChange:case E.topReset:case E.topSeeked:case E.topSeeking:case E.topStalled:case E.topSubmit:case E.topSuspend:case E.topTimeUpdate:case E.topVolumeChange:case E.topWaiting:a=l;break;case E.topKeyPress:if(0===C(n))return null;case E.topKeyDown:case E.topKeyUp:a=p;break;case E.topBlur:case E.topFocus:a=c;break;case E.topClick:if(2===n.button)return null;case E.topContextMenu:case E.topDoubleClick:case E.topMouseDown:case E.topMouseMove:case E.topMouseOut:case E.topMouseOver:case E.topMouseUp:a=d;break;case E.topDrag:case E.topDragEnd:case E.topDragEnter:case E.topDragExit:case E.topDragLeave:case E.topDragOver:case E.topDragStart:case E.topDrop:a=f;break;case E.topTouchCancel:case E.topTouchEnd:case E.topTouchMove:case E.topTouchStart:a=h;break;case E.topAnimationEnd:case E.topAnimationIteration:case E.topAnimationStart:a=u;break;case E.topTransitionEnd:a=v;break;case E.topScroll:a=m;break;case E.topWheel:a=g;break;case E.topCopy:case E.topCut:case E.topPaste:a=s}a?void 0:b(!1);var y=a.getPooled(o,t,n,r);return i.accumulateTwoPhaseDispatches(y),y},didPutListener:function(e,t,n){if(t===P){var r=e._rootNodeID,i=a.getNodeFromInstance(e);w[r]||(w[r]=o.listen(i,"click",y))}},willDeleteListener:function(e,t){if(t===P){var n=e._rootNodeID;w[n].remove(),delete w[n]}}};t.exports=S},{100:100,102:102,103:103,104:104,105:105,106:106,107:107,119:119,139:139,146:146,154:154,158:158,16:16,20:20,40:40,95:95,96:96,98:98,99:99}],95:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i={animationName:null,elapsedTime:null,pseudoElement:null};o.augmentClass(r,i),t.exports=r},{99:99}],96:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{99:99}],97:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i={data:null};o.augmentClass(r,i),t.exports=r},{99:99}],98:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(103),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{103:103}],99:[function(e,t,n){"use strict";function r(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];u?this[i]=u(n):"target"===i?this.target=r:this[i]=n[i]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;return s?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse,this}var o=e(165),i=e(25),a=e(146),u=(e(164),"function"==typeof Proxy,["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"]),s={type:null,target:null,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue)},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;for(var n=0;n<u.length;n++)this[u[n]]=null}}),r.Interface=s,r.augmentClass=function(e,t){var n=this,r=function(){};r.prototype=n.prototype;var a=new r;o(a,e.prototype),e.prototype=a,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,i.addPoolingTo(e,i.fourArgumentPooler)},i.addPoolingTo(r,i.fourArgumentPooler),t.exports=r},{146:146,164:164,165:165,25:25}],100:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(106),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{106:106}],101:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i={data:null};o.augmentClass(r,i),t.exports=r},{99:99}],102:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(106),i=e(119),a=e(120),u=e(121),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{106:106,119:119,120:120,121:121}],103:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(106),i=e(109),a=e(121),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{106:106,109:109,121:121}],104:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(106),i=e(121),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{106:106,121:121}],105:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i={propertyName:null,elapsedTime:null,pseudoElement:null};o.augmentClass(r,i),t.exports=r},{99:99}],106:[function(e,t,n){"use strict";function r(e,t,n,r){return o.call(this,e,t,n,r)}var o=e(99),i=e(122),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{122:122,99:99}],107:[function(e,t,n){"use strict";function r(e,t,n,r){
	return o.call(this,e,t,n,r)}var o=e(103),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{103:103}],108:[function(e,t,n){"use strict";var r=e(154),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,u,s){this.isInTransaction()?r(!1):void 0;var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){this.isInTransaction()?void 0:r(!1);for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],u=this.wrapperInitData[n];try{o=!0,u!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{154:154}],109:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],110:[function(e,t,n){"use strict";function r(e,t){if(null==t?o(!1):void 0,null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(154);t.exports=r},{154:154}],111:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0,i=e.length,a=-4&i;a>r;){for(var u=Math.min(r+4096,a);u>r;r+=4)n+=(t+=e.charCodeAt(r))+(t+=e.charCodeAt(r+1))+(t+=e.charCodeAt(r+2))+(t+=e.charCodeAt(r+3));t%=o,n%=o}for(;i>r;r++)n+=t+=e.charCodeAt(r);return t%=o,n%=o,t|n<<16}var o=65521;t.exports=r},{}],112:[function(e,t,n){"use strict";var r=!1;t.exports=r},{}],113:[function(e,t,n){"use strict";var r=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e};t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e,t,n){var r=null==t||"boolean"==typeof t||""===t;if(r)return"";var o=isNaN(t);return o||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(3),i=(e(164),o.isUnitlessNumber);t.exports=r},{164:164,3:3}],115:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],116:[function(e,t,n){"use strict";function r(e){if(null==e)return null;if(1===e.nodeType)return e;var t=i.get(e);return t?(t=a(t),t?o.getNodeFromInstance(t):null):void u(("function"==typeof e.render,!1))}var o=(e(35),e(40)),i=e(69),a=e(124),u=e(154);e(164);t.exports=r},{124:124,154:154,164:164,35:35,40:40,69:69}],117:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=void 0===r[n];o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}var i=(e(23),e(137));e(164);t.exports=o},{137:137,164:164,23:23}],118:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],119:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],120:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(119),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{119:119}],121:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],122:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}t.exports=r},{}],123:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],124:[function(e,t,n){"use strict";function r(e){for(var t;(t=e._renderedNodeType)===o.COMPOSITE;)e=e._renderedComponent;return t===o.NATIVE?e._renderedComponent:t===o.EMPTY?null:void 0}var o=e(76);t.exports=r},{76:76}],125:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],126:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(140),i=null;t.exports=r},{140:140}],127:[function(e,t,n){"use strict";function r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function o(e){if(u[e])return u[e];if(!a[e])return e;var t=a[e];for(var n in t)if(t.hasOwnProperty(n)&&n in s)return u[e]=t[n];return""}var i=e(140),a={animationend:r("Animation","AnimationEnd"),animationiteration:r("Animation","AnimationIteration"),animationstart:r("Animation","AnimationStart"),transitionend:r("Transition","TransitionEnd")},u={},s={};i.canUseDOM&&(s=document.createElement("div").style,"AnimationEvent"in window||(delete a.animationend.animation,delete a.animationiteration.animation,delete a.animationstart.animation),"TransitionEvent"in window||delete a.transitionend.transition),t.exports=o},{140:140}],128:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e){var t,n=null===e||e===!1;if(n)t=u.create(o);else if("object"==typeof e){var i=e;!i||"function"!=typeof i.type&&"string"!=typeof i.type?l(!1):void 0,t="string"==typeof i.type?s.createInternalComponent(i):r(i.type)?new i.type(i):new c(i)}else"string"==typeof e||"number"==typeof e?t=s.createInstanceForText(e):l(!1);return t._mountIndex=0,t._mountImage=null,t}var i=e(165),a=e(34),u=e(62),s=e(75),l=(e(70),e(154)),c=(e(164),function(e){this.construct(e)});i(c.prototype,a.Mixin,{_instantiateReactComponent:o});t.exports=o},{154:154,164:164,165:165,34:34,62:62,70:70,75:75}],129:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(140);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{140:140}],130:[function(e,t,n){"use strict";function r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&o[e.type]||"textarea"===t)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],131:[function(e,t,n){"use strict";function r(e){return o.isValidElement(e)?void 0:i(!1),e}var o=e(60),i=e(154);t.exports=r},{154:154,60:60}],132:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(115);t.exports=r},{115:115}],133:[function(e,t,n){"use strict";var r=e(72);t.exports=r.renderSubtreeIntoContainer},{72:72}],134:[function(e,t,n){"use strict";var r=e(140),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=e(113),u=a(function(e,t){e.innerHTML=t});if(r.canUseDOM){var s=document.createElement("div");s.innerHTML=" ",""===s.innerHTML&&(u=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML=String.fromCharCode(65279)+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t}),s=null}t.exports=u},{113:113,140:140}],135:[function(e,t,n){"use strict";var r=e(140),o=e(115),i=e(134),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{115:115,134:134,140:140}],136:[function(e,t,n){"use strict";function r(e,t){var n=null===e||e===!1,r=null===t||t===!1;if(n||r)return n===r;var o=typeof e,i=typeof t;return"string"===o||"number"===o?"string"===i||"number"===i:"object"===i&&e.type===t.type&&e.key===t.key}t.exports=r},{}],137:[function(e,t,n){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?l.escape(e.key):t.toString(36)}function o(e,t,n,i){var d=typeof e;if("undefined"!==d&&"boolean"!==d||(e=null),null===e||"string"===d||"number"===d||a.isValidElement(e))return n(i,e,""===t?c+r(e,0):t),1;var f,h,v=0,m=""===t?c:t+p;if(Array.isArray(e))for(var g=0;g<e.length;g++)f=e[g],h=m+r(f,g),v+=o(f,h,n,i);else{var y=u(e);if(y){var C,b=y.call(e);if(y!==e.entries)for(var _=0;!(C=b.next()).done;)f=C.value,h=m+r(f,_++),v+=o(f,h,n,i);else for(;!(C=b.next()).done;){var E=C.value;E&&(f=E[1],h=m+l.escape(E[0])+p+r(f,0),v+=o(f,h,n,i))}}else"object"===d&&(String(e),s(!1))}return v}function i(e,t,n){return null==e?0:o(e,"",t,n)}var a=(e(35),e(60)),u=e(123),s=e(154),l=e(23),c=(e(164),"."),p=":";t.exports=i},{123:123,154:154,164:164,23:23,35:35,60:60}],138:[function(e,t,n){"use strict";var r=(e(165),e(146)),o=(e(164),r);t.exports=o},{146:146,164:164,165:165}],139:[function(e,t,n){"use strict";var r=e(146),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{146:146}],140:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],141:[function(e,t,n){"use strict";function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],142:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(141),i=/^-ms-/;t.exports=r},{141:141}],143:[function(e,t,n){"use strict";function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(156);t.exports=r},{156:156}],144:[function(e,t,n){"use strict";function r(e){var t=e.length;if(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e?a(!1):void 0,"number"!=typeof t?a(!1):void 0,0===t||t-1 in e?void 0:a(!1),"function"==typeof e.callee?a(!1):void 0,e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),o=0;t>o;o++)r[o]=e[o];return r}function o(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function i(e){return o(e)?Array.isArray(e)?e.slice():r(e):[e]}var a=e(154);t.exports=i},{154:154}],145:[function(e,t,n){"use strict";function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;l?void 0:s(!1);var o=r(e),i=o&&u(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(t?void 0:s(!1),a(p).forEach(t));for(var d=Array.from(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(140),a=e(144),u=e(150),s=e(154),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{140:140,144:144,150:150,154:154}],146:[function(e,t,n){"use strict";function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],147:[function(e,t,n){"use strict";var r={};t.exports=r},{}],148:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],149:[function(e,t,n){"use strict";function r(){if("undefined"==typeof document)return null;try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],150:[function(e,t,n){"use strict";function r(e){return a?void 0:i(!1),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",u[e]=!a.firstChild),u[e]?d[e]:null}var o=e(140),i=e(154),a=o.canUseDOM?document.createElement("div"):null,u={},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c},f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(e){d[e]=p,u[e]=!0}),t.exports=r},{140:140,154:154}],151:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],152:[function(e,t,n){"use strict";function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],153:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(152),i=/^ms-/;t.exports=r},{152:152}],154:[function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error(t.replace(/%s/g,function(){return l[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}t.exports=r},{}],155:[function(e,t,n){"use strict";function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],156:[function(e,t,n){"use strict";function r(e){return o(e)&&3==e.nodeType}var o=e(155);t.exports=r},{155:155}],157:[function(e,t,n){"use strict";var r=e(154),o=function(e){var t,n={};e instanceof Object&&!Array.isArray(e)?void 0:r(!1);for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{154:154}],158:[function(e,t,n){"use strict";var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],159:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],160:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],161:[function(e,t,n){"use strict";var r,o=e(140);o.canUseDOM&&(r=window.performance||window.msPerformance||window.webkitPerformance),t.exports=r||{}},{140:140}],162:[function(e,t,n){"use strict";var r,o=e(161);r=o.now?function(){return o.now()}:function(){return Date.now()},t.exports=r},{161:161}],163:[function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function o(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!i.call(t,n[a])||!r(e[n[a]],t[n[a]]))return!1;return!0}var i=Object.prototype.hasOwnProperty;t.exports=o},{}],164:[function(e,t,n){"use strict";var r=e(146),o=r;t.exports=o},{146:146}],165:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;10>n;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}var i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(e,t){for(var n,o,u=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var l in n)i.call(n,l)&&(u[l]=n[l]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(n);for(var c=0;c<o.length;c++)a.call(n,o[c])&&(u[o[c]]=n[o[c]])}}return u}},{}]},{},[88])(88)});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(101);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(266);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(265);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(60);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(60);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(368);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(369);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(264);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(116)('wks')
	  , uid    = __webpack_require__(118)
	  , Symbol = __webpack_require__(15).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(70)('wks')
	  , uid        = __webpack_require__(45)
	  , Symbol     = __webpack_require__(17).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),i=r(o),u=n(7),c=r(u),f=n(6),a=r(f),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=i["default"],e.combineReducers=c["default"],e.bindActionCreators=a["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===h&&(b=h.slice())}function i(){return v}function c(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function s(t){if(!(0,u["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(x)throw Error("Reducers may not dispatch actions.");try{x=!0,v=y(v,t)}finally{x=!1}for(var e=h=b,n=0;e.length>n;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");y=t,s({type:a.INIT})}function l(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[f["default"]]=function(){return this},t}var p;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var y=t,v=e,h=[],b=h,x=!1;return s({type:a.INIT}),p={dispatch:s,subscribe:c,getState:i,replaceReducer:d},p[f["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(4),u=r(i),c=n(11),f=r(c),a=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!u(t)||l.call(t)!=c||i(t))return!1;var e=o(t);if(null===e)return!0;var n=s.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==d}var o=n(8),i=n(9),u=n(10),c="[object Object]",f=Object.prototype,a=Function.prototype.toString,s=f.hasOwnProperty,d=a.call(Object),l=f.toString;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),f=u.dispatch,a=[],s={getState:u.getState,dispatch:function(t){return f(t)}};return a=e.map(function(t){return t(s)}),f=c["default"].apply(void 0,a)(u.dispatch),i({},u,{dispatch:f})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var u=n(1),c=r(u)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;r.length>i;i++){var u=r[i],c=t[u];"function"==typeof c&&(o[u]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var u=e[r];"function"==typeof t[u]&&(n[u]=t[u])}var c,f=Object.keys(n);try{i(n)}catch(a){c=a}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,i={},u=0;f.length>u;u++){var a=f[u],s=n[a],d=t[a],l=s(d,e);if(void 0===l){var p=o(a,e);throw Error(p)}i[a]=l,r=r||l!==d}return r?i:t}}e.__esModule=!0,e["default"]=u;var c=n(2),f=n(4),a=(r(f),n(3));r(a)},function(t,e){function n(t){return r(Object(t))}var r=Object.getPrototypeOf;t.exports=n},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){(function(e){"use strict";t.exports=n(12)(e||window||this)}).call(e,function(){return this}())},function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e="function"==typeof n["for"]?n["for"]("observable"):n("observable"),n.observable=e):e="@@observable",e}}])});

/***/ },
/* 17 */
15,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(103)
	  , toPrimitive    = __webpack_require__(73)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (Object.prototype.hasOwnProperty.call(propTypes, propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error)  false ? (0, _routerWarning2.default)(false, error.message) : void 0;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(62)
	  , hide      = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(104)
	  , defined = __webpack_require__(63);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	   false ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(20);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(89);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(32);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(379);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(130);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(373);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(392);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(374);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(375);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(131);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(377);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(372);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(376);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(378);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(391);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(52);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(380);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(389);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(135);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(382);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(383);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(387);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(133);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(37);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(108)
	  , enumBugKeys = __webpack_require__(64);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(76);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(39)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 41 */
35,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.requestFail = exports.requestSuccess = exports.request = exports.REQUEST_FAIL = exports.REQUEST_SUCCESS = exports.REQUEST = undefined;

	var _util = __webpack_require__(57);

	var makeActionCreator = _util.util.makeActionCreator;

	var REQUEST = exports.REQUEST = 'REQUEST';
	var REQUEST_SUCCESS = exports.REQUEST_SUCCESS = 'REQUEST_SUCCESS';
	var REQUEST_FAIL = exports.REQUEST_FAIL = 'REQUEST_FAIL';

	var request = exports.request = makeActionCreator(REQUEST, 'loading');
	var requestSuccess = exports.requestSuccess = makeActionCreator(REQUEST_SUCCESS, 'loading');
	var requestFail = exports.requestFail = makeActionCreator(REQUEST_FAIL, 'loading');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _redux = __webpack_require__(16);

	var _TodoList = __webpack_require__(258);

	var _reduxUndo = __webpack_require__(146);

	var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

	var _MapStateToProps = __webpack_require__(257);

	var MapStateToProps = _interopRequireWildcard(_MapStateToProps);

	var _reduxApiMiddleware = __webpack_require__(260);

	var reduxApiMiddlewareReducers = _interopRequireWildcard(_reduxApiMiddleware);

	var _InjectActionCreatorsToComponentProps = __webpack_require__(254);

	var InjectActionCreatorsToComponentProps = _interopRequireWildcard(_InjectActionCreatorsToComponentProps);

	var _MapDispatchToProps = __webpack_require__(256);

	var MapDispatchToProps = _interopRequireWildcard(_MapDispatchToProps);

	var _ChangeStateTreeRefData = __webpack_require__(247);

	var ChangeStateTreeRefData = _interopRequireWildcard(_ChangeStateTreeRefData);

	var _scrollTop = __webpack_require__(261);

	var scrollTop = _interopRequireWildcard(_scrollTop);

	var _DefineReduxStateDataStructure = __webpack_require__(250);

	var DefineReduxStateDataStructure = _interopRequireWildcard(_DefineReduxStateDataStructure);

	var _InitReduxStateTreeDataInComponentWillMount = __webpack_require__(253);

	var InitReduxStateTreeDataInComponentWillMount = _interopRequireWildcard(_InitReduxStateTreeDataInComponentWillMount);

	var _AsyncActionInComponentWillReceiveProps = __webpack_require__(245);

	var AsyncActionInComponentWillReceiveProps = _interopRequireWildcard(_AsyncActionInComponentWillReceiveProps);

	var _common = __webpack_require__(259);

	var common = _interopRequireWildcard(_common);

	var _FileIO = __webpack_require__(252);

	var FileIO = _interopRequireWildcard(_FileIO);

	var _AutoComplete = __webpack_require__(246);

	var AutoComplete = _interopRequireWildcard(_AutoComplete);

	var _Es6ComponentInheritEs5Component = __webpack_require__(251);

	var Es6ComponentInheritEs5Component = _interopRequireWildcard(_Es6ComponentInheritEs5Component);

	var _CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction = __webpack_require__(248);

	var CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction = _interopRequireWildcard(_CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);

	var _ConnectMultipleNestedComponents = __webpack_require__(249);

	var ConnectMultipleNestedComponents = _interopRequireWildcard(_ConnectMultipleNestedComponents);

	var _InjectStateToEs5ComponentMixins = __webpack_require__(255);

	var InjectStateToEs5ComponentMixins = _interopRequireWildcard(_InjectStateToEs5ComponentMixins);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//通过combineReducers合成reducer后，state的数据结构就为{todos: [], visibilityFilter: ''}
	//传入combineReducers的对象的key名就是state对象的key名，combineReducers的对象的key对应的reducer函数名，可以与key名相同，也可以不同，
	//与key名相同的好处就是，在使用ES6语法的时候，如果一个对象的key和value相同，那么可以简写为{key},等同于es5的{key: key}

	//这里使用了redux-undo模块，用来实现action的undo,redo功能，使用之前的state的todos的数据结构是{todos: []}，
	//使用该模块后，它将数据结构转换为{todos: {future: [], history: {...}, present: [], past: []}}
	//这时候'todos'reducer操作的应该是present字段对应的数据

	// console.log(reactRedux01Reducers);
	var rootReducer = (0, _redux.combineReducers)((0, _extends3.default)({
		TodoList: _TodoList.TodoList
	}, ChangeStateTreeRefData, MapStateToProps, InjectActionCreatorsToComponentProps, MapDispatchToProps, reduxApiMiddlewareReducers, scrollTop, DefineReduxStateDataStructure, InitReduxStateTreeDataInComponentWillMount, AsyncActionInComponentWillReceiveProps, common, FileIO, AutoComplete, Es6ComponentInheritEs5Component, CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction, ConnectMultipleNestedComponents, InjectStateToEs5ComponentMixins));

	exports.default = rootReducer;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(78)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 47 */
34,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).setDesc
	  , has = __webpack_require__(79)
	  , TAG = __webpack_require__(11)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(113)
	  , defined = __webpack_require__(77);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(367);

	var _runTransitionHook = __webpack_require__(86);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(25);

	var _deprecate = __webpack_require__(85);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	       false ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	       false ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	       false ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(53);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(386);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(20);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	       false ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (false) {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ?  false ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (false) {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchCity = exports.fetchCityFail = exports.fetchCitySuccess = undefined;

	var _common = __webpack_require__(42);

	var fetchCitySuccess = exports.fetchCitySuccess = function fetchCitySuccess(data) {
	    return {
	        type: 'AAICWRP_fetchCitySuccess',
	        payload: {
	            data: data
	        }
	    };
	};

	var fetchCityFail = exports.fetchCityFail = function fetchCityFail(err) {
	    return {
	        type: 'AAICWRP_fetchCityFail',
	        payload: {
	            err: err
	        }
	    };
	};

	var fetchCity = exports.fetchCity = function fetchCity() {
	    return function (dispatch, getState) {
	        dispatch((0, _common.request)());
	        var cityMap = {
	            'shanghai': '上海',
	            'chengdu': '成都',
	            'beijing': '北京',
	            'New York': '纽约',
	            'taiwan': '台湾'
	        };
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve(cityMap);
	            }, 2000);
	        }).then(function (data) {
	            dispatch((0, _common.requestSuccess)());
	            dispatch(fetchCitySuccess(data));
	            return Promise.resolve(getState());
	        }).catch(function (err) {
	            dispatch((0, _common.requestFail)());
	            dispatch(fetchCityFail(err));
	            return Promise.reject(getState());
	        });
	    };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var UPDATE_MESSAGE = exports.UPDATE_MESSAGE = Symbol('updateMessage');

	var updateMessage = exports.updateMessage = function updateMessage(key, message) {
	    return {
	        type: UPDATE_MESSAGE,
	        payload: {
	            message: message,
	            key: key
	        }
	    };
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SELECT_CITY = exports.SELECT_CITY = 'SELECT_CITY';
	var REQUEST_CITY = exports.REQUEST_CITY = 'REQUEST_CITY';
	var RECEIVE_CITY = exports.RECEIVE_CITY = 'RECEIVE_CITY';
	var REQUEST_CITY_FAIL = exports.REQUEST_CITY_FAIL = 'REQUEST_CITY_FAIL';

	var selectCity = exports.selectCity = function selectCity(city) {
	    return { type: SELECT_CITY, city: city };
	};

	var requestCity = exports.requestCity = function requestCity(userId) {
	    return { type: REQUEST_CITY, userId: userId };
	};

	var receiveCity = exports.receiveCity = function receiveCity(cityList) {
	    return { type: RECEIVE_CITY, cityList: cityList };
	};

	var requestCityFail = exports.requestCityFail = function requestCityFail(err) {
	    return { type: REQUEST_CITY_FAIL, err: err };
	};

	var fetchCity = exports.fetchCity = function fetchCity(userId) {
	    // const url = './json/city.api.json';
	    var url = 'http://localhost:3000/city';

	    return function (dispatch) {
	        dispatch(requestCity(userId));

	        return fetch(url).then(function (res) {
	            return res.json();
	        }).then(function (data) {
	            var cityList = data.data;
	            dispatch(receiveCity(cityList));
	        }).catch(function (err) {
	            dispatch(requestCityFail(err));
	        });
	    };
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var util = exports.util = function (window, document) {

	    return {
	        openweatherApiHost: 'http://api.openweathermap.org/data/2.5',
	        openweatherApiKey: '2c36facc61cd4ec7543be24d6a7d0509',

	        getImgNaturalSize: function getImgNaturalSize(imageElement) {
	            var img = document.createElement('img');
	            var size = { width: '', height: '' };
	            if (typeof img.naturalWidth !== 'undefined') {
	                size.width = imageElement.naturalWidth;
	                size.height = imageElement.naturalHeight;
	            } else {
	                img.src = imageElement.src;
	                size.width = img.width;
	                size.height = img.height;
	            }
	            return size;
	        },

	        getTransitionEvent: function getTransitionEvent() {
	            var el = document.createElement('test');
	            var transitions = {
	                'transition': 'transitionend',
	                'OTransition': 'oTransitionEnd',
	                'MozTransition': 'transitionend',
	                'WebkitTransition': 'webkitTransitionEnd'
	            };

	            for (var t in transitions) {
	                if (typeof el.style[t] !== 'undefined') {
	                    return transitions[t];
	                }
	            }
	        },

	        makeActionCreator: function makeActionCreator(type) {
	            for (var _len = arguments.length, propertykeys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                propertykeys[_key - 1] = arguments[_key];
	            }

	            return function () {
	                for (var _len2 = arguments.length, propertyValues = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    propertyValues[_key2] = arguments[_key2];
	                }

	                var action = { type: type };
	                propertykeys.forEach(function (el, index) {
	                    action[propertykeys[index]] = propertyValues[index];
	                });
	                return action;
	            };
	        }
	    };
	}(window, document);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(101);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(263);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(268);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(267);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 61 */
38,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(276);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(292)
	  , enumBugKeys = __webpack_require__(64)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(102)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(282).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).f
	  , has = __webpack_require__(23)
	  , TAG = __webpack_require__(13)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(70)('keys')
	  , uid    = __webpack_require__(45);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(63);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(34);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(17)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(65)
	  , wksExt         = __webpack_require__(75)
	  , defineProperty = __webpack_require__(18).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(13);

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 77 */
63,
/* 78 */
33,
/* 79 */
23,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(9)
	  , createDesc = __webpack_require__(82);
	module.exports = __webpack_require__(46) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 81 */
65,
/* 82 */
37,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80);

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	     false ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     false ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ReactDOM v15.1.0
	 *
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	!function(e){if(true)module.exports=e(__webpack_require__(1));else if("function"==typeof define&&define.amd)define(["react"],e);else{var f;f="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,f.ReactDOM=e(f.React)}}(function(e){return e.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED});

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var _deprecateObjectProperties = __webpack_require__(53);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(26);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (false) {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (false) {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(31);

	var _computeChangedRoutes2 = __webpack_require__(384);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(381);

	var _isActive2 = __webpack_require__(388);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(385);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(390);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	       false ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and must return either a) a prompt message to show
	   * the user, to make sure they want to leave the page or b) false, to prevent
	   * the transition.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	         false ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	             false ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Symbol key that carries API call info interpreted by this Redux middleware.
	 *
	 * @constant {symbol}
	 * @access public
	 * @default
	 */
	'use strict';

	var _Symbol = __webpack_require__(142)['default'];

	exports.__esModule = true;
	var CALL_API = _Symbol('Call API');

	exports['default'] = CALL_API;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Error class for an RSAA that does not conform to the RSAA definition
	 *
	 * @class InvalidRSAA
	 * @access public
	 * @param {array} validationErrors - an array of validation errors
	 */
	'use strict';

	var _inherits = __webpack_require__(396)['default'];

	var _classCallCheck = __webpack_require__(395)['default'];

	exports.__esModule = true;

	var InvalidRSAA = (function (_Error) {
	  _inherits(InvalidRSAA, _Error);

	  function InvalidRSAA(validationErrors) {
	    _classCallCheck(this, InvalidRSAA);

	    _Error.call(this);
	    this.name = 'InvalidRSAA';
	    this.message = 'Invalid RSAA';
	    this.validationErrors = validationErrors;
	  }

	  /**
	   * Error class for a custom `payload` or `meta` function throwing
	   *
	   * @class InternalError
	   * @access public
	   * @param {string} message - the error message
	   */
	  return InvalidRSAA;
	})(Error);

	var InternalError = (function (_Error2) {
	  _inherits(InternalError, _Error2);

	  function InternalError(message) {
	    _classCallCheck(this, InternalError);

	    _Error2.call(this);
	    this.name = 'InternalError';
	    this.message = message;
	  }

	  /**
	   * Error class for an error raised trying to make an API call
	   *
	   * @class RequestError
	   * @access public
	   * @param {string} message - the error message
	   */
	  return InternalError;
	})(Error);

	var RequestError = (function (_Error3) {
	  _inherits(RequestError, _Error3);

	  function RequestError(message) {
	    _classCallCheck(this, RequestError);

	    _Error3.call(this);
	    this.name = 'RequestError';
	    this.message = message;
	  }

	  /**
	   * Error class for an API response outside the 200 range
	   *
	   * @class ApiError
	   * @access public
	   * @param {number} status - the status code of the API response
	   * @param {string} statusText - the status text of the API response
	   * @param {object} response - the parsed JSON response of the API server if the
	   *  'Content-Type' header signals a JSON response
	   */
	  return RequestError;
	})(Error);

	var ApiError = (function (_Error4) {
	  _inherits(ApiError, _Error4);

	  function ApiError(status, statusText, response) {
	    _classCallCheck(this, ApiError);

	    _Error4.call(this);
	    this.name = 'ApiError';
	    this.status = status;
	    this.statusText = statusText;
	    this.response = response;
	    this.message = status + ' - ' + statusText;
	  }

	  return ApiError;
	})(Error);

	exports.InvalidRSAA = InvalidRSAA;
	exports.InternalError = InternalError;
	exports.RequestError = RequestError;
	exports.ApiError = ApiError;

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 94 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by dulin on 16/7/29.
	 */
	var initState = exports.initState = function initState() {
	    return { type: 'InitReduxStateTreeDataInComponentWillMount_initState' };
	};

	var addPage = exports.addPage = function addPage(page) {
	    return { type: 'InitReduxStateTreeDataInComponentWillMount_addPage', page: page };
	};

	var deleteBook = exports.deleteBook = function deleteBook(index) {
	    return { type: 'InitReduxStateTreeDataInComponentWillMount_deleteBook', index: index };
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var LOGIN = exports.LOGIN = Symbol('login');

	var login = exports.login = function login(user) {
	    return {
	        type: LOGIN,
	        payload: {
	            user: user
	        }
	    };
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login = exports.requestCity = undefined;

	var _defineProperty2 = __webpack_require__(58);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _reduxApiMiddleware = __webpack_require__(136);

	var _common = __webpack_require__(42);

	var Action = _interopRequireWildcard(_common);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requestCity = exports.requestCity = function requestCity() {
	    var body = JSON.stringify({ userId: '12adfaefsa123123sddfs' });
	    return (0, _defineProperty3.default)({}, _reduxApiMiddleware.CALL_API, {
	        //endpoint 是接口地址，可以是字符串，也可以是一个函数，返回值是字符串
	        //下面是个找不到的接口地址，用来测试请求失败
	        // endpoint: ./json/cityMap.api.jso',

	        //字符串接口地址
	        // endpoint: './json/cityMap.api.json',

	        endpoint: function endpoint() {
	            return 'http://localhost:3000/v2/city';
	        },

	        //method 是http方法动词，字符串类型，这些动词必须是GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS中的一种
	        //这个http方法动词字符串可以是大小写字符任意组合，例如'get','Get','gEt'
	        method: 'get',

	        //types 必须是一个长度是3的数组，数组中每个元素数据类型必须是字符串，Symbol类型
	        types: [Action.REQUEST, Action.REQUEST_SUCCESS, Action.REQUEST_FAIL],

	        //body 我们通常称的接口调用的时候向服务器端发送的数据，通常，一般是encode过的json或者
	        // body: body

	        //http请求头
	        // headers: {'Content-Type': 'application/json'}

	        //credentials 请求时是否发送cookies
	        //`omit`默认值，不发送任何cookie
	        //`same-origin`只给当前域名发送cookies
	        //`include`始终发送cookies,即使是跨域请求
	        // credentials: 'include',

	        //有时候，一些你想请求的数据已经在redux的store中缓存了，或是当前用户没有足够的权限发送请求调用接口
	        //通过`[CALL_API].bailout`可以告诉`redux-api-middleware`不要取发送请求，如果`bailout`的值为true,则 RSAA会被销毁，没有FSA传入下一个中间件
	        //更好的使用方法是给`bailout`指定一个函数，运行时，该函数的唯一参数是redux的store中的state,可以用来进行一些逻辑处理。函数返回值是true，则不会发送请求。
	        bailout: function bailout(state) {
	            //这里的state是全局state
	            console.log('bailout', state);
	            // return true;
	        }
	    });
	};

	var login = exports.login = function login(formData) {
	    return (0, _defineProperty3.default)({}, _reduxApiMiddleware.CALL_API, {
	        endpoint: 'http://localhost:3000/login',
	        method: 'post',
	        types: ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAIL'],
	        body: formData
	    });
	};

	//RSAA的全称是Redux Standard API-calling Actions

	//* action没有`[CALL_API]`属性的会被直接传入下一个中间件，不做任何修改
	//* action有`[CALL_API]`属性的但是验证RSAA失败的，会得到一个FSA的错误对象

	//一个Redux Standard API-calling Actions必须符合：
	//* 是一个普通对象
	//* 有`[CALL_API]`属性

	//一个Redux Standard API-calling Actions禁止：
	//* 包含其他属性(只能是[CALL_API]属性)

	//`[CALL_API]`中必须有如下属性：
	//* 是一个普通对象
	//* 有endpoint属性
	//* 有method属性
	//* 有types属性

	//`[CALL_API]`中可以有如下属性：
	//* body属性
	//* headers属性
	//* credentials属性
	//* bailout属性

	//`[CALL_API]`中禁止：
	//* 包含除上述7种属性意外的其他属性

	//生命周期
	/*
	`[CALL_API].types`属性控制`redux-api-middware`的输出。最简单的形式是，types是由3个string类型或symbol类型的元素组成的一个数组。
	详细描述如下：

	1. 当`redux-api-middware`中间件接收到一个action，它会先检查这个action对象有没有`[CALL_API]`属性。如果没有，
	它不会处理这个action，只是将这个action传递给下一个中间件。

	2. 如果action有`[CALL_API]`属性，则开始进行RSAA验证。如果验证失败，一个FSA将被dipatch，带有如下属性：
	* `type`: `[CALL_API].types`数组第一个元素，如上例中的REQUEST常量
	* `payload`: 一个InvalidRSAA对象，包含一个验证错误列表
	* `error`: true

	验证失败后，`redux-api-middware`中间件不会再往下进行处理，不会创建API请求

	3. 如果action验证通过，也就是说这个action是一个标准的RSAA，中间件将会创建API请求，一个请求的FSA将会被dispatch，包含如下属性：

	* `type`: [CALL_API].types`数组第一个元素

	但是在这个阶段，也有可能抛出错误，几个原因：

	* 当`[CALL_API].bailout`，`[CALL_API].endpoint`,`[CALL_API].headers`这些被指定为函数的时候，这些函数内可能会抛出错误
	* `isomorphic-fetch`也可能会抛出错误，RSAA定义不足以杜绝任何错误，比如`[CALL_API].body`的值不是fetch specification中允许的json和formData的形式
	* 网络导致的错误

	当上述的错误发生时，不同的FSA将会被dispatch，包含如下属性：

	* `type`: [CALL_API].types`数组第一个元素
	* `payload`: 一个包含错误信息的`RequestError`对象
	* `error`: true

	4. 当中间件从服务器端接收到一个响应，并且status code 在200范围内，一个成功的FSA将会被dispatch，包含如下属性：
	* `type`: [CALL_API].types`数组第二个元素，上例中是REQUEST_SUCCESS
	* 'payload': 如果响应头的`Content-Type`设置为`json`，则是服务器端返回的解析后的json格式的数据，否则是undefined

	如果status code不在200范围，一个失败的FSA将会被dispatch，包含如下属性

	* `type`: [CALL_API].types`数组的最后一个元素
	* `payload`: 一个包含status和statusText的ApiError对象
	* `error`: true







	*/

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CountDown = function (_Component) {
	    (0, _inherits3.default)(CountDown, _Component);

	    function CountDown(props) {
	        (0, _classCallCheck3.default)(this, CountDown);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(CountDown).call(this, props));

	        _this.state = {
	            //服务器时间基准
	            start: Date.parse(new Date()),
	            //以服务器时间为基准的时间，随着倒计时，每次加1秒
	            now: new Date()
	        };

	        return _this;
	    }

	    (0, _createClass3.default)(CountDown, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.start && this.setState({
	                start: Date.parse(this.props.start),
	                now: this.props.start
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var scope = this;
	            this.interval = window.setInterval(function () {
	                scope.setState({
	                    now: new Date(scope.state.now.getTime() + 1000)
	                });
	            }, 1000);
	        }
	    }, {
	        key: '_clearInterval',
	        value: function _clearInterval() {
	            this.interval && window.clearInterval(this.interval);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._clearInterval();
	        }

	        /**
	         * 倒计时函数
	         *
	         * 1.距离秒杀开始倒计时： [开始时间点] = 系统时间， [结束时间点] = 秒杀开始时间点
	         *
	         * 2.距离本场结束倒计时： 举例，秒杀开始时间是10点，当前系统时间是11点，秒杀结束时间是11点30分，下一场秒杀开始时间是12点
	         *
	         * [开始时间点] ＝ 系统时间， ［结束时间点］＝ 秒杀结束时间点
	         *
	         * @param  {Date} endtime 倒计时结束时间点，以当前系统时间点为开始时间点
	         * @param  {int} period 倒计时结束还剩多少时间（毫秒），以当前系统时间点为开始时间点
	         * @return {Object} 返回天，时，分，秒，毫秒组成的对象
	         */

	    }, {
	        key: 'getTimeRemaining',
	        value: function getTimeRemaining(endtime, period) {
	            var _this2 = this;

	            // const nowSys = Date.parse(new Date());
	            var end = endtime ? Date.parse(endtime) : function () {
	                return _this2.state.start + period;
	            }();
	            var t = end - this.state.now;
	            var seconds = Math.floor(t / 1000 % 60);
	            var minutes = Math.floor(t / 1000 / 60 % 60);
	            var hours = Math.floor(t / (1000 * 60 * 60) % 24);
	            var days = Math.floor(t / (1000 * 60 * 60 * 24));
	            var newArr = [seconds, minutes, hours, days].map(function (el) {
	                if (el < 10) {
	                    el = '0' + el;
	                    return el;
	                }
	                return el + '';
	            });
	            return {
	                total: t,
	                seconds: newArr[0],
	                minutes: newArr[1],
	                hours: newArr[2],
	                days: newArr[3]
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // const countDown = this.state.countDown;
	            var countDown = this.getTimeRemaining(this.props.end);

	            console.count();

	            var style = {
	                container: {
	                    display: 'inline-block',
	                    marginLeft: '7px',
	                    verticalAlign: 'center'
	                },
	                countCell: {
	                    backgroundColor: '#000',
	                    width: '30px',
	                    height: '23px',
	                    color: '#fff',
	                    display: 'inline-block',
	                    textAlign: 'center',
	                    lineHeight: '23px',
	                    fontSize: '16px',
	                    fontFamily: 'SF UI Display',
	                    fontWeight: 'bold'
	                },
	                colon: {
	                    display: 'inline-block',
	                    width: '10px',
	                    textAlign: 'center'
	                }
	            };
	            return _react2.default.createElement(
	                'div',
	                { style: style.container, id: 'countDown' },
	                _react2.default.createElement(
	                    'span',
	                    { style: style.countCell },
	                    countDown.hours
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { style: style.colon },
	                    ':'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { style: style.countCell },
	                    countDown.minutes
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { style: style.colon },
	                    ':'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { style: style.countCell },
	                    countDown.seconds
	                )
	            );
	        }
	    }]);
	    return CountDown;
	}(_react.Component);

	;

	exports.default = CountDown;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    "items": {
	        "react": {
	            "function-bind": "函数绑定",
	            "react-component-with-es5-es6-es7-syntax": "ES5-ES6-ES7语法下React组件的各自写法",
	            "dynamic-inline-style": "动态设置行内样式",
	            "refs-to-component": "React组件的ref属性",
	            "stateless-functional-component": "React无状态组件",
	            "this-props-children": "React组件包含子元素探究——this.props.children",
	            "inherit-component": "React组件继承",
	            "set-children-react-element-style": "设置this.props.children遍历出的每个ReactElement的样式",
	            "insert-an-element-on-mouseover": "当鼠标悬浮在一个元素上时，插入一个元素",
	            "jsx-array-dom": "将JSX DOM放在数组中渲染",
	            "react-audioplayer": 'React实现简单的audio播放器',
	            "horizontal-scroll": "移动端常用的水平滚动",
	            "ajax-in-constructor": "在constructor中ajax",
	            "call-child-component-method": "在父组件中调用子组件的方法",
	            "pass-async-data-to-child-component": "组件获取异步数据更新问题",
	            "high-order-component": "高阶组件",
	            "react-filter-bar": "一个React实现的移动端常用的筛选条例子",
	            "composable-component": "复合组件",
	            'count-down': "一个React实现的倒计时例子",
	            'ios-scroll-event-block-js-thread': "移动端ios设备滚动事件阻塞JS线程",
	            "download-all": "一个React实现的\"下载全部\"的例子",
	            "loop-scroll": "一个React实现的水平无缝滚动例子",
	            "grab-child-component-state": "在父组件中获取子组件的state",
	            "create-iframe": "创建一个iframe",
	            "set-modal-window-position-on-input-focus": "移动端模态框中input聚焦虚拟键盘弹出后，重新设置模态框位置",
	            "mobile-input-focus-vistual-keybroad": "移动设备路由切换时设置input聚焦，唤起虚拟键盘",
	            "logical-operators": "逻辑运算符插值探究",
	            "static-method": "React组件中的静态方法",
	            "component-communication": "React组件通信",
	            "input-type-text": "React表单控件——input[type='text']",
	            "input-type-checkbox": "React表单控件——input[type='checkbox']",
	            "textarea": "React表单控件——textarea"
	        },
	        "react-router": {
	            'get-every-type-params': "获取路由url上的每个参数",
	            "router-will-leave": "路由跳转前确认",
	            "transition-to-all-ways": "路由跳转的N种方法"
	        },
	        "redux": {
	            'redux-beginning': 'redux初探',
	            'create-store-in-component-compare-with-connect-state': '在component中createStore，并与connect注入的store比较',
	            "check-data-in-state-and-new-createStore-state-is-same-when-dispatch-action": "当dispatch一个action修改state树上的数据后，检查通过connect注入的现有state树上的数据和通过createStore新创建state的数据是否同步修改"
	        },
	        "react-redux": {
	            "init-store-data-in-componentWillMount-when-go-back": "在componentWillMount中初始化state树问题",
	            "define-redux-state-data-structure": "定义redux的state树的数据结构，避免组件在render的时候出错(一个天气查询例子)",
	            "map-state-to-props": "mapStateToProps探究",
	            "inject-action-creators-to-component-props": "向组件的props注入action creators",
	            "map-dispatch-to-props": "mapDispatchToProps探究",
	            "change-state-reference-type-data": "直接修改state树上引用类型数据的某个字段的值",
	            "async-action-in-componentWillReceiveProps": "在componentWillReceiveProps中进行dispatch异步action，各项数据引用一致性探究",
	            "auto-complete-page": "一个搜索下拉列表的例子",
	            "es6-component-inherit-es5-component": "es6写法的组件能否继承es5写法的组件",
	            "connect-multiple-nested-components": "connect多层嵌套组件, 观察各个组件的render次数",
	            "inject-state-to-es5-component-mixins": "HOC connect 可以注入store到mixins的方法中"
	        },
	        "react-dom": {
	            "call-react-dom-render-in-parent-component": "在父组件的componentDidMount生命周期内使用ReactDOM.render渲染子组件"
	        },
	        "mini-projects": {
	            "adorable-avatar": "Adorable Avatars —— Generate random cartoon avatars",
	            "file-io": "file.io —— Ephemeral file sharing Convenient, anonymous and secure",
	            "todoList": "TodoList"
	        }
	    }
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(59);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _redux = __webpack_require__(16);

	var _index = __webpack_require__(43);

	var _index2 = _interopRequireDefault(_index);

	var _reduxLogger = __webpack_require__(398);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxApiMiddleware = __webpack_require__(136);

	var _ajaxMiddleware = __webpack_require__(158);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const createLogger = require('redux-logger');

	//使用ES6
	// import thunk from 'redux-thunk';
	//使用commonjs
	var thunk = __webpack_require__(145).default;
	//webpack未开启noParse


	var api_host = 'http://www.google.com';
	var middlewares = [_reduxApiMiddleware.apiMiddleware, _ajaxMiddleware.ajaxMiddleware, thunk.withExtraArgument({ api_host: api_host })];
	if (false) {
	    //如果action常量是Symbol类型，那么会报错： Uncaught (in promise) TypeError: Cannot convert a Symbol value to a string
	    //解决方法: 如下，将Symbol类型转换成字符串
	    var logger = (0, _reduxLogger2.default)({
	        actionTransformer: function actionTransformer(action) {
	            return (0, _extends3.default)({}, action, {
	                type: String(action.type)
	            });
	        }
	    });
	    middlewares = [].concat((0, _toConsumableArray3.default)(middlewares), [logger]);
	}

	//logger中间件必须放在所有中间件的最后，否则它会打印出thunk和promise中间件的一些操作，而不是action
	var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(middlewares))(_redux.createStore);
	var store = createStoreWithMiddleware(_index2.default);

	exports.default = store;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(272), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34)
	  , document = __webpack_require__(17).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(33)(function(){
	  return Object.defineProperty(__webpack_require__(102)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(61);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(65)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(109)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(23)
	  , Iterators      = __webpack_require__(35)
	  , $iterCreate    = __webpack_require__(286)
	  , setToStringTag = __webpack_require__(68)
	  , getPrototypeOf = __webpack_require__(294)
	  , ITERATOR       = __webpack_require__(13)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(37)
	  , toIObject      = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(73)
	  , has            = __webpack_require__(23)
	  , IE8_DOM_DEFINE = __webpack_require__(103)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(108)
	  , hiddenKeys = __webpack_require__(64).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(23)
	  , toIObject    = __webpack_require__(24)
	  , arrayIndexOf = __webpack_require__(278)(false)
	  , IE_PROTO     = __webpack_require__(69)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(71)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(296)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(105)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38)
	  , TAG = __webpack_require__(11)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(81)
	  , $export        = __webpack_require__(40)
	  , redefine       = __webpack_require__(83)
	  , hide           = __webpack_require__(80)
	  , has            = __webpack_require__(79)
	  , Iterators      = __webpack_require__(41)
	  , $iterCreate    = __webpack_require__(325)
	  , setToStringTag = __webpack_require__(48)
	  , getProto       = __webpack_require__(9).getProto
	  , ITERATOR       = __webpack_require__(11)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(9).getDesc
	  , isObject = __webpack_require__(47)
	  , anObject = __webpack_require__(30);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(39)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 117 */
71,
/* 118 */
45,
/* 119 */
/***/ function(module, exports) {

	

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(50);

	var _DOMUtils = __webpack_require__(84);

	var _createHistory = __webpack_require__(123);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(31);

	var _PathUtils = __webpack_require__(25);

	var _ExecutionEnvironment = __webpack_require__(50);

	var _DOMUtils = __webpack_require__(84);

	var _DOMStateStorage = __webpack_require__(120);

	var _createDOMHistory = __webpack_require__(121);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	         false ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	     false ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(348);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(25);

	var _AsyncUtils = __webpack_require__(354);

	var _Actions = __webpack_require__(31);

	var _createLocation2 = __webpack_require__(356);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(86);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(85);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	       false ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(50);

	var _PathUtils = __webpack_require__(25);

	var _runTransitionHook = __webpack_require__(86);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(85);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	           false ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i=0; i<keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(359),
	    isArguments = __webpack_require__(126),
	    keysIn = __webpack_require__(361);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _PropTypes = __webpack_require__(89);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	      var state = _props.state;

	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	      this.context.router.push(location);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	     false ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(20);

	var _PatternUtils = __webpack_require__(32);

	var _InternalPropTypes = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(53);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (false) {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(51);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(124);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(357);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(135);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(51);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(124);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Redux middleware for calling an API
	 * @module redux-api-middleware
	 * @requires isomorphic-fetch
	 * @requires lodash.isplainobject
	 * @exports {symbol} CALL_API
	 * @exports {function} isRSAA
	 * @exports {function} validateRSAA
	 * @exports {function} isValidRSAA
	 * @exports {error} InvalidRSAA
	 * @exports {error} InternalError
	 * @exports {error} RequestError
	 * @exports {error} ApiError
	 * @exports {function} getJSON
	 * @exports {ReduxMiddleWare} apiMiddleware
	 */

	/**
	 * @typedef {function} ReduxMiddleware
	 * @param {object} store
	 * @returns {ReduxNextHandler}
	 *
	 * @typedef {function} ReduxNextHandler
	 * @param {function} next
	 * @returns {ReduxActionHandler}
	 *
	 * @typedef {function} ReduxActionHandler
	 * @param {object} action
	 * @returns undefined
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(93)['default'];

	exports.__esModule = true;

	var _CALL_API = __webpack_require__(91);

	var _CALL_API2 = _interopRequireDefault(_CALL_API);

	var _validation = __webpack_require__(138);

	var _errors = __webpack_require__(92);

	var _util = __webpack_require__(137);

	var _middleware = __webpack_require__(393);

	exports.CALL_API = _CALL_API2['default'];
	exports.isRSAA = _validation.isRSAA;
	exports.validateRSAA = _validation.validateRSAA;
	exports.isValidRSAA = _validation.isValidRSAA;
	exports.InvalidRSAA = _errors.InvalidRSAA;
	exports.InternalError = _errors.InternalError;
	exports.RequestError = _errors.RequestError;
	exports.ApiError = _errors.ApiError;
	exports.getJSON = _util.getJSON;
	exports.apiMiddleware = _middleware.apiMiddleware;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(143)['default'];

	var _regeneratorRuntime = __webpack_require__(144)['default'];

	var _Promise = __webpack_require__(141)['default'];

	exports.__esModule = true;

	var _errors = __webpack_require__(92);

	/**
	 * Extract JSON body from a server response
	 *
	 * @function getJSON
	 * @access public
	 * @param {object} res - A raw response object
	 * @returns {promise|undefined}
	 */
	function getJSON(res) {
	  var contentType, emptyCodes;
	  return _regeneratorRuntime.async(function getJSON$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        contentType = res.headers.get('Content-Type');
	        emptyCodes = [204, 205];

	        if (!(! ~emptyCodes.indexOf(res.status) && contentType && ~contentType.indexOf('json'))) {
	          context$1$0.next = 8;
	          break;
	        }

	        context$1$0.next = 5;
	        return _regeneratorRuntime.awrap(res.json());

	      case 5:
	        return context$1$0.abrupt('return', context$1$0.sent);

	      case 8:
	        context$1$0.next = 10;
	        return _regeneratorRuntime.awrap(_Promise.resolve());

	      case 10:
	        return context$1$0.abrupt('return', context$1$0.sent);

	      case 11:
	      case 'end':
	        return context$1$0.stop();
	    }
	  }, null, this);
	}

	/**
	 * Blow up string or symbol types into full-fledged type descriptors,
	 *   and add defaults
	 *
	 * @function normalizeTypeDescriptors
	 * @access private
	 * @param {array} types - The [CALL_API].types from a validated RSAA
	 * @returns {array}
	 */
	function normalizeTypeDescriptors(types) {
	  var requestType = types[0];
	  var successType = types[1];
	  var failureType = types[2];

	  if (typeof requestType === 'string' || typeof requestType === 'symbol') {
	    requestType = { type: requestType };
	  }

	  if (typeof successType === 'string' || typeof successType === 'symbol') {
	    successType = { type: successType };
	  }
	  successType = _extends({
	    payload: function payload(action, state, res) {
	      return getJSON(res);
	    }
	  }, successType);

	  if (typeof failureType === 'string' || typeof failureType === 'symbol') {
	    failureType = { type: failureType };
	  }
	  failureType = _extends({
	    payload: function payload(action, state, res) {
	      return getJSON(res).then(function (json) {
	        return new _errors.ApiError(res.status, res.statusText, json);
	      });
	    }
	  }, failureType);

	  return [requestType, successType, failureType];
	}

	/**
	 * Evaluate a type descriptor to an FSA
	 *
	 * @function actionWith
	 * @access private
	 * @param {object} descriptor - A type descriptor
	 * @param {array} args - The array of arguments for `payload` and `meta` function properties
	 * @returns {object}
	 */
	function actionWith(descriptor, args) {
	  return _regeneratorRuntime.async(function actionWith$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        context$1$0.prev = 0;
	        context$1$0.next = 3;
	        return _regeneratorRuntime.awrap(typeof descriptor.payload === 'function' ? descriptor.payload.apply(descriptor, args) : descriptor.payload);

	      case 3:
	        descriptor.payload = context$1$0.sent;
	        context$1$0.next = 10;
	        break;

	      case 6:
	        context$1$0.prev = 6;
	        context$1$0.t0 = context$1$0['catch'](0);

	        descriptor.payload = new _errors.InternalError(context$1$0.t0.message);
	        descriptor.error = true;

	      case 10:
	        context$1$0.prev = 10;
	        context$1$0.next = 13;
	        return _regeneratorRuntime.awrap(typeof descriptor.meta === 'function' ? descriptor.meta.apply(descriptor, args) : descriptor.meta);

	      case 13:
	        descriptor.meta = context$1$0.sent;
	        context$1$0.next = 21;
	        break;

	      case 16:
	        context$1$0.prev = 16;
	        context$1$0.t1 = context$1$0['catch'](10);

	        delete descriptor.meta;
	        descriptor.payload = new _errors.InternalError(context$1$0.t1.message);
	        descriptor.error = true;

	      case 21:
	        return context$1$0.abrupt('return', descriptor);

	      case 22:
	      case 'end':
	        return context$1$0.stop();
	    }
	  }, null, this, [[0, 6], [10, 16]]);
	}

	exports.getJSON = getJSON;
	exports.normalizeTypeDescriptors = normalizeTypeDescriptors;
	exports.actionWith = actionWith;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(93)['default'];

	exports.__esModule = true;

	var _CALL_API = __webpack_require__(91);

	var _CALL_API2 = _interopRequireDefault(_CALL_API);

	var _lodashIsplainobject = __webpack_require__(127);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	/**
	 * Is the given action a plain JavaScript object with a [CALL_API] property?
	 *
	 * @function isRSAA
	 * @access public
	 * @param {object} action - The action to check
	 * @returns {boolean}
	 */
	function isRSAA(action) {
	  return _lodashIsplainobject2['default'](action) && action.hasOwnProperty(_CALL_API2['default']);
	}

	/**
	 * Is the given object a valid type descriptor?
	 *
	 * @function isValidTypeDescriptor
	 * @access private
	 * @param {object} obj - The object to check agains the type descriptor definition
	 * @returns {boolean}
	 */
	function isValidTypeDescriptor(obj) {
	  var validKeys = ['type', 'payload', 'meta'];

	  if (!_lodashIsplainobject2['default'](obj)) {
	    return false;
	  }
	  for (var key in obj) {
	    if (! ~validKeys.indexOf(key)) {
	      return false;
	    }
	  }
	  if (!('type' in obj)) {
	    return false;
	  } else if (typeof obj.type !== 'string' && typeof obj.type !== 'symbol') {
	    return false;
	  }

	  return true;
	}

	/**
	 * Checks an action against the RSAA definition, returning a (possibly empty)
	 * array of validation errors.
	 *
	 * @function validateRSAA
	 * @access public
	 * @param {object} action - The action to check against the RSAA definition
	 * @returns {array}
	 */
	function validateRSAA(action) {
	  var validationErrors = [];
	  var validCallAPIKeys = ['endpoint', 'method', 'body', 'headers', 'credentials', 'bailout', 'types'];
	  var validMethods = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];
	  var validCredentials = ['omit', 'same-origin', 'include'];

	  if (!isRSAA(action)) {
	    validationErrors.push('RSAAs must be plain JavaScript objects with a [CALL_API] property');
	    return validationErrors;
	  }

	  for (var key in action) {
	    if (key !== [_CALL_API2['default']]) {
	      validationErrors.push('Invalid root key: ' + key);
	    }
	  }

	  var callAPI = action[_CALL_API2['default']];
	  if (!_lodashIsplainobject2['default'](callAPI)) {
	    validationErrors.push('[CALL_API] property must be a plain JavaScript object');
	  }
	  for (var key in callAPI) {
	    if (! ~validCallAPIKeys.indexOf(key)) {
	      validationErrors.push('Invalid [CALL_API] key: ' + key);
	    }
	  }

	  var endpoint = callAPI.endpoint;
	  var method = callAPI.method;
	  var headers = callAPI.headers;
	  var credentials = callAPI.credentials;
	  var types = callAPI.types;
	  var bailout = callAPI.bailout;

	  if (typeof endpoint === 'undefined') {
	    validationErrors.push('[CALL_API] must have an endpoint property');
	  } else if (typeof endpoint !== 'string' && typeof endpoint !== 'function') {
	    validationErrors.push('[CALL_API].endpoint property must be a string or a function');
	  }
	  if (typeof method === 'undefined') {
	    validationErrors.push('[CALL_API] must have a method property');
	  } else if (typeof method !== 'string') {
	    validationErrors.push('[CALL_API].method property must be a string');
	  } else if (! ~validMethods.indexOf(method.toUpperCase())) {
	    validationErrors.push('Invalid [CALL_API].method: ' + method.toUpperCase());
	  }

	  if (typeof headers !== 'undefined' && !_lodashIsplainobject2['default'](headers) && typeof headers !== 'function') {
	    validationErrors.push('[CALL_API].headers property must be undefined, a plain JavaScript object, or a function');
	  }
	  if (typeof credentials !== 'undefined') {
	    if (typeof credentials !== 'string') {
	      validationErrors.push('[CALL_API].credentials property must be undefined, or a string');
	    } else if (! ~validCredentials.indexOf(credentials)) {
	      validationErrors.push('Invalid [CALL_API].credentials: ' + credentials);
	    }
	  }
	  if (typeof bailout !== 'undefined' && typeof bailout !== 'boolean' && typeof bailout !== 'function') {
	    validationErrors.push('[CALL_API].bailout property must be undefined, a boolean, or a function');
	  }

	  if (typeof types === 'undefined') {
	    validationErrors.push('[CALL_API] must have a types property');
	  } else if (!Array.isArray(types) || types.length !== 3) {
	    validationErrors.push('[CALL_API].types property must be an array of length 3');
	  } else {
	    var requestType = types[0];
	    var successType = types[1];
	    var failureType = types[2];

	    if (typeof requestType !== 'string' && typeof requestType !== 'symbol' && !isValidTypeDescriptor(requestType)) {
	      validationErrors.push('Invalid request type');
	    }
	    if (typeof successType !== 'string' && typeof successType !== 'symbol' && !isValidTypeDescriptor(successType)) {
	      validationErrors.push('Invalid success type');
	    }
	    if (typeof failureType !== 'string' && typeof failureType !== 'symbol' && !isValidTypeDescriptor(failureType)) {
	      validationErrors.push('Invalid failure type');
	    }
	  }

	  return validationErrors;
	}

	/**
	 * Is the given action a valid RSAA?
	 *
	 * @function isValidRSAA
	 * @access public
	 * @param {object} action - The action to check against the RSAA definition
	 * @returns {boolean}
	 */
	function isValidRSAA(action) {
	  return !validateRSAA(action).length;
	}

	exports.isRSAA = isRSAA;
	exports.isValidTypeDescriptor = isValidTypeDescriptor;
	exports.validateRSAA = validateRSAA;
	exports.isValidRSAA = isValidRSAA;

/***/ },
/* 139 */
[401, 311],
/* 140 */
[402, 312],
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(313), __esModule: true };

/***/ },
/* 142 */
[403, 314],
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(394)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(397);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 145 */
/***/ function(module, exports) {

	!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReduxThunk=e():t.ReduxThunk=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,o=e.getState;return function(e){return function(r){return"function"==typeof r?r(n,o,t):e(r)}}}}e.__esModule=!0;var o=n();o.withExtraArgument=n,e.default=o}])});

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.parseActions = parseActions;
	exports.default = undoable;
	exports.distinctState = distinctState;
	exports.includeAction = includeAction;
	exports.ifAction = ifAction;
	exports.excludeAction = excludeAction;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// debug output
	var __DEBUG__ = undefined;
	function debug() {
	  if (__DEBUG__) {
	    var _console;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (!console.group) {
	      args.unshift('%credux-undo', 'font-style: italic');
	    }
	    (_console = console).log.apply(_console, args);
	  }
	}
	function debugStart(action, state) {
	  if (__DEBUG__) {
	    var args = ['action', action.type];
	    if (console.group) {
	      var _console2;

	      args.unshift('%credux-undo', 'font-style: italic');
	      (_console2 = console).groupCollapsed.apply(_console2, args);
	      console.log('received', { state: state, action: action });
	    } else {
	      debug.apply(undefined, args);
	    }
	  }
	}
	function debugEnd() {
	  if (__DEBUG__) {
	    return console.groupEnd && console.groupEnd();
	  }
	}
	// /debug output

	// action types
	var ActionTypes = exports.ActionTypes = {
	  UNDO: '@@redux-undo/UNDO',
	  REDO: '@@redux-undo/REDO',
	  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
	  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST'
	};
	// /action types

	// action creators to change the state
	var ActionCreators = exports.ActionCreators = {
	  undo: function undo() {
	    return { type: ActionTypes.UNDO };
	  },
	  redo: function redo() {
	    return { type: ActionTypes.REDO };
	  },
	  jumpToFuture: function jumpToFuture(index) {
	    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
	  },
	  jumpToPast: function jumpToPast(index) {
	    return { type: ActionTypes.JUMP_TO_PAST, index: index };
	  }
	};
	// /action creators

	// length: get length of history
	function length(history) {
	  var past = history.past;
	  var future = history.future;

	  return past.length + 1 + future.length;
	}
	// /length

	// insert: insert `state` into history, which means adding the current state
	//         into `past`, setting the new `state` as `present` and erasing
	//         the `future`.
	function insert(history, state, limit) {
	  debug('insert', { state: state, history: history, free: limit - length(history) });

	  var past = history.past;
	  var present = history.present;

	  var historyOverflow = limit && length(history) >= limit;

	  if (present === undefined) {
	    // init history
	    return {
	      past: [],
	      present: state,
	      future: []
	    };
	  }

	  return {
	    past: [].concat(_toConsumableArray(past.slice(historyOverflow ? 1 : 0)), [present]),
	    present: state,
	    future: []
	  };
	}
	// /insert

	// undo: go back to the previous point in history
	function undo(history) {
	  debug('undo', { history: history });

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  if (past.length <= 0) return history;

	  return {
	    past: past.slice(0, past.length - 1), // remove last element from past
	    present: past[past.length - 1], // set element as new present
	    future: [present].concat(_toConsumableArray(future))
	  };
	}
	// /undo

	// redo: go to the next point in history
	function redo(history) {
	  debug('redo', { history: history });

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  if (future.length <= 0) return history;

	  return {
	    future: future.slice(1, future.length), // remove element from future
	    present: future[0], // set element as new present
	    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
	    ])
	  };
	}
	// /redo

	// jumpToFuture: jump to requested index in future history
	function jumpToFuture(history, index) {
	  if (index === 0) return redo(history);

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  return {
	    future: future.slice(index + 1),
	    present: future[index],
	    past: past.concat([present]).concat(future.slice(0, index))
	  };
	}
	// /jumpToFuture

	// jumpToPast: jump to requested index in past history
	function jumpToPast(history, index) {
	  if (index === history.past.length - 1) return undo(history);

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  return {
	    future: past.slice(index + 1).concat([present]).concat(future),
	    present: past[index],
	    past: past.slice(0, index)
	  };
	}
	// /jumpToPast

	// wrapState: for backwards compatibility to 0.4
	function wrapState(state) {
	  return _extends({}, state, {
	    history: state
	  });
	}
	// /wrapState

	// updateState
	function updateState(state, history) {
	  return wrapState(_extends({}, state, history));
	}
	// /updateState

	// createHistory
	function createHistory(state) {
	  return {
	    past: [],
	    present: state,
	    future: []
	  };
	}
	// /createHistory

	// parseActions
	function parseActions(rawActions) {
	  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  if (Array.isArray(rawActions)) {
	    return rawActions;
	  } else if (typeof rawActions === 'string') {
	    return [rawActions];
	  }
	  return defaultValue;
	}
	// /parseActions

	// redux-undo higher order reducer
	function undoable(reducer) {
	  var rawConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  __DEBUG__ = rawConfig.debug;

	  var config = {
	    initialState: rawConfig.initialState,
	    initTypes: parseActions(rawConfig.initTypes, ['@@redux/INIT', '@@INIT']),
	    limit: rawConfig.limit,
	    filter: rawConfig.filter || function () {
	      return true;
	    },
	    undoType: rawConfig.undoType || ActionTypes.UNDO,
	    redoType: rawConfig.redoType || ActionTypes.REDO,
	    jumpToPastType: rawConfig.jumpToPastType || ActionTypes.JUMP_TO_PAST,
	    jumpToFutureType: rawConfig.jumpToFutureType || ActionTypes.JUMP_TO_FUTURE
	  };
	  config.history = rawConfig.initialHistory || createHistory(config.initialState);

	  if (config.initTypes.length === 0) {
	    console.warn('redux-undo: supply at least one action type in initTypes to ensure initial state');
	  }

	  return function (state, action) {
	    debugStart(action, state);
	    var res = undefined;
	    switch (action.type) {
	      case config.undoType:
	        res = undo(state);
	        debug('after undo', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.redoType:
	        res = redo(state);
	        debug('after redo', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.jumpToPastType:
	        res = jumpToPast(state, action.index);
	        debug('after jumpToPast', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.jumpToFutureType:
	        res = jumpToFuture(state, action.index);
	        debug('after jumpToFuture', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      default:
	        res = reducer(state && state.present, action);

	        if (config.initTypes.some(function (actionType) {
	          return actionType === action.type;
	        })) {
	          debug('reset history due to init action');
	          debugEnd();
	          return wrapState(_extends({}, state, createHistory(res)));
	        }

	        if (config.filter && typeof config.filter === 'function') {
	          if (!config.filter(action, res, state && state.present)) {
	            debug('filter prevented action, not storing it');
	            debugEnd();
	            return wrapState(_extends({}, state, {
	              present: res
	            }));
	          }
	        }

	        var history = state && state.present !== undefined ? state : config.history;
	        var updatedHistory = insert(history, res, config.limit);
	        debug('after insert', { history: updatedHistory, free: config.limit - length(updatedHistory) });
	        debugEnd();

	        return wrapState(_extends({}, state, updatedHistory));
	    }
	  };
	}
	// /redux-undo

	// distinctState helper
	function distinctState() {
	  return function (action, currentState, previousState) {
	    return currentState !== previousState;
	  };
	}
	// /distinctState

	// includeAction helper
	function includeAction(rawActions) {
	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) >= 0;
	  };
	}
	// /includeAction

	// deprecated ifAction helper
	function ifAction(rawActions) {
	  console.error('Deprecation Warning: Please change `ifAction` to `includeAction`');
	  return includeAction(rawActions);
	}
	// /ifAction

	// excludeAction helper
	function excludeAction() {
	  var rawActions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) < 0;
	  };
	}
	// /excludeAction

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var fetchAutoCompleteDataSuccess = exports.fetchAutoCompleteDataSuccess = function fetchAutoCompleteDataSuccess(data, query) {
	    return {
	        type: 'autoComplete_fetchAutoCompleteDataSuccess',
	        payload: { data: data, query: query }
	    };
	};

	var fetchAutoCompleteDataFail = exports.fetchAutoCompleteDataFail = function fetchAutoCompleteDataFail(err) {
	    return {
	        type: 'autoComplete_fetchAutoCompleteDataFail',
	        payload: { err: err },
	        error: true
	    };
	};

	var fetchAutoCompleteData = exports.fetchAutoCompleteData = function fetchAutoCompleteData() {
	    var query = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var number = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	    return function (dispatch, getState) {
	        var url = 'http://it-ebooks-api.info/v1/search/' + query + '/page/' + number;

	        return fetch(url).then(function (res) {
	            return res.json();
	        }).then(function (data) {
	            if (data.Error !== '0') {
	                return Promise.reject(data.Error);
	            } else {
	                dispatch(fetchAutoCompleteDataSuccess(data, query));
	            }
	        }).catch(function (err) {
	            dispatch(fetchAutoCompleteDataFail(err));
	        });
	    };
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var updateFoodName = exports.updateFoodName = function updateFoodName(name) {
	    return {
	        type: 'CDSANCSSSWDA_updateFoodName',
	        payload: {
	            name: name
	        }
	    };
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.fetchWeatherData = exports.getWeatherFail = exports.getWeatherSuccess = undefined;

	var _common = __webpack_require__(42);

	var Action = _interopRequireWildcard(_common);

	var _util = __webpack_require__(57);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// export const getWeather = () => {
	// 	return {type: 'DefineReduxStateDataStructure_getWeather'}
	// }

	var getWeatherSuccess = exports.getWeatherSuccess = function getWeatherSuccess(weather) {
		return {
			type: 'DefineReduxStateDataStructure_getWeatherSuccess',
			payload: {
				weather: weather
			}
			//error: false 不用设置可选的error参数，默认地，error是undefined，只要不是true，都认为action没有发生错误
		};
	};

	var getWeatherFail = exports.getWeatherFail = function getWeatherFail(err) {
		return {
			type: 'DefineReduxStateDataStructure_getWeatherFail',
			payload: {
				err: err
			},
			error: true
		};
	};

	var fetchWeatherData = exports.fetchWeatherData = function fetchWeatherData() {
		var q = arguments.length <= 0 || arguments[0] === undefined ? 'shanghai' : arguments[0];
		var units = arguments.length <= 1 || arguments[1] === undefined ? 'metric' : arguments[1];

		return function (dispatch, getState) {
			var url = _util.util.openweatherApiHost + '/weather';
			//TODO 转移下面3行到util中
			url = new URL(url);
			var params = { q: q, units: units, appid: _util.util.openweatherApiKey };
			Object.keys(params).forEach(function (key) {
				return url.searchParams.append(key, params[key]);
			});

			dispatch(Action.request());
			return fetch(url).then(function (res) {
				return res.json();
			}).then(function (json) {
				if (Number.parseInt(json.cod, 10) !== 200) {
					return Promise.reject(json);
				} else {
					dispatch(getWeatherSuccess(json));
					dispatch(Action.requestSuccess());
					return Promise.resolve(getState());
				}
			}).catch(function (err) {
				dispatch(getWeatherFail(err));
				dispatch(Action.requestFail());
				return Promise.reject(getState());
			});
		};
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.uploadFiles = exports.uploadFilesFail = exports.uploadFilesSuccess = undefined;

	var _common = __webpack_require__(42);

	var Action = _interopRequireWildcard(_common);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var uploadFilesSuccess = exports.uploadFilesSuccess = function uploadFilesSuccess(_ref) {
	    var key = _ref.key;

	    return {
	        type: 'FileIO_uploadFilesSuccess',
	        payload: {
	            key: key
	        }
	    };
	};

	var uploadFilesFail = exports.uploadFilesFail = function uploadFilesFail(err) {
	    return {
	        type: 'FIleIO_uploadFilesFail',
	        payload: {
	            err: err
	        },
	        error: true
	    };
	};

	var uploadFiles = exports.uploadFiles = function uploadFiles(formData) {
	    return function (dispatch, getState) {
	        var url = 'http://file.io';
	        dispatch(Action.request());

	        return fetch(url, {
	            method: 'POST',
	            body: formData
	        }).then(function (res) {
	            return res.json();
	        }).then(function (json) {
	            if (json.success) {
	                dispatch(uploadFilesSuccess(json));
	                dispatch(Action.requestSuccess());
	                return Promise.resolve(getState());
	            } else {
	                return Promise.reject(json);
	            }
	        }).catch(function (err) {
	            dispatch(uploadFilesFail(err));
	            dispatch(Action.requestFail());
	            return Promise.reject(getState());
	        });
	    };
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getUser = exports.getUser = function getUser() {
	    return { type: 'reactRedux02_getUser' };
	};

	var deleteUser = exports.deleteUser = function deleteUser(id) {
	    return { type: 'reactRedux02_deleteUser', id: id };
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getBook = exports.getBook = function getBook() {
	    return { type: 'MapDispatchToProps_getBook' };
	};

	var deleteBook = exports.deleteBook = function deleteBook(id) {
	    return { type: 'MapDispatchToProps_deleteBook', id: id };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setFilter = exports.clearCompleted = exports.deleteTodo = exports.completeAllTodos = exports.toggleTodo = exports.addTodo = undefined;

	var _util = __webpack_require__(57);

	var makeActionCreator = _util.util.makeActionCreator;

	var addTodo = exports.addTodo = makeActionCreator('todolist_addTodo', 'text');
	var toggleTodo = exports.toggleTodo = makeActionCreator('todolist_toggleTodo', 'index');
	var completeAllTodos = exports.completeAllTodos = makeActionCreator('todolist_completeAllTodos');
	var deleteTodo = exports.deleteTodo = makeActionCreator('todolist_deleteTodo', 'index');
	var clearCompleted = exports.clearCompleted = makeActionCreator('todolist_clearCompleted');
	var setFilter = exports.setFilter = makeActionCreator('todolist_setFilter', 'filter');

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(60);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _store = __webpack_require__(100);

	var _store2 = _interopRequireDefault(_store);

	var _redux = __webpack_require__(16);

	var _AsyncActionInComponentWillReceiveProps = __webpack_require__(54);

	var AsyncActionInComponentWillReceiveProps = _interopRequireWildcard(_AsyncActionInComponentWillReceiveProps);

	var _InitReduxStateTreeDataInComponentWillMount = __webpack_require__(95);

	var InitReduxStateTreeDataInComponentWillMount = _interopRequireWildcard(_InitReduxStateTreeDataInComponentWillMount);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by dulin on 16/8/19.
	 */


	var checkUniqueAction = function checkUniqueAction(actionMap) {
	    //TODO 检查是否唯一
	    return true;
	};

	var conbineActions = function conbineActions(actionMap) {
	    var pass = checkUniqueAction(actionMap);
	    if (pass) {
	        var allActions = Object.assign({}, actionMap);
	        var allActionKeys = Object.keys(allActions);
	        var len = allActionKeys.length;

	        var _actions = {};
	        for (var i = 0; i < len; i++) {
	            var action = allActions[allActionKeys[i]];
	            for (var key in action) {
	                if ((0, _typeof3.default)(action[key] === 'function')) {
	                    _actions[key] = action[key];
	                }
	            }
	        }
	        return _actions;
	    } else {
	        throw new Error('马蓉超越了潘金莲');
	    }
	};

	var actions = conbineActions({
	    AsyncActionInComponentWillReceiveProps: AsyncActionInComponentWillReceiveProps,
	    InitReduxStateTreeDataInComponentWillMount: InitReduxStateTreeDataInComponentWillMount
	});

	exports.default = (0, _redux.bindActionCreators)(actions, _store2.default.dispatch);
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getBook = exports.requestError = exports.requestSuccess = exports.request = undefined;

	__webpack_require__(94);

	var request = exports.request = function request(q) {
	    return { type: 'request', q: q };
	};

	var requestSuccess = exports.requestSuccess = function requestSuccess(data) {
	    return { type: 'requestSuccess', data: data };
	};

	var requestError = exports.requestError = function requestError(err) {
	    return { type: 'requestError', err: err };
	};

	var getBook = exports.getBook = function getBook(q) {
	    ;
	    var url = 'http://it-ebooks-api.info/v1/search/' + q;

	    return function (dispatch) {
	        dispatch(request(q));

	        return fetch(url).then(function (res) {
	            return res.json();
	        }).then(function (data) {
	            dispatch(requestSuccess(data));
	        }).catch(function (err) {
	            dispatch(requestError(err));
	        });
	    };
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DownloadAll = function (_Component) {
	    (0, _inherits3.default)(DownloadAll, _Component);

	    function DownloadAll() {
	        (0, _classCallCheck3.default)(this, DownloadAll);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DownloadAll).apply(this, arguments));
	    }

	    (0, _createClass3.default)(DownloadAll, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
	                return _react2.default.cloneElement(child, {
	                    onClick: _this2.downloadAll.bind(_this2, _this2.props.links)
	                });
	            });

	            return _react2.default.createElement(
	                'div',
	                null,
	                childrenWithProps
	            );
	        }
	    }, {
	        key: 'downloadAll',
	        value: function downloadAll(links) {
	            console.log(links);
	            var linkDom = document.createElement('a');
	            linkDom.setAttribute('download', null);
	            linkDom.style.display = 'none';
	            var len = links.length;

	            document.body.appendChild(linkDom);
	            for (var i = 0; i < len; i++) {
	                linkDom.setAttribute('href', links[i]);
	                linkDom.click();
	            }
	            document.body.removeChild(linkDom);
	        }
	    }]);
	    return DownloadAll;
	}(_react.Component);

	exports.default = DownloadAll;
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(58);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//问题，异步数据，组件更新

	var FilterBar = (_temp = _class = function (_Component) {
		(0, _inherits3.default)(FilterBar, _Component);

		function FilterBar(props) {
			(0, _classCallCheck3.default)(this, FilterBar);

			var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(FilterBar).call(this, props));

			_this.state = {
				selectedFilter: '',
				selectedSort: '',
				selectedSortField: '',
				selectedCategory2Id: '',
				selectedCategory3Id: ''
			};

			_this.filters = _this.clone(_this.props.filters);
			_this.filterLen = _this.filters.length;
			_this.checkboxKeys = [];
			_this.filters.map(function (filter) {
				var type = filter.type;
				var key = filter.key;

				if (type === 'checkbox') {
					_this.checkboxKeys.push(key);
					_this.state[key] = typeof filter.isChecked === 'boolean' ? filter.isChecked : false;
				}
				if (type === 'sort') {
					var defaultSort = filter.sorts[0];
					_this.state.selectedSort = defaultSort.field + '-' + defaultSort.direction;
				}
			});
			return _this;
		}

		(0, _createClass3.default)(FilterBar, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var scope = this;
				var filterNodes = this.filters.map(function (filter, index) {
					var key = filter.key;
					var type = filter.type;
					var text = filter.text;

					var checkboxNode = null;
					var isCheckBoxChecked = void 0;
					if (type === 'checkbox') {
						isCheckBoxChecked = typeof scope.state[key] === 'boolean' ? scope.state[key] : typeof filter.isChecked === 'boolean' ? filter.isChecked : false;

						checkboxNode = _react2.default.createElement('input', { type: 'checkbox',
							className: 'filter-checkbox',
							onChange: function onChange() {
								return _this2.onCheckboxChange(key, isCheckBoxChecked);
							},
							checked: isCheckBoxChecked });
					}

					return _react2.default.createElement(
						'li',
						{ onClick: _this2.selectFilter.bind(_this2, key, type),
							className: '' + (_this2.state.selectedFilter === key ? 'selected' : ''),
							key: index + '-' + key },
						type === 'checkbox' ? _react2.default.createElement(
							'label',
							null,
							checkboxNode,
							text
						) : _react2.default.createElement(
							'a',
							null,
							text
						)
					);
				});

				var dropmenuFilters = this.getFiltersByType('sort');
				var dropmenuNodes = dropmenuFilters.map(function (filter, index) {
					var sortNodes = filter.sorts.map(function (sort, idx) {
						var text = sort.text;
						var field = sort.field;
						var direction = sort.direction;

						var sortKey = field + '-' + direction;
						return _react2.default.createElement(
							'li',
							{ onClick: function onClick() {
									return _this2.selectSort(field, direction, text, filter);
								},
								key: sortKey,
								className: '' + (_this2.state.selectedSort === sortKey ? 'selected' : '') },
							text
						);
					});
					return _react2.default.createElement(
						'div',
						{ className: 'dropmenu sort',
							style: { display: '' + (_this2.state.selectedFilter === filter.key ? 'block' : 'none') },
							key: index },
						_react2.default.createElement(
							'ul',
							{ className: 'sort-list' },
							sortNodes
						)
					);
				});

				var categoryFilters = this.getFiltersByType('category');
				var categoryNodes = categoryFilters.map(function (filter, index) {
					var categories = filter.categories;
					var key = filter.key;
					var text = filter.text;

					var categoriesClone = _this2.clone(categories);
					categoriesClone.unshift({ id: '', name: _this2.props.category2AllText, children: [] });

					var category2 = categoriesClone.map(function (category, idx) {
						var name = category.name;
						var id = category.id;

						var c2domKey = index + '-' + idx + '-' + id;
						return _react2.default.createElement(
							'div',
							{ onClick: function onClick() {
									return _this2.selectCategory2(id, name, filter);
								},
								className: 'category-item ' + (_this2.state.selectedCategory2Id && _this2.state.selectedCategory2Id === id ? 'selected' : ''),
								key: c2domKey },
							name
						);
					});

					var category3 = null;

					if (_this2.state.selectedCategory2Id) {
						var category3Data = [];

						var len = categories.length;
						for (var i = 0; i < len; i++) {
							if (categories[i].id === _this2.state.selectedCategory2Id) {
								category3Data = _this2.clone(categories[i].children);
								break;
							}
						}

						category3Data.unshift({ id: '', name: _this2.props.category3AllText, children: [] });
						// console.log(category3Data)

						category3 = category3Data.map(function (category, idx) {
							var name = category.name;
							var id = category.id;

							var c3domKey = index + '-' + idx + '-' + id;
							return _react2.default.createElement(
								'div',
								{ className: 'category-item ' + (_this2.state.selectedCategory3Id === id ? 'selected' : ''), onClick: function onClick() {
										return _this2.selectCategory3(id, name, filter);
									}, key: c3domKey },
								name
							);
						});
					}

					return _react2.default.createElement(
						'div',
						{ className: 'dropmenu category',
							style: { display: '' + (_this2.state.selectedFilter === key ? 'block' : 'none') },
							key: index },
						_react2.default.createElement(
							'div',
							{ className: 'category-group' },
							category2
						),
						_react2.default.createElement(
							'div',
							{ className: 'category-group' },
							category3
						)
					);
				});

				return _react2.default.createElement(
					'div',
					{ id: 'filter-bar-container' },
					_react2.default.createElement(
						'div',
						{ className: 'filter-bar' },
						_react2.default.createElement(
							'ul',
							{ className: 'filter-list' },
							filterNodes
						),
						dropmenuNodes,
						categoryNodes
					),
					_react2.default.createElement('div', { onClick: function onClick() {
							return _this2.dismissDropMenu();
						},
						className: 'backdrop', style: { display: '' + (this.state.selectedFilter.length > 0 ? 'block' : 'none') } })
				);
			}
		}, {
			key: 'clone',
			value: function clone(obj) {
				return JSON.parse(JSON.stringify(obj));
			}
		}, {
			key: 'onCheckboxChange',
			value: function onCheckboxChange(key, initStatus) {
				this.setState((0, _defineProperty3.default)({}, key, typeof this.state[key] === 'boolean' ? !this.state[key] : !initStatus), this.transformFilterFieldData);
			}
		}, {
			key: 'transformFilterFieldData',
			value: function transformFilterFieldData() {
				var isCloseDropMenu = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

				isCloseDropMenu && this.dismissDropMenu();
				var data = {};
				var _state = this.state;
				var selectedSort = _state.selectedSort;
				var selectedCategory2Id = _state.selectedCategory2Id;
				var selectedCategory3Id = _state.selectedCategory3Id;

				var sort = selectedSort.split('-');
				var checkboxKeyLen = this.checkboxKeys.length;
				data.sort = {
					field: sort[0],
					direction: sort[1]
				};
				data.categoryId = selectedCategory3Id ? [selectedCategory3Id] : selectedCategory2Id ? [selectedCategory2Id] : [];
				for (var i = 0; i < checkboxKeyLen; i++) {
					var checkboxKey = this.checkboxKeys[i];
					data[checkboxKey] = this.state[checkboxKey];
				}
				this.props.onFilterChange.call(this, data);
			}
		}, {
			key: 'selectCategory3',
			value: function selectCategory3(id, name, filter) {
				// console.log('selectCategory3', id);
				if (id) {
					filter.text = name;
				} else {
					filter.text = filter._tempText;
				}
				this.setState({
					selectedCategory3Id: id
				}, this.transformFilterFieldData);
			}
		}, {
			key: 'selectCategory2',
			value: function selectCategory2(id, name, filter) {
				filter._tempText = name;
				var newState = {
					selectedCategory2Id: id
				};
				if (!id) {
					filter.text = name;
					Object.assign(newState, { selectedCategory3Id: '' });
				}
				this.setState(newState, this.transformFilterFieldData.bind(this, !id));
			}
		}, {
			key: 'selectSort',
			value: function selectSort(sortField, direction, text, filter) {
				filter.text = text;
				this.setState({
					selectedSort: sortField + '-' + direction,
					selectedSortField: sortField
				}, this.transformFilterFieldData);
			}
		}, {
			key: 'selectFilter',
			value: function selectFilter(filterKey, filterType) {
				if (filterType === 'checkbox') {
					this.dismissDropMenu();
					return;
				}
				this.setState({ selectedFilter: filterKey });
			}
		}, {
			key: 'dismissDropMenu',
			value: function dismissDropMenu() {
				this.setState({ selectedFilter: '' });
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				if (this.isIOS) {
					this.detachTouch();
				} else {
					this.bodyStyle.overflow = 'auto';
				}
			}
		}, {
			key: 'getFiltersByType',
			value: function getFiltersByType(type) {
				return this.filters.filter(function (filter) {
					return filter.type === type;
				});
			}
		}]);
		return FilterBar;
	}(_react.Component), _class.defaultProps = {
		category3AllText: '全部商品',
		category2AllText: '全部分类'
	}, _temp);
	exports.default = FilterBar;
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//ES6
	//中间件的getState,dispatch参数是redux的applyMiddleware方法注入的
	var ajaxMiddleware = function ajaxMiddleware(_ref) {
		var getState = _ref.getState;
		var dispatch = _ref.dispatch;
		return function (next) {
			return function (action) {
				// console.log('middleware', next, action);
				var prevState = getState();
				var returnValue = next(action);
				var nextState = getState();
				return returnValue;
			};
		};
	};

	//es5
	var middlewware = function middlewware(store) {
		return function (next) {
			return function (action) {
				return next(action);
			};
		};
	};

	exports.ajaxMiddleware = ajaxMiddleware;

	//next 源码

	/**
	 * function (action) {
			if (typeof action === 'function') {
				return action(dispatch, getState, extraArgument);
			}

			return next(action);
		}
	 */

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var isLogin = exports.isLogin = function isLogin() {
	    var InjectStateToEs5ComponentMixins = this.props.InjectStateToEs5ComponentMixins;


	    return InjectStateToEs5ComponentMixins.token.length;
	};

	var userHelper = {
	    isLogin: isLogin
	};

	exports.default = userHelper;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (_temp = _class = function (_React$Component) {
	    (0, _inherits3.default)(App, _React$Component);


	    //ES6语法使用getInitialState会报如下错误,ES5使用这个方法初始化state是可以的
	    //Warning: getInitialState was defined on App, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?
	    // getInitialState() {
	    //     return {
	    //         selectDemoKey: 'table'
	    //     };
	    // }

	    function App(props) {
	        (0, _classCallCheck3.default)(this, App);

	        // console.log(this.props);
	        // let routeName = this.props.location.pathname.replace('/', '') || '';

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(App).call(this, props));

	        var routeName = _this.props.routes[_this.props.routes.length - 1].path || '';
	        //ES6写法在constructor中初始化state
	        _this.state = {
	            demoKey: routeName,
	            dataPassMainAndSidebar: { filterText: '', hideSideBar: false }
	        };
	        _this.handleFilterChange = _this.handleFilterChange.bind(_this);
	        _this.handleSideBarHide = _this.handleSideBarHide.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //比较引用
	            // console.log('browserHistory', browserHistory);
	            // console.log('this.context.router is same as this.props.router', this.context.router === this.props.router); //true
	            // console.log('this.context.router is same as browserHistory', this.context.router === browserHistory);   //false
	            // console.log('this.context.router.push is same as browserHistory.push', this.context.router.push === browserHistory.push);   //true

	            this.context.router.listen(this.routeChange.bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.context.router.unregisterTransitionHook(this.routeChange.bind(this));
	        }
	    }, {
	        key: 'routeChange',
	        value: function routeChange() {
	            // console.log('routeChange', arg, this);
	        }
	    }, {
	        key: 'handleFilterChange',
	        value: function handleFilterChange(filterText) {
	            this.setState({ dataPassMainAndSidebar: { filterText: filterText } });
	        }
	    }, {
	        key: 'handleSideBarHide',
	        value: function handleSideBarHide(hideSideBar) {
	            this.setState({ dataPassMainAndSidebar: { hideSideBar: hideSideBar } });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('App render');
	            var _props = this.props;
	            var main = _props.main;
	            var sidebar = _props.sidebar;

	            var data = Object.assign({}, this.state.dataPassMainAndSidebar, {
	                handleFilterChangeCallback: this.handleFilterChange,
	                handleSideBarHideCallback: this.handleSideBarHide
	            });
	            var mainWithData = _react2.default.cloneElement(main, data);
	            var sidebarWithData = _react2.default.cloneElement(sidebar, data);

	            // let demoKeys = Object.keys(this.props.demoMap);
	            // const options = demoKeys.map((key) => {
	            //     return <option value={key} key={key}>{this.props.demoMap[key]}</option>;
	            // });

	            return _react2.default.createElement(
	                'div',
	                { id: 'app' },
	                sidebarWithData,
	                mainWithData
	            );

	            // <form>
	            //     <label>
	            //         选择demo:
	            //         {/*select可以通过react提供的value属性来指定选择的option，而不用在option上使用selected属性*/}
	            //         <select onChange={(e) => this.selectChange(e)} value={this.state.demoKey}>
	            //             <option value=''>-- 请选择demo --</option>
	            //             {options}
	            //         </select>
	            //     </label>
	            // </form>
	            // {this.props.children || 'You can select a demo.'}
	        }
	    }, {
	        key: 'selectChange',
	        value: function selectChange(e) {
	            // console.log(this, e);
	            var value = e.target.value;
	            this.setState({ demoKey: value });
	            //如果使用browserHistory.push(`/#/${value}`);不回报错，并且url的路由也会改变，react-router不会匹配到这个路由，所以相应的component不会加载
	            //下面的也可以使用browserHistory.push(`/${value}`);
	            _reactRouter.browserHistory.push('' + value);
	        }
	    }]);
	    return App;
	}(_react2.default.Component), _class.defaultProps = {
	    demoMap: {
	        table: '表格',
	        form: '表单',
	        todoList: 'todoList',
	        'react-router01/1?name=novaline&age=26': '如何获取url中的?s=xxx&page=2查询字符串',
	        'react-router02': '离开当前路由时，弹出提示',
	        'react-router03': '路由跳转3种方式',
	        'react-router04': '多个命名组件',
	        redux01: 'redux测试',
	        redux02: 'redux异步action测试',
	        'react-redux01': 'api_mapStateToProps测试',
	        'react-redux02': 'api_inject-state-and-all-action-creators测试',
	        'react-redux03': 'api_inject-state-and-all-action-creators-as-actions测试',
	        'redux-api-middware': 'redux-api-middware测试',
	        ref_callback_attribute: 'ref_callback_attribute',
	        'stateless-functional-component': '无状态函数组件',
	        'countDown': '倒计时',
	        'xScroll': 'xScroll组件',
	        'react-china-questions': 'React-China各种问题解决demo',
	        'scrollTop': '测试scrollTop',
	        'ios-scroll-event': 'ios-scroll-event阻塞测试',
	        'loop-scroll': '无缝滚动',
	        'modal-input': 'ios设备第三方输入法键盘弹出模态框位置问题',
	        'filter': 'filterBar',
	        'dynamic-inline-style': '动态行内样式',
	        'PassAsyncDataToChildComponent': '组件获取异步数据更新问题',
	        'redux03-middleware': 'redux中间件',
	        'array-dom': '将模板放在数组中渲染',
	        'changeStateTreeRefData': '能否更改state上引用类型数据',
	        initStateTreeData: '在什么时机初始化state树上的数据有效',
	        downloadAll: 'a标签批量下载组件',
	        MobileInputFocusAndKeyboard: '移动端input变成方式聚焦时，虚拟键盘状态测试',
	        audio: 'audio api测试',
	        iframe: '添加iframe',
	        GrabChildComponentState: '在父组件中获取子组件的state',
	        AjaxInConstructor: '在constructor中ajax',
	        hoc: 'High-Order-Component高阶组件',
	        inheritComponent: '组件继承',
	        composableComponent: '组件组合',
	        'function-bind': 'ES7函数绑定',
	        'ReactChildren': '测试React.Children上的方法',
	        'ios-input-focus': 'ios设备下input focus后, position: fixed失效问题',
	        'async-action-in-componentWillReceiveProps': '在componentWillReceiveProps中dispatch异步action',
	        'callChildComponentMethod': '在父组件中调用子组件的方法',
	        'setChildrenReactElementStyle': '在父组件中设置this.props.children的样式',
	        'getSelfDom': '组件挂载后获取自身dom节点',
	        'input': 'input标签测试',
	        'importImage': 'ES6 import 图片？'
	    }

	}, _class.contextTypes = {
	    router: _react2.default.PropTypes.object
	}, _temp);
	;

	//如果某个component没有export，则会报下面错误，比如Table.react.js中没有export任何东西;
	//Warning: Failed propType: Invalid prop `component` supplied to `Route`
	//Warning: [react-router] Invalid undefined `component` supplied to `Route`.
	App.propTypes = {
	    children: _react2.default.PropTypes.node,
	    demoMap: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRouter.withRouter)(App);
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _articles = __webpack_require__(99);

	var _articles2 = _interopRequireDefault(_articles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticleList = (_temp2 = _class = function (_Component) {
	    (0, _inherits3.default)(ArticleList, _Component);

	    function ArticleList() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, ArticleList);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(ArticleList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            filterText: ''
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(ArticleList, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // console.log(nextProps.filterText);
	            if (typeof nextProps.filterText !== 'undefined' && this.props.filterText !== nextProps.filterText) {
	                this.setState({ filterText: nextProps.filterText });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var articleList = this.renderArticleList();
	            return _react2.default.createElement(
	                'div',
	                { className: 'article-list-container' },
	                articleList
	            );
	        }
	    }, {
	        key: 'renderArticleList',
	        value: function renderArticleList() {
	            var _this2 = this;

	            this.currentRoute = this.props.location.pathname.replace('/', '');
	            var articleDataMap = this.props.items[this.currentRoute];
	            var articleItems = Object.keys(articleDataMap).map(function (articleKey, index) {
	                if (articleKey.indexOf(_this2.state.filterText) !== -1) {
	                    return _react2.default.createElement(
	                        'li',
	                        { key: articleKey },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:void(0)', onClick: function onClick(e) {
	                                    return _this2.handleArticleClick(e, articleKey);
	                                } },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                articleKey
	                            ),
	                            ' - ',
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                articleDataMap[articleKey]
	                            )
	                        )
	                    );
	                }
	            });
	            return _react2.default.createElement(
	                'ul',
	                { className: 'article-list' },
	                articleItems
	            );
	        }
	    }, {
	        key: 'handleArticleClick',
	        value: function handleArticleClick(e, articleKey) {
	            this.context.router.push('/' + this.currentRoute + '/' + articleKey);
	        }
	    }]);
	    return ArticleList;
	}(_react.Component), _class.contextTypes = {
	    router: _react2.default.PropTypes.object
	}, _class.defaultProps = (0, _extends3.default)({}, _articles2.default), _temp2);
	exports.default = ArticleList;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Main = function (_Component) {
	    (0, _inherits3.default)(Main, _Component);

	    function Main() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Main);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Main)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            filterText: '',
	            hideSideBar: false
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Main, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // console.log(nextProps.filterText);
	            if (this.props.filterText !== nextProps.filterText) {
	                this.setState({ filterText: nextProps.filterText });
	            }

	            if (this.props.hideSideBar !== nextProps.hideSideBar) {
	                this.setState({ hideSideBar: nextProps.hideSideBar });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('Main render');
	            var loading = this.props.loading;
	            var _state = this.state;
	            var filterText = _state.filterText;
	            var hideSideBar = _state.hideSideBar;

	            var children = _react2.default.Children.map(this.props.children, function (child, index) {
	                return _react2.default.cloneElement(child, { filterText: filterText });
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'main ' + (hideSideBar ? 'sidebar-hide' : '') },
	                children,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'loading', style: { display: loading ? 'flex' : 'none' } },
	                    _react2.default.createElement('div', { className: 'loading-img' })
	                )
	            );
	        }
	    }]);
	    return Main;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return (0, _extends3.default)({}, state.Common);
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Main);
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NoMatch = function (_React$Component) {
	    (0, _inherits3.default)(NoMatch, _React$Component);

	    function NoMatch() {
	        (0, _classCallCheck3.default)(this, NoMatch);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(NoMatch).apply(this, arguments));
	    }

	    (0, _createClass3.default)(NoMatch, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'Route has no match'
	            );
	        }
	    }]);
	    return NoMatch;
	}(_react2.default.Component);

	exports.default = NoMatch;
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(27);

	var _articles = __webpack_require__(99);

	var _articles2 = _interopRequireDefault(_articles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sidebar = function (_Component) {
	    (0, _inherits3.default)(Sidebar, _Component);

	    function Sidebar(props) {
	        (0, _classCallCheck3.default)(this, Sidebar);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Sidebar).call(this, props));

	        _this.handleTextFilterChange = _this.handleTextFilterChange.bind(_this);
	        _this.toggleSideBar = _this.toggleSideBar.bind(_this);
	        _this.state = {
	            filterText: _this.props.filterText,
	            hideSideBar: _this.props.hideSideBar
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(Sidebar, [{
	        key: 'render',
	        value: function render() {
	            var sideBarItems = this.renderItems();
	            var _state = this.state;
	            var hideSideBar = _state.hideSideBar;
	            var filterText = _state.filterText;

	            return _react2.default.createElement(
	                'div',
	                { className: 'sidebar ' + (hideSideBar ? 'hide' : '') },
	                _react2.default.createElement(
	                    'a',
	                    { id: 'hide-sidebar', onClick: this.toggleSideBar },
	                    '隐藏'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'toc_title', to: '/' },
	                    'React全家桶',
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '(1.0)'
	                    )
	                ),
	                _react2.default.createElement('input', { id: 'article-filter', type: 'text', placeholder: 'Filter', value: filterText, onChange: this.handleTextFilterChange }),
	                sideBarItems
	            );
	        }
	    }, {
	        key: 'handleTextFilterChange',
	        value: function handleTextFilterChange(e) {
	            var value = e.target.value;
	            this.setState({ filterText: value });
	            this.props.handleFilterChangeCallback(value);
	        }
	    }, {
	        key: 'renderItems',
	        value: function renderItems() {
	            var _this2 = this;

	            var items = _articles2.default.items;

	            var libNames = Object.keys(items);
	            return libNames.map(function (libName, index) {
	                var articleKeys = Object.keys(items[libName]);
	                var articles = articleKeys.map(function (articleKey, idx) {
	                    if (articleKey.indexOf(_this2.state.filterText) !== -1) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: articleKey },
	                            '- ',
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/' + libName + '/' + articleKey },
	                                articleKey
	                            )
	                        );
	                    }
	                });
	                return _react2.default.createElement(
	                    'div',
	                    { key: libName, className: 'searchable_section' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'toc_title', href: 'javascript:void(0)', onClick: function onClick(e) {
	                                return _this2.handleTitleClick(e, libName);
	                            } },
	                        libName
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'toc_section' },
	                        articles
	                    )
	                );
	            });
	        }
	    }, {
	        key: 'toggleSideBar',
	        value: function toggleSideBar(e) {
	            var _props$handleSideBarH = this.props.handleSideBarHideCallback;
	            var handleSideBarHideCallback = _props$handleSideBarH === undefined ? function () {} : _props$handleSideBarH;

	            var hideSideBar = !this.state.hideSideBar;
	            this.setState({ hideSideBar: hideSideBar }, handleSideBarHideCallback.bind(this, hideSideBar));
	        }
	    }, {
	        key: 'handleTitleClick',
	        value: function handleTitleClick(e, libName) {
	            this.props.router.push('/' + libName);
	        }
	    }]);
	    return Sidebar;
	}(_react.Component);

	exports.default = (0, _reactRouter.withRouter)(Sidebar);
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Form = function (_React$Component) {
	    (0, _inherits3.default)(Form, _React$Component);

	    function Form() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Form);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            input1Value: 'Hello!',
	            textarea1Value: 'This is a description',
	            textarea3Value: 'Test defaultValue'
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Form, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { id: 'form-demo' },
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: function onSubmit(e) {
	                            return _this2.submit(e);
	                        } },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'input1:',
	                            _react2.default.createElement('input', { name: 'input1', type: 'text', value: this.state.input1Value, onChange: function onChange(e) {
	                                    return _this2.inputChange(e);
	                                } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('textarea', { name: 'textarea1', value: this.state.textarea1Value, onChange: function onChange(e) {
	                                return _this2.textarea1Change(e);
	                            } })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'textarea',
	                            { name: 'textarea2' },
	                            'This is html way'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('textarea', { ref: 'textarea3', name: 'textarea3', defaultValue: this.state.textarea3Value, onChange: function onChange(e) {
	                                return _this2.textarea3Change(e);
	                            } })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'submit' },
	                            '提交'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'textarea3Change',
	        value: function textarea3Change(e) {
	            //下面两种方式都可以
	            // this.setState({textarea3Value: e.target.value});
	            this.setState({ textarea3Value: this.refs.textarea3.value });
	        }
	    }, {
	        key: 'textarea1Change',
	        value: function textarea1Change(e) {
	            this.setState({ textarea1Value: e.target.value });
	        }
	    }, {
	        key: 'submit',
	        value: function submit(e) {
	            var target = e.target;
	            console.log('input1', target.input1.value);
	            console.log('textarea1', target.textarea1.value);
	            console.log('textarea3', target.textarea3.value);

	            console.log(this.state);
	            e.preventDefault();
	        }
	    }, {
	        key: 'inputChange',
	        value: function inputChange(e) {
	            this.setState({
	                input1Value: e.target.value
	            });
	        }
	    }]);
	    return Form;
	}(_react2.default.Component);

	exports.default = Form;
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AdorableAvatars = function (_Component) {
	    (0, _inherits3.default)(AdorableAvatars, _Component);

	    function AdorableAvatars() {
	        (0, _classCallCheck3.default)(this, AdorableAvatars);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AdorableAvatars).apply(this, arguments));
	    }

	    (0, _createClass3.default)(AdorableAvatars, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'adorable-avatars' },
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'Adorable Avatars'
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'section',
	                    { className: 'adorable-avatars-container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement('div', null)
	                    ),
	                    _react2.default.createElement('div', { className: 'row' })
	                )
	            );
	        }
	    }]);
	    return AdorableAvatars;
	}(_react.Component);

	exports.default = AdorableAvatars;
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FileIO = __webpack_require__(150);

	var Action = _interopRequireWildcard(_FileIO);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileIO = function (_Component) {
	    (0, _inherits3.default)(FileIO, _Component);

	    function FileIO() {
	        (0, _classCallCheck3.default)(this, FileIO);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(FileIO).call(this));

	        _this.handleFileUpload = _this.handleFileUpload.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(FileIO, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement('input', { type: 'file', multiple: true, onChange: this.handleFileUpload })
	                )
	            );
	        }
	    }, {
	        key: 'handleFileUpload',
	        value: function handleFileUpload(event) {
	            var dispatch = this.props.dispatch;

	            var formData = new FormData();
	            var fileList = event.target.files;
	            var len = fileList.length;


	            for (var i = 0; i < len; i++) {
	                formData.append('file' + i, fileList[i]);
	            }

	            dispatch(Action.uploadFiles(formData));
	        }
	    }]);
	    return FileIO;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return (0, _extends3.default)({}, state.FileIO);
	};

	exports.default = (0, _reactRedux.connect)()(FileIO);
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxUndo = __webpack_require__(146);

	var _reactRedux = __webpack_require__(6);

	var _AddTodo = __webpack_require__(169);

	var _AddTodo2 = _interopRequireDefault(_AddTodo);

	var _Todos = __webpack_require__(172);

	var _Todos2 = _interopRequireDefault(_Todos);

	var _Footer = __webpack_require__(170);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _TodoList = __webpack_require__(153);

	var Action = _interopRequireWildcard(_TodoList);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoList = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(TodoList, _Component);

	    function TodoList() {
	        (0, _classCallCheck3.default)(this, TodoList);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
	    }

	    (0, _createClass3.default)(TodoList, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var todosFiltered = _props.todosFiltered;
	            var filter = _props.filter;

	            return _react2.default.createElement(
	                'section',
	                { id: 'todoapp' },
	                _react2.default.createElement(_AddTodo2.default, { addTodo: function addTodo(text) {
	                        _this2.addTodo(text);
	                    } }),
	                _react2.default.createElement(_Todos2.default, { todos: todosFiltered, toggleTodo: function toggleTodo(index) {
	                        return _this2.toggleTodo(index);
	                    }, markAll: function markAll() {
	                        return _this2.markAll();
	                    } }),
	                _react2.default.createElement(_Footer2.default, { currentFilter: filter, onFilterChange: function onFilterChange(filter) {
	                        return _this2.onFilterChange(filter);
	                    }, todoCount: todosFiltered.length })
	            );
	        }
	    }, {
	        key: 'addTodo',
	        value: function addTodo(text) {
	            this.props.dispatch(Action.addTodo(text));
	        }
	    }, {
	        key: 'toggleTodo',
	        value: function toggleTodo(index) {
	            this.props.dispatch(Action.toggleTodo(index));
	        }
	    }, {
	        key: 'onFilterChange',
	        value: function onFilterChange(filter) {
	            this.props.dispatch(Action.setFilter(filter));
	        }
	    }]);
	    return TodoList;
	}(_react.Component), _class.propTypes = {
	    todosFiltered: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        text: _react.PropTypes.string.isRequired,
	        completed: _react.PropTypes.bool.isRequired
	    }).isRequired).isRequired,

	    filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETE']).isRequired
	}, _temp);

	//state中present的todos，需要根据state.visibilityFilter的过滤条件过滤
	//最后通过connect注入到TodoList组件props上的visibleTodos是过滤后的数据
	// const selectTodos = (todos, filter) => {
	//     switch (filter) {
	//         case VisibilityFilters.SHOW_ALL:
	//             return todos;
	//         case VisibilityFilters.SHOW_ACTIVE:
	//             return todos.filter((todo) => !todo.completed);
	//         case VisibilityFilters.SHOW_COMPLETE:
	//             return todos.filter((todo) => todo.completed);
	//     }
	// };

	//该函数的作用是从store的state tree上取出业务逻辑需要的数据，经过逻辑处理后，返回一个对象，这个对象就是需要注入到组件中数据。
	//将这个函数(这里是select)传入connect方法，将该函数返回的对象，注入到TodoList组件中
	//常见的方法名是mapStateToProps
	// const select = (state) => {
	//     const presentTodos = state.todos.present;
	//     const visibleTodos = selectTodos(presentTodos, state.visibilityFilter);
	//     return {
	//         undoDisabled: state.todos.past.length === 0,
	//         redoDisabled: state.todos.future.length === 0,
	//         visibleTodos,
	//         visibilityFilter: state.visibilityFilter
	//     }
	// };

	var mapStateToProps = function mapStateToProps(state) {
	    return (0, _extends3.default)({}, state.TodoList);
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(TodoList);
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddTodo = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(AddTodo, _Component);

	    function AddTodo() {
	        (0, _classCallCheck3.default)(this, AddTodo);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AddTodo).apply(this, arguments));
	    }

	    (0, _createClass3.default)(AddTodo, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'header',
	                { id: 'header' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'todos'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { id: 'todo-form', onSubmit: function onSubmit(e) {
	                            _this2.addTodoSubmit(e);
	                        } },
	                    _react2.default.createElement('input', { id: 'new-todo', ref: 'add_todo_input', type: 'text', placeholder: 'What needs to be done?', autoFocus: true })
	                )
	            );
	        }
	    }, {
	        key: 'addTodoSubmit',
	        value: function addTodoSubmit(e) {
	            var addTodo = this.props.addTodo;

	            e.preventDefault();
	            var node = this.refs.add_todo_input;
	            var text = node.value.trim();
	            if (!text.length) return;
	            addTodo && addTodo(text);
	            node.value = '';
	        }
	    }]);
	    return AddTodo;
	}(_react.Component), _class.propTypes = {
	    addTodo: _react.PropTypes.func.isRequired
	}, _temp);
	exports.default = AddTodo;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(59);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(Footer, _Component);

	    function Footer() {
	        (0, _classCallCheck3.default)(this, Footer);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Footer, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var actionfilterMap = _props.actionfilterMap;
	            var currentFilter = _props.currentFilter;
	            var todoCount = _props.todoCount;

	            var filterItems = [].concat((0, _toConsumableArray3.default)(actionfilterMap.keys())).map(function (actionType) {
	                var filterName = actionfilterMap.get(actionType);
	                return _react2.default.createElement(
	                    'li',
	                    { key: filterName },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '', className: '' + (filterName === currentFilter ? 'selected' : ''), onClick: function onClick() {
	                                return _this2.handleFilterClick(actionType, filterName);
	                            } },
	                        filterName
	                    )
	                );
	            });
	            return _react2.default.createElement(
	                'footer',
	                { id: 'footer', style: { display: todoCount > 0 ? 'display' : 'none' } },
	                _react2.default.createElement('span', { id: 'todo-count' }),
	                _react2.default.createElement(
	                    'ul',
	                    { id: 'filters' },
	                    filterItems
	                )
	            );
	        }
	    }, {
	        key: 'handleFilterClick',
	        value: function handleFilterClick() {}
	    }]);
	    return Footer;
	}(_react.Component), _class.defaultProps = {
	    actionfilterMap: new Map([['SHOW_ALL', 'All'], ['SHOW_ACTIVE', 'Active'], ['SHOW_COMPLETE', 'Completed']])
	}, _temp);


	Footer.PropTypes = {
	    filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETE', 'SHOW_ACTIVE']).isRequired,

	    onFilterChange: _react.PropTypes.func.isRequired
	};

	exports.default = Footer;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Todo = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(Todo, _Component);

	    function Todo() {
	        (0, _classCallCheck3.default)(this, Todo);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Todo).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Todo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'li',
	                { style: {
	                        textDecoration: this.props.completed ? 'line-through' : 'none',
	                        cursor: this.props.completed ? 'default' : 'pointer'
	                    },
	                    onClick: this.props.onClick },
	                this.props.text
	            );
	        }
	    }]);
	    return Todo;
	}(_react.Component), _class.propTypes = {
	    onClick: _react.PropTypes.func.isRequired
	}, _temp);
	exports.default = Todo;
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(171);

	var _Todo2 = _interopRequireDefault(_Todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Todos = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(Todos, _Component);

	    function Todos() {
	        (0, _classCallCheck3.default)(this, Todos);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Todos).call(this));

	        _this.handleMarkAll = _this.handleMarkAll.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Todos, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var todos = this.props.todos;

	            var todoItems = todos.map(function (todo, index) {
	                return _react2.default.createElement(_Todo2.default, (0, _extends3.default)({}, todo, { key: index, onClick: function onClick(e) {
	                        return _this2.handleToggleTodo(e, index);
	                    } }));
	            });
	            return _react2.default.createElement(
	                'section',
	                { id: 'main', style: { display: todos.length > 0 ? 'display' : 'none' } },
	                _react2.default.createElement('input', { type: 'checkbox', id: 'toggle-all', onClick: this.handleMarkAll }),
	                _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'toggle-all' },
	                    'Mark all as complete'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { id: 'todo-list' },
	                    todoItems
	                )
	            );
	        }
	    }, {
	        key: 'handleToggleTodo',
	        value: function handleToggleTodo(index) {
	            var toggleTodo = this.props.toggleTodo;

	            toggleTodo && toggleTodo(index);
	        }
	    }, {
	        key: 'handleMarkAll',
	        value: function handleMarkAll() {
	            var markAll = this.props.markAll;

	            markAll && markAll();
	        }
	    }]);
	    return Todos;
	}(_react.Component), _class.propTypes = {
	    toggleTodo: _react.PropTypes.func.isRequired,
	    todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        text: _react.PropTypes.string.isRequired,
	        completed: _react.PropTypes.bool.isRequired
	    }).isRequired).isRequired,
	    markAll: _react.PropTypes.func.isRequired
	}, _temp);
	exports.default = Todos;
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(351);

	__webpack_require__(352);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(87);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChildComponent = function (_Component) {
	    (0, _inherits3.default)(ChildComponent, _Component);

	    function ChildComponent() {
	        (0, _classCallCheck3.default)(this, ChildComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ChildComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ChildComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log('ChildComponent will mount');
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log('ChildComponent did mount');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('ChildComponent render');
	            return _react2.default.createElement(
	                'div',
	                null,
	                'child component'
	            );
	        }
	    }, {
	        key: 'say',
	        value: function say() {
	            alert('What the hell?');
	        }
	    }]);
	    return ChildComponent;
	}(_react.Component);

	var ParentComponent = function (_Component2) {
	    (0, _inherits3.default)(ParentComponent, _Component2);

	    function ParentComponent() {
	        (0, _classCallCheck3.default)(this, ParentComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ParentComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ParentComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log('ParentComponent will mount');
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log('ParentComponent did mount');
	            // const el = ReactDOM.findDOMNode(this);
	            // console.log(el);
	            var ChildComponentIns = _reactDom2.default.render(_react2.default.createElement(ChildComponent, null), document.getElementById('content'));

	            ChildComponentIns.say();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('ParentComponent render');
	            return _react2.default.createElement(
	                'div',
	                { id: 'parent-component' },
	                'parent component',
	                _react2.default.createElement('div', { id: 'content' })
	            );
	        }
	    }]);
	    return ParentComponent;
	}(_react.Component);

	// console:

	//直接添加组件的形式：
	//ParentComponent will mount
	//ParentComponent render: 1
	//ChildComponent will mount
	//ChildComponent render: 1
	//ChildComponent did mount
	//ParentComponent did mount

	//通过ReactDOM.render的方式添加子组件:
	//ParentComponent will mount
	//ParentComponent render: 1
	//ParentComponent did mount
	//ChildComponent will mount
	//ChildComponent render: 1
	//ChildComponent did mount

	exports.default = ParentComponent;
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _AsyncActionInComponentWillReceiveProps = __webpack_require__(54);

	var Action = _interopRequireWildcard(_AsyncActionInComponentWillReceiveProps);

	var _actions = __webpack_require__(154);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AsyncActionInComponentWillReceiveProps = function (_Component) {
	    (0, _inherits3.default)(AsyncActionInComponentWillReceiveProps, _Component);

	    function AsyncActionInComponentWillReceiveProps() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, AsyncActionInComponentWillReceiveProps);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(AsyncActionInComponentWillReceiveProps)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            count: 2
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(AsyncActionInComponentWillReceiveProps, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var AsyncActionInCWRP = _props.AsyncActionInCWRP;

	            dispatch(Action.fetchCity());
	            console.log(_actions2.default);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;

	            var dispatch = nextProps.dispatch;
	            var AsyncActionInCWRP = nextProps.AsyncActionInCWRP;
	            var cityMap = AsyncActionInCWRP.cityMap;

	            console.count('AsyncActionInComponentWillReceiveProps componentWillReceiveProps');

	            console.log(this.props.AsyncActionInCWRP === nextProps.AsyncActionInCWRP);

	            //在componentWillReceiveProps中不加条件或者条件永远成立的dispatch将会导致死循环。
	            // dispatch(Action.fetchCity())

	            if (this.state.count > 1) {
	                dispatch(Action.fetchCity()).then(function (store) {
	                    console.assert(store.AsyncActionInCWRP.cityMap === nextProps.AsyncActionInCWRP.cityMap, 'nextProps.AsyncActionInCWRP.cityMap is equal with store which resolve from async action promise');
	                    _this2.setState({ count: _this2.state.count - 1 });
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('AsyncActionInComponentWillReceiveProps render');
	            var AsyncActionInCWRP = this.props.AsyncActionInCWRP;
	            var cityMap = AsyncActionInCWRP.cityMap;

	            var cityItems = Object.keys(cityMap).map(function (cityKey) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: cityKey },
	                    cityMap[cityKey]
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图：'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    cityItems
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '结论：'
	                ),
	                _react2.default.createElement(
	                    'ol',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '在componentWillReceiveProps中，this.props === nextProps - ',
	                        _react2.default.createElement(
	                            'i',
	                            null,
	                            'false'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        'this.props上的所有引用类型的数据和nextProps上的引用类型的数据不相等'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '在componentWillReceiveProps中，this.props.dispatch和nextProps..dispatch是两个不同的引用地址。'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '在componentWillReceiveProps中不加条件或者条件永远成立的dispatch将会导致死循环。'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '从异步action中通过promise.resolve(getState())返回的store上得reducer和nextProps上得reducer是不同的引用。'
	                    )
	                )
	            );
	        }
	    }]);
	    return AsyncActionInComponentWillReceiveProps;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return { AsyncActionInCWRP: state.AsyncActionInCWRP };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(AsyncActionInComponentWillReceiveProps);
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AutoComplete = function (_Component) {
	    (0, _inherits3.default)(AutoComplete, _Component);

	    function AutoComplete() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, AutoComplete);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoComplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleInputChange = function (e) {
	            var onInputChange = _this.props.onInputChange;

	            var value = e.target.value.trim();
	            if (_this.value === value) return;
	            _this.value = value;
	            onInputChange && onInputChange(value);
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(AutoComplete, [{
	        key: 'render',
	        value: function render() {
	            console.count('AutoComplete render ');
	            var _props$dataList = this.props.dataList;
	            var dataList = _props$dataList === undefined ? [] : _props$dataList;

	            var autoCompleteItems = dataList.map(function (data, index) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: data.ID },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'left' },
	                        _react2.default.createElement('img', { className: 'thumbnail', src: data.Image, alt: '' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'right' },
	                        data.Title
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'auto-complete-input' },
	                            '搜索书名'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', id: 'auto-complete-input', placeholder: '输入要搜索的书名', onChange: this.handleInputChange })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'auto-complete-list' },
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        autoCompleteItems
	                    )
	                )
	            );
	        }
	    }]);
	    return AutoComplete;
	}(_react.Component);

	exports.default = AutoComplete;
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _AutoComplete = __webpack_require__(176);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _AutoComplete3 = __webpack_require__(147);

	var Action = _interopRequireWildcard(_AutoComplete3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AutoCompletePage = function (_Component) {
	    (0, _inherits3.default)(AutoCompletePage, _Component);

	    function AutoCompletePage() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, AutoCompletePage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoCompletePage)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleInputChange = function (text) {
	            console.log(text);
	            var dispatch = _this.props.dispatch;

	            dispatch(Action.fetchAutoCompleteData(text));
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(AutoCompletePage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var Books = _props.Books;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('AutoCompletePage render');
	            var Books = this.props.Books;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_AutoComplete2.default, { onInputChange: this.handleInputChange, dataList: Books })
	            );
	        }
	    }]);
	    return AutoCompletePage;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return (0, _extends3.default)({}, state.AutoComplete);
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(AutoCompletePage);
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChangeStateTreeRefData = function (_Component) {
	    (0, _inherits3.default)(ChangeStateTreeRefData, _Component);

	    function ChangeStateTreeRefData() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, ChangeStateTreeRefData);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChangeStateTreeRefData)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.setEditorName = function (e) {
	            var editor = _this.props.editor;

	            editor.name = 'webstorm';
	            _this.forceUpdate(function () {
	                //callback
	            });
	        }, _this.setEditorRef = function (e) {
	            //报错，Uncaught TypeError: Cannot assign to read only property 'editor' of object '#<Object>'
	            _this.props.editor = { name: 'Atom', company: 'github' };
	        }, _this.setUsername = function () {
	            //报错，Uncaught TypeError: Cannot assign to read only property 'user' of object '#<Object>'
	            _this.props.user = 'marong';
	        }, _this.handleEditorNameChange = function (e) {
	            _this.props.editor.name = e.target.value;
	            _this.forceUpdate();
	        }, _this.handleEditorCompanyChange = function (e) {
	            _this.props.editor.company = e.target.value;
	            _this.forceUpdate();
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(ChangeStateTreeRefData, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            console.count('componentWillReceiveProps');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var editor = this.props.editor;

	            console.log(editor);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'Editor Name is ',
	                    editor.name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'Company is ',
	                    editor.company
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', { type: 'text', defaultValue: editor.name, onChange: this.handleEditorNameChange })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', { type: 'text', defaultValue: editor.company, onChange: this.handleEditorCompanyChange })
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: this.setEditorName },
	                    '修改editor对象中属性的值'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: this.setEditorRef },
	                    '修改editor对象的引用'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: this.setUsername },
	                    '修改字符串类型数据'
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '数据：'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'pre',
	                        null,
	                        JSON.stringify(editor, null, 4)
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '结论：'
	                ),
	                _react2.default.createElement(
	                    'ol',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '可以修改state树上对象引用类型内的属性的值，下面可以实现视图的更新，也不会有error和warning，但不建议这样做。'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '标准做法还是通过dispatch action来修改store中的数据，注入在props上的数据变化后，触发re-render。'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        'this.props.editor = ',
	                        '{...}',
	                        '，不能直接修改props上某个引用类型数据的引用。报错'
	                    )
	                )
	            );
	        }
	    }]);
	    return ChangeStateTreeRefData;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return (0, _extends3.default)({}, state.ChangeStateTreeRefData);
	})(ChangeStateTreeRefData);
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _BComponent = __webpack_require__(180);

	var _BComponent2 = _interopRequireDefault(_BComponent);

	var _ConnectMultipleNestedComponents = __webpack_require__(55);

	var Action = _interopRequireWildcard(_ConnectMultipleNestedComponents);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AComponent = function (_Component) {
	    (0, _inherits3.default)(AComponent, _Component);

	    function AComponent() {
	        (0, _classCallCheck3.default)(this, AComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(AComponent, [{
	        key: 'render',
	        value: function render() {
	            var messageA = this.props.ConnectMultipleNestedComponents.messageA;

	            console.count('AComponent render');

	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid blue', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'A component ',
	                    messageA
	                ),
	                _react2.default.createElement(_BComponent2.default, null)
	            );
	        }
	    }]);
	    return AComponent;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(AComponent);
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _ConnectMultipleNestedComponents = __webpack_require__(55);

	var Action = _interopRequireWildcard(_ConnectMultipleNestedComponents);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BB = function (_Component) {
	    (0, _inherits3.default)(BComponent, _Component);

	    function BComponent() {
	        (0, _classCallCheck3.default)(this, BComponent);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(BComponent).call(this));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(BComponent, [{
	        key: 'render',
	        value: function render() {
	            var messageB = this.props.ConnectMultipleNestedComponents.messageB;

	            console.count('BComponent render');

	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid red', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'B component ',
	                    messageB
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: this.handleClick },
	                    'click me!'
	                )
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var dispatch = this.props.dispatch;

	            dispatch(Action.updateMessage('messageB', 'angular is awesome'));
	        }
	    }]);
	    return BComponent;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BB);
	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _AComponent = __webpack_require__(179);

	var _AComponent2 = _interopRequireDefault(_AComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
	    };
	};

	var ConnectMultipleNestedComponents = function (_Component) {
	    (0, _inherits3.default)(ConnectMultipleNestedComponents, _Component);

	    function ConnectMultipleNestedComponents() {
	        (0, _classCallCheck3.default)(this, ConnectMultipleNestedComponents);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ConnectMultipleNestedComponents).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ConnectMultipleNestedComponents, [{
	        key: 'render',
	        value: function render() {
	            var message = this.props.ConnectMultipleNestedComponents.message;

	            console.count('ConnectMultipleNestedComponents render');
	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid green', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'container component ',
	                    message
	                ),
	                _react2.default.createElement(_AComponent2.default, null)
	            );
	        }
	    }]);
	    return ConnectMultipleNestedComponents;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ConnectMultipleNestedComponents);
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DefineReduxStateDataStructure = __webpack_require__(149);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefineReduxStateDataStructure = (_temp = _class = function (_Component) {
		(0, _inherits3.default)(DefineReduxStateDataStructure, _Component);

		function DefineReduxStateDataStructure() {
			(0, _classCallCheck3.default)(this, DefineReduxStateDataStructure);

			var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DefineReduxStateDataStructure).call(this));

			_this.state = {
				city: 'London'
			};

			_this.selectChange = _this.selectChange.bind(_this);
			return _this;
		}

		(0, _createClass3.default)(DefineReduxStateDataStructure, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.fetchWeatherData();
			}
		}, {
			key: 'fetchWeatherData',
			value: function fetchWeatherData() {
				var dispatch = this.props.dispatch;

				dispatch((0, _DefineReduxStateDataStructure.fetchWeatherData)(this.state.city));
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var weather = _props.weather;
				var error = _props.error;
				var cities = _props.cities;
				var date = _props.date;
				var tableItems = _props.tableItems;

				var cityOptions = Object.keys(cities).map(function (city) {
					return _react2.default.createElement(
						'option',
						{ key: city, value: city },
						cities[city]
					);
				});

				var tableRow = tableItems.map(function (tableItem) {
					var key = tableItem.toLowerCase();
					if (tableItem !== 'Geo coords') {
						return _react2.default.createElement(
							'tr',
							{ key: tableItem },
							_react2.default.createElement(
								'td',
								null,
								tableItem
							),
							_react2.default.createElement(
								'td',
								null,
								weather[key]
							)
						);
					} else {
						return _react2.default.createElement(
							'tr',
							{ key: tableItem },
							_react2.default.createElement(
								'td',
								null,
								tableItem
							),
							_react2.default.createElement(
								'td',
								null,
								'[',
								weather.lon,
								', ',
								weather.lat,
								']'
							)
						);
					}
				});

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						'本例使用openweatherapi'
					),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						'p',
						null,
						'视图：'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'form',
							null,
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									{ htmlFor: 'city-list' },
									'Select City:'
								),
								_react2.default.createElement(
									'select',
									{ onChange: this.selectChange, name: 'city', id: 'city-list', value: this.state.city },
									cityOptions
								)
							)
						)
					),
					_react2.default.createElement(
						'h3',
						null,
						'Weather in City of ',
						this.state.city
					),
					_react2.default.createElement(
						'h2',
						null,
						'temperature: ',
						weather.temp,
						' °C'
					),
					_react2.default.createElement(
						'p',
						null,
						'get at ',
						date
					),
					_react2.default.createElement(
						'table',
						null,
						_react2.default.createElement(
							'tbody',
							null,
							tableRow
						)
					),
					error.cod ? _react2.default.createElement(
						'p',
						null,
						error.message
					) : null,
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						'p',
						null,
						'结论：'
					),
					_react2.default.createElement(
						'p',
						null,
						'使用redux，state树的数据结构需要设计好。如何设计state树的数据结构？'
					),
					_react2.default.createElement(
						'p',
						null,
						'其中一个问题是组件在render时，数据的某个字段未定义的问题。'
					),
					_react2.default.createElement(
						'p',
						null,
						'最好在reducer中定义好state树的数据结构，将字段声明出来，因为在异步请求的数据返回之前，组件会走一遍render方法，这时候如果没定义字段，会报字段没有定义的错误。'
					),
					_react2.default.createElement(
						'p',
						null,
						'state树的数据结构设计的扁平一些好，至少在使用Object.assign()的时候不用嵌套多层对象。'
					)
				);
			}
		}, {
			key: 'selectChange',
			value: function selectChange(e) {
				var value = e.target.value;
				this.setState({ city: value }, this.fetchWeatherData);
			}
		}]);
		return DefineReduxStateDataStructure;
	}(_react.Component), _class.defaultProps = {
		cities: {
			Shanghai: '上海',
			London: '伦敦'
		},
		tableItems: ['Pressure', 'Humidity', 'Sunrise', 'Sunset', 'Geo coords']
	}, _temp);


	var mapStateToProps = function mapStateToProps(state) {
		return (0, _extends3.default)({}, state.DefineReduxStateDataStructure);
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(DefineReduxStateDataStructure);
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return (0, _extends3.default)({}, state.Es6ComponentInheritEs5Component);
	};
	var ES5Component = _react2.default.createClass({
	    displayName: 'ES5Component',

	    render: function render() {
	        return null;
	    },

	    setTitle: function setTitle(title) {
	        var _props = this.props;
	        var dispatch = _props.dispatch;
	        var content = _props.content;

	        document.title = title || '';
	    }
	});

	var ES6Component = function (_ES5Component) {
	    (0, _inherits3.default)(ES6Component, _ES5Component);

	    function ES6Component(props, context) {
	        (0, _classCallCheck3.default)(this, ES6Component);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ES6Component).call(this, props, context));

	        _this.state = {
	            isInheritSuccess: true
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(ES6Component, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            try {
	                this.setTitle('es6写法的组件能否继承es5写法的组件');
	            } catch (e) {
	                this.setState({ isInheritSuccess: false });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '测试结果：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '是否继承成功：',
	                    this.state.isInheritSuccess ? '继承成功' : '继承失败'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'connect前, 继承成功，ES5Component是 function (props, context, updater) ',
	                    '{...}'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'connect后，继承失败，最后返回的ES5Component是 function Connect(props, context) ',
	                    '{...}'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'connect后返回的class已经不是ES5Component的class了'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '这是个问题。'
	                )
	            );
	        }
	    }]);
	    return ES6Component;
	}(ES5Component);

	exports.default = ES6Component;
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _reactRouter = __webpack_require__(27);

	var _InitReduxStateTreeDataInComponentWillMount = __webpack_require__(95);

	var Actions = _interopRequireWildcard(_InitReduxStateTreeDataInComponentWillMount);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InitReduxStateTreeDataInComponentWillMount = function (_Component) {
	    (0, _inherits3.default)(InitReduxStateTreeDataInComponentWillMount, _Component);

	    function InitReduxStateTreeDataInComponentWillMount() {
	        (0, _classCallCheck3.default)(this, InitReduxStateTreeDataInComponentWillMount);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InitReduxStateTreeDataInComponentWillMount).apply(this, arguments));
	    }

	    (0, _createClass3.default)(InitReduxStateTreeDataInComponentWillMount, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.dispatch(Actions.initState());
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // this.props.dispatch(Actions.initState());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var page = _props.page;
	            var books = _props.books;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图:'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    books.map(function (book, index) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: index },
	                            book,
	                            ' ',
	                            _react2.default.createElement(
	                                'span',
	                                { style: { cursor: 'pointer' }, onClick: function onClick(e) {
	                                        return _this2.handleDelete(e, index);
	                                    } },
	                                '-'
	                            )
	                        );
	                    })
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '当前页：',
	                    page
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return _this2.addPage();
	                        } },
	                    'addPage'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/react-redux' },
	                    '跳转到分类首页'
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '数据:'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'this.props.page: ',
	                    page
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'this.props.books：',
	                    _react2.default.createElement(
	                        'pre',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            JSON.stringify(books, null, 4)
	                        )
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '验证结果：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '初始化redux的state树数据，单考虑实现，在componentWillMount和componentWillUnmount生命周期中都可以。'
	                )
	            );
	        }
	    }, {
	        key: 'handleDelete',
	        value: function handleDelete(e, index) {
	            this.props.dispatch(Actions.deleteBook(index));
	        }
	    }, {
	        key: 'addPage',
	        value: function addPage() {
	            var page = this.props.page + 1;
	            this.props.dispatch(Actions.addPage(page));
	        }
	    }]);
	    return InitReduxStateTreeDataInComponentWillMount;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return state.InitReduxStateTreeDataInComponentWillMount;
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InitReduxStateTreeDataInComponentWillMount);
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _InjectActionCreatorsToComponentProps = __webpack_require__(151);

	var Actions = _interopRequireWildcard(_InjectActionCreatorsToComponentProps);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InjectActionCreatorsToComponentProps = function (_Component) {
	    (0, _inherits3.default)(InjectActionCreatorsToComponentProps, _Component);

	    function InjectActionCreatorsToComponentProps() {
	        (0, _classCallCheck3.default)(this, InjectActionCreatorsToComponentProps);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InjectActionCreatorsToComponentProps).apply(this, arguments));
	    }

	    (0, _createClass3.default)(InjectActionCreatorsToComponentProps, [{
	        key: 'render',
	        value: function render() {
	            //组件的props上有被注入的action creator（getUser和deleteUser），以后直接调用即可
	            //此时，props将没有被注入dispatch方法
	            var _props = this.props;
	            var user = _props.user;
	            var other = _props.other;
	            var getUser = _props.getUser;
	            var deleteUser = _props.deleteUser;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'React redux 02 for testing inject state and action creators'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'username: ',
	                    user.name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'age: ',
	                    user.age
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'other: ',
	                    other
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return getUser();
	                        } },
	                    '获取user'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return deleteUser();
	                        } },
	                    '删除user'
	                )
	            );
	        }
	    }]);
	    return InjectActionCreatorsToComponentProps;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    var _state$InjectActionCr = state.InjectActionCreatorsToComponentProps;
	    var user = _state$InjectActionCr.user;
	    var other = _state$InjectActionCr.other;

	    return { user: user, other: other };
	};

	//向组件的props注入reduxRedux2的所有action creators
	exports.default = (0, _reactRedux.connect)(mapStateToProps, Actions)(InjectActionCreatorsToComponentProps);
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _userHelper = __webpack_require__(159);

	var _userHelper2 = _interopRequireDefault(_userHelper);

	var _InjectStateToEs5ComponentMixins = __webpack_require__(96);

	var Action = _interopRequireWildcard(_InjectStateToEs5ComponentMixins);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InjectStateToEs5ComponentMixins = _react2.default.createClass({
	    displayName: 'InjectStateToEs5ComponentMixins',

	    mixins: [_userHelper2.default],

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            this.isLogin() ? this.renderHome() : this.renderForm()
	        );
	    },
	    renderForm: function renderForm() {
	        return _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleLogin },
	            _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    'username：',
	                    _react2.default.createElement('input', { name: 'username', type: 'text' })
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    'password：',
	                    _react2.default.createElement('input', { name: 'password', type: 'text' })
	                )
	            ),
	            _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'login'
	            )
	        );
	    },
	    handleLogin: function handleLogin(e) {
	        e.preventDefault();
	        var dispatch = this.props.dispatch;

	        var form = e.target;
	        var username = form.username.value.trim();
	        var password = form.password.value.trim();
	        dispatch(Action.login({ username: username, password: password }));
	    },
	    renderHome: function renderHome() {
	        var InjectStateToEs5ComponentMixins = this.props.InjectStateToEs5ComponentMixins;

	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h2',
	                null,
	                'Welcome! ',
	                InjectStateToEs5ComponentMixins.user.name
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                'react-redux通过connect HOC，注入store，在mixins方法中同样可以拿到this.props，及this.props上得方法和属性。'
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                '需要注意的是：mixins方法必须要用',
	                _react2.default.createElement(
	                    'code',
	                    null,
	                    'function'
	                ),
	                '写法，不能用ES6的箭头函数(this.props报错)，因为this指针会不同。而且，由于要使用mixins，ES6的class写法的组件不支持，只能用',
	                _react2.default.createElement(
	                    'code',
	                    null,
	                    'React.createClass'
	                ),
	                '写法。'
	            )
	        );
	    }
	});

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        InjectStateToEs5ComponentMixins: state.InjectStateToEs5ComponentMixins
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InjectStateToEs5ComponentMixins);
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _redux = __webpack_require__(16);

	var _MapDispatchToProps = __webpack_require__(152);

	var ActionCreators = _interopRequireWildcard(_MapDispatchToProps);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MapDispatchToProps = function (_Component) {
	    (0, _inherits3.default)(MapDispatchToProps, _Component);

	    function MapDispatchToProps() {
	        (0, _classCallCheck3.default)(this, MapDispatchToProps);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(MapDispatchToProps).apply(this, arguments));
	    }

	    (0, _createClass3.default)(MapDispatchToProps, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var book = _props.book;
	            var actions = _props.actions;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'book name: ',
	                    book.name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'book author: ',
	                    book.author
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return actions.getBook();
	                        } },
	                    '获取book'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return actions.deleteBook();
	                        } },
	                    '删除book'
	                )
	            );
	        }
	    }]);
	    return MapDispatchToProps;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    var book = state.reactRedux03.book;

	    return { book: book };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return { actions: (0, _redux.bindActionCreators)(ActionCreators, dispatch) };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MapDispatchToProps);
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _MapStateToProps = __webpack_require__(56);

	var _ChildComponent = __webpack_require__(189);

	var _ChildComponent2 = _interopRequireDefault(_ChildComponent);

	var _redux = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MapStateToProps = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(MapStateToProps, _Component);

	    function MapStateToProps(props) {
	        (0, _classCallCheck3.default)(this, MapStateToProps);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(MapStateToProps).call(this, props));
	    }

	    //虽然使用react-redux将state tree上的state注入到组件的props属性上，但是组件内部依旧可以定义自己的defaultProps


	    (0, _createClass3.default)(MapStateToProps, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.dispatch((0, _MapStateToProps.fetchCity)('novaline_12312312313'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'react-redux mapStateToProps'
	                ),
	                _react2.default.createElement(_ChildComponent2.default, { cityList: this.props.cityList, selectCity: this.props.city, onSelectCity: function onSelectCity(e) {
	                        return _this2.onSelectCity(e);
	                    } })
	            );
	        }
	    }, {
	        key: 'onSelectCity',
	        value: function onSelectCity(e) {
	            var cityKey = e.target.value;
	            this.props.dispatch((0, _MapStateToProps.selectCity)(cityKey));
	        }
	    }]);
	    return MapStateToProps;
	}(_react.Component), _class.defaultProps = {
	    defaultProps: {
	        system: 'ubuntu',
	        version: '16.04'
	    }
	}, _temp);

	//[mapStateToProps(state, [ownProps]): stateProps] (Function)
	//为connect传入该参数会使组件订阅redux的store的更新。
	//任何时候store更新了，mapStateToProps会被调用，它的返回值必须是一个原始对象，这个原始对象会被merge到组件的props属性上。
	//如果没有给connect传该参数，组件将不会订阅store的更新。
	//state是store中的全局state，我们不一定要把所有的state传入这个组件，一般都是传入需要的state

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        city: state.city,
	        cityList: state.cityList
	    };
	};

	//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
	//将react组件连接到redux的store，connect方法并没有修改组件class，而是返回一个新的链接好redux的store的组件class（被注入了state和action creators的组件）
	//connect被调用了两次，第一次调用的参数是mapStateToProps,mapDispatchToProps等，第二次调用是组件class
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MapStateToProps);
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChildComponent = function (_Component) {
	    (0, _inherits3.default)(ChildComponent, _Component);

	    function ChildComponent() {
	        (0, _classCallCheck3.default)(this, ChildComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ChildComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ChildComponent, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            // console.log('selectCity', this.props.selectCity);
	            var cityList = this.props.cityList;

	            var options = cityList.map(function (city) {
	                return _react2.default.createElement(
	                    'option',
	                    { key: city.key, value: city.key },
	                    city.name
	                );
	            });

	            return _react2.default.createElement(
	                'form',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement(
	                            'select',
	                            { onChange: function onChange(e) {
	                                    _this2.props.onSelectCity(e);
	                                } },
	                            _react2.default.createElement(
	                                'option',
	                                { value: '' },
	                                '-- 请选择城市 --'
	                            ),
	                            options
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return ChildComponent;
	}(_react.Component);

	//为组件props注入dispatch和cityList
	//ownProps是父组件传过来的props
	//这个方法会在父组件传过来新的props时再次调用


	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    // console.log('ownProps', ownProps);
	    return {
	        selectCity: ownProps.city
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ChildComponent);
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GetEveryTypeParams = function (_Component) {
	    (0, _inherits3.default)(GetEveryTypeParams, _Component);

	    function GetEveryTypeParams() {
	        (0, _classCallCheck3.default)(this, GetEveryTypeParams);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(GetEveryTypeParams).apply(this, arguments));
	    }

	    (0, _createClass3.default)(GetEveryTypeParams, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //http://localhost:8080/react-router01?name=novaline&age=26
	            //http://localhost:8080/react-router01/1?name=novaline&age=26
	            //获取查询字符串，例如?name=novaline&age=26
	            var queryParams = this.props.location.query;
	            //获取params
	            var page = this.props.params.page;
	            this.setState({
	                queryParams: queryParams,
	                page: page
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '获取url中的查询字符串'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '查询字符串：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'name: ',
	                    this.state.queryParams.name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'age: ',
	                    this.state.queryParams.age
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '路由参数：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'page: ',
	                    this.state.page
	                )
	            );
	        }
	    }]);
	    return GetEveryTypeParams;
	}(_react.Component);

	exports.default = GetEveryTypeParams;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactRouter04 = function (_Component) {
	    (0, _inherits3.default)(ReactRouter04, _Component);

	    function ReactRouter04() {
	        (0, _classCallCheck3.default)(this, ReactRouter04);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ReactRouter04).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ReactRouter04, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var main = _props.main;
	            var sidebar = _props.sidebar;

	            return _react2.default.createElement(
	                'div',
	                null,
	                'ReactRouter04',
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    main
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    sidebar
	                )
	            );
	        }
	    }]);
	    return ReactRouter04;
	}(_react.Component);

	exports.default = ReactRouter04;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactRouter02 = function (_Component) {
	    (0, _inherits3.default)(ReactRouter02, _Component);

	    function ReactRouter02(props) {
	        (0, _classCallCheck3.default)(this, ReactRouter02);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ReactRouter02).call(this, props));

	        _this.state = {
	            isSaved: false
	        };

	        _this.routerWillLeave = _this.routerWillLeave.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(ReactRouter02, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // const scope = this;
	            this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	        }
	    }, {
	        key: 'routerWillLeave',
	        value: function routerWillLeave(nextLocation) {
	            //如果要在该方法使用this引用到组件(ReactRoute02)，需要手动绑定该方法到组件上
	            // 返回 false 会继续停留当前页面，
	            // 否则，返回一个字符串，会显示给用户，让其自己决定
	            if (!this.state.isSaved) {
	                return 'Your work is not saved! Are you sure you want to leave?';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '离开路径时，弹出提示'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return _this2.save();
	                        } },
	                    'save'
	                )
	            );
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            this.setState({ isSaved: true });
	        }
	    }]);
	    return ReactRouter02;
	}(_react.Component);

	exports.default = (0, _reactRouter.withRouter)(ReactRouter02);
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//react-router 2.4.0以后的版本，提供了withRouter的高阶组件,直接在组件的props上注入了router对象
	//但老的this.context用法依旧可以正常使用
	//https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.4.0.md

	var TransitionToAllWays = (_temp2 = _class = function (_Component) {
	    (0, _inherits3.default)(TransitionToAllWays, _Component);

	    function TransitionToAllWays(props, context) {
	        var _temp, _this;

	        (0, _classCallCheck3.default)(this, TransitionToAllWays);

	        console.log((_temp = (_this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TransitionToAllWays).call(this, props, context)), _this), _this.state = {
	            data: ['angular', 'jquery', 'backbone', 'react']
	        }, _temp));
	        console.log('props', _this.props);
	        console.log('context', _this.context);
	        return _this;
	    }

	    //ES7的class的静态属性写法


	    (0, _createClass3.default)(TransitionToAllWays, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '路由跳转的N种方式'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/table' },
	                    'link1'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo1();
	                        } },
	                    'transitionTo1'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo2();
	                        } },
	                    'transitionTo2'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo3();
	                        } },
	                    'transitionTo3'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo4();
	                        } },
	                    'transitionTo4'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo5();
	                        } },
	                    'transitionTo5'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo6();
	                        } },
	                    'transitionTo6'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            _this2.transitionTo7();
	                        } },
	                    'transitionTo7'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: { pathname: '/table', query: { the: 'query' } } },
	                    'link2'
	                )
	            );
	        }
	    }, {
	        key: 'transitionTo1',
	        value: function transitionTo1() {
	            _reactRouter.browserHistory.push('/table');
	        }
	    }, {
	        key: 'transitionTo2',
	        value: function transitionTo2() {
	            this.context.router.push('/table');
	        }
	    }, {
	        key: 'transitionTo3',
	        value: function transitionTo3() {
	            this.context.router.transitionTo('table');
	        }
	    }, {
	        key: 'transitionTo4',
	        value: function transitionTo4() {
	            //Warning: [react-router] `props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges
	            // this.props.history.transitionTo('table');
	        }
	    }, {
	        key: 'transitionTo5',
	        value: function transitionTo5() {
	            // this.props.router.push('table');
	            this.props.router.push({
	                pathname: 'table',
	                query: { the: 'query' }
	            });
	        }
	    }, {
	        key: 'transitionTo6',
	        value: function transitionTo6() {
	            //替换浏览器history中当前历史，而不是往里push
	            this.props.router.replace('table');
	        }
	    }, {
	        key: 'transitionTo7',
	        value: function transitionTo7() {
	            //Warning: [react-router] `props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges
	            // this.props.history.pushState('table');
	        }
	    }]);
	    return TransitionToAllWays;
	}(_react.Component), _class.contextTypes = {
	    router: _react.PropTypes.object
	}, _temp2);

	//ES6的class的静态属性写法
	// ReactRouter03.contextTypes = {
	//     router: PropTypes.object
	// }

	exports.default = (0, _reactRouter.withRouter)(TransitionToAllWays);
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AjaxInConstructor = function (_Component) {
	    (0, _inherits3.default)(AjaxInConstructor, _Component);

	    function AjaxInConstructor() {
	        (0, _classCallCheck3.default)(this, AjaxInConstructor);

	        // this.state = {name: '', age: ''};
	        //如果直接在constructor中setState，则会报如下错误：
	        //Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the AjaxInConstructor component.
	        // setTimeout(() => {
	        // this.setState({name: 'novaline', age: 23});
	        // }, 1)

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AjaxInConstructor).call(this));

	        _this.state = { name: '', age: '', content: '' };
	        var loadDataSuccess = function loadDataSuccess(data) {
	            _this.setState(data);
	        };
	        _this.loadData().then(loadDataSuccess);
	        return _this;
	    }

	    (0, _createClass3.default)(AjaxInConstructor, [{
	        key: 'loadData',
	        value: function loadData() {
	            var _this2 = this;

	            return new Promise(function (resolve, reject) {
	                setTimeout(function () {
	                    resolve({
	                        name: '我去去去去nimabi',
	                        age: 123
	                    });
	                }, 2000);
	            }).then(function (person) {
	                return _this2.loadBooks().then(function (data) {
	                    return Object.assign({}, person, { content: data });
	                });
	            });
	        }
	    }, {
	        key: 'loadBooks',
	        value: function loadBooks() {
	            var url = 'http://it-ebooks-api.info/v1/search/angular';
	            return fetch(url).then(function (res) {
	                return res.json();
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var name = _state.name;
	            var age = _state.age;
	            var content = _state.content;
	            var _content$Books = content.Books;
	            var Books = _content$Books === undefined ? [] : _content$Books;


	            var bookItems = Books.map(function (book) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: book.ID },
	                    _react2.default.createElement(
	                        'h1',
	                        null,
	                        book.Title
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        book.Description
	                    ),
	                    _react2.default.createElement('img', { src: book.Image, alt: '' })
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'Can I init component state async?'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'name: ',
	                    name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'age: ',
	                    age
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    bookItems
	                )
	            );
	        }
	    }]);
	    return AjaxInConstructor;
	}(_react.Component);

	exports.default = AjaxInConstructor;
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AudioPlayer = (_temp2 = _class = function (_Component) {
	    (0, _inherits3.default)(AudioPlayer, _Component);

	    function AudioPlayer() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, AudioPlayer);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(AudioPlayer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            progress: 0,
	            volume: 0.5
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(AudioPlayer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._audio.volume = this.state.volume;
	            this._range.value = this.state.volume;

	            this._audio.addEventListener('loadedmetadata', this.loadedmetadata.bind(this));
	        }
	    }, {
	        key: 'loadedmetadata',
	        value: function loadedmetadata(e) {
	            var au = e.target;
	            var duration = au.duration;
	            this._progress.max = duration;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._audio.removeEventListener('loadedmetadata', this.loadedmetadata);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var minVolume = _props.minVolume;
	            var maxVolume = _props.maxVolume;
	            var volumeStep = _props.volumeStep;
	            var maxProgress = _props.maxProgress;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        'Gson & Abley,Amasi - Heaven (Radio Edit).mp3'
	                    )
	                ),
	                _react2.default.createElement(
	                    'audio',
	                    { src: 'http://7xp9vw.com1.z0.glb.clouddn.com/Gson%20&%20Abley,Amasi%20-%20Heaven%20%28Radio%20Edit%29.mp3',
	                        preload: 'metadata', ref: function ref(_ref) {
	                            return _this2._audio = _ref;
	                        }, onTimeUpdate: function onTimeUpdate(e) {
	                            return _this2.onTimeUpdate(e);
	                        } },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Your browser does not support the ',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'audio'
	                        ),
	                        ' element '
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('progress', { onClick: function onClick(e) {
	                            return _this2.handleProgress(e);
	                        }, value: this.state.progress || 0.1, max: maxProgress,
	                        ref: function ref(_ref2) {
	                            return _this2._progress = _ref2;
	                        } })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', onClick: function onClick() {
	                                return _this2.play();
	                            } },
	                        'play'
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', onClick: function onClick() {
	                                return _this2.pause();
	                            } },
	                        'pause'
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', onClick: function onClick() {
	                                return _this2.stop();
	                            } },
	                        'stop'
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', onClick: function onClick() {
	                                return _this2.fastForward();
	                            } },
	                        'FastForward'
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', onClick: function onClick() {
	                                return _this2.rewind();
	                            } },
	                        'Rewind'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement('input', { type: 'range', name: 'volume', min: minVolume, max: maxVolume, step: volumeStep,
	                            onChange: function onChange() {
	                                return _this2.handleVolume();
	                            },
	                            ref: function ref(_ref3) {
	                                return _this2._range = _ref3;
	                            } }),
	                        'volume: ',
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            new Number(this.state.volume * 100).toFixed(2) + '%'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleProgress',
	        value: function handleProgress(e) {
	            e.persist();
	            // console.log(e);
	            var prg = e.target;
	            var percent = e.clientX / e.target.clientWidth;
	            // console.log(percent);
	            this._audio.currentTime = percent * this._progress.max;
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            if (this._audio.ended || this._audio.paused) {
	                this._audio.play();
	            }
	        }
	    }, {
	        key: 'pause',
	        value: function pause() {
	            this._audio.pause();
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.pause();
	            this._audio.currentTime = 0;
	        }
	    }, {
	        key: 'handleVolume',
	        value: function handleVolume() {
	            var value = this._range.value;
	            console.log('volume: %s', value);
	            this._audio.volume = value;
	            this.setState({ volume: value });
	        }
	    }, {
	        key: 'fastForward',
	        value: function fastForward() {
	            this._audio.currentTime += this.props.fastForwardStep;
	        }
	    }, {
	        key: 'rewind',
	        value: function rewind() {
	            this._audio.currentTime -= this.props.fastForwardStep;
	        }
	    }, {
	        key: 'onTimeUpdate',
	        value: function onTimeUpdate(e) {
	            var _audio = this._audio;
	            var currentTime = _audio.currentTime;
	            var duration = _audio.duration;
	            // console.log('currentTime: %s', currentTime);
	            // console.log('duration: %s', duration);

	            this.setState({ progress: currentTime });
	        }
	    }]);
	    return AudioPlayer;
	}(_react.Component), _class.defaultProps = {
	    fastForwardStep: 10,
	    volumeStep: 0.05,
	    minVolume: 0,
	    maxVolume: 1,
	    maxProgress: 100
	}, _temp2);
	exports.default = AudioPlayer;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var childComponent = function (_Component) {
	    (0, _inherits3.default)(childComponent, _Component);

	    function childComponent() {
	        (0, _classCallCheck3.default)(this, childComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(childComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(childComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'child component'
	            );
	        }
	    }, {
	        key: 'method1',
	        value: function method1() {
	            alert('child component method1');
	        }
	    }, {
	        key: 'method2',
	        value: function method2() {
	            alert('child component method2');
	        }
	    }]);
	    return childComponent;
	}(_react.Component);

	var callChildComponentMethod = function (_Component2) {
	    (0, _inherits3.default)(callChildComponentMethod, _Component2);

	    function callChildComponentMethod() {
	        (0, _classCallCheck3.default)(this, callChildComponentMethod);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(callChildComponentMethod).apply(this, arguments));
	    }

	    (0, _createClass3.default)(callChildComponentMethod, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //拿到的是子组件的类的实例
	            // console.dir(this._childComponentInstance);
	            //下面这样是调用不到子组件方法的
	            // this._childComponentInstance.method1();
	            // this._childComponentInstance.method2();

	            console.dir(this.refs.child);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'parent component',
	                _react2.default.createElement('childComponent', { ref: 'child' })
	            );
	        }
	    }]);
	    return callChildComponentMethod;
	}(_react.Component);

	exports.default = callChildComponentMethod;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AComponent = function (_Component) {
	    (0, _inherits3.default)(AComponent, _Component);

	    function AComponent() {
	        (0, _classCallCheck3.default)(this, AComponent);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AComponent).call(this));

	        _this.handleClick = _this.handleClick.bind(_this);
	        _this.state = { message: '' };
	        return _this;
	    }

	    (0, _createClass3.default)(AComponent, [{
	        key: 'render',
	        value: function render() {
	            console.count('AComponent render');
	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid red', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'A component ',
	                    this.state.message
	                ),
	                _react2.default.createElement(BComponent, { onClick: this.handleClick })
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(data) {
	            var onClick = this.props.onClick;

	            this.setState({ message: data.messageA });
	            //中间层组件产生的额外的数据，一并返回给顶层组件
	            var dataExt = {
	                ext: 'css is awesome'
	            };
	            onClick && onClick(Object.assign({}, data, dataExt));
	        }
	    }]);
	    return AComponent;
	}(_react.Component);

	var BComponent = function (_Component2) {
	    (0, _inherits3.default)(BComponent, _Component2);

	    function BComponent() {
	        (0, _classCallCheck3.default)(this, BComponent);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(BComponent).call(this));

	        _this2.handleClick = _this2.handleClick.bind(_this2);
	        _this2.state = { message: '' };
	        return _this2;
	    }

	    (0, _createClass3.default)(BComponent, [{
	        key: 'render',
	        value: function render() {
	            console.count('BComponent render');
	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid blue', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'B component ',
	                    this.state.message
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: this.handleClick },
	                    'emit'
	                )
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            var onClick = this.props.onClick;

	            var data = {
	                messageA: 'react is awesome',
	                messageB: 'angular is awesome',
	                message: 'jquery is awesome'
	            };
	            this.setState({ message: data.messageB });
	            onClick && onClick(data);
	        }
	    }]);
	    return BComponent;
	}(_react.Component);

	var ComponentCommunication = function (_Component3) {
	    (0, _inherits3.default)(ComponentCommunication, _Component3);

	    function ComponentCommunication() {
	        (0, _classCallCheck3.default)(this, ComponentCommunication);

	        var _this3 = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ComponentCommunication).call(this));

	        _this3.handleClick = _this3.handleClick.bind(_this3);
	        _this3.state = { message: '', ext: '' };
	        return _this3;
	    }

	    (0, _createClass3.default)(ComponentCommunication, [{
	        key: 'render',
	        value: function render() {
	            console.count('ComponentCommunication render');
	            return _react2.default.createElement(
	                'div',
	                { style: { border: '1px solid green', margin: '20px' } },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'container component ',
	                    this.state.message
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'ext: ',
	                    this.state.ext
	                ),
	                _react2.default.createElement(AComponent, { onClick: this.handleClick })
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(data) {
	            this.setState({ message: data.message, ext: data.ext });
	        }
	    }]);
	    return ComponentCommunication;
	}(_react.Component);

	exports.default = ComponentCommunication;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(87);

	var _NumInput = __webpack_require__(199);

	var _NumInput2 = _interopRequireDefault(_NumInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComposableComponent = function (_Component) {
	    (0, _inherits3.default)(ComposableComponent, _Component);

	    function ComposableComponent() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, ComposableComponent);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(ComposableComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            val: 0
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(ComposableComponent, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_NumInput2.default, {
	                    type: 'range',
	                    val: +this.state.val,
	                    getElementRef: function getElementRef(fn) {
	                        return _this2.getElementRef = fn;
	                    },
	                    update: function update() {
	                        return _this2.update2();
	                    }
	                })
	            );
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            //第一种获取NumInput组件内部input元素引用的方法，input的ref不能用callback形式
	            this.setState({ val: this.refs.numInputInstance.refs.inp.value });
	        }
	    }, {
	        key: 'update2',
	        value: function update2() {
	            //第二种获取NumInput组件内部input元素引用的方法
	            var childRefs = this.getElementRef();
	            console.log(childRefs);
	            this.setState({ val: childRefs.inp.value });
	        }
	    }]);
	    return ComposableComponent;
	}(_react.Component);

	exports.default = ComposableComponent;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NumInput = function (_Component) {
	    (0, _inherits3.default)(NumInput, _Component);

	    function NumInput() {
	        (0, _classCallCheck3.default)(this, NumInput);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(NumInput).apply(this, arguments));
	    }

	    (0, _createClass3.default)(NumInput, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var refs = {
	                inp: this._inp
	            };
	            this.props.getElementRef(function () {
	                return refs;
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('input', {
	                    ref: function ref(_ref) {
	                        return _this2._inp = _ref;
	                    },
	                    type: this.props.type,
	                    defaultValue: this.props.val,
	                    onChange: this.props.update
	                }),
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    this.props.label,
	                    ' - ',
	                    this.props.val
	                )
	            );
	        }
	    }]);
	    return NumInput;
	}(_react.Component);

	exports.default = NumInput;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CountDown = __webpack_require__(98);

	var _CountDown2 = _interopRequireDefault(_CountDown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CountDownPage = function (_Component) {
	    (0, _inherits3.default)(CountDownPage, _Component);

	    function CountDownPage() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, CountDownPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(CountDownPage)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            isBegin: false
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(CountDownPage, [{
	        key: 'render',
	        value: function render() {
	            //start 服务器当前时间
	            var scope = this;
	            var options = {
	                start: new Date('2016/6/16 08:59:50'),
	                end: new Date('2016/6/16 09:00'),
	                period: new Date('2016/6/16 15:00').getTime() - new Date('2016/6/16 14:59').getTime(),
	                cb: function cb() {
	                    scope.setState({ isBegin: true });
	                }
	            };

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '倒计时'
	                ),
	                _react2.default.createElement(_CountDown2.default, options),
	                this.state.isBegin ? _react2.default.createElement(
	                    'p',
	                    null,
	                    '活动开始啦～～～'
	                ) : null
	            );
	        }
	    }]);
	    return CountDownPage;
	}(_react.Component);

	exports.default = CountDownPage;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CreateIframe = function (_Component) {
	    (0, _inherits3.default)(CreateIframe, _Component);

	    function CreateIframe() {
	        (0, _classCallCheck3.default)(this, CreateIframe);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(CreateIframe).apply(this, arguments));
	    }

	    (0, _createClass3.default)(CreateIframe, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.appendIframe('http://www.baidu.com');
	        }
	    }, {
	        key: 'appendIframe',
	        value: function appendIframe(url) {
	            var iframe = document.createElement('iframe');
	            iframe.src = url;
	            iframe.addEventListener('load', this.handleIframeLoad.bind(this, iframe));
	            document.body.appendChild(iframe);
	        }
	    }, {
	        key: 'handleIframeLoad',
	        value: function handleIframeLoad(iframe) {
	            var _this2 = this;

	            this.timeoutid = setTimeout(function () {
	                iframe.removeEventListener('load', _this2.handleIframeLoad);
	                document.body.removeChild(iframe);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'append a iframe'
	            );
	        }
	    }]);
	    return CreateIframe;
	}(_react.Component);

	exports.default = CreateIframe;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DownloadAll = __webpack_require__(156);

	var _DownloadAll2 = _interopRequireDefault(_DownloadAll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DownloadAllTest = function (_Component) {
	    (0, _inherits3.default)(DownloadAllTest, _Component);

	    function DownloadAllTest() {
	        (0, _classCallCheck3.default)(this, DownloadAllTest);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DownloadAllTest).apply(this, arguments));
	    }

	    (0, _createClass3.default)(DownloadAllTest, [{
	        key: 'render',
	        value: function render() {
	            var links = ['http://7xp9vw.com1.z0.glb.clouddn.com/image/2.jpg', 'http://7xp9vw.com1.z0.glb.clouddn.com/image/3.jpg', 'http://7xp9vw.com1.z0.glb.clouddn.com/image/5.jpg'];

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _DownloadAll2.default,
	                    { links: links },
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button' },
	                        '下载全部'
	                    )
	                )
	            );
	        }
	    }]);
	    return DownloadAllTest;
	}(_react.Component);

	exports.default = DownloadAllTest;
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DynamicInlineStyle = function (_Component) {
		(0, _inherits3.default)(DynamicInlineStyle, _Component);

		function DynamicInlineStyle() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, DynamicInlineStyle);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(DynamicInlineStyle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				toggleStyle: true
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(DynamicInlineStyle, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var buttonStyle = void 0;
				var backgroundColor = void 0,
				    color = void 0;
				if (this.state.toggleStyle) {
					buttonStyle = {
						backgroundColor: '#ff6f00',
						color: '#fff'
					};
					backgroundColor = '#ff6f00';
					color = '#fff';
				} else {
					buttonStyle = {
						backgroundColor: 'lightblue',
						color: '#666'
					};
					backgroundColor = 'lightblue';
					color = '#666';
				}
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'button',
						{ style: buttonStyle, type: 'button', onClick: function onClick() {
								return _this2.changeButtonColor();
							} },
						'按钮1'
					),
					_react2.default.createElement(
						'button',
						{ type: 'button', style: { backgroundColor: backgroundColor, color: color }, onClick: function onClick() {
								return _this2.changeButtonColor();
							} },
						'按钮2'
					)
				);
			}
		}, {
			key: 'changeButtonColor',
			value: function changeButtonColor() {
				this.setState({ toggleStyle: !this.state.toggleStyle });
			}
		}]);
		return DynamicInlineStyle;
	}(_react.Component);

	exports.default = DynamicInlineStyle;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FilterBar = __webpack_require__(157);

	var _FilterBar2 = _interopRequireDefault(_FilterBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Filter = function (_Component) {
	    (0, _inherits3.default)(Filter, _Component);

	    function Filter() {
	        (0, _classCallCheck3.default)(this, Filter);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Filter).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Filter, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var filters = [{
	                text: '全部分类',
	                key: 'category',
	                type: 'category',
	                categories: [{
	                    "id": "30003",
	                    "name": "医疗器械",
	                    "children": [{
	                        "id": "30039",
	                        "name": "检测用具",
	                        "children": [{
	                            "id": "30324",
	                            "name": "血压计"
	                        }]
	                    }]
	                }]
	            }, {
	                text: '默认排序',
	                key: 'sort',
	                type: 'sort',
	                sorts: [{ text: '默认排序', field: "score", direction: "DESC" }, { text: "销量排序", field: "salesVolume", direction: "DESC" }, { text: "价格由低到高", field: "price", direction: "ASC" }, { text: "价格由高到低", field: "price", direction: "DESC" }]

	            }, {
	                text: '健康金',
	                key: 'healthGoldItem',
	                type: 'checkbox',
	                isChecked: true
	            }];

	            var oneHour = {
	                text: '1小时送达',
	                key: 'oneHour',
	                type: 'checkbox',
	                isChecked: false
	            };

	            var bizTypes = ['O2O_ONLY', 'B2C_ONLY', 'BOTH_O2O_B2C'];

	            var bizType = bizTypes[0];

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_FilterBar2.default, {
	                    filters: filters,
	                    onFilterChange: function onFilterChange(filterObj) {
	                        return _this2.onFilterChange(filterObj);
	                    } })
	            );
	        }
	    }, {
	        key: 'onFilterChange',
	        value: function onFilterChange(filterData) {
	            console.log(filterData);
	            //TODO 拿到筛选数据，调用后台接口
	        }
	    }]);
	    return Filter;
	}(_react.Component);

	exports.default = Filter;
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputTypeCheckbox = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(InputTypeCheckbox, _Component);

	    function InputTypeCheckbox(props) {
	        (0, _classCallCheck3.default)(this, InputTypeCheckbox);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InputTypeCheckbox).call(this, props));

	        _this.state = {
	            //这里，初始化state，ES7写法，要在这里取到this.props，必须在constructor中调用super(props)
	            checkbox: function (checkboxData) {
	                var data = {};
	                var checkboxKeys = Object.keys(checkboxData);
	                checkboxKeys.map(function (key) {
	                    return data[key] = false;
	                });
	                return data;
	            }(_this.props.checkboxData)
	        };

	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(InputTypeCheckbox, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var checkboxKeys = Object.keys(this.props.checkboxData);
	            var checkboxes = checkboxKeys.map(function (checkboxKey) {
	                return _react2.default.createElement(
	                    'label',
	                    { key: checkboxKey },
	                    _this2.props.checkboxData[checkboxKey],
	                    _react2.default.createElement('input', { type: 'checkbox', value: checkboxKey, checked: _this2.state.checkbox[checkboxKey], onChange: function onChange(e) {
	                            return _this2.checkboxChange(e);
	                        } })
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: this.handleSubmit },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        checkboxes
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'submit' },
	                            '提交'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'pre',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'state: '
	                        ),
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            JSON.stringify(this.state, null, 4)
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'checkboxChange',
	        value: function checkboxChange(e) {
	            var dom_checkbox = e.target;
	            var value = dom_checkbox.value;
	            var newCheckboxState = this.state.checkbox;
	            newCheckboxState[value] = dom_checkbox.checked;

	            this.setState({ checkbox: newCheckboxState });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            //As of v0.14, returning false from an event handler will no longer stop event propagation. Instead, e.stopPropagation() or e.preventDefault() should be triggered manually, as appropriate.
	            // return false;
	        }
	    }]);
	    return InputTypeCheckbox;
	}(_react.Component), _class.defaultProps = {
	    checkboxData: {
	        'cb1': '多选框1',
	        'cb2': '多选框2',
	        'cb3': '多选框3'
	    }
	}, _temp);
	exports.default = InputTypeCheckbox;
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputTypeText = function (_Component) {
	    (0, _inherits3.default)(InputTypeText, _Component);

	    function InputTypeText() {
	        (0, _classCallCheck3.default)(this, InputTypeText);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InputTypeText).call(this));

	        _this.state = {
	            value: 'novaline',
	            text: 'test test test',
	            textNull: null,
	            textUndefined: undefined,
	            textEmptyString: ''
	        };

	        _this.handleTextChange = _this.handleTextChange.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(InputTypeText, [{
	        key: 'handleTextChange',
	        value: function handleTextChange(e) {
	            console.log(this.state.text);
	            console.log(e.target.value);
	            this.setState({ text: e.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var value = _state.value;
	            var text = _state.text;
	            var textNull = _state.textNull;
	            var textUndefined = _state.textUndefined;
	            var textEmptyString = _state.textEmptyString;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例1：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value(non-empty): '
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: value }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '报错：',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `InputTypeText`.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '设置了',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'input'
	                        ),
	                        '的',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性，则这是一个controlled component，用户将不能与之交互，不能改变它的值。'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.value: ',
	                            value
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例2：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-defaultValue：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', defaultValue: value }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '设置了',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'defaultValue'
	                        ),
	                        '属性，则这是一个uncontrolled component，用户输入的值将直接反应在视图上。'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.value: ',
	                            value
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例3：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value(null)：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: textNull }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '本来你想要一个controlled component，即设置了',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性值的input，用户不能改变其值。但是意外地，',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性被设置为',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'null'
	                        ),
	                        '，这时候用户依旧可以改变其值。'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.textNull: ',
	                            JSON.stringify(textNull)
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例4：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value(undefined)：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: textUndefined }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '本来你想要一个controlled component，即设置了',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性值的input，用户不能改变其值。但是意外地，',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性被设置为',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'undefined'
	                        ),
	                        '，这时候用户依旧可以改变其值。'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.textUndefined: ',
	                            typeof textUndefined === 'undefined' ? 'undefined' : textUndefined
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例5：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value(',
	                        "{''}",
	                        ')：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: textEmptyString }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性值是空字符串的是controlled component。'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.textEmptyString: ',
	                            textEmptyString
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        '例6：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value(\'\')：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: '' }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'value'
	                        ),
	                        '属性值是空字符串的是controlled component。'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h4',
	                        null,
	                        '例7：'
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'input-value-onChange：'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', value: text, onChange: this.handleTextChange }),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '数据：',
	                        _react2.default.createElement(
	                            'pre',
	                            null,
	                            'this.state.text: ',
	                            text
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return InputTypeText;
	}(_react.Component);

	exports.default = InputTypeText;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FunctionBind = function (_Component) {
	    (0, _inherits3.default)(FunctionBind, _Component);

	    function FunctionBind() {
	        (0, _classCallCheck3.default)(this, FunctionBind);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(FunctionBind).call(this));

	        _this.method1 = function () {
	            console.log('method1', _this); //'method1' FunctionBind
	        };

	        _this.method4 = _this.method4.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(FunctionBind, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _context;

	            var _Array$prototype = Array.prototype;
	            var filter = _Array$prototype.filter;
	            var map = _Array$prototype.map;

	            var el = (_context = (_context = document.querySelectorAll('p'), filter).call(_context, function (el) {
	                return el.id !== 'fucking-SB';
	            }), map).call(_context, function (p) {
	                return p.style.cssText = 'background-color: blue; color: #fff';
	            });
	        }
	    }, {
	        key: 'method2',
	        value: function method2() {
	            console.log('method2', this); //'method2' null
	        }
	    }, {
	        key: 'method3',
	        value: function method3() {
	            console.log('method3', this); //'method3' FunctionBind
	        }
	    }, {
	        key: 'method4',
	        value: function method4() {
	            console.log('method4', this); //'method4' FunctionBind
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'fn-bind-container' },
	                _react2.default.createElement('p', { id: 'fucking-SB' }),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'fucking SB hard'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'If you don\'t know, shut your fucking mouth up!'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.method1 },
	                    'call method1'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.method2 },
	                    'call method2'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: function onClick() {
	                            return _this2.method3();
	                        } },
	                    'call method3'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.method4 },
	                    'call method4'
	                )
	            );
	        }
	    }]);
	    return FunctionBind;
	}(_react.Component);

	exports.default = FunctionBind;
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _GrabStateByParentComponent = __webpack_require__(209);

	var _GrabStateByParentComponent2 = _interopRequireDefault(_GrabStateByParentComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GrabChildComponentState = function (_Component) {
	    (0, _inherits3.default)(GrabChildComponentState, _Component);

	    function GrabChildComponentState() {
	        (0, _classCallCheck3.default)(this, GrabChildComponentState);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(GrabChildComponentState).apply(this, arguments));
	    }

	    (0, _createClass3.default)(GrabChildComponentState, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            // console.log('getChildState', this.getChildState);
	            var childState = this.getChildState();
	            //do something with GrabStateByParentComponent's state
	            var childFns = this.getChildFns();
	            // console.log(childFns);
	            childFns.fn1();
	            childFns.fn2();
	            console.log(this.GrabStateByParentComponent);
	            console.log(this.GrabStateByParentComponent.state === childState); //true
	            console.log(this.GrabStateByParentComponent.setState === childFns.setState); //true
	            setTimeout(function () {
	                var _context;

	                _this2.GrabStateByParentComponent.setState({ name: 'WTF' });
	                //下面报错
	                // childFns.setState({name: 'WTF'});
	                childFns.setState = (_context = _this2.GrabStateByParentComponent, childFns.setState).bind(_context);
	                childFns.setState({ job: 'fuck off' });
	            }, 2000);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_GrabStateByParentComponent2.default, { ref: function ref(ins) {
	                        return _this3.GrabStateByParentComponent = ins;
	                    }, getChildState: function getChildState(fn) {
	                        return _this3.getChildState = fn;
	                    }, getChildFns: function getChildFns(fns) {
	                        return _this3.getChildFns = fns;
	                    } })
	            );
	        }
	    }]);
	    return GrabChildComponentState;
	}(_react.Component);

	exports.default = GrabChildComponentState;
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GrabStateByParentComponent = function (_Component) {
	    (0, _inherits3.default)(GrabStateByParentComponent, _Component);

	    function GrabStateByParentComponent() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, GrabStateByParentComponent);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(GrabStateByParentComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            name: 'novaline',
	            age: 23,
	            sex: 'female',
	            job: 'web developer'
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(GrabStateByParentComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            var fns = {};
	            var fnNamesTable = ['fn1', 'fn2', 'setState'];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = fnNamesTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var fnName = _step.value;

	                    fns[fnName] = this[fnName];
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.props.getChildState(function () {
	                return _this2.state;
	            });
	            this.props.getChildFns(function () {
	                return fns;
	            });

	            // setTimeout(() => {
	            //     this.setState({name: 'WTF'});
	            // }, 2000)
	        }
	    }, {
	        key: 'fn1',
	        value: function fn1() {
	            console.log('I\'m fn1');
	        }
	    }, {
	        key: 'fn2',
	        value: function fn2() {
	            console.log('I\'m fn2');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var name = _state.name;
	            var age = _state.age;
	            var sex = _state.sex;
	            var job = _state.job;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'name: ',
	                    name
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'age: ',
	                    age
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'sex: ',
	                    sex
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'job: ',
	                    job
	                )
	            );
	        }
	    }]);
	    return GrabStateByParentComponent;
	}(_react.Component);

	exports.default = GrabStateByParentComponent;
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _WrappedComponent = __webpack_require__(212);

	var _WrappedComponent2 = _interopRequireDefault(_WrappedComponent);

	var _Enhance = __webpack_require__(211);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = function Button(props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'button',
	            { type: 'button', onClick: props.update },
	            props.txt,
	            ' - ',
	            props.val
	        )
	    );
	};

	var ButtonEnhanced = (0, _Enhance.Enhance)({})(Button);

	var Label = function Label(props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'label',
	            { onMouseMove: props.update },
	            props.txt,
	            ' - ',
	            props.val
	        )
	    );
	};

	var LabelEnhanced = (0, _Enhance.Enhance)({})(Label);

	//或者装饰器写法
	//需要babel-plugin-transform-decorators-legacy插件支持
	var HOC = (_dec = (0, _Enhance.Enhance)({ title: 'High-Order-Component' }), _dec(_class = function (_Component) {
	    (0, _inherits3.default)(HOC, _Component);

	    function HOC() {
	        (0, _classCallCheck3.default)(this, HOC);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(HOC).apply(this, arguments));
	    }

	    (0, _createClass3.default)(HOC, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // console.log(this)
	            // console.log(this.props)
	            // console.log(this.state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'current title is ',
	                    this.props.title
	                ),
	                _react2.default.createElement(ButtonEnhanced, { txt: 'button', val: '0' }),
	                _react2.default.createElement(LabelEnhanced, { txt: 'label', val: '0' }),
	                _react2.default.createElement(_WrappedComponent2.default, null)
	            );
	        }
	    }]);
	    return HOC;
	}(_react.Component)) || _class);
	//对应Enhance HOC的装饰器写法

	exports.default = HOC;

	// export default Enhance({title: 'High-Order-Component'})(HOC);

	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Enhance = undefined;

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Enhance = function Enhance(_ref) {
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? 'No Title' : _ref$title;
	    return function (ComposedComponent) {
	        var _class, _temp;

	        return _temp = _class = function (_Component) {
	            (0, _inherits3.default)(_class, _Component);

	            function _class() {
	                (0, _classCallCheck3.default)(this, _class);

	                var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(_class).call(this));

	                _this.state = {
	                    val: 1
	                };

	                var funcNames = ['update'];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = funcNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var funcName = _step.value;

	                        _this[funcName] = _this[funcName].bind(_this);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return _this;
	            }

	            (0, _createClass3.default)(_class, [{
	                key: 'update',
	                value: function update() {
	                    this.setState({ val: this.state.val + 1 });
	                }
	            }, {
	                key: 'componentDidMount',
	                value: function componentDidMount() {
	                    this.setTitle(this.props.title);
	                }
	            }, {
	                key: 'setTitle',
	                value: function setTitle(title) {
	                    document.title = title;
	                    return title;
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    var props = (0, _extends3.default)({}, this.props, this.state);
	                    return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, props, { update: this.update }));
	                }
	            }]);
	            return _class;
	        }(_react.Component), _class.defaultProps = {
	            title: ''
	        }, _temp;
	    };
	};

	exports.Enhance = Enhance;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ppHOC(WrappedComponent) {
	    return function (_Component) {
	        (0, _inherits3.default)(_class2, _Component);

	        function _class2() {
	            (0, _classCallCheck3.default)(this, _class2);

	            var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(_class2).call(this));

	            _this.state = {
	                keyword: ''
	            };

	            _this.searchChange = _this.searchChange.bind(_this);
	            _this.proc = _this.proc.bind(_this);
	            return _this;
	        }

	        (0, _createClass3.default)(_class2, [{
	            key: 'proc',
	            value: function proc(WrappedComponentInstance) {
	                //使用ref取得组件实例的引用
	                console.log('WrappedComponentInstance', WrappedComponentInstance);
	                WrappedComponentInstance.method();
	            }
	        }, {
	            key: 'searchChange',
	            value: function searchChange(e) {
	                this.setState({ keyword: e.target.value });
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var props = Object.assign({}, this.props, { ref: this.proc }, {
	                    search: {
	                        value: this.state.keyword,
	                        onChange: this.searchChange
	                    }
	                });

	                return _react2.default.createElement(WrappedComponent, props);
	            }
	        }]);
	        return _class2;
	    }(_react.Component);
	}

	var WrappedComponent = function (_Component2) {
	    (0, _inherits3.default)(WrappedComponent, _Component2);

	    function WrappedComponent() {
	        (0, _classCallCheck3.default)(this, WrappedComponent);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(WrappedComponent).apply(this, arguments));
	    }

	    (0, _createClass3.default)(WrappedComponent, [{
	        key: 'render',
	        value: function render() {
	            var search = this.props.search;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('input', (0, _extends3.default)({ type: 'text' }, search)),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    search.value
	                )
	            );
	        }
	    }, {
	        key: 'method',
	        value: function method() {
	            console.log('WrappedComponent method executed');
	        }
	    }]);
	    return WrappedComponent;
	}(_react.Component);

	exports.default = ppHOC(WrappedComponent);
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HorizontalScroll = function (_Component) {
		(0, _inherits3.default)(HorizontalScroll, _Component);

		function HorizontalScroll() {
			(0, _classCallCheck3.default)(this, HorizontalScroll);
			return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(HorizontalScroll).apply(this, arguments));
		}

		(0, _createClass3.default)(HorizontalScroll, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var scope = this;
				this._container.addEventListener('scroll', function (e) {
					console.log('xscroll');
					window.clearTimeout(scope.scrollTimer);
					//滚动结束触发
					scope.scrollTimer = window.setTimeout(scope.scrollEndCallback, 250, e);
				});
			}
		}, {
			key: 'scrollEndCallback',
			value: function scrollEndCallback(e) {
				console.log('scroll end', e);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				//Warning: Unsupported style property overflow-x. Did you mean overflowX? Check the render method of `xScroll`.
				var styles = {
					container: {
						border: '1px solid #ddd',
						overflowX: 'auto',
						overflowY: 'hidden'
					},
					list: {
						width: '2000px'
					},
					item: {
						float: 'left',
						width: '150px',
						height: '100px',
						marginLeft: '10px',
						border: '1px solid #ddd'
					}
				};

				var items = [1, 2, 3, 4, 5].map(function (el, index) {
					return _react2.default.createElement(
						'li',
						{ style: styles.item, key: index },
						el
					);
				});

				return _react2.default.createElement(
					'div',
					{ ref: function ref(_ref) {
							return _this2._container = _ref;
						}, style: styles.container },
					_react2.default.createElement(
						'ul',
						{ style: styles.list },
						items
					)
				);
			}
		}]);
		return HorizontalScroll;
	}(_react.Component);

	;

	exports.default = HorizontalScroll;
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CountDown = __webpack_require__(98);

	var _CountDown2 = _interopRequireDefault(_CountDown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//滚动过程中，没有阻塞JS代码，倒计时依旧执行

	var IOSScrollEvent = function (_Component) {
	    (0, _inherits3.default)(IOSScrollEvent, _Component);

	    function IOSScrollEvent() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, IOSScrollEvent);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(IOSScrollEvent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            currentTime: new Date().getTime()
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(IOSScrollEvent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var options = {
	                start: new Date(this.state.currentTime),
	                end: new Date(this.state.currentTime + 10000)
	            };
	            return _react2.default.createElement(
	                'div',
	                { style: { height: '1000px' } },
	                _react2.default.createElement(_CountDown2.default, options)
	            );
	        }
	    }]);
	    return IOSScrollEvent;
	}(_react.Component);

	exports.default = IOSScrollEvent;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseComponent2 = __webpack_require__(216);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	var _ReceiveContext = __webpack_require__(217);

	var _ReceiveContext2 = _interopRequireDefault(_ReceiveContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InheritComponent = function (_BaseComponent) {
	    (0, _inherits3.default)(InheritComponent, _BaseComponent);

	    function InheritComponent(props, context) {
	        var _temp, _this;

	        (0, _classCallCheck3.default)(this, InheritComponent);

	        //props包含了React.Component的props和BaseComponent中定义的props
	        // console.log(props)
	        // super(props);
	        // console.log(this);
	        console.log((_temp = (_this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InheritComponent).call(this, props, context)), _this), _this.state = {
	            title: ''
	        }, _temp));
	        // console.log(super(props, context));
	        // console.log(props);
	        // console.log(context);

	        return _this;
	    }

	    (0, _createClass3.default)(InheritComponent, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { color: 'lightgreen' };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var title = this.setTitle('组件继承');
	            this.setState({ title: title });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'I inherit BaseComponent'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'current title is ',
	                    this.state.title
	                ),
	                _react2.default.createElement(_ReceiveContext2.default, null)
	            );
	        }
	    }]);
	    return InheritComponent;
	}(_BaseComponent3.default);

	InheritComponent.childContextTypes = {
	    color: _react.PropTypes.string
	};

	exports.default = InheritComponent;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BaseComponent = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(BaseComponent, _Component);

	    function BaseComponent(props) {
	        (0, _classCallCheck3.default)(this, BaseComponent);

	        // console.log(props);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(BaseComponent).call(this, props));
	    }

	    (0, _createClass3.default)(BaseComponent, [{
	        key: 'setTitle',
	        value: function setTitle(title) {
	            document.title = title || this.props.title;
	            return document.title;
	        }
	    }]);
	    return BaseComponent;
	}(_react.Component), _class.defaultProps = {
	    title: 'Learn React By Examples'
	}, _temp);
	exports.default = BaseComponent;
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReceiveContext = function (_Component) {
	    (0, _inherits3.default)(ReceiveContext, _Component);

	    function ReceiveContext(props, context) {
	        var _this;

	        (0, _classCallCheck3.default)(this, ReceiveContext);

	        // console.log(super(props, context));
	        console.log((_this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ReceiveContext).call(this, props)), _this));

	        //context是父组件通过getChildContext方法和childContextTypes属性，传过来的数据
	        console.log(context);

	        return _this;
	    }

	    (0, _createClass3.default)(ReceiveContext, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { color: this.context.color } },
	                '牛肉面'
	            );
	        }
	    }]);
	    return ReceiveContext;
	}(_react.Component);

	ReceiveContext.contextTypes = {
	    color: _react.PropTypes.string
	};

	exports.default = ReceiveContext;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InsertAnElementOnMouseOver = function (_Component) {
	    (0, _inherits3.default)(InsertAnElementOnMouseOver, _Component);

	    function InsertAnElementOnMouseOver() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, InsertAnElementOnMouseOver);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(InsertAnElementOnMouseOver)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            insert: false
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(InsertAnElementOnMouseOver, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    '鼠标移动到一个元素时，插入另一个元素'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { onMouseOver: function onMouseOver() {
	                            return _this2.onMouseOverHandler();
	                        } },
	                    '鼠标移动到我'
	                ),
	                this.state.insert ? _react2.default.createElement(
	                    'div',
	                    null,
	                    '被插入的元素'
	                ) : null
	            );
	        }
	    }, {
	        key: 'onMouseOverHandler',
	        value: function onMouseOverHandler() {
	            this.setState({ insert: true });
	        }
	    }]);
	    return InsertAnElementOnMouseOver;
	}(_react.Component);

	exports.default = InsertAnElementOnMouseOver;
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var JSXArrayDom = function (_Component) {
		(0, _inherits3.default)(JSXArrayDom, _Component);

		function JSXArrayDom() {
			(0, _classCallCheck3.default)(this, JSXArrayDom);
			return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(JSXArrayDom).apply(this, arguments));
		}

		(0, _createClass3.default)(JSXArrayDom, [{
			key: 'render',
			value: function render() {
				//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ArrayDom`. See https://fb.me/react-warning-keys for more information.
				var doms = [_react2.default.createElement(
					'p',
					null,
					'下楼取快递，在A座'
				), _react2.default.createElement(
					'p',
					null,
					'地狱之轮'
				), _react2.default.createElement(
					'p',
					null,
					'优化代码'
				)];
				return _react2.default.createElement(
					'div',
					null,
					doms
				);
			}
		}]);
		return JSXArrayDom;
	}(_react.Component);

	exports.default = JSXArrayDom;
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LogicalOperators = function (_Component) {
	    (0, _inherits3.default)(LogicalOperators, _Component);

	    function LogicalOperators() {
	        (0, _classCallCheck3.default)(this, LogicalOperators);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(LogicalOperators).apply(this, arguments));
	    }

	    (0, _createClass3.default)(LogicalOperators, [{
	        key: 'render',
	        value: function render() {
	            var num = 0;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '需求：当购物车商品数量为0时，不显示括号和数量'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '购物车',
	                    num && '(' + num + ')',
	                    ' - ',
	                    _react2.default.createElement(
	                        'i',
	                        null,
	                        '错误'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '购物车',
	                    '' + (num && num),
	                    ' - ',
	                    _react2.default.createElement(
	                        'i',
	                        null,
	                        '错误'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '购物车',
	                    '' + (num && '(' + num + ')'),
	                    ' - ',
	                    _react2.default.createElement(
	                        'i',
	                        null,
	                        '错误'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '购物车',
	                    num ? '(' + num + ')' : '',
	                    ' - ',
	                    _react2.default.createElement(
	                        'i',
	                        null,
	                        '正确'
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '结论：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '使用&&运算无法实现需求，很奇怪。三目运算符可以实现需求'
	                )
	            );
	        }
	    }]);
	    return LogicalOperators;
	}(_react.Component);

	exports.default = LogicalOperators;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toConsumableArray2 = __webpack_require__(59);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
		container: {
			border: '1px solid #666',
			padding: '10px 0',
			overflowX: 'auto',
			whiteSpace: 'nowrap'
		},
		list: {
			listStyle: 'none',
			padding: 0
		},
		item: {
			height: '80px',
			width: '80px',
			border: '1px solid lightblue',
			boxSizing: 'border-box',
			display: 'inline-block',
			marginRight: '20px'
		}
	};

	var LoopScroll = function (_Component) {
		(0, _inherits3.default)(LoopScroll, _Component);

		function LoopScroll() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, LoopScroll);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(LoopScroll)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				datas: [{ id: 1, name: 'angular' }, { id: 2, name: 'react' }, { id: 3, name: 'jquery' }, { id: 4, name: 'html' }, { id: 5, name: 'css' }, { id: 6, name: 'webpack' }],
				oneWay: true
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(LoopScroll, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var datasClone = this.state.datas.slice(0);
				this.setState({
					datas: this.state.datas.concat(datasClone, this.state.oneWay ? [] : datasClone)
				});
			}
		}, {
			key: 'calcListWidth',
			value: function calcListWidth() {
				var item = this._list.children[0];
				var dataLen = this.state.datas.length;
				var itemsTotalWidth = item.offsetWidth * dataLen;
				var itemsTotalMarginWidth = this.getItemsMarginWidth(this._list.children);

				return itemsTotalWidth + itemsTotalMarginWidth;
			}
		}, {
			key: 'getItemsMarginWidth',
			value: function getItemsMarginWidth(items) {
				var itemsArr = [].concat((0, _toConsumableArray3.default)(items)),
				    len = itemsArr.length;
				var width = 0;

				for (var i = 0; i < len; i++) {
					var itemComputedStyle = window.getComputedStyle(itemsArr[i], null);
					//parseInt("21.5938px", 10) 得到 21， 貌似不用replace掉"px"
					//TODO margin百分比的情况，获得最终计算后的值是container的宽度的百分比，可能是由于这里的ul的宽度是动态设置的，如果预先设定一个固定的宽度，那么得到的最终计算后的值应该是正确的
					width += parseFloat(itemComputedStyle.getPropertyValue('margin-right')) + parseFloat(itemComputedStyle.getPropertyValue('margin-left'));
				}

				return width;
			}
		}, {
			key: 'setListWidth',
			value: function setListWidth(width) {
				this._list.style.width = width + 'px';
			}
		}, {
			key: 'setInitPosition',
			value: function setInitPosition(width) {
				this._container.scrollLeft = this.state.oneWay ? 0 : width / 3;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var width = this.calcListWidth();
				console.log(width);
				this.setListWidth(width);
				this.setInitPosition(width);

				this._container.addEventListener('scroll', function (e) {
					var target = e.target;
					var scrollLeft = target.scrollLeft;

					if (_this2.state.oneWay) {
						if (scrollLeft > width / 2) {
							target.scrollLeft = 0;
						}
					} else {
						if (scrollLeft > width * 2 / 3) {
							target.scrollLeft = width / 3;
						} else if (scrollLeft < width / 3) {
							target.scrollLeft = width * 2 / 3;
						}
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ ref: function ref(_ref2) {
							return _this3._container = _ref2;
						}, style: style.container },
					_react2.default.createElement(
						'ul',
						{ ref: function ref(_ref) {
								return _this3._list = _ref;
							}, style: style.list },
						this.state.datas.map(function (data, index) {
							return _react2.default.createElement(
								'li',
								{ style: style.item, key: index },
								data.id + '.' + data.name
							);
						})
					)
				);
			}
		}]);
		return LoopScroll;
	}(_react.Component);

	exports.default = LoopScroll;
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inputStyle = {
	    padding: '10px',
	    margin: '10px'
	};

	var MobileInputFocusVistualKeyboard = function (_Component) {
	    (0, _inherits3.default)(MobileInputFocusVistualKeyboard, _Component);

	    function MobileInputFocusVistualKeyboard() {
	        (0, _classCallCheck3.default)(this, MobileInputFocusVistualKeyboard);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(MobileInputFocusVistualKeyboard).apply(this, arguments));
	    }

	    (0, _createClass3.default)(MobileInputFocusVistualKeyboard, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // this._input.focus();
	            // this._input.click();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图:'
	                ),
	                _react2.default.createElement('input', { type: 'text', autoFocus: true, style: inputStyle, ref: function ref(_ref) {
	                        return _this2._input = _ref;
	                    } }),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'button', onClick: function onClick() {
	                            return _this2.handlerClick();
	                        } },
	                    '聚焦'
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '测试结果：只要不是新开webview，路由切换后，可以设置input的聚焦唤起虚拟键盘'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '测试机型:',
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'ipod Touch5 ios 9.3.2'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            '小米4 android 6.0.1'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '测试方法：',
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'componentDidMount中使用input.focus() - ',
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                '通过'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'componentDidMount中使用input.click() - ',
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                '不通过'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            '在input上设置autoFocus - ',
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                '通过'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return MobileInputFocusVistualKeyboard;
	}(_react.Component);

	exports.default = MobileInputFocusVistualKeyboard;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AsyncComponent = __webpack_require__(224);

	var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PassAsyncDataToChildComponent = function (_Component) {
		(0, _inherits3.default)(PassAsyncDataToChildComponent, _Component);

		function PassAsyncDataToChildComponent() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, PassAsyncDataToChildComponent);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(PassAsyncDataToChildComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				isDone: false
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(PassAsyncDataToChildComponent, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.user = {
					name: 'novaline',
					age: 23
				};
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				this.timeoutId = window.setTimeout(function () {
					_this2.user.name = 'mrdulin';
					//上面这样不会虽然数据变了，但是该组件及其子组件的UI都不会更新,因为没有再次调用render
					//只有再次调用setState或者更新state tree才会再次调用render方法，更新视图
					_this2.setState({ isDone: true });
				}, 1000);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_AsyncComponent2.default, { user: this.user })
				);
			}
		}]);
		return PassAsyncDataToChildComponent;
	}(_react.Component);

	exports.default = PassAsyncDataToChildComponent;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//子组件的constructor,componentWillMount,componentDidMount都只调用一次，以后就算父组件的render方法再次调用，也不会再调用子组件前面说得3个方法

	var AsyncComponent = function (_Component) {
		(0, _inherits3.default)(AsyncComponent, _Component);

		function AsyncComponent(props) {
			(0, _classCallCheck3.default)(this, AsyncComponent);

			var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(AsyncComponent).call(this, props));

			console.log('AsyncComponent constructor');
			return _this;
		}

		(0, _createClass3.default)(AsyncComponent, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('AsyncComponent componentWillMount');
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('AsyncComponent componentDidMount');
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				//第一次render的时候不会调用
				console.log('AsyncComponent componentWillReceiveProps old props', this.props);
				console.log('AsyncComponent componentWillReceiveProps nextProps', nextProps);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						'name: ',
						_react2.default.createElement(
							'span',
							null,
							this.props.user.name
						)
					),
					_react2.default.createElement(
						'p',
						null,
						'age: ',
						_react2.default.createElement(
							'span',
							null,
							this.props.user.age
						)
					)
				);
			}
		}]);
		return AsyncComponent;
	}(_react.Component);

	exports.default = AsyncComponent;
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(226);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Ref = function (_Component) {
	    (0, _inherits3.default)(Ref, _Component);

	    function Ref() {
	        (0, _classCallCheck3.default)(this, Ref);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Ref).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Ref, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'ref attribute demo'
	                ),
	                _react2.default.createElement('input', { type: 'text', ref: function ref(_ref) {
	                        return _this2.myTextInput = _ref;
	                    } }),
	                _react2.default.createElement(_TextInput2.default, { ref: function ref(textInputInstance) {
	                        return _this2.textInputComponent = textInputInstance;
	                    } }),
	                _react2.default.createElement('input', { type: 'button', value: 'Focus the text input', onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } })
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            var _this3 = this;

	            // console.log(this.myTextInput);
	            if (this.myTextInput !== null) {
	                this.myTextInput.focus();
	            }

	            this.timeout = setTimeout(function () {
	                _this3.textInputComponent.focusInputMethod1();
	            }, 2000);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timeout);
	        }
	    }]);
	    return Ref;
	}(_react.Component);

	exports.default = Ref;
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TextInput = function (_Component) {
	    (0, _inherits3.default)(TextInput, _Component);

	    function TextInput() {
	        (0, _classCallCheck3.default)(this, TextInput);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TextInput).apply(this, arguments));
	    }

	    (0, _createClass3.default)(TextInput, [{
	        key: "focusInputMethod1",


	        //相当于es5中，定义在构造函数原型上的方法，所有实例都可见该方法
	        value: function focusInputMethod1() {
	            this.refs.textInput.focus();
	        }

	        //在es6的class中这样定义静态方法报错
	        // statics: {
	        //     focusInputMethod2: function() {}
	        // }

	        //es6定义静态方法，静态方法不会被实例继承，而是直接通过类来调用
	        // static focusInputMethod3() {}

	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("input", { type: "text", ref: "textInput", placeholder: "text input component" })
	            );
	        }
	    }]);
	    return TextInput;
	}(_react.Component);

	;

	// console.log('TextInput.focusInputMethod3', TextInput.focusInputMethod3);

	exports.default = TextInput;
	module.exports = exports["default"];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StyleByParentComponent = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(StyleByParentComponent, _Component);

	    function StyleByParentComponent() {
	        (0, _classCallCheck3.default)(this, StyleByParentComponent);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(StyleByParentComponent).call(this));

	        _this.name = '看着点挤';
	        return _this;
	    }

	    (0, _createClass3.default)(StyleByParentComponent, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var children = _react2.default.Children.map(this.props.children, function (child, idx) {
	                console.dir(child);
	                var className = child.props.className;
	                return _react2.default.cloneElement(child, { style: _this2.props[className] });
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                'child component',
	                children
	            );
	        }
	    }, {
	        key: 'someProp',
	        get: function get() {
	            return this.name;
	        },
	        set: function set(value) {
	            this.name = value;
	        }
	    }]);
	    return StyleByParentComponent;
	}(_react.Component), _class.defaultProps = {
	    cycle: { borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red' },
	    square: { width: '100px', height: '100px', backgroundColor: 'lightblue' }
	}, _temp);

	var SetChildrenReactElementStyle = function (_Component2) {
	    (0, _inherits3.default)(SetChildrenReactElementStyle, _Component2);

	    function SetChildrenReactElementStyle() {
	        (0, _classCallCheck3.default)(this, SetChildrenReactElementStyle);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(SetChildrenReactElementStyle).apply(this, arguments));
	    }

	    (0, _createClass3.default)(SetChildrenReactElementStyle, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this4 = this;

	            console.dir(this._StyleByParentComponent.someProp); //undefined

	            setTimeout(function () {
	                _this4._StyleByParentComponent.someProp = '挤尼玛的铲铲';
	                console.log(_this4._StyleByParentComponent.someProp); //挤尼玛
	            }, 2000);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                'parent component',
	                _react2.default.createElement(
	                    StyleByParentComponent,
	                    { ref: function ref(_ref) {
	                            return _this5._StyleByParentComponent = _ref;
	                        } },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cycle' },
	                        '圆形'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'square' },
	                        '方形'
	                    )
	                )
	            );
	        }
	    }]);
	    return SetChildrenReactElementStyle;
	}(_react.Component);

	exports.default = SetChildrenReactElementStyle;
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
		container: {
			position: 'fixed',
			top: 0,
			bottom: 0,
			width: '100%',
			zIndex: 100,
			backgroundColor: 'rgba(0,0,0,0.6)'
		},
		modal: {
			width: '300px',
			height: '250px',
			backgroundColor: '#fff',
			border: '1px solid #ddd',
			// margin: '100px auto 0',
			position: 'fixed',
			left: '50%',
			marginLeft: '-150px',
			top: '100px'
		},
		input: {
			border: '1px solid #ddd',
			padding: '10px'
		},
		item: {
			height: '200px',
			border: '1px solid #ddd'
		}
	};

	var SetModalWindowPositionOnInputFocus = function (_Component) {
		(0, _inherits3.default)(SetModalWindowPositionOnInputFocus, _Component);

		function SetModalWindowPositionOnInputFocus() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, SetModalWindowPositionOnInputFocus);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(SetModalWindowPositionOnInputFocus)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				windowInnerHeight: window.innerHeight,
				keyboardHeight: 0
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(SetModalWindowPositionOnInputFocus, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				//阻止穿透模态框遮罩能继续滑动页面
				document.body.style.overflow = 'hidden';
				document.body.style.position = 'fixed';
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'ul',
							null,
							[1, 2, 3, 4, 5, 6].map(function (el, index) {
								return _react2.default.createElement(
									'li',
									{ style: style.item, key: index },
									el
								);
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ style: style.container },
						_react2.default.createElement(
							'div',
							{ style: style.modal },
							_react2.default.createElement(
								'h1',
								null,
								'模态框'
							),
							_react2.default.createElement(
								'p',
								null,
								'window innerHeight: ',
								this.state.windowInnerHeight
							),
							_react2.default.createElement(
								'p',
								null,
								'keyboardHeight: ',
								this.state.keyboardHeight
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { onFocus: function onFocus() {
											return _this2.inputFocus();
										}, style: style.input, type: 'text', placeholder: '请输入验证码' })
								)
							)
						)
					)
				);
			}
		}, {
			key: 'virtualKeyboardHeight',
			value: function virtualKeyboardHeight() {
				var sx = document.body.scrollLeft,
				    sy = document.body.scrollTop;
				var naturalHeight = window.innerHeight;
				window.scrollTo(sx, document.body.scrollHeight);
				var keyboardHeight = naturalHeight - window.innerHeight;
				window.scrollTo(sx, sy);
				return keyboardHeight;
			}
		}, {
			key: 'inputFocus',
			value: function inputFocus() {
				var _this3 = this;

				window.setTimeout(function () {
					_this3.setState({
						windowInnerHeight: window.innerHeight,
						keyboardHeight: _this3.virtualKeyboardHeight()
					});
					window.scrollTo(0, 0);
				}, 10);
			}
		}]);
		return SetModalWindowPositionOnInputFocus;
	}(_react.Component);

	exports.default = SetModalWindowPositionOnInputFocus;
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Text = function Text(_ref) {
		var children = _ref.children;

		return _react2.default.createElement(
			'p',
			null,
			children
		);
	};

	Text.defaultProps = {
		children: 'I\'m a stateless functional component'
	};
	Text.propTypes = {
		children: _react.PropTypes.string.isRequired
	};

	var Book = function Book(props, context) {
		console.log('Book Context', context);
		console.log('Book props', props);
		return _react2.default.createElement(
			'p',
			{ style: context },
			props.children
		);
	};

	Book.contextTypes = {
		color: _react.PropTypes.string
	};

	var StateLessFunctionalComponent = (_temp = _class = function (_Component) {
		(0, _inherits3.default)(StateLessFunctionalComponent, _Component);

		function StateLessFunctionalComponent() {
			(0, _classCallCheck3.default)(this, StateLessFunctionalComponent);
			return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(StateLessFunctionalComponent).apply(this, arguments));
		}

		(0, _createClass3.default)(StateLessFunctionalComponent, [{
			key: 'getChildContext',
			value: function getChildContext() {
				return { color: 'purple' };
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(Text, null),
					_react2.default.createElement(
						Book,
						null,
						'Book name is 《React by Examples》'
					)
				);
			}
		}]);
		return StateLessFunctionalComponent;
	}(_react.Component), _class.childContextTypes = {
		color: _react.PropTypes.string
	}, _temp);
	exports.default = StateLessFunctionalComponent;
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StaticMethod = function (_Component) {
	    (0, _inherits3.default)(StaticMethod, _Component);

	    function StaticMethod() {
	        (0, _classCallCheck3.default)(this, StaticMethod);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(StaticMethod).apply(this, arguments));
	    }

	    (0, _createClass3.default)(StaticMethod, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'React Component Static Method',
	                StaticMethod.setTitle('React Component Static Method')
	            );
	        }
	    }], [{
	        key: 'setTitle',
	        value: function setTitle(title) {
	            document.title = title || '';
	        }
	    }]);
	    return StaticMethod;
	}(_react.Component);

	// StaticMethod.setTitle('React Component Static Method');

	exports.default = StaticMethod;
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tableES = __webpack_require__(234);

	var _tableES2 = _interopRequireDefault(_tableES);

	var _tableES3 = __webpack_require__(233);

	var _tableES4 = _interopRequireDefault(_tableES3);

	var _TableES6WithES7StaticProps = __webpack_require__(232);

	var _TableES6WithES7StaticProps2 = _interopRequireDefault(_TableES6WithES7StaticProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Table = (_temp = _class = function (_React$Component) {
	    (0, _inherits3.default)(Table, _React$Component);

	    function Table() {
	        (0, _classCallCheck3.default)(this, Table);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Table).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Table, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'table-demo' },
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'ES5-ES6-ES7语法下React组件的各自写法'
	                ),
	                _react2.default.createElement(_tableES2.default, { headings: this.props.headings, title: "React Table ES6 Version" }),
	                _react2.default.createElement(_tableES4.default, { headings: this.props.headings, title: "React Table ES5 Version" }),
	                _react2.default.createElement(_TableES6WithES7StaticProps2.default, { headings: this.props.headings, title: "React Table ES6 Version With Static Props" })
	            );
	        }
	    }]);
	    return Table;
	}(_react2.default.Component), _class.defaultProps = {
	    headings: ["Last updated at", "By Author", "Summary"]
	}, _temp);
	;

	exports.default = Table;
	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableES6WithES7StaticProps = (_temp = _class = function (_React$Component) {
	    (0, _inherits3.default)(TableES6WithES7StaticProps, _React$Component);

	    function TableES6WithES7StaticProps(props) {
	        (0, _classCallCheck3.default)(this, TableES6WithES7StaticProps);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TableES6WithES7StaticProps).call(this, props));

	        _this.state = {
	            name: 'novaline',
	            age: 24
	        };
	        return _this;
	    }
	    //chrome安装React developer tools 扩展后，组件的名称会显示displayName 的名称

	    //ES7提案提供了class的静态属性特性，需要使用babel-presets-stage-0
	    //ES7的方式初始化props


	    //ES7的方式验证props


	    (0, _createClass3.default)(TableES6WithES7StaticProps, [{
	        key: 'render',

	        // console.log('This is a class method');
	        value: function render() {
	            console.log('es7 initState', this.state);
	            var headings = this.props.headings.map(function (heading, index) {
	                return _react2.default.createElement(
	                    'th',
	                    { key: index },
	                    heading
	                );
	            });
	            var rows = this.props.datas.map(function (data, index) {
	                return _react2.default.createElement(
	                    'tr',
	                    { key: index },
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.who
	                    ),
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.description
	                    ),
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.when
	                    )
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            headings
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        rows
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'classMethod',


	        //ES6的类的静态方法
	        value: function classMethod() {}
	    }]);
	    return TableES6WithES7StaticProps;
	}(_react2.default.Component), _class.displayName = 'ES7-Table', _class.defaultProps = {
	    datas: [{
	        "when": "2 minutes ago",
	        "who": "Jill Dupre",
	        "description": "Created new account"
	    }, {
	        "when": "1 hour ago",
	        "who": "Lose White",
	        "description": "Added fist chapter"
	    }, {
	        "when": "2 hours ago",
	        "who": "Jordan Whash",
	        "description": "Created new account "
	    }]
	}, _class.propTypes = {
	    datas: _react2.default.PropTypes.array.isRequired
	}, _temp);
	;

	TableES6WithES7StaticProps.classMethod();

	exports.default = TableES6WithES7StaticProps;
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//commonjs方式导入模块
	var React = __webpack_require__(1);

	var TableES5 = React.createClass({
	    displayName: 'ES5-Table',

	    //ES5的方式验证props
	    propTypes: {
	        datas: React.PropTypes.array.isRequired
	    },

	    //ES5的方式初始化state
	    getInitialState: function getInitialState() {
	        return {
	            user: 'novaline',
	            age: 24
	        };
	    },

	    //es5的方式初始化props
	    getDefaultProps: function getDefaultProps() {
	        return {
	            datas: [{
	                "when": "2 minutes ago",
	                "who": "Jill Dupre",
	                "description": "Created new account"
	            }, {
	                "when": "1 hour ago",
	                "who": "Lose White",
	                "description": "Added fist chapter"
	            }, {
	                "when": "2 hours ago",
	                "who": "Jordan Whash",
	                "description": "Created new account "
	            }]
	        };
	    },
	    render: function render() {
	        var headings = this.props.headings.map(function (heading, index) {
	            return React.createElement(
	                'th',
	                { key: index },
	                heading
	            );
	        });
	        var rows = this.props.datas.map(function (data, index) {
	            return React.createElement(
	                'tr',
	                { key: index },
	                React.createElement(
	                    'td',
	                    null,
	                    data.who
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    data.description
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    data.when
	                )
	            );
	        });
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h3',
	                null,
	                this.props.title
	            ),
	            React.createElement(
	                'table',
	                null,
	                React.createElement(
	                    'thead',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        headings
	                    )
	                ),
	                React.createElement(
	                    'tbody',
	                    null,
	                    rows
	                )
	            )
	        );
	    }
	});

	//commonjs方式对外暴露模块
	module.exports = TableES5;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableES6 = function (_React$Component) {
	    (0, _inherits3.default)(TableES6, _React$Component);

	    function TableES6(props) {
	        (0, _classCallCheck3.default)(this, TableES6);


	        //ES6的方式初始化state

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TableES6).call(this, props));

	        _this.state = {
	            name: 'novaline',
	            age: 24
	        };

	        return _this;
	    }

	    //mixins,ES6语法不支持mixins

	    (0, _createClass3.default)(TableES6, [{
	        key: 'render',
	        value: function render() {
	            // console.log('es6 initState', this.state);
	            var headings = this.props.headings.map(function (heading, index) {
	                return _react2.default.createElement(
	                    'th',
	                    { key: index },
	                    heading
	                );
	            });
	            var rows = this.props.datas.map(function (data, index) {
	                return _react2.default.createElement(
	                    'tr',
	                    { key: index },
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.who
	                    ),
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.description
	                    ),
	                    _react2.default.createElement(
	                        'td',
	                        null,
	                        data.when
	                    )
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            headings
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        rows
	                    )
	                )
	            );
	        }
	    }]);
	    return TableES6;
	}(_react2.default.Component);

	;

	TableES6.displayName = 'ES6-Table';

	//如果组件的props上没有datas属性，则报Warning: Failed propType: Required prop `datas` was not specified in `TableES6`.错误
	//如果组件的props上有datas属性，但数据类型不是array,则报Warning: Failed propType: Invalid prop `datas` of type `string` supplied to `TableES6`, expected `array`.
	//ES6的propTypes和defaultProps是定义在constructor上，而不是使用定义在类体内
	//ES6的方式验证props
	TableES6.propTypes = {
	    datas: _react2.default.PropTypes.array.isRequired
	};

	//ES6的方式初始化props
	TableES6.defaultProps = {
	    datas: [{
	        "when": "2 minutes ago",
	        "who": "Jill Dupre",
	        "description": "Created new account"
	    }, {
	        "when": "1 hour ago",
	        "who": "Lose White",
	        "description": "Added fist chapter"
	    }, {
	        "when": "2 hours ago",
	        "who": "Jordan Whash",
	        "description": "Created new account "
	    }]
	};

	// Table.defaultProps = {
	//     datas: '123'
	// };

	exports.default = TableES6;
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RCcount = __webpack_require__(236);

	var _RCcount2 = _interopRequireDefault(_RCcount);

	var _RConly = __webpack_require__(238);

	var _RConly2 = _interopRequireDefault(_RConly);

	var _RCmap = __webpack_require__(237);

	var _RCmap2 = _interopRequireDefault(_RCmap);

	var _RCtoArray = __webpack_require__(239);

	var _RCtoArray2 = _interopRequireDefault(_RCtoArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ThisPropsChildren = function (_Component) {
	    (0, _inherits3.default)(ThisPropsChildren, _Component);

	    function ThisPropsChildren() {
	        (0, _classCallCheck3.default)(this, ThisPropsChildren);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ThisPropsChildren).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ThisPropsChildren, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _RCcount2.default,
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '有几个根元素(组件的直接子元素)，',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.count(this.props.children)'
	                        ),
	                        '的个数就为几个。'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '如此例，RCcount组件包含两个p元素，是组件的直接子元素，',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.count(this.props.children)'
	                        ),
	                        '的个数为2。'
	                    )
	                ),
	                _react2.default.createElement(
	                    _RConly2.default,
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'I\'m RConly component\'s only child'
	                    )
	                ),
	                _react2.default.createElement(
	                    _RCmap2.default,
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.map'
	                        ),
	                        '和',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'this.props.children.map'
	                        ),
	                        '的区别是, 如果children只有一个元素, ',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.map'
	                        ),
	                        '会将其放在一个数组中再调用map方法，避免调用map时报错。'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '而',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'this.props.children'
	                        ),
	                        ', 如果只有一个元素, children不是数组,调用map方法会报错。'
	                    )
	                ),
	                _react2.default.createElement(
	                    _RCtoArray2.default,
	                    null,
	                    _react2.default.createElement('p', null)
	                )
	            );
	        }
	    }]);
	    return ThisPropsChildren;
	}(_react.Component);

	exports.default = ThisPropsChildren;
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RCcount = function (_Component) {
	    (0, _inherits3.default)(RCcount, _Component);

	    function RCcount() {
	        (0, _classCallCheck3.default)(this, RCcount);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(RCcount).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RCcount, [{
	        key: 'render',
	        value: function render() {
	            var count = _react2.default.Children.count(this.props.children);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'React.Children.count'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'children count: ',
	                    count
	                ),
	                this.props.children
	            );
	        }
	    }]);
	    return RCcount;
	}(_react.Component);

	exports.default = RCcount;
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RCmap = function (_Component) {
	    (0, _inherits3.default)(RCmap, _Component);

	    function RCmap() {
	        (0, _classCallCheck3.default)(this, RCmap);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(RCmap).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RCmap, [{
	        key: 'render',
	        value: function render() {
	            var childDoms = _react2.default.Children.map(this.props.children, function (child) {
	                console.log(child);
	                return child;
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'React.Children.map'
	                    )
	                ),
	                childDoms
	            );
	        }
	    }]);
	    return RCmap;
	}(_react.Component);

	exports.default = RCmap;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RConly = function (_Component) {
	    (0, _inherits3.default)(RConly, _Component);

	    function RConly() {
	        (0, _classCallCheck3.default)(this, RConly);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(RConly).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RConly, [{
	        key: 'render',
	        value: function render() {
	            var onlyChild = _react2.default.Children.only(this.props.children);
	            console.assert(_react2.default.Children.only(this.props.children) === this.props.children, 'React.Children.only(this.props.children)和this.props.children全等');

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'React.Children.only'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '当组件没有包含子元素，或者包含的直接子元素的个数大于1个时，报如下错误'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'Uncaught Invariant Violation: onlyChild must be passed a children with exactly one child.'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'React.Children.only(this.props.children) === this.props.children'
	                    )
	                ),
	                onlyChild
	            );
	        }
	    }]);
	    return RConly;
	}(_react.Component);

	exports.default = RConly;
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RCtoArray = function (_Component) {
	    (0, _inherits3.default)(RCtoArray, _Component);

	    function RCtoArray() {
	        (0, _classCallCheck3.default)(this, RCtoArray);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(RCtoArray).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RCtoArray, [{
	        key: 'render',
	        value: function render() {
	            console.log('this.props.children: ', this.props.children);
	            var list = _react2.default.Children.toArray(this.props.children);
	            console.log('React.Children.toArray(this.props.children): ', list);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'React.Children.toArray'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '将children那种复杂的数据结构转换成扁平的数组，并给数组中得每个元素一个唯一的key。'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '一般用在渲染前需要给children排序或者分割。'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '遍历',
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'this.props.children'
	                    ),
	                    '时发生，因为',
	                    _react2.default.createElement(
	                        'code',
	                        null,
	                        'this.props.children'
	                    ),
	                    '的返回值的类型在不同情况下是不一样的，它的类型共有三种情况：'
	                ),
	                _react2.default.createElement(
	                    'ol',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '如果当前组件没有子节点，它就是 undefined；使用',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.toArray'
	                        ),
	                        '后为空数组[]'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '如果有一个子节点，数据类型是 object；使用',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.toArray'
	                        ),
	                        '后为包含一个元素的数组[Object]'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '如果有多个子节点，数据类型就是 array。使用',
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            'React.Children.toArray'
	                        ),
	                        '后为包含多个元素的数组[Object, Object ...]。'
	                    )
	                )
	            );
	        }
	    }]);
	    return RCtoArray;
	}(_react.Component);

	exports.default = RCtoArray;
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _redux = __webpack_require__(16);

	var _reducer = __webpack_require__(43);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction = __webpack_require__(148);

	var Action = _interopRequireWildcard(_CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction = function (_Component) {
	    (0, _inherits3.default)(CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction, _Component);

	    function CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction() {
	        (0, _classCallCheck3.default)(this, CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction).call(this));

	        _this.updateFoodName = _this.updateFoodName.bind(_this);
	        _this.store = (0, _redux.createStore)(_reducer2.default);
	        return _this;
	    }

	    (0, _createClass3.default)(CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction, [{
	        key: 'render',
	        value: function render() {
	            var CDSANCSSSWDA = this.props.CDSANCSSSWDA;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '问题：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '在应用路由处通过Provider注入的store和在组建内部通过createStore再次创建的store，在dispatch一个action后，两个store中的数据是否同步变化？'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '如果不能同步，怎样同步？'
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图：'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { onSumit: this.updateFoodName },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'foodname' },
	                            '食物名：'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', defaultValue: CDSANCSSSWDA.name, name: 'foodname', id: 'foodname', autoComplete: 'off' })
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'submit', onClick: this.updateFoodName },
	                        '更新名字'
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '数据：'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'state inject by react-redux connect HOC: ',
	                    _react2.default.createElement(
	                        'pre',
	                        null,
	                        JSON.stringify(CDSANCSSSWDA, null, 4)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'state create by redux createStore: ',
	                    _react2.default.createElement(
	                        'pre',
	                        null,
	                        JSON.stringify(this.store.getState().CDSANCSSSWDA, null, 4)
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '结论：'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'dispatch一个action后，两个store中的数据不会同步变化。store1.dispatch和store2.dispatch是不同的，store自己的dispatch方法，当然只会改变自己的数据。'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '其实相当于两个对象，有相同的数据和方法，但终究是两个不同的引用。'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '要是一个Action在两个store上产生效果，分别调用store自己的dispatch，dispatch这个action即可'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '两个store使用了同一个reducer，其实相当于两个store具有相同的state树数据结构。'
	                )
	            );
	        }
	    }, {
	        key: 'updateFoodName',
	        value: function updateFoodName(e) {
	            e.preventDefault();
	            var dispatch = this.props.dispatch;

	            var foodnameInput = e.target.form.foodname;
	            dispatch(Action.updateFoodName(foodnameInput.value));
	            //在新建的store上dispatch action
	            // this.store.dispatch(Action.updateFoodName(foodnameInput.value));
	        }
	    }]);
	    return CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return { CDSANCSSSWDA: state.CDSANCSSSWDA };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);
	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(16);

	var _reducer = __webpack_require__(43);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CreateStoreInComponentCompareWithConnectState = function (_Component) {
	    (0, _inherits3.default)(CreateStoreInComponentCompareWithConnectState, _Component);

	    function CreateStoreInComponentCompareWithConnectState(props, context) {
	        (0, _classCallCheck3.default)(this, CreateStoreInComponentCompareWithConnectState);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(CreateStoreInComponentCompareWithConnectState).call(this, props, context));
	    }

	    (0, _createClass3.default)(CreateStoreInComponentCompareWithConnectState, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '使用createStore再次创建的store通过getState()获取到的state是一份新的引用。不与任何现有的state引用相同。'
	                )
	            );
	        }
	    }]);
	    return CreateStoreInComponentCompareWithConnectState;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    var store = (0, _redux.createStore)(_reducer2.default);
	    console.assert(store.getState() === state, 'store.getState()与mapStateToProp中的state是同一个引用');
	    return { state: state };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateStoreInComponentCompareWithConnectState);
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(16);

	var _index = __webpack_require__(43);

	var _index2 = _interopRequireDefault(_index);

	var _AsyncActionInComponentWillReceiveProps = __webpack_require__(54);

	var Action = _interopRequireWildcard(_AsyncActionInComponentWillReceiveProps);

	var _reduxThunk = __webpack_require__(145);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReduxBeginning = function (_Component) {
	    (0, _inherits3.default)(ReduxBeginning, _Component);

	    function ReduxBeginning(props, context) {
	        (0, _classCallCheck3.default)(this, ReduxBeginning);

	        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ReduxBeginning).call(this, props, context));

	        var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
	        _this.store = createStoreWithMiddleware(_index2.default);
	        _this.state = {
	            cityMap: {}
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(ReduxBeginning, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            this.unsubscribe = this.store.subscribe(function () {
	                console.log(_this2.store.getState());
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this.store.dispatch(Action.fetchCity()).then(function (store) {
	                _this3.setState({ cityMap: store.AsyncActionInCWRP.cityMap });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.count('AsyncActionInComponentWillReceiveProps render');
	            var cityMap = this.state.cityMap;

	            var cityItems = Object.keys(cityMap).map(function (cityKey) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: cityKey },
	                    cityMap[cityKey]
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '视图:'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    cityItems
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    '结论：'
	                ),
	                _react2.default.createElement(
	                    'ol',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        '直接createStore得到的store是不能dispatch异步action的，只能dispatch同步的action。dispatch异步action需要使用中间件，这里直接使用redux-thunk中间件。'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        'redux的store.dispatch(action)，返回值是被dispatch的action对象。'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.unsubscribe();
	        }
	    }]);
	    return ReduxBeginning;
	}(_react.Component);

	exports.default = ReduxBeginning;
	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _reduxApiMiddleware = __webpack_require__(97);

	var _MapStateToProps = __webpack_require__(56);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReduxAPIMiddleware = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(ReduxAPIMiddleware, _Component);

	    function ReduxAPIMiddleware() {
	        (0, _classCallCheck3.default)(this, ReduxAPIMiddleware);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ReduxAPIMiddleware).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ReduxAPIMiddleware, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.dispatch((0, _reduxApiMiddleware.requestCity)());
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.err.name) {
	                alert(nextProps.err.message);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var cityMap = this.props.cityMap;

	            var cityKeys = Object.keys(cityMap);
	            var options = cityKeys.map(function (cityKey) {
	                return _react2.default.createElement(
	                    'option',
	                    { key: cityKey, value: cityKey },
	                    cityMap[cityKey]
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'redux-api-middware用法例子'
	                ),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '例1:'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            '城市选择:',
	                            _react2.default.createElement(
	                                'select',
	                                { onChange: function onChange(e) {
	                                        return _this2.selectCityChange(e);
	                                    } },
	                                _react2.default.createElement(
	                                    'option',
	                                    null,
	                                    '-- 请选择城市 --'
	                                ),
	                                options
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '例2:通过使用FormData给服务器端发送数据'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { id: 'myForm', name: 'myForm', onSubmit: function onSubmit(e) {
	                            return _this2.myFormSubmit(e);
	                        } },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { 'for': 'username' },
	                            'Enter name:'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', id: 'username', name: 'username' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { 'for': 'password' },
	                            'Enter account number:'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', id: 'password', name: 'password' })
	                    ),
	                    _react2.default.createElement('input', { type: 'submit', value: 'Submit!' })
	                )
	            );
	        }
	    }, {
	        key: 'selectCityChange',
	        value: function selectCityChange(e) {
	            var cityKey = e.target.value;
	            // console.log('cityKey', cityKey);
	            this.props.dispatch((0, _MapStateToProps.selectCity)(cityKey));
	        }
	    }, {
	        key: 'myFormSubmit',
	        value: function myFormSubmit(e) {
	            e.preventDefault();
	            var form = e.target;
	            var formData = new FormData(form);
	            this.props.dispatch((0, _reduxApiMiddleware.login)(formData));
	        }
	    }]);
	    return ReduxAPIMiddleware;
	}(_react.Component), _class.PropTypes = {
	    cityMap: _react.PropTypes.object.isRequired
	}, _temp);


	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        cityMap: state.cityMap,
	        err: state.err,
	        usr: state.usr
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReduxAPIMiddleware);
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _scrollTop = __webpack_require__(155);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Image = function (_Component) {
	    (0, _inherits3.default)(Image, _Component);

	    function Image() {
	        (0, _classCallCheck3.default)(this, Image);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Image).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Image, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.image.onload = function () {
	                _this2.image.removeAttribute('data-src');
	            };
	            this.image.src = this.image.dataset.src;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var placeholder = 'http://placehold.it/200x246';
	            return _react2.default.createElement(
	                'div',
	                { style: { position: 'relative', width: '200px', paddingTop: 200 / 246 * 100 + '%', backgroundColor: '#ddd' } },
	                _react2.default.createElement(
	                    'div',
	                    { style: { position: 'absolute', top: 0, left: 0, zIndex: 1, height: '100%', width: '100%' } },
	                    _react2.default.createElement('img', { style: { maxWidth: '100%' }, ref: function ref(_ref) {
	                            return _this3.image = _ref;
	                        }, 'data-src': this.props.src })
	                )
	            );
	        }
	    }]);
	    return Image;
	}(_react.Component);

	var ScrollTop = (_temp = _class = function (_Component2) {
	    (0, _inherits3.default)(ScrollTop, _Component2);

	    function ScrollTop() {
	        (0, _classCallCheck3.default)(this, ScrollTop);
	        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ScrollTop).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ScrollTop, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // console.log('componentDidMount')
	            //需求：刷新滚动到顶部
	            //1.无效
	            //window.scrollTo(0, 0);

	            //2.pc浏览器中有效
	            window.setTimeout(function () {
	                window.scrollTo(0, 0);
	            }, 1);

	            this.props.dispatch((0, _scrollTop.getBook)('react'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            var books = this.props.scrollTop.books;

	            return _react2.default.createElement(
	                'div',
	                { id: 'fucking-container' },
	                _react2.default.createElement(
	                    'div',
	                    { style: { position: "fixed", top: 0, width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #ddd', zIndex: 100 } },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        Math.random()
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', onClick: function onClick() {
	                                    return _this5.reload(false);
	                                } },
	                            'location.reload(false)'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', onClick: function onClick() {
	                                    return _this5.reload(true);
	                                } },
	                            'location.reload(true)'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', onClick: function onClick() {
	                                    return _this5.replace(_this5.props.selfurl);
	                                } },
	                            'location.replace()'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'form',
	                        { onSubmit: function onSubmit() {
	                                return _this5.search();
	                            } },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'label',
	                                null,
	                                _react2.default.createElement('input', { ref: function ref(_ref2) {
	                                        return _this5.input = _ref2;
	                                    }, className: 'search', type: 'search', placeholder: '输入书名搜索' })
	                            )
	                        ),
	                        _react2.default.createElement('input', { type: 'submit', value: '搜索' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    books.map(function (book, index) {
	                        return _react2.default.createElement(
	                            'li',
	                            { style: { borderBottom: '1px solid #ddd', padding: '10px' }, key: index },
	                            _react2.default.createElement(
	                                'h3',
	                                null,
	                                book.Title
	                            ),
	                            _react2.default.createElement(
	                                'h4',
	                                null,
	                                book.SubTitle
	                            ),
	                            _react2.default.createElement(Image, { src: book.Image }),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'ISBN: ',
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    book.isbn
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                book.Description
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'search',
	        value: function search() {}
	    }, {
	        key: 'reload',
	        value: function reload(forcedReload) {
	            document.location.reload(forcedReload);
	        }
	    }, {
	        key: 'replace',
	        value: function replace(url) {
	            document.location.replace(url);
	        }
	    }]);
	    return ScrollTop;
	}(_react.Component), _class.defaultProps = {
	    selfurl: document.location.href
	}, _temp);


	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        scrollTop: state.scrollTop
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ScrollTop);
	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    cityMap: {}
	};

	var AsyncActionInCWRP = exports.AsyncActionInCWRP = function AsyncActionInCWRP() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'AAICWRP_fetchCitySuccess':
	            return Object.assign({}, state, { cityMap: action.payload.data });
	        case 'AAICWRP_fetchCityFail':
	            return Object.assign({}, state, {});
	        default:
	            return state;
	    }
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AutoComplete = undefined;

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    Error: 0,
	    Time: 0,
	    Total: 0,
	    Page: 1,
	    Books: [],
	    query: ''
	};

	var AutoComplete = exports.AutoComplete = function AutoComplete() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'autoComplete_fetchAutoCompleteDataSuccess':
	            var _action$payload = action.payload;
	            var data = _action$payload.data;
	            var query = _action$payload.query;

	            return Object.assign({}, state, (0, _extends3.default)({}, data, { query: query }));
	        case 'autoComplete_fetchAutoCompleteDataFail':
	            return state;
	        default:
	            return state;
	    }
	};

/***/ },
/* 247 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    editor: {
	        name: 'vscode',
	        company: 'Microsoft'
	    },
	    user: 'novaline'
	};

	var ChangeStateTreeRefData = exports.ChangeStateTreeRefData = function ChangeStateTreeRefData() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        default:
	            return state;
	    }
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    name: ''
	};

	var CDSANCSSSWDA = exports.CDSANCSSSWDA = function CDSANCSSSWDA() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'CDSANCSSSWDA_updateFoodName':
	            return Object.assign({}, state, { name: action.payload.name });
	        default:
	            return state;
	    }
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ConnectMultipleNestedComponents = undefined;

	var _defineProperty2 = __webpack_require__(58);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _ConnectMultipleNestedComponents = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    messageA: '',
	    messageB: '',
	    message: ''
	};

	var ConnectMultipleNestedComponents = exports.ConnectMultipleNestedComponents = function ConnectMultipleNestedComponents() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _ConnectMultipleNestedComponents.UPDATE_MESSAGE:
	            return Object.assign({}, state, (0, _defineProperty3.default)({}, action.payload.key, action.payload.message));
	        default:
	            return state;
	    }
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DefineReduxStateDataStructure = undefined;

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
		weather: {
			temp: '',
			pressure: '',
			humidity: '',
			sunrise: new Date().getTime(),
			sunset: new Date().getTime(),
			lat: '',
			lon: ''
		},
		date: '',
		error: {}
	};

	var DefineReduxStateDataStructure = exports.DefineReduxStateDataStructure = function DefineReduxStateDataStructure() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'DefineReduxStateDataStructure_getWeatherSuccess':
				var date = new Date();
				var dateFormat = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

				//state数据结构扁平化
				var weather = action.payload.weather;
				var main = weather.main;
				var sys = weather.sys;
				var coord = weather.coord;
				var name = weather.name;
				var wind = weather.wind;
				var clouds = weather.clouds;


				sys.sunrise = new Date(sys.sunrise).toLocaleTimeString();
				sys.sunset = new Date(sys.sunset).toLocaleTimeString();

				main.humidity = main.humidity + ' %';
				main.pressure = main.pressure + ' hpa';

				clouds.all = clouds.all + ' %';

				return Object.assign({}, state, {
					weather: (0, _extends3.default)({}, main, sys, coord, wind, clouds, { name: name }),
					error: {},
					date: dateFormat
				});
			case 'DefineReduxStateDataStructure_getWeatherFail':
				return Object.assign({}, state, { error: action.payload.err });
			default:
				return state;
		}
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    content: 'Fucking Chinese goverment'
	};

	var Es6ComponentInheritEs5Component = exports.Es6ComponentInheritEs5Component = function Es6ComponentInheritEs5Component() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        default:
	            return state;
	    }
	};

/***/ },
/* 252 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    fileKeys: []
	};

	var FileIO = exports.FileIO = function FileIO() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'FileIO_uploadFilesSuccess':
	            var fileKeysClone = state.fileKeys.slice(0);
	            fileKeysClone.push(action.payload.key);
	            return Object.assign({}, state, { fileKeys: fileKeysClone });
	        default:
	            return state;
	    }
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by dulin on 16/7/29.
	 */
	var initState = {
	    books: ['webpack', 'angular', 'react', 'react-native', 'backbone'],
	    page: 0,
	    count: 0
	};

	var InitReduxStateTreeDataInComponentWillMount = exports.InitReduxStateTreeDataInComponentWillMount = function InitReduxStateTreeDataInComponentWillMount() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'InitReduxStateTreeDataInComponentWillMount_initState':
	            return Object.assign({}, state, {
	                books: ['webpack', 'angular', 'react', 'react-native', 'backbone'],
	                page: 0,
	                count: 0
	            });
	        case 'InitReduxStateTreeDataInComponentWillMount_addPage':
	            return Object.assign({}, state, { page: action.page });
	        case 'InitReduxStateTreeDataInComponentWillMount_deleteBook':
	            var booksClone = state.books.slice(0);
	            booksClone.splice(action.index, 1);
	            return Object.assign({}, state, { books: booksClone });
	        default:
	            return state;
	    }
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    user: {},
	    other: '123'
	};

	var reactRedux02 = exports.reactRedux02 = function reactRedux02() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'reactRedux02_getUser':
	            return Object.assign({}, state, { user: { name: 'novaline', age: 23 } });
	        case 'reactRedux02_deleteUser':
	            return Object.assign({}, state, { user: {} });
	        default:
	            return state;
	    }
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InjectStateToEs5ComponentMixins = undefined;

	var _InjectStateToEs5ComponentMixins = __webpack_require__(96);

	var initState = {
	    token: '',
	    user: {}
	};

	var InjectStateToEs5ComponentMixins = exports.InjectStateToEs5ComponentMixins = function InjectStateToEs5ComponentMixins() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _InjectStateToEs5ComponentMixins.LOGIN:
	            return Object.assign({}, state, { token: '7b47d1e4f7a0a9ef569e', user: { name: action.payload.user.username } });
	        default:
	            return state;
	    }
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reactRedux03 = undefined;

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    book: {}
	};

	var reactRedux03 = exports.reactRedux03 = function reactRedux03() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'MapDispatchToProps_getBook':
	            return (0, _extends3.default)({}, state.book, {
	                book: {
	                    name: 'react by examples',
	                    author: 'novaline'
	                }
	            });
	        case 'MapDispatchToProps_deleteBook':
	            return (0, _extends3.default)({}, state.book, {
	                book: {}
	            });
	        default:
	            return state;
	    }
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cityList = exports.userId = exports.city = undefined;

	var _MapStateToProps = __webpack_require__(56);

	var city = exports.city = function city() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _MapStateToProps.SELECT_CITY:
	            return action.city;
	        default:
	            return state;
	    }
	};

	var userId = exports.userId = function userId() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _MapStateToProps.REQUEST_CITY:
	            return action.userId;
	        default:
	            return state;
	    }
	};

	var cityList = exports.cityList = function cityList() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _MapStateToProps.RECEIVE_CITY:
	            return action.cityList;
	        default:
	            return state;
	    }
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    filter: 'SHOW_ALL',
	    todos: [],
	    todosFiltered: []
	};

	var TodoList = exports.TodoList = function TodoList() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'ADD_TODO':
	            var todos = state.todos;
	            var newTodo = { completed: false, text: action.text };
	            todos.push(newTodo);
	            var todosFiltered = [];
	            var todosClone = todos.slice(0);

	            switch (filter) {
	                case 'SHOW_ALL':
	                    todosFiltered = todosClone;
	                    break;
	                case 'SHOW_COMPLETE':
	                    todosFiltered = todosClone.filter(function (todo) {
	                        return todo.completed;
	                    });
	                    break;
	            }

	            return Object.assign({}, state, { todos: todos });
	        default:
	            return state;
	    }
	};

	// export const todos = (state = [], action) => {
	//     switch (action.type) {
	//         case ADD_TODO:
	//             return [
	//                 ...state,
	//                 {text: action.text, completed: false}
	//             ]
	//         case TOGGLE_TODO:
	//             return state.map((todo, index) => {
	//                 if(index === action.index) {
	//                     return Object.assign({}, todo, {
	//                         completed: !todo.completed
	//                     });
	//                 }
	//                 return todo;
	//             });
	//         case COMPLETE_TODO:
	//             return state.map((todo, index) => {
	//                 return index === action.index ? Object.assign({}, todo, {completed: true}) : todo;
	//             });
	//         default:
	//             return state;
	//     }
	// };

	// export const visibilityFilter = (state = SHOW_ALL, action) => {
	//     switch (action.type) {
	//         case SET_VISIBILITY_FILTER:
	//             return action.filter;
	//         default:
	//             return state;
	//     }
	// };

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    loading: false
	};

	var Common = exports.Common = function Common() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'REQUEST':
	            return Object.assign({}, state, { loading: true });
	        case 'REQUEST_SUCCESS':
	            return Object.assign({}, state, { loading: false });
	        case 'REQUEST_FAIL':
	            return Object.assign({}, state, { loading: false });
	        default:
	            return state;
	    }
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.usr = exports.err = exports.cityMap = undefined;

	var _reduxApiMiddleware = __webpack_require__(97);

	var cityMap = exports.cityMap = function cityMap() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case _reduxApiMiddleware.REQUEST_SUCCESS:
				// console.log('REQUEST_SUCCESS reducer action', action);
				return Object.assign({}, state, action.payload);
			default:
				return state;
		}
	};

	var err = exports.err = function err() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case _reduxApiMiddleware.REQUEST_FAIL:
				return action.payload;
			default:
				return state;
		}
	};

	var usr = exports.usr = function usr() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? { usr: {} } : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'LOGIN_SUCCESS':
				return Object.assign({}, state, {
					usr: action.payload
				});
			default:
				return state;
		}
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initState = {
	    books: [],
	    err: null
	};

	var scrollTop = exports.scrollTop = function scrollTop() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'requestSuccess':
	            var data = action.data;
	            return Object.assign({}, state, {
	                books: data.Books,
	                err: data.Error
	            });
	        case 'requestError':
	            return Object.assign({}, state, {
	                err: action.err
	            });
	        default:
	            return state;
	    }
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(27);

	var _App = __webpack_require__(160);

	var _App2 = _interopRequireDefault(_App);

	var _Sidebar = __webpack_require__(164);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Main = __webpack_require__(162);

	var _Main2 = _interopRequireDefault(_Main);

	var _NoMatch = __webpack_require__(163);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	var _ArticleList = __webpack_require__(161);

	var _ArticleList2 = _interopRequireDefault(_ArticleList);

	var _FunctionBind = __webpack_require__(207);

	var _FunctionBind2 = _interopRequireDefault(_FunctionBind);

	var _Table = __webpack_require__(231);

	var _Table2 = _interopRequireDefault(_Table);

	var _DynamicInlineStyle = __webpack_require__(203);

	var _DynamicInlineStyle2 = _interopRequireDefault(_DynamicInlineStyle);

	var _Ref = __webpack_require__(225);

	var _Ref2 = _interopRequireDefault(_Ref);

	var _StateLessFunctionalComponent = __webpack_require__(229);

	var _StateLessFunctionalComponent2 = _interopRequireDefault(_StateLessFunctionalComponent);

	var _ThisPropsChildren = __webpack_require__(235);

	var _ThisPropsChildren2 = _interopRequireDefault(_ThisPropsChildren);

	var _InheritComponent = __webpack_require__(215);

	var _InheritComponent2 = _interopRequireDefault(_InheritComponent);

	var _SetChildrenReactElementStyle = __webpack_require__(227);

	var _SetChildrenReactElementStyle2 = _interopRequireDefault(_SetChildrenReactElementStyle);

	var _InsertAnElementOnMouseOver = __webpack_require__(218);

	var _InsertAnElementOnMouseOver2 = _interopRequireDefault(_InsertAnElementOnMouseOver);

	var _JSXArrayDom = __webpack_require__(219);

	var _JSXArrayDom2 = _interopRequireDefault(_JSXArrayDom);

	var _AudioPlayer = __webpack_require__(195);

	var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

	var _HorizontalScroll = __webpack_require__(213);

	var _HorizontalScroll2 = _interopRequireDefault(_HorizontalScroll);

	var _AjaxInConstructor = __webpack_require__(194);

	var _AjaxInConstructor2 = _interopRequireDefault(_AjaxInConstructor);

	var _CallChildComponentMethod = __webpack_require__(196);

	var _CallChildComponentMethod2 = _interopRequireDefault(_CallChildComponentMethod);

	var _PassAsyncDataToChildComponent = __webpack_require__(223);

	var _PassAsyncDataToChildComponent2 = _interopRequireDefault(_PassAsyncDataToChildComponent);

	var _HOC = __webpack_require__(210);

	var _HOC2 = _interopRequireDefault(_HOC);

	var _Filter = __webpack_require__(204);

	var _Filter2 = _interopRequireDefault(_Filter);

	var _ComposableComponent = __webpack_require__(198);

	var _ComposableComponent2 = _interopRequireDefault(_ComposableComponent);

	var _CountDownPage = __webpack_require__(200);

	var _CountDownPage2 = _interopRequireDefault(_CountDownPage);

	var _IOSScrollEvent = __webpack_require__(214);

	var _IOSScrollEvent2 = _interopRequireDefault(_IOSScrollEvent);

	var _DownloadAllTest = __webpack_require__(202);

	var _DownloadAllTest2 = _interopRequireDefault(_DownloadAllTest);

	var _LoopScroll = __webpack_require__(221);

	var _LoopScroll2 = _interopRequireDefault(_LoopScroll);

	var _GrabChildComponentState = __webpack_require__(208);

	var _GrabChildComponentState2 = _interopRequireDefault(_GrabChildComponentState);

	var _CreateIframe = __webpack_require__(201);

	var _CreateIframe2 = _interopRequireDefault(_CreateIframe);

	var _InputTypeText = __webpack_require__(206);

	var _InputTypeText2 = _interopRequireDefault(_InputTypeText);

	var _SetModalWindowPositionOnInputFocus = __webpack_require__(228);

	var _SetModalWindowPositionOnInputFocus2 = _interopRequireDefault(_SetModalWindowPositionOnInputFocus);

	var _InputTypeCheckbox = __webpack_require__(205);

	var _InputTypeCheckbox2 = _interopRequireDefault(_InputTypeCheckbox);

	var _MobileInputFocusVistualKeyboard = __webpack_require__(222);

	var _MobileInputFocusVistualKeyboard2 = _interopRequireDefault(_MobileInputFocusVistualKeyboard);

	var _LogicalOperators = __webpack_require__(220);

	var _LogicalOperators2 = _interopRequireDefault(_LogicalOperators);

	var _StaticMethod = __webpack_require__(230);

	var _StaticMethod2 = _interopRequireDefault(_StaticMethod);

	var _ComponentCommunication = __webpack_require__(197);

	var _ComponentCommunication2 = _interopRequireDefault(_ComponentCommunication);

	var _GetEveryTypeParams = __webpack_require__(190);

	var _GetEveryTypeParams2 = _interopRequireDefault(_GetEveryTypeParams);

	var _RouterWillLeave = __webpack_require__(192);

	var _RouterWillLeave2 = _interopRequireDefault(_RouterWillLeave);

	var _TransitionToAllWays = __webpack_require__(193);

	var _TransitionToAllWays2 = _interopRequireDefault(_TransitionToAllWays);

	var _NamesComponent = __webpack_require__(191);

	var _NamesComponent2 = _interopRequireDefault(_NamesComponent);

	var _ReduxBeginning = __webpack_require__(242);

	var _ReduxBeginning2 = _interopRequireDefault(_ReduxBeginning);

	var _CreateStoreInComponentCompareWithConnectState = __webpack_require__(241);

	var _CreateStoreInComponentCompareWithConnectState2 = _interopRequireDefault(_CreateStoreInComponentCompareWithConnectState);

	var _CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction = __webpack_require__(240);

	var _CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction2 = _interopRequireDefault(_CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);

	var _InitReduxStateTreeDataInComponentWillMount = __webpack_require__(184);

	var _InitReduxStateTreeDataInComponentWillMount2 = _interopRequireDefault(_InitReduxStateTreeDataInComponentWillMount);

	var _DefineReduxStateDataStructure = __webpack_require__(182);

	var _DefineReduxStateDataStructure2 = _interopRequireDefault(_DefineReduxStateDataStructure);

	var _MapStateToProps = __webpack_require__(188);

	var _MapStateToProps2 = _interopRequireDefault(_MapStateToProps);

	var _InjectActionCreatorsToComponentProps = __webpack_require__(185);

	var _InjectActionCreatorsToComponentProps2 = _interopRequireDefault(_InjectActionCreatorsToComponentProps);

	var _MapDispatchToProps = __webpack_require__(187);

	var _MapDispatchToProps2 = _interopRequireDefault(_MapDispatchToProps);

	var _ChangeStateTreeRefData = __webpack_require__(178);

	var _ChangeStateTreeRefData2 = _interopRequireDefault(_ChangeStateTreeRefData);

	var _AsyncActionInComponentWillReceiveProps = __webpack_require__(175);

	var _AsyncActionInComponentWillReceiveProps2 = _interopRequireDefault(_AsyncActionInComponentWillReceiveProps);

	var _AutoComplete = __webpack_require__(177);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _Es6ComponentInheritEs5Component = __webpack_require__(183);

	var _Es6ComponentInheritEs5Component2 = _interopRequireDefault(_Es6ComponentInheritEs5Component);

	var _ConnectMultipleNestedComponents = __webpack_require__(181);

	var _ConnectMultipleNestedComponents2 = _interopRequireDefault(_ConnectMultipleNestedComponents);

	var _InjectStateToEs5ComponentMixins = __webpack_require__(186);

	var _InjectStateToEs5ComponentMixins2 = _interopRequireDefault(_InjectStateToEs5ComponentMixins);

	var _CallReactDOMRenderInParentComponent = __webpack_require__(174);

	var _CallReactDOMRenderInParentComponent2 = _interopRequireDefault(_CallReactDOMRenderInParentComponent);

	var _AdorableAvatars = __webpack_require__(166);

	var _AdorableAvatars2 = _interopRequireDefault(_AdorableAvatars);

	var _FileIO = __webpack_require__(167);

	var _FileIO2 = _interopRequireDefault(_FileIO);

	var _TodoList = __webpack_require__(168);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	var _Form = __webpack_require__(165);

	var _Form2 = _interopRequireDefault(_Form);

	var _ReduxAPIMiddleware = __webpack_require__(243);

	var _ReduxAPIMiddleware2 = _interopRequireDefault(_ReduxAPIMiddleware);

	var _ScrollTop = __webpack_require__(244);

	var _ScrollTop2 = _interopRequireDefault(_ScrollTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//定义路由规则


	//mini-projects

	//react-redux


	//react
	var routes =
	//导航首页，导航到各个demo页面
	_react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/react' }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'react', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'function-bind', component: _FunctionBind2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'react-component-with-es5-es6-es7-syntax', component: _Table2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'dynamic-inline-style', component: _DynamicInlineStyle2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'refs-to-component', component: _Ref2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'stateless-functional-component', component: _StateLessFunctionalComponent2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'this-props-children', component: _ThisPropsChildren2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'inherit-component', component: _InheritComponent2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'set-children-react-element-style', component: _SetChildrenReactElementStyle2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'insert-an-element-on-mouseover', component: _InsertAnElementOnMouseOver2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'jsx-array-dom', component: _JSXArrayDom2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'react-audioplayer', component: _AudioPlayer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'horizontal-scroll', component: _HorizontalScroll2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'ajax-in-constructor', component: _AjaxInConstructor2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'call-child-component-method', component: _CallChildComponentMethod2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'pass-async-data-to-child-component', component: _PassAsyncDataToChildComponent2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'high-order-component', component: _HOC2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'react-filter-bar', component: _Filter2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'composable-component', component: _ComposableComponent2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'count-down', component: _CountDownPage2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'ios-scroll-event-block-js-thread', component: _IOSScrollEvent2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'download-all', component: _DownloadAllTest2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'loop-scroll', component: _LoopScroll2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'grab-child-component-state', component: _GrabChildComponentState2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'create-iframe', component: _CreateIframe2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'set-modal-window-position-on-input-focus', component: _SetModalWindowPositionOnInputFocus2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'input-type-text', component: _InputTypeText2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'input-type-checkbox', component: _InputTypeCheckbox2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'mobile-input-focus-vistual-keybroad', component: _MobileInputFocusVistualKeyboard2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'logical-operators', component: _LogicalOperators2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'static-method', component: _StaticMethod2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'component-communication', component: _ComponentCommunication2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'react-dom', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'call-react-dom-render-in-parent-component', component: _CallReactDOMRenderInParentComponent2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'react-router', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'get-every-type-params(/:page)', component: _GetEveryTypeParams2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'router-will-leave', component: _RouterWillLeave2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'transition-to-all-ways', component: _TransitionToAllWays2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'redux', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'redux-beginning', component: _ReduxBeginning2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'create-store-in-component-compare-with-connect-state', component: _CreateStoreInComponentCompareWithConnectState2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'check-data-in-state-and-new-createStore-state-is-same-when-dispatch-action', component: _CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'react-redux', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'init-store-data-in-componentWillMount-when-go-back', component: _InitReduxStateTreeDataInComponentWillMount2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'define-redux-state-data-structure', component: _DefineReduxStateDataStructure2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'map-state-to-props', component: _MapStateToProps2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'inject-action-creators-to-component-props', component: _InjectActionCreatorsToComponentProps2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'map-dispatch-to-props', component: _MapDispatchToProps2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'change-state-reference-type-data', component: _ChangeStateTreeRefData2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'async-action-in-componentWillReceiveProps', component: _AsyncActionInComponentWillReceiveProps2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'auto-complete-page', component: _AutoComplete2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'es6-component-inherit-es5-component', component: _Es6ComponentInheritEs5Component2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'connect-multiple-nested-components', component: _ConnectMultipleNestedComponents2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'inject-state-to-es5-component-mixins', component: _InjectStateToEs5ComponentMixins2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'mini-projects', components: { sidebar: _Sidebar2.default, main: _Main2.default } },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArticleList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'adorable-avatar', component: _AdorableAvatars2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'file-io', component: _FileIO2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'todoList', component: _TodoList2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: 'form', component: _Form2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'redux-api-middware', component: _ReduxAPIMiddleware2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'ScrollTop', component: _ScrollTop2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
	);

	//路由改造: 一，JS原始对象的形式,同步加载方式
	// const routes = {
	//     path: '/',
	//     component: App,
	//     childRoutes: [
	//         {path: 'table', component: Table},
	//         {path: 'form', component: Form}
	//     ]
	// };

	//路由改造：二，同步加载方式，不同于改造前静态import, 静态import，打包后的代码要马上执行很多__webpack_require__(moduleid),
	// 改造后，代码打包后的__webpack_require__(moduleid)不执行，而是延后到具体路由加载的时候执行
	//打包的js文件没有[id].chunk.js，还是一次性将所有代码打包到一个文件，所以下载也是下载整个bundle文件，这点和异步加载生成单独chunk.js文件的方式不同。

	// import App from './pages/App.react';
	// const routes = {
	//     path: '/',
	//     component: App,
	//     childRoutes: [
	//         {
	//             path: 'table',
	//             getComponent: (nextState, cb) => {
	//                 const tableComponent = require('./pages/Table.react');
	//                 cb(null, tableComponent);
	//             }
	//         },
	//         {
	//             path: 'Form',
	//             getComponent: (nextState, cb) => cb(null, require('./pages/Form.react'))
	//         }
	//     ]
	// }

	//路由改造：三，异步加载方式，每个异步加载的模块生成单独的[id].chunk.js，根据路由动态加载（向服务器请求并下载）该模块的路由和组件文件(chunk.js)
	// import App from './pages/App.react';
	// const routes = {
	//     path: '/',
	//     component: App,
	//     getChildRoutes(partialNextState, cb) {
	//         //partialNextState是react-router的Link的{pathname, query, state}中的state
	//         //使用partialNextState做一些逻辑处理，决定加载哪个route
	//         require.ensure([], require => {
	//             const tableRoute = require('./routes/Table');
	//             cb(null, [
	//                 tableRoute,
	//                 require('./routes/Form')
	//             ]);
	//         })
	//     }
	// }

	//待整理例子


	//react-dom


	//redux


	//react-router


	//各个demo页面component
	exports.default = routes;
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ },
/* 264 */
[400, 270],
/* 265 */
[401, 271],
/* 266 */
[402, 273],
/* 267 */
[403, 274],
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(275), __esModule: true };

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	__webpack_require__(299);
	module.exports = __webpack_require__(14).Array.from;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(301);
	module.exports = __webpack_require__(14).Object.assign;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(302);
	var $Object = __webpack_require__(14).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(303);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(306);
	__webpack_require__(305);
	__webpack_require__(307);
	__webpack_require__(308);
	module.exports = __webpack_require__(14).Symbol;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	__webpack_require__(309);
	module.exports = __webpack_require__(75).f('iterator');

/***/ },
/* 276 */
76,
/* 277 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24)
	  , toLength  = __webpack_require__(110)
	  , toIndex   = __webpack_require__(297);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(61)
	  , TAG = __webpack_require__(13)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(18)
	  , createDesc      = __webpack_require__(37);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(67)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(35)
	  , ITERATOR   = __webpack_require__(13)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(61);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(28);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(66)
	  , descriptor     = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(68)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(13)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(13)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(24);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(45)('meta')
	  , isObject = __webpack_require__(34)
	  , has      = __webpack_require__(23)
	  , setDesc  = __webpack_require__(18).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(33)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(36)
	  , gOPS     = __webpack_require__(67)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(72)
	  , IObject  = __webpack_require__(104)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(33)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(18)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(24)
	  , gOPN      = __webpack_require__(107).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(23)
	  , toObject    = __webpack_require__(72)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(34)
	  , anObject = __webpack_require__(28);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(62)(Function.call, __webpack_require__(106).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(71)
	  , defined   = __webpack_require__(63);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(71)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(279)
	  , ITERATOR  = __webpack_require__(13)('iterator')
	  , Iterators = __webpack_require__(35);
	module.exports = __webpack_require__(14).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(62)
	  , $export        = __webpack_require__(22)
	  , toObject       = __webpack_require__(72)
	  , call           = __webpack_require__(285)
	  , isArrayIter    = __webpack_require__(283)
	  , toLength       = __webpack_require__(110)
	  , createProperty = __webpack_require__(280)
	  , getIterFn      = __webpack_require__(298);

	$export($export.S + $export.F * !__webpack_require__(287)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(277)
	  , step             = __webpack_require__(288)
	  , Iterators        = __webpack_require__(35)
	  , toIObject        = __webpack_require__(24);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(105)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(291)});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(22)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(66)});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(22);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(18).f});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(22);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(295).set});

/***/ },
/* 305 */
119,
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(17)
	  , has            = __webpack_require__(23)
	  , DESCRIPTORS    = __webpack_require__(21)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(109)
	  , META           = __webpack_require__(290).KEY
	  , $fails         = __webpack_require__(33)
	  , shared         = __webpack_require__(70)
	  , setToStringTag = __webpack_require__(68)
	  , uid            = __webpack_require__(45)
	  , wks            = __webpack_require__(13)
	  , wksExt         = __webpack_require__(75)
	  , wksDefine      = __webpack_require__(74)
	  , keyOf          = __webpack_require__(289)
	  , enumKeys       = __webpack_require__(281)
	  , isArray        = __webpack_require__(284)
	  , anObject       = __webpack_require__(28)
	  , toIObject      = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(73)
	  , createDesc     = __webpack_require__(37)
	  , _create        = __webpack_require__(66)
	  , gOPNExt        = __webpack_require__(293)
	  , $GOPD          = __webpack_require__(106)
	  , $DP            = __webpack_require__(18)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(107).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(67).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(65)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(29)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('asyncIterator');

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('observable');

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(300);
	var global        = __webpack_require__(17)
	  , hide          = __webpack_require__(29)
	  , Iterators     = __webpack_require__(35)
	  , TO_STRING_TAG = __webpack_require__(13)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(342);
	module.exports = __webpack_require__(19).Object.assign;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(343);
	module.exports = __webpack_require__(19).Object.setPrototypeOf;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	__webpack_require__(345);
	__webpack_require__(347);
	__webpack_require__(344);
	module.exports = __webpack_require__(19).Promise;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(346);
	__webpack_require__(119);
	module.exports = __webpack_require__(19).Symbol;

/***/ },
/* 315 */
277,
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(9);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(39)
	  , call        = __webpack_require__(324)
	  , isArrayIter = __webpack_require__(322)
	  , anObject    = __webpack_require__(30)
	  , toLength    = __webpack_require__(338)
	  , getIterFn   = __webpack_require__(340);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , getNames  = __webpack_require__(9).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 321 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(41)
	  , ITERATOR   = __webpack_require__(11)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(30);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(9)
	  , descriptor     = __webpack_require__(82)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(80)(IteratorPrototype, __webpack_require__(11)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(11)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 327 */
288,
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(9)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , macrotask = __webpack_require__(337).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(38)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(9)
	  , toObject = __webpack_require__(339)
	  , IObject  = __webpack_require__(113);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(78)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(83);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(19)
	  , $           = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(46)
	  , SPECIES     = __webpack_require__(11)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(30)
	  , aFunction = __webpack_require__(76)
	  , SPECIES   = __webpack_require__(11)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(117)
	  , defined   = __webpack_require__(77);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(39)
	  , invoke             = __webpack_require__(321)
	  , html               = __webpack_require__(320)
	  , cel                = __webpack_require__(316)
	  , global             = __webpack_require__(15)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(38)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(117)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(77);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(112)
	  , ITERATOR  = __webpack_require__(11)('iterator')
	  , Iterators = __webpack_require__(41);
	module.exports = __webpack_require__(19).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(315)
	  , step             = __webpack_require__(327)
	  , Iterators        = __webpack_require__(41)
	  , toIObject        = __webpack_require__(49);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(114)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(40);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(330)});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(40);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(115).set});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(9)
	  , LIBRARY    = __webpack_require__(81)
	  , global     = __webpack_require__(15)
	  , ctx        = __webpack_require__(39)
	  , classof    = __webpack_require__(112)
	  , $export    = __webpack_require__(40)
	  , isObject   = __webpack_require__(47)
	  , anObject   = __webpack_require__(30)
	  , aFunction  = __webpack_require__(76)
	  , strictNew  = __webpack_require__(335)
	  , forOf      = __webpack_require__(318)
	  , setProto   = __webpack_require__(115).set
	  , same       = __webpack_require__(332)
	  , SPECIES    = __webpack_require__(11)('species')
	  , speciesConstructor = __webpack_require__(334)
	  , asap       = __webpack_require__(329)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(46)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(331)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(48)(P, PROMISE);
	__webpack_require__(333)(PROMISE);
	Wrapper = __webpack_require__(19)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(326)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(336)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(114)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(9)
	  , global         = __webpack_require__(15)
	  , has            = __webpack_require__(79)
	  , DESCRIPTORS    = __webpack_require__(46)
	  , $export        = __webpack_require__(40)
	  , redefine       = __webpack_require__(83)
	  , $fails         = __webpack_require__(78)
	  , shared         = __webpack_require__(116)
	  , setToStringTag = __webpack_require__(48)
	  , uid            = __webpack_require__(118)
	  , wks            = __webpack_require__(11)
	  , keyOf          = __webpack_require__(328)
	  , $names         = __webpack_require__(319)
	  , enumKeys       = __webpack_require__(317)
	  , isArray        = __webpack_require__(323)
	  , anObject       = __webpack_require__(30)
	  , toIObject      = __webpack_require__(49)
	  , createDesc     = __webpack_require__(82)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(81)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(341);
	var Iterators = __webpack_require__(41);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(350);
	var isArguments = __webpack_require__(349);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 349 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 350 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 351 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 352 */
351,
/* 353 */
351,
/* 354 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(31);

	var _PathUtils = __webpack_require__(25);

	var _ExecutionEnvironment = __webpack_require__(50);

	var _DOMUtils = __webpack_require__(84);

	var _DOMStateStorage = __webpack_require__(120);

	var _createDOMHistory = __webpack_require__(121);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(31);

	var _PathUtils = __webpack_require__(25);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	     false ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(25);

	var _Actions = __webpack_require__(31);

	var _createHistory = __webpack_require__(123);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  false ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  false ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         false ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(94);
	module.exports = self.fetch.bind(self);


/***/ },
/* 359 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 360 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(126),
	    isArray = __webpack_require__(360);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 362 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 363 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 364 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(362),
	    isHostObject = __webpack_require__(363),
	    isObjectLike = __webpack_require__(364);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 366 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(399);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(128);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(129);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(128);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(370);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(371);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(129);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(365);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(125);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(16);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(130);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(131);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(20);

	var _InternalPropTypes = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	     false ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ?  false ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ?  false ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(20);

	var _InternalPropTypes = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(122);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(51);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(90);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(26);

	var _RouterContext = __webpack_require__(52);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(20);

	var _RouterUtils = __webpack_require__(132);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	     false ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	       false ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	       false ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	     false ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	     false ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(52);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(88);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	       false ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(52);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  var withContext = middlewares.map(function (m) {
	    return m.renderRouterContext;
	  }).filter(function (f) {
	    return f;
	  });
	  var withComponent = middlewares.map(function (m) {
	    return m.renderRouteComponent;
	  }).filter(function (f) {
	    return f;
	  });
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(355);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(134);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(32);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _AsyncUtils = __webpack_require__(88);

	var _deprecateObjectProperties = __webpack_require__(53);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = void 0;

	  if (false) {
	    nextStateWithLocation = _extends({}, nextState);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(nextStateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties from the first argument to `getComponent` and `getComponents` is deprecated. That argument is now the router state (`nextState`) rather than the location. To access the location, use `nextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }
	  } else {
	    nextStateWithLocation = _extends({}, nextState, location);
	  }

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(32);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  for (var p in params) {
	    if (Object.prototype.hasOwnProperty.call(params, p) && paramNames.indexOf(p) !== -1) {
	      routeParams[p] = params[p];
	    }
	  }

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(122);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(134);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(32);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(10);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(133);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(90);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(20);

	var _RouterUtils = __webpack_require__(132);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ?  false ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _AsyncUtils = __webpack_require__(88);

	var _PatternUtils = __webpack_require__(32);

	var _RouteUtils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  route.getChildRoutes(location, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               false ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               false ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(51);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(90);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(7);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	   false ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(125);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(89);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent) {
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    render: function render() {
	      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(143)['default'];

	var _regeneratorRuntime = __webpack_require__(144)['default'];

	var _interopRequireDefault = __webpack_require__(93)['default'];

	exports.__esModule = true;

	var _isomorphicFetch = __webpack_require__(358);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _lodashIsplainobject = __webpack_require__(127);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var _CALL_API = __webpack_require__(91);

	var _CALL_API2 = _interopRequireDefault(_CALL_API);

	var _validation = __webpack_require__(138);

	var _errors = __webpack_require__(92);

	var _util = __webpack_require__(137);

	/**
	 * A Redux middleware that processes RSAA actions.
	 *
	 * @type {ReduxMiddleware}
	 * @access public
	 */
	function apiMiddleware(_ref) {
	  var _this = this;

	  var getState = _ref.getState;

	  return function (next) {
	    return function callee$2$0(action) {
	      var validationErrors, _callAPI, _requestType, callAPI, endpoint, headers, method, body, credentials, bailout, types, _normalizeTypeDescriptors, requestType, successType, failureType, res;

	      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
	        while (1) switch (context$3$0.prev = context$3$0.next) {
	          case 0:
	            if (_validation.isRSAA(action)) {
	              context$3$0.next = 2;
	              break;
	            }

	            return context$3$0.abrupt('return', next(action));

	          case 2:
	            validationErrors = _validation.validateRSAA(action);

	            if (!validationErrors.length) {
	              context$3$0.next = 7;
	              break;
	            }

	            _callAPI = action[_CALL_API2['default']];

	            if (_callAPI.types && Array.isArray(_callAPI.types)) {
	              _requestType = _callAPI.types[0];

	              if (_requestType && _requestType.type) {
	                _requestType = _requestType.type;
	              }
	              next({
	                type: _requestType,
	                payload: new _errors.InvalidRSAA(validationErrors),
	                error: true
	              });
	            }
	            return context$3$0.abrupt('return');

	          case 7:
	            callAPI = action[_CALL_API2['default']];
	            endpoint = callAPI.endpoint;
	            headers = callAPI.headers;
	            method = callAPI.method;
	            body = callAPI.body;
	            credentials = callAPI.credentials;
	            bailout = callAPI.bailout;
	            types = callAPI.types;
	            _normalizeTypeDescriptors = _util.normalizeTypeDescriptors(types);
	            requestType = _normalizeTypeDescriptors[0];
	            successType = _normalizeTypeDescriptors[1];
	            failureType = _normalizeTypeDescriptors[2];
	            context$3$0.prev = 19;

	            if (!(typeof bailout === 'boolean' && bailout || typeof bailout === 'function' && bailout(getState()))) {
	              context$3$0.next = 22;
	              break;
	            }

	            return context$3$0.abrupt('return');

	          case 22:
	            context$3$0.next = 30;
	            break;

	          case 24:
	            context$3$0.prev = 24;
	            context$3$0.t0 = context$3$0['catch'](19);
	            context$3$0.next = 28;
	            return _regeneratorRuntime.awrap(_util.actionWith(_extends({}, requestType, {
	              payload: new _errors.RequestError('[CALL_API].bailout function failed'),
	              error: true
	            }), [action, getState()]));

	          case 28:
	            context$3$0.t1 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t1));

	          case 30:
	            if (!(typeof endpoint === 'function')) {
	              context$3$0.next = 41;
	              break;
	            }

	            context$3$0.prev = 31;

	            endpoint = endpoint(getState());
	            context$3$0.next = 41;
	            break;

	          case 35:
	            context$3$0.prev = 35;
	            context$3$0.t2 = context$3$0['catch'](31);
	            context$3$0.next = 39;
	            return _regeneratorRuntime.awrap(_util.actionWith(_extends({}, requestType, {
	              payload: new _errors.RequestError('[CALL_API].endpoint function failed'),
	              error: true
	            }), [action, getState()]));

	          case 39:
	            context$3$0.t3 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t3));

	          case 41:
	            if (!(typeof headers === 'function')) {
	              context$3$0.next = 52;
	              break;
	            }

	            context$3$0.prev = 42;

	            headers = headers(getState());
	            context$3$0.next = 52;
	            break;

	          case 46:
	            context$3$0.prev = 46;
	            context$3$0.t4 = context$3$0['catch'](42);
	            context$3$0.next = 50;
	            return _regeneratorRuntime.awrap(_util.actionWith(_extends({}, requestType, {
	              payload: new _errors.RequestError('[CALL_API].headers function failed'),
	              error: true
	            }), [action, getState()]));

	          case 50:
	            context$3$0.t5 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t5));

	          case 52:
	            context$3$0.next = 54;
	            return _regeneratorRuntime.awrap(_util.actionWith(requestType, [action, getState()]));

	          case 54:
	            context$3$0.t6 = context$3$0.sent;
	            next(context$3$0.t6);
	            context$3$0.prev = 56;
	            context$3$0.next = 59;
	            return _regeneratorRuntime.awrap(_isomorphicFetch2['default'](endpoint, { method: method, body: body, credentials: credentials, headers: headers }));

	          case 59:
	            res = context$3$0.sent;
	            context$3$0.next = 68;
	            break;

	          case 62:
	            context$3$0.prev = 62;
	            context$3$0.t7 = context$3$0['catch'](56);
	            context$3$0.next = 66;
	            return _regeneratorRuntime.awrap(_util.actionWith(_extends({}, requestType, {
	              payload: new _errors.RequestError(context$3$0.t7.message),
	              error: true
	            }), [action, getState()]));

	          case 66:
	            context$3$0.t8 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t8));

	          case 68:
	            if (!res.ok) {
	              context$3$0.next = 75;
	              break;
	            }

	            context$3$0.next = 71;
	            return _regeneratorRuntime.awrap(_util.actionWith(successType, [action, getState(), res]));

	          case 71:
	            context$3$0.t9 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t9));

	          case 75:
	            context$3$0.next = 77;
	            return _regeneratorRuntime.awrap(_util.actionWith(_extends({}, failureType, {
	              error: true
	            }), [action, getState(), res]));

	          case 77:
	            context$3$0.t10 = context$3$0.sent;
	            return context$3$0.abrupt('return', next(context$3$0.t10));

	          case 79:
	          case 'end':
	            return context$3$0.stop();
	        }
	      }, null, _this, [[19, 24], [31, 35], [42, 46], [56, 62]]);
	    };
	  };
	}

	exports.apiMiddleware = apiMiddleware;

	// Do not process actions without a [CALL_API] property

	// Try to dispatch an error request FSA for invalid RSAAs

	// Parse the validated RSAA action

	// Should we bail out?

	// Process [CALL_API].endpoint function

	// Process [CALL_API].headers function

	// We can now dispatch the request FSA

	// Make the API call

	// The request was malformed, or there was a network error

	// Process the server response

/***/ },
/* 394 */
[400, 310],
/* 395 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(139)["default"];

	var _Object$setPrototypeOf = __webpack_require__(140)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(142)["default"];

	var _Object$create = __webpack_require__(139)["default"];

	var _Object$setPrototypeOf = __webpack_require__(140)["default"];

	var _Promise = __webpack_require__(141)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(366)))

/***/ },
/* 398 */
/***/ function(module, exports) {

	!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.reduxLogger=r():t.reduxLogger=r()}(this,function(){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){e(1),t.exports=e(1)},function(t,r){"use strict";function e(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function n(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function o(t,r,o,i){switch("undefined"==typeof t?"undefined":n(t)){case"object":return"function"==typeof t[i]?t[i].apply(t,e(o)):t[i];case"function":return t(r);default:return t}}function i(){function t(){j.forEach(function(t,r){var e=t.started,i=t.startedTime,a=t.action,f=t.prevState,s=t.error,p=t.took,l=t.nextState,v=j[r+1];v&&(l=v.prevState,p=v.started-e);var m=b(a),x="function"==typeof d?d(function(){return l},a):d,S=c(i),h=T.title?"color: "+T.title(m)+";":null,w="action "+(y?S:"")+" "+m.type+" "+(g?"(in "+p.toFixed(2)+" ms)":"");try{x?T.title?u.groupCollapsed("%c "+w,h):u.groupCollapsed(w):T.title?u.group("%c "+w,h):u.group(w)}catch(A){u.log(w)}var E=o(n,m,[f],"prevState"),F=o(n,m,[m],"action"),C=o(n,m,[s,f],"error"),k=o(n,m,[l],"nextState");E&&(T.prevState?u[E]("%c prev state","color: "+T.prevState(f)+"; font-weight: bold",f):u[E]("prev state",f)),F&&(T.action?u[F]("%c action","color: "+T.action(m)+"; font-weight: bold",m):u[F]("action",m)),s&&C&&(T.error?u[C]("%c error","color: "+T.error(s,f)+"; font-weight: bold",s):u[C]("error",s)),k&&(T.nextState?u[k]("%c next state","color: "+T.nextState(l)+"; font-weight: bold",l):u[k]("next state",l));try{u.groupEnd()}catch(A){u.log("—— log end ——")}}),j.length=0}var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=r.level,n=void 0===e?"log":e,i=r.logger,u=void 0===i?console:i,a=r.logErrors,s=void 0===a?!0:a,d=r.collapsed,p=r.predicate,l=r.duration,g=void 0===l?!1:l,v=r.timestamp,y=void 0===v?!0:v,m=r.transformer,x=r.stateTransformer,S=void 0===x?function(t){return t}:x,h=r.actionTransformer,b=void 0===h?function(t){return t}:h,w=r.errorTransformer,A=void 0===w?function(t){return t}:w,E=r.colors,T=void 0===E?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:E;if("undefined"==typeof u)return function(){return function(t){return function(r){return t(r)}}};m&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var j=[];return function(r){var e=r.getState;return function(r){return function(n){if("function"==typeof p&&!p(e,n))return r(n);var o={};j.push(o),o.started=f.now(),o.startedTime=new Date,o.prevState=S(e()),o.action=n;var i=void 0;if(s)try{i=r(n)}catch(u){o.error=A(u)}else i=r(n);if(o.took=f.now()-o.started,o.nextState=S(e()),t(),o.error)throw o.error;return i}}}}var u=function(t,r){return new Array(r+1).join(t)},a=function(t,r){return u("0",r-t.toString().length)+t},c=function(t){return"@ "+a(t.getHours(),2)+":"+a(t.getMinutes(),2)+":"+a(t.getSeconds(),2)+"."+a(t.getMilliseconds(),3)},f="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;t.exports=i}])});

/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = { "default": __webpack_require__(__webpack_module_template_argument_0__), __esModule: true };

/***/ }
]);