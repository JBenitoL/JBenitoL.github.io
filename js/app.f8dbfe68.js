(function(t){function e(e){for(var r,a,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-29944912":"5a1dda80","chunk-44d97f08":"6611814c","chunk-64fa689a":"f7599eb2","chunk-66832609":"fc444833","chunk-68fb50f2":"78290a92"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-29944912":1,"chunk-64fa689a":1,"chunk-66832609":1,"chunk-68fb50f2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-29944912":"a88e3da7","chunk-44d97f08":"31d6cfe0","chunk-64fa689a":"68ac80e6","chunk-66832609":"4f400f34","chunk-68fb50f2":"5777726f"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var f=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4432:function(t,e,n){"use strict";var r=n("4649"),a=n.n(r);a.a},4649:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[],i={name:"app"},c=i,l=n("2877"),s=Object(l["a"])(c,a,o,!1,null,null,null),u=s.exports,f=(n("c867"),n("e54f"),n("b05d"));r["a"].use(f["a"],{config:{},components:{},directives:{},plugins:{}});n("d3b7");var p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[this.$q.platform.is.mobile?n("div",[n("q-layout",{attrs:{view:"hHh Lpr lFf"}},[n("q-header",{staticStyle:{"font-family":"RailWay"},attrs:{reveal:"",elevated:""}},[n("div",{staticClass:"nameHeader text-h4"},[n("div",{staticClass:"q-pt-md text-center"},[t._v("Jose Benito Llorens")])]),n("q-separator",{attrs:{color:"white"}})],1),n("q-drawer",{staticStyle:{"font-size":"17px","font-family":"RailWay","font-weight":"700"},attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-black text-white"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("q-scroll-area",{staticClass:"fit"},t._l(t.optionTabs,(function(e,r){return n("q-list",{key:r},[n("q-item",t._b({directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(n){return t.goTo(e.value)}}},"q-item",e,!1),[n("q-item-section",[t._v(t._s(e.label))])],1),n("q-separator")],1)})),1)],1),n("q-page-container",{staticClass:"text-justified",staticStyle:{"margin-top":"2.5%","font-size":"17px","font-family":"RailWay","font-weight":"350"}},[n("q-space"),n("div",{staticClass:"row justify-center"},[n("router-view")],1)],1),n("q-page-sticky",{attrs:{expand:"",position:"top"}},[n("q-toolbar",{staticClass:"bg-black text-white"},[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}),n("div",{staticClass:"q-mr-xl absolute-right q-my-md text-center",staticStyle:{"font-size":"17px","font-family":"RailWay","font-weight":"700"}},[t._v(t._s(t.$router.currentRoute.name.charAt(0).toUpperCase()+t.$router.currentRoute.name.slice(1)))])],1)],1)],1)],1):n("div",[n("q-layout",{attrs:{view:"HHh Lpr lFf"}},[n("q-header",{staticStyle:{"font-family":"RailWay"},attrs:{reveal:"",elevated:""}},[n("div",{staticClass:"nameHeader text-h3"},[n("div",{staticClass:"q-pt-md q-pr-xl text-right"},[t._v("Jose Benito Llorens")])]),n("q-separator",{attrs:{color:"white"}})],1),n("q-page-container",{staticClass:"text-justified",staticStyle:{"margin-top":"2.5%","font-size":"17px","font-family":"RailWay","font-weight":"350"}},[n("q-space"),n("router-view")],1),n("q-page-sticky",{attrs:{expand:"",position:"top"}},[n("q-toolbar",{staticClass:"bg-black text-white text-weight-bolder"},[n("q-btn-toggle",{staticClass:"text-weight-bold",attrs:{flat:"","toggle-color":"yellow-14",options:t.optionTabs},on:{click:function(e){return t.goTo(t.tabs)}},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}})],1)],1)],1)],1)])},h=[],m=(n("b0c0"),{name:"LayoutDefault",data:function(){return{tabs:this.$router.currentRoute.name,optionTabs:[{label:"About",value:"about"},{label:"Curriculum",value:"curriculum"},{label:"Portfolio",value:"portfolio"},{label:"Research",value:"research"},{label:"Contact",value:"contact"}],drawer:!1}},methods:{goTo:function(t){t!==this.$router.currentRoute.name&&this.$router.push({name:t})}}}),b=m,v=(n("4432"),n("fe09")),g=Object(l["a"])(b,d,h,!1,null,null,null),y=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QLayout:v["l"],QHeader:v["f"],QSeparator:v["r"],QDrawer:v["e"],QScrollArea:v["q"],QList:v["m"],QItem:v["j"],QItemSection:v["k"],QPageContainer:v["o"],QSpace:v["s"],QPageSticky:v["p"],QToolbar:v["t"],QBtn:v["a"],QBtnToggle:v["b"]}),g.options.directives=Object.assign(Object.create(g.options.directives||null),g.options.directives||{},{Ripple:v["v"]}),r["a"].use(p["a"]);var w=new p["a"]({routes:[{path:"/",component:y,children:[{path:"",name:"about",component:function(){return n.e("chunk-66832609").then(n.bind(null,"0737"))}},{path:"/curriculum",name:"curriculum",component:function(){return n.e("chunk-68fb50f2").then(n.bind(null,"6b04"))}},{path:"/research",name:"research",component:function(){return n.e("chunk-64fa689a").then(n.bind(null,"b9e4"))}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("chunk-44d97f08").then(n.bind(null,"b17d"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-29944912").then(n.bind(null,"52aa"))}}]}]}),k=w;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(t){return t(u)}}).$mount("#app")},c867:function(t,e,n){}});
//# sourceMappingURL=app.f8dbfe68.js.map