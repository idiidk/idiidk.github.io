import{L as I,n as V,w as E,ad as T,ae as j,af as g,ag as O,H,X as v,h as w,ah as m,_ as L,e as N}from"./index-B6akk-Ea.js";function C(e){return T()?(j(e),!0):!1}const y=new WeakMap,k=(...e)=>{var t;const i=e[0],s=(t=g())==null?void 0:t.proxy;if(s==null&&!O())throw new Error("injectLocal must be called in setup");return s&&y.has(s)&&i in y.get(s)?y.get(s)[i]:H(...e)},x=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const z=Object.prototype.toString,A=e=>z.call(e)==="[object Object]";function S(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function W(e){return Array.isArray(e)?e:[e]}function F(e){return g()}function P(e,t=!0,i){F()?I(e,i):t?e():V(e)}function B(e,t,i){return E(e,t,{...i,immediate:!0})}const M=x?window:void 0;function D(e){var t;const i=m(e);return(t=i==null?void 0:i.$el)!=null?t:i}function b(...e){const t=[],i=()=>{t.forEach(n=>n()),t.length=0},s=(n,o,u,a)=>(n.addEventListener(o,u,a),()=>n.removeEventListener(o,u,a)),r=w(()=>{const n=W(m(e[0])).filter(o=>o!=null);return n.every(o=>typeof o!="string")?n:void 0}),p=B(()=>{var n,o;return[(o=(n=r.value)==null?void 0:n.map(u=>D(u)))!=null?o:[M].filter(u=>u!=null),W(m(r.value?e[1]:e[0])),W(N(r.value?e[2]:e[1])),m(r.value?e[3]:e[2])]},([n,o,u,a])=>{if(i(),!(n!=null&&n.length)||!(o!=null&&o.length)||!(u!=null&&u.length))return;const h=A(a)?{...a}:a;t.push(...n.flatMap(f=>o.flatMap(c=>u.map(d=>s(f,c,d,h)))))},{flush:"post"}),l=()=>{p(),i()};return C(i),l}function G(){const e=v(!1),t=g();return t&&I(()=>{e.value=!0},t),e}function Q(e){const t=G();return w(()=>(t.value,!!e()))}const R=Symbol("vueuse-ssr-width");function X(){const e=O()?k(R,null):null;return typeof e=="number"?e:void 0}function Y(e,t={}){const{window:i=M,ssrWidth:s=X()}=t,r=Q(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function"),p=v(typeof s=="number"),l=v(),n=v(!1),o=u=>{n.value=u.matches};return L(()=>{if(p.value){p.value=!r.value;const u=m(e).split(",");n.value=u.some(a=>{const h=a.includes("not all"),f=a.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),c=a.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let d=!!(f||c);return f&&d&&(d=s>=S(f[1])),c&&d&&(d=s<=S(c[1])),h?!d:d});return}r.value&&(l.value=i.matchMedia(m(e)),n.value=l.value.matches)}),b(l,"change",o,{passive:!0}),w(()=>n.value)}function _(e={}){const{window:t=M,initialWidth:i=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:p=!0,type:l="inner"}=e,n=v(i),o=v(s),u=()=>{if(t)if(l==="outer")n.value=t.outerWidth,o.value=t.outerHeight;else if(l==="visual"&&t.visualViewport){const{width:h,height:f,scale:c}=t.visualViewport;n.value=Math.round(h*c),o.value=Math.round(f*c)}else p?(n.value=t.innerWidth,o.value=t.innerHeight):(n.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight)};u(),P(u);const a={passive:!0};if(b("resize",u,a),t&&l==="visual"&&t.visualViewport&&b(t.visualViewport,"resize",u,a),r){const h=Y("(orientation: portrait)");E(h,()=>u())}return{width:n,height:o}}const{width:$,height:U}=_(),J=768,Z=w(()=>$.value<=J);export{U as a,Z as i,$ as w};
