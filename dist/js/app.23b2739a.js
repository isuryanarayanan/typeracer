(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],u=0,_=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&_.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);p&&p(t);while(_.length)_.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/typeracer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1)],1)},r=[],o={name:"App",components:{},data:function(){return{}},mounted:function(){this.$store.dispatch("get_text")}},i=o,c=(a("5c0b"),a("2877")),l=a("6544"),p=a.n(l),u=a("7496"),_=a("f6c4"),g=Object(c["a"])(i,n,r,!1,null,null,null),m=g.exports;p()(g,{VApp:u["a"],VMain:_["a"]});var d=a("9483");Object(d["a"])("".concat("/typeracer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[[a("v-sheet",{staticClass:"overflow-hidden"},[a("v-app-bar",{attrs:{absolute:"",color:"#000",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3"},scopedSlots:e._u([{key:"img",fn:function(t){var s=t.props;return[a("v-img",e._b({attrs:{gradient:"to top right, rgba(10,15,201,.7), rgba(25,32,72,.7)"}},"v-img",s,!1))]}},{key:"extension",fn:function(){return[a("v-tabs",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[a("v-tab",[e._v("Play")]),a("v-tab",[e._v("Stats")]),a("v-tab",[e._v("Practice")]),a("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[a("v-tab-item",[a("Racer")],1),a("v-tab-item",[a("Stats")],1),a("v-tab-item")],1)],1)]},proxy:!0}])},[a("v-app-bar-nav-icon",{on:{click:e.open}}),a("v-toolbar-title",{staticClass:"display-2"},[e._v("Typeracer")]),a("v-spacer")],1)],1)]],2)},h=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-sheet",[a("div",{staticClass:"info-field"},[a("v-icon",[e._v("mdi-access-point")]),e._v(" The words are random ")],1),a("p",{staticClass:"type-text",domProps:{innerHTML:e._s(e.type_message.selected_message)}}),a("v-btn",{attrs:{small:"",dark:"",disabled:e.type_state.flag},on:{click:function(t){return e.$store.dispatch("get_text")}}},[e._v("Get another snippet")])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-sheet",[a("v-text-field",{ref:"inpTxt",staticClass:"input-field",attrs:{placeholder:e.type_state.message,disabled:e.type_state.lock},on:{input:e.POOP},model:{value:e.inpTxt,callback:function(t){e.inpTxt=t},expression:"inpTxt"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.type_state.flag,expression:"type_state.flag"}],staticClass:"info-field"},[a("v-icon",[e._v("mdi-access-point")]),e._v(" You can start typing ")],1),a("v-btn",{attrs:{disabled:e.type_state.flag,color:"success"},on:{click:function(t){return e.start()}}},[e._v("Start "),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.type_state.timer,expression:"type_state.timer"}]},[e._v("mdi-arrow-right")]),a("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:!e.type_state.timer&&!e.type_state.flag,expression:"!type_state.timer && !type_state.flag"}],attrs:{indeterminate:"",color:"white",size:20}}),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.type_state.flag,expression:"type_state.flag"}]},[e._v("mdi-pencil")])],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("p",[a("v-sheet",{directives:[{name:"show",rawName:"v-show",value:!this.type_state.completed,expression:"!this.type_state.completed"}],attrs:{dark:""}},[e._v(e._s(e.curTxt))])],1)])],1)],1)},b=[],w=(a("ac1f"),a("1276"),a("5530")),x=a("2f62"),T={name:"Racer",data:function(){return{inpTxt:null,curTxt:null,charCheckFor:" "}},computed:Object(w["a"])({},Object(x["b"])({type_state:"get_type_state",type_message:"get_type_message",validated_input:"get_validated_input"})),methods:{start:function(){this.$store.dispatch("start");var e=this.$refs;setTimeout((function(){e.inpTxt.focus(),this.inpTxt=null}),3010)},POOP:function(){var e=this.inpTxt;if(e){var t=this.type_message.pure_message.split(" ");this.type_message.count+1==t.length-1?this.charCheckFor=".":this.charCheckFor=" ",e.substr(e.length-1)==this.charCheckFor&&(this.$store.commit("increment_count"),"."==this.charCheckFor?this.$store.dispatch("validate",e.substr(0,e.length)):this.$store.dispatch("validate",e.substr(0,e.length-1)),this.type_message.validated_input?(this.inpTxt=null,"."==this.charCheckFor&&(this.charCheckFor=" ")):this.$store.commit("decrement_count"))}this.curTxt=e}}},k=T,O=(a("574d"),a("8336")),C=a("62ad"),V=a("a523"),j=a("132d"),S=a("490a"),P=a("0fd9"),$=a("8dd9"),F=a("8654"),N=Object(c["a"])(k,y,b,!1,null,"fa532270",null),I=N.exports;p()(N,{VBtn:O["a"],VCol:C["a"],VContainer:V["a"],VIcon:j["a"],VProgressCircular:S["a"],VRow:P["a"],VSheet:$["a"],VTextField:F["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"stats-container"},[a("v-simple-table",{attrs:{dark:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" GameId")]),a("th",{staticClass:"text-left"},[e._v(" Text")]),a("th",{staticClass:"text-left"},[e._v(" wpm")])])]),a("tbody",e._l(e.games,(function(t){return a("tr",{key:t.gameId},[a("td",[e._v(e._s(t.gameId))]),a("td",[e._v(e._s(t.gameText))]),a("td",[e._v(e._s(t.wpm))])])})),0)])],1)},M=[],E={name:"Stats",computed:Object(w["a"])({},Object(x["b"])({games:"get_games"})),methods:{}},R=E,B=(a("cdb3"),a("1f4f")),D=Object(c["a"])(R,A,M,!1,null,"27e19f92",null),H=D.exports;p()(D,{VContainer:V["a"],VSimpleTable:B["a"]});var q={name:"Home",components:{Racer:I,Stats:H},data:function(){return{tabs:null}}},G=q,J=a("40dc"),L=a("5bc1"),z=a("adda"),X=a("2fa4"),Y=a("71a3"),K=a("c671"),Q=a("fe57"),U=a("aac8"),W=a("2a7f"),Z=Object(c["a"])(G,v,h,!1,null,null,null),ee=Z.exports;p()(Z,{VAppBar:J["a"],VAppBarNavIcon:L["a"],VImg:z["a"],VSheet:$["a"],VSpacer:X["a"],VTab:Y["a"],VTabItem:K["a"],VTabs:Q["a"],VTabsItems:U["a"],VToolbarTitle:W["a"]}),s["a"].use(f["a"]);var te=[{path:"/",name:"Home",component:ee}],ae=new f["a"]({mode:"history",base:"/typeracer/",routes:te}),se=ae;a("fb6a"),a("d3b7");s["a"].use(x["a"]);var ne=new x["a"].Store({state:{api_endpoint:"http://www.randomtext.me/api/gibberish/p-1/25-35?_=1608182114179",type_message:{count:-1,selected_message:null,pure_message:null,validated_input:!1},games:[],type_state:{current_id:null,completed:!1,lock:!0,timer:!0,flag:!1,message:"Start typing when the flag drops"}},getters:{get_api_endpoint:function(e){return e.api_endpoint},get_games:function(e){return e.games},get_type_state:function(e){return e.type_state},get_type_message:function(e){return e.type_message}},mutations:{toggle_type_state_lock:function(e){e.type_state.lock=!e.type_state.lock},toggle_type_state_flag:function(e){e.type_state.flag=!e.type_state.flag},toggle_type_state_timer:function(e){e.type_state.timer=!e.type_state.timer},set_type_state_message:function(e,t){e.type_state.message=t},set_type_message:function(e,t){e.type_message.selected_message=t},set_type_pure:function(e,t){e.type_message.pure_message=t},increment_count:function(e){e.type_message.count++},decrement_count:function(e){e.type_message.count--},set_validated_input:function(e,t){e.type_message.validated_input=t},toggle_complete:function(e){e.type_state.completed=!e.type_state.completed},reset_count:function(e){e.type_message.count=-1},set_current_id:function(e,t){e.type_state.current_id=t},start_timer:function(e,t){e.games[t].gameTimer.start=Date.now()},stop_timer:function(e,t){e.games[t].gameTimer.end=Date.now()},add_game:function(e,t){e.games.push(t)},set_wpm:function(e,t){e.games[t.arg].wpm=t.wpm}},actions:{get_text:function(e){var t=e.getters,a=e.commit,s=new XMLHttpRequest,n=new Promise((function(e,a){s.open("GET",t.get_api_endpoint),s.onload=function(){e(s)},s.onerror=function(){a(s)},s.send()}));n.then((function(e){a("set_type_message",JSON.parse(e.response)["text_out"])}))},start:function(e){var t=e.commit,a=e.getters;if(!a.get_type_state.flag){var s=a.get_type_message,n=a.get_games.length;t("add_game",{gameId:n,gameText:s.selected_message.slice(3,s.selected_message.length-5),wpm:0,cpm:0,gameTimer:{start:Date.now(),end:Date.now()}}),t("set_type_pure",s.selected_message.slice(3,s.selected_message.length-5)),t("set_current_id",n),t("toggle_type_state_timer"),setTimeout((function(){t("toggle_type_state_lock"),t("toggle_type_state_flag"),t("start_timer",n)}),3e3)}},stop:function(e){var t=e.commit,a=e.getters;if(a.get_type_state.flag){t("stop_timer",a.get_type_state.current_id),t("set_type_pure",null),t("toggle_type_state_timer"),t("toggle_type_state_lock"),t("toggle_type_state_flag"),t("reset_count"),t("toggle_complete");var s=(a.get_games[a.get_type_state.current_id].gameTimer.end-a.get_games[a.get_type_state.current_id].gameTimer.start)/1e3;console.log("you took "+s+" seconds.");var n=a.get_games[a.get_type_state.current_id].gameText.length,r=n/5*s/60;console.log("this is your words per minute :"+r),t("set_wpm",{wpm:r,arg:a.get_type_state.current_id}),console.log(a.get_games[a.get_type_state.current_id])}},validate:function(e,t){var a=e.commit,s=e.getters,n=e.dispatch,r=t,o=s.get_type_message.pure_message.split(" "),i=s.get_type_message.count;o[i]==r?(a("set_validated_input",!0),i==o.length-1&&n("stop")):a("set_validated_input",!1)}},modules:{}}),re=a("f309");s["a"].use(re["a"]);var oe=new re["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:se,store:ne,vuetify:oe,render:function(e){return e(m)}}).$mount("#app")},"574d":function(e,t,a){"use strict";var s=a("b974"),n=a.n(s);n.a},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(e,t,a){},a019:function(e,t,a){},b974:function(e,t,a){},cdb3:function(e,t,a){"use strict";var s=a("a019"),n=a.n(s);n.a}});
//# sourceMappingURL=app.23b2739a.js.map