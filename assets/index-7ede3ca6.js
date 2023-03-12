(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Ss(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Pc(r):Ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ue(t))return t;if(ie(t))return t}}const Cc=/;(?![^(]*\))/g,Ac=/:([^]+)/,Oc=/\/\*.*?\*\//gs;function Pc(t){const e={};return t.replace(Oc,"").split(Cc).forEach(n=>{if(n){const r=n.split(Ac);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cs(t){let e="";if(ue(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Cs(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dc=Rs(kc);function Oo(t){return!!t||t===""}const Mc=t=>ue(t)?t:t==null?"":B(t)||ie(t)&&(t.toString===Mo||!H(t.toString))?JSON.stringify(t,Po,2):String(t),Po=(t,e)=>e&&e.__v_isRef?Po(t,e.value):zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ko(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!B(e)&&!No(e)?String(e):e,te={},Vt=[],Ne=()=>{},Nc=()=>!1,xc=/^on[^a-z]/,_r=t=>xc.test(t),As=t=>t.startsWith("onUpdate:"),_e=Object.assign,Os=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lc=Object.prototype.hasOwnProperty,K=(t,e)=>Lc.call(t,e),B=Array.isArray,zt=t=>vr(t)==="[object Map]",ko=t=>vr(t)==="[object Set]",H=t=>typeof t=="function",ue=t=>typeof t=="string",Ps=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Do=t=>ie(t)&&H(t.then)&&H(t.catch),Mo=Object.prototype.toString,vr=t=>Mo.call(t),Uc=t=>vr(t).slice(8,-1),No=t=>vr(t)==="[object Object]",ks=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jn=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$c=/-(\w)/g,qe=br(t=>t.replace($c,(e,n)=>n?n.toUpperCase():"")),Fc=/\B([A-Z])/g,sn=br(t=>t.replace(Fc,"-$1").toLowerCase()),yr=br(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=br(t=>t?`on${yr(t)}`:""),En=(t,e)=>!Object.is(t,e),Yn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ci;const Bc=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ke;class Hc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jc(t,e=ke){e&&e.active&&e.effects.push(t)}function Wc(){return ke}const Ds=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xo=t=>(t.w&_t)>0,Lo=t=>(t.n&_t)>0,Vc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_t},zc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xo(s)&&!Lo(s)?s.delete(t):e[n++]=s,s.w&=~_t,s.n&=~_t}e.length=n}},rs=new WeakMap;let hn=0,_t=1;const ss=30;let De;const kt=Symbol(""),is=Symbol("");class Ms{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jc(this,r)}run(){if(!this.active)return this.fn();let e=De,n=ht;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,ht=!0,_t=1<<++hn,hn<=ss?Vc(this):li(this),this.fn()}finally{hn<=ss&&zc(this),_t=1<<--hn,De=this.parent,ht=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(li(this),this.onStop&&this.onStop(),this.active=!1)}}function li(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ht=!0;const Uo=[];function on(){Uo.push(ht),ht=!1}function an(){const t=Uo.pop();ht=t===void 0?!0:t}function ye(t,e,n){if(ht&&De){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ds()),$o(s)}}function $o(t,e){let n=!1;hn<=ss?Lo(t)||(t.n|=_t,n=!xo(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function et(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((u,f)=>{(f==="length"||f>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?ks(n)&&a.push(o.get("length")):(a.push(o.get(kt)),zt(t)&&a.push(o.get(is)));break;case"delete":B(t)||(a.push(o.get(kt)),zt(t)&&a.push(o.get(is)));break;case"set":zt(t)&&a.push(o.get(kt));break}if(a.length===1)a[0]&&os(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);os(Ds(c))}}function os(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kc=Rs("__proto__,__v_isRef,__isVue"),Fo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps)),qc=Ns(),Gc=Ns(!1,!0),Jc=Ns(!0),fi=Yc();function Yc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const r=G(this)[e].apply(this,n);return an(),r}}),t}function Xc(t){const e=G(this);return ye(e,"has",t),e.hasOwnProperty(t)}function Ns(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?hl:Vo:e?Wo:jo).get(r))return r;const o=B(r);if(!t){if(o&&K(fi,s))return Reflect.get(fi,s,i);if(s==="hasOwnProperty")return Xc}const a=Reflect.get(r,s,i);return(Ps(s)?Fo.has(s):Kc(s))||(t||ye(r,"get",s),e)?a:he(a)?o&&ks(s)?a:a.value:ie(a)?t?zo(a):Nn(a):a}}const Qc=Bo(),Zc=Bo(!0);function Bo(t=!1){return function(n,r,s,i){let o=n[r];if(Xt(o)&&he(o)&&!he(s))return!1;if(!t&&(!or(s)&&!Xt(s)&&(o=G(o),s=G(s)),!B(n)&&he(o)&&!he(s)))return o.value=s,!0;const a=B(n)&&ks(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?En(s,o)&&et(n,"set",r,s):et(n,"add",r,s)),c}}function el(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&et(t,"delete",e,void 0),r}function tl(t,e){const n=Reflect.has(t,e);return(!Ps(e)||!Fo.has(e))&&ye(t,"has",e),n}function nl(t){return ye(t,"iterate",B(t)?"length":kt),Reflect.ownKeys(t)}const Ho={get:qc,set:Qc,deleteProperty:el,has:tl,ownKeys:nl},rl={get:Jc,set(t,e){return!0},deleteProperty(t,e){return!0}},sl=_e({},Ho,{get:Gc,set:Zc}),xs=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function jn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&ye(s,"get",e),ye(s,"get",i));const{has:o}=Ir(s),a=r?xs:n?$s:wn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Vn(t,e=!1){return t=t.__v_raw,!e&&ye(G(t),"iterate",kt),Reflect.get(t,"size",t)}function di(t){t=G(t);const e=G(this);return Ir(e).has.call(e,t)||(e.add(t),et(e,"add",t,t)),this}function hi(t,e){e=G(e);const n=G(this),{has:r,get:s}=Ir(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?En(e,o)&&et(n,"set",t,e):et(n,"add",t,e),this}function pi(t){const e=G(this),{has:n,get:r}=Ir(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&et(e,"delete",t,void 0),i}function gi(){const t=G(this),e=t.size!==0,n=t.clear();return e&&et(t,"clear",void 0,void 0),n}function zn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?xs:t?$s:wn;return!t&&ye(a,"iterate",kt),o.forEach((u,f)=>r.call(s,c(u),c(f),i))}}function Kn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=zt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?xs:e?$s:wn;return!e&&ye(i,"iterate",c?is:kt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return t==="delete"?!1:this}}function il(){const t={get(i){return jn(this,i)},get size(){return Vn(this)},has:Wn,add:di,set:hi,delete:pi,clear:gi,forEach:zn(!1,!1)},e={get(i){return jn(this,i,!1,!0)},get size(){return Vn(this)},has:Wn,add:di,set:hi,delete:pi,clear:gi,forEach:zn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Vn(this,!0)},has(i){return Wn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:zn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Vn(this,!0)},has(i){return Wn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),e[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[t,n,e,r]}const[ol,al,cl,ll]=il();function Ls(t,e){const n=e?t?ll:cl:t?al:ol;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const ul={get:Ls(!1,!1)},fl={get:Ls(!1,!0)},dl={get:Ls(!0,!1)},jo=new WeakMap,Wo=new WeakMap,Vo=new WeakMap,hl=new WeakMap;function pl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gl(t){return t.__v_skip||!Object.isExtensible(t)?0:pl(Uc(t))}function Nn(t){return Xt(t)?t:Us(t,!1,Ho,ul,jo)}function ml(t){return Us(t,!1,sl,fl,Wo)}function zo(t){return Us(t,!0,rl,dl,Vo)}function Us(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=gl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Kt(t){return Xt(t)?Kt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function or(t){return!!(t&&t.__v_isShallow)}function Ko(t){return Kt(t)||Xt(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function qo(t){return ir(t,"__v_skip",!0),t}const wn=t=>ie(t)?Nn(t):t,$s=t=>ie(t)?zo(t):t;function Go(t){ht&&De&&(t=G(t),$o(t.dep||(t.dep=Ds())))}function Jo(t,e){t=G(t);const n=t.dep;n&&os(n)}function he(t){return!!(t&&t.__v_isRef===!0)}function Xn(t){return Yo(t,!1)}function _l(t){return Yo(t,!0)}function Yo(t,e){return he(t)?t:new vl(t,e)}class vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:wn(e)}get value(){return Go(this),this._value}set value(e){const n=this.__v_isShallow||or(e)||Xt(e);e=n?e:G(e),En(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wn(e),Jo(this))}}function Qe(t){return he(t)?t.value:t}const bl={get:(t,e,n)=>Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xo(t){return Kt(t)?t:new Proxy(t,bl)}var Qo;class yl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qo]=!1,this._dirty=!0,this.effect=new Ms(e,()=>{this._dirty||(this._dirty=!0,Jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Go(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qo="__v_isReadonly";function Il(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new yl(r,s,i||!s,n)}function pt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Er(i,e,n)}return s}function xe(t,e,n,r){if(H(t)){const i=pt(t,e,n,r);return i&&Do(i)&&i.catch(o=>{Er(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xe(t[i],e,n,r));return s}function Er(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){pt(c,null,10,[t,o,a]);return}}El(t,n,s,r)}function El(t,e,n,r=!0){console.error(t)}let Tn=!1,as=!1;const de=[];let Ve=0;const qt=[];let Je=null,At=0;const Zo=Promise.resolve();let Fs=null;function ea(t){const e=Fs||Zo;return t?e.then(this?t.bind(this):t):e}function wl(t){let e=Ve+1,n=de.length;for(;e<n;){const r=e+n>>>1;Rn(de[r])<t?e=r+1:n=r}return e}function Bs(t){(!de.length||!de.includes(t,Tn&&t.allowRecurse?Ve+1:Ve))&&(t.id==null?de.push(t):de.splice(wl(t.id),0,t),ta())}function ta(){!Tn&&!as&&(as=!0,Fs=Zo.then(ra))}function Tl(t){const e=de.indexOf(t);e>Ve&&de.splice(e,1)}function Rl(t){B(t)?qt.push(...t):(!Je||!Je.includes(t,t.allowRecurse?At+1:At))&&qt.push(t),ta()}function mi(t,e=Tn?Ve+1:0){for(;e<de.length;e++){const n=de[e];n&&n.pre&&(de.splice(e,1),e--,n())}}function na(t){if(qt.length){const e=[...new Set(qt)];if(qt.length=0,Je){Je.push(...e);return}for(Je=e,Je.sort((n,r)=>Rn(n)-Rn(r)),At=0;At<Je.length;At++)Je[At]();Je=null,At=0}}const Rn=t=>t.id==null?1/0:t.id,Sl=(t,e)=>{const n=Rn(t)-Rn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ra(t){as=!1,Tn=!0,de.sort(Sl);const e=Ne;try{for(Ve=0;Ve<de.length;Ve++){const n=de[Ve];n&&n.active!==!1&&pt(n,null,14)}}finally{Ve=0,de.length=0,na(),Tn=!1,Fs=null,(de.length||qt.length)&&ra()}}function Cl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||te;p&&(s=n.map(v=>ue(v)?v.trim():v)),h&&(s=n.map(ns))}let a,c=r[a=Fr(e)]||r[a=Fr(qe(e))];!c&&i&&(c=r[a=Fr(sn(e))]),c&&xe(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xe(u,t,6,s)}}function sa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const f=sa(u,e,!0);f&&(a=!0,_e(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):_e(o,i),ie(t)&&r.set(t,o),o)}function wr(t,e){return!t||!_r(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,sn(e))||K(t,e))}let pe=null,Tr=null;function ar(t){const e=pe;return pe=t,Tr=t&&t.type.__scopeId||null,e}function Rr(t){Tr=t}function Sr(){Tr=null}function ne(t,e=pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Si(-1);const i=ar(e);let o;try{o=t(...s)}finally{ar(i),r._d&&Si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:h,data:p,setupState:v,ctx:S,inheritAttrs:P}=t;let F,A;const U=ar(t);try{if(n.shapeFlag&4){const q=s||r;F=We(f.call(q,q,h,i,v,p,S)),A=c}else{const q=e;F=We(q.length>1?q(i,{attrs:c,slots:a,emit:u}):q(i,null)),A=e.props?c:Al(c)}}catch(q){vn.length=0,Er(q,t,1),F=j(vt)}let k=F;if(A&&P!==!1){const q=Object.keys(A),{shapeFlag:le}=k;q.length&&le&7&&(o&&q.some(As)&&(A=Ol(A,o)),k=Qt(k,A))}return n.dirs&&(k=Qt(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),F=k,ar(U),F}const Al=t=>{let e;for(const n in t)(n==="class"||n==="style"||_r(n))&&((e||(e={}))[n]=t[n]);return e},Ol=(t,e)=>{const n={};for(const r in t)(!As(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!wr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_i(r,o,u):!0:!!o;return!1}function _i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wr(n,i))return!0}return!1}function kl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dl=t=>t.__isSuspense;function Ml(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Rl(t)}function Qn(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=ce||pe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const qn={};function Zn(t,e,n){return ia(t,e,n)}function ia(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){const a=Wc()===(ce==null?void 0:ce.scope)?ce:null;let c,u=!1,f=!1;if(he(t)?(c=()=>t.value,u=or(t)):Kt(t)?(c=()=>t,r=!0):B(t)?(f=!0,u=t.some(k=>Kt(k)||or(k)),c=()=>t.map(k=>{if(he(k))return k.value;if(Kt(k))return Pt(k);if(H(k))return pt(k,a,2)})):H(t)?e?c=()=>pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xe(t,a,3,[p])}:c=Ne,e&&r){const k=c;c=()=>Pt(k())}let h,p=k=>{h=A.onStop=()=>{pt(k,a,4)}},v;if(Cn)if(p=Ne,e?n&&xe(e,a,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const k=Cu();v=k.__watcherHandles||(k.__watcherHandles=[])}else return Ne;let S=f?new Array(t.length).fill(qn):qn;const P=()=>{if(A.active)if(e){const k=A.run();(r||u||(f?k.some((q,le)=>En(q,S[le])):En(k,S)))&&(h&&h(),xe(e,a,3,[k,S===qn?void 0:f&&S[0]===qn?[]:S,p]),S=k)}else A.run()};P.allowRecurse=!!e;let F;s==="sync"?F=P:s==="post"?F=()=>be(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),F=()=>Bs(P));const A=new Ms(c,F);e?n?P():S=A.run():s==="post"?be(A.run.bind(A),a&&a.suspense):A.run();const U=()=>{A.stop(),a&&a.scope&&Os(a.scope.effects,A)};return v&&v.push(U),U}function Nl(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?oa(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=ce;Zt(this);const a=ia(s,i.bind(r),n);return o?Zt(o):Dt(),a}function oa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))Pt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(ko(t)||zt(t))t.forEach(n=>{Pt(n,e)});else if(No(t))for(const n in t)Pt(t[n],e);return t}function bt(t){return H(t)?{setup:t,name:t.name}:t}const mn=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function xl(t,e){ca(t,"a",e)}function Ll(t,e){ca(t,"da",e)}function ca(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)aa(s.parent.vnode)&&Ul(r,e,n,s),s=s.parent}}function Ul(t,e,n,r){const s=Cr(e,t,r,!0);la(()=>{Os(r[e],s)},n)}function Cr(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),Zt(n);const a=xe(e,n,t,o);return Dt(),an(),a});return r?s.unshift(i):s.push(i),i}}const nt=t=>(e,n=ce)=>(!Cn||t==="sp")&&Cr(t,(...r)=>e(...r),n),$l=nt("bm"),Fl=nt("m"),Bl=nt("bu"),Hl=nt("u"),jl=nt("bum"),la=nt("um"),Wl=nt("sp"),Vl=nt("rtg"),zl=nt("rtc");function Kl(t,e=ce){Cr("ec",t,e)}function vi(t,e){const n=pe;if(n===null)return t;const r=Pr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=te]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(on(),xe(c,n,8,[t.el,a,t,e]),an())}}const ua="components";function Hs(t,e){return Gl(ua,t,!0,e)||t}const ql=Symbol();function Gl(t,e,n=!0,r=!1){const s=pe||ce;if(s){const i=s.type;if(t===ua){const a=Tu(i,!1);if(a&&(a===e||a===qe(e)||a===yr(qe(e))))return i}const o=bi(s[t]||i[t],e)||bi(s.appContext[t],e);return!o&&r?i:o}}function bi(t,e){return t&&(t[e]||t[qe(e)]||t[yr(qe(e))])}function Hr(t,e,n={},r,s){if(pe.isCE||pe.parent&&mn(pe.parent)&&pe.parent.isCE)return e!=="default"&&(n.name=e),j("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ie();const o=i&&fa(i(n)),a=Vs(Te,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function fa(t){return t.some(e=>lr(e)?!(e.type===vt||e.type===Te&&!fa(e.children)):!0)?t:null}const cs=t=>t?Ea(t)?Pr(t)||t.proxy:cs(t.parent):null,_n=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cs(t.parent),$root:t=>cs(t.root),$emit:t=>t.emit,$options:t=>js(t),$forceUpdate:t=>t.f||(t.f=()=>Bs(t.update)),$nextTick:t=>t.n||(t.n=ea.bind(t.proxy)),$watch:t=>Nl.bind(t)}),jr=(t,e)=>t!==te&&!t.__isScriptSetup&&K(t,e),Jl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jr(r,e))return o[e]=1,r[e];if(s!==te&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==te&&K(n,e))return o[e]=4,n[e];ls&&(o[e]=0)}}const f=_n[e];let h,p;if(f)return e==="$attrs"&&ye(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==te&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jr(s,e)?(s[e]=n,!0):r!==te&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&K(t,o)||jr(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(_n,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ls=!0;function Yl(t){const e=js(t),n=t.proxy,r=t.ctx;ls=!1,e.beforeCreate&&yi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:S,activated:P,deactivated:F,beforeDestroy:A,beforeUnmount:U,destroyed:k,unmounted:q,render:le,renderTracked:fe,renderTriggered:Ee,errorCaptured:Ce,serverPrefetch:Fe,expose:Re,inheritAttrs:rt,components:Be,directives:Ut,filters:Et}=e;if(u&&Xl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const Y=o[Q];H(Y)&&(r[Q]=Y.bind(n))}if(s){const Q=s.call(n,n);ie(Q)&&(t.data=Nn(Q))}if(ls=!0,i)for(const Q in i){const Y=i[Q],Ae=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):Ne,wt=!H(Y)&&H(Y.set)?Y.set.bind(n):Ne,Oe=Se({get:Ae,set:wt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:ve=>Oe.value=ve})}if(a)for(const Q in a)da(a[Q],r,n,Q);if(c){const Q=H(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(Y=>{Qn(Y,Q[Y])})}f&&yi(f,t,"c");function oe(Q,Y){B(Y)?Y.forEach(Ae=>Q(Ae.bind(n))):Y&&Q(Y.bind(n))}if(oe($l,h),oe(Fl,p),oe(Bl,v),oe(Hl,S),oe(xl,P),oe(Ll,F),oe(Kl,Ce),oe(zl,fe),oe(Vl,Ee),oe(jl,U),oe(la,q),oe(Wl,Fe),B(Re))if(Re.length){const Q=t.exposed||(t.exposed={});Re.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:Ae=>n[Y]=Ae})})}else t.exposed||(t.exposed={});le&&t.render===Ne&&(t.render=le),rt!=null&&(t.inheritAttrs=rt),Be&&(t.components=Be),Ut&&(t.directives=Ut)}function Xl(t,e,n=Ne,r=!1){B(t)&&(t=us(t));for(const s in t){const i=t[s];let o;ie(i)?"default"in i?o=Ze(i.from||s,i.default,!0):o=Ze(i.from||s):o=Ze(i),he(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function yi(t,e,n){xe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function da(t,e,n,r){const s=r.includes(".")?oa(n,r):()=>n[r];if(ue(t)){const i=e[t];H(i)&&Zn(s,i)}else if(H(t))Zn(s,t.bind(n));else if(ie(t))if(B(t))t.forEach(i=>da(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Zn(s,i,t)}}function js(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>cr(c,u,o,!0)),cr(c,e,o)),ie(e)&&i.set(e,c),c}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ql[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ql={data:Ii,props:St,emits:St,methods:St,computed:St,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:St,directives:St,watch:eu,provide:Ii,inject:Zl};function Ii(t,e){return e?t?function(){return _e(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Zl(t,e){return St(us(t),us(e))}function us(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function St(t,e){return t?_e(_e(Object.create(null),t),e):e}function eu(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function tu(t,e,n,r=!1){const s={},i={};ir(i,Or,1),t.propsDefaults=Object.create(null),ha(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ml(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(wr(t.emitsOptions,p))continue;const v=e[p];if(c)if(K(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const S=qe(p);s[S]=fs(c,a,S,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{ha(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!K(e,h)&&((f=sn(h))===h||!K(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=fs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!K(e,h))&&(delete i[h],u=!0)}u&&et(t,"set","$attrs")}function ha(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Jn(c))continue;const u=e[c];let f;s&&K(s,f=qe(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:wr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=G(n),u=a||te;for(let f=0;f<i.length;f++){const h=i[f];n[h]=fs(s,c,h,u[h],t,!K(u,h))}}return o}function fs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Zt(s),r=u[n]=c.call(null,e),Dt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function pa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[p,v]=pa(h,e,!0);_e(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ie(t)&&r.set(t,Vt),Vt;if(B(i))for(let f=0;f<i.length;f++){const h=qe(i[f]);Ei(h)&&(o[h]=te)}else if(i)for(const f in i){const h=qe(f);if(Ei(h)){const p=i[f],v=o[h]=B(p)||H(p)?{type:p}:Object.assign({},p);if(v){const S=Ri(Boolean,v.type),P=Ri(String,v.type);v[0]=S>-1,v[1]=P<0||S<P,(S>-1||K(v,"default"))&&a.push(h)}}}const u=[o,a];return ie(t)&&r.set(t,u),u}function Ei(t){return t[0]!=="$"}function wi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ti(t,e){return wi(t)===wi(e)}function Ri(t,e){return B(e)?e.findIndex(n=>Ti(n,t)):H(e)&&Ti(e,t)?0:-1}const ga=t=>t[0]==="_"||t==="$stable",Ws=t=>B(t)?t.map(We):[We(t)],ru=(t,e,n)=>{if(e._n)return e;const r=ne((...s)=>Ws(e(...s)),n);return r._c=!1,r},ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ga(s))continue;const i=t[s];if(H(i))e[s]=ru(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},_a=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},su=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),ir(e,"_",n)):ma(e,t.slots={})}else t.slots={},e&&_a(t,e);ir(t.slots,Or,1)},iu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ma(e,s)),o=e}else e&&(_a(t,e),o={default:1});if(i)for(const a in s)!ga(a)&&!(a in o)&&delete s[a]};function va(){return{app:null,config:{isNativeTag:Nc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ou=0;function au(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!ie(s)&&(s=null);const i=va(),o=new Set;let a=!1;const c=i.app={_uid:ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Au,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...f)):H(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,h){if(!a){const p=j(r,s);return p.appContext=i,f&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Pr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c}};return c}}function ds(t,e,n,r,s=!1){if(B(t)){t.forEach((p,v)=>ds(p,e&&(B(e)?e[v]:e),n,r,s));return}if(mn(r)&&!s)return;const i=r.shapeFlag&4?Pr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===te?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(ue(u)?(f[u]=null,K(h,u)&&(h[u]=null)):he(u)&&(u.value=null)),H(c))pt(c,a,12,[o,f]);else{const p=ue(c),v=he(c);if(p||v){const S=()=>{if(t.f){const P=p?K(h,c)?h[c]:f[c]:c.value;s?B(P)&&Os(P,i):B(P)?P.includes(i)||P.push(i):p?(f[c]=[i],K(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,be(S,n)):S()}}}const be=Ml;function cu(t){return lu(t)}function lu(t,e){const n=Bc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=Ne,insertStaticContent:S}=t,P=(l,d,g,m=null,b=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(l===d)return;l&&!fn(l,d)&&(m=T(l),ve(l,b,E,!0),l=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:O}=d;switch(y){case Ar:F(l,d,g,m);break;case vt:A(l,d,g,m);break;case Wr:l==null&&U(d,g,m,R);break;case Te:Be(l,d,g,m,b,E,R,I,w);break;default:O&1?le(l,d,g,m,b,E,R,I,w):O&6?Ut(l,d,g,m,b,E,R,I,w):(O&64||O&128)&&y.process(l,d,g,m,b,E,R,I,w,z)}N!=null&&b&&ds(N,l&&l.ref,E,d||l,!d)},F=(l,d,g,m)=>{if(l==null)r(d.el=a(d.children),g,m);else{const b=d.el=l.el;d.children!==l.children&&u(b,d.children)}},A=(l,d,g,m)=>{l==null?r(d.el=c(d.children||""),g,m):d.el=l.el},U=(l,d,g,m)=>{[l.el,l.anchor]=S(l.children,d,g,m,l.el,l.anchor)},k=({el:l,anchor:d},g,m)=>{let b;for(;l&&l!==d;)b=p(l),r(l,g,m),l=b;r(d,g,m)},q=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),s(l),l=g;s(d)},le=(l,d,g,m,b,E,R,I,w)=>{R=R||d.type==="svg",l==null?fe(d,g,m,b,E,R,I,w):Fe(l,d,b,E,R,I,w)},fe=(l,d,g,m,b,E,R,I)=>{let w,y;const{type:N,props:O,shapeFlag:x,transition:$,dirs:V}=l;if(w=l.el=o(l.type,E,O&&O.is,O),x&8?f(w,l.children):x&16&&Ce(l.children,w,null,m,b,E&&N!=="foreignObject",R,I),V&&Tt(l,null,m,"created"),Ee(w,l,l.scopeId,R,m),O){for(const X in O)X!=="value"&&!Jn(X)&&i(w,X,null,O[X],E,l.children,m,b,C);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&je(y,m,l)}V&&Tt(l,null,m,"beforeMount");const Z=(!b||b&&!b.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(w),r(w,d,g),((y=O&&O.onVnodeMounted)||Z||V)&&be(()=>{y&&je(y,m,l),Z&&$.enter(w),V&&Tt(l,null,m,"mounted")},b)},Ee=(l,d,g,m,b)=>{if(g&&v(l,g),m)for(let E=0;E<m.length;E++)v(l,m[E]);if(b){let E=b.subTree;if(d===E){const R=b.vnode;Ee(l,R,R.scopeId,R.slotScopeIds,b.parent)}}},Ce=(l,d,g,m,b,E,R,I,w=0)=>{for(let y=w;y<l.length;y++){const N=l[y]=I?at(l[y]):We(l[y]);P(null,N,d,g,m,b,E,R,I)}},Fe=(l,d,g,m,b,E,R)=>{const I=d.el=l.el;let{patchFlag:w,dynamicChildren:y,dirs:N}=d;w|=l.patchFlag&16;const O=l.props||te,x=d.props||te;let $;g&&Rt(g,!1),($=x.onVnodeBeforeUpdate)&&je($,g,d,l),N&&Tt(d,l,g,"beforeUpdate"),g&&Rt(g,!0);const V=b&&d.type!=="foreignObject";if(y?Re(l.dynamicChildren,y,I,g,m,V,E):R||Y(l,d,I,null,g,m,V,E,!1),w>0){if(w&16)rt(I,d,O,x,g,m,b);else if(w&2&&O.class!==x.class&&i(I,"class",null,x.class,b),w&4&&i(I,"style",O.style,x.style,b),w&8){const Z=d.dynamicProps;for(let X=0;X<Z.length;X++){const ae=Z[X],Pe=O[ae],Ft=x[ae];(Ft!==Pe||ae==="value")&&i(I,ae,Pe,Ft,b,l.children,g,m,C)}}w&1&&l.children!==d.children&&f(I,d.children)}else!R&&y==null&&rt(I,d,O,x,g,m,b);(($=x.onVnodeUpdated)||N)&&be(()=>{$&&je($,g,d,l),N&&Tt(d,l,g,"updated")},m)},Re=(l,d,g,m,b,E,R)=>{for(let I=0;I<d.length;I++){const w=l[I],y=d[I],N=w.el&&(w.type===Te||!fn(w,y)||w.shapeFlag&70)?h(w.el):g;P(w,y,N,null,m,b,E,R,!0)}},rt=(l,d,g,m,b,E,R)=>{if(g!==m){if(g!==te)for(const I in g)!Jn(I)&&!(I in m)&&i(l,I,g[I],null,R,d.children,b,E,C);for(const I in m){if(Jn(I))continue;const w=m[I],y=g[I];w!==y&&I!=="value"&&i(l,I,y,w,R,d.children,b,E,C)}"value"in m&&i(l,"value",g.value,m.value)}},Be=(l,d,g,m,b,E,R,I,w)=>{const y=d.el=l?l.el:a(""),N=d.anchor=l?l.anchor:a("");let{patchFlag:O,dynamicChildren:x,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),l==null?(r(y,g,m),r(N,g,m),Ce(d.children,g,N,b,E,R,I,w)):O>0&&O&64&&x&&l.dynamicChildren?(Re(l.dynamicChildren,x,g,b,E,R,I),(d.key!=null||b&&d===b.subTree)&&ba(l,d,!0)):Y(l,d,g,N,b,E,R,I,w)},Ut=(l,d,g,m,b,E,R,I,w)=>{d.slotScopeIds=I,l==null?d.shapeFlag&512?b.ctx.activate(d,g,m,R,w):Et(d,g,m,b,E,R,w):ln(l,d,w)},Et=(l,d,g,m,b,E,R)=>{const I=l.component=bu(l,m,b);if(aa(l)&&(I.ctx.renderer=z),yu(I),I.asyncDep){if(b&&b.registerDep(I,oe),!l.el){const w=I.subTree=j(vt);A(null,w,d,g)}return}oe(I,l,d,g,b,E,R)},ln=(l,d,g)=>{const m=d.component=l.component;if(Pl(l,d,g))if(m.asyncDep&&!m.asyncResolved){Q(m,d,g);return}else m.next=d,Tl(m.update),m.update();else d.el=l.el,m.vnode=d},oe=(l,d,g,m,b,E,R)=>{const I=()=>{if(l.isMounted){let{next:N,bu:O,u:x,parent:$,vnode:V}=l,Z=N,X;Rt(l,!1),N?(N.el=V.el,Q(l,N,R)):N=V,O&&Yn(O),(X=N.props&&N.props.onVnodeBeforeUpdate)&&je(X,$,N,V),Rt(l,!0);const ae=Br(l),Pe=l.subTree;l.subTree=ae,P(Pe,ae,h(Pe.el),T(Pe),l,b,E),N.el=ae.el,Z===null&&kl(l,ae.el),x&&be(x,b),(X=N.props&&N.props.onVnodeUpdated)&&be(()=>je(X,$,N,V),b)}else{let N;const{el:O,props:x}=d,{bm:$,m:V,parent:Z}=l,X=mn(d);if(Rt(l,!1),$&&Yn($),!X&&(N=x&&x.onVnodeBeforeMount)&&je(N,Z,d),Rt(l,!0),O&&W){const ae=()=>{l.subTree=Br(l),W(O,l.subTree,l,b,null)};X?d.type.__asyncLoader().then(()=>!l.isUnmounted&&ae()):ae()}else{const ae=l.subTree=Br(l);P(null,ae,g,m,l,b,E),d.el=ae.el}if(V&&be(V,b),!X&&(N=x&&x.onVnodeMounted)){const ae=d;be(()=>je(N,Z,ae),b)}(d.shapeFlag&256||Z&&mn(Z.vnode)&&Z.vnode.shapeFlag&256)&&l.a&&be(l.a,b),l.isMounted=!0,d=g=m=null}},w=l.effect=new Ms(I,()=>Bs(y),l.scope),y=l.update=()=>w.run();y.id=l.uid,Rt(l,!0),y()},Q=(l,d,g)=>{d.component=l;const m=l.vnode.props;l.vnode=d,l.next=null,nu(l,d.props,m,g),iu(l,d.children,g),on(),mi(),an()},Y=(l,d,g,m,b,E,R,I,w=!1)=>{const y=l&&l.children,N=l?l.shapeFlag:0,O=d.children,{patchFlag:x,shapeFlag:$}=d;if(x>0){if(x&128){wt(y,O,g,m,b,E,R,I,w);return}else if(x&256){Ae(y,O,g,m,b,E,R,I,w);return}}$&8?(N&16&&C(y,b,E),O!==y&&f(g,O)):N&16?$&16?wt(y,O,g,m,b,E,R,I,w):C(y,b,E,!0):(N&8&&f(g,""),$&16&&Ce(O,g,m,b,E,R,I,w))},Ae=(l,d,g,m,b,E,R,I,w)=>{l=l||Vt,d=d||Vt;const y=l.length,N=d.length,O=Math.min(y,N);let x;for(x=0;x<O;x++){const $=d[x]=w?at(d[x]):We(d[x]);P(l[x],$,g,null,b,E,R,I,w)}y>N?C(l,b,E,!0,!1,O):Ce(d,g,m,b,E,R,I,w,O)},wt=(l,d,g,m,b,E,R,I,w)=>{let y=0;const N=d.length;let O=l.length-1,x=N-1;for(;y<=O&&y<=x;){const $=l[y],V=d[y]=w?at(d[y]):We(d[y]);if(fn($,V))P($,V,g,null,b,E,R,I,w);else break;y++}for(;y<=O&&y<=x;){const $=l[O],V=d[x]=w?at(d[x]):We(d[x]);if(fn($,V))P($,V,g,null,b,E,R,I,w);else break;O--,x--}if(y>O){if(y<=x){const $=x+1,V=$<N?d[$].el:m;for(;y<=x;)P(null,d[y]=w?at(d[y]):We(d[y]),g,V,b,E,R,I,w),y++}}else if(y>x)for(;y<=O;)ve(l[y],b,E,!0),y++;else{const $=y,V=y,Z=new Map;for(y=V;y<=x;y++){const we=d[y]=w?at(d[y]):We(d[y]);we.key!=null&&Z.set(we.key,y)}let X,ae=0;const Pe=x-V+1;let Ft=!1,ii=0;const un=new Array(Pe);for(y=0;y<Pe;y++)un[y]=0;for(y=$;y<=O;y++){const we=l[y];if(ae>=Pe){ve(we,b,E,!0);continue}let He;if(we.key!=null)He=Z.get(we.key);else for(X=V;X<=x;X++)if(un[X-V]===0&&fn(we,d[X])){He=X;break}He===void 0?ve(we,b,E,!0):(un[He-V]=y+1,He>=ii?ii=He:Ft=!0,P(we,d[He],g,null,b,E,R,I,w),ae++)}const oi=Ft?uu(un):Vt;for(X=oi.length-1,y=Pe-1;y>=0;y--){const we=V+y,He=d[we],ai=we+1<N?d[we+1].el:m;un[y]===0?P(null,He,g,ai,b,E,R,I,w):Ft&&(X<0||y!==oi[X]?Oe(He,g,ai,2):X--)}}},Oe=(l,d,g,m,b=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=l;if(y&6){Oe(l.component.subTree,d,g,m);return}if(y&128){l.suspense.move(d,g,m);return}if(y&64){R.move(l,d,g,z);return}if(R===Te){r(E,d,g);for(let O=0;O<w.length;O++)Oe(w[O],d,g,m);r(l.anchor,d,g);return}if(R===Wr){k(l,d,g);return}if(m!==2&&y&1&&I)if(m===0)I.beforeEnter(E),r(E,d,g),be(()=>I.enter(E),b);else{const{leave:O,delayLeave:x,afterLeave:$}=I,V=()=>r(E,d,g),Z=()=>{O(E,()=>{V(),$&&$()})};x?x(E,V,Z):Z()}else r(E,d,g)},ve=(l,d,g,m=!1,b=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:N,patchFlag:O,dirs:x}=l;if(I!=null&&ds(I,null,g,l,!0),N&256){d.ctx.deactivate(l);return}const $=N&1&&x,V=!mn(l);let Z;if(V&&(Z=R&&R.onVnodeBeforeUnmount)&&je(Z,d,l),N&6)_(l.component,g,m);else{if(N&128){l.suspense.unmount(g,m);return}$&&Tt(l,null,d,"beforeUnmount"),N&64?l.type.remove(l,d,g,b,z,m):y&&(E!==Te||O>0&&O&64)?C(y,d,g,!1,!0):(E===Te&&O&384||!b&&N&16)&&C(w,d,g),m&&$t(l)}(V&&(Z=R&&R.onVnodeUnmounted)||$)&&be(()=>{Z&&je(Z,d,l),$&&Tt(l,null,d,"unmounted")},g)},$t=l=>{const{type:d,el:g,anchor:m,transition:b}=l;if(d===Te){Hn(g,m);return}if(d===Wr){q(l);return}const E=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:I}=b,w=()=>R(g,E);I?I(l.el,E,w):w()}else E()},Hn=(l,d)=>{let g;for(;l!==d;)g=p(l),s(l),l=g;s(d)},_=(l,d,g)=>{const{bum:m,scope:b,update:E,subTree:R,um:I}=l;m&&Yn(m),b.stop(),E&&(E.active=!1,ve(R,l,d,g)),I&&be(I,d),be(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(l,d,g,m=!1,b=!1,E=0)=>{for(let R=E;R<l.length;R++)ve(l[R],d,g,m,b)},T=l=>l.shapeFlag&6?T(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),D=(l,d,g)=>{l==null?d._vnode&&ve(d._vnode,null,null,!0):P(d._vnode||null,l,d,null,null,null,g),mi(),na(),d._vnode=l},z={p:P,um:ve,m:Oe,r:$t,mt:Et,mc:Ce,pc:Y,pbc:Re,n:T,o:t};let re,W;return e&&([re,W]=e(z)),{render:D,hydrate:re,createApp:au(D,re)}}function Rt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ba(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=at(s[i]),a.el=o.el),n||ba(o,a)),a.type===Ar&&(a.el=o.el)}}function uu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const fu=t=>t.__isTeleport,Te=Symbol(void 0),Ar=Symbol(void 0),vt=Symbol(void 0),Wr=Symbol(void 0),vn=[];let Me=null;function Ie(t=!1){vn.push(Me=t?null:[])}function du(){vn.pop(),Me=vn[vn.length-1]||null}let Sn=1;function Si(t){Sn+=t}function ya(t){return t.dynamicChildren=Sn>0?Me||Vt:null,du(),Sn>0&&Me&&Me.push(t),t}function Le(t,e,n,r,s,i){return ya(M(t,e,n,r,s,i,!0))}function Vs(t,e,n,r,s){return ya(j(t,e,n,r,s,!0))}function lr(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Or="__vInternal",Ia=({key:t})=>t??null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?ue(t)||he(t)||H(t)?{i:pe,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ia(e),ref:e&&er(e),scopeId:Tr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pe};return a?(zs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Sn>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const j=hu;function hu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ql)&&(t=vt),lr(t)){const a=Qt(t,e,!0);return n&&zs(a,n),Sn>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag|=-2,a}if(Ru(t)&&(t=t.__vccOpts),e){e=pu(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=Cs(a)),ie(c)&&(Ko(c)&&!B(c)&&(c=_e({},c)),e.style=Ss(c))}const o=ue(t)?1:Dl(t)?128:fu(t)?64:ie(t)?4:H(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function pu(t){return t?Ko(t)||Or in t?_e({},t):t:null}function Qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?mu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ia(a),ref:e&&e.ref?n&&s?B(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function se(t=" ",e=0){return j(Ar,null,t,e)}function gu(t="",e=!1){return e?(Ie(),Vs(vt,null,t)):j(vt,null,t)}function We(t){return t==null||typeof t=="boolean"?j(vt):B(t)?j(Te,null,t.slice()):typeof t=="object"?at(t):j(Ar,null,String(t))}function at(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Or in e)?e._ctx=pe:s===3&&pe&&(pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),r&64?(n=16,e=[se(e)]):n=8);t.children=e,t.shapeFlag|=n}function mu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cs([e.class,r.class]));else if(s==="style")e.style=Ss([e.style,r.style]);else if(_r(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function je(t,e,n,r=null){xe(t,e,7,[n,r])}const _u=va();let vu=0;function bu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_u,i={uid:vu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(r,s),emitsOptions:sa(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cl.bind(null,i),t.ce&&t.ce(i),i}let ce=null;const Zt=t=>{ce=t,t.scope.on()},Dt=()=>{ce&&ce.scope.off(),ce=null};function Ea(t){return t.vnode.shapeFlag&4}let Cn=!1;function yu(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,s=Ea(t);tu(t,n,s,e),su(t,r);const i=s?Iu(t,e):void 0;return Cn=!1,i}function Iu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qo(new Proxy(t.ctx,Jl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wu(t):null;Zt(t),on();const i=pt(r,t,0,[t.props,s]);if(an(),Dt(),Do(i)){if(i.then(Dt,Dt),e)return i.then(o=>{Ci(t,o,e)}).catch(o=>{Er(o,t,0)});t.asyncDep=i}else Ci(t,i,e)}else wa(t,e)}function Ci(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Xo(e)),wa(t,n)}let Ai;function wa(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template||js(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,u)}}t.render=r.render||Ne}Zt(t),on(),Yl(t),an(),Dt()}function Eu(t){return new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}})}function wu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Eu(t))},slots:t.slots,emit:t.emit,expose:e}}function Pr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xo(qo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}}))}function Tu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Ru(t){return H(t)&&"__vccOpts"in t}const Se=(t,e)=>Il(t,e,Cn);function Ta(t,e,n){const r=arguments.length;return r===2?ie(e)&&!B(e)?lr(e)?j(t,null,[e]):j(t,e):j(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&lr(n)&&(n=[n]),j(t,e,n))}const Su=Symbol(""),Cu=()=>Ze(Su),Au="3.2.47",Ou="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Oi=Ot&&Ot.createElement("template"),Pu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ot.createElementNS(Ou,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ku(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Du(t,e,n){const r=t.style,s=ue(n);if(n&&!s){if(e&&!ue(e))for(const i in e)n[i]==null&&hs(r,i,"");for(const i in n)hs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Pi=/\s*!important$/;function hs(t,e,n){if(B(n))n.forEach(r=>hs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Mu(t,e);Pi.test(n)?t.setProperty(sn(r),n.replace(Pi,""),"important"):t[r]=n}}const ki=["Webkit","Moz","ms"],Vr={};function Mu(t,e){const n=Vr[e];if(n)return n;let r=qe(e);if(r!=="filter"&&r in t)return Vr[e]=r;r=yr(r);for(let s=0;s<ki.length;s++){const i=ki[s]+r;if(i in t)return Vr[e]=i}return e}const Di="http://www.w3.org/1999/xlink";function Nu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Di,e.slice(6,e.length)):t.setAttributeNS(Di,e,n);else{const i=Dc(e);n==null||i&&!Oo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Oo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ht(t,e,n,r){t.addEventListener(e,n,r)}function Lu(t,e,n,r){t.removeEventListener(e,n,r)}function Uu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=$u(e);if(r){const u=i[e]=Hu(r,s);Ht(t,a,u,c)}else o&&(Lu(t,a,o,c),i[e]=void 0)}}const Mi=/(?:Once|Passive|Capture)$/;function $u(t){let e;if(Mi.test(t)){e={};let r;for(;r=t.match(Mi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let zr=0;const Fu=Promise.resolve(),Bu=()=>zr||(Fu.then(()=>zr=0),zr=Date.now());function Hu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(ju(r,n.value),e,5,[r])};return n.value=t,n.attached=Bu(),n}function ju(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ni=/^on[a-z]/,Wu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ku(t,r,s):e==="style"?Du(t,n,r):_r(e)?As(e)||Uu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vu(t,e,r,s))?xu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nu(t,e,r,s))};function Vu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ni.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ni.test(e)&&ue(n)?!1:e in t}const xi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Yn(e,n):e};function zu(t){t.target.composing=!0}function Li(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ui={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=xi(s);const i=r||s.props&&s.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ns(a)),t._assign(a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",zu),Ht(t,"compositionend",Li),Ht(t,"change",Li))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=xi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ns(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ku=["ctrl","shift","alt","meta"],qu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ku.some(n=>t[`${n}Key`]&&!e.includes(n))},Gu=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=qu[e[s]];if(i&&i(n,e))return}return t(n,...r)},Ju=_e({patchProp:Wu},Pu);let $i;function Yu(){return $i||($i=cu(Ju))}const Xu=(...t)=>{const e=Yu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qu(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qu(t){return ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Zu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const bn=()=>{},Ue=Array.isArray,ef=/\/$/,tf=t=>t.replace(ef,"");function qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=of(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&en(e.matched[r],n.matched[s])&&Ra(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ra(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sf(t[n],e[n]))return!1;return!0}function sf(t,e){return Ue(t)?Bi(t,e):Ue(e)?Bi(e,t):t===e}function Bi(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function of(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(t){t.pop="pop",t.push="push"})(An||(An={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function af(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tf(t)}const cf=/^[^#]+#/;function lf(t,e){return t.replace(cf,"#")+e}function uf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ff(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hi(t,e){return(history.state?history.state.position-e:-1)+t}const ps=new Map;function df(t,e){ps.set(t,e)}function hf(t){const e=ps.get(t);return ps.delete(t),e}let pf=()=>location.protocol+"//"+location.host;function Sa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Fi(c,"")}return Fi(n,t)+r+s}function gf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const v=Sa(t,location),S=n.value,P=e.value;let F=0;if(p){if(n.value=v,e.value=p,o&&o===S){o=null;return}F=P?p.position-P.position:0}else r(v);s.forEach(A=>{A(n.value,S,{delta:F,type:An.pop,direction:F?F>0?yn.forward:yn.back:yn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:kr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:u,destroy:h}}function ji(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kr():null}}function mf(t){const{history:e,location:n}=window,r={value:Sa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:pf()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](p)}}function o(c,u){const f=J({},e.state,ji(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=J({},s.value,e.state,{forward:c,scroll:kr()});i(f.current,f,!0);const h=J({},ji(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function _f(t){t=af(t);const e=mf(t),n=gf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:lf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vf(t){return typeof t=="string"||t&&typeof t=="object"}function Ca(t){return typeof t=="string"||typeof t=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Aa=Symbol("");var Wi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wi||(Wi={}));function tn(t,e){return J(new Error,{type:t,[Aa]:!0},e)}function Ge(t,e){return t instanceof Error&&Aa in t&&(e==null||!!(t.type&e))}const Vi="[^/]+?",bf={sensitive:!1,strict:!1,start:!0,end:!0},yf=/[.+*?^${}()[\]/\\]/g;function If(t,e){const n=J({},bf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(yf,"\\$&"),v+=40;else if(p.type===1){const{value:S,repeatable:P,optional:F,regexp:A}=p;i.push({name:S,repeatable:P,optional:F});const U=A||Vi;if(U!==Vi){v+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+q.message)}}let k=P?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(k=F&&u.length<2?`(?:/${k})`:"/"+k),F&&(k+="?"),s+=k,v+=20,F&&(v+=-8),P&&(v+=-20),U===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const v=f[p]||"",S=i[p-1];h[S.name]=v&&S.repeatable?v.split("/"):v}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of p)if(v.type===0)f+=v.value;else if(v.type===1){const{value:S,repeatable:P,optional:F}=v,A=S in u?u[S]:"";if(Ue(A)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=Ue(A)?A.join("/"):A;if(!U)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ef(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ef(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zi(r))return 1;if(zi(s))return-1}return s.length-r.length}function zi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Tf={type:0,value:""},Rf=/[a-zA-Z0-9_]/;function Sf(t){if(!t)return[[]];if(t==="/")return[[Tf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Rf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Cf(t,e,n){const r=If(Sf(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Af(t,e){const n=[],r=new Map;e=Gi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const v=!p,S=Of(f);S.aliasOf=p&&p.record;const P=Gi(e,f),F=[S];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of k)F.push(J({},S,{components:p?p.record.components:S.components,path:q,aliasOf:p?p.record:S}))}let A,U;for(const k of F){const{path:q}=k;if(h&&q[0]!=="/"){const le=h.record.path,fe=le[le.length-1]==="/"?"":"/";k.path=h.record.path+(q&&fe+q)}if(A=Cf(k,h,P),p?p.alias.push(A):(U=U||A,U!==A&&U.alias.push(A),v&&f.name&&!qi(A)&&o(f.name)),S.children){const le=S.children;for(let fe=0;fe<le.length;fe++)i(le[fe],A,p&&p.children[fe])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return U?()=>{o(U)}:bn}function o(f){if(Ca(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&wf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Oa(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!qi(f)&&r.set(f.record.name,f)}function u(f,h){let p,v={},S,P;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw tn(1,{location:f});P=p.record.name,v=J(Ki(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params&&Ki(f.params,p.keys.map(U=>U.name))),S=p.stringify(v)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(v=p.parse(S),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw tn(1,{location:f,currentLocation:h});P=p.record.name,v=J({},h.params,f.params),S=p.stringify(v)}const F=[];let A=p;for(;A;)F.unshift(A.record),A=A.parent;return{name:P,path:S,params:v,matched:F,meta:kf(F)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Of(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Pf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Pf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kf(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Gi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Oa(t,e){return e.children.some(n=>n===t||Oa(t,n))}const Pa=/#/g,Df=/&/g,Mf=/\//g,Nf=/=/g,xf=/\?/g,ka=/\+/g,Lf=/%5B/g,Uf=/%5D/g,Da=/%5E/g,$f=/%60/g,Ma=/%7B/g,Ff=/%7C/g,Na=/%7D/g,Bf=/%20/g;function Ks(t){return encodeURI(""+t).replace(Ff,"|").replace(Lf,"[").replace(Uf,"]")}function Hf(t){return Ks(t).replace(Ma,"{").replace(Na,"}").replace(Da,"^")}function gs(t){return Ks(t).replace(ka,"%2B").replace(Bf,"+").replace(Pa,"%23").replace(Df,"%26").replace($f,"`").replace(Ma,"{").replace(Na,"}").replace(Da,"^")}function jf(t){return gs(t).replace(Nf,"%3D")}function Wf(t){return Ks(t).replace(Pa,"%23").replace(xf,"%3F")}function Vf(t){return t==null?"":Wf(t).replace(Mf,"%2F")}function ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function zf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ka," "),o=i.indexOf("="),a=ur(o<0?i:i.slice(0,o)),c=o<0?null:ur(i.slice(o+1));if(a in e){let u=e[a];Ue(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ji(t){let e="";for(let n in t){const r=t[n];if(n=jf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&gs(i)):[r&&gs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Kf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qf=Symbol(""),Yi=Symbol(""),qs=Symbol(""),xa=Symbol(""),ms=Symbol("");function dn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ct(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(tn(4,{from:n,to:e})):h instanceof Error?a(h):vf(h)?a(tn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Gf(a)){const u=(a.__vccOpts||a)[e];u&&s.push(ct(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Zu(u)?u.default:u;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ct(p,n,r,i,o)()}))}}return s}function Gf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xi(t){const e=Ze(qs),n=Ze(xa),r=Se(()=>e.resolve(Qe(t.to))),s=Se(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(en.bind(null,f));if(p>-1)return p;const v=Qi(c[u-2]);return u>1&&Qi(f)===v&&h[h.length-1].path!==v?h.findIndex(en.bind(null,c[u-2])):p}),i=Se(()=>s.value>-1&&Qf(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Ra(n.params,r.value.params));function a(c={}){return Xf(c)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(bn):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Jf=bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(t,{slots:e}){const n=Nn(Xi(t)),{options:r}=Ze(qs),s=Se(()=>({[Zi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ta("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Yf=Jf;function Xf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zi=(t,e,n)=>t??e??n,Zf=bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(ms),s=Se(()=>t.route||r.value),i=Ze(Yi,0),o=Se(()=>{let u=Qe(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Se(()=>s.value.matched[o.value]);Qn(Yi,Se(()=>o.value+1)),Qn(qf,a),Qn(ms,s);const c=Xn();return Zn(()=>[c.value,a.value,t.name],([u,f,h],[p,v,S])=>{f&&(f.instances[h]=u,v&&v!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!en(f,v)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return eo(n.default,{Component:p,route:u});const v=h.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,F=Ta(p,J({},S,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return eo(n.default,{Component:F,route:u})||F}}});function eo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const La=Zf;function ed(t){const e=Af(t.routes,t),n=t.parseQuery||zf,r=t.stringifyQuery||Ji,s=t.history,i=dn(),o=dn(),a=dn(),c=_l(it);let u=it;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Kr.bind(null,_=>""+_),h=Kr.bind(null,Vf),p=Kr.bind(null,ur);function v(_,C){let T,D;return Ca(_)?(T=e.getRecordMatcher(_),D=C):D=_,e.addRoute(D,T)}function S(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(_=>_.record)}function F(_){return!!e.getRecordMatcher(_)}function A(_,C){if(C=J({},C||c.value),typeof _=="string"){const l=qr(n,_,C.path),d=e.resolve({path:l.path},C),g=s.createHref(l.fullPath);return J(l,d,{params:p(d.params),hash:ur(l.hash),redirectedFrom:void 0,href:g})}let T;if("path"in _)T=J({},_,{path:qr(n,_.path,C.path).path});else{const l=J({},_.params);for(const d in l)l[d]==null&&delete l[d];T=J({},_,{params:h(_.params)}),C.params=h(C.params)}const D=e.resolve(T,C),z=_.hash||"";D.params=f(p(D.params));const re=nf(r,J({},_,{hash:Hf(z),path:D.path})),W=s.createHref(re);return J({fullPath:re,hash:z,query:r===Ji?Kf(_.query):_.query||{}},D,{redirectedFrom:void 0,href:W})}function U(_){return typeof _=="string"?qr(n,_,c.value.path):J({},_)}function k(_,C){if(u!==_)return tn(8,{from:C,to:_})}function q(_){return Ee(_)}function le(_){return q(J(U(_),{replace:!0}))}function fe(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let D=typeof T=="function"?T(_):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=U(D):{path:D},D.params={}),J({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function Ee(_,C){const T=u=A(_),D=c.value,z=_.state,re=_.force,W=_.replace===!0,l=fe(T);if(l)return Ee(J(U(l),{state:typeof l=="object"?J({},z,l.state):z,force:re,replace:W}),C||T);const d=T;d.redirectedFrom=C;let g;return!re&&rf(r,D,T)&&(g=tn(16,{to:d,from:D}),wt(D,D,!0,!1)),(g?Promise.resolve(g):Fe(d,D)).catch(m=>Ge(m)?Ge(m,2)?m:Ae(m):Q(m,d,D)).then(m=>{if(m){if(Ge(m,2))return Ee(J({replace:W},U(m.to),{state:typeof m.to=="object"?J({},z,m.to.state):z,force:re}),C||d)}else m=rt(d,D,!0,W,z);return Re(d,D,m),m})}function Ce(_,C){const T=k(_,C);return T?Promise.reject(T):Promise.resolve()}function Fe(_,C){let T;const[D,z,re]=td(_,C);T=Gr(D.reverse(),"beforeRouteLeave",_,C);for(const l of D)l.leaveGuards.forEach(d=>{T.push(ct(d,_,C))});const W=Ce.bind(null,_,C);return T.push(W),Bt(T).then(()=>{T=[];for(const l of i.list())T.push(ct(l,_,C));return T.push(W),Bt(T)}).then(()=>{T=Gr(z,"beforeRouteUpdate",_,C);for(const l of z)l.updateGuards.forEach(d=>{T.push(ct(d,_,C))});return T.push(W),Bt(T)}).then(()=>{T=[];for(const l of _.matched)if(l.beforeEnter&&!C.matched.includes(l))if(Ue(l.beforeEnter))for(const d of l.beforeEnter)T.push(ct(d,_,C));else T.push(ct(l.beforeEnter,_,C));return T.push(W),Bt(T)}).then(()=>(_.matched.forEach(l=>l.enterCallbacks={}),T=Gr(re,"beforeRouteEnter",_,C),T.push(W),Bt(T))).then(()=>{T=[];for(const l of o.list())T.push(ct(l,_,C));return T.push(W),Bt(T)}).catch(l=>Ge(l,8)?l:Promise.reject(l))}function Re(_,C,T){for(const D of a.list())D(_,C,T)}function rt(_,C,T,D,z){const re=k(_,C);if(re)return re;const W=C===it,l=jt?history.state:{};T&&(D||W?s.replace(_.fullPath,J({scroll:W&&l&&l.scroll},z)):s.push(_.fullPath,z)),c.value=_,wt(_,C,T,W),Ae()}let Be;function Ut(){Be||(Be=s.listen((_,C,T)=>{if(!Hn.listening)return;const D=A(_),z=fe(D);if(z){Ee(J(z,{replace:!0}),D).catch(bn);return}u=D;const re=c.value;jt&&df(Hi(re.fullPath,T.delta),kr()),Fe(D,re).catch(W=>Ge(W,12)?W:Ge(W,2)?(Ee(W.to,D).then(l=>{Ge(l,20)&&!T.delta&&T.type===An.pop&&s.go(-1,!1)}).catch(bn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Q(W,D,re))).then(W=>{W=W||rt(D,re,!1),W&&(T.delta&&!Ge(W,8)?s.go(-T.delta,!1):T.type===An.pop&&Ge(W,20)&&s.go(-1,!1)),Re(D,re,W)}).catch(bn)}))}let Et=dn(),ln=dn(),oe;function Q(_,C,T){Ae(_);const D=ln.list();return D.length?D.forEach(z=>z(_,C,T)):console.error(_),Promise.reject(_)}function Y(){return oe&&c.value!==it?Promise.resolve():new Promise((_,C)=>{Et.add([_,C])})}function Ae(_){return oe||(oe=!_,Ut(),Et.list().forEach(([C,T])=>_?T(_):C()),Et.reset()),_}function wt(_,C,T,D){const{scrollBehavior:z}=t;if(!jt||!z)return Promise.resolve();const re=!T&&hf(Hi(_.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return ea().then(()=>z(_,C,re)).then(W=>W&&ff(W)).catch(W=>Q(W,_,C))}const Oe=_=>s.go(_);let ve;const $t=new Set,Hn={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,hasRoute:F,getRoutes:P,resolve:A,options:t,push:q,replace:le,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ln.add,isReady:Y,install(_){const C=this;_.component("RouterLink",Yf),_.component("RouterView",La),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(c)}),jt&&!ve&&c.value===it&&(ve=!0,q(s.location).catch(z=>{}));const T={};for(const z in it)T[z]=Se(()=>c.value[z]);_.provide(qs,C),_.provide(xa,Nn(T)),_.provide(ms,c);const D=_.unmount;$t.add(_),_.unmount=function(){$t.delete(_),$t.size<1&&(u=it,Be&&Be(),Be=null,c.value=it,ve=!1,oe=!1),D()}}};return Hn}function Bt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function td(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>en(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>en(u,c))||s.push(c))}return[n,r,s]}const nd=bt({__name:"App",setup(t){return(e,n)=>(Ie(),Vs(Qe(La)))}}),rd="modulepreload",sd=function(t){return"/"+t},to={},id=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=sd(i),i in to)return;to[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":rd,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},yt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},od={},ad={xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},cd=M("title",null,"ionicons-v5_logos",-1),ld=M("path",{d:"M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"},null,-1),ud=M("path",{d:"M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"},null,-1),fd=M("path",{d:"M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"},null,-1),dd=[cd,ld,ud,fd];function hd(t,e){return Ie(),Le("svg",ad,dd)}const pd=yt(od,[["render",hd]]),gd={},md={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},_d=M("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},null,-1),vd=[_d];function bd(t,e){return Ie(),Le("svg",md,vd)}const yd=yt(gd,[["render",bd]]),Ua=t=>(Rr("data-v-c62a2c7c"),t=t(),Sr(),t),Id={class:"col-md-12 top-footer"},Ed=Ua(()=>M("div",{class:"col-md-2"},null,-1)),wd={class:"col-md-8 links"},Td={class:"col-md-2 social-media"},Rd=Ua(()=>M("div",{id:"coppyright",class:"bottom-footer col-md-12"},[M("span",null,[se("PRANTL ROPPEN | Erd- und Leitungsbau Gmbh | Gewerbepark 33, 6426 Roppen | Tel:"),M("a",{href:"tel:+4354175334"},"+43 (0) 54175334"),se(" | Mail:"),M("a",{href:"mailto:office@erdbau-prantl.at"},"office@erdbau-prantl.at")]),se(),M("br"),M("span",{class:"small"},"Copyright © 2023 | Prantl Roppen ")],-1)),Sd=bt({__name:"FooterLine",setup(t){return(e,n)=>{const r=Hs("RouterLink");return Ie(),Le(Te,null,[M("div",Id,[Ed,M("div",wd,[j(r,{to:"/"},{default:ne(()=>[se("Start")]),_:1}),j(r,{to:"/Impressum"},{default:ne(()=>[se("Impressum")]),_:1}),j(r,{to:"/Datasafety"},{default:ne(()=>[se("Datenschutz")]),_:1}),j(r,{to:"/Jobs"},{default:ne(()=>[se("Jobs")]),_:1}),j(r,{to:"/Downloads"},{default:ne(()=>[se("Downloads")]),_:1})]),M("div",Td,[j(pd),j(yd)])]),Rd],64)}}});const Cd=yt(Sd,[["__scopeId","data-v-c62a2c7c"]]),Ad="/assets/PrantlRoppen_Startseite_Header-82dc1692.jpg",Od="/assets/PrantlRoppen_Karriere_Slider1-43df6852.jpg";const Pd={},kd={class:"container"},Dd={class:"centered"},Md={class:"img-text"},Nd={class:"img-subtext"};function xd(t,e){return Ie(),Le("div",kd,[Hr(t.$slots,"img",{},void 0,!0),M("div",Dd,[M("div",Md,[Hr(t.$slots,"text",{},void 0,!0)]),M("div",Nd,[Hr(t.$slots,"subtext",{},void 0,!0)])])])}const no=yt(Pd,[["render",xd],["__scopeId","data-v-a9094a33"]]),$a=t=>(Rr("data-v-7bb2d3a6"),t=t(),Sr(),t),Ld=$a(()=>M("img",{src:Ad},null,-1)),Ud=$a(()=>M("img",{src:Od},null,-1)),$d=bt({__name:"HomePage",setup(t){return(e,n)=>{const r=Hs("RouterLink");return Ie(),Le(Te,null,[j(no,null,{img:ne(()=>[Ld]),text:ne(()=>[se("Mit Mensch, Technik und Begeisterung.")]),subtext:ne(()=>[]),_:1}),j(no,null,{img:ne(()=>[Ud]),text:ne(()=>[se("Wo Arbeit mehr als ein Job ist.")]),subtext:ne(()=>[j(r,{to:"/career"},{default:ne(()=>[se(" Deine Karriere bei Prantl Roppen - Nur einen Mausklick entfernt.")]),_:1})]),_:1})],64)}}});const Fd=yt($d,[["__scopeId","data-v-7bb2d3a6"]]),Bd="/assets/brantl_logo-bb0aa1c6.png";const Hd={},jd=t=>(Rr("data-v-5654e8e6"),t=t(),Sr(),t),Wd={class:"navbar"},Vd=jd(()=>M("div",{class:"navbar-brand col-md-6"},[M("div",null,[M("img",{src:Bd,alt:"Logo"})])],-1)),zd={class:"navbar-menu col-md-6"},Kd={class:"navbar-item col-md-2"},qd={class:"navbar-item-header"},Gd={class:"navbar-item col-md-2"},Jd={class:"navbar-item-header"},Yd={class:"navbar-item-childs"},Xd={class:"navbar-child-item noborder"},Qd={class:"navbar-child-item"},Zd={class:"navbar-child-item"},eh={class:"navbar-child-item"},th={class:"navbar-child-item"},nh={class:"navbar-item col-md-2"},rh={class:"navbar-item-header"},sh={class:"navbar-item col-md-2"},ih={class:"navbar-item-header"},oh={class:"navbar-item col-md-2"},ah={class:"navbar-item-header"},ch={class:"navbar-item col-md-2"},lh={class:"navbar-item-header"};function uh(t,e){const n=Hs("router-link");return Ie(),Le("nav",Wd,[Vd,M("div",zd,[M("div",Kd,[M("div",qd,[j(n,{to:"/aboutus"},{default:ne(()=>[se("Über uns")]),_:1})])]),M("div",Gd,[M("div",Jd,[j(n,{to:"/achievements"},{default:ne(()=>[se("Leistungen")]),_:1})]),M("div",Yd,[M("div",Xd,[j(n,{to:"/achievements/earthworks"},{default:ne(()=>[se("Erdbau")]),_:1})]),M("div",Qd,[j(n,{to:"/achievements/construction"},{default:ne(()=>[se("Leistungsbau")]),_:1})]),M("div",Zd,[j(n,{to:"/achievements/blasting"},{default:ne(()=>[se("Sprengarbeiten")]),_:1})]),M("div",eh,[j(n,{to:"/achievements/recycling"},{default:ne(()=>[se("Baustoffrecycling")]),_:1})]),M("div",th,[j(n,{to:"/achievements/fleet"},{default:ne(()=>[se("Fuhrpark")]),_:1})])])]),M("div",nh,[M("div",rh,[j(n,{to:"/projects"},{default:ne(()=>[se("Projekte")]),_:1})])]),M("div",sh,[M("div",ih,[j(n,{to:"/career"},{default:ne(()=>[se("Karriere")]),_:1})])]),M("div",oh,[M("div",ah,[j(n,{to:"/contact"},{default:ne(()=>[se("Kontakt")]),_:1})])]),M("div",ch,[M("div",lh,[j(n,{to:"/downloads"},{default:ne(()=>[se("Downloads")]),_:1})])])])])}const fh=yt(Hd,[["render",uh],["__scopeId","data-v-5654e8e6"]]),dh=bt({__name:"HomeView",setup(t){return(e,n)=>(Ie(),Le("main",null,[j(fh),j(Fd),j(Cd)]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),r.push(n[f],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new ph;const p=i<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const S=u<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(t){const e=Fa(t);return Ba.encodeByteArray(e,!0)},Ha=function(t){return gh(t).replace(/\./g,"")},ja=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>mh().__FIREBASE_DEFAULTS__,vh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ja(t[1]);return e&&JSON.parse(e)},Gs=()=>{try{return _h()||vh()||bh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yh=t=>{var e,n;return(n=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ih=()=>{var t;return(t=Gs())===null||t===void 0?void 0:t.config},Wa=t=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Th(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sh(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ch(){try{return typeof indexedDB=="object"}catch{return!1}}function Ah(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="FirebaseError";class It extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Oh,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ph(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new It(s,a,r)}}function Ph(t,e){return t.replace(kh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kh=/\{\$([^}]+)}/g;function Dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ro(i)&&ro(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ro(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mh(t,e){const n=new Nh(t,e);return n.subscribe.bind(n)}class Nh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($h(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uh(t){return t===Ct?void 0:t}function $h(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Bh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Hh=ee.INFO,jh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Wh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Va{constructor(e){this.name=e,this._logLevel=Hh,this._logHandler=Wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Vh=(t,e)=>e.some(n=>t instanceof n);let so,io;function zh(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kh(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,_s=new WeakMap,Ka=new WeakMap,Yr=new WeakMap,Js=new WeakMap;function qh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),Js.set(e,t),e}function Gh(t){if(_s.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_s.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _s.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jh(t){vs=t(vs)}function Yh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xr(this),e,...n);return Ka.set(r,e.sort?e.sort():[e]),gt(r)}:Kh().includes(t)?function(...e){return t.apply(Xr(this),e),gt(za.get(this))}:function(...e){return gt(t.apply(Xr(this),e))}}function Xh(t){return typeof t=="function"?Yh(t):(t instanceof IDBTransaction&&Gh(t),Vh(t,zh())?new Proxy(t,vs):t)}function gt(t){if(t instanceof IDBRequest)return qh(t);if(Yr.has(t))return Yr.get(t);const e=Xh(t);return e!==t&&(Yr.set(t,e),Js.set(e,t)),e}const Xr=t=>Js.get(t);function Qh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=gt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gt(o.result),c.oldVersion,c.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Zh=["get","getKey","getAll","getAllKeys","count"],ep=["put","add","delete","clear"],Qr=new Map;function oo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ep.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Qr.set(e,i),i}Jh(t=>({...t,get:(e,n,r)=>oo(e,n)||t.get(e,n,r),has:(e,n)=>!!oo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(np(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function np(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bs="@firebase/app",ao="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Va("@firebase/app"),rp="@firebase/app-compat",sp="@firebase/analytics-compat",ip="@firebase/analytics",op="@firebase/app-check-compat",ap="@firebase/app-check",cp="@firebase/auth",lp="@firebase/auth-compat",up="@firebase/database",fp="@firebase/database-compat",dp="@firebase/functions",hp="@firebase/functions-compat",pp="@firebase/installations",gp="@firebase/installations-compat",mp="@firebase/messaging",_p="@firebase/messaging-compat",vp="@firebase/performance",bp="@firebase/performance-compat",yp="@firebase/remote-config",Ip="@firebase/remote-config-compat",Ep="@firebase/storage",wp="@firebase/storage-compat",Tp="@firebase/firestore",Rp="@firebase/firestore-compat",Sp="firebase",Cp="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Ap={[bs]:"fire-core",[rp]:"fire-core-compat",[ip]:"fire-analytics",[sp]:"fire-analytics-compat",[ap]:"fire-app-check",[op]:"fire-app-check-compat",[cp]:"fire-auth",[lp]:"fire-auth-compat",[up]:"fire-rtdb",[fp]:"fire-rtdb-compat",[dp]:"fire-fn",[hp]:"fire-fn-compat",[pp]:"fire-iid",[gp]:"fire-iid-compat",[mp]:"fire-fcm",[_p]:"fire-fcm-compat",[vp]:"fire-perf",[bp]:"fire-perf-compat",[yp]:"fire-rc",[Ip]:"fire-rc-compat",[Ep]:"fire-gcs",[wp]:"fire-gcs-compat",[Tp]:"fire-fst",[Rp]:"fire-fst-compat","fire-js":"fire-js",[Sp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,Is=new Map;function Op(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Is.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;Is.set(e,t);for(const n of dr.values())Op(n,t);return!0}function qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new xn("app","Firebase",Pp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Cp;function Ga(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ys,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(n||(n=Ih()),!n)throw mt.create("no-options");const i=dr.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const o=new Fh(s);for(const c of Is.values())o.addComponent(c);const a=new kp(n,r,o);return dr.set(s,a),a}function Dp(t=ys){const e=dr.get(t);if(!e&&t===ys)return Ga();if(!e)throw mt.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=Ap[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}On(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebase-heartbeat-database",Np=1,Pn="firebase-heartbeat-store";let Zr=null;function Ja(){return Zr||(Zr=Qh(Mp,Np,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function xp(t){try{return(await Ja()).transaction(Pn).objectStore(Pn).get(Ya(t))}catch(e){if(e instanceof It)Nt.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function co(t,e){try{const r=(await Ja()).transaction(Pn,"readwrite");return await r.objectStore(Pn).put(e,Ya(t)),r.done}catch(n){if(n instanceof It)Nt.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(r.message)}}}function Ya(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=1024,Up=30*24*60*60*1e3;class $p{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Up}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lo(),{heartbeatsToSend:n,unsentEntries:r}=Fp(this._heartbeatsCache.heartbeats),s=Ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lo(){return new Date().toISOString().substring(0,10)}function Fp(t,e=Lp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ch()?Ah().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uo(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){On(new nn("platform-logger",e=>new tp(e),"PRIVATE")),On(new nn("heartbeat",e=>new $p(e),"PRIVATE")),Gt(bs,ao,t),Gt(bs,ao,"esm2017"),Gt("fire-js","")}Hp("");function Ys(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jp=Xa,Qa=new xn("auth","Firebase",Xa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Va("@firebase/auth");function tr(t,...e){fo.logLevel<=ee.ERROR&&fo.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw Xs(t,...e)}function ze(t,...e){return Xs(t,...e)}function Wp(t,e,n){const r=Object.assign(Object.assign({},jp()),{[e]:n});return new xn("auth","Firebase",r).create(e,{appName:t.name})}function Xs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qa.create(t,...e)}function L(t,e,...n){if(!t)throw Xs(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function tt(t,e){t||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;function Xe(t){tt(t instanceof Function,"Expected a class definition");let e=ho.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ho.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e){const n=qa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;$e(s,"already-initialized")}return n.initialize({options:e})}function zp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kp(){return po()==="http:"||po()==="https:"}function po(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kp()||Th()||"connection"in navigator)?navigator.onLine:!0}function Gp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=wh()||Rh()}get(){return qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Un(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return ec(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Za.fetch()(tc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ec(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jp),e);try{const s=new Xp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wp(t,f,u);$e(t,f)}}catch(s){if(s instanceof It)throw s;$e(t,"internal-error",{message:String(s)})}}async function Nr(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qs(t.config,s):`${t.config.apiScheme}://${s}`}class Xp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),Yp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Zp(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eg(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=Zs(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:In(es(s.auth_time)),issuedAtTime:In(es(s.iat)),expirationTime:In(es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function Zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ja(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tg(t){const e=Zs(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&ng(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ng({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await kn(t,Zp(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?og(i.providerUserInfo):[],a=ig(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function sg(t){const e=Lt(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ig(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function og(t){return t.map(e=>{var{providerId:n}=e,r=Ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e){const n=await ec(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=tc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Za.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ag(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Dn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eg(this,e)}reload(){return sg(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kn(this,Qp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:q,isAnonymous:le,providerData:fe,stsTokenManager:Ee}=n;L(k&&Ee,e,"internal-error");const Ce=Dn.fromJSON(this.name,Ee);L(typeof k=="string",e,"internal-error"),ot(h,e.name),ot(p,e.name),L(typeof q=="boolean",e,"internal-error"),L(typeof le=="boolean",e,"internal-error"),ot(v,e.name),ot(S,e.name),ot(P,e.name),ot(F,e.name),ot(A,e.name),ot(U,e.name);const Fe=new Mt({uid:k,auth:e,email:p,emailVerified:q,displayName:h,isAnonymous:le,photoURL:S,phoneNumber:v,tenantId:P,stsTokenManager:Ce,createdAt:A,lastLoginAt:U});return fe&&Array.isArray(fe)&&(Fe.providerData=fe.map(Re=>Object.assign({},Re))),F&&(Fe._redirectEventId=F),Fe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Dn;s.updateFromServerResponse(n);const i=new Mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rc.type="NONE";const go=rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(Xe(go),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Xe(go);const o=nr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=Mt._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cc(e))return"Blackberry";if(lc(e))return"Webos";if(ei(e))return"Safari";if((e.includes("chrome/")||ic(e))&&!e.includes("edge/"))return"Chrome";if(ac(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sc(t=ge()){return/firefox\//i.test(t)}function ei(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ic(t=ge()){return/crios\//i.test(t)}function oc(t=ge()){return/iemobile/i.test(t)}function ac(t=ge()){return/android/i.test(t)}function cc(t=ge()){return/blackberry/i.test(t)}function lc(t=ge()){return/webos/i.test(t)}function xr(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cg(t=ge()){var e;return xr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lg(){return Sh()&&document.documentMode===10}function uc(t=ge()){return xr(t)||ac(t)||lc(t)||cc(t)||/windows phone/i.test(t)||oc(t)}function ug(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e=[]){let n;switch(t){case"Browser":n=mo(ge());break;case"Worker":n=`${mo(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Lr(t){return Lt(t)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function hg(t,e,n){const r=Lr(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=dc(e),{host:o,port:a}=pg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||gg()}function dc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pg(t){const e=dc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vo(o)}}}function vo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function mg(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t,e){return Nr(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function bg(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ti{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _g(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vg(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bg(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return Nr(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="http://localhost";class xt extends ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ys(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Eg(t){const e=pn(gn(t)).link,n=e?pn(gn(e)).deep_link_id:null,r=pn(gn(t)).deep_link_id;return(r?pn(gn(r)).link:null)||r||n||e||t}class ni{constructor(e){var n,r,s,i,o,a;const c=pn(gn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ig((s=c.mode)!==null&&s!==void 0?s:null);L(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Eg(e);try{return new ni(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return Mn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ni.parseLink(n);return L(r,"argument-error"),Mn._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Fn{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Fn{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Fn{constructor(){super("twitter.com")}static credential(e,n){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mt._fromIdTokenResponse(e,r,s),o=bo(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bo(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends It{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pr(e,n,r,s)}}function pc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,r):i})}async function wg(t,e,n=!1){const r=await kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await kn(t,pc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=Zs(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),rn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t,e,n=!1){const r="signIn",s=await pc(t,r,e),i=await rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rg(t,e){return gc(Lr(t),e)}function Sg(t,e,n){return Rg(Lt(t),cn.credential(e,n))}function Cg(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function Ag(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){const t=ge();return ei(t)||xr(t)}const Pg=1e3,kg=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Og()&&ug(),this.fallbackToPolling=uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const Dg=_c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vc.type="SESSION";const bc=vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ur(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Mg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ri("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function xg(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Lg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $g(){return yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="firebaseLocalStorageDb",Fg=1,mr="firebaseLocalStorage",Ec="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $r(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function Bg(){const t=indexedDB.deleteDatabase(Ic);return new Bn(t).toPromise()}function ws(){const t=indexedDB.open(Ic,Fg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mr,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mr)?e(r):(r.close(),await Bg(),e(await ws()))})})}async function yo(t,e,n){const r=$r(t,!0).put({[Ec]:e,value:n});return new Bn(r).toPromise()}async function Hg(t,e){const n=$r(t,!1).get(e),r=await new Bn(n).toPromise();return r===void 0?null:r.value}function Io(t,e){const n=$r(t,!0).delete(e);return new Bn(n).toPromise()}const jg=800,Wg=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ws(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance($g()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lg(),!this.activeServiceWorker)return;this.sender=new Ng(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await yo(e,gr,"1"),await Io(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Io(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$r(s,!1).getAll();return new Bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const Vg=wc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zg().appendChild(r)})}function qg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){return e?Xe(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jg(t){return gc(t.auth,new si(t),t.bypassAuthState)}function Yg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Tg(n,new si(t),t.bypassAuthState)}async function Xg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),wg(n,new si(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jg;case"linkViaPopup":case"linkViaRedirect":return Xg;case"reauthViaPopup":case"reauthViaRedirect":return Yg;default:$e(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Un(2e3,1e4);class Wt extends Tc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Qg.get())};e()}}Wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="pendingRedirect",rr=new Map;class em extends Tc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await tm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tm(t,e){const n=sm(e),r=rm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nm(t,e){rr.set(t._key(),e)}function rm(t){return Xe(t._redirectPersistence)}function sm(t){return nr(Zg,t.config.apiKey,t.name)}async function im(t,e,n=!1){const r=Lr(t),s=Gg(r,e),o=await new em(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=10*60*1e3;class am{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=om&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eo(e))}saveEventToCache(e){this.cachedEventUids.add(Eo(e)),this.lastProcessedEventTime=Date.now()}}function Eo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fm=/^https?/;async function dm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lm(t);for(const n of e)try{if(hm(n))return}catch{}$e(t,"unauthorized-domain")}function hm(t){const e=Es(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fm.test(n))return!1;if(um.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Un(3e4,6e4);function wo(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gm(t){return new Promise((e,n)=>{var r,s,i;function o(){wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wo(),n(ze(t,"network-request-failed"))},timeout:pm.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const a=qg("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Kg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sr=null,e})}let sr=null;function mm(t){return sr=sr||gm(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Un(5e3,15e3),vm="__/auth/iframe",bm="emulator/auth/iframe",ym={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Em(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qs(e,bm):`https://${t.config.authDomain}/${vm}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=Im.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ln(r).slice(1)}`}async function wm(t){const e=await mm(t),n=Ke().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Em(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ym,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=Ke().setTimeout(()=>{i(o)},_m.get());function c(){Ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Sm=600,Cm="_blank",Am="http://localhost";class To{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Om(t,e,n,r=Rm,s=Sm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ge().toLowerCase();n&&(a=ic(u)?Cm:n),sc(u)&&(e=e||Am,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[v,S])=>`${p}${v}=${S},`,"");if(cg(u)&&a!=="_self")return Pm(e||"",a),new To(null);const h=window.open(e||"",a,f);L(h,t,"popup-blocked");try{h.focus()}catch{}return new To(h)}function Pm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="__/auth/handler",Dm="emulator/auth/handler";function Ro(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof hc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Fn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Mm(t)}?${Ln(a).slice(1)}`}function Mm({config:t}){return t.emulator?Qs(t,Dm):`https://${t.authDomain}/${km}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="webStorageSupport";class Nm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=im,this._overrideRedirectResult=nm}async _openPopup(e,n,r,s){var i;tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ro(e,n,r,Es(),s);return Om(e,o,ri())}async _openRedirect(e,n,r,s){return await this._originValidation(e),xg(Ro(e,n,r,Es(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wm(e),r=new am(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ts];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uc()||ei()||xr()}}const xm=Nm;var So="@firebase/auth",Co="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $m(t){On(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fc(t)},f=new dg(a,c,u);return zp(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new nn("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new Lm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(So,Co,Um(t)),Gt(So,Co,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=5*60,Bm=Wa("authIdTokenMaxAge")||Fm;let Ao=null;const Hm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bm)return;const s=n==null?void 0:n.token;Ao!==s&&(Ao=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jm(t=Dp()){const e=qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vp(t,{popupRedirectResolver:xm,persistence:[Vg,Dg,bc]}),r=Wa("authTokenSyncURL");if(r){const i=Hm(r);Ag(n,i,()=>i(n.currentUser)),Cg(n,o=>i(o))}const s=yh("auth");return s&&hg(n,`http://${s}`),n}$m("Browser");const Wm=t=>(Rr("data-v-6dbdceff"),t=t(),Sr(),t),Vm={class:"login-box"},zm=Wm(()=>M("h2",null,"Login",-1)),Km={class:"form-group"},qm={class:"form-group"},Gm=["onClick"],Jm={key:0,class:"error-message"},Ym=bt({__name:"LoginForm",setup(t){const e=Xn(""),n=Xn(""),r={"auth/email-already-in-use":"Diese E-Mail-Adresse ist bereits registriert.","auth/user-not-found":"Diese E-Mail-Adresse ist nicht registriert.","auth/wrong-password":"Das eingegebene Passwort ist falsch.","auth/invalid-email":"Die E-Mail-Adresse ist ungültig.","auth/weak-password":"Das Passwort muss mindestens 6 Zeichen lang sein."};let s=Xn("");const i=()=>{s.value="";const a=jm();Sg(a,e.value,n.value).then(c=>{s.value="",console.log("Successfullly signed in!"),console.log(a.currentUser),Ts.push("/editor")}).catch(c=>{console.log(c),s.value=r[c.code]||"Es ist ein Fehler aufgetreten."})},o=()=>{Ts.push({path:"/",hash:"#coppyright"})};return(a,c)=>(Ie(),Le("div",Vm,[zm,M("form",null,[M("div",Km,[vi(M("input",{id:"email",type:"text",placeholder:"E-Mail","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:""},null,512),[[Ui,e.value]])]),M("div",qm,[vi(M("input",{id:"password",type:"password",placeholder:"Passwort","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),required:""},null,512),[[Ui,n.value]])]),M("p",null,[M("button",{type:"submit",onClick:Gu(i,["prevent"])},"Login",8,Gm)])]),Qe(s)?(Ie(),Le("div",Jm,Mc(Qe(s)),1)):gu("",!0),M("div",{onClick:c[2]||(c[2]=u=>o())},"toCoppyright on mainpage")]))}});const Xm=yt(Ym,[["__scopeId","data-v-6dbdceff"]]),Qm=bt({__name:"LoginView",setup(t){return(e,n)=>(Ie(),Le("main",null,[j(Xm)]))}}),Zm={},e_=M("h1",null,"HIER NUR MIT LOGIN",-1),t_=[e_];function n_(t,e){return Ie(),Le("main",null,t_)}const r_=yt(Zm,[["render",n_]]),Ts=ed({history:_f("/"),routes:[{path:"/",name:"home",component:dh},{path:"/login",name:"login",component:Qm},{path:"/editor",name:"editor",component:r_},{path:"/about",name:"about",component:()=>id(()=>import("./AboutView-bc138efc.js"),["assets/AboutView-bc138efc.js","assets/AboutView-4d995ba2.css"])}]});var s_="firebase",i_="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(s_,i_,"app");const o_={apiKey:"AIzaSyCu6MtNObLrnPuIolAC3rrQBqqzgDWiebM",authDomain:"prantl-783b6.firebaseapp.com",projectId:"prantl-783b6",storageBucket:"prantl-783b6.appspot.com",messagingSenderId:"112914660239",appId:"1:112914660239:web:61eece01d08446669029fa"};Ga(o_);const Sc=Xu(nd);Sc.use(Ts);Sc.mount("#app");export{yt as _,M as a,Le as c,Ie as o};
