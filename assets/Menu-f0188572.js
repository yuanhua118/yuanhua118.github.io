/* empty css             *//* empty css                     *//* empty css                  */import{d as B,aY as E,J as S,o as t,e as u,w as l,c as r,b9 as _,a as $,bo as p,Q as i,g as C,l as V,c5 as k,m as N,_ as O}from"./index-a46b761f.js";const R=B({__name:"Menu",props:{datas:{type:Object,default:()=>{}},mode:{type:String,default:"horizontal"}},emits:["select"],setup(c,{emit:m}){const b=m,n=c;E(()=>{if(location.hash){const e=document.getElementById(decodeURIComponent(location.hash).replace("#",""));console.log("====",e,decodeURIComponent(location.hash).replace("#","")),e.scrollIntoView({behavior:"smooth",block:"start"})}});const s=S(""),h=(e,a)=>{s.value=e,console.log(e,a,n.datas[e[0]])},f=(e,a)=>{console.log("closeMenu",e,a)},g=()=>{window.history.pushState({},"",`#${n.datas[s.value].label}`),console.log("====",`${n.datas[s.value].label}`),document.getElementById(`${n.datas[s.value].label}`).scrollIntoView({behavior:"smooth",block:"start"})};function x(){console.log("select",...arguments),g(),b("select",...arguments)}return(e,a)=>{const v=V,M=k,I=N;return t(),u(I,{"default-active":"0","unique-opened":!0,collapse:!1,ellipsis:!1,class:"menu",mode:c.mode,onOpen:h,onClose:f,onSelect:x},{default:l(()=>[(t(!0),r(i,null,_(c.datas,(o,d)=>(t(),u(M,{index:`${d}`},{title:l(()=>[$("span",null,p(o==null?void 0:o.label),1)]),default:l(()=>[(t(!0),r(i,null,_(o==null?void 0:o.children,(w,y)=>(t(),u(v,{index:`${d}_${y}`},{default:l(()=>[C(p(w.label),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"]))),256))]),_:1},8,["mode"])}}});const D=O(R,[["__scopeId","data-v-ba6805c0"]]);export{D as _};
