(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57567ae1"],{"52aa":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return this.$q.platform.is.mobile?s("div",[s("ContactViewMob")],1):s("div",[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-3"}),s("div",{staticClass:"col-6"},[s("ContactView")],1),s("div",{staticClass:"col-3"})])])},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-page",{staticClass:"q-pa-md q-pt-xl"},[a("a",{attrs:{href:"https://www.linkedin.com/in/jbenitollorens/"}},[a("q-img",{staticClass:"center",staticStyle:{"max-width":"5%"},attrs:{src:s("9b7e")}}),a("q-tooltip",[t._v("My Linkedin")])],1),a("q-input",{staticClass:"q-mt-xl",attrs:{outlined:"",id:"email",label:"Your email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mail"}})]},proxy:!0}]),model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),a("q-space"),a("q-input",{staticClass:"q-mt-xl",attrs:{outlined:"",id:"subject",label:"Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("q-space"),a("q-input",{staticClass:"q-my-md",staticStyle:{width:"auto"},attrs:{outlined:"",id:"message",type:"textarea",label:"Your message"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("div",{staticClass:"row full-height justify-center"},[a("q-btn",{staticClass:"justify-center",attrs:{color:"black","icon-right":"send",label:"Send"},on:{click:t.sendMail}})],1)],1)],1)},l=[],c=(s("99af"),{name:"about",data:function(){return{mail:"",text:"",subject:""}},methods:{sendMail:function(){console.log("898");var t=this.subject,e=this.text,s=this.mail;console.log(t),console.log(e);var a=new XMLHttpRequest,n="https://frpuocxxql.execute-api.eu-west-3.amazonaws.com/dev/users/create";console.log(0),a.open("POST",n,!0),console.log(2),a.setRequestHeader("Content-Type","application/json"),a.onreadystatechange=function(){4===a.readyState&&a.status},console.log(3);var o=JSON.stringify({message:e,Subject:t,emailTo:s});console.log("message=".concat(e,"&Subject=").concat(t,"&emailTo=").concat(s)),console.log(4),a.send(o),console.log(5)}}}),i=c,u=(s("cdda"),s("2877")),r=s("fe09"),p=Object(u["a"])(i,o,l,!1,null,null,null),d=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QPage:r["n"],QImg:r["h"],QTooltip:r["u"],QInput:r["i"],QIcon:r["g"],QSpace:r["s"],QBtn:r["a"]});var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-page",{staticClass:"q-pa-md q-pt-xl"},[a("a",{attrs:{href:"https://www.linkedin.com/in/jbenitollorens/"}},[a("q-img",{staticClass:"center",staticStyle:{"max-width":"15%"},attrs:{src:s("9b7e")}}),a("q-tooltip",[t._v("My Linkedin")])],1),a("q-input",{staticClass:"q-mt-xl",staticStyle:{width:"300px"},attrs:{outlined:"",id:"email",label:"Your email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mail"}})]},proxy:!0}]),model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),a("q-space"),a("q-input",{staticClass:"q-mt-xl",attrs:{outlined:"",id:"subject",label:"Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("q-space"),a("q-input",{staticClass:"q-my-md",staticStyle:{width:"auto"},attrs:{outlined:"",id:"message",type:"textarea",label:"Your message"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("div",{staticClass:"row full-height justify-center"},[a("q-btn",{staticClass:"justify-center",attrs:{color:"black","icon-right":"send",label:"Send"},on:{click:t.sendMail}})],1)],1)],1)},b=[],g={name:"about",data:function(){return{mail:"",text:"",subject:""}},methods:{sendMail:function(){console.log("898");var t=this.subject,e=this.text,s=this.mail;console.log(t),console.log(e);var a=new XMLHttpRequest,n="https://frpuocxxql.execute-api.eu-west-3.amazonaws.com/dev/users/create";console.log(0),a.open("POST",n,!0),console.log(2),a.setRequestHeader("Content-Type","application/json"),a.onreadystatechange=function(){4===a.readyState&&a.status},console.log(3);var o=JSON.stringify({message:e,Subject:t,emailTo:s});console.log("message=".concat(e,"&Subject=").concat(t,"&emailTo=").concat(s)),console.log(4),a.send(o),console.log(5)}}},f=g,x=Object(u["a"])(f,m,b,!1,null,null,null),q=x.exports;x.options.components=Object.assign(Object.create(x.options.components||null),x.options.components||{},{QPage:r["n"],QImg:r["h"],QTooltip:r["u"],QInput:r["i"],QIcon:r["g"],QSpace:r["s"],QBtn:r["a"]});var h={name:"contact",components:{ContactView:d,ContactViewMob:q}},j=h,v=Object(u["a"])(j,a,n,!1,null,null,null);e["default"]=v.exports},"9b7e":function(t,e,s){t.exports=s.p+"img/LinkedinLogo.1a9291b1.png"},cdda:function(t,e,s){"use strict";var a=s("d4e8"),n=s.n(a);n.a},d4e8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-57567ae1.c434d6d9.js.map