(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7509:function(e,n,t){"use strict";t.d(n,{t:function(){return O}});var i=t(7294),r=t(9521),o=t(1755),a=t(7392),l=t(975);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var c=function(e){var n=s({},(function(e){if(null==e)throw TypeError("Cannot destructure "+e)}(e),e));return i.createElement(l.x,s({as:"nav",flex:!1,gap:"medium"},n))},u=t(846),d=t(8087),f=function(e){var n=e.theme.pagination.button&&e.theme.pagination.button.size&&e.theme.pagination.button.size[e.size||"medium"];return n?{content:{fontSize:n.font&&n.font.size,lineHeight:n.font&&n.font.height},container:{height:n.height,minWidth:n.width}}:""},p=(0,r.default)(u.z).withConfig({displayName:"StyledPageControl__StyledPaginationButton",componentId:"sc-1vlfaez-0"})(["> svg{margin:0 auto;}",";"],function(e){return f(e).content}),m=r.default.div.withConfig({displayName:"StyledPageControl__StyledContainer",componentId:"sc-1vlfaez-1"})(["display:flex;align-items:center;justify-content:center;max-width:100%;",";",";"],function(e){return f(e).container},function(e){return e.theme.pagination.control&&e.theme.pagination.control.extend}),h=(0,r.default)(d.x).withConfig({displayName:"StyledPageControl__StyledSeparator",componentId:"sc-1vlfaez-2"})(["font-weight:bold;",";",";"],function(e){return"font-size: "+(f(e).content&&f(e).content.fontSize)},function(e){return"line-height: "+(f(e).content&&f(e).content.lineHeight)}),g=["control","separator","size"];function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var x=function(e){var n=e.control,t=e.separator,o=e.size,a=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,g),l=(0,i.useContext)(r.ThemeContext),s=o||"medium";return i.createElement(m,{as:"li",size:s},t?i.createElement(h,{size:s},"…"):i.createElement(p,v({a11yTitle:"Go to page "+n,fill:!0,kind:l.pagination.button,label:n,size:s},a)))},b=["a11yTitle","aria-label","numberItems","numberEdgePages","numberMiddlePages","onChange","page","size","step"];function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var j=(0,r.default)(l.x).withConfig({displayName:"Pagination__StyledPaginationContainer",componentId:"sc-rnlw6m-0"})(["",""],function(e){return e.theme.pagination.container&&e.theme.pagination.container.extend}),w=function(e,n){for(var t=[],i=e;i<=n;i+=1)t.push(i);return t},O=(0,i.forwardRef)(function(e,n){var t,s,u=e.a11yTitle,d=e["aria-label"],f=e.numberItems,p=e.numberEdgePages,m=void 0===p?1:p,h=e.numberMiddlePages,g=void 0===h?3:h,v=e.onChange,O=e.page,k=e.size,E=e.step,M=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,b),C=(0,i.useContext)(r.ThemeContext)||o.l.theme,z=(0,i.useContext)(a.R),P=z.onView,I=z.filteredTotal,S=z.view,T=E||(null==S?void 0:S.step)||10,_=null!=(t=null!=f?f:I)?t:0,N=O||(null==S?void 0:S.page)||1,D=Math.ceil(_/T),K=(0,i.useState)(Math.min(N,D)||1),A=K[0],R=K[1];(0,i.useEffect)(function(){return R(N)},[N]),(0,i.useEffect)(function(){P&&((null==S?void 0:S.step)!==T||(null==S?void 0:S.page)!==N)&&P(y({},S,{page:N,step:T}))},[P,N,T,S]);var W=w(1,Math.min(m,D)),B=w(Math.max(D-m+1,m+1),D);g<1?(s=1,console.warn('Property "numberMiddlePages" should not be < 1. One middle page button will be shown. Set "numberMiddlePages" >= 1 to remove this warning.')):s=g;var G=Math.max(s%2?Math.min(A-Math.floor(s/2),D-m-s):Math.min(A-Math.floor(s/2)+1,D-m-s),m+2),q=Math.min(Math.max(A+Math.floor(s/2),m+s+1),B.length>0?B[0]-2:D-1),F=w(G,q),L=[];G>m+2?L=["more-prev"]:m+1<D-m&&(L=[m+1]);var H=[];q<D-m-1?H=["more-next"]:D-m>m&&(H=[D-m]);var V=function(e){var n=T*(e-1);return{startIndex:n,endIndex:n+T}},X=function(e,n){if(R(n),P&&P(y({},S,{page:n})),v){e.persist();var t=e;t.page=n;var i=V(n),r=i.startIndex,o=i.endIndex;t.startIndex=r,t.endIndex=o,v(t)}},U=C.pagination.icons.next,Y=C.pagination.icons.previous,$=C.pagination.icons.color,J={next:{"aria-disabled":A===D?"true":void 0,disabled:A===D||!_,icon:i.createElement(U,{color:$}),onClick:function(e){X(e,A+1)},label:void 0},previous:{"aria-disabled":1===A?"true":void 0,disabled:1===A||!_,icon:i.createElement(Y,{color:$}),onClick:function(e){X(e,A-1)},label:void 0}},Q=["previous"].concat(W,L,F,H,B,["next"]);return Q=Q.map(function(e){return y({active:e===A,a11yTitle:"number"==typeof e?"Go to page "+e:"Go to "+e+" page","aria-current":e===A?"page":void 0,control:e,onClick:function(n){X(n,e)},separator:"more-prev"===e||"more-next"===e},J[e])}),i.createElement(j,y({flex:!1},C.pagination.container,M),i.createElement(c,{a11yTitle:d||u||"Pagination Navigation",ref:n},i.createElement(l.x,y({as:"ul"},C.pagination.controls),Q.map(function(e,n){return i.createElement(x,y({key:n,size:k},e))}))))});O.displayName="Pagination",O.propTypes={}},7392:function(e,n,t){"use strict";t.d(n,{R:function(){return i}});var i=t(7294).createContext({data:[]})},823:function(e,n,t){"use strict";t.d(n,{h:function(){return l},k:function(){return a}});var i=t(7294),r=["data","page","step"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var a=function(e,n){var t;return"number"==typeof e?t=Math.ceil((e+1)/n):"object"==typeof e&&"page"in e&&(t=e.page),t},l=function(e){var n=e.data,t=e.page,a=e.step,l=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,r),s=n?Math.ceil(n.length/a):0,c=(0,i.useState)(Math.min(t,s)||1),u=c[0],d=c[1];u>s&&(null==n?void 0:n.length)>0&&d(Math.max(s,1));var f=a*(u-1),p=f+a;return[(0,i.useMemo)(function(){return Array.isArray(n)?n.slice(f,p):[]},[n,f,p]),o({numberItems:n&&n.length,onChange:function(e){return d(e.page)},page:u,step:a},l)]}},1072:function(e,n,t){"use strict";t.d(n,{e:function(){return b}});var i=t(4052),r=t(975),o=t(6717),a=t(5893);function l({content:e}){return(0,a.jsx)(r.x,{border:"between",gap:"small",fill:!0,children:e})}var s=t(1194),c=t(846),u=t(5217),d=t(8560),f=t(3572),p=t(8288),m=t(5321),h=t(5224),g=t(1664),v=t.n(g);function x(){return(0,a.jsxs)(s.h,{background:"brand",pad:"small",children:[(0,a.jsx)(r.x,{direction:"row",gap:"medium",align:"center",children:(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)(c.z,{plain:!0,icon:(0,a.jsx)(f.A,{}),label:"大晓设备制造商平台"})})}),(0,a.jsx)(u.P,{options:["简体中文","English"],value:"简体中文"}),(0,a.jsx)(d.v,{label:(0,a.jsx)(p.n,{}),items:[{label:(0,a.jsx)(v(),{href:"/enterprise",children:(0,a.jsx)(c.z,{plain:!0,label:"企业认证"})}),icon:(0,a.jsx)(m.K,{}),gap:"small"},{label:"退出登录",icon:(0,a.jsx)(h.R,{}),gap:"small"}]})]})}function b(e){return function(){return(0,a.jsx)(i.p,{full:!0,theme:o.Nw,children:(0,a.jsxs)(r.x,{fill:!0,children:[(0,a.jsx)(x,{}),(0,a.jsx)(l,{content:e})]})})}}},9398:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var i=t(975),r=t(5009),o=t(9019),a=t(7670),l=t(5327),s=t(9459),c=t(8769),u=t(846),d=t(7294),f=t(9521),p=t(7392),m=t(5017),h=t(9170),g=t(7509),v=t(8087),x=t(363),b=t(6808),y=t(7187),j=t(823),w=t(7921),O=t(5697),k=t.n(O),E=["none","xxsmall","xsmall","small","medium","large","xlarge"],M=["horizontal","vertical","top","bottom","left","right","start","end"],C={};M.forEach(function(e){C[e]=k().oneOf(E)}),k().bool,k().oneOf(M),k().shape({color:k().oneOfType([k().string,k().shape({dark:k().string,light:k().string})]),side:k().oneOf(M),size:k().oneOfType([k().oneOf(E),k().string])});var z=["a11yTitle","aria-label","action","as","background","border","children","data","defaultItemProps","disabled","focus","itemKey","itemProps","onActive","onClickItem","onKeyDown","onMore","onOrder","pad","paginate","pinned","primaryKey","secondaryKey","show","step"];function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var I=[],S=f.default.ul.withConfig({displayName:"List__StyledList",componentId:"sc-130gdqg-0"})(["list-style:none;"," padding:0;"," &:focus{","}","}","}"],function(e){return!e.margin&&"margin: 0;"},x.$G,function(e){return e.tabIndex>=0&&(0,x.jq)({forceOutline:!0,skipSvgChildren:!0})},function(e){return e.itemFocus&&(0,x.jq)({forceOutline:!0,skipSvgChildren:!0})},function(e){return e.theme.list&&e.theme.list.extend}),T=(0,f.default)(i.x).withConfig({displayName:"List__StyledItem",componentId:"sc-130gdqg-1"})([""," "," &:focus{","}"," &:hover{","}",""],function(e){return e.onClick&&!e.isDisabled&&"cursor: pointer;"},function(e){return e.draggable&&!e.isDisabled&&"cursor: move;"},(0,x.GA)({forceOutline:!0,skipSvgChildren:!0}),function(e){if(e.isDisabled&&null!=(n=e.theme.list)&&null!=(t=n.item)&&t.disabled){var n,t,i,r=e.theme.list.item.disabled,o=r.color,a=r.cursor;i={color:(0,b.ut)(o,e.theme),cursor:a}}return i},function(e){return e.isDisabled&&"background-color: unset;"},function(e){return e.theme.list&&e.theme.list.item&&e.theme.list.item.extend}),_=(0,f.default)(i.x).withConfig({displayName:"List__StyledContainer",componentId:"sc-130gdqg-2"})(["",";"],function(e){return e.theme.list&&e.theme.list.container&&e.theme.list.container.extend}),N=function(e,n,t){return"function"==typeof t?t(e,n):"string"==typeof e?e:void 0!==t?null==e?void 0:e[t]:void 0},D=function(e,n,t,i){var r=e.slice(0),o=r[t];if(t<i)for(var a=t;a<i;a+=1)r[a]=r[a+1];else for(var l=t;l>i;l-=1)r[l]=r[l-1];return r[i]=o,n.data.length>0&&n.data.forEach(function(e,t){r.splice(n.indexes[t],0,e)}),r},K=function(e,n,t,i){var r;return i?N(e,n,i):t?N(e,n,t):null!=(r=N(e,n))?r:n},A=d.forwardRef(function(e,n){var t,r=e.a11yTitle,o=e["aria-label"],a=e.action,l=e.as,s=e.background,c=e.border,x=e.children,b=e.data,O=e.defaultItemProps,k=e.disabled,E=(e.focus,e.itemKey),M=e.itemProps,C=e.onActive,A=e.onClickItem,R=e.onKeyDown,W=e.onMore,B=e.onOrder,G=e.pad,q=e.paginate,F=e.pinned,L=void 0===F?[]:F,H=e.primaryKey,V=e.secondaryKey,X=e.show,U=e.step,Y=void 0===U?q?50:void 0:U,$=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,z),J=(0,y.t)(n),Q=(0,d.useContext)(f.ThemeContext),Z=(0,d.useContext)(p.R).data,ee=b||Z||I,en=E||H||null,et=(0,d.useState)(),ei=et[0],er=et[1],eo=(0,d.useState)(),ea=eo[0],el=eo[1],es=function(e){er(e),C&&A&&e!==ei&&C(e)},ec=(0,d.useState)(),eu=ec[0],ed=ec[1],ef=(0,d.useState)(),ep=ef[0],em=ef[1],eh=(0,d.useState)(),eg=eh[0],ev=eh[1],ex=(0,d.useMemo)(function(){var e=[],n=[],t=[],i=eg||ee;return 0===L.length?[i,{data:n,indexes:t}]:(i.forEach(function(i,r){var o=N(i,r,en);L.includes(o)?(n.push(i),t.push(r)):e.push(i)}),[e,{data:n,indexes:t}])},[ee,eg,en,L]),eb=ex[0],ey=ex[1],ej=(0,j.h)(P({data:ee,page:(0,j.k)(X,Y),step:Y},q)),ew=ej[0],eO=ej[1],ek=q?_:d.Fragment,eE=q?P({},Q.list.container):void 0,eM=(0,d.useRef)(),eC=(0,w.z$)(),ez={role:A||B?"listbox":"list"};if(ei>=0){if(B){var eP=Math.trunc(ei/2);t=""+K(eb[eP],eP,en,H)+(ei%2?"MoveDown":"MoveUp")}else A&&(t=K(eb[ei],ei,en,H));ez["aria-activedescendant"]=t}return d.createElement(ek,eE,d.createElement(h.N,{onEnter:(A||B)&&ei>=0?function(e){if(B){var n=Math.trunc(ei/2);ei%2?(B(D(eb,ey,n,n+1)),es(Math.min(ei+2,2*eb.length-2))):(B(D(eb,ey,n,n-1)),es(Math.max(ei-2,1)))}else if(null!=k&&k.includes(N(ee[ei],ei,en)))e.preventDefault();else if(A){e.persist();var t=e;t.item=ee[ei],t.index=ei,A(t),eC({type:"listItemClick",element:J.current,event:t,item:ee[ei],index:ei})}}:void 0,onUp:(A||B)&&ei?function(){es(Math.max(ei-1,B?1:0))}:void 0,onDown:(A||B)&&eb&&eb.length?function(){var e=B?1:0,n=B?2*eb.length-2:ee.length-1;es(ei>=e?Math.min(ei+1,n):e)}:void 0,onKeyDown:R},d.createElement(S,P({"aria-label":o||r,ref:J,as:l||"ul",itemFocus:eu,tabIndex:A||B?0:void 0,onFocus:function(){return ei||0===ei?es(ei):es(ea)},onBlur:function(){el(ei),es(void 0)}},ez,$),d.createElement(m.v,{items:q?ew:eg||ee,onMore:W,show:q?void 0:X,step:Y,renderMarker:function(e){return d.createElement(i.x,{as:"li",flex:!1},e)}},function(e,n){var t,r,o,l,f,p,m,h,g={};if(x)t=x(e,n,A?{active:ei===n}:void 0);else if(H){var b=N(e,n,H);if(t="string"==typeof b||"number"==typeof b?d.createElement(v.x,{key:"p",weight:"bold"},b):b,V){var y=N(e,n,V);t=[t,"string"==typeof y||"number"==typeof y?d.createElement(v.x,{key:"s"},N(e,n,V)):y],g={direction:"row",align:"center",justify:"between",gap:"medium"}}}else t="object"==typeof e?e[Object.keys(e)[0]]:e;var j=N(e,n,en)||n,w=eb.findIndex(function(e,n){return N(e,n,en)===j});k&&("object"!=typeof e||en||console.error("Warning: Missing prop itemKey. Prop disabled requires itemKey to be specified when data is of type 'object'."),r=null==k?void 0:k.includes(j)),L.length>0&&("object"!=typeof e||en||console.error("Warning: Missing prop itemKey. Prop pin requires itemKey to be specified when data is of type 'object'."),o=null==L?void 0:L.includes(j)),a&&(t=[d.createElement(i.x,{align:"start",key:"actionContainer"+n},t),a(e,n)],g={direction:"row",align:V?"start":"center",justify:"between",gap:"medium"});var E=s||Q.list.item.background;(B||ei!==n)&&ep!==n?Array.isArray(E)?E=E[n%E.length]:o&&(E=Q.list.item.pinned.background):E=Q.global.hover.background;var C=void 0!==c?c:Q.list.item.border;if("horizontal"===C&&n&&(C="bottom"),A&&!B&&(l={role:"option",tabIndex:-1,active:ei===n,onClick:function(t){if(r)t.preventDefault();else{t.persist();var i=t;i.item=e,i.index=n,A(i),eC({type:"listItemClick",element:J.current,event:i,item:e,index:n})}},onMouseOver:function(){return es(n)},onMouseOut:function(){return es(void 0)},onFocus:function(){es(n),ed(!0)},onBlur:function(){es(void 0),ed(!1)}}),B&&!o){f={draggable:!0,onDragStart:function(e){e.dataTransfer.setData("text/plain",""),e.dataTransfer.effectAllowed="move",em(w),es(void 0)},onDragEnd:function(){em(void 0),ev(void 0)},onDragOver:function(e){void 0!==ep&&(e.preventDefault(),ep!==w&&(e.dataTransfer.dropEffect="move",ev(D(eb,ey,ep,w)),em(w)))},onDrop:function(){eg&&B(eg)},ref:ep===w?eM:void 0};var z=Q.list.icons.up,I=Q.list.icons.down;p=!o&&d.createElement(i.x,{direction:"row",align:"center",justify:"end"},d.createElement(u.z,{id:j+"MoveUp",a11yTitle:w+1+" "+j+" move up",icon:d.createElement(z,null),hoverIndicator:!0,focusIndicator:!1,disabled:!w,active:ei===2*w,onClick:function(e){e.stopPropagation(),B(D(eb,ey,w,w-1))},tabIndex:-1,onMouseOver:function(){return es(2*w)},onMouseOut:function(){return es(void 0)},onFocus:function(){es(2*w),ed(!0)},onBlur:function(){es(void 0),ed(!1)}}),d.createElement(u.z,{id:j+"MoveDown",a11yTitle:w+1+" "+j+" move down",icon:d.createElement(I,null),hoverIndicator:!0,focusIndicator:!1,disabled:w>=eb.length-1,active:ei===2*w+1,onClick:function(e){e.stopPropagation(),B(D(eb,ey,w,w+1))},tabIndex:-1,onMouseOver:function(){return es(2*w+1)},onMouseOut:function(){return es(void 0)},onFocus:function(){es(2*w+1),ed(!0)},onBlur:function(){es(void 0),ed(!1)}})),t=d.createElement(i.x,P({flex:!0},g),t),g={direction:"row",align:O&&O.align||"center",gap:"medium"}}if(r&&(m={"aria-disabled":!0},A&&(m=P({},m,{"aria-selected":!1}))),o){var S=Q.list.icons.pin,_=Q.list.item.pinned.icon.size,K=Q.list.item.pinned.icon.pad;g={direction:"row",align:O&&O.align||"center",gap:"medium"},h=d.createElement(i.x,{direction:"row",align:"center",justify:"end",pad:K},d.createElement(S,{size:_})),t=d.createElement(i.x,{flex:!0},t)}return M&&M[n]&&(g=P({},g,M[n])),d.createElement(T,P({key:j,tag:"li",background:E,border:C,isDisabled:r,flex:!1,pad:G||Q.list.item.pad},O,g,l,f,m),B&&d.createElement(v.x,null,n+1),t,h,p)}))),q&&ee.length>Y&&ew&&ew.length?d.createElement(g.t,P({alignSelf:"end"},eO)):null)});A.displayName="List",A.propTypes={};var R=t(962),W=t(145);function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var G=(0,d.forwardRef)(function(e,n){var t=(0,W.PY)(e);return d.createElement(R.x,B({ref:n,viewBox:"0 0 24 24",a11yTitle:"Add"},e),d.createElement("path",B({fill:"none",stroke:"#000",strokeWidth:"2",d:"M12 22V2M2 12h20"},t)))});function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}G.displayName="Add";var F=(0,d.forwardRef)(function(e,n){return d.createElement(R.x,q({ref:n,viewBox:"0 0 24 24",a11yTitle:"Apps"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"}))});function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}F.displayName="Apps";var H=(0,d.forwardRef)(function(e,n){return d.createElement(R.x,L({ref:n,viewBox:"0 0 24 24",a11yTitle:"Configure"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z"}))});function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}H.displayName="Configure";var X=(0,d.forwardRef)(function(e,n){var t=(0,W.PY)(e);return d.createElement(R.x,V({ref:n,viewBox:"0 0 24 24",a11yTitle:"LinkNext"},e),d.createElement("path",V({fill:"none",stroke:"#000",strokeWidth:"2",d:"M2 12h20m-9-9 9 9-9 9"},t)))});X.displayName="LinkNext";var U=t(1664),Y=t.n(U),$=t(5893);let J=[{name:"deviceGroup0",appid:"12341234",desc:"金乌1号"},{name:"deviceGroup1",appid:"12341234",desc:"金乌2号"},{name:"deviceGroup2",appid:"12341234",desc:"金乌3号"}];var Q=(0,t(1072).e)((0,$.jsx)(function(){let{0:e,1:n}=(0,d.useState)();return(0,$.jsxs)(i.x,{margin:"small",overflow:"auto",children:[e&&(0,$.jsx)(r.m,{position:"top",onClickOutside:()=>n(!1),children:(0,$.jsx)(o.l,{children:(0,$.jsxs)(i.x,{width:"medium",gap:"small",margin:"medium",children:[(0,$.jsxs)(i.x,{direction:"row",align:"center",gap:"small",children:[(0,$.jsx)(G,{size:"large"}),(0,$.jsx)(a.X,{children:"添加设备组"})]}),(0,$.jsx)(l.W,{label:"设备组名",children:(0,$.jsx)(s.o,{})}),(0,$.jsx)(l.W,{label:"设备组描述",children:(0,$.jsx)(c.K,{})}),(0,$.jsx)(l.W,{label:"配额",children:(0,$.jsx)(s.o,{placeholder:100})}),(0,$.jsxs)(i.x,{direction:"row",gap:"small",justify:"center",children:[(0,$.jsx)(u.z,{primary:!0,label:"确定",onClick:()=>n(!1)}),(0,$.jsx)(u.z,{label:"取消",onClick:()=>n(!1)})]})]})})}),(0,$.jsxs)(i.x,{direction:"row",align:"center",justify:"between",flex:!1,children:[(0,$.jsx)(a.X,{children:"设备组列表"}),(0,$.jsx)(u.z,{primary:!0,label:"添加设备组",icon:(0,$.jsx)(G,{}),onClick:()=>n(!0)})]}),(0,$.jsx)(A,{data:J,children:e=>(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",width:"medium",children:[(0,$.jsx)(F,{}),(0,$.jsx)(v.x,{weight:"bold",children:e.name})]}),(0,$.jsx)(i.x,{flex:!0,children:(0,$.jsx)(v.x,{children:e.desc})}),(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsx)(Y(),{href:"/deviceGroupSetting",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(H,{})})}),(0,$.jsx)(Y(),{href:"/deviceDevices",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(X,{})})})]})]})})]})},{}))},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9398)}])}},function(e){e.O(0,[774,803,534,430,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);