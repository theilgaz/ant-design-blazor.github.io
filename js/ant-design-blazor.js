!function r(l,c,d){function s(t,e){if(!c[t]){if(!l[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=c[t]={exports:{}};l[t][0].call(i.exports,function(e){return s(l[t][1][e]||e)},i,i.exports,r,l,c,d)}return c[t].exports}for(var u="function"==typeof require&&require,e=0;e<d.length;e++)s(d[e]);return s}({1:[function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return e?"string"==typeof e&&(e=document.querySelector(e)):e=document.body,e}function o(e){var t={},n=r(e);return t.offsetTop=n.offsetTop||0,t.offsetLeft=n.offsetLeft||0,t.offsetWidth=n.offsetWidth||0,t.offsetHeight=n.offsetHeight||0,t.scrollHeight=n.scrollHeight||0,t.scrollWidth=n.scrollWidth||0,t.scrollLeft=n.scrollLeft||0,t.scrollTop=n.scrollTop||0,t.clientTop=n.clientTop||0,t.clientLeft=n.clientLeft||0,t.clientHeight=n.clientHeight||0,t.clientWidth=n.clientWidth||0,t.absoluteTop=c(n),t.absoluteLeft=d(n),t}function l(e,t,i){function n(e){var t={};for(var n in e)t[n]=e[n];var o=JSON.stringify(t,function(e,t){return t instanceof Node?"Node":t instanceof Window?"Window":t}," ");i.invokeMethodAsync("Invoke",o)}"window"==e?"resize"==t?window.addEventListener(t,function(o,i,r){var l,c=this,d=arguments;return function(){var e=c,t=d,n=r&&!l;clearTimeout(l),l=setTimeout(function(){l=null,r||o.apply(c,t)},i),n&&o.apply(e,t)}}(function(){return n({innerWidth:window.innerWidth,innerHeight:window.innerHeight})},200,!1)):window.addEventListener(t,n):r(e).addEventListener(t,n)}function c(e){var t=e.offsetTop;return null!=e.offsetParent&&(t+=c(e.offsetParent)),t}function d(e){var t=e.offsetLeft;return null!=e.offsetParent&&(t+=d(e.offsetParent)),t}function s(){return document.activeElement.getAttribute("id")||""}function u(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if("string"==typeof t)e.style[t]=n;else for(var o in t)t.hasOwnProperty(o)&&(e.style[o]=t[o])}function a(e,t){var n,o=r(e);"string"==typeof t?o.classList.add(t):(n=o.classList).add.apply(n,i(t))}function f(e,t){var n,o=r(e);"string"==typeof t?o.classList.remove(t):(n=o.classList).remove.apply(n,i(t))}function m(e,t){var o=1<arguments.length&&void 0!==t?t:null,i=0,n=document.querySelectorAll(e);"function"==typeof o?n.forEach(function(e,t,n){o(e,t,n)||(i+=1)}):i=n.length,0===i&&(u(document.body,{position:null,width:null,overflow:null}),f(document.body,"ant-scrolling-effect"))}Object.defineProperty(n,"__esModule",{value:!0}),n.createIconFromfontCN=n.enableDrawerBodyScroll=n.enableModalBodyScroll=n.disableBodyScroll=n.removeCls=n.addCls=n.css=n.getWindow=n.focusDialog=n.getActiveElement=n.delElementFrom=n.addElementTo=n.delElementFromBody=n.addElementToBody=n.getAbsoluteLeft=n.getAbsoluteTop=n.addDomEventListenerToFirstChild=n.addClsToFirstChild=n.getFirstChildDomInfo=n.BackTop=n.log=n.blur=n.focus=n.copy=n.matchMedia=n.addDomEventListener=n.getBoundingClientRect=n.getDomInfo=n.getDom=void 0,n.getDom=r,n.getDomInfo=o,n.getBoundingClientRect=function(e){return r(e).getBoundingClientRect()},n.addDomEventListener=l,n.matchMedia=function(e){return window.matchMedia(e).matches},n.copy=function(e){navigator.clipboard?navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)}):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}(e)},n.focus=function(e){r(e).focus()},n.blur=function(e){r(e).blur()},n.log=function(e){console.log(e)},n.BackTop=function(e){document.getElementById("BodyContainer").scrollTo(0,0)},n.getFirstChildDomInfo=function(e){return o(r(e).firstElementChild)},n.addClsToFirstChild=function(e,t){var n=r(e);n.firstElementChild&&n.firstElementChild.classList.add(t)},n.addDomEventListenerToFirstChild=function(e,t,n){var o=r(e);o.firstElementChild&&l(o.firstElementChild,t,n)},n.getAbsoluteTop=c,n.getAbsoluteLeft=d,n.addElementToBody=function(e){document.body.appendChild(e)},n.delElementFromBody=function(e){document.body.removeChild(e)},n.addElementTo=function(e,t){var n=r(t);n&&e&&n.appendChild(e)},n.delElementFrom=function(e,t){var n=r(t);n&&e&&n.removeChild(e)},n.getActiveElement=s,n.focusDialog=function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,o=document.querySelector(t);o&&!o.hasAttribute("disabled")&&setTimeout(function(){o.focus(),"#"+s()!==t&&n<10&&e(t,n+1)},10)},n.getWindow=function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight}},n.css=u,n.addCls=a,n.removeCls=f,n.disableBodyScroll=function(){u(document.body,{position:"relative",width:"calc(100% - 17px)",overflow:"hidden"}),a(document.body,"ant-scrolling-effect")},n.enableModalBodyScroll=function(){m(".ant-modal-mask:not(.ant-modal-mask-hidden)")},n.enableDrawerBodyScroll=function(){m(".ant-drawer-open",function(e,t,n){return"absolute"===e.style.position})},n.createIconFromfontCN=function(e){var t;document.querySelector('[data-namespace="'+e+'"]')||((t=document.createElement("script")).setAttribute("src",e),t.setAttribute("data-namespace",e),document.body.appendChild(t))}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./core/JsInterop/interop");window.AntDesign={interop:o}},{"./core/JsInterop/interop":1}]},{},[2]);
//# sourceMappingURL=ant-design-blazor.js.map
