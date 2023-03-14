(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ns(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Ms(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Mc(r):Ms(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(oe(t))return t}}const kc=/;(?![^(]*\))/g,xc=/:([^]+)/,Nc=/\/\*.*?\*\//gs;function Mc(t){const e={};return t.replace(Nc,"").split(kc).forEach(n=>{if(n){const r=n.split(xc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ds(t){let e="";if(he(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Ds(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lc=Ns(Dc);function No(t){return!!t||t===""}const $c=t=>he(t)?t:t==null?"":j(t)||oe(t)&&(t.toString===$o||!H(t.toString))?JSON.stringify(t,Mo,2):String(t),Mo=(t,e)=>e&&e.__v_isRef?Mo(t,e.value):Qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Do(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!j(e)&&!Uo(e)?String(e):e,se={},Xt=[],$e=()=>{},Uc=()=>!1,Fc=/^on[^a-z]/,Pr=t=>Fc.test(t),Ls=t=>t.startsWith("onUpdate:"),Ie=Object.assign,$s=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bc=Object.prototype.hasOwnProperty,q=(t,e)=>Bc.call(t,e),j=Array.isArray,Qt=t=>Cr(t)==="[object Map]",Do=t=>Cr(t)==="[object Set]",H=t=>typeof t=="function",he=t=>typeof t=="string",Us=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Lo=t=>oe(t)&&H(t.then)&&H(t.catch),$o=Object.prototype.toString,Cr=t=>$o.call(t),jc=t=>Cr(t).slice(8,-1),Uo=t=>Cr(t)==="[object Object]",Fs=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hc=/-(\w)/g,Je=Ar(t=>t.replace(Hc,(e,n)=>n?n.toUpperCase():"")),Vc=/\B([A-Z])/g,fn=Ar(t=>t.replace(Vc,"-$1").toLowerCase()),Or=Ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=Ar(t=>t?`on${Or(t)}`:""),kn=(t,e)=>!Object.is(t,e),or=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ls=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const Wc=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class zc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kc(t,e=Me){e&&e.active&&e.effects.push(t)}function qc(){return Me}const Bs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fo=t=>(t.w&wt)>0,Bo=t=>(t.n&wt)>0,Gc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wt},Jc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Fo(s)&&!Bo(s)?s.delete(t):e[n++]=s,s.w&=~wt,s.n&=~wt}e.length=n}},us=new WeakMap;let wn=0,wt=1;const ds=30;let De;const Mt=Symbol(""),fs=Symbol("");class js{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kc(this,r)}run(){if(!this.active)return this.fn();let e=De,n=vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,vt=!0,wt=1<<++wn,wn<=ds?Gc(this):gi(this),this.fn()}finally{wn<=ds&&Jc(this),wt=1<<--wn,De=this.parent,vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(gi(this),this.onStop&&this.onStop(),this.active=!1)}}function gi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vt=!0;const jo=[];function hn(){jo.push(vt),vt=!1}function pn(){const t=jo.pop();vt=t===void 0?!0:t}function Te(t,e,n){if(vt&&De){let r=us.get(t);r||us.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Bs()),Ho(s)}}function Ho(t,e){let n=!1;wn<=ds?Bo(t)||(t.n|=wt,n=!Fo(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function st(t,e,n,r,s,i){const o=us.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const c=Number(r);o.forEach((u,d)=>{(d==="length"||d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Fs(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),Qt(t)&&a.push(o.get(fs)));break;case"delete":j(t)||(a.push(o.get(Mt)),Qt(t)&&a.push(o.get(fs)));break;case"set":Qt(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&hs(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);hs(Bs(c))}}function hs(t,e){const n=j(t)?t:[...t];for(const r of n)r.computed&&_i(r);for(const r of n)r.computed||_i(r)}function _i(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yc=Ns("__proto__,__v_isRef,__isVue"),Vo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Us)),Xc=Hs(),Qc=Hs(!1,!0),Zc=Hs(!0),vi=el();function el(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hn();const r=J(this)[e].apply(this,n);return pn(),r}}),t}function tl(t){const e=J(this);return Te(e,"has",t),e.hasOwnProperty(t)}function Hs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_l:Go:e?qo:Ko).get(r))return r;const o=j(r);if(!t){if(o&&q(vi,s))return Reflect.get(vi,s,i);if(s==="hasOwnProperty")return tl}const a=Reflect.get(r,s,i);return(Us(s)?Vo.has(s):Yc(s))||(t||Te(r,"get",s),e)?a:_e(a)?o&&Fs(s)?a:a.value:oe(a)?t?Jo(a):Vn(a):a}}const nl=Wo(),rl=Wo(!0);function Wo(t=!1){return function(n,r,s,i){let o=n[r];if(sn(o)&&_e(o)&&!_e(s))return!1;if(!t&&(!gr(s)&&!sn(s)&&(o=J(o),s=J(s)),!j(n)&&_e(o)&&!_e(s)))return o.value=s,!0;const a=j(n)&&Fs(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?kn(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function sl(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function il(t,e){const n=Reflect.has(t,e);return(!Us(e)||!Vo.has(e))&&Te(t,"has",e),n}function ol(t){return Te(t,"iterate",j(t)?"length":Mt),Reflect.ownKeys(t)}const zo={get:Xc,set:nl,deleteProperty:sl,has:il,ownKeys:ol},al={get:Zc,set(t,e){return!0},deleteProperty(t,e){return!0}},cl=Ie({},zo,{get:Qc,set:rl}),Vs=t=>t,kr=t=>Reflect.getPrototypeOf(t);function Qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(e!==i&&Te(s,"get",e),Te(s,"get",i));const{has:o}=kr(s),a=r?Vs:n?Ks:xn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zn(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(t!==s&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function er(t,e=!1){return t=t.__v_raw,!e&&Te(J(t),"iterate",Mt),Reflect.get(t,"size",t)}function bi(t){t=J(t);const e=J(this);return kr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function yi(t,e){e=J(e);const n=J(this),{has:r,get:s}=kr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?kn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Ii(t){const e=J(this),{has:n,get:r}=kr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function wi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function tr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?Vs:t?Ks:xn;return!t&&Te(a,"iterate",Mt),o.forEach((u,d)=>r.call(s,c(u),c(d),i))}}function nr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Vs:e?Ks:xn;return!e&&Te(i,"iterate",c?fs:Mt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:this}}function ll(){const t={get(i){return Qn(this,i)},get size(){return er(this)},has:Zn,add:bi,set:yi,delete:Ii,clear:wi,forEach:tr(!1,!1)},e={get(i){return Qn(this,i,!1,!0)},get size(){return er(this)},has:Zn,add:bi,set:yi,delete:Ii,clear:wi,forEach:tr(!1,!0)},n={get(i){return Qn(this,i,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:tr(!0,!1)},r={get(i){return Qn(this,i,!0,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=nr(i,!1,!1),n[i]=nr(i,!0,!1),e[i]=nr(i,!1,!0),r[i]=nr(i,!0,!0)}),[t,n,e,r]}const[ul,dl,fl,hl]=ll();function Ws(t,e){const n=e?t?hl:fl:t?dl:ul;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const pl={get:Ws(!1,!1)},ml={get:Ws(!1,!0)},gl={get:Ws(!0,!1)},Ko=new WeakMap,qo=new WeakMap,Go=new WeakMap,_l=new WeakMap;function vl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bl(t){return t.__v_skip||!Object.isExtensible(t)?0:vl(jc(t))}function Vn(t){return sn(t)?t:zs(t,!1,zo,pl,Ko)}function yl(t){return zs(t,!1,cl,ml,qo)}function Jo(t){return zs(t,!0,al,gl,Go)}function zs(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zt(t){return sn(t)?Zt(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function gr(t){return!!(t&&t.__v_isShallow)}function Yo(t){return Zt(t)||sn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Xo(t){return mr(t,"__v_skip",!0),t}const xn=t=>oe(t)?Vn(t):t,Ks=t=>oe(t)?Jo(t):t;function Qo(t){vt&&De&&(t=J(t),Ho(t.dep||(t.dep=Bs())))}function Zo(t,e){t=J(t);const n=t.dep;n&&hs(n)}function _e(t){return!!(t&&t.__v_isRef===!0)}function _t(t){return ea(t,!1)}function Il(t){return ea(t,!0)}function ea(t,e){return _e(t)?t:new wl(t,e)}class wl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:xn(e)}get value(){return Qo(this),this._value}set value(e){const n=this.__v_isShallow||gr(e)||sn(e);e=n?e:J(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xn(e),Zo(this))}}function nt(t){return _e(t)?t.value:t}const El={get:(t,e,n)=>nt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ta(t){return Zt(t)?t:new Proxy(t,El)}var na;class Tl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[na]=!1,this._dirty=!0,this.effect=new js(e,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return Qo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}na="__v_isReadonly";function Rl(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=$e):(r=t.get,s=t.set),new Tl(r,s,i||!s,n)}function bt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){xr(i,e,n)}return s}function Ue(t,e,n,r){if(H(t)){const i=bt(t,e,n,r);return i&&Lo(i)&&i.catch(o=>{xr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}function xr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bt(c,null,10,[t,o,a]);return}}Sl(t,n,s,r)}function Sl(t,e,n,r=!0){console.error(t)}let Nn=!1,ps=!1;const ge=[];let Ke=0;const en=[];let Ze=null,kt=0;const ra=Promise.resolve();let qs=null;function sa(t){const e=qs||ra;return t?e.then(this?t.bind(this):t):e}function Pl(t){let e=Ke+1,n=ge.length;for(;e<n;){const r=e+n>>>1;Mn(ge[r])<t?e=r+1:n=r}return e}function Gs(t){(!ge.length||!ge.includes(t,Nn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?ge.push(t):ge.splice(Pl(t.id),0,t),ia())}function ia(){!Nn&&!ps&&(ps=!0,qs=ra.then(aa))}function Cl(t){const e=ge.indexOf(t);e>Ke&&ge.splice(e,1)}function Al(t){j(t)?en.push(...t):(!Ze||!Ze.includes(t,t.allowRecurse?kt+1:kt))&&en.push(t),ia()}function Ei(t,e=Nn?Ke+1:0){for(;e<ge.length;e++){const n=ge[e];n&&n.pre&&(ge.splice(e,1),e--,n())}}function oa(t){if(en.length){const e=[...new Set(en)];if(en.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>Mn(n)-Mn(r)),kt=0;kt<Ze.length;kt++)Ze[kt]();Ze=null,kt=0}}const Mn=t=>t.id==null?1/0:t.id,Ol=(t,e)=>{const n=Mn(t)-Mn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function aa(t){ps=!1,Nn=!0,ge.sort(Ol);const e=$e;try{for(Ke=0;Ke<ge.length;Ke++){const n=ge[Ke];n&&n.active!==!1&&bt(n,null,14)}}finally{Ke=0,ge.length=0,oa(),Nn=!1,qs=null,(ge.length||en.length)&&aa()}}function kl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[d]||se;p&&(s=n.map(v=>he(v)?v.trim():v)),h&&(s=n.map(ls))}let a,c=r[a=qr(e)]||r[a=qr(Je(e))];!c&&i&&(c=r[a=qr(fn(e))]),c&&Ue(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(u,t,6,s)}}function ca(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const d=ca(u,e,!0);d&&(a=!0,Ie(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Ie(o,i),oe(t)&&r.set(t,o),o)}function Nr(t,e){return!t||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,fn(e))||q(t,e))}let ve=null,Mr=null;function _r(t){const e=ve;return ve=t,Mr=t&&t.type.__scopeId||null,e}function Ye(t){Mr=t}function Xe(){Mr=null}function V(t,e=ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xi(-1);const i=_r(e);let o;try{o=t(...s)}finally{_r(i),r._d&&xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Gr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:h,data:p,setupState:v,ctx:P,inheritAttrs:k}=t;let B,A;const U=_r(t);try{if(n.shapeFlag&4){const G=s||r;B=ze(d.call(G,G,h,i,v,p,P)),A=c}else{const G=e;B=ze(G.length>1?G(i,{attrs:c,slots:a,emit:u}):G(i,null)),A=e.props?c:xl(c)}}catch(G){Pn.length=0,xr(G,t,1),B=x(Et)}let N=B;if(A&&k!==!1){const G=Object.keys(A),{shapeFlag:de}=N;G.length&&de&7&&(o&&G.some(Ls)&&(A=Nl(A,o)),N=on(N,A))}return n.dirs&&(N=on(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),B=N,_r(U),B}const xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pr(n))&&((e||(e={}))[n]=t[n]);return e},Nl=(t,e)=>{const n={};for(const r in t)(!Ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ml(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ti(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==r[p]&&!Nr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ti(r,o,u):!0:!!o;return!1}function Ti(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Nr(n,i))return!0}return!1}function Dl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ll=t=>t.__isSuspense;function $l(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Al(t)}function ar(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function rt(t,e,n=!1){const r=le||ve;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const rr={};function cr(t,e,n){return la(t,e,n)}function la(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){const a=qc()===(le==null?void 0:le.scope)?le:null;let c,u=!1,d=!1;if(_e(t)?(c=()=>t.value,u=gr(t)):Zt(t)?(c=()=>t,r=!0):j(t)?(d=!0,u=t.some(N=>Zt(N)||gr(N)),c=()=>t.map(N=>{if(_e(N))return N.value;if(Zt(N))return Nt(N);if(H(N))return bt(N,a,2)})):H(t)?e?c=()=>bt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ue(t,a,3,[p])}:c=$e,e&&r){const N=c;c=()=>Nt(N())}let h,p=N=>{h=A.onStop=()=>{bt(N,a,4)}},v;if(Ln)if(p=$e,e?n&&Ue(e,a,3,[c(),d?[]:void 0,p]):c(),s==="sync"){const N=ku();v=N.__watcherHandles||(N.__watcherHandles=[])}else return $e;let P=d?new Array(t.length).fill(rr):rr;const k=()=>{if(A.active)if(e){const N=A.run();(r||u||(d?N.some((G,de)=>kn(G,P[de])):kn(N,P)))&&(h&&h(),Ue(e,a,3,[N,P===rr?void 0:d&&P[0]===rr?[]:P,p]),P=N)}else A.run()};k.allowRecurse=!!e;let B;s==="sync"?B=k:s==="post"?B=()=>Ee(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),B=()=>Gs(k));const A=new js(c,B);e?n?k():P=A.run():s==="post"?Ee(A.run.bind(A),a&&a.suspense):A.run();const U=()=>{A.stop(),a&&a.scope&&$s(a.scope.effects,A)};return v&&v.push(U),U}function Ul(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?ua(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=le;an(this);const a=la(s,i.bind(r),n);return o?an(o):Dt(),a}function ua(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_e(t))Nt(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Nt(t[n],e);else if(Do(t)||Qt(t))t.forEach(n=>{Nt(n,e)});else if(Uo(t))for(const n in t)Nt(t[n],e);return t}function fe(t){return H(t)?{setup:t,name:t.name}:t}const Rn=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function Fl(t,e){fa(t,"a",e)}function Bl(t,e){fa(t,"da",e)}function fa(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)da(s.parent.vnode)&&jl(r,e,n,s),s=s.parent}}function jl(t,e,n,r){const s=Dr(e,t,r,!0);ha(()=>{$s(r[e],s)},n)}function Dr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hn(),an(n);const a=Ue(e,n,t,o);return Dt(),pn(),a});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=le)=>(!Ln||t==="sp")&&Dr(t,(...r)=>e(...r),n),Hl=ot("bm"),Vl=ot("m"),Wl=ot("bu"),zl=ot("u"),Kl=ot("bum"),ha=ot("um"),ql=ot("sp"),Gl=ot("rtg"),Jl=ot("rtc");function Yl(t,e=le){Dr("ec",t,e)}function Gt(t,e){const n=ve;if(n===null)return t;const r=Ur(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=se]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hn(),Ue(c,n,8,[t.el,a,t,e]),pn())}}const pa="components";function Js(t,e){return Ql(pa,t,!0,e)||t}const Xl=Symbol();function Ql(t,e,n=!0,r=!1){const s=ve||le;if(s){const i=s.type;if(t===pa){const a=Cu(i,!1);if(a&&(a===e||a===Je(e)||a===Or(Je(e))))return i}const o=Ri(s[t]||i[t],e)||Ri(s.appContext[t],e);return!o&&r?i:o}}function Ri(t,e){return t&&(t[e]||t[Je(e)]||t[Or(Je(e))])}function Jr(t,e,n={},r,s){if(ve.isCE||ve.parent&&Rn(ve.parent)&&ve.parent.isCE)return e!=="default"&&(n.name=e),x("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ee();const o=i&&ma(i(n)),a=Bt(me,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ma(t){return t.some(e=>br(e)?!(e.type===Et||e.type===me&&!ma(e.children)):!0)?t:null}const ms=t=>t?Sa(t)?Ur(t)||t.proxy:ms(t.parent):null,Sn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ms(t.parent),$root:t=>ms(t.root),$emit:t=>t.emit,$options:t=>Ys(t),$forceUpdate:t=>t.f||(t.f=()=>Gs(t.update)),$nextTick:t=>t.n||(t.n=sa.bind(t.proxy)),$watch:t=>Ul.bind(t)}),Yr=(t,e)=>t!==se&&!t.__isScriptSetup&&q(t,e),Zl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yr(r,e))return o[e]=1,r[e];if(s!==se&&q(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&q(u,e))return o[e]=3,i[e];if(n!==se&&q(n,e))return o[e]=4,n[e];gs&&(o[e]=0)}}const d=Sn[e];let h,p;if(d)return e==="$attrs"&&Te(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==se&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yr(s,e)?(s[e]=n,!0):r!==se&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&q(t,o)||Yr(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Sn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let gs=!0;function eu(t){const e=Ys(t),n=t.proxy,r=t.ctx;gs=!1,e.beforeCreate&&Si(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:v,updated:P,activated:k,deactivated:B,beforeDestroy:A,beforeUnmount:U,destroyed:N,unmounted:G,render:de,renderTracked:pe,renderTriggered:Se,errorCaptured:Oe,serverPrefetch:je,expose:Ce,inheritAttrs:at,components:He,directives:Ht,filters:Rt}=e;if(u&&tu(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const Q=o[te];H(Q)&&(r[te]=Q.bind(n))}if(s){const te=s.call(n,n);oe(te)&&(t.data=Vn(te))}if(gs=!0,i)for(const te in i){const Q=i[te],ke=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):$e,St=!H(Q)&&H(Q.set)?Q.set.bind(n):$e,xe=Ae({get:ke,set:St});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>xe.value,set:we=>xe.value=we})}if(a)for(const te in a)ga(a[te],r,n,te);if(c){const te=H(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Q=>{ar(Q,te[Q])})}d&&Si(d,t,"c");function ae(te,Q){j(Q)?Q.forEach(ke=>te(ke.bind(n))):Q&&te(Q.bind(n))}if(ae(Hl,h),ae(Vl,p),ae(Wl,v),ae(zl,P),ae(Fl,k),ae(Bl,B),ae(Yl,Oe),ae(Jl,pe),ae(Gl,Se),ae(Kl,U),ae(ha,G),ae(ql,je),j(Ce))if(Ce.length){const te=t.exposed||(t.exposed={});Ce.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>n[Q],set:ke=>n[Q]=ke})})}else t.exposed||(t.exposed={});de&&t.render===$e&&(t.render=de),at!=null&&(t.inheritAttrs=at),He&&(t.components=He),Ht&&(t.directives=Ht)}function tu(t,e,n=$e,r=!1){j(t)&&(t=_s(t));for(const s in t){const i=t[s];let o;oe(i)?"default"in i?o=rt(i.from||s,i.default,!0):o=rt(i.from||s):o=rt(i),_e(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Si(t,e,n){Ue(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ga(t,e,n,r){const s=r.includes(".")?ua(n,r):()=>n[r];if(he(t)){const i=e[t];H(i)&&cr(s,i)}else if(H(t))cr(s,t.bind(n));else if(oe(t))if(j(t))t.forEach(i=>ga(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&cr(s,i,t)}}function Ys(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>vr(c,u,o,!0)),vr(c,e,o)),oe(e)&&i.set(e,c),c}function vr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vr(t,i,n,!0),s&&s.forEach(o=>vr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nu={data:Pi,props:At,emits:At,methods:At,computed:At,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:At,directives:At,watch:su,provide:Pi,inject:ru};function Pi(t,e){return e?t?function(){return Ie(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ru(t,e){return At(_s(t),_s(e))}function _s(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function At(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function su(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function iu(t,e,n,r=!1){const s={},i={};mr(i,$r,1),t.propsDefaults=Object.create(null),_a(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:yl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ou(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Nr(t.emitsOptions,p))continue;const v=e[p];if(c)if(q(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const P=Je(p);s[P]=vs(c,a,P,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{_a(t,e,s,i)&&(u=!0);let d;for(const h in a)(!e||!q(e,h)&&((d=fn(h))===h||!q(e,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=vs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h))&&(delete i[h],u=!0)}u&&st(t,"set","$attrs")}function _a(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ir(c))continue;const u=e[c];let d;s&&q(s,d=Je(c))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:Nr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=J(n),u=a||se;for(let d=0;d<i.length;d++){const h=i[d];n[h]=vs(s,c,h,u[h],t,!q(u,h))}}return o}function vs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(an(s),r=u[n]=c.call(null,e),Dt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function va(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const d=h=>{c=!0;const[p,v]=va(h,e,!0);Ie(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return oe(t)&&r.set(t,Xt),Xt;if(j(i))for(let d=0;d<i.length;d++){const h=Je(i[d]);Ci(h)&&(o[h]=se)}else if(i)for(const d in i){const h=Je(d);if(Ci(h)){const p=i[d],v=o[h]=j(p)||H(p)?{type:p}:Object.assign({},p);if(v){const P=ki(Boolean,v.type),k=ki(String,v.type);v[0]=P>-1,v[1]=k<0||P<k,(P>-1||q(v,"default"))&&a.push(h)}}}const u=[o,a];return oe(t)&&r.set(t,u),u}function Ci(t){return t[0]!=="$"}function Ai(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Oi(t,e){return Ai(t)===Ai(e)}function ki(t,e){return j(e)?e.findIndex(n=>Oi(n,t)):H(e)&&Oi(e,t)?0:-1}const ba=t=>t[0]==="_"||t==="$stable",Xs=t=>j(t)?t.map(ze):[ze(t)],au=(t,e,n)=>{if(e._n)return e;const r=V((...s)=>Xs(e(...s)),n);return r._c=!1,r},ya=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ba(s))continue;const i=t[s];if(H(i))e[s]=au(s,i,r);else if(i!=null){const o=Xs(i);e[s]=()=>o}}},Ia=(t,e)=>{const n=Xs(e);t.slots.default=()=>n},cu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),mr(e,"_",n)):ya(e,t.slots={})}else t.slots={},e&&Ia(t,e);mr(t.slots,$r,1)},lu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ya(e,s)),o=e}else e&&(Ia(t,e),o={default:1});if(i)for(const a in s)!ba(a)&&!(a in o)&&delete s[a]};function wa(){return{app:null,config:{isNativeTag:Uc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uu=0;function du(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!oe(s)&&(s=null);const i=wa(),o=new Set;let a=!1;const c=i.app={_uid:uu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...d)):H(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!a){const p=x(r,s);return p.appContext=i,d&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Ur(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function bs(t,e,n,r,s=!1){if(j(t)){t.forEach((p,v)=>bs(p,e&&(j(e)?e[v]:e),n,r,s));return}if(Rn(r)&&!s)return;const i=r.shapeFlag&4?Ur(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,d=a.refs===se?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(he(u)?(d[u]=null,q(h,u)&&(h[u]=null)):_e(u)&&(u.value=null)),H(c))bt(c,a,12,[o,d]);else{const p=he(c),v=_e(c);if(p||v){const P=()=>{if(t.f){const k=p?q(h,c)?h[c]:d[c]:c.value;s?j(k)&&$s(k,i):j(k)?k.includes(i)||k.push(i):p?(d[c]=[i],q(h,c)&&(h[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else p?(d[c]=o,q(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Ee(P,n)):P()}}}const Ee=$l;function fu(t){return hu(t)}function hu(t,e){const n=Wc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:v=$e,insertStaticContent:P}=t,k=(l,f,m,g=null,b=null,w=null,S=!1,I=null,E=!!f.dynamicChildren)=>{if(l===f)return;l&&!yn(l,f)&&(g=R(l),we(l,b,w,!0),l=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:y,ref:D,shapeFlag:O}=f;switch(y){case Lr:B(l,f,m,g);break;case Et:A(l,f,m,g);break;case lr:l==null&&U(f,m,g,S);break;case me:He(l,f,m,g,b,w,S,I,E);break;default:O&1?de(l,f,m,g,b,w,S,I,E):O&6?Ht(l,f,m,g,b,w,S,I,E):(O&64||O&128)&&y.process(l,f,m,g,b,w,S,I,E,K)}D!=null&&b&&bs(D,l&&l.ref,w,f||l,!f)},B=(l,f,m,g)=>{if(l==null)r(f.el=a(f.children),m,g);else{const b=f.el=l.el;f.children!==l.children&&u(b,f.children)}},A=(l,f,m,g)=>{l==null?r(f.el=c(f.children||""),m,g):f.el=l.el},U=(l,f,m,g)=>{[l.el,l.anchor]=P(l.children,f,m,g,l.el,l.anchor)},N=({el:l,anchor:f},m,g)=>{let b;for(;l&&l!==f;)b=p(l),r(l,m,g),l=b;r(f,m,g)},G=({el:l,anchor:f})=>{let m;for(;l&&l!==f;)m=p(l),s(l),l=m;s(f)},de=(l,f,m,g,b,w,S,I,E)=>{S=S||f.type==="svg",l==null?pe(f,m,g,b,w,S,I,E):je(l,f,b,w,S,I,E)},pe=(l,f,m,g,b,w,S,I)=>{let E,y;const{type:D,props:O,shapeFlag:L,transition:F,dirs:z}=l;if(E=l.el=o(l.type,w,O&&O.is,O),L&8?d(E,l.children):L&16&&Oe(l.children,E,null,g,b,w&&D!=="foreignObject",S,I),z&&Pt(l,null,g,"created"),Se(E,l,l.scopeId,S,g),O){for(const Z in O)Z!=="value"&&!ir(Z)&&i(E,Z,null,O[Z],w,l.children,g,b,C);"value"in O&&i(E,"value",null,O.value),(y=O.onVnodeBeforeMount)&&We(y,g,l)}z&&Pt(l,null,g,"beforeMount");const ne=(!b||b&&!b.pendingBranch)&&F&&!F.persisted;ne&&F.beforeEnter(E),r(E,f,m),((y=O&&O.onVnodeMounted)||ne||z)&&Ee(()=>{y&&We(y,g,l),ne&&F.enter(E),z&&Pt(l,null,g,"mounted")},b)},Se=(l,f,m,g,b)=>{if(m&&v(l,m),g)for(let w=0;w<g.length;w++)v(l,g[w]);if(b){let w=b.subTree;if(f===w){const S=b.vnode;Se(l,S,S.scopeId,S.slotScopeIds,b.parent)}}},Oe=(l,f,m,g,b,w,S,I,E=0)=>{for(let y=E;y<l.length;y++){const D=l[y]=I?dt(l[y]):ze(l[y]);k(null,D,f,m,g,b,w,S,I)}},je=(l,f,m,g,b,w,S)=>{const I=f.el=l.el;let{patchFlag:E,dynamicChildren:y,dirs:D}=f;E|=l.patchFlag&16;const O=l.props||se,L=f.props||se;let F;m&&Ct(m,!1),(F=L.onVnodeBeforeUpdate)&&We(F,m,f,l),D&&Pt(f,l,m,"beforeUpdate"),m&&Ct(m,!0);const z=b&&f.type!=="foreignObject";if(y?Ce(l.dynamicChildren,y,I,m,g,z,w):S||Q(l,f,I,null,m,g,z,w,!1),E>0){if(E&16)at(I,f,O,L,m,g,b);else if(E&2&&O.class!==L.class&&i(I,"class",null,L.class,b),E&4&&i(I,"style",O.style,L.style,b),E&8){const ne=f.dynamicProps;for(let Z=0;Z<ne.length;Z++){const ce=ne[Z],Ne=O[ce],Wt=L[ce];(Wt!==Ne||ce==="value")&&i(I,ce,Ne,Wt,b,l.children,m,g,C)}}E&1&&l.children!==f.children&&d(I,f.children)}else!S&&y==null&&at(I,f,O,L,m,g,b);((F=L.onVnodeUpdated)||D)&&Ee(()=>{F&&We(F,m,f,l),D&&Pt(f,l,m,"updated")},g)},Ce=(l,f,m,g,b,w,S)=>{for(let I=0;I<f.length;I++){const E=l[I],y=f[I],D=E.el&&(E.type===me||!yn(E,y)||E.shapeFlag&70)?h(E.el):m;k(E,y,D,null,g,b,w,S,!0)}},at=(l,f,m,g,b,w,S)=>{if(m!==g){if(m!==se)for(const I in m)!ir(I)&&!(I in g)&&i(l,I,m[I],null,S,f.children,b,w,C);for(const I in g){if(ir(I))continue;const E=g[I],y=m[I];E!==y&&I!=="value"&&i(l,I,y,E,S,f.children,b,w,C)}"value"in g&&i(l,"value",m.value,g.value)}},He=(l,f,m,g,b,w,S,I,E)=>{const y=f.el=l?l.el:a(""),D=f.anchor=l?l.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:F}=f;F&&(I=I?I.concat(F):F),l==null?(r(y,m,g),r(D,m,g),Oe(f.children,m,D,b,w,S,I,E)):O>0&&O&64&&L&&l.dynamicChildren?(Ce(l.dynamicChildren,L,m,b,w,S,I),(f.key!=null||b&&f===b.subTree)&&Ea(l,f,!0)):Q(l,f,m,D,b,w,S,I,E)},Ht=(l,f,m,g,b,w,S,I,E)=>{f.slotScopeIds=I,l==null?f.shapeFlag&512?b.ctx.activate(f,m,g,S,E):Rt(f,m,g,b,w,S,E):vn(l,f,E)},Rt=(l,f,m,g,b,w,S)=>{const I=l.component=Eu(l,g,b);if(da(l)&&(I.ctx.renderer=K),Tu(I),I.asyncDep){if(b&&b.registerDep(I,ae),!l.el){const E=I.subTree=x(Et);A(null,E,f,m)}return}ae(I,l,f,m,b,w,S)},vn=(l,f,m)=>{const g=f.component=l.component;if(Ml(l,f,m))if(g.asyncDep&&!g.asyncResolved){te(g,f,m);return}else g.next=f,Cl(g.update),g.update();else f.el=l.el,g.vnode=f},ae=(l,f,m,g,b,w,S)=>{const I=()=>{if(l.isMounted){let{next:D,bu:O,u:L,parent:F,vnode:z}=l,ne=D,Z;Ct(l,!1),D?(D.el=z.el,te(l,D,S)):D=z,O&&or(O),(Z=D.props&&D.props.onVnodeBeforeUpdate)&&We(Z,F,D,z),Ct(l,!0);const ce=Gr(l),Ne=l.subTree;l.subTree=ce,k(Ne,ce,h(Ne.el),R(Ne),l,b,w),D.el=ce.el,ne===null&&Dl(l,ce.el),L&&Ee(L,b),(Z=D.props&&D.props.onVnodeUpdated)&&Ee(()=>We(Z,F,D,z),b)}else{let D;const{el:O,props:L}=f,{bm:F,m:z,parent:ne}=l,Z=Rn(f);if(Ct(l,!1),F&&or(F),!Z&&(D=L&&L.onVnodeBeforeMount)&&We(D,ne,f),Ct(l,!0),O&&W){const ce=()=>{l.subTree=Gr(l),W(O,l.subTree,l,b,null)};Z?f.type.__asyncLoader().then(()=>!l.isUnmounted&&ce()):ce()}else{const ce=l.subTree=Gr(l);k(null,ce,m,g,l,b,w),f.el=ce.el}if(z&&Ee(z,b),!Z&&(D=L&&L.onVnodeMounted)){const ce=f;Ee(()=>We(D,ne,ce),b)}(f.shapeFlag&256||ne&&Rn(ne.vnode)&&ne.vnode.shapeFlag&256)&&l.a&&Ee(l.a,b),l.isMounted=!0,f=m=g=null}},E=l.effect=new js(I,()=>Gs(y),l.scope),y=l.update=()=>E.run();y.id=l.uid,Ct(l,!0),y()},te=(l,f,m)=>{f.component=l;const g=l.vnode.props;l.vnode=f,l.next=null,ou(l,f.props,g,m),lu(l,f.children,m),hn(),Ei(),pn()},Q=(l,f,m,g,b,w,S,I,E=!1)=>{const y=l&&l.children,D=l?l.shapeFlag:0,O=f.children,{patchFlag:L,shapeFlag:F}=f;if(L>0){if(L&128){St(y,O,m,g,b,w,S,I,E);return}else if(L&256){ke(y,O,m,g,b,w,S,I,E);return}}F&8?(D&16&&C(y,b,w),O!==y&&d(m,O)):D&16?F&16?St(y,O,m,g,b,w,S,I,E):C(y,b,w,!0):(D&8&&d(m,""),F&16&&Oe(O,m,g,b,w,S,I,E))},ke=(l,f,m,g,b,w,S,I,E)=>{l=l||Xt,f=f||Xt;const y=l.length,D=f.length,O=Math.min(y,D);let L;for(L=0;L<O;L++){const F=f[L]=E?dt(f[L]):ze(f[L]);k(l[L],F,m,null,b,w,S,I,E)}y>D?C(l,b,w,!0,!1,O):Oe(f,m,g,b,w,S,I,E,O)},St=(l,f,m,g,b,w,S,I,E)=>{let y=0;const D=f.length;let O=l.length-1,L=D-1;for(;y<=O&&y<=L;){const F=l[y],z=f[y]=E?dt(f[y]):ze(f[y]);if(yn(F,z))k(F,z,m,null,b,w,S,I,E);else break;y++}for(;y<=O&&y<=L;){const F=l[O],z=f[L]=E?dt(f[L]):ze(f[L]);if(yn(F,z))k(F,z,m,null,b,w,S,I,E);else break;O--,L--}if(y>O){if(y<=L){const F=L+1,z=F<D?f[F].el:g;for(;y<=L;)k(null,f[y]=E?dt(f[y]):ze(f[y]),m,z,b,w,S,I,E),y++}}else if(y>L)for(;y<=O;)we(l[y],b,w,!0),y++;else{const F=y,z=y,ne=new Map;for(y=z;y<=L;y++){const Pe=f[y]=E?dt(f[y]):ze(f[y]);Pe.key!=null&&ne.set(Pe.key,y)}let Z,ce=0;const Ne=L-z+1;let Wt=!1,fi=0;const bn=new Array(Ne);for(y=0;y<Ne;y++)bn[y]=0;for(y=F;y<=O;y++){const Pe=l[y];if(ce>=Ne){we(Pe,b,w,!0);continue}let Ve;if(Pe.key!=null)Ve=ne.get(Pe.key);else for(Z=z;Z<=L;Z++)if(bn[Z-z]===0&&yn(Pe,f[Z])){Ve=Z;break}Ve===void 0?we(Pe,b,w,!0):(bn[Ve-z]=y+1,Ve>=fi?fi=Ve:Wt=!0,k(Pe,f[Ve],m,null,b,w,S,I,E),ce++)}const hi=Wt?pu(bn):Xt;for(Z=hi.length-1,y=Ne-1;y>=0;y--){const Pe=z+y,Ve=f[Pe],pi=Pe+1<D?f[Pe+1].el:g;bn[y]===0?k(null,Ve,m,pi,b,w,S,I,E):Wt&&(Z<0||y!==hi[Z]?xe(Ve,m,pi,2):Z--)}}},xe=(l,f,m,g,b=null)=>{const{el:w,type:S,transition:I,children:E,shapeFlag:y}=l;if(y&6){xe(l.component.subTree,f,m,g);return}if(y&128){l.suspense.move(f,m,g);return}if(y&64){S.move(l,f,m,K);return}if(S===me){r(w,f,m);for(let O=0;O<E.length;O++)xe(E[O],f,m,g);r(l.anchor,f,m);return}if(S===lr){N(l,f,m);return}if(g!==2&&y&1&&I)if(g===0)I.beforeEnter(w),r(w,f,m),Ee(()=>I.enter(w),b);else{const{leave:O,delayLeave:L,afterLeave:F}=I,z=()=>r(w,f,m),ne=()=>{O(w,()=>{z(),F&&F()})};L?L(w,z,ne):ne()}else r(w,f,m)},we=(l,f,m,g=!1,b=!1)=>{const{type:w,props:S,ref:I,children:E,dynamicChildren:y,shapeFlag:D,patchFlag:O,dirs:L}=l;if(I!=null&&bs(I,null,m,l,!0),D&256){f.ctx.deactivate(l);return}const F=D&1&&L,z=!Rn(l);let ne;if(z&&(ne=S&&S.onVnodeBeforeUnmount)&&We(ne,f,l),D&6)_(l.component,m,g);else{if(D&128){l.suspense.unmount(m,g);return}F&&Pt(l,null,f,"beforeUnmount"),D&64?l.type.remove(l,f,m,b,K,g):y&&(w!==me||O>0&&O&64)?C(y,f,m,!1,!0):(w===me&&O&384||!b&&D&16)&&C(E,f,m),g&&Vt(l)}(z&&(ne=S&&S.onVnodeUnmounted)||F)&&Ee(()=>{ne&&We(ne,f,l),F&&Pt(l,null,f,"unmounted")},m)},Vt=l=>{const{type:f,el:m,anchor:g,transition:b}=l;if(f===me){Xn(m,g);return}if(f===lr){G(l);return}const w=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:I}=b,E=()=>S(m,w);I?I(l.el,w,E):E()}else w()},Xn=(l,f)=>{let m;for(;l!==f;)m=p(l),s(l),l=m;s(f)},_=(l,f,m)=>{const{bum:g,scope:b,update:w,subTree:S,um:I}=l;g&&or(g),b.stop(),w&&(w.active=!1,we(S,l,f,m)),I&&Ee(I,f),Ee(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},C=(l,f,m,g=!1,b=!1,w=0)=>{for(let S=w;S<l.length;S++)we(l[S],f,m,g,b)},R=l=>l.shapeFlag&6?R(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),M=(l,f,m)=>{l==null?f._vnode&&we(f._vnode,null,null,!0):k(f._vnode||null,l,f,null,null,null,m),Ei(),oa(),f._vnode=l},K={p:k,um:we,m:xe,r:Vt,mt:Rt,mc:Oe,pc:Q,pbc:Ce,n:R,o:t};let ie,W;return e&&([ie,W]=e(K)),{render:M,hydrate:ie,createApp:du(M,ie)}}function Ct({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ea(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dt(s[i]),a.el=o.el),n||Ea(o,a)),a.type===Lr&&(a.el=o.el)}}function pu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mu=t=>t.__isTeleport,me=Symbol(void 0),Lr=Symbol(void 0),Et=Symbol(void 0),lr=Symbol(void 0),Pn=[];let Le=null;function ee(t=!1){Pn.push(Le=t?null:[])}function gu(){Pn.pop(),Le=Pn[Pn.length-1]||null}let Dn=1;function xi(t){Dn+=t}function Ta(t){return t.dynamicChildren=Dn>0?Le||Xt:null,gu(),Dn>0&&Le&&Le.push(t),t}function ue(t,e,n,r,s,i){return Ta(T(t,e,n,r,s,i,!0))}function Bt(t,e,n,r,s){return Ta(x(t,e,n,r,s,!0))}function br(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const $r="__vInternal",Ra=({key:t})=>t??null,ur=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||_e(t)||H(t)?{i:ve,r:t,k:e,f:!!n}:t:null;function T(t,e=null,n=null,r=0,s=null,i=t===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ra(e),ref:e&&ur(e),scopeId:Mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(Qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),Dn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const x=_u;function _u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xl)&&(t=Et),br(t)){const a=on(t,e,!0);return n&&Qs(a,n),Dn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(Au(t)&&(t=t.__vccOpts),e){e=vu(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Ds(a)),oe(c)&&(Yo(c)&&!j(c)&&(c=Ie({},c)),e.style=Ms(c))}const o=he(t)?1:Ll(t)?128:mu(t)?64:oe(t)?4:H(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function vu(t){return t?Yo(t)||$r in t?Ie({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?yu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ra(a),ref:e&&e.ref?n&&s?j(s)?s.concat(ur(e)):[s,ur(e)]:ur(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==me?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Y(t=" ",e=0){return x(Lr,null,t,e)}function bu(t,e){const n=x(lr,null,t);return n.staticCount=e,n}function ys(t="",e=!1){return e?(ee(),Bt(Et,null,t)):x(Et,null,t)}function ze(t){return t==null||typeof t=="boolean"?x(Et):j(t)?x(me,null,t.slice()):typeof t=="object"?dt(t):x(Lr,null,String(t))}function dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function Qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($r in e)?e._ctx=ve:s===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),r&64?(n=16,e=[Y(e)]):n=8);t.children=e,t.shapeFlag|=n}function yu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ds([e.class,r.class]));else if(s==="style")e.style=Ms([e.style,r.style]);else if(Pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function We(t,e,n,r=null){Ue(t,e,7,[n,r])}const Iu=wa();let wu=0;function Eu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Iu,i={uid:wu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:va(r,s),emitsOptions:ca(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kl.bind(null,i),t.ce&&t.ce(i),i}let le=null;const an=t=>{le=t,t.scope.on()},Dt=()=>{le&&le.scope.off(),le=null};function Sa(t){return t.vnode.shapeFlag&4}let Ln=!1;function Tu(t,e=!1){Ln=e;const{props:n,children:r}=t.vnode,s=Sa(t);iu(t,n,s,e),cu(t,r);const i=s?Ru(t,e):void 0;return Ln=!1,i}function Ru(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xo(new Proxy(t.ctx,Zl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pu(t):null;an(t),hn();const i=bt(r,t,0,[t.props,s]);if(pn(),Dt(),Lo(i)){if(i.then(Dt,Dt),e)return i.then(o=>{Ni(t,o,e)}).catch(o=>{xr(o,t,0)});t.asyncDep=i}else Ni(t,i,e)}else Pa(t,e)}function Ni(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=ta(e)),Pa(t,n)}let Mi;function Pa(t,e,n){const r=t.type;if(!t.render){if(!e&&Mi&&!r.render){const s=r.template||Ys(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Ie(Ie({isCustomElement:i,delimiters:a},o),c);r.render=Mi(s,u)}}t.render=r.render||$e}an(t),hn(),eu(t),pn(),Dt()}function Su(t){return new Proxy(t.attrs,{get(e,n){return Te(t,"get","$attrs"),e[n]}})}function Pu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Su(t))},slots:t.slots,emit:t.emit,expose:e}}function Ur(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ta(Xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}}))}function Cu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Au(t){return H(t)&&"__vccOpts"in t}const Ae=(t,e)=>Rl(t,e,Ln);function Ca(t,e,n){const r=arguments.length;return r===2?oe(e)&&!j(e)?br(e)?x(t,null,[e]):x(t,e):x(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),x(t,e,n))}const Ou=Symbol(""),ku=()=>rt(Ou),xu="3.2.47",Nu="http://www.w3.org/2000/svg",xt=typeof document<"u"?document:null,Di=xt&&xt.createElement("template"),Mu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?xt.createElementNS(Nu,t):xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Di.innerHTML=r?`<svg>${t}</svg>`:t;const a=Di.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Du(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lu(t,e,n){const r=t.style,s=he(n);if(n&&!s){if(e&&!he(e))for(const i in e)n[i]==null&&Is(r,i,"");for(const i in n)Is(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Li=/\s*!important$/;function Is(t,e,n){if(j(n))n.forEach(r=>Is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$u(t,e);Li.test(n)?t.setProperty(fn(r),n.replace(Li,""),"important"):t[r]=n}}const $i=["Webkit","Moz","ms"],Xr={};function $u(t,e){const n=Xr[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return Xr[e]=r;r=Or(r);for(let s=0;s<$i.length;s++){const i=$i[s]+r;if(i in t)return Xr[e]=i}return e}const Ui="http://www.w3.org/1999/xlink";function Uu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ui,e.slice(6,e.length)):t.setAttributeNS(Ui,e,n);else{const i=Lc(e);n==null||i&&!No(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=No(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Kt(t,e,n,r){t.addEventListener(e,n,r)}function Bu(t,e,n,r){t.removeEventListener(e,n,r)}function ju(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Hu(e);if(r){const u=i[e]=zu(r,s);Kt(t,a,u,c)}else o&&(Bu(t,a,o,c),i[e]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function Hu(t){let e;if(Fi.test(t)){e={};let r;for(;r=t.match(Fi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fn(t.slice(2)),e]}let Qr=0;const Vu=Promise.resolve(),Wu=()=>Qr||(Vu.then(()=>Qr=0),Qr=Date.now());function zu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(Ku(r,n.value),e,5,[r])};return n.value=t,n.attached=Wu(),n}function Ku(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bi=/^on[a-z]/,qu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Du(t,r,s):e==="style"?Lu(t,n,r):Pr(e)?Ls(e)||ju(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gu(t,e,r,s))?Fu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uu(t,e,r,s))};function Gu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bi.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bi.test(e)&&he(n)?!1:e in t}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>or(e,n):e};function Ju(t){t.target.composing=!0}function Hi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ji(s);const i=r||s.props&&s.props.type==="number";Kt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ls(a)),t._assign(a)}),n&&Kt(t,"change",()=>{t.value=t.value.trim()}),e||(Kt(t,"compositionstart",Ju),Kt(t,"compositionend",Hi),Kt(t,"change",Hi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ji(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ls(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Yu=["ctrl","shift","alt","meta"],Xu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yu.some(n=>t[`${n}Key`]&&!e.includes(n))},Qu=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Xu[e[s]];if(i&&i(n,e))return}return t(n,...r)},Zu=Ie({patchProp:qu},Mu);let Vi;function ed(){return Vi||(Vi=fu(Zu))}const td=(...t)=>{const e=ed().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nd(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nd(t){return he(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof window<"u";function rd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Zr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fe(s)?s.map(t):t(s)}return n}const Cn=()=>{},Fe=Array.isArray,sd=/\/$/,id=t=>t.replace(sd,"");function es(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ld(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function od(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ad(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(e.matched[r],n.matched[s])&&Aa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Aa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cd(t[n],e[n]))return!1;return!0}function cd(t,e){return Fe(t)?zi(t,e):Fe(e)?zi(e,t):t===e}function zi(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ld(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var $n;(function(t){t.pop="pop",t.push="push"})($n||($n={}));var An;(function(t){t.back="back",t.forward="forward",t.unknown=""})(An||(An={}));function ud(t){if(!t)if(qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),id(t)}const dd=/^[^#]+#/;function fd(t,e){return t.replace(dd,"#")+e}function hd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function pd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ki(t,e){return(history.state?history.state.position-e:-1)+t}const ws=new Map;function md(t,e){ws.set(t,e)}function gd(t){const e=ws.get(t);return ws.delete(t),e}let _d=()=>location.protocol+"//"+location.host;function Oa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wi(c,"")}return Wi(n,t)+r+s}function vd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const v=Oa(t,location),P=n.value,k=e.value;let B=0;if(p){if(n.value=v,e.value=p,o&&o===P){o=null;return}B=k?p.position-k.position:0}else r(v);s.forEach(A=>{A(n.value,P,{delta:B,type:$n.pop,direction:B?B>0?An.forward:An.back:An.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const P=s.indexOf(p);P>-1&&s.splice(P,1)};return i.push(v),v}function d(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Fr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:h}}function qi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fr():null}}function bd(t){const{history:e,location:n}=window,r={value:Oa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_d()+t+c;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](p)}}function o(c,u){const d=X({},e.state,qi(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function a(c,u){const d=X({},s.value,e.state,{forward:c,scroll:Fr()});i(d.current,d,!0);const h=X({},qi(r.value,c,null),{position:d.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function yd(t){t=ud(t);const e=bd(t),n=vd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:fd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Id(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var Gi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gi||(Gi={}));function ln(t,e){return X(new Error,{type:t,[xa]:!0},e)}function Qe(t,e){return t instanceof Error&&xa in t&&(e==null||!!(t.type&e))}const Ji="[^/]+?",wd={sensitive:!1,strict:!1,start:!0,end:!0},Ed=/[.+*?^${}()[\]/\\]/g;function Td(t,e){const n=X({},wd,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Ed,"\\$&"),v+=40;else if(p.type===1){const{value:P,repeatable:k,optional:B,regexp:A}=p;i.push({name:P,repeatable:k,optional:B});const U=A||Ji;if(U!==Ji){v+=10;try{new RegExp(`(${U})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${P}" (${U}): `+G.message)}}let N=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(N=B&&u.length<2?`(?:/${N})`:"/"+N),B&&(N+="?"),s+=N,v+=20,B&&(v+=-8),k&&(v+=-20),U===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const d=u.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",P=i[p-1];h[P.name]=v&&P.repeatable?v.split("/"):v}return h}function c(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:P,repeatable:k,optional:B}=v,A=P in u?u[P]:"";if(Fe(A)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const U=Fe(A)?A.join("/"):A;if(!U)if(B)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);d+=U}}return d||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Rd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Rd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yi(r))return 1;if(Yi(s))return-1}return s.length-r.length}function Yi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pd={type:0,value:""},Cd=/[a-zA-Z0-9_]/;function Ad(t){if(!t)return[[]];if(t==="/")return[[Pd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Cd.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Od(t,e,n){const r=Td(Ad(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kd(t,e){const n=[],r=new Map;e=Zi({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,h,p){const v=!p,P=xd(d);P.aliasOf=p&&p.record;const k=Zi(e,d),B=[P];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of N)B.push(X({},P,{components:p?p.record.components:P.components,path:G,aliasOf:p?p.record:P}))}let A,U;for(const N of B){const{path:G}=N;if(h&&G[0]!=="/"){const de=h.record.path,pe=de[de.length-1]==="/"?"":"/";N.path=h.record.path+(G&&pe+G)}if(A=Od(N,h,k),p?p.alias.push(A):(U=U||A,U!==A&&U.alias.push(A),v&&d.name&&!Qi(A)&&o(d.name)),P.children){const de=P.children;for(let pe=0;pe<de.length;pe++)i(de[pe],A,p&&p.children[pe])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return U?()=>{o(U)}:Cn}function o(d){if(ka(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){let h=0;for(;h<n.length&&Sd(d,n[h])>=0&&(d.record.path!==n[h].record.path||!Na(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!Qi(d)&&r.set(d.record.name,d)}function u(d,h){let p,v={},P,k;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw ln(1,{location:d});k=p.record.name,v=X(Xi(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),d.params&&Xi(d.params,p.keys.map(U=>U.name))),P=p.stringify(v)}else if("path"in d)P=d.path,p=n.find(U=>U.re.test(P)),p&&(v=p.parse(P),k=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw ln(1,{location:d,currentLocation:h});k=p.record.name,v=X({},h.params,d.params),P=p.stringify(v)}const B=[];let A=p;for(;A;)B.unshift(A.record),A=A.parent;return{name:k,path:P,params:v,matched:B,meta:Md(B)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Xi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Md(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Zi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Na(t,e){return e.children.some(n=>n===t||Na(t,n))}const Ma=/#/g,Dd=/&/g,Ld=/\//g,$d=/=/g,Ud=/\?/g,Da=/\+/g,Fd=/%5B/g,Bd=/%5D/g,La=/%5E/g,jd=/%60/g,$a=/%7B/g,Hd=/%7C/g,Ua=/%7D/g,Vd=/%20/g;function Zs(t){return encodeURI(""+t).replace(Hd,"|").replace(Fd,"[").replace(Bd,"]")}function Wd(t){return Zs(t).replace($a,"{").replace(Ua,"}").replace(La,"^")}function Es(t){return Zs(t).replace(Da,"%2B").replace(Vd,"+").replace(Ma,"%23").replace(Dd,"%26").replace(jd,"`").replace($a,"{").replace(Ua,"}").replace(La,"^")}function zd(t){return Es(t).replace($d,"%3D")}function Kd(t){return Zs(t).replace(Ma,"%23").replace(Ud,"%3F")}function qd(t){return t==null?"":Kd(t).replace(Ld,"%2F")}function yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Gd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Da," "),o=i.indexOf("="),a=yr(o<0?i:i.slice(0,o)),c=o<0?null:yr(i.slice(o+1));if(a in e){let u=e[a];Fe(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function eo(t){let e="";for(let n in t){const r=t[n];if(n=zd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&Es(i)):[r&&Es(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Yd=Symbol(""),to=Symbol(""),ei=Symbol(""),Fa=Symbol(""),Ts=Symbol("");function In(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ft(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ln(4,{from:n,to:e})):h instanceof Error?a(h):Id(h)?a(ln(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>a(h))})}function ts(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Xd(a)){const u=(a.__vccOpts||a)[e];u&&s.push(ft(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=rd(u)?u.default:u;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&ft(p,n,r,i,o)()}))}}return s}function Xd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function no(t){const e=rt(ei),n=rt(Fa),r=Ae(()=>e.resolve(nt(t.to))),s=Ae(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(cn.bind(null,d));if(p>-1)return p;const v=ro(c[u-2]);return u>1&&ro(d)===v&&h[h.length-1].path!==v?h.findIndex(cn.bind(null,c[u-2])):p}),i=Ae(()=>s.value>-1&&tf(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Aa(n.params,r.value.params));function a(c={}){return ef(c)?e[nt(t.replace)?"replace":"push"](nt(t.to)).catch(Cn):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Qd=fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:no,setup(t,{slots:e}){const n=Vn(no(t)),{options:r}=rt(ei),s=Ae(()=>({[so(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[so(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ca("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Zd=Qd;function ef(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ro(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const so=(t,e,n)=>t??e??n,nf=fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rt(Ts),s=Ae(()=>t.route||r.value),i=rt(to,0),o=Ae(()=>{let u=nt(i);const{matched:d}=s.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),a=Ae(()=>s.value.matched[o.value]);ar(to,Ae(()=>o.value+1)),ar(Yd,a),ar(Ts,s);const c=_t();return cr(()=>[c.value,a.value,t.name],([u,d,h],[p,v,P])=>{d&&(d.instances[h]=u,v&&v!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!cn(d,v)||!p)&&(d.enterCallbacks[h]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,h=a.value,p=h&&h.components[d];if(!p)return io(n.default,{Component:p,route:u});const v=h.props[d],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,B=Ca(p,X({},P,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[d]=null)},ref:c}));return io(n.default,{Component:B,route:u})||B}}});function io(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ba=nf;function rf(t){const e=kd(t.routes,t),n=t.parseQuery||Gd,r=t.stringifyQuery||eo,s=t.history,i=In(),o=In(),a=In(),c=Il(lt);let u=lt;qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Zr.bind(null,_=>""+_),h=Zr.bind(null,qd),p=Zr.bind(null,yr);function v(_,C){let R,M;return ka(_)?(R=e.getRecordMatcher(_),M=C):M=_,e.addRoute(M,R)}function P(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function k(){return e.getRoutes().map(_=>_.record)}function B(_){return!!e.getRecordMatcher(_)}function A(_,C){if(C=X({},C||c.value),typeof _=="string"){const l=es(n,_,C.path),f=e.resolve({path:l.path},C),m=s.createHref(l.fullPath);return X(l,f,{params:p(f.params),hash:yr(l.hash),redirectedFrom:void 0,href:m})}let R;if("path"in _)R=X({},_,{path:es(n,_.path,C.path).path});else{const l=X({},_.params);for(const f in l)l[f]==null&&delete l[f];R=X({},_,{params:h(_.params)}),C.params=h(C.params)}const M=e.resolve(R,C),K=_.hash||"";M.params=d(p(M.params));const ie=od(r,X({},_,{hash:Wd(K),path:M.path})),W=s.createHref(ie);return X({fullPath:ie,hash:K,query:r===eo?Jd(_.query):_.query||{}},M,{redirectedFrom:void 0,href:W})}function U(_){return typeof _=="string"?es(n,_,c.value.path):X({},_)}function N(_,C){if(u!==_)return ln(8,{from:C,to:_})}function G(_){return Se(_)}function de(_){return G(X(U(_),{replace:!0}))}function pe(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:R}=C;let M=typeof R=="function"?R(_):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=U(M):{path:M},M.params={}),X({query:_.query,hash:_.hash,params:"path"in M?{}:_.params},M)}}function Se(_,C){const R=u=A(_),M=c.value,K=_.state,ie=_.force,W=_.replace===!0,l=pe(R);if(l)return Se(X(U(l),{state:typeof l=="object"?X({},K,l.state):K,force:ie,replace:W}),C||R);const f=R;f.redirectedFrom=C;let m;return!ie&&ad(r,M,R)&&(m=ln(16,{to:f,from:M}),St(M,M,!0,!1)),(m?Promise.resolve(m):je(f,M)).catch(g=>Qe(g)?Qe(g,2)?g:ke(g):te(g,f,M)).then(g=>{if(g){if(Qe(g,2))return Se(X({replace:W},U(g.to),{state:typeof g.to=="object"?X({},K,g.to.state):K,force:ie}),C||f)}else g=at(f,M,!0,W,K);return Ce(f,M,g),g})}function Oe(_,C){const R=N(_,C);return R?Promise.reject(R):Promise.resolve()}function je(_,C){let R;const[M,K,ie]=sf(_,C);R=ts(M.reverse(),"beforeRouteLeave",_,C);for(const l of M)l.leaveGuards.forEach(f=>{R.push(ft(f,_,C))});const W=Oe.bind(null,_,C);return R.push(W),zt(R).then(()=>{R=[];for(const l of i.list())R.push(ft(l,_,C));return R.push(W),zt(R)}).then(()=>{R=ts(K,"beforeRouteUpdate",_,C);for(const l of K)l.updateGuards.forEach(f=>{R.push(ft(f,_,C))});return R.push(W),zt(R)}).then(()=>{R=[];for(const l of _.matched)if(l.beforeEnter&&!C.matched.includes(l))if(Fe(l.beforeEnter))for(const f of l.beforeEnter)R.push(ft(f,_,C));else R.push(ft(l.beforeEnter,_,C));return R.push(W),zt(R)}).then(()=>(_.matched.forEach(l=>l.enterCallbacks={}),R=ts(ie,"beforeRouteEnter",_,C),R.push(W),zt(R))).then(()=>{R=[];for(const l of o.list())R.push(ft(l,_,C));return R.push(W),zt(R)}).catch(l=>Qe(l,8)?l:Promise.reject(l))}function Ce(_,C,R){for(const M of a.list())M(_,C,R)}function at(_,C,R,M,K){const ie=N(_,C);if(ie)return ie;const W=C===lt,l=qt?history.state:{};R&&(M||W?s.replace(_.fullPath,X({scroll:W&&l&&l.scroll},K)):s.push(_.fullPath,K)),c.value=_,St(_,C,R,W),ke()}let He;function Ht(){He||(He=s.listen((_,C,R)=>{if(!Xn.listening)return;const M=A(_),K=pe(M);if(K){Se(X(K,{replace:!0}),M).catch(Cn);return}u=M;const ie=c.value;qt&&md(Ki(ie.fullPath,R.delta),Fr()),je(M,ie).catch(W=>Qe(W,12)?W:Qe(W,2)?(Se(W.to,M).then(l=>{Qe(l,20)&&!R.delta&&R.type===$n.pop&&s.go(-1,!1)}).catch(Cn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),te(W,M,ie))).then(W=>{W=W||at(M,ie,!1),W&&(R.delta&&!Qe(W,8)?s.go(-R.delta,!1):R.type===$n.pop&&Qe(W,20)&&s.go(-1,!1)),Ce(M,ie,W)}).catch(Cn)}))}let Rt=In(),vn=In(),ae;function te(_,C,R){ke(_);const M=vn.list();return M.length?M.forEach(K=>K(_,C,R)):console.error(_),Promise.reject(_)}function Q(){return ae&&c.value!==lt?Promise.resolve():new Promise((_,C)=>{Rt.add([_,C])})}function ke(_){return ae||(ae=!_,Ht(),Rt.list().forEach(([C,R])=>_?R(_):C()),Rt.reset()),_}function St(_,C,R,M){const{scrollBehavior:K}=t;if(!qt||!K)return Promise.resolve();const ie=!R&&gd(Ki(_.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return sa().then(()=>K(_,C,ie)).then(W=>W&&pd(W)).catch(W=>te(W,_,C))}const xe=_=>s.go(_);let we;const Vt=new Set,Xn={currentRoute:c,listening:!0,addRoute:v,removeRoute:P,hasRoute:B,getRoutes:k,resolve:A,options:t,push:G,replace:de,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:vn.add,isReady:Q,install(_){const C=this;_.component("RouterLink",Zd),_.component("RouterView",Ba),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>nt(c)}),qt&&!we&&c.value===lt&&(we=!0,G(s.location).catch(K=>{}));const R={};for(const K in lt)R[K]=Ae(()=>c.value[K]);_.provide(ei,C),_.provide(Fa,Vn(R)),_.provide(Ts,c);const M=_.unmount;Vt.add(_),_.unmount=function(){Vt.delete(_),Vt.size<1&&(u=lt,He&&He(),He=null,c.value=lt,we=!1,ae=!1),M()}}};return Xn}function zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function sf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>cn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>cn(u,c))||s.push(c))}return[n,r,s]}const of=fe({__name:"App",setup(t){return(e,n)=>(ee(),Bt(nt(Ba)))}}),Re=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},af={},cf={xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},lf=T("title",null,"ionicons-v5_logos",-1),uf=T("path",{d:"M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"},null,-1),df=T("path",{d:"M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"},null,-1),ff=T("path",{d:"M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"},null,-1),hf=[lf,uf,df,ff];function pf(t,e){return ee(),ue("svg",cf,hf)}const mf=Re(af,[["render",pf]]),gf={},_f={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},vf=T("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},null,-1),bf=[vf];function yf(t,e){return ee(),ue("svg",_f,bf)}const If=Re(gf,[["render",yf]]),ja=t=>(Ye("data-v-f9265fa4"),t=t(),Xe(),t),wf={class:"col-md-12 top-footer"},Ef=ja(()=>T("div",{class:"col-md-2 space"},null,-1)),Tf={class:"col-md-8 links"},Rf={class:"col-md-2"},Sf={class:"col-md-2"},Pf={class:"col-md-2"},Cf={class:"col-md-2"},Af={class:"col-md-2"},Of={class:"col-md-2 social-media"},kf=ja(()=>T("div",{id:"coppyright",class:"bottom-footer col-md-12"},[T("span",null,[Y("PRANTL ROPPEN | Erd- und Leitungsbau Gmbh | Gewerbepark 33, 6426 Roppen | Tel:"),T("a",{href:"tel:+4354175334"},"+43 (0) 54175334"),Y(" | Mail:"),T("a",{href:"mailto:office@erdbau-prantl.at"},"office@erdbau-prantl.at")]),Y(),T("br"),T("span",{class:"small"},"Copyright © 2023 | Prantl Roppen ")],-1)),xf=fe({__name:"FooterLine",setup(t){return(e,n)=>{const r=Js("RouterLink");return ee(),ue(me,null,[T("div",wf,[Ef,T("div",Tf,[T("div",Rf,[x(r,{to:"/"},{default:V(()=>[Y("Start")]),_:1})]),T("div",Sf,[x(r,{to:"/Impressum"},{default:V(()=>[Y("Impressum")]),_:1})]),T("div",Pf,[x(r,{to:"/Datasafety"},{default:V(()=>[Y("Datenschutz")]),_:1})]),T("div",Cf,[x(r,{to:"/Jobs"},{default:V(()=>[Y("Jobs")]),_:1})]),T("div",Af,[x(r,{to:"/Downloads"},{default:V(()=>[Y("Downloads")]),_:1})])]),T("div",Of,[x(mf),x(If)])]),kf],64)}}});const mn=Re(xf,[["__scopeId","data-v-f9265fa4"]]),Nf="/PaddyNowiProject/assets/PrantlRoppen_Startseite_Header-82dc1692.jpg",Mf="/PaddyNowiProject/assets/PrantlRoppen_Karriere_Slider1-43df6852.jpg";const Df={},Lf={class:"container"},$f={class:"centered"},Uf={class:"img-text"},Ff={class:"img-subtext"};function Bf(t,e){return ee(),ue("div",Lf,[Jr(t.$slots,"img",{},void 0,!0),T("div",$f,[T("div",Uf,[Jr(t.$slots,"text",{},void 0,!0)]),T("div",Ff,[Jr(t.$slots,"subtext",{},void 0,!0)])])])}const $t=Re(Df,[["render",Bf],["__scopeId","data-v-7bc3cfd9"]]),Ha=t=>(Ye("data-v-7bb2d3a6"),t=t(),Xe(),t),jf=Ha(()=>T("img",{src:Nf},null,-1)),Hf=Ha(()=>T("img",{src:Mf},null,-1)),Vf=fe({__name:"HomePage",setup(t){return(e,n)=>{const r=Js("RouterLink");return ee(),ue(me,null,[x($t,null,{img:V(()=>[jf]),text:V(()=>[Y("Mit Mensch, Technik und Begeisterung.")]),subtext:V(()=>[]),_:1}),x($t,null,{img:V(()=>[Hf]),text:V(()=>[Y("Wo Arbeit mehr als ein Job ist.")]),subtext:V(()=>[x(r,{to:"/career"},{default:V(()=>[Y(" Deine Karriere bei Prantl Roppen - Nur einen Mausklick entfernt.")]),_:1})]),_:1})],64)}}});const Wf=Re(Vf,[["__scopeId","data-v-7bb2d3a6"]]),zf="/PaddyNowiProject/assets/brantl_logo-bb0aa1c6.png";const Kf={},qf=t=>(Ye("data-v-7175d6be"),t=t(),Xe(),t),Gf=qf(()=>T("div",{class:"navbar_space col-md-12"},null,-1)),Jf={class:"navbar"},Yf=bu('<div class="navbar-brand col-md-6" data-v-7175d6be><div data-v-7175d6be><a href="/" data-v-7175d6be><img src="'+zf+'" alt="Logo" data-v-7175d6be></a></div></div><div class="navbar-dropdown-icon col-md-6" data-v-7175d6be><span class="far fa-bars" data-v-7175d6be></span></div>',2),Xf={class:"navbar-menu col-md-6"},Qf={class:"navbar-item col-md-2"},Zf={class:"navbar-item-header"},eh={class:"navbar-item col-md-2"},th={class:"navbar-item-header"},nh={class:"navbar-item-childs"},rh={class:"navbar-child-item noborder"},sh={class:"navbar-child-item"},ih={class:"navbar-child-item"},oh={class:"navbar-child-item"},ah={class:"navbar-child-item"},ch={class:"navbar-item col-md-2"},lh={class:"navbar-item-header"},uh={class:"navbar-item col-md-2"},dh={class:"navbar-item-header"},fh={class:"navbar-item col-md-2"},hh={class:"navbar-item-header"},ph={class:"navbar-item col-md-2"},mh={class:"navbar-item-header"};function gh(t,e){const n=Js("router-link");return ee(),ue(me,null,[Gf,T("nav",Jf,[Yf,T("div",Xf,[T("div",Qf,[T("div",Zf,[x(n,{to:"/aboutus"},{default:V(()=>[Y("Über uns")]),_:1})])]),T("div",eh,[T("div",th,[x(n,{to:"/achievements"},{default:V(()=>[Y("Leistungen")]),_:1})]),T("div",nh,[T("div",rh,[x(n,{to:"/achievements#earthworks"},{default:V(()=>[Y("Erdbau")]),_:1})]),T("div",sh,[x(n,{to:"/achievements#construction"},{default:V(()=>[Y("Leistungsbau")]),_:1})]),T("div",ih,[x(n,{to:"/achievements#blasting"},{default:V(()=>[Y("Sprengarbeiten")]),_:1})]),T("div",oh,[x(n,{to:"/achievements#recycling"},{default:V(()=>[Y("Baustoffrecycling")]),_:1})]),T("div",ah,[x(n,{to:"/achievements#fleet"},{default:V(()=>[Y("Fuhrpark")]),_:1})])])]),T("div",ch,[T("div",lh,[x(n,{to:"/projects"},{default:V(()=>[Y("Projekte")]),_:1})])]),T("div",uh,[T("div",dh,[x(n,{to:"/career"},{default:V(()=>[Y("Karriere")]),_:1})])]),T("div",fh,[T("div",hh,[x(n,{to:"/contact"},{default:V(()=>[Y("Kontakt")]),_:1})])]),T("div",ph,[T("div",mh,[x(n,{to:"/downloads"},{default:V(()=>[Y("Downloads")]),_:1})])])])])],64)}const gn=Re(Kf,[["render",gh],["__scopeId","data-v-7175d6be"]]),_h=fe({__name:"HomeView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x(Wf),x(mn)]))}});/**
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
 */const Va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),r.push(n[d],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new bh;const p=i<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const P=u<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yh=function(t){const e=Va(t);return Wa.encodeByteArray(e,!0)},za=function(t){return yh(t).replace(/\./g,"")},Ka=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wh=()=>Ih().__FIREBASE_DEFAULTS__,Eh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Th=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},ti=()=>{try{return wh()||Eh()||Th()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rh=t=>{var e,n;return(n=(e=ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sh=()=>{var t;return(t=ti())===null||t===void 0?void 0:t.config},qa=t=>{var e;return(e=ti())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Ah(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Oh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kh(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Nh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Mh="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mh,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function Dh(t,e){return t.replace(Lh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function $h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oo(i)&&oo(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oo(t){return t!==null&&typeof t=="object"}/**
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
 */function zn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uh(t,e){const n=new Fh(t,e);return n.subscribe.bind(n)}class Fh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ns),s.error===void 0&&(s.error=ns),s.complete===void 0&&(s.complete=ns);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ns(){}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class jh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ph;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vh(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(t){return t===Ot?void 0:t}function Vh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const zh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Kh=re.INFO,qh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Gh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=Kh,this._logHandler=Gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Jh=(t,e)=>e.some(n=>t instanceof n);let ao,co;function Yh(){return ao||(ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xh(){return co||(co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Rs=new WeakMap,Ya=new WeakMap,rs=new WeakMap,ni=new WeakMap;function Qh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ja.set(n,t)}).catch(()=>{}),ni.set(e,t),e}function Zh(t){if(Rs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rs.set(t,e)}let Ss={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ya.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ep(t){Ss=t(Ss)}function tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ss(this),e,...n);return Ya.set(r,e.sort?e.sort():[e]),yt(r)}:Xh().includes(t)?function(...e){return t.apply(ss(this),e),yt(Ja.get(this))}:function(...e){return yt(t.apply(ss(this),e))}}function np(t){return typeof t=="function"?tp(t):(t instanceof IDBTransaction&&Zh(t),Jh(t,Yh())?new Proxy(t,Ss):t)}function yt(t){if(t instanceof IDBRequest)return Qh(t);if(rs.has(t))return rs.get(t);const e=np(t);return e!==t&&(rs.set(t,e),ni.set(e,t)),e}const ss=t=>ni.get(t);function rp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const sp=["get","getKey","getAll","getAllKeys","count"],ip=["put","add","delete","clear"],is=new Map;function lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(is.get(e))return is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ip.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return is.set(e,i),i}ep(t=>({...t,get:(e,n,r)=>lo(e,n)||t.get(e,n,r),has:(e,n)=>!!lo(e,n)||t.has(e,n)}));/**
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
 */class op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ap(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ps="@firebase/app",uo="0.9.4";/**
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
 */const Ut=new Ga("@firebase/app"),cp="@firebase/app-compat",lp="@firebase/analytics-compat",up="@firebase/analytics",dp="@firebase/app-check-compat",fp="@firebase/app-check",hp="@firebase/auth",pp="@firebase/auth-compat",mp="@firebase/database",gp="@firebase/database-compat",_p="@firebase/functions",vp="@firebase/functions-compat",bp="@firebase/installations",yp="@firebase/installations-compat",Ip="@firebase/messaging",wp="@firebase/messaging-compat",Ep="@firebase/performance",Tp="@firebase/performance-compat",Rp="@firebase/remote-config",Sp="@firebase/remote-config-compat",Pp="@firebase/storage",Cp="@firebase/storage-compat",Ap="@firebase/firestore",Op="@firebase/firestore-compat",kp="firebase",xp="9.17.2";/**
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
 */const Cs="[DEFAULT]",Np={[Ps]:"fire-core",[cp]:"fire-core-compat",[up]:"fire-analytics",[lp]:"fire-analytics-compat",[fp]:"fire-app-check",[dp]:"fire-app-check-compat",[hp]:"fire-auth",[pp]:"fire-auth-compat",[mp]:"fire-rtdb",[gp]:"fire-rtdb-compat",[_p]:"fire-fn",[vp]:"fire-fn-compat",[bp]:"fire-iid",[yp]:"fire-iid-compat",[Ip]:"fire-fcm",[wp]:"fire-fcm-compat",[Ep]:"fire-perf",[Tp]:"fire-perf-compat",[Rp]:"fire-rc",[Sp]:"fire-rc-compat",[Pp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Ap]:"fire-fst",[Op]:"fire-fst-compat","fire-js":"fire-js",[kp]:"fire-js-all"};/**
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
 */const wr=new Map,As=new Map;function Mp(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(As.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;As.set(e,t);for(const n of wr.values())Mp(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Dp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Wn("app","Firebase",Dp);/**
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
 */class Lp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=xp;function Qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=Sh()),!n)throw It.create("no-options");const i=wr.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new Wh(s);for(const c of As.values())o.addComponent(c);const a=new Lp(n,r,o);return wr.set(s,a),a}function $p(t=Cs){const e=wr.get(t);if(!e&&t===Cs)return Qa();if(!e)throw It.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Np[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}Un(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Up="firebase-heartbeat-database",Fp=1,Fn="firebase-heartbeat-store";let os=null;function Za(){return os||(os=rp(Up,Fp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),os}async function Bp(t){try{return(await Za()).transaction(Fn).objectStore(Fn).get(ec(t))}catch(e){if(e instanceof Tt)Ut.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function fo(t,e){try{const r=(await Za()).transaction(Fn,"readwrite");return await r.objectStore(Fn).put(e,ec(t)),r.done}catch(n){if(n instanceof Tt)Ut.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function ec(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jp=1024,Hp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ho();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Hp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ho(),{heartbeatsToSend:n,unsentEntries:r}=Wp(this._heartbeatsCache.heartbeats),s=za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ho(){return new Date().toISOString().substring(0,10)}function Wp(t,e=jp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),po(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),po(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Nh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function po(t){return za(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kp(t){Un(new un("platform-logger",e=>new op(e),"PRIVATE")),Un(new un("heartbeat",e=>new Vp(e),"PRIVATE")),tn(Ps,uo,t),tn(Ps,uo,"esm2017"),tn("fire-js","")}Kp("");function ri(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qp=tc,nc=new Wn("auth","Firebase",tc());/**
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
 */const mo=new Ga("@firebase/auth");function dr(t,...e){mo.logLevel<=re.ERROR&&mo.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw si(t,...e)}function qe(t,...e){return si(t,...e)}function Gp(t,e,n){const r=Object.assign(Object.assign({},qp()),{[e]:n});return new Wn("auth","Firebase",r).create(e,{appName:t.name})}function si(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nc.create(t,...e)}function $(t,e,...n){if(!t)throw si(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function it(t,e){t||et(e)}/**
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
 */const go=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=go.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,go.set(t,e),e)}/**
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
 */function Jp(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function Yp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Os(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return _o()==="http:"||_o()==="https:"}function _o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||Ah()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||Oh()}get(){return Qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ii(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const tm=new Kn(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,s={}){return sc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),rc.fetch()(ic(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function sc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},em),e);try{const s=new nm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sr(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gp(t,d,u);Be(t,d)}}catch(s){if(s instanceof Tt)throw s;Be(t,"internal-error",{message:String(s)})}}async function Hr(t,e,n,r,s={}){const i=await qn(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ic(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ii(t.config,s):`${t.config.apiScheme}://${s}`}class nm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),tm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function rm(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function sm(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function im(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=oi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(as(s.auth_time)),issuedAtTime:On(as(s.iat)),expirationTime:On(as(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function as(t){return Number(t)*1e3}function oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ka(n);return s?JSON.parse(s):(dr("Failed to decode base64 JWT payload"),null)}catch(s){return dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function om(t){const e=oi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&am(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function am({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bn(t,sm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dm(i.providerUserInfo):[],a=um(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function lm(t){const e=jt(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function um(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dm(t){return t.map(e=>{var{providerId:n}=e,r=ri(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fm(t,e){const n=await sc(t,{},async()=>{const r=zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ic(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function ut(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return im(this,e)}reload(){return lm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bn(this,rm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:G,isAnonymous:de,providerData:pe,stsTokenManager:Se}=n;$(N&&Se,e,"internal-error");const Oe=jn.fromJSON(this.name,Se);$(typeof N=="string",e,"internal-error"),ut(h,e.name),ut(p,e.name),$(typeof G=="boolean",e,"internal-error"),$(typeof de=="boolean",e,"internal-error"),ut(v,e.name),ut(P,e.name),ut(k,e.name),ut(B,e.name),ut(A,e.name),ut(U,e.name);const je=new Lt({uid:N,auth:e,email:p,emailVerified:G,displayName:h,isAnonymous:de,photoURL:P,phoneNumber:v,tenantId:k,stsTokenManager:Oe,createdAt:A,lastLoginAt:U});return pe&&Array.isArray(pe)&&(je.providerData=pe.map(Ce=>Object.assign({},Ce))),B&&(je._redirectEventId=B),je}static async _fromIdTokenResponse(e,n,r=!1){const s=new jn;s.updateFromServerResponse(n);const i=new Lt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Er(i),i}}/**
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
 */class ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ac.type="NONE";const vo=ac;/**
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
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(tt(vo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tt(vo);const o=fr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Lt._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new nn(i,e,r))}}/**
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
 */function bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fc(e))return"Blackberry";if(hc(e))return"Webos";if(ai(e))return"Safari";if((e.includes("chrome/")||lc(e))&&!e.includes("edge/"))return"Chrome";if(dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cc(t=be()){return/firefox\//i.test(t)}function ai(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lc(t=be()){return/crios\//i.test(t)}function uc(t=be()){return/iemobile/i.test(t)}function dc(t=be()){return/android/i.test(t)}function fc(t=be()){return/blackberry/i.test(t)}function hc(t=be()){return/webos/i.test(t)}function Vr(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hm(t=be()){var e;return Vr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pm(){return kh()&&document.documentMode===10}function pc(t=be()){return Vr(t)||dc(t)||hc(t)||fc(t)||/windows phone/i.test(t)||uc(t)}function mm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mc(t,e=[]){let n;switch(t){case"Browser":n=bo(be());break;case"Worker":n=`${bo(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class gm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class _m{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new gm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wr(t){return jt(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vm(t,e,n){const r=Wr(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=gc(e),{host:o,port:a}=bm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ym()}function gc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bm(t){const e=gc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Io(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Io(o)}}}function Io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ym(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ci{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Im(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wm(t,e){return Hr(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
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
 */async function Em(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function Tm(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
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
 */class Hn extends ci{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Em(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Im(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tm(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rn(t,e){return Hr(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
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
 */const Rm="http://localhost";class Ft extends ci{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:Rm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zn(n)}return e}}/**
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
 */function Sm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pm(t){const e=En(Tn(t)).link,n=e?En(Tn(e)).deep_link_id:null,r=En(Tn(t)).deep_link_id;return(r?En(Tn(r)).link:null)||r||n||e||t}class li{constructor(e){var n,r,s,i,o,a;const c=En(Tn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Sm((s=c.mode)!==null&&s!==void 0?s:null);$(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Pm(e);try{return new li(n)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return Hn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=li.parseLink(n);return $(r,"argument-error"),Hn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gn extends _c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Gn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class mt extends Gn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class gt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Lt._fromIdTokenResponse(e,r,s),o=wo(r);return new dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tr extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tr(e,n,r,s)}}function vc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,i,e,r):i})}async function Cm(t,e,n=!1){const r=await Bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}/**
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
 */async function Am(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Bn(t,vc(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=oi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),dn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function bc(t,e,n=!1){const r="signIn",s=await vc(t,r,e),i=await dn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Om(t,e){return bc(Wr(t),e)}function km(t,e,n){return Om(jt(t),_n.credential(e,n))}function xm(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function Nm(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}const Rr="__sak";/**
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
 */class yc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rr,"1"),this.storage.removeItem(Rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mm(){const t=be();return ai(t)||Vr(t)}const Dm=1e3,Lm=10;class Ic extends yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mm()&&mm(),this.fallbackToPolling=pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ic.type="LOCAL";const $m=Ic;/**
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
 */class wc extends yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wc.type="SESSION";const Ec=wc;/**
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
 */function Um(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Um(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zr.receivers=[];/**
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
 */function ui(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ui("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Bm(t){Ge().location.href=t}/**
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
 */function Tc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function jm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vm(){return Tc()?self:null}/**
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
 */const Rc="firebaseLocalStorageDb",Wm=1,Sr="firebaseLocalStorage",Sc="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function zm(){const t=indexedDB.deleteDatabase(Rc);return new Jn(t).toPromise()}function ks(){const t=indexedDB.open(Rc,Wm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sr,{keyPath:Sc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sr)?e(r):(r.close(),await zm(),e(await ks()))})})}async function Eo(t,e,n){const r=Kr(t,!0).put({[Sc]:e,value:n});return new Jn(r).toPromise()}async function Km(t,e){const n=Kr(t,!1).get(e),r=await new Jn(n).toPromise();return r===void 0?null:r.value}function To(t,e){const n=Kr(t,!0).delete(e);return new Jn(n).toPromise()}const qm=800,Gm=3;class Pc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ks(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zr._getInstance(Vm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jm(),!this.activeServiceWorker)return;this.sender=new Fm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ks();return await Eo(e,Rr,"1"),await To(e,Rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Km(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>To(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kr(s,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pc.type="LOCAL";const Jm=Pc;/**
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
 */function Ym(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ym().appendChild(r)})}function Qm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Kn(3e4,6e4);/**
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
 */function Zm(t,e){return e?tt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class di extends ci{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eg(t){return bc(t.auth,new di(t),t.bypassAuthState)}function tg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Am(n,new di(t),t.bypassAuthState)}async function ng(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Cm(n,new di(t),t.bypassAuthState)}/**
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
 */class Cc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eg;case"linkViaPopup":case"linkViaRedirect":return ng;case"reauthViaPopup":case"reauthViaRedirect":return tg;default:Be(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rg=new Kn(2e3,1e4);class Yt extends Cc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rg.get())};e()}}Yt.currentPopupAction=null;/**
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
 */const sg="pendingRedirect",hr=new Map;class ig extends Cc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function og(t,e){const n=lg(e),r=cg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ag(t,e){hr.set(t._key(),e)}function cg(t){return tt(t._redirectPersistence)}function lg(t){return fr(sg,t.config.apiKey,t.name)}async function ug(t,e,n=!1){const r=Wr(t),s=Zm(r,e),o=await new ig(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dg=10*60*1e3;class fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ro(e))}saveEventToCache(e){this.cachedEventUids.add(Ro(e)),this.lastProcessedEventTime=Date.now()}}function Ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function pg(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gg=/^https?/;async function _g(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pg(t);for(const n of e)try{if(vg(n))return}catch{}Be(t,"unauthorized-domain")}function vg(t){const e=Os(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gg.test(n))return!1;if(mg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bg=new Kn(3e4,6e4);function So(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yg(t){return new Promise((e,n)=>{var r,s,i;function o(){So(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{So(),n(qe(t,"network-request-failed"))},timeout:bg.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Qm("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},Xm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pr=null,e})}let pr=null;function Ig(t){return pr=pr||yg(t),pr}/**
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
 */const wg=new Kn(5e3,15e3),Eg="__/auth/iframe",Tg="emulator/auth/iframe",Rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ii(e,Tg):`https://${t.config.authDomain}/${Eg}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=Sg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zn(r).slice(1)}`}async function Cg(t){const e=await Ig(t),n=Ge().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},wg.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ag={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Og=500,kg=600,xg="_blank",Ng="http://localhost";class Po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mg(t,e,n,r=Og,s=kg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ag),{width:r.toString(),height:s.toString(),top:i,left:o}),u=be().toLowerCase();n&&(a=lc(u)?xg:n),cc(u)&&(e=e||Ng,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[v,P])=>`${p}${v}=${P},`,"");if(hm(u)&&a!=="_self")return Dg(e||"",a),new Po(null);const h=window.open(e||"",a,d);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Po(h)}function Dg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lg="__/auth/handler",$g="emulator/auth/handler";function Co(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof _c){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Gn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ug(t)}?${zn(a).slice(1)}`}function Ug({config:t}){return t.emulator?ii(t,$g):`https://${t.authDomain}/${Lg}`}/**
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
 */const cs="webStorageSupport";class Fg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=ug,this._overrideRedirectResult=ag}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Co(e,n,r,Os(),s);return Mg(e,o,ui())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Bm(Co(e,n,r,Os(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cg(e),r=new fg(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cs];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_g(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pc()||ai()||Vr()}}const Bg=Fg;var Ao="@firebase/auth",Oo="0.21.4";/**
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
 */class jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vg(t){Un(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(t)},d=new _m(a,c,u);return Yp(d,n),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new un("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(r=>new jg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Ao,Oo,Hg(t)),tn(Ao,Oo,"esm2017")}/**
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
 */const Wg=5*60,zg=qa("authIdTokenMaxAge")||Wg;let ko=null;const Kg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zg)return;const s=n==null?void 0:n.token;ko!==s&&(ko=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qg(t=$p()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jp(t,{popupRedirectResolver:Bg,persistence:[Jm,$m,Ec]}),r=qa("authTokenSyncURL");if(r){const i=Kg(r);Nm(n,i,()=>i(n.currentUser)),xm(n,o=>i(o))}const s=Rh("auth");return s&&vm(n,`http://${s}`),n}Vg("Browser");const Gg=t=>(Ye("data-v-6dbdceff"),t=t(),Xe(),t),Jg={class:"login-box"},Yg=Gg(()=>T("h2",null,"Login",-1)),Xg={class:"form-group"},Qg={class:"form-group"},Zg=["onClick"],e_={key:0,class:"error-message"},t_=fe({__name:"LoginForm",setup(t){const e=_t(""),n=_t(""),r={"auth/email-already-in-use":"Diese E-Mail-Adresse ist bereits registriert.","auth/user-not-found":"Diese E-Mail-Adresse ist nicht registriert.","auth/wrong-password":"Das eingegebene Passwort ist falsch.","auth/invalid-email":"Die E-Mail-Adresse ist ungültig.","auth/weak-password":"Das Passwort muss mindestens 6 Zeichen lang sein."};let s=_t("");const i=()=>{s.value="";const a=qg();km(a,e.value,n.value).then(c=>{s.value="",console.log("Successfullly signed in!"),console.log(a.currentUser),xs.push("/editor")}).catch(c=>{console.log(c),s.value=r[c.code]||"Es ist ein Fehler aufgetreten."})},o=()=>{xs.push({path:"/",hash:"#coppyright"})};return(a,c)=>(ee(),ue("div",Jg,[Yg,T("form",null,[T("div",Xg,[Gt(T("input",{id:"email",type:"text",placeholder:"E-Mail","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:""},null,512),[[Jt,e.value]])]),T("div",Qg,[Gt(T("input",{id:"password",type:"password",placeholder:"Passwort","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),required:""},null,512),[[Jt,n.value]])]),T("p",null,[T("button",{type:"submit",onClick:Qu(i,["prevent"])},"Login",8,Zg)])]),nt(s)?(ee(),ue("div",e_,$c(nt(s)),1)):ys("",!0),T("div",{onClick:c[2]||(c[2]=u=>o())},"toCoppyright on mainpage")]))}});const n_=Re(t_,[["__scopeId","data-v-6dbdceff"]]),r_=fe({__name:"LoginView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(n_)]))}}),s_={},i_=T("h1",null,"HIER NUR MIT LOGIN",-1),o_=[i_];function a_(t,e){return ee(),ue("main",null,o_)}const c_=Re(s_,[["render",a_]]),l_="/PaddyNowiProject/assets/PrantlRoppen_Ansprechpartner_Header-8bb1da70.jpg",Yn=t=>(Ye("data-v-f965281e"),t=t(),Xe(),t),u_={action:"https://public.herotofu.com/v1/e7d43540-c280-11ed-8c56-2592b5cf6c22",method:"post","accept-charset":"UTF-8"},d_=Yn(()=>T("a",{href:"https://app.herotofu.com/"},"herotofu",-1)),f_={class:"input-wrapper"},h_=Yn(()=>T("label",{for:"email"},"E-Mail",-1)),p_={class:"input-wrapper"},m_=Yn(()=>T("label",{for:"name"},"Name",-1)),g_={class:"input-wrapper"},__=Yn(()=>T("label",{for:"subject"},"Betreff",-1)),v_={class:"input-wrapper"},b_=Yn(()=>T("label",{for:"subject"},"Nachricht",-1)),y_={type:"submit"},I_=fe({__name:"ContactForm",setup(t){const e=_t({email:"",name:"",subject:"",message:""}),n=_t(!1);return _t(!1),_t(!1),(r,s)=>(ee(),ue("form",u_,[d_,T("div",f_,[h_,Gt(T("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=i=>e.value.email=i),type:"email",name:"email"},null,512),[[Jt,e.value.email]])]),T("div",p_,[m_,Gt(T("input",{required:"","onUpdate:modelValue":s[1]||(s[1]=i=>e.value.name=i),type:"text",name:"name"},null,512),[[Jt,e.value.name]])]),T("div",g_,[__,Gt(T("input",{required:"","onUpdate:modelValue":s[2]||(s[2]=i=>e.value.subject=i),type:"text",name:"subject"},null,512),[[Jt,e.value.subject]])]),T("div",v_,[b_,Gt(T("textarea",{rows:"4",required:"","onUpdate:modelValue":s[3]||(s[3]=i=>e.value.subject=i),type:"text",name:"message"},`\r
        `,512),[[Jt,e.value.subject]])]),T("button",y_,[n.value?(ee(),ue(me,{key:0},[Y("Laden")],64)):ys("",!0),n.value?ys("",!0):(ee(),ue(me,{key:1},[Y("Abschicken")],64))])]))}});const w_=Re(I_,[["__scopeId","data-v-f965281e"]]),E_=t=>(Ye("data-v-7ed49e0d"),t=t(),Xe(),t),T_=E_(()=>T("img",{src:l_},null,-1)),R_=fe({__name:"ContactPage",setup(t){return(e,n)=>(ee(),ue(me,null,[x($t,null,{img:V(()=>[T_]),text:V(()=>[Y("Ansprechpartner.")]),subtext:V(()=>[]),_:1}),x(w_)],64))}});const S_=Re(R_,[["__scopeId","data-v-7ed49e0d"]]),xo=fe({__name:"ContactView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x(S_),x(mn)]))}}),P_="/PaddyNowiProject/assets/PrantlRoppen_Leistungen_Header-f22c7dc5.jpg",C_=t=>(Ye("data-v-2b382992"),t=t(),Xe(),t),A_=C_(()=>T("img",{src:P_},null,-1)),O_=fe({__name:"AchievementsPage",setup(t){return(e,n)=>(ee(),Bt($t,null,{img:V(()=>[A_]),text:V(()=>[Y("Weil wir wissen, was wir tun.")]),subtext:V(()=>[]),_:1}))}});const k_=Re(O_,[["__scopeId","data-v-2b382992"]]),x_=fe({__name:"AchievementsView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x(k_),x(mn)]))}}),N_="/PaddyNowiProject/assets/PrantlRoppen_Karriere_Header-36210b9b.jpg",M_=t=>(Ye("data-v-5aa8785a"),t=t(),Xe(),t),D_=M_(()=>T("img",{src:N_},null,-1)),L_=fe({__name:"CareerPage",setup(t){return(e,n)=>(ee(),Bt($t,null,{img:V(()=>[D_]),text:V(()=>[Y("Tiefbauer aus Leidenschaft")]),subtext:V(()=>[]),_:1}))}});const $_=Re(L_,[["__scopeId","data-v-5aa8785a"]]),U_=fe({__name:"CareerView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x($_),x(mn)]))}}),F_="/PaddyNowiProject/assets/PrantlRoppen_UeberUns_Header-a7b30a6a.jpg",B_=t=>(Ye("data-v-5f8fad6c"),t=t(),Xe(),t),j_=B_(()=>T("img",{src:F_},null,-1)),H_=fe({__name:"AboutUsPage",setup(t){return(e,n)=>(ee(),Bt($t,null,{img:V(()=>[j_]),text:V(()=>[Y("Ein Team voller Begeisterung.")]),subtext:V(()=>[]),_:1}))}});const V_=Re(H_,[["__scopeId","data-v-5f8fad6c"]]),W_=fe({__name:"AboutUsView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x(V_),x(mn)]))}}),z_="/PaddyNowiProject/assets/PrantlRoppen_Projekte_Header-23d05ca0.jpg",K_=t=>(Ye("data-v-0d999f06"),t=t(),Xe(),t),q_=K_(()=>T("img",{src:z_},null,-1)),G_=fe({__name:"ProjectPage",setup(t){return(e,n)=>(ee(),Bt($t,null,{img:V(()=>[q_]),text:V(()=>[Y("Mit Präzisition und Hingabe.")]),subtext:V(()=>[]),_:1}))}});const J_=Re(G_,[["__scopeId","data-v-0d999f06"]]),Y_=fe({__name:"ProjectView",setup(t){return(e,n)=>(ee(),ue("main",null,[x(gn),x(J_),x(mn)]))}}),xs=rf({history:yd("/PaddyNowiProject/"),routes:[{path:"/",name:"home",component:_h},{path:"/login",name:"Login",component:r_},{path:"/editor",name:"Bearbeiten",component:c_},{path:"/contact",name:"Kontact",component:xo},{path:"/achievements",name:"Leistungen",component:x_},{path:"/projects",name:"Projekte",component:Y_},{path:"/career",name:"Karriere",component:U_},{path:"/downloads",name:"Download",component:xo},{path:"/aboutus",name:"Über Uns",component:W_}]});var X_="firebase",Q_="9.17.2";/**
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
 */tn(X_,Q_,"app");const Z_={apiKey:"AIzaSyCu6MtNObLrnPuIolAC3rrQBqqzgDWiebM",authDomain:"prantl-783b6.firebaseapp.com",projectId:"prantl-783b6",storageBucket:"prantl-783b6.appspot.com",messagingSenderId:"112914660239",appId:"1:112914660239:web:61eece01d08446669029fa"};Qa(Z_);const Oc=td(of);Oc.use(xs);Oc.mount("#app");
