(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8,9],{445:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("acc74a02",content,!0,{sourceMap:!1})},447:function(t,e,r){"use strict";r.r(e);var n={name:"PageTitle",props:{title:String,subtitle:String}},o=(r(450),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-title"},[r("h1",{staticClass:"title-text"},[t._v(t._s(t.title))]),t._v(" "),r("span",[t._v(t._s(t.subtitle))])])}),[],!1,null,"21531111",null);e.default=component.exports},450:function(t,e,r){"use strict";r(445)},451:function(t,e,r){var n=r(14)(!1);n.push([t.i,".page-title[data-v-21531111]{font-size:clamp(1rem,4vw,2rem);margin-top:2rem;margin-bottom:4rem}.page-title .title-text[data-v-21531111]{margin-bottom:-1rem}",""]),t.exports=n},453:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("b1e837ce",content,!0,{sourceMap:!1})},462:function(t,e,r){"use strict";r(453)},463:function(t,e,r){var n=r(14)(!1);n.push([t.i,".project-image-wrapper[data-v-fb28cbae]{position:relative;opacity:0;transform:scale(.95)}.project-image-wrapper .image[data-v-fb28cbae]{padding:2rem}.project-image-wrapper .overlay[data-v-fb28cbae]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity .2s;background:rgba(0,0,0,.4);padding:clamp(1rem,5vw,4rem);cursor:pointer}.project-image-wrapper .overlay[data-v-fb28cbae]:hover{opacity:1}.project-image-wrapper .read-more[data-v-fb28cbae]{margin-top:2rem}",""]),t.exports=n},466:function(t,e,r){"use strict";r.r(e);r(40),r(32);var n=r(203),o=r(2),c={name:"WorkList",props:{work:Array},mounted:function(){var t=this;setTimeout((function(){for(var i=0;i<t.$refs.projectWrappers.length;i++){var e=0;t.breakpoint>=2?e=i%2==0?0:.3:t.breakpoint<=1&&(e=.2);var element=t.$refs.projectWrappers[i];n.a.to(element,{scrollTrigger:{trigger:element},autoAlpha:1,scale:1,delay:e,duration:1,ease:o.b.easeOut})}}),100)},computed:{breakpoint:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 0;case"sm":return 1;case"md":return 2;case"lg":return 3;case"xl":return 4}}}},l=(r(462),r(48)),d=r(42),f=r.n(d),m=r(504),v=r(280),w=r(505),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{dense:""}},t._l(t.work,(function(e){return r("v-col",{key:e.slug,attrs:{cols:"12",md:"6",xl:"4"}},[r("div",{ref:"projectWrappers",refInFor:!0,staticClass:"project-image-wrapper"},[r("v-img",{staticClass:"image",attrs:{"aspect-ratio":"1",src:"/work/"+e.img}}),t._v(" "),r("div",{staticClass:"overlay d-flex align-center justify-center",on:{click:function(r){return t.$router.push("/work/"+e.slug)}}},[r("h1",{staticClass:"white--text"},[t._v(t._s(e.title))])])],1)])})),1)}),[],!1,null,"fb28cbae",null);e.default=component.exports;f()(component,{VCol:m.a,VImg:v.a,VRow:w.a})},485:function(t,e,r){"use strict";r(17),r(5),r(13),r(73),r(37),r(284),r(452),r(75),r(86);var n=r(1);var o,c=r(89);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},508:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(27),c=(r(85),r(447)),l=r(466),d=Object(n.a)({name:"WorkPage",components:{WorkList:l.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("work").sortBy("updatedAt").fetch();case 3:return n=e.sent,e.abrupt("return",{work:n});case 5:case"end":return e.stop()}}),e)})))()}},"components",{PageTitle:c.default,WorkList:l.default}),f=d,m=r(48),v=r(42),w=r.n(v),k=r(485),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("PageTitle",{attrs:{title:"My work",subtitle:"This is the work I'm most proud of, please take a look!"}}),t._v(" "),r("WorkList",{attrs:{work:t.work}})],1)}),[],!1,null,"145457ac",null);e.default=component.exports;w()(component,{PageTitle:r(447).default,WorkList:r(466).default}),w()(component,{VContainer:k.a})}}]);