(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();function w1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ju={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Qg(){if(gm)return mi;gm=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(o,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:l,type:o,key:b,ref:f!==void 0?f:null,props:h}}return mi.Fragment=s,mi.jsx=u,mi.jsxs=u,mi}var ym;function Zg(){return ym||(ym=1,ju.exports=Qg()),ju.exports}var c=Zg(),Eu={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Kg(){if(bm)return ie;bm=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.iterator;function j(w){return w===null||typeof w!="object"?null:(w=C&&w[C]||w["@@iterator"],typeof w=="function"?w:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,X={};function R(w,H,J){this.props=w,this.context=H,this.refs=X,this.updater=J||E}R.prototype.isReactComponent={},R.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function D(){}D.prototype=R.prototype;function G(w,H,J){this.props=w,this.context=H,this.refs=X,this.updater=J||E}var q=G.prototype=new D;q.constructor=G,k(q,R.prototype),q.isPureReactComponent=!0;var te=Array.isArray,$={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function je(w,H,J,P,V,he){return J=he.ref,{$$typeof:l,type:w,key:H,ref:J!==void 0?J:null,props:he}}function ve(w,H){return je(w.type,H,void 0,void 0,void 0,w.props)}function I(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function re(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return H[J]})}var tt=/\/+/g;function Zt(w,H){return typeof w=="object"&&w!==null&&w.key!=null?re(""+w.key):H.toString(36)}function Lt(){}function Kt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Lt,Lt):(w.status="pending",w.then(function(H){w.status==="pending"&&(w.status="fulfilled",w.value=H)},function(H){w.status==="pending"&&(w.status="rejected",w.reason=H)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function it(w,H,J,P,V){var he=typeof w;(he==="undefined"||he==="boolean")&&(w=null);var se=!1;if(w===null)se=!0;else switch(he){case"bigint":case"string":case"number":se=!0;break;case"object":switch(w.$$typeof){case l:case s:se=!0;break;case x:return se=w._init,it(se(w._payload),H,J,P,V)}}if(se)return V=V(w),se=P===""?"."+Zt(w,0):P,te(V)?(J="",se!=null&&(J=se.replace(tt,"$&/")+"/"),it(V,H,J,"",function(He){return He})):V!=null&&(I(V)&&(V=ve(V,J+(V.key==null||w&&w.key===V.key?"":(""+V.key).replace(tt,"$&/")+"/")+se)),H.push(V)),1;se=0;var at=P===""?".":P+":";if(te(w))for(var be=0;be<w.length;be++)P=w[be],he=at+Zt(P,be),se+=it(P,H,J,he,V);else if(be=j(w),typeof be=="function")for(w=be.call(w),be=0;!(P=w.next()).done;)P=P.value,he=at+Zt(P,be++),se+=it(P,H,J,he,V);else if(he==="object"){if(typeof w.then=="function")return it(Kt(w),H,J,P,V);throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return se}function Y(w,H,J){if(w==null)return w;var P=[],V=0;return it(w,P,"","",function(he){return H.call(J,he,V++)}),P}function ne(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var ee=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Ae(){}return ie.Children={map:Y,forEach:function(w,H,J){Y(w,function(){H.apply(this,arguments)},J)},count:function(w){var H=0;return Y(w,function(){H++}),H},toArray:function(w){return Y(w,function(H){return H})||[]},only:function(w){if(!I(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ie.Component=R,ie.Fragment=u,ie.Profiler=f,ie.PureComponent=G,ie.StrictMode=o,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ie.act=function(){throw Error("act(...) is not supported in production builds of React.")},ie.cache=function(w){return function(){return w.apply(null,arguments)}},ie.cloneElement=function(w,H,J){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var P=k({},w.props),V=w.key,he=void 0;if(H!=null)for(se in H.ref!==void 0&&(he=void 0),H.key!==void 0&&(V=""+H.key),H)!le.call(H,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&H.ref===void 0||(P[se]=H[se]);var se=arguments.length-2;if(se===1)P.children=J;else if(1<se){for(var at=Array(se),be=0;be<se;be++)at[be]=arguments[be+2];P.children=at}return je(w.type,V,void 0,void 0,he,P)},ie.createContext=function(w){return w={$$typeof:b,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ie.createElement=function(w,H,J){var P,V={},he=null;if(H!=null)for(P in H.key!==void 0&&(he=""+H.key),H)le.call(H,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(V[P]=H[P]);var se=arguments.length-2;if(se===1)V.children=J;else if(1<se){for(var at=Array(se),be=0;be<se;be++)at[be]=arguments[be+2];V.children=at}if(w&&w.defaultProps)for(P in se=w.defaultProps,se)V[P]===void 0&&(V[P]=se[P]);return je(w,he,void 0,void 0,null,V)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(w){return{$$typeof:g,render:w}},ie.isValidElement=I,ie.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ne}},ie.memo=function(w,H){return{$$typeof:p,type:w,compare:H===void 0?null:H}},ie.startTransition=function(w){var H=$.T,J={};$.T=J;try{var P=w(),V=$.S;V!==null&&V(J,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(Ae,ee)}catch(he){ee(he)}finally{$.T=H}},ie.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ie.use=function(w){return $.H.use(w)},ie.useActionState=function(w,H,J){return $.H.useActionState(w,H,J)},ie.useCallback=function(w,H){return $.H.useCallback(w,H)},ie.useContext=function(w){return $.H.useContext(w)},ie.useDebugValue=function(){},ie.useDeferredValue=function(w,H){return $.H.useDeferredValue(w,H)},ie.useEffect=function(w,H){return $.H.useEffect(w,H)},ie.useId=function(){return $.H.useId()},ie.useImperativeHandle=function(w,H,J){return $.H.useImperativeHandle(w,H,J)},ie.useInsertionEffect=function(w,H){return $.H.useInsertionEffect(w,H)},ie.useLayoutEffect=function(w,H){return $.H.useLayoutEffect(w,H)},ie.useMemo=function(w,H){return $.H.useMemo(w,H)},ie.useOptimistic=function(w,H){return $.H.useOptimistic(w,H)},ie.useReducer=function(w,H,J){return $.H.useReducer(w,H,J)},ie.useRef=function(w){return $.H.useRef(w)},ie.useState=function(w){return $.H.useState(w)},ie.useSyncExternalStore=function(w,H,J){return $.H.useSyncExternalStore(w,H,J)},ie.useTransition=function(){return $.H.useTransition()},ie.version="19.0.0",ie}var vm;function hc(){return vm||(vm=1,Eu.exports=Kg()),Eu.exports}var O=hc();const Ct=w1(O);var Tu={exports:{}},pi={},Ou={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function Pg(){return xm||(xm=1,function(l){function s(Y,ne){var ee=Y.length;Y.push(ne);e:for(;0<ee;){var Ae=ee-1>>>1,w=Y[Ae];if(0<f(w,ne))Y[Ae]=ne,Y[ee]=w,ee=Ae;else break e}}function u(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var ne=Y[0],ee=Y.pop();if(ee!==ne){Y[0]=ee;e:for(var Ae=0,w=Y.length,H=w>>>1;Ae<H;){var J=2*(Ae+1)-1,P=Y[J],V=J+1,he=Y[V];if(0>f(P,ee))V<w&&0>f(he,P)?(Y[Ae]=he,Y[V]=ee,Ae=V):(Y[Ae]=P,Y[J]=ee,Ae=J);else if(V<w&&0>f(he,ee))Y[Ae]=he,Y[V]=ee,Ae=V;else break e}}return ne}function f(Y,ne){var ee=Y.sortIndex-ne.sortIndex;return ee!==0?ee:Y.id-ne.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var b=Date,g=b.now();l.unstable_now=function(){return b.now()-g}}var y=[],p=[],x=1,C=null,j=3,E=!1,k=!1,X=!1,R=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function q(Y){for(var ne=u(p);ne!==null;){if(ne.callback===null)o(p);else if(ne.startTime<=Y)o(p),ne.sortIndex=ne.expirationTime,s(y,ne);else break;ne=u(p)}}function te(Y){if(X=!1,q(Y),!k)if(u(y)!==null)k=!0,Kt();else{var ne=u(p);ne!==null&&it(te,ne.startTime-Y)}}var $=!1,le=-1,je=5,ve=-1;function I(){return!(l.unstable_now()-ve<je)}function re(){if($){var Y=l.unstable_now();ve=Y;var ne=!0;try{e:{k=!1,X&&(X=!1,D(le),le=-1),E=!0;var ee=j;try{t:{for(q(Y),C=u(y);C!==null&&!(C.expirationTime>Y&&I());){var Ae=C.callback;if(typeof Ae=="function"){C.callback=null,j=C.priorityLevel;var w=Ae(C.expirationTime<=Y);if(Y=l.unstable_now(),typeof w=="function"){C.callback=w,q(Y),ne=!0;break t}C===u(y)&&o(y),q(Y)}else o(y);C=u(y)}if(C!==null)ne=!0;else{var H=u(p);H!==null&&it(te,H.startTime-Y),ne=!1}}break e}finally{C=null,j=ee,E=!1}ne=void 0}}finally{ne?tt():$=!1}}}var tt;if(typeof G=="function")tt=function(){G(re)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Lt=Zt.port2;Zt.port1.onmessage=re,tt=function(){Lt.postMessage(null)}}else tt=function(){R(re,0)};function Kt(){$||($=!0,tt())}function it(Y,ne){le=R(function(){Y(l.unstable_now())},ne)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(Y){Y.callback=null},l.unstable_continueExecution=function(){k||E||(k=!0,Kt())},l.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<Y?Math.floor(1e3/Y):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_getFirstCallbackNode=function(){return u(y)},l.unstable_next=function(Y){switch(j){case 1:case 2:case 3:var ne=3;break;default:ne=j}var ee=j;j=ne;try{return Y()}finally{j=ee}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ee=j;j=Y;try{return ne()}finally{j=ee}},l.unstable_scheduleCallback=function(Y,ne,ee){var Ae=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ae+ee:Ae):ee=Ae,Y){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ee+w,Y={id:x++,callback:ne,priorityLevel:Y,startTime:ee,expirationTime:w,sortIndex:-1},ee>Ae?(Y.sortIndex=ee,s(p,Y),u(y)===null&&Y===u(p)&&(X?(D(le),le=-1):X=!0,it(te,ee-Ae))):(Y.sortIndex=w,s(y,Y),k||E||(k=!0,Kt())),Y},l.unstable_shouldYield=I,l.unstable_wrapCallback=function(Y){var ne=j;return function(){var ee=j;j=ne;try{return Y.apply(this,arguments)}finally{j=ee}}}}(Cu)),Cu}var wm;function Fg(){return wm||(wm=1,Ou.exports=Pg()),Ou.exports}var ku={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function Jg(){if(_m)return Je;_m=1;var l=hc();function s(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(y,p,x){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:y,containerInfo:p,implementation:x}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Je.createPortal=function(y,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return h(y,p,null,x)},Je.flushSync=function(y){var p=b.T,x=o.p;try{if(b.T=null,o.p=2,y)return y()}finally{b.T=p,o.p=x,o.d.f()}},Je.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},Je.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Je.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var x=p.as,C=g(x,p.crossOrigin),j=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:j,fetchPriority:E}):x==="script"&&o.d.X(y,{crossOrigin:C,integrity:j,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},Je.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,C=g(x,p.crossOrigin);o.d.L(y,x,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(y,p){if(typeof y=="string")if(p){var x=g(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},Je.requestFormReset=function(y){o.d.r(y)},Je.unstable_batchedUpdates=function(y,p){return y(p)},Je.useFormState=function(y,p,x){return b.H.useFormState(y,p,x)},Je.useFormStatus=function(){return b.H.useHostTransitionStatus()},Je.version="19.0.0",Je}var Am;function e2(){if(Am)return ku.exports;Am=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),ku.exports=Jg(),ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function t2(){if(Sm)return pi;Sm=1;var l=Fg(),s=hc(),u=e2();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var h=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),E=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),te=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var je=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===je?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case g:return"Portal";case x:return"Profiler";case p:return"StrictMode";case X:return"Suspense";case R:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:return(e.displayName||"Context")+".Provider";case j:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var I=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=Object.assign,tt,Zt;function Lt(e){if(tt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);tt=t&&t[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+e+Zt}var Kt=!1;function it(e,t){if(!e||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(M){var T=M}Reflect.construct(e,[],U)}else{try{U.call()}catch(M){T=M}e.call(U.prototype)}}else{try{throw Error()}catch(M){T=M}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),d=r[0],m=r[1];if(d&&m){var v=d.split(`
`),A=m.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===A.length)for(n=v.length-1,i=A.length-1;1<=n&&0<=i&&v[n]!==A[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==A[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==A[i]){var z=`
`+v[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Lt(a):""}function Y(e){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return e=it(e.type,!1),e;case 11:return e=it(e.type.render,!1),e;case 1:return e=it(e.type,!0),e;default:return""}}function ne(e){try{var t="";do t+=Y(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ee(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Ae(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(ee(e)!==e)throw Error(o(188))}function H(e){var t=e.alternate;if(!t){if(t=ee(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return w(i),e;if(r===n)return w(i),t;r=r.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=r;else{for(var d=!1,m=i.child;m;){if(m===a){d=!0,a=i,n=r;break}if(m===n){d=!0,n=i,a=r;break}m=m.sibling}if(!d){for(m=r.child;m;){if(m===a){d=!0,a=r,n=i;break}if(m===n){d=!0,n=r,a=i;break}m=m.sibling}if(!d)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function J(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=J(e),t!==null)return t;e=e.sibling}return null}var P=Array.isArray,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},se=[],at=-1;function be(e){return{current:e}}function He(e){0>at||(e.current=se[at],se[at]=null,at--)}function Te(e,t){at++,se[at]=e.current,e.current=t}var Rt=be(null),yl=be(null),_a=be(null),Li=be(null);function Ri(e,t){switch(Te(_a,t),Te(yl,e),Te(Rt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Vh(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Vh(e),t=Wh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}He(Rt),Te(Rt,t)}function Tn(){He(Rt),He(yl),He(_a)}function gs(e){e.memoizedState!==null&&Te(Li,e);var t=Rt.current,a=Wh(t,e.type);t!==a&&(Te(yl,e),Te(Rt,a))}function Ui(e){yl.current===e&&(He(Rt),He(yl)),Li.current===e&&(He(Li),ui._currentValue=he)}var ys=Object.prototype.hasOwnProperty,bs=l.unstable_scheduleCallback,vs=l.unstable_cancelCallback,jp=l.unstable_shouldYield,Ep=l.unstable_requestPaint,Ut=l.unstable_now,Tp=l.unstable_getCurrentPriorityLevel,zc=l.unstable_ImmediatePriority,Dc=l.unstable_UserBlockingPriority,Hi=l.unstable_NormalPriority,Op=l.unstable_LowPriority,Lc=l.unstable_IdlePriority,Cp=l.log,kp=l.unstable_setDisableYieldValue,bl=null,ut=null;function Mp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}function Aa(e){if(typeof Cp=="function"&&kp(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(bl,e)}catch{}}var ct=Math.clz32?Math.clz32:Lp,zp=Math.log,Dp=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-(zp(e)/Dp|0)|0}var Bi=128,qi=4194304;function tn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes,d=e.warmLanes;e=e.finishedLanes!==0;var m=a&134217727;return m!==0?(a=m&~i,a!==0?n=tn(a):(r&=m,r!==0?n=tn(r):e||(d=m&~d,d!==0&&(n=tn(d))))):(m=a&~i,m!==0?n=tn(m):r!==0?n=tn(r):e||(d=a&~d,d!==0&&(n=tn(d)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,d=t&-t,i>=d||i===32&&(d&4194176)!==0)?t:n}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rp(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rc(){var e=Bi;return Bi<<=1,(Bi&4194176)===0&&(Bi=128),e}function Uc(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function xs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Up(e,t,a,n,i,r){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(a=d&~a;0<a;){var z=31-ct(a),U=1<<z;m[z]=0,v[z]=-1;var T=A[z];if(T!==null)for(A[z]=null,z=0;z<T.length;z++){var M=T[z];M!==null&&(M.lane&=-536870913)}a&=~U}n!==0&&Hc(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function Hc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function Bc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function qc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:cm(e.type))}function Hp(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var Sa=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Sa,rt="__reactProps$"+Sa,On="__reactContainer$"+Sa,ws="__reactEvents$"+Sa,Bp="__reactListeners$"+Sa,qp="__reactHandles$"+Sa,Xc="__reactResources$"+Sa,wl="__reactMarker$"+Sa;function _s(e){delete e[Pe],delete e[rt],delete e[ws],delete e[Bp],delete e[qp]}function an(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[On]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zh(e);e!==null;){if(a=e[Pe])return a;e=Zh(e)}return t}e=a,a=e.parentNode}return null}function Cn(e){if(e=e[Pe]||e[On]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function kn(e){var t=e[Xc];return t||(t=e[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[wl]=!0}var Yc=new Set,$c={};function nn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for($c[e]=t,e=0;e<t.length;e++)Yc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vc={},Wc={};function Xp(e){return ys.call(Wc,e)?!0:ys.call(Vc,e)?!1:Gp.test(e)?Wc[e]=!0:(Vc[e]=!0,!1)}function Xi(e,t,a){if(Xp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ft(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yp(e){var t=Ic(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=Yp(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ic(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $p=/[\n"\\]/g;function bt(e){return e.replace($p,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function As(e,t,a,n,i,r,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ss(e,d,yt(t)):a!=null?Ss(e,d,yt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+yt(m):e.removeAttribute("name")}function Zc(e,t,a,n,i,r,d,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Ss(e,t,a){t==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function Pc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(P(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Dn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Vp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Jc(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Fc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Fc(e,r,t[r])}function Ns(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return Ip.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var js=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ln=null,Rn=null;function ef(e){var t=Cn(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(As(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[rt]||null;if(!i)throw Error(o(90));As(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Qc(n)}break e;case"textarea":Kc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&zn(e,!!a.multiple,t,!1)}}}var Ts=!1;function tf(e,t,a){if(Ts)return e(t,a);Ts=!0;try{var n=e(t);return n}finally{if(Ts=!1,(Ln!==null||Rn!==null)&&(Or(),Ln&&(t=Ln,e=Rn,Rn=Ln=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function Al(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Os=!1;if(Pt)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{Os=!1}var Na=null,Cs=null,Ii=null;function af(){if(Ii)return Ii;var e,t=Cs,a=t.length,n,i="value"in Na?Na.value:Na.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[r-n];n++);return Ii=i.slice(e,1<n?1-n:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function nf(){return!1}function st(e){function t(a,n,i,r,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zi:nf,this.isPropagationStopped=nf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=st(ln),Nl=re({},ln,{view:0,detail:0}),Qp=st(Nl),ks,Ms,jl,Pi=re({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(ks=e.screenX-jl.screenX,Ms=e.screenY-jl.screenY):Ms=ks=0,jl=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),lf=st(Pi),Zp=re({},Pi,{dataTransfer:0}),Kp=st(Zp),Pp=re({},Nl,{relatedTarget:0}),zs=st(Pp),Fp=re({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=st(Fp),e0=re({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t0=st(e0),a0=re({},ln,{data:0}),rf=st(a0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function Ds(){return r0}var s0=re({},Nl,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o0=st(s0),u0=re({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=st(u0),c0=re({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),f0=st(c0),d0=re({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=st(d0),m0=re({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=st(m0),g0=re({},ln,{newState:0,oldState:0}),y0=st(g0),b0=[9,13,27,32],Ls=Pt&&"CompositionEvent"in window,El=null;Pt&&"documentMode"in document&&(El=document.documentMode);var v0=Pt&&"TextEvent"in window&&!El,of=Pt&&(!Ls||El&&8<El&&11>=El),uf=" ",cf=!1;function ff(e,t){switch(e){case"keyup":return b0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function x0(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(cf=!0,uf);case"textInput":return e=t.data,e===uf&&cf?null:e;default:return null}}function w0(e,t){if(Un)return e==="compositionend"||!Ls&&ff(e,t)?(e=af(),Ii=Cs=Na=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_0[e.type]:t==="textarea"}function mf(e,t,a,n){Ln?Rn?Rn.push(n):Rn=[n]:Ln=n,t=Dr(t,"onChange"),0<t.length&&(a=new Ki("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Tl=null,Ol=null;function A0(e){qh(e,0)}function Fi(e){var t=_l(e);if(Qc(t))return e}function pf(e,t){if(e==="change")return t}var gf=!1;if(Pt){var Rs;if(Pt){var Us="oninput"in document;if(!Us){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Us=typeof yf.oninput=="function"}Rs=Us}else Rs=!1;gf=Rs&&(!document.documentMode||9<document.documentMode)}function bf(){Tl&&(Tl.detachEvent("onpropertychange",vf),Ol=Tl=null)}function vf(e){if(e.propertyName==="value"&&Fi(Ol)){var t=[];mf(t,Ol,e,Es(e)),tf(A0,t)}}function S0(e,t,a){e==="focusin"?(bf(),Tl=t,Ol=a,Tl.attachEvent("onpropertychange",vf)):e==="focusout"&&bf()}function N0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(Ol)}function j0(e,t){if(e==="click")return Fi(t)}function E0(e,t){if(e==="input"||e==="change")return Fi(t)}function T0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:T0;function Cl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ys.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,t){var a=xf(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function _f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vi(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O0(e,t){var a=Af(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&_f(t.ownerDocument.documentElement,t)){if(n!==null&&Hs(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var i=t.textContent.length,r=Math.min(n.start,i);n=n.end===void 0?r:Math.min(n.end,i),!a.extend&&r>n&&(i=n,n=r,r=i),i=wf(t,r);var d=wf(t,n);i&&d&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==d.node||a.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),a.removeAllRanges(),r>n?(a.addRange(e),a.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var C0=Pt&&"documentMode"in document&&11>=document.documentMode,Hn=null,Bs=null,kl=null,qs=!1;function Sf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qs||Hn==null||Hn!==Vi(n)||(n=Hn,"selectionStart"in n&&Hs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kl&&Cl(kl,n)||(kl=n,n=Dr(Bs,"onSelect"),0<n.length&&(t=new Ki("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Hn)))}function rn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Bn={animationend:rn("Animation","AnimationEnd"),animationiteration:rn("Animation","AnimationIteration"),animationstart:rn("Animation","AnimationStart"),transitionrun:rn("Transition","TransitionRun"),transitionstart:rn("Transition","TransitionStart"),transitioncancel:rn("Transition","TransitionCancel"),transitionend:rn("Transition","TransitionEnd")},Gs={},Nf={};Pt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function sn(e){if(Gs[e])return Gs[e];if(!Bn[e])return e;var t=Bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nf)return Gs[e]=t[a];return e}var jf=sn("animationend"),Ef=sn("animationiteration"),Tf=sn("animationstart"),k0=sn("transitionrun"),M0=sn("transitionstart"),z0=sn("transitioncancel"),Of=sn("transitionend"),Cf=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kt(e,t){Cf.set(e,t),nn(t,[e])}var vt=[],qn=0,Xs=0;function Ji(){for(var e=qn,t=Xs=qn=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var r=vt[t];if(vt[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}r!==0&&Mf(a,i,r)}}function er(e,t,a,n){vt[qn++]=e,vt[qn++]=t,vt[qn++]=a,vt[qn++]=n,Xs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ys(e,t,a,n){return er(e,t,a,n),tr(e)}function ja(e,t){return er(e,null,null,t),tr(e)}function Mf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;i&&t!==null&&e.tag===3&&(r=e.stateNode,i=31-ct(a),r=r.hiddenUpdates,e=r[i],e===null?r[i]=[t]:e.push(t),t.lane=a|536870912)}function tr(e){if(50<ai)throw ai=0,Ko=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gn={},zf=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=zf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ne(t)},zf.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Xn=[],Yn=0,ar=null,nr=0,wt=[],_t=0,on=null,Jt=1,ea="";function un(e,t){Xn[Yn++]=nr,Xn[Yn++]=ar,ar=e,nr=t}function Df(e,t,a){wt[_t++]=Jt,wt[_t++]=ea,wt[_t++]=on,on=e;var n=Jt;e=ea;var i=32-ct(n)-1;n&=~(1<<i),a+=1;var r=32-ct(t)+i;if(30<r){var d=i-i%5;r=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Jt=1<<32-ct(t)+i|a<<i|n,ea=r+e}else Jt=1<<r|a<<i|n,ea=e}function $s(e){e.return!==null&&(un(e,1),Df(e,1,0))}function Vs(e){for(;e===ar;)ar=Xn[--Yn],Xn[Yn]=null,nr=Xn[--Yn],Xn[Yn]=null;for(;e===on;)on=wt[--_t],wt[_t]=null,ea=wt[--_t],wt[_t]=null,Jt=wt[--_t],wt[_t]=null}var nt=null,Qe=null,pe=!1,Mt=null,Ht=!1,Ws=Error(o(519));function cn(e){var t=Error(o(418,""));throw Dl(xt(t,e)),Ws}function Lf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Pe]=e,t[rt]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<li.length;a++)de(li[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Zc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),$i(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Pc(t,n.value,n.defaultValue,n.children),$i(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||$h(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=Lr),t=!0):t=!1,t||cn(e)}function Rf(e){for(nt=e.return;nt;)switch(nt.tag){case 3:case 27:Ht=!0;return;case 5:case 13:Ht=!1;return;default:nt=nt.return}}function Ml(e){if(e!==nt)return!1;if(!pe)return Rf(e),pe=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hu(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&Qe&&cn(e),Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Qe=Dt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Qe=null}}else Qe=nt?Dt(e.stateNode.nextSibling):null;return!0}function zl(){Qe=nt=null,pe=!1}function Dl(e){Mt===null?Mt=[e]:Mt.push(e)}var Ll=Error(o(460)),Uf=Error(o(474)),Is={then:function(){}};function Hf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lr(){}function Bf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(lr,lr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ll?Error(o(483)):e;default:if(typeof t.status=="string")t.then(lr,lr);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ll?Error(o(483)):e}throw Rl=t,Ll}}var Rl=null;function qf(){if(Rl===null)throw Error(o(459));var e=Rl;return Rl=null,e}var $n=null,Ul=0;function ir(e){var t=Ul;return Ul+=1,$n===null&&($n=[]),Bf($n,e,t)}function Hl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rr(e,t){throw t.$$typeof===h?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gf(e){var t=e._init;return t(e._payload)}function Xf(e){function t(S,_){if(e){var N=S.deletions;N===null?(S.deletions=[_],S.flags|=16):N.push(_)}}function a(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function n(S){for(var _=new Map;S!==null;)S.key!==null?_.set(S.key,S):_.set(S.index,S),S=S.sibling;return _}function i(S,_){return S=Ha(S,_),S.index=0,S.sibling=null,S}function r(S,_,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<_?(S.flags|=33554434,_):N):(S.flags|=33554434,_)):(S.flags|=1048576,_)}function d(S){return e&&S.alternate===null&&(S.flags|=33554434),S}function m(S,_,N,L){return _===null||_.tag!==6?(_=Xo(N,S.mode,L),_.return=S,_):(_=i(_,N),_.return=S,_)}function v(S,_,N,L){var W=N.type;return W===y?z(S,_,N.props.children,L,N.key):_!==null&&(_.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===G&&Gf(W)===_.type)?(_=i(_,N.props),Hl(_,N),_.return=S,_):(_=Sr(N.type,N.key,N.props,null,S.mode,L),Hl(_,N),_.return=S,_)}function A(S,_,N,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==N.containerInfo||_.stateNode.implementation!==N.implementation?(_=Yo(N,S.mode,L),_.return=S,_):(_=i(_,N.children||[]),_.return=S,_)}function z(S,_,N,L,W){return _===null||_.tag!==7?(_=xn(N,S.mode,L,W),_.return=S,_):(_=i(_,N),_.return=S,_)}function U(S,_,N){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Xo(""+_,S.mode,N),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case b:return N=Sr(_.type,_.key,_.props,null,S.mode,N),Hl(N,_),N.return=S,N;case g:return _=Yo(_,S.mode,N),_.return=S,_;case G:var L=_._init;return _=L(_._payload),U(S,_,N)}if(P(_)||le(_))return _=xn(_,S.mode,N,null),_.return=S,_;if(typeof _.then=="function")return U(S,ir(_),N);if(_.$$typeof===E)return U(S,wr(S,_),N);rr(S,_)}return null}function T(S,_,N,L){var W=_!==null?_.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return W!==null?null:m(S,_,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case b:return N.key===W?v(S,_,N,L):null;case g:return N.key===W?A(S,_,N,L):null;case G:return W=N._init,N=W(N._payload),T(S,_,N,L)}if(P(N)||le(N))return W!==null?null:z(S,_,N,L,null);if(typeof N.then=="function")return T(S,_,ir(N),L);if(N.$$typeof===E)return T(S,_,wr(S,N),L);rr(S,N)}return null}function M(S,_,N,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return S=S.get(N)||null,m(_,S,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return S=S.get(L.key===null?N:L.key)||null,v(_,S,L,W);case g:return S=S.get(L.key===null?N:L.key)||null,A(_,S,L,W);case G:var ue=L._init;return L=ue(L._payload),M(S,_,N,L,W)}if(P(L)||le(L))return S=S.get(N)||null,z(_,S,L,W,null);if(typeof L.then=="function")return M(S,_,N,ir(L),W);if(L.$$typeof===E)return M(S,_,N,wr(_,L),W);rr(_,L)}return null}function Q(S,_,N,L){for(var W=null,ue=null,K=_,F=_=0,Ie=null;K!==null&&F<N.length;F++){K.index>F?(Ie=K,K=null):Ie=K.sibling;var ge=T(S,K,N[F],L);if(ge===null){K===null&&(K=Ie);break}e&&K&&ge.alternate===null&&t(S,K),_=r(ge,_,F),ue===null?W=ge:ue.sibling=ge,ue=ge,K=Ie}if(F===N.length)return a(S,K),pe&&un(S,F),W;if(K===null){for(;F<N.length;F++)K=U(S,N[F],L),K!==null&&(_=r(K,_,F),ue===null?W=K:ue.sibling=K,ue=K);return pe&&un(S,F),W}for(K=n(K);F<N.length;F++)Ie=M(K,S,F,N[F],L),Ie!==null&&(e&&Ie.alternate!==null&&K.delete(Ie.key===null?F:Ie.key),_=r(Ie,_,F),ue===null?W=Ie:ue.sibling=Ie,ue=Ie);return e&&K.forEach(function(Va){return t(S,Va)}),pe&&un(S,F),W}function ae(S,_,N,L){if(N==null)throw Error(o(151));for(var W=null,ue=null,K=_,F=_=0,Ie=null,ge=N.next();K!==null&&!ge.done;F++,ge=N.next()){K.index>F?(Ie=K,K=null):Ie=K.sibling;var Va=T(S,K,ge.value,L);if(Va===null){K===null&&(K=Ie);break}e&&K&&Va.alternate===null&&t(S,K),_=r(Va,_,F),ue===null?W=Va:ue.sibling=Va,ue=Va,K=Ie}if(ge.done)return a(S,K),pe&&un(S,F),W;if(K===null){for(;!ge.done;F++,ge=N.next())ge=U(S,ge.value,L),ge!==null&&(_=r(ge,_,F),ue===null?W=ge:ue.sibling=ge,ue=ge);return pe&&un(S,F),W}for(K=n(K);!ge.done;F++,ge=N.next())ge=M(K,S,F,ge.value,L),ge!==null&&(e&&ge.alternate!==null&&K.delete(ge.key===null?F:ge.key),_=r(ge,_,F),ue===null?W=ge:ue.sibling=ge,ue=ge);return e&&K.forEach(function(Ig){return t(S,Ig)}),pe&&un(S,F),W}function Le(S,_,N,L){if(typeof N=="object"&&N!==null&&N.type===y&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case b:e:{for(var W=N.key;_!==null;){if(_.key===W){if(W=N.type,W===y){if(_.tag===7){a(S,_.sibling),L=i(_,N.props.children),L.return=S,S=L;break e}}else if(_.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===G&&Gf(W)===_.type){a(S,_.sibling),L=i(_,N.props),Hl(L,N),L.return=S,S=L;break e}a(S,_);break}else t(S,_);_=_.sibling}N.type===y?(L=xn(N.props.children,S.mode,L,N.key),L.return=S,S=L):(L=Sr(N.type,N.key,N.props,null,S.mode,L),Hl(L,N),L.return=S,S=L)}return d(S);case g:e:{for(W=N.key;_!==null;){if(_.key===W)if(_.tag===4&&_.stateNode.containerInfo===N.containerInfo&&_.stateNode.implementation===N.implementation){a(S,_.sibling),L=i(_,N.children||[]),L.return=S,S=L;break e}else{a(S,_);break}else t(S,_);_=_.sibling}L=Yo(N,S.mode,L),L.return=S,S=L}return d(S);case G:return W=N._init,N=W(N._payload),Le(S,_,N,L)}if(P(N))return Q(S,_,N,L);if(le(N)){if(W=le(N),typeof W!="function")throw Error(o(150));return N=W.call(N),ae(S,_,N,L)}if(typeof N.then=="function")return Le(S,_,ir(N),L);if(N.$$typeof===E)return Le(S,_,wr(S,N),L);rr(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,_!==null&&_.tag===6?(a(S,_.sibling),L=i(_,N),L.return=S,S=L):(a(S,_),L=Xo(N,S.mode,L),L.return=S,S=L),d(S)):a(S,_)}return function(S,_,N,L){try{Ul=0;var W=Le(S,_,N,L);return $n=null,W}catch(K){if(K===Ll)throw K;var ue=jt(29,K,null,S.mode);return ue.lanes=L,ue.return=S,ue}finally{}}}var fn=Xf(!0),Yf=Xf(!1),Vn=be(null),sr=be(0);function $f(e,t){e=fa,Te(sr,e),Te(Vn,t),fa=e|t.baseLanes}function Qs(){Te(sr,fa),Te(Vn,Vn.current)}function Zs(){fa=sr.current,He(Vn),He(sr)}var At=be(null),Bt=null;function Ea(e){var t=e.alternate;Te(Xe,Xe.current&1),Te(At,e),Bt===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&(Bt=e)}function Vf(e){if(e.tag===22){if(Te(Xe,Xe.current),Te(At,e),Bt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Bt=e)}}else Ta()}function Ta(){Te(Xe,Xe.current),Te(At,At.current)}function ta(e){He(At),Bt===e&&(Bt=null),He(Xe)}var Xe=be(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var D0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},L0=l.unstable_scheduleCallback,R0=l.unstable_NormalPriority,Ye={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ks(){return{controller:new D0,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&L0(R0,function(){e.controller.abort()})}var ql=null,Ps=0,Wn=0,In=null;function U0(e,t){if(ql===null){var a=ql=[];Ps=0,Wn=lu(),In={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ps++,t.then(Wf,Wf),t}function Wf(){if(--Ps===0&&ql!==null){In!==null&&(In.status="fulfilled");var e=ql;ql=null,Wn=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var If=I.S;I.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U0(e,t),If!==null&&If(e,t)};var dn=be(null);function Fs(){var e=dn.current;return e!==null?e:Se.pooledCache}function ur(e,t){t===null?Te(dn,dn.current):Te(dn,t.pool)}function Qf(){var e=Fs();return e===null?null:{parent:Ye._currentValue,pool:e}}var Oa=0,oe=null,xe=null,Be=null,cr=!1,Qn=!1,hn=!1,fr=0,Gl=0,Zn=null,B0=0;function Re(){throw Error(o(321))}function Js(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function eo(e,t,a,n,i,r){return Oa=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?mn:Ca,hn=!1,r=a(n,i),hn=!1,Qn&&(r=Kf(t,a,n,i)),Zf(e),r}function Zf(e){I.H=qt;var t=xe!==null&&xe.next!==null;if(Oa=0,Be=xe=oe=null,cr=!1,Gl=0,Zn=null,t)throw Error(o(300));e===null||Ve||(e=e.dependencies,e!==null&&xr(e)&&(Ve=!0))}function Kf(e,t,a,n){oe=e;var i=0;do{if(Qn&&(Zn=null),Gl=0,Qn=!1,25<=i)throw Error(o(301));if(i+=1,Be=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}I.H=pn,r=t(a,n)}while(Qn);return r}function q0(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(oe.flags|=1024),t}function to(){var e=fr!==0;return fr=0,e}function ao(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function no(e){if(cr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cr=!1}Oa=0,Be=xe=oe=null,Qn=!1,Gl=fr=0,Zn=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?oe.memoizedState=Be=e:Be=Be.next=e,Be}function qe(){if(xe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Be===null?oe.memoizedState:Be.next;if(t!==null)Be=t,xe=e;else{if(e===null)throw oe.alternate===null?Error(o(467)):Error(o(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Be===null?oe.memoizedState=Be=e:Be=Be.next=e}return Be}var dr;dr=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Xl(e){var t=Gl;return Gl+=1,Zn===null&&(Zn=[]),e=Bf(Zn,e,t),t=oe,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?mn:Ca),e}function hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===E)return Fe(e)}throw Error(o(438,String(e)))}function lo(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=oe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=dr(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=te;return t.index++,a}function aa(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=qe();return io(t,xe,e)}function io(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=d=null,v=null,A=t,z=!1;do{var U=A.lane&-536870913;if(U!==A.lane?(me&U)===U:(Oa&U)===U){var T=A.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),U===Wn&&(z=!0);else if((Oa&T)===T){A=A.next,T===Wn&&(z=!0);continue}else U={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(m=v=U,d=r):v=v.next=U,oe.lanes|=T,Ba|=T;U=A.action,hn&&a(r,U),r=A.hasEagerState?A.eagerState:a(r,U)}else T={lane:U,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(m=v=T,d=r):v=v.next=T,oe.lanes|=U,Ba|=U;A=A.next}while(A!==null&&A!==t);if(v===null?d=r:v.next=m,!ft(r,e.memoizedState)&&(Ve=!0,z&&(a=In,a!==null)))throw a;e.memoizedState=r,e.baseState=d,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ro(e){var t=qe(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);ft(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Pf(e,t,a){var n=oe,i=qe(),r=pe;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var d=!ft((xe||i).memoizedState,a);if(d&&(i.memoizedState=a,Ve=!0),i=i.queue,uo(ed.bind(null,n,i,e),[e]),i.getSnapshot!==t||d||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Kn(9,Jf.bind(null,n,i,a,t),{destroy:void 0},null),Se===null)throw Error(o(349));r||(Oa&60)!==0||Ff(n,t,a)}return a}function Ff(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=dr(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Jf(e,t,a,n){t.value=a,t.getSnapshot=n,td(t)&&ad(e)}function ed(e,t,a){return a(function(){td(t)&&ad(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function ad(e){var t=ja(e,2);t!==null&&lt(t,e,2)}function so(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),hn){Aa(!0);try{a()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function nd(e,t,a,n){return e.baseState=a,io(e,xe,typeof n=="function"?n:aa)}function G0(e,t,a,n,i){if(yr(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};I.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,ld(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ld(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=I.T,d={};I.T=d;try{var m=a(i,n),v=I.S;v!==null&&v(d,m),id(e,t,m)}catch(A){oo(e,t,A)}finally{I.T=r}}else try{r=a(i,n),id(e,t,r)}catch(A){oo(e,t,A)}}function id(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){rd(e,t,n)},function(n){return oo(e,t,n)}):rd(e,t,a)}function rd(e,t,a){t.status="fulfilled",t.value=a,sd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ld(e,a)))}function oo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,sd(t),t=t.next;while(t!==n)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function od(e,t){return t}function ud(e,t){if(pe){var a=Se.formState;if(a!==null){e:{var n=oe;if(pe){if(Qe){t:{for(var i=Qe,r=Ht;i.nodeType!==8;){if(!r){i=null;break t}if(i=Dt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Qe=Dt(i.nextSibling),n=i.data==="F!";break e}}cn(n)}n=!1}n&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:t},a.queue=n,a=Ed.bind(null,oe,n),n.dispatch=a,n=so(!1),r=po.bind(null,oe,!1,n.queue),n=ot(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=G0.bind(null,oe,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function cd(e){var t=qe();return fd(t,xe,e)}function fd(e,t,a){t=io(e,t,od)[0],e=mr(aa)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Xl(t):t;var n=qe(),i=n.queue,r=i.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Kn(9,X0.bind(null,i,a),{destroy:void 0},null)),[t,r,e]}function X0(e,t){e.action=t}function dd(e){var t=qe(),a=xe;if(a!==null)return fd(t,a,e);qe(),t=t.memoizedState,a=qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Kn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=oe.updateQueue,t===null&&(t=dr(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hd(){return qe().memoizedState}function pr(e,t,a,n){var i=ot();oe.flags|=e,i.memoizedState=Kn(1|t,a,{destroy:void 0},n===void 0?null:n)}function gr(e,t,a,n){var i=qe();n=n===void 0?null:n;var r=i.memoizedState.inst;xe!==null&&n!==null&&Js(n,xe.memoizedState.deps)?i.memoizedState=Kn(t,a,r,n):(oe.flags|=e,i.memoizedState=Kn(1|t,a,r,n))}function md(e,t){pr(8390656,8,e,t)}function uo(e,t){gr(2048,8,e,t)}function pd(e,t){return gr(4,2,e,t)}function gd(e,t){return gr(4,4,e,t)}function yd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,a){a=a!=null?a.concat([e]):null,gr(4,4,yd.bind(null,t,e),a)}function co(){}function vd(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Js(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function xd(e,t){var a=qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Js(t,n[1]))return n[0];if(n=e(),hn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n}function fo(e,t,a){return a===void 0||(Oa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=_h(),oe.lanes|=e,Ba|=e,a)}function wd(e,t,a,n){return ft(a,t)?a:Vn.current!==null?(e=fo(e,a,n),ft(e,t)||(Ve=!0),e):(Oa&42)===0?(Ve=!0,e.memoizedState=a):(e=_h(),oe.lanes|=e,Ba|=e,t)}function _d(e,t,a,n,i){var r=V.p;V.p=r!==0&&8>r?r:8;var d=I.T,m={};I.T=m,po(e,!1,t,a);try{var v=i(),A=I.S;if(A!==null&&A(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=H0(v,n);Yl(e,t,z,pt(e))}else Yl(e,t,n,pt(e))}catch(U){Yl(e,t,{then:function(){},status:"rejected",reason:U},pt())}finally{V.p=r,I.T=d}}function Y0(){}function ho(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=Ad(e).queue;_d(e,i,t,he,a===null?Y0:function(){return Sd(e),a(n)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:he},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sd(e){var t=Ad(e).next.queue;Yl(e,t,{},pt())}function mo(){return Fe(ui)}function Nd(){return qe().memoizedState}function jd(){return qe().memoizedState}function $0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=za(a);var n=Da(t,e,a);n!==null&&(lt(n,t,a),Wl(n,t,a)),t={cache:Ks()},e.payload=t;return}t=t.return}}function V0(e,t,a){var n=pt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)?Td(t,a):(a=Ys(e,t,a,n),a!==null&&(lt(a,e,n),Od(a,t,n)))}function Ed(e,t,a){var n=pt();Yl(e,t,a,n)}function Yl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Td(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,m=r(d,a);if(i.hasEagerState=!0,i.eagerState=m,ft(m,d))return er(e,t,i,0),Se===null&&Ji(),!1}catch{}finally{}if(a=Ys(e,t,i,n),a!==null)return lt(a,e,n),Od(a,t,n),!0}return!1}function po(e,t,a,n){if(n={lane:2,revertLane:lu(),action:n,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(o(479))}else t=Ys(e,a,n,2),t!==null&&lt(t,e,2)}function yr(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Td(e,t){Qn=cr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Od(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Bc(e,a)}}var qt={readContext:Fe,use:hr,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re};qt.useCacheRefresh=Re,qt.useMemoCache=Re,qt.useHostTransitionStatus=Re,qt.useFormState=Re,qt.useActionState=Re,qt.useOptimistic=Re;var mn={readContext:Fe,use:hr,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:md,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pr(4194308,4,yd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pr(4194308,4,e,t)},useInsertionEffect:function(e,t){pr(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var n=e();if(hn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ot();if(a!==void 0){var i=a(t);if(hn){Aa(!0);try{a(t)}finally{Aa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=V0.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=so(e);var t=e.queue,a=Ed.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:co,useDeferredValue:function(e,t){var a=ot();return fo(a,e,t)},useTransition:function(){var e=so(!1);return e=_d.bind(null,oe,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=oe,i=ot();if(pe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Se===null)throw Error(o(349));(me&60)!==0||Ff(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,md(ed.bind(null,n,r,e),[e]),n.flags|=2048,Kn(9,Jf.bind(null,n,r,a,t),{destroy:void 0},null),a},useId:function(){var e=ot(),t=Se.identifierPrefix;if(pe){var a=ea,n=Jt;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=fr++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=B0++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ot().memoizedState=$0.bind(null,oe)}};mn.useMemoCache=lo,mn.useHostTransitionStatus=mo,mn.useFormState=ud,mn.useActionState=ud,mn.useOptimistic=function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=po.bind(null,oe,!0,a),a.dispatch=t,[e,t]};var Ca={readContext:Fe,use:hr,useCallback:vd,useContext:Fe,useEffect:uo,useImperativeHandle:bd,useInsertionEffect:pd,useLayoutEffect:gd,useMemo:xd,useReducer:mr,useRef:hd,useState:function(){return mr(aa)},useDebugValue:co,useDeferredValue:function(e,t){var a=qe();return wd(a,xe.memoizedState,e,t)},useTransition:function(){var e=mr(aa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:Pf,useId:Nd};Ca.useCacheRefresh=jd,Ca.useMemoCache=lo,Ca.useHostTransitionStatus=mo,Ca.useFormState=cd,Ca.useActionState=cd,Ca.useOptimistic=function(e,t){var a=qe();return nd(a,xe,e,t)};var pn={readContext:Fe,use:hr,useCallback:vd,useContext:Fe,useEffect:uo,useImperativeHandle:bd,useInsertionEffect:pd,useLayoutEffect:gd,useMemo:xd,useReducer:ro,useRef:hd,useState:function(){return ro(aa)},useDebugValue:co,useDeferredValue:function(e,t){var a=qe();return xe===null?fo(a,e,t):wd(a,xe.memoizedState,e,t)},useTransition:function(){var e=ro(aa)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:Pf,useId:Nd};pn.useCacheRefresh=jd,pn.useMemoCache=lo,pn.useHostTransitionStatus=mo,pn.useFormState=dd,pn.useActionState=dd,pn.useOptimistic=function(e,t){var a=qe();return xe!==null?nd(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])};function go(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:re({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yo={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=pt(),i=za(n);i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(lt(t,e,n),Wl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=pt(),i=za(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(lt(t,e,n),Wl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=Da(e,n,a),t!==null&&(lt(t,e,a),Wl(t,e,a))}};function Cd(e,t,a,n,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,d):t.prototype&&t.prototype.isPureReactComponent?!Cl(a,n)||!Cl(i,r):!0}function kd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function gn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=re({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Md(e){br(e)}function zd(e){console.error(e)}function Dd(e){br(e)}function vr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ld(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bo(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){vr(e,t)},a}function Rd(e){return e=za(e),e.tag=3,e}function Ud(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Ld(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Ld(t,a,n),typeof i!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function W0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Vl(t,a,i,!0),a=At.current,a!==null){switch(a.tag){case 13:return Bt===null?Jo():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Is?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),tu(e,n,i)),!1;case 22:return a.flags|=65536,n===Is?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),tu(e,n,i)),!1}throw Error(o(435,a.tag))}return tu(e,n,i),Jo(),!1}if(pe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ws&&(e=Error(o(422),{cause:n}),Dl(xt(e,a)))):(n!==Ws&&(t=Error(o(423),{cause:n}),Dl(xt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=xt(n,a),i=bo(e.stateNode,n,i),zo(e,i),De!==4&&(De=2)),!1;var r=Error(o(520),{cause:n});if(r=xt(r,a),ei===null?ei=[r]:ei.push(r),De!==4&&(De=2),t===null)return!0;n=xt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=bo(a.stateNode,n,e),zo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Rd(i),Ud(i,e,a,n),zo(a,i),!1}a=a.return}while(a!==null);return!1}var Hd=Error(o(461)),Ve=!1;function Ze(e,t,a,n){t.child=e===null?Yf(t,null,a,n):fn(t,e.child,a,n)}function Bd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return bn(t),n=eo(e,t,a,d,r,i),m=to(),e!==null&&!Ve?(ao(e,t,i),na(e,t,i)):(pe&&m&&$s(t),t.flags|=1,Ze(e,t,n,i),t.child)}function qd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Go(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Gd(e,t,r,n,i)):(e=Sr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Eo(e,i)){var d=r.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(d,n)&&e.ref===t.ref)return na(e,t,i)}return t.flags|=1,e=Ha(r,n),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Cl(r,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=r,Eo(e,i))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,na(e,t,i)}return vo(e,t,a,n,i)}function Xd(e,t,a){var n=t.pendingProps,i=n.children,r=(t.stateNode._pendingVisibility&2)!==0,d=e!==null?e.memoizedState:null;if($l(e,t),n.mode==="hidden"||r){if((t.flags&128)!==0){if(n=d!==null?d.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Yd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,d!==null?d.cachePool:null),d!==null?$f(t,d):Qs(),Vf(t);else return t.lanes=t.childLanes=536870912,Yd(e,t,d!==null?d.baseLanes|a:a,a)}else d!==null?(ur(t,d.cachePool),$f(t,d),Ta(),t.memoizedState=null):(e!==null&&ur(t,null),Qs(),Ta());return Ze(e,t,i,a),t.child}function Yd(e,t,a,n){var i=Fs();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ur(t,null),Qs(),Vf(t),e!==null&&Vl(e,t,n,!0),null}function $l(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function vo(e,t,a,n,i){return bn(t),a=eo(e,t,a,n,void 0,i),n=to(),e!==null&&!Ve?(ao(e,t,i),na(e,t,i)):(pe&&n&&$s(t),t.flags|=1,Ze(e,t,a,i),t.child)}function $d(e,t,a,n,i,r){return bn(t),t.updateQueue=null,a=Kf(t,n,a,i),Zf(e),n=to(),e!==null&&!Ve?(ao(e,t,r),na(e,t,r)):(pe&&n&&$s(t),t.flags|=1,Ze(e,t,a,r),t.child)}function Vd(e,t,a,n,i){if(bn(t),t.stateNode===null){var r=Gn,d=a.contextType;typeof d=="object"&&d!==null&&(r=Fe(d)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},ko(t),d=a.contextType,r.context=typeof d=="object"&&d!==null?Fe(d):Gn,r.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(go(t,a,d,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&yo.enqueueReplaceState(r,r.state,null),Ql(t,n,r,i),Il(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=gn(a,m);r.props=v;var A=r.context,z=a.contextType;d=Gn,typeof z=="object"&&z!==null&&(d=Fe(z));var U=a.getDerivedStateFromProps;z=typeof U=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==d)&&kd(t,r,n,d),Ma=!1;var T=t.memoizedState;r.state=T,Ql(t,n,r,i),Il(),A=t.memoizedState,m||T!==A||Ma?(typeof U=="function"&&(go(t,a,U,n),A=t.memoizedState),(v=Ma||Cd(t,a,v,n,T,A,d))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=d,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Mo(e,t),d=t.memoizedProps,z=gn(a,d),r.props=z,U=t.pendingProps,T=r.context,A=a.contextType,v=Gn,typeof A=="object"&&A!==null&&(v=Fe(A)),m=a.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==U||T!==v)&&kd(t,r,n,v),Ma=!1,T=t.memoizedState,r.state=T,Ql(t,n,r,i),Il();var M=t.memoizedState;d!==U||T!==M||Ma||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof m=="function"&&(go(t,a,m,n),M=t.memoizedState),(z=Ma||Cd(t,a,z,n,T,M,v)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,M,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,M,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),r.props=n,r.state=M,r.context=v,n=z):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,$l(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,a,i)):Ze(e,t,a,i),t.memoizedState=r.state,e=t.child):e=na(e,t,i),e}function Wd(e,t,a,n){return zl(),t.flags|=256,Ze(e,t,a,n),t.child}var xo={dehydrated:null,treeContext:null,retryLane:0};function wo(e){return{baseLanes:e,cachePool:Qf()}}function _o(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function Id(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(i?Ea(t):Ta(),pe){var m=Qe,v;if(v=m){e:{for(v=m,m=Ht;v.nodeType!==8;){if(!m){m=null;break e}if(v=Dt(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:on!==null?{id:Jt,overflow:ea}:null,retryLane:536870912},v=jt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,nt=t,Qe=null,v=!0):v=!1}v||cn(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return m.data==="$!"?t.lanes=16:t.lanes=536870912,null;ta(t)}return m=n.children,n=n.fallback,i?(Ta(),i=t.mode,m=So({mode:"hidden",children:m},i),n=xn(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=wo(a),i.childLanes=_o(e,d,a),t.memoizedState=xo,n):(Ea(t),Ao(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ea(t),t.flags&=-257,t=No(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),i=n.fallback,m=t.mode,n=So({mode:"visible",children:n.children},m),i=xn(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,fn(t,e.child,null,a),n=t.child,n.memoizedState=wo(a),n.childLanes=_o(e,d,a),t.memoizedState=xo,t=i);else if(Ea(t),m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var A=d.dgst;d=A,n=Error(o(419)),n.stack="",n.digest=d,Dl({value:n,source:null,stack:null}),t=No(e,t,a)}else if(Ve||Vl(e,t,a,!1),d=(a&e.childLanes)!==0,Ve||d){if(d=Se,d!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane)throw v.retryLane=n,ja(e,n),lt(d,e,n),Hd}m.data==="$?"||Jo(),t=No(e,t,a)}else m.data==="$?"?(t.flags|=128,t.child=e.child,t=sg.bind(null,e),m._reactRetry=t,t=null):(e=v.treeContext,Qe=Dt(m.nextSibling),nt=t,pe=!0,Mt=null,Ht=!1,e!==null&&(wt[_t++]=Jt,wt[_t++]=ea,wt[_t++]=on,Jt=e.id,ea=e.overflow,on=t),t=Ao(t,n.children),t.flags|=4096);return t}return i?(Ta(),i=n.fallback,m=t.mode,v=e.child,A=v.sibling,n=Ha(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&31457280,A!==null?i=Ha(A,i):(i=xn(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=wo(a):(v=m.cachePool,v!==null?(A=Ye._currentValue,v=v.parent!==A?{parent:A,pool:A}:v):v=Qf(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=_o(e,d,a),t.memoizedState=xo,n):(Ea(t),a=e.child,e=a.sibling,a=Ha(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Ao(e,t){return t=So({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function So(e,t){return vh(e,t,0,null)}function No(e,t,a){return fn(t,e.child,null,a),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Oo(e.return,t,a)}function jo(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function Zd(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Ze(e,t,n.children,a),n=Xe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,a,t);else if(e.tag===19)Qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Te(Xe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&or(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),jo(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}jo(t,!0,a,null,r);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Vl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Eo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function I0(e,t,a){switch(t.tag){case 3:Ri(t,t.stateNode.containerInfo),ka(t,Ye,e.memoizedState.cache),zl();break;case 27:case 5:gs(t);break;case 4:Ri(t,t.stateNode.containerInfo);break;case 10:ka(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Id(e,t,a):(Ea(t),e=na(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Vl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Zd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Xe,Xe.current),n)break;return null;case 22:case 23:return t.lanes=0,Xd(e,t,a);case 24:ka(t,Ye,e.memoizedState.cache)}return na(e,t,a)}function Kd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!Eo(e,a)&&(t.flags&128)===0)return Ve=!1,I0(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,pe&&(t.flags&1048576)!==0&&Df(t,nr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Go(n)?(e=gn(n,e),t.tag=1,t=Vd(null,t,n,e,a)):(t.tag=0,t=vo(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===k){t.tag=11,t=Bd(null,t,n,e,a);break e}else if(i===D){t.tag=14,t=qd(null,t,n,e,a);break e}}throw t=ve(n)||n,Error(o(306,t,""))}}return t;case 0:return vo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=gn(n,t.pendingProps),Vd(e,t,n,i,a);case 3:e:{if(Ri(t,t.stateNode.containerInfo),e===null)throw Error(o(387));var r=t.pendingProps;i=t.memoizedState,n=i.element,Mo(e,t),Ql(t,r,null,a);var d=t.memoizedState;if(r=d.cache,ka(t,Ye,r),r!==i.cache&&Co(t,[Ye],a,!0),Il(),r=d.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Wd(e,t,r,a);break e}else if(r!==n){n=xt(Error(o(424)),t),Dl(n),t=Wd(e,t,r,a);break e}else for(Qe=Dt(t.stateNode.containerInfo.firstChild),nt=t,pe=!0,Mt=null,Ht=!0,a=Yf(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zl(),r===n){t=na(e,t,a);break e}Ze(e,t,r,a)}t=t.child}return t;case 26:return $l(e,t),e===null?(a=Jh(t.type,null,t.pendingProps,null))?t.memoizedState=a:pe||(a=t.type,e=t.pendingProps,n=Rr(_a.current).createElement(a),n[Pe]=t,n[rt]=e,Ke(n,a,e),$e(n),t.stateNode=n):t.memoizedState=Jh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gs(t),e===null&&pe&&(n=t.stateNode=Kh(t.type,t.pendingProps,_a.current),nt=t,Ht=!0,Qe=Dt(n.firstChild)),n=t.pendingProps.children,e!==null||pe?Ze(e,t,n,a):t.child=fn(t,null,n,a),$l(e,t),t.child;case 5:return e===null&&pe&&((i=n=Qe)&&(n=Ag(n,t.type,t.pendingProps,Ht),n!==null?(t.stateNode=n,nt=t,Qe=Dt(n.firstChild),Ht=!1,i=!0):i=!1),i||cn(t)),gs(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,n=r.children,hu(i,r)?n=null:d!==null&&hu(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=eo(e,t,q0,null,null,a),ui._currentValue=i),$l(e,t),Ze(e,t,n,a),t.child;case 6:return e===null&&pe&&((e=a=Qe)&&(a=Sg(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,nt=t,Qe=null,e=!0):e=!1),e||cn(t)),null;case 13:return Id(e,t,a);case 4:return Ri(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=fn(t,null,n,a):Ze(e,t,n,a),t.child;case 11:return Bd(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ka(t,t.type,n.value),Ze(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,bn(t),i=Fe(i),n=n(i),t.flags|=1,Ze(e,t,n,a),t.child;case 14:return qd(e,t,t.type,t.pendingProps,a);case 15:return Gd(e,t,t.type,t.pendingProps,a);case 19:return Zd(e,t,a);case 22:return Xd(e,t,a);case 24:return bn(t),n=Fe(Ye),e===null?(i=Fs(),i===null&&(i=Se,r=Ks(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},ko(t),ka(t,Ye,i)):((e.lanes&a)!==0&&(Mo(e,t),Ql(t,null,null,a),Il()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ka(t,Ye,n)):(n=r.cache,ka(t,Ye,n),n!==i.cache&&Co(t,[Ye],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var To=be(null),yn=null,la=null;function ka(e,t,a){Te(To,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=To.current,He(To)}function Oo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Co(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),Oo(r.return,a,e),n||(d=null);break e}r=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(o(341));d.lanes|=a,r=d.alternate,r!==null&&(r.lanes|=a),Oo(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Vl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var m=i.type;ft(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===Li.current){if(d=i.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}i=i.return}e!==null&&Co(t,e,a,n),t.flags|=262144}function xr(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bn(e){yn=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Pd(yn,e)}function wr(e,t){return yn===null&&bn(e),Pd(e,t)}function Pd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(o(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var Ma=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ce&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=tr(e),Mf(e,null,a),t}return er(e,n,t,a),tr(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Bc(e,a)}}function zo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Do=!1;function Il(){if(Do){var e=In;if(e!==null)throw e}}function Ql(e,t,a,n){Do=!1;var i=e.updateQueue;Ma=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,A=v.next;v.next=null,d===null?r=A:d.next=A,d=v;var z=e.alternate;z!==null&&(z=z.updateQueue,m=z.lastBaseUpdate,m!==d&&(m===null?z.firstBaseUpdate=A:m.next=A,z.lastBaseUpdate=v))}if(r!==null){var U=i.baseState;d=0,z=A=v=null,m=r;do{var T=m.lane&-536870913,M=T!==m.lane;if(M?(me&T)===T:(n&T)===T){T!==0&&T===Wn&&(Do=!0),z!==null&&(z=z.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Q=e,ae=m;T=t;var Le=a;switch(ae.tag){case 1:if(Q=ae.payload,typeof Q=="function"){U=Q.call(Le,U,T);break e}U=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=ae.payload,T=typeof Q=="function"?Q.call(Le,U,T):Q,T==null)break e;U=re({},U,T);break e;case 2:Ma=!0}}T=m.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[T]:M.push(T))}else M={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},z===null?(A=z=M,v=U):z=z.next=M,d|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;M=m,m=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);z===null&&(v=U),i.baseState=v,i.firstBaseUpdate=A,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),Ba|=d,e.lanes=d,e.memoizedState=U}}function Fd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Jd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fd(a[e],t)}function Zl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,d=a.inst;n=r(),d.destroy=n}a=a.next}while(a!==i)}}catch(m){_e(t,t.return,m)}}function La(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var v=a;try{m()}catch(A){_e(i,v,A)}}}n=n.next}while(n!==r)}}catch(A){_e(t,t.return,A)}}function eh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Jd(t,a)}catch(n){_e(e,e.return,n)}}}function th(e,t,a){a.props=gn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){_e(e,t,n)}}function vn(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){_e(e,t,r)}}function dt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){_e(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){_e(e,t,i)}else a.current=null}function ah(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){_e(e,e.return,i)}}function nh(e,t,a){try{var n=e.stateNode;bg(n,e.type,a,t),n[rt]=t}catch(i){_e(e,e.return,i)}}function lh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Lr));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Ro(e,t,a),e=e.sibling;e!==null;)Ro(e,t,a),e=e.sibling}function _r(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for(_r(e,t,a),e=e.sibling;e!==null;)_r(e,t,a),e=e.sibling}var ra=!1,ze=!1,Uo=!1,ih=typeof WeakSet=="function"?WeakSet:Set,We=null,rh=!1;function Q0(e,t){if(e=e.containerInfo,fu=Xr,e=Af(e),Hs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var d=0,m=-1,v=-1,A=0,z=0,U=e,T=null;t:for(;;){for(var M;U!==a||i!==0&&U.nodeType!==3||(m=d+i),U!==r||n!==0&&U.nodeType!==3||(v=d+n),U.nodeType===3&&(d+=U.nodeValue.length),(M=U.firstChild)!==null;)T=U,U=M;for(;;){if(U===e)break t;if(T===a&&++A===i&&(m=d),T===r&&++z===n&&(v=d),(M=U.nextSibling)!==null)break;U=T,T=U.parentNode}U=M}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:e,selectionRange:a},Xr=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Q=gn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(Q,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){_e(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)gu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}return Q=rh,rh=!1,Q}function sh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),n&4&&Zl(5,a);break;case 1:if(oa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){_e(a,a.return,m)}else{var i=gn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){_e(a,a.return,m)}}n&64&&eh(a),n&512&&vn(a,a.return);break;case 3:if(oa(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Jd(n,e)}catch(m){_e(a,a.return,m)}}break;case 26:oa(e,a),n&512&&vn(a,a.return);break;case 27:case 5:oa(e,a),t===null&&n&4&&ah(a),n&512&&vn(a,a.return);break;case 12:oa(e,a);break;case 13:oa(e,a),n&4&&ch(e,a);break;case 22:if(i=a.memoizedState!==null||ra,!i){t=t!==null&&t.memoizedState!==null||ze;var r=ra,d=ze;ra=i,(ze=t)&&!d?Ra(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),ra=r,ze=d}n&512&&(a.memoizedProps.mode==="manual"?vn(a,a.return):dt(a,a.return));break;default:oa(e,a)}}function oh(e){var t=e.alternate;t!==null&&(e.alternate=null,oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,ht=!1;function sa(e,t,a){for(a=a.child;a!==null;)uh(e,t,a),a=a.sibling}function uh(e,t,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(bl,a)}catch{}switch(a.tag){case 26:ze||dt(a,t),sa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||dt(a,t);var n=Ge,i=ht;for(Ge=a.stateNode,sa(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);_s(a),Ge=n,ht=i;break;case 5:ze||dt(a,t);case 6:i=Ge;var r=ht;if(Ge=null,sa(e,t,a),Ge=i,ht=r,Ge!==null)if(ht)try{e=Ge,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(d){_e(a,t,d)}else try{Ge.removeChild(a.stateNode)}catch(d){_e(a,t,d)}break;case 18:Ge!==null&&(ht?(t=Ge,a=a.stateNode,t.nodeType===8?pu(t.parentNode,a):t.nodeType===1&&pu(t,a),hi(t)):pu(Ge,a.stateNode));break;case 4:n=Ge,i=ht,Ge=a.stateNode.containerInfo,ht=!0,sa(e,t,a),Ge=n,ht=i;break;case 0:case 11:case 14:case 15:ze||La(2,a,t),ze||La(4,a,t),sa(e,t,a);break;case 1:ze||(dt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&th(a,t,n)),sa(e,t,a);break;case 21:sa(e,t,a);break;case 22:ze||dt(a,t),ze=(n=ze)||a.memoizedState!==null,sa(e,t,a),ze=n;break;default:sa(e,t,a)}}function ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(a){_e(t,t.return,a)}}function Z0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ih),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ih),t;default:throw Error(o(435,e.tag))}}function Ho(e,t){var a=Z0(e);t.forEach(function(n){var i=og.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:case 5:Ge=m.stateNode,ht=!1;break e;case 3:Ge=m.stateNode.containerInfo,ht=!0;break e;case 4:Ge=m.stateNode.containerInfo,ht=!0;break e}m=m.return}if(Ge===null)throw Error(o(160));uh(r,d,i),Ge=null,ht=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}var zt=null;function fh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Nt(e),n&4&&(La(3,e,e.return),Zl(3,e),La(5,e,e.return));break;case 1:St(t,e),Nt(e),n&512&&(ze||a===null||dt(a,a.return)),n&64&&ra&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=zt;if(St(t,e),Nt(e),n&512&&(ze||a===null||dt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[wl]||r[Pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Ke(r,n,a),r[Pe]=e,$e(r),n=r;break e;case"link":var d=am("link","href",i).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(r=d[m],r.getAttribute("href")===(a.href==null?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}r=i.createElement(n),Ke(r,n,a),i.head.appendChild(r);break;case"meta":if(d=am("meta","content",i).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(r=d[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}r=i.createElement(n),Ke(r,n,a),i.head.appendChild(r);break;default:throw Error(o(468,n))}r[Pe]=e,$e(r),n=r}e.stateNode=n}else nm(i,e.type,e.stateNode);else e.stateNode=tm(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?nm(i,e.type,e.stateNode):tm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&nh(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){i=e.stateNode,r=e.memoizedProps;try{for(var v=i.firstChild;v;){var A=v.nextSibling,z=v.nodeName;v[wl]||z==="HEAD"||z==="BODY"||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&v.rel.toLowerCase()==="stylesheet"||i.removeChild(v),v=A}for(var U=e.type,T=i.attributes;T.length;)i.removeAttributeNode(T[0]);Ke(i,U,r),i[Pe]=e,i[rt]=r}catch(Q){_e(e,e.return,Q)}}case 5:if(St(t,e),Nt(e),n&512&&(ze||a===null||dt(a,a.return)),e.flags&32){i=e.stateNode;try{Dn(i,"")}catch(Q){_e(e,e.return,Q)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,nh(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Uo=!0);break;case 6:if(St(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Q){_e(e,e.return,Q)}}break;case 3:if(Br=null,i=zt,zt=Ur(t.containerInfo),St(t,e),zt=i,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(Q){_e(e,e.return,Q)}Uo&&(Uo=!1,dh(e));break;case 4:n=zt,zt=Ur(e.stateNode.containerInfo),St(t,e),Nt(e),zt=n;break;case 12:St(t,e),Nt(e);break;case 13:St(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Io=Ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ho(e,n)));break;case 22:if(n&512&&(ze||a===null||dt(a,a.return)),v=e.memoizedState!==null,A=a!==null&&a.memoizedState!==null,z=ra,U=ze,ra=z||v,ze=U||A,St(t,e),ze=U,ra=z,Nt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=v?t._visibility&-2:t._visibility|1,v&&(t=ra||ze,a===null||A||t||Pn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){A=a=t;try{if(i=A.stateNode,v)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=A.stateNode,m=A.memoizedProps.style;var M=m!=null&&m.hasOwnProperty("display")?m.display:null;d.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Q){_e(A,A.return,Q)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=v?"":A.memoizedProps}catch(Q){_e(A,A.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ho(e,a))));break;case 19:St(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ho(e,n)));break;case 21:break;default:St(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(lh(a)){var n=a;break e}a=a.return}throw Error(o(160))}switch(n.tag){case 27:var i=n.stateNode,r=Lo(e);_r(e,r,i);break;case 5:var d=n.stateNode;n.flags&32&&(Dn(d,""),n.flags&=-33);var m=Lo(e);_r(e,m,d);break;case 3:case 4:var v=n.stateNode.containerInfo,A=Lo(e);Ro(e,A,v);break;default:throw Error(o(161))}}}catch(z){_e(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sh(e,t.alternate,t),t=t.sibling}function Pn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),Pn(t);break;case 1:dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&th(t,t.return,a),Pn(t);break;case 26:case 27:case 5:dt(t,t.return),Pn(t);break;case 22:dt(t,t.return),t.memoizedState===null&&Pn(t);break;default:Pn(t)}e=e.sibling}}function Ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(i,r,a),Zl(4,r);break;case 1:if(Ra(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){_e(n,n.return,A)}if(n=r,i=n.updateQueue,i!==null){var m=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Fd(v[i],m)}catch(A){_e(n,n.return,A)}}a&&d&64&&eh(r),vn(r,r.return);break;case 26:case 27:case 5:Ra(i,r,a),a&&n===null&&d&4&&ah(r),vn(r,r.return);break;case 12:Ra(i,r,a);break;case 13:Ra(i,r,a),a&&d&4&&ch(i,r);break;case 22:r.memoizedState===null&&Ra(i,r,a),vn(r,r.return);break;default:Ra(i,r,a)}t=t.sibling}}function Bo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bl(a))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Ua(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,a,n),t=t.sibling}function hh(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ua(e,t,a,n),i&2048&&Zl(9,t);break;case 3:Ua(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(i&2048){Ua(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,m=r.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else Ua(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,t.memoizedState!==null?r._visibility&4?Ua(e,t,a,n):Kl(e,t):r._visibility&4?Ua(e,t,a,n):(r._visibility|=4,Fn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Bo(t.alternate,t);break;case 24:Ua(e,t,a,n),i&2048&&qo(t.alternate,t);break;default:Ua(e,t,a,n)}}function Fn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,d=t,m=a,v=n,A=d.flags;switch(d.tag){case 0:case 11:case 15:Fn(r,d,m,v,i),Zl(8,d);break;case 23:break;case 22:var z=d.stateNode;d.memoizedState!==null?z._visibility&4?Fn(r,d,m,v,i):Kl(r,d):(z._visibility|=4,Fn(r,d,m,v,i)),i&&A&2048&&Bo(d.alternate,d);break;case 24:Fn(r,d,m,v,i),i&&A&2048&&qo(d.alternate,d);break;default:Fn(r,d,m,v,i)}t=t.sibling}}function Kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Kl(a,n),i&2048&&Bo(n.alternate,n);break;case 24:Kl(a,n),i&2048&&qo(n.alternate,n);break;default:Kl(a,n)}t=t.sibling}}var Pl=8192;function Jn(e){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)mh(e),e=e.sibling}function mh(e){switch(e.tag){case 26:Jn(e),e.flags&Pl&&e.memoizedState!==null&&Ug(zt,e.memoizedState,e.memoizedProps);break;case 5:Jn(e);break;case 3:case 4:var t=zt;zt=Ur(e.stateNode.containerInfo),Jn(e),zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Pl,Pl=16777216,Jn(e),Pl=t):Jn(e));break;default:Jn(e)}}function ph(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,yh(n,e)}ph(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gh(e),e=e.sibling}function gh(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&La(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Ar(e)):Fl(e);break;default:Fl(e)}}function Ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,yh(n,e)}ph(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),Ar(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Ar(t));break;default:Ar(t)}e=e.sibling}}function yh(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Bl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,We=n;else e:for(a=e;We!==null;){n=We;var i=n.sibling,r=n.return;if(oh(n),n===a){We=null;break e}if(i!==null){i.return=r,We=i;break e}We=r}}}function K0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new K0(e,t,a,n)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ha(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bh(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Sr(e,t,a,n,i,r){var d=0;if(n=e,typeof e=="function")Go(e)&&(d=1);else if(typeof e=="string")d=Lg(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case y:return xn(a.children,i,r,t);case p:d=8,i|=24;break;case x:return e=jt(12,a,t,i|2),e.elementType=x,e.lanes=r,e;case X:return e=jt(13,a,t,i),e.elementType=X,e.lanes=r,e;case R:return e=jt(19,a,t,i),e.elementType=R,e.lanes=r,e;case q:return vh(a,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case E:d=10;break e;case j:d=9;break e;case k:d=11;break e;case D:d=14;break e;case G:d=16,n=null;break e}d=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=jt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function xn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function vh(e,t,a,n){e=jt(22,e,n,t),e.elementType=q,e.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=i._current;if(r===null)throw Error(o(456));if((i._pendingVisibility&2)===0){var d=ja(r,2);d!==null&&(i._pendingVisibility|=2,lt(d,r,2))}},attach:function(){var r=i._current;if(r===null)throw Error(o(456));if((i._pendingVisibility&2)!==0){var d=ja(r,2);d!==null&&(i._pendingVisibility&=-3,lt(d,r,2))}}};return e.stateNode=i,e}function Xo(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function Yo(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ua(e){e.flags|=4}function xh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lm(t)){if(t=At.current,t!==null&&((me&4194176)===me?Bt!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Bt))throw Rl=Is,Uf;e.flags|=8192}}function Nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uc():536870912,e.lanes|=t,tl|=t)}function Jl(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function P0(e,t,a){var n=t.pendingProps;switch(Vs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Ye),Tn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Po(Mt),Mt=null))),Oe(t),null;case 26:return a=t.memoizedState,e===null?(ua(t),a!==null?(Oe(t),xh(t,a)):(Oe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ua(t),Oe(t),xh(t,a)):(Oe(t),t.flags&=-16777217):(e.memoizedProps!==n&&ua(t),Oe(t),t.flags&=-16777217),null;case 27:Ui(t),a=_a.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}e=Rt.current,Ml(t)?Lf(t):(e=Kh(i,n,a),t.stateNode=e,ua(t))}return Oe(t),null;case 5:if(Ui(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}if(e=Rt.current,Ml(t))Lf(t);else{switch(i=Rr(_a.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[Pe]=t,e[rt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ke(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ua(t)}}return Oe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=_a.current,Ml(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=nt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||$h(e.nodeValue,a)),e||cn(t)}else e=Rr(e).createTextNode(n),e[Pe]=t,t.stateNode=e}return Oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ml(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Pe]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else Mt!==null&&(Po(Mt),Mt=null),i=!0;if(!i)return t.flags&256?(ta(t),t):(ta(t),null)}if(ta(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Nr(t,t.updateQueue),Oe(t),null;case 4:return Tn(),e===null&&ou(t.stateNode.containerInfo),Oe(t),null;case 10:return ia(t.type),Oe(t),null;case 19:if(He(Xe),i=t.memoizedState,i===null)return Oe(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Jl(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=or(e),r!==null){for(t.flags|=128,Jl(i,!1),e=r.updateQueue,t.updateQueue=e,Nr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bh(a,e),a=a.sibling;return Te(Xe,Xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ut()>jr&&(t.flags|=128,n=!0,Jl(i,!1),t.lanes=4194304)}else{if(!n)if(e=or(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Nr(t,e),Jl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!pe)return Oe(t),null}else 2*Ut()-i.renderingStartTime>jr&&a!==536870912&&(t.flags|=128,n=!0,Jl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ut(),t.sibling=null,e=Xe.current,Te(Xe,n?e&1|2:e&1),t):(Oe(t),null);case 22:case 23:return ta(t),Zs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Nr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&He(dn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Ye),Oe(t),null;case 25:return null}throw Error(o(156,t.tag))}function F0(e,t){switch(Vs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Ye),Tn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ui(t),null;case 13:if(ta(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Xe),null;case 4:return Tn(),null;case 10:return ia(t.type),null;case 22:case 23:return ta(t),Zs(),e!==null&&He(dn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Ye),null;case 25:return null;default:return null}}function wh(e,t){switch(Vs(t),t.tag){case 3:ia(Ye),Tn();break;case 26:case 27:case 5:Ui(t);break;case 4:Tn();break;case 13:ta(t);break;case 19:He(Xe);break;case 10:ia(t.type);break;case 22:case 23:ta(t),Zs(),e!==null&&He(dn);break;case 24:ia(Ye)}}var J0={getCacheForType:function(e){var t=Fe(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},eg=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Se=null,ce=null,me=0,Ne=0,mt=null,ca=!1,el=!1,$o=!1,fa=0,De=0,Ba=0,wn=0,Vo=0,Et=0,tl=0,ei=null,Gt=null,Wo=!1,Io=0,jr=1/0,Er=null,qa=null,Tr=!1,_n=null,ti=0,Qo=0,Zo=null,ai=0,Ko=null;function pt(){if((Ce&2)!==0&&me!==0)return me&-me;if(I.T!==null){var e=Wn;return e!==0?e:lu()}return Gc()}function _h(){Et===0&&(Et=(me&536870912)===0||pe?Rc():536870912);var e=At.current;return e!==null&&(e.flags|=32),Et}function lt(e,t,a){(e===Se&&Ne===2||e.cancelPendingCommit!==null)&&(al(e,0),da(e,me,Et,!1)),xl(e,a),((Ce&2)===0||e!==Se)&&(e===Se&&((Ce&2)===0&&(wn|=a),De===4&&da(e,me,Et,!1)),Xt(e))}function Ah(e,t,a){if((Ce&6)!==0)throw Error(o(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||vl(e,t),i=n?ng(e,t):eu(e,t,!0),r=n;do{if(i===0){el&&!n&&da(e,t,0,!1);break}else if(i===6)da(e,t,0,!ca);else{if(a=e.current.alternate,r&&!tg(a)){i=eu(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=ei;var v=m.current.memoizedState.isDehydrated;if(v&&(al(m,d).flags|=256),d=eu(m,d,!1),d!==2){if($o&&!v){m.errorRecoveryDisabledLanes|=r,wn|=r,i=4;break e}r=Gt,Gt=i,r!==null&&Po(r)}i=d}if(r=!1,i!==2)continue}}if(i===1){al(e,0),da(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194176)===t){da(n,t,Et,!ca);break e}break;case 2:Gt=null;break;case 3:case 5:break;default:throw Error(o(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(r=Io+300-Ut(),10<r)){if(da(n,t,Et,!ca),Gi(n,0)!==0)break e;n.timeoutHandle=Ih(Sh.bind(null,n,a,Gt,Er,Wo,t,Et,wn,tl,ca,2,-0,0),r);break e}Sh(n,a,Gt,Er,Wo,t,Et,wn,tl,ca,0,-0,0)}}break}while(!0);Xt(e)}function Po(e){Gt===null?Gt=e:Gt.push.apply(Gt,e)}function Sh(e,t,a,n,i,r,d,m,v,A,z,U,T){var M=t.subtreeFlags;if((M&8192||(M&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:Rg},mh(t),t=Hg(),t!==null)){e.cancelPendingCommit=t(kh.bind(null,e,a,n,i,d,m,v,1,U,T)),da(e,r,d,!A);return}kh(e,a,n,i,d,m,v,z,U,T)}function tg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!ft(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,n){t&=~Vo,t&=~wn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-ct(i),d=1<<r;n[r]=-1,i&=~d}a!==0&&Hc(e,a,t)}function Or(){return(Ce&6)===0?(ni(0),!1):!0}function Fo(){if(ce!==null){if(Ne===0)var e=ce.return;else e=ce,la=yn=null,no(e),$n=null,Ul=0,e=ce;for(;e!==null;)wh(e.alternate,e),e=e.return;ce=null}}function al(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Fo(),Se=e,ce=a=Ha(e.current,null),me=t,Ne=0,mt=null,ca=!1,el=vl(e,t),$o=!1,tl=Et=Vo=wn=Ba=De=0,Gt=ei=null,Wo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ct(n),r=1<<i;t|=e[i],n&=~r}return fa=t,Ji(),a}function Nh(e,t){oe=null,I.H=qt,t===Ll?(t=qf(),Ne=3):t===Uf?(t=qf(),Ne=4):Ne=t===Hd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ce===null&&(De=1,vr(e,xt(t,e.current)))}function jh(){var e=I.H;return I.H=qt,e===null?qt:e}function Eh(){var e=I.A;return I.A=J0,e}function Jo(){De=4,ca||(me&4194176)!==me&&At.current!==null||(el=!0),(Ba&134217727)===0&&(wn&134217727)===0||Se===null||da(Se,me,Et,!1)}function eu(e,t,a){var n=Ce;Ce|=2;var i=jh(),r=Eh();(Se!==e||me!==t)&&(Er=null,al(e,t)),t=!1;var d=De;e:do try{if(Ne!==0&&ce!==null){var m=ce,v=mt;switch(Ne){case 8:Fo(),d=6;break e;case 3:case 2:case 6:At.current===null&&(t=!0);var A=Ne;if(Ne=0,mt=null,nl(e,m,v,A),a&&el){d=0;break e}break;default:A=Ne,Ne=0,mt=null,nl(e,m,v,A)}}ag(),d=De;break}catch(z){Nh(e,z)}while(!0);return t&&e.shellSuspendCounter++,la=yn=null,Ce=n,I.H=i,I.A=r,ce===null&&(Se=null,me=0,Ji()),d}function ag(){for(;ce!==null;)Th(ce)}function ng(e,t){var a=Ce;Ce|=2;var n=jh(),i=Eh();Se!==e||me!==t?(Er=null,jr=Ut()+500,al(e,t)):el=vl(e,t);e:do try{if(Ne!==0&&ce!==null){t=ce;var r=mt;t:switch(Ne){case 1:Ne=0,mt=null,nl(e,t,r,1);break;case 2:if(Hf(r)){Ne=0,mt=null,Oh(t);break}t=function(){Ne===2&&Se===e&&(Ne=7),Xt(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Hf(r)?(Ne=0,mt=null,Oh(t)):(Ne=0,mt=null,nl(e,t,r,7));break;case 5:var d=null;switch(ce.tag){case 26:d=ce.memoizedState;case 5:case 27:var m=ce;if(!d||lm(d)){Ne=0,mt=null;var v=m.sibling;if(v!==null)ce=v;else{var A=m.return;A!==null?(ce=A,Cr(A)):ce=null}break t}}Ne=0,mt=null,nl(e,t,r,5);break;case 6:Ne=0,mt=null,nl(e,t,r,6);break;case 8:Fo(),De=6;break e;default:throw Error(o(462))}}lg();break}catch(z){Nh(e,z)}while(!0);return la=yn=null,I.H=n,I.A=i,Ce=a,ce!==null?0:(Se=null,me=0,Ji(),De)}function lg(){for(;ce!==null&&!jp();)Th(ce)}function Th(e){var t=Kd(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?Cr(e):ce=t}function Oh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=$d(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=$d(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:no(t);default:wh(a,t),t=ce=bh(t,fa),t=Kd(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?Cr(e):ce=t}function nl(e,t,a,n){la=yn=null,no(t),$n=null,Ul=0;var i=t.return;try{if(W0(e,i,t,a,me)){De=1,vr(e,xt(a,e.current)),ce=null;return}}catch(r){if(i!==null)throw ce=i,r;De=1,vr(e,xt(a,e.current)),ce=null;return}t.flags&32768?(pe||n===1?e=!0:el||(me&536870912)!==0?e=!1:(ca=e=!0,(n===2||n===3||n===6)&&(n=At.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ch(t,e)):Cr(t)}function Cr(e){var t=e;do{if((t.flags&32768)!==0){Ch(t,ca);return}e=t.return;var a=P0(t.alternate,t,fa);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);De===0&&(De=5)}function Ch(e,t){do{var a=F0(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);De=6,ce=null}function kh(e,t,a,n,i,r,d,m,v,A){var z=I.T,U=V.p;try{V.p=2,I.T=null,ig(e,t,a,n,U,i,r,d,m,v,A)}finally{I.T=z,V.p=U}}function ig(e,t,a,n,i,r,d,m){do ll();while(_n!==null);if((Ce&6)!==0)throw Error(o(327));var v=e.finishedWork;if(n=e.finishedLanes,v===null)return null;if(e.finishedWork=null,e.finishedLanes=0,v===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var A=v.lanes|v.childLanes;if(A|=Xs,Up(e,n,A,r,d,m),e===Se&&(ce=Se=null,me=0),(v.subtreeFlags&10256)===0&&(v.flags&10256)===0||Tr||(Tr=!0,Qo=A,Zo=a,ug(Hi,function(){return ll(),null})),a=(v.flags&15990)!==0,(v.subtreeFlags&15990)!==0||a?(a=I.T,I.T=null,r=V.p,V.p=2,d=Ce,Ce|=4,Q0(e,v),fh(v,e),O0(du,e.containerInfo),Xr=!!fu,du=fu=null,e.current=v,sh(e,v.alternate,v),Ep(),Ce=d,V.p=r,I.T=a):e.current=v,Tr?(Tr=!1,_n=e,ti=n):Mh(e,A),A=e.pendingLanes,A===0&&(qa=null),Mp(v.stateNode),Xt(e),t!==null)for(i=e.onRecoverableError,v=0;v<t.length;v++)A=t[v],i(A.value,{componentStack:A.stack});return(ti&3)!==0&&ll(),A=e.pendingLanes,(n&4194218)!==0&&(A&42)!==0?e===Ko?ai++:(ai=0,Ko=e):ai=0,ni(0),null}function Mh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function ll(){if(_n!==null){var e=_n,t=Qo;Qo=0;var a=qc(ti),n=I.T,i=V.p;try{if(V.p=32>a?32:a,I.T=null,_n===null)var r=!1;else{a=Zo,Zo=null;var d=_n,m=ti;if(_n=null,ti=0,(Ce&6)!==0)throw Error(o(331));var v=Ce;if(Ce|=4,gh(d.current),hh(d,d.current,m,a),Ce=v,ni(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(bl,d)}catch{}r=!0}return r}finally{V.p=i,I.T=n,Mh(e,t)}}return!1}function zh(e,t,a){t=xt(a,t),t=bo(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(xl(e,2),Xt(e))}function _e(e,t,a){if(e.tag===3)zh(e,e,a);else for(;t!==null;){if(t.tag===3){zh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qa===null||!qa.has(n))){e=xt(a,e),a=Rd(2),n=Da(t,a,2),n!==null&&(Ud(a,n,t,e),xl(n,2),Xt(n));break}}t=t.return}}function tu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new eg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||($o=!0,i.add(a),e=rg.bind(null,e,t,a),t.then(e,e))}function rg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(me&a)===a&&(De===4||De===3&&(me&62914560)===me&&300>Ut()-Io?(Ce&2)===0&&al(e,0):Vo|=a,tl===me&&(tl=0)),Xt(e)}function Dh(e,t){t===0&&(t=Uc()),e=ja(e,t),e!==null&&(xl(e,t),Xt(e))}function sg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Dh(e,a)}function og(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Dh(e,a)}function ug(e,t){return bs(e,t)}var kr=null,il=null,au=!1,Mr=!1,nu=!1,An=0;function Xt(e){e!==il&&e.next===null&&(il===null?kr=il=e:il=il.next=e),Mr=!0,au||(au=!0,fg(cg))}function ni(e,t){if(!nu&&Mr){nu=!0;do for(var a=!1,n=kr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var d=n.suspendedLanes,m=n.pingedLanes;r=(1<<31-ct(42|e)+1)-1,r&=i&~(d&~m),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(a=!0,Uh(n,r))}else r=me,r=Gi(n,n===Se?r:0),(r&3)===0||vl(n,r)||(a=!0,Uh(n,r));n=n.next}while(a);nu=!1}}function cg(){Mr=au=!1;var e=0;An!==0&&(vg()&&(e=An),An=0);for(var t=Ut(),a=null,n=kr;n!==null;){var i=n.next,r=Lh(n,t);r===0?(n.next=null,a===null?kr=i:a.next=i,i===null&&(il=a)):(a=n,(e!==0||(r&3)!==0)&&(Mr=!0)),n=i}ni(e)}function Lh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-ct(r),m=1<<d,v=i[d];v===-1?((m&a)===0||(m&n)!==0)&&(i[d]=Rp(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=Se,a=me,a=Gi(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&Ne===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&vs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&vs(n),qc(a)){case 2:case 8:a=Dc;break;case 32:a=Hi;break;case 268435456:a=Lc;break;default:a=Hi}return n=Rh.bind(null,e),a=bs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&vs(n),e.callbackPriority=2,e.callbackNode=null,2}function Rh(e,t){var a=e.callbackNode;if(ll()&&e.callbackNode!==a)return null;var n=me;return n=Gi(e,e===Se?n:0),n===0?null:(Ah(e,n,t),Lh(e,Ut()),e.callbackNode!=null&&e.callbackNode===a?Rh.bind(null,e):null)}function Uh(e,t){if(ll())return null;Ah(e,t,!0)}function fg(e){wg(function(){(Ce&6)!==0?bs(zc,e):e()})}function lu(){return An===0&&(An=Rc()),An}function Hh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function Bh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Hh((i[rt]||null).action),d=n.submitter;d&&(t=(t=d[rt]||null)?Hh(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var m=new Ki("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(An!==0){var v=d?Bh(i,d):new FormData(i);ho(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=d?Bh(i,d):new FormData(i),ho(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var iu=0;iu<kf.length;iu++){var ru=kf[iu],hg=ru.toLowerCase(),mg=ru[0].toUpperCase()+ru.slice(1);kt(hg,"on"+mg)}kt(jf,"onAnimationEnd"),kt(Ef,"onAnimationIteration"),kt(Tf,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(k0,"onTransitionRun"),kt(M0,"onTransitionStart"),kt(z0,"onTransitionCancel"),kt(Of,"onTransitionEnd"),Mn("onMouseEnter",["mouseout","mouseover"]),Mn("onMouseLeave",["mouseout","mouseover"]),Mn("onPointerEnter",["pointerout","pointerover"]),Mn("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li));function qh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],v=m.instance,A=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=A;try{r(i)}catch(z){br(z)}i.currentTarget=null,r=v}else for(d=0;d<n.length;d++){if(m=n[d],v=m.instance,A=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=A;try{r(i)}catch(z){br(z)}i.currentTarget=null,r=v}}}}function de(e,t){var a=t[ws];a===void 0&&(a=t[ws]=new Set);var n=e+"__bubble";a.has(n)||(Gh(t,e,2,!1),a.add(n))}function su(e,t,a){var n=0;t&&(n|=4),Gh(a,e,n,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function ou(e){if(!e[zr]){e[zr]=!0,Yc.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||su(a,!1,e),su(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,su("selectionchange",!1,t))}}function Gh(e,t,a,n){switch(cm(t)){case 2:var i=Gg;break;case 8:i=Xg;break;default:i=wu}a=i.bind(null,t,a,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function uu(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;d=d.return}for(;m!==null;){if(d=an(m),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=r=d;continue e}m=m.parentNode}}n=n.return}tf(function(){var A=r,z=Es(a),U=[];e:{var T=Cf.get(e);if(T!==void 0){var M=Ki,Q=e;switch(e){case"keypress":if(Qi(a)===0)break e;case"keydown":case"keyup":M=o0;break;case"focusin":Q="focus",M=zs;break;case"focusout":Q="blur",M=zs;break;case"beforeblur":case"afterblur":M=zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=f0;break;case jf:case Ef:case Tf:M=Jp;break;case Of:M=h0;break;case"scroll":case"scrollend":M=Qp;break;case"wheel":M=p0;break;case"copy":case"cut":case"paste":M=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=sf;break;case"toggle":case"beforetoggle":M=y0}var ae=(t&4)!==0,Le=!ae&&(e==="scroll"||e==="scrollend"),S=ae?T!==null?T+"Capture":null:T;ae=[];for(var _=A,N;_!==null;){var L=_;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||S===null||(L=Al(_,S),L!=null&&ae.push(ii(_,L,N))),Le)break;_=_.return}0<ae.length&&(T=new M(T,Q,null,a,z),U.push({event:T,listeners:ae}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&a!==js&&(Q=a.relatedTarget||a.fromElement)&&(an(Q)||Q[On]))break e;if((M||T)&&(T=z.window===z?z:(T=z.ownerDocument)?T.defaultView||T.parentWindow:window,M?(Q=a.relatedTarget||a.toElement,M=A,Q=Q?an(Q):null,Q!==null&&(Le=ee(Q),ae=Q.tag,Q!==Le||ae!==5&&ae!==27&&ae!==6)&&(Q=null)):(M=null,Q=A),M!==Q)){if(ae=lf,L="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(ae=sf,L="onPointerLeave",S="onPointerEnter",_="pointer"),Le=M==null?T:_l(M),N=Q==null?T:_l(Q),T=new ae(L,_+"leave",M,a,z),T.target=Le,T.relatedTarget=N,L=null,an(z)===A&&(ae=new ae(S,_+"enter",Q,a,z),ae.target=N,ae.relatedTarget=Le,L=ae),Le=L,M&&Q)t:{for(ae=M,S=Q,_=0,N=ae;N;N=rl(N))_++;for(N=0,L=S;L;L=rl(L))N++;for(;0<_-N;)ae=rl(ae),_--;for(;0<N-_;)S=rl(S),N--;for(;_--;){if(ae===S||S!==null&&ae===S.alternate)break t;ae=rl(ae),S=rl(S)}ae=null}else ae=null;M!==null&&Xh(U,T,M,ae,!1),Q!==null&&Le!==null&&Xh(U,Le,Q,ae,!0)}}e:{if(T=A?_l(A):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var W=pf;else if(hf(T))if(gf)W=E0;else{W=N0;var ue=S0}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?A&&Ns(A.elementType)&&(W=pf):W=j0;if(W&&(W=W(e,A))){mf(U,W,a,z);break e}ue&&ue(e,T,A),e==="focusout"&&A&&T.type==="number"&&A.memoizedProps.value!=null&&Ss(T,"number",T.value)}switch(ue=A?_l(A):window,e){case"focusin":(hf(ue)||ue.contentEditable==="true")&&(Hn=ue,Bs=A,kl=null);break;case"focusout":kl=Bs=Hn=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,Sf(U,a,z);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":Sf(U,a,z)}var K;if(Ls)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Un?ff(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(of&&a.locale!=="ko"&&(Un||F!=="onCompositionStart"?F==="onCompositionEnd"&&Un&&(K=af()):(Na=z,Cs="value"in Na?Na.value:Na.textContent,Un=!0)),ue=Dr(A,F),0<ue.length&&(F=new rf(F,e,null,a,z),U.push({event:F,listeners:ue}),K?F.data=K:(K=df(a),K!==null&&(F.data=K)))),(K=v0?x0(e,a):w0(e,a))&&(F=Dr(A,"onBeforeInput"),0<F.length&&(ue=new rf("onBeforeInput","beforeinput",null,a,z),U.push({event:ue,listeners:F}),ue.data=K)),dg(U,e,A,a,z)}qh(U,t)})}function ii(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Dr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Al(e,a),i!=null&&n.unshift(ii(e,i,r)),i=Al(e,t),i!=null&&n.push(ii(e,i,r))),e=e.return}return n}function rl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xh(e,t,a,n,i){for(var r=t._reactName,d=[];a!==null&&a!==n;){var m=a,v=m.alternate,A=m.stateNode;if(m=m.tag,v!==null&&v===n)break;m!==5&&m!==26&&m!==27||A===null||(v=A,i?(A=Al(a,r),A!=null&&d.unshift(ii(a,A,v))):i||(A=Al(a,r),A!=null&&d.push(ii(a,A,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var gg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Yh(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(yg,"")}function $h(e,t){return t=Yh(t),Yh(e)===t}function Lr(){}function we(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Dn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Dn(e,""+n);break;case"className":Yi(e,"class",n);break;case"tabIndex":Yi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,a,n);break;case"style":Jc(e,n,r);break;case"data":if(t!=="object"){Yi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",i.name,i,null),we(e,t,"formEncType",i.formEncType,i,null),we(e,t,"formMethod",i.formMethod,i,null),we(e,t,"formTarget",i.formTarget,i,null)):(we(e,t,"encType",i.encType,i,null),we(e,t,"method",i.method,i,null),we(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Lr);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Wi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),Xi(e,"popover",n);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wp.get(a)||a,Xi(e,a,n))}}function cu(e,t,a,n,i,r){switch(a){case"style":Jc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Dn(e,n):(typeof n=="number"||typeof n=="bigint")&&Dn(e,""+n);break;case"onScroll":n!=null&&de("scroll",e);break;case"onScrollEnd":n!=null&&de("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$c.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[rt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Xi(e,a,n)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(d!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:we(e,t,r,d,a,null)}}i&&we(e,t,"srcSet",a.srcSet,a,null),n&&we(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var m=r=d=i=null,v=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":d=z;break;case"checked":v=z;break;case"defaultChecked":A=z;break;case"value":r=z;break;case"defaultValue":m=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:we(e,t,n,z,a,null)}}Zc(e,r,m,v,A,d,i,!1),$i(e);return;case"select":de("invalid",e),n=d=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:we(e,t,i,m,a,null)}t=r,a=d,e.multiple=!!n,t!=null?zn(e,!!n,t,!1):a!=null&&zn(e,!!n,a,!0);return;case"textarea":de("invalid",e),r=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:we(e,t,d,m,a,null)}Pc(e,n,i,r),$i(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:we(e,t,v,n,a,null)}return;case"dialog":de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<li.length;n++)de(li[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:we(e,t,A,n,a,null)}return;default:if(Ns(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&cu(e,t,z,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&we(e,t,m,n,a,null))}function bg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,m=null,v=null,A=null,z=null;for(M in a){var U=a[M];if(a.hasOwnProperty(M)&&U!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=U;default:n.hasOwnProperty(M)||we(e,t,M,null,n,U)}}for(var T in n){var M=n[T];if(U=a[T],n.hasOwnProperty(T)&&(M!=null||U!=null))switch(T){case"type":r=M;break;case"name":i=M;break;case"checked":A=M;break;case"defaultChecked":z=M;break;case"value":d=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==U&&we(e,t,T,M,n,U)}}As(e,d,m,v,A,z,r,i);return;case"select":M=d=m=T=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":M=v;default:n.hasOwnProperty(r)||we(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":T=r;break;case"defaultValue":m=r;break;case"multiple":d=r;default:r!==v&&we(e,t,i,r,n,v)}t=m,a=d,n=M,T!=null?zn(e,!!a,T,!1):!!n!=!!a&&(t!=null?zn(e,!!a,t,!0):zn(e,!!a,a?[]:"",!1));return;case"textarea":M=T=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,n,i)}for(d in n)if(i=n[d],r=a[d],n.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":T=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&we(e,t,d,i,n,r)}Kc(e,T,M);return;case"option":for(var Q in a)if(T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:we(e,t,Q,null,n,T)}for(v in n)if(T=n[v],M=a[v],n.hasOwnProperty(v)&&T!==M&&(T!=null||M!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:we(e,t,v,T,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)T=a[ae],a.hasOwnProperty(ae)&&T!=null&&!n.hasOwnProperty(ae)&&we(e,t,ae,null,n,T);for(A in n)if(T=n[A],M=a[A],n.hasOwnProperty(A)&&T!==M&&(T!=null||M!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:we(e,t,A,T,n,M)}return;default:if(Ns(t)){for(var Le in a)T=a[Le],a.hasOwnProperty(Le)&&T!==void 0&&!n.hasOwnProperty(Le)&&cu(e,t,Le,void 0,n,T);for(z in n)T=n[z],M=a[z],!n.hasOwnProperty(z)||T===M||T===void 0&&M===void 0||cu(e,t,z,T,n,M);return}}for(var S in a)T=a[S],a.hasOwnProperty(S)&&T!=null&&!n.hasOwnProperty(S)&&we(e,t,S,null,n,T);for(U in n)T=n[U],M=a[U],!n.hasOwnProperty(U)||T===M||T==null&&M==null||we(e,t,U,T,n,M)}var fu=null,du=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function Vh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=null;function vg(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(e){return Qh.resolve(null).then(e).catch(_g)}:Ih;function _g(e){setTimeout(function(){throw e})}function pu(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),hi(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);hi(t)}function gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gu(a),_s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ag(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function Sg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Dt(e.nextSibling),e===null))return null;return e}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Kh(e,t,a){switch(t=Rr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}var Tt=new Map,Ph=new Set;function Ur(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ha=V.d;V.d={f:Ng,r:jg,D:Eg,C:Tg,L:Og,m:Cg,X:Mg,S:kg,M:zg};function Ng(){var e=ha.f(),t=Or();return e||t}function jg(e){var t=Cn(e);t!==null&&t.tag===5&&t.type==="form"?Sd(t):ha.r(e)}var sl=typeof document>"u"?null:document;function Fh(e,t,a){var n=sl;if(n&&typeof t=="string"&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Ph.has(i)||(Ph.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ke(t,"link",e),$e(t),n.head.appendChild(t)))}}function Eg(e){ha.D(e),Fh("dns-prefetch",e,null)}function Tg(e,t){ha.C(e,t),Fh("preconnect",e,t)}function Og(e,t,a){ha.L(e,t,a);var n=sl;if(n&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+bt(a.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var r=i;switch(t){case"style":r=ol(e);break;case"script":r=ul(e)}Tt.has(r)||(e=re({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ri(r))||t==="script"&&n.querySelector(si(r))||(t=n.createElement("link"),Ke(t,"link",e),$e(t),n.head.appendChild(t)))}}function Cg(e,t){ha.m(e,t);var a=sl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bt(n)+'"][href="'+bt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ul(e)}if(!Tt.has(r)&&(e=re({rel:"modulepreload",href:e},t),Tt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(r)))return}n=a.createElement("link"),Ke(n,"link",e),$e(n),a.head.appendChild(n)}}}function kg(e,t,a){ha.S(e,t,a);var n=sl;if(n&&e){var i=kn(n).hoistableStyles,r=ol(e);t=t||"default";var d=i.get(r);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(ri(r)))m.loading=5;else{e=re({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(r))&&yu(e,a);var v=d=n.createElement("link");$e(v),Ke(v,"link",e),v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Hr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(r,d)}}}function Mg(e,t){ha.X(e,t);var a=sl;if(a&&e){var n=kn(a).hoistableScripts,i=ul(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=re({src:e,async:!0},t),(t=Tt.get(i))&&bu(e,t),r=a.createElement("script"),$e(r),Ke(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function zg(e,t){ha.M(e,t);var a=sl;if(a&&e){var n=kn(a).hoistableScripts,i=ul(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=re({src:e,async:!0,type:"module"},t),(t=Tt.get(i))&&bu(e,t),r=a.createElement("script"),$e(r),Ke(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Jh(e,t,a,n){var i=(i=_a.current)?Ur(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ol(a.href),a=kn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ol(a.href);var r=kn(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(ri(e)))&&!r._p&&(d.instance=r,d.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),r||Dg(i,e,a,d.state))),t&&n===null)throw Error(o(528,""));return d}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ul(a),a=kn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ol(e){return'href="'+bt(e)+'"'}function ri(e){return'link[rel="stylesheet"]['+e+"]"}function em(e){return re({},e,{"data-precedence":e.precedence,precedence:null})}function Dg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ke(t,"link",a),$e(t),e.head.appendChild(t))}function ul(e){return'[src="'+bt(e)+'"]'}function si(e){return"script[async]"+e}function tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(n)return t.instance=n,$e(n),n;var i=re({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),$e(n),Ke(n,"style",i),Hr(n,a.precedence,e),t.instance=n;case"stylesheet":i=ol(a.href);var r=e.querySelector(ri(i));if(r)return t.state.loading|=4,t.instance=r,$e(r),r;n=em(a),(i=Tt.get(i))&&yu(n,i),r=(e.ownerDocument||e).createElement("link"),$e(r);var d=r;return d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),Ke(r,"link",n),t.state.loading|=4,Hr(r,a.precedence,e),t.instance=r;case"script":return r=ul(a.src),(i=e.querySelector(si(r)))?(t.instance=i,$e(i),i):(n=a,(i=Tt.get(r))&&(n=re({},a),bu(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),$e(i),Ke(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Hr(n,a.precedence,e));return t.instance}function Hr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Br=null;function am(e,t,a){if(Br===null){var n=new Map,i=Br=new Map;i.set(a,n)}else i=Br,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[wl]||r[Pe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(r):n.set(d,[r])}}return n}function nm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Lg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var oi=null;function Rg(){}function Ug(e,t,a){if(oi===null)throw Error(o(475));var n=oi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ol(a.href),r=e.querySelector(ri(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=qr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,$e(r);return}r=e.ownerDocument||e,a=em(a),(i=Tt.get(i))&&yu(a,i),r=r.createElement("link"),$e(r);var d=r;d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),Ke(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=qr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Hg(){if(oi===null)throw Error(o(475));var e=oi;return e.stylesheets&&e.count===0&&vu(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&vu(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function qr(){if(this.count--,this.count===0){if(this.stylesheets)vu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gr=null;function vu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gr=new Map,t.forEach(Bg,e),Gr=null,qr.call(e))}function Bg(e,t){if(!(t.state.loading&4)){var a=Gr.get(e);if(a)var n=a.get(null);else{a=new Map,Gr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),r=a.get(d)||n,r===n&&a.set(null,i),a.set(d,i),this.count++,n=qr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:E,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function qg(e,t,a,n,i,r,d,m){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.hiddenUpdates=xs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function im(e,t,a,n,i,r,d,m,v,A,z,U){return e=new qg(e,t,a,d,m,v,A,U),t=1,r===!0&&(t|=24),r=jt(3,null,null,t),e.current=r,r.stateNode=e,t=Ks(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},ko(r),e}function rm(e){return e?(e=Gn,e):Gn}function sm(e,t,a,n,i,r){i=rm(i),n.context===null?n.context=i:n.pendingContext=i,n=za(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Da(e,n,t),a!==null&&(lt(a,e,t),Wl(a,e,t))}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xu(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function um(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&lt(t,e,67108864),xu(e,67108864)}}var Xr=!0;function Gg(e,t,a,n){var i=I.T;I.T=null;var r=V.p;try{V.p=2,wu(e,t,a,n)}finally{V.p=r,I.T=i}}function Xg(e,t,a,n){var i=I.T;I.T=null;var r=V.p;try{V.p=8,wu(e,t,a,n)}finally{V.p=r,I.T=i}}function wu(e,t,a,n){if(Xr){var i=_u(n);if(i===null)uu(e,t,n,Yr,a),fm(e,n);else if($g(i,e,t,a,n))n.stopPropagation();else if(fm(e,n),t&4&&-1<Yg.indexOf(e)){for(;i!==null;){var r=Cn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=tn(r.pendingLanes);if(d!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var v=1<<31-ct(d);m.entanglements[1]|=v,d&=~v}Xt(r),(Ce&6)===0&&(jr=Ut()+500,ni(0))}}break;case 13:m=ja(r,2),m!==null&&lt(m,r,2),Or(),xu(r,2)}if(r=_u(n),r===null&&uu(e,t,n,Yr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else uu(e,t,n,null,a)}}function _u(e){return e=Es(e),Au(e)}var Yr=null;function Au(e){if(Yr=null,e=an(e),e!==null){var t=ee(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Ae(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yr=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tp()){case zc:return 2;case Dc:return 8;case Hi:case Op:return 32;case Lc:return 268435456;default:return 32}default:return 32}}var Su=!1,Ga=null,Xa=null,Ya=null,ci=new Map,fi=new Map,$a=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fm(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function di(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Cn(t),t!==null&&um(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $g(e,t,a,n,i){switch(t){case"focusin":return Ga=di(Ga,e,t,a,n,i),!0;case"dragenter":return Xa=di(Xa,e,t,a,n,i),!0;case"mouseover":return Ya=di(Ya,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return ci.set(r,di(ci.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,fi.set(r,di(fi.get(r)||null,e,t,a,n,i)),!0}return!1}function dm(e){var t=an(e.target);if(t!==null){var a=ee(t);if(a!==null){if(t=a.tag,t===13){if(t=Ae(a),t!==null){e.blockedOn=t,Hp(e.priority,function(){if(a.tag===13){var n=pt(),i=ja(a,n);i!==null&&lt(i,a,n),xu(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_u(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);js=n,a.target.dispatchEvent(n),js=null}else return t=Cn(a),t!==null&&um(t),e.blockedOn=a,!1;t.shift()}return!0}function hm(e,t,a){$r(e)&&a.delete(t)}function Vg(){Su=!1,Ga!==null&&$r(Ga)&&(Ga=null),Xa!==null&&$r(Xa)&&(Xa=null),Ya!==null&&$r(Ya)&&(Ya=null),ci.forEach(hm),fi.forEach(hm)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Su||(Su=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Vg)))}var Wr=null;function mm(e){Wr!==e&&(Wr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Au(n||a)===null)continue;break}var r=Cn(a);r!==null&&(e.splice(t,3),t-=3,ho(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function hi(e){function t(v){return Vr(v,e)}Ga!==null&&Vr(Ga,e),Xa!==null&&Vr(Xa,e),Ya!==null&&Vr(Ya,e),ci.forEach(t),fi.forEach(t);for(var a=0;a<$a.length;a++){var n=$a[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)dm(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],d=i[rt]||null;if(typeof r=="function")d||mm(a);else if(d){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[rt]||null)m=d.formAction;else if(Au(i)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),mm(a)}}}function Nu(e){this._internalRoot=e}Ir.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=pt();sm(a,n,e,t,null,null)},Ir.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ll(),sm(e.current,2,null,e,null,null),Or(),t[On]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&dm(e)}};var pm=s.version;if(pm!=="19.0.0")throw Error(o(527,pm,"19.0.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=H(t),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var Wg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:an,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{bl=Qr.inject(Wg),ut=Qr}catch{}}return pi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var a=!1,n="",i=Md,r=zd,d=Dd,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=im(e,1,!1,null,null,a,n,i,r,d,m,null),e[On]=t.current,ou(e.nodeType===8?e.parentNode:e),new Nu(t)},pi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(o(299));var n=!1,i="",r=Md,d=zd,m=Dd,v=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),t=im(e,1,!0,t,a??null,n,i,r,d,m,v,A),t.context=rm(null),a=t.current,n=pt(),i=za(n),i.callback=null,Da(a,i,n),t.current.lanes=n,xl(t,n),Xt(t),e[On]=t.current,ou(e),new Ir(t)},pi.version="19.0.0",pi}var Nm;function a2(){if(Nm)return Tu.exports;Nm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Tu.exports=t2(),Tu.exports}var n2=a2(),gi={},jm;function l2(){if(jm)return gi;jm=1,Object.defineProperty(gi,"__esModule",{value:!0}),gi.parse=b,gi.serialize=p;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,h=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function b(j,E){const k=new h,X=j.length;if(X<2)return k;const R=(E==null?void 0:E.decode)||x;let D=0;do{const G=j.indexOf("=",D);if(G===-1)break;const q=j.indexOf(";",D),te=q===-1?X:q;if(G>te){D=j.lastIndexOf(";",G-1)+1;continue}const $=g(j,D,G),le=y(j,G,$),je=j.slice($,le);if(k[je]===void 0){let ve=g(j,G+1,te),I=y(j,te,ve);const re=R(j.slice(ve,I));k[je]=re}D=te+1}while(D<X);return k}function g(j,E,k){do{const X=j.charCodeAt(E);if(X!==32&&X!==9)return E}while(++E<k);return k}function y(j,E,k){for(;E>k;){const X=j.charCodeAt(--E);if(X!==32&&X!==9)return E+1}return k}function p(j,E,k){const X=(k==null?void 0:k.encode)||encodeURIComponent;if(!l.test(j))throw new TypeError(`argument name is invalid: ${j}`);const R=X(E);if(!s.test(R))throw new TypeError(`argument val is invalid: ${E}`);let D=j+"="+R;if(!k)return D;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);D+="; Max-Age="+k.maxAge}if(k.domain){if(!u.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);D+="; Domain="+k.domain}if(k.path){if(!o.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);D+="; Path="+k.path}if(k.expires){if(!C(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);D+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(D+="; HttpOnly"),k.secure&&(D+="; Secure"),k.partitioned&&(D+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return D}function x(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function C(j){return f.call(j)==="[object Date]"}return gi}l2();var Em="popstate";function i2(l={}){function s(o,f){let{pathname:h,search:b,hash:g}=o.location;return $u("",{pathname:h,search:b,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(o,f){return typeof f=="string"?f:Ei(f)}return s2(s,u,null,l)}function Me(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Wt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function r2(){return Math.random().toString(36).substring(2,10)}function Tm(l,s){return{usr:l.state,key:l.key,idx:s}}function $u(l,s,u=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?ml(s):s,state:u,key:s&&s.key||o||r2()}}function Ei({pathname:l="/",search:s="",hash:u=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function ml(l){let s={};if(l){let u=l.indexOf("#");u>=0&&(s.hash=l.substring(u),l=l.substring(0,u));let o=l.indexOf("?");o>=0&&(s.search=l.substring(o),l=l.substring(0,o)),l&&(s.pathname=l)}return s}function s2(l,s,u,o={}){let{window:f=document.defaultView,v5Compat:h=!1}=o,b=f.history,g="POP",y=null,p=x();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function x(){return(b.state||{idx:null}).idx}function C(){g="POP";let R=x(),D=R==null?null:R-p;p=R,y&&y({action:g,location:X.location,delta:D})}function j(R,D){g="PUSH";let G=$u(X.location,R,D);p=x()+1;let q=Tm(G,p),te=X.createHref(G);try{b.pushState(q,"",te)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;f.location.assign(te)}h&&y&&y({action:g,location:X.location,delta:1})}function E(R,D){g="REPLACE";let G=$u(X.location,R,D);p=x();let q=Tm(G,p),te=X.createHref(G);b.replaceState(q,"",te),h&&y&&y({action:g,location:X.location,delta:0})}function k(R){let D=f.location.origin!=="null"?f.location.origin:f.location.href,G=typeof R=="string"?R:Ei(R);return G=G.replace(/ $/,"%20"),Me(D,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,D)}let X={get action(){return g},get location(){return l(f,b)},listen(R){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Em,C),y=R,()=>{f.removeEventListener(Em,C),y=null}},createHref(R){return s(f,R)},createURL:k,encodeLocation(R){let D=k(R);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:j,replace:E,go(R){return b.go(R)}};return X}function _1(l,s,u="/"){return o2(l,s,u,!1)}function o2(l,s,u,o){let f=typeof s=="string"?ml(s):s,h=ya(f.pathname||"/",u);if(h==null)return null;let b=A1(l);u2(b);let g=null;for(let y=0;g==null&&y<b.length;++y){let p=x2(h);g=b2(b[y],p,o)}return g}function A1(l,s=[],u=[],o=""){let f=(h,b,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};y.relativePath.startsWith("/")&&(Me(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length));let p=ga([o,y.relativePath]),x=u.concat(y);h.children&&h.children.length>0&&(Me(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),A1(h.children,s,x,p)),!(h.path==null&&!h.index)&&s.push({path:p,score:g2(p,h.index),routesMeta:x})};return l.forEach((h,b)=>{var g;if(h.path===""||!((g=h.path)!=null&&g.includes("?")))f(h,b);else for(let y of S1(h.path))f(h,b,y)}),s}function S1(l){let s=l.split("/");if(s.length===0)return[];let[u,...o]=s,f=u.endsWith("?"),h=u.replace(/\?$/,"");if(o.length===0)return f?[h,""]:[h];let b=S1(o.join("/")),g=[];return g.push(...b.map(y=>y===""?h:[h,y].join("/"))),f&&g.push(...b),g.map(y=>l.startsWith("/")&&y===""?"/":y)}function u2(l){l.sort((s,u)=>s.score!==u.score?u.score-s.score:y2(s.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var c2=/^:[\w-]+$/,f2=3,d2=2,h2=1,m2=10,p2=-2,Om=l=>l==="*";function g2(l,s){let u=l.split("/"),o=u.length;return u.some(Om)&&(o+=p2),s&&(o+=d2),u.filter(f=>!Om(f)).reduce((f,h)=>f+(c2.test(h)?f2:h===""?h2:m2),o)}function y2(l,s){return l.length===s.length&&l.slice(0,-1).every((o,f)=>o===s[f])?l[l.length-1]-s[s.length-1]:0}function b2(l,s,u=!1){let{routesMeta:o}=l,f={},h="/",b=[];for(let g=0;g<o.length;++g){let y=o[g],p=g===o.length-1,x=h==="/"?s:s.slice(h.length)||"/",C=ns({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},x),j=y.route;if(!C&&p&&u&&!o[o.length-1].route.index&&(C=ns({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},x)),!C)return null;Object.assign(f,C.params),b.push({params:f,pathname:ga([h,C.pathname]),pathnameBase:S2(ga([h,C.pathnameBase])),route:j}),C.pathnameBase!=="/"&&(h=ga([h,C.pathnameBase]))}return b}function ns(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,o]=v2(l.path,l.caseSensitive,l.end),f=s.match(u);if(!f)return null;let h=f[0],b=h.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:o.reduce((p,{paramName:x,isOptional:C},j)=>{if(x==="*"){let k=g[j]||"";b=h.slice(0,h.length-k.length).replace(/(.)\/+$/,"$1")}const E=g[j];return C&&!E?p[x]=void 0:p[x]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:b,pattern:l}}function v2(l,s=!1,u=!0){Wt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,g,y)=>(o.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(o.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),o]}function x2(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Wt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function ya(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,o=l.charAt(u);return o&&o!=="/"?null:l.slice(u)||"/"}function w2(l,s="/"){let{pathname:u,search:o="",hash:f=""}=typeof l=="string"?ml(l):l;return{pathname:u?u.startsWith("/")?u:_2(u,s):s,search:N2(o),hash:j2(f)}}function _2(l,s){let u=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Mu(l,s,u,o){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A2(l){return l.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function N1(l){let s=A2(l);return s.map((u,o)=>o===s.length-1?u.pathname:u.pathnameBase)}function j1(l,s,u,o=!1){let f;typeof l=="string"?f=ml(l):(f={...l},Me(!f.pathname||!f.pathname.includes("?"),Mu("?","pathname","search",f)),Me(!f.pathname||!f.pathname.includes("#"),Mu("#","pathname","hash",f)),Me(!f.search||!f.search.includes("#"),Mu("#","search","hash",f)));let h=l===""||f.pathname==="",b=h?"/":f.pathname,g;if(b==null)g=u;else{let C=s.length-1;if(!o&&b.startsWith("..")){let j=b.split("/");for(;j[0]==="..";)j.shift(),C-=1;f.pathname=j.join("/")}g=C>=0?s[C]:"/"}let y=w2(f,g),p=b&&b!=="/"&&b.endsWith("/"),x=(h||b===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(p||x)&&(y.pathname+="/"),y}var ga=l=>l.join("/").replace(/\/\/+/g,"/"),S2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,j2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function E2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var E1=["POST","PUT","PATCH","DELETE"];new Set(E1);var T2=["GET",...E1];new Set(T2);var pl=O.createContext(null);pl.displayName="DataRouter";var us=O.createContext(null);us.displayName="DataRouterState";var T1=O.createContext({isTransitioning:!1});T1.displayName="ViewTransition";var O2=O.createContext(new Map);O2.displayName="Fetchers";var C2=O.createContext(null);C2.displayName="Await";var It=O.createContext(null);It.displayName="Navigation";var Ci=O.createContext(null);Ci.displayName="Location";var xa=O.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var mc=O.createContext(null);mc.displayName="RouteError";function k2(l,{relative:s}={}){Me(ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=O.useContext(It),{hash:f,pathname:h,search:b}=Mi(l,{relative:s}),g=h;return u!=="/"&&(g=h==="/"?u:ga([u,h])),o.createHref({pathname:g,search:b,hash:f})}function ki(){return O.useContext(Ci)!=null}function En(){return Me(ki(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ci).location}var O1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function C1(l){O.useContext(It).static||O.useLayoutEffect(l)}function M2(){let{isDataRoute:l}=O.useContext(xa);return l?V2():z2()}function z2(){Me(ki(),"useNavigate() may be used only in the context of a <Router> component.");let l=O.useContext(pl),{basename:s,navigator:u}=O.useContext(It),{matches:o}=O.useContext(xa),{pathname:f}=En(),h=JSON.stringify(N1(o)),b=O.useRef(!1);return C1(()=>{b.current=!0}),O.useCallback((y,p={})=>{if(Wt(b.current,O1),!b.current)return;if(typeof y=="number"){u.go(y);return}let x=j1(y,JSON.parse(h),f,p.relative==="path");l==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:ga([s,x.pathname])),(p.replace?u.replace:u.push)(x,p.state,p)},[s,u,h,f,l])}O.createContext(null);function Mi(l,{relative:s}={}){let{matches:u}=O.useContext(xa),{pathname:o}=En(),f=JSON.stringify(N1(u));return O.useMemo(()=>j1(l,JSON.parse(f),o,s==="path"),[l,f,o,s])}function D2(l,s){return k1(l,s)}function k1(l,s,u,o){var G;Me(ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:h}=O.useContext(It),{matches:b}=O.useContext(xa),g=b[b.length-1],y=g?g.params:{},p=g?g.pathname:"/",x=g?g.pathnameBase:"/",C=g&&g.route;{let q=C&&C.path||"";M1(p,!C||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let j=En(),E;if(s){let q=typeof s=="string"?ml(s):s;Me(x==="/"||((G=q.pathname)==null?void 0:G.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${q.pathname}" was given in the \`location\` prop.`),E=q}else E=j;let k=E.pathname||"/",X=k;if(x!=="/"){let q=x.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(q.length).join("/")}let R=!h&&u&&u.matches&&u.matches.length>0?u.matches:_1(l,{pathname:X});Wt(C||R!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Wt(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=B2(R&&R.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:ga([x,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?x:ga([x,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),b,u,o);return s&&D?O.createElement(Ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},D):D}function L2(){let l=$2(),s=E2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},s),u?O.createElement("pre",{style:f},u):null,b)}var R2=O.createElement(L2,null),U2=class extends O.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?O.createElement(xa.Provider,{value:this.props.routeContext},O.createElement(mc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function H2({routeContext:l,match:s,children:u}){let o=O.useContext(pl);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),O.createElement(xa.Provider,{value:l},u)}function B2(l,s=[],u=null,o=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let f=l,h=u==null?void 0:u.errors;if(h!=null){let y=f.findIndex(p=>p.route.id&&(h==null?void 0:h[p.route.id])!==void 0);Me(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let b=!1,g=-1;if(u)for(let y=0;y<f.length;y++){let p=f[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=y),p.route.id){let{loaderData:x,errors:C}=u,j=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!C||C[p.route.id]===void 0);if(p.route.lazy||j){b=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((y,p,x)=>{let C,j=!1,E=null,k=null;u&&(C=h&&p.route.id?h[p.route.id]:void 0,E=p.route.errorElement||R2,b&&(g<0&&x===0?(M1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,k=null):g===x&&(j=!0,k=p.route.hydrateFallbackElement||null)));let X=s.concat(f.slice(0,x+1)),R=()=>{let D;return C?D=E:j?D=k:p.route.Component?D=O.createElement(p.route.Component,null):p.route.element?D=p.route.element:D=y,O.createElement(H2,{match:p,routeContext:{outlet:y,matches:X,isDataRoute:u!=null},children:D})};return u&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?O.createElement(U2,{location:u.location,revalidation:u.revalidation,component:E,error:C,children:R(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):R()},null)}function pc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q2(l){let s=O.useContext(pl);return Me(s,pc(l)),s}function G2(l){let s=O.useContext(us);return Me(s,pc(l)),s}function X2(l){let s=O.useContext(xa);return Me(s,pc(l)),s}function gc(l){let s=X2(l),u=s.matches[s.matches.length-1];return Me(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Y2(){return gc("useRouteId")}function $2(){var o;let l=O.useContext(mc),s=G2("useRouteError"),u=gc("useRouteError");return l!==void 0?l:(o=s.errors)==null?void 0:o[u]}function V2(){let{router:l}=q2("useNavigate"),s=gc("useNavigate"),u=O.useRef(!1);return C1(()=>{u.current=!0}),O.useCallback(async(f,h={})=>{Wt(u.current,O1),u.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:s,...h}))},[l,s])}var Cm={};function M1(l,s,u){!s&&!Cm[l]&&(Cm[l]=!0,Wt(!1,u))}O.memo(W2);function W2({routes:l,future:s,state:u}){return k1(l,void 0,u,s)}function ma(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I2({basename:l="/",children:s=null,location:u,navigationType:o="POP",navigator:f,static:h=!1}){Me(!ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:b,navigator:f,static:h,future:{}}),[b,f,h]);typeof u=="string"&&(u=ml(u));let{pathname:y="/",search:p="",hash:x="",state:C=null,key:j="default"}=u,E=O.useMemo(()=>{let k=ya(y,b);return k==null?null:{location:{pathname:k,search:p,hash:x,state:C,key:j},navigationType:o}},[b,y,p,x,C,j,o]);return Wt(E!=null,`<Router basename="${b}"> is not able to match the URL "${y}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:O.createElement(It.Provider,{value:g},O.createElement(Ci.Provider,{children:s,value:E}))}function Q2({children:l,location:s}){return D2(Vu(l),s)}function Vu(l,s=[]){let u=[];return O.Children.forEach(l,(o,f)=>{if(!O.isValidElement(o))return;let h=[...s,f];if(o.type===O.Fragment){u.push.apply(u,Vu(o.props.children,h));return}Me(o.type===ma,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Vu(o.props.children,h)),u.push(b)}),u}var Jr="get",es="application/x-www-form-urlencoded";function cs(l){return l!=null&&typeof l.tagName=="string"}function Z2(l){return cs(l)&&l.tagName.toLowerCase()==="button"}function K2(l){return cs(l)&&l.tagName.toLowerCase()==="form"}function P2(l){return cs(l)&&l.tagName.toLowerCase()==="input"}function F2(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function J2(l,s){return l.button===0&&(!s||s==="_self")&&!F2(l)}var Zr=null;function ey(){if(Zr===null)try{new FormData(document.createElement("form"),0),Zr=!1}catch{Zr=!0}return Zr}var ty=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zu(l){return l!=null&&!ty.has(l)?(Wt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${es}"`),null):l}function ay(l,s){let u,o,f,h,b;if(K2(l)){let g=l.getAttribute("action");o=g?ya(g,s):null,u=l.getAttribute("method")||Jr,f=zu(l.getAttribute("enctype"))||es,h=new FormData(l)}else if(Z2(l)||P2(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||g.getAttribute("action");if(o=y?ya(y,s):null,u=l.getAttribute("formmethod")||g.getAttribute("method")||Jr,f=zu(l.getAttribute("formenctype"))||zu(g.getAttribute("enctype"))||es,h=new FormData(g,l),!ey()){let{name:p,type:x,value:C}=l;if(x==="image"){let j=p?`${p}.`:"";h.append(`${j}x`,"0"),h.append(`${j}y`,"0")}else p&&h.append(p,C)}}else{if(cs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Jr,o=null,f=es,b=l}return h&&f==="text/plain"&&(b=h,h=void 0),{action:o,method:u.toLowerCase(),encType:f,formData:h,body:b}}function yc(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}async function ny(l,s){if(l.id in s)return s[l.id];try{let u=await import(l.module);return s[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ly(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function iy(l,s,u){let o=await Promise.all(l.map(async f=>{let h=s.routes[f.route.id];if(h){let b=await ny(h,u);return b.links?b.links():[]}return[]}));return uy(o.flat(1).filter(ly).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function km(l,s,u,o,f,h){let b=(y,p)=>u[p]?y.route.id!==u[p].route.id:!0,g=(y,p)=>{var x;return u[p].pathname!==y.pathname||((x=u[p].route.path)==null?void 0:x.endsWith("*"))&&u[p].params["*"]!==y.params["*"]};return h==="assets"?s.filter((y,p)=>b(y,p)||g(y,p)):h==="data"?s.filter((y,p)=>{var C;let x=o.routes[y.route.id];if(!x||!x.hasLoader)return!1;if(b(y,p)||g(y,p))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((C=u[0])==null?void 0:C.params)||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function ry(l,s,{includeHydrateFallback:u}={}){return sy(l.map(o=>{let f=s.routes[o.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function sy(l){return[...new Set(l)]}function oy(l){let s={},u=Object.keys(l).sort();for(let o of u)s[o]=l[o];return s}function uy(l,s){let u=new Set;return new Set(s),l.reduce((o,f)=>{let h=JSON.stringify(oy(f));return u.has(h)||(u.add(h),o.push({key:h,link:f})),o},[])}var cy=new Set([100,101,204,205]);function fy(l,s){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname="_root.data":s&&ya(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function z1(){let l=O.useContext(pl);return yc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function dy(){let l=O.useContext(us);return yc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var bc=O.createContext(void 0);bc.displayName="FrameworkContext";function D1(){let l=O.useContext(bc);return yc(l,"You must render this element inside a <HydratedRouter> element"),l}function hy(l,s){let u=O.useContext(bc),[o,f]=O.useState(!1),[h,b]=O.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:p,onMouseLeave:x,onTouchStart:C}=s,j=O.useRef(null);O.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let X=D=>{D.forEach(G=>{b(G.isIntersecting)})},R=new IntersectionObserver(X,{threshold:.5});return j.current&&R.observe(j.current),()=>{R.disconnect()}}},[l]),O.useEffect(()=>{if(o){let X=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(X)}}},[o]);let E=()=>{f(!0)},k=()=>{f(!1),b(!1)};return u?l!=="intent"?[h,j,{}]:[h,j,{onFocus:yi(g,E),onBlur:yi(y,k),onMouseEnter:yi(p,E),onMouseLeave:yi(x,k),onTouchStart:yi(C,E)}]:[!1,j,{}]}function yi(l,s){return u=>{l&&l(u),u.defaultPrevented||s(u)}}function my({page:l,...s}){let{router:u}=z1(),o=O.useMemo(()=>_1(u.routes,l,u.basename),[u.routes,l,u.basename]);return o?O.createElement(gy,{page:l,matches:o,...s}):null}function py(l){let{manifest:s,routeModules:u}=D1(),[o,f]=O.useState([]);return O.useEffect(()=>{let h=!1;return iy(l,s,u).then(b=>{h||f(b)}),()=>{h=!0}},[l,s,u]),o}function gy({page:l,matches:s,...u}){let o=En(),{manifest:f,routeModules:h}=D1(),{basename:b}=z1(),{loaderData:g,matches:y}=dy(),p=O.useMemo(()=>km(l,s,y,f,o,"data"),[l,s,y,f,o]),x=O.useMemo(()=>km(l,s,y,f,o,"assets"),[l,s,y,f,o]),C=O.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let k=new Set,X=!1;if(s.forEach(D=>{var q;let G=f.routes[D.route.id];!G||!G.hasLoader||(!p.some(te=>te.route.id===D.route.id)&&D.route.id in g&&((q=h[D.route.id])!=null&&q.shouldRevalidate)||G.hasClientLoader?X=!0:k.add(D.route.id))}),k.size===0)return[];let R=fy(l,b);return X&&k.size>0&&R.searchParams.set("_routes",s.filter(D=>k.has(D.route.id)).map(D=>D.route.id).join(",")),[R.pathname+R.search]},[b,g,o,f,p,s,l,h]),j=O.useMemo(()=>ry(x,f),[x,f]),E=py(x);return O.createElement(O.Fragment,null,C.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...u})),j.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...u})),E.map(({key:k,link:X})=>O.createElement("link",{key:k,...X})))}function yy(...l){return s=>{l.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var L1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{L1&&(window.__reactRouterVersion="7.5.3")}catch{}function by({basename:l,children:s,window:u}){let o=O.useRef();o.current==null&&(o.current=i2({window:u,v5Compat:!0}));let f=o.current,[h,b]=O.useState({action:f.action,location:f.location}),g=O.useCallback(y=>{O.startTransition(()=>b(y))},[b]);return O.useLayoutEffect(()=>f.listen(g),[f,g]),O.createElement(I2,{basename:l,children:s,location:h.location,navigationType:h.action,navigator:f})}var R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Si=O.forwardRef(function({onClick:s,discover:u="render",prefetch:o="none",relative:f,reloadDocument:h,replace:b,state:g,target:y,to:p,preventScrollReset:x,viewTransition:C,...j},E){let{basename:k}=O.useContext(It),X=typeof p=="string"&&R1.test(p),R,D=!1;if(typeof p=="string"&&X&&(R=p,L1))try{let I=new URL(window.location.href),re=p.startsWith("//")?new URL(I.protocol+p):new URL(p),tt=ya(re.pathname,k);re.origin===I.origin&&tt!=null?p=tt+re.search+re.hash:D=!0}catch{Wt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=k2(p,{relative:f}),[q,te,$]=hy(o,j),le=_y(p,{replace:b,state:g,target:y,preventScrollReset:x,relative:f,viewTransition:C});function je(I){s&&s(I),I.defaultPrevented||le(I)}let ve=O.createElement("a",{...j,...$,href:R||G,onClick:D||h?s:je,ref:yy(E,te),target:y,"data-discover":!X&&u==="render"?"true":void 0});return q&&!X?O.createElement(O.Fragment,null,ve,O.createElement(my,{page:G})):ve});Si.displayName="Link";var vy=O.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:o="",end:f=!1,style:h,to:b,viewTransition:g,children:y,...p},x){let C=Mi(b,{relative:p.relative}),j=En(),E=O.useContext(us),{navigator:k,basename:X}=O.useContext(It),R=E!=null&&Ey(C)&&g===!0,D=k.encodeLocation?k.encodeLocation(C).pathname:C.pathname,G=j.pathname,q=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;u||(G=G.toLowerCase(),q=q?q.toLowerCase():null,D=D.toLowerCase()),q&&X&&(q=ya(q,X)||q);const te=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let $=G===D||!f&&G.startsWith(D)&&G.charAt(te)==="/",le=q!=null&&(q===D||!f&&q.startsWith(D)&&q.charAt(D.length)==="/"),je={isActive:$,isPending:le,isTransitioning:R},ve=$?s:void 0,I;typeof o=="function"?I=o(je):I=[o,$?"active":null,le?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let re=typeof h=="function"?h(je):h;return O.createElement(Si,{...p,"aria-current":ve,className:I,ref:x,style:re,to:b,viewTransition:g},typeof y=="function"?y(je):y)});vy.displayName="NavLink";var xy=O.forwardRef(({discover:l="render",fetcherKey:s,navigate:u,reloadDocument:o,replace:f,state:h,method:b=Jr,action:g,onSubmit:y,relative:p,preventScrollReset:x,viewTransition:C,...j},E)=>{let k=Ny(),X=jy(g,{relative:p}),R=b.toLowerCase()==="get"?"get":"post",D=typeof g=="string"&&R1.test(g),G=q=>{if(y&&y(q),q.defaultPrevented)return;q.preventDefault();let te=q.nativeEvent.submitter,$=(te==null?void 0:te.getAttribute("formmethod"))||b;k(te||q.currentTarget,{fetcherKey:s,method:$,navigate:u,replace:f,state:h,relative:p,preventScrollReset:x,viewTransition:C})};return O.createElement("form",{ref:E,method:R,action:X,onSubmit:o?y:G,...j,"data-discover":!D&&l==="render"?"true":void 0})});xy.displayName="Form";function wy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U1(l){let s=O.useContext(pl);return Me(s,wy(l)),s}function _y(l,{target:s,replace:u,state:o,preventScrollReset:f,relative:h,viewTransition:b}={}){let g=M2(),y=En(),p=Mi(l,{relative:h});return O.useCallback(x=>{if(J2(x,s)){x.preventDefault();let C=u!==void 0?u:Ei(y)===Ei(p);g(l,{replace:C,state:o,preventScrollReset:f,relative:h,viewTransition:b})}},[y,g,p,u,o,s,l,f,h,b])}var Ay=0,Sy=()=>`__${String(++Ay)}__`;function Ny(){let{router:l}=U1("useSubmit"),{basename:s}=O.useContext(It),u=Y2();return O.useCallback(async(o,f={})=>{let{action:h,method:b,encType:g,formData:y,body:p}=ay(o,s);if(f.navigate===!1){let x=f.fetcherKey||Sy();await l.fetch(x,u,f.action||h,{preventScrollReset:f.preventScrollReset,formData:y,body:p,formMethod:f.method||b,formEncType:f.encType||g,flushSync:f.flushSync})}else await l.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:y,body:p,formMethod:f.method||b,formEncType:f.encType||g,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,u])}function jy(l,{relative:s}={}){let{basename:u}=O.useContext(It),o=O.useContext(xa);Me(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),h={...Mi(l||".",{relative:s})},b=En();if(l==null){h.search=b.search;let g=new URLSearchParams(h.search),y=g.getAll("index");if(y.some(x=>x==="")){g.delete("index"),y.filter(C=>C).forEach(C=>g.append("index",C));let x=g.toString();h.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:ga([u,h.pathname])),Ei(h)}function Ey(l,s={}){let u=O.useContext(T1);Me(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=U1("useViewTransitionState"),f=Mi(l,{relative:s.relative});if(!u.isTransitioning)return!1;let h=ya(u.currentLocation.pathname,o)||u.currentLocation.pathname,b=ya(u.nextLocation.pathname,o)||u.nextLocation.pathname;return ns(f.pathname,b)!=null||ns(f.pathname,h)!=null}new TextEncoder;[...cy];function Ty({title:l,titleId:s,...u},o){return O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},u),l?O.createElement("title",{id:s},l):null,O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const Oy=O.forwardRef(Ty);function Cy({title:l,titleId:s,...u},o){return O.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},u),l?O.createElement("title",{id:s},l):null,O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const ky=O.forwardRef(Cy);var H1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mm=Ct.createContext&&Ct.createContext(H1),My=["attr","size","title"];function zy(l,s){if(l==null)return{};var u=Dy(l,s),o,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(f=0;f<h.length;f++)o=h[f],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(u[o]=l[o])}return u}function Dy(l,s){if(l==null)return{};var u={};for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){if(s.indexOf(o)>=0)continue;u[o]=l[o]}return u}function ls(){return ls=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(l[o]=u[o])}return l},ls.apply(this,arguments)}function zm(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function is(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?zm(Object(u),!0).forEach(function(o){Ly(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):zm(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function Ly(l,s,u){return s=Ry(s),s in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function Ry(l){var s=Uy(l,"string");return typeof s=="symbol"?s:s+""}function Uy(l,s){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var o=u.call(l,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function B1(l){return l&&l.map((s,u)=>Ct.createElement(s.tag,is({key:u},s.attr),B1(s.child)))}function Ue(l){return s=>Ct.createElement(Hy,ls({attr:is({},l.attr)},s),B1(l.child))}function Hy(l){var s=u=>{var{attr:o,size:f,title:h}=l,b=zy(l,My),g=f||u.size||"1em",y;return u.className&&(y=u.className),l.className&&(y=(y?y+" ":"")+l.className),Ct.createElement("svg",ls({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,b,{className:y,style:is(is({color:l.color||u.color},u.style),l.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),h&&Ct.createElement("title",null,h),l.children)};return Mm!==void 0?Ct.createElement(Mm.Consumer,null,u=>s(u)):s(H1)}function vc(l){return Ue({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(l)}function xc(l){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function By(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function qy(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"},child:[]}]})(l)}function q1(l){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(l)}function Gy(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(l)}function Xy(l){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(l)}function Yy(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function $y(l){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(l)}function wc(l){return Ue({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(l)}function Vy(l){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(l)}function Wy(l){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(l)}function Iy(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(l)}function Qy(l){return Ue({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(l)}function Zy(l){return Ue({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(l)}function Ky(l){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(l)}function Py(l){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(l)}function Dm(l){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(l)}function Fy(l){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(l)}function Jy(){const[l,s]=O.useState(!1),u=[{path:"/pages/book",label:"Book",icon:c.jsx(q1,{className:"w-4 h-4"})},{path:"/pages/blog-post",label:"Blog Posts",icon:c.jsx(qy,{className:"w-4 h-4"})},{path:"/pages/talk",label:"Talks",icon:c.jsx(Zy,{className:"w-4 h-4"})},{path:"/pages/workshop",label:"Workshop",icon:c.jsx(Xy,{className:"w-4 h-4"})},{path:"/pages/publication",label:"Publications",icon:c.jsx($y,{className:"w-4 h-4"})},{path:"/pages/coaching",label:"Coaching",icon:c.jsx(Py,{className:"w-4 h-4"})},{path:"/pages/ai-playbook",label:"AI Playbook",icon:c.jsx(Ky,{className:"w-4 h-4"})}];return c.jsx("header",{className:"bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg fixed w-full top-0 z-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsx(Si,{to:"/",className:"flex items-center space-x-2",children:c.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent",children:"ANUJ GUPTA"})}),c.jsx("nav",{className:"hidden md:flex items-center space-x-6",children:u.map(o=>c.jsxs(Si,{to:o.path,className:"flex items-center space-x-2 text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 px-2.5 py-1.5 rounded-md hover:bg-blue-700/50 text-sm",children:[o.icon,c.jsx("span",{className:"font-medium",children:o.label})]},o.path))}),c.jsx("button",{className:"md:hidden rounded-md p-1.5 text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none transition-all duration-200",onClick:()=>s(!l),children:l?c.jsx(ky,{className:"h-5 w-5"}):c.jsx(Oy,{className:"h-5 w-5"})})]}),l&&c.jsx("div",{className:"md:hidden bg-blue-800/95 rounded-lg shadow-xl mb-2",children:c.jsx("div",{className:"px-2 pt-1 pb-2 space-y-0.5",children:u.map(o=>c.jsxs(Si,{to:o.path,className:"flex items-center space-x-2 px-2.5 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-200 text-sm",onClick:()=>s(!1),children:[o.icon,c.jsx("span",{className:"font-medium",children:o.label})]},o.path))})})]})})}function eb(){return c.jsx("div",{className:"w-full bg-white p-8 rounded-lg shadow-lg",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4",children:"Anuj Gupta"}),c.jsx("p",{className:"text-xl font-semibold mb-8 text-gray-800 border-l-4 border-blue-800 pl-4",children:"AI Executive | Board Advisor | AI Strategy & Innovation Leader"}),c.jsxs("div",{className:"space-y-10",children:[c.jsxs("section",{children:[c.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center",children:[c.jsx(Gy,{className:"mr-3 text-blue-800"}),"Current Engagements"]}),c.jsxs("ul",{className:"space-y-5",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Fractional Head of (Gen) AI"})," - Advising and steering AI initiatives for leading startups and multinational corporations across the US, Europe, and India."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Board & Executive Advisor on AI"})," - Partnering with Boards, CXOs, and investors to shape AI strategy at scale."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Architecting Enterprise AI Strategy"})," – Guiding MNCs in executing AI roadmaps that align with business objectives."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Masterclasses & Workshops"})," – Delivering high-impact AI workshops for board members, CXOs, and investment leaders."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Mentor to GCCs"})," – Advising on the establishment of world-class AI Centers of Excellence (CoEs) and AI teams."]})]})]})]}),c.jsxs("section",{children:[c.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center",children:[c.jsx(Iy,{className:"mr-3 text-blue-800"}),"Professional Journey"]}),c.jsxs("ul",{className:"space-y-8",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Advisor to YC-Backed AI Startups"})," – Recently mentored a YC company in developing mission-critical AI systems, showcased to Sam Altman & Vinod Khosla, securing Series B funding from Khosla Ventures."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Thought Leader & Author"})," – Authored a landmark AI book, widely regarded in academia and industry:",c.jsxs("ul",{className:"mt-4 ml-6 space-y-3",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx(Vy,{className:"mt-1 mr-3 text-blue-800"}),"Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI, Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb, and YC-backed startups."]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx(Qy,{className:"mt-1 mr-3 text-blue-800"}),"Translated into five languages, with 260+ citations and adopted by 50+ global universities."]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx(Fy,{className:"mt-1 mr-3 text-blue-800"}),"Personally invited to present the book to Prof. Raj Reddy (Turing Award Winner, AI & Robotics luminary at CMU) and Dr. Srinivas Bangalore (Columbia, Princeton, Copenhagen Business School)."]})]})]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Strategic AI Leadership"})," – Led AI teams from inception to scale (5–100 members) across multiple geographies, developing AI systems in NLP, Vision, Speech, and Data Science."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI-Driven Business Impact"})," – Built and commercialized AI solutions that have directly contributed to multi-million-dollar revenues, driving AI-led growth at both startups and Fortune 50 enterprises."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Pioneering AI-First Innovation"})," – Led AI efforts for one of the earliest AI-first startups (2013), culminating in acquisition by FreshWorks (NASDAQ: FRSH) in 2016."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"C-Suite & Board-Level Engagement"})," – Trusted advisor to Founders, Board Members, and C-suite executives across Business, Product, Engineering, Sales, and HR, driving AI adoption at an enterprise scale."]})]})]})]})]})]})})}function G1(l){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(l)}function tb(l){return Ue({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"},child:[]}]})(l)}const ab="/assets/Anuj_formal_high_res-Bd3n5HJQ.png";function nb(){return c.jsxs("aside",{className:"w-1/5 bg-white p-8 rounded-lg shadow-lg py-2 h-fit pb-16",children:[c.jsx("div",{className:"author__avatar mb-4 flex flex-col items-center",children:c.jsx("img",{src:ab,className:"w-40 h-40 mx-auto rounded-full border-4 border-blue-100 shadow-lg object-cover mt-16",alt:"Anuj Gupta"})}),c.jsxs("div",{className:"author__content flex flex-col items-center",children:[c.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-3 text-center",children:"Anuj Gupta"}),c.jsxs("div",{className:"mb-4 text-center",children:[c.jsxs("p",{className:"text-md font-medium text-blue-700 tracking-tight flex items-center justify-center gap-2",children:[c.jsx(Dm,{className:"text-blue-600"}),"On-Demand Head of AI | AI Advisor to Boards"]}),c.jsx("div",{className:"w-16 h-0.5 bg-blue-100 mx-auto mt-2"})]}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(Wy,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Helping Organizations"})," with their AI efforts."]})]}),c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(Dm,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Coached 100+ CXOs"})," on AI adoption."]})]}),c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(q1,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Author"})," of Practical NLP (O'Reilly US) |",c.jsx("span",{className:"font-medium text-gray-800",children:" Angel Investor"})," |",c.jsx("span",{className:"font-medium text-gray-800",children:" Board Member"})]})]})]})]}),c.jsxs("div",{className:"author__urls-wrapper mt-16",children:[c.jsx("button",{className:"w-full bg-blue-800 hover:bg-blue-900 text-white py-2.5 px-4 rounded-md transition-all duration-300 mb-6 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Follow"}),c.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[c.jsxs("div",{className:"flex space-x-5",children:[c.jsx("a",{href:"https://www.linkedin.com/in/anujgupta-82/",className:"text-[#0077B5] hover:text-[#005582] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(xc,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://twitter.com/anujgupta82",className:"text-black hover:text-gray-800 transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:c.jsx(G1,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://github.com/anujgupta82",className:"text-[#333] hover:text-black transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:c.jsx(vc,{className:"w-7 h-7"})})]}),c.jsxs("div",{className:"flex space-x-5",children:[c.jsx("a",{href:"https://gradient-advisors.ai/",className:"text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Gradient Advisors",children:c.jsx(wc,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://pragmaticai1.substack.com/",className:"text-[#FF6719] hover:text-[#e05a14] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Substack",children:c.jsx(tb,{className:"w-7 h-7"})})]})]})]})]})}function lb(){return c.jsx("footer",{className:"bg-blue-800 text-white py-12 relative",children:c.jsxs("div",{className:"container mx-auto px-4",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[c.jsxs("div",{className:"text-center md:text-left",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Anuj Gupta"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 Anuj Gupta | All Rights Reserved"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Get in Touch"}),c.jsx("p",{className:"text-gray-400 text-sm mb-6",children:"I'm always excited to meet new people. Let's connect and see where it takes us!"}),c.jsxs("a",{href:"mailto:contact@example.com",className:"inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600",children:[c.jsx(Yy,{className:"mr-2"}),"contact@example.com"]})]}),c.jsxs("div",{className:"text-center md:text-right",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Stay Connected"}),c.jsxs("div",{className:"flex justify-center md:justify-end space-x-6",children:[c.jsx("a",{href:"https://www.linkedin.com/in/anujgupta-82/",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(xc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://twitter.com/anujgupta82",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(By,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://gradient-advisors.ai/",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(wc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://github.com/yourusername",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(vc,{className:"w-6 h-6"})})]})]})]}),c.jsx("div",{className:"border-gray-400 mt-12 pt-8 text-center",children:c.jsx("p",{className:"text-gray-400 text-sm",children:"Empowering businesses through AI innovation and strategic leadership"})})]})})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ib={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Wa={prefix:"fas",iconName:"window-maximize",icon:[512,512,[128470],"f2d0","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ia={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Qa={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},rb={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},sb={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},ob={prefix:"fas",iconName:"anchor",icon:[576,512,[9875],"f13d","M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 208-48 0c-53 0-96-43-96-96l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 88.4 71.6 160 160 160l80 0 80 0c88.4 0 160-71.6 160-160l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 53-43 96-96 96l-48 0 0-208 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0z"]},ub={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function cb(l,s,u){return(s=db(s))in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function Lm(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function B(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Lm(Object(u),!0).forEach(function(o){cb(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):Lm(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function fb(l,s){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var o=u.call(l,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function db(l){var s=fb(l,"string");return typeof s=="symbol"?s:s+""}const Rm=()=>{};let _c={},X1={},Y1=null,$1={mark:Rm,measure:Rm};try{typeof window<"u"&&(_c=window),typeof document<"u"&&(X1=document),typeof MutationObserver<"u"&&(Y1=MutationObserver),typeof performance<"u"&&($1=performance)}catch{}const{userAgent:Um=""}=_c.navigator||{},Fa=_c,Ee=X1,Hm=Y1,Kr=$1;Fa.document;const wa=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",V1=~Um.indexOf("MSIE")||~Um.indexOf("Trident/");var hb=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,mb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,W1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},pb={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},I1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],et="classic",fs="duotone",gb="sharp",yb="sharp-duotone",Q1=[et,fs,gb,yb],bb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},vb={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xb=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),wb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},_b=["fak","fa-kit","fakd","fa-kit-duotone"],Bm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ab=["kit"],Sb={kit:{"fa-kit":"fak"}},Nb=["fak","fakd"],jb={kit:{fak:"fa-kit"}},qm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Eb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Tb=["fak","fa-kit","fakd","fa-kit-duotone"],Ob={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Cb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kb={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Wu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Mb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Iu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Eb,...Mb],zb=["solid","regular","light","thin","duotone","brands"],Z1=[1,2,3,4,5,6,7,8,9,10],Db=Z1.concat([11,12,13,14,15,16,17,18,19,20]),Lb=[...Object.keys(kb),...zb,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pr.GROUP,Pr.SWAP_OPACITY,Pr.PRIMARY,Pr.SECONDARY].concat(Z1.map(l=>"".concat(l,"x"))).concat(Db.map(l=>"w-".concat(l))),Rb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ba="___FONT_AWESOME___",Qu=16,K1="fa",P1="svg-inline--fa",Nn="data-fa-i2svg",Zu="data-fa-pseudo-element",Ub="data-fa-pseudo-element-pending",Ac="data-prefix",Sc="data-icon",Gm="fontawesome-i2svg",Hb="async",Bb=["HTML","HEAD","STYLE","SCRIPT"],F1=(()=>{try{return!0}catch{return!1}})();function zi(l){return new Proxy(l,{get(s,u){return u in s?s[u]:s[et]}})}const J1=B({},W1);J1[et]=B(B(B(B({},{"fa-duotone":"duotone"}),W1[et]),Bm.kit),Bm["kit-duotone"]);const qb=zi(J1),Ku=B({},wb);Ku[et]=B(B(B(B({},{duotone:"fad"}),Ku[et]),qm.kit),qm["kit-duotone"]);const Xm=zi(Ku),Pu=B({},Wu);Pu[et]=B(B({},Pu[et]),jb.kit);const Nc=zi(Pu),Fu=B({},Cb);Fu[et]=B(B({},Fu[et]),Sb.kit);zi(Fu);const Gb=hb,ep="fa-layers-text",Xb=mb,Yb=B({},bb);zi(Yb);const $b=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Du=pb,Vb=[...Ab,...Lb],Ni=Fa.FontAwesomeConfig||{};function Wb(l){var s=Ee.querySelector("script["+l+"]");if(s)return s.getAttribute(l)}function Ib(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Ee&&typeof Ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[u,o]=s;const f=Ib(Wb(u));f!=null&&(Ni[o]=f)});const tp={styleDefault:"solid",familyDefault:et,cssPrefix:K1,replacementClass:P1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ni.familyPrefix&&(Ni.cssPrefix=Ni.familyPrefix);const hl=B(B({},tp),Ni);hl.autoReplaceSvg||(hl.observeMutations=!1);const Z={};Object.keys(tp).forEach(l=>{Object.defineProperty(Z,l,{enumerable:!0,set:function(s){hl[l]=s,ji.forEach(u=>u(Z))},get:function(){return hl[l]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(l){hl.cssPrefix=l,ji.forEach(s=>s(Z))},get:function(){return hl.cssPrefix}});Fa.FontAwesomeConfig=Z;const ji=[];function Qb(l){return ji.push(l),()=>{ji.splice(ji.indexOf(l),1)}}const Za=Qu,$t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zb(l){if(!l||!wa)return;const s=Ee.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=l;const u=Ee.head.childNodes;let o=null;for(let f=u.length-1;f>-1;f--){const h=u[f],b=(h.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(b)>-1&&(o=h)}return Ee.head.insertBefore(s,o),l}const Kb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ti(){let l=12,s="";for(;l-- >0;)s+=Kb[Math.random()*62|0];return s}function gl(l){const s=[];for(let u=(l||[]).length>>>0;u--;)s[u]=l[u];return s}function jc(l){return l.classList?gl(l.classList):(l.getAttribute("class")||"").split(" ").filter(s=>s)}function ap(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pb(l){return Object.keys(l||{}).reduce((s,u)=>s+"".concat(u,'="').concat(ap(l[u]),'" '),"").trim()}function ds(l){return Object.keys(l||{}).reduce((s,u)=>s+"".concat(u,": ").concat(l[u].trim(),";"),"")}function Ec(l){return l.size!==$t.size||l.x!==$t.x||l.y!==$t.y||l.rotate!==$t.rotate||l.flipX||l.flipY}function Fb(l){let{transform:s,containerWidth:u,iconWidth:o}=l;const f={transform:"translate(".concat(u/2," 256)")},h="translate(".concat(s.x*32,", ").concat(s.y*32,") "),b="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),y={transform:"".concat(h," ").concat(b," ").concat(g)},p={transform:"translate(".concat(o/2*-1," -256)")};return{outer:f,inner:y,path:p}}function Jb(l){let{transform:s,width:u=Qu,height:o=Qu,startCentered:f=!1}=l,h="";return f&&V1?h+="translate(".concat(s.x/Za-u/2,"em, ").concat(s.y/Za-o/2,"em) "):f?h+="translate(calc(-50% + ".concat(s.x/Za,"em), calc(-50% + ").concat(s.y/Za,"em)) "):h+="translate(".concat(s.x/Za,"em, ").concat(s.y/Za,"em) "),h+="scale(".concat(s.size/Za*(s.flipX?-1:1),", ").concat(s.size/Za*(s.flipY?-1:1),") "),h+="rotate(".concat(s.rotate,"deg) "),h}var ev=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function np(){const l=K1,s=P1,u=Z.cssPrefix,o=Z.replacementClass;let f=ev;if(u!==l||o!==s){const h=new RegExp("\\.".concat(l,"\\-"),"g"),b=new RegExp("\\--".concat(l,"\\-"),"g"),g=new RegExp("\\.".concat(s),"g");f=f.replace(h,".".concat(u,"-")).replace(b,"--".concat(u,"-")).replace(g,".".concat(o))}return f}let Ym=!1;function Lu(){Z.autoAddCss&&!Ym&&(Zb(np()),Ym=!0)}var tv={mixout(){return{dom:{css:np,insertCss:Lu}}},hooks(){return{beforeDOMElementCreation(){Lu()},beforeI2svg(){Lu()}}}};const va=Fa||{};va[ba]||(va[ba]={});va[ba].styles||(va[ba].styles={});va[ba].hooks||(va[ba].hooks={});va[ba].shims||(va[ba].shims=[]);var Vt=va[ba];const lp=[],ip=function(){Ee.removeEventListener("DOMContentLoaded",ip),rs=1,lp.map(l=>l())};let rs=!1;wa&&(rs=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),rs||Ee.addEventListener("DOMContentLoaded",ip));function av(l){wa&&(rs?setTimeout(l,0):lp.push(l))}function Di(l){const{tag:s,attributes:u={},children:o=[]}=l;return typeof l=="string"?ap(l):"<".concat(s," ").concat(Pb(u),">").concat(o.map(Di).join(""),"</").concat(s,">")}function $m(l,s,u){if(l&&l[s]&&l[s][u])return{prefix:s,iconName:u,icon:l[s][u]}}var Ru=function(s,u,o,f){var h=Object.keys(s),b=h.length,g=u,y,p,x;for(o===void 0?(y=1,x=s[h[0]]):(y=0,x=o);y<b;y++)p=h[y],x=g(x,s[p],p,s);return x};function nv(l){const s=[];let u=0;const o=l.length;for(;u<o;){const f=l.charCodeAt(u++);if(f>=55296&&f<=56319&&u<o){const h=l.charCodeAt(u++);(h&64512)==56320?s.push(((f&1023)<<10)+(h&1023)+65536):(s.push(f),u--)}else s.push(f)}return s}function Ju(l){const s=nv(l);return s.length===1?s[0].toString(16):null}function lv(l,s){const u=l.length;let o=l.charCodeAt(s),f;return o>=55296&&o<=56319&&u>s+1&&(f=l.charCodeAt(s+1),f>=56320&&f<=57343)?(o-55296)*1024+f-56320+65536:o}function Vm(l){return Object.keys(l).reduce((s,u)=>{const o=l[u];return!!o.icon?s[o.iconName]=o.icon:s[u]=o,s},{})}function ec(l,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=u,f=Vm(s);typeof Vt.hooks.addPack=="function"&&!o?Vt.hooks.addPack(l,Vm(s)):Vt.styles[l]=B(B({},Vt.styles[l]||{}),f),l==="fas"&&ec("fa",s)}const{styles:Oi,shims:iv}=Vt,rp=Object.keys(Nc),rv=rp.reduce((l,s)=>(l[s]=Object.keys(Nc[s]),l),{});let Tc=null,sp={},op={},up={},cp={},fp={};function sv(l){return~Vb.indexOf(l)}function ov(l,s){const u=s.split("-"),o=u[0],f=u.slice(1).join("-");return o===l&&f!==""&&!sv(f)?f:null}const dp=()=>{const l=o=>Ru(Oi,(f,h,b)=>(f[b]=Ru(h,o,{}),f),{});sp=l((o,f,h)=>(f[3]&&(o[f[3]]=h),f[2]&&f[2].filter(g=>typeof g=="number").forEach(g=>{o[g.toString(16)]=h}),o)),op=l((o,f,h)=>(o[h]=h,f[2]&&f[2].filter(g=>typeof g=="string").forEach(g=>{o[g]=h}),o)),fp=l((o,f,h)=>{const b=f[2];return o[h]=h,b.forEach(g=>{o[g]=h}),o});const s="far"in Oi||Z.autoFetchSvg,u=Ru(iv,(o,f)=>{const h=f[0];let b=f[1];const g=f[2];return b==="far"&&!s&&(b="fas"),typeof h=="string"&&(o.names[h]={prefix:b,iconName:g}),typeof h=="number"&&(o.unicodes[h.toString(16)]={prefix:b,iconName:g}),o},{names:{},unicodes:{}});up=u.names,cp=u.unicodes,Tc=hs(Z.styleDefault,{family:Z.familyDefault})};Qb(l=>{Tc=hs(l.styleDefault,{family:Z.familyDefault})});dp();function Oc(l,s){return(sp[l]||{})[s]}function uv(l,s){return(op[l]||{})[s]}function Sn(l,s){return(fp[l]||{})[s]}function hp(l){return up[l]||{prefix:null,iconName:null}}function cv(l){const s=cp[l],u=Oc("fas",l);return s||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function Ja(){return Tc}const mp=()=>({prefix:null,iconName:null,rest:[]});function fv(l){let s=et;const u=rp.reduce((o,f)=>(o[f]="".concat(Z.cssPrefix,"-").concat(f),o),{});return Q1.forEach(o=>{(l.includes(u[o])||l.some(f=>rv[o].includes(f)))&&(s=o)}),s}function hs(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=et}=s,o=qb[u][l];if(u===fs&&!l)return"fad";const f=Xm[u][l]||Xm[u][o],h=l in Vt.styles?l:null;return f||h||null}function dv(l){let s=[],u=null;return l.forEach(o=>{const f=ov(Z.cssPrefix,o);f?u=f:o&&s.push(o)}),{iconName:u,rest:s}}function Wm(l){return l.sort().filter((s,u,o)=>o.indexOf(s)===u)}function ms(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=s;let o=null;const f=Iu.concat(Tb),h=Wm(l.filter(C=>f.includes(C))),b=Wm(l.filter(C=>!Iu.includes(C))),g=h.filter(C=>(o=C,!I1.includes(C))),[y=null]=g,p=fv(h),x=B(B({},dv(b)),{},{prefix:hs(y,{family:p})});return B(B(B({},x),gv({values:l,family:p,styles:Oi,config:Z,canonical:x,givenPrefix:o})),hv(u,o,x))}function hv(l,s,u){let{prefix:o,iconName:f}=u;if(l||!o||!f)return{prefix:o,iconName:f};const h=s==="fa"?hp(f):{},b=Sn(o,f);return f=h.iconName||b||f,o=h.prefix||o,o==="far"&&!Oi.far&&Oi.fas&&!Z.autoFetchSvg&&(o="fas"),{prefix:o,iconName:f}}const mv=Q1.filter(l=>l!==et||l!==fs),pv=Object.keys(Wu).filter(l=>l!==et).map(l=>Object.keys(Wu[l])).flat();function gv(l){const{values:s,family:u,canonical:o,givenPrefix:f="",styles:h={},config:b={}}=l,g=u===fs,y=s.includes("fa-duotone")||s.includes("fad"),p=b.familyDefault==="duotone",x=o.prefix==="fad"||o.prefix==="fa-duotone";if(!g&&(y||p||x)&&(o.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(o.prefix="fab"),!o.prefix&&mv.includes(u)&&(Object.keys(h).find(j=>pv.includes(j))||b.autoFetchSvg)){const j=xb.get(u).defaultShortPrefixId;o.prefix=j,o.iconName=Sn(o.prefix,o.iconName)||o.iconName}return(o.prefix==="fa"||f==="fa")&&(o.prefix=Ja()||"fas"),o}class yv{constructor(){this.definitions={}}add(){for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];const f=u.reduce(this._pullDefinitions,{});Object.keys(f).forEach(h=>{this.definitions[h]=B(B({},this.definitions[h]||{}),f[h]),ec(h,f[h]);const b=Nc[et][h];b&&ec(b,f[h]),dp()})}reset(){this.definitions={}}_pullDefinitions(s,u){const o=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(o).map(f=>{const{prefix:h,iconName:b,icon:g}=o[f],y=g[2];s[h]||(s[h]={}),y.length>0&&y.forEach(p=>{typeof p=="string"&&(s[h][p]=g)}),s[h][b]=g}),s}}let Im=[],cl={};const dl={},bv=Object.keys(dl);function vv(l,s){let{mixoutsTo:u}=s;return Im=l,cl={},Object.keys(dl).forEach(o=>{bv.indexOf(o)===-1&&delete dl[o]}),Im.forEach(o=>{const f=o.mixout?o.mixout():{};if(Object.keys(f).forEach(h=>{typeof f[h]=="function"&&(u[h]=f[h]),typeof f[h]=="object"&&Object.keys(f[h]).forEach(b=>{u[h]||(u[h]={}),u[h][b]=f[h][b]})}),o.hooks){const h=o.hooks();Object.keys(h).forEach(b=>{cl[b]||(cl[b]=[]),cl[b].push(h[b])})}o.provides&&o.provides(dl)}),u}function tc(l,s){for(var u=arguments.length,o=new Array(u>2?u-2:0),f=2;f<u;f++)o[f-2]=arguments[f];return(cl[l]||[]).forEach(b=>{s=b.apply(null,[s,...o])}),s}function jn(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),o=1;o<s;o++)u[o-1]=arguments[o];(cl[l]||[]).forEach(h=>{h.apply(null,u)})}function en(){const l=arguments[0],s=Array.prototype.slice.call(arguments,1);return dl[l]?dl[l].apply(null,s):void 0}function ac(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:s}=l;const u=l.prefix||Ja();if(s)return s=Sn(u,s)||s,$m(pp.definitions,u,s)||$m(Vt.styles,u,s)}const pp=new yv,xv=()=>{Z.autoReplaceSvg=!1,Z.observeMutations=!1,jn("noAuto")},wv={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wa?(jn("beforeI2svg",l),en("pseudoElements2svg",l),en("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s}=l;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,av(()=>{Av({autoReplaceSvgRoot:s}),jn("watch",l)})}},_v={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Sn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const s=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],u=hs(l[0]);return{prefix:u,iconName:Sn(u,s)||s}}if(typeof l=="string"&&(l.indexOf("".concat(Z.cssPrefix,"-"))>-1||l.match(Gb))){const s=ms(l.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ja(),iconName:Sn(s.prefix,s.iconName)||s.iconName}}if(typeof l=="string"){const s=Ja();return{prefix:s,iconName:Sn(s,l)||l}}}},gt={noAuto:xv,config:Z,dom:wv,parse:_v,library:pp,findIconDefinition:ac,toHtml:Di},Av=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s=Ee}=l;(Object.keys(Vt.styles).length>0||Z.autoFetchSvg)&&wa&&Z.autoReplaceSvg&&gt.dom.i2svg({node:s})};function ps(l,s){return Object.defineProperty(l,"abstract",{get:s}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(u=>Di(u))}}),Object.defineProperty(l,"node",{get:function(){if(!wa)return;const u=Ee.createElement("div");return u.innerHTML=l.html,u.children}}),l}function Sv(l){let{children:s,main:u,mask:o,attributes:f,styles:h,transform:b}=l;if(Ec(b)&&u.found&&!o.found){const{width:g,height:y}=u,p={x:g/y/2,y:.5};f.style=ds(B(B({},h),{},{"transform-origin":"".concat(p.x+b.x/16,"em ").concat(p.y+b.y/16,"em")}))}return[{tag:"svg",attributes:f,children:s}]}function Nv(l){let{prefix:s,iconName:u,children:o,attributes:f,symbol:h}=l;const b=h===!0?"".concat(s,"-").concat(Z.cssPrefix,"-").concat(u):h;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},f),{},{id:b}),children:o}]}]}function Cc(l){const{icons:{main:s,mask:u},prefix:o,iconName:f,transform:h,symbol:b,title:g,maskId:y,titleId:p,extra:x,watchable:C=!1}=l,{width:j,height:E}=u.found?u:s,k=Nb.includes(o),X=[Z.replacementClass,f?"".concat(Z.cssPrefix,"-").concat(f):""].filter($=>x.classes.indexOf($)===-1).filter($=>$!==""||!!$).concat(x.classes).join(" ");let R={children:[],attributes:B(B({},x.attributes),{},{"data-prefix":o,"data-icon":f,class:X,role:x.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(E)})};const D=k&&!~x.classes.indexOf("fa-fw")?{width:"".concat(j/E*16*.0625,"em")}:{};C&&(R.attributes[Nn]=""),g&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(p||Ti())},children:[g]}),delete R.attributes.title);const G=B(B({},R),{},{prefix:o,iconName:f,main:s,mask:u,maskId:y,transform:h,symbol:b,styles:B(B({},D),x.styles)}),{children:q,attributes:te}=u.found&&s.found?en("generateAbstractMask",G)||{children:[],attributes:{}}:en("generateAbstractIcon",G)||{children:[],attributes:{}};return G.children=q,G.attributes=te,b?Nv(G):Sv(G)}function Qm(l){const{content:s,width:u,height:o,transform:f,title:h,extra:b,watchable:g=!1}=l,y=B(B(B({},b.attributes),h?{title:h}:{}),{},{class:b.classes.join(" ")});g&&(y[Nn]="");const p=B({},b.styles);Ec(f)&&(p.transform=Jb({transform:f,startCentered:!0,width:u,height:o}),p["-webkit-transform"]=p.transform);const x=ds(p);x.length>0&&(y.style=x);const C=[];return C.push({tag:"span",attributes:y,children:[s]}),h&&C.push({tag:"span",attributes:{class:"sr-only"},children:[h]}),C}function jv(l){const{content:s,title:u,extra:o}=l,f=B(B(B({},o.attributes),u?{title:u}:{}),{},{class:o.classes.join(" ")}),h=ds(o.styles);h.length>0&&(f.style=h);const b=[];return b.push({tag:"span",attributes:f,children:[s]}),u&&b.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),b}const{styles:Uu}=Vt;function nc(l){const s=l[0],u=l[1],[o]=l.slice(4);let f=null;return Array.isArray(o)?f={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Du.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Du.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Du.PRIMARY),fill:"currentColor",d:o[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:s,height:u,icon:f}}const Ev={found:!1,width:512,height:512};function Tv(l,s){!F1&&!Z.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(s,'" is missing.'))}function lc(l,s){let u=s;return s==="fa"&&Z.styleDefault!==null&&(s=Ja()),new Promise((o,f)=>{if(u==="fa"){const h=hp(l)||{};l=h.iconName||l,s=h.prefix||s}if(l&&s&&Uu[s]&&Uu[s][l]){const h=Uu[s][l];return o(nc(h))}Tv(l,s),o(B(B({},Ev),{},{icon:Z.showMissingIcons&&l?en("missingIconAbstract")||{}:{}}))})}const Zm=()=>{},ic=Z.measurePerformance&&Kr&&Kr.mark&&Kr.measure?Kr:{mark:Zm,measure:Zm},Ai='FA "6.7.2"',Ov=l=>(ic.mark("".concat(Ai," ").concat(l," begins")),()=>gp(l)),gp=l=>{ic.mark("".concat(Ai," ").concat(l," ends")),ic.measure("".concat(Ai," ").concat(l),"".concat(Ai," ").concat(l," begins"),"".concat(Ai," ").concat(l," ends"))};var kc={begin:Ov,end:gp};const ts=()=>{};function Km(l){return typeof(l.getAttribute?l.getAttribute(Nn):null)=="string"}function Cv(l){const s=l.getAttribute?l.getAttribute(Ac):null,u=l.getAttribute?l.getAttribute(Sc):null;return s&&u}function kv(l){return l&&l.classList&&l.classList.contains&&l.classList.contains(Z.replacementClass)}function Mv(){return Z.autoReplaceSvg===!0?as.replace:as[Z.autoReplaceSvg]||as.replace}function zv(l){return Ee.createElementNS("http://www.w3.org/2000/svg",l)}function Dv(l){return Ee.createElement(l)}function yp(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=l.tag==="svg"?zv:Dv}=s;if(typeof l=="string")return Ee.createTextNode(l);const o=u(l.tag);return Object.keys(l.attributes||[]).forEach(function(h){o.setAttribute(h,l.attributes[h])}),(l.children||[]).forEach(function(h){o.appendChild(yp(h,{ceFn:u}))}),o}function Lv(l){let s=" ".concat(l.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}const as={replace:function(l){const s=l[0];if(s.parentNode)if(l[1].forEach(u=>{s.parentNode.insertBefore(yp(u),s)}),s.getAttribute(Nn)===null&&Z.keepOriginalSource){let u=Ee.createComment(Lv(s));s.parentNode.replaceChild(u,s)}else s.remove()},nest:function(l){const s=l[0],u=l[1];if(~jc(s).indexOf(Z.replacementClass))return as.replace(l);const o=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const h=u[0].attributes.class.split(" ").reduce((b,g)=>(g===Z.replacementClass||g.match(o)?b.toSvg.push(g):b.toNode.push(g),b),{toNode:[],toSvg:[]});u[0].attributes.class=h.toSvg.join(" "),h.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",h.toNode.join(" "))}const f=u.map(h=>Di(h)).join(`
`);s.setAttribute(Nn,""),s.innerHTML=f}};function Pm(l){l()}function bp(l,s){const u=typeof s=="function"?s:ts;if(l.length===0)u();else{let o=Pm;Z.mutateApproach===Hb&&(o=Fa.requestAnimationFrame||Pm),o(()=>{const f=Mv(),h=kc.begin("mutate");l.map(f),h(),u()})}}let Mc=!1;function vp(){Mc=!0}function rc(){Mc=!1}let ss=null;function Fm(l){if(!Hm||!Z.observeMutations)return;const{treeCallback:s=ts,nodeCallback:u=ts,pseudoElementsCallback:o=ts,observeMutationsRoot:f=Ee}=l;ss=new Hm(h=>{if(Mc)return;const b=Ja();gl(h).forEach(g=>{if(g.type==="childList"&&g.addedNodes.length>0&&!Km(g.addedNodes[0])&&(Z.searchPseudoElements&&o(g.target),s(g.target)),g.type==="attributes"&&g.target.parentNode&&Z.searchPseudoElements&&o(g.target.parentNode),g.type==="attributes"&&Km(g.target)&&~$b.indexOf(g.attributeName))if(g.attributeName==="class"&&Cv(g.target)){const{prefix:y,iconName:p}=ms(jc(g.target));g.target.setAttribute(Ac,y||b),p&&g.target.setAttribute(Sc,p)}else kv(g.target)&&u(g.target)})}),wa&&ss.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Rv(){ss&&ss.disconnect()}function Uv(l){const s=l.getAttribute("style");let u=[];return s&&(u=s.split(";").reduce((o,f)=>{const h=f.split(":"),b=h[0],g=h.slice(1);return b&&g.length>0&&(o[b]=g.join(":").trim()),o},{})),u}function Hv(l){const s=l.getAttribute("data-prefix"),u=l.getAttribute("data-icon"),o=l.innerText!==void 0?l.innerText.trim():"";let f=ms(jc(l));return f.prefix||(f.prefix=Ja()),s&&u&&(f.prefix=s,f.iconName=u),f.iconName&&f.prefix||(f.prefix&&o.length>0&&(f.iconName=uv(f.prefix,l.innerText)||Oc(f.prefix,Ju(l.innerText))),!f.iconName&&Z.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function Bv(l){const s=gl(l.attributes).reduce((f,h)=>(f.name!=="class"&&f.name!=="style"&&(f[h.name]=h.value),f),{}),u=l.getAttribute("title"),o=l.getAttribute("data-fa-title-id");return Z.autoA11y&&(u?s["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(o||Ti()):(s["aria-hidden"]="true",s.focusable="false")),s}function qv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jm(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:o,rest:f}=Hv(l),h=Bv(l),b=tc("parseNodeAttributes",{},l);let g=s.styleParser?Uv(l):[];return B({iconName:u,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:o,transform:$t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:g,attributes:h}},b)}const{styles:Gv}=Vt;function xp(l){const s=Z.autoReplaceSvg==="nest"?Jm(l,{styleParser:!1}):Jm(l);return~s.extra.classes.indexOf(ep)?en("generateLayersText",l,s):en("generateSvgReplacementMutation",l,s)}function Xv(){return[..._b,...Iu]}function e1(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wa)return Promise.resolve();const u=Ee.documentElement.classList,o=x=>u.add("".concat(Gm,"-").concat(x)),f=x=>u.remove("".concat(Gm,"-").concat(x)),h=Z.autoFetchSvg?Xv():I1.concat(Object.keys(Gv));h.includes("fa")||h.push("fa");const b=[".".concat(ep,":not([").concat(Nn,"])")].concat(h.map(x=>".".concat(x,":not([").concat(Nn,"])"))).join(", ");if(b.length===0)return Promise.resolve();let g=[];try{g=gl(l.querySelectorAll(b))}catch{}if(g.length>0)o("pending"),f("complete");else return Promise.resolve();const y=kc.begin("onTree"),p=g.reduce((x,C)=>{try{const j=xp(C);j&&x.push(j)}catch(j){F1||j.name==="MissingIcon"&&console.error(j)}return x},[]);return new Promise((x,C)=>{Promise.all(p).then(j=>{bp(j,()=>{o("active"),o("complete"),f("pending"),typeof s=="function"&&s(),y(),x()})}).catch(j=>{y(),C(j)})})}function Yv(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xp(l).then(u=>{u&&bp([u],s)})}function $v(l){return function(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(s||{}).icon?s:ac(s||{});let{mask:f}=u;return f&&(f=(f||{}).icon?f:ac(f||{})),l(o,B(B({},u),{},{mask:f}))}}const Vv=function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=$t,symbol:o=!1,mask:f=null,maskId:h=null,title:b=null,titleId:g=null,classes:y=[],attributes:p={},styles:x={}}=s;if(!l)return;const{prefix:C,iconName:j,icon:E}=l;return ps(B({type:"icon"},l),()=>(jn("beforeDOMElementCreation",{iconDefinition:l,params:s}),Z.autoA11y&&(b?p["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(g||Ti()):(p["aria-hidden"]="true",p.focusable="false")),Cc({icons:{main:nc(E),mask:f?nc(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:j,transform:B(B({},$t),u),symbol:o,title:b,maskId:h,titleId:g,extra:{attributes:p,styles:x,classes:y}})))};var Wv={mixout(){return{icon:$v(Vv)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=e1,l.nodeCallback=Yv,l}}},provides(l){l.i2svg=function(s){const{node:u=Ee,callback:o=()=>{}}=s;return e1(u,o)},l.generateSvgReplacementMutation=function(s,u){const{iconName:o,title:f,titleId:h,prefix:b,transform:g,symbol:y,mask:p,maskId:x,extra:C}=u;return new Promise((j,E)=>{Promise.all([lc(o,b),p.iconName?lc(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[X,R]=k;j([s,Cc({icons:{main:X,mask:R},prefix:b,iconName:o,transform:g,symbol:y,maskId:x,title:f,titleId:h,extra:C,watchable:!0})])}).catch(E)})},l.generateAbstractIcon=function(s){let{children:u,attributes:o,main:f,transform:h,styles:b}=s;const g=ds(b);g.length>0&&(o.style=g);let y;return Ec(h)&&(y=en("generateAbstractTransformGrouping",{main:f,transform:h,containerWidth:f.width,iconWidth:f.width})),u.push(y||f.icon),{children:u,attributes:o}}}},Iv={mixout(){return{layer(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=s;return ps({type:"layer"},()=>{jn("beforeDOMElementCreation",{assembler:l,params:s});let o=[];return l(f=>{Array.isArray(f)?f.map(h=>{o=o.concat(h.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers"),...u].join(" ")},children:o}]})}}}},Qv={mixout(){return{counter(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:o=[],attributes:f={},styles:h={}}=s;return ps({type:"counter",content:l},()=>(jn("beforeDOMElementCreation",{content:l,params:s}),jv({content:l.toString(),title:u,extra:{attributes:f,styles:h,classes:["".concat(Z.cssPrefix,"-layers-counter"),...o]}})))}}}},Zv={mixout(){return{text(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=$t,title:o=null,classes:f=[],attributes:h={},styles:b={}}=s;return ps({type:"text",content:l},()=>(jn("beforeDOMElementCreation",{content:l,params:s}),Qm({content:l,transform:B(B({},$t),u),title:o,extra:{attributes:h,styles:b,classes:["".concat(Z.cssPrefix,"-layers-text"),...f]}})))}}},provides(l){l.generateLayersText=function(s,u){const{title:o,transform:f,extra:h}=u;let b=null,g=null;if(V1){const y=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();b=p.width/y,g=p.height/y}return Z.autoA11y&&!o&&(h.attributes["aria-hidden"]="true"),Promise.resolve([s,Qm({content:s.innerHTML,width:b,height:g,transform:f,title:o,extra:h,watchable:!0})])}}};const Kv=new RegExp('"',"ug"),t1=[1105920,1112319],a1=B(B(B(B({},{FontAwesome:{normal:"fas",400:"fas"}}),vb),Rb),Ob),sc=Object.keys(a1).reduce((l,s)=>(l[s.toLowerCase()]=a1[s],l),{}),Pv=Object.keys(sc).reduce((l,s)=>{const u=sc[s];return l[s]=u[900]||[...Object.entries(u)][0][1],l},{});function Fv(l){const s=l.replace(Kv,""),u=lv(s,0),o=u>=t1[0]&&u<=t1[1],f=s.length===2?s[0]===s[1]:!1;return{value:Ju(f?s[0]:s),isSecondary:o||f}}function Jv(l,s){const u=l.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(s),f=isNaN(o)?"normal":o;return(sc[u]||{})[f]||Pv[u]}function n1(l,s){const u="".concat(Ub).concat(s.replace(":","-"));return new Promise((o,f)=>{if(l.getAttribute(u)!==null)return o();const b=gl(l.children).filter(j=>j.getAttribute(Zu)===s)[0],g=Fa.getComputedStyle(l,s),y=g.getPropertyValue("font-family"),p=y.match(Xb),x=g.getPropertyValue("font-weight"),C=g.getPropertyValue("content");if(b&&!p)return l.removeChild(b),o();if(p&&C!=="none"&&C!==""){const j=g.getPropertyValue("content");let E=Jv(y,x);const{value:k,isSecondary:X}=Fv(j),R=p[0].startsWith("FontAwesome");let D=Oc(E,k),G=D;if(R){const q=cv(k);q.iconName&&q.prefix&&(D=q.iconName,E=q.prefix)}if(D&&!X&&(!b||b.getAttribute(Ac)!==E||b.getAttribute(Sc)!==G)){l.setAttribute(u,G),b&&l.removeChild(b);const q=qv(),{extra:te}=q;te.attributes[Zu]=s,lc(D,E).then($=>{const le=Cc(B(B({},q),{},{icons:{main:$,mask:mp()},prefix:E,iconName:G,extra:te,watchable:!0})),je=Ee.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?l.insertBefore(je,l.firstChild):l.appendChild(je),je.outerHTML=le.map(ve=>Di(ve)).join(`
`),l.removeAttribute(u),o()}).catch(f)}else o()}else o()})}function ex(l){return Promise.all([n1(l,"::before"),n1(l,"::after")])}function tx(l){return l.parentNode!==document.head&&!~Bb.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(Zu)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function l1(l){if(wa)return new Promise((s,u)=>{const o=gl(l.querySelectorAll("*")).filter(tx).map(ex),f=kc.begin("searchPseudoElements");vp(),Promise.all(o).then(()=>{f(),rc(),s()}).catch(()=>{f(),rc(),u()})})}var ax={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=l1,l}}},provides(l){l.pseudoElements2svg=function(s){const{node:u=Ee}=s;Z.searchPseudoElements&&l1(u)}}};let i1=!1;var nx={mixout(){return{dom:{unwatch(){vp(),i1=!0}}}},hooks(){return{bootstrap(){Fm(tc("mutationObserverCallbacks",{}))},noAuto(){Rv()},watch(l){const{observeMutationsRoot:s}=l;i1?rc():Fm(tc("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}};const r1=l=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((u,o)=>{const f=o.toLowerCase().split("-"),h=f[0];let b=f.slice(1).join("-");if(h&&b==="h")return u.flipX=!0,u;if(h&&b==="v")return u.flipY=!0,u;if(b=parseFloat(b),isNaN(b))return u;switch(h){case"grow":u.size=u.size+b;break;case"shrink":u.size=u.size-b;break;case"left":u.x=u.x-b;break;case"right":u.x=u.x+b;break;case"up":u.y=u.y-b;break;case"down":u.y=u.y+b;break;case"rotate":u.rotate=u.rotate+b;break}return u},s)};var lx={mixout(){return{parse:{transform:l=>r1(l)}}},hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-transform");return u&&(l.transform=r1(u)),l}}},provides(l){l.generateAbstractTransformGrouping=function(s){let{main:u,transform:o,containerWidth:f,iconWidth:h}=s;const b={transform:"translate(".concat(f/2," 256)")},g="translate(".concat(o.x*32,", ").concat(o.y*32,") "),y="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),p="rotate(".concat(o.rotate," 0 0)"),x={transform:"".concat(g," ").concat(y," ").concat(p)},C={transform:"translate(".concat(h/2*-1," -256)")},j={outer:b,inner:x,path:C};return{tag:"g",attributes:B({},j.outer),children:[{tag:"g",attributes:B({},j.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:B(B({},u.icon.attributes),j.path)}]}]}}}};const Hu={x:0,y:0,width:"100%",height:"100%"};function s1(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||s)&&(l.attributes.fill="black"),l}function ix(l){return l.tag==="g"?l.children:[l]}var rx={hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-mask"),o=u?ms(u.split(" ").map(f=>f.trim())):mp();return o.prefix||(o.prefix=Ja()),l.mask=o,l.maskId=s.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(s){let{children:u,attributes:o,main:f,mask:h,maskId:b,transform:g}=s;const{width:y,icon:p}=f,{width:x,icon:C}=h,j=Fb({transform:g,containerWidth:x,iconWidth:y}),E={tag:"rect",attributes:B(B({},Hu),{},{fill:"white"})},k=p.children?{children:p.children.map(s1)}:{},X={tag:"g",attributes:B({},j.inner),children:[s1(B({tag:p.tag,attributes:B(B({},p.attributes),j.path)},k))]},R={tag:"g",attributes:B({},j.outer),children:[X]},D="mask-".concat(b||Ti()),G="clip-".concat(b||Ti()),q={tag:"mask",attributes:B(B({},Hu),{},{id:D,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,R]},te={tag:"defs",children:[{tag:"clipPath",attributes:{id:G},children:ix(C)},q]};return u.push(te,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(G,")"),mask:"url(#".concat(D,")")},Hu)}),{children:u,attributes:o}}}},sx={provides(l){let s=!1;Fa.matchMedia&&(s=Fa.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const u=[],o={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:B(B({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const h=B(B({},f),{},{attributeName:"opacity"}),b={tag:"circle",attributes:B(B({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||b.children.push({tag:"animate",attributes:B(B({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},h),{},{values:"1;0;1;1;0;1;"})}),u.push(b),u.push({tag:"path",attributes:B(B({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:B(B({},h),{},{values:"1;0;0;0;0;1;"})}]}),s||u.push({tag:"path",attributes:B(B({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},h),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},ox={hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-symbol"),o=u===null?!1:u===""?!0:u;return l.symbol=o,l}}}},ux=[tv,Wv,Iv,Qv,Zv,ax,nx,lx,rx,sx,ox];vv(ux,{mixoutsTo:gt});gt.noAuto;gt.config;gt.library;gt.dom;const oc=gt.parse;gt.findIconDefinition;gt.toHtml;const cx=gt.icon;gt.layer;gt.text;gt.counter;var Bu={exports:{}},qu,o1;function fx(){if(o1)return qu;o1=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return qu=l,qu}var Gu,u1;function dx(){if(u1)return Gu;u1=1;var l=fx();function s(){}function u(){}return u.resetWarningCache=s,Gu=function(){function o(b,g,y,p,x,C){if(C!==l){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}o.isRequired=o;function f(){return o}var h={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:u,resetWarningCache:s};return h.PropTypes=h,h},Gu}var c1;function hx(){return c1||(c1=1,Bu.exports=dx()()),Bu.exports}var mx=hx();const fe=w1(mx);function f1(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function Yt(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?f1(Object(u),!0).forEach(function(o){fl(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):f1(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function os(l){"@babel/helpers - typeof";return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},os(l)}function fl(l,s,u){return s in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function px(l,s){if(l==null)return{};var u={},o=Object.keys(l),f,h;for(h=0;h<o.length;h++)f=o[h],!(s.indexOf(f)>=0)&&(u[f]=l[f]);return u}function gx(l,s){if(l==null)return{};var u=px(l,s),o,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(f=0;f<h.length;f++)o=h[f],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(u[o]=l[o])}return u}function uc(l){return yx(l)||bx(l)||vx(l)||xx()}function yx(l){if(Array.isArray(l))return cc(l)}function bx(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function vx(l,s){if(l){if(typeof l=="string")return cc(l,s);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return cc(l,s)}}function cc(l,s){(s==null||s>l.length)&&(s=l.length);for(var u=0,o=new Array(s);u<s;u++)o[u]=l[u];return o}function xx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wx(l){var s,u=l.beat,o=l.fade,f=l.beatFade,h=l.bounce,b=l.shake,g=l.flash,y=l.spin,p=l.spinPulse,x=l.spinReverse,C=l.pulse,j=l.fixedWidth,E=l.inverse,k=l.border,X=l.listItem,R=l.flip,D=l.size,G=l.rotation,q=l.pull,te=(s={"fa-beat":u,"fa-fade":o,"fa-beat-fade":f,"fa-bounce":h,"fa-shake":b,"fa-flash":g,"fa-spin":y,"fa-spin-reverse":x,"fa-spin-pulse":p,"fa-pulse":C,"fa-fw":j,"fa-inverse":E,"fa-border":k,"fa-li":X,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},fl(s,"fa-".concat(D),typeof D<"u"&&D!==null),fl(s,"fa-rotate-".concat(G),typeof G<"u"&&G!==null&&G!==0),fl(s,"fa-pull-".concat(q),typeof q<"u"&&q!==null),fl(s,"fa-swap-opacity",l.swapOpacity),s);return Object.keys(te).map(function($){return te[$]?$:null}).filter(function($){return $})}function _x(l){return l=l-0,l===l}function wp(l){return _x(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(s,u){return u?u.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var Ax=["style"];function Sx(l){return l.charAt(0).toUpperCase()+l.slice(1)}function Nx(l){return l.split(";").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,u){var o=u.indexOf(":"),f=wp(u.slice(0,o)),h=u.slice(o+1).trim();return f.startsWith("webkit")?s[Sx(f)]=h:s[f]=h,s},{})}function _p(l,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof s=="string")return s;var o=(s.children||[]).map(function(y){return _p(l,y)}),f=Object.keys(s.attributes||{}).reduce(function(y,p){var x=s.attributes[p];switch(p){case"class":y.attrs.className=x,delete s.attributes.class;break;case"style":y.attrs.style=Nx(x);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?y.attrs[p.toLowerCase()]=x:y.attrs[wp(p)]=x}return y},{attrs:{}}),h=u.style,b=h===void 0?{}:h,g=gx(u,Ax);return f.attrs.style=Yt(Yt({},f.attrs.style),b),l.apply(void 0,[s.tag,Yt(Yt({},f.attrs),g)].concat(uc(o)))}var Ap=!1;try{Ap=!0}catch{}function jx(){if(!Ap&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function d1(l){if(l&&os(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(oc.icon)return oc.icon(l);if(l===null)return null;if(l&&os(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function Xu(l,s){return Array.isArray(s)&&s.length>0||!Array.isArray(s)&&s?fl({},l,s):{}}var h1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ye=Ct.forwardRef(function(l,s){var u=Yt(Yt({},h1),l),o=u.icon,f=u.mask,h=u.symbol,b=u.className,g=u.title,y=u.titleId,p=u.maskId,x=d1(o),C=Xu("classes",[].concat(uc(wx(u)),uc((b||"").split(" ")))),j=Xu("transform",typeof u.transform=="string"?oc.transform(u.transform):u.transform),E=Xu("mask",d1(f)),k=cx(x,Yt(Yt(Yt(Yt({},C),j),E),{},{symbol:h,title:g,titleId:y,maskId:p}));if(!k)return jx("Could not find icon",x),null;var X=k.abstract,R={ref:s};return Object.keys(u).forEach(function(D){h1.hasOwnProperty(D)||(R[D]=u[D])}),Ex(X[0],R)});ye.displayName="FontAwesomeIcon";ye.propTypes={beat:fe.bool,border:fe.bool,beatFade:fe.bool,bounce:fe.bool,className:fe.string,fade:fe.bool,flash:fe.bool,mask:fe.oneOfType([fe.object,fe.array,fe.string]),maskId:fe.string,fixedWidth:fe.bool,inverse:fe.bool,flip:fe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:fe.oneOfType([fe.object,fe.array,fe.string]),listItem:fe.bool,pull:fe.oneOf(["right","left"]),pulse:fe.bool,rotation:fe.oneOf([0,90,180,270]),shake:fe.bool,size:fe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:fe.bool,spinPulse:fe.bool,spinReverse:fe.bool,symbol:fe.oneOfType([fe.bool,fe.string]),title:fe.string,titleId:fe.string,transform:fe.oneOfType([fe.string,fe.object]),swapOpacity:fe.bool};var Ex=_p.bind(null,Ct.createElement);const Tx="/assets/PNLPbook-B4el14X1.jpg",Ox="/assets/pnlpchinese-Ox1X-Lkj.jpg",Cx="/assets/pnlppolish-KBj1IJSv.jpg",kx="/assets/pnlpjapanese-D4fJSOFy.jpg",bi=[{id:1,src:Tx,alt:"PNLP Book Cover"},{id:2,src:kx,alt:"Japanese simplified translation"},{id:3,src:Ox,alt:"Chinese Complex Translation"},{id:4,src:Cx,alt:"Polish simplified translation"}];function Mx(){const[l,s]=O.useState(0);O.useEffect(()=>{let g;return g=setInterval(()=>{s(y=>y===bi.length-1?0:y+1)},5e3),()=>clearInterval(g)},[]);const u=()=>{s(g=>g===bi.length-1?0:g+1)},o=()=>{s(g=>g===0?bi.length-1:g-1)},f=g=>{s(g)},h=({href:g,children:y})=>c.jsx("a",{href:g,className:"font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline decoration-2",target:"_blank",rel:"noopener noreferrer",children:y}),b=[{name:"Google",logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",url:"https://www.google.com/",brandColor:"#4285F4"},{name:"Microsoft",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png?20210729021049",url:"https://www.microsoft.com/",brandColor:"#00A4EF"},{name:"Amazon",logo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",url:"https://www.amazon.com/",brandColor:"#FF9900"},{name:"Meta",logo:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",url:"https://about.meta.com/",brandColor:"#1877F2"},{name:"Walmart",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png",url:"https://www.walmart.com/",brandColor:"#0071CE"},{name:"Arm",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ARM_Logo.svg/920px-ARM_Logo.svg.png?20110319160354",url:"https://www.arm.com/",brandColor:"#0091BD"},{name:"KPMG",logo:"https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",url:"https://home.kpmg/",brandColor:"#00338D"},{name:"Medium",logo:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",url:"https://medium.com/",brandColor:"#00AB6C"},{name:"Spotify",logo:"https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",url:"https://www.spotify.com/",brandColor:"#1DB954"},{name:"Intel",logo:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",url:"https://www.intel.com/",brandColor:"#0071C5"},{name:"Oracle",logo:"https://cdn.worldvectorlogo.com/logos/oracle-logo-1.svg",url:"https://www.oracle.com/",brandColor:"#F80000"},{name:"American Express",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",url:"https://www.americanexpress.com/",brandColor:"#006FCF"},{name:"Jio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/768px-Reliance_Jio_Logo.svg.png",brandColor:"#003F7F"},{name:"Google AI",logo:"https://wp.logos-download.com/wp-content/uploads/2024/09/Google_AI_Logo.png?dl",url:"https://ai.google/",brandColor:"#4285F4"},{name:"Microsoft Research",logo:"https://www.auai.org/uai2012/MS.png",url:"https://www.microsoft.com/en-us/research/about-microsoft-research/",brandColor:"#1a0dab"},{name:"TRUST YOU",logo:"https://www.hospitalitytechhub.com/wp-content/uploads/2021/04/TrustYou.png",url:"https://www.hospitalitytechhub.com/partners/trustyou/",brandColor:"1a0dab"},{name:"MetaMetrics",logo:"https://metametricsinc.com/wp-content/uploads/2019/01/MetaMetrics_Logo_Horizontal-1-768x227.png",url:"https://metametricsinc.com/",brandColor:"#1a0dab"},{name:"Wingify",logo:"https://wingify.com/wp-content/themes/wingify/images/media-kit/color/wingify-logo-color.svg",url:"https://wingify.com/",brandColor:"#1a0dab"},{name:"Meta AI",logo:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",brandColor:"#1a0dab"},{name:"Paloalto",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/PaloAltoNetworks_2020_Logo.svg/768px-PaloAltoNetworks_2020_Logo.svg.png?20210503173224",url:"https://www.paloaltonetworks.com/company/brand",brandColor:"#1a0dab"}];return c.jsx("div",{className:"min-h-screen bg-gradient-to-br to-blue-50 from-slate-50",children:c.jsxs("div",{className:"max-w-5xl px-4 py-8 mx-auto sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"mb-12 text-center",children:[c.jsx("h1",{className:"mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl",children:"Practical Natural Language Processing"}),c.jsx("p",{className:"max-w-3xl mx-auto text-xl italic font-light text-gray-600",children:"A Comprehensive Guide to Building Real-World NLP Systems"})]}),c.jsxs("div",{className:"overflow-hidden bg-white shadow-xl rounded-2xl",children:[c.jsxs("div",{className:"lg:flex",children:[c.jsxs("div",{className:"p-8 bg-gradient-to-br from-gray-50 to-gray-100 lg:w-2/5 xl:w-1/3",children:[c.jsx("div",{className:"relative aspect-[3/4] max-w-sm mx-auto",children:c.jsxs("div",{className:"absolute inset-0 overflow-hidden bg-white rounded-lg shadow-lg",children:[bi.map((g,y)=>c.jsx("div",{className:`absolute inset-0 transition-all duration-500 ease-in-out transform ${y===l?"opacity-100 scale-100 z-10":"opacity-0 scale-95 z-0"}`,children:c.jsx("img",{src:g.src,alt:g.alt,className:"object-cover w-full h-full"})},g.id)),c.jsx("button",{onClick:o,className:"absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md left-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110","aria-label":"Previous slide",children:c.jsx(ye,{icon:rb,className:"text-sm"})}),c.jsx("button",{onClick:u,className:"absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md right-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110","aria-label":"Next slide",children:c.jsx(ye,{icon:sb,className:"text-sm"})}),c.jsx("div",{className:"absolute left-0 right-0 z-20 flex justify-center space-x-2 bottom-4",children:bi.map((g,y)=>c.jsx("button",{onClick:()=>f(y),className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${y===l?"bg-blue-600 scale-125":"bg-blue-300 hover:bg-blue-400"}`,"aria-label":`Go to slide ${y+1}`},y))})]})}),c.jsx("div",{className:"flex flex-col items-center mt-6 space-y-2",children:c.jsxs("div",{className:"flex flex-wrap justify-center gap-3",children:[c.jsx("a",{href:"https://www.linkedin.com/company/practical-nlp/",className:"text-[#0077B5] hover:text-[#005582] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(xc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://x.com/practicalnlproc",className:"text-black hover:text-gray-800 transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:c.jsx(G1,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://www.practicalnlp.ai/",className:"text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Gradient Advisors",children:c.jsx(wc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://github.com/practical-nlp",className:"text-[#333] hover:text-black transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:c.jsx(vc,{className:"w-6 h-6"})})]})})]}),c.jsx("div",{className:"p-8 lg:w-3/5 xl:w-2/3 lg:p-12",children:c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{children:c.jsxs("ul",{className:"list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2",children:[c.jsx("span",{className:"font-bold block mb-2",children:"The Book:"}),c.jsx("li",{children:"Brings a practical lens to building AI models & systems in startups and product teams as opposed to academia or research labs."}),c.jsx("li",{children:"Translated into multiple languages including English, Polish, Chinese, and Japanese."}),c.jsx("li",{children:"Cited 300+ times; starred 1350+ times on GitHub."}),c.jsx("li",{children:"Adopted by 50+ Universities worldwide as part of their AI curriculum."})]})}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("p",{className:"text-gray-700",children:[c.jsx("span",{className:"font-semibold text-gray-900",children:"Endorsed by the topmost AI leaders globally:"})," ",c.jsx(h,{href:"https://www.acmilab.org/people/zachary-lipton/",children:"Zachary Lipton"})," (Professor, CS, Carnegie Mellon University; Director, Amazon Science),"," ",c.jsx(h,{href:"https://ruder.io/",children:"Sebastian Ruder"})," (Lead, Multilingual Team, Cohere),"," ",c.jsx(h,{href:"http://marc.najork.org/",children:"Marc Najork"})," (Director, DeepMind),"," ",c.jsx(h,{href:"https://www.microsoft.com/en-us/research/people/monojitc/",children:"Monojit Choudhury"})," (Professor, MBZUAI; Ex Principal Scientist, Microsoft Research),"," ",c.jsx(h,{href:"https://www.linkedin.com/in/vinayakh/",children:"Vinayak Hegde"})," (CTO, Microsoft for Startups),"," ",c.jsx(h,{href:"https://mengtingwan.github.io/",children:"Mengting Wan"})," (Principal Scientist, Airbnb),"," ",c.jsx(h,{href:"https://www.linkedin.com/in/siddharth-sharma-31140210/",children:"Siddharth Sharma"})," (Lead Applied Scientist, Amazon),"," ",c.jsx(h,{href:"https://www.linkedin.com/in/e10is/",children:"Edouard Harris"})," (Co-founder @Gladstone AI, YC’18) ."]}),c.jsxs("p",{className:"text-gray-600",children:[c.jsx("span",{className:"font-medium",children:"Forward by"})," ",c.jsx(h,{href:"https://cseweb.ucsd.edu/~jmcauley/",children:"Julian McAuley"})]}),c.jsx("p",{className:"font-medium text-gray-600",children:"Published by O'Reilly Media, US in June, 2020"})]}),c.jsxs("div",{className:"flex flex-wrap justify-center gap-4 pt-4",children:[" ",c.jsxs("a",{title:"O'Reilly",target:"_blank",href:"https://www.oreilly.com/library/view/practical-natural-language/9781492054047/",className:"group inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ye,{icon:ub,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"O'Reilly"]}),c.jsxs("a",{title:"Amazon",target:"_blank",href:"https://www.amazon.in/Practical-Natural-Language-Processing-Gupta/dp/1492054054",className:"group inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ye,{icon:ob,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"Amazon"]})]})]})})]}),c.jsxs("div",{className:"p-8 border-t border-gray-100 bg-gradient-to-br from-gray-50 to-slate-100 lg:p-12",children:[c.jsx("h3",{className:"mb-8 text-2xl font-bold text-center text-gray-900",children:"Trusted by Professionals at Leading Companies"}),c.jsx("div",{className:"grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4",children:b.map((g,y)=>c.jsx("div",{className:"relative group",children:c.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"relative block overflow-hidden",children:c.jsx("div",{className:"flex items-center justify-center h-24 px-4 py-3 transition-all duration-300 bg-transparent rounded-xl group-hover:-translate-y-1",children:c.jsx("div",{className:"flex items-center justify-center",style:{width:"140px",height:"50px",position:"relative"},children:c.jsx("img",{src:g.logo,title:g.name,alt:`${g.name} logo`,style:{transition:"all 0.3s ease",backgroundColor:"transparent",maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",objectFit:"contain"},className:"transition-all duration-300 group-hover:scale-105"})})})})},y))}),c.jsx("div",{className:"mt-8 text-center",children:c.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Join thousands of professionals who trust our expertise"})})]}),c.jsx("div",{className:"border-t-2",children:c.jsxs("div",{className:"w-full p-6 border-l-4 border-indigo-600 rounded-lg shadow-sm bg-gradient-to-br from-gray-100 to-indigo-100",children:[c.jsx("h3",{className:"mb-3 text-xl font-semibold text-gray-900",children:"📘 Coming Soon"}),c.jsxs("p",{className:"mb-2 text-base text-gray-800",children:["I’m currently writing my second book titled"," ",c.jsx("strong",{className:"text-indigo-700",children:'"AI First by Design"'}),"."]}),c.jsx("p",{className:"mb-4 text-sm text-gray-700",children:"A practical guide to accelerating AI maturity and leading high-performance AI-driven initiatives and organizations."}),c.jsxs("a",{href:"https://github.com/Gradient-Advisors/AI-First-by-Design-Book",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ye,{icon:ib,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"View on GitHub"]}),c.jsx("p",{className:"mt-2 text-xs italic text-gray-500",children:"This book is open-source and freely available to everyone."})]})})]})]})})}function vi({title:l,date:s,excerpt:u,onClick:o}){return c.jsx("div",{className:"blog-post-card bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-4 sm:mb-6",onClick:o,children:c.jsxs("article",{className:"archive__item",itemScope:!0,itemType:"http://schema.org/CreativeWork",children:[c.jsxs("h2",{className:"archive__item-title text-lg sm:text-xl font-semibold text-gray-800 mb-2",itemProp:"headline",children:[c.jsx("a",{href:"#",rel:"",className:"no-underline hover:underline",children:l})," "]}),c.jsxs("p",{className:"page__date text-gray-500 text-xs sm:text-sm mb-2",children:[c.jsxs("strong",{children:[c.jsx("i",{className:"fa fa-fw fa-calendar mr-1","aria-hidden":"true"}),"Published:"]}),c.jsxs("time",{dateTime:"2199-01-01T00:00:00-08:00",children:[" ",s]})," "]}),c.jsxs("div",{className:"archive__item-excerpt text-sm sm:text-base text-gray-700 leading-relaxed overflow-hidden",itemProp:"description",children:[" ",u," "]})]})})}function zx({isOpen:l,onClose:s,blog:u,onNext:o,onPrevious:f,hasNext:h,hasPrevious:b}){return O.useEffect(()=>{const g=y=>{y.key==="Escape"&&s()};return l&&(document.addEventListener("keydown",g),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",g),document.body.style.overflow="unset"}},[l,s]),!l||!u?null:c.jsx("div",{className:"fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 backdrop-blur-sm transition-all duration-300 ease-out",onClick:s,children:c.jsxs("div",{className:`bg-white w-full h-full flex flex-col shadow-2xl transform transition-all duration-500 ease-out overflow-hidden ${l?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`,onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50 backdrop-blur-lg shadow-sm",children:[c.jsx("h2",{className:"text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-4 leading-tight",children:u.title}),c.jsx("button",{onClick:s,className:"text-gray-400 text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full transition-colors duration-200 leading-none flex-shrink-0","aria-label":"Close modal",style:{lineHeight:"1"},children:"×"})]}),c.jsx("div",{className:"flex-1 overflow-y-auto bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 scroll-smooth",children:c.jsxs("div",{className:"w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 transition-all duration-300",children:[c.jsx("div",{className:"mb-4 sm:mb-6 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 w-full",children:c.jsxs("p",{className:"text-gray-600 text-xs sm:text-sm flex items-center flex-wrap",children:[c.jsx("span",{className:"inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"}),c.jsxs("strong",{className:"mr-1",children:[c.jsx("i",{className:"fa fa-fw fa-calendar mr-1","aria-hidden":"true"}),"Published:"]}),c.jsx("time",{className:"font-medium",children:u.date})]})}),c.jsx("div",{className:"prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full prose-ol:list-decimal prose-ol:ml-6 prose-ol:pl-2 prose-li:mb-2 prose-li:text-gray-700",children:c.jsx("div",{dangerouslySetInnerHTML:{__html:u.content}})})]})}),c.jsxs("div",{className:"flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200",children:[c.jsx("button",{onClick:o,disabled:!h,className:`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${h?"bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,"aria-label":"Next blog",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),c.jsx("span",{className:"text-xs text-gray-500 font-medium",children:u.date}),c.jsx("button",{onClick:f,disabled:!b,className:`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${b?"bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,"aria-label":"Previous blog",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})})}var fc=function(){return(fc=Object.assign||function(l){for(var s,u=1,o=arguments.length;u<o;u++)for(var f in s=arguments[u])Object.prototype.hasOwnProperty.call(s,f)&&(l[f]=s[f]);return l}).apply(this,arguments)},xi,wi,dc=O.createContext(void 0),m1="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",p1="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",g1=function(C){var s=C.config,u=C.version,u=u===void 0?3:u,o=C.src,o=o===void 0?u===2?m1:p1:o,f=C.onStartup,h=C.onLoad,y=C.asyncLoad,b=y!==void 0&&y,g=C.onError,y=C.typesettingOptions,p=C.renderMode,p=p===void 0?"post":p,x=C.hideUntilTypeset,C=C.children,E=O.useContext(dc);if((E==null?void 0:E.version)!==void 0&&(E==null?void 0:E.version)!==u)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(u===2&&wi!==void 0||u===3&&xi!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var j=O.useRef(E),E=O.useRef((E==null?void 0:E.version)||null);if(E.current===null)E.current=u;else if(E.current!==u)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var k=o||(u===2?m1:p1);function X(R,D){s&&(window.MathJax=s);var G=document.createElement("script");G.type="text/javascript",G.src=k,G.async=b,G.addEventListener("load",function(){var q=window.MathJax;f&&f(q),R(q),h&&h()}),G.addEventListener("error",function(q){return D(q)}),document.getElementsByTagName("head")[0].appendChild(G)}return j.current===void 0&&(E={typesettingOptions:y,renderMode:p,hideUntilTypeset:x},u===2?xi===void 0&&(typeof window<"u"?(xi=new Promise(X)).catch(function(R){if(!g)throw Error("Failed to download MathJax version 2 from '".concat(k,"' due to: ").concat(JSON.stringify(R)));g(R)}):(xi=Promise.reject()).catch(function(R){})):wi===void 0&&(typeof window<"u"?(wi=new Promise(X)).catch(function(R){if(!g)throw Error("Failed to download MathJax version 3 from '".concat(k,"' due to: ").concat(R));g(R)}):(wi=Promise.reject()).catch(function(R){})),j.current=fc(fc({},E),u===2?{version:2,promise:xi}:{version:3,promise:wi})),Ct.createElement(dc.Provider,{value:j.current},C)},Pa=function(){return(Pa=Object.assign||function(l){for(var s,u=1,o=arguments.length;u<o;u++)for(var f in s=arguments[u])Object.prototype.hasOwnProperty.call(s,f)&&(l[f]=s[f]);return l}).apply(this,arguments)},Dx=function(l,s){var u={};for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&s.indexOf(f)<0&&(u[f]=l[f]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,f=Object.getOwnPropertySymbols(l);o<f.length;o++)s.indexOf(f[o])<0&&Object.prototype.propertyIsEnumerable.call(l,f[o])&&(u[f[o]]=l[f[o]]);return u},_i=function(l){return"Typesetting failed: ".concat(l.message!==void 0?l.message:JSON.stringify(l))},y1=function(l){function s(){var $;X==="every"&&G&&R==="post"&&E.current!==null&&(E.current.style.visibility=($=($=C.style)==null?void 0:$.visibility)!=null?$:"visible"),q.current||(X==="first"&&E.current!==null&&(E.current.style.visibility="visible"),f&&f(),q.current=!0),h&&h(),te.current=!1}var o=l.inline,u=o!==void 0&&o,o=l.hideUntilTypeset,f=l.onInitTypeset,h=l.onTypeset,b=l.text,g=l.dynamic,y=l.typesettingOptions,p=l.renderMode,x=l.children,C=Dx(l,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),j=O.useRef(""),E=O.useRef(null),k=O.useContext(dc),X=o??(k==null?void 0:k.hideUntilTypeset),R=p??(k==null?void 0:k.renderMode),D=y??(k==null?void 0:k.typesettingOptions),G=g!==!1&&(g||!1),q=O.useRef(!1),te=O.useRef(!1);return!te.current&&E.current!==null&&G&&X==="every"&&R==="post"&&(E.current.style.visibility="hidden"),(typeof window<"u"?O.useLayoutEffect:O.useEffect)(function(){if((G||!q.current)&&E.current!==null){if(!k)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(R==="pre"){if(!(typeof($=b)=="string"&&0<$.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(b,'"'));if(!y||!y.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(k.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}R!=="post"&&b===j.current||te.current||(te.current=!0,k.version===3?k.promise.then(function(le){var je;R==="pre"?(je=function(ve){j.current=b,le.startup.document.clear(),le.startup.document.updateDocument(),E.current!==null&&(E.current.innerHTML=ve.outerHTML),s()},y.fn.endsWith("Promise")?le.startup.promise.then(function(){return le[D.fn](b,Pa(Pa({},(D==null?void 0:D.options)||{}),{display:!u}))}).then(je).catch(function(ve){throw s(),Error(_i(ve))}):le.startup.promise.then(function(){var ve=le[D.fn](b,Pa(Pa({},(D==null?void 0:D.options)||{}),{display:!u}));je(ve)}).catch(function(ve){throw s(),Error(_i(ve))})):le.startup.promise.then(function(){return le.typesetClear([E.current]),le.typesetPromise([E.current])}).then(s).catch(function(ve){throw s(),Error(_i(ve))})}).catch(function(le){throw s(),Error(_i(le))}):k.promise.then(function(le){le.Hub.Queue(["Typeset",le.Hub,E.current]),le.Hub.Queue(s)}).catch(function(le){throw s(),Error(_i(le))}))}var $}),Ct.createElement("span",Pa({},C,{style:Pa(Pa({display:u?"inline":"block"},C.style),{visibility:X?"hidden":(l=C.style)==null?void 0:l.visibility}),ref:E}),x)};const b1={loader:{load:["[tex]/ams","[tex]/color"]},tex:{packages:{"[+]":["ams","color"]},inlineMath:[["\\(","\\)"],["$","$"]],displayMath:[["\\[","\\]"],["$$","$$"]],processEscapes:!0,processEnvironments:!0},options:{processHtmlClass:"tex2jax_process"}},Lx=({blog:l})=>(O.useRef(null),!l||!l.content?c.jsx("div",{className:"prose max-w-none",children:"No content available."}):Ct.isValidElement(l.content)?c.jsx(g1,{version:3,config:b1,children:c.jsx("div",{className:"prose max-w-none",children:c.jsx(y1,{hideUntilTypeset:"first",children:l.content})})}):c.jsx(g1,{version:3,config:b1,children:c.jsx("div",{className:"prose max-w-none",children:c.jsx(y1,{hideUntilTypeset:"first",children:c.jsx("div",{className:"tex2jax_process",dangerouslySetInnerHTML:{__html:l.content}})})})}));function Rx(){const[l,s]=O.useState(null),[u,o]=O.useState(!1),f=[{id:1,title:"Innovation in AI Teams",date:"Oct 22, 2021",excerpt:"Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary...",content:`
        <p>Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary.</p>
        <br>
        <p>If you are part of the research lab, this often means AI team works on fundamental problems and create fundamental & new techniques to power cutting-edge solutions. They publish a lot, advance the entire area in a fundamental way - this is their true north star. It goes without saying this means lot of publications, paper presentation, talks & tutorials at research conferences, very close collaboration with academia etc.</p>
        <br>
        <p>When it comes to AI teams working in the product settings, the innovation here is of very different type. And in this post and next I will try n focus on this facet. There are mainly 4 type of innovations that happen in such teams:</p>
        <br>
        <p><b>1. Finding newer uses cases and touch points in your product(s) where AI can deliver a completely new experience to the user : </b>This innovation often creates USP/key differentiator for the product compared to the competition in the respective segment. And if the feature is killer, it changes the user's behavior which in turn changes user expectation. And then the competition has no other option but to play the catch-up game. This creates a very strong moat. For example, YouTube uses AI to generate subtitles in multiple languages on the fly. They have fundamentally changed user expectations and other platforms have to have a similar feature.</p>
        <br>
        <p>This kind of innovation is often not as easy as it may sound. I have written about this in an earlier post (ref : Hobbiton - Uses cases where AI can deliver great returns). This requires first principle thinking. Product managers who can envision features in a completely new way using AI, very close collaboration between AI & product teams to understand what is possible what is not, a very good execution to deliver A-class experience (despite AI model will make mistakes).</p>
        <br>
        <p><b>2. Building the dataset for the problem at hand : </b>For AI teams embedded in product settings, building a comprehensive dataset for the problem at hand is often 80% of the battle. Building such a dataset is never writing a bunch of queries on a massive data store at your disposal. AI Teams often have to come up with very smart strategies, hacks to augment data to arrive at a comprehensive dataset. Also, this is not a one-time activity but often highly iterative. What more type of data is needed - comes from the kind of mistakes your models are making.</p>
        <br>
        <p>I will soon be writing a dedicated post on some of the best examples I have seen/heard on innovative ideas to collect data.</p>
        <br>
        <p><b>3. Publishing paper/patent (doesn't happen that often) : </b>AI teams embedded in product teams do write patents and papers - but this is seldom their true north star.</p>
        <br>
        <p>So what about coming up with newer techniques? Rarely AI teams embedded in product teams do this. Why? Because in most cases, known techniques with a comprehensive dataset with rigorous evaluation itself can take your AI solution very very far on business metrics. From there on it is mostly a game of diminishing returns. Read about "later part of S curve" in my earlier post on "<a href="https://www.linkedin.com/posts/activity-6842736295173775360-etDf/" target="_blank" rel="noopener noreferrer">ROI in AI</a>". This is not true only if AI is the backbone of your product and your core value proposition.</p>
        <br>
        <p>To read more on AI in industry vs Academia, please read my earlier post "<a href="https://www.linkedin.com/posts/activity-6836567604467970048-nQu8/" target="_blank" rel="noopener noreferrer">Why machine learning in the industry is different from that is academia</a>"</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `},{id:2,title:"ROI in AI - Expectations vs Reality",date:"Oct 03, 2021",excerpt:"A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the 'energy' to help you move to the next orbit, most teams falter big time...",content:`
        <p>A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the "energy" to help you move to the next orbit, most teams falter big time. While there are many reasons for this, one key reason is the ill-founded expectations by senior people (VPs, CXOs, business leaders etc) in the company. Today's post will explore this facet of AI - often the least spoken one.</p>
        <br>
        <p>Most leaders/companies start AI in their teams/product lines much later. Traditional corporate wisdom has always advocated "quick" wins because that is how one establishes themselves and gets the key stakeholders super excited. So they advocate the same in AI!</p>
        <br>
        <p>This is also driven by:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Articles on AI in popular media with lofty claims (remember the humanoid dancing in Tesla AI day or Sophia - not many people understand these are mere marketing and perception gimmicks)</li>
          <li style="display: list-item; margin-bottom: 10px;">The thought that AI at the end of the day is a code - so it cannot be very different from software engineering. The issues are mere initial hiccups which is always the case with any new tech, so is the case with AI</li>
        </ol>
        <br>
        <p>So most leaders expect the ROI curve in AI to be a vertical takeoff. This expectation is further fueled by the fact that AI doesn't come cheap - data, data engg & AI teams, talent cost, hardware cost, data collection & labeling cost and time etc, MLOps etc Read my previous write up titled the economics of AI</p>
        <br>
        <p>This is where most Orgs/Teams make THE mistake. The true ROI curve in AI is very very different from their expectations. As shown in the figure below, it follows a S shape curve.</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <img src="/images/ROI_blog.jpeg" alt="ROI S-Curve in AI" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto;" />
        </div>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Initial lower part of S: One needs to invest a lot of time and energy with very little ROI - finding the right use case, right quality and quantity of data and labels (more on this in another post), right modeling approach, right metrics etc. This can take anywhere between 1-3 years.</li>
          <li style="display: list-item; margin-bottom: 10px;">Middle part of S: This is where one gets the highest ROI per unit effort. This is because most of the hard work has been done in the first 1-3 years. All key stakeholders have a better understanding of the AI journey. This phase is all about building the 2nd/3rd version of AI systems</li>
          <li style="display: list-item; margin-bottom: 10px;">Later upper part of S: This is where the ROI again starts to stagnate. This phase is where your team is building the 6th/7th version of the system and trying to push systems performance to the upper 90s. This often requires completely new approaches, new algorithms. Its not just adding a couple of lines of code!</li>
        </ol>
        <br>
        <p>Another thing most folks don't necessarily understand is that each of the 3 different phases of the curve requires a very different strategy - type of goals, kind of skillsets, focus areas, etc</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `},{id:3,title:"Making AI Work For You",date:"Sep 18, 2021",excerpt:"I am often asked why AI is a hard technology (both in terms of time and money). There are multiple reasons for it...",content:`
        <p>I am often asked why AI is a hard technology? (both in terms of time and money). There are multiple reasons for it:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Finding the right use case: finding a problem that is important to its users and can be solved well by AI. I talked earlier on this here</li>
          <li style="display: list-item; margin-bottom: 10px;">Having the right data: most companies have tonnes of data but seldom have the data for the problem at hand. In AI its not just the quantity of data that matters but also the quality of data. Do you have the training data that resembles the production data very closely? Does it have enough data points that represent various outliers, mean data points, data points near the actual decision boundary etc</li>
          <li style="display: list-item; margin-bottom: 10px;">Labeling cost: If you need to get your data manually labeled, this will need lots of time and money. The process of labeling itself might not be straightforward. How do you benchmark the quality of labeling? If your labelers are making mistakes this can jeopardize the entire project.</li>
          <li style="display: list-item; margin-bottom: 10px;">Compute cost: the cost of the compute needed for training the model and for inference. This is especially crucial if your solution uses deep learning.</li>
          <li style="display: list-item; margin-bottom: 10px;">Going from a solution to the solution: In AI there is no one way to solve a problem. There are multiple ways and each will give you a different accuracy. Getting from the point where you have a model that gives you an acceptable performance to getting to a model that gives you fabulous performance is often a very long journey.</li>
          <li style="display: list-item; margin-bottom: 10px;">Fitting model into the product to get AI-driven feature: Its not just a simple API integration. One needs to figure out the best UX to serve the predictions, should this UX be intrusive or soft suggestions, UX should be able to gracefully handle the scenarios when the model makes mistakes, a mechanism to let the human take over when it is going all wrong for the end-user, instrumentation to collect data to continuously evaluate the performance of the model on prod data, instrumentation to collect data for future modeling efforts.</li>
          <li style="display: list-item; margin-bottom: 10px;">Need to retrain model: many times AI systems require one to retrain the model after every 15-30 days on the latest data.</li>
          <li style="display: list-item; margin-bottom: 10px;">Talent: DS/ML team alone cannot pull off all the above. You need good and diverse talent for this - ML/DS folks who can evaluate the various approaches depending on the situation and can take the most suitable one to build the right model (and not blindly apply DL), Data engineers to build data pipelines to collect all data, a product manager who can figure out right use case, build instrumentation, UX to handle mistakes, a AI leader who understands this entire life cycle and work very closely with business and speak their language. This talent doesn't come cheap.</li>
        </ol>
        <p>For AI effort to fail - going wrong on just one of the above is enough.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `},{id:4,title:"Why Machine Learning in Industry is different from that in Academia",date:"Sep 6, 2021",excerpt:"The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications...",content:`
        <p>The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications. Despite this there aren't a lot of successful AI systems around us.</p>
        <br>
        <p>The performance of a AI system stems from 2 key components:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Algorithmic technique used to build the model.</li>
          <li style="display: list-item; margin-bottom: 10px;">Dataset used to train the model. You change any one of them, the performance of the AI system will change.</li>
        </ol>
        <p>Academicians (owing to their bias & quest for fundamental advances) keep the dataset constant and vary the algorithm. This allows them to compare 2 AI algorithms and establish which one is better seamlessly. Further, in academia, the test set is usually a chunk of the dataset itself.</p>
        <br>
        <p>This approach doesn't work well in the industry. The industry works on the idea of Minimum Viable Product (MVP). The idea is never to build 'THE model' especially in the early days of an AI system. The idea is to build 'a model' that is good enough for various stakeholders to realize the value and deliver/estimate this value in the fastest possible manner. Further, the model should be able to do well on the production data and not on some benchmark dataset.</p>
        <br>
        <p>Also, note that the value is delivered by a system and not just the model. Model is just a small part of it. One needs to answer the following:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system solve an important problem? a problem users deeply care about</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the value proposition of AI system fit well within the larger Value proposition of the product?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system model and solve the problem (fairly) well? # of mistakes it makes? Is the cost of mistakes ok with your users or its catastrophic?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does one have the right type, quantity and quality of data to solve the problem at hand? If not, invest heavily in data collection and data plumbing first.</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the UI/UX deliver the predictions seamlessly and does it handle the mistakes gracefully? Does it allow the user to override a model especially when predictions are going wrong?</li>
          <li style="display: list-item; margin-bottom: 10px;">How well the system does on production data (which is often very different from training data) - drift in data, drift in labels, handle outliers etc</li>
          <li style="display: list-item; margin-bottom: 10px;">What is the cost of running an AI system? Cost of getting the data labeled continuously to benchmark systems performance?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the (medium-long term) returns from the AI system » overall investment in building and maintaining the AI system? [In short-medium most AI efforts are cost negative]</li>
        </ol>
        <p>The success of AI system depends on all the above. It is this that makes building AI systems in industry an 'Art' unlike the science of building 'models' in academia. In industry, the science of model building is necessary but not sufficient.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `},{id:5,title:"Hobbiton - Uses cases where AI can deliver great returns",date:"Aug 20, 2021",excerpt:"One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool...",content:`
        <p>One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool or a CXO in the company wants to start doing AI (mostly out of FOMO or ill-informed media articles with lofty claims). AI is just a tool to solve problems (though a powerful one), just like other problem-solving tools such as engineering, or operations. Today AI can solve some problems quickly & very well which was not possible until even a decade ago. But that doesn't mean AI is a sledgehammer for every difficult problem. Despite crazy advances in the last decade, AI is a very nascent, fragile and expensive technology and must be applied after due thought and not as a go-to approach for every problem in the world.</p>
        <br>
        <p>One of my favorite examples of this is Google's approach to "searching for special characters in Google Docs". Here is the problem statement: Most users who create docs or decks once in a while use special characters. But it is very hard to find the right special character when you need it. Given the large number of special characters that exist, one cannot show all of them to the user. To facilitate quick accessibility, one requires the ability to search for them. However, there is one particular problem with special characters - most users cannot remember them by name (try recalling names of 10 or more special characters yourself). This renders "textual search" useless. So, how does one solve this? Visual search!</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <a href="https://web.archive.org/web/20220401153355/https://anujgupta82.github.io/images/Google-Doc-Draw-Characters.gif" target="_blank" rel="noopener noreferrer">
            <img src="/images/Google-Doc-Draw-Characters.gif" alt="Google Docs Draw Characters Feature" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
          </a>
        </div>
        <br>
        <p>Google used a very simple but powerful observation - most users can very easily recall how the special character that they need looks like, unlike their name. So, they provided a small sketch pad for users to draw what they remember and use the concepts from computer vision (Sketch-RNN) to suggest a few closest options based on the visual match. The same concept was later used to power <a href="https://web.archive.org/web/20220326173444/https://experiments.withgoogle.com/autodraw" target="_blank" rel="noopener noreferrer" style="color: #3477ad;">Auto draw</a></p>
        <br>
        <p>I often use this example to drive home the point that one often needs to think from first principles when thinking of AI-powered use cases. For the above-mentioned example, the more you think the more you will realize:</p>
        <br>
        <ul style="list-style-type: disc; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">The problem could not have been solved by traditional engineering approaches.</li>
          <li style="display: list-item; margin-bottom: 10px;">It is a very well-defined narrow problem statement.</li>
          <li style="display: list-item; margin-bottom: 10px;">The core AI concept (Sketch-RNN) was just right to solve this problem statement well.</li>
          <li style="display: list-item; margin-bottom: 10px;">The solution (powered by AI in this case) really helped to solve the user's pain point and deliver happiness.</li>
        </ul>
        <p>Having said that - it is not that this application of AI changed the fate of google docs. More on changing the trajectory of products using AI in a separate post. Stay tuned!</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `},{id:6,title:"Learnings from AI Trenches",date:"Aug 8, 2021",excerpt:"A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams...",content:`
        <p>A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams.</p>
        <br>
        <p>Happy to share that over the next 1 year, I will try to put 1-2 posts every week sharing these insights. These will cover topics like ROI, how to do AI right, building and nurturing AI teams, why most AI projects fail, the right way to approach AI, when to apply AI, how AI is done in product teams, etc Follow <a href="#" style="color: #3477ad;">#Learnings_From_AI_Trenches</a> on LinkedIn. Stay tuned</p>
        <br>
        <p>If there is any topic you will like me to write about, pls comment in the post below. I will try and cover them as well. Let us make this super interactive.</p>
      `}],h=[{id:1,title:"Computing Gradients that go into training Neural Nets",date:"Aug 22, 2016",excerpt:"Training neural nets is all about computing gradients. In case you are new to this idea, refer to this awesome post by Andrej Karpathy. Briefly, deep down every ML problem is an optimization problem....",content:`
  <h2><strong>Introduction</strong></h2>
  <p>Training neural nets is all about <a href="http://deeplearning.stanford.edu/wiki/index.php/Deriving_gradients_using_the_backpropagation_idea" target="_blank" style="color: blue; text-decoration: underline;">computing gradients</a>. In case you are new to this idea, refer to this awesome <a href="http://karpathy.github.io/neuralnets/" target="_blank" style="color: blue; text-decoration: underline;">post</a> by Andrej Karpathy.</p>
  
  <p>Briefly, deep down every ML problem is an optimization problem. We want to "learn" (find) the weights which will result in least average loss. The way we do it is - start with arbitrary weights and keep adjusting them in small quantities until we get them right i.e. arrive at a set of values for which loss function has least value. Gradients tell us by how much should we adjust each of the weights. Not clear? Check this <a href="https://www.youtube.com/watch?v=yFPLyDwVifc" target="_blank" style="color: blue; text-decoration: underline;">video</a> by Andrew NG and this <a href="http://www.offconvex.org/2016/12/20/backprop/" target="_blank" style="color: blue; text-decoration: underline;">blog</a> by Sanjeev Arora.</p>

  <p>In this post we will focus on the maths that goes into computing these gradients - we will systematically derive gradients. The complexity of calculations depends on 3 things:</p>
  
  <ul>
    <li>1. Depth of the network</li>
    <li>2. Number of training examples (1 or more)</li>
    <li>3. Number of components in input (1=scalar, >1=vector)</li>
  </ul>
  
  <p>Through out this post we assume:</p>
  
  <ul>
    <li>1. No bias term.</li>
    <li>2. \\(\\cdot\\) is matrix multiplication, \\(*\\) is element wise product, \\(\\times\\) is scalar multiplication.</li>
    <li>3. All activations are <a href="https://www.quora.com/What-is-the-sigmoid-function-and-what-is-its-use-in-machine-learnings-neural-networks" target="_blank" style="color: blue; text-decoration: underline;">sigmoid a.k.a logistic</a>. It is defined as \\(f(u) = \\frac{1}{1 + e^{-u}}\\). If you plot it, it comes as:</li>
  </ul>

  <img src="/images/logistic.png" height="200" width="270" alt="Sigmoid function"/>
  <div class="thecap">Sigmoid function</div>
  
  <p>It is easy to see it is smooth and differentiable and bound between 0 and 1.</p>

  <p><strong>Derivative</strong></p>
  <p>The derivative of logistic function \\(\\sigma\\) is simply:</p>

  $$\\frac{d}{dx} \\sigma (x) = \\sigma (x) ( 1-\\sigma (x))$$

  <p>From where this comes? read on:</p>

  $$\\begin{align}
  \\frac{d}{dx} \\sigma(x) &= \\frac{d}{dx} \\left[ \\frac{1}{1+e^{-x}} \\right] \\\\
  &= \\frac{d}{dx} (1+e^{-x})^{-1} \\\\
  &= -(1+e^{-x})^{-2}(-e^{-x}) \\\\
  &= \\frac{e^{-x}}{(1+e^{-x})^2} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{e^{-x}}{(1+e^{-x})} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{(1 + e^{-x} -1)}{(1+e^{-x})} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\left( 1 - \\frac{1}{(1+e^{-x})} \\right) \\\\
  &= \\sigma(x)(1-\\sigma(x))
  \\end{align}$$

  <p>likewise,</p>

  $$\\frac{d}{dx}\\sigma(ax) = a(\\sigma(ax))(1-\\sigma(ax))$$

  <p>We will be using the above result a lot, so make sure you understand it. If it is not clear, have a look at this <a href="http://kawahara.ca/how-to-compute-the-derivative-of-a-sigmoid-function-fully-worked-example/" target="_blank" style="color: blue; text-decoration: underline;">post</a>.</p>

  <p>To compute the gradients, we will start with the simplest case and increase the complexity gradually. To keep things simple we will complete it in 7 parts</p>

  <ol start="1">
    <li><a href="https://github.com/anujgupta82/anujgupta82.github.io_old/blob/master/_posts/2016-08-26-gradients-1.markdown" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (scalar)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" style="color: blue; text-decoration: underline;">1 layer network, batch training (>1 training examples where each is a vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" style="color: blue; text-decoration: underline;">2 layer network with 1 node hidden layer, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network with 2 node hidden layer, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network, batch training (>1 training examples where each is a vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">Generalization and take home</a></li>
  </ol>

  <a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Next</a>
`},{id:2,title:"Gradients - Part 1",date:"Aug 26, 2016",excerpt:"Part 1 of computing gradients for training Neural Nets",content:`
      <h2><strong> 1 layer network, 1 training example (scalar)</strong></h2>
      <br>
      <p>Consider a simplest version of a neural net - 1 layer, 1 input node (scalar)</p>
      <img src="/images/NN_1_1.jpeg" height="200" width="270" alt="Neural Netwrok diagram"/>
      <p>simple neural net
Input is (x,y) : x, y both are scalars. (Later on every thing will be a matrix, so just to be using same notaion. We will abuse the notation to express scalars as matrix of dimension 1 (	imes) 1). Thus, in matrix form x,y are $$[X]{scriptscriptstyle 1	imes 1}$$ and $$[y]{scriptscriptstyle 1	imes 1}$$. Let W be weight matrix. In this case its 
[
W
]
1
×
1</p>

<p>Let ( hat{y} ) be the predicted output. Then, $$ hat{y} = sigma (Wx) = \frac{1}{1 + e^{-[X] . [W]}} label{ref0} 	ag{0}$$

Let loss be squared error loss. For ease of maths we take ( \frac{1}{2} ) of it. $$ L = \frac{1}{2} (y - hat{y})^{2} $$

Let's compute gradients, 
∇
W
L
=
∂
L
∂
W</p>
<br>
<p>$$
\begin{align}
\frac{partial L}{partial W} & = \frac{partial L}{partial hat{y}} 	imes \frac{partial hat{y}}{partial W} label{ref1} 	ag{1}\\
\frac{partial L}{partial hat{y}} &= \frac{1}{2} 	imes 2 	imes (y - hat{y})^{1} 	imes (-1) label{ref2} 	ag{2}\\
\frac{partial hat{y}}{partial W} &= \big{(} \frac{1}{1 + e^{-[X] . [W]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[X] . [W]}} \big{)} * X dots && 	ext{using [Eq C, Part-0]} label{ref3} 	ag{3}\\
& = sigma (Wx) 	imes (1- sigma (Wx)) * X dots && 	ext{using eqref{ref0}} \\
& = hat{y} 	imes (1 - hat{y}) * X dots && 	ext{using eqref{ref0}} label{ref33}\\
end{align}
$$</p><br>

<p>Substituting eqref{ref2} & eqref{ref3} in eqref{ref1}, we get</p>
<br>
<p>$$
\begin{align}
\frac{partial L}{partial W} &= \big{(} (-1) 	imes (y - hat{y}) \big{)} 	imes \big{(} hat{y} 	imes (1- hat{y}) 	imes x \big{)} \\
&= -(y - hat{y}) 	imes hat{y} 	imes (1- hat{y}) 	imes x \\
&= (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	imes x label{ref4} 	ag{4} \\
end{align}
$$</p><br>
<p>Let,

\begin{align} Delta l_{1} = (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) label{ref5} 	ag{5}  end{align}

Then, eq eqref{ref4} reduces to: $$ \begin{align} \frac{partial L}{partial W} &= Delta l_{1} 	imes x  & = Delta l_{1} * X  & = [X^{T}] . Delta l_{1} label{ref6} 	ag{6}  end{align} $$</p>
<a href="https://anujgupta82.github.io/2016/08/26/gradients-0/" class="btn btn-primary" style="color: blue;">Prev</a>
<a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Next</a>
      
      `},{id:3,title:"Gradients - Part 2",date:"Aug 28, 2016",excerpt:"Part 2 of computing gradients for training Neural Nets",content:`
      <h2><strong>1 layer network, 1 input (vector)</strong></h2>
      <br>
      <p>Our neural net still has 1 layer, but now the input is a vector.</P>
      <img src="assets/gradients/NN_2_2.jpeg" height="200" width="270" alt="Neural Netwrok diagram"/>
      <p>
Neural net with 1 layer, but input is vector</p>
<p>Input is ((\vec{X},y)) : (\vec{X}) is a vector, while y is a scalar.</p><br>
<p>(X = [x^1 ~~x^2 ~~x^3])       (x^i = i^{th}) component of (\vec{X}).</p><br>
<p>Thus, in matrix form x,y are $$[X]{scriptscriptstyle 1	imes 3}$$ and $$[y]{scriptscriptstyle 1	imes 1}$$. W, weight matrix is 
[
W
]
3
×
1

</p><br>
<p>W
=
[
w
1
w
2
w
3
]</p><br>

<p>Let ( hat{y} ) be predicted output. In matrix format, ([hat{y}]_{scriptscriptstyle 1	imes 1})</p><br>

<p>$$
\begin{align}
hat{y} & = sigma ([X] . [W]) label{ref101} 	ag{10.1} \\
& = \frac{1}{1 + e^{-[X] . [W]}} label{ref102} 	ag{10.2} \\
& = \frac{1}{1 + e^{-(x^1 w_1 + x^2 w_2 + x^3 w_3)}} label{ref103} 	ag{10.3} \\
end{align}
$$</p><br>

<p>Like before, we will use half of squared error loss. $$ L = \frac{1}{2} (y - hat{y})^{2} $$

Let's first compute gradients.<p><br>

<p>$$
\begin{equation}

abla_{W} L = \frac{partial L}{partial W} \\

abla_{W} L = \begin{bmatrix}
\frac{partial L}{partial w_{1}} \\
\frac{partial L}{partial w_{2}} \\
\frac{partial L}{partial w_{3}} \\
end{bmatrix}
label{ref11} 	ag{11}
end{equation}
$$</p><br>
<p>So, lets compute ( \frac{partial L}{partial w_{1}} )</p><br>

<p>$$
\begin{align}
\frac{partial L}{partial w_1} &= \frac{partial L}{partial hat{y}} * \frac{partial hat{y}}{partial w_1} label{ref12} 	ag{12} \\
\frac{partial L}{partial hat{y}} &= \frac{1}{2} 	imes 2 	imes (y - hat{y})^{1} 	imes (-1) label{ref13} 	ag{13} \\
\frac{partial hat{y}}{partial w_1} &= \big{(} \frac{1}{1 + e^{-[X] . [W]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[X] . [W]}} \big{)} 	imes x_1 dots & 	ext{using eqref{ref102} & eqref{ref103}} label{ref14} 	ag{14}\\
& = sigma ([X] . [W]) 	imes (1- sigma ([X] . [W])) * x_1 dots & 	ext{using eqref{ref101}} & label{ref15} 	ag{15}\\
& = hat{y} 	imes (1- hat{y}) 	imes x_1 dots & 	ext{using eqref{ref101}} & label{ref16} 	ag{16}\\
end{align}
$$</p><br>

<p>Substituting eqref{ref13} & eqref{ref16} in eqref{ref12}, we get

∂
L
∂
w
1
=
(
(
−
1
)
×
(
y
−
y
^
)
)
×
(
y
^
×
(
1
−
y
^
)
×
x
1
)
=
−
(
y
−
y
^
)
×
y
^
×
(
1
−
y
^
)
×
x
1
=
(
y
^
−
y
)
×
y
^
×
(
1
−
y
^
)
×
x
1

Thus, in general: $$ \begin{align} \frac{partial L}{partial w_i} &= (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	imes x_i label{ref17} 	ag{17} end{align} $$

Using eqref{ref17} in eqref{ref11}</p><br>

<p>
$$
\begin{equation}
\frac{partial L}{partial W} = \begin{bmatrix}
(hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	imes x_1 \\
(hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	imes x_2 \\
(hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	imes x_3 \\
end{bmatrix}
label{ref18} 	ag{18}
end{equation}
$$</p><br><br>

<p>$$
\begin{equation}
= \begin{bmatrix}
x^1 \\
x^2 \\
x^3 \\
end{bmatrix}
* [(hat{y} - y) 	imes hat{y} 	imes (1- hat{y})]
label{ref19} 	ag{19}
end{equation}
$$</p>

<p>Let,

\begin{align} Delta l_{1} = (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) label{ref20} 	ag{20}  end{align}

Using eqref{ref20} in eqref{ref19}

∂
L
∂
W
=
[
X
T
]
.
Δ
l
1</p>

<a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Prev</a>
<a href="https://anujgupta82.github.io/2016/08/26/gradients-3/" class="btn btn-primary" style="color: blue;">Next</a>

      `},{id:4,title:"Gradients - Part 3",date:"Aug 30, 2016",excerpt:"Part 3 of computing gradients for training Neural Nets",content:`
      <h2><strong>1 layer network, multiple training examples (each example is a vector)</strong></h2>
      <p>Multiple training examples correspond to the scenario of batch training. Each input is still a vector. Our neural net still has 1 layer. For simplicity, assume we have 4 examples, each having 3 components.</p>

      <img src="assets/gradients/NN_2_2.jpeg" height="200" width="270" alt="Neural Netwrok diagram"/><br>

      <h3><strong>Weights</strong></h3>
    <p>W, weight matrix is 
[
W
]
3
×
1</p>
<p>W
=
[
w
1
w
2
w
3
]</p>

    <h3><strong>Inputs and Outputs</strong></h3>
    <p>
      Input X now is a matrix ( [X]{scriptscriptstyle 4 	imes 3} ). (X_i) is the (i^{th}) sample. So, we now have 4 examples (X_1 ldots X_4) , each of which is vector with 3 components. (x_{i}^{j}) is (j^{th}) component of (X_i) sample. So
    </p>
    <p>X
=
[
x
1
1
x
1
2
x
1
3
x
2
1
x
2
2
x
2
3
x
3
1
x
3
2
x
3
3
x
4
1
x
4
2
x
4
3
]</p><br>


    <p>(\vec{y}) is a vector.</p>
    <p>y
=
[
y
1
y
2
y
3
y
4
]</p>
<p>(y_i) = True label for (i^{th}) example.

Likewise, (\vec{hat{y}}) is a vector where

(hat{y}_i) = predicted label for (i^{th}) example. Value of (hat{y}_i) is computed using eqref{ref10}:

$$ hat{y}i = \frac{1}{1+e^{-(x{i}^{1} 	imes w_1 + x_{i}^{2} 	imes w_2 + x_{i}^{3} 	imes w_3)}} label{ref10} 	ag{0} $$</p>

    <h3><strong>Loss</strong></h3>
    <p>Like before, we will use half of squared error loss but in this case it is the total gap in all 4 predictions. Therefore,

</p>
    <p>
      L
=
∑
i
=
1
4
1
2
(
y
i
−
y
^
i
)
2
    </p><br>

    <h3><strong>Gradient</strong></h3>
    <p>Let's compute gradients.</p>
    <p>
      (1)
∇
W
L
=
∂
L
∂
W
∇
W
L
=
[
∂
L
∂
w
1
∂
L
∂
w
2
∂
L
∂
w
3
]
    </p>

    <p>First, lets compute only ( \frac{partial L}{partial w_{1}} )</p>

    <p>$$ \begin{align} \frac{partial L}{partial w_1} &= \frac{partial (sumlimits_{i=1}^{4} \frac{1}{2} (y_i - hat{y}i)^{2})}{partial w_1}  & = sumlimits{i=1}^{4} \frac{partial (\frac{1}{2} (y_i - hat{y}i)^{2})}{partial w_1}  & = sumlimits{i=1}^{4} \frac{partial (\frac{1}{2} (y_i - hat{y}_i)^{2})}{partial hat{y}_i} 	imes \frac{partial hat{y}_i}{w_1} label{ref12} 	ag{2} end{align} $$</p><br>
    <p>
      (3)
∂
(
1
2
(
y
i
−
y
^
i
)
2
)
∂
y
^
i
=
(
−
1
)
×
(
y
i
−
y
^
i
)
    </p><br>
    

    <p>$$ \begin{align} \frac{partial hat{y}i}{w_1} &= sigma(x{i}^{1} 	imes w_1 + x_{i}^{2} 	imes w_2 + x_{i}^{3} 	imes w_3)(1 - sigma(x_{i}^{1} 	imes w_1 + x_{i}^{2} 	imes w_2 + x_{i}^{3} 	imes w_3)) 	imes x_{i}^{1}  & = sigma( X_i . [W])(1 - sigma( X_i . [W])) 	imes x_{i}^{1} label{ref14} 	ag{4} end{align} $$
    Using eqref{ref13} and eqref{ref14} in eqref{ref12}, we get:

$$ \begin{align} \frac{partial L}{partial w_1} = sumlimits_{i=1}^{4} -(y_i - hat{y}i) * [sigma( X_i . [W])(1 - sigma( X_i . [W])) 	imes x{i}^{1}] label{ref15} 	ag{5} end{align} $$

$$ \frac{partial L}{partial w_1} = -(y_1 - hat{y}1) * [sigma( X_1 . [W])(1 - sigma( X_1 . [W])) 	imes x{1}^{1}] + </p><br>
    <p>
      ~~~~~~~~~~~~			-(y_3 - hat{y}_3) * [sigma( X_3 . [W])(1 - sigma(X_3 . [W])) 	imes x_{3}^{1}] + \\
~~~~~~~~~~			-(y_4 - hat{y}_4) * [sigma( X_4 . [W])(1 - sigma(X_4 . [W])) 	imes x_{4}^{1}] \\
$$

$$
\frac{partial L}{partial w_1}  = (hat{y}_1 - y_1) * [sigma( X_1 . [W])(1 - sigma( X_1 . [W])) 	imes x_{1}^{1}] + \\
~~~~~~~~~~~~        (hat{y}_2 - y_2) * [sigma( X_2 . [W])(1 - sigma(X_2 . [W])) 	imes x_{2}^{1}] + \\
~~~~~~~~~~~~            (hat{y}_3 - y_3) * [sigma( X_3 . [W])(1 - sigma(X_3 . [W])) 	imes x_{3}^{1}] + \\
~~~~~~~~~~          (hat{y}_4 - y_4) * [sigma( X_4 . [W])(1 - sigma(X_4 . [W])) 	imes x_{4}^{1}] \\
label{ref16} 	ag{6}\\
$$

Let, 
$$
 Delta l_{1}^{i} = ((hat{y}_i - y_i) *  [sigma( X_i . [W])(1 - sigma( X_i . [W]))] ~~~~~~qquad\forall i in (1,4) label{ref17} 	ag{7}\\
$$

Using eqref{ref17} in eqref{ref16}, we get:  
$$
\begin{align}
\frac{partial L}{partial w_1} =  Delta l_{1}^{1} 	imes x_{1}^{1} + Delta l_{1}^{2} 	imes x_{2}^{1} + Delta l_{1}^{3} 	imes x_{3}^{1} + Delta l_{1}^{4} 	imes x_{4}^{1} label{ref18} 	ag{8}\\
end{align}
$$

Likewise, we get:

$$
\begin{align}
\frac{partial L}{partial w_2} &= Delta l_{1}^{1} 	imes x_{1}^{2} + Delta l_{1}^{2} 	imes x_{2}^{2} + Delta l_{1}^{3} 	imes x_{3}^{2} + Delta l_{1}^{4} 	imes x_{4}^{2} label{ref19} 	ag{9}\\
end{align}
$$

$$
\begin{align}
\frac{partial L}{partial w_3} &= Delta l_{1}^{1} 	imes x_{1}^{3} + Delta l_{1}^{2} 	imes x_{2}^{3} + Delta l_{1}^{3} 	imes x_{3}^{3} + Delta l_{1}^{4} 	imes x_{4}^{3} label{ref20} 	ag{10}\\
end{align}
$$

Using eqref{ref18}, eqref{ref19} and eqref{ref20} in eqref{ref11}, we get: 

$$
\begin{equation}
\frac{partial L}{partial W} = \begin{bmatrix}
     Delta l_{1}^{1} 	imes x_{1}^{1} + Delta l_{1}^{2} 	imes x_{2}^{1} + Delta l_{1}^{3} 	imes x_{3}^{1} + Delta l_{1}^{4} 	imes x_{4}^{1} \\
     Delta l_{1}^{1} 	imes x_{1}^{2} + Delta l_{1}^{2} 	imes x_{2}^{2} + Delta l_{1}^{3} 	imes x_{3}^{2} + Delta l_{1}^{4} 	imes x_{4}^{2} \\
     Delta l_{1}^{1} 	imes x_{1}^{3} + Delta l_{1}^{2} 	imes x_{2}^{3} + Delta l_{1}^{3} 	imes x_{3}^{3} + Delta l_{1}^{4} 	imes x_{4}^{3} \\
     end{bmatrix}
label{ref21} 	ag{11}
end{equation} 
$$

Simplifying: 

$$
\frac{partial L}{partial W} = \begin{bmatrix} x_{1}^{1} & x_{2}^{1} & x_{3}^{1} & x_{4}^{1} \\ x_{1}^{2} & x_{2}^{2} & x_{3}^{2} & x_{4}^{2} \\ x_{1}^{3} & x_{2}^{3} & x_{3}^{3} & x_{4}^{3} end{bmatrix} . left[ \begin{array}{c} Delta l_{1}^{1} \\Delta l_{1}^{2} \\Delta l_{1}^{3} \\Delta l_{1}^{4} end{array} \right] 
$$

$$
\frac{partial L}{partial W} = \begin{bmatrix} x_{1}^{1} & x_{2}^{1} & x_{3}^{1} & x_{4}^{1} \\ x_{1}^{2} & x_{2}^{2} & x_{3}^{2} & x_{4}^{2} \\ x_{1}^{3} & x_{2}^{3} & x_{3}^{3} & x_{4}^{3} end{bmatrix} . left[ \begin{array}{c} Delta l_{1}  end{array} \right] 
$$

$$ 
\begin{align}
\frac{partial L}{partial W} &= [X^{T}] . Delta l_{1} \\
end{align}
$$
    
    </p>

    <br/>
    <p>In the <a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" target="_blank" style="color: blue;">next post</a> we’ll explore gradients for networks with hidden layers.</p>

    <p>
      <a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" target="_blank" style="color: blue;">Prev</a> |
      <a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" target="_blank" style="color: blue;">Next</a>
    </p>
      `},{id:5,title:"Gradients - Part 4a",date:"Sep 9, 2016",excerpt:"Part 4 of computing gradients for training Neural Nets",content:`

      <h2><strong>2 layer network, single training example (vector)</strong></h2>
      <p>In this post we will consider 2 type of networks. In first network, hidden layer has only 1 node while in <a href="https://anujgupta82.github.io/pages/blog-post" target="_blank" style="color: blue; text-decoration: underline;">Second network</a>, hidden layer has more than 1 node. Lets start with the case of hidden layer with only 1 node. This part is bit lengthy, but fundamentally not very different from earlier parts. Keep calm and read on :-)</p><br>

      <h2><strong>1 hidden layer with 1 node</strong></h2>
      <img src="assets/gradeints/NN_4_1.jpeg" height="200" width="270" alt="Neural Netwrok"/>
      <p>Neural net with 2 layer, 1 node in hidden layer. Input is a vector
First layer ((l_1)) has weight matrix $$[W_1]{scriptscriptstyle 3 	imes 1}$$ $$ \begin{equation} W_1=\begin{bmatrix} w{1}^{1}  w_{1}^{2}  w_{1}^{3}  end{bmatrix} end{equation} $$</p><br>
<p>Second layer ((l_2)) has weight matrix 
[
W
2
]
1
×
1
 which is a scalar</p>
 <p>W
2
=
[
w
2
]</p>
<h3><strong>Input & Output definitions</strong></h3>
<p>Input is ((\vec{X},y)) : (\vec{X}) is a vector, while y is a scalar.

(X = [x^1 ~~x^2 ~~x^3])       (x^i = i^{th}) component of (\vec{X}).

Thus, in matrix form x,y are $$[X]{scriptscriptstyle 1	imes 3}$$ and $$[y]{scriptscriptstyle 1	imes 1}$$.

Let ( l_1 ) be output of layer 1. In matrix format, ([l_1]_{scriptscriptstyle 1	imes 1})</p><br>

<p>(1.1)
l
1
=
σ
(
[
X
]
.
[
W
1
]
)
(1.2)
=
1
1
+
e
−
[
X
]
.
[
W
1
]
(1.3)
=
1
1
+
e
−
(
x
1
×
w
1
1
+
x
2
×
w
1
2
+
x
3
×
w
1
3
)</p><br>
<p>( hat{y} ) is predicted output. In matrix format, ([hat{y}]_{scriptscriptstyle 1	imes 1})</p>
<p>(2.1)
y
^
=
σ
(
[
l
1
]
.
[
W
2
]
)
(2.2)
=
1
1
+
e
−
[
l
1
]
.
[
W
2
]
(2.3)
=
1
1
+
e
−
(
l
1
w
2
)</p>

<h3><strong>Loss</h3></strong>
<p>Like before, we will use half of squared error loss. $$ L = \frac{1}{2} (y - hat{y})^{2} $$</p>
<h3><strong>Gradients</h3></strong>

<p>There are 2 set of gradients: (
abla_{W_1} L) and (
abla_{W_2} L). Let us first compute (
abla_{W_2} L)

([
abla_{W_2} L]_{scriptscriptstyle 1	imes 1})</p><br>

<p>(3)
∂
L
∂
W
2
=
∂
L
∂
y
^
×
∂
y
^
∂
W
2
(4)
∂
L
∂
y
^
=
1
2
×
2
×
(
y
−
y
^
)
1
×
(
−
1
)
∂
y
^
∂
W
2
=
(
1
1
+
e
−
[
l
1
]
.
[
W
2
]
)
×
(
1
−
1
1
+
e
−
[
l
1
]
.
[
W
2
]
)
∗
l
1
(5)
=
σ
(
[
l
1
]
.
[
W
2
]
)
×
(
1
−
σ
(
[
l
1
]
.
[
W
2
]
)
)
∗
l
1
…
using 
(2.1)
(6)
=
y
^
×
(
1
−
y
^
)
∗
l
1</p>
<p>(3)
∂
L
∂
W
2
=
∂
L
∂
y
^
×
∂
y
^
∂
W
2
(4)
∂
L
∂
y
^
=
1
2
×
2
×
(
y
−
y
^
)
1
×
(
−
1
)
∂
y
^
∂
W
2
=
(
1
1
+
e
−
[
l
1
]
.
[
W
2
]
)
×
(
1
−
1
1
+
e
−
[
l
1
]
.
[
W
2
]
)
∗
l
1
(5)
=
σ
(
[
l
1
]
.
[
W
2
]
)
×
(
1
−
σ
(
[
l
1
]
.
[
W
2
]
)
)
∗
l
1
…
using 
(2.1)
(6)
=
y
^
×
(
1
−
y
^
)
∗
l
1
…
using 
(2.1)

Substituting eqref{ref13} & eqref{ref15} in eqref{ref12}, we get</p><br>
<p>∂
L
∂
W
2
=
(
(
−
1
)
×
(
y
−
y
^
)
)
×
(
y
^
×
(
1
−
y
^
)
×
l
1
)
=
(
−
(
y
−
y
^
)
)
×
(
y
^
×
(
1
−
y
^
)
×
l
1
)
(7)
=
(
y
^
−
y
)
×
y
^
×
(
1
−
y
^
)
×
l
1</p><br>
<p>Let,<p>>br>

<p>\begin{align} Delta l_{2} = (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) label{ref17} 	ag{8}  end{align}</p>

<p>Then, using eq eqref{ref17}, eq eqref{ref16} reduces to:</p>
<p>$$ \begin{align} \frac{partial L}{partial W_2} &= Delta l_{2} 	imes l_1  & = Delta l_{2} * l_1  & = [l_1]^intercal . Delta l_{2} label{ref18} 	ag{9}  end{align} $$</p>

<p>([
abla_{W_1} L]_{scriptscriptstyle 3	imes 1})</p>

<p>Now let us compute (
abla_{W_1} L)</p><br>
<p>(10)
∇
W
1
L
=
∂
L
∂
W
1
∇
W
1
L
=
[
∂
L
∂
w
1
1
∂
L
∂
w
1
2
∂
L
∂
w
1
3
]</p>
<p>First, lets compute only ( \frac{partial L}{partial w_{1}^{1}} )</p>

<p>$$ \begin{align} \frac{partial L}{partial w_{1}^{1}} & = \frac{partial L}{partial hat{y}} 	imes \frac{partial hat{y}}{partial l_1} 	imes \frac{partial l_1}{partial w_1^1} label{ref21} 	ag{11} \frac{partial L}{partial hat{y}} &= \frac{1}{2} 	imes 2 	imes (y - hat{y})^{1} 	imes (-1) label{ref22} 	ag{12}</p>

<p>\frac{partial hat{y}}{partial l_1} &= \big{(} \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} * w_2  & = sigma ([l_1] . [W_2]) 	imes (1- sigma ([l_1] . [W_2])) * w_2 dots && 	ext{using eqref{ref11}} label{ref23} 	ag{13} & = hat{y} 	imes (1- hat{y}) * w_2 dots && 	ext{using eqref{ref11}} label{ref24} 	ag{14}</p>

<p>\frac{partial l_1}{partial w_1^1} &= \big{(} \frac{1}{1 + e^{-[X] . [W_1]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[X] . [W_1]}} \big{)} * x^1 label{ref25} 	ag{15} & = l_1 	imes (1- l_1) * x^1 dots && 	ext{using eqref{ref11}} label{ref26} 	ag{16}</p>

<p>end{align} $$</p>

<p>Combining, eq eqref{ref22}, eqref{ref24} and eqref{ref26}:</p>

<p>$$ \begin{align} \frac{partial L}{partial w_{1}^{1}} & = \big(-(y - hat{y}) \big) 	imes \big( hat{y} 	imes (1- hat{y}) * w_2 \big) 	imes \big( l_1 	imes (1- l_1) * x^1 \big)  & = \big((hat{y} - y)hat{y}(1- hat{y}) * w_2 \big) 	imes \big( l_1 	imes (1- l_1) * x^1 \big) </p>

<p>& = \big(Delta l_{2} 	imes w_2 	imes l_1 	imes (1- l_1) \big) 	imes x^1 dots && 	ext{using eqref{ref17}} label{ref27} 	ag{17}</p>

<p>end{align} $$</p><br>

<p>Let,</p>

<p>\begin{align} Delta l_{1} = Delta l_{2} 	imes w_2 	imes l_1 	imes (1- l_1) label{ref28} 	ag{18}  end{align}</p>

<p>Then, eq eqref{ref27} reduces to :</p>

<p>(19)
∂
L
∂
w
1
1
=
Δ
l
1
×
x
1</p>
<p>Likewise, $$ \begin{align} \frac{partial L}{partial w_{1}^{2}} & = Delta l_{1} 	imes x^2 label{ref30} 	ag{20}  \frac{partial L}{partial w_{1}^{3}} & = Delta l_{1} 	imes x^3 label{ref31} 	ag{21}  end{align} $$</p>

<p>Using eq eqref{ref29}, eqref{ref30} and eqref{ref31} in eqref{ref20}</p>
<p>(22)
∇
W
1
L
=
[
Δ
l
1
×
x
1
Δ
l
1
×
x
2
Δ
l
1
×
x
3
]</p>
<p>$$ \frac{partial L}{partial W_1} = left[ \begin{array}{c} x^1  x^2  x^3 end{array} \right]{scriptscriptstyle 3 	imes 1}. left[ Delta l{1} \right]_{scriptscriptstyle 1 	imes 1} $$</p>

<p>∂
L
∂
W
1
=
[
X
]
⊺
.
Δ
l
1</p><br>
<p>In the <a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" target="_blank" style="color: blue;">next post</a> we’ll explore gradients for networks with hidden layers.</p>

    <p>
      <a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" target="_blank" style="color: blue;">Prev</a> |
      <a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" target="_blank" style="color: blue;">Next</a>
    </p>
      `},{id:6,title:"Gradients - Part 4b",date:"Sep 11, 2016",excerpt:"Part 4 of computing gradients for training Neural Nets",content:`
      <h2><strong>2 layer network, single training example (vector)</strong><h2>
      <p>This is in continuation of <a href="https://anujgupta82.github.io/pages/blog-post" target="_blank" style="color: blue; text-decoration: underline;">last post</a> where we derived gradients for 2 layer network where hidden layer has only 1 node.</p>

      <h3><strong>1 hidden layer with (geq) 2 nodes</strong></h3>
      <p>We will derive gradients for hidden layer with 2 nodes. 3 or more nodes is a straight forward extension.</p>
      <img src="assets/gradeints/NN_4_2.jpeg" height="200" width="270" alt="Neural Netwrok"/>
      <p>Neural net with 2 layer, 2 nodes in hidden layer. Input is a vector
First layer ((l_1)) has weight matrix 
[
W
1
]
3
×
2
:</p>
<p>W
1
=
[
w
1
11
w
1
12
w
1
21
w
1
22
w
1
31
w
1
32
]</p><br>

<p>Second layer ((l_2)) has weight matrix $$[W_2]{scriptscriptstyle 32	imes 1}$$ $$ \begin{equation} W_2=\begin{bmatrix} w{2}^{1}  w_{2}^{2}  end{bmatrix} end{equation} $$</p><br>

<h3><strong>Input & Output definitions</strong></h3>
<p>Exactly same as previous setting. Input is ((\vec{X},y)) : (\vec{X}) is a vector, while y is a scalar.</p>

<p>(X = [x^1 ~~x^2 ~~x^3])       (x^i = i^{th}) component of (\vec{X}).</p>

<p>Thus, in matrix form x,y are $$[X]{scriptscriptstyle 1	imes 3}$$ and $$[y]{scriptscriptstyle 1	imes 1}$$.</p>

<p>Let ( l_1 ) be output of layer 1 (hidden layer in this case) . In matrix format, ([l_1]_{scriptscriptstyle 1	imes 1})</p>
<p>(30)
l
1
=
σ
(
[
X
]
.
[
W
1
]
)
(31)
=
1
1
+
e
−
[
X
]
.
[
W
1
]</p>
<p>( l_1 ) has 2 components - ( l_1^1 ) and ( l_1^2 ), given by:</p>
<br>
<p>(32)
l
1
=
[
l
1
1
l
1
2
]

(33)
l
1
1
=
1
1
+
e
−
(
x
1
×
w
1
11
+
x
2
×
w
1
21
+
x
3
×
w
1
31
)
(34)
l
1
2
=
1
1
+
e
−
(
x
1
×
w
1
12
+
x
2
×
w
1
22
+
x
3
×
w
1
32
)</p><br>
<p>Let ( hat{y} ) be predicted output. Then as per diagram, it is also the output of layer 2 ((l_2)). In matrix format, ([hat{y}]_{scriptscriptstyle 1	imes 1})</p>
<p>(35)
y
^
=
σ
(
[
l
1
]
.
[
W
2
]
)
(36)
=
1
1
+
e
−
[
l
1
]
.
[
W
2
]
(37)
=
1
1
+
e
−
(
l
1
1
w
2
1
+
l
1
2
w
2
2
)</p>
<h3><strong>Loss</strong><h3>
<p>Like before, we will use half of squared error loss. $$ L = \frac{1}{2} (y - hat{y})^{2} $$</p>
<h3><strong>Gradients</strong><h3>
<p>There are 2 set of gradients: (
abla_{W_1} L) and (
abla_{W_2} L). Let us first compute (
abla_{W_2} L)

([
abla_{W_2} L]_{scriptscriptstyle 2	imes 1})</p><br>

<p>(40)
∇
W
2
L
=
∂
L
∂
W
2
∇
W
2
L
=
[
∂
L
∂
w
2
1
∂
L
∂
w
2
2
]</p><br>

<p>Lets, first compute (\frac{partial L}{partial w_{2}^{1}}):</p>

<p>$$ \begin{align} \frac{partial L}{partial w_2^1} & = \frac{partial L}{partial hat{y}} 	imes \frac{partial hat{y}}{partial w_2^1} label{ref141} 	ag{41} \frac{partial L}{partial hat{y}} &= \frac{1}{2} 	imes 2 	imes (y - hat{y})^{1} 	imes (-1) label{ref142} 	ag{42}</p>

<p>\frac{partial hat{y}}{partial w_2^1} &= \big{(} \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} * l_1^1 dots && 	ext{using eqref{ref137}}  & = sigma ([l_1] . [W_2]) 	imes (1- sigma ([l_1] . [W_2])) * l_1^1 dots && 	ext{using eqref{ref136}} label{ref143} 	ag{43} & = hat{y} 	imes (1- hat{y}) * l_1^1 dots && 	ext{using eqref{ref135}} label{ref144} 	ag{44} end{align} $$</p>

<p>Substituting eqref{ref143} & eqref{ref144} in eqref{ref141}, we get</p>
<br>

<p>∂
L
∂
w
2
1
=
(
(
−
1
)
×
(
y
−
y
^
)
)
×
(
y
^
×
(
1
−
y
^
)
×
l
1
1
)
 
=
−
(
y
−
y
^
)
×
y
^
×
(
1
−
y
^
)
×
l
1
1
(45)
=
(
y
^
−
y
)
×
y
^
×
(
1
−
y
^
)
×
l
1</p>

<p>Let,

\begin{align} Delta l_{2} = (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) label{ref146} 	ag{46}  end{align}

Then, eq eqref{ref145} reduces to:</p>
<p>(47)
∂
L
∂
w
2
1
=
Δ
l
2
×
l
1
1</p>
<p>Likewise, $$ \begin{align} \frac{partial L}{partial w_2^2} & = Delta l_{2} 	imes l_1^2 label{ref148} 	ag{48}  end{align} $$

Using eq eqref{ref147} and eqref{ref148} in eqref{ref140}</p>

<p>(49)
∇
W
2
L
=
[
Δ
l
2
×
l
1
1
Δ
l
2
×
l
1
2
]</p>
<p>$$ \frac{partial L}{partial W_2} = left[ \begin{array}{c} l_1^1  l_1^2 end{array} \right]{scriptscriptstyle 2 	imes 1}. left[ Delta l{2} \right]_{scriptscriptstyle 1 	imes 1} $$</p>

<p>(49.1)
∂
L
∂
W
2
=
[
l
1
]
⊺
.
Δ
l
2</p>
<p>([
abla_{W_1} L]_{scriptscriptstyle 3	imes 2})</p>
<p>50)
∇
W
1
L
=
∂
L
∂
W
1
∇
W
1
L
=
[
∂
L
∂
w
1
11
∂
L
∂
w
1
12
∂
L
∂
w
1
21
∂
L
∂
w
1
22
∂
L
∂
w
1
31
∂
L
∂
w
1
32
]</p>

<p>Lets, first focus on (\frac{partial L}{partial w_{1}^{11}}):</p>

<p>$$ \begin{align} \frac{partial L}{partial w_1^{11}} & = \frac{partial L}{partial hat{y}} 	imes \frac{partial hat{y}}{partial l_1^1} 	imes \frac{partial l_1^1}{partial w_1^{11}}label{ref151} 	ag{51} \frac{partial L}{partial hat{y}} &= -(y - hat{y}) label{ref152} 	ag{52}</p>

<p>\frac{partial hat{y}}{partial l_1^1} &= \big{(} \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} * w_2^1  & = sigma ([l_1] . [W_2]) 	imes (1- sigma ([l_1] . [W_2])) * w_2^1 dots && 	ext{using eqref{ref137}} label{ref153} 	ag{53} & = hat{y} 	imes (1- hat{y}) * w_2^1 dots && 	ext{using eqref{ref135}} label{ref154} 	ag{54}</p>

<p>\frac{partial l_1^1}{partial w_1^{11}} &= \big{(} \frac{1}{1 + e^{-(x^1 	imes w_1^{11} + x^2 	imes w_1^{21} + x^3 	imes w_1^{31})}} \big{)} 	imes \big{(} 1 - \big{(} \frac{1}{1 + e^{-(x^1 	imes w_1^{11} + x^2 	imes w_1^{21} + x^3 	imes w_1^{31})}} \big{)} \big{)} 	imes x^1 dots && 	ext{using eqref{ref133}} label{ref155} 	ag{55} &= (l_1^1) 	imes (1-l_1^1) 	imes x^1 label{ref156} 	ag{56} end{align} $$</p>

Using eq eqref{ref152}, eqref{ref154} and eqref{ref156} in eq eqref{ref151}</p>

<p>∂
L
∂
w
1
11
=
−
(
y
−
y
^
)
×
y
^
×
(
1
−
y
^
)
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)
×
x
1
(57)
=
(
y
^
−
y
)
×
y
^
×
(
1
−
y
^
)
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)
×
x
1</p>
<p>Now, using eq eqref{ref146} in eqref{ref157}</p>
<p>(58)
∂
L
∂
w
1
11
=
Δ
l
2
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)
×
x
</p>
<p>Further, let</p>
<p>(59)
Δ
l
1
1
=
Δ
l
2
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)</p>
<p>Then,</p>
<p>(60)
∂
L
∂
w
1
11
=
Δ
l
1
1
×
x
1</p>
<p>Likewise,</p>
<p>∂
L
∂
w
1
21
=
Δ
l
2
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)
×
x
2
(61)
=
Δ
l
1
1
×
x
2

∂
L
∂
w
1
31
=
Δ
l
2
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)
×
x
3
(62)
=
Δ
l
1
1
×
x
3</p>
<p>Before we proceed further, Eq eqref{ref160}, eqref{ref161} and eqref{ref162} are key take home equations.</p>

<p>Now, lets focus on (\frac{partial L}{partial w_{1}^{12}}):</p>

<p>$$ \begin{align} \frac{partial L}{partial w_1^{12}} & = \frac{partial L}{partial hat{y}} 	imes \frac{partial hat{y}}{partial l_1^2} 	imes \frac{partial l_1^2}{partial w_1^{12}}label{ref163} 	ag{63} \frac{partial L}{partial hat{y}} &= -(y - hat{y}) label{ref164} 	ag{64}</p>

<p>\frac{partial hat{y}}{partial l_1^2} &= \big{(} \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} 	imes \big{(}1- \frac{1}{1 + e^{-[l_1] . [W_2]}} \big{)} * w_2^2  & = sigma ([l_1] . [W_2]) 	imes (1- sigma ([l_1] . [W_2])) * w_2^2 dots && 	ext{using eqref{ref137}} label{ref165} 	ag{65} & = hat{y} 	imes (1- hat{y}) * w_2^2 dots && 	ext{using eqref{ref135}} label{ref166} 	ag{66}</p>

<p>\frac{partial l_1^2}{partial w_1^{12}} &= \big{(} \frac{1}{1 + e^{-(x^1 	imes w_1^{12} + x^2 	imes w_1^{22} + x^3 	imes w_1^{32})}} \big{)} 	imes \big{(} 1 - \big{(} \frac{1}{1 + e^{-(x^1 	imes w_1^{12} + x^2 	imes w_1^{22} + x^3 	imes w_1^{32})}} \big{)} \big{)} 	imes x^1 dots && 	ext{using eqref{ref133}} label{ref167} 	ag{67} &= (l_1^2) 	imes (1-l_1^2) 	imes x^1 label{ref168} 	ag{68} end{align} $$</p>
<p>∂
L
∂
w
1
12
=
−
(
y
−
y
^
)
×
y
^
×
(
1
−
y
^
)
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)
×
x
1
(69)
=
(
y
^
−
y
)
×
y
^
×
(
1
−
y
^
)
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)
×
x
1</p>
<p>Now, using eq eqref{ref146} in eqref{ref169}</p>

<p>(70)
∂
L
∂
w
1
12
=
Δ
l
2
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)
×
x
1</p>
<p>Further, let</p>
<p>(71)
Δ
l
1
2
=
Δ
l
2
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)</p>
<p>Then,</p>
<p>
(72)
∂
L
∂
w
1
12
=
Δ
l
1
2
×
x
1</p>

<p>Likewise,</p>
<p>
∂
L
∂
w
1
22
=
Δ
l
2
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)
×
x
2
(73)
=
Δ
l
1
2
×
x
2

∂
L
∂
w
1
32
=
Δ
l
2
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)
×
x
3
(73)
=
Δ
l
1
2
×
x
3</p>
<p>Now, we have the pieces. We just need to assemble them.</p>

<p>Using Eq eqref{ref160}, eqref{ref161}, eqref{ref162} and eqref{ref172}, eqref{ref173}, eqref{ref174} in eqref{ref150}</p>

<p>(75)
∇
W
1
L
=
∂
L
∂
W
1
∇
W
1
L
=
[
Δ
l
1
1
×
x
1
Δ
l
1
2
×
x
1
Δ
l
1
1
×
x
2
Δ
l
1
2
×
x
2
Δ
l
1
1
×
x
3
Δ
l
1
2
×
x
3
]</p>

<p>Using the notation used in Eq eqref{ref132}, let</p>
<p>
(76)
Δ
l
1
=
[
Δ
l
1
1
Δ
l
1
2
]</p>

<p>Using Eq eqref{ref176} in eqref{ref175}, we get:</p>

<p>$$ \begin{align} left[ \frac{partial L}{partial W_1} \right]{scriptscriptstyle 3 	imes 2} = left[ \begin{array}{c} x^1  x^2  x^3 end{array} \right]{scriptscriptstyle 3 	imes 1} . left[ Delta l_{1}^{1} quad Delta l_{1}^{2} \right]_{scriptscriptstyle 1 	imes 2} label{ref177} 	ag{77} end{align} $$</p>
<p>(78)
∂
L
∂
W
1
=
[
X
]
⊺
.
Δ
l
1</p>
<p>Note that,</p>
<p>
(76)
Δ
l
1
=
[
Δ
l
1
1
Δ
l
1
2
]</p>
<p>
(59)
Δ
l
1
1
=
Δ
l
2
∗
w
2
1
×
(
l
1
1
)
×
(
1
−
l
1
1
)</p>

<p>(71)
Δ
l
1
2
=
Δ
l
2
∗
w
2
2
×
(
l
1
2
)
×
(
1
−
l
1
2
)</p>

<p>Therefore, $$ \begin{align} Delta l_1 &= left[ Delta l_{2} * w_2^1 	imes (l_1^1) 	imes (1-l_1^1) quad Delta l_{2} * w_2^2 	imes (l_1^2) 	imes (1-l_1^2) \right]  &= (left[ Delta l_{2} \right]{scriptscriptstyle 1 	imes 1} . left[ W_2 ^intercal \right]{scriptscriptstyle 1 	imes 2}) 	imes (l_1) 	imes (1-l_1) label{ref179} 	ag{79} end{align} $$</p>

<h3><strong>To summerize the take home, lets (re)write the key equations:</strong></h3>

<p>\begin{align} Delta l_{2} = (hat{y} - y) 	imes hat{y} 	imes (1- hat{y}) 	ag{46}  end{align}<p>

<p>\begin{align} Delta l_{1} = (left[ Delta l_{2} \right] . left[ W_2 ^intercal \right]) 	imes (l_1) 	imes (1-l_1) 	ag{79} end{align}</p>

<p>(78)
∂
L
∂
W
1
=
[
X
]
⊺
.
Δ
l
1</p>

<p>(49.1)
∂
L
∂
W
2
=
[
l
1
]
⊺
.
Δ
l
2</p>

<p>Now, using these 4 equations - eqref{ref146}, eqref{ref179}, eqref{ref1491} and eqref{ref178} one can directly code (bare bones) training algorithm. The following code is borrowed from the <a href="https://iamtrask.github.io/2015/07/27/python-network-part2/#viewSource" target="_blank" style="color: blue; text-decoration: underline;">blog post</a> of Andrew Trask</p><br>

<p>import numpy as np

X = np.array([0,0,1])
y = np.array([0])

alpha = 0.5  # learning rate - hyperparameter

W_1 = np.random.random(3,2)
W_2 = np.random.random(2,1)

for i in range(1000):

    layer_1 = 1/(1+np.exp(-(np.dot(X,W_1))))
    layer_2 = 1/(1+np.exp(-(np.dot(layer_1,W_2))))

    layer_2_delta = (layer_2 - y)*(layer_2*(1-layer_2))
    layer_1_delta = layer_2_delta.dot(W_2.T)*(layer_1*(1-layer_1))

    W_1 = W_1 - alpha * (layer_1.T).dot(layer_2_delta)
    W_2 = W_2 - alpha * (X.T).dot(layer_1_delta)
<p><br>

<a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" target="_blank" style="color: blue;">Prev</a>
      `},{id:7,title:"Gradients - summary",date:"Sep 13, 2016",excerpt:"Take home on Computing Gradients that go into training Neural Nets",content:`

      <h2><strong>Generalization</strong></h2>
      <p>In this post, based on our conclusions in last post, we will try and generalise a strategy to compute gradients for arbit networks, as shown in figure below:</p>
         <img src="assets/images/NN_generic.jpeg" height="200" width="270" alt="Neural "/>
         <p>simple neural net
Imagine we have a (Feed forward) network with 1 input layer (L_0), 1 output layer (L_3) and 2 hidden layers (L_1), (L_2) respectively. Further, let (l_i) be output of layer (L_i). Also, by design, (l_1 = X) [input] and (l_3 = hat{y}) [output]. Let (W_{ij}) be weights between layers (L_i) and (L_j). We have 3 weight matrices - (W_{01}), (W_{12}) and (W_{23}).</p>
<h2>Tables Are Cool</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th style="text-align: left;">col 1 is left-aligned</th>
    <th style="text-align: center;">col 2 is centered</th>
    <th style="text-align: right;">col 3 is right-aligned</th>
  </tr>
  <tr>
    <td style="text-align: left;">$1600</td>
    <td style="text-align: center;">$12</td>
    <td style="text-align: right;">$1</td>
  </tr>
</table><br>
<hr>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Name</th>
    <th>Lunch order</th>
    <th>Spicy</th>
    <th>Owes</th>
  </tr>
  <tr>
    <td>Joan</td>
    <td>saag paneer</td>
    <td>medium</td>
    <td>$11</td>
  </tr>
  <tr>
    <td>Sally</td>
    <td>vindaloo</td>
    <td>mild</td>
    <td>$14</td>
  </tr>
  <tr>
    <td>Erin</td>
    <td>lamb madras</td>
    <td>HOT</td>
    <td>$5</td>
  </tr>
</table>
<br><hr>
<p> ||Grouping||</p>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td>Content</td>
    <td>Long Cell</td>
  </tr>
  <tr>
    <td>Content</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table><br><hr>

<p>New Section | More | Data | And More | With an escaped '|' ||<p>
<p>[Prototype table]</p>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td>foo</td>
    <td>bar</td>
  </tr>
  <tr>
    <td>baz</td>
    <td>bim</td>
  </tr>
</table>
      `}],b=E=>{s(E),o(!0)},g=()=>{s(null),o(!1)},y=[...f].sort((E,k)=>new Date(k.date)-new Date(E.date)),p=()=>{const E=y.findIndex(k=>k.id===l.id);if(E<y.length-1){const k=y[E+1];s(k)}},x=()=>{const E=y.findIndex(k=>k.id===l.id);if(E>0){const k=y[E-1];s(k)}},C=()=>l?y.findIndex(k=>k.id===l.id)<y.length-1:!1,j=()=>l?y.findIndex(k=>k.id===l.id)>0:!1;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"content container mx-auto py-6 sm:py-8 lg:py-10",children:[c.jsx("h1",{className:"page__title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4",children:"Blog Posts"}),c.jsxs("div",{className:"archive px-4 sm:px-6 md:px-8 lg:px-0",children:[c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2023"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(vi,{title:"Product management for AI products - old wine in new bottle?",date:"Aug 05, 2023",excerpt:"The answer lies in the specialized skill set required for product management in the realm of AI. The traditional principles and experiences in product management for standard software products do not suffice for AI products. Product management in AI development demands a significant upgrade."})}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2022"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(vi,{title:"Alexa AI and Layoffs",date:"Nov 23, 2022",excerpt:"Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."})}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2021"}),f.map(E=>c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(vi,{title:E.title,date:E.date,excerpt:E.excerpt,onClick:()=>b(E)})},E.id)),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2020"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(vi,{title:"Alexa AI and Layoffs",date:"Nov 23, 2020",excerpt:"Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."})})]}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2016"}),c.jsxs("div",{className:"blog-post-page",children:[h.map(E=>c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(vi,{title:E.title,date:E.date,excerpt:E.excerpt,onClick:()=>b(E)})},E.id)),l&&c.jsx("div",{className:"mt-10",children:c.jsx(Lx,{blog:l})})]})]}),c.jsx(zx,{isOpen:u,onClose:g,blog:l,onNext:p,onPrevious:x,hasNext:C(),hasPrevious:j()})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,u,o)=>o?o.toUpperCase():u.toLowerCase()),v1=l=>{const s=Hx(l);return s.charAt(0).toUpperCase()+s.slice(1)},Sp=(...l)=>l.filter((s,u,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===u).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=O.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:f="",children:h,iconNode:b,...g},y)=>O.createElement("svg",{ref:y,...Bx,width:s,height:s,stroke:l,strokeWidth:o?Number(u)*24/Number(s):u,className:Sp("lucide",f),...g},[...b.map(([p,x])=>O.createElement(p,x)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(l,s)=>{const u=O.forwardRef(({className:o,...f},h)=>O.createElement(qx,{ref:h,iconNode:s,className:Sp(`lucide-${Ux(v1(l))}`,`lucide-${l}`,o),...f}));return u.displayName=v1(l),u};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Yu=Qt("archive",Gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ot=Qt("book",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],pa=Qt("calendar",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Vx=Qt("external-link",$x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Fr=Qt("file-check",Wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ke=Qt("file-text",Ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Ka=Qt("link-2",Qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Kx=Qt("monitor",Zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Np=Qt("search",Px);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Jx=Qt("video",Fx);function e3(){const[l,s]=O.useState(""),[u,o]=O.useState("All Talks"),f=["All Talks","Workshops","Keynotes","Panels"],b=[{year:"2021",title:"Practical AI: Is it all about building models?",venue:"In conversation with codebasics, Online Recording Website",description:"A discussion on the practical aspects of AI beyond model building, focusing on deployment, maintenance, and business value.",tags:["Practical AI","Industry Applications","AI Implementation"],date:"Jul 2021",type:"Panels",website:"https://www.youtube.com/watch?v=example1",slides:"https://speakerdeck.com/example/practical-ai",recording:"https://www.youtube.com/watch?v=example1"},{year:"2020",title:"Practical Natural Language Processing Book | NLP, ML/AI in Industry| GPT-3 & more",venue:"Deep Neural Notebooks podcast, Online Recording Website",description:"Discussion about the Practical Natural Language Processing book, current state of NLP, and applications in industry.",tags:["NLP","Book Discussion","GPT-3"],date:"Sep 2020",type:"Panels",website:"https://deepneuralnotebooks.com/example",slides:"https://speakerdeck.com/example/nlp-book",recording:"https://www.youtube.com/watch?v=example2"},{year:"2020",title:"Book Intro: Practical Natural Language Processing",venue:"Bay Area NLP meetup, Online Recording Website",description:"Introduction to the concepts and approaches presented in the Practical Natural Language Processing book.",tags:["NLP","Book Introduction","Applied ML"],date:"Aug 2020",type:"Keynotes",website:"https://www.meetup.com/bay-area-nlp/",slides:"https://speakerdeck.com/example/book-intro-nlp",recording:"https://www.youtube.com/watch?v=example3"},{year:"2020",title:"The New Business of AI",venue:"IIM Calcutta, Online Recording Website",description:"A talk focusing on the business implications of AI technologies and how they are reshaping industries.",tags:["Business of AI","AI Strategy","Digital Transformation"],date:"Aug 2020",type:"Keynotes",website:"https://www.iimcal.ac.in/events/example",slides:"https://speakerdeck.com/example/business-of-ai",recording:"https://www.youtube.com/watch?v=example4"},{year:"2018",title:"Sarcasm Detection : Achilles Heel of sentiment analysis",venue:"Open Data Science Conference (ODSC), Bengaluru, India Recording Website",description:"Exploring the challenges of detecting sarcasm in text and its impact on sentiment analysis accuracy.",tags:["Sarcasm Detection","Sentiment Analysis","NLP Challenges"],date:"Sep 2018",type:"Workshops",website:"https://odsc.com/bengaluru/2018",slides:"https://speakerdeck.com/example/sarcasm-detection",recording:"https://www.youtube.com/watch?v=example5"},{year:"2018",title:"Hubs and Spokes of AI",venue:"Anthill Inside, 2018, Bengaluru, India Website",description:"A comprehensive overview of the AI ecosystem and how different technologies connect and interact.",tags:["AI Ecosystem","Technology Integration","AI Architecture"],date:"Jul 2018",type:"Keynotes",website:"https://anthillinside.com/2018",slides:"https://speakerdeck.com/example/hubs-and-spokes",recording:"https://www.youtube.com/watch?v=example6"},{year:"2018",title:"Sarcasm Detection: Achilles Heel of sentiment analysis",venue:"Anthill Inside, Bengaluru, India Slides Recording Website",description:"Detailed exploration of techniques for detecting sarcasm in text and improving sentiment analysis systems.",tags:["Sarcasm Detection","Sentiment Analysis","NLP"],date:"Jul 2018",type:"Workshops",website:"https://anthillinside.com/2018/workshops",slides:"https://speakerdeck.com/example/sarcasm-detection-detailed",recording:"https://www.youtube.com/watch?v=example7"},{year:"2017",title:"Synthetic Gradients",venue:"Anthill Inside, Bengaluru, India Website",description:"An exploration of synthetic gradient techniques for improving neural network training efficiency.",tags:["Synthetic Gradients","Neural Networks","Deep Learning"],date:"Jul 2017",type:"Workshops",website:"https://anthillinside.com/2017",slides:"https://speakerdeck.com/example/synthetic-gradients",recording:"https://www.youtube.com/watch?v=example8"},{year:"2017",title:"CNNs for Text Classification",venue:"Nvidia Developer Conference, 2017, Chennai, India Website",description:"A technical deep dive into using Convolutional Neural Networks for effective text classification tasks.",tags:["CNNs","Text Classification","Deep Learning"],date:"Nov 2017",type:"Workshops",website:"https://developer.nvidia.com/events/2017/chennai",slides:"https://speakerdeck.com/example/cnns-for-text",recording:"https://www.youtube.com/watch?v=example9"},{year:"2017",title:"Recent Advances in NLP",venue:"PyData Delhi 2017, Delhi, India Website",description:"Overview of cutting-edge advancements in Natural Language Processing technologies and methodologies.",tags:["NLP","Research Advances","Language Models"],date:"Sep 2017",type:"Keynotes",website:"https://pydata.org/delhi2017",slides:"https://speakerdeck.com/example/recent-advances-nlp",recording:"https://www.youtube.com/watch?v=example10"},{year:"2017",title:"Products and AI",venue:"Anthill Inside, 2017, Bengaluru, India Website",description:"Exploring the integration of AI technologies into product development and enhancement.",tags:["AI Products","Product Development","Applied AI"],date:"Jul 2017",type:"Panels",website:"https://anthillinside.com/2017/panels",slides:"https://speakerdeck.com/example/products-and-ai",recording:"https://www.youtube.com/watch?v=example11"},{year:"2017",title:"When – and when not – to use Deep Learning, Machine Learning and AI",venue:"Anthill Inside, 2017, Bengaluru, India Website",description:"A practical guide to choosing the right technology approach for different problem domains.",tags:["Technology Selection","Deep Learning","AI Strategy"],date:"Jul 2017",type:"Panels",website:"https://anthillinside.com/2017/panels/tech-selection",slides:"https://speakerdeck.com/example/when-to-use-dl-ml-ai",recording:"https://www.youtube.com/watch?v=example12"},{year:"2016",title:"Building Continuous Learning Systems",venue:"PyData 2016, Washington, D.C. Slides Recording Website",description:"Strategies and architectures for creating AI systems that continuously learn and improve over time.",tags:["Continuous Learning","ML Systems","AI Architecture"],date:"Oct 2016",type:"Workshops",website:"https://pydata.org/dc2016",slides:"https://speakerdeck.com/example/continuous-learning-systems",recording:"https://www.youtube.com/watch?v=example13"},{year:"2010",title:"Authenticated Byzantine Generals in Dual Failure Model",venue:"ICDCN 2010, Kolkata, India Website",description:"Research presentation on fault-tolerant distributed systems and consensus algorithms.",tags:["Distributed Systems","Byzantine Failures","Authentication"],date:"Jan 2010",type:"Keynotes",website:"https://icdcn.org/2010",slides:"https://speakerdeck.com/example/byzantine-generals",recording:"https://www.youtube.com/watch?v=example14"},{year:"2010",title:"On Composability of Reliable Unicast and Broadcast",venue:"ICDCN 2010, Kolkata, India Website",description:"Technical discussion on composing reliable message passing protocols in distributed systems.",tags:["Distributed Computing","Reliability","Protocol Design"],date:"Jan 2010",type:"Keynotes",website:"https://icdcn.org/2010/sessions",slides:"https://speakerdeck.com/example/reliable-unicast",recording:"https://www.youtube.com/watch?v=example15"}].filter(g=>{const y=g.title.toLowerCase().includes(l.toLowerCase())||g.description.toLowerCase().includes(l.toLowerCase())||g.venue.toLowerCase().includes(l.toLowerCase()),p=u==="All Talks"||g.type===u;return y&&p});return c.jsxs("div",{className:"bg-blue-50 container mx-auto py-8 px-4 rounded-lg",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("h1",{className:"text-5xl font-bold text-blue-900 mb-2",children:"Talks"}),c.jsx("div",{className:"h-1 w-32 bg-blue-600 mx-auto mt-2 mb-4"}),c.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto mb-4",children:"Workshops, keynotes, and talks on AI, NLP, and Machine Learning"})]}),c.jsx("div",{className:"mb-8",children:c.jsxs("div",{className:"max-w-lg mx-auto relative",children:[c.jsx("input",{type:"text",placeholder:"Search talks...",className:"w-full px-4 py-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",value:l,onChange:g=>s(g.target.value)}),c.jsx(Np,{className:"absolute left-3 top-2.5 text-gray-400",size:18})]})}),c.jsx("div",{className:"flex justify-center flex-wrap gap-3 mb-10",children:f.map(g=>c.jsx("button",{className:`px-6 py-2 rounded-full font-medium transition-colors ${u===g?"bg-blue-600 text-white":"bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"}`,onClick:()=>o(g),children:g},g))}),c.jsx("div",{className:"space-y-6 max-w-4xl mx-auto",children:b.map((g,y)=>c.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-600 transition-all hover:shadow-lg",children:c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[c.jsxs("div",{className:"flex-grow",children:[c.jsx("div",{className:"inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3",children:g.year}),c.jsx("h2",{className:"text-xl font-semibold text-blue-800 mb-2",children:g.title}),c.jsx("p",{className:"text-gray-700 mb-2",children:g.venue}),c.jsx("p",{className:"text-gray-600",children:g.description}),c.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:g.tags.map((p,x)=>c.jsx("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm",children:p},x))})]}),c.jsxs("div",{className:"md:ml-6 mt-4 md:mt-0 md:min-w-[180px] md:text-right",children:[c.jsxs("p",{className:"flex items-center md:justify-end text-gray-500 text-sm mb-4",children:[c.jsx(pa,{size:16,className:"mr-1"}),g.date]}),c.jsxs("div",{className:"flex flex-col gap-2",children:[g.website&&c.jsxs("a",{href:g.website,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(Vx,{size:16,className:"mr-2"}),"Website"]}),g.slides&&c.jsxs("a",{href:g.slides,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(Kx,{size:16,className:"mr-2"}),"Slides"]}),g.recording&&c.jsxs("a",{href:g.recording,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(Jx,{size:16,className:"mr-2"}),"Recording"]})]})]})]})})},y))})]})}function t3(){return c.jsxs("div",{className:"content container mx-auto py-10",children:[c.jsx("h1",{className:"page__title text-4xl font-bold text-gray-900 mb-6 text-center",children:"Workshops & Bootcamps"})," ",c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Advanced NLP: From Essentials to Deep Transfer Learning"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC) Europe, Zurich (Online) "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUN 2021"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://odsc.com/europe/training/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Natural Language Processing Bootcamp"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC), Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," NOV 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Natural Language Processing Bootcamp - Zero to Hero"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC), Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," AUG 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://confengine.com/conferences/odsc-india-2019/schedule",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Bootcamp for Natural Language Processing"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Hasgeek, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsx("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4"}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthill Inside, Bangalore"})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2018"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://anthillinside.in/2018-july-nlp-bootcamp/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthill Inside, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," MAY 2018"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://anthillinside.in/2018-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"#",className:"text-blue-800 hover:underline",children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Representations Learning of text for NLP"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthil Inside, Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2017"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://anthillinside.in/2017/nlp-workshop/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Hasgeek, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ye,{icon:Ia,className:"mr-1","aria-hidden":"true"})," APR 2017"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ye,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t",className:"text-blue-800 hover:underline",children:[c.jsx(ye,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]})]})}const x1="/assets/ABG_thesis-DhLw8HTs.pdf";function a3(){const[l,s]=O.useState(""),[u,o]=O.useState("all"),f=[{id:100,type:"article",title:"What Sam Altman's Role in OpenAI's Rise Teaches Us",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"The New Blueprint for Building Leadership at Deep Tech Labs",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",icon:ke}]},{id:101,type:"article",title:'A special session to learn "How We Conceived the AI system that Won Over Sam Altman (OpenAI) & Vinod Khosla (Khosla Ventures)"',year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Special session on AI system development",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",icon:ke}]},{id:102,type:"article",title:"10x Game in Business",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/10x-game-in-business",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"15 Years In Startups: Key Learnings",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/10x-game-in-business",icon:ke}]},{id:103,type:"article",title:"AI Adoption & Human Expertise",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Exploring the intersection of AI and human expertise",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",icon:ke}]},{id:104,type:"article",title:"Founder/CEO's Playbook: How to Ride the AI Wave",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Guide for leaders on AI transformation",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",icon:ke}]},{id:105,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 3",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 3 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",icon:ke}]},{id:106,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 2",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 2 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",icon:ke}]},{id:107,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 1",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 1 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",icon:ke}]},{id:108,type:"article",title:"Why the AI rush?",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-the-ai-rush",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Understanding the current AI revolution",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-the-ai-rush",icon:ke}]},{id:109,type:"article",title:"Why Founders/CEOs must personally own AI transformation",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"The importance of leadership in AI transformation",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",icon:ke}]},{id:110,type:"article",title:"AI Déjà Vu: Learning from the Internet Era",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Drawing parallels between AI and Internet revolutions",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",icon:ke}]},{id:111,type:"article",title:"Unknowingly, CXO's are often the biggest bottleneck in AI adoption",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Addressing leadership challenges in AI adoption",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",icon:ke}]},{id:112,type:"article",title:"AI ≠ IT",year:"2025",month:"Mar",url:"https://pragmaticai1.substack.com/p/ai-vs-it",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Understanding the fundamental differences between AI and IT",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-vs-it",icon:ke}]},{id:113,type:"article",title:"Podcast #1 | Somnath Biswas - Head of Product | Conversational AI",year:"2025",month:"Feb",url:"https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Conversation about Conversational AI with Somnath Biswas",links:[{type:"article",label:"Listen to Podcast",url:"https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",icon:ke}]},{id:1,type:"paper",title:"Noisy Text Data: Achilles' Heel of popular transformer based NLP models",year:"2021",url:"https://arxiv.org/abs/2110.03353",authors:[{name:"Kartikay Bagla",url:"http://linkedin.com/in/kartikay-bagla-60638a167"},{name:"Ankit Kumar",url:"http://linkedin.com/in/ankit-ahlawat"},{name:"Shivam Gupta",url:"https://www.linkedin.com/in/shmgupta/"},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Investigates the impact of noisy text on transformer models performance across multiple NLP tasks.",links:[{type:"pdf",label:"PDF",url:"https://arxiv.org/pdf/2110.03353.pdf",icon:ke},{type:"bibtex",label:"BibTeX",url:"https://arxiv2bibtex.org/?q=2110.03353",icon:Ot},{type:"arxiv",label:"arXiv:2110.03353",url:"https://arxiv.org/abs/2110.03353",icon:Yu}]},{id:2,type:"book",title:"Practical Natural Language Processing: A Comprehensive Guide to Building Real-World NLP Systems",year:"2020",url:"https://www.oreilly.com/library/view/practical-natural-language/9781492054047/",authors:[{name:"Sowmya Vajjala",url:null},{name:"Bodhisattwa Majumder",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Harshit Surana",url:null}],description:"Book on practical aspects of implementing NLP systems, published by O'Reilly Media.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10/gjzgqh",icon:Ot}]},{id:3,type:"paper",title:"hinglishNorm - A Corpus of Hindi-English Code Mixed Sentences for Text Normalization",year:"2020",url:"#",venue:"COLING in Online 2020",authors:[{name:"Piyush Makhija",url:null},{name:"Ankit Kumar",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Presents a corpus for text normalization of Hindi-English code-mixed text.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.18653/v1/2020.coling-main.1",icon:Ot},{type:"doi",label:"DOI: 10.18653/v1/2020.coling-main.1",url:"https://doi.org/10.18653/v1/2020.coling-main.1",icon:Ka},{type:"conference",label:"COLING 2020",url:"https://coling2020.org/",icon:pa}]},{id:4,type:"paper",title:"Noisy Text Data: Achilles' Heel of BERT",year:"2020",url:"#",venue:"W-NUT@EMNLP in Online 2020",authors:[{name:"Ankit Kumar",url:null},{name:"Piyush Makhija",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Examines how noisy text affects BERT performance.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.18653/v1/2020.wnut-1.1",icon:Ot},{type:"doi",label:"DOI: 10.18653/v1/2020.wnut-1.1",url:"https://doi.org/10.18653/v1/2020.wnut-1.1",icon:Ka},{type:"conference",label:"W-NUT@EMNLP 2020",url:"https://noisy-text.github.io/2020/",icon:pa}]},{id:5,type:"patent",title:"Noise Reduction And Smart Ticketing For Social Media-based Communication Systems",year:"2019",url:"#",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Navaneethan Santhanam",url:null}],description:"Patent for noise reduction in social media communications.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:ke},{type:"article",label:"Article",url:"#",icon:Fr}]},{id:6,type:"patent",title:"Named entity recognition from short unstructured text",year:"2019",url:"#",authors:[{name:"Navaneethan Santhanam",url:null},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Patent for named entity recognition in short texts.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:ke},{type:"article",label:"Article",url:"#",icon:Fr}]},{id:7,type:"patent",title:"Automatic annotation of social media communications for noise cancellation",year:"2019",url:"#",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Navaneethan Santhanam",url:null}],description:"Patent for automatic annotation of social media communications.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:ke},{type:"article",label:"Article",url:"#",icon:Fr}]},{id:8,type:"paper",title:"A New Look at Composition of Authenticated Byzantine Generals",year:"2013",url:"https://arxiv.org/abs/1203.1463",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Prasant Gopal",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"New perspective on authentication in Byzantine agreement protocols.",links:[{type:"pdf",label:"PDF",url:"https://arxiv.org/pdf/1203.1463.pdf",icon:ke},{type:"bibtex",label:"BibTeX",url:"https://arxiv2bibtex.org/?q=1203.1463",icon:Ot},{type:"arxiv",label:"arXiv: 1203.1463",url:"https://arxiv.org/abs/1203.1463",icon:Yu}]},{id:9,type:"paper",title:"Byzantine Agreement Using Partial Authentication",year:"2011",url:"https://link.springer.com/chapter/10.1007/978-3-642-24100-0_38",venue:"25th International Symposium on DIStributed Computing (DISC) in Roma, Italy 2011",authors:[{name:"Piyush Bansal",url:null},{name:"Prasant Gopal",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Kannan Srinathan",url:null},{name:"Pranav Kumar Vasishta",url:null}],description:"Explores Byzantine agreement with partial authentication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-24100-0_38",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-24100-0_38",url:"https://doi.org/10.1007/978-3-642-24100-0_38",icon:Ka},{type:"conference",label:"DISC 2011",url:"https://www.disc-conference.org/wp/past-conferences/",icon:pa}]},{id:10,type:"paper",title:"On Composability of Reliable Unicast and Broadcast",year:"2010",url:"https://link.springer.com/chapter/10.1007/978-3-642-11322-2_10",venue:"International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Sandeep Hans",url:null},{name:"Kannan Srinathan",url:null},{name:"C. Pandu Rangan",url:null}],description:"Analysis of composability in reliable communication protocols.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_10",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-11322-2_10",url:"https://doi.org/10.1007/978-3-642-11322-2_10",icon:Ka},{type:"conference",label:"ICDCN 2010",url:"https://www.cucse.org/ICDCN2010.htm",icon:pa}]},{id:11,type:"paper",title:"Authenticated Byzantine Generals in Dual Failure Model",year:"2010",url:"https://link.springer.com/chapter/10.1007/978-3-642-11322-2_12",venue:"International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Prasant Gopal",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Byzantine agreement protocol for dual failure scenarios.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_12",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-11322-2_12",url:"https://doi.org/10.1007/978-3-642-11322-2_12",icon:Ka},{type:"conference",label:"ICDCN 2010",url:"https://www.cucse.org/ICDCN2010.htm",icon:pa}]},{id:12,type:"thesis",title:"Authenticated Byzantine Generals",year:"2009",url:x1,authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"MS thesis - Authentication in Byzantine agreement protocols.",organization:"IIIT Hyderabad",links:[{type:"pdf",label:"PDF",url:x1,icon:ke}]},{id:13,type:"paper",title:"Topology Knowledge Affects Probabilistic Reliable Communication",year:"2009",url:"https://dl.acm.org/doi/10.1145/1582716.1582784",venue:"ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",authors:[{name:"Pranav K. Vasishta",url:null},{name:"Prasant Gopal",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Effects of topology knowledge on reliable communication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1145/1582716.1582784",icon:Ot},{type:"doi",label:"DOI: 10.1145/1582716.1582784",url:"https://doi.org/10.1145/1582716.1582784",icon:Ka},{type:"conference",label:"PODC 2009",url:"https://www.podc.org/podc2009/",icon:pa}]},{id:14,type:"paper",title:"Global Consistency can be Easier than Point-to-Point Communication",year:"2009",url:"https://dl.acm.org/doi/10.1145/1582716.1582782",venue:"ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",authors:[{name:"Prasant Gopal",url:"https://prasantgopal.com/"},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Pranav K. Vasishta",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Comparing global consistency and point-to-point communication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1145/1582716.1582782",icon:Ot},{type:"doi",label:"DOI: 10.1145/1582716.1582782",url:"https://doi.org/10.1145/1582716.1582782",icon:Ka},{type:"conference",label:"PODC 2009",url:"https://www.podc.org/podc2009/",icon:pa}]},{id:15,type:"paper",title:"On Privacy Preserving Convex Hull",year:"2009",url:"https://ieeexplore.ieee.org/document/5066472",venue:"IEEE International Conference on Availability, Reliability and Security (ARES) in Fukuoka, Japan 2009",authors:[{name:"Sandeep Hans",url:"https://research.ibm.com/people/sandeep-hans"},{name:"Sarat C. Addepalli",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Kannan Srinathan",url:"https://www.iiit.ac.in/faculty/kannan-srinathan/"}],description:"Privacy-preserving algorithms for convex hull computation.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1109/ARES.2009.159",icon:Ot},{type:"doi",label:"DOI: 10.1109/ARES.2009.159",url:"https://doi.org/10.1109/ARES.2009.159",icon:Ka},{type:"conference",label:"ARES 2009",url:"https://2009.ares-conference.eu/www.ares-conference.eu/conf/index.html",icon:pa}]}],h=x=>{switch(x){case"paper":return ke;case"book":return Ot;case"patent":return Fr;case"thesis":return Yu;case"article":return ke;default:return ke}},b=f.filter(x=>{const C=x.title.toLowerCase().includes(l.toLowerCase())||x.description.toLowerCase().includes(l.toLowerCase())||x.authors.some(E=>E.name.toLowerCase().includes(l.toLowerCase())),j=u==="all"||x.type===u;return C&&j}),g=x=>{o(x)},y=[{id:"all",label:"All Publications"},{id:"paper",label:"Research Papers"},{id:"book",label:"Books"},{id:"patent",label:"Patents"},{id:"thesis",label:"Thesis"},{id:"article",label:"Articles"}],p={papers:f.filter(x=>x.type==="paper").length,books:f.filter(x=>x.type==="book").length,patents:f.filter(x=>x.type==="patent").length,thesis:f.filter(x=>x.type==="thesis").length,Articles:f.filter(x=>x.type==="article").length};return c.jsx("div",{className:"bg-gradient-to-b from-blue-50 to-white min-h-screen",children:c.jsxs("div",{className:"container mx-auto py-5 px-4 max-w-5xl",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("h1",{className:"text-5xl font-bold text-blue-900 mb-2",children:"Publications"}),c.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"}),c.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto mb-4",children:"Research papers, patents, books, and thesis in Natural Language Processing, Distributed Computing, and Security."})]}),c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"relative max-w-md mx-auto mb-6",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(Np,{className:"h-5 w-5 text-gray-400"})}),c.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out",placeholder:"Search publications...",value:l,onChange:x=>s(x.target.value)})]}),c.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-8",children:y.map(x=>c.jsx("button",{className:`px-5 py-2 rounded-full font-medium transition-all duration-200 ${u===x.id?"bg-blue-700 text-white shadow-md scale-105":"bg-white text-blue-800 border border-blue-200 hover:bg-blue-50"}`,onClick:()=>g(x.id),children:x.label},x.id))}),c.jsxs("div",{className:"mt-10 grid grid-cols-6 gap-2 mb-10",children:[c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:f.length}),c.jsx("div",{className:"text-xs text-gray-600",children:"Publications"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.papers}),c.jsx("div",{className:"text-xs text-gray-600",children:"Papers"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.books}),c.jsx("div",{className:"text-xs text-gray-600",children:"Books"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.patents}),c.jsx("div",{className:"text-xs text-gray-600",children:"Patents"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.thesis}),c.jsx("div",{className:"text-xs text-gray-600",children:"Thesis"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.Articles}),c.jsx("div",{className:"text-xs text-gray-600",children:"Articles"})]})]})]}),c.jsx("div",{className:"space-y-8",children:b.length>0?b.map(x=>{const C=h(x.type);return c.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300",children:c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex items-start",children:[c.jsx("div",{className:"bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg mr-4 hidden md:flex items-center justify-center border border-blue-300 h-16 w-16 flex-shrink-0",children:c.jsx(C,{size:28,className:"text-blue-700"})}),c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex justify-between items-start flex-wrap md:flex-nowrap gap-2 mb-2",children:[c.jsx("h2",{className:"text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors flex-grow",children:x.url!=="#"?c.jsx("a",{href:x.url,className:"hover:underline",target:"_blank",rel:"noopener noreferrer",children:x.title}):x.title}),c.jsx("span",{className:"text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-3 py-1 font-medium shadow-sm flex-shrink-0",children:x.year})]}),x.type!=="article"&&c.jsxs("p",{className:"text-gray-700 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Authors:"})," ",x.authors.map((j,E)=>c.jsxs("span",{children:[j.url?c.jsx("a",{href:j.url,className:"text-gray-600 hover:text-blue-700 hover:underline",target:"_blank",rel:"noopener noreferrer",children:j.name}):c.jsx("span",{className:"text-gray-600",children:j.name}),E<x.authors.length-1&&c.jsx("span",{className:"text-gray-600",children:", "})]},E))]}),x.venue&&c.jsxs("p",{className:"text-gray-600 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Venue:"})," ",x.venue]}),x.organization&&c.jsxs("p",{className:"text-gray-600 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Organization:"})," ",x.organization]}),c.jsx("p",{className:"text-gray-600 mb-4",children:x.description}),c.jsx("div",{className:"flex flex-wrap items-center gap-4 text-sm",children:x.links&&x.links.map((j,E)=>c.jsxs("a",{className:"flex items-center text-blue-600 hover:text-blue-800 hover:underline",href:j.url,target:"_blank",rel:"noopener noreferrer",children:[c.jsx(j.icon,{size:16,className:"mr-1"})," ",j.label]},E))})]})]})})},x.id)}):c.jsx("div",{className:"text-center py-16",children:c.jsx("p",{className:"text-lg text-gray-500",children:"No publications found matching your search criteria."})})}),c.jsxs("div",{className:"mt-16 text-center",children:[c.jsx("div",{className:"w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-4"}),c.jsx("p",{className:"text-gray-500 text-sm",children:"Last updated: April 2025"})]})]})})}function n3(){return c.jsxs("div",{className:"content container mx-auto py-10",children:[c.jsx("h1",{className:"page__title text-4xl font-bold text-gray-900 mb-6 text-center",children:"Coaching"})," ",c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"button-column flex flex-col items-center",children:[" ",c.jsxs("button",{className:"button-column-button",children:[" ","Join my AI PM Bootcamp (Best AI Course)"]}),c.jsx("button",{className:"button-column-button",children:"My live AI Advanced AI Product Management Course on Maven"}),c.jsx("a",{href:"https://www.youtube.com/channel/UCN18Upb0gXm6EbNzHlHk_DQ",target:"_blank",className:"button-column-button",children:"My Youtube Channel about Product Management"})]})]})]})}function l3(){return c.jsxs("div",{className:"content right-column w-4/5 bg-white p-5 rounded-lg shadow-md",children:[c.jsx("h2",{className:"section-title text-3xl font-bold text-blue-800 mb-4",children:"Anuj Gupta"}),c.jsx("p",{className:"subtitle text-xl font-semibold mb-6 text-gray-800",children:c.jsx("strong",{children:"AI Executive | Board Advisor | AI Strategy & Innovation Leader"})}),c.jsx("h3",{children:"Current Engagements:"}),c.jsxs("ul",{className:"custom-list list-disc pl-6 mb-6 text-gray-700",children:[c.jsxs("li",{children:[c.jsx("span",{children:"Fractional Head of (Gen) AI"})," - Advising and steering AI initiatives for leading startups and multinational corporations across the US, Europe, and India."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Board & Executive Advisor on AI"})," - Partnering with Boards, CXOs, and investors to shape AI strategy at scale."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Architecting Enterprise AI Strategy"})," – Guiding MNCs in executing AI roadmaps that align with business objectives."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Masterclasses & Workshops"})," – Delivering high-impact AI workshops for board members, CXOs, and investment leaders."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Mentor to GCCs"})," – Advising on the establishment of world-class AI Centers of Excellence (CoEs) and AI teams."]})]}),c.jsx("h3",{children:"Professional Journey:"}),c.jsxs("ul",{className:"custom-list list-disc pl-6 text-gray-700",children:[c.jsxs("li",{children:[c.jsx("span",{children:"Advisor to YC-Backed AI Startups"})," – Recently mentored a YC company in developing mission-critical AI systems, showcased to Sam Altman & Vinod Khosla, securing Series B funding from Khosla Ventures."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Thought Leader & Author"})," – Authored a landmark AI book, widely regarded in academia and industry:",c.jsxs("ul",{className:"nested-list list-disc pl-10 mt-2 text-gray-700",children:[c.jsx("li",{children:"Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI, Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb, and YC-backed startups."}),c.jsx("li",{children:"Translated into five languages, with 260+ citations and adopted by 50+ global universities."}),c.jsx("li",{children:"Personally invited to present the book to Prof. Raj Reddy (Turing Award Winner, AI & Robotics luminary at CMU) and Dr. Srinivas Bangalore (Columbia, Princeton, Copenhagen Business School)."})]})]}),c.jsxs("li",{children:[c.jsx("span",{children:"Strategic AI Leadership"})," – Led AI teams from inception to scale (5–100 members) across multiple geographies, developing AI systems in NLP, Vision, Speech, and Data Science."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI-Driven Business Impact"})," – Built and commercialized AI solutions that have directly contributed to multi-million-dollar revenues, driving AI-led growth at both startups and Fortune 50 enterprises."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Pioneering AI-First Innovation"})," – Led AI efforts for one of the earliest AI-first startups (2013), culminating in acquisition by FreshWorks (NASDAQ: FRSH) in 2016."]}),c.jsxs("li",{children:[c.jsx("span",{children:"C-Suite & Board-Level Engagement"})," – Trusted advisor to Founders, Board Members, and C-suite executives across Business, Product, Engineering, Sales, and HR, driving AI adoption at an enterprise scale."]})]})]})}function i3(){return c.jsx(by,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[c.jsx(Jy,{}),c.jsx("main",{className:"flex-grow container mx-auto px-4 pt-24 pb-5",children:c.jsxs("div",{className:"flex flex-col md:flex-row gap-5",children:[c.jsx(nb,{}),c.jsx("div",{className:"flex-grow",children:c.jsxs(Q2,{children:[c.jsx(ma,{path:"/",element:c.jsx(eb,{})}),c.jsx(ma,{path:"/pages/book",element:c.jsx(Mx,{})}),c.jsx(ma,{path:"/pages/blog-post",element:c.jsx(Rx,{})}),c.jsx(ma,{path:"/pages/talk",element:c.jsx(e3,{})}),c.jsx(ma,{path:"/pages/workshop",element:c.jsx(t3,{})}),c.jsx(ma,{path:"/pages/publication",element:c.jsx(a3,{})}),c.jsx(ma,{path:"/pages/coaching",element:c.jsx(n3,{})}),c.jsx(ma,{path:"/pages/ai-playbook",element:c.jsx(l3,{})})]})})]})}),c.jsx(lb,{})]})})}n2.createRoot(document.getElementById("root")).render(c.jsx(O.StrictMode,{children:c.jsx(i3,{})}));
