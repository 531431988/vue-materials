(function(e){function t(t){for(var i,o,u=t[0],s=t[1],l=t[2],v=0,d=[];v<u.length;v++)o=u[v],r[o]&&d.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1685:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",[n("Header",{staticStyle:{padding:"0 15px"}},[n("div",{staticClass:"layout-logo"},[e._v("logo")]),e.width<768?n("Button",{staticStyle:{float:"right","margin-top":"15px"},attrs:{type:"primary",icon:"md-menu"},on:{click:e.onShow}}):n("div",{staticClass:"layout-nav"},[n("Menu",{attrs:{mode:"horizontal",theme:"dark"}},[n("MenuItem",{attrs:{name:"1"}},[e._v("nav 1")]),n("MenuItem",{attrs:{name:"2"}},[e._v("nav 2")]),n("MenuItem",{attrs:{name:"3"}},[e._v("nav 3")]),n("MenuItem",{attrs:{name:"4"}},[e._v("nav 4")]),n("MenuItem",{attrs:{name:"5"}},[e._v("nav 5")])],1)],1)],1),n("Content",{staticStyle:{padding:"50px"}},[n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}]},[n("p",[e._v("缩小窗口试试")]),n("p",[e._v("当前窗口宽: "+e._s(e.width)+"px")]),n("p",[e._v("当前窗口高: "+e._s(e.height)+"px")])])])],1),n("Drawer",{attrs:{placement:"left",closable:!1},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("Menu",[n("MenuItem",{attrs:{name:"1"}},[e._v("nav 1")]),n("MenuItem",{attrs:{name:"2"}},[e._v("nav 2")])],1)],1)],1)},a=[],o={data:function(){return{width:0,height:0,visible:!1}},methods:{resize:function(){this.width=window.innerWidth,this.height=window.innerHeight},onShow:function(){this.visible=!0}},mounted:function(){this.width=window.innerWidth,this.height=window.innerHeight}},u=o,s=(n("7c55"),n("2877")),l=Object(s["a"])(u,r,a,!1,null,null,null),c=l.exports,v=n("06aa"),d=n.n(v),p={name:"resize",inserted:function(e,t){var n=t.value,i=200,r=!0;"function"!==typeof t.value&&(n=t.value.value,i=t.value.debounce||i,r=null===t.value.quiet&&r);var a=null,o=function(){clearTimeout(a),a=setTimeout(n,i)};window.addEventListener("resize",o,{passive:!0}),e._onResize=o,r&&o()},unbind:function(e,t){window.removeEventListener("resize",e._onResize)}},f=function(e){e.directive(p.name,p)},h=f;n("1685");i["a"].use(d.a),i["a"].config.productionTip=!1,h(i["a"]),new i["a"]({render:function(e){return e(c)}}).$mount("#app")},"58ee":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("58ee"),r=n.n(i);r.a}});