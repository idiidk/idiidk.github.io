(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{468:function(e,t,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("0a1f0358",content,!0,{sourceMap:!1})},473:function(e,t,r){"use strict";r(468)},474:function(e,t,r){var o=r(20)(!1);o.push([e.i,".project-image-wrapper[data-v-4405c2c9]{position:relative}.project-image-wrapper .image[data-v-4405c2c9]{height:100vh;opacity:0;transform:scale(.95);padding:2rem}.project-image-wrapper .overlay[data-v-4405c2c9]{position:absolute;bottom:0;left:0;opacity:0;padding:clamp(1rem,5vw,4rem)}.project-image-wrapper .read-more[data-v-4405c2c9]{margin-top:2rem}",""]),e.exports=o},475:function(e,t,r){"use strict";r.r(t);r(46),r(38);var o=r(212),c=r(6),n={name:"WorkList",props:{work:Array},watch:{work:function(e){console.log(e)}},mounted:function(){var e=this;setTimeout((function(){for(var i=0;i<e.$refs.projectWrappers.length;i++){var t=0;e.breakpoint>=2&&(t=i%2==0?0:.3*i);var element=e.$refs.projectWrappers[i],r=o.a.timeline({scrollTrigger:{trigger:element}});r.to(element.getElementsByClassName("image")[0],{autoAlpha:1,scale:1,delay:t,duration:1,ease:c.b.easeOut},"start"),r.fromTo(element.getElementsByClassName("overlay")[0],{x:-20},{autoAlpha:1,x:0,delay:t+.1,duration:1,ease:c.b.easeOut},"start")}}),100)},computed:{breakpoint:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 0;case"sm":return 1;case"md":return 2;case"lg":return 3;case"xl":return 4}}}},l=(r(473),r(55)),m=r(47),v=r.n(m),d=r(204),f=r(511),w=r(296),h=r(512),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{"no-gutters":""}},e._l(e.work,(function(t,o){return r("v-col",{key:t.slug,attrs:{cols:"12",md:"6"}},[r("div",{ref:"projectWrappers",refInFor:!0,staticClass:"project-image-wrapper"},[r("v-img",{staticClass:"image",attrs:{src:t.img}}),e._v(" "),r("div",{staticClass:"overlay"},[r("v-row",[r("h1",{staticClass:"white--text"},[e._v(e._s(t.title))])]),e._v(" "),r("v-row",[r("span",{staticClass:"white--text"},[e._v(e._s(t.description))])]),e._v(" "),r("v-row",[r("v-btn",{staticClass:"read-more",attrs:{dark:"",outlined:""}},[e._v("read more")])],1)],1)],1)])})),1)}),[],!1,null,"4405c2c9",null);t.default=component.exports;v()(component,{VBtn:d.a,VCol:f.a,VImg:w.a,VRow:h.a})}}]);