webpackJsonp([3],{66:function(e,t,n){"use strict";var r="http://104.224.139.200:3003";e.exports={IP_ADDRESS:{url:r+"/ip/ip2addr",appKey:"d50bed2f4503d59bf5ccaef7d9de405b"},MOBILE:{url:r+"/mobile/get",appKey:"b2c81c2612ac13fb11caa3862f46ef5b"},toutiao:{url:r+"/toutiao/index",key:"85d9e28863a9a6fe3d84cdb06dcd6278"}}},103:function(e,t){"use strict";var n=function(e,t){return{params:function(e){var t=encodeURIComponent;return Object.keys(e).map(function(n){return t(n)+"="+t(e[n])}).join("&")}}}(window,document);e.exports=n},293:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=o(c),f=n(45),d=o(f),p=n(71),h=(o(p),n(141)),b=o(h),m=n(56),y=o(m),v=function(t){function n(){a(this,n);var t=u(this,Object.getPrototypeOf(n).call(this));return t.handleClose=function(e){t.setState({open:!1})},t.handleTextChange=function(e){var n=e.target.value;t.setState({ip:n})},t.handleSubmit=function(n){n.preventDefault();var o={ip:t.state.ip,key:e.IP_ADDRESS.appKey},a=r.params(o),u=e.IP_ADDRESS.url+("?"+a);fetch(u).then(function(e){return e.json()}).then(function(e){return 0!==e.error_code?Promise.reject({code:e.error_code,reason:e.reason}):void t.setState({res:e})})["catch"](function(e){e.code?t.setState({error:e,open:!0}):t.setState({error:{code:-1,reason:"系统异常"},open:!0})})},t.state={ip:"",res:{},open:!1,error:""},t}return i(n,t),l(n,[{key:"render",value:function(){return console.count("ip render"),s["default"].createElement("div",null,s["default"].createElement("form",{onSubmit:this.handleSubmit},s["default"].createElement(d["default"],{type:"text",id:"ip-text-field",hintText:"输入ip地址",value:this.state.ip,onChange:this.handleTextChange}),s["default"].createElement(b["default"],{label:"查询",type:"submit"})),0===this.state.res.error_code?this.renderResult():this.renderError(2e3))}},{key:"renderResult",value:function(){var e=this.state,t=e.ip,n=e.res;return s["default"].createElement("div",null,s["default"].createElement("p",null,"查询的IP或域名：",t),s["default"].createElement("p",null,"所在位置：",n.result.area))}},{key:"renderError",value:function(e){var t=this.state.error;return s["default"].createElement(y["default"],{modal:!1,open:this.state.open,onRequestClose:this.handleClose},t.reason)}}]),n}(c.Component);t["default"]=v}).call(t,n(66),n(103))}});