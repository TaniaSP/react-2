(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4410:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return ee},default:function(){return et},movieContext:function(){return Z}});var n=r(7294),o={src:"/_next/static/media/header_bg.fecde43e.png",height:792,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAT0lEQVR42hXIRw6AIBAAQBK9WCgrdQkioBAx/v99xjkOAcYEpx61R6ckb+16754Ckn+drfkwxs5CLuPg1lUCENgg7qHnFDWq8wl0rsuEpXzzbwaRowbwrgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};function a(e){var t=e.onConfirm,r=e.onClose;return n.createElement("div",{className:"overlay"},n.createElement("div",{className:"delete-movie-box modal"},n.createElement("button",{className:"close",onClick:function(){return r()}},"x"),n.createElement("h2",null,"Delete Movie"),n.createElement("p",null,"Are you sure you want to delete this movie?"),n.createElement("div",{className:"modal-buttons"},n.createElement("button",{className:"confirm",onClick:function(){return t()}},"Confirm"))))}var i=r(2175),c=r(5697),l=r.n(c);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=e,o=r[t],t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function h(e){var t,r,o,a,i,c,l,s=e.value,h=e.onSelected,p=(o=(r=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(!0))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],a=r[1],i=(0,n.useRef)(null),c=function(e){null!==i.current&&void 0!==i.current&&!1===i.current.contains(e.target)?a(!1):a(!0)},(0,n.useEffect)(function(){return document.addEventListener("click",c,!0),function(){document.removeEventListener("click",c,!0)}},[]),{ref:i,isComponentVisible:o,setIsComponentVisible:a}),y=p.ref,v=p.isComponentVisible,d=["Adventure","Comedy","Drama","Science Fiction","War","Romance","Horror","Action","Thriller","Mystery","Fantasy","Animation","Family","Music","Crime","Western","History"].map(function(e){return{checked:void 0!==s.find(function(t){return t===e}),value:e}}),g=function(e){if(Array.isArray(e))return e}(l=(0,n.useState)(!1))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(l,2)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}}(l,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),b=g[0],E=g[1],w=function(e){h(d.map(function(t){return f(f({},t),{},{checked:t.value===e?!t.checked:t.checked})}).filter(function(e){return e.checked}).map(function(e){return e.value}))};(0,n.useEffect)(function(){v||E(!1)},[v]);var S=(0,n.useMemo)(function(){return s.length>0?s.join(", "):"Select Genre"},[s]);return n.createElement("div",{className:"list-droprown"},n.createElement("button",{type:"button",onClick:function(){return E(!b)},className:b?"open":"",title:S},S),b&&n.createElement("ul",{ref:y,className:"checkbox-list"},d.map(function(e,t){return n.createElement("li",{key:e.value}," ",n.createElement("label",{htmlFor:"check".concat(t)}," ",n.createElement("input",{id:"check".concat(t),type:"checkbox",checked:e.checked,onChange:function(){return w(e.value)}}),e.value))})))}h.defaultProps={value:[]},h.propTypes={value:l().array};var p=r(2208);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(l){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o,a,i=Object.create((t&&t.prototype instanceof m?t:m).prototype),c=new A(n||[]);return i._invoke=(o=c,a="suspendedStart",function(t,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw n;return k()}for(o.method=t,o.arg=n;;){var i=o.delegate;if(i){var c=function e(t,r){var n=t.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method))return f;r.method="throw",r.arg=TypeError("The iterator does not provide a 'throw' method")}return f}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,f)}(i,o);if(c){if(c===f)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var l=s(e,r,o);if("normal"===l.type){if(a=o.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(a="completed",o.method="throw",o.arg=l.arg)}}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var f={};function m(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==t&&r.call(b,o)&&(d=b);var E=p.prototype=m.prototype=Object.create(d);function w(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var n;this._invoke=function(o,a){function i(){return new t(function(n,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==y(f)&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(E,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(S.prototype),c(S.prototype,a,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(E),c(E,i,"Generator"),c(E,o,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){r(u);return}c.done?t(l):Promise.resolve(l).then(n,o)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function w(e){var t,r,o,a,c=e.movie,l=e.isEdit,u=e.onClose,s=b((0,p.nv)(),2),f=s[0],m=s[1],y=m.error,E=m.isSuccess,w=b((0,p.Im)(),2),S=w[0],O=w[1],x=O.error,A=O.isSuccess,_=b((0,n.useState)([]),2),k=_[0],j=_[1],N={title:"",poster_path:"",release_date:(r=(t=new Date).getTimezoneOffset(),(t=new Date(t.getTime()-6e4*r)).toISOString().split("T")[0]),vote_average:0,runtime:0,overview:"",genres:[]},C=c.title,L=c.poster_path,P=c.release_date,I=c.vote_average,R=c.runtime,T=c.overview,M=c.genres;return(0,n.useEffect)(function(){(E||A)&&u()},[u,E,A]),(0,n.useEffect)(function(){var e={messages:[]};void 0!==y&&"data"in y&&(e=y.data),void 0!==x&&"data"in x&&(e=x.data),j(e.messages)},[y,x]),n.createElement("div",{className:"overlay"},n.createElement("div",{className:"edit-movie-box modal"},n.createElement("button",{className:"close",onClick:function(){return u()}},"x"),n.createElement("h2",null,l?"Edit":"Add"," Movie"),n.createElement(i.J9,{initialValues:{title:C,poster_path:L,release_date:P,vote_average:I,runtime:R,overview:T,genres:M},onSubmit:(o=v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=5;break}return e.next=3,S(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){var n,o;n=e,o=r[t],t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:c.id},t));case 3:e.next=7;break;case 5:return e.next=7,f(t);case 7:case"end":return e.stop()}},e)}),a=function(){var e=this,t=arguments;return new Promise(function(r,n){var a=o.apply(e,t);function i(e){g(a,r,n,i,c,"next",e)}function c(e){g(a,r,n,i,c,"throw",e)}i(void 0)})},function(e){return a.apply(this,arguments)})},function(e){var t=e.values,r=e.handleChange,o=e.handleBlur,a=e.handleSubmit,i=e.setFieldValue,c=e.resetForm;return n.createElement("form",{onSubmit:a},n.createElement("div",{className:"layout"},n.createElement("div",{className:"top-errors"},k.length>0&&n.createElement("div",null,n.createElement("ul",null,k.map(function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"left"},n.createElement("label",null,"Title:",n.createElement("input",{onChange:r,onBlur:o,value:t.title,type:"text",name:"title",placeholder:"Select Title"})),n.createElement("label",null,"Movie URL:",n.createElement("input",{onChange:r,onBlur:o,value:t.poster_path,type:"text",name:"poster_path",placeholder:"https://"})),n.createElement("span",null,"Genre:",n.createElement(h,{onSelected:function(e){return i("genres",e)},value:t.genres}))),n.createElement("div",{className:"right"},n.createElement("label",null,"Release Date:",n.createElement("input",{onChange:function(e){return i("release_date",e.target.value)},onBlur:o,value:t.release_date,type:"date",name:"release_date"})),n.createElement("label",null,"Rating:",n.createElement("input",{onChange:r,onBlur:o,value:t.vote_average,type:"number",name:"vote_average",placeholder:"7.8"})),n.createElement("label",null,"Runtime:",n.createElement("input",{onChange:r,onBlur:o,value:t.runtime,type:"number",name:"runtime",placeholder:"minutes"}))),n.createElement("div",{className:"bottom"},n.createElement("label",null,"Overview:",n.createElement("textarea",{onChange:r,onBlur:o,value:t.overview,rows:5,name:"overview",placeholder:"Movie description"})))),n.createElement("div",{className:"modal-buttons"},n.createElement("button",{type:"reset",onClick:function(){return c({values:N})}},"Reset"),n.createElement("button",{type:"submit",className:"confirm"},"Submit")))})))}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}w.defaultProps={isEdit:!1},w.propTypes={isEdit:l().bool,movie:l().object};var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(i,e);var t,r,o,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=A(i);if(t){var n=A(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={hasError:!1},t}return r=[{key:"render",value:function(){return this.state.hasError?n.createElement("p",null,"Something went wrong."):this.props.children}}],o=[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}],r&&O(i.prototype,r),o&&O(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}(n.Component),k=r(1664),j=r.n(k);function N(){return n.createElement(j(),{href:"/"},n.createElement("span",{className:"logo"},n.createElement("b",null,"netflix"),"roulette"))}function C(){return n.createElement("footer",null,n.createElement(N,null))}function L(e){var t=e.onAddMovie,r=(0,n.useContext)(Z),o=r.clickMovie,a=r.setClickedMovie;return n.createElement("header",null,n.createElement(N,null),null!==o?n.createElement("button",{"aria-label":"Search",onClick:function(){return a(null)},className:"search-icon"}):n.createElement("button",{onClick:function(){return t()},className:"btn"},"+ Add Movie"))}var P=["all","documentary","comedy","horror","crime"],I={budget:0,genres:[],id:0,overview:"",poster_path:"",release_date:"",revenue:0,runtime:0,tagline:"",title:"",vote_average:0,vote_count:0},R=r(1163),T=r(5675),M=r.n(T);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function F(e){var t,r=e.movie,o=e.deleteMovie,a=e.editMovie,i=(0,R.useRouter)(),c=new Date(r.release_date).getFullYear(),l=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(!1))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=l[0],s=l[1],f=function(){return s(!u)},m=function(){var e="movieId=".concat(r.id);i.push("/search?".concat(e))};return n.createElement("div",{className:"movie-wrapper"},n.createElement("div",{className:"img-wrapper"},n.createElement("button",{onClick:function(){return f()}}),u&&n.createElement("div",{className:"movie-opts"},n.createElement("button",{className:"close",onClick:function(){return f()}},"x"),n.createElement("ul",null,n.createElement("li",null,n.createElement("button",{onClick:function(){f(),a()}},"Edit")),n.createElement("li",null,n.createElement("button",{onClick:function(){f(),o()}},"Delete")))),n.createElement(M(),{loader:function(e){return e.src},onClick:function(){return m()},src:r.poster_path,fill:!0,alt:r.title})),n.createElement("h5",null,r.title," ",n.createElement("span",null,c)),n.createElement("h6",null,r.genres.join(", ")))}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function U(e){var t=e.genres,r=e.selected,o=e.count,a=e.sortSelected,i=(0,R.useRouter)(),c=["Release Date","Rating","Popular"],l=G((0,n.useState)(t[0]),2),u=l[0],s=l[1],f=G((0,n.useState)(!1),2),m=f[0],h=f[1],p=G((0,n.useState)(c[0]),2),y=p[0],v=p[1],d=G((0,n.useState)(""),2),g=d[0],b=d[1],E=function(e){var t=i.asPath.split("?")[0];i.push("".concat(t).concat(e))},w=function(e){var t="all"!==e?e.toLocaleLowerCase():"";E("?sortBy=".concat(y)+(""!==t?"&genre=".concat(t):""))},S=function(e){var t="";switch(e){case"Release Date":t="release_date";break;case"Rating":t="vote_average";break;case"Popular":t="vote_count";break;default:t=e}var r="?sortBy=".concat(t);h(!1),E(r+(""!==u?"&genre=".concat(u):""))};return(0,n.useEffect)(function(){switch(s(r),v(a),a){case"release_date":b("Release Date");break;case"vote_average":b("Rating");break;case"vote_count":b("Popular");break;default:b(a)}},[r,a]),n.createElement("div",{className:"controls"},n.createElement("div",{className:"genre-selector"},t.map(function(e,t){return n.createElement("button",{"aria-label":"Close Genre Selector",onClick:function(){return w(e)},className:u===e?"selected":"",key:t},e)})),n.createElement("div",{className:"sort-selector"},n.createElement("span",null,"Sort By:")," ",n.createElement("button",{"aria-label":"Open Sort Menu",onClick:function(){return h(!m)}},g),m&&n.createElement("ul",{className:"sort-options"},c.map(function(e,t){return n.createElement("li",{key:t},n.createElement("button",{onClick:function(){return S(e)}},e))}))),n.createElement("p",{className:"result-count"},n.createElement("b",null,o)," movies found"))}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function V(e){var t,r=e.query,o=(0,R.useRouter)(),a=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(""))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=a[0],c=a[1],l=function(){o.push("/search".concat(""!==i?"/".concat(i):""))},u=function(e){"Enter"===e.key&&l()};return(0,n.useEffect)(function(){c(r)},[r]),n.createElement("div",{className:"search-box"},n.createElement("h3",null,"Find your movie"),n.createElement("div",{className:"search-input"},n.createElement("input",{value:i,onKeyDown:function(e){return u(e)},onChange:function(e){return c(e.target.value)},placeholder:"What do you want to search?"}),n.createElement("button",{"aria-label":"Search",className:"btn",onClick:function(){return l()}},"Search")))}function Y(e){var t=e.movie,r=new Date(t.release_date).getFullYear(),o=Math.floor(t.runtime/60),a=t.runtime%60,i="".concat(o,"h").concat(a>0?" ".concat(a,"m"):"");return n.createElement("div",{className:"top-selected-movie"},n.createElement("div",{className:"left"},n.createElement(M(),{src:t.poster_path,alt:"Selected Image",loader:function(e){return e.src},fill:!0})),n.createElement("div",{className:"right"},n.createElement("h3",null,t.title," ",n.createElement("span",null,t.vote_average)),n.createElement("p",{className:"genre"},t.genres.join(", ")),n.createElement("p",{className:"meta"},r," ",n.createElement("span",{className:"runtime"},i)),n.createElement("p",{className:"summary"},t.overview)))}F.defaultProps={movie:I},F.propTypes={movie:l().object.isRequired,deleteMovie:l().func.isRequired,editMovie:l().func.isRequired},U.defaultProps={count:0,genres:[],selected:"",sortSelected:""},U.propTypes={count:l().number.isRequired,genres:l().arrayOf(l().string).isRequired};var $=r(9332),W=r(9008),H=r.n(W);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(){z=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(l){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o,a,i=Object.create((t&&t.prototype instanceof m?t:m).prototype),c=new O(n||[]);return i._invoke=(o=c,a="suspendedStart",function(t,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw n;return A()}for(o.method=t,o.arg=n;;){var i=o.delegate;if(i){var c=function e(t,r){var n=t.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method))return f;r.method="throw",r.arg=TypeError("The iterator does not provide a 'throw' method")}return f}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,f)}(i,o);if(c){if(c===f)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var l=s(e,r,o);if("normal"===l.type){if(a=o.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(a="completed",o.method="throw",o.arg=l.arg)}}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var f={};function m(){}function h(){}function p(){}var y={};c(y,o,function(){return this});var v=Object.getPrototypeOf,d=v&&v(v(x([])));d&&d!==t&&r.call(d,o)&&(y=d);var g=p.prototype=m.prototype=Object.create(y);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(o,a){function i(){return new t(function(n,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==X(f)&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,a,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function J(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){r(u);return}c.done?t(l):Promise.resolve(l).then(n,o)}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var Z=n.createContext(null),ee=!0,et=function(){var e,t,r=(0,R.useRouter)(),i=(0,$.useSearchParams)(),c=K((0,n.useState)(!1),2),l=c[0],u=c[1],s=K((0,n.useState)(!1),2),f=s[0],m=s[1],h=K((0,n.useState)(!1),2),y=h[0],v=h[1],d=K((0,n.useState)(I),2),g=d[0],b=d[1],E=K((0,n.useState)(null),2),S=E[0],O=E[1],x=K((0,n.useState)("vote_count"),2),A=x[0],k=x[1],j=K((0,n.useState)(""),2),N=j[0],T=j[1],M=K((0,n.useState)(""),2),D=M[0],G=M[1],B=(0,p.U9)({sortBy:A,filter:N,search:D}).data,q=K((0,p.oC)(),1)[0],W=(0,n.useCallback)(function(e){b(e),m(!0),v(!0)},[]),X=(0,n.useCallback)(function(e){u(!0),b(e)},[]),Q=(e=z().mark(function e(){return z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(g.id);case 2:u(!1);case 3:case"end":return e.stop()}},e)}),t=function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){J(a,n,o,i,c,"next",e)}function c(e){J(a,n,o,i,c,"throw",e)}i(void 0)})},function(){return t.apply(this,arguments)}),ee=function(){u(!1),m(!1)};return(0,n.useEffect)(function(){var e,t,n,o=r.query.queryParam;G(void 0!==o?o[0]:"");var a=null!==(e=i.get("genre"))&&void 0!==e?e:"",c=null!==(t=i.get("sortBy"))&&void 0!==t?t:"",l=null!==(n=i.get("movieId"))&&void 0!==n?n:"";if(""!==a&&("All"===a?T(""):T(a)),""!==c&&k(c),""!==l){var u=null==B?void 0:B.find(function(e){return e.id===+l});void 0!==u&&O(u)}},["",i,B]),n.createElement(n.Fragment,null,n.createElement("div",{className:"main"},n.createElement(H(),null,n.createElement("title",null,"Tania React App"),n.createElement("meta",{name:"description",content:"Tania React App"})),n.createElement("h1",{className:"text-3xl font-bold underline"},"Tailwind test!"),n.createElement(Z.Provider,{value:{clickMovie:S,setClickedMovie:O}},l&&n.createElement(a,{onConfirm:Q,onClose:ee}),f&&n.createElement(w,{movie:g,isEdit:y,onClose:ee}),n.createElement("div",{className:null!=S?"selected-movie top-content":"top-content",style:{backgroundImage:null!=S?"":"url('".concat(o.src,"')")}},n.createElement(L,{onAddMovie:function(){m(!0),b(I),v(!1)}}),n.createElement(_,null,null!=S?n.createElement(Y,{movie:S}):n.createElement(V,{query:D})))),n.createElement("div",{className:"main-content"},n.createElement(U,{count:null==B?void 0:B.length,genres:P,selected:N,sortSelected:A}),n.createElement("div",{className:"movie-tiles"},null==B?void 0:B.map(function(e){return n.createElement(_,{key:e.id},n.createElement(F,{key:e.id,movie:e,editMovie:function(){return W(e)},deleteMovie:function(){return X(e)}}))}))),n.createElement(C,null)))}},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4410)}])}},function(e){e.O(0,[664,373,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-b697bc70494704fb.js.map