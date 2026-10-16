(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function my(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function gy(){if(wg)return Lo;wg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var Cg;function _y(){return Cg||(Cg=1,Xf.exports=gy()),Xf.exports}var D=_y(),jf={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function vy(){if(Lg)return pe;Lg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(U,j,nt){this.props=U,this.context=j,this.refs=b,this.updater=nt||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(U,j,nt){this.props=U,this.context=j,this.refs=b,this.updater=nt||S}var R=O.prototype=new _;R.constructor=O,E(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function B(U,j,nt,k,ot,St){return nt=St.ref,{$$typeof:r,type:U,key:j,ref:nt!==void 0?nt:null,props:St}}function ft(U,j){return B(U.type,j,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function P(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(nt){return j[nt]})}var ut=/\/+/g;function dt(U,j){return typeof U=="object"&&U!==null&&U.key!=null?P(""+U.key):j.toString(36)}function Et(){}function Y(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(Et,Et):(U.status="pending",U.then(function(j){U.status==="pending"&&(U.status="fulfilled",U.value=j)},function(j){U.status==="pending"&&(U.status="rejected",U.reason=j)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function tt(U,j,nt,k,ot){var St=typeof U;(St==="undefined"||St==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(St){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case r:case t:xt=!0;break;case g:return xt=U._init,tt(xt(U._payload),j,nt,k,ot)}}if(xt)return ot=ot(U),xt=k===""?"."+dt(U,0):k,N(ot)?(nt="",xt!=null&&(nt=xt.replace(ut,"$&/")+"/"),tt(ot,j,nt,"",function(Xt){return Xt})):ot!=null&&(C(ot)&&(ot=ft(ot,nt+(ot.key==null||U&&U.key===ot.key?"":(""+ot.key).replace(ut,"$&/")+"/")+xt)),j.push(ot)),1;xt=0;var zt=k===""?".":k+":";if(N(U))for(var It=0;It<U.length;It++)k=U[It],St=zt+dt(k,It),xt+=tt(k,j,nt,St,ot);else if(It=x(U),typeof It=="function")for(U=It.call(U),It=0;!(k=U.next()).done;)k=k.value,St=zt+dt(k,It++),xt+=tt(k,j,nt,St,ot);else if(St==="object"){if(typeof U.then=="function")return tt(Y(U),j,nt,k,ot);throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return xt}function z(U,j,nt){if(U==null)return U;var k=[],ot=0;return tt(U,k,"","",function(St){return j.call(nt,St,ot++)}),k}function J(U){if(U._status===-1){var j=U._result;j=j(),j.then(function(nt){(U._status===0||U._status===-1)&&(U._status=1,U._result=nt)},function(nt){(U._status===0||U._status===-1)&&(U._status=2,U._result=nt)}),U._status===-1&&(U._status=0,U._result=j)}if(U._status===1)return U._result.default;throw U._result}var et=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function mt(){}return pe.Children={map:z,forEach:function(U,j,nt){z(U,function(){j.apply(this,arguments)},nt)},count:function(U){var j=0;return z(U,function(){j++}),j},toArray:function(U){return z(U,function(j){return j})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pe.Component=y,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=O,pe.StrictMode=s,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},pe.cache=function(U){return function(){return U.apply(null,arguments)}},pe.cloneElement=function(U,j,nt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var k=E({},U.props),ot=U.key,St=void 0;if(j!=null)for(xt in j.ref!==void 0&&(St=void 0),j.key!==void 0&&(ot=""+j.key),j)!I.call(j,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&j.ref===void 0||(k[xt]=j[xt]);var xt=arguments.length-2;if(xt===1)k.children=nt;else if(1<xt){for(var zt=Array(xt),It=0;It<xt;It++)zt[It]=arguments[It+2];k.children=zt}return B(U.type,ot,void 0,void 0,St,k)},pe.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},pe.createElement=function(U,j,nt){var k,ot={},St=null;if(j!=null)for(k in j.key!==void 0&&(St=""+j.key),j)I.call(j,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(ot[k]=j[k]);var xt=arguments.length-2;if(xt===1)ot.children=nt;else if(1<xt){for(var zt=Array(xt),It=0;It<xt;It++)zt[It]=arguments[It+2];ot.children=zt}if(U&&U.defaultProps)for(k in xt=U.defaultProps,xt)ot[k]===void 0&&(ot[k]=xt[k]);return B(U,St,void 0,void 0,null,ot)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(U){return{$$typeof:f,render:U}},pe.isValidElement=C,pe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:J}},pe.memo=function(U,j){return{$$typeof:m,type:U,compare:j===void 0?null:j}},pe.startTransition=function(U){var j=G.T,nt={};G.T=nt;try{var k=U(),ot=G.S;ot!==null&&ot(nt,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(mt,et)}catch(St){et(St)}finally{G.T=j}},pe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pe.use=function(U){return G.H.use(U)},pe.useActionState=function(U,j,nt){return G.H.useActionState(U,j,nt)},pe.useCallback=function(U,j){return G.H.useCallback(U,j)},pe.useContext=function(U){return G.H.useContext(U)},pe.useDebugValue=function(){},pe.useDeferredValue=function(U,j){return G.H.useDeferredValue(U,j)},pe.useEffect=function(U,j,nt){var k=G.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(U,j)},pe.useId=function(){return G.H.useId()},pe.useImperativeHandle=function(U,j,nt){return G.H.useImperativeHandle(U,j,nt)},pe.useInsertionEffect=function(U,j){return G.H.useInsertionEffect(U,j)},pe.useLayoutEffect=function(U,j){return G.H.useLayoutEffect(U,j)},pe.useMemo=function(U,j){return G.H.useMemo(U,j)},pe.useOptimistic=function(U,j){return G.H.useOptimistic(U,j)},pe.useReducer=function(U,j,nt){return G.H.useReducer(U,j,nt)},pe.useRef=function(U){return G.H.useRef(U)},pe.useState=function(U){return G.H.useState(U)},pe.useSyncExternalStore=function(U,j,nt){return G.H.useSyncExternalStore(U,j,nt)},pe.useTransition=function(){return G.H.useTransition()},pe.version="19.1.1",pe}var Dg;function Vh(){return Dg||(Dg=1,jf.exports=vy()),jf.exports}var re=Vh();const xy=my(re);var Wf={exports:{}},Do={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function yy(){return Ug||(Ug=1,(function(r){function t(z,J){var et=z.length;z.push(J);t:for(;0<et;){var mt=et-1>>>1,U=z[mt];if(0<l(U,J))z[mt]=J,z[et]=U,et=mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var J=z[0],et=z.pop();if(et!==J){z[0]=et;t:for(var mt=0,U=z.length,j=U>>>1;mt<j;){var nt=2*(mt+1)-1,k=z[nt],ot=nt+1,St=z[ot];if(0>l(k,et))ot<U&&0>l(St,k)?(z[mt]=St,z[ot]=et,mt=ot):(z[mt]=k,z[nt]=et,mt=nt);else if(ot<U&&0>l(St,et))z[mt]=St,z[ot]=et,mt=ot;else break t}}return J}function l(z,J){var et=z.sortIndex-J.sortIndex;return et!==0?et:z.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,v=null,x=3,S=!1,E=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var J=i(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=z)s(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=i(m)}}function G(z){if(b=!1,N(z),!E)if(i(p)!==null)E=!0,I||(I=!0,dt());else{var J=i(m);J!==null&&tt(G,J.startTime-z)}}var I=!1,B=-1,ft=5,C=-1;function P(){return y?!0:!(r.unstable_now()-C<ft)}function ut(){if(y=!1,I){var z=r.unstable_now();C=z;var J=!0;try{t:{E=!1,b&&(b=!1,O(B),B=-1),S=!0;var et=x;try{e:{for(N(z),v=i(p);v!==null&&!(v.expirationTime>z&&P());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,x=v.priorityLevel;var U=mt(v.expirationTime<=z);if(z=r.unstable_now(),typeof U=="function"){v.callback=U,N(z),J=!0;break e}v===i(p)&&s(p),N(z)}else s(p);v=i(p)}if(v!==null)J=!0;else{var j=i(m);j!==null&&tt(G,j.startTime-z),J=!1}}break t}finally{v=null,x=et,S=!1}J=void 0}}finally{J?dt():I=!1}}}var dt;if(typeof R=="function")dt=function(){R(ut)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,Y=Et.port2;Et.port1.onmessage=ut,dt=function(){Y.postMessage(null)}}else dt=function(){_(ut,0)};function tt(z,J){B=_(function(){z(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var et=x;x=J;try{return z()}finally{x=et}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var et=x;x=z;try{return J()}finally{x=et}},r.unstable_scheduleCallback=function(z,J,et){var mt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?mt+et:mt):et=mt,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=et+U,z={id:g++,callback:J,priorityLevel:z,startTime:et,expirationTime:U,sortIndex:-1},et>mt?(z.sortIndex=et,t(m,z),i(p)===null&&z===i(m)&&(b?(O(B),B=-1):b=!0,tt(G,et-mt))):(z.sortIndex=U,t(p,z),E||S||(E=!0,I||(I=!0,dt()))),z},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(z){var J=x;return function(){var et=x;x=J;try{return z.apply(this,arguments)}finally{x=et}}}})(Yf)),Yf}var Ng;function Sy(){return Ng||(Ng=1,qf.exports=yy()),qf.exports}var Zf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function My(){if(Og)return Rn;Og=1;var r=Vh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Rn.flushSync=function(p){var m=d.T,g=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=g,s.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=f(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=f(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Rn.requestFormReset=function(p){s.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var Pg;function Ey(){if(Pg)return Zf.exports;Pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Zf.exports=My(),Zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function by(){if(zg)return Do;zg=1;var r=Sy(),t=Vh(),i=Ey();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return f(u),e;if(h===o)return f(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=h;break}if(w===o){M=!0,o=u,a=h;break}w=w.sibling}if(!M){for(w=h.child;w;){if(w===a){M=!0,a=h,o=u;break}if(w===o){M=!0,o=h,a=u;break}w=w.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function dt(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case R:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case ft:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var tt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},mt=[],U=-1;function j(e){return{current:e}}function nt(e){0>U||(e.current=mt[U],mt[U]=null,U--)}function k(e,n){U++,mt[U]=e.current,e.current=n}var ot=j(null),St=j(null),xt=j(null),zt=j(null);function It(e,n){switch(k(xt,n),k(St,e),k(ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ng(n),e=ig(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ot),k(ot,e)}function Xt(){nt(ot),nt(St),nt(xt)}function Zt(e){e.memoizedState!==null&&k(zt,e);var n=ot.current,a=ig(n,e.type);n!==a&&(k(St,e),k(ot,a))}function ee(e){St.current===e&&(nt(ot),nt(St)),zt.current===e&&(nt(zt),To._currentValue=et)}var lt=Object.prototype.hasOwnProperty,Fe=r.unstable_scheduleCallback,Ht=r.unstable_cancelCallback,$t=r.unstable_shouldYield,Ft=r.unstable_requestPaint,ce=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,T=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,gt=r.unstable_LowPriority,pt=r.unstable_IdlePriority,bt=r.log,Ot=r.unstable_setDisableYieldValue,Dt=null,Pt=null;function Gt(e){if(typeof bt=="function"&&Ot(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Dt,e)}catch{}}var Kt=Math.clz32?Math.clz32:H,Tt=Math.log,ge=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Tt(e)/ge|0)|0}var Mt=256,Ut=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Rt(o):(M&=w,M!==0?u=Rt(M):a||(a=w&~e,a!==0&&(u=Rt(a))))):(w=o&~h,w!==0?u=Rt(w):M!==0?u=Rt(M):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ue(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fe(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Ct(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function X(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Lt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nt(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,F=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var _t=31-Kt(a),yt=1<<_t;w[_t]=0,F[_t]=-1;var ct=st[_t];if(ct!==null)for(st[_t]=null,_t=0;_t<ct.length;_t++){var ht=ct[_t];ht!==null&&(ht.lane&=-536870913)}a&=~yt}o!==0&&Jt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Jt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Yt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function _e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ye(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ye(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Mg(e.type))}function an(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var Se=Math.random().toString(36).slice(2),Re="__reactFiber$"+Se,Oe="__reactProps$"+Se,Kn="__reactContainer$"+Se,sa="__reactEvents$"+Se,Di="__reactListeners$"+Se,Va="__reactHandles$"+Se,Si="__reactResources$"+Se,ci="__reactMarker$"+Se;function Ui(e){delete e[Re],delete e[Oe],delete e[sa],delete e[Di],delete e[Va]}function ui(e){var n=e[Re];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Kn]||a[Re]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=og(e);e!==null;){if(a=e[Re])return a;e=og(e)}return n}e=a,a=e.parentNode}return null}function fi(e){if(e=e[Re]||e[Kn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function A(e){var n=e[Si];return n||(n=e[Si]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(e){e[ci]=!0}var Q=new Set,rt={};function Z(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(rt[e]=n,e=0;e<n.length;e++)Q.add(n[e])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},te={};function he(e){return lt.call(te,e)?!0:lt.call(Vt,e)?!1:Wt.test(e)?te[e]=!0:(Vt[e]=!0,!1)}function se(e,n,a){if(he(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var He,Xe;function pn(e){if(He===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);He=n&&n[1]||"",Xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+e+Xe}var De=!1;function oe(e,n){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ct=ht}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ht){ct=ht}e.call(yt.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],w=h[1];if(M&&w){var F=M.split(`
`),st=w.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===st.length)for(o=F.length-1,u=st.length-1;1<=o&&0<=u&&F[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==st[u]){var _t=`
`+F[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pn(a):""}function Ni(e){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return pn("Activity");default:return""}}function je(e){try{var n="";do n+=Ni(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ka(e){var n=Pr(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ra(e){e._valueTracker||(e._valueTracker=ka(e))}function cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pr(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zr=/[\n"\\]/g;function We(e){return e.replace(zr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xa(e,n,a,o,u,h,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ms(e,M,sn(n)):a!=null?Ms(e,M,sn(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+sn(w):e.removeAttribute("name")}function qo(e,n,a,o,u,h,M,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ms(e,n,a){n==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Es(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function td(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function ed(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function bs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||hv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function id(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&nd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&nd(e,h,n[h])}function Vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var kc=null;function Xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,As=null;function ad(e){var n=fi(e);if(n&&(e=n.stateNode)){var a=e[Oe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xa(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Oe]||null;if(!u)throw Error(s(90));Xa(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&cn(o)}break t;case"textarea":td(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Es(e,!!a.multiple,n,!1)}}}var jc=!1;function sd(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(Ts!==null||As!==null)&&(Nl(),Ts&&(n=Ts,e=As,As=Ts=null,ad(n),e)))for(n=0;n<e.length;n++)ad(e[n])}}function Br(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Oe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Oi)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Wc=!1}var oa=null,qc=null,Zo=null;function rd(){if(Zo)return Zo;var e,n=qc,a=n.length,o,u="value"in oa?oa.value:oa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return Zo=u.slice(e,1<o?1-o:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function od(){return!1}function On(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:od,this.isPropagationStopped=od,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=On(ja),Fr=g({},ja,{view:0,detail:0}),mv=On(Fr),Yc,Zc,Hr,$o=g({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Yc=e.screenX-Hr.screenX,Zc=e.screenY-Hr.screenY):Zc=Yc=0,Hr=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),ld=On($o),gv=g({},$o,{dataTransfer:0}),_v=On(gv),vv=g({},Fr,{relatedTarget:0}),Kc=On(vv),xv=g({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=On(xv),Sv=g({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mv=On(Sv),Ev=g({},ja,{data:0}),cd=On(Ev),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Av[e])?!!n[e]:!1}function Qc(){return Rv}var wv=g({},Fr,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=On(wv),Lv=g({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=On(Lv),Dv=g({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Uv=On(Dv),Nv=g({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=On(Nv),Pv=g({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=On(Pv),Bv=g({},ja,{newState:0,oldState:0}),Iv=On(Bv),Fv=[9,13,27,32],Jc=Oi&&"CompositionEvent"in window,Gr=null;Oi&&"documentMode"in document&&(Gr=document.documentMode);var Hv=Oi&&"TextEvent"in window&&!Gr,fd=Oi&&(!Jc||Gr&&8<Gr&&11>=Gr),hd=" ",dd=!1;function pd(e,n){switch(e){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function Gv(e,n){switch(e){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(dd=!0,hd);case"textInput":return e=n.data,e===hd&&dd?null:e;default:return null}}function Vv(e,n){if(Rs)return e==="compositionend"||!Jc&&pd(e,n)?(e=rd(),Zo=qc=oa=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kv[e.type]:n==="textarea"}function _d(e,n,a,o){Ts?As?As.push(o):As=[o]:Ts=o,n=Fl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Vr=null,kr=null;function Xv(e){Qm(e,0)}function tl(e){var n=at(e);if(cn(n))return e}function vd(e,n){if(e==="change")return n}var xd=!1;if(Oi){var $c;if(Oi){var tu="oninput"in document;if(!tu){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),tu=typeof yd.oninput=="function"}$c=tu}else $c=!1;xd=$c&&(!document.documentMode||9<document.documentMode)}function Sd(){Vr&&(Vr.detachEvent("onpropertychange",Md),kr=Vr=null)}function Md(e){if(e.propertyName==="value"&&tl(kr)){var n=[];_d(n,kr,e,Xc(e)),sd(Xv,n)}}function jv(e,n,a){e==="focusin"?(Sd(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",Md)):e==="focusout"&&Sd()}function Wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(kr)}function qv(e,n){if(e==="click")return tl(n)}function Yv(e,n){if(e==="input"||e==="change")return tl(n)}function Zv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fn=typeof Object.is=="function"?Object.is:Zv;function Xr(e,n){if(Fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!lt.call(n,u)||!Fn(e[u],n[u]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,n){var a=Ed(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ed(a)}}function Td(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Td(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qn(e.document)}return n}function eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kv=Oi&&"documentMode"in document&&11>=document.documentMode,ws=null,nu=null,jr=null,iu=!1;function Rd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||ws==null||ws!==Qn(o)||(o=ws,"selectionStart"in o&&eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&Xr(jr,o)||(jr=o,o=Fl(nu,"onSelect"),0<o.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ws)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Cs={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},au={},wd={};Oi&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function qa(e){if(au[e])return au[e];if(!Cs[e])return e;var n=Cs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wd)return au[e]=n[a];return e}var Cd=qa("animationend"),Ld=qa("animationiteration"),Dd=qa("animationstart"),Qv=qa("transitionrun"),Jv=qa("transitionstart"),$v=qa("transitioncancel"),Ud=qa("transitionend"),Nd=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function hi(e,n){Nd.set(e,n),Z(n,[e])}var Od=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=Od.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},Od.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var $n=[],Ls=0,ru=0;function el(){for(var e=Ls,n=ru=Ls=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var h=$n[n];if($n[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Pd(a,u,h)}}function nl(e,n,a,o){$n[Ls++]=e,$n[Ls++]=n,$n[Ls++]=a,$n[Ls++]=o,ru|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ou(e,n,a,o){return nl(e,n,a,o),il(e)}function Ds(e,n){return nl(e,null,null,n),il(e)}function Pd(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Kt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function il(e){if(50<_o)throw _o=0,pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Us={};function tx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,a,o){return new tx(e,n,a,o)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")lu(e)&&(M=1);else if(typeof e=="string")M=ny(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Hn(31,a,n,u),e.elementType=C,e.lanes=h,e;case E:return Ya(a.children,u,h,n);case b:M=8,u|=24;break;case y:return e=Hn(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case G:return e=Hn(13,a,n,u),e.elementType=G,e.lanes=h,e;case I:return e=Hn(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case R:M=10;break t;case O:M=9;break t;case N:M=11;break t;case B:M=14;break t;case ft:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Hn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ya(e,n,a,o){return e=Hn(7,e,o,n),e.lanes=a,e}function cu(e,n,a){return e=Hn(6,e,null,n),e.lanes=a,e}function uu(e,n,a){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ns=[],Os=0,sl=null,rl=0,ti=[],ei=0,Za=null,zi=1,Bi="";function Ka(e,n){Ns[Os++]=rl,Ns[Os++]=sl,sl=e,rl=n}function Bd(e,n,a){ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Za,Za=e;var o=zi;e=Bi;var u=32-Kt(o)-1;o&=~(1<<u),a+=1;var h=32-Kt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,zi=1<<32-Kt(n)+u|a<<u|o,Bi=h+e}else zi=1<<h|a<<u|o,Bi=e}function fu(e){e.return!==null&&(Ka(e,1),Bd(e,1,0))}function hu(e){for(;e===sl;)sl=Ns[--Os],Ns[Os]=null,rl=Ns[--Os],Ns[Os]=null;for(;e===Za;)Za=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var Ln=null,Je=null,Le=!1,Qa=null,Mi=!1,du=Error(s(519));function Ja(e){var n=Error(s(418,""));throw Yr(Jn(n,e)),du}function Id(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Re]=e,n[Oe]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Te(xo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),qo(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ra(n);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),ed(n,o.value,o.defaultValue,o.children),ra(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||eg(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=Hl),n=!0):n=!1,n||Ja(e)}function Fd(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function Wr(e){if(e!==Ln)return!1;if(!Le)return Fd(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lf(e.type,e.memoizedProps)),a=!a),a&&Je&&Ja(e),Fd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ea(e.type)?(e=Of,Of=null,Je=e):Je=n):Je=Ln?pi(e.stateNode.nextSibling):null;return!0}function qr(){Je=Ln=null,Le=!1}function Hd(){var e=Qa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),Qa=null),e}function Yr(e){Qa===null?Qa=[e]:Qa.push(e)}var pu=j(null),$a=null,Ii=null;function la(e,n,a){k(pu,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=pu.current,nt(pu)}function mu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function gu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var F=0;F<n.length;F++)if(w.context===n[F]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),mu(h.return,a,e),o||(M=null);break t}h=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),mu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=u.type;Fn(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===zt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&gu(n,e,a,o),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){$a=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Gd($a,e)}function ll(e,n){return $a===null&&ts(e),Gd(e,n)}function Gd(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(s(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nx=r.unstable_scheduleCallback,ix=r.unstable_NormalPriority,un={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new ex,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&nx(ix,function(){e.controller.abort()})}var Qr=null,vu=0,Ps=0,zs=null;function ax(e,n){if(Qr===null){var a=Qr=[];vu=0,Ps=Sf(),zs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return vu++,n.then(Vd,Vd),n}function Vd(){if(--vu===0&&Qr!==null){zs!==null&&(zs.status="fulfilled");var e=Qr;Qr=null,Ps=0,zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kd=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(e,n),kd!==null&&kd(e,n)};var es=j(null);function xu(){var e=es.current;return e!==null?e:ke.pooledCache}function cl(e,n){n===null?k(es,es.current):k(es,n.pool)}function Xd(){var e=xu();return e===null?null:{parent:un._currentValue,pool:e}}var Jr=Error(s(460)),jd=Error(s(474)),ul=Error(s(542)),yu={then:function(){}};function Wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fl(){}function qd(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fl,fl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zd(e),e;default:if(typeof n.status=="string")n.then(fl,fl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zd(e),e}throw $r=n,Jr}}var $r=null;function Yd(){if($r===null)throw Error(s(459));var e=$r;return $r=null,e}function Zd(e){if(e===Jr||e===ul)throw Error(s(483))}var ca=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=il(e),Pd(e,null,a),n}return nl(e,o,n,a),il(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}function Eu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function eo(){if(bu){var e=zs;if(e!==null)throw e}}function no(e,n,a,o){bu=!1;var u=e.updateQueue;ca=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var F=w,st=F.next;F.next=null,M===null?h=st:M.next=st,M=F;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,w=_t.lastBaseUpdate,w!==M&&(w===null?_t.firstBaseUpdate=st:w.next=st,_t.lastBaseUpdate=F))}if(h!==null){var yt=u.baseState;M=0,_t=st=F=null,w=h;do{var ct=w.lane&-536870913,ht=ct!==w.lane;if(ht?(we&ct)===ct:(o&ct)===ct){ct!==0&&ct===Ps&&(bu=!0),_t!==null&&(_t=_t.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var le=e,ie=w;ct=n;var Be=a;switch(ie.tag){case 1:if(le=ie.payload,typeof le=="function"){yt=le.call(Be,yt,ct);break t}yt=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ie.payload,ct=typeof le=="function"?le.call(Be,yt,ct):le,ct==null)break t;yt=g({},yt,ct);break t;case 2:ca=!0}}ct=w.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_t===null?(st=_t=ht,F=yt):_t=_t.next=ht,M|=ct;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);_t===null&&(F=yt),u.baseState=F,u.firstBaseUpdate=st,u.lastBaseUpdate=_t,h===null&&(u.shared.lanes=0),xa|=M,e.lanes=M,e.memoizedState=yt}}function Kd(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Qd(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kd(a[e],n)}var Bs=j(null),hl=j(0);function Jd(e,n){e=Wi,k(hl,e),k(Bs,n),Wi=e|n.baseLanes}function Tu(){k(hl,Wi),k(Bs,Bs.current)}function Au(){Wi=hl.current,nt(Bs),nt(hl)}var ha=0,xe=null,Pe=null,rn=null,dl=!1,Is=!1,ns=!1,pl=0,io=0,Fs=null,rx=0;function tn(){throw Error(s(321))}function Ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Fn(e[a],n[a]))return!1;return!0}function wu(e,n,a,o,u,h){return ha=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pp:zp,ns=!1,h=a(o,u),ns=!1,Is&&(h=tp(n,a,o,u)),$d(e),h}function $d(e){z.H=yl;var n=Pe!==null&&Pe.next!==null;if(ha=0,rn=Pe=xe=null,dl=!1,io=0,Fs=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&ol(e)&&(mn=!0))}function tp(e,n,a,o){xe=e;var u=0;do{if(Is&&(Fs=null),io=0,Is=!1,25<=u)throw Error(s(301));if(u+=1,rn=Pe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=dx,h=n(a,o)}while(Is);return h}function ox(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(xe.flags|=1024),n}function Cu(){var e=pl!==0;return pl=0,e}function Lu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Du(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}ha=0,rn=Pe=xe=null,Is=!1,io=pl=0,Fs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?xe.memoizedState=rn=e:rn=rn.next=e,rn}function on(){if(Pe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=rn===null?xe.memoizedState:rn.next;if(n!==null)rn=n,Pe=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},rn===null?xe.memoizedState=rn=e:rn=rn.next=e}return rn}function Uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Fs===null&&(Fs=[]),e=qd(Fs,e,n),n=xe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pp:zp),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===R)return An(e)}throw Error(s(438,String(e)))}function Nu(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=P;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=on();return Ou(n,Pe,e)}function Ou(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var w=M=null,F=null,st=n,_t=!1;do{var yt=st.lane&-536870913;if(yt!==st.lane?(we&yt)===yt:(ha&yt)===yt){var ct=st.revertLane;if(ct===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),yt===Ps&&(_t=!0);else if((ha&ct)===ct){st=st.next,ct===Ps&&(_t=!0);continue}else yt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},F===null?(w=F=yt,M=h):F=F.next=yt,xe.lanes|=ct,xa|=ct;yt=st.action,ns&&a(h,yt),h=st.hasEagerState?st.eagerState:a(h,yt)}else ct={lane:yt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},F===null?(w=F=ct,M=h):F=F.next=ct,xe.lanes|=yt,xa|=yt;st=st.next}while(st!==null&&st!==n);if(F===null?M=h:F.next=w,!Fn(h,e.memoizedState)&&(mn=!0,_t&&(a=zs,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Pu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);Fn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function ep(e,n,a){var o=xe,u=on(),h=Le;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Fn((Pe||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var w=ap.bind(null,o,u,e);if(so(2048,8,w,[e]),u.getSnapshot!==n||M||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Hs(9,_l(),ip.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));h||(ha&124)!==0||np(o,n,a)}return a}function np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Uu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ip(e,n,a,o){n.value=a,n.getSnapshot=o,sp(n)&&rp(e)}function ap(e,n,a){return a(function(){sp(n)&&rp(e)})}function sp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Fn(e,a)}catch{return!0}}function rp(e){var n=Ds(e,2);n!==null&&jn(n,e,2)}function zu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ns){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function op(e,n,a,o){return e.baseState=a,Ou(e,Pe,typeof o=="function"?o:Hi)}function lx(e,n,a,o,u){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,lp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function lp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=z.T,M={};z.T=M;try{var w=a(u,o),F=z.S;F!==null&&F(M,w),cp(e,n,w)}catch(st){Bu(e,n,st)}finally{z.T=h}}else try{h=a(u,o),cp(e,n,h)}catch(st){Bu(e,n,st)}}function cp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){up(e,n,o)},function(o){return Bu(e,n,o)}):up(e,n,a)}function up(e,n,a){n.status="fulfilled",n.value=a,fp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,lp(e,a)))}function Bu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fp(n),n=n.next;while(n!==o)}e.action=null}function fp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hp(e,n){return n}function dp(e,n){if(Le){var a=ke.formState;if(a!==null){t:{var o=xe;if(Le){if(Je){e:{for(var u=Je,h=Mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Je=pi(u.nextSibling),o=u.data==="F!";break t}}Ja(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hp,lastRenderedState:n},a.queue=o,a=Up.bind(null,xe,o),o.dispatch=a,o=zu(!1),h=Vu.bind(null,xe,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=lx.bind(null,xe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function pp(e){var n=on();return mp(n,Pe,e)}function mp(e,n,a){if(n=Ou(e,n,hp)[0],e=gl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(M){throw M===Jr?ul:M}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Hs(9,_l(),cx.bind(null,u,a),null)),[o,h,e]}function cx(e,n){e.action=n}function gp(e){var n=on(),a=Pe;if(a!==null)return mp(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Hs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Uu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _l(){return{destroy:void 0,resource:void 0}}function _p(){return on().memoizedState}function vl(e,n,a,o){var u=Pn();o=o===void 0?null:o,xe.flags|=e,u.memoizedState=Hs(1|n,_l(),a,o)}function so(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Pe!==null&&o!==null&&Ru(o,Pe.memoizedState.deps)?u.memoizedState=Hs(n,h,a,o):(xe.flags|=e,u.memoizedState=Hs(1|n,h,a,o))}function vp(e,n){vl(8390656,8,e,n)}function xp(e,n){so(2048,8,e,n)}function yp(e,n){return so(4,2,e,n)}function Sp(e,n){return so(4,4,e,n)}function Mp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ep(e,n,a){a=a!=null?a.concat([e]):null,so(4,4,Mp.bind(null,n,e),a)}function Iu(){}function bp(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ru(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Tp(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ru(n,o[1]))return o[0];if(o=e(),ns){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function Fu(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=wm(),xe.lanes|=e,xa|=e,a)}function Ap(e,n,a,o){return Fn(a,n)?a:Bs.current!==null?(e=Fu(e,a,o),Fn(e,n)||(mn=!0),e):(ha&42)===0?(mn=!0,e.memoizedState=a):(e=wm(),xe.lanes|=e,xa|=e,n)}function Rp(e,n,a,o,u){var h=J.p;J.p=h!==0&&8>h?h:8;var M=z.T,w={};z.T=w,Vu(e,!1,n,a);try{var F=u(),st=z.S;if(st!==null&&st(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var _t=sx(F,o);ro(e,n,_t,Xn(e))}else ro(e,n,o,Xn(e))}catch(yt){ro(e,n,{then:function(){},status:"rejected",reason:yt},Xn())}finally{J.p=h,z.T=M}}function ux(){}function Hu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=wp(e).queue;Rp(e,u,n,et,a===null?ux:function(){return Cp(e),a(o)})}function wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cp(e){var n=wp(e).next.queue;ro(e,n,{},Xn())}function Gu(){return An(To)}function Lp(){return on().memoizedState}function Dp(){return on().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=ua(a);var o=fa(n,e,a);o!==null&&(jn(o,n,a),to(o,n,a)),n={cache:_u()},e.payload=n;return}n=n.return}}function hx(e,n,a){var o=Xn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?Np(n,a):(a=ou(e,n,a,o),a!==null&&(jn(a,e,o),Op(a,n,o)))}function Up(e,n,a){var o=Xn();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))Np(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,w=h(M,a);if(u.hasEagerState=!0,u.eagerState=w,Fn(w,M))return nl(e,n,u,0),ke===null&&el(),!1}catch{}finally{}if(a=ou(e,n,u,o),a!==null)return jn(a,e,o),Op(a,n,o),!0}return!1}function Vu(e,n,a,o){if(o={lane:2,revertLane:Sf(),action:o,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=ou(e,a,o,2),n!==null&&jn(n,e,2)}function xl(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Np(e,n){Is=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Op(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}var yl={readContext:An,use:ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Pp={readContext:An,use:ml,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,Mp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(ns){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(ns){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hx.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=zu(e);var n=e.queue,a=Up.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Pn();return Fu(a,e,n)},useTransition:function(){var e=zu(!1);return e=Rp.bind(null,xe,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Pn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(we&124)!==0||np(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,vp(ap.bind(null,o,h,e),[e]),o.flags|=2048,Hs(9,_l(),ip.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(Le){var a=Bi,o=zi;a=(o&~(1<<32-Kt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=rx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Gu,useFormState:dp,useActionState:dp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Nu,useCacheRefresh:function(){return Pn().memoizedState=fx.bind(null,xe)}},zp={readContext:An,use:ml,useCallback:bp,useContext:An,useEffect:xp,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:Tp,useReducer:gl,useRef:_p,useState:function(){return gl(Hi)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=on();return Ap(a,Pe.memoizedState,e,n)},useTransition:function(){var e=gl(Hi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:ep,useId:Lp,useHostTransitionStatus:Gu,useFormState:pp,useActionState:pp,useOptimistic:function(e,n){var a=on();return op(a,Pe,e,n)},useMemoCache:Nu,useCacheRefresh:Dp},dx={readContext:An,use:ml,useCallback:bp,useContext:An,useEffect:xp,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:Tp,useReducer:Pu,useRef:_p,useState:function(){return Pu(Hi)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=on();return Pe===null?Fu(a,e,n):Ap(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Pu(Hi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:ep,useId:Lp,useHostTransitionStatus:Gu,useFormState:gp,useActionState:gp,useOptimistic:function(e,n){var a=on();return Pe!==null?op(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:Dp},Gs=null,oo=0;function Sl(e){var n=oo;return oo+=1,Gs===null&&(Gs=[]),qd(Gs,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ml(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){var n=e._init;return n(e._payload)}function Ip(e){function n($,W){if(e){var it=$.deletions;it===null?($.deletions=[W],$.flags|=16):it.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=Pi($,W),$.index=0,$.sibling=null,$}function h($,W,it){return $.index=it,e?(it=$.alternate,it!==null?(it=it.index,it<W?($.flags|=67108866,W):it):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return e&&$.alternate===null&&($.flags|=67108866),$}function w($,W,it,vt){return W===null||W.tag!==6?(W=cu(it,$.mode,vt),W.return=$,W):(W=u(W,it),W.return=$,W)}function F($,W,it,vt){var kt=it.type;return kt===E?_t($,W,it.props.children,vt,it.key):W!==null&&(W.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===ft&&Bp(kt)===W.type)?(W=u(W,it.props),lo(W,it),W.return=$,W):(W=al(it.type,it.key,it.props,null,$.mode,vt),lo(W,it),W.return=$,W)}function st($,W,it,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=uu(it,$.mode,vt),W.return=$,W):(W=u(W,it.children||[]),W.return=$,W)}function _t($,W,it,vt,kt){return W===null||W.tag!==7?(W=Ya(it,$.mode,vt,kt),W.return=$,W):(W=u(W,it),W.return=$,W)}function yt($,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=cu(""+W,$.mode,it),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return it=al(W.type,W.key,W.props,null,$.mode,it),lo(it,W),it.return=$,it;case S:return W=uu(W,$.mode,it),W.return=$,W;case ft:var vt=W._init;return W=vt(W._payload),yt($,W,it)}if(tt(W)||dt(W))return W=Ya(W,$.mode,it,null),W.return=$,W;if(typeof W.then=="function")return yt($,Sl(W),it);if(W.$$typeof===R)return yt($,ll($,W),it);Ml($,W)}return null}function ct($,W,it,vt){var kt=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return kt!==null?null:w($,W,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===kt?F($,W,it,vt):null;case S:return it.key===kt?st($,W,it,vt):null;case ft:return kt=it._init,it=kt(it._payload),ct($,W,it,vt)}if(tt(it)||dt(it))return kt!==null?null:_t($,W,it,vt,null);if(typeof it.then=="function")return ct($,W,Sl(it),vt);if(it.$$typeof===R)return ct($,W,ll($,it),vt);Ml($,it)}return null}function ht($,W,it,vt,kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(it)||null,w(W,$,""+vt,kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case x:return $=$.get(vt.key===null?it:vt.key)||null,F(W,$,vt,kt);case S:return $=$.get(vt.key===null?it:vt.key)||null,st(W,$,vt,kt);case ft:var Me=vt._init;return vt=Me(vt._payload),ht($,W,it,vt,kt)}if(tt(vt)||dt(vt))return $=$.get(it)||null,_t(W,$,vt,kt,null);if(typeof vt.then=="function")return ht($,W,it,Sl(vt),kt);if(vt.$$typeof===R)return ht($,W,it,ll(W,vt),kt);Ml(W,vt)}return null}function le($,W,it,vt){for(var kt=null,Me=null,Qt=W,ae=W=0,_n=null;Qt!==null&&ae<it.length;ae++){Qt.index>ae?(_n=Qt,Qt=null):_n=Qt.sibling;var Ce=ct($,Qt,it[ae],vt);if(Ce===null){Qt===null&&(Qt=_n);break}e&&Qt&&Ce.alternate===null&&n($,Qt),W=h(Ce,W,ae),Me===null?kt=Ce:Me.sibling=Ce,Me=Ce,Qt=_n}if(ae===it.length)return a($,Qt),Le&&Ka($,ae),kt;if(Qt===null){for(;ae<it.length;ae++)Qt=yt($,it[ae],vt),Qt!==null&&(W=h(Qt,W,ae),Me===null?kt=Qt:Me.sibling=Qt,Me=Qt);return Le&&Ka($,ae),kt}for(Qt=o(Qt);ae<it.length;ae++)_n=ht(Qt,$,ae,it[ae],vt),_n!==null&&(e&&_n.alternate!==null&&Qt.delete(_n.key===null?ae:_n.key),W=h(_n,W,ae),Me===null?kt=_n:Me.sibling=_n,Me=_n);return e&&Qt.forEach(function(wa){return n($,wa)}),Le&&Ka($,ae),kt}function ie($,W,it,vt){if(it==null)throw Error(s(151));for(var kt=null,Me=null,Qt=W,ae=W=0,_n=null,Ce=it.next();Qt!==null&&!Ce.done;ae++,Ce=it.next()){Qt.index>ae?(_n=Qt,Qt=null):_n=Qt.sibling;var wa=ct($,Qt,Ce.value,vt);if(wa===null){Qt===null&&(Qt=_n);break}e&&Qt&&wa.alternate===null&&n($,Qt),W=h(wa,W,ae),Me===null?kt=wa:Me.sibling=wa,Me=wa,Qt=_n}if(Ce.done)return a($,Qt),Le&&Ka($,ae),kt;if(Qt===null){for(;!Ce.done;ae++,Ce=it.next())Ce=yt($,Ce.value,vt),Ce!==null&&(W=h(Ce,W,ae),Me===null?kt=Ce:Me.sibling=Ce,Me=Ce);return Le&&Ka($,ae),kt}for(Qt=o(Qt);!Ce.done;ae++,Ce=it.next())Ce=ht(Qt,$,ae,Ce.value,vt),Ce!==null&&(e&&Ce.alternate!==null&&Qt.delete(Ce.key===null?ae:Ce.key),W=h(Ce,W,ae),Me===null?kt=Ce:Me.sibling=Ce,Me=Ce);return e&&Qt.forEach(function(py){return n($,py)}),Le&&Ka($,ae),kt}function Be($,W,it,vt){if(typeof it=="object"&&it!==null&&it.type===E&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var kt=it.key;W!==null;){if(W.key===kt){if(kt=it.type,kt===E){if(W.tag===7){a($,W.sibling),vt=u(W,it.props.children),vt.return=$,$=vt;break t}}else if(W.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===ft&&Bp(kt)===W.type){a($,W.sibling),vt=u(W,it.props),lo(vt,it),vt.return=$,$=vt;break t}a($,W);break}else n($,W);W=W.sibling}it.type===E?(vt=Ya(it.props.children,$.mode,vt,it.key),vt.return=$,$=vt):(vt=al(it.type,it.key,it.props,null,$.mode,vt),lo(vt,it),vt.return=$,$=vt)}return M($);case S:t:{for(kt=it.key;W!==null;){if(W.key===kt)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a($,W.sibling),vt=u(W,it.children||[]),vt.return=$,$=vt;break t}else{a($,W);break}else n($,W);W=W.sibling}vt=uu(it,$.mode,vt),vt.return=$,$=vt}return M($);case ft:return kt=it._init,it=kt(it._payload),Be($,W,it,vt)}if(tt(it))return le($,W,it,vt);if(dt(it)){if(kt=dt(it),typeof kt!="function")throw Error(s(150));return it=kt.call(it),ie($,W,it,vt)}if(typeof it.then=="function")return Be($,W,Sl(it),vt);if(it.$$typeof===R)return Be($,W,ll($,it),vt);Ml($,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a($,W.sibling),vt=u(W,it),vt.return=$,$=vt):(a($,W),vt=cu(it,$.mode,vt),vt.return=$,$=vt),M($)):a($,W)}return function($,W,it,vt){try{oo=0;var kt=Be($,W,it,vt);return Gs=null,kt}catch(Qt){if(Qt===Jr||Qt===ul)throw Qt;var Me=Hn(29,Qt,null,$.mode);return Me.lanes=vt,Me.return=$,Me}finally{}}}var Vs=Ip(!0),Fp=Ip(!1),ni=j(null),Ei=null;function da(e){var n=e.alternate;k(fn,fn.current&1),k(ni,e),Ei===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(Ei=e)}function Hp(e){if(e.tag===22){if(k(fn,fn.current),k(ni,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else pa()}function pa(){k(fn,fn.current),k(ni,ni.current)}function Gi(e){nt(ni),Ei===e&&(Ei=null),nt(fn)}var fn=j(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Nf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ku(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Xn(),u=ua(o);u.payload=n,a!=null&&(u.callback=a),n=fa(e,u,o),n!==null&&(jn(n,e,o),to(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Xn(),u=ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=fa(e,u,o),n!==null&&(jn(n,e,o),to(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),o=ua(a);o.tag=2,n!=null&&(o.callback=n),n=fa(e,o,a),n!==null&&(jn(n,e,a),to(n,e,a))}};function Gp(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,o)||!Xr(u,h):!0}function Vp(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Xu.enqueueReplaceState(n,n.state,null)}function is(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function kp(e){bl(e)}function Xp(e){console.error(e)}function jp(e){bl(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wp(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ju(e,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function qp(e){return e=ua(e),e.tag=3,e}function Yp(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Wp(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Wp(n,a,o),typeof u!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function px(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ei===null?gf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vf(e,o,u)),!1;case 22:return a.flags|=65536,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vf(e,o,u)),!1}throw Error(s(435,a.tag))}return vf(e,o,u),gf(),!1}if(Le)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==du&&(e=Error(s(422),{cause:o}),Yr(Jn(e,a)))):(o!==du&&(n=Error(s(423),{cause:o}),Yr(Jn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Jn(o,a),u=ju(e.stateNode,o,u),Eu(e,u),$e!==4&&($e=2)),!1;var h=Error(s(520),{cause:o});if(h=Jn(h,a),go===null?go=[h]:go.push(h),$e!==4&&($e=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ju(a.stateNode,o,e),Eu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ya===null||!ya.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qp(u),Yp(u,e,a,o),Eu(a,u),!1}a=a.return}while(a!==null);return!1}var Zp=Error(s(461)),mn=!1;function En(e,n,a,o){n.child=e===null?Fp(n,null,a,o):Vs(n,e.child,a,o)}function Kp(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return ts(n),o=wu(e,n,a,M,h,u),w=Cu(),e!==null&&!mn?(Lu(e,n,u),Vi(e,n,u)):(Le&&w&&fu(n),n.flags|=1,En(e,n,o,u),n.child)}function Qp(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!lu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Jp(e,n,h,o,u)):(e=al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!$u(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(M,o)&&e.ref===n.ref)return Vi(e,n,u)}return n.flags|=1,e=Pi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Jp(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Xr(h,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=h,$u(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Vi(e,n,u)}return Wu(e,n,a,o,u)}function $p(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return tm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,h!==null?h.cachePool:null),h!==null?Jd(n,h):Tu(),Hp(n);else return n.lanes=n.childLanes=536870912,tm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(cl(n,h.cachePool),Jd(n,h),pa(),n.memoizedState=null):(e!==null&&cl(n,null),Tu(),pa());return En(e,n,u,a),n.child}function tm(e,n,a,o){var u=xu();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&cl(n,null),Tu(),Hp(n),e!==null&&Zr(e,n,o,!0),null}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wu(e,n,a,o,u){return ts(n),a=wu(e,n,a,o,void 0,u),o=Cu(),e!==null&&!mn?(Lu(e,n,u),Vi(e,n,u)):(Le&&o&&fu(n),n.flags|=1,En(e,n,a,u),n.child)}function em(e,n,a,o,u,h){return ts(n),n.updateQueue=null,a=tp(n,o,a,u),$d(e),o=Cu(),e!==null&&!mn?(Lu(e,n,h),Vi(e,n,h)):(Le&&o&&fu(n),n.flags|=1,En(e,n,a,h),n.child)}function nm(e,n,a,o,u){if(ts(n),n.stateNode===null){var h=Us,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Xu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Su(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):Us,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ku(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Xu.enqueueReplaceState(h,h.state,null),no(n,o,h,u),eo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,F=is(a,w);h.props=F;var st=h.context,_t=a.contextType;M=Us,typeof _t=="object"&&_t!==null&&(M=An(_t));var yt=a.getDerivedStateFromProps;_t=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,_t||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||st!==M)&&Vp(n,h,o,M),ca=!1;var ct=n.memoizedState;h.state=ct,no(n,o,h,u),eo(),st=n.memoizedState,w||ct!==st||ca?(typeof yt=="function"&&(ku(n,a,yt,o),st=n.memoizedState),(F=ca||Gp(n,a,F,o,ct,st,M))?(_t||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=M,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Mu(e,n),M=n.memoizedProps,_t=is(a,M),h.props=_t,yt=n.pendingProps,ct=h.context,st=a.contextType,F=Us,typeof st=="object"&&st!==null&&(F=An(st)),w=a.getDerivedStateFromProps,(st=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==yt||ct!==F)&&Vp(n,h,o,F),ca=!1,ct=n.memoizedState,h.state=ct,no(n,o,h,u),eo();var ht=n.memoizedState;M!==yt||ct!==ht||ca||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof w=="function"&&(ku(n,a,w,o),ht=n.memoizedState),(_t=ca||Gp(n,a,_t,o,ct,ht,F)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(st||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ht,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ht,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),h.props=o,h.state=ht,h.context=F,o=_t):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Al(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Vs(n,e.child,null,u),n.child=Vs(n,null,a,u)):En(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Vi(e,n,u),e}function im(e,n,a,o){return qr(),n.flags|=256,En(e,n,a,o),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:Xd()}}function Zu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function am(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?da(n):pa(),Le){var w=Je,F;if(F=w){t:{for(F=w,w=Mi;F.nodeType!==8;){if(!w){w=null;break t}if(F=pi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:Za!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},F=Hn(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,Ln=n,Je=null,F=!0):F=!1}F||Ja(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Nf(w)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return w=o.children,o=o.fallback,u?(pa(),u=n.mode,w=Rl({mode:"hidden",children:w},u),o=Ya(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=Yu(a),u.childLanes=Zu(e,M,a),n.memoizedState=qu,o):(da(n),Ku(n,w))}if(F=e.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(h)n.flags&256?(da(n),n.flags&=-257,n=Qu(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),u=o.fallback,w=n.mode,o=Rl({mode:"visible",children:o.children},w),u=Ya(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Vs(n,e.child,null,a),o=n.child,o.memoizedState=Yu(a),o.childLanes=Zu(e,M,a),n.memoizedState=qu,n=u);else if(da(n),Nf(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,Yr({value:o,source:null,stack:null}),n=Qu(e,n,a)}else if(mn||Zr(e,n,a,!1),M=(a&e.childLanes)!==0,mn||M){if(M=ke,M!==null&&(o=a&-a,o=(o&42)!==0?1:_e(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Ds(e,o),jn(M,e,o),Zp;w.data==="$?"||gf(),n=Qu(e,n,a)}else w.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Je=pi(w.nextSibling),Ln=n,Le=!0,Qa=null,Mi=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Za,zi=e.id,Bi=e.overflow,Za=n),n=Ku(n,o.children),n.flags|=4096);return n}return u?(pa(),u=o.fallback,w=n.mode,F=e.child,st=F.sibling,o=Pi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,st!==null?u=Pi(st,u):(u=Ya(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=e.child.memoizedState,w===null?w=Yu(a):(F=w.cachePool,F!==null?(st=un._currentValue,F=F.parent!==st?{parent:st,pool:st}:F):F=Xd(),w={baseLanes:w.baseLanes|a,cachePool:F}),u.memoizedState=w,u.childLanes=Zu(e,M,a),n.memoizedState=qu,o):(da(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Ku(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=Hn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qu(e,n,a){return Vs(n,e.child,null,a),e=Ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),mu(e.return,n,a)}function Ju(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function rm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(En(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sm(e,a,n);else if(e.tag===19)sm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(k(fn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ju(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ju(n,!0,a,null,h);break;case"together":Ju(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function mx(e,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),la(n,un,e.memoizedState.cache),qr();break;case 27:case 5:Zt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(e,n,a):(da(n),e=Vi(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),k(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,$p(e,n,a);case 24:la(n,un,e.memoizedState.cache)}return Vi(e,n,a)}function om(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!$u(e,a)&&(n.flags&128)===0)return mn=!1,mx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Le&&(n.flags&1048576)!==0&&Bd(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")lu(o)?(e=is(o,e),n.tag=1,n=nm(null,n,o,e,a)):(n.tag=0,n=Wu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=Kp(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Qp(null,n,o,e,a);break t}}throw n=Y(o)||o,Error(s(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=is(o,n.pendingProps),nm(e,n,o,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Mu(e,n),no(n,o,null,a);var M=n.memoizedState;if(o=M.cache,la(n,un,o),o!==h.cache&&gu(n,[un],a,!0),eo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=im(e,n,o,a);break t}else if(o!==u){u=Jn(Error(s(424)),n),Yr(u),n=im(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=pi(e.firstChild),Ln=n,Le=!0,Qa=null,Mi=!0,a=Fp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qr(),o===u){n=Vi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=fg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=Gl(xt.current).createElement(a),o[Re]=n,o[Oe]=e,Tn(o,a,e),V(o),n.stateNode=o):n.memoizedState=fg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Le&&(o=n.stateNode=lg(n.type,n.pendingProps,xt.current),Ln=n,Mi=!0,u=Je,Ea(n.type)?(Of=u,Je=pi(o.firstChild)):Je=u),En(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=Je)&&(o=kx(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Ln=n,Je=pi(o.firstChild),Mi=!1,u=!0):u=!1),u||Ja(n)),Zt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Lf(u,h)?o=null:M!==null&&Lf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=wu(e,n,ox,null,null,a),To._currentValue=u),Al(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=Je)&&(a=Xx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,Je=null,e=!0):e=!1),e||Ja(n)),null;case 13:return am(e,n,a);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Vs(n,null,o,a):En(e,n,o,a),n.child;case 11:return Kp(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,la(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ts(n),u=An(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return Qp(e,n,n.type,n.pendingProps,a);case 15:return Jp(e,n,n.type,n.pendingProps,a);case 19:return rm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Rl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return $p(e,n,a);case 24:return ts(n),o=An(un),e===null?(u=xu(),u===null&&(u=ke,h=_u(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Su(n),la(n,un,u)):((e.lanes&a)!==0&&(Mu(e,n),no(n,null,null,a),eo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),la(n,un,o)):(o=h.cache,la(n,un,o),o!==u.cache&&gu(n,[un],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ki(e){e.flags|=4}function lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gg(n)){if(n=ni.current,n!==null&&((we&4194048)===we?Ei!==null:(we&62914560)!==we&&(we&536870912)===0||n!==Ei))throw $r=yu,jd;e.flags|=8192}}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ct():536870912,e.lanes|=n,Ws|=n)}function co(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function gx(e,n,a){var o=n.pendingProps;switch(hu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(un),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hd())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(Ke(n),lm(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),Ke(n),lm(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),Ke(n),n.flags&=-16777217),null;case 27:ee(n),a=xt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=ot.current,Wr(n)?Id(n):(e=lg(u,o,a),n.stateNode=e,ki(n))}return Ke(n),null;case 5:if(ee(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(e=ot.current,Wr(n))Id(n);else{switch(u=Gl(xt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Re]=n,e[Oe]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Re]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||eg(e.nodeValue,a)),e||Ja(n)}else e=Gl(e).createTextNode(o),e[Re]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Re]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Hd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Ke(n),null;case 4:return Xt(),e===null&&Tf(n.stateNode.containerInfo),Ke(n),null;case 10:return Fi(n.type),Ke(n),null;case 19:if(nt(fn),u=n.memoizedState,u===null)return Ke(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)co(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=El(e),h!==null){for(n.flags|=128,co(u,!1),e=h.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zd(a,e),a=a.sibling;return k(fn,fn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ce()>Dl&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304)}else{if(!o)if(e=El(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),co(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Le)return Ke(n),null}else 2*ce()-u.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ce(),n.sibling=null,e=fn.current,k(fn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Gi(n),Au(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(un),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _x(e,n){switch(hu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(un),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(fn),null;case 4:return Xt(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),Au(),e!==null&&nt(es),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(un),null;case 25:return null;default:return null}}function cm(e,n){switch(hu(n),n.tag){case 3:Fi(un),Xt();break;case 26:case 27:case 5:ee(n);break;case 4:Xt();break;case 13:Gi(n);break;case 19:nt(fn);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),Au(),e!==null&&nt(es);break;case 24:Fi(un)}}function uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){Ge(n,n.return,w)}}function ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var F=a,st=w;try{st()}catch(_t){Ge(u,F,_t)}}}o=o.next}while(o!==h)}}catch(_t){Ge(n,n.return,_t)}}function um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qd(n,a)}catch(o){Ge(e,e.return,o)}}}function fm(e,n,a){a.props=is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function hm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function tf(e,n,a){try{var o=e.stateNode;Ix(o,e.type,a,n),o[Oe]=n}catch(u){Ge(e,e.return,u)}}function dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hl));else if(o!==4&&(o===27&&Ea(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nf(e,n,a),e=e.sibling;e!==null;)nf(e,n,a),e=e.sibling}function Cl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,n,a),e=e.sibling;e!==null;)Cl(e,n,a),e=e.sibling}function pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[Re]=e,n[Oe]=a}catch(h){Ge(e,e.return,h)}}var Xi=!1,en=!1,af=!1,mm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function vx(e,n){if(e=e.containerInfo,wf=ql,e=Ad(e),eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,w=-1,F=-1,st=0,_t=0,yt=e,ct=null;e:for(;;){for(var ht;yt!==a||u!==0&&yt.nodeType!==3||(w=M+u),yt!==h||o!==0&&yt.nodeType!==3||(F=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ct=yt,yt=ht;for(;;){if(yt===e)break e;if(ct===a&&++st===u&&(w=M),ct===h&&++_t===o&&(F=M),(ht=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ht}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var le=is(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(le,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function gm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&uo(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ge(a,a.return,M)}else{var u=is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ge(a,a.return,M)}}o&64&&um(a),o&512&&fo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qd(e,n)}catch(M){Ge(a,a.return,M)}}break;case 27:n===null&&o&4&&pm(a);case 26:case 5:ga(e,a),n===null&&o&4&&hm(a),o&512&&fo(a,a.return);break;case 12:ga(e,a);break;case 13:ga(e,a),o&4&&xm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rx.bind(null,a),jx(e,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||en,u=Xi;var h=en;Xi=o,(en=n)&&!h?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),Xi=u,en=h}break;case 30:break;default:ga(e,a)}}function _m(e){var n=e.alternate;n!==null&&(e.alternate=null,_m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ui(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,zn=!1;function ji(e,n,a){for(a=a.child;a!==null;)vm(e,n,a),a=a.sibling}function vm(e,n,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:en||bi(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||bi(a,n);var o=Ze,u=zn;Ea(a.type)&&(Ze=a.stateNode,zn=!1),ji(e,n,a),So(a.stateNode),Ze=o,zn=u;break;case 5:en||bi(a,n);case 6:if(o=Ze,u=zn,Ze=null,ji(e,n,a),Ze=o,zn=u,Ze!==null)if(zn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{Ze.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:Ze!==null&&(zn?(e=Ze,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Co(e)):rg(Ze,a.stateNode));break;case 4:o=Ze,u=zn,Ze=a.stateNode.containerInfo,zn=!0,ji(e,n,a),Ze=o,zn=u;break;case 0:case 11:case 14:case 15:en||ma(2,a,n),en||ma(4,a,n),ji(e,n,a);break;case 1:en||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fm(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,ji(e,n,a),en=o;break;default:ji(e,n,a)}}function xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Co(e)}catch(a){Ge(n,n.return,a)}}function xx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mm),n;default:throw Error(s(435,e.tag))}}function sf(e,n){var a=xx(e);n.forEach(function(o){var u=wx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(Ea(w.type)){Ze=w.stateNode,zn=!1;break t}break;case 5:Ze=w.stateNode,zn=!1;break t;case 3:case 4:Ze=w.stateNode.containerInfo,zn=!0;break t}w=w.return}if(Ze===null)throw Error(s(160));vm(h,M,u),Ze=null,zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ym(n,e),n=n.sibling}var di=null;function ym(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),o&4&&(ma(3,e,e.return),uo(3,e),ma(5,e,e.return));break;case 1:Gn(n,e),Vn(e),o&512&&(en||a===null||bi(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=di;if(Gn(n,e),Vn(e),o&512&&(en||a===null||bi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ci]||h[Re]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Tn(h,o,a),h[Re]=e,V(h),o=h;break t;case"link":var M=pg("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(h=M[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=pg("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(h=M[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Re]=e,V(h),o=h}e.stateNode=o}else mg(u,e.type,e.stateNode);else e.stateNode=dg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?mg(u,e.type,e.stateNode):dg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),o&512&&(en||a===null||bi(a,a.return)),a!==null&&o&4&&tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),o&512&&(en||a===null||bi(a,a.return)),e.flags&32){u=e.stateNode;try{bs(u,"")}catch(ht){Ge(e,e.return,ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(af=!0);break;case 6:if(Gn(n,e),Vn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ht){Ge(e,e.return,ht)}}break;case 3:if(Xl=null,u=di,di=Vl(n.containerInfo),Gn(n,e),di=u,Vn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Co(n.containerInfo)}catch(ht){Ge(e,e.return,ht)}af&&(af=!1,Sm(e));break;case 4:o=di,di=Vl(e.stateNode.containerInfo),Gn(n,e),Vn(e),di=o;break;case 12:Gn(n,e),Vn(e);break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ff=ce()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sf(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,st=Xi,_t=en;if(Xi=st||u,en=_t||F,Gn(n,e),en=_t,Xi=st,Vn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Xi||en||as(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=F.stateNode;var yt=F.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;w.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(ht){Ge(F,F.return,ht)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ht){Ge(F,F.return,ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sf(e,a))));break;case 19:Gn(n,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sf(e,o)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(dm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=ef(e);Cl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(bs(M,""),a.flags&=-33);var w=ef(e);Cl(e,w,M);break;case 3:case 4:var F=a.stateNode.containerInfo,st=ef(e);nf(e,st,F);break;default:throw Error(s(161))}}catch(_t){Ge(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(e,n.alternate,n),n=n.sibling}function as(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),as(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fm(n,n.return,a),as(n);break;case 27:So(n.stateNode);case 26:case 5:bi(n,n.return),as(n);break;case 22:n.memoizedState===null&&as(n);break;case 30:as(n);break;default:as(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:_a(u,h,a),uo(4,h);break;case 1:if(_a(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(o,o.return,st)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Kd(F[u],w)}catch(st){Ge(o,o.return,st)}}a&&M&64&&um(h),fo(h,h.return);break;case 27:pm(h);case 26:case 5:_a(u,h,a),a&&o===null&&M&4&&hm(h),fo(h,h.return);break;case 12:_a(u,h,a);break;case 13:_a(u,h,a),a&&M&4&&xm(u,h);break;case 22:h.memoizedState===null&&_a(u,h,a),fo(h,h.return);break;case 30:break;default:_a(u,h,a)}n=n.sibling}}function rf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(e,n,a,o),n=n.sibling}function Mm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),u&2048&&uo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(u&2048){Ti(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,w=h.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ge(n,n.return,F)}}else Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ti(e,n,a,o):ho(e,n):h._visibility&2?Ti(e,n,a,o):(h._visibility|=2,ks(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&rf(M,n);break;case 24:Ti(e,n,a,o),u&2048&&of(n.alternate,n);break;default:Ti(e,n,a,o)}}function ks(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,w=a,F=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:ks(h,M,w,F,u),uo(8,M);break;case 23:break;case 22:var _t=M.stateNode;M.memoizedState!==null?_t._visibility&2?ks(h,M,w,F,u):ho(h,M):(_t._visibility|=2,ks(h,M,w,F,u)),u&&st&2048&&rf(M.alternate,M);break;case 24:ks(h,M,w,F,u),u&&st&2048&&of(M.alternate,M);break;default:ks(h,M,w,F,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&rf(o.alternate,o);break;case 24:ho(a,o),u&2048&&of(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Xs(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 26:Xs(e),e.flags&po&&e.memoizedState!==null&&ay(di,e.memoizedState,e.memoizedProps);break;case 5:Xs(e);break;case 3:case 4:var n=di;di=Vl(e.stateNode.containerInfo),Xs(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Xs(e),po=n):Xs(e));break;default:Xs(e)}}function bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Am(o,e)}bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tm(e),e=e.sibling}function Tm(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&ma(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):mo(e);break;default:mo(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Am(o,e)}bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function Am(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(_m(o),o===a){gn=null;break t}if(u!==null){u.return=h,gn=u;break t}gn=h}}}var yx={getCacheForType:function(e){var n=An(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,be=null,we=0,Ne=0,kn=null,va=!1,js=!1,lf=!1,Wi=0,$e=0,xa=0,ss=0,cf=0,ii=0,Ws=0,go=null,Bn=null,uf=!1,ff=0,Dl=1/0,Ul=null,ya=null,bn=0,Sa=null,qs=null,Ys=0,hf=0,df=null,Rm=null,_o=0,pf=null;function Xn(){if((Ue&2)!==0&&we!==0)return we&-we;if(z.T!==null){var e=Ps;return e!==0?e:Sf()}return Ye()}function wm(){ii===0&&(ii=(we&536870912)===0||Le?fe():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===ke&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Zs(e,0),Ma(e,we,ii,!1)),Lt(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(ss|=a),$e===4&&Ma(e,we,ii,!1)),Ai(e))}function Cm(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ue(e,n),u=o?bx(e,n):_f(e,n,!0),h=o;do{if(u===0){js&&!o&&Ma(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Mx(a)){u=_f(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var w=e;u=go;var F=w.current.memoizedState.isDehydrated;if(F&&(Zs(w,M).flags|=256),M=_f(w,M,!1),M!==2){if(lf&&!F){w.errorRecoveryDisabledLanes|=h,ss|=h,u=4;break t}h=Bn,Bn=u,h!==null&&(Bn===null?Bn=h:Bn.push.apply(Bn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){Zs(e,0),Ma(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ma(o,n,ii,!va);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ff+300-ce(),10<u)){if(Ma(o,n,ii,!va),jt(o,0,!0)!==0)break t;o.timeoutHandle=ag(Lm.bind(null,o,a,Bn,Ul,uf,n,ii,ss,Ws,va,h,2,-0,0),u);break t}Lm(o,a,Bn,Ul,uf,n,ii,ss,Ws,va,h,0,-0,0)}}break}while(!0);Ai(e)}function Lm(e,n,a,o,u,h,M,w,F,st,_t,yt,ct,ht){if(e.timeoutHandle=-1,yt=n.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:iy},Em(n),yt=sy(),yt!==null)){e.cancelPendingCommit=yt(Bm.bind(null,e,n,h,a,o,u,M,w,F,_t,1,ct,ht)),Ma(e,h,M,!st);return}Bm(e,n,h,a,o,u,M,w,F)}function Mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Fn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(e,n,a,o){n&=~cf,n&=~ss,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Kt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Jt(e,a,n)}function Nl(){return(Ue&6)===0?(vo(0),!1):!0}function mf(){if(be!==null){if(Ne===0)var e=be.return;else e=be,Ii=$a=null,Du(e),Gs=null,oo=0,e=be;for(;e!==null;)cm(e.alternate,e),e=e.return;be=null}}function Zs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),mf(),ke=e,be=a=Pi(e.current,null),we=n,Ne=0,kn=null,va=!1,js=ue(e,n),lf=!1,Ws=ii=cf=ss=xa=$e=0,Bn=go=null,uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Kt(o),h=1<<u;n|=e[u],o&=~h}return Wi=n,el(),a}function Dm(e,n){xe=null,z.H=yl,n===Jr||n===ul?(n=Yd(),Ne=3):n===jd?(n=Yd(),Ne=4):Ne=n===Zp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,be===null&&($e=1,Tl(e,Jn(n,e.current)))}function Um(){var e=z.H;return z.H=yl,e===null?yl:e}function Nm(){var e=z.A;return z.A=yx,e}function gf(){$e=4,va||(we&4194048)!==we&&ni.current!==null||(js=!0),(xa&134217727)===0&&(ss&134217727)===0||ke===null||Ma(ke,we,ii,!1)}function _f(e,n,a){var o=Ue;Ue|=2;var u=Um(),h=Nm();(ke!==e||we!==n)&&(Ul=null,Zs(e,n)),n=!1;var M=$e;t:do try{if(Ne!==0&&be!==null){var w=be,F=kn;switch(Ne){case 8:mf(),M=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var st=Ne;if(Ne=0,kn=null,Ks(e,w,F,st),a&&js){M=0;break t}break;default:st=Ne,Ne=0,kn=null,Ks(e,w,F,st)}}Ex(),M=$e;break}catch(_t){Dm(e,_t)}while(!0);return n&&e.shellSuspendCounter++,Ii=$a=null,Ue=o,z.H=u,z.A=h,be===null&&(ke=null,we=0,el()),M}function Ex(){for(;be!==null;)Om(be)}function bx(e,n){var a=Ue;Ue|=2;var o=Um(),u=Nm();ke!==e||we!==n?(Ul=null,Dl=ce()+500,Zs(e,n)):js=ue(e,n);t:do try{if(Ne!==0&&be!==null){n=be;var h=kn;e:switch(Ne){case 1:Ne=0,kn=null,Ks(e,n,h,1);break;case 2:case 9:if(Wd(h)){Ne=0,kn=null,Pm(n);break}n=function(){Ne!==2&&Ne!==9||ke!==e||(Ne=7),Ai(e)},h.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Wd(h)?(Ne=0,kn=null,Pm(n)):(Ne=0,kn=null,Ks(e,n,h,7));break;case 5:var M=null;switch(be.tag){case 26:M=be.memoizedState;case 5:case 27:var w=be;if(!M||gg(M)){Ne=0,kn=null;var F=w.sibling;if(F!==null)be=F;else{var st=w.return;st!==null?(be=st,Ol(st)):be=null}break e}}Ne=0,kn=null,Ks(e,n,h,5);break;case 6:Ne=0,kn=null,Ks(e,n,h,6);break;case 8:mf(),$e=6;break t;default:throw Error(s(462))}}Tx();break}catch(_t){Dm(e,_t)}while(!0);return Ii=$a=null,z.H=o,z.A=u,Ue=a,be!==null?0:(ke=null,we=0,el(),$e)}function Tx(){for(;be!==null&&!$t();)Om(be)}function Om(e){var n=om(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Ol(e):be=n}function Pm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=em(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=em(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Du(n);default:cm(a,n),n=be=zd(n,Wi),n=om(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):be=n}function Ks(e,n,a,o){Ii=$a=null,Du(n),Gs=null,oo=0;var u=n.return;try{if(px(e,u,n,a,we)){$e=1,Tl(e,Jn(a,e.current)),be=null;return}}catch(h){if(u!==null)throw be=u,h;$e=1,Tl(e,Jn(a,e.current)),be=null;return}n.flags&32768?(Le||o===1?e=!0:js||(we&536870912)!==0?e=!1:(va=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),zm(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){zm(n,va);return}e=n.return;var a=gx(n.alternate,n,Wi);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);$e===0&&($e=5)}function zm(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);$e=6,be=null}function Bm(e,n,a,o,u,h,M,w,F){e.cancelPendingCommit=null;do Pl();while(bn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=ru,Nt(e,a,h,M,w,F),e===ke&&(be=ke=null,we=0),qs=n,Sa=e,Ys=a,hf=h,df=u,Rm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(K,function(){return Vm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=J.p,J.p=2,M=Ue,Ue|=4;try{vx(e,n,a)}finally{Ue=M,J.p=u,z.T=o}}bn=1,Im(),Fm(),Hm()}}function Im(){if(bn===1){bn=0;var e=Sa,n=qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=J.p;J.p=2;var u=Ue;Ue|=4;try{ym(n,e);var h=Cf,M=Ad(e.containerInfo),w=h.focusedElem,F=h.selectionRange;if(M!==w&&w&&w.ownerDocument&&Td(w.ownerDocument.documentElement,w)){if(F!==null&&eu(w)){var st=F.start,_t=F.end;if(_t===void 0&&(_t=st),"selectionStart"in w)w.selectionStart=st,w.selectionEnd=Math.min(_t,w.value.length);else{var yt=w.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),le=w.textContent.length,ie=Math.min(F.start,le),Be=F.end===void 0?ie:Math.min(F.end,le);!ht.extend&&ie>Be&&(M=Be,Be=ie,ie=M);var $=bd(w,ie),W=bd(w,Be);if($&&W&&(ht.rangeCount!==1||ht.anchorNode!==$.node||ht.anchorOffset!==$.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var it=yt.createRange();it.setStart($.node,$.offset),ht.removeAllRanges(),ie>Be?(ht.addRange(it),ht.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ht.addRange(it))}}}}for(yt=[],ht=w;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var vt=yt[w];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}ql=!!wf,Cf=wf=null}finally{Ue=u,J.p=o,z.T=a}}e.current=n,bn=2}}function Fm(){if(bn===2){bn=0;var e=Sa,n=qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=J.p;J.p=2;var u=Ue;Ue|=4;try{gm(e,n.alternate,n)}finally{Ue=u,J.p=o,z.T=a}}bn=3}}function Hm(){if(bn===4||bn===3){bn=0,Ft();var e=Sa,n=qs,a=Ys,o=Rm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,qs=Sa=null,Gm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ya=null),ye(a),n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=J.p,J.p=2,z.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var w=o[M];h(w.value,{componentStack:w.stack})}}finally{z.T=n,J.p=u}}(Ys&3)!==0&&Pl(),Ai(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===pf?_o++:(_o=0,pf=e):_o=0,vo(0)}}function Gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Pl(e){return Im(),Fm(),Hm(),Vm()}function Vm(){if(bn!==5)return!1;var e=Sa,n=hf;hf=0;var a=ye(Ys),o=z.T,u=J.p;try{J.p=32>a?32:a,z.T=null,a=df,df=null;var h=Sa,M=Ys;if(bn=0,qs=Sa=null,Ys=0,(Ue&6)!==0)throw Error(s(331));var w=Ue;if(Ue|=4,Tm(h.current),Mm(h,h.current,M,a),Ue=w,vo(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Dt,h)}catch{}return!0}finally{J.p=u,z.T=o,Gm(e,n)}}function km(e,n,a){n=Jn(a,n),n=ju(e.stateNode,n,2),e=fa(e,n,2),e!==null&&(Lt(e,2),Ai(e))}function Ge(e,n,a){if(e.tag===3)km(e,e,a);else for(;n!==null;){if(n.tag===3){km(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ya===null||!ya.has(o))){e=Jn(a,e),a=qp(2),o=fa(n,a,2),o!==null&&(Yp(a,o,n,e),Lt(o,2),Ai(o));break}}n=n.return}}function vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(lf=!0,u.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(we&a)===a&&($e===4||$e===3&&(we&62914560)===we&&300>ce()-ff?(Ue&2)===0&&Zs(e,0):cf|=a,Ws===we&&(Ws=0)),Ai(e)}function Xm(e,n){n===0&&(n=Ct()),e=Ds(e,n),e!==null&&(Lt(e,n),Ai(e))}function Rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xm(e,a)}function wx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Xm(e,a)}function Cx(e,n){return Fe(e,n)}var zl=null,Qs=null,xf=!1,Bl=!1,yf=!1,rs=0;function Ai(e){e!==Qs&&e.next===null&&(Qs===null?zl=Qs=e:Qs=Qs.next=e),Bl=!0,xf||(xf=!0,Dx())}function vo(e,n){if(!yf&&Bl){yf=!0;do for(var a=!1,o=zl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Kt(42|e)+1)-1,h&=u&~(M&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Ym(o,h))}else h=we,h=jt(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ue(o,h)||(a=!0,Ym(o,h));o=o.next}while(a);yf=!1}}function Lx(){jm()}function jm(){Bl=xf=!1;var e=0;rs!==0&&(Fx()&&(e=rs),rs=0);for(var n=ce(),a=null,o=zl;o!==null;){var u=o.next,h=Wm(o,n);h===0?(o.next=null,a===null?zl=u:a.next=u,u===null&&(Qs=a)):(a=o,(e!==0||(h&3)!==0)&&(Bl=!0)),o=u}vo(e)}function Wm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Kt(h),w=1<<M,F=u[M];F===-1?((w&a)===0||(w&o)!==0)&&(u[M]=de(w,n)):F<=n&&(e.expiredLanes|=w),h&=~w}if(n=ke,a=we,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ht(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ue(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ht(o),ye(a)){case 2:case 8:a=T;break;case 32:a=K;break;case 268435456:a=pt;break;default:a=K}return o=qm.bind(null,e),a=Fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ht(o),e.callbackPriority=2,e.callbackNode=null,2}function qm(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var o=we;return o=jt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cm(e,o,n),Wm(e,ce()),e.callbackNode!=null&&e.callbackNode===a?qm.bind(null,e):null)}function Ym(e,n){if(Pl())return null;Cm(e,n,!0)}function Dx(){Gx(function(){(Ue&6)!==0?Fe(L,Lx):jm()})}function Sf(){return rs===0&&(rs=fe()),rs}function Zm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function Km(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Zm((u[Oe]||null).action),M=o.submitter;M&&(n=(n=M[Oe]||null)?Zm(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var w=new Jo("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var F=M?Km(u,M):new FormData(u);Hu(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(w.preventDefault(),F=M?Km(u,M):new FormData(u),Hu(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Mf=0;Mf<su.length;Mf++){var Ef=su[Mf],Nx=Ef.toLowerCase(),Ox=Ef[0].toUpperCase()+Ef.slice(1);hi(Nx,"on"+Ox)}hi(Cd,"onAnimationEnd"),hi(Ld,"onAnimationIteration"),hi(Dd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Qv,"onTransitionRun"),hi(Jv,"onTransitionStart"),hi($v,"onTransitionCancel"),hi(Ud,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Qm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],F=w.instance,st=w.currentTarget;if(w=w.listener,F!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=st;try{h(u)}catch(_t){bl(_t)}u.currentTarget=null,h=F}else for(M=0;M<o.length;M++){if(w=o[M],F=w.instance,st=w.currentTarget,w=w.listener,F!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=st;try{h(u)}catch(_t){bl(_t)}u.currentTarget=null,h=F}}}}function Te(e,n){var a=n[sa];a===void 0&&(a=n[sa]=new Set);var o=e+"__bubble";a.has(o)||(Jm(n,e,2,!1),a.add(o))}function bf(e,n,a){var o=0;n&&(o|=4),Jm(a,e,o,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Tf(e){if(!e[Il]){e[Il]=!0,Q.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||bf(a,!1,e),bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,bf("selectionchange",!1,n))}}function Jm(e,n,a,o){switch(Mg(n)){case 2:var u=ly;break;case 8:u=cy;break;default:u=Ff}a=u.bind(null,n,a,e),u=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Af(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=o.return;M!==null;){var F=M.tag;if((F===3||F===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=ui(w),M===null)return;if(F=M.tag,F===5||F===6||F===26||F===27){o=h=M;continue t}w=w.parentNode}}o=o.return}sd(function(){var st=h,_t=Xc(a),yt=[];t:{var ct=Nd.get(e);if(ct!==void 0){var ht=Jo,le=e;switch(e){case"keypress":if(Ko(a)===0)break t;case"keydown":case"keyup":ht=Cv;break;case"focusin":le="focus",ht=Kc;break;case"focusout":le="blur",ht=Kc;break;case"beforeblur":case"afterblur":ht=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Uv;break;case Cd:case Ld:case Dd:ht=yv;break;case Ud:ht=Ov;break;case"scroll":case"scrollend":ht=mv;break;case"wheel":ht=zv;break;case"copy":case"cut":case"paste":ht=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=ud;break;case"toggle":case"beforetoggle":ht=Iv}var ie=(n&4)!==0,Be=!ie&&(e==="scroll"||e==="scrollend"),$=ie?ct!==null?ct+"Capture":null:ct;ie=[];for(var W=st,it;W!==null;){var vt=W;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||$===null||(vt=Br(W,$),vt!=null&&ie.push(yo(W,vt,it))),Be)break;W=W.return}0<ie.length&&(ct=new ht(ct,le,null,a,_t),yt.push({event:ct,listeners:ie}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&a!==kc&&(le=a.relatedTarget||a.fromElement)&&(ui(le)||le[Kn]))break t;if((ht||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?(le=a.relatedTarget||a.toElement,ht=st,le=le?ui(le):null,le!==null&&(Be=c(le),ie=le.tag,le!==Be||ie!==5&&ie!==27&&ie!==6)&&(le=null)):(ht=null,le=st),ht!==le)){if(ie=ld,vt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ud,vt="onPointerLeave",$="onPointerEnter",W="pointer"),Be=ht==null?ct:at(ht),it=le==null?ct:at(le),ct=new ie(vt,W+"leave",ht,a,_t),ct.target=Be,ct.relatedTarget=it,vt=null,ui(_t)===st&&(ie=new ie($,W+"enter",le,a,_t),ie.target=it,ie.relatedTarget=Be,vt=ie),Be=vt,ht&&le)e:{for(ie=ht,$=le,W=0,it=ie;it;it=Js(it))W++;for(it=0,vt=$;vt;vt=Js(vt))it++;for(;0<W-it;)ie=Js(ie),W--;for(;0<it-W;)$=Js($),it--;for(;W--;){if(ie===$||$!==null&&ie===$.alternate)break e;ie=Js(ie),$=Js($)}ie=null}else ie=null;ht!==null&&$m(yt,ct,ht,ie,!1),le!==null&&Be!==null&&$m(yt,Be,le,ie,!0)}}t:{if(ct=st?at(st):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var kt=vd;else if(gd(ct))if(xd)kt=Yv;else{kt=Wv;var Me=jv}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?st&&Vc(st.elementType)&&(kt=vd):kt=qv;if(kt&&(kt=kt(e,st))){_d(yt,kt,a,_t);break t}Me&&Me(e,ct,st),e==="focusout"&&st&&ct.type==="number"&&st.memoizedProps.value!=null&&Ms(ct,"number",ct.value)}switch(Me=st?at(st):window,e){case"focusin":(gd(Me)||Me.contentEditable==="true")&&(ws=Me,nu=st,jr=null);break;case"focusout":jr=nu=ws=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Rd(yt,a,_t);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Rd(yt,a,_t)}var Qt;if(Jc)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else Rs?pd(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(fd&&a.locale!=="ko"&&(Rs||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Rs&&(Qt=rd()):(oa=_t,qc="value"in oa?oa.value:oa.textContent,Rs=!0)),Me=Fl(st,ae),0<Me.length&&(ae=new cd(ae,e,null,a,_t),yt.push({event:ae,listeners:Me}),Qt?ae.data=Qt:(Qt=md(a),Qt!==null&&(ae.data=Qt)))),(Qt=Hv?Gv(e,a):Vv(e,a))&&(ae=Fl(st,"onBeforeInput"),0<ae.length&&(Me=new cd("onBeforeInput","beforeinput",null,a,_t),yt.push({event:Me,listeners:ae}),Me.data=Qt)),Ux(yt,e,st,a,_t)}Qm(yt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Br(e,a),u!=null&&o.unshift(yo(e,u,h)),u=Br(e,n),u!=null&&o.push(yo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $m(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var w=a,F=w.alternate,st=w.stateNode;if(w=w.tag,F!==null&&F===o)break;w!==5&&w!==26&&w!==27||st===null||(F=st,u?(st=Br(a,h),st!=null&&M.unshift(yo(a,st,F))):u||(st=Br(a,h),st!=null&&M.push(yo(a,st,F)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var zx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function tg(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Bx,"")}function eg(e,n){return n=tg(n),tg(e)===n}function Hl(){}function ze(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||bs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&bs(e,""+o);break;case"className":ne(e,"class",o);break;case"tabIndex":ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,a,o);break;case"style":id(e,o,h);break;case"data":if(n!=="object"){ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),se(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,se(e,a,o))}}function Rf(e,n,a,o,u,h){switch(a){case"style":id(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?bs(e,o):(typeof o=="number"||typeof o=="bigint")&&bs(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Oe]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):se(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,h,M,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var w=h=M=u=null,F=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":M=_t;break;case"checked":F=_t;break;case"defaultChecked":st=_t;break;case"value":h=_t;break;case"defaultValue":w=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:ze(e,n,o,_t,a,null)}}qo(e,h,w,F,st,M,u,!1),ra(e);return;case"select":Te("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:ze(e,n,u,w,a,null)}n=h,a=M,e.multiple=!!o,n!=null?Es(e,!!o,n,!1):a!=null&&Es(e,!!o,a,!0);return;case"textarea":Te("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ze(e,n,M,w,a,null)}ed(e,o,u,h),ra(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,F,o,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<xo.length;o++)Te(xo[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,st,o,a,null)}return;default:if(Vc(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&Rf(e,n,_t,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&ze(e,n,w,o,a,null))}function Ix(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,w=null,F=null,st=null,_t=null;for(ht in a){var yt=a[ht];if(a.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":F=yt;default:o.hasOwnProperty(ht)||ze(e,n,ht,null,o,yt)}}for(var ct in o){var ht=o[ct];if(yt=a[ct],o.hasOwnProperty(ct)&&(ht!=null||yt!=null))switch(ct){case"type":h=ht;break;case"name":u=ht;break;case"checked":st=ht;break;case"defaultChecked":_t=ht;break;case"value":M=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==yt&&ze(e,n,ct,ht,o,yt)}}Xa(e,M,w,F,st,_t,h,u);return;case"select":ht=M=w=ct=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ht=F;default:o.hasOwnProperty(h)||ze(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":ct=h;break;case"defaultValue":w=h;break;case"multiple":M=h;default:h!==F&&ze(e,n,u,h,o,F)}n=w,a=M,o=ht,ct!=null?Es(e,!!a,ct,!1):!!o!=!!a&&(n!=null?Es(e,!!a,n,!0):Es(e,!!a,a?[]:"",!1));return;case"textarea":ht=ct=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ze(e,n,w,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":ct=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&ze(e,n,M,u,o,h)}td(e,ct,ht);return;case"option":for(var le in a)if(ct=a[le],a.hasOwnProperty(le)&&ct!=null&&!o.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:ze(e,n,le,null,o,ct)}for(F in o)if(ct=o[F],ht=a[F],o.hasOwnProperty(F)&&ct!==ht&&(ct!=null||ht!=null))switch(F){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:ze(e,n,F,ct,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)ct=a[ie],a.hasOwnProperty(ie)&&ct!=null&&!o.hasOwnProperty(ie)&&ze(e,n,ie,null,o,ct);for(st in o)if(ct=o[st],ht=a[st],o.hasOwnProperty(st)&&ct!==ht&&(ct!=null||ht!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ze(e,n,st,ct,o,ht)}return;default:if(Vc(n)){for(var Be in a)ct=a[Be],a.hasOwnProperty(Be)&&ct!==void 0&&!o.hasOwnProperty(Be)&&Rf(e,n,Be,void 0,o,ct);for(_t in o)ct=o[_t],ht=a[_t],!o.hasOwnProperty(_t)||ct===ht||ct===void 0&&ht===void 0||Rf(e,n,_t,ct,o,ht);return}}for(var $ in a)ct=a[$],a.hasOwnProperty($)&&ct!=null&&!o.hasOwnProperty($)&&ze(e,n,$,null,o,ct);for(yt in o)ct=o[yt],ht=a[yt],!o.hasOwnProperty(yt)||ct===ht||ct==null&&ht==null||ze(e,n,yt,ct,o,ht)}var wf=null,Cf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ig(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Fx(){var e=window.event;return e&&e.type==="popstate"?e===Df?!1:(Df=e,!0):(Df=null,!1)}var ag=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(e){return sg.resolve(null).then(e).catch(Vx)}:ag;function Vx(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function rg(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&So(M.documentElement),a&2&&So(M.body),a&4)for(a=M.head,So(a),M=a.firstChild;M;){var w=M.nextSibling,F=M.nodeName;M[ci]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=w}}if(u===0){e.removeChild(h),Co(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Co(n)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Ui(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function Xx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Nf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Of=null;function og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function lg(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ui(e)}var ai=new Map,cg=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=J.d;J.d={f:Wx,r:qx,D:Yx,C:Zx,L:Kx,m:Qx,X:$x,S:Jx,M:ty};function Wx(){var e=qi.f(),n=Nl();return e||n}function qx(e){var n=fi(e);n!==null&&n.tag===5&&n.type==="form"?Cp(n):qi.r(e)}var $s=typeof document>"u"?null:document;function ug(e,n,a){var o=$s;if(o&&typeof n=="string"&&n){var u=We(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),cg.has(u)||(cg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),V(n),o.head.appendChild(n)))}}function Yx(e){qi.D(e),ug("dns-prefetch",e,null)}function Zx(e,n){qi.C(e,n),ug("preconnect",e,n)}function Kx(e,n,a){qi.L(e,n,a);var o=$s;if(o&&e&&n){var u='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+We(a.imageSizes)+'"]')):u+='[href="'+We(e)+'"]';var h=u;switch(n){case"style":h=tr(e);break;case"script":h=er(e)}ai.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(h))||n==="script"&&o.querySelector(Eo(h))||(n=o.createElement("link"),Tn(n,"link",e),V(n),o.head.appendChild(n)))}}function Qx(e,n){qi.m(e,n);var a=$s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+We(o)+'"][href="'+We(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=er(e)}if(!ai.has(h)&&(e=g({rel:"modulepreload",href:e},n),ai.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(h)))return}o=a.createElement("link"),Tn(o,"link",e),V(o),a.head.appendChild(o)}}}function Jx(e,n,a){qi.S(e,n,a);var o=$s;if(o&&e){var u=A(o).hoistableStyles,h=tr(e);n=n||"default";var M=u.get(h);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(Mo(h)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(h))&&Pf(e,a);var F=M=o.createElement("link");V(F),Tn(F,"link",e),F._p=new Promise(function(st,_t){F.onload=st,F.onerror=_t}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,kl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(h,M)}}}function $x(e,n){qi.X(e,n);var a=$s;if(a&&e){var o=A(a).hoistableScripts,u=er(e),h=o.get(u);h||(h=a.querySelector(Eo(u)),h||(e=g({src:e,async:!0},n),(n=ai.get(u))&&zf(e,n),h=a.createElement("script"),V(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ty(e,n){qi.M(e,n);var a=$s;if(a&&e){var o=A(a).hoistableScripts,u=er(e),h=o.get(u);h||(h=a.querySelector(Eo(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(u))&&zf(e,n),h=a.createElement("script"),V(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function fg(e,n,a,o){var u=(u=xt.current)?Vl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=A(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tr(a.href);var h=A(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Mo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),h||ey(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=A(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tr(e){return'href="'+We(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function hg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ey(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),V(n),e.head.appendChild(n))}function er(e){return'[src="'+We(e)+'"]'}function Eo(e){return"script[async]"+e}function dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+We(a.href)+'"]');if(o)return n.instance=o,V(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),V(o),Tn(o,"style",u),kl(o,a.precedence,e),n.instance=o;case"stylesheet":u=tr(a.href);var h=e.querySelector(Mo(u));if(h)return n.state.loading|=4,n.instance=h,V(h),h;o=hg(a),(u=ai.get(u))&&Pf(o,u),h=(e.ownerDocument||e).createElement("link"),V(h);var M=h;return M._p=new Promise(function(w,F){M.onload=w,M.onerror=F}),Tn(h,"link",o),n.state.loading|=4,kl(h,a.precedence,e),n.instance=h;case"script":return h=er(a.src),(u=e.querySelector(Eo(h)))?(n.instance=u,V(u),u):(o=a,(u=ai.get(h))&&(o=g({},a),zf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),V(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,kl(o,a.precedence,e));return n.instance}function kl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function pg(e,n,a){if(Xl===null){var o=new Map,u=Xl=new Map;u.set(a,o)}else u=Xl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ci]||h[Re]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var w=o.get(M);w?w.push(h):o.set(M,[h])}}return o}function mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ny(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function iy(){}function ay(e,n,a){if(bo===null)throw Error(s(475));var o=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=tr(a.href),h=e.querySelector(Mo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,V(h);return}h=e.ownerDocument||e,a=hg(a),(u=ai.get(u))&&Pf(a,u),h=h.createElement("link"),V(h);var M=h;M._p=new Promise(function(w,F){M.onload=w,M.onerror=F}),Tn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function sy(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Bf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Bf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Bf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function Bf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(ry,e),Wl=null,jl.call(e))}function ry(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var o=a.get(null);else{a=new Map,Wl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:R,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function oy(e,n,a,o,u,h,M,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=X(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=X(0),this.hiddenUpdates=X(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function _g(e,n,a,o,u,h,M,w,F,st,_t,yt){return e=new oy(e,n,a,M,w,F,st,yt),n=1,h===!0&&(n|=24),h=Hn(3,null,null,n),e.current=h,h.stateNode=e,n=_u(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Su(h),e}function vg(e){return e?(e=Us,e):Us}function xg(e,n,a,o,u,h){u=vg(u),o.context===null?o.context=u:o.pendingContext=u,o=ua(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=fa(e,o,n),a!==null&&(jn(a,e,n),to(a,e,n))}function yg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function If(e,n){yg(e,n),(e=e.alternate)&&yg(e,n)}function Sg(e){if(e.tag===13){var n=Ds(e,67108864);n!==null&&jn(n,e,67108864),If(e,67108864)}}var ql=!0;function ly(e,n,a,o){var u=z.T;z.T=null;var h=J.p;try{J.p=2,Ff(e,n,a,o)}finally{J.p=h,z.T=u}}function cy(e,n,a,o){var u=z.T;z.T=null;var h=J.p;try{J.p=8,Ff(e,n,a,o)}finally{J.p=h,z.T=u}}function Ff(e,n,a,o){if(ql){var u=Hf(o);if(u===null)Af(e,n,o,Yl,a),Eg(e,o);else if(fy(u,e,n,a,o))o.stopPropagation();else if(Eg(e,o),n&4&&-1<uy.indexOf(e)){for(;u!==null;){var h=fi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Rt(h.pendingLanes);if(M!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var F=1<<31-Kt(M);w.entanglements[1]|=F,M&=~F}Ai(h),(Ue&6)===0&&(Dl=ce()+500,vo(0))}}break;case 13:w=Ds(h,2),w!==null&&jn(w,h,2),Nl(),If(h,2)}if(h=Hf(o),h===null&&Af(e,n,o,Yl,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Af(e,n,o,null,a)}}function Hf(e){return e=Xc(e),Gf(e)}var Yl=null;function Gf(e){if(Yl=null,e=ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function Mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case L:return 2;case T:return 8;case K:case gt:return 32;case pt:return 268435456;default:return 32}default:return 32}}var Vf=!1,ba=null,Ta=null,Aa=null,Ao=new Map,Ro=new Map,Ra=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,n){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function wo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=fi(n),n!==null&&Sg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fy(e,n,a,o,u){switch(n){case"focusin":return ba=wo(ba,e,n,a,o,u),!0;case"dragenter":return Ta=wo(Ta,e,n,a,o,u),!0;case"mouseover":return Aa=wo(Aa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ao.set(h,wo(Ao.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ro.set(h,wo(Ro.get(h)||null,e,n,a,o,u)),!0}return!1}function bg(e){var n=ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,an(e.priority,function(){if(a.tag===13){var o=Xn();o=_e(o);var u=Ds(a,o);u!==null&&jn(u,a,o),If(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);kc=o,a.target.dispatchEvent(o),kc=null}else return n=fi(a),n!==null&&Sg(n),e.blockedOn=a,!1;n.shift()}return!0}function Tg(e,n,a){Zl(e)&&a.delete(n)}function hy(){Vf=!1,ba!==null&&Zl(ba)&&(ba=null),Ta!==null&&Zl(Ta)&&(Ta=null),Aa!==null&&Zl(Aa)&&(Aa=null),Ao.forEach(Tg),Ro.forEach(Tg)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Vf||(Vf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hy)))}var Ql=null;function Ag(e){Ql!==e&&(Ql=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Gf(o||a)===null)continue;break}var h=fi(a);h!==null&&(e.splice(n,3),n-=3,Hu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Co(e){function n(F){return Kl(F,e)}ba!==null&&Kl(ba,e),Ta!==null&&Kl(Ta,e),Aa!==null&&Kl(Aa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Ra.length;a++){var o=Ra[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[Oe]||null;if(typeof h=="function")M||Ag(a);else if(M){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[Oe]||null)w=M.formAction;else if(Gf(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Ag(a)}}}function kf(e){this._internalRoot=e}Jl.prototype.render=kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Xn();xg(a,o,e,n,null,null)},Jl.prototype.unmount=kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xg(e.current,2,null,e,null,null),Nl(),n[Kn]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&bg(e)}};var Rg=t.version;if(Rg!=="19.1.1")throw Error(s(527,Rg,"19.1.1"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var dy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Dt=$l.inject(dy),Pt=$l}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=kp,h=Xp,M=jp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=_g(e,1,!1,null,null,a,o,u,h,M,w,null),e[Kn]=n.current,Tf(e),new kf(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=kp,M=Xp,w=jp,F=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=_g(e,1,!0,n,a??null,o,u,h,M,w,F,st),n.context=vg(null),a=n.current,o=Xn(),o=_e(o),u=ua(o),u.callback=null,fa(a,u,o),a=o,n.current.lanes=a,Lt(n,a),Ai(n),e[Kn]=n.current,Tf(e),new Jl(n)},Do.version="19.1.1",Do}var Bg;function Ty(){if(Bg)return Wf.exports;Bg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wf.exports=by(),Wf.exports}var Ay=Ty();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="160",nr={ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ry=0,Ig=1,wy=2,b_=1,T_=2,ta=3,Ga=0,In=1,ea=2,Ia=0,Ar=1,Fg=2,Hg=3,Gg=4,Cy=5,hs=100,Ly=101,Dy=102,Vg=103,kg=104,Uy=200,Ny=201,Oy=202,Py=203,Dh=204,Uh=205,zy=206,By=207,Iy=208,Fy=209,Hy=210,Gy=211,Vy=212,ky=213,Xy=214,jy=0,Wy=1,qy=2,wc=3,Yy=4,Zy=5,Ky=6,Qy=7,A_=0,Jy=1,$y=2,Fa=0,tS=1,eS=2,nS=3,R_=4,iS=5,aS=6,w_=300,wr=301,Cr=302,Nh=303,Oh=304,Pc=306,Ph=1e3,xi=1001,zh=1002,Nn=1003,Xg=1004,Kf=1005,ri=1006,sS=1007,ko=1008,Ha=1009,rS=1010,oS=1011,Xh=1012,C_=1013,za=1014,Ba=1015,Xo=1016,L_=1017,D_=1018,ps=1020,lS=1021,yi=1023,cS=1024,uS=1025,ms=1026,Lr=1027,fS=1028,U_=1029,hS=1030,N_=1031,O_=1033,Qf=33776,Jf=33777,$f=33778,th=33779,jg=35840,Wg=35841,qg=35842,Yg=35843,P_=36196,Zg=37492,Kg=37496,Qg=37808,Jg=37809,$g=37810,t0=37811,e0=37812,n0=37813,i0=37814,a0=37815,s0=37816,r0=37817,o0=37818,l0=37819,c0=37820,u0=37821,eh=36492,f0=36494,h0=36495,dS=36283,d0=36284,p0=36285,m0=36286,z_=3e3,gs=3001,pS=3200,mS=3201,B_=0,gS=1,li="",xn="srgb",ia="srgb-linear",jh="display-p3",zc="display-p3-linear",Cc="linear",qe="srgb",Lc="rec709",Dc="p3",ar=7680,g0=519,_S=512,vS=513,xS=514,I_=515,yS=516,SS=517,MS=518,ES=519,_0=35044,v0="300 es",Bh=1035,na=2e3,Uc=2001;class ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let x0=1234567;const Bo=Math.PI/180,jo=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function yn(r,t,i){return Math.max(t,Math.min(i,r))}function Wh(r,t){return(r%t+t)%t}function bS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function TS(r,t,i){return r!==t?(i-r)/(t-r):0}function Io(r,t,i){return(1-i)*r+i*t}function AS(r,t,i,s){return Io(r,t,1-Math.exp(-i*s))}function RS(r,t=1){return t-Math.abs(Wh(r,t*2)-t)}function wS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function CS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function LS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function DS(r,t){return r+Math.random()*(t-r)}function US(r){return r*(.5-Math.random())}function NS(r){r!==void 0&&(x0=r);let t=x0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OS(r){return r*Bo}function PS(r){return r*jo}function Ih(r){return(r&r-1)===0&&r!==0}function zS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Nc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function BS(r,t,i,s,l){const c=Math.cos,d=Math.sin,f=c(i/2),p=d(i/2),m=c((t+s)/2),g=d((t+s)/2),v=c((t-s)/2),x=d((t-s)/2),S=c((s-t)/2),E=d((s-t)/2);switch(l){case"XYX":r.set(f*g,p*v,p*x,f*m);break;case"YZY":r.set(p*x,f*g,p*v,f*m);break;case"ZXZ":r.set(p*v,p*x,f*g,f*m);break;case"XZX":r.set(f*g,p*E,p*S,f*m);break;case"YXY":r.set(p*S,f*g,p*E,f*m);break;case"ZYZ":r.set(p*E,p*S,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Sr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const F_={DEG2RAD:Bo,RAD2DEG:jo,generateUUID:Ur,clamp:yn,euclideanModulo:Wh,mapLinear:bS,inverseLerp:TS,lerp:Io,damp:AS,pingpong:RS,smoothstep:wS,smootherstep:CS,randInt:LS,randFloat:DS,randFloatSpread:US,seededRandom:NS,degToRad:OS,radToDeg:PS,isPowerOfTwo:Ih,ceilPowerOfTwo:zS,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:BS,normalize:Dn,denormalize:Sr};class qt{constructor(t=0,i=0){qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(t,i,s,l,c,d,f,p,m){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,f,p,m)}set(t,i,s,l,c,d,f,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=f,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],f=s[3],p=s[6],m=s[1],g=s[4],v=s[7],x=s[2],S=s[5],E=s[8],b=l[0],y=l[3],_=l[6],O=l[1],R=l[4],N=l[7],G=l[2],I=l[5],B=l[8];return c[0]=d*b+f*O+p*G,c[3]=d*y+f*R+p*I,c[6]=d*_+f*N+p*B,c[1]=m*b+g*O+v*G,c[4]=m*y+g*R+v*I,c[7]=m*_+g*N+v*B,c[2]=x*b+S*O+E*G,c[5]=x*y+S*R+E*I,c[8]=x*_+S*N+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],f=t[5],p=t[6],m=t[7],g=t[8];return i*d*g-i*f*m-s*c*g+s*f*p+l*c*m-l*d*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],f=t[5],p=t[6],m=t[7],g=t[8],v=g*d-f*m,x=f*p-g*c,S=m*c-d*p,E=i*v+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(l*m-g*s)*b,t[2]=(f*s-l*d)*b,t[3]=x*b,t[4]=(g*i-l*p)*b,t[5]=(l*c-f*i)*b,t[6]=S*b,t[7]=(s*p-m*i)*b,t[8]=(d*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*f)+d+t,-l*m,l*p,-l*(-m*d+p*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(nh.makeScale(t,i)),this}rotate(t){return this.premultiply(nh.makeRotation(-t)),this}translate(t,i){return this.premultiply(nh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new Ee;function H_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Oc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IS(){const r=Oc("canvas");return r.style.display="block",r}const y0={};function Fo(r){r in y0||(y0[r]=!0,console.warn(r))}const S0=new Ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),M0=new Ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tc={[ia]:{transfer:Cc,primaries:Lc,toReference:r=>r,fromReference:r=>r},[xn]:{transfer:qe,primaries:Lc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[zc]:{transfer:Cc,primaries:Dc,toReference:r=>r.applyMatrix3(M0),fromReference:r=>r.applyMatrix3(S0)},[jh]:{transfer:qe,primaries:Dc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(M0),fromReference:r=>r.applyMatrix3(S0).convertLinearToSRGB()}},FS=new Set([ia,zc]),Ie={enabled:!0,_workingColorSpace:ia,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!FS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,i){if(this.enabled===!1||t===i||!t||!i)return r;const s=tc[t].toReference,l=tc[i].fromReference;return l(s(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return tc[r].primaries},getTransfer:function(r){return r===li?Cc:tc[r].transfer}};function Rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ih(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let sr;class G_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{sr===void 0&&(sr=Oc("canvas")),sr.width=t.width,sr.height=t.height;const s=sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=sr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Rr(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Rr(i[s]/255)*255):i[s]=Rr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HS=0;class V_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ur(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?c.push(ah(l[d].image)):c.push(ah(l[d]))}else c=ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?G_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;class Yn extends ys{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=xi,l=xi,c=ri,d=ko,f=yi,p=Ha,m=Yn.DEFAULT_ANISOTROPY,g=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ur(),this.name="",this.source=new V_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===gs?xn:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?gs:z_}set encoding(t){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gs?xn:li}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=w_;Yn.DEFAULT_ANISOTROPY=1;class Sn{constructor(t=0,i=0,s=0,l=1){Sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],g=p[4],v=p[8],x=p[1],S=p[5],E=p[9],b=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(m+1)/2,N=(S+1)/2,G=(_+1)/2,I=(g+x)/4,B=(v+b)/4,ft=(E+y)/4;return R>N&&R>G?R<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(R),l=I/s,c=B/s):N>G?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=I/l,c=ft/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=B/c,l=ft/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-b)/O,this.z=(x-g)/O,this.w=Math.acos((m+S+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends ys{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Sn(0,0,t,i),this.scissorTest=!1,this.viewport=new Sn(0,0,t,i);const l={width:t,height:i,depth:1};s.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===gs?xn:li),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(t,i,s=1){(this.width!==t||this.height!==i||this.depth!==s)&&(this.width=t,this.height=i,this.depth=s,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new V_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends VS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class k_ extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kS extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,f){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3];const x=c[d+0],S=c[d+1],E=c[d+2],b=c[d+3];if(f===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(f===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(v!==b||p!==x||m!==S||g!==E){let y=1-f;const _=p*x+m*S+g*E+v*b,O=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const G=Math.sqrt(R),I=Math.atan2(G,_*O);y=Math.sin(y*I)/G,f=Math.sin(f*I)/G}const N=f*O;if(p=p*y+x*N,m=m*y+S*N,g=g*y+E*N,v=v*y+b*N,y===1-f){const G=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=G,m*=G,g*=G,v*=G}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,d){const f=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=c[d],x=c[d+1],S=c[d+2],E=c[d+3];return t[i]=f*E+g*v+p*S-m*x,t[i+1]=p*E+g*x+m*v-f*S,t[i+2]=m*E+g*S+f*x-p*v,t[i+3]=g*E-f*v-p*x-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,f=Math.cos,p=Math.sin,m=f(s/2),g=f(l/2),v=f(c/2),x=p(s/2),S=p(l/2),E=p(c/2);switch(d){case"XYZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"YZX":this._x=x*g*v+m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v-x*S*E;break;case"XZY":this._x=x*g*v-m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],f=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=s+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(d-l)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(g-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(c-m)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(d-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,f=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+d*f+l*m-c*p,this._y=l*g+d*p+c*f-s*m,this._z=c*g+d*m+s*p-l*f,this._w=d*g-s*f-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,d=this._w;let f=d*t._w+s*t._x+l*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-i;return this._w=S*d+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,f),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=Math.random(),i=Math.sqrt(1-t),s=Math.sqrt(t),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(c),s*Math.cos(c),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(E0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(E0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,f=t.z,p=t.w,m=2*(d*l-f*s),g=2*(f*i-c*l),v=2*(c*s-d*i);return this.x=i+p*m+d*v-f*g,this.y=s+p*g+f*m-c*v,this.z=l+p*v+c*g-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,f=i.y,p=i.z;return this.x=l*p-c*f,this.y=c*d-s*p,this.z=s*f-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new q,E0=new vs;class Wo{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)t.isMesh===!0?t.getVertexPosition(d,mi):mi.fromBufferAttribute(c,d),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),nc.subVectors(this.max,Uo),rr.subVectors(t.a,Uo),or.subVectors(t.b,Uo),lr.subVectors(t.c,Uo),Ca.subVectors(or,rr),La.subVectors(lr,or),os.subVectors(rr,lr);let i=[0,-Ca.z,Ca.y,0,-La.z,La.y,0,-os.z,os.y,Ca.z,0,-Ca.x,La.z,0,-La.x,os.z,0,-os.x,-Ca.y,Ca.x,0,-La.y,La.x,0,-os.y,os.x,0];return!rh(i,rr,or,lr,nc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,rr,or,lr,nc))?!1:(ic.crossVectors(Ca,La),i=[ic.x,ic.y,ic.z],rh(i,rr,or,lr,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yi=[new q,new q,new q,new q,new q,new q,new q,new q],mi=new q,ec=new Wo,rr=new q,or=new q,lr=new q,Ca=new q,La=new q,os=new q,Uo=new q,nc=new q,ic=new q,ls=new q;function rh(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ls.fromArray(r,c);const f=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),p=t.dot(ls),m=i.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const XS=new Wo,No=new q,oh=new q;class Bc{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):XS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(oh)),this.expandByPoint(No.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new q,lh=new q,ac=new q,Da=new q,ch=new q,sc=new q,uh=new q;class Ic{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(ac),f=Da.dot(this.direction),p=-Da.dot(ac),m=Da.lengthSq(),g=Math.abs(1-d*d);let v,x,S,E;if(g>0)if(v=d*p-f,x=d*f-p,E=c*g,v>=0)if(x>=-E)if(x<=E){const b=1/g;v*=b,x*=b,S=v*(v+d*x+2*f)+x*(d*v+x+2*p)+m}else x=c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-d*c+f)),x=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(v=Math.max(0,-(d*c+f)),x=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m);else x=d>0?-c:c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(lh).addScaledVector(ac,x),S}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),f=s-d,p=s+d;return p<0?null:f<0?this.at(p,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,f,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(f=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(f=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||f>l)||((f>s||s!==s)&&(s=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),sc.subVectors(s,t),uh.crossVectors(ch,sc);let d=this.direction.dot(uh),f;if(d>0){if(l)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Da.subVectors(this.origin,t);const p=f*this.direction.dot(sc.crossVectors(Da,sc));if(p<0)return null;const m=f*this.direction.dot(ch.cross(Da));if(m<0||p+m>d)return null;const g=-f*Da.dot(uh);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,d,f,p,m,g,v,x,S,E,b,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,f,p,m,g,v,x,S,E,b,y)}set(t,i,s,l,c,d,f,p,m,g,v,x,S,E,b,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/cr.setFromMatrixColumn(t,0).length(),c=1/cr.setFromMatrixColumn(t,1).length(),d=1/cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),f=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,S=d*v,E=f*g,b=f*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=x-b*m,i[9]=-f*p,i[2]=b-x*m,i[6]=E+S*m,i[10]=d*p}else if(t.order==="YXZ"){const x=p*g,S=p*v,E=m*g,b=m*v;i[0]=x+b*f,i[4]=E*f-S,i[8]=d*m,i[1]=d*v,i[5]=d*g,i[9]=-f,i[2]=S*f-E,i[6]=b+x*f,i[10]=d*p}else if(t.order==="ZXY"){const x=p*g,S=p*v,E=m*g,b=m*v;i[0]=x-b*f,i[4]=-d*v,i[8]=E+S*f,i[1]=S+E*f,i[5]=d*g,i[9]=b-x*f,i[2]=-d*m,i[6]=f,i[10]=d*p}else if(t.order==="ZYX"){const x=d*g,S=d*v,E=f*g,b=f*v;i[0]=p*g,i[4]=E*m-S,i[8]=x*m+b,i[1]=p*v,i[5]=b*m+x,i[9]=S*m-E,i[2]=-m,i[6]=f*p,i[10]=d*p}else if(t.order==="YZX"){const x=d*p,S=d*m,E=f*p,b=f*m;i[0]=p*g,i[4]=b-x*v,i[8]=E*v+S,i[1]=v,i[5]=d*g,i[9]=-f*g,i[2]=-m*g,i[6]=S*v+E,i[10]=x-b*v}else if(t.order==="XZY"){const x=d*p,S=d*m,E=f*p,b=f*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+b,i[5]=d*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=f*g,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jS,t,WS)}lookAt(t,i,s){const l=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ua.crossVectors(s,Wn),Ua.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ua.crossVectors(s,Wn)),Ua.normalize(),rc.crossVectors(Wn,Ua),l[0]=Ua.x,l[4]=rc.x,l[8]=Wn.x,l[1]=Ua.y,l[5]=rc.y,l[9]=Wn.y,l[2]=Ua.z,l[6]=rc.z,l[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],f=s[4],p=s[8],m=s[12],g=s[1],v=s[5],x=s[9],S=s[13],E=s[2],b=s[6],y=s[10],_=s[14],O=s[3],R=s[7],N=s[11],G=s[15],I=l[0],B=l[4],ft=l[8],C=l[12],P=l[1],ut=l[5],dt=l[9],Et=l[13],Y=l[2],tt=l[6],z=l[10],J=l[14],et=l[3],mt=l[7],U=l[11],j=l[15];return c[0]=d*I+f*P+p*Y+m*et,c[4]=d*B+f*ut+p*tt+m*mt,c[8]=d*ft+f*dt+p*z+m*U,c[12]=d*C+f*Et+p*J+m*j,c[1]=g*I+v*P+x*Y+S*et,c[5]=g*B+v*ut+x*tt+S*mt,c[9]=g*ft+v*dt+x*z+S*U,c[13]=g*C+v*Et+x*J+S*j,c[2]=E*I+b*P+y*Y+_*et,c[6]=E*B+b*ut+y*tt+_*mt,c[10]=E*ft+b*dt+y*z+_*U,c[14]=E*C+b*Et+y*J+_*j,c[3]=O*I+R*P+N*Y+G*et,c[7]=O*B+R*ut+N*tt+G*mt,c[11]=O*ft+R*dt+N*z+G*U,c[15]=O*C+R*Et+N*J+G*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],f=t[5],p=t[9],m=t[13],g=t[2],v=t[6],x=t[10],S=t[14],E=t[3],b=t[7],y=t[11],_=t[15];return E*(+c*p*v-l*m*v-c*f*x+s*m*x+l*f*S-s*p*S)+b*(+i*p*S-i*m*x+c*d*x-l*d*S+l*m*g-c*p*g)+y*(+i*m*v-i*f*S-c*d*v+s*d*S+c*f*g-s*m*g)+_*(-l*f*g-i*p*v+i*f*x+l*d*v-s*d*x+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],f=t[5],p=t[6],m=t[7],g=t[8],v=t[9],x=t[10],S=t[11],E=t[12],b=t[13],y=t[14],_=t[15],O=v*y*m-b*x*m+b*p*S-f*y*S-v*p*_+f*x*_,R=E*x*m-g*y*m-E*p*S+d*y*S+g*p*_-d*x*_,N=g*b*m-E*v*m+E*f*S-d*b*S-g*f*_+d*v*_,G=E*v*p-g*b*p-E*f*x+d*b*x+g*f*y-d*v*y,I=i*O+s*R+l*N+c*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=O*B,t[1]=(b*x*c-v*y*c-b*l*S+s*y*S+v*l*_-s*x*_)*B,t[2]=(f*y*c-b*p*c+b*l*m-s*y*m-f*l*_+s*p*_)*B,t[3]=(v*p*c-f*x*c-v*l*m+s*x*m+f*l*S-s*p*S)*B,t[4]=R*B,t[5]=(g*y*c-E*x*c+E*l*S-i*y*S-g*l*_+i*x*_)*B,t[6]=(E*p*c-d*y*c-E*l*m+i*y*m+d*l*_-i*p*_)*B,t[7]=(d*x*c-g*p*c+g*l*m-i*x*m-d*l*S+i*p*S)*B,t[8]=N*B,t[9]=(E*v*c-g*b*c-E*s*S+i*b*S+g*s*_-i*v*_)*B,t[10]=(d*b*c-E*f*c+E*s*m-i*b*m-d*s*_+i*f*_)*B,t[11]=(g*f*c-d*v*c-g*s*m+i*v*m+d*s*S-i*f*S)*B,t[12]=G*B,t[13]=(g*b*l-E*v*l+E*s*x-i*b*x-g*s*y+i*v*y)*B,t[14]=(E*f*l-d*b*l-E*s*p+i*b*p+d*s*y-i*f*y)*B,t[15]=(d*v*l-g*f*l+g*s*p-i*v*p-d*s*x+i*f*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,f=t.y,p=t.z,m=c*d,g=c*f;return this.set(m*d+s,m*f-l*p,m*p+l*f,0,m*f+l*p,g*f+s,g*p-l*d,0,m*p-l*f,g*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,f=i._z,p=i._w,m=c+c,g=d+d,v=f+f,x=c*m,S=c*g,E=c*v,b=d*g,y=d*v,_=f*v,O=p*m,R=p*g,N=p*v,G=s.x,I=s.y,B=s.z;return l[0]=(1-(b+_))*G,l[1]=(S+N)*G,l[2]=(E-R)*G,l[3]=0,l[4]=(S-N)*I,l[5]=(1-(x+_))*I,l[6]=(y+O)*I,l[7]=0,l[8]=(E+R)*B,l[9]=(y-O)*B,l[10]=(1-(x+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=cr.set(l[0],l[1],l[2]).length();const d=cr.set(l[4],l[5],l[6]).length(),f=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],gi.copy(this);const m=1/c,g=1/d,v=1/f;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=g,gi.elements[5]*=g,gi.elements[6]*=g,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,i.setFromRotationMatrix(gi),s.x=c,s.y=d,s.z=f,this}makePerspective(t,i,s,l,c,d,f=na){const p=this.elements,m=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let S,E;if(f===na)S=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(f===Uc)S=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,f=na){const p=this.elements,m=1/(i-t),g=1/(s-l),v=1/(d-c),x=(i+t)*m,S=(s+l)*g;let E,b;if(f===na)E=(d+c)*v,b=-2*v;else if(f===Uc)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cr=new q,gi=new nn,jS=new q(0,0,0),WS=new q(1,1,1),Ua=new q,rc=new q,Wn=new q,b0=new nn,T0=new vs;class Fc{constructor(t=0,i=0,s=0,l=Fc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(yn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-yn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T0.setFromEuler(this),this.setFromQuaternion(T0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fc.DEFAULT_ORDER="XYZ";let qh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qS=0;const A0=new q,ur=new vs,Ki=new nn,oc=new q,Oo=new q,YS=new q,ZS=new vs,R0=new q(1,0,0),w0=new q(0,1,0),C0=new q(0,0,1),KS={type:"added"},QS={type:"removed"};class Mn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new q,i=new Fc,s=new vs,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new Ee}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(R0,t)}rotateY(t){return this.rotateOnAxis(w0,t)}rotateZ(t){return this.rotateOnAxis(C0,t)}translateOnAxis(t,i){return A0.copy(t).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R0,t)}translateY(t){return this.translateOnAxis(w0,t)}translateZ(t){return this.translateOnAxis(C0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Oo,oc,this.up):Ki.lookAt(oc,Oo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(Ki),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(KS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QS)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,YS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,ZS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const c=i[s];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++){const f=l[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(t.materials,this.material[p]));l.material=f}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(c(t.animations,p))}}if(i){const f=d(t.geometries),p=d(t.materials),m=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),S=d(t.animations),E=d(t.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new q,Qi=new q,fh=new q,Ji=new q,fr=new q,hr=new q,L0=new q,hh=new q,dh=new q,ph=new q;let lc=!1;class vi{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),_i.subVectors(t,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){_i.subVectors(l,i),Qi.subVectors(s,i),fh.subVectors(t,i);const d=_i.dot(_i),f=_i.dot(Qi),p=_i.dot(fh),m=Qi.dot(Qi),g=Qi.dot(fh),v=d*m-f*f;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(m*p-f*g)*x,E=(d*g-f*p)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(t,i,s,l,c,d,f,p){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),this.getInterpolation(t,i,s,l,c,d,f,p)}static getInterpolation(t,i,s,l,c,d,f,p){return this.getBarycoord(t,i,s,l,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ji.x),p.addScaledVector(d,Ji.y),p.addScaledVector(f,Ji.z),p)}static isFrontFacing(t,i,s,l){return _i.subVectors(s,i),Qi.subVectors(t,i),_i.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,s,l,c){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,f;fr.subVectors(l,s),hr.subVectors(c,s),hh.subVectors(t,s);const p=fr.dot(hh),m=hr.dot(hh);if(p<=0&&m<=0)return i.copy(s);dh.subVectors(t,l);const g=fr.dot(dh),v=hr.dot(dh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(s).addScaledVector(fr,d);ph.subVectors(t,c);const S=fr.dot(ph),E=hr.dot(ph);if(E>=0&&S<=E)return i.copy(c);const b=S*m-p*E;if(b<=0&&m>=0&&E<=0)return f=m/(m-E),i.copy(s).addScaledVector(hr,f);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return L0.subVectors(c,l),f=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(L0,f);const _=1/(y+b+x);return d=b*_,f=x*_,i.copy(s).addScaledVector(fr,d).addScaledVector(hr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},cc={h:0,s:0,l:0};function mh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=Wh(t,1),i=yn(i,0,1),s=yn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=mh(d,c,t+1/3),this.g=mh(d,c,t),this.b=mh(d,c,t-1/3)}return Ie.toWorkingColorSpace(this,l),this}setStyle(t,i=xn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xn){const s=X_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=ih(t.r),this.g=ih(t.g),this.b=ih(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Ie.fromWorkingColorSpace(Cn.copy(this),t),Math.round(yn(Cn.r*255,0,255))*65536+Math.round(yn(Cn.g*255,0,255))*256+Math.round(yn(Cn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(s,l,c),f=Math.min(s,l,c);let p,m;const g=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=g<=.5?v/(d+f):v/(2-d-f),d){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=xn){Ie.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,l=Cn.b;return t!==xn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(cc);const s=Io(Na.h,cc.h,i),l=Io(Na.s,cc.s,i),c=Io(Na.l,cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ae;Ae.NAMES=X_;let JS=0;class Ss extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ar,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Uh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dh&&(s.blendSrc=this.blendSrc),this.blendDst!==Uh&&(s.blendDst=this.blendDst),this.blendEquation!==hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class j_ extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new q,uc=new qt;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=_0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(t),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Sr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Dn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Sr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Sr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Sr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Sr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),s=Dn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),s=Dn(s,this.array),l=Dn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),s=Dn(s,this.array),l=Dn(l,this.array),c=Dn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_0&&(t.usage=this.usage),t}}class W_ extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class q_ extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Qe extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let $S=0;const si=new nn,gh=new Mn,dr=new q,qn=new Wo,Po=new Wo,vn=new q;class Zn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H_(t)?q_:W_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Ee().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,s){return si.makeTranslation(t,i,s),this.applyMatrix4(si),this}scale(t,i,s){return si.makeScale(t,i,s),this.applyMatrix4(si),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Qe(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];qn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const f=i[c];Po.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(qn.min,Po.min),qn.expandByPoint(vn),vn.addVectors(qn.max,Po.max),qn.expandByPoint(vn)):(qn.expandByPoint(Po.min),qn.expandByPoint(Po.max))}qn.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const f=i[c],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)vn.fromBufferAttribute(f,m),p&&(dr.fromBufferAttribute(t,m),vn.add(dr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,l=i.position.array,c=i.normal.array,d=i.uv.array,f=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let P=0;P<f;P++)m[P]=new q,g[P]=new q;const v=new q,x=new q,S=new q,E=new qt,b=new qt,y=new qt,_=new q,O=new q;function R(P,ut,dt){v.fromArray(l,P*3),x.fromArray(l,ut*3),S.fromArray(l,dt*3),E.fromArray(d,P*2),b.fromArray(d,ut*2),y.fromArray(d,dt*2),x.sub(v),S.sub(v),b.sub(E),y.sub(E);const Et=1/(b.x*y.y-y.x*b.y);isFinite(Et)&&(_.copy(x).multiplyScalar(y.y).addScaledVector(S,-b.y).multiplyScalar(Et),O.copy(S).multiplyScalar(b.x).addScaledVector(x,-y.x).multiplyScalar(Et),m[P].add(_),m[ut].add(_),m[dt].add(_),g[P].add(O),g[ut].add(O),g[dt].add(O))}let N=this.groups;N.length===0&&(N=[{start:0,count:s.length}]);for(let P=0,ut=N.length;P<ut;++P){const dt=N[P],Et=dt.start,Y=dt.count;for(let tt=Et,z=Et+Y;tt<z;tt+=3)R(s[tt+0],s[tt+1],s[tt+2])}const G=new q,I=new q,B=new q,ft=new q;function C(P){B.fromArray(c,P*3),ft.copy(B);const ut=m[P];G.copy(ut),G.sub(B.multiplyScalar(B.dot(ut))).normalize(),I.crossVectors(ft,ut);const Et=I.dot(g[P])<0?-1:1;p[P*4]=G.x,p[P*4+1]=G.y,p[P*4+2]=G.z,p[P*4+3]=Et}for(let P=0,ut=N.length;P<ut;++P){const dt=N[P],Et=dt.start,Y=dt.count;for(let tt=Et,z=Et+Y;tt<z;tt+=3)C(s[tt+0]),C(s[tt+1]),C(s[tt+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new q,c=new q,d=new q,f=new q,p=new q,m=new q,g=new q,v=new q;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),b=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,y),f.add(g),p.add(g),m.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(f,p){const m=f.array,g=f.itemSize,v=f.normalized,x=new m.constructor(p.length*g);let S=0,E=0;for(let b=0,y=p.length;b<y;b++){f.isInterleavedBufferAttribute?S=p[b]*f.data.stride+f.offset:S=p[b]*g;for(let _=0;_<g;_++)x[E++]=m[S++]}return new Li(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,s=this.index.array,l=this.attributes;for(const f in l){const p=l[f],m=t(p,s);i.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=t(x,s);p.push(S)}i.morphAttributes[f]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new nn,cs=new Ic,fc=new Bc,U0=new q,pr=new q,mr=new q,gr=new q,_h=new q,hc=new q,dc=new qt,pc=new qt,mc=new qt,N0=new q,O0=new q,P0=new q,gc=new q,_c=new q;class Ci extends Mn{constructor(t=new Zn,i=new j_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(c&&f){hc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=f[p],v=c[p];g!==0&&(_h.fromBufferAttribute(v,t),d?hc.addScaledVector(_h,g):hc.addScaledVector(_h.sub(i),g))}i.add(hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(c),cs.copy(t.ray).recast(t.near),!(fc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(fc,U0)===null||cs.origin.distanceToSquared(U0)>(t.far-t.near)**2))&&(D0.copy(c).invert(),cs.copy(t.ray).applyMatrix4(D0),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,cs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=d[y.materialIndex],O=Math.max(y.start,S.start),R=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let N=O,G=R;N<G;N+=3){const I=f.getX(N),B=f.getX(N+1),ft=f.getX(N+2);l=vc(this,_,t,s,m,g,v,I,B,ft),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let y=E,_=b;y<_;y+=3){const O=f.getX(y),R=f.getX(y+1),N=f.getX(y+2);l=vc(this,d,t,s,m,g,v,O,R,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=d[y.materialIndex],O=Math.max(y.start,S.start),R=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let N=O,G=R;N<G;N+=3){const I=N,B=N+1,ft=N+2;l=vc(this,_,t,s,m,g,v,I,B,ft),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let y=E,_=b;y<_;y+=3){const O=y,R=y+1,N=y+2;l=vc(this,d,t,s,m,g,v,O,R,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function tM(r,t,i,s,l,c,d,f){let p;if(t.side===In?p=s.intersectTriangle(d,c,l,!0,f):p=s.intersectTriangle(l,c,d,t.side===Ga,f),p===null)return null;_c.copy(f),_c.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(_c);return m<i.near||m>i.far?null:{distance:m,point:_c.clone(),object:r}}function vc(r,t,i,s,l,c,d,f,p,m){r.getVertexPosition(f,pr),r.getVertexPosition(p,mr),r.getVertexPosition(m,gr);const g=tM(r,t,i,s,pr,mr,gr,gc);if(g){l&&(dc.fromBufferAttribute(l,f),pc.fromBufferAttribute(l,p),mc.fromBufferAttribute(l,m),g.uv=vi.getInterpolation(gc,pr,mr,gr,dc,pc,mc,new qt)),c&&(dc.fromBufferAttribute(c,f),pc.fromBufferAttribute(c,p),mc.fromBufferAttribute(c,m),g.uv1=vi.getInterpolation(gc,pr,mr,gr,dc,pc,mc,new qt),g.uv2=g.uv1),d&&(N0.fromBufferAttribute(d,f),O0.fromBufferAttribute(d,p),P0.fromBufferAttribute(d,m),g.normal=vi.getInterpolation(gc,pr,mr,gr,N0,O0,P0,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:m,normal:new q,materialIndex:0};vi.getNormal(pr,mr,gr,v.normal),g.face=v}return g}class Nr extends Zn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const f=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(v,2));function E(b,y,_,O,R,N,G,I,B,ft,C){const P=N/B,ut=G/ft,dt=N/2,Et=G/2,Y=I/2,tt=B+1,z=ft+1;let J=0,et=0;const mt=new q;for(let U=0;U<z;U++){const j=U*ut-Et;for(let nt=0;nt<tt;nt++){const k=nt*P-dt;mt[b]=k*O,mt[y]=j*R,mt[_]=Y,m.push(mt.x,mt.y,mt.z),mt[b]=0,mt[y]=0,mt[_]=I>0?1:-1,g.push(mt.x,mt.y,mt.z),v.push(nt/B),v.push(1-U/ft),J+=1}}for(let U=0;U<ft;U++)for(let j=0;j<B;j++){const nt=x+j+tt*U,k=x+j+tt*(U+1),ot=x+(j+1)+tt*(U+1),St=x+(j+1)+tt*U;p.push(nt,k,St),p.push(k,ot,St),et+=6}f.addGroup(S,et,C),S+=et,x+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Un(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function eM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Y_(r){return r.getRenderTarget()===null?r.outputColorSpace:Ie.workingColorSpace}const nM={clone:Dr,merge:Un};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=eM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Z_ extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class oi extends Z_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class sM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new oi(_r,vr,t,i);c.layers=this.layers,this.add(c);const d=new oi(_r,vr,t,i);d.layers=this.layers,this.add(d);const f=new oi(_r,vr,t,i);f.layers=this.layers,this.add(f);const p=new oi(_r,vr,t,i);p.layers=this.layers,this.add(p);const m=new oi(_r,vr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,f,p]=i;for(const m of i)this.remove(m);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Uc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,f),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class K_ extends Yn{constructor(t,i,s,l,c,d,f,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:wr,super(t,i,s,l,c,d,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rM extends _s{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gs?xn:li),this.texture=new K_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ri}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Nr(5,5,5),c=new xs({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:Ia});c.uniforms.tEquirect.value=i;const d=new Ci(l,c),f=i.minFilter;return i.minFilter===ko&&(i.minFilter=ri),new sM(1,10,this).update(t,d),i.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}const vh=new q,oM=new q,lM=new Ee;class Pa{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vh.subVectors(s,i).cross(oM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||lM.getNormalMatrix(t),l=this.coplanarPoint(vh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Bc,xc=new q;class Yh{constructor(t=new Pa,i=new Pa,s=new Pa,l=new Pa,c=new Pa,d=new Pa){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(s),f[3].copy(l),f[4].copy(c),f[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na){const s=this.planes,l=t.elements,c=l[0],d=l[1],f=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],S=l[8],E=l[9],b=l[10],y=l[11],_=l[12],O=l[13],R=l[14],N=l[15];if(s[0].setComponents(p-c,x-m,y-S,N-_).normalize(),s[1].setComponents(p+c,x+m,y+S,N+_).normalize(),s[2].setComponents(p+d,x+g,y+E,N+O).normalize(),s[3].setComponents(p-d,x-g,y-E,N-O).normalize(),s[4].setComponents(p-f,x-v,y-b,N-R).normalize(),i===na)s[5].setComponents(p+f,x+v,y+b,N+R).normalize();else if(i===Uc)s[5].setComponents(f,v,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q_(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cM(r,t){const i=t.isWebGL2,s=new WeakMap;function l(m,g){const v=m.array,x=m.usage,S=v.byteLength,E=r.createBuffer();r.bindBuffer(g,E),r.bufferData(g,v,x),m.onUploadCallback();let b;if(v instanceof Float32Array)b=r.FLOAT;else if(v instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(v instanceof Int16Array)b=r.SHORT;else if(v instanceof Uint32Array)b=r.UNSIGNED_INT;else if(v instanceof Int32Array)b=r.INT;else if(v instanceof Int8Array)b=r.BYTE;else if(v instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:b,bytesPerElement:v.BYTES_PER_ELEMENT,version:m.version,size:S}}function c(m,g,v){const x=g.array,S=g._updateRange,E=g.updateRanges;if(r.bindBuffer(v,m),S.count===-1&&E.length===0&&r.bufferSubData(v,0,x),E.length!==0){for(let b=0,y=E.length;b<y;b++){const _=E[b];i?r.bufferSubData(v,_.start*x.BYTES_PER_ELEMENT,x,_.start,_.count):r.bufferSubData(v,_.start*x.BYTES_PER_ELEMENT,x.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}S.count!==-1&&(i?r.bufferSubData(v,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):r.bufferSubData(v,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const x=s.get(m);(!x||x.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const v=s.get(m);if(v===void 0)s.set(m,l(m,g));else if(v.version<m.version){if(v.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(v.buffer,m,g),v.version=m.version}}return{get:d,remove:f,update:p}}class Hc extends Zn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,f=Math.floor(s),p=Math.floor(l),m=f+1,g=p+1,v=t/f,x=i/p,S=[],E=[],b=[],y=[];for(let _=0;_<g;_++){const O=_*x-d;for(let R=0;R<m;R++){const N=R*v-c;E.push(N,-O,0),b.push(0,0,1),y.push(R/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<f;O++){const R=O+m*_,N=O+m*(_+1),G=O+1+m*(_+1),I=O+1+m*_;S.push(R,N,I),S.push(N,G,I)}this.setIndex(S),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,TE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ab=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:uM,alphahash_pars_fragment:fM,alphamap_fragment:hM,alphamap_pars_fragment:dM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:_M,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:yM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:bM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:wM,color_fragment:CM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:UM,common:NM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:PM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:IM,emissivemap_pars_fragment:FM,colorspace_fragment:HM,colorspace_pars_fragment:GM,envmap_fragment:VM,envmap_common_pars_fragment:kM,envmap_pars_fragment:XM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:iE,envmap_vertex:WM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:ZM,fog_pars_fragment:KM,gradientmap_pars_fragment:QM,lightmap_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:tE,lights_lambert_pars_fragment:eE,lights_pars_begin:nE,lights_toon_fragment:aE,lights_toon_pars_fragment:sE,lights_phong_fragment:rE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphcolor_vertex:EE,morphnormal_vertex:bE,morphtarget_pars_vertex:TE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:wE,normal_pars_fragment:CE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:zE,opaque_fragment:BE,packing:IE,premultiplied_alpha_fragment:FE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:WE,shadowmap_vertex:qE,shadowmask_pars_fragment:YE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:tb,tonemapping_fragment:eb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:ab,uv_pars_fragment:sb,uv_pars_vertex:rb,uv_vertex:ob,worldpos_vertex:lb,background_vert:cb,background_frag:ub,backgroundCube_vert:fb,backgroundCube_frag:hb,cube_vert:db,cube_frag:pb,depth_vert:mb,depth_frag:gb,distanceRGBA_vert:_b,distanceRGBA_frag:vb,equirect_vert:xb,equirect_frag:yb,linedashed_vert:Sb,linedashed_frag:Mb,meshbasic_vert:Eb,meshbasic_frag:bb,meshlambert_vert:Tb,meshlambert_frag:Ab,meshmatcap_vert:Rb,meshmatcap_frag:wb,meshnormal_vert:Cb,meshnormal_frag:Lb,meshphong_vert:Db,meshphong_frag:Ub,meshphysical_vert:Nb,meshphysical_frag:Ob,meshtoon_vert:Pb,meshtoon_frag:zb,points_vert:Bb,points_frag:Ib,shadow_vert:Fb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Vb},Bt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},wi={basic:{uniforms:Un([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Un([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Un([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Un([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Un([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Un([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Un([Bt.points,Bt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Un([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Un([Bt.common,Bt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Un([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Un([Bt.sprite,Bt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Un([Bt.common,Bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Un([Bt.lights,Bt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};wi.physical={uniforms:Un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const yc={r:0,b:0,g:0};function kb(r,t,i,s,l,c,d){const f=new Ae(0);let p=c===!0?0:1,m,g,v=null,x=0,S=null;function E(y,_){let O=!1,R=_.isScene===!0?_.background:null;R&&R.isTexture&&(R=(_.backgroundBlurriness>0?i:t).get(R)),R===null?b(f,p):R&&R.isColor&&(b(R,1),O=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||O)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Pc)?(g===void 0&&(g=new Ci(new Nr(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:Dr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ie.getTransfer(R.colorSpace)!==qe,(v!==R||x!==R.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=R,x=R.version,S=r.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ci(new Hc(2,2),new xs({name:"BackgroundMaterial",uniforms:Dr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ie.getTransfer(R.colorSpace)!==qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,S=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function b(y,_){y.getRGB(yc,Y_(r)),s.buffers.color.setClear(yc.r,yc.g,yc.b,_,d)}return{getClearColor:function(){return f},setClearColor:function(y,_=1){f.set(y),p=_,b(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,b(f,p)},render:E}}function Xb(r,t,i,s){const l=r.getParameter(r.MAX_VERTEX_ATTRIBS),c=s.isWebGL2?null:t.get("OES_vertex_array_object"),d=s.isWebGL2||c!==null,f={},p=y(null);let m=p,g=!1;function v(Y,tt,z,J,et){let mt=!1;if(d){const U=b(J,z,tt);m!==U&&(m=U,S(m.object)),mt=_(Y,J,z,et),mt&&O(Y,J,z,et)}else{const U=tt.wireframe===!0;(m.geometry!==J.id||m.program!==z.id||m.wireframe!==U)&&(m.geometry=J.id,m.program=z.id,m.wireframe=U,mt=!0)}et!==null&&i.update(et,r.ELEMENT_ARRAY_BUFFER),(mt||g)&&(g=!1,ft(Y,tt,z,J),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.get(et).buffer))}function x(){return s.isWebGL2?r.createVertexArray():c.createVertexArrayOES()}function S(Y){return s.isWebGL2?r.bindVertexArray(Y):c.bindVertexArrayOES(Y)}function E(Y){return s.isWebGL2?r.deleteVertexArray(Y):c.deleteVertexArrayOES(Y)}function b(Y,tt,z){const J=z.wireframe===!0;let et=f[Y.id];et===void 0&&(et={},f[Y.id]=et);let mt=et[tt.id];mt===void 0&&(mt={},et[tt.id]=mt);let U=mt[J];return U===void 0&&(U=y(x()),mt[J]=U),U}function y(Y){const tt=[],z=[],J=[];for(let et=0;et<l;et++)tt[et]=0,z[et]=0,J[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:z,attributeDivisors:J,object:Y,attributes:{},index:null}}function _(Y,tt,z,J){const et=m.attributes,mt=tt.attributes;let U=0;const j=z.getAttributes();for(const nt in j)if(j[nt].location>=0){const ot=et[nt];let St=mt[nt];if(St===void 0&&(nt==="instanceMatrix"&&Y.instanceMatrix&&(St=Y.instanceMatrix),nt==="instanceColor"&&Y.instanceColor&&(St=Y.instanceColor)),ot===void 0||ot.attribute!==St||St&&ot.data!==St.data)return!0;U++}return m.attributesNum!==U||m.index!==J}function O(Y,tt,z,J){const et={},mt=tt.attributes;let U=0;const j=z.getAttributes();for(const nt in j)if(j[nt].location>=0){let ot=mt[nt];ot===void 0&&(nt==="instanceMatrix"&&Y.instanceMatrix&&(ot=Y.instanceMatrix),nt==="instanceColor"&&Y.instanceColor&&(ot=Y.instanceColor));const St={};St.attribute=ot,ot&&ot.data&&(St.data=ot.data),et[nt]=St,U++}m.attributes=et,m.attributesNum=U,m.index=J}function R(){const Y=m.newAttributes;for(let tt=0,z=Y.length;tt<z;tt++)Y[tt]=0}function N(Y){G(Y,0)}function G(Y,tt){const z=m.newAttributes,J=m.enabledAttributes,et=m.attributeDivisors;z[Y]=1,J[Y]===0&&(r.enableVertexAttribArray(Y),J[Y]=1),et[Y]!==tt&&((s.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,tt),et[Y]=tt)}function I(){const Y=m.newAttributes,tt=m.enabledAttributes;for(let z=0,J=tt.length;z<J;z++)tt[z]!==Y[z]&&(r.disableVertexAttribArray(z),tt[z]=0)}function B(Y,tt,z,J,et,mt,U){U===!0?r.vertexAttribIPointer(Y,tt,z,et,mt):r.vertexAttribPointer(Y,tt,z,J,et,mt)}function ft(Y,tt,z,J){if(s.isWebGL2===!1&&(Y.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();const et=J.attributes,mt=z.getAttributes(),U=tt.defaultAttributeValues;for(const j in mt){const nt=mt[j];if(nt.location>=0){let k=et[j];if(k===void 0&&(j==="instanceMatrix"&&Y.instanceMatrix&&(k=Y.instanceMatrix),j==="instanceColor"&&Y.instanceColor&&(k=Y.instanceColor)),k!==void 0){const ot=k.normalized,St=k.itemSize,xt=i.get(k);if(xt===void 0)continue;const zt=xt.buffer,It=xt.type,Xt=xt.bytesPerElement,Zt=s.isWebGL2===!0&&(It===r.INT||It===r.UNSIGNED_INT||k.gpuType===C_);if(k.isInterleavedBufferAttribute){const ee=k.data,lt=ee.stride,Fe=k.offset;if(ee.isInstancedInterleavedBuffer){for(let Ht=0;Ht<nt.locationSize;Ht++)G(nt.location+Ht,ee.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ht=0;Ht<nt.locationSize;Ht++)N(nt.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let Ht=0;Ht<nt.locationSize;Ht++)B(nt.location+Ht,St/nt.locationSize,It,ot,lt*Xt,(Fe+St/nt.locationSize*Ht)*Xt,Zt)}else{if(k.isInstancedBufferAttribute){for(let ee=0;ee<nt.locationSize;ee++)G(nt.location+ee,k.meshPerAttribute);Y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ee=0;ee<nt.locationSize;ee++)N(nt.location+ee);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let ee=0;ee<nt.locationSize;ee++)B(nt.location+ee,St/nt.locationSize,It,ot,St*Xt,St/nt.locationSize*ee*Xt,Zt)}}else if(U!==void 0){const ot=U[j];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(nt.location,ot);break;case 3:r.vertexAttrib3fv(nt.location,ot);break;case 4:r.vertexAttrib4fv(nt.location,ot);break;default:r.vertexAttrib1fv(nt.location,ot)}}}}I()}function C(){dt();for(const Y in f){const tt=f[Y];for(const z in tt){const J=tt[z];for(const et in J)E(J[et].object),delete J[et];delete tt[z]}delete f[Y]}}function P(Y){if(f[Y.id]===void 0)return;const tt=f[Y.id];for(const z in tt){const J=tt[z];for(const et in J)E(J[et].object),delete J[et];delete tt[z]}delete f[Y.id]}function ut(Y){for(const tt in f){const z=f[tt];if(z[Y.id]===void 0)continue;const J=z[Y.id];for(const et in J)E(J[et].object),delete J[et];delete z[Y.id]}}function dt(){Et(),g=!0,m!==p&&(m=p,S(m.object))}function Et(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:v,reset:dt,resetDefaultState:Et,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:ut,initAttributes:R,enableAttribute:N,disableUnusedAttributes:I}}function jb(r,t,i,s){const l=s.isWebGL2;let c;function d(g){c=g}function f(g,v){r.drawArrays(c,g,v),i.update(v,c,1)}function p(g,v,x){if(x===0)return;let S,E;if(l)S=r,E="drawArraysInstanced";else if(S=t.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](c,g,v,x),i.update(v,c,x)}function m(g,v,x){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<x;E++)this.render(g[E],v[E]);else{S.multiDrawArraysWEBGL(c,g,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=v[b];i.update(E,c,1)}}this.setMode=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m}function Wb(r,t,i){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let f=i.precision!==void 0?i.precision:"highp";const p=c(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=d||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,N=d||t.has("OES_texture_float"),G=R&&N,I=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:c,precision:f,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:O,vertexTextures:R,floatFragmentTextures:N,floatVertexTextures:G,maxSamples:I}}function qb(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Pa,f=new Ee,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||l;return l=x,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const O=c?0:s,R=O*4;let N=_.clippingState||null;p.value=N,N=g(E,x,R,S);for(let G=0;G!==R;++G)N[G]=i[G];_.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,S,E){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=p.value,E!==!0||y===null){const _=S+b*4,O=x.matrixWorldInverse;f.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let R=0,N=S;R!==b;++R,N+=4)d.copy(v[R]).applyMatrix4(O,f),d.normal.toArray(y,N),y[N+3]=d.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function Yb(r){let t=new WeakMap;function i(d,f){return f===Nh?d.mapping=wr:f===Oh&&(d.mapping=Cr),d}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Nh||f===Oh)if(t.has(d)){const p=t.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new rM(p.height/2);return m.fromEquirectangularTexture(r,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class J_ extends Z_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,f=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Mr=4,z0=[.125,.215,.35,.446,.526,.582],ds=20,xh=new J_,B0=new Ae;let yh=null,Sh=0,Mh=0;const fs=(1+Math.sqrt(5))/2,xr=1/fs,I0=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,fs,xr),new q(0,fs,-xr),new q(xr,0,fs),new q(-xr,0,fs),new q(fs,xr,0),new q(-fs,xr,0)];class F0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){yh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,Sh,Mh),t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Xo,format:yi,colorSpace:ia,depthBuffer:!1},l=H0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zb(c)),this._blurMaterial=Kb(c,t,i)}return l}_compileMaterial(t){const i=new Ci(this._lodPlanes[0],t);this._renderer.compile(i,xh)}_sceneToCubeUV(t,i,s,l){const f=new oi(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(B0),g.toneMapping=Fa,g.autoClear=!1;const S=new j_({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new Ci(new Nr,S);let b=!1;const y=t.background;y?y.isColor&&(S.color.copy(y),t.background=null,b=!0):(S.color.copy(B0),b=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(f.up.set(0,p[_],0),f.lookAt(m[_],0,0)):O===1?(f.up.set(0,0,p[_]),f.lookAt(0,m[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,m[_]));const R=this._cubeSize;Sc(l,O*R,_>2?R:0,R,R),g.setRenderTarget(l),b&&g.render(E,f),g.render(t,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===wr||t.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Ci(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;Sc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,xh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=I0[(l-1)%I0.length];this._blur(t,l-1,l,c,d)}i.autoClear=s}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ci(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ds-1),b=c/E,y=isFinite(c)?1+Math.floor(g*b):ds;y>ds&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const _=[];let O=0;for(let B=0;B<ds;++B){const ft=B/b,C=Math.exp(-ft*ft/2);_.push(C),B===0?O+=C:B<y&&(O+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=E,x.mipInt.value=R-s;const N=this._sizeLods[l],G=3*N*(l>R-Mr?l-R+Mr:0),I=4*(this._cubeSize-N);Sc(i,G,I,3*N,2*N),p.setRenderTarget(i),p.render(v,xh)}}function Zb(r){const t=[],i=[],s=[];let l=r;const c=r-Mr+1+z0.length;for(let d=0;d<c;d++){const f=Math.pow(2,l);i.push(f);let p=1/f;d>r-Mr?p=z0[d-r+Mr-1]:d===0&&(p=0),s.push(p);const m=1/(f-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,b=3,y=2,_=1,O=new Float32Array(b*E*S),R=new Float32Array(y*E*S),N=new Float32Array(_*E*S);for(let I=0;I<S;I++){const B=I%3*2/3-1,ft=I>2?0:-1,C=[B,ft,0,B+2/3,ft,0,B+2/3,ft+1,0,B,ft,0,B+2/3,ft+1,0,B,ft+1,0];O.set(C,b*E*I),R.set(x,y*E*I);const P=[I,I,I,I,I,I];N.set(P,_*E*I)}const G=new Zn;G.setAttribute("position",new Li(O,b)),G.setAttribute("uv",new Li(R,y)),G.setAttribute("faceIndex",new Li(N,_)),t.push(G),l>Mr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function H0(r,t,i){const s=new _s(r,t,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Kb(r,t,i){const s=new Float32Array(ds),l=new q(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function G0(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function V0(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qb(r){let t=new WeakMap,i=null;function s(f){if(f&&f.isTexture){const p=f.mapping,m=p===Nh||p===Oh,g=p===wr||p===Cr;if(m||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let v=t.get(f);return i===null&&(i=new F0(r)),v=m?i.fromEquirectangular(f,v):i.fromCubemap(f,v),t.set(f,v),v.texture}else{if(t.has(f))return t.get(f).texture;{const v=f.image;if(m&&v&&v.height>0||g&&v&&l(v)){i===null&&(i=new F0(r));const x=m?i.fromEquirectangular(f):i.fromCubemap(f);return t.set(f,x),f.addEventListener("dispose",c),x.texture}else return null}}}return f}function l(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Jb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function $b(r,t,i,s){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);for(const E in x.morphAttributes){const b=x.morphAttributes[E];for(let y=0,_=b.length;y<_;y++)t.remove(b[y])}x.removeEventListener("dispose",d),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function f(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const E in x)t.update(x[E],r.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const b=S[E];for(let y=0,_=b.length;y<_;y++)t.update(b[y],r.ARRAY_BUFFER)}}function m(v){const x=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const O=S.array;b=S.version;for(let R=0,N=O.length;R<N;R+=3){const G=O[R+0],I=O[R+1],B=O[R+2];x.push(G,I,I,B,B,G)}}else if(E!==void 0){const O=E.array;b=E.version;for(let R=0,N=O.length/3-1;R<N;R+=3){const G=R+0,I=R+1,B=R+2;x.push(G,I,I,B,B,G)}}else return;const y=new(H_(x)?q_:W_)(x,1);y.version=b;const _=c.get(v);_&&t.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function t1(r,t,i,s){const l=s.isWebGL2;let c;function d(S){c=S}let f,p;function m(S){f=S.type,p=S.bytesPerElement}function g(S,E){r.drawElements(c,E,f,S*p),i.update(E,c,1)}function v(S,E,b){if(b===0)return;let y,_;if(l)y=r,_="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](c,E,f,S*p,b),i.update(E,c,b)}function x(S,E,b){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<b;_++)this.render(S[_]/p,E[_]);else{y.multiDrawElementsWEBGL(c,E,0,f,S,0,b);let _=0;for(let O=0;O<b;O++)_+=E[O];i.update(_,c,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=v,this.renderMultiDraw=x}function e1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,f){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=f*(c/3);break;case r.LINES:i.lines+=f*(c/2);break;case r.LINE_STRIP:i.lines+=f*(c-1);break;case r.LINE_LOOP:i.lines+=f*c;break;case r.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function n1(r,t){return r[0]-t[0]}function i1(r,t){return Math.abs(t[1])-Math.abs(r[1])}function a1(r,t,i){const s={},l=new Float32Array(8),c=new WeakMap,d=new Sn,f=[];for(let m=0;m<8;m++)f[m]=[m,0];function p(m,g,v){const x=m.morphTargetInfluences;if(t.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=E!==void 0?E.length:0;let y=c.get(g);if(y===void 0||y.count!==b){let tt=function(){Et.dispose(),c.delete(g),g.removeEventListener("dispose",tt)};var S=tt;y!==void 0&&y.texture.dispose();const R=g.morphAttributes.position!==void 0,N=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],B=g.morphAttributes.normal||[],ft=g.morphAttributes.color||[];let C=0;R===!0&&(C=1),N===!0&&(C=2),G===!0&&(C=3);let P=g.attributes.position.count*C,ut=1;P>t.maxTextureSize&&(ut=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const dt=new Float32Array(P*ut*4*b),Et=new k_(dt,P,ut,b);Et.type=Ba,Et.needsUpdate=!0;const Y=C*4;for(let z=0;z<b;z++){const J=I[z],et=B[z],mt=ft[z],U=P*ut*4*z;for(let j=0;j<J.count;j++){const nt=j*Y;R===!0&&(d.fromBufferAttribute(J,j),dt[U+nt+0]=d.x,dt[U+nt+1]=d.y,dt[U+nt+2]=d.z,dt[U+nt+3]=0),N===!0&&(d.fromBufferAttribute(et,j),dt[U+nt+4]=d.x,dt[U+nt+5]=d.y,dt[U+nt+6]=d.z,dt[U+nt+7]=0),G===!0&&(d.fromBufferAttribute(mt,j),dt[U+nt+8]=d.x,dt[U+nt+9]=d.y,dt[U+nt+10]=d.z,dt[U+nt+11]=mt.itemSize===4?d.w:1)}}y={count:b,texture:Et,size:new qt(P,ut)},c.set(g,y),g.addEventListener("dispose",tt)}let _=0;for(let R=0;R<x.length;R++)_+=x[R];const O=g.morphTargetsRelative?1:1-_;v.getUniforms().setValue(r,"morphTargetBaseInfluence",O),v.getUniforms().setValue(r,"morphTargetInfluences",x),v.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),v.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const E=x===void 0?0:x.length;let b=s[g.id];if(b===void 0||b.length!==E){b=[];for(let N=0;N<E;N++)b[N]=[N,0];s[g.id]=b}for(let N=0;N<E;N++){const G=b[N];G[0]=N,G[1]=x[N]}b.sort(i1);for(let N=0;N<8;N++)N<E&&b[N][1]?(f[N][0]=b[N][0],f[N][1]=b[N][1]):(f[N][0]=Number.MAX_SAFE_INTEGER,f[N][1]=0);f.sort(n1);const y=g.morphAttributes.position,_=g.morphAttributes.normal;let O=0;for(let N=0;N<8;N++){const G=f[N],I=G[0],B=G[1];I!==Number.MAX_SAFE_INTEGER&&B?(y&&g.getAttribute("morphTarget"+N)!==y[I]&&g.setAttribute("morphTarget"+N,y[I]),_&&g.getAttribute("morphNormal"+N)!==_[I]&&g.setAttribute("morphNormal"+N,_[I]),l[N]=B,O+=B):(y&&g.hasAttribute("morphTarget"+N)===!0&&g.deleteAttribute("morphTarget"+N),_&&g.hasAttribute("morphNormal"+N)===!0&&g.deleteAttribute("morphNormal"+N),l[N]=0)}const R=g.morphTargetsRelative?1:1-O;v.getUniforms().setValue(r,"morphTargetBaseInfluence",R),v.getUniforms().setValue(r,"morphTargetInfluences",l)}}return{update:p}}function s1(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function d(){l=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}class $_ extends Yn{constructor(t,i,s,l,c,d,f,p,m,g){if(g=g!==void 0?g:ms,g!==ms&&g!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===ms&&(s=za),s===void 0&&g===Lr&&(s=ps),super(null,l,c,d,f,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=f!==void 0?f:Nn,this.minFilter=p!==void 0?p:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const tv=new Yn,ev=new $_(1,1);ev.compareFunction=I_;const nv=new k_,iv=new kS,av=new K_,k0=[],X0=[],j0=new Float32Array(16),W0=new Float32Array(9),q0=new Float32Array(4);function Or(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=k0[l];if(c===void 0&&(c=new Float32Array(l),k0[l]=c),t!==0){s.toArray(c,0);for(let d=1,f=0;d!==t;++d)f+=i,r[d].toArray(c,f)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Gc(r,t){let i=X0[t];i===void 0&&(i=new Int32Array(t),X0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function r1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function o1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2fv(this.addr,t),dn(i,t)}}function l1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;r.uniform3fv(this.addr,t),dn(i,t)}}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4fv(this.addr,t),dn(i,t)}}function u1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;q0.set(s),r.uniformMatrix2fv(this.addr,!1,q0),dn(i,s)}}function f1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;W0.set(s),r.uniformMatrix3fv(this.addr,!1,W0),dn(i,s)}}function h1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;j0.set(s),r.uniformMatrix4fv(this.addr,!1,j0),dn(i,s)}}function d1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2iv(this.addr,t),dn(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3iv(this.addr,t),dn(i,t)}}function g1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4iv(this.addr,t),dn(i,t)}}function _1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function v1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2uiv(this.addr,t),dn(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3uiv(this.addr,t),dn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4uiv(this.addr,t),dn(i,t)}}function S1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);const c=this.type===r.SAMPLER_2D_SHADOW?ev:tv;i.setTexture2D(t||c,l)}function M1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||iv,l)}function E1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||av,l)}function b1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nv,l)}function T1(r){switch(r){case 5126:return r1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return b1}}function A1(r,t){r.uniform1fv(this.addr,t)}function R1(r,t){const i=Or(t,this.size,2);r.uniform2fv(this.addr,i)}function w1(r,t){const i=Or(t,this.size,3);r.uniform3fv(this.addr,i)}function C1(r,t){const i=Or(t,this.size,4);r.uniform4fv(this.addr,i)}function L1(r,t){const i=Or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function D1(r,t){const i=Or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function U1(r,t){const i=Or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function N1(r,t){r.uniform1iv(this.addr,t)}function O1(r,t){r.uniform2iv(this.addr,t)}function P1(r,t){r.uniform3iv(this.addr,t)}function z1(r,t){r.uniform4iv(this.addr,t)}function B1(r,t){r.uniform1uiv(this.addr,t)}function I1(r,t){r.uniform2uiv(this.addr,t)}function F1(r,t){r.uniform3uiv(this.addr,t)}function H1(r,t){r.uniform4uiv(this.addr,t)}function G1(r,t,i){const s=this.cache,l=t.length,c=Gc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||tv,c[d])}function V1(r,t,i){const s=this.cache,l=t.length,c=Gc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||iv,c[d])}function k1(r,t,i){const s=this.cache,l=t.length,c=Gc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||av,c[d])}function X1(r,t,i){const s=this.cache,l=t.length,c=Gc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||nv,c[d])}function j1(r){switch(r){case 5126:return A1;case 35664:return R1;case 35665:return w1;case 35666:return C1;case 35674:return L1;case 35675:return D1;case 35676:return U1;case 5124:case 35670:return N1;case 35667:case 35671:return O1;case 35668:case 35672:return P1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return I1;case 36295:return F1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return X1}}class W1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=T1(i.type)}}class q1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=j1(i.type)}}class Y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const f=l[c];f.setValue(t,i[f.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function Y0(r,t){r.seq.push(t),r.map[t.id]=t}function Z1(r,t,i){const s=r.name,l=s.length;for(Eh.lastIndex=0;;){const c=Eh.exec(s),d=Eh.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===l){Y0(i,m===void 0?new W1(f,r,t):new q1(f,r,t));break}else{let v=i.map[f];v===void 0&&(v=new Y1(f),Y0(i,v)),i=v}}}class Rc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);Z1(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const f=i[c],p=s[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Z0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const K1=37297;let Q1=0;function J1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const f=d+1;s.push(`${f===t?">":" "} ${f}: ${i[d]}`)}return s.join(`
`)}function $1(r){const t=Ie.getPrimaries(Ie.workingColorSpace),i=Ie.getPrimaries(r);let s;switch(t===i?s="":t===Dc&&i===Lc?s="LinearDisplayP3ToLinearSRGB":t===Lc&&i===Dc&&(s="LinearSRGBToLinearDisplayP3"),r){case ia:case zc:return[s,"LinearTransferOETF"];case xn:case jh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function K0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+J1(r.getShaderSource(t),d)}else return l}function tT(r,t){const i=$1(t);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function eT(r,t){let i;switch(t){case tS:i="Linear";break;case eS:i="Reinhard";break;case nS:i="OptimizedCineon";break;case R_:i="ACESFilmic";break;case aS:i="AgX";break;case iS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function nT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function iT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Er).join(`
`)}function aT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function sT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:f}}return i}function Er(r){return r!==""}function Q0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(r){return r.replace(rT,lT)}const oT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lT(r,t){let i=me[t];if(i===void 0){const s=oT.get(t);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Fh(i)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(r){return r.replace(cT,uT)}function uT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fT(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===b_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===T_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function hT(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dT(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function pT(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case A_:t="ENVMAP_BLENDING_MULTIPLY";break;case Jy:t="ENVMAP_BLENDING_MIX";break;case $y:t="ENVMAP_BLENDING_ADD";break}return t}function mT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,f=i.fragmentShader;const p=fT(i),m=hT(i),g=dT(i),v=pT(i),x=mT(i),S=i.isWebGL2?"":nT(i),E=iT(i),b=aT(c),y=l.createProgram();let _,O,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Er).join(`
`),_.length>0&&(_+=`
`),O=[S,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Er).join(`
`),O.length>0&&(O+=`
`)):(_=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),O=[S,t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?me.tonemapping_pars_fragment:"",i.toneMapping!==Fa?eT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,tT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Er).join(`
`)),d=Fh(d),d=Q0(d,i),d=J0(d,i),f=Fh(f),f=Q0(f,i),f=J0(f,i),d=$0(d),f=$0(f),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,O=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const N=R+_+d,G=R+O+f,I=Z0(l,l.VERTEX_SHADER,N),B=Z0(l,l.FRAGMENT_SHADER,G);l.attachShader(y,I),l.attachShader(y,B),i.index0AttributeName!==void 0?l.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(y,0,"position"),l.linkProgram(y);function ft(dt){if(r.debug.checkShaderErrors){const Et=l.getProgramInfoLog(y).trim(),Y=l.getShaderInfoLog(I).trim(),tt=l.getShaderInfoLog(B).trim();let z=!0,J=!0;if(l.getProgramParameter(y,l.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,y,I,B);else{const et=K0(l,I,"vertex"),mt=K0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(y,l.VALIDATE_STATUS)+`

Program Info Log: `+Et+`
`+et+`
`+mt)}else Et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Et):(Y===""||tt==="")&&(J=!1);J&&(dt.diagnostics={runnable:z,programLog:Et,vertexShader:{log:Y,prefix:_},fragmentShader:{log:tt,prefix:O}})}l.deleteShader(I),l.deleteShader(B),C=new Rc(l,y),P=sT(l,y)}let C;this.getUniforms=function(){return C===void 0&&ft(this),C};let P;this.getAttributes=function(){return P===void 0&&ft(this),P};let ut=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=l.getProgramParameter(y,K1)),ut},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=B,this}let _T=0;class vT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new xT(t),i.set(t,s)),s}}class xT{constructor(t){this.id=_T++,this.code=t,this.usedTimes=0}}function yT(r,t,i,s,l,c,d){const f=new qh,p=new vT,m=[],g=l.isWebGL2,v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return C===0?"uv":`uv${C}`}function y(C,P,ut,dt,Et){const Y=dt.fog,tt=Et.geometry,z=C.isMeshStandardMaterial?dt.environment:null,J=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),et=J&&J.mapping===Pc?J.image.height:null,mt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const U=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,j=U!==void 0?U.length:0;let nt=0;tt.morphAttributes.position!==void 0&&(nt=1),tt.morphAttributes.normal!==void 0&&(nt=2),tt.morphAttributes.color!==void 0&&(nt=3);let k,ot,St,xt;if(mt){const an=wi[mt];k=an.vertexShader,ot=an.fragmentShader}else k=C.vertexShader,ot=C.fragmentShader,p.update(C),St=p.getVertexShaderID(C),xt=p.getFragmentShaderID(C);const zt=r.getRenderTarget(),It=Et.isInstancedMesh===!0,Xt=Et.isBatchedMesh===!0,Zt=!!C.map,ee=!!C.matcap,lt=!!J,Fe=!!C.aoMap,Ht=!!C.lightMap,$t=!!C.bumpMap,Ft=!!C.normalMap,ce=!!C.displacementMap,At=!!C.emissiveMap,L=!!C.metalnessMap,T=!!C.roughnessMap,K=C.anisotropy>0,gt=C.clearcoat>0,pt=C.iridescence>0,bt=C.sheen>0,Ot=C.transmission>0,Dt=K&&!!C.anisotropyMap,Pt=gt&&!!C.clearcoatMap,Gt=gt&&!!C.clearcoatNormalMap,Kt=gt&&!!C.clearcoatRoughnessMap,Tt=pt&&!!C.iridescenceMap,ge=pt&&!!C.iridescenceThicknessMap,H=bt&&!!C.sheenColorMap,Mt=bt&&!!C.sheenRoughnessMap,Ut=!!C.specularMap,Rt=!!C.specularColorMap,jt=!!C.specularIntensityMap,ue=Ot&&!!C.transmissionMap,de=Ot&&!!C.thicknessMap,fe=!!C.gradientMap,Ct=!!C.alphaMap,X=C.alphaTest>0,Lt=!!C.alphaHash,Nt=!!C.extensions,Jt=!!tt.attributes.uv1,Yt=!!tt.attributes.uv2,_e=!!tt.attributes.uv3;let ye=Fa;return C.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(ye=r.toneMapping),{isWebGL2:g,shaderID:mt,shaderType:C.type,shaderName:C.name,vertexShader:k,fragmentShader:ot,defines:C.defines,customVertexShaderID:St,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Xt,instancing:It,instancingColor:It&&Et.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:zt===null?r.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:ia,map:Zt,matcap:ee,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:et,aoMap:Fe,lightMap:Ht,bumpMap:$t,normalMap:Ft,displacementMap:x&&ce,emissiveMap:At,normalMapObjectSpace:Ft&&C.normalMapType===gS,normalMapTangentSpace:Ft&&C.normalMapType===B_,metalnessMap:L,roughnessMap:T,anisotropy:K,anisotropyMap:Dt,clearcoat:gt,clearcoatMap:Pt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Kt,iridescence:pt,iridescenceMap:Tt,iridescenceThicknessMap:ge,sheen:bt,sheenColorMap:H,sheenRoughnessMap:Mt,specularMap:Ut,specularColorMap:Rt,specularIntensityMap:jt,transmission:Ot,transmissionMap:ue,thicknessMap:de,gradientMap:fe,opaque:C.transparent===!1&&C.blending===Ar,alphaMap:Ct,alphaTest:X,alphaHash:Lt,combine:C.combine,mapUv:Zt&&b(C.map.channel),aoMapUv:Fe&&b(C.aoMap.channel),lightMapUv:Ht&&b(C.lightMap.channel),bumpMapUv:$t&&b(C.bumpMap.channel),normalMapUv:Ft&&b(C.normalMap.channel),displacementMapUv:ce&&b(C.displacementMap.channel),emissiveMapUv:At&&b(C.emissiveMap.channel),metalnessMapUv:L&&b(C.metalnessMap.channel),roughnessMapUv:T&&b(C.roughnessMap.channel),anisotropyMapUv:Dt&&b(C.anisotropyMap.channel),clearcoatMapUv:Pt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:H&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&b(C.sheenRoughnessMap.channel),specularMapUv:Ut&&b(C.specularMap.channel),specularColorMapUv:Rt&&b(C.specularColorMap.channel),specularIntensityMapUv:jt&&b(C.specularIntensityMap.channel),transmissionMapUv:ue&&b(C.transmissionMap.channel),thicknessMapUv:de&&b(C.thicknessMap.channel),alphaMapUv:Ct&&b(C.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ft||K),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,vertexUv1s:Jt,vertexUv2s:Yt,vertexUv3s:_e,pointsUvs:Et.isPoints===!0&&!!tt.attributes.uv&&(Zt||Ct),fog:!!Y,useFog:C.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Et.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:nt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&ut.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Zt&&C.map.isVideoTexture===!0&&Ie.getTransfer(C.map.colorSpace)===qe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ea,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Nt&&C.extensions.derivatives===!0,extensionFragDepth:Nt&&C.extensions.fragDepth===!0,extensionDrawBuffers:Nt&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Nt&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Nt&&C.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ut in C.defines)P.push(ut),P.push(C.defines[ut]);return C.isRawShaderMaterial===!1&&(O(P,C),R(P,C),P.push(r.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function O(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.numLightProbes),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function R(C,P){f.disableAll(),P.isWebGL2&&f.enable(0),P.supportsVertexTextures&&f.enable(1),P.instancing&&f.enable(2),P.instancingColor&&f.enable(3),P.matcap&&f.enable(4),P.envMap&&f.enable(5),P.normalMapObjectSpace&&f.enable(6),P.normalMapTangentSpace&&f.enable(7),P.clearcoat&&f.enable(8),P.iridescence&&f.enable(9),P.alphaTest&&f.enable(10),P.vertexColors&&f.enable(11),P.vertexAlphas&&f.enable(12),P.vertexUv1s&&f.enable(13),P.vertexUv2s&&f.enable(14),P.vertexUv3s&&f.enable(15),P.vertexTangents&&f.enable(16),P.anisotropy&&f.enable(17),P.alphaHash&&f.enable(18),P.batching&&f.enable(19),C.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.skinning&&f.enable(4),P.morphTargets&&f.enable(5),P.morphNormals&&f.enable(6),P.morphColors&&f.enable(7),P.premultipliedAlpha&&f.enable(8),P.shadowMapEnabled&&f.enable(9),P.useLegacyLights&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),C.push(f.mask)}function N(C){const P=E[C.type];let ut;if(P){const dt=wi[P];ut=nM.clone(dt.uniforms)}else ut=C.uniforms;return ut}function G(C,P){let ut;for(let dt=0,Et=m.length;dt<Et;dt++){const Y=m[dt];if(Y.cacheKey===P){ut=Y,++ut.usedTimes;break}}return ut===void 0&&(ut=new gT(r,P,C,c),m.push(ut)),ut}function I(C){if(--C.usedTimes===0){const P=m.indexOf(C);m[P]=m[m.length-1],m.pop(),C.destroy()}}function B(C){p.remove(C)}function ft(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:N,acquireProgram:G,releaseProgram:I,releaseShaderCache:B,programs:m,dispose:ft}}function ST(){let r=new WeakMap;function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function i(c){r.delete(c)}function s(c,d,f){r.get(c)[d]=f}function l(){r=new WeakMap}return{get:t,remove:i,update:s,dispose:l}}function MT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function e_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function n_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(v,x,S,E,b,y){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:y},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=y),t++,_}function f(v,x,S,E,b,y){const _=d(v,x,S,E,b,y);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(v,x,S,E,b,y){const _=d(v,x,S,E,b,y);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||MT),s.length>1&&s.sort(x||e_),l.length>1&&l.sort(x||e_)}function g(){for(let v=t,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:f,unshift:p,finish:g,sort:m}}function ET(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new n_,r.set(s,[d])):l>=c.length?(d=new n_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function bT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new Ae};break;case"SpotLight":i={position:new q,direction:new q,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function TT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let AT=0;function RT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wT(r,t){const i=new bT,s=TT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new q);const c=new q,d=new nn,f=new nn;function p(g,v){let x=0,S=0,E=0;for(let dt=0;dt<9;dt++)l.probe[dt].set(0,0,0);let b=0,y=0,_=0,O=0,R=0,N=0,G=0,I=0,B=0,ft=0,C=0;g.sort(RT);const P=v===!0?Math.PI:1;for(let dt=0,Et=g.length;dt<Et;dt++){const Y=g[dt],tt=Y.color,z=Y.intensity,J=Y.distance,et=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)x+=tt.r*z*P,S+=tt.g*z*P,E+=tt.b*z*P;else if(Y.isLightProbe){for(let mt=0;mt<9;mt++)l.probe[mt].addScaledVector(Y.sh.coefficients[mt],z);C++}else if(Y.isDirectionalLight){const mt=i.get(Y);if(mt.color.copy(Y.color).multiplyScalar(Y.intensity*P),Y.castShadow){const U=Y.shadow,j=s.get(Y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,l.directionalShadow[b]=j,l.directionalShadowMap[b]=et,l.directionalShadowMatrix[b]=Y.shadow.matrix,N++}l.directional[b]=mt,b++}else if(Y.isSpotLight){const mt=i.get(Y);mt.position.setFromMatrixPosition(Y.matrixWorld),mt.color.copy(tt).multiplyScalar(z*P),mt.distance=J,mt.coneCos=Math.cos(Y.angle),mt.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),mt.decay=Y.decay,l.spot[_]=mt;const U=Y.shadow;if(Y.map&&(l.spotLightMap[B]=Y.map,B++,U.updateMatrices(Y),Y.castShadow&&ft++),l.spotLightMatrix[_]=U.matrix,Y.castShadow){const j=s.get(Y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,l.spotShadow[_]=j,l.spotShadowMap[_]=et,I++}_++}else if(Y.isRectAreaLight){const mt=i.get(Y);mt.color.copy(tt).multiplyScalar(z),mt.halfWidth.set(Y.width*.5,0,0),mt.halfHeight.set(0,Y.height*.5,0),l.rectArea[O]=mt,O++}else if(Y.isPointLight){const mt=i.get(Y);if(mt.color.copy(Y.color).multiplyScalar(Y.intensity*P),mt.distance=Y.distance,mt.decay=Y.decay,Y.castShadow){const U=Y.shadow,j=s.get(Y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,l.pointShadow[y]=j,l.pointShadowMap[y]=et,l.pointShadowMatrix[y]=Y.shadow.matrix,G++}l.point[y]=mt,y++}else if(Y.isHemisphereLight){const mt=i.get(Y);mt.skyColor.copy(Y.color).multiplyScalar(z*P),mt.groundColor.copy(Y.groundColor).multiplyScalar(z*P),l.hemi[R]=mt,R++}}O>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Bt.LTC_FLOAT_1,l.rectAreaLTC2=Bt.LTC_FLOAT_2):(l.rectAreaLTC1=Bt.LTC_HALF_1,l.rectAreaLTC2=Bt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Bt.LTC_FLOAT_1,l.rectAreaLTC2=Bt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Bt.LTC_HALF_1,l.rectAreaLTC2=Bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=S,l.ambient[2]=E;const ut=l.hash;(ut.directionalLength!==b||ut.pointLength!==y||ut.spotLength!==_||ut.rectAreaLength!==O||ut.hemiLength!==R||ut.numDirectionalShadows!==N||ut.numPointShadows!==G||ut.numSpotShadows!==I||ut.numSpotMaps!==B||ut.numLightProbes!==C)&&(l.directional.length=b,l.spot.length=_,l.rectArea.length=O,l.point.length=y,l.hemi.length=R,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=G,l.pointShadowMap.length=G,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=G,l.spotLightMatrix.length=I+B-ft,l.spotLightMap.length=B,l.numSpotLightShadowsWithMaps=ft,l.numLightProbes=C,ut.directionalLength=b,ut.pointLength=y,ut.spotLength=_,ut.rectAreaLength=O,ut.hemiLength=R,ut.numDirectionalShadows=N,ut.numPointShadows=G,ut.numSpotShadows=I,ut.numSpotMaps=B,ut.numLightProbes=C,l.version=AT++)}function m(g,v){let x=0,S=0,E=0,b=0,y=0;const _=v.matrixWorldInverse;for(let O=0,R=g.length;O<R;O++){const N=g[O];if(N.isDirectionalLight){const G=l.directional[x];G.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),G.direction.sub(c),G.direction.transformDirection(_),x++}else if(N.isSpotLight){const G=l.spot[E];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(_),G.direction.setFromMatrixPosition(N.matrixWorld),c.setFromMatrixPosition(N.target.matrixWorld),G.direction.sub(c),G.direction.transformDirection(_),E++}else if(N.isRectAreaLight){const G=l.rectArea[b];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(_),f.identity(),d.copy(N.matrixWorld),d.premultiply(_),f.extractRotation(d),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),G.halfWidth.applyMatrix4(f),G.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const G=l.point[S];G.position.setFromMatrixPosition(N.matrixWorld),G.position.applyMatrix4(_),S++}else if(N.isHemisphereLight){const G=l.hemi[y];G.direction.setFromMatrixPosition(N.matrixWorld),G.direction.transformDirection(_),y++}}}return{setup:p,setupView:m,state:l}}function i_(r,t){const i=new wT(r,t),s=[],l=[];function c(){s.length=0,l.length=0}function d(v){s.push(v)}function f(v){l.push(v)}function p(v){i.setup(s,v)}function m(v){i.setupView(s,v)}return{init:c,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function CT(r,t){let i=new WeakMap;function s(c,d=0){const f=i.get(c);let p;return f===void 0?(p=new i_(r,t),i.set(c,[p])):d>=f.length?(p=new i_(r,t),f.push(p)):p=f[d],p}function l(){i=new WeakMap}return{get:s,dispose:l}}class LT extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DT extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OT(r,t,i){let s=new Yh;const l=new qt,c=new qt,d=new Sn,f=new LT({depthPacking:mS}),p=new DT,m={},g=i.maxTextureSize,v={[Ga]:In,[In]:Ga,[ea]:ea},x=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:UT,fragmentShader:NT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Zn;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ci(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let _=this.type;this.render=function(I,B,ft){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=r.getRenderTarget(),P=r.getActiveCubeFace(),ut=r.getActiveMipmapLevel(),dt=r.state;dt.setBlending(Ia),dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);const Et=_!==ta&&this.type===ta,Y=_===ta&&this.type!==ta;for(let tt=0,z=I.length;tt<z;tt++){const J=I[tt],et=J.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;l.copy(et.mapSize);const mt=et.getFrameExtents();if(l.multiply(mt),c.copy(et.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,et.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,et.mapSize.y=c.y)),et.map===null||Et===!0||Y===!0){const j=this.type!==ta?{minFilter:Nn,magFilter:Nn}:{};et.map!==null&&et.map.dispose(),et.map=new _s(l.x,l.y,j),et.map.texture.name=J.name+".shadowMap",et.camera.updateProjectionMatrix()}r.setRenderTarget(et.map),r.clear();const U=et.getViewportCount();for(let j=0;j<U;j++){const nt=et.getViewport(j);d.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),dt.viewport(d),et.updateMatrices(J,j),s=et.getFrustum(),N(B,ft,et.camera,J,this.type)}et.isPointLightShadow!==!0&&this.type===ta&&O(et,ft),et.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(C,P,ut)};function O(I,B){const ft=t.update(b);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new _s(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(B,null,ft,x,b,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(B,null,ft,S,b,null)}function R(I,B,ft,C){let P=null;const ut=ft.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ut!==void 0)P=ut;else if(P=ft.isPointLight===!0?p:f,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const dt=P.uuid,Et=B.uuid;let Y=m[dt];Y===void 0&&(Y={},m[dt]=Y);let tt=Y[Et];tt===void 0&&(tt=P.clone(),Y[Et]=tt,B.addEventListener("dispose",G)),P=tt}if(P.visible=B.visible,P.wireframe=B.wireframe,C===ta?P.side=B.shadowSide!==null?B.shadowSide:B.side:P.side=B.shadowSide!==null?B.shadowSide:v[B.side],P.alphaMap=B.alphaMap,P.alphaTest=B.alphaTest,P.map=B.map,P.clipShadows=B.clipShadows,P.clippingPlanes=B.clippingPlanes,P.clipIntersection=B.clipIntersection,P.displacementMap=B.displacementMap,P.displacementScale=B.displacementScale,P.displacementBias=B.displacementBias,P.wireframeLinewidth=B.wireframeLinewidth,P.linewidth=B.linewidth,ft.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const dt=r.properties.get(P);dt.light=ft}return P}function N(I,B,ft,C,P){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===ta)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,I.matrixWorld);const Et=t.update(I),Y=I.material;if(Array.isArray(Y)){const tt=Et.groups;for(let z=0,J=tt.length;z<J;z++){const et=tt[z],mt=Y[et.materialIndex];if(mt&&mt.visible){const U=R(I,mt,C,P);I.onBeforeShadow(r,I,B,ft,Et,U,et),r.renderBufferDirect(ft,null,Et,U,I,et),I.onAfterShadow(r,I,B,ft,Et,U,et)}}}else if(Y.visible){const tt=R(I,Y,C,P);I.onBeforeShadow(r,I,B,ft,Et,tt,null),r.renderBufferDirect(ft,null,Et,tt,I,null),I.onAfterShadow(r,I,B,ft,Et,tt,null)}}const dt=I.children;for(let Et=0,Y=dt.length;Et<Y;Et++)N(dt[Et],B,ft,C,P)}function G(I){I.target.removeEventListener("dispose",G);for(const ft in m){const C=m[ft],P=I.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function PT(r,t,i){const s=i.isWebGL2;function l(){let X=!1;const Lt=new Sn;let Nt=null;const Jt=new Sn(0,0,0,0);return{setMask:function(Yt){Nt!==Yt&&!X&&(r.colorMask(Yt,Yt,Yt,Yt),Nt=Yt)},setLocked:function(Yt){X=Yt},setClear:function(Yt,_e,ye,Ye,an){an===!0&&(Yt*=Ye,_e*=Ye,ye*=Ye),Lt.set(Yt,_e,ye,Ye),Jt.equals(Lt)===!1&&(r.clearColor(Yt,_e,ye,Ye),Jt.copy(Lt))},reset:function(){X=!1,Nt=null,Jt.set(-1,0,0,0)}}}function c(){let X=!1,Lt=null,Nt=null,Jt=null;return{setTest:function(Yt){Yt?Xt(r.DEPTH_TEST):Zt(r.DEPTH_TEST)},setMask:function(Yt){Lt!==Yt&&!X&&(r.depthMask(Yt),Lt=Yt)},setFunc:function(Yt){if(Nt!==Yt){switch(Yt){case jy:r.depthFunc(r.NEVER);break;case Wy:r.depthFunc(r.ALWAYS);break;case qy:r.depthFunc(r.LESS);break;case wc:r.depthFunc(r.LEQUAL);break;case Yy:r.depthFunc(r.EQUAL);break;case Zy:r.depthFunc(r.GEQUAL);break;case Ky:r.depthFunc(r.GREATER);break;case Qy:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=Yt}},setLocked:function(Yt){X=Yt},setClear:function(Yt){Jt!==Yt&&(r.clearDepth(Yt),Jt=Yt)},reset:function(){X=!1,Lt=null,Nt=null,Jt=null}}}function d(){let X=!1,Lt=null,Nt=null,Jt=null,Yt=null,_e=null,ye=null,Ye=null,an=null;return{setTest:function(Se){X||(Se?Xt(r.STENCIL_TEST):Zt(r.STENCIL_TEST))},setMask:function(Se){Lt!==Se&&!X&&(r.stencilMask(Se),Lt=Se)},setFunc:function(Se,Re,Oe){(Nt!==Se||Jt!==Re||Yt!==Oe)&&(r.stencilFunc(Se,Re,Oe),Nt=Se,Jt=Re,Yt=Oe)},setOp:function(Se,Re,Oe){(_e!==Se||ye!==Re||Ye!==Oe)&&(r.stencilOp(Se,Re,Oe),_e=Se,ye=Re,Ye=Oe)},setLocked:function(Se){X=Se},setClear:function(Se){an!==Se&&(r.clearStencil(Se),an=Se)},reset:function(){X=!1,Lt=null,Nt=null,Jt=null,Yt=null,_e=null,ye=null,Ye=null,an=null}}}const f=new l,p=new c,m=new d,g=new WeakMap,v=new WeakMap;let x={},S={},E=new WeakMap,b=[],y=null,_=!1,O=null,R=null,N=null,G=null,I=null,B=null,ft=null,C=new Ae(0,0,0),P=0,ut=!1,dt=null,Et=null,Y=null,tt=null,z=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,mt=0;const U=r.getParameter(r.VERSION);U.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(U)[1]),et=mt>=1):U.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),et=mt>=2);let j=null,nt={};const k=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),St=new Sn().fromArray(k),xt=new Sn().fromArray(ot);function zt(X,Lt,Nt,Jt){const Yt=new Uint8Array(4),_e=r.createTexture();r.bindTexture(X,_e),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<Nt;ye++)s&&(X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY)?r.texImage3D(Lt,0,r.RGBA,1,1,Jt,0,r.RGBA,r.UNSIGNED_BYTE,Yt):r.texImage2D(Lt+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Yt);return _e}const It={};It[r.TEXTURE_2D]=zt(r.TEXTURE_2D,r.TEXTURE_2D,1),It[r.TEXTURE_CUBE_MAP]=zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(It[r.TEXTURE_2D_ARRAY]=zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),It[r.TEXTURE_3D]=zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Xt(r.DEPTH_TEST),p.setFunc(wc),At(!1),L(Ig),Xt(r.CULL_FACE),Ft(Ia);function Xt(X){x[X]!==!0&&(r.enable(X),x[X]=!0)}function Zt(X){x[X]!==!1&&(r.disable(X),x[X]=!1)}function ee(X,Lt){return S[X]!==Lt?(r.bindFramebuffer(X,Lt),S[X]=Lt,s&&(X===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Lt),X===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Lt)),!0):!1}function lt(X,Lt){let Nt=b,Jt=!1;if(X)if(Nt=E.get(Lt),Nt===void 0&&(Nt=[],E.set(Lt,Nt)),X.isWebGLMultipleRenderTargets){const Yt=X.texture;if(Nt.length!==Yt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,ye=Yt.length;_e<ye;_e++)Nt[_e]=r.COLOR_ATTACHMENT0+_e;Nt.length=Yt.length,Jt=!0}}else Nt[0]!==r.COLOR_ATTACHMENT0&&(Nt[0]=r.COLOR_ATTACHMENT0,Jt=!0);else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,Jt=!0);Jt&&(i.isWebGL2?r.drawBuffers(Nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Nt))}function Fe(X){return y!==X?(r.useProgram(X),y=X,!0):!1}const Ht={[hs]:r.FUNC_ADD,[Ly]:r.FUNC_SUBTRACT,[Dy]:r.FUNC_REVERSE_SUBTRACT};if(s)Ht[Vg]=r.MIN,Ht[kg]=r.MAX;else{const X=t.get("EXT_blend_minmax");X!==null&&(Ht[Vg]=X.MIN_EXT,Ht[kg]=X.MAX_EXT)}const $t={[Uy]:r.ZERO,[Ny]:r.ONE,[Oy]:r.SRC_COLOR,[Dh]:r.SRC_ALPHA,[Hy]:r.SRC_ALPHA_SATURATE,[Iy]:r.DST_COLOR,[zy]:r.DST_ALPHA,[Py]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[Fy]:r.ONE_MINUS_DST_COLOR,[By]:r.ONE_MINUS_DST_ALPHA,[Gy]:r.CONSTANT_COLOR,[Vy]:r.ONE_MINUS_CONSTANT_COLOR,[ky]:r.CONSTANT_ALPHA,[Xy]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(X,Lt,Nt,Jt,Yt,_e,ye,Ye,an,Se){if(X===Ia){_===!0&&(Zt(r.BLEND),_=!1);return}if(_===!1&&(Xt(r.BLEND),_=!0),X!==Cy){if(X!==O||Se!==ut){if((R!==hs||I!==hs)&&(r.blendEquation(r.FUNC_ADD),R=hs,I=hs),Se)switch(X){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fg:r.blendFunc(r.ONE,r.ONE);break;case Hg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,G=null,B=null,ft=null,C.set(0,0,0),P=0,O=X,ut=Se}return}Yt=Yt||Lt,_e=_e||Nt,ye=ye||Jt,(Lt!==R||Yt!==I)&&(r.blendEquationSeparate(Ht[Lt],Ht[Yt]),R=Lt,I=Yt),(Nt!==N||Jt!==G||_e!==B||ye!==ft)&&(r.blendFuncSeparate($t[Nt],$t[Jt],$t[_e],$t[ye]),N=Nt,G=Jt,B=_e,ft=ye),(Ye.equals(C)===!1||an!==P)&&(r.blendColor(Ye.r,Ye.g,Ye.b,an),C.copy(Ye),P=an),O=X,ut=!1}function ce(X,Lt){X.side===ea?Zt(r.CULL_FACE):Xt(r.CULL_FACE);let Nt=X.side===In;Lt&&(Nt=!Nt),At(Nt),X.blending===Ar&&X.transparent===!1?Ft(Ia):Ft(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),p.setFunc(X.depthFunc),p.setTest(X.depthTest),p.setMask(X.depthWrite),f.setMask(X.colorWrite);const Jt=X.stencilWrite;m.setTest(Jt),Jt&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),K(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Xt(r.SAMPLE_ALPHA_TO_COVERAGE):Zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(X){dt!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),dt=X)}function L(X){X!==Ry?(Xt(r.CULL_FACE),X!==Et&&(X===Ig?r.cullFace(r.BACK):X===wy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Zt(r.CULL_FACE),Et=X}function T(X){X!==Y&&(et&&r.lineWidth(X),Y=X)}function K(X,Lt,Nt){X?(Xt(r.POLYGON_OFFSET_FILL),(tt!==Lt||z!==Nt)&&(r.polygonOffset(Lt,Nt),tt=Lt,z=Nt)):Zt(r.POLYGON_OFFSET_FILL)}function gt(X){X?Xt(r.SCISSOR_TEST):Zt(r.SCISSOR_TEST)}function pt(X){X===void 0&&(X=r.TEXTURE0+J-1),j!==X&&(r.activeTexture(X),j=X)}function bt(X,Lt,Nt){Nt===void 0&&(j===null?Nt=r.TEXTURE0+J-1:Nt=j);let Jt=nt[Nt];Jt===void 0&&(Jt={type:void 0,texture:void 0},nt[Nt]=Jt),(Jt.type!==X||Jt.texture!==Lt)&&(j!==Nt&&(r.activeTexture(Nt),j=Nt),r.bindTexture(X,Lt||It[X]),Jt.type=X,Jt.texture=Lt)}function Ot(){const X=nt[j];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Dt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function H(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){St.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function ue(X){xt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),xt.copy(X))}function de(X,Lt){let Nt=v.get(Lt);Nt===void 0&&(Nt=new WeakMap,v.set(Lt,Nt));let Jt=Nt.get(X);Jt===void 0&&(Jt=r.getUniformBlockIndex(Lt,X.name),Nt.set(X,Jt))}function fe(X,Lt){const Jt=v.get(Lt).get(X);g.get(Lt)!==Jt&&(r.uniformBlockBinding(Lt,Jt,X.__bindingPointIndex),g.set(Lt,Jt))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},j=null,nt={},S={},E=new WeakMap,b=[],y=null,_=!1,O=null,R=null,N=null,G=null,I=null,B=null,ft=null,C=new Ae(0,0,0),P=0,ut=!1,dt=null,Et=null,Y=null,tt=null,z=null,St.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:Xt,disable:Zt,bindFramebuffer:ee,drawBuffers:lt,useProgram:Fe,setBlending:Ft,setMaterial:ce,setFlipSided:At,setCullFace:L,setLineWidth:T,setPolygonOffset:K,setScissorTest:gt,activeTexture:pt,bindTexture:bt,unbindTexture:Ot,compressedTexImage2D:Dt,compressedTexImage3D:Pt,texImage2D:Ut,texImage3D:Rt,updateUBOMapping:de,uniformBlockBinding:fe,texStorage2D:H,texStorage3D:Mt,texSubImage2D:Gt,texSubImage3D:Kt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:ge,scissor:jt,viewport:ue,reset:Ct}}function zT(r,t,i,s,l,c,d){const f=l.isWebGL2,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):Oc("canvas")}function b(L,T,K,gt){let pt=1;if((L.width>gt||L.height>gt)&&(pt=gt/Math.max(L.width,L.height)),pt<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const bt=T?Nc:Math.floor,Ot=bt(pt*L.width),Dt=bt(pt*L.height);v===void 0&&(v=E(Ot,Dt));const Pt=K?E(Ot,Dt):v;return Pt.width=Ot,Pt.height=Dt,Pt.getContext("2d").drawImage(L,0,0,Ot,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ot+"x"+Dt+")."),Pt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Ih(L.width)&&Ih(L.height)}function _(L){return f?!1:L.wrapS!==xi||L.wrapT!==xi||L.minFilter!==Nn&&L.minFilter!==ri}function O(L,T){return L.generateMipmaps&&T&&L.minFilter!==Nn&&L.minFilter!==ri}function R(L){r.generateMipmap(L)}function N(L,T,K,gt,pt=!1){if(f===!1)return T;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let bt=T;if(T===r.RED&&(K===r.FLOAT&&(bt=r.R32F),K===r.HALF_FLOAT&&(bt=r.R16F),K===r.UNSIGNED_BYTE&&(bt=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(bt=r.R8UI),K===r.UNSIGNED_SHORT&&(bt=r.R16UI),K===r.UNSIGNED_INT&&(bt=r.R32UI),K===r.BYTE&&(bt=r.R8I),K===r.SHORT&&(bt=r.R16I),K===r.INT&&(bt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(bt=r.RG32F),K===r.HALF_FLOAT&&(bt=r.RG16F),K===r.UNSIGNED_BYTE&&(bt=r.RG8)),T===r.RGBA){const Ot=pt?Cc:Ie.getTransfer(gt);K===r.FLOAT&&(bt=r.RGBA32F),K===r.HALF_FLOAT&&(bt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(bt=Ot===qe?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(bt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(bt=r.RGB5_A1)}return(bt===r.R16F||bt===r.R32F||bt===r.RG16F||bt===r.RG32F||bt===r.RGBA16F||bt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),bt}function G(L,T,K){return O(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==ri?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){return L===Nn||L===Xg||L===Kf?r.NEAREST:r.LINEAR}function B(L){const T=L.target;T.removeEventListener("dispose",B),C(T),T.isVideoTexture&&g.delete(T)}function ft(L){const T=L.target;T.removeEventListener("dispose",ft),ut(T)}function C(L){const T=s.get(L);if(T.__webglInit===void 0)return;const K=L.source,gt=x.get(K);if(gt){const pt=gt[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&P(L),Object.keys(gt).length===0&&x.delete(K)}s.remove(L)}function P(L){const T=s.get(L);r.deleteTexture(T.__webglTexture);const K=L.source,gt=x.get(K);delete gt[T.__cacheKey],d.memory.textures--}function ut(L){const T=L.texture,K=s.get(L),gt=s.get(T);if(gt.__webglTexture!==void 0&&(r.deleteTexture(gt.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(K.__webglFramebuffer[pt]))for(let bt=0;bt<K.__webglFramebuffer[pt].length;bt++)r.deleteFramebuffer(K.__webglFramebuffer[pt][bt]);else r.deleteFramebuffer(K.__webglFramebuffer[pt]);K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[pt])}else{if(Array.isArray(K.__webglFramebuffer))for(let pt=0;pt<K.__webglFramebuffer.length;pt++)r.deleteFramebuffer(K.__webglFramebuffer[pt]);else r.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let pt=0;pt<K.__webglColorRenderbuffer.length;pt++)K.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[pt]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pt=0,bt=T.length;pt<bt;pt++){const Ot=s.get(T[pt]);Ot.__webglTexture&&(r.deleteTexture(Ot.__webglTexture),d.memory.textures--),s.remove(T[pt])}s.remove(T),s.remove(L)}let dt=0;function Et(){dt=0}function Y(){const L=dt;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),dt+=1,L}function tt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function z(L,T){const K=s.get(L);if(L.isVideoTexture&&ce(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(K,L,T);return}}i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function J(L,T){const K=s.get(L);if(L.version>0&&K.__version!==L.version){St(K,L,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function et(L,T){const K=s.get(L);if(L.version>0&&K.__version!==L.version){St(K,L,T);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function mt(L,T){const K=s.get(L);if(L.version>0&&K.__version!==L.version){xt(K,L,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const U={[Ph]:r.REPEAT,[xi]:r.CLAMP_TO_EDGE,[zh]:r.MIRRORED_REPEAT},j={[Nn]:r.NEAREST,[Xg]:r.NEAREST_MIPMAP_NEAREST,[Kf]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[sS]:r.LINEAR_MIPMAP_NEAREST,[ko]:r.LINEAR_MIPMAP_LINEAR},nt={[_S]:r.NEVER,[ES]:r.ALWAYS,[vS]:r.LESS,[I_]:r.LEQUAL,[xS]:r.EQUAL,[MS]:r.GEQUAL,[yS]:r.GREATER,[SS]:r.NOTEQUAL};function k(L,T,K){if(K?(r.texParameteri(L,r.TEXTURE_WRAP_S,U[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,U[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,U[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,j[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,j[T.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==xi||T.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,I(T.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,I(T.minFilter)),T.minFilter!==Nn&&T.minFilter!==ri&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const gt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Nn||T.minFilter!==Kf&&T.minFilter!==ko||T.type===Ba&&t.has("OES_texture_float_linear")===!1||f===!1&&T.type===Xo&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(r.texParameterf(L,gt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function ot(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const gt=T.source;let pt=x.get(gt);pt===void 0&&(pt={},x.set(gt,pt));const bt=tt(T);if(bt!==L.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,K=!0),pt[bt].usedTimes++;const Ot=pt[L.__cacheKey];Ot!==void 0&&(pt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&P(T)),L.__cacheKey=bt,L.__webglTexture=pt[bt].texture}return K}function St(L,T,K){let gt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=r.TEXTURE_3D);const pt=ot(L,T),bt=T.source;i.bindTexture(gt,L.__webglTexture,r.TEXTURE0+K);const Ot=s.get(bt);if(bt.version!==Ot.__version||pt===!0){i.activeTexture(r.TEXTURE0+K);const Dt=Ie.getPrimaries(Ie.workingColorSpace),Pt=T.colorSpace===li?null:Ie.getPrimaries(T.colorSpace),Gt=T.colorSpace===li||Dt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Kt=_(T)&&y(T.image)===!1;let Tt=b(T.image,Kt,!1,l.maxTextureSize);Tt=At(T,Tt);const ge=y(Tt)||f,H=c.convert(T.format,T.colorSpace);let Mt=c.convert(T.type),Ut=N(T.internalFormat,H,Mt,T.colorSpace,T.isVideoTexture);k(gt,T,ge);let Rt;const jt=T.mipmaps,ue=f&&T.isVideoTexture!==!0&&Ut!==P_,de=Ot.__version===void 0||pt===!0,fe=G(T,Tt,ge);if(T.isDepthTexture)Ut=r.DEPTH_COMPONENT,f?T.type===Ba?Ut=r.DEPTH_COMPONENT32F:T.type===za?Ut=r.DEPTH_COMPONENT24:T.type===ps?Ut=r.DEPTH24_STENCIL8:Ut=r.DEPTH_COMPONENT16:T.type===Ba&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ms&&Ut===r.DEPTH_COMPONENT&&T.type!==Xh&&T.type!==za&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=za,Mt=c.convert(T.type)),T.format===Lr&&Ut===r.DEPTH_COMPONENT&&(Ut=r.DEPTH_STENCIL,T.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ps,Mt=c.convert(T.type))),de&&(ue?i.texStorage2D(r.TEXTURE_2D,1,Ut,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Ut,Tt.width,Tt.height,0,H,Mt,null));else if(T.isDataTexture)if(jt.length>0&&ge){ue&&de&&i.texStorage2D(r.TEXTURE_2D,fe,Ut,jt[0].width,jt[0].height);for(let Ct=0,X=jt.length;Ct<X;Ct++)Rt=jt[Ct],ue?i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Rt.width,Rt.height,H,Mt,Rt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ut,Rt.width,Rt.height,0,H,Mt,Rt.data);T.generateMipmaps=!1}else ue?(de&&i.texStorage2D(r.TEXTURE_2D,fe,Ut,Tt.width,Tt.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,H,Mt,Tt.data)):i.texImage2D(r.TEXTURE_2D,0,Ut,Tt.width,Tt.height,0,H,Mt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ue&&de&&i.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ut,jt[0].width,jt[0].height,Tt.depth);for(let Ct=0,X=jt.length;Ct<X;Ct++)Rt=jt[Ct],T.format!==yi?H!==null?ue?i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Rt.width,Rt.height,Tt.depth,H,Rt.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,Ut,Rt.width,Rt.height,Tt.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Rt.width,Rt.height,Tt.depth,H,Mt,Rt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ct,Ut,Rt.width,Rt.height,Tt.depth,0,H,Mt,Rt.data)}else{ue&&de&&i.texStorage2D(r.TEXTURE_2D,fe,Ut,jt[0].width,jt[0].height);for(let Ct=0,X=jt.length;Ct<X;Ct++)Rt=jt[Ct],T.format!==yi?H!==null?ue?i.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,Rt.width,Rt.height,H,Rt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ct,Ut,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Rt.width,Rt.height,H,Mt,Rt.data):i.texImage2D(r.TEXTURE_2D,Ct,Ut,Rt.width,Rt.height,0,H,Mt,Rt.data)}else if(T.isDataArrayTexture)ue?(de&&i.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ut,Tt.width,Tt.height,Tt.depth),i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,H,Mt,Tt.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,Tt.width,Tt.height,Tt.depth,0,H,Mt,Tt.data);else if(T.isData3DTexture)ue?(de&&i.texStorage3D(r.TEXTURE_3D,fe,Ut,Tt.width,Tt.height,Tt.depth),i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,H,Mt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Ut,Tt.width,Tt.height,Tt.depth,0,H,Mt,Tt.data);else if(T.isFramebufferTexture){if(de)if(ue)i.texStorage2D(r.TEXTURE_2D,fe,Ut,Tt.width,Tt.height);else{let Ct=Tt.width,X=Tt.height;for(let Lt=0;Lt<fe;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Ut,Ct,X,0,H,Mt,null),Ct>>=1,X>>=1}}else if(jt.length>0&&ge){ue&&de&&i.texStorage2D(r.TEXTURE_2D,fe,Ut,jt[0].width,jt[0].height);for(let Ct=0,X=jt.length;Ct<X;Ct++)Rt=jt[Ct],ue?i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,H,Mt,Rt):i.texImage2D(r.TEXTURE_2D,Ct,Ut,H,Mt,Rt);T.generateMipmaps=!1}else ue?(de&&i.texStorage2D(r.TEXTURE_2D,fe,Ut,Tt.width,Tt.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,H,Mt,Tt)):i.texImage2D(r.TEXTURE_2D,0,Ut,H,Mt,Tt);O(T,ge)&&R(gt),Ot.__version=bt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,K){if(T.image.length!==6)return;const gt=ot(L,T),pt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+K);const bt=s.get(pt);if(pt.version!==bt.__version||gt===!0){i.activeTexture(r.TEXTURE0+K);const Ot=Ie.getPrimaries(Ie.workingColorSpace),Dt=T.colorSpace===li?null:Ie.getPrimaries(T.colorSpace),Pt=T.colorSpace===li||Ot===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,Kt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let Ct=0;Ct<6;Ct++)!Gt&&!Kt?Tt[Ct]=b(T.image[Ct],!1,!0,l.maxCubemapSize):Tt[Ct]=Kt?T.image[Ct].image:T.image[Ct],Tt[Ct]=At(T,Tt[Ct]);const ge=Tt[0],H=y(ge)||f,Mt=c.convert(T.format,T.colorSpace),Ut=c.convert(T.type),Rt=N(T.internalFormat,Mt,Ut,T.colorSpace),jt=f&&T.isVideoTexture!==!0,ue=bt.__version===void 0||gt===!0;let de=G(T,ge,H);k(r.TEXTURE_CUBE_MAP,T,H);let fe;if(Gt){jt&&ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,de,Rt,ge.width,ge.height);for(let Ct=0;Ct<6;Ct++){fe=Tt[Ct].mipmaps;for(let X=0;X<fe.length;X++){const Lt=fe[X];T.format!==yi?Mt!==null?jt?i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X,0,0,Lt.width,Lt.height,Mt,Lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X,Rt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X,0,0,Lt.width,Lt.height,Mt,Ut,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X,Rt,Lt.width,Lt.height,0,Mt,Ut,Lt.data)}}}else{fe=T.mipmaps,jt&&ue&&(fe.length>0&&de++,i.texStorage2D(r.TEXTURE_CUBE_MAP,de,Rt,Tt[0].width,Tt[0].height));for(let Ct=0;Ct<6;Ct++)if(Kt){jt?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Tt[Ct].width,Tt[Ct].height,Mt,Ut,Tt[Ct].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Rt,Tt[Ct].width,Tt[Ct].height,0,Mt,Ut,Tt[Ct].data);for(let X=0;X<fe.length;X++){const Nt=fe[X].image[Ct].image;jt?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X+1,0,0,Nt.width,Nt.height,Mt,Ut,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X+1,Rt,Nt.width,Nt.height,0,Mt,Ut,Nt.data)}}else{jt?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Mt,Ut,Tt[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Rt,Mt,Ut,Tt[Ct]);for(let X=0;X<fe.length;X++){const Lt=fe[X];jt?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X+1,0,0,Mt,Ut,Lt.image[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,X+1,Rt,Mt,Ut,Lt.image[Ct])}}}O(T,H)&&R(r.TEXTURE_CUBE_MAP),bt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function zt(L,T,K,gt,pt,bt){const Ot=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),Pt=N(K.internalFormat,Ot,Dt,K.colorSpace);if(!s.get(T).__hasExternalTextures){const Kt=Math.max(1,T.width>>bt),Tt=Math.max(1,T.height>>bt);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?i.texImage3D(pt,bt,Pt,Kt,Tt,T.depth,0,Ot,Dt,null):i.texImage2D(pt,bt,Pt,Kt,Tt,0,Ot,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Ft(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,pt,s.get(K).__webglTexture,0,$t(T)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,pt,s.get(K).__webglTexture,bt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(L,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let gt=f===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||Ft(T)){const pt=T.depthTexture;pt&&pt.isDepthTexture&&(pt.type===Ba?gt=r.DEPTH_COMPONENT32F:pt.type===za&&(gt=r.DEPTH_COMPONENT24));const bt=$t(T);Ft(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,bt,gt,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,gt,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,gt,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const gt=$t(T);K&&Ft(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,r.DEPTH24_STENCIL8,T.width,T.height):Ft(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const gt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pt=0;pt<gt.length;pt++){const bt=gt[pt],Ot=c.convert(bt.format,bt.colorSpace),Dt=c.convert(bt.type),Pt=N(bt.internalFormat,Ot,Dt,bt.colorSpace),Gt=$t(T);K&&Ft(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Pt,T.width,T.height):Ft(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,Pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const gt=s.get(T.depthTexture).__webglTexture,pt=$t(T);if(T.depthTexture.format===ms)Ft(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0);else if(T.depthTexture.format===Lr)Ft(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function Zt(L){const T=s.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Xt(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]=r.createRenderbuffer(),It(T.__webglDepthbuffer[gt],L,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),It(T.__webglDepthbuffer,L,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(L,T,K){const gt=s.get(L);T!==void 0&&zt(gt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Zt(L)}function lt(L){const T=L.texture,K=s.get(L),gt=s.get(T);L.addEventListener("dispose",ft),L.isWebGLMultipleRenderTargets!==!0&&(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=T.version,d.memory.textures++);const pt=L.isWebGLCubeRenderTarget===!0,bt=L.isWebGLMultipleRenderTargets===!0,Ot=y(L)||f;if(pt){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(f&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)K.__webglFramebuffer[Dt][Pt]=r.createFramebuffer()}else K.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(f&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(bt)if(l.drawBuffers){const Dt=L.texture;for(let Pt=0,Gt=Dt.length;Pt<Gt;Pt++){const Kt=s.get(Dt[Pt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&L.samples>0&&Ft(L)===!1){const Dt=bt?T:[T];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Dt.length;Pt++){const Gt=Dt[Pt];K.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Pt]);const Kt=c.convert(Gt.format,Gt.colorSpace),Tt=c.convert(Gt.type),ge=N(Gt.internalFormat,Kt,Tt,Gt.colorSpace,L.isXRRenderTarget===!0),H=$t(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,H,ge,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,K.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),It(K.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),k(r.TEXTURE_CUBE_MAP,T,Ot);for(let Dt=0;Dt<6;Dt++)if(f&&T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)zt(K.__webglFramebuffer[Dt][Pt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Pt);else zt(K.__webglFramebuffer[Dt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);O(T,Ot)&&R(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){const Dt=L.texture;for(let Pt=0,Gt=Dt.length;Pt<Gt;Pt++){const Kt=Dt[Pt],Tt=s.get(Kt);i.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),k(r.TEXTURE_2D,Kt,Ot),zt(K.__webglFramebuffer,L,Kt,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,0),O(Kt,Ot)&&R(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(f?Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Dt,gt.__webglTexture),k(Dt,T,Ot),f&&T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)zt(K.__webglFramebuffer[Pt],L,T,r.COLOR_ATTACHMENT0,Dt,Pt);else zt(K.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Dt,0);O(T,Ot)&&R(Dt),i.unbindTexture()}L.depthBuffer&&Zt(L)}function Fe(L){const T=y(L)||f,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let gt=0,pt=K.length;gt<pt;gt++){const bt=K[gt];if(O(bt,T)){const Ot=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Dt=s.get(bt).__webglTexture;i.bindTexture(Ot,Dt),R(Ot),i.unbindTexture()}}}function Ht(L){if(f&&L.samples>0&&Ft(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,gt=L.height;let pt=r.COLOR_BUFFER_BIT;const bt=[],Ot=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=s.get(L),Pt=L.isWebGLMultipleRenderTargets===!0;if(Pt)for(let Gt=0;Gt<T.length;Gt++)i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Gt=0;Gt<T.length;Gt++){bt.push(r.COLOR_ATTACHMENT0+Gt),L.depthBuffer&&bt.push(Ot);const Kt=Dt.__ignoreDepthValues!==void 0?Dt.__ignoreDepthValues:!1;if(Kt===!1&&(L.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),Pt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt]),Kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ot])),Pt){const Tt=s.get(T[Gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,K,gt,0,0,K,gt,pt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt)}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let Gt=0;Gt<T.length;Gt++){i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt]);const Kt=s.get(T[Gt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,Kt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}}function $t(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const T=s.get(L);return f&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(L){const T=d.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function At(L,T){const K=L.colorSpace,gt=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Bh||K!==ia&&K!==li&&(Ie.getTransfer(K)===qe?f===!1?t.has("EXT_sRGB")===!0&&gt===yi?(L.format=Bh,L.minFilter=ri,L.generateMipmaps=!1):T=G_.sRGBToLinear(T):(gt!==yi||pt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}this.allocateTextureUnit=Y,this.resetTextureUnits=Et,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=et,this.setTextureCube=mt,this.rebindTextures=ee,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Ft}function BT(r,t,i){const s=i.isWebGL2;function l(c,d=li){let f;const p=Ie.getTransfer(d);if(c===Ha)return r.UNSIGNED_BYTE;if(c===L_)return r.UNSIGNED_SHORT_4_4_4_4;if(c===D_)return r.UNSIGNED_SHORT_5_5_5_1;if(c===rS)return r.BYTE;if(c===oS)return r.SHORT;if(c===Xh)return r.UNSIGNED_SHORT;if(c===C_)return r.INT;if(c===za)return r.UNSIGNED_INT;if(c===Ba)return r.FLOAT;if(c===Xo)return s?r.HALF_FLOAT:(f=t.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(c===lS)return r.ALPHA;if(c===yi)return r.RGBA;if(c===cS)return r.LUMINANCE;if(c===uS)return r.LUMINANCE_ALPHA;if(c===ms)return r.DEPTH_COMPONENT;if(c===Lr)return r.DEPTH_STENCIL;if(c===Bh)return f=t.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(c===fS)return r.RED;if(c===U_)return r.RED_INTEGER;if(c===hS)return r.RG;if(c===N_)return r.RG_INTEGER;if(c===O_)return r.RGBA_INTEGER;if(c===Qf||c===Jf||c===$f||c===th)if(p===qe)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(c===Qf)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Jf)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===$f)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===th)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(c===Qf)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Jf)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===$f)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===th)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===jg||c===Wg||c===qg||c===Yg)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(c===jg)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===Wg)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===qg)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Yg)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===P_)return f=t.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Zg||c===Kg)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(c===Zg)return p===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(c===Kg)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Qg||c===Jg||c===$g||c===t0||c===e0||c===n0||c===i0||c===a0||c===s0||c===r0||c===o0||c===l0||c===c0||c===u0)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(c===Qg)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Jg)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===$g)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===t0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===e0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===n0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===i0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===a0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===s0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===r0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===o0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===l0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===c0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===u0)return p===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===eh||c===f0||c===h0)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(c===eh)return p===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===f0)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===h0)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===dS||c===d0||c===p0||c===m0)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(c===eh)return f.COMPRESSED_RED_RGTC1_EXT;if(c===d0)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===p0)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===m0)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===ps?s?r.UNSIGNED_INT_24_8:(f=t.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):r[c]!==void 0?r[c]:null}return{convert:l}}class IT extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class br extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FT={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const b of t.hand.values()){const y=i.getJointPose(b,s),_=this._getHandJoint(m,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(FT)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new br;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class HT extends ys{constructor(t,i){super();const s=this;let l=null,c=1,d=null,f="local-floor",p=1,m=null,g=null,v=null,x=null,S=null,E=null;const b=i.getContextAttributes();let y=null,_=null;const O=[],R=[],N=new qt;let G=null;const I=new oi;I.layers.enable(1),I.viewport=new Sn;const B=new oi;B.layers.enable(2),B.viewport=new Sn;const ft=[I,B],C=new IT;C.layers.enable(1),C.layers.enable(2);let P=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ot=O[k];return ot===void 0&&(ot=new bh,O[k]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(k){let ot=O[k];return ot===void 0&&(ot=new bh,O[k]=ot),ot.getGripSpace()},this.getHand=function(k){let ot=O[k];return ot===void 0&&(ot=new bh,O[k]=ot),ot.getHandSpace()};function dt(k){const ot=R.indexOf(k.inputSource);if(ot===-1)return;const St=O[ot];St!==void 0&&(St.update(k.inputSource,k.frame,m||d),St.dispatchEvent({type:k.type,data:k.inputSource}))}function Et(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",Et),l.removeEventListener("inputsourceschange",Y);for(let k=0;k<O.length;k++){const ot=R[k];ot!==null&&(R[k]=null,O[k].disconnect(ot))}P=null,ut=null,t.setRenderTarget(y),S=null,x=null,v=null,l=null,_=null,nt.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){c=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",Et),l.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(N),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ot={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new _s(S.framebufferWidth,S.framebufferHeight,{format:yi,type:Ha,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let ot=null,St=null,xt=null;b.depth&&(xt=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=b.stencil?Lr:ms,St=b.stencil?ps:za);const zt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(zt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),_=new _s(x.textureWidth,x.textureHeight,{format:yi,type:Ha,depthTexture:new $_(x.textureWidth,x.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});const It=t.properties.get(_);It.__ignoreDepthValues=x.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(f),nt.setContext(l),nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function Y(k){for(let ot=0;ot<k.removed.length;ot++){const St=k.removed[ot],xt=R.indexOf(St);xt>=0&&(R[xt]=null,O[xt].disconnect(St))}for(let ot=0;ot<k.added.length;ot++){const St=k.added[ot];let xt=R.indexOf(St);if(xt===-1){for(let It=0;It<O.length;It++)if(It>=R.length){R.push(St),xt=It;break}else if(R[It]===null){R[It]=St,xt=It;break}if(xt===-1)break}const zt=O[xt];zt&&zt.connect(St)}}const tt=new q,z=new q;function J(k,ot,St){tt.setFromMatrixPosition(ot.matrixWorld),z.setFromMatrixPosition(St.matrixWorld);const xt=tt.distanceTo(z),zt=ot.projectionMatrix.elements,It=St.projectionMatrix.elements,Xt=zt[14]/(zt[10]-1),Zt=zt[14]/(zt[10]+1),ee=(zt[9]+1)/zt[5],lt=(zt[9]-1)/zt[5],Fe=(zt[8]-1)/zt[0],Ht=(It[8]+1)/It[0],$t=Xt*Fe,Ft=Xt*Ht,ce=xt/(-Fe+Ht),At=ce*-Fe;ot.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(At),k.translateZ(ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const L=Xt+ce,T=Zt+ce,K=$t-At,gt=Ft+(xt-At),pt=ee*Zt/T*L,bt=lt*Zt/T*L;k.projectionMatrix.makePerspective(K,gt,pt,bt,L,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function et(k,ot){ot===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ot.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;C.near=B.near=I.near=k.near,C.far=B.far=I.far=k.far,(P!==C.near||ut!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,ut=C.far);const ot=k.parent,St=C.cameras;et(C,ot);for(let xt=0;xt<St.length;xt++)et(St[xt],ot);St.length===2?J(C,I,B):C.projectionMatrix.copy(I.projectionMatrix),mt(k,C,ot)};function mt(k,ot,St){St===null?k.matrix.copy(ot.matrixWorld):(k.matrix.copy(St.matrixWorld),k.matrix.invert(),k.matrix.multiply(ot.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ot.projectionMatrix),k.projectionMatrixInverse.copy(ot.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=jo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(k){p=k,x!==null&&(x.fixedFoveation=k),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=k)};let U=null;function j(k,ot){if(g=ot.getViewerPose(m||d),E=ot,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(_,S.framebuffer),t.setRenderTarget(_));let xt=!1;St.length!==C.cameras.length&&(C.cameras.length=0,xt=!0);for(let zt=0;zt<St.length;zt++){const It=St[zt];let Xt=null;if(S!==null)Xt=S.getViewport(It);else{const ee=v.getViewSubImage(x,It);Xt=ee.viewport,zt===0&&(t.setRenderTargetTextures(_,ee.colorTexture,x.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(_))}let Zt=ft[zt];Zt===void 0&&(Zt=new oi,Zt.layers.enable(zt),Zt.viewport=new Sn,ft[zt]=Zt),Zt.matrix.fromArray(It.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(It.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),zt===0&&(C.matrix.copy(Zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xt===!0&&C.cameras.push(Zt)}}for(let St=0;St<O.length;St++){const xt=R[St],zt=O[St];xt!==null&&zt!==void 0&&zt.update(xt,ot,m||d)}U&&U(k,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),E=null}const nt=new Q_;nt.setAnimationLoop(j),this.setAnimationLoop=function(k){U=k},this.dispose=function(){}}}function GT(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Y_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,R,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,N)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),b(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,O,R):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_).envMap;if(O&&(y.envMap.value=O,y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*R,i(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,O,R){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=R*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),t.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VT(r,t,i,s){let l={},c={},d=[];const f=i.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(O,R){const N=R.program;s.uniformBlockBinding(O,N)}function m(O,R){let N=l[O.id];N===void 0&&(E(O),N=g(O),l[O.id]=N,O.addEventListener("dispose",y));const G=R.program;s.updateUBOMapping(O,G);const I=t.render.frame;c[O.id]!==I&&(x(O),c[O.id]=I)}function g(O){const R=v();O.__bindingPointIndex=R;const N=r.createBuffer(),G=O.__size,I=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,G,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,N),N}function v(){for(let O=0;O<f;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const R=l[O.id],N=O.uniforms,G=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let I=0,B=N.length;I<B;I++){const ft=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,P=ft.length;C<P;C++){const ut=ft[C];if(S(ut,I,C,G)===!0){const dt=ut.__offset,Et=Array.isArray(ut.value)?ut.value:[ut.value];let Y=0;for(let tt=0;tt<Et.length;tt++){const z=Et[tt],J=b(z);typeof z=="number"||typeof z=="boolean"?(ut.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,dt+Y,ut.__data)):z.isMatrix3?(ut.__data[0]=z.elements[0],ut.__data[1]=z.elements[1],ut.__data[2]=z.elements[2],ut.__data[3]=0,ut.__data[4]=z.elements[3],ut.__data[5]=z.elements[4],ut.__data[6]=z.elements[5],ut.__data[7]=0,ut.__data[8]=z.elements[6],ut.__data[9]=z.elements[7],ut.__data[10]=z.elements[8],ut.__data[11]=0):(z.toArray(ut.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,dt,ut.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,R,N,G){const I=O.value,B=R+"_"+N;if(G[B]===void 0)return typeof I=="number"||typeof I=="boolean"?G[B]=I:G[B]=I.clone(),!0;{const ft=G[B];if(typeof I=="number"||typeof I=="boolean"){if(ft!==I)return G[B]=I,!0}else if(ft.equals(I)===!1)return ft.copy(I),!0}return!1}function E(O){const R=O.uniforms;let N=0;const G=16;for(let B=0,ft=R.length;B<ft;B++){const C=Array.isArray(R[B])?R[B]:[R[B]];for(let P=0,ut=C.length;P<ut;P++){const dt=C[P],Et=Array.isArray(dt.value)?dt.value:[dt.value];for(let Y=0,tt=Et.length;Y<tt;Y++){const z=Et[Y],J=b(z),et=N%G;et!==0&&G-et<J.boundary&&(N+=G-et),dt.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),dt.__offset=N,N+=J.storage}}}const I=N%G;return I>0&&(N+=G-I),O.__size=N,O.__cache={},this}function b(O){const R={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(R.boundary=4,R.storage=4):O.isVector2?(R.boundary=8,R.storage=8):O.isVector3||O.isColor?(R.boundary=16,R.storage=12):O.isVector4?(R.boundary=16,R.storage=16):O.isMatrix3?(R.boundary=48,R.storage=48):O.isMatrix4?(R.boundary=64,R.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),R}function y(O){const R=O.target;R.removeEventListener("dispose",y);const N=d.indexOf(R.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:p,update:m,dispose:_}}class sv{constructor(t={}){const{canvas:i=IS(),context:s=null,depth:l=!0,stencil:c=!0,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let x;s!==null?x=s.getContextAttributes().alpha:x=d;const S=new Uint32Array(4),E=new Int32Array(4);let b=null,y=null;const _=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Fa,this.toneMappingExposure=1;const R=this;let N=!1,G=0,I=0,B=null,ft=-1,C=null;const P=new Sn,ut=new Sn;let dt=null;const Et=new Ae(0);let Y=0,tt=i.width,z=i.height,J=1,et=null,mt=null;const U=new Sn(0,0,tt,z),j=new Sn(0,0,tt,z);let nt=!1;const k=new Yh;let ot=!1,St=!1,xt=null;const zt=new nn,It=new qt,Xt=new q,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return B===null?J:1}let lt=s;function Fe(A,V){for(let Q=0;Q<A.length;Q++){const rt=A[Q],Z=i.getContext(rt,V);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",X,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),lt===null){const V=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&V.shift(),lt=Fe(V,A),lt===null)throw Fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&lt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),lt.getShaderPrecisionFormat===void 0&&(lt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ht,$t,Ft,ce,At,L,T,K,gt,pt,bt,Ot,Dt,Pt,Gt,Kt,Tt,ge,H,Mt,Ut,Rt,jt,ue;function de(){Ht=new Jb(lt),$t=new Wb(lt,Ht,t),Ht.init($t),Rt=new BT(lt,Ht,$t),Ft=new PT(lt,Ht,$t),ce=new e1(lt),At=new ST,L=new zT(lt,Ht,Ft,At,$t,Rt,ce),T=new Yb(R),K=new Qb(R),gt=new cM(lt,$t),jt=new Xb(lt,Ht,gt,$t),pt=new $b(lt,gt,ce,jt),bt=new s1(lt,pt,gt,ce),H=new a1(lt,$t,L),Kt=new qb(At),Ot=new yT(R,T,K,Ht,$t,jt,Kt),Dt=new GT(R,At),Pt=new ET,Gt=new CT(Ht,$t),ge=new kb(R,T,K,Ft,bt,x,p),Tt=new OT(R,bt,$t),ue=new VT(lt,ce,$t,Ft),Mt=new jb(lt,Ht,ce,$t),Ut=new t1(lt,Ht,ce,$t),ce.programs=Ot.programs,R.capabilities=$t,R.extensions=Ht,R.properties=At,R.renderLists=Pt,R.shadowMap=Tt,R.state=Ft,R.info=ce}de();const fe=new HT(R,lt);this.xr=fe,this.getContext=function(){return lt},this.getContextAttributes=function(){return lt.getContextAttributes()},this.forceContextLoss=function(){const A=Ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(tt,z,!1))},this.getSize=function(A){return A.set(tt,z)},this.setSize=function(A,V,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,z=V,i.width=Math.floor(A*J),i.height=Math.floor(V*J),Q===!0&&(i.style.width=A+"px",i.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(tt*J,z*J).floor()},this.setDrawingBufferSize=function(A,V,Q){tt=A,z=V,J=Q,i.width=Math.floor(A*Q),i.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,V,Q,rt){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,V,Q,rt),Ft.viewport(P.copy(U).multiplyScalar(J).floor())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,V,Q,rt){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,V,Q,rt),Ft.scissor(ut.copy(j).multiplyScalar(J).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){Ft.setScissorTest(nt=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,V=!0,Q=!0){let rt=0;if(A){let Z=!1;if(B!==null){const wt=B.texture.format;Z=wt===O_||wt===N_||wt===U_}if(Z){const wt=B.texture.type,Wt=wt===Ha||wt===za||wt===Xh||wt===ps||wt===L_||wt===D_,Vt=ge.getClearColor(),te=ge.getClearAlpha(),he=Vt.r,se=Vt.g,ne=Vt.b;Wt?(S[0]=he,S[1]=se,S[2]=ne,S[3]=te,lt.clearBufferuiv(lt.COLOR,0,S)):(E[0]=he,E[1]=se,E[2]=ne,E[3]=te,lt.clearBufferiv(lt.COLOR,0,E))}else rt|=lt.COLOR_BUFFER_BIT}V&&(rt|=lt.DEPTH_BUFFER_BIT),Q&&(rt|=lt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",X,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Pt.dispose(),Gt.dispose(),At.dispose(),T.dispose(),K.dispose(),bt.dispose(),jt.dispose(),ue.dispose(),Ot.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",an),fe.removeEventListener("sessionend",Se),xt&&(xt.dispose(),xt=null),Re.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=ce.autoReset,V=Tt.enabled,Q=Tt.autoUpdate,rt=Tt.needsUpdate,Z=Tt.type;de(),ce.autoReset=A,Tt.enabled=V,Tt.autoUpdate=Q,Tt.needsUpdate=rt,Tt.type=Z}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nt(A){const V=A.target;V.removeEventListener("dispose",Nt),Jt(V)}function Jt(A){Yt(A),At.remove(A)}function Yt(A){const V=At.get(A).programs;V!==void 0&&(V.forEach(function(Q){Ot.releaseProgram(Q)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,rt,Z,wt){V===null&&(V=Zt);const Wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=ui(A,V,Q,rt,Z);Ft.setMaterial(rt,Wt);let te=Q.index,he=1;if(rt.wireframe===!0){if(te=pt.getWireframeAttribute(Q),te===void 0)return;he=2}const se=Q.drawRange,ne=Q.attributes.position;let ve=se.start*he,He=(se.start+se.count)*he;wt!==null&&(ve=Math.max(ve,wt.start*he),He=Math.min(He,(wt.start+wt.count)*he)),te!==null?(ve=Math.max(ve,0),He=Math.min(He,te.count)):ne!=null&&(ve=Math.max(ve,0),He=Math.min(He,ne.count));const Xe=He-ve;if(Xe<0||Xe===1/0)return;jt.setup(Z,rt,Vt,Q,te);let pn,De=Mt;if(te!==null&&(pn=gt.get(te),De=Ut,De.setIndex(pn)),Z.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*ee()),De.setMode(lt.LINES)):De.setMode(lt.TRIANGLES);else if(Z.isLine){let oe=rt.linewidth;oe===void 0&&(oe=1),Ft.setLineWidth(oe*ee()),Z.isLineSegments?De.setMode(lt.LINES):Z.isLineLoop?De.setMode(lt.LINE_LOOP):De.setMode(lt.LINE_STRIP)}else Z.isPoints?De.setMode(lt.POINTS):Z.isSprite&&De.setMode(lt.TRIANGLES);if(Z.isBatchedMesh)De.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)De.renderInstances(ve,Xe,Z.count);else if(Q.isInstancedBufferGeometry){const oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ni=Math.min(Q.instanceCount,oe);De.renderInstances(ve,Xe,Ni)}else De.render(ve,Xe)};function _e(A,V,Q){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Si(A,V,Q),A.side=Ga,A.needsUpdate=!0,Si(A,V,Q),A.side=ea):Si(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),y=Gt.get(Q),y.init(),O.push(y),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights(R._useLegacyLights);const rt=new Set;return A.traverse(function(Z){const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Wt=0;Wt<wt.length;Wt++){const Vt=wt[Wt];_e(Vt,Q,Z),rt.add(Vt)}else _e(wt,Q,Z),rt.add(wt)}),O.pop(),y=null,rt},this.compileAsync=function(A,V,Q=null){const rt=this.compile(A,V,Q);return new Promise(Z=>{function wt(){if(rt.forEach(function(Wt){At.get(Wt).currentProgram.isReady()&&rt.delete(Wt)}),rt.size===0){Z(A);return}setTimeout(wt,10)}Ht.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ye=null;function Ye(A){ye&&ye(A)}function an(){Re.stop()}function Se(){Re.start()}const Re=new Q_;Re.setAnimationLoop(Ye),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(A){ye=A,fe.setAnimationLoop(A),A===null?Re.stop():Re.start()},fe.addEventListener("sessionstart",an),fe.addEventListener("sessionend",Se),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(V),V=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,V,B),y=Gt.get(A,O.length),y.init(),O.push(y),zt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),k.setFromProjectionMatrix(zt),St=this.localClippingEnabled,ot=Kt.init(this.clippingPlanes,St),b=Pt.get(A,_.length),b.init(),_.push(b),Oe(A,V,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(et,mt),this.info.render.frame++,ot===!0&&Kt.beginShadows();const Q=y.state.shadowsArray;if(Tt.render(Q,A,V),ot===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(b,A),y.setupLights(R._useLegacyLights),V.isArrayCamera){const rt=V.cameras;for(let Z=0,wt=rt.length;Z<wt;Z++){const Wt=rt[Z];Kn(b,A,Wt,Wt.viewport)}}else Kn(b,A,V);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(R,A,V),jt.resetDefaultState(),ft=-1,C=null,O.pop(),O.length>0?y=O[O.length-1]:y=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Oe(A,V,Q,rt){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||k.intersectsSprite(A)){rt&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const Wt=bt.update(A),Vt=A.material;Vt.visible&&b.push(A,Wt,Vt,Q,Xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||k.intersectsObject(A))){const Wt=bt.update(A),Vt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Xt.copy(Wt.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Vt)){const te=Wt.groups;for(let he=0,se=te.length;he<se;he++){const ne=te[he],ve=Vt[ne.materialIndex];ve&&ve.visible&&b.push(A,Wt,ve,Q,Xt.z,ne)}}else Vt.visible&&b.push(A,Wt,Vt,Q,Xt.z,null)}}const wt=A.children;for(let Wt=0,Vt=wt.length;Wt<Vt;Wt++)Oe(wt[Wt],V,Q,rt)}function Kn(A,V,Q,rt){const Z=A.opaque,wt=A.transmissive,Wt=A.transparent;y.setupLightsView(Q),ot===!0&&Kt.setGlobalState(R.clippingPlanes,Q),wt.length>0&&sa(Z,wt,V,Q),rt&&Ft.viewport(P.copy(rt)),Z.length>0&&Di(Z,V,Q),wt.length>0&&Di(wt,V,Q),Wt.length>0&&Di(Wt,V,Q),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function sa(A,V,Q,rt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const wt=$t.isWebGL2;xt===null&&(xt=new _s(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")?Xo:Ha,minFilter:ko,samples:wt?4:0})),R.getDrawingBufferSize(It),wt?xt.setSize(It.x,It.y):xt.setSize(Nc(It.x),Nc(It.y));const Wt=R.getRenderTarget();R.setRenderTarget(xt),R.getClearColor(Et),Y=R.getClearAlpha(),Y<1&&R.setClearColor(16777215,.5),R.clear();const Vt=R.toneMapping;R.toneMapping=Fa,Di(A,Q,rt),L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt);let te=!1;for(let he=0,se=V.length;he<se;he++){const ne=V[he],ve=ne.object,He=ne.geometry,Xe=ne.material,pn=ne.group;if(Xe.side===ea&&ve.layers.test(rt.layers)){const De=Xe.side;Xe.side=In,Xe.needsUpdate=!0,Va(ve,Q,rt,He,Xe,pn),Xe.side=De,Xe.needsUpdate=!0,te=!0}}te===!0&&(L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt)),R.setRenderTarget(Wt),R.setClearColor(Et,Y),R.toneMapping=Vt}function Di(A,V,Q){const rt=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,wt=A.length;Z<wt;Z++){const Wt=A[Z],Vt=Wt.object,te=Wt.geometry,he=rt===null?Wt.material:rt,se=Wt.group;Vt.layers.test(Q.layers)&&Va(Vt,V,Q,te,he,se)}}function Va(A,V,Q,rt,Z,wt){A.onBeforeRender(R,V,Q,rt,Z,wt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,V,Q,rt,A,wt),Z.transparent===!0&&Z.side===ea&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,R.renderBufferDirect(Q,V,rt,Z,A,wt),Z.side=Ga,Z.needsUpdate=!0,R.renderBufferDirect(Q,V,rt,Z,A,wt),Z.side=ea):R.renderBufferDirect(Q,V,rt,Z,A,wt),A.onAfterRender(R,V,Q,rt,Z,wt)}function Si(A,V,Q){V.isScene!==!0&&(V=Zt);const rt=At.get(A),Z=y.state.lights,wt=y.state.shadowsArray,Wt=Z.state.version,Vt=Ot.getParameters(A,Z.state,wt,V,Q),te=Ot.getProgramCacheKey(Vt);let he=rt.programs;rt.environment=A.isMeshStandardMaterial?V.environment:null,rt.fog=V.fog,rt.envMap=(A.isMeshStandardMaterial?K:T).get(A.envMap||rt.environment),he===void 0&&(A.addEventListener("dispose",Nt),he=new Map,rt.programs=he);let se=he.get(te);if(se!==void 0){if(rt.currentProgram===se&&rt.lightsStateVersion===Wt)return Ui(A,Vt),se}else Vt.uniforms=Ot.getUniforms(A),A.onBuild(Q,Vt,R),A.onBeforeCompile(Vt,R),se=Ot.acquireProgram(Vt,te),he.set(te,se),rt.uniforms=Vt.uniforms;const ne=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ne.clippingPlanes=Kt.uniform),Ui(A,Vt),rt.needsLights=at(A),rt.lightsStateVersion=Wt,rt.needsLights&&(ne.ambientLightColor.value=Z.state.ambient,ne.lightProbe.value=Z.state.probe,ne.directionalLights.value=Z.state.directional,ne.directionalLightShadows.value=Z.state.directionalShadow,ne.spotLights.value=Z.state.spot,ne.spotLightShadows.value=Z.state.spotShadow,ne.rectAreaLights.value=Z.state.rectArea,ne.ltc_1.value=Z.state.rectAreaLTC1,ne.ltc_2.value=Z.state.rectAreaLTC2,ne.pointLights.value=Z.state.point,ne.pointLightShadows.value=Z.state.pointShadow,ne.hemisphereLights.value=Z.state.hemi,ne.directionalShadowMap.value=Z.state.directionalShadowMap,ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ne.spotShadowMap.value=Z.state.spotShadowMap,ne.spotLightMatrix.value=Z.state.spotLightMatrix,ne.spotLightMap.value=Z.state.spotLightMap,ne.pointShadowMap.value=Z.state.pointShadowMap,ne.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=se,rt.uniformsList=null,se}function ci(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Rc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ui(A,V){const Q=At.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function ui(A,V,Q,rt,Z){V.isScene!==!0&&(V=Zt),L.resetTextureUnits();const wt=V.fog,Wt=rt.isMeshStandardMaterial?V.environment:null,Vt=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ia,te=(rt.isMeshStandardMaterial?K:T).get(rt.envMap||Wt),he=rt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,se=!!Q.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ne=!!Q.morphAttributes.position,ve=!!Q.morphAttributes.normal,He=!!Q.morphAttributes.color;let Xe=Fa;rt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const pn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,De=pn!==void 0?pn.length:0,oe=At.get(rt),Ni=y.state.lights;if(ot===!0&&(St===!0||A!==C)){const We=A===C&&rt.id===ft;Kt.setState(rt,A,We)}let je=!1;rt.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Ni.state.version||oe.outputColorSpace!==Vt||Z.isBatchedMesh&&oe.batching===!1||!Z.isBatchedMesh&&oe.batching===!0||Z.isInstancedMesh&&oe.instancing===!1||!Z.isInstancedMesh&&oe.instancing===!0||Z.isSkinnedMesh&&oe.skinning===!1||!Z.isSkinnedMesh&&oe.skinning===!0||Z.isInstancedMesh&&oe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&oe.instancingColor===!1&&Z.instanceColor!==null||oe.envMap!==te||rt.fog===!0&&oe.fog!==wt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==Kt.numPlanes||oe.numIntersection!==Kt.numIntersection)||oe.vertexAlphas!==he||oe.vertexTangents!==se||oe.morphTargets!==ne||oe.morphNormals!==ve||oe.morphColors!==He||oe.toneMapping!==Xe||$t.isWebGL2===!0&&oe.morphTargetsCount!==De)&&(je=!0):(je=!0,oe.__version=rt.version);let sn=oe.currentProgram;je===!0&&(sn=Si(rt,V,Z));let Pr=!1,ka=!1,ra=!1;const cn=sn.getUniforms(),Qn=oe.uniforms;if(Ft.useProgram(sn.program)&&(Pr=!0,ka=!0,ra=!0),rt.id!==ft&&(ft=rt.id,ka=!0),Pr||C!==A){cn.setValue(lt,"projectionMatrix",A.projectionMatrix),cn.setValue(lt,"viewMatrix",A.matrixWorldInverse);const We=cn.map.cameraPosition;We!==void 0&&We.setValue(lt,Xt.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&cn.setValue(lt,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&cn.setValue(lt,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,ka=!0,ra=!0)}if(Z.isSkinnedMesh){cn.setOptional(lt,Z,"bindMatrix"),cn.setOptional(lt,Z,"bindMatrixInverse");const We=Z.skeleton;We&&($t.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),cn.setValue(lt,"boneTexture",We.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(cn.setOptional(lt,Z,"batchingTexture"),cn.setValue(lt,"batchingTexture",Z._matricesTexture,L));const zr=Q.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&$t.isWebGL2===!0)&&H.update(Z,Q,sn),(ka||oe.receiveShadow!==Z.receiveShadow)&&(oe.receiveShadow=Z.receiveShadow,cn.setValue(lt,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Qn.envMap.value=te,Qn.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),ka&&(cn.setValue(lt,"toneMappingExposure",R.toneMappingExposure),oe.needsLights&&fi(Qn,ra),wt&&rt.fog===!0&&Dt.refreshFogUniforms(Qn,wt),Dt.refreshMaterialUniforms(Qn,rt,J,z,xt),Rc.upload(lt,ci(oe),Qn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Rc.upload(lt,ci(oe),Qn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&cn.setValue(lt,"center",Z.center),cn.setValue(lt,"modelViewMatrix",Z.modelViewMatrix),cn.setValue(lt,"normalMatrix",Z.normalMatrix),cn.setValue(lt,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const We=rt.uniformsGroups;for(let Xa=0,qo=We.length;Xa<qo;Xa++)if($t.isWebGL2){const Ms=We[Xa];ue.update(Ms,sn),ue.bind(Ms,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function fi(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function at(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,V,Q){At.get(A.texture).__webglTexture=V,At.get(A.depthTexture).__webglTexture=Q;const rt=At.get(A);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=Q===void 0,rt.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const Q=At.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Q=0){B=A,G=V,I=Q;let rt=!0,Z=null,wt=!1,Wt=!1;if(A){const te=At.get(A);te.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(lt.FRAMEBUFFER,null),rt=!1):te.__webglFramebuffer===void 0?L.setupRenderTarget(A):te.__hasExternalTextures&&L.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture);const he=A.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Wt=!0);const se=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[V])?Z=se[V][Q]:Z=se[V],wt=!0):$t.isWebGL2&&A.samples>0&&L.useMultisampledRTT(A)===!1?Z=At.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?Z=se[Q]:Z=se,P.copy(A.viewport),ut.copy(A.scissor),dt=A.scissorTest}else P.copy(U).multiplyScalar(J).floor(),ut.copy(j).multiplyScalar(J).floor(),dt=nt;if(Ft.bindFramebuffer(lt.FRAMEBUFFER,Z)&&$t.drawBuffers&&rt&&Ft.drawBuffers(A,Z),Ft.viewport(P),Ft.scissor(ut),Ft.setScissorTest(dt),wt){const te=At.get(A.texture);lt.framebufferTexture2D(lt.FRAMEBUFFER,lt.COLOR_ATTACHMENT0,lt.TEXTURE_CUBE_MAP_POSITIVE_X+V,te.__webglTexture,Q)}else if(Wt){const te=At.get(A.texture),he=V||0;lt.framebufferTextureLayer(lt.FRAMEBUFFER,lt.COLOR_ATTACHMENT0,te.__webglTexture,Q||0,he)}ft=-1},this.readRenderTargetPixels=function(A,V,Q,rt,Z,wt,Wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(Vt=Vt[Wt]),Vt){Ft.bindFramebuffer(lt.FRAMEBUFFER,Vt);try{const te=A.texture,he=te.format,se=te.type;if(he!==yi&&Rt.convert(he)!==lt.getParameter(lt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ne=se===Xo&&(Ht.has("EXT_color_buffer_half_float")||$t.isWebGL2&&Ht.has("EXT_color_buffer_float"));if(se!==Ha&&Rt.convert(se)!==lt.getParameter(lt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===Ba&&($t.isWebGL2||Ht.has("OES_texture_float")||Ht.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-rt&&Q>=0&&Q<=A.height-Z&&lt.readPixels(V,Q,rt,Z,Rt.convert(he),Rt.convert(se),wt)}finally{const te=B!==null?At.get(B).__webglFramebuffer:null;Ft.bindFramebuffer(lt.FRAMEBUFFER,te)}}},this.copyFramebufferToTexture=function(A,V,Q=0){const rt=Math.pow(2,-Q),Z=Math.floor(V.image.width*rt),wt=Math.floor(V.image.height*rt);L.setTexture2D(V,0),lt.copyTexSubImage2D(lt.TEXTURE_2D,Q,0,0,A.x,A.y,Z,wt),Ft.unbindTexture()},this.copyTextureToTexture=function(A,V,Q,rt=0){const Z=V.image.width,wt=V.image.height,Wt=Rt.convert(Q.format),Vt=Rt.convert(Q.type);L.setTexture2D(Q,0),lt.pixelStorei(lt.UNPACK_FLIP_Y_WEBGL,Q.flipY),lt.pixelStorei(lt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),lt.pixelStorei(lt.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?lt.texSubImage2D(lt.TEXTURE_2D,rt,A.x,A.y,Z,wt,Wt,Vt,V.image.data):V.isCompressedTexture?lt.compressedTexSubImage2D(lt.TEXTURE_2D,rt,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Wt,V.mipmaps[0].data):lt.texSubImage2D(lt.TEXTURE_2D,rt,A.x,A.y,Wt,Vt,V.image),rt===0&&Q.generateMipmaps&&lt.generateMipmap(lt.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q,rt,Z=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=A.max.x-A.min.x+1,Wt=A.max.y-A.min.y+1,Vt=A.max.z-A.min.z+1,te=Rt.convert(rt.format),he=Rt.convert(rt.type);let se;if(rt.isData3DTexture)L.setTexture3D(rt,0),se=lt.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)L.setTexture2DArray(rt,0),se=lt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}lt.pixelStorei(lt.UNPACK_FLIP_Y_WEBGL,rt.flipY),lt.pixelStorei(lt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),lt.pixelStorei(lt.UNPACK_ALIGNMENT,rt.unpackAlignment);const ne=lt.getParameter(lt.UNPACK_ROW_LENGTH),ve=lt.getParameter(lt.UNPACK_IMAGE_HEIGHT),He=lt.getParameter(lt.UNPACK_SKIP_PIXELS),Xe=lt.getParameter(lt.UNPACK_SKIP_ROWS),pn=lt.getParameter(lt.UNPACK_SKIP_IMAGES),De=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;lt.pixelStorei(lt.UNPACK_ROW_LENGTH,De.width),lt.pixelStorei(lt.UNPACK_IMAGE_HEIGHT,De.height),lt.pixelStorei(lt.UNPACK_SKIP_PIXELS,A.min.x),lt.pixelStorei(lt.UNPACK_SKIP_ROWS,A.min.y),lt.pixelStorei(lt.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?lt.texSubImage3D(se,Z,V.x,V.y,V.z,wt,Wt,Vt,te,he,De.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),lt.compressedTexSubImage3D(se,Z,V.x,V.y,V.z,wt,Wt,Vt,te,De.data)):lt.texSubImage3D(se,Z,V.x,V.y,V.z,wt,Wt,Vt,te,he,De),lt.pixelStorei(lt.UNPACK_ROW_LENGTH,ne),lt.pixelStorei(lt.UNPACK_IMAGE_HEIGHT,ve),lt.pixelStorei(lt.UNPACK_SKIP_PIXELS,He),lt.pixelStorei(lt.UNPACK_SKIP_ROWS,Xe),lt.pixelStorei(lt.UNPACK_SKIP_IMAGES,pn),Z===0&&rt.generateMipmaps&&lt.generateMipmap(se),Ft.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){G=0,I=0,B=null,Ft.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===jh?"display-p3":"srgb",i.unpackColorSpace=Ie.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?gs:z_}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gs?xn:ia}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class kT extends sv{}kT.prototype.isWebGL1Renderer=!0;class XT extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class rv extends Ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const a_=new q,s_=new q,r_=new nn,Th=new Ic,Mc=new Bc;class jT extends Mn{constructor(t=new Zn,i=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)a_.fromBufferAttribute(i,l-1),s_.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=a_.distanceTo(s_);t.setAttribute("lineDistance",new Qe(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=c,t.ray.intersectsSphere(Mc)===!1)return;r_.copy(l).invert(),Th.copy(t.ray).applyMatrix4(r_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=new q,g=new q,v=new q,x=new q,S=this.isLineSegments?2:1,E=s.index,y=s.attributes.position;if(E!==null){const _=Math.max(0,d.start),O=Math.min(E.count,d.start+d.count);for(let R=_,N=O-1;R<N;R+=S){const G=E.getX(R),I=E.getX(R+1);if(m.fromBufferAttribute(y,G),g.fromBufferAttribute(y,I),Th.distanceSqToSegment(m,g,x,v)>p)continue;x.applyMatrix4(this.matrixWorld);const ft=t.ray.origin.distanceTo(x);ft<t.near||ft>t.far||i.push({distance:ft,point:v.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,d.start),O=Math.min(y.count,d.start+d.count);for(let R=_,N=O-1;R<N;R+=S){if(m.fromBufferAttribute(y,R),g.fromBufferAttribute(y,R+1),Th.distanceSqToSegment(m,g,x,v)>p)continue;x.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(x);I<t.near||I>t.far||i.push({distance:I,point:v.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}const o_=new q,l_=new q;class WT extends jT{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)o_.fromBufferAttribute(i,l),l_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+o_.distanceTo(l_);t.setAttribute("lineDistance",new Qe(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aa{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=t;d++)s=this.getPoint(d/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const s=this.getLengths();let l=0;const c=s.length;let d;i?d=i:d=t*s[c-1];let f=0,p=c-1,m;for(;f<=p;)if(l=Math.floor(f+(p-f)/2),m=s[l]-d,m<0)f=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===d)return l/(c-1);const g=s[l],x=s[l+1]-g,S=(d-g)/x;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const d=this.getPoint(l),f=this.getPoint(c),p=i||(d.isVector2?new qt:new q);return p.copy(f).sub(d).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i){const s=new q,l=[],c=[],d=[],f=new q,p=new nn;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new q)}c[0]=new q,d[0]=new q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=m&&(m=g,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),x<=m&&s.set(0,0,1),f.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],f),d[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),d[S]=d[S-1].clone(),f.crossVectors(l[S-1],l[S]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(yn(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(f,E))}d[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(yn(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(f.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),d[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ov extends aa{constructor(t=0,i=0,s=1,l=1,c=0,d=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=d,this.aClockwise=f,this.aRotation=p}getPoint(t,i){const s=i||new qt,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const d=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(d?c=0:c=l),this.aClockwise===!0&&!d&&(c===l?c=-l:c=c-l);const f=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=p-this.aX,S=m-this.aY;p=x*g-S*v+this.aX,m=x*v+S*g+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qT extends ov{constructor(t,i,s,l,c,d){super(t,i,s,s,l,c,d),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let r=0,t=0,i=0,s=0;function l(c,d,f,p){r=c,t=f,i=-3*c+3*d-2*f-p,s=2*c-2*d+f+p}return{initCatmullRom:function(c,d,f,p,m){l(d,f,m*(f-c),m*(p-d))},initNonuniformCatmullRom:function(c,d,f,p,m,g,v){let x=(d-c)/m-(f-c)/(m+g)+(f-d)/g,S=(f-d)/g-(p-d)/(g+v)+(p-f)/v;x*=g,S*=g,l(d,f,x,S)},calc:function(c){const d=c*c,f=d*c;return r+t*c+i*d+s*f}}}const Ec=new q,Ah=new Kh,Rh=new Kh,wh=new Kh;class lv extends aa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new q){const s=i,l=this.points,c=l.length,d=(c-(this.closed?0:1))*t;let f=Math.floor(d),p=d-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/c)+1)*c:p===0&&f===c-1&&(f=c-2,p=1);let m,g;this.closed||f>0?m=l[(f-1)%c]:(Ec.subVectors(l[0],l[1]).add(l[0]),m=Ec);const v=l[f%c],x=l[(f+1)%c];if(this.closed||f+2<c?g=l[(f+2)%c]:(Ec.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),b=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),y<1e-4&&(y=b),Ah.initNonuniformCatmullRom(m.x,v.x,x.x,g.x,E,b,y),Rh.initNonuniformCatmullRom(m.y,v.y,x.y,g.y,E,b,y),wh.initNonuniformCatmullRom(m.z,v.z,x.z,g.z,E,b,y)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(m.x,v.x,x.x,g.x,this.tension),Rh.initCatmullRom(m.y,v.y,x.y,g.y,this.tension),wh.initCatmullRom(m.z,v.z,x.z,g.z,this.tension));return s.set(Ah.calc(p),Rh.calc(p),wh.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function c_(r,t,i,s,l){const c=(s-t)*.5,d=(l-i)*.5,f=r*r,p=r*f;return(2*i-2*s+c+d)*p+(-3*i+3*s-2*c-d)*f+c*r+i}function YT(r,t){const i=1-r;return i*i*t}function ZT(r,t){return 2*(1-r)*r*t}function KT(r,t){return r*r*t}function Ho(r,t,i,s){return YT(r,t)+ZT(r,i)+KT(r,s)}function QT(r,t){const i=1-r;return i*i*i*t}function JT(r,t){const i=1-r;return 3*i*i*r*t}function $T(r,t){return 3*(1-r)*r*r*t}function tA(r,t){return r*r*r*t}function Go(r,t,i,s,l){return QT(r,t)+JT(r,i)+$T(r,s)+tA(r,l)}class eA extends aa{constructor(t=new qt,i=new qt,s=new qt,l=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new qt){const s=i,l=this.v0,c=this.v1,d=this.v2,f=this.v3;return s.set(Go(t,l.x,c.x,d.x,f.x),Go(t,l.y,c.y,d.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nA extends aa{constructor(t=new q,i=new q,s=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,d=this.v2,f=this.v3;return s.set(Go(t,l.x,c.x,d.x,f.x),Go(t,l.y,c.y,d.y,f.y),Go(t,l.z,c.z,d.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iA extends aa{constructor(t=new qt,i=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new qt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aA extends aa{constructor(t=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new q){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sA extends aa{constructor(t=new qt,i=new qt,s=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new qt){const s=i,l=this.v0,c=this.v1,d=this.v2;return s.set(Ho(t,l.x,c.x,d.x),Ho(t,l.y,c.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cv extends aa{constructor(t=new q,i=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,d=this.v2;return s.set(Ho(t,l.x,c.x,d.x),Ho(t,l.y,c.y,d.y),Ho(t,l.z,c.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rA extends aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new qt){const s=i,l=this.points,c=(l.length-1)*t,d=Math.floor(c),f=c-d,p=l[d===0?d:d-1],m=l[d],g=l[d>l.length-2?l.length-1:d+1],v=l[d>l.length-3?l.length-1:d+2];return s.set(c_(f,p.x,m.x,g.x,v.x),c_(f,p.y,m.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new qt().fromArray(l))}return this}}var oA=Object.freeze({__proto__:null,ArcCurve:qT,CatmullRomCurve3:lv,CubicBezierCurve:eA,CubicBezierCurve3:nA,EllipseCurve:ov,LineCurve:iA,LineCurve3:aA,QuadraticBezierCurve:sA,QuadraticBezierCurve3:cv,SplineCurve:rA});class Qh extends Zn{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:f,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],S=[];let E=0;const b=[],y=s/2;let _=0;O(),d===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(S,2));function O(){const N=new q,G=new q;let I=0;const B=(i-t)/s;for(let ft=0;ft<=c;ft++){const C=[],P=ft/c,ut=P*(i-t)+t;for(let dt=0;dt<=l;dt++){const Et=dt/l,Y=Et*p+f,tt=Math.sin(Y),z=Math.cos(Y);G.x=ut*tt,G.y=-P*s+y,G.z=ut*z,v.push(G.x,G.y,G.z),N.set(tt,B,z).normalize(),x.push(N.x,N.y,N.z),S.push(Et,1-P),C.push(E++)}b.push(C)}for(let ft=0;ft<l;ft++)for(let C=0;C<c;C++){const P=b[C][ft],ut=b[C+1][ft],dt=b[C+1][ft+1],Et=b[C][ft+1];g.push(P,ut,Et),g.push(ut,dt,Et),I+=6}m.addGroup(_,I,0),_+=I}function R(N){const G=E,I=new qt,B=new q;let ft=0;const C=N===!0?t:i,P=N===!0?1:-1;for(let dt=1;dt<=l;dt++)v.push(0,y*P,0),x.push(0,P,0),S.push(.5,.5),E++;const ut=E;for(let dt=0;dt<=l;dt++){const Y=dt/l*p+f,tt=Math.cos(Y),z=Math.sin(Y);B.x=C*z,B.y=y*P,B.z=C*tt,v.push(B.x,B.y,B.z),x.push(0,P,0),I.x=tt*.5+.5,I.y=z*.5*P+.5,S.push(I.x,I.y),E++}for(let dt=0;dt<l;dt++){const Et=G+dt,Y=ut+dt;N===!0?g.push(Y,Y+1,Et):g.push(Y+1,Y,Et),ft+=3}m.addGroup(_,ft,N===!0?1:2),_+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends Zn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:f},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+f,Math.PI);let m=0;const g=[],v=new q,x=new q,S=[],E=[],b=[],y=[];for(let _=0;_<=s;_++){const O=[],R=_/s;let N=0;_===0&&d===0?N=.5/i:_===s&&p===Math.PI&&(N=-.5/i);for(let G=0;G<=i;G++){const I=G/i;v.x=-t*Math.cos(l+I*c)*Math.sin(d+R*f),v.y=t*Math.cos(d+R*f),v.z=t*Math.sin(l+I*c)*Math.sin(d+R*f),E.push(v.x,v.y,v.z),x.copy(v).normalize(),b.push(x.x,x.y,x.z),y.push(I+N,1-R),O.push(m++)}g.push(O)}for(let _=0;_<s;_++)for(let O=0;O<i;O++){const R=g[_][O+1],N=g[_][O],G=g[_+1][O],I=g[_+1][O+1];(_!==0||d>0)&&S.push(R,N,I),(_!==s-1||p<Math.PI)&&S.push(N,G,I)}this.setIndex(S),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jh extends Zn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],f=[],p=[],m=[],g=new q,v=new q,x=new q;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const b=E/l*c,y=S/s*Math.PI*2;v.x=(t+i*Math.cos(y))*Math.cos(b),v.y=(t+i*Math.cos(y))*Math.sin(b),v.z=i*Math.sin(y),f.push(v.x,v.y,v.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),x.subVectors(v,g).normalize(),p.push(x.x,x.y,x.z),m.push(E/l),m.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const b=(l+1)*S+E-1,y=(l+1)*(S-1)+E-1,_=(l+1)*(S-1)+E,O=(l+1)*S+E;d.push(b,y,O),d.push(y,_,O)}this.setIndex(d),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $h extends Zn{constructor(t=new cv(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const d=t.computeFrenetFrames(i,c);this.tangents=d.tangents,this.normals=d.normals,this.binormals=d.binormals;const f=new q,p=new q,m=new qt;let g=new q;const v=[],x=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(S,2));function b(){for(let R=0;R<i;R++)y(R);y(c===!1?i:0),O(),_()}function y(R){g=t.getPointAt(R/i,g);const N=d.normals[R],G=d.binormals[R];for(let I=0;I<=l;I++){const B=I/l*Math.PI*2,ft=Math.sin(B),C=-Math.cos(B);p.x=C*N.x+ft*G.x,p.y=C*N.y+ft*G.y,p.z=C*N.z+ft*G.z,p.normalize(),x.push(p.x,p.y,p.z),f.x=g.x+s*p.x,f.y=g.y+s*p.y,f.z=g.z+s*p.z,v.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=i;R++)for(let N=1;N<=l;N++){const G=(l+1)*(R-1)+(N-1),I=(l+1)*R+(N-1),B=(l+1)*R+N,ft=(l+1)*(R-1)+N;E.push(G,I,ft),E.push(I,B,ft)}}function O(){for(let R=0;R<=i;R++)for(let N=0;N<=l;N++)m.x=R/i,m.y=N/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $h(new oA[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class lA extends Ss{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class cA extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B_,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uv extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class uA extends uv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ch=new nn,u_=new q,f_=new q;class fA{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;u_.setFromMatrixPosition(t.matrixWorld),i.position.copy(u_),f_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(f_),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hA extends fA{constructor(){super(new J_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends uv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new hA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=d_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=d_();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function d_(){return(typeof performance>"u"?Date:performance).now()}class pA{constructor(t,i,s=0,l=1/0){this.ray=new Ic(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(t,i=!0,s=[]){return Hh(t,this,s,i),s.sort(p_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Hh(t[l],this,s,i);return s.sort(p_),s}}function p_(r,t){return r.distance-t.distance}function Hh(r,t,i,s){if(r.layers.test(t.layers)&&r.raycast(t,i),s===!0){const l=r.children;for(let c=0,d=l.length;c<d;c++)Hh(l[c],t,i,!0)}}class m_{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(yn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mA extends WT{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ae(s),l=new Ae(l);const c=i/2,d=t/i,f=t/2,p=[],m=[];for(let x=0,S=0,E=-f;x<=i;x++,E+=d){p.push(-f,0,E,f,0,E),p.push(E,0,-f,E,0,f);const b=x===c?s:l;b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3}const g=new Zn;g.setAttribute("position",new Qe(p,3)),g.setAttribute("color",new Qe(m,3));const v=new rv({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=re.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...f},p)=>re.createElement("svg",{ref:p,..._A,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:fv("lucide",l),...f},[...d.map(([m,g])=>re.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(r,t)=>{const i=re.forwardRef(({className:s,...l},c)=>re.createElement(vA,{ref:c,iconNode:t,className:fv(`lucide-${gA(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=Ve("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=Ve("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Ve("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=Ve("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=Ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Ve("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=Ve("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Ve("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=Ve("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=Ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=Ve("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=Ve("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=Ve("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=Ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=Ve("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=Ve("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=Ve("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=Ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=Ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=Ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=Ve("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=Ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=Ve("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=Ve("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=Ve("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=Ve("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),x_={type:"change"},Lh={type:"start"},y_={type:"end"},Ac=new Ic,S_=new Pa,zA=Math.cos(70*F_.DEG2RAD);class BA extends ys{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",bt),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",bt),this._domElementKeyEvents=null},this.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},this.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(x_),s.update(),c=l.NONE},this.update=(function(){const H=new q,Mt=new vs().setFromUnitVectors(t.up,new q(0,1,0)),Ut=Mt.clone().invert(),Rt=new q,jt=new vs,ue=new q,de=2*Math.PI;return function(Ct=null){const X=s.object.position;H.copy(X).sub(s.target),H.applyQuaternion(Mt),f.setFromVector3(H),s.autoRotate&&c===l.NONE&&ut(C(Ct)),s.enableDamping?(f.theta+=p.theta*s.dampingFactor,f.phi+=p.phi*s.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let Lt=s.minAzimuthAngle,Nt=s.maxAzimuthAngle;isFinite(Lt)&&isFinite(Nt)&&(Lt<-Math.PI?Lt+=de:Lt>Math.PI&&(Lt-=de),Nt<-Math.PI?Nt+=de:Nt>Math.PI&&(Nt-=de),Lt<=Nt?f.theta=Math.max(Lt,Math.min(Nt,f.theta)):f.theta=f.theta>(Lt+Nt)/2?Math.max(Lt,f.theta):Math.min(Nt,f.theta)),f.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,f.phi)),f.makeSafe(),s.enableDamping===!0?s.target.addScaledVector(g,s.dampingFactor):s.target.add(g),s.target.sub(s.cursor),s.target.clampLength(s.minTargetRadius,s.maxTargetRadius),s.target.add(s.cursor),s.zoomToCursor&&I||s.object.isOrthographicCamera?f.radius=mt(f.radius):f.radius=mt(f.radius*m),H.setFromSpherical(f),H.applyQuaternion(Ut),X.copy(s.target).add(H),s.object.lookAt(s.target),s.enableDamping===!0?(p.theta*=1-s.dampingFactor,p.phi*=1-s.dampingFactor,g.multiplyScalar(1-s.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Jt=!1;if(s.zoomToCursor&&I){let Yt=null;if(s.object.isPerspectiveCamera){const _e=H.length();Yt=mt(_e*m);const ye=_e-Yt;s.object.position.addScaledVector(N,ye),s.object.updateMatrixWorld()}else if(s.object.isOrthographicCamera){const _e=new q(G.x,G.y,0);_e.unproject(s.object),s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/m)),s.object.updateProjectionMatrix(),Jt=!0;const ye=new q(G.x,G.y,0);ye.unproject(s.object),s.object.position.sub(ye).add(_e),s.object.updateMatrixWorld(),Yt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),s.zoomToCursor=!1;Yt!==null&&(this.screenSpacePanning?s.target.set(0,0,-1).transformDirection(s.object.matrix).multiplyScalar(Yt).add(s.object.position):(Ac.origin.copy(s.object.position),Ac.direction.set(0,0,-1).transformDirection(s.object.matrix),Math.abs(s.object.up.dot(Ac.direction))<zA?t.lookAt(s.target):(S_.setFromNormalAndCoplanarPoint(s.object.up,s.target),Ac.intersectPlane(S_,s.target))))}else s.object.isOrthographicCamera&&(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/m)),s.object.updateProjectionMatrix(),Jt=!0);return m=1,I=!1,Jt||Rt.distanceToSquared(s.object.position)>d||8*(1-jt.dot(s.object.quaternion))>d||ue.distanceToSquared(s.target)>0?(s.dispatchEvent(x_),Rt.copy(s.object.position),jt.copy(s.object.quaternion),ue.copy(s.target),!0):!1}})(),this.dispose=function(){s.domElement.removeEventListener("contextmenu",Pt),s.domElement.removeEventListener("pointerdown",At),s.domElement.removeEventListener("pointercancel",T),s.domElement.removeEventListener("wheel",pt),s.domElement.removeEventListener("pointermove",L),s.domElement.removeEventListener("pointerup",T),s._domElementKeyEvents!==null&&(s._domElementKeyEvents.removeEventListener("keydown",bt),s._domElementKeyEvents=null)};const s=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=l.NONE;const d=1e-6,f=new m_,p=new m_;let m=1;const g=new q,v=new qt,x=new qt,S=new qt,E=new qt,b=new qt,y=new qt,_=new qt,O=new qt,R=new qt,N=new q,G=new qt;let I=!1;const B=[],ft={};function C(H){return H!==null?2*Math.PI/60*s.autoRotateSpeed*H:2*Math.PI/60/60*s.autoRotateSpeed}function P(H){const Mt=Math.abs(H)/(100*(window.devicePixelRatio|0));return Math.pow(.95,s.zoomSpeed*Mt)}function ut(H){p.theta-=H}function dt(H){p.phi-=H}const Et=(function(){const H=new q;return function(Ut,Rt){H.setFromMatrixColumn(Rt,0),H.multiplyScalar(-Ut),g.add(H)}})(),Y=(function(){const H=new q;return function(Ut,Rt){s.screenSpacePanning===!0?H.setFromMatrixColumn(Rt,1):(H.setFromMatrixColumn(Rt,0),H.crossVectors(s.object.up,H)),H.multiplyScalar(Ut),g.add(H)}})(),tt=(function(){const H=new q;return function(Ut,Rt){const jt=s.domElement;if(s.object.isPerspectiveCamera){const ue=s.object.position;H.copy(ue).sub(s.target);let de=H.length();de*=Math.tan(s.object.fov/2*Math.PI/180),Et(2*Ut*de/jt.clientHeight,s.object.matrix),Y(2*Rt*de/jt.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(Et(Ut*(s.object.right-s.object.left)/s.object.zoom/jt.clientWidth,s.object.matrix),Y(Rt*(s.object.top-s.object.bottom)/s.object.zoom/jt.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}})();function z(H){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?m/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function J(H){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?m*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function et(H,Mt){if(!s.zoomToCursor)return;I=!0;const Ut=s.domElement.getBoundingClientRect(),Rt=H-Ut.left,jt=Mt-Ut.top,ue=Ut.width,de=Ut.height;G.x=Rt/ue*2-1,G.y=-(jt/de)*2+1,N.set(G.x,G.y,1).unproject(s.object).sub(s.object.position).normalize()}function mt(H){return Math.max(s.minDistance,Math.min(s.maxDistance,H))}function U(H){v.set(H.clientX,H.clientY)}function j(H){et(H.clientX,H.clientX),_.set(H.clientX,H.clientY)}function nt(H){E.set(H.clientX,H.clientY)}function k(H){x.set(H.clientX,H.clientY),S.subVectors(x,v).multiplyScalar(s.rotateSpeed);const Mt=s.domElement;ut(2*Math.PI*S.x/Mt.clientHeight),dt(2*Math.PI*S.y/Mt.clientHeight),v.copy(x),s.update()}function ot(H){O.set(H.clientX,H.clientY),R.subVectors(O,_),R.y>0?z(P(R.y)):R.y<0&&J(P(R.y)),_.copy(O),s.update()}function St(H){b.set(H.clientX,H.clientY),y.subVectors(b,E).multiplyScalar(s.panSpeed),tt(y.x,y.y),E.copy(b),s.update()}function xt(H){et(H.clientX,H.clientY),H.deltaY<0?J(P(H.deltaY)):H.deltaY>0&&z(P(H.deltaY)),s.update()}function zt(H){let Mt=!1;switch(H.code){case s.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?dt(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):tt(0,s.keyPanSpeed),Mt=!0;break;case s.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?dt(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):tt(0,-s.keyPanSpeed),Mt=!0;break;case s.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?ut(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):tt(s.keyPanSpeed,0),Mt=!0;break;case s.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?ut(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):tt(-s.keyPanSpeed,0),Mt=!0;break}Mt&&(H.preventDefault(),s.update())}function It(H){if(B.length===1)v.set(H.pageX,H.pageY);else{const Mt=ge(H),Ut=.5*(H.pageX+Mt.x),Rt=.5*(H.pageY+Mt.y);v.set(Ut,Rt)}}function Xt(H){if(B.length===1)E.set(H.pageX,H.pageY);else{const Mt=ge(H),Ut=.5*(H.pageX+Mt.x),Rt=.5*(H.pageY+Mt.y);E.set(Ut,Rt)}}function Zt(H){const Mt=ge(H),Ut=H.pageX-Mt.x,Rt=H.pageY-Mt.y,jt=Math.sqrt(Ut*Ut+Rt*Rt);_.set(0,jt)}function ee(H){s.enableZoom&&Zt(H),s.enablePan&&Xt(H)}function lt(H){s.enableZoom&&Zt(H),s.enableRotate&&It(H)}function Fe(H){if(B.length==1)x.set(H.pageX,H.pageY);else{const Ut=ge(H),Rt=.5*(H.pageX+Ut.x),jt=.5*(H.pageY+Ut.y);x.set(Rt,jt)}S.subVectors(x,v).multiplyScalar(s.rotateSpeed);const Mt=s.domElement;ut(2*Math.PI*S.x/Mt.clientHeight),dt(2*Math.PI*S.y/Mt.clientHeight),v.copy(x)}function Ht(H){if(B.length===1)b.set(H.pageX,H.pageY);else{const Mt=ge(H),Ut=.5*(H.pageX+Mt.x),Rt=.5*(H.pageY+Mt.y);b.set(Ut,Rt)}y.subVectors(b,E).multiplyScalar(s.panSpeed),tt(y.x,y.y),E.copy(b)}function $t(H){const Mt=ge(H),Ut=H.pageX-Mt.x,Rt=H.pageY-Mt.y,jt=Math.sqrt(Ut*Ut+Rt*Rt);O.set(0,jt),R.set(0,Math.pow(O.y/_.y,s.zoomSpeed)),z(R.y),_.copy(O);const ue=(H.pageX+Mt.x)*.5,de=(H.pageY+Mt.y)*.5;et(ue,de)}function Ft(H){s.enableZoom&&$t(H),s.enablePan&&Ht(H)}function ce(H){s.enableZoom&&$t(H),s.enableRotate&&Fe(H)}function At(H){s.enabled!==!1&&(B.length===0&&(s.domElement.setPointerCapture(H.pointerId),s.domElement.addEventListener("pointermove",L),s.domElement.addEventListener("pointerup",T)),Gt(H),H.pointerType==="touch"?Ot(H):K(H))}function L(H){s.enabled!==!1&&(H.pointerType==="touch"?Dt(H):gt(H))}function T(H){Kt(H),B.length===0&&(s.domElement.releasePointerCapture(H.pointerId),s.domElement.removeEventListener("pointermove",L),s.domElement.removeEventListener("pointerup",T)),s.dispatchEvent(y_),c=l.NONE}function K(H){let Mt;switch(H.button){case 0:Mt=s.mouseButtons.LEFT;break;case 1:Mt=s.mouseButtons.MIDDLE;break;case 2:Mt=s.mouseButtons.RIGHT;break;default:Mt=-1}switch(Mt){case nr.DOLLY:if(s.enableZoom===!1)return;j(H),c=l.DOLLY;break;case nr.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(s.enablePan===!1)return;nt(H),c=l.PAN}else{if(s.enableRotate===!1)return;U(H),c=l.ROTATE}break;case nr.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(s.enableRotate===!1)return;U(H),c=l.ROTATE}else{if(s.enablePan===!1)return;nt(H),c=l.PAN}break;default:c=l.NONE}c!==l.NONE&&s.dispatchEvent(Lh)}function gt(H){switch(c){case l.ROTATE:if(s.enableRotate===!1)return;k(H);break;case l.DOLLY:if(s.enableZoom===!1)return;ot(H);break;case l.PAN:if(s.enablePan===!1)return;St(H);break}}function pt(H){s.enabled===!1||s.enableZoom===!1||c!==l.NONE||(H.preventDefault(),s.dispatchEvent(Lh),xt(H),s.dispatchEvent(y_))}function bt(H){s.enabled===!1||s.enablePan===!1||zt(H)}function Ot(H){switch(Tt(H),B.length){case 1:switch(s.touches.ONE){case ir.ROTATE:if(s.enableRotate===!1)return;It(H),c=l.TOUCH_ROTATE;break;case ir.PAN:if(s.enablePan===!1)return;Xt(H),c=l.TOUCH_PAN;break;default:c=l.NONE}break;case 2:switch(s.touches.TWO){case ir.DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;ee(H),c=l.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;lt(H),c=l.TOUCH_DOLLY_ROTATE;break;default:c=l.NONE}break;default:c=l.NONE}c!==l.NONE&&s.dispatchEvent(Lh)}function Dt(H){switch(Tt(H),c){case l.TOUCH_ROTATE:if(s.enableRotate===!1)return;Fe(H),s.update();break;case l.TOUCH_PAN:if(s.enablePan===!1)return;Ht(H),s.update();break;case l.TOUCH_DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;Ft(H),s.update();break;case l.TOUCH_DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;ce(H),s.update();break;default:c=l.NONE}}function Pt(H){s.enabled!==!1&&H.preventDefault()}function Gt(H){B.push(H.pointerId)}function Kt(H){delete ft[H.pointerId];for(let Mt=0;Mt<B.length;Mt++)if(B[Mt]==H.pointerId){B.splice(Mt,1);return}}function Tt(H){let Mt=ft[H.pointerId];Mt===void 0&&(Mt=new qt,ft[H.pointerId]=Mt),Mt.set(H.pageX,H.pageY)}function ge(H){const Mt=H.pointerId===B[0]?B[1]:B[0];return ft[Mt]}s.domElement.addEventListener("contextmenu",Pt),s.domElement.addEventListener("pointerdown",At),s.domElement.addEventListener("pointercancel",T),s.domElement.addEventListener("wheel",pt,{passive:!1}),this.update()}}function M_({flowRatio:r,playing:t,profile:i,selected:s,onSelect:l,onReady:c,preview:d=!1}){const f=re.useRef(null),p=re.useRef(null),m=re.useRef({flowRatio:r,playing:t,selected:s,onSelect:l,onReady:c}),[g,v]=re.useState(!1),[x,S]=re.useState(!1);m.current={flowRatio:r,playing:t,selected:s,onSelect:l,onReady:c},re.useEffect(()=>{var Ft,ce;const b=f.current,y=new XT;y.background=new Ae("#171b20");const _=new oi(36,1,.1,100);let O;try{O=new sv({antialias:!0,preserveDrawingBuffer:!0})}catch{S(!0),(ce=(Ft=m.current).onReady)==null||ce.call(Ft);return}O.setPixelRatio(Math.min(devicePixelRatio||1,2)),O.shadowMap.enabled=!0,O.shadowMap.type=T_,O.outputColorSpace=xn,O.toneMapping=R_,b.appendChild(O.domElement);const R=new BA(_,O.domElement);R.enableDamping=!0,R.enabled=!d,R.minDistance=4,R.maxDistance=18,R.maxPolarAngle=Math.PI/2-.04,R.enablePan=!1;function N(){_.position.set(5.6,4.5,7),R.target.set(0,.8,0),R.update()}N(),y.add(new uA("#ecfff0","#526959",2.6));const G=new h_("#fff3df",3.5);G.position.set(-3,7,5),G.castShadow=!0,G.shadow.mapSize.set(1024,1024),y.add(G);const I=new h_("#90d9df",2.7);I.position.set(5,3,-4),y.add(I);const B=(At,L=.55)=>new cA({color:At,metalness:L,roughness:.34}),ft=B("#c3cbd3"),C=B("#467d7a"),P=B("#30363e"),ut=B("#eaa07f"),dt=B("#94efd3",.2),Et=new Ci(new Hc(25,25),new lA({opacity:.28}));Et.rotation.x=-Math.PI/2,Et.receiveShadow=!0,Et.position.y=-.12,y.add(Et);const Y=new mA(18,36,"#424b58","#282f38");Y.position.y=-.11,y.add(Y);const tt=new br;y.add(tt);const z=new Map,J=[],et=[],mt=(At,L,T)=>{const K=new br;return K.position.set(...L),K.userData={id:At,home:K.position.clone(),offset:new q(...T)},z.set(At,K),tt.add(K),K},U=(At,L,T,K,gt=[0,0,0])=>{const pt=new Ci(L,T.clone());return pt.position.set(...K),pt.rotation.set(...gt),pt.castShadow=!0,pt.receiveShadow=!0,At.add(pt),At.userData.id&&(pt.userData.component=At.userData.id,J.push(pt)),pt},j=(At,L,T,K=ft)=>U(At,new Nr(...L),K,T),nt=(At,L,T,K,gt=ft,pt="y")=>U(At,new Qh(L,L,T,40),gt,K,pt==="x"?[0,0,Math.PI/2]:pt==="z"?[Math.PI/2,0,0]:void 0),k=(At,L,T,K,gt=ft,pt=[0,0,0])=>U(At,new Jh(L,T,12,48),gt,K,pt);if(j(tt,[6.5,.16,3.2],[0,0,0],P),i==="bearing"){const At=mt("drive",[-2,.75,0],[-.6,.15,0]);nt(At,.42,1.25,[0,0,0],C,"x");for(let T=0;T<12;T++)nt(At,.46,.03,[-.53+T*.095,0,0]);j(At,[1.4,.12,.85],[0,-.48,0],P),j(At,[.42,.2,.4],[-.2,.49,0],C),nt(tt,.11,4.5,[.6,.75,0],ft,"x"),nt(tt,.25,.35,[-1.15,.75,0],ut,"x");for(const[T,K]of[["support",-.4],["bearing",1.3]]){const gt=mt(T,[K,.75,0],[T==="bearing"?.25:-.25,.6,T==="bearing"?.45:-.45]);j(gt,[.8,.13,1.1],[0,-.57,0],P),j(gt,[.5,.4,.8],[0,-.35,0],C),k(gt,.43,.11,[0,0,0],C,[0,Math.PI/2,0]),k(gt,.31,.045,[.12,0,0],ft,[0,Math.PI/2,0]),k(gt,.16,.05,[.14,0,0],ft,[0,Math.PI/2,0]);for(let pt=0;pt<10;pt++)U(gt,new Vo(.06,14,10),ft,[.13,Math.cos(pt*Math.PI/5)*.25,Math.sin(pt*Math.PI/5)*.25]);T==="bearing"&&nt(gt,.09,.23,[0,.58,0],ut)}const L=mt("encoder",[2.55,.75,0],[.6,.2,0]);nt(L,.28,.3,[0,0,0],C,"x"),j(L,[.3,.5,.2],[0,-.4,0]),j(L,[.65,.1,.8],[0,-.65,0],P)}else{const At=mt("pump",[-2,.65,-.2],[-.6,.15,.2]);nt(At,.38,1.25,[0,0,0],C,"x");for(let pt=0;pt<11;pt++)nt(At,.42,.035,[-.48+pt*.095,0,0]);nt(At,.4,.15,[.65,0,0],ut,"x"),nt(At,.19,.25,[.84,0,0],P,"x"),j(At,[1.5,.12,.8],[0,-.43,0],P),j(At,[.4,.24,.4],[-.15,.47,0],C);const L=mt("valve",[0,.7,-.5],[0,.5,-.35]);j(L,[1.15,.58,.72],[0,0,0]);for(const pt of[-1,1])nt(L,.23,.5,[pt*.72,.02,0],C,"x"),nt(L,.13,.2,[pt*.28,.4,0],ut);j(L,[1.3,.1,.85],[0,-.34,0],P);const T=mt("accumulator",[2.1,1.15,-.5],[.5,.4,-.3]);nt(T,.36,1.3,[0,0,0],C);for(const pt of[-1,1])U(T,new Vo(.36,28,20),C,[0,pt*.65,0]);nt(T,.11,.2,[0,.99,0],ut);for(const pt of[-.3,.3])k(T,.37,.03,[0,pt,0],ft,[Math.PI/2,0,0]);const K=mt("cooler",[1.1,.75,1],[.35,.15,.6]);j(K,[1.3,1.15,.4],[0,0,0],P);for(let pt=0;pt<14;pt++)j(K,[.04,1.02,.45],[-.55+pt*.085,0,0]);k(K,.36,.045,[0,0,.27],C),nt(K,.1,.1,[0,0,.3],C,"z"),j(tt,[1.65,.65,1],[-1,.43,1],C),j(tt,[1.75,.07,1.1],[-1,.79,1]);const gt=[[[-1.1,.65,-.2],[-.85,.65,-.2],[-.7,1.05,-.5],[0,1.05,-.5]],[[.35,1.05,-.5],[.6,1.4,-.5],[2.1,1.4,-.5]],[[2.1,.2,-.5],[2.65,.3,-.5],[2.65,.3,1],[1.7,.6,1]],[[.4,.6,1],[-.1,.6,1],[-1,.82,1]]];for(const pt of gt){const bt=new lv(pt.map(Ot=>new q(...Ot)));U(tt,new $h(bt,48,.045,9,!1),ft,[0,0,0]);for(let Ot=0;Ot<4;Ot++){const Dt=U(tt,new Vo(.045,8,6),dt,[0,0,0]);et.push({particle:Dt,curve:bt,offset:Ot/4})}}}let ot=!1,St,xt=0;const zt=new dA;let It=!1;const Xt=()=>{var At,L;!b.clientWidth||!b.clientHeight||(_.aspect=b.clientWidth/b.clientHeight,_.updateProjectionMatrix(),O.setSize(b.clientWidth,b.clientHeight),O.render(y,_),It||(It=!0,(L=(At=m.current).onReady)==null||L.call(At)))},Zt=new ResizeObserver(Xt);Zt.observe(b),Xt();let ee;const lt=new pA,Fe=At=>{ee=[At.clientX,At.clientY]},Ht=At=>{var K,gt;if(!ee||Math.hypot(At.clientX-ee[0],At.clientY-ee[1])>5)return;const L=O.domElement.getBoundingClientRect();lt.setFromCamera(new qt((At.clientX-L.left)/L.width*2-1,-(At.clientY-L.top)/L.height*2+1),_);const T=lt.intersectObjects(J)[0];T&&((gt=(K=m.current).onSelect)==null||gt.call(K,T.object.userData.component)),ee=null};O.domElement.addEventListener("pointerdown",Fe),O.domElement.addEventListener("pointerup",Ht),p.current={reset:N,zoom:At=>{const L=_.position.clone().sub(R.target);L.setLength(F_.clamp(L.length()*At,R.minDistance,R.maxDistance)),_.position.copy(R.target).add(L),R.update()},separate:At=>{ot=At},focus:At=>{const L=z.get(At);L&&R.target.copy(L.position),R.update()}},v(!1);const $t=()=>{St=requestAnimationFrame($t);const At=Math.min(zt.getDelta(),.05),L=m.current;L.playing&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&(xt=(xt+At*Math.max(0,L.flowRatio)*.3)%1);for(const T of z.values()){const K=T.userData.home.clone();ot&&K.add(T.userData.offset),T.position.lerp(K,1-Math.exp(-At*9)),T.traverse(gt=>{gt.isMesh&&(gt.material.emissive.set(L.selected===T.userData.id?"#476a36":"#000000"),gt.material.emissiveIntensity=.45)})}for(const{particle:T,curve:K,offset:gt}of et)T.visible=!ot,T.position.copy(K.getPoint((xt+gt)%1));R.update(),O.render(y,_)};return $t(),()=>{cancelAnimationFrame(St),Zt.disconnect(),R.dispose(),O.domElement.removeEventListener("pointerdown",Fe),O.domElement.removeEventListener("pointerup",Ht),y.traverse(At=>{var L,T;(L=At.geometry)==null||L.dispose(),Array.isArray(At.material)?At.material.forEach(K=>K.dispose()):(T=At.material)==null||T.dispose()}),O.dispose(),O.domElement.remove(),p.current=null}},[i,d]);const E=i==="bearing"?[["drive","Motor"],["support","Support bearing"],["bearing","Test bearing"],["encoder","Encoder"]]:[["pump","Pump"],["valve","Control valve"],["accumulator","Accumulator"],["cooler","Cooler"]];return D.jsxs("div",{className:`equipment-stage${d?" equipment-preview":""}`,"aria-label":d?"Hydraulic reference assembly":void 0,children:[D.jsx("div",{className:"scene-host",ref:f,children:x&&D.jsx("p",{className:"scene-unavailable",children:"3D rendering unavailable. Recorded signals and analysis remain accessible."})}),!d&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"scene-toolbar",role:"toolbar","aria-label":"Equipment view controls",children:[D.jsx("button",{onClick:()=>{var b;return(b=p.current)==null?void 0:b.zoom(.85)},"aria-label":"Zoom in",title:"Zoom in",children:D.jsx(DA,{size:17})}),D.jsx("button",{onClick:()=>{var b;return(b=p.current)==null?void 0:b.zoom(1.18)},"aria-label":"Zoom out",title:"Zoom out",children:D.jsx(wA,{size:17})}),D.jsx("button",{onClick:()=>{var y;const b=!g;v(b),(y=p.current)==null||y.separate(b)},"aria-pressed":g,"aria-label":"Separate components",title:g?"Assemble components":"Separate components",children:D.jsx(bA,{size:17})}),D.jsx("button",{onClick:()=>{var b;return(b=p.current)==null?void 0:b.focus(s)},disabled:!s,"aria-label":"Focus selected component",title:"Focus selected component",children:D.jsx(TA,{size:17})}),D.jsx("button",{onClick:()=>{var b;return(b=p.current)==null?void 0:b.reset()},"aria-label":"Reset equipment view",title:"Reset equipment view",children:D.jsx(Gh,{size:17})})]}),D.jsx("div",{className:"component-selector",role:"group","aria-label":"Reference components",children:E.map(([b,y])=>D.jsxs("button",{"aria-pressed":s===b,onClick:()=>l(b),children:[D.jsx(AA,{size:12}),y]},b))}),D.jsx("span",{className:"scene-disclaimer",children:"Reference geometry · recorded playback · sensor placement unverified"})]})]})}const Ri="/api",IA=8e6,FA=["What changes between 10 and 20 seconds?","Compare pressure and flow. What does not follow?","What cannot be concluded from this recording?"],HA=[{name:"Gemini",icon:Oa,kind:"MODEL",detail:"Understands the question and recent conversation, selects measurement tools, and writes the response."},{name:"Vertex AI",icon:Tr,kind:"AI PLATFORM",detail:"Provides the Google Cloud endpoint and authenticated access used for Gemini inference."},{name:"Cloud Run",icon:Tr,kind:"CLOUD DEPLOYMENT",detail:"Hosts the deployed application and its streaming investigation API in a container."},{name:"Firestore",icon:EA,kind:"CLOUD DEPLOYMENT",detail:"Stores cloud sessions, saved responses and shared request limits. Raw uploaded samples are not retained."},{name:"Cloud Build",icon:PA,kind:"DELIVERY",detail:"Builds the application container for a cloud release."},{name:"Artifact Registry",icon:yA,kind:"DELIVERY",detail:"Stores versioned container images deployed to Cloud Run."}];async function $i(r,t={}){const i=await fetch(r,{cache:"no-store",...t}),s=await i.json();if(!i.ok)throw new Error(s.detail||`Request failed (${i.status})`);return s}function GA({channel:r,seconds:t,duration:i,onSeek:s}){var v;if(!((v=r==null?void 0:r.points)!=null&&v.length))return D.jsx("div",{className:"chart-empty",children:"Select a measured channel to inspect its recording."});const l=r.points,c=l.map(x=>x[1]).filter(Number.isFinite),d=Math.min(...c),f=Math.max(...c),p=f-d||1,m=l.map(([x,S],E)=>`${x/i*1e3},${170-(S-d)/p*145}`).join(" "),g=t/i*1e3;return D.jsxs("svg",{className:"signal-chart",viewBox:"0 0 1000 190",preserveAspectRatio:"none",role:"img","aria-label":`${r.id} recorded signal, ${r.rate_hz} hertz`,onClick:x=>{const S=x.currentTarget.getBoundingClientRect();s(Math.max(0,Math.min(i,(x.clientX-S.left)/S.width*i)))},children:[[35,80,125,170].map(x=>D.jsx("line",{x1:"0",x2:"1000",y1:x,y2:x,className:"chart-grid"},x)),D.jsx("polyline",{points:m,className:"chart-line"}),D.jsx("line",{x1:g,x2:g,y1:"12",y2:"178",className:"chart-cursor"}),D.jsx("circle",{cx:g,cy:170-(l.reduce((x,S)=>Math.abs(S[0]-t)<Math.abs(x[0]-t)?S:x)[1]-d)/p*145,r:"5",className:"chart-marker"}),D.jsxs("text",{x:"6",y:"15",className:"chart-label",children:[f.toPrecision(4)," ",r.unit]}),D.jsxs("text",{x:"6",y:"186",className:"chart-label",children:[d.toPrecision(4)," ",r.unit]})]})}function E_({identifiers:r,evidence:t}){return D.jsx("div",{className:"chat-citations",children:r.map(i=>{var l,c,d;const s=t.find(f=>f.id===i);return D.jsxs("details",{children:[D.jsxs("summary",{children:[((l=s==null?void 0:s.source)==null?void 0:l.channel)||"Evidence"," · ",(d=(c=s==null?void 0:s.source)==null?void 0:c.window_s)==null?void 0:d.join("–")," s"]}),D.jsx("pre",{children:JSON.stringify(s,null,2)})]},i)})})}function VA(){var X,Lt,Nt,Jt,Yt,_e,ye,Ye,an,Se,Re,Oe,Kn,sa,Di,Va,Si,ci,Ui,ui,fi;const[r,t]=re.useState(null),[i,s]=re.useState([]),[l,c]=re.useState(null),[d,f]=re.useState(""),[p,m]=re.useState(0),[g,v]=re.useState(!1),[x,S]=re.useState(.5),[E,b]=re.useState(null),[y,_]=re.useState(null),[O,R]=re.useState("Loading public recordings"),[N,G]=re.useState(!1),[I,B]=re.useState(""),[ft,C]=re.useState(""),[P,ut]=re.useState([]),[dt,Et]=re.useState([]),[Y,tt]=re.useState(!1),[z,J]=re.useState(()=>{try{return localStorage.getItem("faultscope.welcome.v2")!=="seen"}catch{return!0}}),[et,mt]=re.useState("overview"),[U,j]=re.useState(!0),[nt,k]=re.useState(!1),[ot,St]=re.useState(0),[xt,zt]=re.useState(null),[It,Xt]=re.useState(""),[Zt,ee]=re.useState(!1),[lt,Fe]=re.useState(!1),[Ht,$t]=re.useState(null),[Ft,ce]=re.useState([]),At=re.useRef(null),L=re.useRef(null),T=re.useRef(null),K=re.useRef(null),gt=re.useRef(0),pt=(l==null?void 0:l.duration_s)||60;function bt(){try{localStorage.setItem("faultscope.welcome.v2","seen")}catch{}J(!1)}re.useEffect(()=>{z&&K.current&&!K.current.open&&K.current.showModal()},[z]);const Ot=((X=l==null?void 0:l.channels)==null?void 0:X.find(at=>at.id===d))||((Lt=l==null?void 0:l.channels)==null?void 0:Lt[0]),Dt=!!((Nt=r==null?void 0:r.gemini)!=null&&Nt.enabled),Pt=((Jt=r==null?void 0:r.gemini)==null?void 0:Jt.model)==="gemini-2.5-flash"?"Gemini 2.5 Flash":"Gemini";re.useEffect(()=>{let at=!0;return Promise.all([$i(`${Ri}/capabilities`),$i(`${Ri}/recordings`),$i(`${Ri}/session`)]).then(async([A,V,Q])=>{at&&(t(A),s(V.recordings),b(Q),R("Recorded public data"),V.recordings.length&&await Gt(V.recordings[0].id,at))}).catch(A=>{at&&(C(A.message),R("Service unavailable"),j(!1))}),()=>{var A;at=!1,(A=L.current)==null||A.abort()}},[]);async function Gt(at,A=!0){var Q,rt;const V=++gt.current;(Q=L.current)==null||Q.abort(),G(!1),j(!0),k(!1),ce([]),B(""),v(!1),_(null),C(""),ut([]),R("Loading recording");try{const Z=await $i(`${Ri}/recordings/${encodeURIComponent(at)}`);if(!A||V!==gt.current)return;St(V),c(Z),f(((rt=Z.channels[0])==null?void 0:rt.id)||""),m(0),S(.5),$t(null),R("Recorded data / paused")}catch(Z){A&&V===gt.current&&(c(null),C(Z.message),R("Recording unavailable"))}finally{A&&V===gt.current&&j(!1)}}re.useEffect(()=>{if(!g||!l)return;let at=performance.now(),A;const V=Q=>{const rt=(Q-at)/1e3;at=Q,m(Z=>Z+rt>=pt?(v(!1),R("Recorded data / end"),pt):Z+rt),A=requestAnimationFrame(V)};return A=requestAnimationFrame(V),()=>cancelAnimationFrame(A)},[g,l,pt]),re.useEffect(()=>{var Z;if(!l)return;const at=l.channels.find(wt=>wt.id==="FS1");if(!((Z=at==null?void 0:at.points)!=null&&Z.length))return;let A=0,V=at.points.length-1;for(;A<V;){const wt=A+V>>1;at.points[wt][0]<p?A=wt+1:V=wt}A>0&&Math.abs(at.points[A-1][0]-p)<=Math.abs(at.points[A][0]-p)&&(A-=1);const Q=at.points[A][1],rt=at.statistics.max-at.statistics.min;S(rt>0?Math.max(0,Math.min(1,(Q-at.statistics.min)/rt)):0)},[p,l]);async function Kt(at=I){var wt,Wt;if(!l||N||U)return;const A=gt.current;if(!Dt){C("Gemini is not connected to this local service. No substitute analysis will be shown.");return}if(r.gemini.runs_used>=r.gemini.lifetime_run_limit){C("The shared Gemini investigation allowance is exhausted.");return}if(xt&&!Zt){C("Confirm the upload processing notice before sending this file.");return}const V=at.trim()||"Investigate this recording and explain what the evidence supports.",Q={id:crypto.randomUUID(),role:"user",text:V,context:`${Ht||"Whole assembly"} · ${d} · ${p.toFixed(1)} s`},rt=(wt=[...Ft].reverse().find(Vt=>Vt.role==="assistant"))==null?void 0:wt.report.id;ce(Vt=>[...Vt,Q]),B(""),C(""),G(!0),_(null),ut([]),R("Gemini is responding");const Z=new AbortController;L.current=Z;try{const Vt={mode:"gemini",previous_turn_id:rt,...xt?{uploaded_record:xt}:{recording_id:l.id},question:V,focus_channel:d,focus_component:Ht||void 0,window_start_s:Math.max(0,Math.min(p-5,pt-Math.min(10,pt))),window_end_s:Math.min(pt,Math.max(10,p+5))},te=await fetch(`${Ri}/investigations`,{method:"POST",headers:{"Content-Type":"application/json","X-FaultScope-CSRF":(E==null?void 0:E.csrf)||""},body:JSON.stringify(Vt),signal:Z.signal});if(!te.ok){const He=await te.json();throw new Error(He.detail||"Investigation failed")}const he=te.body.getReader(),se=new TextDecoder;let ne="",ve=null;for(;;){const He=await he.read();ne+=se.decode(He.value||new Uint8Array,{stream:!He.done});let Xe;for(;(Xe=ne.indexOf(`

`))!==-1;){const pn=ne.slice(0,Xe);ne=ne.slice(Xe+2);const De=(Wt=pn.split(`
`).find(Ni=>Ni.startsWith("data: ")))==null?void 0:Wt.slice(6);if(!De)continue;if(A!==gt.current)return;const oe=JSON.parse(De);if(ut(Ni=>[...Ni,oe]),oe.type==="error")throw new Error(oe.message);oe.type==="completed"&&(ve=oe.report)}if(He.done)break}if(A!==gt.current)return;if(!ve)throw new Error("The analysis stream ended before a complete report arrived.");if(ve.mode!=="gemini")throw new Error("A non-Gemini response was returned. It will not be presented as AI analysis.");_(ve),R(ve.finding.response_kind==="conversation"?"Gemini replied":"Gemini evidence review ready"),ce(He=>[...He,{id:ve.id,role:"assistant",report:ve}]),$i(`${Ri}/investigations`,{headers:{"X-FaultScope-CSRF":(E==null?void 0:E.csrf)||""}}).then(He=>Et(He.investigations||[])).catch(()=>{})}catch(Vt){if(A!==gt.current)return;const te=Vt.name==="AbortError"?"Investigation cancelled.":Vt.message;ce(he=>[...he,{id:crypto.randomUUID(),role:"error",text:te}]),R("Investigation not completed")}finally{A===gt.current&&G(!1),$i(`${Ri}/capabilities`).then(t).catch(()=>{})}}async function Tt(){try{const at=await $i(`${Ri}/investigations`);Et((at.investigations||[]).filter(A=>A.mode==="gemini")),tt(!0)}catch(at){C(at.message)}}async function ge(at){if(!N)try{const A=await $i(`${Ri}/investigations/${at}`);if(A.mode!=="gemini")throw new Error("This report is not a Gemini investigation.");const V=[A];let Q=A.previous_turn_id;for(;Q&&V.length<7;){const Z=await $i(`${Ri}/investigations/${encodeURIComponent(Q)}`).catch(()=>null);if(!Z||Z.mode!=="gemini"||Z.recording_id!==A.recording_id)break;V.unshift(Z),Q=Z.previous_turn_id}tt(!1);const rt=i.find(Z=>Z.id===A.recording_id);rt?(zt(null),Xt(""),ee(!1),await Gt(rt.id)):(c(null),zt(null),Xt(""),ee(!1),v(!1)),_(A),ce(V.flatMap(Z=>[{id:`${Z.id}-question`,role:"user",text:Z.question||"Investigate this recording.",context:`Saved conversation · ${Z.recording_id}`},{id:Z.id,role:"assistant",report:Z}])),R("Saved Gemini conversation")}catch(A){C(A.message)}}async function H(at){var V;const A=++gt.current;if((V=L.current)==null||V.abort(),G(!1),v(!1),$t(null),ce([]),_(null),B(""),C(""),zt(null),Xt(""),ee(!1),!at||at.size>IA){C("Choose a JSON file under 8 MB. The recording limits are checked before analysis.");return}try{const Q=JSON.parse(await at.text());if(A!==gt.current)return;if(k(!1),St(A),!Q||!["hydraulic","bearing"].includes(Q.profile)||typeof Q.channels!="object"||!Q.channels)throw new Error("Expected a hydraulic or bearing JSON payload with duration_s and channel arrays.");const rt=Object.values(Q.channels).reduce((Z,wt)=>Z+(Array.isArray(wt)?wt.length:0),0);zt(Q),Xt(at.name),c({id:"user-upload-preview",name:Q.name||at.name,profile:Q.profile,duration_s:Q.duration_s,channels:Object.entries(Q.channels).map(([Z,wt])=>({id:Z,quantity:Z,unit:"uploaded units",rate_hz:Q.duration_s?wt.length/Q.duration_s:0,sample_count:wt.length,points:wt.map((Wt,Vt)=>[Vt*Q.duration_s/wt.length,Wt]).filter((Wt,Vt)=>Vt%Math.max(1,Math.ceil(wt.length/600))===0),statistics:{min:Math.min(...wt),max:Math.max(...wt)}}))}),f(Object.keys(Q.channels)[0]),m(0),R(`Local preview / ${rt.toLocaleString()} samples`)}catch(Q){C(Q.message||"The JSON file could not be parsed.")}}function Mt(at){const A=Math.max(0,Math.min(pt,at));m(A),R(`Recorded data / ${A.toFixed(2)} s`)}const Ut=P.filter(at=>at.type==="evidence").length,Rt=((Yt=r==null?void 0:r.gemini)==null?void 0:Yt.runs_used)??0,jt=((_e=r==null?void 0:r.gemini)==null?void 0:_e.lifetime_run_limit)??0,ue=Math.max(0,jt-Rt),de=!I.trim()||!l||U||!Dt||N||ue===0||xt&&!Zt,fe=U||l&&!nt,Ct=[...P].reverse().find(at=>["tool_requested","model_request"].includes(at.type));return re.useEffect(()=>{const at=T.current;at&&(at.scrollTop=at.scrollHeight)},[Ft,N,P.length]),D.jsxs("div",{className:"app-shell",children:[D.jsxs("header",{className:"topbar",children:[D.jsxs("button",{className:"brand",onClick:()=>{zt(null),Xt(""),i[0]&&Gt(i[0].id)},"aria-label":"FaultScope home",children:[D.jsx("span",{className:"brand-mark",children:D.jsx(yr,{size:19})}),D.jsxs("span",{children:["Fault",D.jsx("span",{children:"Scope"}),D.jsx("small",{children:"TORQUESHIFT / 2026"})]})]}),D.jsxs("div",{className:"top-status",children:[D.jsx("span",{className:"status-dot"}),O,D.jsx("span",{className:"divider"}),"ARCHIVED DATA"]}),D.jsxs("div",{className:"top-actions",children:[D.jsxs("span",{className:"platform-attribution",children:[D.jsx(Tr,{size:16}),"Built with Google Cloud"]}),D.jsxs("button",{className:"quiet-button",onClick:()=>{mt("services"),J(!0)},children:[D.jsx(MA,{size:16})," About"]}),D.jsxs("button",{className:"quiet-button",onClick:Tt,children:[D.jsx(v_,{size:16})," History"]}),D.jsx("button",{className:"mobile-menu",onClick:()=>Fe(at=>!at),"aria-label":"Open navigation",children:lt?D.jsx(zo,{}):D.jsx(RA,{})})]})]}),D.jsxs("div",{className:"layout",children:[D.jsxs("aside",{className:`sidebar ${lt?"sidebar-open":""}`,children:[D.jsxs("div",{className:"side-section-title",children:["WORKSPACE ",D.jsx("span",{children:"01"})]}),D.jsx("label",{className:"field-label",htmlFor:"recording-select",children:"RECORDED TEST CYCLE"}),D.jsxs("select",{id:"recording-select",value:xt?"upload":(l==null?void 0:l.id)||"",onChange:at=>{zt(null),Xt(""),Gt(at.target.value)},children:[i.map(at=>D.jsx("option",{value:at.id,children:at.name},at.id)),xt&&D.jsxs("option",{value:"upload",children:[It," / local preview"]})]}),D.jsxs("div",{className:"record-meta",children:[D.jsx("span",{children:(l==null?void 0:l.profile)==="bearing"?"BEARING TEST RIG":"HYDRAULIC TEST RIG"}),D.jsxs("span",{children:[((ye=l==null?void 0:l.duration_s)==null?void 0:ye.toFixed(1))||"--"," SEC"]}),D.jsxs("span",{children:[((Ye=l==null?void 0:l.channels)==null?void 0:Ye.length)||0," CHANNELS"]})]}),D.jsx("div",{className:"side-rule"}),D.jsxs("div",{className:"side-section-title",children:["SIGNAL CHANNELS ",D.jsx("span",{children:((an=l==null?void 0:l.channels)==null?void 0:an.length)||"—"})]}),D.jsx("div",{className:"channel-list",children:(Se=l==null?void 0:l.channels)==null?void 0:Se.slice(0,14).map(at=>D.jsxs("button",{className:`channel-option ${at.id===d?"channel-active":""}`,onClick:()=>f(at.id),children:[D.jsx("span",{className:"channel-led"}),D.jsxs("span",{children:[D.jsx("b",{children:at.id}),D.jsx("small",{children:at.quantity})]}),D.jsxs("small",{children:[at.rate_hz.toLocaleString()," Hz"]})]},at.id))}),D.jsx("div",{className:"side-rule"}),D.jsx("div",{className:"side-section-title",children:"YOUR RECORDING"}),D.jsxs("button",{className:"upload-button",onClick:()=>{var at;return(at=At.current)==null?void 0:at.click()},children:[D.jsx(OA,{size:16})," Inspect a JSON recording"]}),D.jsx("input",{ref:At,type:"file",accept:"application/json,.json",hidden:!0,onChange:at=>{var A;return H((A=at.target.files)==null?void 0:A[0])}}),xt&&D.jsxs("div",{className:"upload-consent",children:[D.jsxs("div",{className:"upload-file",children:[D.jsx(SA,{size:14}),It]}),D.jsxs("label",{children:[D.jsx("input",{type:"checkbox",checked:Zt,onChange:at=>ee(at.target.checked)})," I understand the file is sent to FaultScope for immediate processing. It is not retained as raw samples."]}),D.jsx("p",{children:"Use non-sensitive public or synthetic data only. The 8 MB request cap is not a raw-data throughput guarantee."}),D.jsx("button",{className:"text-action",onClick:()=>{zt(null),Xt(""),ee(!1),i[0]&&Gt(i[0].id)},children:"Remove upload"})]}),D.jsxs("div",{className:"sidebar-bottom",children:[D.jsx(bc,{size:15}),D.jsxs("span",{children:["READ-ONLY INVESTIGATION",D.jsx("br",{}),D.jsx("b",{children:"No equipment control"})]})]})]}),D.jsxs("main",{className:"main-content",children:[D.jsxs("section",{className:"scene-section",children:[D.jsxs("div",{className:"section-heading",children:[D.jsxs("div",{children:[D.jsxs("span",{className:"eyebrow",children:["REFERENCE ASSEMBLY / ",(l==null?void 0:l.profile)==="bearing"?"ROT-01":"HYD-01"]}),D.jsx("h1",{children:(l==null?void 0:l.profile)==="bearing"?"Bearing test rig":"Hydraulic system"}),D.jsx("p",{children:"Source-informed visual / physical sensor placement unverified"})]}),D.jsxs("div",{className:"scene-tag",children:[D.jsx("span",{className:"status-dot"})," RECORDED PLAYBACK"]})]}),D.jsxs("div",{className:"equipment-loading-shell","aria-busy":!!fe,children:[D.jsx("div",{inert:!!fe,children:l&&D.jsx(M_,{flowRatio:x,playing:g,profile:l.profile,selected:Ht,onSelect:$t,onReady:()=>k(!0)},`${l.id}-${ot}`)}),fe&&D.jsxs("div",{className:"equipment-loading",role:"status",children:[D.jsx("span",{className:"spinner"}),D.jsx("strong",{children:U?"Loading test cycle":"Preparing reference assembly"}),D.jsx("span",{children:U?"Retrieving recorded signals":"Rendering the 3D view"})]}),!U&&!l&&D.jsxs("div",{className:"equipment-loading",role:"status",children:[D.jsx(Tc,{size:22}),D.jsx("strong",{children:"Recording unavailable"}),D.jsx("span",{children:"Select another test cycle or retry."})]})]}),D.jsxs("div",{className:"replay-strip",children:[D.jsxs("div",{className:"replay-head",children:[D.jsxs("div",{children:[D.jsx("span",{className:"eyebrow",children:"MEASURED READOUTS"}),D.jsxs("span",{className:"replay-clock",children:[p.toFixed(2)," ",D.jsxs("small",{children:["/ ",pt.toFixed(2)," S"]})]})]}),D.jsx("span",{className:"archived-tag",children:"ARCHIVED / NOT LIVE"})]}),D.jsx("div",{className:"readout-grid",children:(Re=l==null?void 0:l.channels)==null?void 0:Re.filter(at=>l.profile==="bearing"?["VIB_RAW","ENC_RAW"].includes(at.id):["PS1","FS1","TS1"].includes(at.id)).map(at=>{var V,Q;const A=(V=at.points)==null?void 0:V.reduce((rt,Z)=>Math.abs(Z[0]-p)<Math.abs(rt[0]-p)?Z:rt,at.points[0]||[0,0]);return D.jsxs("button",{className:`readout ${at.id===d?"readout-active":""}`,onClick:()=>f(at.id),children:[D.jsxs("span",{children:[at.id," / ",at.quantity]}),D.jsxs("b",{children:[((Q=A==null?void 0:A[1])==null?void 0:Q.toPrecision(at.unit==="recorded units"?4:5))??"—"," ",D.jsx("small",{children:at.unit})]}),D.jsxs("small",{children:[at.rate_hz.toLocaleString()," Hz native rate"]})]},at.id)})}),D.jsxs("div",{className:"playback-controls",children:[D.jsx("button",{className:"play-button",disabled:!!fe||!l,onClick:()=>{const at=!g;v(at),R(at?"Recorded data / playing":"Recorded data / paused")},"aria-label":g?"Pause recorded playback":"Play recorded playback",children:g?D.jsx(CA,{size:17}):D.jsx(LA,{size:17})}),D.jsx("input",{"aria-label":"Recorded timeline",className:"timeline",type:"range",min:"0",max:pt,step:"0.01",value:p,onChange:at=>Mt(Number(at.target.value))}),D.jsxs("span",{className:"time-readout",children:[p.toFixed(1)," / ",pt.toFixed(1),"s"]}),D.jsx("span",{className:"playback-label",children:g?"PLAYING":"PAUSED"})]}),D.jsx("div",{className:"flow-note",children:(l==null?void 0:l.profile)==="hydraulic"?"Illustrative tracer speed follows measured FS1 relative to this recording range. It is not a calibrated flow simulation.":"Recorded units only. Shaft speed is not inferred from ENC_RAW."})]})]}),D.jsxs("details",{className:"signals-section source-evidence",children:[D.jsxs("summary",{children:["Recorded source evidence · ",(Ot==null?void 0:Ot.id)||"Select a channel"]}),D.jsxs("div",{className:"section-heading compact",children:[D.jsxs("div",{children:[D.jsxs("span",{className:"eyebrow",children:["NATIVE SIGNAL / ",((Oe=Ot==null?void 0:Ot.rate_hz)==null?void 0:Oe.toLocaleString())||"—"," HZ"]}),D.jsxs("h2",{children:[(Ot==null?void 0:Ot.id)||"Signal"," ",D.jsx("span",{children:(Ot==null?void 0:Ot.quantity)||"Select a channel"})]})]}),D.jsxs("div",{className:"signal-stats",children:[D.jsxs("span",{children:["MIN ",D.jsx("b",{children:((sa=(Kn=Ot==null?void 0:Ot.statistics)==null?void 0:Kn.min)==null?void 0:sa.toPrecision(5))??"—"})]}),D.jsxs("span",{children:["MAX ",D.jsx("b",{children:((Va=(Di=Ot==null?void 0:Ot.statistics)==null?void 0:Di.max)==null?void 0:Va.toPrecision(5))??"—"})]})]})]}),D.jsx(GA,{channel:Ot,seconds:p,duration:pt,onSeek:Mt}),D.jsxs("div",{className:"plot-footer",children:[D.jsx("span",{children:"PEAK-PRESERVING PREVIEW / NATIVE SAMPLE RATE SHOWN"}),D.jsxs("button",{className:"text-action",onClick:()=>m(0),children:[D.jsx(Gh,{size:13})," Reset cursor"]})]})]}),D.jsxs("aside",{className:"ai-workspace chat-panel","aria-label":"Gemini investigation chat",children:[D.jsxs("header",{className:"chat-header",children:[D.jsx("span",{className:"chat-avatar",children:D.jsx(Oa,{size:20})}),D.jsxs("div",{className:"chat-identity",children:[D.jsx("h2",{children:"FaultScope AI"}),D.jsxs("span",{className:"chat-model-brand",children:["Powered by ",Pt]}),D.jsxs("span",{children:[D.jsx("i",{className:Dt?"chat-online":"chat-offline"}),Dt?"Vertex AI connected":"Gemini offline"]})]}),D.jsx("button",{className:"icon-button",onClick:Tt,"aria-label":"Open AI conversation history",title:"AI conversation history",children:D.jsx(v_,{size:17})}),D.jsx("button",{className:"icon-button",disabled:N||!Ft.length,onClick:()=>{ce([]),_(null),C("")},"aria-label":"New conversation",title:"New conversation",children:D.jsx(Gh,{size:17})})]}),D.jsxs("div",{className:"chat-source",children:[D.jsx(yr,{size:14}),D.jsx("span",{children:xt?It:(l==null?void 0:l.name)||"Loading recording"}),D.jsx("small",{children:xt?"UPLOAD PREVIEW":"RECORDED DATA"})]}),!Dt&&r&&D.jsxs("div",{className:"chat-connection",role:"status",children:[D.jsx(Tc,{size:15}),D.jsx("span",{children:"Gemini isn’t enabled on this local backend. Chat will be available when it is connected."})]}),Dt&&ue===0&&D.jsxs("div",{className:"chat-connection",role:"status",children:[D.jsx(Tc,{size:15}),D.jsx("span",{children:"AI requests are temporarily unavailable. Your conversation is still available to review."})]}),D.jsxs("div",{className:"chat-thread",ref:T,role:"log","aria-label":"Investigation conversation","aria-live":"polite","aria-busy":N,children:[!Ft.length&&D.jsxs("section",{className:"chat-welcome",children:[D.jsx("span",{className:"chat-welcome-symbol",children:D.jsx(Oa,{size:25})}),D.jsx("h3",{children:"What would you like to investigate?"}),D.jsx("p",{children:"Ask about a change, compare signals, or examine the limits of the evidence."}),D.jsx("div",{className:"chat-suggestions",children:FA.map(at=>D.jsxs("button",{onClick:()=>{var A;B(at),(A=document.getElementById("question-input"))==null||A.focus()},children:[D.jsx(UA,{size:14}),D.jsx("span",{children:at}),D.jsx(__,{size:14})]},at))})]}),Ft.map(at=>D.jsxs("article",{className:`chat-message chat-message-${at.role}`,children:[D.jsx("div",{className:"chat-message-label",children:at.role==="user"?"You":at.role==="error"?"Request status":D.jsxs(D.Fragment,{children:[D.jsx(Oa,{size:12}),"Gemini"]})}),at.role==="assistant"?D.jsxs(D.Fragment,{children:[at.report.finding.response_kind!=="conversation"&&D.jsx("h3",{children:at.report.finding.title}),D.jsx("p",{children:at.report.finding.summary}),D.jsx(E_,{identifiers:at.report.finding.evidence_ids||[],evidence:at.report.evidence}),D.jsx("div",{className:"chat-evidence",children:at.report.finding.observations.map((A,V)=>D.jsxs("div",{children:[D.jsx("p",{children:A.text}),D.jsx(E_,{identifiers:A.evidence_ids,evidence:at.report.evidence})]},V))}),at.report.finding.uncertainties.length>0&&D.jsxs("details",{className:"chat-uncertainties",children:[D.jsxs("summary",{children:[D.jsx(bc,{size:13}),"Uncertainties & review"]}),D.jsx("ul",{children:at.report.finding.uncertainties.map((A,V)=>D.jsx("li",{children:A},V))})]}),at.report.finding.response_kind!=="conversation"&&D.jsxs("button",{className:"text-action",onClick:()=>{const A=new Blob([JSON.stringify(at.report,null,2)],{type:"application/json"}),V=document.createElement("a"),Q=URL.createObjectURL(A);V.href=Q,V.download=`faultscope-${at.report.id.slice(0,8)}.json`,V.click(),URL.revokeObjectURL(Q)},children:[D.jsx(xA,{size:13}),"Export evidence report"]})]}):D.jsxs(D.Fragment,{children:[D.jsx("p",{children:at.text}),at.context&&D.jsx("small",{children:at.context})]})]},at.id)),N&&D.jsxs("article",{className:"chat-message chat-message-assistant chat-working",children:[D.jsxs("div",{className:"chat-message-label",children:[D.jsx(Oa,{size:12}),"Gemini"]}),D.jsxs("div",{role:"status",children:[D.jsx("span",{className:"spinner"}),D.jsx("span",{children:(Ct==null?void 0:Ct.type)==="tool_requested"?`Checking ${((Si=Ct.arguments)==null?void 0:Si.channel)||"recorded evidence"}`:(Ct==null?void 0:Ct.message)||"Gemini is reading your message"})]}),Ut>0&&D.jsxs("small",{children:[Ut," measured evidence results received"]}),D.jsx("div",{className:"chat-progress","aria-hidden":"true",children:D.jsx("span",{})}),D.jsxs("button",{className:"text-action",onClick:()=>{var at;return(at=L.current)==null?void 0:at.abort()},children:[D.jsx(zo,{size:12}),"Stop response"]})]})]}),D.jsxs("footer",{className:"chat-composer-area",children:[ft&&D.jsxs("div",{className:"chat-error",role:"alert",children:[D.jsx(Tc,{size:14}),D.jsx("span",{children:ft}),D.jsx("button",{onClick:()=>C(""),"aria-label":"Dismiss error",children:D.jsx(zo,{size:13})})]}),D.jsxs("div",{className:"chat-context",children:[D.jsx(yr,{size:13}),D.jsxs("span",{children:[Ht||"Whole assembly"," · ",d||"No channel"," · ",p.toFixed(1)," s"]})]}),D.jsxs("form",{className:"chat-composer",onSubmit:at=>{at.preventDefault(),de||Kt(I)},children:[D.jsx("textarea",{id:"question-input","aria-label":"Message Gemini",maxLength:500,value:I,onChange:at=>B(at.target.value),placeholder:"Ask FaultScope…",onKeyDown:at=>{at.key==="Enter"&&!at.shiftKey&&!at.nativeEvent.isComposing&&(at.preventDefault(),de||Kt(I))}}),D.jsxs("div",{className:"chat-composer-actions",children:[D.jsxs("span",{children:[I.length,"/500"]}),D.jsx("button",{type:"submit","aria-label":"Send message to Gemini",title:"Send message",disabled:de,children:D.jsx(NA,{size:17})})]})]}),D.jsxs("div",{className:"chat-footnote",children:[D.jsx(bc,{size:12}),D.jsx("span",{children:"AI findings require engineering review"})]})]})]}),D.jsxs("footer",{className:"page-footer",children:[D.jsx("span",{children:"PUBLIC RESEARCH RECORDINGS / CC BY 4.0"}),D.jsx("span",{children:"NO FIELD VALIDATION / NOT A SAFETY SYSTEM"})]})]})]}),Y&&D.jsx("div",{className:"modal-backdrop",onMouseDown:at=>{at.target===at.currentTarget&&tt(!1)},children:D.jsxs("section",{className:"modal-panel",children:[D.jsxs("div",{className:"modal-title",children:[D.jsxs("div",{children:[D.jsx("span",{className:"eyebrow",children:"THIS BROWSER SESSION"}),D.jsx("h2",{children:"Recent AI reviews"})]}),D.jsx("button",{className:"icon-button",onClick:()=>tt(!1),"aria-label":"Close history",children:D.jsx(zo,{})})]}),dt.length?dt.map(at=>D.jsxs("button",{className:"history-row",disabled:N||at.status!=="completed",onClick:()=>ge(at.id),children:[D.jsxs("span",{children:[D.jsx("b",{children:at.title||at.recording_id}),D.jsxs("small",{children:[new Date((at.created||at.created_at)*1e3).toLocaleString()," · ",at.status]})]}),D.jsx(__,{size:16})]},at.id)):D.jsx("p",{className:"empty-state",children:"No AI reviews in this session."}),D.jsx("p",{className:"modal-footnote",children:"Reports expire after seven days. Uploaded raw samples are not stored; an uploaded report cannot restore its original waveform."})]})}),z&&D.jsxs("dialog",{ref:K,className:`modal-panel welcome-dialog${et==="services"?" about-services":""}`,"aria-labelledby":"welcome-title","aria-describedby":"welcome-description",onCancel:at=>{at.preventDefault(),bt()},children:[D.jsxs("div",{className:"welcome-visual",children:[D.jsxs("div",{className:"welcome-wordmark",children:[D.jsx(yr,{size:20}),D.jsx("span",{children:"FaultScope"}),D.jsx("small",{children:"BY TORQUESHIFT"})]}),D.jsx("button",{className:"icon-button welcome-close",onClick:bt,"aria-label":"Close welcome",title:"Close welcome",children:D.jsx(zo,{})}),D.jsx(M_,{profile:"hydraulic",flowRatio:0,playing:!1,preview:!0}),D.jsx("span",{className:"welcome-visual-caption",children:"HYDRAULIC REFERENCE ASSEMBLY"})]}),D.jsx("div",{className:"about-tabs",role:"tablist","aria-label":"About FaultScope",children:["overview","services"].map(at=>D.jsx("button",{id:`about-tab-${at}`,type:"button",role:"tab","aria-selected":et===at,"aria-controls":`about-panel-${at}`,tabIndex:et===at?0:-1,onClick:()=>mt(at),onKeyDown:A=>{var V;if(["ArrowLeft","ArrowRight","Home","End"].includes(A.key)){A.preventDefault();const Q=A.key==="Home"?"overview":A.key==="End"||at==="overview"?"services":"overview";mt(Q),(V=document.getElementById(`about-tab-${Q}`))==null||V.focus()}},children:at==="overview"?"Welcome":D.jsxs(D.Fragment,{children:[D.jsx(Tr,{size:15}),"Google Cloud stack"]})},at))}),D.jsx("div",{role:"tabpanel",id:`about-panel-${et}`,"aria-labelledby":`about-tab-${et}`,children:et==="overview"?D.jsx(D.Fragment,{children:D.jsxs("div",{className:"welcome-content",children:[D.jsxs("span",{className:"eyebrow welcome-eyebrow",children:[D.jsx(Oa,{size:14}),"YOUR AI INVESTIGATION WORKSPACE"]}),D.jsxs("h2",{id:"welcome-title",children:["Welcome to FaultScope",D.jsx("span",{children:"Let's make sense of your signals."})]}),D.jsxs("div",{className:"welcome-platform",children:[D.jsx(Tr,{size:19}),D.jsxs("span",{children:["Built with ",D.jsx("b",{children:"Google Cloud"})]}),D.jsx("span",{className:"platform-separator"}),D.jsx(Oa,{size:17}),D.jsxs("span",{children:["Powered by ",D.jsx("b",{children:Pt})]})]}),D.jsx("p",{id:"welcome-description",children:"A pressure drop. An unusual vibration. A question worth asking. Explore recorded machine behaviour with Gemini, and turn questions into evidence you can inspect."}),D.jsxs("div",{className:"welcome-highlights",children:[D.jsxs("div",{children:[D.jsx(yr,{size:19}),D.jsx("b",{children:"Real recordings"}),D.jsx("span",{children:"Public test cycles or your own data."})]}),D.jsxs("div",{children:[D.jsx(Oa,{size:19}),D.jsx("b",{children:"AI-led investigation"}),D.jsx("span",{children:"Gemini chooses what to measure."})]}),D.jsxs("div",{children:[D.jsx(bc,{size:19}),D.jsx("b",{children:"Traceable answers"}),D.jsx("span",{children:"Cited evidence. Clear uncertainties."})]})]}),D.jsxs("div",{className:"welcome-start",children:[D.jsx("span",{children:U?"Preparing your first recording.":l?"Your recording is ready to explore.":"Your investigation starts here."}),D.jsxs("button",{className:"primary-button",autoFocus:!0,onClick:bt,children:["Enter workspace ",D.jsx(g_,{size:17})]})]}),D.jsx("p",{className:"welcome-boundary",children:"Recorded data, not live monitoring. Reference geometry, not calibrated CAD. Engineering review required; not a validated diagnosis or safety system."})]})}):D.jsxs("div",{className:"welcome-content service-content",children:[D.jsxs("span",{className:"eyebrow welcome-eyebrow",children:[D.jsx(Tr,{size:14}),"GOOGLE CLOUD AI BUILDER CUP 2026"]}),D.jsxs("h2",{id:"welcome-title",children:["Built with Google Cloud",D.jsx("span",{children:"From a question to a traceable answer."})]}),D.jsx("p",{id:"welcome-description",children:"FaultScope brings Google's AI and cloud services together for recorded-machine investigations. TorqueShift builds the experience; Gemini provides the intelligence."}),D.jsx("div",{className:"google-service-list",children:HA.map(at=>D.jsxs("div",{className:"google-service",children:[D.jsx(at.icon,{size:20}),D.jsxs("div",{children:[D.jsxs("h3",{children:[at.name==="Gemini"?Pt:at.name,D.jsx("small",{children:at.kind})]}),D.jsx("p",{children:at.detail})]})]},at.name))}),D.jsxs("p",{className:"service-runtime-note",children:[D.jsx(yr,{size:15}),D.jsxs("span",{children:[((ci=r==null?void 0:r.runtime)==null?void 0:ci.hosting)==="cloud_run"?"Current backend: Cloud Run.":((Ui=r==null?void 0:r.runtime)==null?void 0:Ui.hosting)==="local"?"Current backend: local development server, not Cloud Run.":"Cloud Run and Firestore describe the cloud deployment, not a guarantee about this preview."," ",((ui=r==null?void 0:r.runtime)==null?void 0:ui.storage)==="firestore"?"Session storage: Firestore.":((fi=r==null?void 0:r.runtime)==null?void 0:fi.storage)==="sqlite"?"Session storage: local SQLite.":""," ",Dt?"Gemini inference is configured through Vertex AI.":"Gemini inference is currently disabled."]})]}),D.jsx("p",{className:"service-attribution",children:"An independent TorqueShift project built with Google technologies. Google service names are trademarks of Google LLC; no endorsement is implied."}),D.jsxs("button",{className:"primary-button",onClick:bt,children:["Back to workspace ",D.jsx(g_,{size:16})]})]})})]})]})}Ay.createRoot(document.getElementById("root")).render(D.jsx(xy.StrictMode,{children:D.jsx(VA,{})}));
