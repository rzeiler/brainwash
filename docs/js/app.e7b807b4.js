(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1c5a1c0a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b021cb42"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],f=u.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),n(i)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e);var d=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/brainwash/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0591":function(e,t,n){var r={"./angular.svg":"c497","./aurelia.svg":"7004","./backbone.svg":"3034","./codepen.svg":"628f","./ember.svg":"3a11","./js-badge.svg":"4967","./jsfiddle.svg":"1beb","./npm.svg":"5ac4","./react.svg":"60f0","./vue.svg":"12aa","./yiiFramework.svg":"94fb"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="0591"},"12aa":function(e,t,n){e.exports=n.p+"img/vue.c6884b94.svg"},"1beb":function(e,t,n){e.exports=n.p+"img/jsfiddle.1f0d75a8.svg"},3034:function(e,t,n){e.exports=n.p+"img/backbone.6688e703.svg"},"3a11":function(e,t,n){e.exports=n.p+"img/ember.8430e26e.svg"},"3ddc":function(e,t,n){},4967:function(e,t,n){e.exports=n.p+"img/js-badge.5f2cd630.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/math"}},[e._v("Math")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/"}},[e._v("Memory")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,f=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"memoryField animated ",class:e.memoryFieldAnimation},e._l(e.items,(function(t){return n("div",{key:t.key,staticClass:"memoryCard animated",class:t.animation,style:{order:t.order},on:{click:function(n){return e.open(t)}}},[t.open?n("img",{attrs:{src:t.frontImage,alt:"Aurelia"}}):n("img",{attrs:{src:t.backImage,alt:"Aurelia"}})])})),0),n("button",{staticClass:"memoryCard",on:{click:e.start}},[e._v("Start")])])},l=[],p=(n("4de4"),n("7db0"),n("4160"),n("159b"),{name:"memory",data:function(){return{items:[],key:0,matches:0,openItems:[],firstCard:null,secondCard:null,memoryFieldAnimation:""}},created:function(){for(var e=[],t=["angular","backbone","yiiFramework","ember","npm","react","aurelia","jsfiddle","codepen","angular","vue","aurelia","react","backbone","npm","vue","yiiFramework","jsfiddle","ember","codepen"],r=0;r<=19;r++){this.key++;var o={framework:t[r],backImage:n("4967"),frontImage:n("0591")("./".concat(t[r],".svg")),open:!1,animation:"flipOut",order:this.key,key:this.key,find:!1};e.push(o)}this.items=e},methods:{start:function(){this.items.forEach((function(e){var t=Math.floor(12*Math.random());e.order=t,e.open=!1,e.find=!1}))},open:function(e){var t=this;e.find||(e.open=!e.open,e.animation=e.open?"flipIn":"flipOut",e.open?this.openItems.push(e):this.openItems=this.openItems.filter((function(t){return t.key!=e.key})),this.openItems.length>1&&(this.firstCard=this.openItems[0],this.secondCard=this.openItems[1],this.firstCard.frontImage==this.secondCard.frontImage?(this.openItems=[],this.firstCard.animation="tada",this.secondCard.animation="tada",this.matches++,this.matches==this.items.length/2&&(this.memoryFieldAnimation="tada"),setTimeout((function(){t.firstCard.find=!0,t.secondCard.find=!0}),1e3)):(this.openItems=[],setTimeout((function(){t.firstCard.open=!1,t.secondCard.open=!1,t.firstCard.animation=t.secondCard.open?"flipIn":"flipOut",t.secondCard.animation=t.secondCard.open?"flipIn":"flipOut"}),1e3))))}}}),m=p,g=(n("d347"),Object(i["a"])(m,d,l,!1,null,"452b3c86",null)),h=g.exports;r["a"].use(f["a"]);var v=[{path:"/",name:"memory",component:h},{path:"/Math",name:"math",component:function(){return n.e("about").then(n.bind(null,"8b62"))}}],b=new f["a"]({routes:v}),y=b,k=n("9483");Object(k["a"])("".concat("/brainwash/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(u)}}).$mount("#app")},"5ac4":function(e,t,n){e.exports=n.p+"img/npm.bbfecac0.svg"},"60f0":function(e,t,n){e.exports=n.p+"img/react.5aa11124.svg"},"628f":function(e,t,n){e.exports=n.p+"img/codepen.1a2651ae.svg"},7004:function(e,t,n){e.exports=n.p+"img/aurelia.4f8ffebf.svg"},"85ec":function(e,t,n){},"94fb":function(e,t,n){e.exports=n.p+"img/yiiFramework.86d94249.svg"},c497:function(e,t,n){e.exports=n.p+"img/angular.53073b59.svg"},d347:function(e,t,n){"use strict";var r=n("3ddc"),o=n.n(r);o.a}});
//# sourceMappingURL=app.e7b807b4.js.map