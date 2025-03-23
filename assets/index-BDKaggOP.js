import{ag as z,p as m,ah as C,y as l,ai as k,aj as Z,ak as q,al as Se,am as we,an as xe,e as M,l as v,X as Le,g as H,a4 as Ee,j as Pe,J as c,r as ee,i as te,ao as Te,t as I,k as ne,m as ae,h as se,L as $e,ap as Be,aq as Ne,R as Re,aa as Ve,z as ze,w as Ie,ae as ie,B as Oe,ar as X,as as Fe,V as He,W as De,at as Y,A as j,E as We,q as Ae,au as qe,av as U}from"./index-YlGzzLpq.js";const Me=["top","bottom"],Xe=["start","end","left","right"];function Ye(e,t){let[n,a]=e.split(" ");return a||(a=z(Me,n)?"start":z(Xe,n)?"top":"center"),{side:K(n,t),align:K(a,t)}}function K(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const gt=m({border:[Boolean,Number,String]},"border");function ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{borderClasses:l(()=>{const a=k(e)?e.value:e.border,i=[];if(a===!0||a==="")i.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))i.push(`border-${s}`);return i})}}const je=[null,"default","comfortable","compact"],pt=m({density:{type:String,default:"default",validator:e=>je.includes(e)}},"density");function bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{densityClasses:l(()=>`${t}--density-${e.density}`)}}const yt=m({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ct(e){return{elevationClasses:l(()=>{const n=k(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Ue=m({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{roundedClasses:l(()=>{const a=k(e)?e.value:e.rounded,i=k(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);else(i||a===!1)&&s.push("rounded-0");return s})}}const re=m({tag:{type:String,default:"div"}},"tag");function D(e){return Z(()=>{const t=[],n={};if(e.value.background)if(q(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Se(e.value.background)){const a=we(e.value.background);if(a.a==null||a.a===1){const i=xe(a);n.color=i,n.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(q(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function oe(e,t){const n=l(()=>({text:k(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=D(n);return{textColorClasses:a,textColorStyles:i}}function V(e,t){const n=l(()=>({background:k(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=D(n);return{backgroundColorClasses:a,backgroundColorStyles:i}}const Je=["elevated","flat","tonal","outlined","text","plain"];function _t(e,t){return v(Le,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const kt=m({color:String,variant:{type:String,default:"elevated",validator:e=>Je.includes(e)}},"variant");function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();const n=l(()=>{const{variant:s}=M(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:i}=D(l(()=>{const{variant:s,color:r}=M(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:i,variantClasses:n}}const Ge=m({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),wt=H(!1)({name:"VDefaultsProvider",props:Ge(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:i,reset:s,root:r,scoped:o}=Ee(e);return Pe(a,{reset:s,root:r,scoped:o,disabled:i}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}}),Qe=["x-small","small","default","large","x-large"],Ze=m({size:{type:[String,Number],default:"default"}},"size");function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return Z(()=>{let n,a;return z(Qe,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:c(e.size),height:c(e.size)}),{sizeClasses:n,sizeStyles:a}})}const tt=m({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:$e,...se(),...Ze(),...re({tag:"i"}),...ae()},"VIcon"),xt=H()({name:"VIcon",props:tt(),setup(e,t){let{attrs:n,slots:a}=t;const i=ee(),{themeClasses:s}=te(e),{iconData:r}=Te(l(()=>i.value||e.icon)),{sizeClasses:o}=et(e),{textColorClasses:u,textColorStyles:p}=oe(I(e,"color"));return ne(()=>{var g,d;const b=(g=a.default)==null?void 0:g.call(a);b&&(i.value=(d=Be(b).filter(y=>y.type===Ne&&y.children&&typeof y.children=="string")[0])==null?void 0:d.children);const f=!!(n.onClick||n.onClickOnce);return v(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":f,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:c(e.size),height:c(e.size),width:c(e.size)},p.value,e.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?e.disabled?-1:0:void 0},{default:()=>[b]})}),{}}});function nt(e,t){const n=ee(),a=Re(!1);if(Ve){const i=new IntersectionObserver(s=>{a.value=!!s.find(r=>r.isIntersecting)},t);ze(()=>{i.disconnect()}),Ie(n,(s,r)=>{r&&(i.unobserve(r),a.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Lt=m({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Et(e){return{dimensionStyles:l(()=>{const n={},a=c(e.height),i=c(e.maxHeight),s=c(e.maxWidth),r=c(e.minHeight),o=c(e.minWidth),u=c(e.width);return a!=null&&(n.height=a),i!=null&&(n.maxHeight=i),s!=null&&(n.maxWidth=s),r!=null&&(n.minHeight=r),o!=null&&(n.minWidth=o),u!=null&&(n.width=u),n})}}const J={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},at=m({location:String},"location");function st(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ie();return{locationStyles:l(()=>{if(!e.location)return{};const{side:s,align:r}=Ye(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(p){return n?n(p):0}const u={};return s!=="center"&&(t?u[J[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),r!=="center"?t?u[J[r]]=`calc(100% - ${o(r)}px)`:u[r]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const it=m({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...se(),...at({location:"top"}),...Ue(),...re(),...ae()},"VProgressLinear"),rt=H()({name:"VProgressLinear",props:it(),emits:{"update:modelValue":e=>!0},setup(e,t){var A;let{slots:n}=t;const a=Oe(e,"modelValue"),{isRtl:i,rtlClasses:s}=ie(),{themeClasses:r}=te(e),{locationStyles:o}=st(e),{textColorClasses:u,textColorStyles:p}=oe(e,"color"),{backgroundColorClasses:b,backgroundColorStyles:f}=V(l(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:d}=V(l(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:S}=V(e,"color"),{roundedClasses:he}=Ke(e),{intersectionRef:B,isIntersecting:pe}=nt(),E=l(()=>parseFloat(e.max)),_=l(()=>parseFloat(e.height)),N=l(()=>X(parseFloat(e.bufferValue)/E.value*100,0,100)),W=l(()=>X(parseFloat(a.value)/E.value*100,0,100)),P=l(()=>i.value!==e.reverse),be=l(()=>e.indeterminate?"fade-transition":"slide-x-transition"),T=Fe&&((A=window.matchMedia)==null?void 0:A.call(window,"(forced-colors: active)").matches);function ye(w){if(!B.value)return;const{left:Ce,right:_e,width:R}=B.value.getBoundingClientRect(),ke=P.value?R-w.clientX+(_e-R):w.clientX-Ce;a.value=Math.round(ke/R*E.value)}return ne(()=>v(e.tag,{ref:B,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&pe.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},he.value,r.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?c(_.value):0,"--v-progress-linear-height":c(_.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(a.value),E.value),onClick:e.clickable&&ye},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...p.value,[P.value?"left":"right"]:c(-_.value),borderTop:`${c(_.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${c(_.value/4)})`,width:c(100-N.value,"%"),"--v-progress-linear-stream-to":c(_.value*(P.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",T?void 0:b.value],style:[f.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),v("div",{class:["v-progress-linear__buffer",T?void 0:g.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:c(N.value,"%")}]},null),v(He,{name:be.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(w=>v("div",{key:w,class:["v-progress-linear__indeterminate",w,T?void 0:y.value],style:S.value},null))]):v("div",{class:["v-progress-linear__determinate",T?void 0:y.value],style:[S.value,{width:c(W.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:W.value,buffer:N.value})])]})),{}}}),Pt=m({loading:[Boolean,String]},"loader");function Tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{loaderClasses:l(()=>({[`${t}--loading`]:e.loading}))}}function $t(e,t){var a;let{slots:n}=t;return v("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||v(rt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const ot=["static","relative","fixed","absolute","sticky"],Bt=m({position:{type:String,validator:e=>ot.includes(e)}},"position");function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{positionClasses:l(()=>e.position?`${t}--${e.position}`:void 0)}}function lt(){const e=Ae("useRoute");return l(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Rt(e,t){var f,g;const n=De("RouterLink"),a=l(()=>!!(e.href||e.to)),i=l(()=>(a==null?void 0:a.value)||Y(t,"click")||Y(e,"click"));if(typeof n=="string"||!("useLink"in n)){const d=I(e,"href");return{isLink:a,isClickable:i,href:d,linkProps:j({href:d})}}const s=l(()=>({...e,to:I(()=>e.to||"")})),r=n.useLink(s.value),o=l(()=>e.to?r:void 0),u=lt(),p=l(()=>{var d,y,S;return o.value?e.exact?u.value?((S=o.value.isExactActive)==null?void 0:S.value)&&We(o.value.route.value.query,u.value.query):((y=o.value.isExactActive)==null?void 0:y.value)??!1:((d=o.value.isActive)==null?void 0:d.value)??!1:!1}),b=l(()=>{var d;return e.to?(d=o.value)==null?void 0:d.route.value.href:e.href});return{isLink:a,isClickable:i,isActive:p,route:(f=o.value)==null?void 0:f.route,navigate:(g=o.value)==null?void 0:g.navigate,href:b,linkProps:j({href:b,"aria-current":l(()=>p.value?"page":void 0)})}}const Vt=m({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),O=Symbol("rippleStop"),ut=80;function G(e,t){e.style.transform=t,e.style.webkitTransform=t}function F(e){return e.constructor.name==="TouchEvent"}function le(e){return e.constructor.name==="KeyboardEvent"}const ct=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,i=0;if(!le(e)){const g=t.getBoundingClientRect(),d=F(e)?e.touches[e.touches.length-1]:e;a=d.clientX-g.left,i=d.clientY-g.top}let s=0,r=.3;(f=t._ripple)!=null&&f.circle?(r=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,p=n.center?o:`${a-s}px`,b=n.center?u:`${i-s}px`;return{radius:s,scale:r,x:p,y:b,centerX:o,centerY:u}},$={show(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const a=document.createElement("span"),i=document.createElement("span");a.appendChild(i),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:r,x:o,y:u,centerX:p,centerY:b}=ct(e,t,n),f=`${s*2}px`;i.className="v-ripple__animation",i.style.width=f,i.style.height=f,t.appendChild(a);const g=window.getComputedStyle(t);g&&g.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),G(i,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),G(i,`translate(${p}, ${b}) scale3d(1,1,1)`)})})},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),i=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function ue(e){return typeof e>"u"||!!e}function x(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[O])){if(e[O]=!0,F(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||le(e),n._ripple.class&&(t.class=n._ripple.class),F(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{$.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ut)}else $.show(e,n,t)}}function Q(e){e[O]=!0}function h(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{h(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),$.hide(t)}}function ce(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let L=!1;function de(e){!L&&(e.keyCode===U.enter||e.keyCode===U.space)&&(L=!0,x(e))}function fe(e){L=!1,h(e)}function ve(e){L&&(L=!1,h(e))}function me(e,t,n){const{value:a,modifiers:i}=t,s=ue(a);if(s||$.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,qe(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(i.stop){e.addEventListener("touchstart",Q,{passive:!0}),e.addEventListener("mousedown",Q);return}e.addEventListener("touchstart",x,{passive:!0}),e.addEventListener("touchend",h,{passive:!0}),e.addEventListener("touchmove",ce,{passive:!0}),e.addEventListener("touchcancel",h),e.addEventListener("mousedown",x),e.addEventListener("mouseup",h),e.addEventListener("mouseleave",h),e.addEventListener("keydown",de),e.addEventListener("keyup",fe),e.addEventListener("blur",ve),e.addEventListener("dragstart",h,{passive:!0})}else!s&&n&&ge(e)}function ge(e){e.removeEventListener("mousedown",x),e.removeEventListener("touchstart",x),e.removeEventListener("touchend",h),e.removeEventListener("touchmove",ce),e.removeEventListener("touchcancel",h),e.removeEventListener("mouseup",h),e.removeEventListener("mouseleave",h),e.removeEventListener("keydown",de),e.removeEventListener("keyup",fe),e.removeEventListener("dragstart",h),e.removeEventListener("blur",ve)}function dt(e,t){me(e,t,!1)}function ft(e){delete e._ripple,ge(e)}function vt(e,t){if(t.value===t.oldValue)return;const n=ue(t.oldValue);me(e,t,n)}const zt={mounted:dt,unmounted:ft,updated:vt};export{wt as A,V as B,$t as L,zt as R,xt as V,re as a,Ue as b,yt as c,pt as d,gt as e,ht as f,Ct as g,Ke as h,et as i,oe as j,nt as k,Ze as l,kt as m,Et as n,Tt as o,st as p,Nt as q,Rt as r,St as s,Vt as t,bt as u,Bt as v,at as w,Pt as x,Lt as y,_t as z};
