var Y=Object.defineProperty;var V=(r,e,o)=>e in r?Y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var t=(r,e,o)=>V(r,typeof e!="symbol"?e+"":e,o);import{i as p,w as Z,a as F}from"./window.util-DwOBVZIi.js";import{B as G,d as b,c as R,o as C,i as $,e as M,f as c,C as P,r as B,m as k,D as H,h as K,j as y,E as q}from"./index-xGC_Q0Iw.js";import{_ as I,u as z}from"./_plugin-vue_export-helper-BRi-WzZj.js";const j=G("social",{state:()=>({socials:["https://www.instagram.com/idiidk/","https://github.com/idiidk","https://steamcommunity.com/id/idiidk","https://linkedin.com/in/idiidk","https://soundcloud.com/idiidk"]})}),U=b({__name:"HomeInfoBlock",setup(r){const e=j();let o=0;const m=()=>{const l=e.socials[o++];o>e.socials.length-1&&(o=0),window.open(l,"_blank")};return(l,i)=>(C(),R("div",{class:$(["wrapper",{mobile:M(p)}])},[i[1]||(i[1]=c("b",{class:"text-funnel name"},"Vincent Brouwer",-1)),i[2]||(i[2]=c("p",null,[P(" founder of "),c("a",{href:"https://codebrouwers.github.io/"},"De Codebrouwers")],-1)),i[3]||(i[3]=c("p",null,"vincent@codebrouwers.nl",-1)),c("p",null,[c("a",{href:"#",onClick:m},"@idiidk"),i[0]||(i[0]=P(" on everything"))])],2))}}),W=I(U,[["__scopeId","data-v-b0e57a48"]]),J={class:"wrapper"},Q={class:"orbs"},T=.01,tt=.02,st=.01,et=.005,it=65,at=45,ot=50,nt=35,rt=3,ht=b({__name:"OrbBackground",props:{scattered:{type:Boolean}},setup(r){const e=z(),o=B(!0),m=B(),l=k(()=>p.value?st:et),i=B(!1),A=r,L=k(()=>A.scattered),O=(n,s)=>Math.random()*(s-n)+n,S=(n,s,a)=>n+(s-n)*a;class N{constructor(s,a,g,h,_,d,f){t(this,"ctx");t(this,"color");t(this,"x");t(this,"y");t(this,"targetX");t(this,"targetY");t(this,"originalX");t(this,"originalY");t(this,"radius");t(this,"targetRadius");t(this,"finalRadius");t(this,"easing");t(this,"sizeEasing");t(this,"settled");t(this,"settlementProgress");t(this,"isMobile");t(this,"isSettledRef");t(this,"noShadow");this.ctx=s,this.color=a,this.sizeEasing=g,this.settled=!1,this.settlementProgress=0,this.isMobile=_,this.isSettledRef=d,this.noShadow=f,this.x=O(0,this.ctx.canvas.width),this.y=O(0,this.ctx.canvas.height),this.originalX=this.x,this.originalY=this.y,this.targetX=this.isMobile.value?this.ctx.canvas.width/2:0,this.targetY=0;const v=Math.max(this.ctx.canvas.width,this.ctx.canvas.height);this.radius=v,this.finalRadius=this.ctx.canvas.height*h/100,this.targetRadius=this.finalRadius,this.easing=T}update(s){if(this.easing=this.isSettledRef.value?T:tt,this.isSettledRef.value)this.targetX=this.isMobile.value?this.ctx.canvas.width/2:0,this.targetY=0,this.targetRadius=this.finalRadius;else{this.targetX=this.originalX,this.targetY=this.originalY;const d=Math.max(this.ctx.canvas.width,this.ctx.canvas.height);this.targetRadius=d}this.x=S(this.x,this.targetX,this.easing*s),this.y=S(this.y,this.targetY,this.easing*s),!this.settled||!this.isSettledRef.value?this.radius=S(this.radius,this.targetRadius,this.sizeEasing*s):this.radius=this.targetRadius;const a=1-Math.min(Math.abs(this.x-this.targetX)/(this.ctx.canvas.width/2),1),g=1-Math.min(Math.abs(this.radius-this.targetRadius)/(this.radius/2),1);this.settlementProgress=(a+g)/2;const h=Math.abs(this.x-this.targetX)<1&&Math.abs(this.y-this.targetY)<1,_=Math.abs(this.radius-this.targetRadius)<1;this.settled=h&&_,this.settled&&(this.settlementProgress=1,this.x=this.targetX,this.y=this.targetY,this.radius=this.targetRadius)}render(s){this.update(s),this.ctx.beginPath();const a=this.ctx.createRadialGradient(this.x,this.y,this.radius*.2,this.x,this.y,this.radius);a.addColorStop(0,this.color),a.addColorStop(.5,`${this.color}66`),a.addColorStop(1,`${this.color}00`),this.ctx.fillStyle=a,this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),this.noShadow?(this.ctx.shadowBlur=0,this.ctx.shadowColor="transparent"):(this.ctx.shadowBlur=20,this.ctx.shadowColor=this.color),this.ctx.fill()}}return H(()=>{o.value=!1}),K(()=>{const n=m.value;if(!n)throw new Error("No ref to background canvas");const s=n.getContext("2d");s.globalCompositeOperation="lighter";const a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),g=a?[...e.baseColors.slice(0,10)].sort(()=>Math.random()-.5):[...e.baseColors].sort(()=>Math.random()-.5);let h=[],_;const d=()=>{clearTimeout(_),s.canvas.width=Z.value,s.canvas.height=F.value,_=setTimeout(()=>{if(h.length>0)return;h=[],i.value=!1;const E=g.length,x=p.value?it:ot,w=p.value?at:nt;g.forEach((u,X)=>{const D=x-(x-w)*X/(E-1);h.push(new N(s,u,l.value,D,p,L,a))})},100)};window.addEventListener("resize",d),window.addEventListener("orientationchange",()=>setTimeout(d,200)),d();let f=0;const v=E=>{if(!o.value)return;const x=E-f,w=Math.min(x/(1e3/60),rt);f=E,s.clearRect(0,0,n.width,n.height),i.value||(i.value=h.every(u=>u.settled)),h.forEach(u=>{u.settled||(u.sizeEasing=l.value),u.render(w)}),requestAnimationFrame(v)};requestAnimationFrame(v)}),(n,s)=>(C(),R("div",J,[c("div",Q,[c("canvas",{ref_key:"backgroundCanvas",ref:m},null,512)])]))}}),ct=I(ht,[["__scopeId","data-v-7d1547c7"]]),lt=b({__name:"index",setup(r){const e=z();return(o,m)=>{const l=ct,i=W;return C(),R("div",null,[y(l,{scattered:!M(e).menu},null,8,["scattered"]),y(i,{class:"info",style:q({mobile:M(p)})},null,8,["style"])])}}}),pt=I(lt,[["__scopeId","data-v-0f875b38"]]);export{pt as default};
