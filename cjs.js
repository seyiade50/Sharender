"use strict";let e=0;var t={num:function(){return e++}};class n extends Promise{constructor(e,t){super(e),this.value=t}toString(){return this.value.toString()}then(e,t){return new n((()=>{super.then(e,t)}),this.value?.then?.()||this.value)}catch(e){return new n((()=>{super.catch(e)}),this.value?.catch?.()||this.value)}finally(e){return new n((()=>{super.finally(e)}),this.value?.finally?.()||this.value)}}var r={ValuePromise:n};const{num:o}=t,{ValuePromise:s}=r,l=e=>`[[[[${e}}}}}`,u=e=>"";const c=e=>`<template rid="${e}"></template>`;function a(e,t){const n=[],r=[];let u={toString(){return this.value}};function c(e,t){if(!(e instanceof Function))return"";const s=o(),c=(t||e.holder||l)(s),a=e(s,c,u);return a instanceof Promise?n.push(a):a instanceof Function&&r.push(a),c}return new s(((o,s)=>{i(e,t,c,s).then((e=>{u.value=e,Promise.all(n).then((e=>{o&&o(u.value);for(let t of r)t(e)}))}),(e=>{console.log(e.toString()),s&&s(e)}))}),u)}a.fetch={value:e=>Promise.resolve(e),fetch:(e,t,n,r,o)=>{let s=a.fetch[e+"s"];return s||(s={},a.fetch[e+"s"]=s),s.hasOwnProperty(t)?Promise.resolve(s[t]):fetch(t,n).then((t=>t[e]()),r).then((e=>(o&&(e=o(e)),s[t]=e,e.url=t,e)),r)},text:(e,t,n)=>a.fetch.fetch("text",e,t,n),temp:(e,t,n,r)=>a.fetch.fetch("text",e,t,n,r||(e.endsWith(".js")?a.jsTemplate:a.template)),json:(e,t,n)=>a.fetch.fetch("json",e,t,n)},a.args="ctx, raw, hook, $",a.template=e=>a.jsTemplate("("+a.args+") => `"+e+"`"),a.jsTemplate=e=>new Function("return "+e+";")(),a.functions={};const i=function(e,t,n,r){let o,s;return o="string"==typeof e?a.fetch.temp(e):e instanceof Promise?e:Promise.resolve(e),s="string"==typeof t?a.json(t):t instanceof Promise?t:Promise.resolve(t||{}),Promise.all([o,s]).then((e=>{let t=e[0],r=e[1];return t(h(r),r,n,a.functions)}),r)};function h(e){return e.__proxy__?e:new Proxy(e,f)}const f={get(e,t){if("__proxy__"===t)return!0;let n=e[t];return null==n?"":"object"==typeof n?h(n):"string"==typeof n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):n}};var p={render:a,include:function(e,t,n){const r=(n,r,o)=>a(e,t).then((e=>{o.value=result.value.value.replace(r,e)}));return r.holder=u,r},lazy:function(e,t,n){let{holder:r,error:o}=n||{},s=(n,r,o)=>()=>{a(e,t).then((e=>{const t=document.querySelector(`[rid="${n}"]`);t&&(t.insertAdjacentHTML("afterend",e),t.parentNode.removeChild(t))}))};return s.holder=e=>(r||c)(e),s},blank:()=>"",loop:(e,t,n)=>e.map(t).join(n||"")};module.exports=p;
