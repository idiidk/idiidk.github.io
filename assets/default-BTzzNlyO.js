import{d as y,u as R,a as F,r as f,w as D,n as I,c as g,b as L,e as d,o as p,f as _,g as V,h as S,i as O,j as c,k as v,l as h,s as H,m as N,p as q,q as z,t as E,v as W,x as j,y as U,z as G,T as J,A as K,F as Q}from"./index-BDIZt4R3.js";import{g as b,i as X}from"./window.util-BClbyirw.js";import{u as k,_ as C}from"./_plugin-vue_export-helper-ChCLIg3w.js";import{V as Y}from"./VBtn-C3g32QZ4.js";import{V as $,u as Z,m as ee,a as ne}from"./index-DzXEaSLg.js";const te={key:0,class:"menu"},oe=.5,ae=.15,se=.3,A=.3,le=y({__name:"OverlayMenu",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(t){const a=R(),n=k(),o=F(t,"modelValue"),r=f(!1),u=f(null),l=f(null),i=f(null),B=f(null),w=s=>{a.push(s),o.value=!1},M=s=>{s&&s.isActive()&&s.kill()};D(o,async s=>{M(i.value),M(B.value),s?(r.value=!0,await I(),l.value&&l.value.children&&Array.from(l.value.children).forEach(e=>{b.set(e,{y:-20,opacity:0})}),n.menuPromise=Promise.all([P(!0),x(!0)]),await n.menuPromise):(n.menuPromise=Promise.all([x(!1).then(()=>P(!1)),new Promise(e=>setTimeout(e,A*1e3))]),await n.menuPromise,r.value=!1)});const P=s=>new Promise(e=>{if(!u.value){e();return}const m=s?se:A;i.value=b.to(u.value,{duration:m,opacity:s?1:0,ease:"linear",onComplete:()=>e()})}),x=s=>new Promise(e=>{if(!l.value||!l.value.children){e();return}const m=Array.from(l.value.children);if(m.length===0){e();return}const T=s?"start":"end";B.value=b.to(m,{opacity:s?1:0,y:0,stagger:{each:ae,from:T},duration:oe,ease:"linear",onComplete:()=>e()})});return(s,e)=>d(r)?(p(),g("div",te,[_("div",{onClick:e[0]||(e[0]=m=>o.value=!1),class:"overlay",ref_key:"overlayRef",ref:u},null,512),_("div",{class:"list",ref_key:"listRef",ref:l},[_("h1",{class:"text-funnel",onClickCapture:e[1]||(e[1]=V(m=>w("/"),["prevent"]))}," Home ",32),_("h1",{class:"text-funnel",onClickCapture:e[2]||(e[2]=V(m=>w("/work"),["prevent"]))}," My Work ",32),_("h1",{class:"text-funnel",onClickCapture:e[3]||(e[3]=V(m=>w("/about"),["prevent"]))}," About Me ",32)],512)])):L("",!0)}}),re=C(le,[["__scopeId","data-v-0a1c19e2"]]),ue=y({__name:"Logo",setup(t){const a=k();return(n,o)=>(p(),g("h1",{onClick:o[0]||(o[0]=r=>{d(a).menu=!1,n.$router.push("/")}),class:"logo text-funnel"}," idiidk "))}}),ie=C(ue,[["__scopeId","data-v-7451c0f2"]]),ce=y({__name:"AppBar",setup(t){const a=k(),n=f();return S(()=>{var o;a.barHeight=((o=n.value)==null?void 0:o.clientHeight)||80}),(o,r)=>{const u=ie;return p(),g("div",{ref_key:"bar",ref:n,class:O(["bar",{mobile:d(X)}])},[c(u,{class:"logo"}),c(Y,{onClick:r[0]||(r[0]=l=>d(a).menu=!d(a).menu),icon:"",color:"white",class:"menu-btn",variant:"outlined"},{default:v(()=>[d(a).menu?(p(),h($,{key:1,icon:"mdi-close"})):(p(),h($,{key:0,icon:"mdi-menu"}))]),_:1})],2)}}}),me=C(ce,[["__scopeId","data-v-a2a01573"]]);function de(){const t=H(!1);return S(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:N(()=>t.value?void 0:{transition:"none !important"}),isBooted:q(t)}}const pe=E({scrollable:Boolean,...U(),...ne(),...ee({tag:"main"})},"VMain"),fe=z()({name:"VMain",props:pe(),setup(t,a){let{slots:n}=a;const{dimensionStyles:o}=Z(t),{mainStyles:r}=W(),{ssrBootStyles:u}=de();return j(()=>c(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,u.value,o.value,t.style]},{default:()=>{var l,i;return[t.scrollable?c("div",{class:"v-main__scroller"},[(l=n.default)==null?void 0:l.call(n)]):(i=n.default)==null?void 0:i.call(n)]}})),{}}}),_e=y({__name:"default",setup(t){const a=k();return(n,o)=>{const r=me,u=re,l=G("router-view");return p(),g(Q,null,[c(r),c(fe,{class:"main"},{default:v(()=>[c(u,{modelValue:d(a).menu,"onUpdate:modelValue":o[0]||(o[0]=i=>d(a).menu=i),class:"menu"},null,8,["modelValue"]),c(l,null,{default:v(({Component:i})=>[c(J,{name:"fade",mode:"out-in"},{default:v(()=>[(p(),h(K(i)))]),_:2},1024)]),_:1})]),_:1})],64)}}}),we=C(_e,[["__scopeId","data-v-6b862344"]]);export{we as default};
