(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{467:function(e,t,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("dd796e38",content,!0,{sourceMap:!1})},469:function(e,t,n){"use strict";n(467)},470:function(e,t,n){var r=n(20)(!1);r.push([e.i,".header-overlay[data-v-028f85d3]{display:flex;position:absolute;flex-direction:column;align-items:flex-start;justify-content:center;top:0;left:0;width:calc(100% - 30vw);height:100vh;margin:0 15vw;font-size:clamp(1rem,2.5vw,1.5rem)}.header-overlay .header-title[data-v-028f85d3]{line-height:1;margin-bottom:1rem;opacity:0}.header-overlay .header-subtitle[data-v-028f85d3]{opacity:0}.header-overlay .buttons[data-v-028f85d3]{margin-top:1rem;opacity:0}",""]),e.exports=r},471:function(e,t,n){"use strict";n.r(t);var r=n(33),o=(n(94),n(11),n(57),n(64),n(46),n(65),n(23),n(19),n(82),n(212)),l=n(6),c={name:"HeaderOverlay",methods:{navigate:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=[],c=t.animate.reverse(),i=0;i<c.length;i++)r.push(o.a.to(c[i],{autoAlpha:0,delay:.1*i,ease:l.b.easeOut}));return n.next=5,Promise.all(r);case 5:t.$router.push({name:e});case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this;setTimeout((function(){for(var i=0;i<e.animate.length;i++)o.a.fromTo(e.animate[i],{autoAlpha:0,y:-50},{autoAlpha:1,y:0,delay:.1*i,duration:1,ease:l.b.easeOut})}),500)},computed:{animate:function(){var e=this;return Object.keys(this.$refs).filter((function(e){return e.startsWith("animate")})).map((function(t){return e.$refs[t]}))}}},d=(n(469),n(55)),v=n(47),f=n.n(v),m=n(204),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-overlay"},[n("h1",{ref:"animate-1",staticClass:"header-title white--text"},[e._v("\n    Hi and welcome to my space\n  ")]),e._v(" "),n("span",{ref:"animate-2",staticClass:"header-subtitle white--text"},[e._v("\n    My name is Vincent Brouwer "),n("br"),e._v("\n    I run a company called "),n("b",[e._v("idiidk development")]),e._v(" based in the Netherlands\n  ")]),e._v(" "),n("div",{ref:"animate-3",staticClass:"buttons"},[n("v-btn",{attrs:{dark:"",outlined:""},on:{click:function(t){return e.navigate("work")}}},[e._v("my work")]),e._v(" "),n("v-btn",{attrs:{dark:"",outlined:""},on:{click:function(t){return e.navigate("about")}}},[e._v("about")])],1)])}),[],!1,null,"028f85d3",null);t.default=component.exports;f()(component,{VBtn:m.a})}}]);