(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-190e7bf8":"951065d5","chunk-22b860c4":"943c9ee5","chunk-57567ae1":"c7e7cf98","chunk-7e8dfc97":"2ebff64b","chunk-95587ee8":"d4b80a85"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-190e7bf8":1,"chunk-22b860c4":1,"chunk-57567ae1":1,"chunk-7e8dfc97":1,"chunk-95587ee8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-190e7bf8":"68ac80e6","chunk-22b860c4":"5777726f","chunk-57567ae1":"a88e3da7","chunk-7e8dfc97":"29e614cd","chunk-95587ee8":"846c17af"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],u=s.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var p=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4432:function(e,t,n){"use strict";var r=n("4649"),a=n.n(r);a.a},4649:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},o=[],i={name:"app"},c=i,l=n("2877"),s=Object(l["a"])(c,a,o,!1,null,null,null),u=s.exports,p=(n("c867"),n("e54f"),n("b05d"));r["a"].use(p["a"],{config:{},components:{},directives:{},plugins:{}});n("d3b7");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return this.$q.platform.is.mobile?n("div",[n("q-layout",{attrs:{view:"hHh Lpr lFf"}},[n("q-header",{staticStyle:{"font-family":"RailWay"},attrs:{reveal:"",elevated:""}},[n("div",{staticClass:"nameHeader text-h4",staticStyle:{height:"80px"}},[n("div",{staticClass:"q-pt-md text-center"},[e._v("Jose Benito Llorens")])]),n("q-separator",{attrs:{color:"white"}})],1),n("q-drawer",{staticStyle:{"font-size":"17px","font-family":"RailWay","font-weight":"700"},attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-black text-white"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("q-scroll-area",{staticClass:"fit"},e._l(e.optionTabs,(function(t,r){return n("q-list",{key:r},[n("q-item",e._b({directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(n){return e.goTo(t.value)}}},"q-item",t,!1),[n("q-item-section",[e._v(e._s(t.label))])],1),n("q-separator")],1)})),1)],1),n("q-page-container",{staticClass:"text-justified",staticStyle:{"margin-top":"2.5%","font-size":"17px","font-family":"RailWay","font-weight":"350"}},[n("q-space"),n("div",{staticClass:"row justify-center"},[n("router-view")],1)],1),n("q-page-sticky",{attrs:{expand:"",position:"top"}},[n("q-toolbar",{staticClass:"bg-black text-white"},[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),n("div",{staticClass:"q-mr-xl absolute-right q-my-md text-center",staticStyle:{"font-size":"17px","font-family":"RailWay","font-weight":"700"}},[e._v(e._s(e.$router.currentRoute.name.charAt(0).toUpperCase()+e.$router.currentRoute.name.slice(1)))])],1)],1)],1)],1):n("div",[n("q-layout",{attrs:{view:"HHh Lpr lFf"}},[n("q-header",{staticStyle:{"font-family":"RailWay"},attrs:{reveal:"",elevated:""}},[n("div",{staticClass:"nameHeader text-h3",staticStyle:{height:"80px"}},[n("div",{staticClass:"q-pt-md q-pr-xl text-right"},[e._v("Jose Benito Llorens")])]),n("q-separator",{attrs:{color:"white"}})],1),n("div",{staticStyle:{"font-weight":"100"}},[n("q-page-container",{staticClass:"text-justified",staticStyle:{"margin-top":"2.5%","font-size":"17px","font-family":"RailWay","font-weight":"350"}},[n("q-space"),n("router-view")],1)],1),n("q-page-sticky",{attrs:{expand:"",position:"top"}},[n("q-toolbar",{staticClass:"bg-black text-white text-weight-bolder"},[n("q-btn-toggle",{staticClass:"text-weight-bold",attrs:{flat:"","toggle-color":"yellow-14",options:e.optionTabs},on:{input:e.goTo},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}})],1)],1)],1)],1)},h=[],b=(n("b0c0"),{name:"LayoutDefault",data:function(){return{tabs:this.$router.currentRoute.name,optionTabs:[{label:"About",value:"about"},{label:"Curriculum",value:"curriculum"},{label:"Portfolio",value:"portfolio"},{label:"Research",value:"research"},{label:"Contact",value:"contact"}],drawer:!1}},methods:{goTo:function(e){e!==this.$router.currentRoute.name&&this.$router.push({name:e})}}}),m=b,v=(n("4432"),n("fe09")),g=Object(l["a"])(m,d,h,!1,null,null,null),y=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QLayout:v["l"],QHeader:v["f"],QSeparator:v["r"],QDrawer:v["e"],QScrollArea:v["q"],QList:v["m"],QItem:v["j"],QItemSection:v["k"],QPageContainer:v["o"],QSpace:v["s"],QPageSticky:v["p"],QToolbar:v["t"],QBtn:v["a"],QBtnToggle:v["b"]}),g.options.directives=Object.assign(Object.create(g.options.directives||null),g.options.directives||{},{Ripple:v["v"]}),r["a"].use(f["a"]);var w=new f["a"]({routes:[{path:"/",component:y,children:[{path:"",name:"about",component:function(){return n.e("chunk-95587ee8").then(n.bind(null,"0737"))}},{path:"/curriculum",name:"curriculum",component:function(){return n.e("chunk-22b860c4").then(n.bind(null,"6b04"))}},{path:"/research",name:"research",component:function(){return n.e("chunk-190e7bf8").then(n.bind(null,"b9e4"))}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("chunk-7e8dfc97").then(n.bind(null,"b17d"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-57567ae1").then(n.bind(null,"52aa"))}}]}]}),k=w;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(u)}}).$mount("#app")},c867:function(e,t,n){}});
//# sourceMappingURL=app.0ccd2cf9.js.map