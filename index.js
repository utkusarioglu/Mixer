!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.Parent=function(t){return new u(t)};var u=function(){function t(t){this.extender_class=t||function(){}}return t.prototype.with=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.reduce((function(e,r){return t.produce_ClassExpression(r)(e)}),this.extender_class)},t.produce_ClassExpression=function(t){return function(e){var r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(e);return Object.getOwnPropertyNames(t.prototype).forEach((function(e){r.prototype.hasOwnProperty(e)||Object.defineProperty(r.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})),r}},t}()}]));
//# sourceMappingURL=index.js.map