(function(e){function t(t){for(var i,u,c=t[0],a=t[1],s=t[2],d=0,f=[];d<c.length;d++)u=c[d],o[u]&&f.push(o[u][0]),o[u]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},o={app:0},r=[];function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="../";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1685:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Row",{attrs:{gutter:24}},[n("Col",{attrs:{span:"24"}},[n("Card",{attrs:{title:"谁被点击了"}},[n("Button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickoutside,expression:"clickoutside"}],on:{click:e.onClick}},[e._v(e._s(e.message))]),n("h2",[e._v("我是一个h2")]),n("p",[e._v("我是一个P元素")]),n("div",[e._v("我是一个DIV元素")])],1)],1)],1)],1)},r=[],u={components:{},data:function(){return{message:"谁被点击了",width:0,height:0,scrollTop:0}},methods:{onClick:function(e){this.message="".concat(e.target.tagName,"被点击了")},clickoutside:function(e){this.message="".concat(e.target.tagName,"被点击了")},resize:function(){this.width=window.innerWidth,this.height=window.innerHeight}},mounted:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.scrollTop=window.scrollY}},c=u,a=(n("7c55"),n("2877")),s=Object(a["a"])(c,o,r,!1,null,null,null),l=s.exports,d=n("e069"),f=n.n(d),p="@@clickoutsideContext",h={name:"click-outside",bind:function(e,t,n){var i=function(i){n.context&&!e.contains(i.target)&&(t.expression?n.context[e[p].methodName](i):e[p].bindingFn(i))};e[p]={documentHandler:i,methodName:t.expression,bindingFn:t.value},setTimeout(function(){document.addEventListener("click",i)},0)},update:function(e,t){e[p].methodName=t.expression,e[p].bindingFn=t.value},unbind:function(e){document.removeEventListener("click",e[p].documentHandler)}},v=function(e){e.directive(h.name,h)},m=v;n("1685");i["default"].use(f.a),i["default"].config.productionTip=!1,m(i["default"]),new i["default"]({render:function(e){return e(l)}}).$mount("#app")},"5ba3":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("5ba3"),o=n.n(i);o.a}});