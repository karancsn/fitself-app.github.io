(self.webpackChunkfitself=self.webpackChunkfitself||[]).push([[277],{2216:(e,t,n)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.announce=void 0;let n=["off","polite","assertive"];t.announce=function(e,t){void 0!==t&&-1!==n.indexOf(t)||(t="polite");let o={bubbles:!0,detail:{message:e,manner:t}};document.getElementById("globalBody").dispatchEvent(new CustomEvent("announce",o))}}.apply(t,[n,t]),void 0===o||(e.exports=o)},8277:function(e,t,n){var o,a,i=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};o=[n,t,n(2216)],void 0===(a=function(e,t,n){"use strict";return n=u(n),class{constructor(){}connected(){n.announce("About page loaded.")}disconnected(){}transitionCompleted(){this.adjustContentPadding()}adjustContentPadding(){let e=document.getElementsByClassName("oj-applayout-fixed-top")[0],t=document.getElementsByClassName("oj-web-applayout-content")[0],n=document.getElementsByClassName("oj-applayout-fixed-bottom")[0];e&&(t.style.paddingTop=`${e.offsetHeight}px`),n&&(t.style.paddingBottom=`${n.offsetHeight}px`)}}}.apply(t,o))||(e.exports=a)}}]);
//# sourceMappingURL=277.0785c3dc258145b55e7b.js.map