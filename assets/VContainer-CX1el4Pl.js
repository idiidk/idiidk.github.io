import{q as y,y as b,ai as be,L as ne,M as Se,d as _e,ao as ke,m as A,c as Ce,o as he,I as Ve,e as Ie,Z as Pe,x as S,j as n,t as _,K as Ae,T as Be,$ as G,ap as se,_ as Te,a8 as xe,s as x,r as ze,w as U,aq as Re,n as je,D as we,a2 as W,a3 as le,F as q,a6 as Ne,a4 as Le,Y as ie,W as re,O as z,J as ee,P as Oe}from"./index-CjY1K-bH.js";import{u as De,_ as Ee}from"./_plugin-vue_export-helper-6mljK065.js";import{m as R,u as J,a as K,B as $e,g as Y,o as Z,c as ue,d as oe,e as ce,h as Fe,j as de,V as H,k as O,b as ve,l as Me,q as p,r as me,R as Ue,f as We,v as qe,w as He,x as Ge,i as Je,L as Ke,n as Ye,y as Ze,z as pe,A as Qe,p as Xe}from"./index-Csuhf5UP.js";function et(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return y()({name:a??be(Se(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s},...b()},setup(t,u){let{slots:o}=u;return()=>{var d;return ne(t.tag,{class:[e,t.class],style:t.style},(d=o.default)==null?void 0:d.call(o))}}})}const tt={class:"wrapper"},at=_e({__name:"AppBarMarginContainer",setup(e){ke(t=>({"350b2d8e":Ie(a)}));const s=De(),a=A(()=>`${s.barHeight+16}px`);return(t,u)=>(he(),Ce("div",tt,[Ve(t.$slots,"default",{},void 0,!0)]))}}),ht=Ee(at,[["__scopeId","data-v-509a054b"]]),nt=y()({name:"VCardActions",props:b(),setup(e,s){let{slots:a}=s;return Pe({VBtn:{slim:!0,variant:"text"}}),S(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),st=_({opacity:[Number,String],...b(),...R()},"VCardSubtitle"),lt=y()({name:"VCardSubtitle",props:st(),setup(e,s){let{slots:a}=s;return S(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),it=et("v-card-title");function rt(e){return{aspectStyles:A(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const ge=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...b(),...K()},"VResponsive"),te=y()({name:"VResponsive",props:ge(),setup(e,s){let{slots:a}=s;const{aspectStyles:t}=rt(e),{dimensionStyles:u}=J(e);return S(()=>{var o;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[u.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(o=a.additional)==null?void 0:o.call(a),a.default&&n("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),ut=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),L=(e,s)=>{let{slots:a}=s;const{transition:t,disabled:u,group:o,...d}=e,{component:v=o?Ae:Be,...f}=typeof t=="object"?t:{};return ne(v,G(typeof t=="string"?{name:u?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:u,group:o}).filter(r=>{let[l,m]=r;return m!==void 0})),d),a)};function ot(e,s){if(!se)return;const a=s.modifiers||{},t=s.value,{handler:u,options:o}=typeof t=="object"?t:{handler:t,options:{}},d=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(m=e._observe)==null?void 0:m[s.instance.$.uid];if(!r)return;const l=v.some(k=>k.isIntersecting);u&&(!a.quiet||r.init)&&(!a.once||l||r.init)&&u(l,v,f),l&&a.once?fe(e,s):r.init=!0},o);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:d},d.observe(e)}function fe(e,s){var t;const a=(t=e._observe)==null?void 0:t[s.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ct={mounted:ot,unmounted:fe},dt=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ge(),...b(),...Z(),...ut()},"VImg"),ye=y()({name:"VImg",directives:{intersect:ct},props:dt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:a,slots:t}=s;const{backgroundColorClasses:u,backgroundColorStyles:o}=$e(Te(e,"color")),{roundedClasses:d}=Y(e),v=xe("VImg"),f=x(""),r=ze(),l=x(e.eager?"loading":"idle"),m=x(),k=x(),g=A(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=A(()=>g.value.aspect||m.value/k.value||0);U(()=>e.src,()=>{B(l.value!=="idle")}),U(h,(i,c)=>{!i&&c&&r.value&&P(r.value)}),Re(()=>B());function B(i){if(!(e.eager&&i)&&!(se&&!i&&!e.eager)){if(l.value="loading",g.value.lazySrc){const c=new Image;c.src=g.value.lazySrc,P(c,null)}g.value.src&&je(()=>{var c;a("loadstart",((c=r.value)==null?void 0:c.currentSrc)||g.value.src),setTimeout(()=>{var C;if(!v.isUnmounted)if((C=r.value)!=null&&C.complete){if(r.value.naturalWidth||j(),l.value==="error")return;h.value||P(r.value,null),l.value==="loading"&&V()}else h.value||P(r.value),I()})})}}function V(){var i;v.isUnmounted||(I(),P(r.value),l.value="loaded",a("load",((i=r.value)==null?void 0:i.currentSrc)||g.value.src))}function j(){var i;v.isUnmounted||(l.value="error",a("error",((i=r.value)==null?void 0:i.currentSrc)||g.value.src))}function I(){const i=r.value;i&&(f.value=i.currentSrc||i.src)}let T=-1;we(()=>{clearTimeout(T)});function P(i){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{if(clearTimeout(T),v.isUnmounted)return;const{naturalHeight:Q,naturalWidth:X}=i;Q||X?(m.value=X,k.value=Q):!i.complete&&l.value==="loading"&&c!=null?T=window.setTimeout(C,c):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,k.value=1)};C()}const w=A(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var C;if(!g.value.src||l.value==="idle")return null;const i=n("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.src,srcset:g.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:V,onError:j},null),c=(C=t.sources)==null?void 0:C.call(t);return n(L,{transition:e.transition,appear:!0},{default:()=>[W(c?n("picture",{class:"v-img__picture"},[c,i]):i,[[Le,l.value==="loaded"]])]})},E=()=>n(L,{transition:e.transition},{default:()=>[g.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),$=()=>t.placeholder?n(L,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,F=()=>t.error?n(L,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,M=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=x(!1);{const i=U(h,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),i())})}return S(()=>{const i=te.filterProps(e);return W(n(te,G({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!N.value},u.value,d.value,e.class],style:[{width:Ne(e.width==="auto"?m.value:e.width)},o.value,e.style]},i,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(q,null,[n(D,null,null),n(E,null,null),n(M,null,null),n($,null,null),n(F,null,null)]),default:t.default}),[[le("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:l,naturalWidth:m,naturalHeight:k}}}),vt=_({start:Boolean,end:Boolean,icon:z,image:String,text:String,...me(),...b(),...p(),...Z(),...Me(),...R(),...re(),...ve({variant:"flat"})},"VAvatar"),ae=y()({name:"VAvatar",props:vt(),setup(e,s){let{slots:a}=s;const{themeClasses:t}=ie(e),{borderClasses:u}=ue(e),{colorClasses:o,colorStyles:d,variantClasses:v}=oe(e),{densityClasses:f}=ce(e),{roundedClasses:r}=Y(e),{sizeClasses:l,sizeStyles:m}=Fe(e);return S(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,u.value,o.value,f.value,r.value,l.value,v.value,e.class],style:[d.value,m.value,e.style]},{default:()=>[a.default?n(O,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?n(ye,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(H,{key:"icon",icon:e.icon},null):e.text,de(!1,"v-avatar")]})),{}}}),mt=_({appendAvatar:String,appendIcon:z,prependAvatar:String,prependIcon:z,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...b(),...p()},"VCardItem"),gt=y()({name:"VCardItem",props:mt(),setup(e,s){let{slots:a}=s;return S(()=>{var r;const t=!!(e.prependAvatar||e.prependIcon),u=!!(t||a.prepend),o=!!(e.appendAvatar||e.appendIcon),d=!!(o||a.append),v=!!(e.title!=null||a.title),f=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[u&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(O,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(q,null,[e.prependAvatar&&n(ae,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(H,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[v&&n(it,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??ee(e.title)]}}),f&&n(lt,{key:"subtitle"},{default:()=>{var l;return[((l=a.subtitle)==null?void 0:l.call(a))??ee(e.subtitle)]}}),(r=a.default)==null?void 0:r.call(a)]),d&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(O,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(q,null,[e.appendIcon&&n(H,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(ae,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),ft=_({opacity:[Number,String],...b(),...R()},"VCardText"),yt=y()({name:"VCardText",props:ft(),setup(e,s){let{slots:a}=s;return S(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),bt=_({appendAvatar:String,appendIcon:z,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...me(),...b(),...p(),...K(),...Xe(),...Qe(),...pe(),...Ze(),...Z(),...Ye(),...R(),...re(),...ve({variant:"elevated"})},"VCard"),Vt=y()({name:"VCard",directives:{Ripple:Ue},props:bt(),setup(e,s){let{attrs:a,slots:t}=s;const{themeClasses:u}=ie(e),{borderClasses:o}=ue(e),{colorClasses:d,colorStyles:v,variantClasses:f}=oe(e),{densityClasses:r}=ce(e),{dimensionStyles:l}=J(e),{elevationClasses:m}=We(e),{loaderClasses:k}=qe(e),{locationStyles:g}=He(e),{positionClasses:h}=Ge(e),{roundedClasses:B}=Y(e),V=Je(e,a),j=A(()=>e.link!==!1&&V.isLink.value),I=A(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return S(()=>{const T=j.value?"a":e.tag,P=!!(t.title||e.title!=null),w=!!(t.subtitle||e.subtitle!=null),D=P||w,E=!!(t.append||e.appendAvatar||e.appendIcon),$=!!(t.prepend||e.prependAvatar||e.prependIcon),F=!!(t.image||e.image),M=D||$||E,N=!!(t.text||e.text!=null);return W(n(T,G({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":I.value},u.value,o.value,d.value,r.value,m.value,k.value,h.value,B.value,f.value,e.class],style:[v.value,l.value,g.value,e.style],onClick:I.value&&V.navigate,tabindex:e.disabled?-1:void 0},V.linkProps),{default:()=>{var i;return[F&&n("div",{key:"image",class:"v-card__image"},[t.image?n(O,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(Ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),M&&n(gt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),N&&n(yt,{key:"text"},{default:()=>{var c;return[((c=t.text)==null?void 0:c.call(t))??e.text]}}),(i=t.default)==null?void 0:i.call(t),t.actions&&n(nt,null,{default:t.actions}),de(I.value,"v-card")]}}),[[le("ripple"),I.value&&e.ripple]])}),{}}}),St=_({fluid:{type:Boolean,default:!1},...b(),...K(),...R()},"VContainer"),It=y()({name:"VContainer",props:St(),setup(e,s){let{slots:a}=s;const{rtlClasses:t}=Oe(),{dimensionStyles:u}=J(e);return S(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:[u.value,e.style]},a)),{}}});export{It as V,ht as _,Vt as a,ye as b,it as c,yt as d,ae as e};
