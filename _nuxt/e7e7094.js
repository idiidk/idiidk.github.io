(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(t,n,e){"use strict";e.r(n);var r={name:"AppBar"},o=e(64),c=e(65),l=e.n(c),f=e(402),v=e(401),d=e(398),_=e(399),h=e(261),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{attrs:{dark:"",color:"rgba(255,255,255,0)","elevate-on-scroll":"",app:""}},[e("v-toolbar-title",[t._v("Vincent Brouwer")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-github")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-linkedin")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1)}),[],!1,null,"c867d6f6",null);n.default=component.exports;l()(component,{VAppBar:f.a,VBtn:v.a,VIcon:d.a,VSpacer:_.a,VToolbarTitle:h.a})},188:function(t,n,e){"use strict";var r=e(127),o=e(267);n.a=function(t,n){r.c.KawaseBlurFilter=o.a,n("PIXI",{Application:r.a,Graphics:r.b,filters:r.c})}},234:function(t,n,e){var content=e(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("3747796a",content,!0,{sourceMap:!1})},245:function(t,n,e){var content=e(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("27859162",content,!0,{sourceMap:!1})},270:function(t,n,e){"use strict";e(183);var r={name:"DefaultLayout"},o=e(64),c=e(65),l=e.n(c),f=e(397),v=e(403),d=e(400),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("AppBar"),t._v(" "),e("v-main",[e("v-container",[e("Nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{AppBar:e(183).default}),l()(component,{VApp:f.a,VContainer:v.a,VMain:d.a})},271:function(t,n,e){"use strict";var r={name:"IndexLayout",layout:"index"},o=(e(376),e(64)),c=e(65),l=e.n(c),f=e(397),v=e(400),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("AppBar",{ref:"appBar"}),t._v(" "),e("v-main",{staticClass:"main"},[e("Nuxt")],1)],1)}),[],!1,null,"f7544f52",null);n.a=component.exports;l()(component,{AppBar:e(183).default}),l()(component,{VApp:f.a,VMain:v.a})},276:function(t,n,e){e(277),t.exports=e(278)},325:function(t,n,e){"use strict";e(234)},326:function(t,n,e){var r=e(38)(!1);r.push([t.i,"h1[data-v-54fedaaa]{font-size:20px}",""]),t.exports=r},376:function(t,n,e){"use strict";e(245)},377:function(t,n,e){var r=e(38)(!1);r.push([t.i,".main[data-v-f7544f52]{padding-top:0!important;height:100vh!important;overflow:hidden}",""]),t.exports=r},85:function(t,n,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(325),e(64)),c=e(65),l=e.n(c),f=e(397),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-app")}),[],!1,null,"54fedaaa",null);n.a=component.exports;l()(component,{VApp:f.a})}},[[276,4,1,5]]]);