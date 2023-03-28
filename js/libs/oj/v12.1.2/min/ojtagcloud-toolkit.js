/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(e,t){"use strict";class i extends t.KeyboardHandler{isSelectionEvent(e){return this.isNavigationEvent(e)&&!e.ctrlKey}isMultiSelectEvent(e){return e.keyCode===t.KeyboardEvent.SPACE&&e.ctrlKey}static getNextNavigable(e,i,s){var n=i.keyCode===t.KeyboardEvent.RIGHT_ARROW||i.keyCode===t.KeyboardEvent.DOWN_ARROW,a=s.indexOf(e)+(n?1:-1);return a<s.length&&a>=0?s[a]:null}}class s{constructor(e,i,s){this._view=e,this._displayable=i,this._data=s,this._isSelected=!1,this._bSelectable=!1,s.url?(i.setAriaRole("link"),this._linkCallback=t.ToolkitUtils.getLinkCallback("_blank",s.url)):i.setAriaRole("img"),this._updateAriaLabel()}getId(){return this._data.id}getLabel(){return this._data.label}getValue(){return this._data.value}getShortDesc(){return this._data.shortDesc}getDatatip(){var e=this._view.getOptions().tooltip,i=e?e.renderer:null;return i?this._view.getCtx().getTooltipManager().getCustomTooltip(i,this.getDataContext()):t.Displayable.resolveShortDesc(this.getShortDesc(),()=>s.getShortDescContext(this))}getDataContext(){return{id:this.getId(),label:this.getLabel(),color:this.getDatatipColor(),value:this.getValue()}}static getShortDescContext(e){return{id:e.getId(),label:e.getLabel(),value:e.getValue()}}getLinkCallback(){return this._linkCallback}getDatatipColor(){return this._displayable.getItemStyle().getStyle(t.CSSStyle.COLOR)}setSelectable(e){this._bSelectable=e}isSelectable(){return this._bSelectable}isSelected(){return this._isSelected}setSelected(e){this._isSelected=e,this._displayable.setSelected(e),this._updateAriaLabel()}showHoverEffect(){this._displayable.showHoverEffect()}hideHoverEffect(){this._displayable.hideHoverEffect()}getNextNavigable(e){var s=this._view.EventManager.getKeyboardHandler();return e.type===t.MouseEvent.CLICK||s.isMultiSelectEvent(e)?this:s.isNavigationEvent(e)?i.getNextNavigable(this,e,this._view.getObjects()):null}getKeyboardBoundingBox(e){return this._displayable.getDimensions(e)}getTargetElem(){return this._displayable.getElem()}showKeyboardFocusEffect(){this._isShowingKeyboardFocusEffect=!0,this.showHoverEffect()}hideKeyboardFocusEffect(){this._isShowingKeyboardFocusEffect&&(this._isShowingKeyboardFocusEffect=!1,this.hideHoverEffect())}isShowingKeyboardFocusEffect(){return this._isShowingKeyboardFocusEffect}getDisplayables(){return[this._displayable]}getAriaLabel(){var e=[];return this.isSelectable()&&e.push(this._view.getOptions().translations[this.isSelected()?"stateSelected":"stateUnselected"]),t.Displayable.generateAriaLabel(this.getShortDesc(),e,()=>s.getShortDescContext(this))}getCategories(){return this._data.categories}_updateAriaLabel(){t.Agent.deferAriaCreation()||this._displayable.setAriaProperty("label",this.getAriaLabel())}isDragAvailable(e){return this._view.isDragSupported(e)}getDragTransferable(){return this._view.getDragRowKeys(this)}getDragFeedback(){return this._view.getDragFeedback()}}class n extends t.Automation{GetSubIdForDomElement(e){var t=this._comp.EventManager.GetLogicalObject(e);return t&&t instanceof s?"item["+this._comp.getItems().indexOf(t)+"]":null}getDomElementForSubId(e){if(e===t.Automation.TOOLTIP_SUBID)return this.GetTooltipElement(this._comp);var i=e.indexOf("[");if(i>0&&"item"===e.substring(0,i)){var s=parseInt(e.substring(i+1,e.length-1)),n=this._comp.getItems()[s];return n?n.getDisplayables()[0].getElem():null}return null}getItem(e){var t=this._comp.getItems()[e];return t?{color:t.getDatatipColor(),currentColor:t.getDisplayables()[0].getCSSStyle().getStyle("color"),backgroundColor:t.getDisplayables()[0].getCSSStyle().getStyle("background-color"),tooltip:t.getShortDesc(),label:t.getLabel(),value:t.getValue(),selected:t.isSelected()}:null}getItemCount(){return this._comp.getObjects().length}}class a extends t.BaseComponentDefaults{constructor(e){super({alta:{animationOnDisplay:"none",animationOnDataChange:"none",emptyText:null,hiddenCategories:[],hideAndShowBehavior:"none",highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",layout:"rectangular",selectionMode:"none",_statusMessageStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA+"color: #333333;"),styleDefaults:{animationDuration:500,hoverBehaviorDelay:200,_style:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA+"color: #333333;")},touchResponse:"auto"}},e)}}class l extends t.EventManager{constructor(e,t,i,s){super(t,i,s,e),this._view=e}OnClickInternal(e){var t=this.GetLogicalObject(e.target);this._handleLinkCallback(t)}HandleTouchClickInternal(e){var t=this.GetLogicalObject(e.target);this._handleLinkCallback(t)}_handleLinkCallback(e){if(e instanceof s){var t=e.getLinkCallback();t&&t.call()}}ProcessKeyboardEvent(e){var i=!0,s=e.keyCode,n=this.getFocus();return s===t.KeyboardEvent.ENTER?this._handleLinkCallback(n):i=super.ProcessKeyboardEvent(e),i}ProcessRolloverEvent(e,i,s){var n=this._view.getOptions();if("dim"===n.hoverBehavior){var a=i.getCategories?i.getCategories():[];n.highlightedCategories=s?a.slice():null;var l=t.EventFactory.newCategoryHighlightEvent(n.highlightedCategories,s),r=t.CSSStyle.getTimeMilliseconds(n.styleDefaults.hoverBehaviorDelay);this.RolloverHandler.processEvent(l,this._view.getObjects(),r,"any"===n.highlightMatch)}}GetTouchResponse(){return this._view.getOptions().touchResponse}}class r extends t.BackgroundOutputText{constructor(e,t,i,s,n,a,l,r,o){super(t,i,s,n,a,o),this.HOVER_OPACITY=.3,this.HOVER_SELECTED_OPACITY=.6,this.ANIM_DELETE_PRIORITY=0,this.ANIM_UPDATE_PRIORITY=1,this.ANIM_INSERT_PRIORITY=2,this._tagCloud=e,this.alignAuto(),this.TextInstance.setStyle(l),this.TextInstance.setClassName(r),a&&this._createFeedbackStyles(a)}setSelected(e){this._isSelected!==e&&(this._isSelected=e,e?this._isShowingHoverEffect?this.setCSSStyle(this._hoverSelectedStyle):this.setCSSStyle(this._selectedStyle):this.setCSSStyle(this._normalStyle))}showHoverEffect(){this._isShowingHoverEffect||(this._isShowingHoverEffect=!0,this._isSelected?this.setCSSStyle(this._hoverSelectedStyle):this.setCSSStyle(this._hoverStyle))}hideHoverEffect(){this._isSelected?this.setCSSStyle(this._selectedStyle):this.setCSSStyle(this._normalStyle),this._isShowingHoverEffect=!1}getAnimDur(e){return e.getOptions().styleDefaults.animationDuration/1e3}animateUpdate(e,i){var s=new t.CustomAnimation(this.getCtx(),this,this.getAnimDur(this._tagCloud)),n=this.getCSSStyle(),a=i.getCSSStyle(),l=!1,o=a.getStyle(t.CSSStyle.COLOR),h=n.getStyle(t.CSSStyle.COLOR);if(o!==h){var g=this;this.setCSSStyle(n.setStyle(t.CSSStyle.COLOR,o)),s.getAnimator().addProp(t.Animator.TYPE_COLOR,this,()=>g.getCSSStyle().getStyle(t.CSSStyle.COLOR),e=>{g.setCSSStyle(g.getCSSStyle().setStyle(t.CSSStyle.COLOR,e))},h)}var S=parseFloat(a.getStyle(t.CSSStyle.FONT_SIZE)),c=parseFloat(n.getStyle(t.CSSStyle.FONT_SIZE));if(S!==c){l=!0;var d=this;this.setFontSize(S),s.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,()=>parseFloat(d.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE)),this.setFontSize,c)}var y=i.getX(),_=this.getX(),u=i.getHorizAlignment(),C=this.getHorizAlignment();(_!==y||l&&C!==u)&&(C!==u&&(y=r._adjustX(i,y,u)),this.setX(y),s.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,this.getX,this.setX,_));var v=i.getY(),p=this.getY();p!==v&&(this.setY(v),s.getAnimator().addProp(t.Animator.TYPE_NUMBER,this,this.getY,this.setY,p)),i.setAlpha(0),e.add(s,this.ANIM_UPDATE_PRIORITY)}animateDelete(e){e.add(new t.AnimFadeOut(this.getCtx(),this,this.getAnimDur(this._tagCloud)),this.ANIM_DELETE_PRIORITY)}animateInsert(e){this.setAlpha(0),e.add(new t.AnimFadeIn(this.getCtx(),this,this.getAnimDur(this._tagCloud)),this.ANIM_INSERT_PRIORITY)}setFontSize(e){super.setFontSize(e),this._updateFeedbackFontStyles(String(e))}_createFeedbackStyles(e){this._normalStyle=e.clone();var i=this._normalStyle.getStyle(t.CSSStyle.COLOR);this._normalStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,null),this._hoverStyle=this._normalStyle.clone();var s=r._lightenColor(i,this.HOVER_OPACITY);this._hoverStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,s),this._hoverStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(s)),this._selectedStyle=this._normalStyle.clone(),this._selectedStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,i),this._selectedStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(i)),this._hoverSelectedStyle=this._normalStyle.clone();var n=r._lightenColor(i,this.HOVER_SELECTED_OPACITY);this._hoverSelectedStyle.setStyle(t.CSSStyle.BACKGROUND_COLOR,n),this._hoverSelectedStyle.setStyle(t.CSSStyle.COLOR,t.ColorUtils.getContrastingTextColor(n))}_updateFeedbackFontStyles(e){this._normalStyle.setStyle(t.CSSStyle.FONT_SIZE,e),this._hoverStyle.setStyle(t.CSSStyle.FONT_SIZE,e),this._selectedStyle.setStyle(t.CSSStyle.FONT_SIZE,e),this._hoverSelectedStyle.setStyle(t.CSSStyle.FONT_SIZE,e)}getItemStyle(){return this._normalStyle}static _adjustX(e,i,s){var n=e.getTextDimensions();return s===t.OutputText.H_ALIGN_LEFT?i+n.w:s===t.OutputText.H_ALIGN_RIGHT?i-n.w:i}static _lightenColor(e,i){var s=255*(1-i)+i*t.ColorUtils.getRed(e),n=255*(1-i)+i*t.ColorUtils.getGreen(e),a=255*(1-i)+i*t.ColorUtils.getBlue(e);return t.ColorUtils.makeRGB(Math.floor(s),Math.floor(n),Math.floor(a))}}const o={getFontSizeFunc:(e,t,i)=>s=>e===t?12:12+Math.ceil((i-1)*(s-e)/(t-e)*12),cloudLayout:(e,i)=>{var s=[],n=10/180,a=10/180;e.w>e.h?n*=e.w/e.h:a*=e.h/e.w;for(var l=2*Math.PI/180,r=null,o=0,h=[],g=[],S=0;S<i.length;S++){var c=!1,d=0,y=4,_=i[S],u=_.getDimensions();o=Math.max(o,parseFloat(_.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE)));for(var C=-1;!c;){var v=d%180;void 0===h[v]&&(h[v]=Math.cos(d*l)),void 0===g[v]&&(g[v]=Math.sin(d*l));var p=n*d*h[v],m=a*d*g[v],O=new t.Rectangle(p,m,u.w,u.h);if(c=!0,-1!=C&&s[C].intersects(O)&&(c=!1),c)for(var E=0;E<S;E++)if(s[E].intersects(O)){C=E,c=!1;break}c&&(r=r?r.getUnion(O):O,C=-1,s[S]=O,_.setX(p),_.setY(-u.y+m)),3600===d?y=3:5400===d?y=2:10800===d&&(y=1),d+=y}}if(r)for(var b=Math.max(r.w/e.w,r.h/e.h),f=r.x+r.w/2,A=r.y+r.h/2,w=0;w<i.length;w++){var T=i[w];T.setX(e.x+T.getX()/b+(e.w/2-f/b)),T.setY(e.y+T.getY()/b+(e.h/2-A/b));var D=parseFloat(T.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE));T.setFontSize(D/b)}},rectangleLayout:(e,i,s)=>{for(var n=[],a=0,l=0,r=0,h=0;h<i.length;h++){var g=i[h],S=g.getDimensions();a=Math.max(a,S.w),l=Math.max(l,S.h),r=Math.max(r,parseFloat(g.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE))),n.push(new t.Dimension(S.w,S.h))}for(var c,d,y=0,_=(e.w-10)/a;_-y>.001;){c=(y+_)/2,(d=o._calculateLineBreaks(n,(e.w-10)/c)).length*(c*l+2)-2>e.h-10?_=c:y=c}c=y,(d=o._calculateLineBreaks(n,(e.w-10)/c)).push(i.length);for(var u=0;u<d.length-1;u++){var C=d[u],v=d[u+1],p=0,m=0,O=!0;if(v-C>1){for(var E=0,b=C;b<v;b++)E+=n[b].w*c,m=Math.max(m,n[b].h*c);if(p=(e.w-10-E)/(v-C-1),u==d.length-2){var f=.5*m;f<p&&E+(v-C)*f<.9*(e.w-10)&&(p=f,O=!1)}}for(var A=5+(u+1)*(l*c+2)-2,w=s?e.w-5:5,T=C;T<v;T++){var D=i[T],I=parseFloat(D.getCSSStyle().getStyle(t.CSSStyle.FONT_SIZE));D.setFontSize(I*c),D.setY(e.y+A),O&&T===v-1&&T!==C?s?(D.alignLeft(),D.setX(e.x+5)):(D.alignRight(),D.setX(e.x+e.w-5)):(D.setX(e.x+w),s?(D.alignRight(),w-=n[T].w*c+p):(D.alignLeft(),w+=n[T].w*c+p))}}},_calculateLineBreaks:(e,t)=>{var i=[0],s=e[0].w+2;if(e.length>1)for(var n=1;n<e.length;n++)s+e[n].w>t&&(i.push(n),s=0),s+=e[n].w+2;return i}},h={render:(e,t,i)=>{h._renderBackground(e,t,i),h._renderLegend(e,t,i),h._adjustAvailSpace(i);var s=e.getOptions();if(s.items&&s.items.length>0){var n=h._renderItems(e,t,i);n.length>0?(e.registerItems(n),e.EventManager.setFocusObj(e.getObjects()[0])):h._renderEmptyText(e,t,i)}else h._renderEmptyText(e,t,i)},_renderEmptyText:(e,i,s)=>{var n=e.getOptions(),a=n.emptyText;a||(a=n.translations.labelNoData),e.renderEmptyText(i,a,new t.Rectangle(s.x,s.y,s.w,s.h),e.EventManager,n._statusMessageStyle)},_renderBackground:(e,i,s)=>{var n=new t.Rect(e.getCtx(),s.x,s.y,s.w,s.h);n.setInvisibleFill(),i.addChild(n)},_renderItems:(e,i,n)=>{for(var a=e.getOptions(),l=[],h=a.items,g=Number.MAX_VALUE,S=-Number.MAX_VALUE,c=0;c<h.length;c++)g=Math.min(g,h[c].value),S=Math.max(S,h[c].value);var d=o.getFontSizeFunc(g,S,3),y=t.ArrayUtils.createBooleanMap(a.hiddenCategories),_=t.CSSStyle.getTextMeasurementProperties(),u=a.styleDefaults,C=u.svgStyle||u.style;!C||C instanceof Object||(C=t.CSSStyle.cssStringToObject(C));for(var v=0;v<h.length;v++){var p=h[v];if(p.categories||(p.categories=[p.label]),!y||!t.ArrayUtils.hasAnyMapItem(y,p.categories)){var m=u._style.clone(),O=p.svgStyle||p.style;!O||O instanceof Object||(O=t.CSSStyle.cssStringToObject(O));var E=C&&C.color?C.color:null,b=p.color?p.color:E,f=O&&O.color?O.color:b;if(O=t.JsonUtils.merge(O,C)){for(var A=0;A<_.length;A++){var w=t.CSSStyle.cssStringToObjectProperty(_[A]);O[w]&&(m.setStyle(_[A],O[w]),delete O[w])}delete O.color}f&&m.setStyle(t.CSSStyle.COLOR,f),m.setStyle(t.CSSStyle.FONT_SIZE,d(p.value).toString());var T=p.svgClassName||p.className,D=new r(e,e.getCtx(),p.label,0,0,m,O,T,p.id),I=new s(e,D,p);e.EventManager.associate(D,I),e.registerObject(I,v),"none"!==a.selectionMode&&I.setSelectable(!0),(I.isSelectable()||p.url)&&D.setCursor(t.SelectionEffectUtils.getSelectingCursor()),l.push(D),i.addChild(D)}}return l.length>0&&("cloud"===a.layout?o.cloudLayout(n,l):o.rectangleLayout(n,l,t.Agent.isRightToLeft(e.getCtx()))),l},_renderLegend:(e,i,s)=>{var n=e.getOptions(),a=n.legend;if(a&&a.sections){var l=t.JsonUtils.clone(a);l.orientation="horizontal",l.halign="center",l.hoverBehavior=n.hoverBehavior,l.hideAndShowBehavior=n.hideAndShowBehavior,l.hiddenCategories=n.hiddenCategories;var r=new t.Legend(e.getCtx(),e.processEvent,e);i.addChild(r);var o=r.getPreferredSize(l,s.w,s.h/3);r.render(l,o.w,o.h),t.LayoutUtils.position(s,"bottom",r,o.w,o.h,0),e.legend&&(e.legend.destroy(),i.removeChild(e.legend)),e.legend=r}},_adjustAvailSpace:e=>{e.x=Math.round(e.x),e.y=Math.round(e.y),e.w=Math.round(e.w),e.h=Math.round(e.h)}};class g extends t.BaseComponent{constructor(e,s,n){super(e,s,n),this.getCtx().getStage().getElem().setAttributeNS(null,"text-rendering","geometricPrecision"),this.EventManager=new l(this,e,this.processEvent,this),this.EventManager.addListeners(this),t.Agent.isTouchDevice()||this.EventManager.setKeyboardHandler(new i(this.EventManager)),this.Defaults=new a(e),this._items=[],this._peers=[],this.legend=null}render(e,i,s){isNaN(i)||isNaN(s)||(this.Width=i,this.Height=s),this.__cleanUp(),this.SetOptions(e),this.StopAnimation(),this._oldContainer=this._container,this._oldItems=this._items,this._items=[],this._itemCollection=[],this._container=new t.Container(this.getCtx()),this.addChild(this._container),h.render(this,this._container,new t.Rectangle(0,0,this.Width,this.Height)),this.SelectionHandler&&this.SelectionHandler.processInitialSelections(this.Options.selection,this.getObjects());var n=this.Options.animationDuration,a=new t.Rectangle(0,0,this.Width,this.Height);if(this._oldContainer){if("none"!==this.Options.animationOnDataChange&&e){this._deleteContainer=new t.Container(this.getCtx()),this.addChild(this._deleteContainer);var l=new t.DataAnimationHandler(this.getCtx(),this._deleteContainer);l.constructAnimation(this._oldItems,this._items),this.Animation=l.getAnimation()}}else"none"!==this.Options.animationOnDisplay&&(this.Animation=t.BlackBoxAnimationHandler.getInAnimation(this.getCtx(),t.BlackBoxAnimationHandler.ALPHA_FADE,this._container,a,n));this.Animation?(this.EventManager.hideTooltip(),this.EventManager.removeListeners(this),this.Animation.setOnEnd(this.OnRenderEnd,this),this.Animation.play()):this.OnRenderEnd(),this.UpdateAriaAttributes()}registerItems(e){this._items=e}getAutomation(){return this.Automation||(this.Automation=new n(this)),this.Automation}registerObject(e,t){this._peers.push(e),this._itemCollection[t]=e}getObjects(){return this._peers}getItems(){return this._itemCollection}highlight(e){this.Options.highlightedCategories=t.JsonUtils.clone(e),t.CategoryRolloverHandler.highlight(e,this.getObjects(),"any"===this.Options.highlightMatch),this.legend&&this.legend.highlight(e)}select(e){this.Options.selection=t.JsonUtils.clone(e),this.SelectionHandler&&this.SelectionHandler.processInitialSelections(this.Options.selection,this.getObjects())}SetOptions(e){e?this.Options=this.Defaults.calcOptions(e):this.Options||(this.Options=this.GetDefaults());var i=this.Options.selectionMode;this.SelectionHandler="single"===i?new t.SelectionHandler(this.getCtx(),t.SelectionHandler.TYPE_SINGLE):"multiple"===i?new t.SelectionHandler(this.getCtx(),t.SelectionHandler.TYPE_MULTIPLE):null,this.EventManager.setSelectionHandler(this.SelectionHandler),t.Agent.isEnvironmentTest()&&(this.Options.animationOnDisplay="none",this.Options.animationOnDataChange="none")}OnRenderEnd(){this._oldContainer&&(this.removeChild(this._oldContainer),this._oldContainer.destroy(),this._oldContainer=null),this._deleteContainer&&(this.removeChild(this._deleteContainer),this._deleteContainer.destroy(),this._deleteContainer=null),this.Animation&&this.EventManager.addListeners(this),this.Options.highlightedCategories&&this.Options.highlightedCategories.length>0&&this.highlight(this.Options.highlightedCategories),this.AnimationStopped||this.RenderComplete(),this.Animation=null,this.AnimationStopped=!1}__cleanUp(){this.EventManager.hideTooltip(),this._peers.length=0}processEvent(e,t){var i=e.type;if("categoryHide"===i||"categoryShow"===i){var s=e.category,n=this.Options.hiddenCategories.indexOf(s);"categoryHide"===i&&n<0&&this.Options.hiddenCategories.push(s),"categoryShow"===i&&n>=0&&this.Options.hiddenCategories.splice(n,1),this.render(this.Options,this.Width,this.Height)}else"categoryHighlight"===i&&(this!==t?this.highlight(e.categories):this.legend&&this.legend!==t&&this.legend.processEvent(e,t));e&&this.dispatchEvent(e)}isDragSupported(e){return this.SelectionHandler?e[0]:null}getDragRowKeys(e){e.isSelected()||(this.SelectionHandler.processClick(e,!1),this.EventManager.fireSelectionEvent());for(var t=[],i=this.SelectionHandler.getSelection(),n=0;n<i.length;n++){var a=i[n];a instanceof s&&t.push(a.getId())}return t}getDragFeedback(){for(var e=[],t=this.SelectionHandler.getSelection(),i=0;i<t.length;i++)e=e.concat(t[i].getDisplayables());return e}}e.TagCloud=g,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojtagcloud-toolkit.js.map