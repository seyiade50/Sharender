"use strict";let e=0;var t={num:function(){return e++}};class n extends Promise{constructor(e,t){super(e),this.value=t}toString(){return this.value.toString()}then(e,t){return new n((()=>{super.then(e,t)}),this.value?.then?.()||this.value)}catch(e){return new n((()=>{super.catch(e)}),this.value?.catch?.()||this.value)}finally(e){return new n((()=>{super.finally(e)}),this.value?.finally?.()||this.value)}}var r={ValuePromise:n};const{num:o}=t,{ValuePromise:l}=r,s=e=>`[[[[${e}}}}}`,a=e=>`[[[[${e}}}}}`;const c=e=>`<template rid="${e}"></template>`;function u(e,t){null==t&&(t={});let n=[],r=[],a={toString(){return this.value}};function c(e,t){if(!(e instanceof Function))return"";let l=o(),c=(t||e.holder||s)(l),u=e(l,c,a);return u instanceof Promise?n.push(u):u instanceof Function&&r.push(u),c}return new l(((o,l)=>{h(e,t,c,l).then((e=>{a.value=e,Promise.allSettled(n).then((e=>{o&&o(a.value);for(let t of r)t(e)}),(e=>{console.log(e.toString()),l&&l(e)}))}),(e=>{console.log(e.toString()),l&&l(e)}))}),a)}const i=()=>"";u.fetch={value:e=>Promise.resolve(e),fetch:(e,t,n,r,o)=>{let l=u.fetch[e+"s"];return l||(l={},u.fetch[e+"s"]=l),l.hasOwnProperty(t)?Promise.resolve(l[t]):fetch(t,n).then((t=>t[e]()),r).then((e=>(o&&(e=o(e)),l[t]=e,e.url=t,e)),r)},text:(e,t,n)=>u.fetch.fetch("text",e,t,n),temp:(e,t,n,r)=>u.fetch.fetch("text",e,t,n,r||(e.endsWith(".js")?u.jsTemplate:u.template)),json:(e,t,n)=>u.fetch.fetch("json",e,t,n)},u.rawTemplates=!0,u.args="ctx, raw, hook, inc, lazy, loop, blank, $",u.template=e=>u.jsTemplate("("+u.args+") => `"+e+"`"),u.jsTemplate=e=>(u.rawTemplates&&(e=function(e){return e.replace(/\&amp;/g,"&").replace(/\&lt\;/g,"<").replace(/\&gt\;/g,">").replace(/\&quot\;/g,'"').replace(/\&\#039\;/g,"'")}(e)),new Function("return "+e+";")()),u.functions={};const h=function(e,t,n,r){let o,l;return o="string"==typeof e?u.fetch.temp(e):e instanceof Promise?e:Promise.resolve(e),l="string"==typeof t?u.json(t):t instanceof Promise?t:Promise.resolve(t||{}),Promise.all([o,l]).then((e=>{let t=e[0],r=e[1];return t(p(r),r,n,((e,t)=>n(function(e,t){let n=(n,r,o)=>new Promise(((n,l)=>u(e,t).then((e=>{o.value=o.value.replace(r,e),n(e)}),l)));return n.holder=a,n}(e,t))),((e,t,r)=>n(function(e,t,n){let r=(n,r,o)=>()=>{u(e,t).then((e=>{const t=document.querySelector(`[rid="${n}"]`);t&&(t.insertAdjacentHTML("afterend",e),t.parentNode.removeChild(t))}))};return r.holder=e=>(n||c)(e),r}(e,t,r))),m,i,u.functions)}),r)};function p(e){return e.__proxy__?e:new Proxy(e,f)}const f={get(e,t){if("__proxy__"===t)return!0;let n=e[t];return null==n?"":"object"==typeof n?p(n):"string"==typeof n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):n}};const m=(e,t,n)=>e.map(t).join(n||"");var g={render:u};module.exports=g;
