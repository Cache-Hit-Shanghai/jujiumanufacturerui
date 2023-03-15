"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{5009:function(t,e,r){r.d(e,{m:function(){return A}});var n=r(7294),o=r(3935),a=r(2320),i=r(1205),s=r(9521),l=r(1755),u=r(2603),f=r(9170),c=r(3523),p=r(1210),m=r(8866),d=r(7921),h=r(4498),x=r(6093),b=r(363),g=r(9207),v=(0,s.css)(["left:-100%;right:100%;z-index:-1;position:fixed;"]),y=s.default.div.withConfig({displayName:"StyledLayer",componentId:"sc-rmtehz-0"})([""," background:transparent;position:relative;z-index:",";pointer-events:none;outline:none;"," ",";"],b.Oh,function(t){return t.theme.layer.zIndex},function(t){if("hidden"===t.position)return v;var e=[];if(e.push("\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n"),t.responsive&&t.theme.layer.responsiveBreakpoint&&!t.layerTarget){var r=t.theme.global.breakpoints[t.theme.layer.responsiveBreakpoint];e.push((0,g.bk)(r,"\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n"))}return e},function(t){return t.theme.layer&&t.theme.layer.extend});y.defaultProps={},Object.setPrototypeOf(y.defaultProps,l.l);var k=s.default.div.withConfig({displayName:"StyledLayer__StyledOverlay",componentId:"sc-rmtehz-1"})(["position:absolute;"," top:0px;left:0px;right:0px;bottom:0px;"," "," pointer-events:all;will-change:transform;"],function(t){if(t.responsive&&t.theme.layer.responsiveBreakpoint){var e=t.theme.global.breakpoints[t.theme.layer.responsiveBreakpoint];return(0,g.bk)(e,"position: relative;")}return""},function(t){return t.theme.layer.overlay.backdropFilter&&"backdrop-filter: "+t.theme.layer.overlay.backdropFilter+";"},function(t){return!t.plain&&t.theme.layer.overlay.background&&(0,x.Nu)(t.theme.layer.overlay.background,t.theme)}),w=function(t,e,r){var n=-1!==r.indexOf("top")||-1!==r.indexOf("bottom")?"vertical":"horizontal",o=t[r]||t[n]||t,a=e.global.edgeSize[o]||o;return e.global.edgeSize[o]||"string"==typeof o?(0,g.gd)(a):0},z=function(t,e,r,n){return(void 0===n&&(n=void 0),n)?t[n]+w(e,r,n):{bottom:t.bottom+w(e,r,"bottom"),end:t.right+w(e,r,"end"),left:t.left+w(e,r,"left"),right:t.right+w(e,r,"right"),start:t.left+w(e,r,"start"),top:t.top+w(e,r,"top")}},X={center:{vertical:(0,s.keyframes)(["0%{transform:translateX(-50%) scale(0.8);}100%{transform:translateX(-50%) scale(1);}"]),horizontal:(0,s.keyframes)(["0%{transform:translateY(-50%) scale(0.8);}100%{transform:translateY(-50) scale(1);}"]),true:(0,s.keyframes)(["0%{transform:scale(0.8);}100%{transform:scale(1);}"]),false:(0,s.keyframes)(["0%{transform:translate(-50%,-50%) scale(0.8);}100%{transform:translate(-50%,-50%) scale(1);}"])},top:{vertical:(0,s.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),true:(0,s.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"])},bottom:{vertical:(0,s.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),true:(0,s.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"])},left:{vertical:(0,s.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),true:(0,s.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])},right:{vertical:(0,s.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),true:(0,s.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])},start:{vertical:(0,s.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),true:(0,s.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])},end:{vertical:(0,s.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),horizontal:(0,s.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),true:(0,s.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),false:(0,s.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])}},C=function(t,e,r){var n,o=void 0!==t.animation?t.animation:t.animate;return void 0===o&&(o="slide"),"slide"===o||!0===o?n=X[e][r]:"fadeIn"===o&&(n=(0,s.keyframes)(["0%{opacity:0}100%{opacity:1}"])),n?(0,s.css)(["animation:"," ","s ease-in-out forwards;"],n,.2):""},E={center:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:50%;transform:translateX(-50%);",""],t.top,t.bottom,function(t){return C(t,"center","vertical")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:50%;transform:translateY(-50%);",""],t.left,t.right,function(t){return C(t,"center","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"center","true")})},false:function(){return(0,s.css)(["top:50%;left:50%;transform:translate(-50%,-50%);",""],function(t){return C(t,"center","false")})}},top:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:50%;transform:translate(-50%,0%);",""],t.top,t.bottom,function(t){return C(t,"top","vertical")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:","px;transform:translateY(0);",""],t.left,t.right,t.top,function(t){return C(t,"top","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateY(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"top","true")})},false:function(t){return(0,s.css)(["top:","px;left:50%;transform:translate(-50%,0);",""],t.top,function(t){return C(t,"top","false")})}},bottom:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:50%;transform:translate(-50%,0);",""],t.top,t.bottom,function(t){return C(t,"bottom","vertical")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;bottom:","px;transform:translateY(0);",""],t.left,t.top,t.bottom,function(t){return C(t,"bottom","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateY(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"bottom","true")})},false:function(t){return(0,s.css)(["bottom:","px;left:50%;transform:translate(-50%,0);",""],t.bottom,function(t){return C(t,"bottom","false")})}},left:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,function(t){return C(t,"left","vertical")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:50%;transform:translate(0,-50%);",""],t.left,t.right,function(t){return C(t,"left","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"left","true")})},false:function(t){return(0,s.css)(["left:","px;top:50%;transform:translate(0,-50%);",""],t.left,function(t){return C(t,"left","false")})}},right:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.right,function(t){return C(t,"right","vertical")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:50%;transform:translate(0,-50%);",""],t.left,t.right,function(t){return C(t,"right","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"right","true")})},false:function(t){return(0,s.css)(["right:","px;top:50%;transform:translate(0,-50%);",""],t.right,function(t){return C(t,"right","false")})}},start:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;inset-inline-start:","px;transform:translateX(0);",""],t.top,t.bottom,t.start,function(t){return C(t,"start","vertical")})},horizontal:function(t){return(0,s.css)(["inset-inline-start:","px;inset-inline-end:","px;top:50%;transform:translate(0,-50%);",""],t.start,t.end,function(t){return C(t,"start","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;inset-inline-start:","px;inset-inline-end:","px;transform:translateX(0);",""],t.top,t.bottom,t.start,t.end,function(t){return C(t,"start","true")})},false:function(t){return(0,s.css)(["inset-inline-start:","px;top:50%;transform:translate(0,-50%);",""],t.start,function(t){return C(t,"start","false")})}},end:{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;inset-inline-end:","px;transform:translateX(0);",""],t.top,t.bottom,t.end,function(t){return C(t,"end","vertical")})},horizontal:function(t){return(0,s.css)(["inset-inline-start:","px;inset-inline-end:","px;top:50%;transform:translate(0,-50%);",""],t.start,t.end,function(t){return C(t,"end","horizontal")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;inset-inline-start:","px;inset-inline-end:","px;transform:translateX(0);",""],t.top,t.bottom,t.start,t.end,function(t){return C(t,"end","true")})},false:function(t){return(0,s.css)(["inset-inline-end:","px;top:50%;transform:translate(0,-50%);",""],t.end,function(t){return C(t,"end","false")})}},"top-right":{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;right:","px;transform:translateX(0);",";"],t.top,t.bottom,t.right,function(t){return C(t,"top","true")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:0;transform:translateX(0);",";"],t.left,t.right,function(t){return C(t,"top","true")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",";"],t.top,t.bottom,t.left,t.right,function(t){return C(t,"top","true")})},false:function(t){return(0,s.css)(["top:","px;right:","px;transform:translateY(0);",";"],t.top,t.right,function(t){return C(t,"top","true")})}},"top-left":{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,function(t){return C(t,"top","true")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;top:0;transform:translateX(0);",""],t.left,t.right,function(t){return C(t,"top","true")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"top","true")})},false:function(t){return(0,s.css)(["top:","px;left:","px;transform:translateY(0);",""],t.top,t.left,function(t){return C(t,"top","true")})}},"bottom-right":{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.right,function(t){return C(t,"bottom","true")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;bottom:","px;transform:translateY(0);",""],t.left,t.right,t.bottom,function(t){return C(t,"bottom","true")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"bottom","true")})},false:function(t){return(0,s.css)(["bottom:","px;right:","px;transform:translateY(0);",""],t.bottom,t.right,function(t){return C(t,"bottom","true")})}},"bottom-left":{vertical:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,function(t){return C(t,"bottom","true")})},horizontal:function(t){return(0,s.css)(["left:","px;right:","px;bottom:","px;transform:translateY(0);",""],t.left,t.right,t.bottom,function(t){return C(t,"bottom","true")})},true:function(t){return(0,s.css)(["top:","px;bottom:","px;left:","px;right:","px;transform:translateX(0);",""],t.top,t.bottom,t.left,t.right,function(t){return C(t,"bottom","true")})},false:function(t){return(0,s.css)(["bottom:","px;left:","px;transform:translateY(0);",""],t.bottom,t.left,function(t){return C(t,"bottom","true")})}}},O=function(t,e,r,n){var o=[],a=!0===t?"medium":t,i=e.global.edgeSize[a]||a,l=i.split(" ").length>1;return"none"!==n||l||!0!==e.layer.border.intelligentRounding?o.push((0,s.css)(["border-radius:",";"],i)):"bottom"===r?o.push((0,s.css)(["border-radius:"," "," 0 0;"],i,i)):"bottom-left"===r?o.push((0,s.css)(["border-radius:0 "," 0 0;"],i)):"bottom-right"===r?o.push((0,s.css)(["border-radius:"," 0 0 0;"],i)):"end"===r?o.push((0,s.css)(["border-start-start-radius:",";border-end-start-radius:",";"],i,i)):"left"===r?o.push((0,s.css)(["border-radius:0 "," "," 0;"],i,i)):"right"===r?o.push((0,s.css)(["border-radius:"," 0 0 ",";"],i,i)):"start"===r?o.push((0,s.css)(["border-end-end-radius:",";border-start-end-radius:",";"],i,i)):"top"===r?o.push((0,s.css)(["border-radius:0 0 "," ",";"],i,i)):"top-left"===r?o.push((0,s.css)(["border-radius:0 0 "," 0;"],i)):"top-right"===r?o.push((0,s.css)(["border-radius:0 0 0 ",";"],i)):o.push((0,s.css)(["border-radius:",";"],i)),o},I={left:0,right:0,top:0,bottom:0},P=(0,s.css)([""," max-height:",";max-width:",";",";",";"],function(t){return t.modal||"hidden"!==t.position?(0,s.css)(["position:",";"],t.modal||t.layerTarget?"absolute":"fixed"):v},function(t){return"calc(100% - "+z(I,t.margin,t.theme,"top")+"px - "+z(I,t.margin,t.theme,"bottom")+"px)"},function(t){return"calc(100% - "+z(I,t.margin,t.theme,"left")+"px - "+z(I,t.margin,t.theme,"right")+"px)"},function(t){return t.plain||t.full&&"none"===t.margin?"border-radius: 0;":O(t.theme.layer.border.radius,t.theme,t.position,t.margin)},function(t){return"hidden"!==t.position&&E[t.position][t.full](z(I,t.margin,t.theme),I)||""}),Y=function(t){return(0,s.css)(["position:relative;max-height:none;max-width:none;border-radius:0;height:",";width:",";"],t.layerTarget?"100%":"100vh",t.layerTarget?"100%":"100vw")},N=(0,s.css)(["box-shadow:",";"],function(t){return t.theme.global.elevation[t.theme.dark?"dark":"light"][t.theme.layer.container.elevation]}),T=s.default.div.withConfig({shouldForwardProp:function(t,e){return!["elevation"].includes(t)&&e(t)}}).withConfig({displayName:"StyledLayer__StyledContainer",componentId:"sc-rmtehz-2"})([""," display:flex;flex-direction:column;min-height:",";"," outline:none;pointer-events:all;z-index:",";"," "," ",";",";"],function(t){return t.modal?"":b.Oh},function(t){return t.theme.global.size.xxsmall},function(t){return!t.plain&&(t.background||t.theme.layer.background)&&(0,x.Nu)(t.background||t.theme.layer.background,t.theme)},function(t){return t.theme.layer.container.zIndex},function(t){return!t.plain&&t.theme.layer.container.elevation&&N},P,function(t){if(t.responsive&&t.theme.layer.responsiveBreakpoint){var e=t.theme.global.breakpoints[t.theme.layer.responsiveBreakpoint];if(e)return(0,g.bk)(e,Y)}return""},function(t){return t.theme.layer.container&&t.theme.layer.container.extend});T.defaultProps={},Object.setPrototypeOf(T.defaultProps,l.l);var j=["background","children","full","id","margin","modal","onClickOutside","onEsc","plain","position","responsive","target"];function S(){return(S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var B=s.default.a.withConfig({displayName:"LayerContainer__HiddenAnchor",componentId:"sc-1srj14c-0"})(["width:0;height:0;overflow:hidden;position:absolute;"]),_=(0,n.forwardRef)(function(t,e){var r=t.background,o=t.children,a=t.full,b=t.id,g=t.margin,v=t.modal,w=void 0===v||v,z=t.onClickOutside,X=t.onEsc,C=t.plain,E=t.position,O=void 0===E?"center":E,I=t.responsive,P=void 0===I||I,Y=t.target,N=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,j),_=(0,n.useContext)(m.c),L=(0,n.useContext)(s.ThemeContext)||l.l.theme,A=(0,n.useContext)(c.b),R=(0,n.useContext)(p.j).layer,F=(0,n.useRef)(),D=(0,n.useRef)(),M=(0,n.useRef)(),K=(0,n.useContext)(h.w),V=(0,n.useMemo)(function(){return K.length},[K]),H=(0,n.useMemo)(function(){return[].concat(K,[V])},[K,V]),q=(0,d.z$)();(0,n.useEffect)(function(){var t=new Date,e=M.current,r="hidden"===O;return r||q({type:"layerOpen",element:e}),function(){r||q({type:"layerClose",element:e,elapsed:new Date().getTime()-t.getTime()})}},[q,M,O]),(0,n.useEffect)(function(){if("hidden"!==O){var t=M.current||D.current||e.current;t&&t.scrollIntoView&&t.scrollIntoView();for(var r=document.activeElement;r&&r!==D.current;)r=r.parentElement;w&&!r&&F.current&&F.current.focus()}},[w,O,e]),(0,n.useEffect)(function(){if("hidden"!==O){var t=M.current||D.current||e.current;t&&t.scrollIntoView&&t.scrollIntoView()}},[O,e]),(0,n.useEffect)(function(){var t=function(t){for(var e=null,r=_===document.body?t.target:null==t?void 0:t.composedPath()[0];null===e&&r!==document&&null!==r;){var n=r.getAttribute("data-g-portal-id");null!==n&&""!==n?e=parseInt(n,10):r=r.parentNode}(null===e||-1!==K.indexOf(e))&&null!==r&&z(t)};if(z&&document.addEventListener("mousedown",t),Y){var e=function(){var t=window.innerWidth,e=window.innerHeight,r=(0,i.zw)(Y),n=M.current;if(n&&r){n.style.left="",n.style.top="",n.style.bottom="",n.style.width="";var o=r.getBoundingClientRect(),a=n.getBoundingClientRect();n.style.left=o.left+"px",n.style.right=t-o.right+"px",n.style.top=o.top+"px",n.style.bottom=e-o.bottom+"px",n.style.maxHeight=o.height,n.style.maxWidth=Math.min(a.width,t)}};return e(),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0),z&&document.removeEventListener("mousedown",t)}}return function(){z&&document.removeEventListener("mousedown",t)}},[_,Y,z,K,V]);var W=n.createElement(T,S({ref:e||D,background:r,elevation:L.layer.container.elevation,id:R&&R.singleId?b+"__container":b,full:void 0!==a&&a,margin:void 0===g?"none":g,modal:w},N,{position:O,plain:C,responsive:P,layerTarget:Y,dir:L.dir,"data-g-portal-id":V}),n.createElement(B,{ref:F,tabIndex:"-1","aria-hidden":"true"}),o);W=n.createElement(y,{ref:M,id:b,plain:C,position:O,responsive:P,layerTarget:Y,tabIndex:"-1",dir:L.dir},w&&n.createElement(k,{plain:C,responsive:P,onMouseDown:z}),W),X&&(W=n.createElement(f.N,{onEsc:X?function(t){t.stopPropagation(),X(t)}:void 0,target:!1===w?"document":void 0},W));var G=(0,n.useMemo)(function(){var t=(0,x.im)(L.layer.background,L);return S({},L,{dark:t})},[L]);if(L.layer.background){var $=G.dark;void 0!==$&&$!==L.dark&&(W=n.createElement(s.ThemeContext.Provider,{value:G},W))}W=n.createElement(h.w.Provider,{value:H},W);var J=P&&A===L.layer.responsiveBreakpoint;return(w||J)&&(W=n.createElement(u.l,{hidden:"hidden"===O,restrictScroll:!Y&&!!J||void 0,trapFocus:!0},W)),W});function L(){return(L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var A=(0,n.forwardRef)(function(t,e){var r=t.animate,s=t.animation,l=t.targetChildPosition,u=(0,n.useState)(),f=u[0],c=u[1];(0,n.useEffect)(function(){return c(document.activeElement)},[]);var p=(0,n.useState)(),d=p[0],h=p[1],x=(0,n.useContext)(m.c);return(0,n.useEffect)(function(){return h((0,i.r9)(x,l))},[x,l]),(0,a.b)(function(){return function(){if(f&&(f.focus?setTimeout(function(){return f.focus()},0):f.parentNode&&f.parentNode.focus&&f.parentNode.focus()),d){if(!1!==(void 0!==s?s:r)){var t=d.cloneNode(!0);t.id="layerClone",x.appendChild(t);var e=t.querySelector('[class*="StyledLayer__StyledContainer"]');e&&e.style&&(e.style.animationDirection="reverse"),setTimeout(function(){var t=x===document.body?document.getElementById("layerClone"):x.getElementById("layerClone");t&&(x.removeChild(t),d.remove())},200)}else x.removeChild(d)}}},[r,s,x,d,f]),d?(0,o.createPortal)(n.createElement(_,L({ref:e},t)),d):null});A.displayName="Layer",A.propTypes={}},8769:function(t,e,r){r.d(e,{K:function(){return m}});var n=r(7294),o=r(131),a=r(9170),i=r(9521),s=r(363),l=r(1755),u=(0,i.css)(["outline:none;border:none;width:100%;-webkit-appearance:none;"]),f=i.default.textarea.withConfig({displayName:"StyledTextArea",componentId:"sc-17i3mwp-0"})([""," "," "," "," "," ",";"],s.hG,function(t){var e;return void 0!==t.resize&&("horizontal"===(e=t.resize)?"resize: horizontal;":"vertical"===e?"resize: vertical;":e?"resize: both;":"resize: none;")},function(t){return t.fillArg&&"height: 100%;"},function(t){return t.plain&&u},function(t){return t.disabled&&(0,s.Cv)(t.theme.textArea.disabled&&t.theme.textArea.disabled.opacity)},function(t){return t.theme.textArea&&t.theme.textArea.extend});f.defaultProps={},Object.setPrototypeOf(f.defaultProps,l.l);var c=["a11yTitle","fill","focusIndicator","name","onBlur","onChange","onFocus","onKeyDown","value"];function p(){return(p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var m=(0,n.forwardRef)(function(t,e){var r=t.a11yTitle,i=t.fill,s=t.focusIndicator,l=t.name,u=t.onBlur,m=t.onChange,d=t.onFocus,h=t.onKeyDown,x=t.value,b=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,c),g=(0,n.useContext)(o.q).useFormInput({name:l,value:x}),v=g[0],y=g[1],k=(0,n.useState)(),w=k[0],z=k[1];return n.createElement(a.N,{onEsc:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation()},onKeyDown:h},n.createElement(f,p({"aria-label":r,ref:e,name:l,fillArg:i,focus:w,value:v,focusIndicator:void 0===s||s},b,{onFocus:function(t){z(!0),d&&d(t)},onBlur:function(t){z(!1),u&&u(t)},onChange:function(t){y(t.target.value),m&&m(t)}})))});m.displayName="TextArea",m.propTypes={}}}]);