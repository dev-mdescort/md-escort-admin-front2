(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6053],{95477:function(n,e,t){"use strict";var r=t(22122),o=t(2949),i=t(67294),a=(t(45697),t(86010)),c=t(14670),u=t(93871),s=44,l=i.forwardRef((function(n,e){var t=n.classes,c=n.className,l=n.color,d=void 0===l?"primary":l,f=n.disableShrink,h=void 0!==f&&f,v=n.size,m=void 0===v?40:v,p=n.style,g=n.thickness,E=void 0===g?3.6:g,O=n.value,x=void 0===O?0:O,y=n.variant,j=void 0===y?"indeterminate":y,N=(0,o.Z)(n,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),b={},w={},T={};if("determinate"===j||"static"===j){var C=2*Math.PI*((s-E)/2);b.strokeDasharray=C.toFixed(3),T["aria-valuenow"]=Math.round(x),b.strokeDashoffset="".concat(((100-x)/100*C).toFixed(3),"px"),w.transform="rotate(-90deg)"}return i.createElement("div",(0,r.Z)({className:(0,a.Z)(t.root,c,"inherit"!==d&&t["color".concat((0,u.Z)(d))],{determinate:t.determinate,indeterminate:t.indeterminate,static:t.static}[j]),style:(0,r.Z)({width:m,height:m},w,p),ref:e,role:"progressbar"},T,N),i.createElement("svg",{className:t.svg,viewBox:"".concat(22," ").concat(22," ").concat(s," ").concat(s)},i.createElement("circle",{className:(0,a.Z)(t.circle,h&&t.circleDisableShrink,{determinate:t.circleDeterminate,indeterminate:t.circleIndeterminate,static:t.circleStatic}[j]),style:b,cx:s,cy:s,r:(s-E)/2,fill:"none",strokeWidth:E})))}));e.Z=(0,c.Z)((function(n){return{root:{display:"inline-block"},static:{transition:n.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:n.transitions.create("transform")},colorPrimary:{color:n.palette.primary.main},colorSecondary:{color:n.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:n.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:n.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},26381:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(85893),o=t(41120),i=t(41749),a=t(43832),c=t(9008),u=(t(67294),(0,o.Z)((function(n){return{containerRoot:{paddingTop:n.spacing(3)}}})));function s(n){var e=u();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"\uc5e0\ub514\uc5d0\uc2a4\ucf54\ud2b8 \uad00\ub9ac\uc790"}),(0,r.jsx)("meta",{name:"description",content:"\uc5e0\ub514\uc5d0\uc2a4\ucf54\ud2b8 \uad00\ub9ac\uc790\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{container:!0,spacing:3,children:[n.Navigation,(0,r.jsx)(i.Z,{item:!0,xs:12,children:(0,r.jsx)(a.Z,{className:e.containerRoot,maxWidth:"xl",children:null===n||void 0===n?void 0:n.children})})]})})]})}},49649:function(n,e,t){"use strict";t.d(e,{Z:function(){return E},U:function(){return O}});var r=t(85893),o=t(41120),i=t(39636),a=t(62822),c=t(50998),u=t(95757),s=t(55517),l=t(46869),d=t(66037),f=t(53024),h=t(41664),v=t(67294),m=t(64566),p=t(35025),g=(0,o.Z)((function(n){return{rootMenu:{backgroundColor:n.palette.grey[50]}}}));function E(n){return(0,r.jsx)(i.ZP,{anchor:"left",open:n.open,onClose:n.onClose,children:(0,r.jsx)(a.Z,{children:f.s.map((function(n){return(0,r.jsx)(O,{menu:n},n.name)}))})})}var O=function n(e){var t=g(),o=!e.rootPrefix,i=!e.menu.subMenuList||e.menu.subMenuList.length<1,a=[e.rootPrefix||"",e.menu.rootUrl].join(""),f=(0,v.useState)(!1),E=f[0],O=f[1];return i?(0,r.jsx)(h.default,{href:a,children:(0,r.jsxs)("a",{children:[(0,r.jsx)(c.Z,{button:!0,className:"".concat(o&&t.rootMenu),dense:!o,children:(0,r.jsx)(u.Z,{primary:e.menu.name})},e.menu.name),o&&(0,r.jsx)(s.Z,{})]})}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{onClick:function(){return O((function(n){return!n}))},children:(0,r.jsxs)(c.Z,{button:!0,className:"".concat(o&&t.rootMenu),children:[(0,r.jsx)(u.Z,{primary:e.menu.name}),(0,r.jsx)(l.Z,{children:E?(0,r.jsx)(p.Z,{}):(0,r.jsx)(m.Z,{})})]},e.menu.name)}),(0,r.jsx)(d.Z,{in:E,timeout:"auto",unmountOnExit:!0,children:e.menu.subMenuList.map((function(e){return(0,r.jsx)(n,{menu:e,rootPrefix:a})}))}),(0,r.jsx)(s.Z,{})]})}},9844:function(n,e,t){"use strict";t.d(e,{ZP:function(){return v},v2:function(){return m},RD:function(){return p}});var r=t(85893),o=t(45258),i=t(28358),a=t(22318),c=t(17812),u=t(282),s=t(48884),l=t(67294),d=t(49649),f=t(76201),h=t(11163);function v(n){return(0,r.jsx)(o.Z,{color:n.color||"primary",variant:n.variant||"elevation",position:n.position||"sticky",children:(0,r.jsxs)(i.Z,{children:[null===n||void 0===n?void 0:n.actionComponent,(0,r.jsx)(a.Z,{style:{flexGrow:1},children:n.title}),null===n||void 0===n?void 0:n.subActionComponent]})})}function m(n){var e=(0,l.useState)(!1),t=e[0],o=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{edge:"start",color:"inherit",onClick:function(){return o(!0)},children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(d.Z,{open:t,onClose:function(){return o(!1)}})]})}function p(n){var e=(0,h.useRouter)();return(0,r.jsx)(u.Z,{onClick:function(){(0,f.o4)(void 0),(0,f.w8)(void 0),e.reload()},color:"inherit",children:"\ub85c\uadf8\uc544\uc6c3"})}},75481:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(96156),o=t(85893),i=t(56847),a=t(82302),c=t(83750),u=t(57394),s=t(88222),l=t(13258),d=t(22318),f=t(99613),h=t(62822),v=t(282),m=t(95477),p=t(67294),g=t(61657);function E(n){return(0,o.jsx)(g.Z,{rowsPerPageOptions:[50,100,300,500,1e3],component:"div",count:n.totalCount,rowsPerPage:n.rowsPerPage,page:n.page,onChangePage:n.onPageChange,onChangeRowsPerPage:n.onRowsPerPageChange,labelRowsPerPage:"\ud45c\uc2dc\ud560 \ud589"})}var O=t(83461);function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){var e,t,g,y,N,b,w,T,C,S=(0,p.useState)([]),P=S[0],D=S[1],R=P.length>0&&P.length<(null===(e=n.rows)||void 0===e?void 0:e.length),Z=(null===(t=n.rows)||void 0===t?void 0:t.length)>0&&P.length===(null===(g=n.rows)||void 0===g?void 0:g.length);return(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsx)(i.Z,{style:{width:"100%",maxHeight:n.maxHeight},children:(0,o.jsxs)(a.Z,{stickyHeader:!0,children:[(0,o.jsx)(c.Z,{children:(0,o.jsxs)(u.Z,{children:[n.checkMod&&(0,o.jsx)(s.Z,{padding:"checkbox",children:(0,o.jsx)(l.Z,{color:"primary",indeterminate:R,checked:Z,onChange:function(){D(R?n.rows:Z?[]:n.rows)}})}),n.columns.map((function(e,t){return(0,o.jsx)(s.Z,{align:(null===e||void 0===e?void 0:e.align)||"inherit",style:{backgroundColor:n.headColor,minWidth:(null===e||void 0===e?void 0:e.minWidth)||j},children:(0,o.jsxs)(d.Z,{variant:"overline",children:[" ",null===e||void 0===e?void 0:e.label," "]})},(null===e||void 0===e?void 0:e.id)+t.toString())}))]})}),(0,o.jsx)(f.Z,{children:null===(y=n.rows)||void 0===y?void 0:y.map((function(e){return(0,o.jsxs)(u.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[n.checkMod&&(0,o.jsx)(s.Z,{padding:"checkbox",children:(0,o.jsx)(l.Z,{onClick:function(){return function(n){var e=P.findIndex((function(e){return e.id===n.id})),t=[];-1===e?t=t.concat(P,n):0===e?t=t.concat(P.slice(1)):e===P.length-1?t=t.concat(P.slice(0,-1)):e>0&&(t=t.concat(P.slice(0,e),P.slice(e+1))),D(t)}(e)},color:"primary",checked:Boolean(P.find((function(n){return n.id===e.id})))})}),n.columns.map((function(t,r){return(0,o.jsx)(s.Z,{onClick:function(){var t;null===(t=n.onClickRow)||void 0===t||t.call(n,e)},align:t.align,children:t.format?t.format(null===e||void 0===e?void 0:e[t.id],e):null===e||void 0===e?void 0:e[t.id]},t.id+r.toString())}))]},null===e||void 0===e?void 0:e.id)}))})]})}),(0,o.jsxs)(h.Z,{children:[n.paginationMod&&(0,o.jsx)(E,{totalCount:null===(N=n.paginationMod)||void 0===N?void 0:N.totalCount,rowsPerPage:null===(b=n.paginationMod)||void 0===b?void 0:b.rowsPerPage,page:n.paginationMod.page,onPageChange:null===(w=n.paginationMod)||void 0===w?void 0:w.onPageChange,onRowsPerPageChange:null===(T=n.paginationMod)||void 0===T?void 0:T.onRowsPerPageChange}),n.csvAvailable&&(0,o.jsx)(v.Z,{color:"secondary",variant:"contained",fullWidth:!0,children:n.rows?(0,o.jsxs)(O.CSVLink,{headers:n.columns.map((function(n){return{label:(null===n||void 0===n?void 0:n.label)||"",key:((null===n||void 0===n?void 0:n.label)||"").toString()}})),filename:(new Date).toLocaleString()+".csv",data:(null===n||void 0===n||null===(C=n.rows)||void 0===C?void 0:C.map((function(e){return n.columns.reduce((function(n,t,o){var i=e[t.id];return"function"===typeof t.format&&(i=t.format(e[t.id],e)),n[t.label]=i,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n)}),{})})))||"",children:[n.rows.length||0,"\uac1c \ud589 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc"]}):(0,o.jsx)(m.Z,{})})]})]})}var j=100},37304:function(n,e,t){"use strict";t.d(e,{Ak:function(){return f},ZP:function(){return m}});var r=t(96156),o=t(46829),i=t(2723),a=t(89776),c=t.n(a),u=new(t(38806).h),s=t(76201);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f="aefeufhkb37yfni73y8n7ax",h=null;function v(){var n=c()({uri:"https://api2.mdescort.net",credentials:"same-origin"}),e=new o.ApolloLink((function(n,e){return n.setContext((function(n,e){var t,r=(0,s.LP)();return{headers:d(d({},null!==(t=null===e||void 0===e?void 0:e.headers)&&void 0!==t?t:{}),{},{authorization:r?"Bearer ".concat(r):void 0,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0})}})),e(n)}));return new i.f({link:(0,o.concat)(e,n),cache:u})}function m(){return function(){var n,e=null!==(n=h)&&void 0!==n?n:v();return h||(h=e),e}()}},12670:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(87757),o=t.n(r),i=t(92137);function a(n){function e(){return(e=(0,i.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),null===(r=n.onCatch)||void 0===r||r.call(n,e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return{play:function(n){return e.apply(this,arguments)}}}},99457:function(n,e,t){"use strict";var r=t(85893),o=t(96156),i=t(87329),a=t(96912),c=t(17812),u=t(80366),s=t(67294);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}e.Z=function(){var n=(0,s.useState)([]),e=n[0],t=n[1],d=(0,s.useState)(!1),f=d[0],h=d[1],v=(0,s.useState)(void 0),m=v[0],p=v[1],g=function(n,e){"clickaway"!==e&&h(!1)},E=function(){p(void 0)};return(0,s.useEffect)((function(){e.length?(p(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e[0])),t((function(n){return n.slice(1)})),h(!0)):e.length&&m&&f&&h(!1)}),[e,m,f]),{Snack:(0,s.useCallback)((function(n){return(0,r.jsx)(a.Z,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:f,autoHideDuration:3e3,onClose:g,onExited:E,message:m?m.message:void 0,action:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{"aria-label":"close",color:"inherit",onClick:g,children:(0,r.jsx)(u.Z,{})})})},m?m.key:void 0)}),[e,m,f]),showMessage:function(n){!function(n){return function(){t((function(e){return[].concat((0,i.Z)(e),[{message:n,key:(new Date).getTime()}])}))}}(n)()}}}},50760:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(67294);function o(n){var e=(0,r.useRef)();(0,r.useEffect)((function(){n.onChange&&n.onChange(n.dependencies),e.current&&clearTimeout(e.current),e.current=setTimeout((function(){n.onTimeout(n.dependencies)}),n.timeout)}),n.dependencies)}},72952:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(67294);function o(){var n=(0,r.useState)({width:void 0,height:void 0}),e=n[0],t=n[1];return(0,r.useEffect)((function(){function n(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),e}},64206:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r=t(85893),o=t(87329),i=t(87757),a=t.n(i),c=t(92137),u=t(62822),s=t(50998),l=t(67294),d=t(9844),f=t(75481),h=t(14096),v=t(41423);function m(n){var e=(0,l.useState)(0),t=e[0],o=e[1];return(0,r.jsx)(h.Z,{value:t,onChange:function(n,e){o(e)},variant:"scrollable",scrollButtons:"auto",children:n.tabs.map((function(n){return(0,r.jsx)(v.Z,{label:n.label,onClick:n.onClick})}))})}var p=t(12670),g=t(46829),E=t(32465),O=t(33121);function x(){var n=(0,E.Z)(["\n    query ReportCategories {\n        reportCategories {\n            id\n            name\n        }\n    }\n"]);return x=function(){return n},n}var y=(0,O.ZP)(x());var j=t(34699);function N(){var n=(0,E.Z)(["\n    query Reports($where: ReportWhereInput, $orderBy: ReportOrderByInput, $skip: Int, $take: Int) {\n        reports(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {\n            id\n            reporter {\n                id\n                name\n            }\n            title\n            body\n            category {\n                id\n                name\n            }\n            createdAt\n            updatedAt\n        }\n    }\n"]);return N=function(){return n},n}var b=(0,O.ZP)(N());var w=t(99457),T=t(50760),C=t(72952),S=t(26381),P=t(67102),D=t(87690);function R(n){var e,t=(0,w.Z)(),i=t.showMessage,h=t.Snack,v=((0,p.Z)({onCatch:function(n){return i(n.message)}}).play,function(){var n=(0,g.useLazyQuery)(b,{fetchPolicy:"cache-and-network"}),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=r.data;return r.error,r.loading,{fetchReports:t,reports:null===o||void 0===o?void 0:o.reports}}()),E=v.fetchReports,O=v.reports,x=(0,g.useQuery)(y).data,N=function(){var n=(0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:E({variables:{orderBy:{createdAt:P.As.Desc},where:{categoryId:{in:null===Z||void 0===Z?void 0:Z.map((function(n){return n.id}))}}}});case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=(0,l.useState)([]),Z=R[0],k=R[1];(0,T.Z)({timeout:200,dependencies:[Z],onTimeout:N}),(0,l.useEffect)((function(){null!==x&&void 0!==x&&x.reportCategories&&k(x.reportCategories)}),[null===x||void 0===x?void 0:x.reportCategories]);var A=(0,C.Z)();return(0,r.jsxs)(S.Z,{Navigation:(0,r.jsx)(d.ZP,{title:"\ud2b9\uc774\uc0ac\ud56d \ubcf4\uace0",position:"sticky",actionComponent:(0,r.jsx)(d.v2,{})}),children:[(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(s.Z,{disableGutters:!0,children:(null===x||void 0===x?void 0:x.reportCategories)&&(0,r.jsx)(m,{tabs:[{label:"\uc804\uccb4",onClick:function(){return k(x.reportCategories)}}].concat((0,o.Z)(null===(e=x.reportCategories)||void 0===e?void 0:e.map((function(n){return{label:n.name,onClick:function(){return k([n])}}}))))})}),(0,r.jsx)(s.Z,{disableGutters:!0,children:(0,r.jsx)(f.Z,{onClickRow:function(){},maxHeight:A.height-80,columns:[{id:"category",label:"\uc885\ub958",format:function(n){return n.name}},{id:"createdAt",label:"\ubcf4\uace0\uc2dc\uac01",format:function(n){return(0,D.TD)(n)}},{id:"reporter",label:"\ubcf4\uace0\uc790",format:function(n){return n.name}},{id:"title",label:"\uc81c\ubaa9"},{id:"body",label:"\ub0b4\uc6a9"}],rows:O})})]}),(0,r.jsx)(h,{})]})}},76201:function(n,e,t){"use strict";t.d(e,{o4:function(){return i},LP:function(){return a},w8:function(){return c},hA:function(){return u}});var r=t(37304),o=t(87690);function i(n){(0,o.WM)()&&localStorage.setItem("".concat(r.Ak,"authToken"),n)}function a(){if((0,o.WM)())return localStorage.getItem("".concat(r.Ak,"authToken"))}function c(n){(0,o.WM)()&&localStorage.setItem("".concat(r.Ak,"meOfAdmin"),JSON.stringify(n))}function u(){if((0,o.WM)())return JSON.parse(localStorage.getItem("".concat(r.Ak,"meOfAdmin")))}},53024:function(n,e,t){"use strict";t.d(e,{s:function(){return r}});var r=[{name:"\ud648",rootUrl:"/"},{name:"\uc5d0\uc2a4\ucf54\ud130 \uad00\ub9ac",rootUrl:"/escorters",subMenuList:[{name:"\uc5d0\uc2a4\ucf54\ud130 \ud65c\ub3d9\uad00\ub9ac",rootUrl:"/sign-up"},{name:"\uc5d0\uc2a4\ucf54\ud130 \uacbd\ub825\uad00\ub9ac",rootUrl:"/career"},{name:"\ud65c\ub3d9\uc5d0\uc2a4\ucf54\ud130 \ubaa9\ub85d",rootUrl:"/list"},{name:"\uc815\uc0b0",rootUrl:"/invoices"}]},{name:"\uace0\uac1d\uad00\ub9ac",rootUrl:"/users",subMenuList:[{name:"\uac00\uc785\uace0\uac1d \ubaa9\ub85d",rootUrl:"/list"},{name:"\ud658\uc790 \ubaa9\ub85d",rootUrl:"/patients"}]},{name:"\uc5d0\uc2a4\ucf54\ud2b8 \ubaa9\ub85d",rootUrl:"/escorts"},{name:"\ubcd1\uc6d0\uad00\ub9ac",rootUrl:"/hospitals"},{name:"\ubb38\uc790 \ubc1c\uc1a1",rootUrl:"/send-lms",subMenuList:[{name:"\uc5d0\uc2a4\ucf54\ud130 \ubb38\uc790\ubc1c\uc1a1",rootUrl:"/"},{name:"\uace0\uac1d \ubb38\uc790\ubc1c\uc1a1",rootUrl:"/toUser"}]},{name:"\ud1b5\uacc4",rootUrl:"/summary",subMenuList:[{name:"\uc7ac\uad6c\ub9e4\uc728",rootUrl:"/salesRetention"},{name:"VIP \uc758\uc804 \ud604\ud669",rootUrl:"/monthlyVips"},{name:"\uc5d0\uc2a4\ucf54\ud2b8 \ud604\ud669",rootUrl:"/monthlyEscorts"},{name:"\ub9e4\ucd9c \ud604\ud669",rootUrl:"/monthlySales"},{name:"\uc815\uc0b0 \ud604\ud669",rootUrl:"/monthlyWages"}]},{name:"\ud2b9\uc774\uc0ac\ud56d \ubcf4\uace0",rootUrl:"/reports"},{name:"\ub9ac\ubdf0",rootUrl:"/reviews"},{name:"\ub79c\ub529\ud398\uc774\uc9c0 \uacf5\uc9c0",rootUrl:"/landingPageNotice"},{name:"\ub274\uc2a4\ub808\ud130",rootUrl:"/newsLetters"}]},67102:function(n,e,t){"use strict";var r,o,i,a,c,u,s,l,d,f,h,v,m,p,g,E,O,x,y,j,N,b;t.d(e,{Nq:function(){return o},Y2:function(){return i},ZA:function(){return a},lT:function(){return c},Ni:function(){return s},Xd:function(){return l},n$:function(){return d},ru:function(){return h},l9:function(){return v},uG:function(){return m},i8:function(){return E},Ue:function(){return x},o_:function(){return y},As:function(){return j},h0:function(){return b}}),function(n){n.IosMdescort="IOS_MDESCORT",n.AndroidMdescort="ANDROID_MDESCORT",n.IosMdescortEscorter="IOS_MDESCORT_ESCORTER",n.AndroidMdescortEscorter="ANDROID_MDESCORT_ESCORTER"}(r||(r={})),function(n){n.Uncertificated="UNCERTIFICATED",n.Certificating="CERTIFICATING",n.Certificated="CERTIFICATED",n.Rejected="REJECTED",n.Banned="BANNED"}(o||(o={})),function(n){n.None="NONE",n.SignUp="SIGN_UP",n.Identification="IDENTIFICATION",n.Career="CAREER",n.License="LICENSE",n.PublicForm="PUBLIC_FORM"}(i||(i={})),function(n){n.Requested="REQUESTED",n.Confirmed="CONFIRMED",n.Served="SERVED",n.Completed="COMPLETED",n.Reviewed="REVIEWED",n.Billed="BILLED",n.Canceled="CANCELED",n.OpinionSubmitted="OPINION_SUBMITTED"}(a||(a={})),function(n){n.Default="DEFAULT",n.Normal="NORMAL",n.HospitalOnly="HOSPITAL_ONLY",n.DoorToDoor="DOOR_TO_DOOR",n.Terminal="TERMINAL"}(c||(c={})),function(n){n.None="NONE",n.Man="MAN",n.Woman="WOMAN"}(u||(u={})),function(n){n.Default="DEFAULT",n.Nursing="NURSING"}(s||(s={})),function(n){n.User="User",n.Escorter="Escorter",n.Admin="Admin"}(l||(l={})),function(n){n.Radio="RADIO",n.Image="IMAGE",n.Text="TEXT",n.Date="DATE",n.Time="TIME",n.Location="LOCATION",n.PhoneNum="PHONE_NUM",n.Range="RANGE",n.Password="PASSWORD",n.MultiSelect="MULTI_SELECT",n.Select="SELECT"}(d||(d={})),function(n){n.Newest="NEWEST",n.Oldest="OLDEST"}(f||(f={})),function(n){n.Radio="RADIO",n.Image="IMAGE",n.Text="TEXT",n.Date="DATE",n.Time="TIME",n.Location="LOCATION",n.PhoneNum="PHONE_NUM",n.Range="RANGE",n.Password="PASSWORD",n.MultiSelect="MULTI_SELECT",n.Select="SELECT"}(h||(h={})),function(n){n.Default="DEFAULT",n.Normal="NORMAL",n.Vip="VIP"}(v||(v={})),function(n){n.Billing="BILLING",n.Offline="OFFLINE"}(m||(m={})),function(n){n.StartEscort="START_ESCORT"}(p||(p={})),function(n){n.User="USER",n.Escorter="ESCORTER"}(g||(g={})),function(n){n.Newest="NEWEST",n.Oldest="OLDEST",n.Highest="HIGHEST",n.Lowest="LOWEST"}(E||(E={})),function(n){n.OnlyRewarded="ONLY_REWARDED",n.OnlyNotRewarded="ONLY_NOT_REWARDED",n.All="ALL"}(O||(O={})),function(n){n.Default="DEFAULT"}(x||(x={})),function(n){n.PhoneNum="PHONE_NUM",n.Kakao="KAKAO",n.Apple="APPLE"}(y||(y={})),function(n){n.Asc="asc",n.Desc="desc"}(j||(j={})),function(n){n.GooglePlay="GOOGLE_PLAY",n.AppStore="APP_STORE"}(N||(N={})),function(n){n.Off="OFF",n.SevenThirteen="SEVEN_THIRTEEN",n.NineThirteen="NINE_THIRTEEN",n.ThirteenEighteen="THIRTEEN_EIGHTEEN",n.SevenEighteen="SEVEN_EIGHTEEN",n.NineEighteen="NINE_EIGHTEEN",n.SevenFourteenHalf="SEVEN_FOURTEEN_HALF",n.NineFourteenHalf="NINE_FOURTEEN_HALF",n.ThirteenTwenty="THIRTEEN_TWENTY",n.SevenTwenty="SEVEN_TWENTY",n.NineTwenty="NINE_TWENTY"}(b||(b={}))},87690:function(n,e,t){"use strict";t.d(e,{WM:function(){return o},vO:function(){return i},TD:function(){return a}});var r=t(96486);function o(){return!0}var i=function(n,e){if(r.isArray(n)&&r.isArray(e)){var t,o,i,a,c,u,s,l,d=[],f=[],h=[],v=[],m=[],p=[];n.map((function(n){n.OR.map((function(n){r.has(n,"status")&&d.push(n),r.has(n,"patient")&&h.push(n),r.has(n,"patientFormResults")&&m.push(n)}))})),e.map((function(n){n.OR.map((function(n){r.has(n,"status")&&f.push(n),r.has(n,"patient")&&v.push(n),r.has(n,"patientFormResults")&&p.push(n)}))})),f.length>0&&(d=f),v.length>0&&(h=v),p.length>0&&(m=p);var g=null===(t=h[0])||void 0===t||null===(o=t.patient)||void 0===o||null===(i=o.formResults)||void 0===i||null===(a=i.some)||void 0===a||null===(c=a.outputs)||void 0===c||null===(u=c.some)||void 0===u||null===(s=u.values)||void 0===s||null===(l=s.equals)||void 0===l?void 0:l[0],E=[{OR:d},{OR:g?h.concat(m):[]}];return E=E.filter((function(n){return n.OR.length>0}))}};function a(n){if(!n)return"";var e=new Date,t=new Date(n),r=t.getHours(),o=t.getMinutes().toString().length<2?"0"+t.getMinutes().toString():t.getMinutes(),i=t.getSeconds().toString();if(t.getFullYear()<e.getFullYear())return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"  ").concat(r,":").concat(o,":").concat(i);if(t.getMonth()<e.getMonth())return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"  ").concat(r,":").concat(o,":").concat(i);if(t.getDate()!==e.getDate())return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"  ").concat(r,":").concat(o,":").concat(i);var a=t.getHours();return a>=12?"\uc624\ub298 \uc624\ud6c4 ".concat(12===a?a:a-12,":").concat(o,":").concat(i):"\uc624\ub298 \uc624\uc804 ".concat(a,":").concat(o,":").concat(i)}},21019:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return t(64206)}])}},function(n){n.O(0,[9774,3662,9351,1866,1769,8883,4593,110,5307,953,2079,5537],(function(){return e=21019,n(n.s=e);var e}));var e=n.O();_N_E=e}]);