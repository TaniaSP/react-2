(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{5235:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){var l=o(4007).normalizeLocalePath,u=o(6426).detectDomainLocale,a=t||l(e,n).detectedLocale,c=u(r,void 0,a);if(c){var f="http".concat(c.http?"":"s","://"),i=a===c.defaultLocale?"":"/".concat(a);return"".concat(f).concat(c.domain).concat("").concat(i).concat(e)}return!1},("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,o){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(o=r.next()).done)&&(l.push(o.value),!t||l.length!==t);u=!0);}catch(c){a=!0,n=c}finally{try{u||null==r.return||r.return()}finally{if(a)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(2648).Z,a=o(7273).Z,c=u(o(7294)),f=o(2199),i=o(7389),s=o(1630),d=o(9541),p=o(6163),y=o(7215),b=o(5235),v=o(729),m=new Set;function h(e,t,o,n){if(f.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var r=t+"%"+o+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(r))return;m.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(function(e){})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}var S=c.default.forwardRef(function(e,t){var o,r,u=e.href,i=e.as,m=e.children,S=e.prefetch,_=e.passHref,M=e.replace,j=e.shallow,C=e.scroll,O=e.locale,P=e.onClick,E=e.onMouseEnter,L=e.onTouchStart,k=e.legacyBehavior,w=void 0!==k&&k,A=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,w&&("string"==typeof o||"number"==typeof o)&&(o=c.default.createElement("a",null,o));var I=!1!==S,x=c.default.useContext(d.RouterContext),T=c.default.useContext(p.AppRouterContext),R=null!=x?x:T,U=!x,z=c.default.useMemo(function(){if(!x){var e=g(u);return{href:e,as:i?g(i):e}}var t=n(f.resolveHref(x,u,!0),2),o=t[0],r=t[1];return{href:o,as:i?f.resolveHref(x,i):r||o}},[x,u,i]),D=z.href,N=z.as,H=c.default.useRef(D),K=c.default.useRef(N);w&&(r=c.default.Children.only(o));var B=w?r&&"object"===l(r)&&r.ref:t,Z=n(y.useIntersection({rootMargin:"200px"}),3),$=Z[0],q=Z[1],F=Z[2],G=c.default.useCallback(function(e){(K.current!==N||H.current!==D)&&(F(),K.current=N,H.current=D),$(e),B&&("function"==typeof B?B(e):"object"===l(B)&&(B.current=e))},[N,B,D,F,$]);c.default.useEffect(function(){R&&q&&I&&h(R,D,N,{locale:O})},[N,D,q,O,I,null==x?void 0:x.locale,R]);var J={ref:G,onClick:function(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,o,n,r,l,u,a,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&f.isLocalURL(o)){e.preventDefault();var d,p,y=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:l,locale:a,scroll:u}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?c.default.startTransition(y):y()}}(e,R,D,N,M,j,C,O,U,I)},onMouseEnter:function(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(I||!U)&&h(R,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){w||"function"!=typeof L||L(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(I||!U)&&h(R,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if(!w||_||"a"===r.type&&!("href"in r.props)){var Q=void 0!==O?O:null==x?void 0:x.locale,V=(null==x?void 0:x.isLocaleDomain)&&b.getDomainLocale(N,Q,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);J.href=V||v.addBasePath(s.addLocale(N,Q,null==x?void 0:x.defaultLocale))}return w?c.default.cloneElement(r,J):c.default.createElement("a",Object.assign({},A,J),o)});t.default=S,("function"==typeof t.default||"object"===l(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4007:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0,t.normalizeLocalePath=function(e,t){return o(5930).normalizeLocalePath(e,t)},("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(o=r.next()).done)&&(l.push(o.value),!t||l.length!==t);u=!0);}catch(c){a=!0,n=c}finally{try{u||null==r.return||r.return()}finally{if(a)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,n=e.disabled||!c,l=r(u.useState(!1),2),s=l[0],d=l[1],p=r(u.useState(null),2),y=p[0],b=p[1];return u.useEffect(function(){if(c){if(!n&&!s&&y&&y.tagName){var e,r,l,u;return r=(e=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=f.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},i.push(o),f.set(o,t),t}({root:null==t?void 0:t.current,rootMargin:o})).id,l=e.observer,(u=e.elements).set(y,function(e){return e&&d(e)}),l.observe(y),function(){if(u.delete(y),l.unobserve(y),0===u.size){l.disconnect(),f.delete(r);var e=i.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var p=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(p)}}},[y,n,o,t,s]),[b,s,u.useCallback(function(){d(!1)},[])]};var u=o(7294),a=o(8065),c="function"==typeof IntersectionObserver,f=new Map,i=[];("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(7913)}}]);
//# sourceMappingURL=664-f06e4f26518fe99d.js.map