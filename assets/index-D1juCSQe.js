import{V as Y,_ as q}from"./VContainer-DgfGzt5u.js";import{d as R,r as S,N as H,c as h,o as f,F as P,O as D,E as F,e as k,P as J,C as V,Q as M,n as K,D as X,h as O,w as Z,l as U,k as w,j as _,f as I,i as ee}from"./index-xGC_Q0Iw.js";import{u as te,_ as ne}from"./_plugin-vue_export-helper-BRi-WzZj.js";import{V as ae,a as oe,b as re,c as se,u as le}from"./work-DhprFowx.js";import"./dimensions-B7o1m5MG.js";import"./index-CLvt5X-g.js";function ue(n,a){let r;return(...l)=>{r!==void 0&&clearTimeout(r),r=setTimeout(()=>n(...l),a)}}function ie({columns:n,columnWidth:a,emit:r,gap:l,items:u,maxColumns:i,minColumns:c,nextTick:s,onBeforeUnmount:B,onMounted:b,rtl:d,scrollContainer:m,ssrColumns:v,vue:x,wall:y,watch:W}){function $(t,e,o,p){const g=z(o);return p+e+g<=t?$(t,e,o+1,p+e+g):o}function z(t){const e=Array.isArray(a.value)?a.value:[a.value];return e[t%e.length]}function j(){const t=$(y.value.getBoundingClientRect().width,l.value,0,-l.value),e=Q(G(t));return e>0?e:1}function G(t){const e=i==null?void 0:i.value;return e&&t>e?e:t}function Q(t){const e=c==null?void 0:c.value;return e&&t<e?e:t}if(v.value>0){const t=L(v.value);u.value.forEach((e,o)=>t[o%v.value].push(o)),n.value=t}let A=0;async function E(t,e){if(t>=u.value.length||(await s(),A!==e))return;const o=[...y.value.children];d.value&&o.reverse();const p=o.reduce((g,N)=>N.getBoundingClientRect().height<g.getBoundingClientRect().height?N:g);n.value[+p.dataset.index].push(t),await E(t+1,e)}async function C(t=!1){const e=j();if(n.value.length===e&&!t){r(x===2?"redraw-skip":"redrawSkip");return}n.value=L(e);const o=m==null?void 0:m.value,p=o?o.scrollTop:window.scrollY;await E(0,++A),o?o.scrollBy({top:p-o.scrollTop}):window.scrollTo({top:p}),r("redraw")}const T=typeof ResizeObserver>"u"?void 0:new ResizeObserver(ue(()=>C()));return b(()=>{C(),T==null||T.observe(y.value)}),B(()=>T==null?void 0:T.unobserve(y.value)),W([u,d],()=>C(!0)),W([a,l,c,i],()=>C()),{getColumnWidthTarget:z}}function L(n){return Array.from({length:n}).map(()=>[])}const ce=["data-index"],me=R({__name:"masonry-wall",props:{columnWidth:{default:400},items:{},gap:{default:0},rtl:{type:Boolean,default:!1},ssrColumns:{default:0},scrollContainer:{default:null},minColumns:{default:1},maxColumns:{},keyMapper:{}},emits:["redraw","redrawSkip"],setup(n,{emit:a}){const r=n,l=a,u=S([]),i=S(),{getColumnWidthTarget:c}=ie({columns:u,emit:l,nextTick:K,onBeforeUnmount:X,onMounted:O,vue:3,wall:i,watch:Z,...H(r)});return(s,B)=>(f(),h("div",{ref_key:"wall",ref:i,class:"masonry-wall",style:F({display:"flex",gap:`${s.gap}px`})},[(f(!0),h(P,null,D(u.value,(b,d)=>(f(),h("div",{key:d,class:"masonry-column","data-index":d,style:F({display:"flex","flex-basis":`${k(c)(d)}px`,"flex-direction":"column","flex-grow":1,gap:`${s.gap}px`,height:["-webkit-max-content","-moz-max-content","max-content"],"min-width":0})},[(f(!0),h(P,null,D(b,(m,v)=>{var x;return f(),h("div",{key:((x=s.keyMapper)==null?void 0:x.call(s,s.items[m],d,v,m))??m,class:"masonry-item"},[J(s.$slots,"default",{item:s.items[m],column:d,row:v,index:m},()=>[V(M(s.items[m]),1)])])}),128))],12,ce))),128))],4))}}),de=(()=>{const n=me;return n.install=a=>{a.component("MasonryWall",n)},n})(),pe={class:"card-wrapper"},fe={class:"image-wrapper"},ve=R({__name:"WorkList",props:{work:{}},setup(n){const a=te(),r=n,l=S(Array(r.work.length).fill(!1));return O(async()=>{a.menuPromise&&await Promise.all([a.menuPromise]),r.work.forEach((u,i)=>{setTimeout(()=>{l.value[i]=!0},100*i)})}),(u,i)=>(f(),U(Y,{class:"wrapper"},{default:w(()=>[_(k(de),{items:r.work,"ssr-columns":1,gap:32},{default:w(({item:c,index:s})=>[I("div",pe,[_(ae,{color:k(a).baseColors[s],class:ee([{"fade-in":k(l)[s]},"card"]),onClick:B=>u.$router.push(`/work/${c.slug}`),variant:"tonal"},{default:w(()=>[I("div",fe,[_(oe,{class:"image",src:c.images[0]},null,8,["src"])]),_(re,{class:"title text-funnel"},{default:w(()=>[V(M(c.title),1)]),_:2},1024),_(se,{class:"description"},{default:w(()=>[V(M(c.overview.slice(0,128)+"..."),1)]),_:2},1024)]),_:2},1032,["color","class","onClick"])])]),_:1},8,["items"])]),_:1}))}}),we=ne(ve,[["__scopeId","data-v-eb38cb9b"]]),Ce=R({__name:"index",setup(n){const a=le();return(r,l)=>{const u=q;return f(),U(u,null,{default:w(()=>[_(we,{work:k(a).work},null,8,["work"])]),_:1})}}});export{Ce as default};
