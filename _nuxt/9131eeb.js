(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6,7],{467:function(e,t,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("9d9be5f0",content,!0,{sourceMap:!1})},469:function(e,t,r){"use strict";r(467)},470:function(e,t,r){var n=r(20)(!1);n.push([e.i,".header-overlay[data-v-201c67d3]{display:flex;position:absolute;flex-direction:column;align-items:flex-start;justify-content:center;top:0;left:0;width:calc(100% - 30vw);height:100vh;margin:0 15vw;font-size:clamp(1rem,3vw,2rem)}.header-overlay .header-title[data-v-201c67d3]{line-height:1;margin-bottom:1rem;opacity:0}.header-overlay .header-subtitle[data-v-201c67d3]{opacity:0}.header-overlay .buttons[data-v-201c67d3]{margin-top:1rem;opacity:0}",""]),e.exports=n},471:function(e,t,r){"use strict";r.r(t);var n=r(33),o=(r(94),r(11),r(57),r(64),r(46),r(65),r(23),r(19),r(81),r(212)),l=r(6),c={name:"HeaderOverlay",methods:{navigate:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n=[],c=t.animate.reverse(),i=0;i<c.length;i++)n.push(o.a.to(c[i],{autoAlpha:0,delay:.1*i,ease:l.b.easeOut}));return r.next=5,Promise.all(n);case 5:t.$router.push({name:e});case 6:case"end":return r.stop()}}),r)})))()}},mounted:function(){var e=this;setTimeout((function(){for(var i=0;i<e.animate.length;i++)o.a.fromTo(e.animate[i],{autoAlpha:0,y:-50},{autoAlpha:1,y:0,delay:.1*i,duration:1,ease:l.b.easeOut})}),500)},computed:{animate:function(){var e=this;return Object.keys(this.$refs).filter((function(e){return e.startsWith("animate")})).map((function(t){return e.$refs[t]}))}}},d=(r(469),r(55)),f=r(47),v=r.n(f),h=r(204),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-overlay"},[r("h1",{ref:"animate-1",staticClass:"header-title white--text"},[e._v("\n    Hi and welcome to my space\n  ")]),e._v(" "),r("span",{ref:"animate-2",staticClass:"header-subtitle white--text"},[e._v("\n    My name is Vincent Brouwer "),r("br"),e._v("\n    I run a company called "),r("b",[e._v("idiidk development")]),e._v(" based in the Netherlands\n  ")]),e._v(" "),r("div",{ref:"animate-3",staticClass:"buttons"},[r("v-btn",{attrs:{dark:"",outlined:""},on:{click:function(t){return e.navigate("work")}}},[e._v("my work")]),e._v(" "),r("v-btn",{attrs:{dark:"",outlined:""},on:{click:function(t){return e.navigate("about")}}},[e._v("about")])],1)])}),[],!1,null,"201c67d3",null);t.default=component.exports;v()(component,{VBtn:h.a})},472:function(e,t,r){"use strict";r.r(t);var n=r(42),o=r(41);r(65),r(66),r(11),r(38),r(70),r(57),r(35),r(17),r(75),r(82),r(64);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function d(e,t){return Math.random()*(t-e+1)+e}function f(e,t){return Math.floor(d(e,t))}var v=Object(n.a)((function e(t){Object(o.a)(this,e),this.vx=d(.5,1)*f(-1,1)||1,this.vy=d(.5,1)*f(-1,1)||-1,this.gr=t})),h={name:"HeaderPixiBackground",data:function(){return{colors:["f72585","b5179e","7209b7","560bad","480ca8","3a0ca3","3f37c9","4361ee","4895ef","4cc9f0"].map((function(e){return"0x".concat(e)}))}},mounted:function(){var e=this.$PIXI,t=new e.Application({resizeTo:window,backgroundColor:this.colors[0]});this.$refs.pixiWrapper.appendChild(t.view),t.stage.filters=[new e.filters.KawaseBlurFilter(30,10,!0),new e.filters.NoiseFilter(.03,.2)];for(var r=[],i=0;i<15;i++){var n=new e.Graphics,o=this.colors[f(0,this.colors.length-1)];n.beginFill(o),n.drawCircle(d(0,t.view.width),d(0,t.view.height),d(200,350)),n.endFill(),r.push(new v(n)),t.stage.addChild(n)}t.ticker.add((function(){var e,n=l(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.gr.x+=o.vx,o.gr.y+=o.vy;var c=o.gr.getBounds().x+o.gr.getBounds().width/2,d=o.gr.getBounds().y+o.gr.getBounds().height/2;(c>t.view.width||c<0)&&(o.vx*=-1),(d>t.view.height||d<0)&&(o.vy*=-1)}}catch(e){n.e(e)}finally{n.f()}}))}},m=r(55),component=Object(m.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"pixiWrapper"})}),[],!1,null,"a6d1212e",null);t.default=component.exports},493:function(e,t,r){"use strict";r.r(t);var n=r(471),o=r(472),l={name:"Header",components:{HeaderOverlay:n.default,HeaderPixiBackground:o.default}},c=r(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("HeaderPixiBackground"),e._v(" "),r("HeaderOverlay")],1)}),[],!1,null,"2ce496bd",null);t.default=component.exports},519:function(e,t,r){"use strict";r.r(t);var n={name:"IndexPage",layout:"no-overflow"},o=r(55),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("IndexHeader")],1)}),[],!1,null,"4b6295d2",null);t.default=component.exports;installComponents(component,{IndexHeader:r(493).default})}}]);