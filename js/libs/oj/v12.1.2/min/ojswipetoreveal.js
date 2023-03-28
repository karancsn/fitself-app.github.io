/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","jquery","ojs/ojcontext","ojs/ojoffcanvas","touchr"],function(e,t,o,a,n,s){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const r={};t._registerLegacyNamespaceProp("SwipeToRevealUtils",r),r.setupSwipeActions=function(e,t){var s,r,i,l,c,p,u,d,f,h,v;(s=o(e)).hasClass("oj-swipetoreveal")||(s.addClass("oj-swipetoreveal"),r=s.hasClass("oj-offcanvas-start")?"end":"start",(i={}).selector=s,i._animateWrapperSelector="oj-offcanvas-inner-wrapper",n.setupPanToReveal(i),l=n._getOuterWrapper(s),u=!1,l.on("click.swipetoreveal",function(e){u&&(e.stopImmediatePropagation(),u=!1)}),l._touchStartListener=function(e){u=!1,s.hasClass("oj-offcanvas-open")&&s[0].offsetWidth>0&&!s[0].contains(e.target)&&e.preventDefault()},l[0].addEventListener("touchstart",l._touchStartListener,{passive:!1}),s.on("ojpanstart",function(e,o){if(!(t&&t.callback&&t.callback()))return s.hasClass("oj-offcanvas-open")?(e.preventDefault(),void n.close(i).then(()=>{s.removeClass("oj-offcanvas-open")})):void(o.direction!==r?e.preventDefault():(a.getContext(l.get(0)).getBusyContext().whenReady().then(function(){s.children().addClass("oj-swipetoreveal-action").css("min-width",""),h=s.children(".oj-swipetoreveal-default").get(0),null==p&&(null!=t&&(c=t.threshold),null!=c?(c=parseInt(c,10),/%$/.test(t.threshold)&&(c=c/100*l.outerWidth())):c=.55*l.outerWidth(),p=Math.min(.3*l.outerWidth(),s.outerWidth()))}),f=(new Date).getTime()));e.preventDefault()}).on("ojpanmove",function(e,t){u||s.children().css("min-width",0),u=!0,null!=h&&(t.distance>c?s.children().each(function(){this!==h&&o(this).addClass("oj-swipetoreveal-hide-when-full")}):s.children().removeClass("oj-swipetoreveal-hide-when-full"))}).on("ojpanend",function(e,t){v=t.distance,null!=h&&v>c&&(d=o.Event("ojdefaultaction"),s.trigger(d,i),e.preventDefault()),v<p&&((new Date).getTime()-f>200||v<10)&&e.preventDefault()}))},r.tearDownSwipeActions=function(e){var t,a,s;(t=o(e)).removeClass("oj-swipetoreveal"),(a={}).selector=t,null!=(s=n._getOuterWrapper(t))&&s.off(".swipetoreveal"),n.tearDownPanToReveal(a),null!=s&&s.length>0&&(s[0].removeEventListener("touchstart",s._touchStartListener,{passive:!1}),delete s._touchStartListener)};const i=r.setupSwipeActions,l=r.tearDownSwipeActions;e.setupSwipeActions=i,e.tearDownSwipeActions=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojswipetoreveal.js.map