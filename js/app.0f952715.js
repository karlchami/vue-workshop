(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&v.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-workshop/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"03ee":function(t,e,n){t.exports=n.p+"img/zoom.64eb30a8.svg"},"0df1":function(t,e,n){t.exports=n.p+"img/nitendo.d59eedb9.svg"},1402:function(t,e,n){t.exports=n.p+"img/google.c56ed6f0.svg"},"17d4":function(t,e,n){},"1c7b":function(t,e,n){},"1cd2":function(t,e,n){},"1d06":function(t,e,n){t.exports=n.p+"img/buzzfeed.d11c3cbf.svg"},"346e":function(t,e,n){t.exports=n.p+"img/vue-logo.22efb7c2.svg"},"65d6":function(t,e,n){"use strict";n("affd")},"85ec":function(t,e,n){},"95d3":function(t,e,n){"use strict";n("a125")},"9c0f":function(t,e,n){var i={"./buzzfeed.svg":"1d06","./fb.svg":"e3e6","./gitlab.svg":"fac5","./google.svg":"1402","./nitendo.svg":"0df1","./vue-logo.svg":"346e","./zoom.svg":"03ee"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="9c0f"},a125:function(t,e,n){},affd:function(t,e,n){},b6ae:function(t,e,n){"use strict";n("1cd2")},ca64:function(t,e,n){t.exports=n.p+"img/mvvm.f7d5c712.png"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("meta",{attrs:{name:"viewport",content:"initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}}),n("router-view")],1)},o=[],a={name:"Home",components:{},methods:{}},r=a,c=(n("034f"),n("2877")),l=Object(c["a"])(r,s,o,!1,null,null,null),u=l.exports,d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"main-container container-height",attrs:{fluid:"",id:"main-background"}},[n("v-layout",{attrs:{"fill-height":""}},[n("transition",{attrs:{name:"fade",appear:""}},[n("MainPage",{directives:[{name:"show",rawName:"v-show",value:t.showMain,expression:"showMain"}],on:{start:t.getStarted}})],1),n("transition",{attrs:{name:"slide-down-fade"}},[n("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{"align-center":"","justify-center":""}},[n("v-layout",{staticClass:"layout-parent",attrs:{"align-center":"","justify-center":""}},[n("transition",{attrs:{name:"slide-left-fade"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"custom-click",attrs:{disabled:t.disabledLeft,icon:""},on:{click:function(e){return t.setPageIndex(-1)}}},[n("v-icon",{attrs:{size:"50"}},[t._v("mdi-chevron-left-circle")])],1)],1),n("v-container",{staticClass:"align-center card-container"},[n("transition",{attrs:{name:"slide-right-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"pageButtons mb-3",attrs:{align:"center"}},t._l(t.menuButtons,(function(e,i){return n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:e.label,staticClass:"white--text custom-click ml-1 mr-1",attrs:{color:"rgba(0, 0, 0, 0.303)",disabled:e.disabled},on:{click:function(e){return t.clickMenuButton(i)}}},[t._v(t._s(e.label))])})),1)]),n("transition",{attrs:{name:"slide-up-fade"}},[n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{color:"rgba(0, 0, 0, 0.303)",height:"15",value:t.pageValue}})],1),n("v-card",{staticClass:"main-card no-select",attrs:{id:"watch-scroll",height:"720"},on:{scroll:t.scrollActions}},[n("transition",{attrs:{name:t.pageTransition}},[n("IntroPage",{directives:[{name:"show",rawName:"v-show",value:t.menuButtonsDisabled[0],expression:"menuButtonsDisabled[0]"}]})],1),n("transition",{attrs:{name:t.pageTransition}},[n("whatIs",{directives:[{name:"show",rawName:"v-show",value:t.menuButtonsDisabled[1],expression:"menuButtonsDisabled[1]"}]})],1),n("transition",{attrs:{name:t.pageTransition}},[n("component-structure",{directives:[{name:"show",rawName:"v-show",value:t.menuButtonsDisabled[2],expression:"menuButtonsDisabled[2]"}]})],1),n("transition",{attrs:{name:t.pageTransition}},[n("component-inside",{directives:[{name:"show",rawName:"v-show",value:t.menuButtonsDisabled[3],expression:"menuButtonsDisabled[3]"}]})],1)],1)],1),n("transition",{attrs:{name:"slide-right-fade"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"custom-click",attrs:{disabled:t.disabledRight,icon:""},on:{click:function(e){return t.setPageIndex(1)}}},[n("v-icon",{attrs:{size:"50"}},[t._v("mdi-chevron-right-circle")])],1)],1)],1)],1)],1)],1)],1)},m=[],f=(n("d81d"),n("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{attrs:{align:"center"}},[i("transition",{attrs:{name:"slide-fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.exit,expression:"!exit"}],staticClass:"mt-12 mb-12",attrs:{width:"300",src:n("346e")}})]),i("transition",{attrs:{name:"slide-left-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.exit,expression:"!exit"}],staticClass:"console-container mt-10 mb-12"},[i("span",{attrs:{id:"text"}}),i("div",{staticClass:"console-underscore",attrs:{id:"console"}},[t._v("_")])])]),i("ParticleEffectButton",{attrs:{visible:t.btnOps.visible,animating:t.btnOps.animating,options:t.btnOps,cls:"btn-cls mt-12"},on:{"update:visible":function(e){return t.$set(t.btnOps,"visible",e)},"update:animating":function(e){return t.$set(t.btnOps,"animating",e)}}},[t._v(" Let's get started! ")]),i("button",{on:{click:function(e){t.btnOps.visible=!t.btnOps.visible}}})],1)])}),b=[],h=n("90ea"),p=n.n(h);function g(t,e,n){void 0===n&&(n=["#fff"]);var i=!0,s=document.getElementById("console"),o=1,a=1,r=!1,c=document.getElementById(e);c.setAttribute("style","color:"+n[0]),window.setInterval((function(){0===o&&!1===r?(r=!0,c.innerHTML=t[0].substring(0,o),window.setTimeout((function(){var e=n.shift();n.push(e);var i=t.shift();t.push(i),a=1,c.setAttribute("style","color:"+n[0]),o+=a,r=!1}),1e3)):o===t[0].length+1&&!1===r?(r=!0,window.setTimeout((function(){a=-1,o+=a,r=!1}),500)):!1===r&&(c.innerHTML=t[0].substring(0,o),o+=a)}),120),window.setInterval((function(){!0===i?(s.className="console-underscore hidden",i=!1):(s.className="console-underscore",i=!0)}),400)}n("da9b"),n("ec5b");var w={name:"Base",components:{ParticleEffectButton:p.a},data:function(){var t=this;return{typingText:{id:"text",text:["Hey you!","Welcome to my Vue.js tutorial","Made with love ♡ by Karl-Joey Chami."],color:["white","white","#e64c4c"]},btnOps:{type:"circle",easing:"easeOutCirc",size:2,particlesAmountCoefficient:10,oscillationCoefficient:100,color:function(){return Math.random()<.5?"#2F7968":"#ffffff"},onComplete:function(){t.exit=!0,t.$emit("start","true")},onBegin:function(){},visible:!0,animating:!1},exit:!1}},mounted:function(){g(this.typingText.text,this.typingText.id,this.typingText.color)},computed:{},created:function(){},destroyed:function(){},methods:{}},_=w,C=Object(c["a"])(_,f,b,!1,null,"92627436",null),y=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5 ml-5"},[n("h1",[t._v("Welcome to "),n("i",{staticClass:"workshop-title"},[t._v("Vue.js"),t._v(" Workshop")])]),n("div",{staticClass:"mt-1"},[t._v(" The goal of this workshop is to demonstrate the main concepts behind this framework."),n("br"),n("br"),t._v(" If you are a beginner or an intermediate Vue.js developer, this workshop is for you."),n("br"),t._v(" If you don't know where to start when implementing a feature, or if you endlessly scroll up"),n("br"),t._v(" and down a component file without proper understanding of what to do, this workshop is for you as well."),n("br"),n("br"),n("br"),t._v("You will learn about the following topics"),n("br"),n("ul",{staticClass:"mt-1 mb-10"},[n("li",[t._v("What is Vue.js")]),n("li",[t._v("Structuring Components")]),n("li",[t._v("What is inside a Vue Component?")]),n("ul",[n("li",[t._v("Template, Script, and Style")]),n("li",[t._v("Conditional rendering and DOM")]),n("li",[t._v("A deeper look into the Script section")]),n("ul",[n("li",[t._v("Local state management")]),n("li",[t._v("Methods")]),n("li",[t._v("Lifecycle hooks")]),n("li",[t._v("Watchers and Computed properties")])])]),n("li",[t._v("Components communication")]),n("ul",[n("li",[t._v("Props and Emissions")]),n("li",[t._v("VueX Global State Management")])]),n("li",[t._v("Scalability and Reusability")])])])])},k=[];n("da9b"),n("ec5b");var M={name:"introPage",components:{},data:function(){return{}},mounted:function(){},computed:{},created:function(){},destroyed:function(){},methods:{}},T=M,j=(n("cd64"),Object(c["a"])(T,x,k,!1,null,"9185c062",null)),I=j.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mt-5 ml-5 mb-10"},[i("v-row",{staticClass:"justify-center align-center"},[i("v-col",[i("h1",[t._v("What is "),i("strong",[t._v("Vue.js")]),t._v(" ?")]),i("div",{staticClass:"ml-10 mt-5"},[i("div",{staticClass:"mb-1"},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-vuejs")]),t._v(" Javascript Framework ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-television-guide")]),t._v(" Front-End ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-open-source-initiative")]),t._v(" Open Source ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-calendar-range")]),t._v(" First release on February 2014 ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-face-man")]),t._v(" Created by Evan You ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-earth")]),t._v(" Used by 3,383 global companies ")],1)])]),i("v-col",{attrs:{align:"center","justify-center":""}},[i("div",{staticClass:"box"},t._l(t.pics,(function(e){return i("img",{staticClass:"logos",attrs:{src:t.getImageSrc(e)}})})),0)])],1),i("v-row",{staticClass:"justify-center align-center"},[i("v-col",[i("h1",[t._v("Why "),i("strong",[t._v("Vue.js")]),t._v(" ?")]),i("div",{staticClass:"ml-10 mt-5"},[i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-resize")]),t._v(" Lightweight (18–21 kb) ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-speedometer")]),t._v(" High Performance ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-chart-bell-curve-cumulative")]),t._v(" Fast learning curve ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-file-document")]),t._v(" Detailed documentation ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-account-group")]),t._v(" Community support ")],1),i("div",{staticClass:"mb-2"},[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-earth-box")]),t._v(" Best of both worlds (Angular.js, React.js) ")],1),i("div",[i("v-icon",{staticClass:"pb-1",attrs:{color:"white"}},[t._v("mdi-video-input-component")]),t._v(" MVVM Architecture ")],1)])]),i("v-col",{attrs:{align:"center",justify:"center"}},[i("div",[i("img",{staticClass:"mvvm",attrs:{src:n("ca64")}})])])],1)],1)},O=[];n("da9b"),n("ec5b");var S={name:"introPage",components:{},data:function(){return{pics:["buzzfeed","gitlab","google","nitendo","fb","zoom"]}},mounted:function(){},computed:{},created:function(){},destroyed:function(){},methods:{getImageSrc:function(t){return n("9c0f")("./".concat(t,".svg"))}}},L=S,E=(n("65d6"),Object(c["a"])(L,B,O,!1,null,"7c72abf2",null)),P=E.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"m-5"},[i("h1",[i("strong",[t._v("Components Structure")])]),i("div",{staticClass:"ml-10 mt-5"},[i("h2",[t._v("What is a Vue.js component?")])]),i("v-row",[i("v-col",[i("div",{staticClass:"ml-12 mt-12 bottom-marg"},[t._v(" A single page is composed of one or more components."),i("br"),i("br"),t._v(" Each component is a self-contained piece of user interface consisting of HTML elements, Javascript functionality, and CSS properties. "),i("br"),i("br"),t._v(" If abstracted properly, a component can be reused in different parts of the application. "),i("br"),i("br"),t._v(" A component can be contained within another component."),i("br"),t._v(" We respectively call them parent and child components. "),i("br"),i("br"),i("i",[t._v("Some examples")]),t._v(" of components that can be contained in a typical Home page are "),i("strong",[t._v("Navigation Bar, Header, Footer, Introduction section, About Us section, and Contact us section.")])])]),i("v-col",{attrs:{align:"center"}},[i("img",{staticClass:"comp-img",attrs:{justify:"top",src:n("e85d")}})])],1),i("div",{staticClass:"ml-10 mt-12"},[i("h2",[t._v("Why a component architecture?")])]),i("v-row",{staticClass:"mb-5"},[i("v-col",[i("div",{staticClass:"ml-12 mt-5"},[t._v(" The component architecture is not exclusively a Vue.js feature."),i("br"),t._v(" It is in fact used in other component-based frameworks such as "),i("v-icon",{attrs:{color:"white"}},[t._v("mdi-react")]),t._v(" React.js and "),i("v-icon",{attrs:{color:"white"}},[t._v("mdi-angular")]),t._v(" Angular.js"),i("br"),i("br"),i("h3",[i("strong",[t._v("The alternative? "),i("v-icon",{attrs:{color:"red"}},[t._v("mdi-close-thick")])],1)]),i("ul",[i("v-icon",{attrs:{color:"red"}},[t._v("mdi-xml")]),t._v(" Long files"),i("br"),i("v-icon",{attrs:{color:"red"}},[t._v("mdi-telescope")]),t._v(" Big scope"),i("br"),i("v-icon",{attrs:{color:"red"}},[t._v("mdi-trending-up")]),t._v(" High Coupling"),i("br"),i("v-icon",{attrs:{color:"red"}},[t._v("mdi-trending-down")]),t._v(" Low Cohesion"),i("br")],1),i("br"),i("h3",[i("strong",[t._v("The benefits? "),i("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-bold")])],1)]),i("ul",[i("v-icon",{attrs:{color:"green"}},[t._v("mdi-code-tags-check")]),t._v(" Readable files"),i("br"),i("v-icon",{attrs:{color:"green"}},[t._v("mdi-microscope")]),t._v(" Smaller scope"),i("br"),i("v-icon",{attrs:{color:"green"}},[t._v("mdi-trending-down")]),t._v(" Low Coupling"),i("br"),i("v-icon",{attrs:{color:"green"}},[t._v("mdi-trending-up")]),t._v(" High Cohesion"),i("br"),i("v-icon",{attrs:{color:"green"}},[t._v("mdi-test-tube")]),t._v(" Better Testing"),i("br")],1),i("br"),i("h4",[i("strong",[t._v("Conclusion "),i("v-icon",{attrs:{color:"white"}},[t._v("mdi-file-edit")])],1)]),i("div",{staticClass:"ml-5"},[t._v(" A component-based architecture in the front-end is the equivalent of using object oriented concepts in the back-end. ")])],1)])],1)],1)},N=[];n("da9b"),n("ec5b");var F={name:"introPage",components:{},data:function(){return{}},mounted:function(){},computed:{},created:function(){},destroyed:function(){},methods:{}},H=F,V=(n("b6ae"),Object(c["a"])(H,D,N,!1,null,"3534f00d",null)),A=V.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"m-5"},[n("h1",[t._v("What's inside a "),n("strong",[t._v("Vue Component")]),t._v("?")]),n("v-row",{staticClass:"mb-5 mt-12"},[n("v-col",{staticClass:"bottom-marg"},[n("prism-editor",{staticClass:"my-editor",attrs:{highlight:t.highlighter,readonly:"","line-numbers":""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("v-col",{attrs:{align:"center"}},[n("div",{staticClass:"box p-3",attrs:{align:"left"}},[n("div",{staticClass:"m-4"},[n("v-icon",[t._v("mdi-language-html5")]),n("strong",[t._v(" HTML")])],1),n("v-btn",{staticClass:"ml-8"},[t._v("Click me")]),n("v-divider"),n("div",{staticClass:"m-4"},[n("v-icon",[t._v("mdi-language-html5")]),n("strong",[t._v(" HTML")]),t._v(" + "),n("v-icon",[t._v("mdi-language-javascript")]),n("strong",[t._v(" Javascript")])],1),n("v-row",[n("v-col",[n("v-btn",{staticClass:"ml-8",on:{click:function(e){return t.buttonClick1()}}},[t._v("Click me")])],1),n("v-col",[n("strong",{directives:[{name:"show",rawName:"v-show",value:t.showText1,expression:"showText1"}]},[t._v("Hello")])])],1),n("v-divider"),n("div",{staticClass:"m-4"},[n("v-icon",[t._v("mdi-language-html5")]),n("strong",[t._v(" HTML")]),t._v(" + "),n("v-icon",[t._v("mdi-language-javascript")]),n("strong",[t._v(" Javascript")]),t._v(" + "),n("v-icon",[t._v("mdi-language-css3")]),n("strong",[t._v(" CSS")])],1),n("v-row",[n("v-col",[n("v-btn",{staticClass:"ml-8",attrs:{color:"green",dark:""},on:{click:function(e){return t.buttonClick2()}}},[t._v("Click me")])],1),n("v-col",[n("strong",{directives:[{name:"show",rawName:"v-show",value:t.showText2,expression:"showText2"}]},[t._v("Hello")])])],1)],1)])],1),n("br"),n("br"),n("v-row",[n("v-col",[n("div",[n("h2",[n("strong",[t._v("<template>")])]),n("div",{staticClass:"mt-5 ml-5"},[t._v("Content")])]),n("br"),n("br"),n("div",[n("h2",[n("strong",[t._v("<script>")])]),n("div",{staticClass:"mt-5 ml-5"},[t._v("Content")])]),n("br"),n("br"),n("div",[n("h2",[n("strong",[t._v("<style>")])]),n("div",{staticClass:"mt-5 ml-5"},[t._v("Content")])])])],1)],1)},W=[],$=n("e57a"),J=(n("cabf"),n("8c7a"));n("cb55"),n("416b"),n("84bf");n("da9b"),n("ec5b");var R={name:"introPage",components:{PrismEditor:$["a"]},data:function(){return{showText1:!1,showText2:!1,code:'<template>\n    <v-btn class="button1" @click="doSomething()">\n        Click me\n    </v-btn>\n</template>\n\n<script>\n    ...\n    doSomething(){\n        console.log("Button Clicked");\n        this.showText = !this.showText;\n    }\n    ...\n<\/script>\n\n<style scoped>\n    .button1 {\n        color: white;\n        background-color: green;\n    }\n</style>'}},mounted:function(){},computed:{},created:function(){},destroyed:function(){},methods:{highlighter:function(t){return Object(J["highlight"])(t,J["languages"].js)},buttonClick1:function(){console.log("Button Clicked"),this.showText1=!this.showText1},buttonClick2:function(){console.log("Button Clicked"),this.showText2=!this.showText2}}},U=R,Y=(n("95d3"),Object(c["a"])(U,z,W,!1,null,"2096fb52",null)),q=Y.exports,G=n("3835"),K=(n("ac1f"),n("1276"),n("fb6a"),n("d3b7"),n("25f0"),function(t,e,n,i){var s,o,a,r,c,l,u,d=parseInt,v=Math.round,m="string"==typeof n;if("number"!=typeof t||t<-1||t>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||n&&!m)return null;var f=function(t){var e=t.length,n={};if(e>9){var i,r;if(i=t=t.split(","),r=Object(G["a"])(i,4),s=r[0],o=r[1],a=r[2],m=r[3],e=t.length,e<3||e>4)return null;n.r=d("a"==s[3]?s.slice(5):s.slice(4)),n.g=d(o),n.b=d(a),n.a=m?parseFloat(m):-1}else{if(8==e||6==e||e<4)return null;e<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(e>4?t[4]+t[4]:"")),t=d(t.slice(1),16),9==e||5==e?(n.r=t>>24&255,n.g=t>>16&255,n.b=t>>8&255,n.a=v((255&t)/.255)/1e3):(n.r=t>>16,n.g=t>>8&255,n.b=255&t,n.a=-1)}return n};return u=e.length>9,u=m?n.length>9||"c"==n&&!u:u,c=f(e),r=t<0,l=n&&"c"!=n?f(n):r?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},t=r?-1*t:t,r=1-t,c&&l?(i?(s=v(r*c.r+t*l.r),o=v(r*c.g+t*l.g),a=v(r*c.b+t*l.b)):(s=v(Math.pow(r*Math.pow(c.r,2)+t*Math.pow(l.r,2),.5)),o=v(Math.pow(r*Math.pow(c.g,2)+t*Math.pow(l.g,2),.5)),a=v(Math.pow(r*Math.pow(c.b,2)+t*Math.pow(l.b,2),.5))),m=c.a,l=l.a,c=m>=0||l>=0,m=c?m<0?l:l<0?m:m*r+l*t:0,u?"rgb"+(c?"a(":"(")+s+","+o+","+a+(c?","+v(1e3*m)/1e3:"")+")":"#"+(4294967296+16777216*s+65536*o+256*a+(c?v(255*m):0)).toString(16).slice(1,c?void 0:-2)):null});n("da9b"),n("ec5b"),n("1c7b");var X={name:"Base",components:{MainPage:y,IntroPage:I,whatIs:P,componentStructure:A,componentInside:q},data:function(){return{showMain:!0,showMenu:!1,pageValue:0,menuButtonsDisabled:[!0,!1,!1,!1],pageIndex:0,pageTransition:"slide-custom-l-fade"}},computed:{menuButtons:function(){return{0:{label:"Table of Contents",disabled:this.menuButtonsDisabled[0]},1:{label:"Introduction",disabled:this.menuButtonsDisabled[1]},2:{label:"Component Structure",disabled:this.menuButtonsDisabled[2]},3:{label:"Inside a Component",disabled:this.menuButtonsDisabled[3]}}},disabledLeft:function(){return 0===this.pageIndex},disabledRight:function(){return this.pageIndex===this.menuButtonsDisabled.length-1}},created:function(){},watch:{pageIndex:{handler:function(t,e){this.pageTransition=t>e?"slide-custom-l-fade":"slide-custom-r-fade";var n=this.menuButtonsDisabled.map((function(e,n){return n===t}));this.menuButtonsDisabled=n,document.getElementById("watch-scroll").scrollTop=0}}},methods:{getStarted:function(){this.showMain=!1,setTimeout(this.activateMenu,1200)},activateMenu:function(){this.showMenu=!0},scrollLevel:function(){var t=document.getElementById("watch-scroll"),e=t.scrollHeight;if(0===t.scrollTop)return t.scrollTop/e;var n=t.scrollTop+t.clientHeight;return n/e},scrollActions:function(){var t=this.scrollLevel();this.pageValue=100*t;var e=K(this.scrollLevel(),"#35916c","#223c5c"),n=K(this.scrollLevel(),"#223c5c","#35916c"),i="linear-gradient(to bottom, ".concat(e,", ").concat(n,")");document.getElementById("main-background").style.backgroundImage=i},clickMenuButton:function(t){this.pageIndex=parseInt(t)},setPageIndex:function(t){this.pageIndex+=t}}},Q=X,Z=Object(c["a"])(Q,v,m,!1,null,"52d7af82",null),tt=Z.exports;i["default"].use(d["a"]);var et=[{path:"/",name:"Base",component:tt}],nt=new d["a"]({routes:et}),it=nt,st=n("2f62");i["default"].use(st["a"]);var ot=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),at=n("5f5b"),rt=(n("ab8b"),n("2dd8"),n("159b"),new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enter"),e.unobserve(t.target))}))}))),ct={bind:function(t){t.classList.add("before-enter"),rt.observe(t)}},lt=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enterleft"),e.unobserve(t.target))}))})),ut={bind:function(t){t.classList.add("before-enterleft"),lt.observe(t)}},dt=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("leave"),e.unobserve(t.target))}))})),vt={bind:function(t){t.classList.add("before-leave"),dt.observe(t)}},mt=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("rotate"),e.unobserve(t.target))}))})),ft={bind:function(t){t.classList.add("before-rotate"),mt.observe(t)}},bt=n("ce5b"),ht=n.n(bt);n("bf40");i["default"].use(ht.a);var pt=new ht.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#00549a",secondary:"#003778",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});n("5363");i["default"].directive("scrollanimation",ct),i["default"].directive("scrollanimationleft",ut),i["default"].directive("scrolldisappear",vt),i["default"].directive("scrollrotate",ft),i["default"].use(at["a"]),i["default"].config.productionTip=!1,new i["default"]({router:it,store:ot,vuetify:pt,render:function(t){return t(u)}}).$mount("#app")},cd64:function(t,e,n){"use strict";n("17d4")},da9b:function(t,e,n){},e3e6:function(t,e,n){t.exports=n.p+"img/fb.093d926c.svg"},e85d:function(t,e,n){t.exports=n.p+"img/components.45abef24.png"},ec5b:function(t,e,n){},fac5:function(t,e,n){t.exports=n.p+"img/gitlab.b31ea84d.svg"}});
//# sourceMappingURL=app.0f952715.js.map