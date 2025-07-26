(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function c1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var _u={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function Ug(){if(ch)return mi;ch=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(o,f,m){var b=null;if(m!==void 0&&(b=""+m),f.key!==void 0&&(b=""+f.key),"key"in f){m={};for(var g in f)g!=="key"&&(m[g]=f[g])}else m=f;return f=m.ref,{$$typeof:l,type:o,key:b,ref:f!==void 0?f:null,props:m}}return mi.Fragment=s,mi.jsx=u,mi.jsxs=u,mi}var fh;function Hg(){return fh||(fh=1,_u.exports=Ug()),_u.exports}var c=Hg(),Au={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function Bg(){if(dh)return ne;dh=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.iterator;function j(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,Y={};function B(w,U,J){this.props=w,this.context=U,this.refs=Y,this.updater=J||O}B.prototype.isReactComponent={},B.prototype.setState=function(w,U){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,U,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function L(){}L.prototype=B.prototype;function G(w,U,J){this.props=w,this.context=U,this.refs=Y,this.updater=J||O}var q=G.prototype=new L;q.constructor=G,C(q,B.prototype),q.isPureReactComponent=!0;var le=Array.isArray,Q={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function De(w,U,J,P,V,de){return J=de.ref,{$$typeof:l,type:w,key:U,ref:J!==void 0?J:null,props:de}}function Ye(w,U){return De(w.type,U,void 0,void 0,void 0,w.props)}function W(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function ie(w){var U={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return U[J]})}var tt=/\/+/g;function Qt(w,U){return typeof w=="object"&&w!==null&&w.key!=null?ie(""+w.key):U.toString(36)}function Dt(){}function Zt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Dt,Dt):(w.status="pending",w.then(function(U){w.status==="pending"&&(w.status="fulfilled",w.value=U)},function(U){w.status==="pending"&&(w.status="rejected",w.reason=U)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function it(w,U,J,P,V){var de=typeof w;(de==="undefined"||de==="boolean")&&(w=null);var re=!1;if(w===null)re=!0;else switch(de){case"bigint":case"string":case"number":re=!0;break;case"object":switch(w.$$typeof){case l:case s:re=!0;break;case x:return re=w._init,it(re(w._payload),U,J,P,V)}}if(re)return V=V(w),re=P===""?"."+Qt(w,0):P,le(V)?(J="",re!=null&&(J=re.replace(tt,"$&/")+"/"),it(V,U,J,"",function(Ue){return Ue})):V!=null&&(W(V)&&(V=Ye(V,J+(V.key==null||w&&w.key===V.key?"":(""+V.key).replace(tt,"$&/")+"/")+re)),U.push(V)),1;re=0;var at=P===""?".":P+":";if(le(w))for(var ye=0;ye<w.length;ye++)P=w[ye],de=at+Qt(P,ye),re+=it(P,U,J,de,V);else if(ye=j(w),typeof ye=="function")for(w=ye.call(w),ye=0;!(P=w.next()).done;)P=P.value,de=at+Qt(P,ye++),re+=it(P,U,J,de,V);else if(de==="object"){if(typeof w.then=="function")return it(Zt(w),U,J,P,V);throw U=String(w),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return re}function X(w,U,J){if(w==null)return w;var P=[],V=0;return it(w,P,"","",function(de){return U.call(J,de,V++)}),P}function ae(w){if(w._status===-1){var U=w._result;U=U(),U.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=U)}if(w._status===1)return w._result.default;throw w._result}var ee=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function we(){}return ne.Children={map:X,forEach:function(w,U,J){X(w,function(){U.apply(this,arguments)},J)},count:function(w){var U=0;return X(w,function(){U++}),U},toArray:function(w){return X(w,function(U){return U})||[]},only:function(w){if(!W(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ne.Component=B,ne.Fragment=u,ne.Profiler=f,ne.PureComponent=G,ne.StrictMode=o,ne.Suspense=y,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},ne.cache=function(w){return function(){return w.apply(null,arguments)}},ne.cloneElement=function(w,U,J){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var P=C({},w.props),V=w.key,de=void 0;if(U!=null)for(re in U.ref!==void 0&&(de=void 0),U.key!==void 0&&(V=""+U.key),U)!je.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(P[re]=U[re]);var re=arguments.length-2;if(re===1)P.children=J;else if(1<re){for(var at=Array(re),ye=0;ye<re;ye++)at[ye]=arguments[ye+2];P.children=at}return De(w.type,V,void 0,void 0,de,P)},ne.createContext=function(w){return w={$$typeof:b,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},ne.createElement=function(w,U,J){var P,V={},de=null;if(U!=null)for(P in U.key!==void 0&&(de=""+U.key),U)je.call(U,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(V[P]=U[P]);var re=arguments.length-2;if(re===1)V.children=J;else if(1<re){for(var at=Array(re),ye=0;ye<re;ye++)at[ye]=arguments[ye+2];V.children=at}if(w&&w.defaultProps)for(P in re=w.defaultProps,re)V[P]===void 0&&(V[P]=re[P]);return De(w,de,void 0,void 0,null,V)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(w){return{$$typeof:g,render:w}},ne.isValidElement=W,ne.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ae}},ne.memo=function(w,U){return{$$typeof:p,type:w,compare:U===void 0?null:U}},ne.startTransition=function(w){var U=Q.T,J={};Q.T=J;try{var P=w(),V=Q.S;V!==null&&V(J,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(we,ee)}catch(de){ee(de)}finally{Q.T=U}},ne.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ne.use=function(w){return Q.H.use(w)},ne.useActionState=function(w,U,J){return Q.H.useActionState(w,U,J)},ne.useCallback=function(w,U){return Q.H.useCallback(w,U)},ne.useContext=function(w){return Q.H.useContext(w)},ne.useDebugValue=function(){},ne.useDeferredValue=function(w,U){return Q.H.useDeferredValue(w,U)},ne.useEffect=function(w,U){return Q.H.useEffect(w,U)},ne.useId=function(){return Q.H.useId()},ne.useImperativeHandle=function(w,U,J){return Q.H.useImperativeHandle(w,U,J)},ne.useInsertionEffect=function(w,U){return Q.H.useInsertionEffect(w,U)},ne.useLayoutEffect=function(w,U){return Q.H.useLayoutEffect(w,U)},ne.useMemo=function(w,U){return Q.H.useMemo(w,U)},ne.useOptimistic=function(w,U){return Q.H.useOptimistic(w,U)},ne.useReducer=function(w,U,J){return Q.H.useReducer(w,U,J)},ne.useRef=function(w){return Q.H.useRef(w)},ne.useState=function(w){return Q.H.useState(w)},ne.useSyncExternalStore=function(w,U,J){return Q.H.useSyncExternalStore(w,U,J)},ne.useTransition=function(){return Q.H.useTransition()},ne.version="19.0.0",ne}var mh;function sc(){return mh||(mh=1,Au.exports=Bg()),Au.exports}var T=sc();const pa=c1(T);var Su={exports:{}},hi={},Nu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function qg(){return hh||(hh=1,function(l){function s(X,ae){var ee=X.length;X.push(ae);e:for(;0<ee;){var we=ee-1>>>1,w=X[we];if(0<f(w,ae))X[we]=ae,X[ee]=w,ee=we;else break e}}function u(X){return X.length===0?null:X[0]}function o(X){if(X.length===0)return null;var ae=X[0],ee=X.pop();if(ee!==ae){X[0]=ee;e:for(var we=0,w=X.length,U=w>>>1;we<U;){var J=2*(we+1)-1,P=X[J],V=J+1,de=X[V];if(0>f(P,ee))V<w&&0>f(de,P)?(X[we]=de,X[V]=ee,we=V):(X[we]=P,X[J]=ee,we=J);else if(V<w&&0>f(de,ee))X[we]=de,X[V]=ee,we=V;else break e}}return ae}function f(X,ae){var ee=X.sortIndex-ae.sortIndex;return ee!==0?ee:X.id-ae.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var b=Date,g=b.now();l.unstable_now=function(){return b.now()-g}}var y=[],p=[],x=1,M=null,j=3,O=!1,C=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function q(X){for(var ae=u(p);ae!==null;){if(ae.callback===null)o(p);else if(ae.startTime<=X)o(p),ae.sortIndex=ae.expirationTime,s(y,ae);else break;ae=u(p)}}function le(X){if(Y=!1,q(X),!C)if(u(y)!==null)C=!0,Zt();else{var ae=u(p);ae!==null&&it(le,ae.startTime-X)}}var Q=!1,je=-1,De=5,Ye=-1;function W(){return!(l.unstable_now()-Ye<De)}function ie(){if(Q){var X=l.unstable_now();Ye=X;var ae=!0;try{e:{C=!1,Y&&(Y=!1,L(je),je=-1),O=!0;var ee=j;try{t:{for(q(X),M=u(y);M!==null&&!(M.expirationTime>X&&W());){var we=M.callback;if(typeof we=="function"){M.callback=null,j=M.priorityLevel;var w=we(M.expirationTime<=X);if(X=l.unstable_now(),typeof w=="function"){M.callback=w,q(X),ae=!0;break t}M===u(y)&&o(y),q(X)}else o(y);M=u(y)}if(M!==null)ae=!0;else{var U=u(p);U!==null&&it(le,U.startTime-X),ae=!1}}break e}finally{M=null,j=ee,O=!1}ae=void 0}}finally{ae?tt():Q=!1}}}var tt;if(typeof G=="function")tt=function(){G(ie)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Dt=Qt.port2;Qt.port1.onmessage=ie,tt=function(){Dt.postMessage(null)}}else tt=function(){B(ie,0)};function Zt(){Q||(Q=!0,tt())}function it(X,ae){je=B(function(){X(l.unstable_now())},ae)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(X){X.callback=null},l.unstable_continueExecution=function(){C||O||(C=!0,Zt())},l.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<X?Math.floor(1e3/X):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_getFirstCallbackNode=function(){return u(y)},l.unstable_next=function(X){switch(j){case 1:case 2:case 3:var ae=3;break;default:ae=j}var ee=j;j=ae;try{return X()}finally{j=ee}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(X,ae){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=j;j=X;try{return ae()}finally{j=ee}},l.unstable_scheduleCallback=function(X,ae,ee){var we=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?we+ee:we):ee=we,X){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ee+w,X={id:x++,callback:ae,priorityLevel:X,startTime:ee,expirationTime:w,sortIndex:-1},ee>we?(X.sortIndex=ee,s(p,X),u(y)===null&&X===u(p)&&(Y?(L(je),je=-1):Y=!0,it(le,ee-we))):(X.sortIndex=w,s(y,X),C||O||(C=!0,Zt())),X},l.unstable_shouldYield=W,l.unstable_wrapCallback=function(X){var ae=j;return function(){var ee=j;j=ae;try{return X.apply(this,arguments)}finally{j=ee}}}}(ju)),ju}var ph;function Gg(){return ph||(ph=1,Nu.exports=qg()),Nu.exports}var Eu={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Xg(){if(gh)return Je;gh=1;var l=sc();function s(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:y,containerInfo:p,implementation:x}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Je.createPortal=function(y,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return m(y,p,null,x)},Je.flushSync=function(y){var p=b.T,x=o.p;try{if(b.T=null,o.p=2,y)return y()}finally{b.T=p,o.p=x,o.d.f()}},Je.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},Je.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Je.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin),j=typeof p.integrity=="string"?p.integrity:void 0,O=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:j,fetchPriority:O}):x==="script"&&o.d.X(y,{crossOrigin:M,integrity:j,fetchPriority:O,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(y)},Je.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin);o.d.L(y,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(y,p){if(typeof y=="string")if(p){var x=g(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(y)},Je.requestFormReset=function(y){o.d.r(y)},Je.unstable_batchedUpdates=function(y,p){return y(p)},Je.useFormState=function(y,p,x){return b.H.useFormState(y,p,x)},Je.useFormStatus=function(){return b.H.useHostTransitionStatus()},Je.version="19.0.0",Je}var yh;function Yg(){if(yh)return Eu.exports;yh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Eu.exports=Xg(),Eu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Vg(){if(bh)return hi;bh=1;var l=Gg(),s=sc(),u=Yg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var m=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),le=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case g:return"Portal";case x:return"Profiler";case p:return"StrictMode";case Y:return"Suspense";case B:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:return(e.displayName||"Context")+".Provider";case j:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var W=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=Object.assign,tt,Qt;function Dt(e){if(tt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);tt=t&&t[1]||"",Qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+e+Qt}var Zt=!1;function it(e,t){if(!e||Zt)return"";Zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(k){var E=k}Reflect.construct(e,[],R)}else{try{R.call()}catch(k){E=k}e.call(R.prototype)}}else{try{throw Error()}catch(k){E=k}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(k){if(k&&E&&typeof k.stack=="string")return[k.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),d=r[0],h=r[1];if(d&&h){var v=d.split(`
`),A=h.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===A.length)for(n=v.length-1,i=A.length-1;1<=n&&0<=i&&v[n]!==A[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==A[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==A[i]){var z=`
`+v[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{Zt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dt(a):""}function X(e){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return e=it(e.type,!1),e;case 11:return e=it(e.type.render,!1),e;case 1:return e=it(e.type,!0),e;default:return""}}function ae(e){try{var t="";do t+=X(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ee(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function we(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(ee(e)!==e)throw Error(o(188))}function U(e){var t=e.alternate;if(!t){if(t=ee(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return w(i),e;if(r===n)return w(i),t;r=r.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=r;else{for(var d=!1,h=i.child;h;){if(h===a){d=!0,a=i,n=r;break}if(h===n){d=!0,n=i,a=r;break}h=h.sibling}if(!d){for(h=r.child;h;){if(h===a){d=!0,a=r,n=i;break}if(h===n){d=!0,n=r,a=i;break}h=h.sibling}if(!d)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function J(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=J(e),t!==null)return t;e=e.sibling}return null}var P=Array.isArray,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},re=[],at=-1;function ye(e){return{current:e}}function Ue(e){0>at||(e.current=re[at],re[at]=null,at--)}function Ne(e,t){at++,re[at]=e.current,e.current=t}var Lt=ye(null),gl=ye(null),_a=ye(null),ki=ye(null);function Mi(e,t){switch(Ne(_a,t),Ne(gl,e),Ne(Lt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Bm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Bm(e),t=qm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ue(Lt),Ne(Lt,t)}function En(){Ue(Lt),Ue(gl),Ue(_a)}function ds(e){e.memoizedState!==null&&Ne(ki,e);var t=Lt.current,a=qm(t,e.type);t!==a&&(Ne(gl,e),Ne(Lt,a))}function zi(e){gl.current===e&&(Ue(Lt),Ue(gl)),ki.current===e&&(Ue(ki),oi._currentValue=de)}var ms=Object.prototype.hasOwnProperty,hs=l.unstable_scheduleCallback,ps=l.unstable_cancelCallback,pp=l.unstable_shouldYield,gp=l.unstable_requestPaint,Rt=l.unstable_now,yp=l.unstable_getCurrentPriorityLevel,Ec=l.unstable_ImmediatePriority,Tc=l.unstable_UserBlockingPriority,Di=l.unstable_NormalPriority,bp=l.unstable_LowPriority,Oc=l.unstable_IdlePriority,vp=l.log,xp=l.unstable_setDisableYieldValue,yl=null,ut=null;function wp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}function Aa(e){if(typeof vp=="function"&&xp(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(yl,e)}catch{}}var ct=Math.clz32?Math.clz32:Sp,_p=Math.log,Ap=Math.LN2;function Sp(e){return e>>>=0,e===0?32:31-(_p(e)/Ap|0)|0}var Li=128,Ri=4194304;function en(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ui(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes,d=e.warmLanes;e=e.finishedLanes!==0;var h=a&134217727;return h!==0?(a=h&~i,a!==0?n=en(a):(r&=h,r!==0?n=en(r):e||(d=h&~d,d!==0&&(n=en(d))))):(h=a&~i,h!==0?n=en(h):r!==0?n=en(r):e||(d=a&~d,d!==0&&(n=en(d)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,d=t&-t,i>=d||i===32&&(d&4194176)!==0)?t:n}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Np(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cc(){var e=Li;return Li<<=1,(Li&4194176)===0&&(Li=128),e}function kc(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function gs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jp(e,t,a,n,i,r){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(a=d&~a;0<a;){var z=31-ct(a),R=1<<z;h[z]=0,v[z]=-1;var E=A[z];if(E!==null)for(A[z]=null,z=0;z<E.length;z++){var k=E[z];k!==null&&(k.lane&=-536870913)}a&=~R}n!==0&&Mc(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function Mc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function zc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Dc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:lh(e.type))}function Ep(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var Sa=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Sa,rt="__reactProps$"+Sa,Tn="__reactContainer$"+Sa,ys="__reactEvents$"+Sa,Tp="__reactListeners$"+Sa,Op="__reactHandles$"+Sa,Rc="__reactResources$"+Sa,xl="__reactMarker$"+Sa;function bs(e){delete e[Pe],delete e[rt],delete e[ys],delete e[Tp],delete e[Op]}function tn(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Tn]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ym(e);e!==null;){if(a=e[Pe])return a;e=Ym(e)}return t}e=a,a=e.parentNode}return null}function On(e){if(e=e[Pe]||e[Tn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Cn(e){var t=e[Rc];return t||(t=e[Rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[xl]=!0}var Uc=new Set,Hc={};function an(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(Hc[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},qc={};function kp(e){return ms.call(qc,e)?!0:ms.call(Bc,e)?!1:Cp.test(e)?qc[e]=!0:(Bc[e]=!0,!1)}function Hi(e,t,a){if(kp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Bi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e){var t=Gc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=Mp(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Gc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zp=/[\n"\\]/g;function bt(e){return e.replace(zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vs(e,t,a,n,i,r,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?xs(e,d,yt(t)):a!=null?xs(e,d,yt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+yt(h):e.removeAttribute("name")}function Yc(e,t,a,n,i,r,d,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function xs(e,t,a){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function $c(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(P(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function zn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Dp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ic(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Wc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Wc(e,r,t[r])}function ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(e){return Rp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _s=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,Ln=null;function Qc(e){var t=On(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[rt]||null;if(!i)throw Error(o(90));vs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Xc(n)}break e;case"textarea":Vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Mn(e,!!a.multiple,t,!1)}}}var Ss=!1;function Zc(e,t,a){if(Ss)return e(t,a);Ss=!0;try{var n=e(t);return n}finally{if(Ss=!1,(Dn!==null||Ln!==null)&&(Nr(),Dn&&(t=Dn,e=Ln,Ln=Dn=null,Qc(t),e)))for(t=0;t<e.length;t++)Qc(e[t])}}function _l(e,t){var a=e.stateNode;if(a===null)return null;var n=a[rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ns=!1;if(Kt)try{var Al={};Object.defineProperty(Al,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",Al,Al),window.removeEventListener("test",Al,Al)}catch{Ns=!1}var Na=null,js=null,Yi=null;function Kc(){if(Yi)return Yi;var e,t=js,a=t.length,n,i="value"in Na?Na.value:Na.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[r-n];n++);return Yi=i.slice(e,1<n?1-n:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Pc(){return!1}function st(e){function t(a,n,i,r,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?$i:Pc,this.isPropagationStopped=Pc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=st(nn),Sl=ie({},nn,{view:0,detail:0}),Up=st(Sl),Es,Ts,Nl,Ii=ie({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(Es=e.screenX-Nl.screenX,Ts=e.screenY-Nl.screenY):Ts=Es=0,Nl=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),Fc=st(Ii),Hp=ie({},Ii,{dataTransfer:0}),Bp=st(Hp),qp=ie({},Sl,{relatedTarget:0}),Os=st(qp),Gp=ie({},nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=st(Gp),Yp=ie({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vp=st(Yp),$p=ie({},nn,{data:0}),Jc=st($p),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qp[e])?!!t[e]:!1}function Cs(){return Zp}var Kp=ie({},Sl,{key:function(e){if(e.key){var t=Wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pp=st(Kp),Fp=ie({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=st(Fp),Jp=ie({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),e0=st(Jp),t0=ie({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=st(t0),n0=ie({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=st(n0),i0=ie({},nn,{newState:0,oldState:0}),r0=st(i0),s0=[9,13,27,32],ks=Kt&&"CompositionEvent"in window,jl=null;Kt&&"documentMode"in document&&(jl=document.documentMode);var o0=Kt&&"TextEvent"in window&&!jl,tf=Kt&&(!ks||jl&&8<jl&&11>=jl),af=" ",nf=!1;function lf(e,t){switch(e){case"keyup":return s0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function u0(e,t){switch(e){case"compositionend":return rf(t);case"keypress":return t.which!==32?null:(nf=!0,af);case"textInput":return e=t.data,e===af&&nf?null:e;default:return null}}function c0(e,t){if(Rn)return e==="compositionend"||!ks&&lf(e,t)?(e=Kc(),Yi=js=Na=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tf&&t.locale!=="ko"?null:t.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f0[e.type]:t==="textarea"}function of(e,t,a,n){Dn?Ln?Ln.push(n):Ln=[n]:Dn=n,t=Cr(t,"onChange"),0<t.length&&(a=new Wi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var El=null,Tl=null;function d0(e){Dm(e,0)}function Qi(e){var t=wl(e);if(Xc(t))return e}function uf(e,t){if(e==="change")return t}var cf=!1;if(Kt){var Ms;if(Kt){var zs="oninput"in document;if(!zs){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),zs=typeof ff.oninput=="function"}Ms=zs}else Ms=!1;cf=Ms&&(!document.documentMode||9<document.documentMode)}function df(){El&&(El.detachEvent("onpropertychange",mf),Tl=El=null)}function mf(e){if(e.propertyName==="value"&&Qi(Tl)){var t=[];of(t,Tl,e,As(e)),Zc(d0,t)}}function m0(e,t,a){e==="focusin"?(df(),El=t,Tl=a,El.attachEvent("onpropertychange",mf)):e==="focusout"&&df()}function h0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Tl)}function p0(e,t){if(e==="click")return Qi(t)}function g0(e,t){if(e==="input"||e==="change")return Qi(t)}function y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:y0;function Ol(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ms.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function hf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,t){var a=hf(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hf(a)}}function gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Gi(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b0(e,t){var a=yf(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&gf(t.ownerDocument.documentElement,t)){if(n!==null&&Ds(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var i=t.textContent.length,r=Math.min(n.start,i);n=n.end===void 0?r:Math.min(n.end,i),!a.extend&&r>n&&(i=n,n=r,r=i),i=pf(t,r);var d=pf(t,n);i&&d&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==d.node||a.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),a.removeAllRanges(),r>n?(a.addRange(e),a.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var v0=Kt&&"documentMode"in document&&11>=document.documentMode,Un=null,Ls=null,Cl=null,Rs=!1;function bf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rs||Un==null||Un!==Gi(n)||(n=Un,"selectionStart"in n&&Ds(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cl&&Ol(Cl,n)||(Cl=n,n=Cr(Ls,"onSelect"),0<n.length&&(t=new Wi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Un)))}function ln(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Hn={animationend:ln("Animation","AnimationEnd"),animationiteration:ln("Animation","AnimationIteration"),animationstart:ln("Animation","AnimationStart"),transitionrun:ln("Transition","TransitionRun"),transitionstart:ln("Transition","TransitionStart"),transitioncancel:ln("Transition","TransitionCancel"),transitionend:ln("Transition","TransitionEnd")},Us={},vf={};Kt&&(vf=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function rn(e){if(Us[e])return Us[e];if(!Hn[e])return e;var t=Hn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in vf)return Us[e]=t[a];return e}var xf=rn("animationend"),wf=rn("animationiteration"),_f=rn("animationstart"),x0=rn("transitionrun"),w0=rn("transitionstart"),_0=rn("transitioncancel"),Af=rn("transitionend"),Sf=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ct(e,t){Sf.set(e,t),an(t,[e])}var vt=[],Bn=0,Hs=0;function Zi(){for(var e=Bn,t=Hs=Bn=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var r=vt[t];if(vt[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}r!==0&&jf(a,i,r)}}function Ki(e,t,a,n){vt[Bn++]=e,vt[Bn++]=t,vt[Bn++]=a,vt[Bn++]=n,Hs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Bs(e,t,a,n){return Ki(e,t,a,n),Pi(e)}function ja(e,t){return Ki(e,null,null,t),Pi(e)}function jf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;i&&t!==null&&e.tag===3&&(r=e.stateNode,i=31-ct(a),r=r.hiddenUpdates,e=r[i],e===null?r[i]=[t]:e.push(t),t.lane=a|536870912)}function Pi(e){if(50<ti)throw ti=0,Wo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qn={},Ef=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Ef.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ae(t)},Ef.set(e,t),t)}return{value:e,source:t,stack:ae(t)}}var Gn=[],Xn=0,Fi=null,Ji=0,wt=[],_t=0,sn=null,Ft=1,Jt="";function on(e,t){Gn[Xn++]=Ji,Gn[Xn++]=Fi,Fi=e,Ji=t}function Tf(e,t,a){wt[_t++]=Ft,wt[_t++]=Jt,wt[_t++]=sn,sn=e;var n=Ft;e=Jt;var i=32-ct(n)-1;n&=~(1<<i),a+=1;var r=32-ct(t)+i;if(30<r){var d=i-i%5;r=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Ft=1<<32-ct(t)+i|a<<i|n,Jt=r+e}else Ft=1<<r|a<<i|n,Jt=e}function qs(e){e.return!==null&&(on(e,1),Tf(e,1,0))}function Gs(e){for(;e===Fi;)Fi=Gn[--Xn],Gn[Xn]=null,Ji=Gn[--Xn],Gn[Xn]=null;for(;e===sn;)sn=wt[--_t],wt[_t]=null,Jt=wt[--_t],wt[_t]=null,Ft=wt[--_t],wt[_t]=null}var nt=null,Qe=null,he=!1,kt=null,Ut=!1,Xs=Error(o(519));function un(e){var t=Error(o(418,""));throw zl(xt(t,e)),Xs}function Of(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Pe]=e,t[rt]=n,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<ni.length;a++)fe(ni[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Yc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),qi(t);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),$c(t,n.value,n.defaultValue,n.children),qi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Hm(t.textContent,a)?(n.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),n.onScroll!=null&&fe("scroll",t),n.onScrollEnd!=null&&fe("scrollend",t),n.onClick!=null&&(t.onclick=kr),t=!0):t=!1,t||un(e)}function Cf(e){for(nt=e.return;nt;)switch(nt.tag){case 3:case 27:Ut=!0;return;case 5:case 13:Ut=!1;return;default:nt=nt.return}}function kl(e){if(e!==nt)return!1;if(!he)return Cf(e),he=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uu(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&Qe&&un(e),Cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Qe=zt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Qe=null}}else Qe=nt?zt(e.stateNode.nextSibling):null;return!0}function Ml(){Qe=nt=null,he=!1}function zl(e){kt===null?kt=[e]:kt.push(e)}var Dl=Error(o(460)),kf=Error(o(474)),Ys={then:function(){}};function Mf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function er(){}function zf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(er,er),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Dl?Error(o(483)):e;default:if(typeof t.status=="string")t.then(er,er);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Dl?Error(o(483)):e}throw Ll=t,Dl}}var Ll=null;function Df(){if(Ll===null)throw Error(o(459));var e=Ll;return Ll=null,e}var Yn=null,Rl=0;function tr(e){var t=Rl;return Rl+=1,Yn===null&&(Yn=[]),zf(Yn,e,t)}function Ul(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ar(e,t){throw t.$$typeof===m?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Lf(e){var t=e._init;return t(e._payload)}function Rf(e){function t(S,_){if(e){var N=S.deletions;N===null?(S.deletions=[_],S.flags|=16):N.push(_)}}function a(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function n(S){for(var _=new Map;S!==null;)S.key!==null?_.set(S.key,S):_.set(S.index,S),S=S.sibling;return _}function i(S,_){return S=Ha(S,_),S.index=0,S.sibling=null,S}function r(S,_,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<_?(S.flags|=33554434,_):N):(S.flags|=33554434,_)):(S.flags|=1048576,_)}function d(S){return e&&S.alternate===null&&(S.flags|=33554434),S}function h(S,_,N,D){return _===null||_.tag!==6?(_=Ho(N,S.mode,D),_.return=S,_):(_=i(_,N),_.return=S,_)}function v(S,_,N,D){var $=N.type;return $===y?z(S,_,N.props.children,D,N.key):_!==null&&(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===G&&Lf($)===_.type)?(_=i(_,N.props),Ul(_,N),_.return=S,_):(_=xr(N.type,N.key,N.props,null,S.mode,D),Ul(_,N),_.return=S,_)}function A(S,_,N,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==N.containerInfo||_.stateNode.implementation!==N.implementation?(_=Bo(N,S.mode,D),_.return=S,_):(_=i(_,N.children||[]),_.return=S,_)}function z(S,_,N,D,$){return _===null||_.tag!==7?(_=vn(N,S.mode,D,$),_.return=S,_):(_=i(_,N),_.return=S,_)}function R(S,_,N){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Ho(""+_,S.mode,N),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case b:return N=xr(_.type,_.key,_.props,null,S.mode,N),Ul(N,_),N.return=S,N;case g:return _=Bo(_,S.mode,N),_.return=S,_;case G:var D=_._init;return _=D(_._payload),R(S,_,N)}if(P(_)||je(_))return _=vn(_,S.mode,N,null),_.return=S,_;if(typeof _.then=="function")return R(S,tr(_),N);if(_.$$typeof===O)return R(S,yr(S,_),N);ar(S,_)}return null}function E(S,_,N,D){var $=_!==null?_.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return $!==null?null:h(S,_,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case b:return N.key===$?v(S,_,N,D):null;case g:return N.key===$?A(S,_,N,D):null;case G:return $=N._init,N=$(N._payload),E(S,_,N,D)}if(P(N)||je(N))return $!==null?null:z(S,_,N,D,null);if(typeof N.then=="function")return E(S,_,tr(N),D);if(N.$$typeof===O)return E(S,_,yr(S,N),D);ar(S,N)}return null}function k(S,_,N,D,$){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(N)||null,h(_,S,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return S=S.get(D.key===null?N:D.key)||null,v(_,S,D,$);case g:return S=S.get(D.key===null?N:D.key)||null,A(_,S,D,$);case G:var oe=D._init;return D=oe(D._payload),k(S,_,N,D,$)}if(P(D)||je(D))return S=S.get(N)||null,z(_,S,D,$,null);if(typeof D.then=="function")return k(S,_,N,tr(D),$);if(D.$$typeof===O)return k(S,_,N,yr(_,D),$);ar(_,D)}return null}function I(S,_,N,D){for(var $=null,oe=null,K=_,F=_=0,Ie=null;K!==null&&F<N.length;F++){K.index>F?(Ie=K,K=null):Ie=K.sibling;var pe=E(S,K,N[F],D);if(pe===null){K===null&&(K=Ie);break}e&&K&&pe.alternate===null&&t(S,K),_=r(pe,_,F),oe===null?$=pe:oe.sibling=pe,oe=pe,K=Ie}if(F===N.length)return a(S,K),he&&on(S,F),$;if(K===null){for(;F<N.length;F++)K=R(S,N[F],D),K!==null&&(_=r(K,_,F),oe===null?$=K:oe.sibling=K,oe=K);return he&&on(S,F),$}for(K=n(K);F<N.length;F++)Ie=k(K,S,F,N[F],D),Ie!==null&&(e&&Ie.alternate!==null&&K.delete(Ie.key===null?F:Ie.key),_=r(Ie,_,F),oe===null?$=Ie:oe.sibling=Ie,oe=Ie);return e&&K.forEach(function($a){return t(S,$a)}),he&&on(S,F),$}function te(S,_,N,D){if(N==null)throw Error(o(151));for(var $=null,oe=null,K=_,F=_=0,Ie=null,pe=N.next();K!==null&&!pe.done;F++,pe=N.next()){K.index>F?(Ie=K,K=null):Ie=K.sibling;var $a=E(S,K,pe.value,D);if($a===null){K===null&&(K=Ie);break}e&&K&&$a.alternate===null&&t(S,K),_=r($a,_,F),oe===null?$=$a:oe.sibling=$a,oe=$a,K=Ie}if(pe.done)return a(S,K),he&&on(S,F),$;if(K===null){for(;!pe.done;F++,pe=N.next())pe=R(S,pe.value,D),pe!==null&&(_=r(pe,_,F),oe===null?$=pe:oe.sibling=pe,oe=pe);return he&&on(S,F),$}for(K=n(K);!pe.done;F++,pe=N.next())pe=k(K,S,F,pe.value,D),pe!==null&&(e&&pe.alternate!==null&&K.delete(pe.key===null?F:pe.key),_=r(pe,_,F),oe===null?$=pe:oe.sibling=pe,oe=pe);return e&&K.forEach(function(Rg){return t(S,Rg)}),he&&on(S,F),$}function ze(S,_,N,D){if(typeof N=="object"&&N!==null&&N.type===y&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case b:e:{for(var $=N.key;_!==null;){if(_.key===$){if($=N.type,$===y){if(_.tag===7){a(S,_.sibling),D=i(_,N.props.children),D.return=S,S=D;break e}}else if(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===G&&Lf($)===_.type){a(S,_.sibling),D=i(_,N.props),Ul(D,N),D.return=S,S=D;break e}a(S,_);break}else t(S,_);_=_.sibling}N.type===y?(D=vn(N.props.children,S.mode,D,N.key),D.return=S,S=D):(D=xr(N.type,N.key,N.props,null,S.mode,D),Ul(D,N),D.return=S,S=D)}return d(S);case g:e:{for($=N.key;_!==null;){if(_.key===$)if(_.tag===4&&_.stateNode.containerInfo===N.containerInfo&&_.stateNode.implementation===N.implementation){a(S,_.sibling),D=i(_,N.children||[]),D.return=S,S=D;break e}else{a(S,_);break}else t(S,_);_=_.sibling}D=Bo(N,S.mode,D),D.return=S,S=D}return d(S);case G:return $=N._init,N=$(N._payload),ze(S,_,N,D)}if(P(N))return I(S,_,N,D);if(je(N)){if($=je(N),typeof $!="function")throw Error(o(150));return N=$.call(N),te(S,_,N,D)}if(typeof N.then=="function")return ze(S,_,tr(N),D);if(N.$$typeof===O)return ze(S,_,yr(S,N),D);ar(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,_!==null&&_.tag===6?(a(S,_.sibling),D=i(_,N),D.return=S,S=D):(a(S,_),D=Ho(N,S.mode,D),D.return=S,S=D),d(S)):a(S,_)}return function(S,_,N,D){try{Rl=0;var $=ze(S,_,N,D);return Yn=null,$}catch(K){if(K===Dl)throw K;var oe=jt(29,K,null,S.mode);return oe.lanes=D,oe.return=S,oe}finally{}}}var cn=Rf(!0),Uf=Rf(!1),Vn=ye(null),nr=ye(0);function Hf(e,t){e=ca,Ne(nr,e),Ne(Vn,t),ca=e|t.baseLanes}function Vs(){Ne(nr,ca),Ne(Vn,Vn.current)}function $s(){ca=nr.current,Ue(Vn),Ue(nr)}var At=ye(null),Ht=null;function Ea(e){var t=e.alternate;Ne(Ge,Ge.current&1),Ne(At,e),Ht===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&(Ht=e)}function Bf(e){if(e.tag===22){if(Ne(Ge,Ge.current),Ne(At,e),Ht===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ht=e)}}else Ta()}function Ta(){Ne(Ge,Ge.current),Ne(At,At.current)}function ea(e){Ue(At),Ht===e&&(Ht=null),Ue(Ge)}var Ge=ye(0);function lr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var A0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},S0=l.unstable_scheduleCallback,N0=l.unstable_NormalPriority,Xe={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ws(){return{controller:new A0,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&S0(N0,function(){e.controller.abort()})}var Bl=null,Is=0,$n=0,Wn=null;function j0(e,t){if(Bl===null){var a=Bl=[];Is=0,$n=eu(),Wn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Is++,t.then(qf,qf),t}function qf(){if(--Is===0&&Bl!==null){Wn!==null&&(Wn.status="fulfilled");var e=Bl;Bl=null,$n=0,Wn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Gf=W.S;W.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&j0(e,t),Gf!==null&&Gf(e,t)};var fn=ye(null);function Qs(){var e=fn.current;return e!==null?e:_e.pooledCache}function ir(e,t){t===null?Ne(fn,fn.current):Ne(fn,t.pool)}function Xf(){var e=Qs();return e===null?null:{parent:Xe._currentValue,pool:e}}var Oa=0,se=null,be=null,He=null,rr=!1,In=!1,dn=!1,sr=0,ql=0,Qn=null,T0=0;function Le(){throw Error(o(321))}function Zs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function Ks(e,t,a,n,i,r){return Oa=r,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,W.H=e===null||e.memoizedState===null?mn:Ca,dn=!1,r=a(n,i),dn=!1,In&&(r=Vf(t,a,n,i)),Yf(e),r}function Yf(e){W.H=Bt;var t=be!==null&&be.next!==null;if(Oa=0,He=be=se=null,rr=!1,ql=0,Qn=null,t)throw Error(o(300));e===null||$e||(e=e.dependencies,e!==null&&gr(e)&&($e=!0))}function Vf(e,t,a,n){se=e;var i=0;do{if(In&&(Qn=null),ql=0,In=!1,25<=i)throw Error(o(301));if(i+=1,He=be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}W.H=hn,r=t(a,n)}while(In);return r}function O0(){var e=W.H,t=e.useState()[0];return t=typeof t.then=="function"?Gl(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(se.flags|=1024),t}function Ps(){var e=sr!==0;return sr=0,e}function Fs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Js(e){if(rr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rr=!1}Oa=0,He=be=se=null,In=!1,ql=sr=0,Qn=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?se.memoizedState=He=e:He=He.next=e,He}function Be(){if(be===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=He===null?se.memoizedState:He.next;if(t!==null)He=t,be=e;else{if(e===null)throw se.alternate===null?Error(o(467)):Error(o(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},He===null?se.memoizedState=He=e:He=He.next=e}return He}var or;or=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Gl(e){var t=ql;return ql+=1,Qn===null&&(Qn=[]),e=zf(Qn,e,t),t=se,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,W.H=t===null||t.memoizedState===null?mn:Ca),e}function ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gl(e);if(e.$$typeof===O)return Fe(e)}throw Error(o(438,String(e)))}function eo(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=or(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=le;return t.index++,a}function ta(e,t){return typeof t=="function"?t(e):t}function cr(e){var t=Be();return to(t,be,e)}function to(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=d=null,v=null,A=t,z=!1;do{var R=A.lane&-536870913;if(R!==A.lane?(me&R)===R:(Oa&R)===R){var E=A.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),R===$n&&(z=!0);else if((Oa&E)===E){A=A.next,E===$n&&(z=!0);continue}else R={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=R,d=r):v=v.next=R,se.lanes|=E,Ba|=E;R=A.action,dn&&a(r,R),r=A.hasEagerState?A.eagerState:a(r,R)}else E={lane:R,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=E,d=r):v=v.next=E,se.lanes|=R,Ba|=R;A=A.next}while(A!==null&&A!==t);if(v===null?d=r:v.next=h,!ft(r,e.memoizedState)&&($e=!0,z&&(a=Wn,a!==null)))throw a;e.memoizedState=r,e.baseState=d,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ao(e){var t=Be(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);ft(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function $f(e,t,a){var n=se,i=Be(),r=he;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var d=!ft((be||i).memoizedState,a);if(d&&(i.memoizedState=a,$e=!0),i=i.queue,io(Qf.bind(null,n,i,e),[e]),i.getSnapshot!==t||d||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Zn(9,If.bind(null,n,i,a,t),{destroy:void 0},null),_e===null)throw Error(o(349));r||(Oa&60)!==0||Wf(n,t,a)}return a}function Wf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=or(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function If(e,t,a,n){t.value=a,t.getSnapshot=n,Zf(t)&&Kf(e)}function Qf(e,t,a){return a(function(){Zf(t)&&Kf(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Kf(e){var t=ja(e,2);t!==null&&lt(t,e,2)}function no(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),dn){Aa(!0);try{a()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t}function Pf(e,t,a,n){return e.baseState=a,to(e,be,typeof n=="function"?n:ta)}function C0(e,t,a,n,i){if(mr(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};W.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Ff(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Ff(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=W.T,d={};W.T=d;try{var h=a(i,n),v=W.S;v!==null&&v(d,h),Jf(e,t,h)}catch(A){lo(e,t,A)}finally{W.T=r}}else try{r=a(i,n),Jf(e,t,r)}catch(A){lo(e,t,A)}}function Jf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){ed(e,t,n)},function(n){return lo(e,t,n)}):ed(e,t,a)}function ed(e,t,a){t.status="fulfilled",t.value=a,td(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ff(e,a)))}function lo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,td(t),t=t.next;while(t!==n)}e.action=null}function td(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ad(e,t){return t}function nd(e,t){if(he){var a=_e.formState;if(a!==null){e:{var n=se;if(he){if(Qe){t:{for(var i=Qe,r=Ut;i.nodeType!==8;){if(!r){i=null;break t}if(i=zt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Qe=zt(i.nextSibling),n=i.data==="F!";break e}}un(n)}n=!1}n&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ad,lastRenderedState:t},a.queue=n,a=wd.bind(null,se,n),n.dispatch=a,n=no(!1),r=co.bind(null,se,!1,n.queue),n=ot(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=C0.bind(null,se,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function ld(e){var t=Be();return id(t,be,e)}function id(e,t,a){t=to(e,t,ad)[0],e=cr(ta)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Gl(t):t;var n=Be(),i=n.queue,r=i.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Zn(9,k0.bind(null,i,a),{destroy:void 0},null)),[t,r,e]}function k0(e,t){e.action=t}function rd(e){var t=Be(),a=be;if(a!==null)return id(t,a,e);Be(),t=t.memoizedState,a=Be();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Zn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=se.updateQueue,t===null&&(t=or(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function sd(){return Be().memoizedState}function fr(e,t,a,n){var i=ot();se.flags|=e,i.memoizedState=Zn(1|t,a,{destroy:void 0},n===void 0?null:n)}function dr(e,t,a,n){var i=Be();n=n===void 0?null:n;var r=i.memoizedState.inst;be!==null&&n!==null&&Zs(n,be.memoizedState.deps)?i.memoizedState=Zn(t,a,r,n):(se.flags|=e,i.memoizedState=Zn(1|t,a,r,n))}function od(e,t){fr(8390656,8,e,t)}function io(e,t){dr(2048,8,e,t)}function ud(e,t){return dr(4,2,e,t)}function cd(e,t){return dr(4,4,e,t)}function fd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,a){a=a!=null?a.concat([e]):null,dr(4,4,fd.bind(null,t,e),a)}function ro(){}function md(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Zs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function hd(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Zs(t,n[1]))return n[0];if(n=e(),dn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n}function so(e,t,a){return a===void 0||(Oa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=gm(),se.lanes|=e,Ba|=e,a)}function pd(e,t,a,n){return ft(a,t)?a:Vn.current!==null?(e=so(e,a,n),ft(e,t)||($e=!0),e):(Oa&42)===0?($e=!0,e.memoizedState=a):(e=gm(),se.lanes|=e,Ba|=e,t)}function gd(e,t,a,n,i){var r=V.p;V.p=r!==0&&8>r?r:8;var d=W.T,h={};W.T=h,co(e,!1,t,a);try{var v=i(),A=W.S;if(A!==null&&A(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=E0(v,n);Xl(e,t,z,pt(e))}else Xl(e,t,n,pt(e))}catch(R){Xl(e,t,{then:function(){},status:"rejected",reason:R},pt())}finally{V.p=r,W.T=d}}function M0(){}function oo(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=yd(e).queue;gd(e,i,t,de,a===null?M0:function(){return bd(e),a(n)})}function yd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:de},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bd(e){var t=yd(e).next.queue;Xl(e,t,{},pt())}function uo(){return Fe(oi)}function vd(){return Be().memoizedState}function xd(){return Be().memoizedState}function z0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=za(a);var n=Da(t,e,a);n!==null&&(lt(n,t,a),$l(n,t,a)),t={cache:Ws()},e.payload=t;return}t=t.return}}function D0(e,t,a){var n=pt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},mr(e)?_d(t,a):(a=Bs(e,t,a,n),a!==null&&(lt(a,e,n),Ad(a,t,n)))}function wd(e,t,a){var n=pt();Xl(e,t,a,n)}function Xl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(mr(e))_d(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,h=r(d,a);if(i.hasEagerState=!0,i.eagerState=h,ft(h,d))return Ki(e,t,i,0),_e===null&&Zi(),!1}catch{}finally{}if(a=Bs(e,t,i,n),a!==null)return lt(a,e,n),Ad(a,t,n),!0}return!1}function co(e,t,a,n){if(n={lane:2,revertLane:eu(),action:n,hasEagerState:!1,eagerState:null,next:null},mr(e)){if(t)throw Error(o(479))}else t=Bs(e,a,n,2),t!==null&&lt(t,e,2)}function mr(e){var t=e.alternate;return e===se||t!==null&&t===se}function _d(e,t){In=rr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ad(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zc(e,a)}}var Bt={readContext:Fe,use:ur,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le};Bt.useCacheRefresh=Le,Bt.useMemoCache=Le,Bt.useHostTransitionStatus=Le,Bt.useFormState=Le,Bt.useActionState=Le,Bt.useOptimistic=Le;var mn={readContext:Fe,use:ur,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:od,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,fr(4194308,4,fd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return fr(4194308,4,e,t)},useInsertionEffect:function(e,t){fr(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var n=e();if(dn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ot();if(a!==void 0){var i=a(t);if(dn){Aa(!0);try{a(t)}finally{Aa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=D0.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=no(e);var t=e.queue,a=wd.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ro,useDeferredValue:function(e,t){var a=ot();return so(a,e,t)},useTransition:function(){var e=no(!1);return e=gd.bind(null,se,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,i=ot();if(he){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),_e===null)throw Error(o(349));(me&60)!==0||Wf(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,od(Qf.bind(null,n,r,e),[e]),n.flags|=2048,Zn(9,If.bind(null,n,r,a,t),{destroy:void 0},null),a},useId:function(){var e=ot(),t=_e.identifierPrefix;if(he){var a=Jt,n=Ft;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=sr++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=T0++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return ot().memoizedState=z0.bind(null,se)}};mn.useMemoCache=eo,mn.useHostTransitionStatus=uo,mn.useFormState=nd,mn.useActionState=nd,mn.useOptimistic=function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=co.bind(null,se,!0,a),a.dispatch=t,[e,t]};var Ca={readContext:Fe,use:ur,useCallback:md,useContext:Fe,useEffect:io,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:hd,useReducer:cr,useRef:sd,useState:function(){return cr(ta)},useDebugValue:ro,useDeferredValue:function(e,t){var a=Be();return pd(a,be.memoizedState,e,t)},useTransition:function(){var e=cr(ta)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:$f,useId:vd};Ca.useCacheRefresh=xd,Ca.useMemoCache=eo,Ca.useHostTransitionStatus=uo,Ca.useFormState=ld,Ca.useActionState=ld,Ca.useOptimistic=function(e,t){var a=Be();return Pf(a,be,e,t)};var hn={readContext:Fe,use:ur,useCallback:md,useContext:Fe,useEffect:io,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:hd,useReducer:ao,useRef:sd,useState:function(){return ao(ta)},useDebugValue:ro,useDeferredValue:function(e,t){var a=Be();return be===null?so(a,e,t):pd(a,be.memoizedState,e,t)},useTransition:function(){var e=ao(ta)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:$f,useId:vd};hn.useCacheRefresh=xd,hn.useMemoCache=eo,hn.useHostTransitionStatus=uo,hn.useFormState=rd,hn.useActionState=rd,hn.useOptimistic=function(e,t){var a=Be();return be!==null?Pf(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])};function fo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:ie({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mo={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=pt(),i=za(n);i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(lt(t,e,n),$l(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=pt(),i=za(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Da(e,i,n),t!==null&&(lt(t,e,n),$l(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=Da(e,n,a),t!==null&&(lt(t,e,a),$l(t,e,a))}};function Sd(e,t,a,n,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,d):t.prototype&&t.prototype.isPureReactComponent?!Ol(a,n)||!Ol(i,r):!0}function Nd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function pn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=ie({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var hr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jd(e){hr(e)}function Ed(e){console.error(e)}function Td(e){hr(e)}function pr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Od(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ho(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){pr(e,t)},a}function Cd(e){return e=za(e),e.tag=3,e}function kd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Od(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Od(t,a,n),typeof i!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function L0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Vl(t,a,i,!0),a=At.current,a!==null){switch(a.tag){case 13:return Ht===null?Zo():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ys?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Po(e,n,i)),!1;case 22:return a.flags|=65536,n===Ys?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Po(e,n,i)),!1}throw Error(o(435,a.tag))}return Po(e,n,i),Zo(),!1}if(he)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Xs&&(e=Error(o(422),{cause:n}),zl(xt(e,a)))):(n!==Xs&&(t=Error(o(423),{cause:n}),zl(xt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=xt(n,a),i=ho(e.stateNode,n,i),Oo(e,i),Me!==4&&(Me=2)),!1;var r=Error(o(520),{cause:n});if(r=xt(r,a),Jl===null?Jl=[r]:Jl.push(r),Me!==4&&(Me=2),t===null)return!0;n=xt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ho(a.stateNode,n,e),Oo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Cd(i),kd(i,e,a,n),Oo(a,i),!1}a=a.return}while(a!==null);return!1}var Md=Error(o(461)),$e=!1;function Ze(e,t,a,n){t.child=e===null?Uf(t,null,a,n):cn(t,e.child,a,n)}function zd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var d={};for(var h in n)h!=="ref"&&(d[h]=n[h])}else d=n;return yn(t),n=Ks(e,t,a,d,r,i),h=Ps(),e!==null&&!$e?(Fs(e,t,i),aa(e,t,i)):(he&&h&&qs(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Dd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Uo(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ld(e,t,r,n,i)):(e=xr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ao(e,i)){var d=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ol,a(d,n)&&e.ref===t.ref)return aa(e,t,i)}return t.flags|=1,e=Ha(r,n),e.ref=t.ref,e.return=t,t.child=e}function Ld(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Ol(r,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=r,Ao(e,i))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,aa(e,t,i)}return po(e,t,a,n,i)}function Rd(e,t,a){var n=t.pendingProps,i=n.children,r=(t.stateNode._pendingVisibility&2)!==0,d=e!==null?e.memoizedState:null;if(Yl(e,t),n.mode==="hidden"||r){if((t.flags&128)!==0){if(n=d!==null?d.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Ud(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(t,d!==null?d.cachePool:null),d!==null?Hf(t,d):Vs(),Bf(t);else return t.lanes=t.childLanes=536870912,Ud(e,t,d!==null?d.baseLanes|a:a,a)}else d!==null?(ir(t,d.cachePool),Hf(t,d),Ta(),t.memoizedState=null):(e!==null&&ir(t,null),Vs(),Ta());return Ze(e,t,i,a),t.child}function Ud(e,t,a,n){var i=Qs();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ir(t,null),Vs(),Bf(t),e!==null&&Vl(e,t,n,!0),null}function Yl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function po(e,t,a,n,i){return yn(t),a=Ks(e,t,a,n,void 0,i),n=Ps(),e!==null&&!$e?(Fs(e,t,i),aa(e,t,i)):(he&&n&&qs(t),t.flags|=1,Ze(e,t,a,i),t.child)}function Hd(e,t,a,n,i,r){return yn(t),t.updateQueue=null,a=Vf(t,n,a,i),Yf(e),n=Ps(),e!==null&&!$e?(Fs(e,t,r),aa(e,t,r)):(he&&n&&qs(t),t.flags|=1,Ze(e,t,a,r),t.child)}function Bd(e,t,a,n,i){if(yn(t),t.stateNode===null){var r=qn,d=a.contextType;typeof d=="object"&&d!==null&&(r=Fe(d)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=mo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Eo(t),d=a.contextType,r.context=typeof d=="object"&&d!==null?Fe(d):qn,r.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(fo(t,a,d,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&mo.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),Wl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,v=pn(a,h);r.props=v;var A=r.context,z=a.contextType;d=qn,typeof z=="object"&&z!==null&&(d=Fe(z));var R=a.getDerivedStateFromProps;z=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||A!==d)&&Nd(t,r,n,d),Ma=!1;var E=t.memoizedState;r.state=E,Il(t,n,r,i),Wl(),A=t.memoizedState,h||E!==A||Ma?(typeof R=="function"&&(fo(t,a,R,n),A=t.memoizedState),(v=Ma||Sd(t,a,v,n,E,A,d))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=d,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,To(e,t),d=t.memoizedProps,z=pn(a,d),r.props=z,R=t.pendingProps,E=r.context,A=a.contextType,v=qn,typeof A=="object"&&A!==null&&(v=Fe(A)),h=a.getDerivedStateFromProps,(A=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==R||E!==v)&&Nd(t,r,n,v),Ma=!1,E=t.memoizedState,r.state=E,Il(t,n,r,i),Wl();var k=t.memoizedState;d!==R||E!==k||Ma||e!==null&&e.dependencies!==null&&gr(e.dependencies)?(typeof h=="function"&&(fo(t,a,h,n),k=t.memoizedState),(z=Ma||Sd(t,a,z,n,E,k,v)||e!==null&&e.dependencies!==null&&gr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,k,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,k,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),r.props=n,r.state=k,r.context=v,n=z):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Yl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,a,i)):Ze(e,t,a,i),t.memoizedState=r.state,e=t.child):e=aa(e,t,i),e}function qd(e,t,a,n){return Ml(),t.flags|=256,Ze(e,t,a,n),t.child}var go={dehydrated:null,treeContext:null,retryLane:0};function yo(e){return{baseLanes:e,cachePool:Xf()}}function bo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function Gd(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(i?Ea(t):Ta(),he){var h=Qe,v;if(v=h){e:{for(v=h,h=Ut;v.nodeType!==8;){if(!h){h=null;break e}if(v=zt(v.nextSibling),v===null){h=null;break e}}h=v}h!==null?(t.memoizedState={dehydrated:h,treeContext:sn!==null?{id:Ft,overflow:Jt}:null,retryLane:536870912},v=jt(18,null,null,0),v.stateNode=h,v.return=t,t.child=v,nt=t,Qe=null,v=!0):v=!1}v||un(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return h.data==="$!"?t.lanes=16:t.lanes=536870912,null;ea(t)}return h=n.children,n=n.fallback,i?(Ta(),i=t.mode,h=xo({mode:"hidden",children:h},i),n=vn(n,i,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,i=t.child,i.memoizedState=yo(a),i.childLanes=bo(e,d,a),t.memoizedState=go,n):(Ea(t),vo(t,h))}if(v=e.memoizedState,v!==null&&(h=v.dehydrated,h!==null)){if(r)t.flags&256?(Ea(t),t.flags&=-257,t=wo(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),i=n.fallback,h=t.mode,n=xo({mode:"visible",children:n.children},h),i=vn(i,h,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,cn(t,e.child,null,a),n=t.child,n.memoizedState=yo(a),n.childLanes=bo(e,d,a),t.memoizedState=go,t=i);else if(Ea(t),h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var A=d.dgst;d=A,n=Error(o(419)),n.stack="",n.digest=d,zl({value:n,source:null,stack:null}),t=wo(e,t,a)}else if($e||Vl(e,t,a,!1),d=(a&e.childLanes)!==0,$e||d){if(d=_e,d!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane)throw v.retryLane=n,ja(e,n),lt(d,e,n),Md}h.data==="$?"||Zo(),t=wo(e,t,a)}else h.data==="$?"?(t.flags|=128,t.child=e.child,t=K0.bind(null,e),h._reactRetry=t,t=null):(e=v.treeContext,Qe=zt(h.nextSibling),nt=t,he=!0,kt=null,Ut=!1,e!==null&&(wt[_t++]=Ft,wt[_t++]=Jt,wt[_t++]=sn,Ft=e.id,Jt=e.overflow,sn=t),t=vo(t,n.children),t.flags|=4096);return t}return i?(Ta(),i=n.fallback,h=t.mode,v=e.child,A=v.sibling,n=Ha(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&31457280,A!==null?i=Ha(A,i):(i=vn(i,h,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,h=e.child.memoizedState,h===null?h=yo(a):(v=h.cachePool,v!==null?(A=Xe._currentValue,v=v.parent!==A?{parent:A,pool:A}:v):v=Xf(),h={baseLanes:h.baseLanes|a,cachePool:v}),i.memoizedState=h,i.childLanes=bo(e,d,a),t.memoizedState=go,n):(Ea(t),a=e.child,e=a.sibling,a=Ha(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function vo(e,t){return t=xo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xo(e,t){return mm(e,t,0,null)}function wo(e,t,a){return cn(t,e.child,null,a),e=vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),No(e.return,t,a)}function _o(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function Yd(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Ze(e,t,n.children,a),n=Ge.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,a,t);else if(e.tag===19)Xd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Ne(Ge,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&lr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),_o(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}_o(t,!0,a,null,r);break;case"together":_o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Vl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gr(e)))}function R0(e,t,a){switch(t.tag){case 3:Mi(t,t.stateNode.containerInfo),ka(t,Xe,e.memoizedState.cache),Ml();break;case 27:case 5:ds(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:ka(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Gd(e,t,a):(Ea(t),e=aa(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Vl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Yd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Ge,Ge.current),n)break;return null;case 22:case 23:return t.lanes=0,Rd(e,t,a);case 24:ka(t,Xe,e.memoizedState.cache)}return aa(e,t,a)}function Vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Ao(e,a)&&(t.flags&128)===0)return $e=!1,R0(e,t,a);$e=(e.flags&131072)!==0}else $e=!1,he&&(t.flags&1048576)!==0&&Tf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Uo(n)?(e=pn(n,e),t.tag=1,t=Bd(null,t,n,e,a)):(t.tag=0,t=po(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===C){t.tag=11,t=zd(null,t,n,e,a);break e}else if(i===L){t.tag=14,t=Dd(null,t,n,e,a);break e}}throw t=Ye(n)||n,Error(o(306,t,""))}}return t;case 0:return po(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=pn(n,t.pendingProps),Bd(e,t,n,i,a);case 3:e:{if(Mi(t,t.stateNode.containerInfo),e===null)throw Error(o(387));var r=t.pendingProps;i=t.memoizedState,n=i.element,To(e,t),Il(t,r,null,a);var d=t.memoizedState;if(r=d.cache,ka(t,Xe,r),r!==i.cache&&jo(t,[Xe],a,!0),Wl(),r=d.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qd(e,t,r,a);break e}else if(r!==n){n=xt(Error(o(424)),t),zl(n),t=qd(e,t,r,a);break e}else for(Qe=zt(t.stateNode.containerInfo.firstChild),nt=t,he=!0,kt=null,Ut=!0,a=Uf(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ml(),r===n){t=aa(e,t,a);break e}Ze(e,t,r,a)}t=t.child}return t;case 26:return Yl(e,t),e===null?(a=Im(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,n=Mr(_a.current).createElement(a),n[Pe]=t,n[rt]=e,Ke(n,a,e),Ve(n),t.stateNode=n):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ds(t),e===null&&he&&(n=t.stateNode=Vm(t.type,t.pendingProps,_a.current),nt=t,Ut=!0,Qe=zt(n.firstChild)),n=t.pendingProps.children,e!==null||he?Ze(e,t,n,a):t.child=cn(t,null,n,a),Yl(e,t),t.child;case 5:return e===null&&he&&((i=n=Qe)&&(n=dg(n,t.type,t.pendingProps,Ut),n!==null?(t.stateNode=n,nt=t,Qe=zt(n.firstChild),Ut=!1,i=!0):i=!1),i||un(t)),ds(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,n=r.children,uu(i,r)?n=null:d!==null&&uu(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Ks(e,t,O0,null,null,a),oi._currentValue=i),Yl(e,t),Ze(e,t,n,a),t.child;case 6:return e===null&&he&&((e=a=Qe)&&(a=mg(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,nt=t,Qe=null,e=!0):e=!1),e||un(t)),null;case 13:return Gd(e,t,a);case 4:return Mi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=cn(t,null,n,a):Ze(e,t,n,a),t.child;case 11:return zd(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ka(t,t.type,n.value),Ze(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,yn(t),i=Fe(i),n=n(i),t.flags|=1,Ze(e,t,n,a),t.child;case 14:return Dd(e,t,t.type,t.pendingProps,a);case 15:return Ld(e,t,t.type,t.pendingProps,a);case 19:return Yd(e,t,a);case 22:return Rd(e,t,a);case 24:return yn(t),n=Fe(Xe),e===null?(i=Qs(),i===null&&(i=_e,r=Ws(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Eo(t),ka(t,Xe,i)):((e.lanes&a)!==0&&(To(e,t),Il(t,null,null,a),Wl()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ka(t,Xe,n)):(n=r.cache,ka(t,Xe,n),n!==i.cache&&jo(t,[Xe],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var So=ye(null),gn=null,na=null;function ka(e,t,a){Ne(So,t._currentValue),t._currentValue=a}function la(e){e._currentValue=So.current,Ue(So)}function No(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function jo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var v=0;v<t.length;v++)if(h.context===t[v]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),No(r.return,a,e),n||(d=null);break e}r=h.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(o(341));d.lanes|=a,r=d.alternate,r!==null&&(r.lanes|=a),No(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Vl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var h=i.type;ft(i.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(i===ki.current){if(d=i.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(oi):e=[oi])}i=i.return}e!==null&&jo(t,e,a,n),t.flags|=262144}function gr(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){gn=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return $d(gn,e)}function yr(e,t){return gn===null&&yn(e),$d(e,t)}function $d(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(o(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var Ma=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Te&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Pi(e),jf(e,null,a),t}return Ki(e,n,t,a),Pi(e)}function $l(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zc(e,a)}}function Oo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Co=!1;function Wl(){if(Co){var e=Wn;if(e!==null)throw e}}function Il(e,t,a,n){Co=!1;var i=e.updateQueue;Ma=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var v=h,A=v.next;v.next=null,d===null?r=A:d.next=A,d=v;var z=e.alternate;z!==null&&(z=z.updateQueue,h=z.lastBaseUpdate,h!==d&&(h===null?z.firstBaseUpdate=A:h.next=A,z.lastBaseUpdate=v))}if(r!==null){var R=i.baseState;d=0,z=A=v=null,h=r;do{var E=h.lane&-536870913,k=E!==h.lane;if(k?(me&E)===E:(n&E)===E){E!==0&&E===$n&&(Co=!0),z!==null&&(z=z.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var I=e,te=h;E=t;var ze=a;switch(te.tag){case 1:if(I=te.payload,typeof I=="function"){R=I.call(ze,R,E);break e}R=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=te.payload,E=typeof I=="function"?I.call(ze,R,E):I,E==null)break e;R=ie({},R,E);break e;case 2:Ma=!0}}E=h.callback,E!==null&&(e.flags|=64,k&&(e.flags|=8192),k=i.callbacks,k===null?i.callbacks=[E]:k.push(E))}else k={lane:E,tag:h.tag,payload:h.payload,callback:h.callback,next:null},z===null?(A=z=k,v=R):z=z.next=k,d|=E;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;k=h,h=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);z===null&&(v=R),i.baseState=v,i.firstBaseUpdate=A,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),Ba|=d,e.lanes=d,e.memoizedState=R}}function Wd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Id(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wd(a[e],t)}function Ql(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,d=a.inst;n=r(),d.destroy=n}a=a.next}while(a!==i)}}catch(h){xe(t,t.return,h)}}function La(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var d=n.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,i=t;var v=a;try{h()}catch(A){xe(i,v,A)}}}n=n.next}while(n!==r)}}catch(A){xe(t,t.return,A)}}function Qd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Id(t,a)}catch(n){xe(e,e.return,n)}}}function Zd(e,t,a){a.props=pn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){xe(e,t,n)}}function bn(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){xe(e,t,r)}}function dt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){xe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){xe(e,t,i)}else a.current=null}function Kd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){xe(e,e.return,i)}}function Pd(e,t,a){try{var n=e.stateNode;sg(n,e.type,a,t),n[rt]=t}catch(i){xe(e,e.return,i)}}function Fd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kr));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(Mo(e,t,a),e=e.sibling;e!==null;)Mo(e,t,a),e=e.sibling}function br(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for(br(e,t,a),e=e.sibling;e!==null;)br(e,t,a),e=e.sibling}var ia=!1,ke=!1,zo=!1,Jd=typeof WeakSet=="function"?WeakSet:Set,We=null,em=!1;function U0(e,t){if(e=e.containerInfo,su=Hr,e=yf(e),Ds(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var d=0,h=-1,v=-1,A=0,z=0,R=e,E=null;t:for(;;){for(var k;R!==a||i!==0&&R.nodeType!==3||(h=d+i),R!==r||n!==0&&R.nodeType!==3||(v=d+n),R.nodeType===3&&(d+=R.nodeValue.length),(k=R.firstChild)!==null;)E=R,R=k;for(;;){if(R===e)break t;if(E===a&&++A===i&&(h=d),E===r&&++z===n&&(v=d),(k=R.nextSibling)!==null)break;R=E,E=R.parentNode}R=k}a=h===-1||v===-1?null:{start:h,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(ou={focusedElem:e,selectionRange:a},Hr=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var I=pn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(I,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(te){xe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)du(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}return I=em,em=!1,I}function tm(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),n&4&&Ql(5,a);break;case 1:if(sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){xe(a,a.return,h)}else{var i=pn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){xe(a,a.return,h)}}n&64&&Qd(a),n&512&&bn(a,a.return);break;case 3:if(sa(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Id(n,e)}catch(h){xe(a,a.return,h)}}break;case 26:sa(e,a),n&512&&bn(a,a.return);break;case 27:case 5:sa(e,a),t===null&&n&4&&Kd(a),n&512&&bn(a,a.return);break;case 12:sa(e,a);break;case 13:sa(e,a),n&4&&lm(e,a);break;case 22:if(i=a.memoizedState!==null||ia,!i){t=t!==null&&t.memoizedState!==null||ke;var r=ia,d=ke;ia=i,(ke=t)&&!d?Ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=r,ke=d}n&512&&(a.memoizedProps.mode==="manual"?bn(a,a.return):dt(a,a.return));break;default:sa(e,a)}}function am(e){var t=e.alternate;t!==null&&(e.alternate=null,am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,mt=!1;function ra(e,t,a){for(a=a.child;a!==null;)nm(e,t,a),a=a.sibling}function nm(e,t,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(yl,a)}catch{}switch(a.tag){case 26:ke||dt(a,t),ra(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||dt(a,t);var n=qe,i=mt;for(qe=a.stateNode,ra(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);bs(a),qe=n,mt=i;break;case 5:ke||dt(a,t);case 6:i=qe;var r=mt;if(qe=null,ra(e,t,a),qe=i,mt=r,qe!==null)if(mt)try{e=qe,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(d){xe(a,t,d)}else try{qe.removeChild(a.stateNode)}catch(d){xe(a,t,d)}break;case 18:qe!==null&&(mt?(t=qe,a=a.stateNode,t.nodeType===8?fu(t.parentNode,a):t.nodeType===1&&fu(t,a),di(t)):fu(qe,a.stateNode));break;case 4:n=qe,i=mt,qe=a.stateNode.containerInfo,mt=!0,ra(e,t,a),qe=n,mt=i;break;case 0:case 11:case 14:case 15:ke||La(2,a,t),ke||La(4,a,t),ra(e,t,a);break;case 1:ke||(dt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Zd(a,t,n)),ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:ke||dt(a,t),ke=(n=ke)||a.memoizedState!==null,ra(e,t,a),ke=n;break;default:ra(e,t,a)}}function lm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(a){xe(t,t.return,a)}}function H0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jd),t;default:throw Error(o(435,e.tag))}}function Do(e,t){var a=H0(e);t.forEach(function(n){var i=P0.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:case 5:qe=h.stateNode,mt=!1;break e;case 3:qe=h.stateNode.containerInfo,mt=!0;break e;case 4:qe=h.stateNode.containerInfo,mt=!0;break e}h=h.return}if(qe===null)throw Error(o(160));nm(r,d,i),qe=null,mt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)im(t,e),t=t.sibling}var Mt=null;function im(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Nt(e),n&4&&(La(3,e,e.return),Ql(3,e),La(5,e,e.return));break;case 1:St(t,e),Nt(e),n&512&&(ke||a===null||dt(a,a.return)),n&64&&ia&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Mt;if(St(t,e),Nt(e),n&512&&(ke||a===null||dt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[xl]||r[Pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Ke(r,n,a),r[Pe]=e,Ve(r),n=r;break e;case"link":var d=Km("link","href",i).get(n+(a.href||""));if(d){for(var h=0;h<d.length;h++)if(r=d[h],r.getAttribute("href")===(a.href==null?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(h,1);break t}}r=i.createElement(n),Ke(r,n,a),i.head.appendChild(r);break;case"meta":if(d=Km("meta","content",i).get(n+(a.content||""))){for(h=0;h<d.length;h++)if(r=d[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(h,1);break t}}r=i.createElement(n),Ke(r,n,a),i.head.appendChild(r);break;default:throw Error(o(468,n))}r[Pe]=e,Ve(r),n=r}e.stateNode=n}else Pm(i,e.type,e.stateNode);else e.stateNode=Zm(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Pm(i,e.type,e.stateNode):Zm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Pd(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){i=e.stateNode,r=e.memoizedProps;try{for(var v=i.firstChild;v;){var A=v.nextSibling,z=v.nodeName;v[xl]||z==="HEAD"||z==="BODY"||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&v.rel.toLowerCase()==="stylesheet"||i.removeChild(v),v=A}for(var R=e.type,E=i.attributes;E.length;)i.removeAttributeNode(E[0]);Ke(i,R,r),i[Pe]=e,i[rt]=r}catch(I){xe(e,e.return,I)}}case 5:if(St(t,e),Nt(e),n&512&&(ke||a===null||dt(a,a.return)),e.flags&32){i=e.stateNode;try{zn(i,"")}catch(I){xe(e,e.return,I)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Pd(e,i,a!==null?a.memoizedProps:i)),n&1024&&(zo=!0);break;case 6:if(St(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(I){xe(e,e.return,I)}}break;case 3:if(Lr=null,i=Mt,Mt=zr(t.containerInfo),St(t,e),Mt=i,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(I){xe(e,e.return,I)}zo&&(zo=!1,rm(e));break;case 4:n=Mt,Mt=zr(e.stateNode.containerInfo),St(t,e),Nt(e),Mt=n;break;case 12:St(t,e),Nt(e);break;case 13:St(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yo=Rt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Do(e,n)));break;case 22:if(n&512&&(ke||a===null||dt(a,a.return)),v=e.memoizedState!==null,A=a!==null&&a.memoizedState!==null,z=ia,R=ke,ia=z||v,ke=R||A,St(t,e),ke=R,ia=z,Nt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=v?t._visibility&-2:t._visibility|1,v&&(t=ia||ke,a===null||A||t||Kn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){A=a=t;try{if(i=A.stateNode,v)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=A.stateNode,h=A.memoizedProps.style;var k=h!=null&&h.hasOwnProperty("display")?h.display:null;d.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(I){xe(A,A.return,I)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=v?"":A.memoizedProps}catch(I){xe(A,A.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Do(e,a))));break;case 19:St(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Do(e,n)));break;case 21:break;default:St(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(Fd(a)){var n=a;break e}a=a.return}throw Error(o(160))}switch(n.tag){case 27:var i=n.stateNode,r=ko(e);br(e,r,i);break;case 5:var d=n.stateNode;n.flags&32&&(zn(d,""),n.flags&=-33);var h=ko(e);br(e,h,d);break;case 3:case 4:var v=n.stateNode.containerInfo,A=ko(e);Mo(e,A,v);break;default:throw Error(o(161))}}}catch(z){xe(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tm(e,t.alternate,t),t=t.sibling}function Kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),Kn(t);break;case 1:dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zd(t,t.return,a),Kn(t);break;case 26:case 27:case 5:dt(t,t.return),Kn(t);break;case 22:dt(t,t.return),t.memoizedState===null&&Kn(t);break;default:Kn(t)}e=e.sibling}}function Ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(i,r,a),Ql(4,r);break;case 1:if(Ra(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){xe(n,n.return,A)}if(n=r,i=n.updateQueue,i!==null){var h=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Wd(v[i],h)}catch(A){xe(n,n.return,A)}}a&&d&64&&Qd(r),bn(r,r.return);break;case 26:case 27:case 5:Ra(i,r,a),a&&n===null&&d&4&&Kd(r),bn(r,r.return);break;case 12:Ra(i,r,a);break;case 13:Ra(i,r,a),a&&d&4&&lm(i,r);break;case 22:r.memoizedState===null&&Ra(i,r,a),bn(r,r.return);break;default:Ra(i,r,a)}t=t.sibling}}function Lo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hl(a))}function Ro(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e))}function Ua(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(e,t,a,n),t=t.sibling}function sm(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ua(e,t,a,n),i&2048&&Ql(9,t);break;case 3:Ua(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e)));break;case 12:if(i&2048){Ua(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,h=r.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){xe(t,t.return,v)}}else Ua(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,t.memoizedState!==null?r._visibility&4?Ua(e,t,a,n):Zl(e,t):r._visibility&4?Ua(e,t,a,n):(r._visibility|=4,Pn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Lo(t.alternate,t);break;case 24:Ua(e,t,a,n),i&2048&&Ro(t.alternate,t);break;default:Ua(e,t,a,n)}}function Pn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,d=t,h=a,v=n,A=d.flags;switch(d.tag){case 0:case 11:case 15:Pn(r,d,h,v,i),Ql(8,d);break;case 23:break;case 22:var z=d.stateNode;d.memoizedState!==null?z._visibility&4?Pn(r,d,h,v,i):Zl(r,d):(z._visibility|=4,Pn(r,d,h,v,i)),i&&A&2048&&Lo(d.alternate,d);break;case 24:Pn(r,d,h,v,i),i&&A&2048&&Ro(d.alternate,d);break;default:Pn(r,d,h,v,i)}t=t.sibling}}function Zl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Zl(a,n),i&2048&&Lo(n.alternate,n);break;case 24:Zl(a,n),i&2048&&Ro(n.alternate,n);break;default:Zl(a,n)}t=t.sibling}}var Kl=8192;function Fn(e){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)om(e),e=e.sibling}function om(e){switch(e.tag){case 26:Fn(e),e.flags&Kl&&e.memoizedState!==null&&jg(Mt,e.memoizedState,e.memoizedProps);break;case 5:Fn(e);break;case 3:case 4:var t=Mt;Mt=zr(e.stateNode.containerInfo),Fn(e),Mt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Kl,Kl=16777216,Fn(e),Kl=t):Fn(e));break;default:Fn(e)}}function um(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,fm(n,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cm(e),e=e.sibling}function cm(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&La(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,vr(e)):Pl(e);break;default:Pl(e)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,fm(n,e)}um(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),vr(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,vr(t));break;default:vr(t)}e=e.sibling}}function fm(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Hl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,We=n;else e:for(a=e;We!==null;){n=We;var i=n.sibling,r=n.return;if(am(n),n===a){We=null;break e}if(i!==null){i.return=r,We=i;break e}We=r}}}function B0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new B0(e,t,a,n)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ha(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dm(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xr(e,t,a,n,i,r){var d=0;if(n=e,typeof e=="function")Uo(e)&&(d=1);else if(typeof e=="string")d=Sg(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case y:return vn(a.children,i,r,t);case p:d=8,i|=24;break;case x:return e=jt(12,a,t,i|2),e.elementType=x,e.lanes=r,e;case Y:return e=jt(13,a,t,i),e.elementType=Y,e.lanes=r,e;case B:return e=jt(19,a,t,i),e.elementType=B,e.lanes=r,e;case q:return mm(a,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case O:d=10;break e;case j:d=9;break e;case C:d=11;break e;case L:d=14;break e;case G:d=16,n=null;break e}d=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=jt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function vn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function mm(e,t,a,n){e=jt(22,e,n,t),e.elementType=q,e.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=i._current;if(r===null)throw Error(o(456));if((i._pendingVisibility&2)===0){var d=ja(r,2);d!==null&&(i._pendingVisibility|=2,lt(d,r,2))}},attach:function(){var r=i._current;if(r===null)throw Error(o(456));if((i._pendingVisibility&2)!==0){var d=ja(r,2);d!==null&&(i._pendingVisibility&=-3,lt(d,r,2))}}};return e.stateNode=i,e}function Ho(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function Bo(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function oa(e){e.flags|=4}function hm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fm(t)){if(t=At.current,t!==null&&((me&4194176)===me?Ht!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Ht))throw Ll=Ys,kf;e.flags|=8192}}function wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kc():536870912,e.lanes|=t,el|=t)}function Fl(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function q0(e,t,a){var n=t.pendingProps;switch(Gs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(Xe),En(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kl(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(Io(kt),kt=null))),Ee(t),null;case 26:return a=t.memoizedState,e===null?(oa(t),a!==null?(Ee(t),hm(t,a)):(Ee(t),t.flags&=-16777217)):a?a!==e.memoizedState?(oa(t),Ee(t),hm(t,a)):(Ee(t),t.flags&=-16777217):(e.memoizedProps!==n&&oa(t),Ee(t),t.flags&=-16777217),null;case 27:zi(t),a=_a.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}e=Lt.current,kl(t)?Of(t):(e=Vm(i,n,a),t.stateNode=e,oa(t))}return Ee(t),null;case 5:if(zi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Ee(t),null}if(e=Lt.current,kl(t))Of(t);else{switch(i=Mr(_a.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[Pe]=t,e[rt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ke(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&oa(t)}}return Ee(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=_a.current,kl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=nt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Hm(e.nodeValue,a)),e||un(t)}else e=Mr(e).createTextNode(n),e[Pe]=t,t.stateNode=e}return Ee(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=kl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Pe]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else kt!==null&&(Io(kt),kt=null),i=!0;if(!i)return t.flags&256?(ea(t),t):(ea(t),null)}if(ea(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),wr(t,t.updateQueue),Ee(t),null;case 4:return En(),e===null&&lu(t.stateNode.containerInfo),Ee(t),null;case 10:return la(t.type),Ee(t),null;case 19:if(Ue(Ge),i=t.memoizedState,i===null)return Ee(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Fl(i,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=lr(e),r!==null){for(t.flags|=128,Fl(i,!1),e=r.updateQueue,t.updateQueue=e,wr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dm(a,e),a=a.sibling;return Ne(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Rt()>_r&&(t.flags|=128,n=!0,Fl(i,!1),t.lanes=4194304)}else{if(!n)if(e=lr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wr(t,e),Fl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!he)return Ee(t),null}else 2*Rt()-i.renderingStartTime>_r&&a!==536870912&&(t.flags|=128,n=!0,Fl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Rt(),t.sibling=null,e=Ge.current,Ne(Ge,n?e&1|2:e&1),t):(Ee(t),null);case 22:case 23:return ea(t),$s(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&wr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Ue(fn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(Xe),Ee(t),null;case 25:return null}throw Error(o(156,t.tag))}function G0(e,t){switch(Gs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(Xe),En(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zi(t),null;case 13:if(ea(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ge),null;case 4:return En(),null;case 10:return la(t.type),null;case 22:case 23:return ea(t),$s(),e!==null&&Ue(fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(Xe),null;case 25:return null;default:return null}}function pm(e,t){switch(Gs(t),t.tag){case 3:la(Xe),En();break;case 26:case 27:case 5:zi(t);break;case 4:En();break;case 13:ea(t);break;case 19:Ue(Ge);break;case 10:la(t.type);break;case 22:case 23:ea(t),$s(),e!==null&&Ue(fn);break;case 24:la(Xe)}}var X0={getCacheForType:function(e){var t=Fe(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Y0=typeof WeakMap=="function"?WeakMap:Map,Te=0,_e=null,ue=null,me=0,Ae=0,ht=null,ua=!1,Jn=!1,qo=!1,ca=0,Me=0,Ba=0,xn=0,Go=0,Et=0,el=0,Jl=null,qt=null,Xo=!1,Yo=0,_r=1/0,Ar=null,qa=null,Sr=!1,wn=null,ei=0,Vo=0,$o=null,ti=0,Wo=null;function pt(){if((Te&2)!==0&&me!==0)return me&-me;if(W.T!==null){var e=$n;return e!==0?e:eu()}return Lc()}function gm(){Et===0&&(Et=(me&536870912)===0||he?Cc():536870912);var e=At.current;return e!==null&&(e.flags|=32),Et}function lt(e,t,a){(e===_e&&Ae===2||e.cancelPendingCommit!==null)&&(tl(e,0),fa(e,me,Et,!1)),vl(e,a),((Te&2)===0||e!==_e)&&(e===_e&&((Te&2)===0&&(xn|=a),Me===4&&fa(e,me,Et,!1)),Gt(e))}function ym(e,t,a){if((Te&6)!==0)throw Error(o(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||bl(e,t),i=n?W0(e,t):Ko(e,t,!0),r=n;do{if(i===0){Jn&&!n&&fa(e,t,0,!1);break}else if(i===6)fa(e,t,0,!ua);else{if(a=e.current.alternate,r&&!V0(a)){i=Ko(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;i=Jl;var v=h.current.memoizedState.isDehydrated;if(v&&(tl(h,d).flags|=256),d=Ko(h,d,!1),d!==2){if(qo&&!v){h.errorRecoveryDisabledLanes|=r,xn|=r,i=4;break e}r=qt,qt=i,r!==null&&Io(r)}i=d}if(r=!1,i!==2)continue}}if(i===1){tl(e,0),fa(e,t,0,!0);break}e:{switch(n=e,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194176)===t){fa(n,t,Et,!ua);break e}break;case 2:qt=null;break;case 3:case 5:break;default:throw Error(o(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(r=Yo+300-Rt(),10<r)){if(fa(n,t,Et,!ua),Ui(n,0)!==0)break e;n.timeoutHandle=Gm(bm.bind(null,n,a,qt,Ar,Xo,t,Et,xn,el,ua,2,-0,0),r);break e}bm(n,a,qt,Ar,Xo,t,Et,xn,el,ua,0,-0,0)}}break}while(!0);Gt(e)}function Io(e){qt===null?qt=e:qt.push.apply(qt,e)}function bm(e,t,a,n,i,r,d,h,v,A,z,R,E){var k=t.subtreeFlags;if((k&8192||(k&16785408)===16785408)&&(si={stylesheets:null,count:0,unsuspend:Ng},om(t),t=Eg(),t!==null)){e.cancelPendingCommit=t(Nm.bind(null,e,a,n,i,d,h,v,1,R,E)),fa(e,r,d,!A);return}Nm(e,a,n,i,d,h,v,z,R,E)}function V0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!ft(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,n){t&=~Go,t&=~xn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-ct(i),d=1<<r;n[r]=-1,i&=~d}a!==0&&Mc(e,a,t)}function Nr(){return(Te&6)===0?(ai(0),!1):!0}function Qo(){if(ue!==null){if(Ae===0)var e=ue.return;else e=ue,na=gn=null,Js(e),Yn=null,Rl=0,e=ue;for(;e!==null;)pm(e.alternate,e),e=e.return;ue=null}}function tl(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ug(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qo(),_e=e,ue=a=Ha(e.current,null),me=t,Ae=0,ht=null,ua=!1,Jn=bl(e,t),qo=!1,el=Et=Go=xn=Ba=Me=0,qt=Jl=null,Xo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ct(n),r=1<<i;t|=e[i],n&=~r}return ca=t,Zi(),a}function vm(e,t){se=null,W.H=Bt,t===Dl?(t=Df(),Ae=3):t===kf?(t=Df(),Ae=4):Ae=t===Md?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,ue===null&&(Me=1,pr(e,xt(t,e.current)))}function xm(){var e=W.H;return W.H=Bt,e===null?Bt:e}function wm(){var e=W.A;return W.A=X0,e}function Zo(){Me=4,ua||(me&4194176)!==me&&At.current!==null||(Jn=!0),(Ba&134217727)===0&&(xn&134217727)===0||_e===null||fa(_e,me,Et,!1)}function Ko(e,t,a){var n=Te;Te|=2;var i=xm(),r=wm();(_e!==e||me!==t)&&(Ar=null,tl(e,t)),t=!1;var d=Me;e:do try{if(Ae!==0&&ue!==null){var h=ue,v=ht;switch(Ae){case 8:Qo(),d=6;break e;case 3:case 2:case 6:At.current===null&&(t=!0);var A=Ae;if(Ae=0,ht=null,al(e,h,v,A),a&&Jn){d=0;break e}break;default:A=Ae,Ae=0,ht=null,al(e,h,v,A)}}$0(),d=Me;break}catch(z){vm(e,z)}while(!0);return t&&e.shellSuspendCounter++,na=gn=null,Te=n,W.H=i,W.A=r,ue===null&&(_e=null,me=0,Zi()),d}function $0(){for(;ue!==null;)_m(ue)}function W0(e,t){var a=Te;Te|=2;var n=xm(),i=wm();_e!==e||me!==t?(Ar=null,_r=Rt()+500,tl(e,t)):Jn=bl(e,t);e:do try{if(Ae!==0&&ue!==null){t=ue;var r=ht;t:switch(Ae){case 1:Ae=0,ht=null,al(e,t,r,1);break;case 2:if(Mf(r)){Ae=0,ht=null,Am(t);break}t=function(){Ae===2&&_e===e&&(Ae=7),Gt(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Mf(r)?(Ae=0,ht=null,Am(t)):(Ae=0,ht=null,al(e,t,r,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var h=ue;if(!d||Fm(d)){Ae=0,ht=null;var v=h.sibling;if(v!==null)ue=v;else{var A=h.return;A!==null?(ue=A,jr(A)):ue=null}break t}}Ae=0,ht=null,al(e,t,r,5);break;case 6:Ae=0,ht=null,al(e,t,r,6);break;case 8:Qo(),Me=6;break e;default:throw Error(o(462))}}I0();break}catch(z){vm(e,z)}while(!0);return na=gn=null,W.H=n,W.A=i,Te=a,ue!==null?0:(_e=null,me=0,Zi(),Me)}function I0(){for(;ue!==null&&!pp();)_m(ue)}function _m(e){var t=Vd(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?jr(e):ue=t}function Am(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hd(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Hd(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Js(t);default:pm(a,t),t=ue=dm(t,ca),t=Vd(a,t,ca)}e.memoizedProps=e.pendingProps,t===null?jr(e):ue=t}function al(e,t,a,n){na=gn=null,Js(t),Yn=null,Rl=0;var i=t.return;try{if(L0(e,i,t,a,me)){Me=1,pr(e,xt(a,e.current)),ue=null;return}}catch(r){if(i!==null)throw ue=i,r;Me=1,pr(e,xt(a,e.current)),ue=null;return}t.flags&32768?(he||n===1?e=!0:Jn||(me&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===3||n===6)&&(n=At.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sm(t,e)):jr(t)}function jr(e){var t=e;do{if((t.flags&32768)!==0){Sm(t,ua);return}e=t.return;var a=q0(t.alternate,t,ca);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Me===0&&(Me=5)}function Sm(e,t){do{var a=G0(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Me=6,ue=null}function Nm(e,t,a,n,i,r,d,h,v,A){var z=W.T,R=V.p;try{V.p=2,W.T=null,Q0(e,t,a,n,R,i,r,d,h,v,A)}finally{W.T=z,V.p=R}}function Q0(e,t,a,n,i,r,d,h){do nl();while(wn!==null);if((Te&6)!==0)throw Error(o(327));var v=e.finishedWork;if(n=e.finishedLanes,v===null)return null;if(e.finishedWork=null,e.finishedLanes=0,v===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var A=v.lanes|v.childLanes;if(A|=Hs,jp(e,n,A,r,d,h),e===_e&&(ue=_e=null,me=0),(v.subtreeFlags&10256)===0&&(v.flags&10256)===0||Sr||(Sr=!0,Vo=A,$o=a,F0(Di,function(){return nl(),null})),a=(v.flags&15990)!==0,(v.subtreeFlags&15990)!==0||a?(a=W.T,W.T=null,r=V.p,V.p=2,d=Te,Te|=4,U0(e,v),im(v,e),b0(ou,e.containerInfo),Hr=!!su,ou=su=null,e.current=v,tm(e,v.alternate,v),gp(),Te=d,V.p=r,W.T=a):e.current=v,Sr?(Sr=!1,wn=e,ei=n):jm(e,A),A=e.pendingLanes,A===0&&(qa=null),wp(v.stateNode),Gt(e),t!==null)for(i=e.onRecoverableError,v=0;v<t.length;v++)A=t[v],i(A.value,{componentStack:A.stack});return(ei&3)!==0&&nl(),A=e.pendingLanes,(n&4194218)!==0&&(A&42)!==0?e===Wo?ti++:(ti=0,Wo=e):ti=0,ai(0),null}function jm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hl(t)))}function nl(){if(wn!==null){var e=wn,t=Vo;Vo=0;var a=Dc(ei),n=W.T,i=V.p;try{if(V.p=32>a?32:a,W.T=null,wn===null)var r=!1;else{a=$o,$o=null;var d=wn,h=ei;if(wn=null,ei=0,(Te&6)!==0)throw Error(o(331));var v=Te;if(Te|=4,cm(d.current),sm(d,d.current,h,a),Te=v,ai(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(yl,d)}catch{}r=!0}return r}finally{V.p=i,W.T=n,jm(e,t)}}return!1}function Em(e,t,a){t=xt(a,t),t=ho(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(vl(e,2),Gt(e))}function xe(e,t,a){if(e.tag===3)Em(e,e,a);else for(;t!==null;){if(t.tag===3){Em(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qa===null||!qa.has(n))){e=xt(a,e),a=Cd(2),n=Da(t,a,2),n!==null&&(kd(a,n,t,e),vl(n,2),Gt(n));break}}t=t.return}}function Po(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Y0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(qo=!0,i.add(a),e=Z0.bind(null,e,t,a),t.then(e,e))}function Z0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(me&a)===a&&(Me===4||Me===3&&(me&62914560)===me&&300>Rt()-Yo?(Te&2)===0&&tl(e,0):Go|=a,el===me&&(el=0)),Gt(e)}function Tm(e,t){t===0&&(t=kc()),e=ja(e,t),e!==null&&(vl(e,t),Gt(e))}function K0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tm(e,a)}function P0(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Tm(e,a)}function F0(e,t){return hs(e,t)}var Er=null,ll=null,Fo=!1,Tr=!1,Jo=!1,_n=0;function Gt(e){e!==ll&&e.next===null&&(ll===null?Er=ll=e:ll=ll.next=e),Tr=!0,Fo||(Fo=!0,eg(J0))}function ai(e,t){if(!Jo&&Tr){Jo=!0;do for(var a=!1,n=Er;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var d=n.suspendedLanes,h=n.pingedLanes;r=(1<<31-ct(42|e)+1)-1,r&=i&~(d&~h),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(a=!0,km(n,r))}else r=me,r=Ui(n,n===_e?r:0),(r&3)===0||bl(n,r)||(a=!0,km(n,r));n=n.next}while(a);Jo=!1}}function J0(){Tr=Fo=!1;var e=0;_n!==0&&(og()&&(e=_n),_n=0);for(var t=Rt(),a=null,n=Er;n!==null;){var i=n.next,r=Om(n,t);r===0?(n.next=null,a===null?Er=i:a.next=i,i===null&&(ll=a)):(a=n,(e!==0||(r&3)!==0)&&(Tr=!0)),n=i}ai(e)}function Om(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-ct(r),h=1<<d,v=i[d];v===-1?((h&a)===0||(h&n)!==0)&&(i[d]=Np(h,t)):v<=t&&(e.expiredLanes|=h),r&=~h}if(t=_e,a=me,a=Ui(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&Ae===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||bl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ps(n),Dc(a)){case 2:case 8:a=Tc;break;case 32:a=Di;break;case 268435456:a=Oc;break;default:a=Di}return n=Cm.bind(null,e),a=hs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ps(n),e.callbackPriority=2,e.callbackNode=null,2}function Cm(e,t){var a=e.callbackNode;if(nl()&&e.callbackNode!==a)return null;var n=me;return n=Ui(e,e===_e?n:0),n===0?null:(ym(e,n,t),Om(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?Cm.bind(null,e):null)}function km(e,t){if(nl())return null;ym(e,t,!0)}function eg(e){cg(function(){(Te&6)!==0?hs(Ec,e):e()})}function eu(){return _n===0&&(_n=Cc()),_n}function Mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xi(""+e)}function zm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function tg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Mm((i[rt]||null).action),d=n.submitter;d&&(t=(t=d[rt]||null)?Mm(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var h=new Wi("action","action",null,n,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_n!==0){var v=d?zm(i,d):new FormData(i);oo(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=d?zm(i,d):new FormData(i),oo(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var tu=0;tu<Nf.length;tu++){var au=Nf[tu],ag=au.toLowerCase(),ng=au[0].toUpperCase()+au.slice(1);Ct(ag,"on"+ng)}Ct(xf,"onAnimationEnd"),Ct(wf,"onAnimationIteration"),Ct(_f,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(x0,"onTransitionRun"),Ct(w0,"onTransitionStart"),Ct(_0,"onTransitionCancel"),Ct(Af,"onTransitionEnd"),kn("onMouseEnter",["mouseout","mouseover"]),kn("onMouseLeave",["mouseout","mouseover"]),kn("onPointerEnter",["pointerout","pointerover"]),kn("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Dm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var d=n.length-1;0<=d;d--){var h=n[d],v=h.instance,A=h.currentTarget;if(h=h.listener,v!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=A;try{r(i)}catch(z){hr(z)}i.currentTarget=null,r=v}else for(d=0;d<n.length;d++){if(h=n[d],v=h.instance,A=h.currentTarget,h=h.listener,v!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=A;try{r(i)}catch(z){hr(z)}i.currentTarget=null,r=v}}}}function fe(e,t){var a=t[ys];a===void 0&&(a=t[ys]=new Set);var n=e+"__bubble";a.has(n)||(Lm(t,e,2,!1),a.add(n))}function nu(e,t,a){var n=0;t&&(n|=4),Lm(a,e,n,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function lu(e){if(!e[Or]){e[Or]=!0,Uc.forEach(function(a){a!=="selectionchange"&&(lg.has(a)||nu(a,!1,e),nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,nu("selectionchange",!1,t))}}function Lm(e,t,a,n){switch(lh(t)){case 2:var i=Cg;break;case 8:i=kg;break;default:i=yu}a=i.bind(null,t,a,e),i=void 0,!Ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function iu(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===i||h.nodeType===8&&h.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;d=d.return}for(;h!==null;){if(d=tn(h),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=r=d;continue e}h=h.parentNode}}n=n.return}Zc(function(){var A=r,z=As(a),R=[];e:{var E=Sf.get(e);if(E!==void 0){var k=Wi,I=e;switch(e){case"keypress":if(Vi(a)===0)break e;case"keydown":case"keyup":k=Pp;break;case"focusin":I="focus",k=Os;break;case"focusout":I="blur",k=Os;break;case"beforeblur":case"afterblur":k=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=e0;break;case xf:case wf:case _f:k=Xp;break;case Af:k=a0;break;case"scroll":case"scrollend":k=Up;break;case"wheel":k=l0;break;case"copy":case"cut":case"paste":k=Vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ef;break;case"toggle":case"beforetoggle":k=r0}var te=(t&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),S=te?E!==null?E+"Capture":null:E;te=[];for(var _=A,N;_!==null;){var D=_;if(N=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||N===null||S===null||(D=_l(_,S),D!=null&&te.push(li(_,D,N))),ze)break;_=_.return}0<te.length&&(E=new k(E,I,null,a,z),R.push({event:E,listeners:te}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",E&&a!==_s&&(I=a.relatedTarget||a.fromElement)&&(tn(I)||I[Tn]))break e;if((k||E)&&(E=z.window===z?z:(E=z.ownerDocument)?E.defaultView||E.parentWindow:window,k?(I=a.relatedTarget||a.toElement,k=A,I=I?tn(I):null,I!==null&&(ze=ee(I),te=I.tag,I!==ze||te!==5&&te!==27&&te!==6)&&(I=null)):(k=null,I=A),k!==I)){if(te=Fc,D="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(te=ef,D="onPointerLeave",S="onPointerEnter",_="pointer"),ze=k==null?E:wl(k),N=I==null?E:wl(I),E=new te(D,_+"leave",k,a,z),E.target=ze,E.relatedTarget=N,D=null,tn(z)===A&&(te=new te(S,_+"enter",I,a,z),te.target=N,te.relatedTarget=ze,D=te),ze=D,k&&I)t:{for(te=k,S=I,_=0,N=te;N;N=il(N))_++;for(N=0,D=S;D;D=il(D))N++;for(;0<_-N;)te=il(te),_--;for(;0<N-_;)S=il(S),N--;for(;_--;){if(te===S||S!==null&&te===S.alternate)break t;te=il(te),S=il(S)}te=null}else te=null;k!==null&&Rm(R,E,k,te,!1),I!==null&&ze!==null&&Rm(R,ze,I,te,!0)}}e:{if(E=A?wl(A):window,k=E.nodeName&&E.nodeName.toLowerCase(),k==="select"||k==="input"&&E.type==="file")var $=uf;else if(sf(E))if(cf)$=g0;else{$=h0;var oe=m0}else k=E.nodeName,!k||k.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&ws(A.elementType)&&($=uf):$=p0;if($&&($=$(e,A))){of(R,$,a,z);break e}oe&&oe(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&xs(E,"number",E.value)}switch(oe=A?wl(A):window,e){case"focusin":(sf(oe)||oe.contentEditable==="true")&&(Un=oe,Ls=A,Cl=null);break;case"focusout":Cl=Ls=Un=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,bf(R,a,z);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":bf(R,a,z)}var K;if(ks)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Rn?lf(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(tf&&a.locale!=="ko"&&(Rn||F!=="onCompositionStart"?F==="onCompositionEnd"&&Rn&&(K=Kc()):(Na=z,js="value"in Na?Na.value:Na.textContent,Rn=!0)),oe=Cr(A,F),0<oe.length&&(F=new Jc(F,e,null,a,z),R.push({event:F,listeners:oe}),K?F.data=K:(K=rf(a),K!==null&&(F.data=K)))),(K=o0?u0(e,a):c0(e,a))&&(F=Cr(A,"onBeforeInput"),0<F.length&&(oe=new Jc("onBeforeInput","beforeinput",null,a,z),R.push({event:oe,listeners:F}),oe.data=K)),tg(R,e,A,a,z)}Dm(R,t)})}function li(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Cr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=_l(e,a),i!=null&&n.unshift(li(e,i,r)),i=_l(e,t),i!=null&&n.push(li(e,i,r))),e=e.return}return n}function il(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rm(e,t,a,n,i){for(var r=t._reactName,d=[];a!==null&&a!==n;){var h=a,v=h.alternate,A=h.stateNode;if(h=h.tag,v!==null&&v===n)break;h!==5&&h!==26&&h!==27||A===null||(v=A,i?(A=_l(a,r),A!=null&&d.unshift(li(a,A,v))):i||(A=_l(a,r),A!=null&&d.push(li(a,A,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var ig=/\r\n?/g,rg=/\u0000|\uFFFD/g;function Um(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(rg,"")}function Hm(e,t){return t=Um(t),Um(e)===t}function kr(){}function ve(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||zn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&zn(e,""+n);break;case"className":Bi(e,"class",n);break;case"tabIndex":Bi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Bi(e,a,n);break;case"style":Ic(e,n,r);break;case"data":if(t!=="object"){Bi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Xi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",i.name,i,null),ve(e,t,"formEncType",i.formEncType,i,null),ve(e,t,"formMethod",i.formMethod,i,null),ve(e,t,"formTarget",i.formTarget,i,null)):(ve(e,t,"encType",i.encType,i,null),ve(e,t,"method",i.method,i,null),ve(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Xi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=kr);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Xi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Hi(e,"popover",n);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Hi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lp.get(a)||a,Hi(e,a,n))}}function ru(e,t,a,n,i,r){switch(a){case"style":Ic(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?zn(e,n):(typeof n=="number"||typeof n=="bigint")&&zn(e,""+n);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=kr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[rt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Hi(e,a,n)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(d!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,r,d,a,null)}}i&&ve(e,t,"srcSet",a.srcSet,a,null),n&&ve(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var h=r=d=i=null,v=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":d=z;break;case"checked":v=z;break;case"defaultChecked":A=z;break;case"value":r=z;break;case"defaultValue":h=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:ve(e,t,n,z,a,null)}}Yc(e,r,h,v,A,d,i,!1),qi(e);return;case"select":fe("invalid",e),n=d=r=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":d=h;break;case"multiple":n=h;default:ve(e,t,i,h,a,null)}t=r,a=d,e.multiple=!!n,t!=null?Mn(e,!!n,t,!1):a!=null&&Mn(e,!!n,a,!0);return;case"textarea":fe("invalid",e),r=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(h=a[d],h!=null))switch(d){case"value":n=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:ve(e,t,d,h,a,null)}$c(e,n,i,r),qi(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ve(e,t,v,n,a,null)}return;case"dialog":fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(n=0;n<ni.length;n++)fe(ni[n],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,A,n,a,null)}return;default:if(ws(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&ru(e,t,z,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&ve(e,t,h,n,a,null))}function sg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,h=null,v=null,A=null,z=null;for(k in a){var R=a[k];if(a.hasOwnProperty(k)&&R!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=R;default:n.hasOwnProperty(k)||ve(e,t,k,null,n,R)}}for(var E in n){var k=n[E];if(R=a[E],n.hasOwnProperty(E)&&(k!=null||R!=null))switch(E){case"type":r=k;break;case"name":i=k;break;case"checked":A=k;break;case"defaultChecked":z=k;break;case"value":d=k;break;case"defaultValue":h=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:k!==R&&ve(e,t,E,k,n,R)}}vs(e,d,h,v,A,z,r,i);return;case"select":k=d=h=E=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":k=v;default:n.hasOwnProperty(r)||ve(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":E=r;break;case"defaultValue":h=r;break;case"multiple":d=r;default:r!==v&&ve(e,t,i,r,n,v)}t=h,a=d,n=k,E!=null?Mn(e,!!a,E,!1):!!n!=!!a&&(t!=null?Mn(e,!!a,t,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":k=E=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:ve(e,t,h,null,n,i)}for(d in n)if(i=n[d],r=a[d],n.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":E=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&ve(e,t,d,i,n,r)}Vc(e,E,k);return;case"option":for(var I in a)if(E=a[I],a.hasOwnProperty(I)&&E!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:ve(e,t,I,null,n,E)}for(v in n)if(E=n[v],k=a[v],n.hasOwnProperty(v)&&E!==k&&(E!=null||k!=null))switch(v){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ve(e,t,v,E,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)E=a[te],a.hasOwnProperty(te)&&E!=null&&!n.hasOwnProperty(te)&&ve(e,t,te,null,n,E);for(A in n)if(E=n[A],k=a[A],n.hasOwnProperty(A)&&E!==k&&(E!=null||k!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:ve(e,t,A,E,n,k)}return;default:if(ws(t)){for(var ze in a)E=a[ze],a.hasOwnProperty(ze)&&E!==void 0&&!n.hasOwnProperty(ze)&&ru(e,t,ze,void 0,n,E);for(z in n)E=n[z],k=a[z],!n.hasOwnProperty(z)||E===k||E===void 0&&k===void 0||ru(e,t,z,E,n,k);return}}for(var S in a)E=a[S],a.hasOwnProperty(S)&&E!=null&&!n.hasOwnProperty(S)&&ve(e,t,S,null,n,E);for(R in n)E=n[R],k=a[R],!n.hasOwnProperty(R)||E===k||E==null&&k==null||ve(e,t,R,E,n,k)}var su=null,ou=null;function Mr(e){return e.nodeType===9?e:e.ownerDocument}function Bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=null;function og(){var e=window.event;return e&&e.type==="popstate"?e===cu?!1:(cu=e,!0):(cu=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(e){return Xm.resolve(null).then(e).catch(fg)}:Gm;function fg(e){setTimeout(function(){throw e})}function fu(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){e.removeChild(i),di(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);di(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":du(a),bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dg(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function mg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Ym(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Vm(e,t,a){switch(t=Mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}var Tt=new Map,$m=new Set;function zr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var da=V.d;V.d={f:hg,r:pg,D:gg,C:yg,L:bg,m:vg,X:wg,S:xg,M:_g};function hg(){var e=da.f(),t=Nr();return e||t}function pg(e){var t=On(e);t!==null&&t.tag===5&&t.type==="form"?bd(t):da.r(e)}var rl=typeof document>"u"?null:document;function Wm(e,t,a){var n=rl;if(n&&typeof t=="string"&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),$m.has(i)||($m.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ke(t,"link",e),Ve(t),n.head.appendChild(t)))}}function gg(e){da.D(e),Wm("dns-prefetch",e,null)}function yg(e,t){da.C(e,t),Wm("preconnect",e,t)}function bg(e,t,a){da.L(e,t,a);var n=rl;if(n&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+bt(a.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var r=i;switch(t){case"style":r=sl(e);break;case"script":r=ol(e)}Tt.has(r)||(e=ie({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ii(r))||t==="script"&&n.querySelector(ri(r))||(t=n.createElement("link"),Ke(t,"link",e),Ve(t),n.head.appendChild(t)))}}function vg(e,t){da.m(e,t);var a=rl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bt(n)+'"][href="'+bt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ol(e)}if(!Tt.has(r)&&(e=ie({rel:"modulepreload",href:e},t),Tt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ri(r)))return}n=a.createElement("link"),Ke(n,"link",e),Ve(n),a.head.appendChild(n)}}}function xg(e,t,a){da.S(e,t,a);var n=rl;if(n&&e){var i=Cn(n).hoistableStyles,r=sl(e);t=t||"default";var d=i.get(r);if(!d){var h={loading:0,preload:null};if(d=n.querySelector(ii(r)))h.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(r))&&mu(e,a);var v=d=n.createElement("link");Ve(v),Ke(v,"link",e),v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Dr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:h},i.set(r,d)}}}function wg(e,t){da.X(e,t);var a=rl;if(a&&e){var n=Cn(a).hoistableScripts,i=ol(e),r=n.get(i);r||(r=a.querySelector(ri(i)),r||(e=ie({src:e,async:!0},t),(t=Tt.get(i))&&hu(e,t),r=a.createElement("script"),Ve(r),Ke(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function _g(e,t){da.M(e,t);var a=rl;if(a&&e){var n=Cn(a).hoistableScripts,i=ol(e),r=n.get(i);r||(r=a.querySelector(ri(i)),r||(e=ie({src:e,async:!0,type:"module"},t),(t=Tt.get(i))&&hu(e,t),r=a.createElement("script"),Ve(r),Ke(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Im(e,t,a,n){var i=(i=_a.current)?zr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=sl(a.href),a=Cn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sl(a.href);var r=Cn(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(ii(e)))&&!r._p&&(d.instance=r,d.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),r||Ag(i,e,a,d.state))),t&&n===null)throw Error(o(528,""));return d}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ol(a),a=Cn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function sl(e){return'href="'+bt(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function Qm(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Ag(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ke(t,"link",a),Ve(t),e.head.appendChild(t))}function ol(e){return'[src="'+bt(e)+'"]'}function ri(e){return"script[async]"+e}function Zm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(n)return t.instance=n,Ve(n),n;var i=ie({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ve(n),Ke(n,"style",i),Dr(n,a.precedence,e),t.instance=n;case"stylesheet":i=sl(a.href);var r=e.querySelector(ii(i));if(r)return t.state.loading|=4,t.instance=r,Ve(r),r;n=Qm(a),(i=Tt.get(i))&&mu(n,i),r=(e.ownerDocument||e).createElement("link"),Ve(r);var d=r;return d._p=new Promise(function(h,v){d.onload=h,d.onerror=v}),Ke(r,"link",n),t.state.loading|=4,Dr(r,a.precedence,e),t.instance=r;case"script":return r=ol(a.src),(i=e.querySelector(ri(r)))?(t.instance=i,Ve(i),i):(n=a,(i=Tt.get(r))&&(n=ie({},a),hu(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ve(i),Ke(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Dr(n,a.precedence,e));return t.instance}function Dr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,d=0;d<n.length;d++){var h=n[d];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lr=null;function Km(e,t,a){if(Lr===null){var n=new Map,i=Lr=new Map;i.set(a,n)}else i=Lr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[xl]||r[Pe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var h=n.get(d);h?h.push(r):n.set(d,[r])}}return n}function Pm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Sg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var si=null;function Ng(){}function jg(e,t,a){if(si===null)throw Error(o(475));var n=si;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=sl(a.href),r=e.querySelector(ii(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Rr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Ve(r);return}r=e.ownerDocument||e,a=Qm(a),(i=Tt.get(i))&&mu(a,i),r=r.createElement("link"),Ve(r);var d=r;d._p=new Promise(function(h,v){d.onload=h,d.onerror=v}),Ke(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Rr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Eg(){if(si===null)throw Error(o(475));var e=si;return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Rr(){if(this.count--,this.count===0){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(Tg,e),Ur=null,Rr.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var a=Ur.get(e);if(a)var n=a.get(null);else{a=new Map,Ur.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),r=a.get(d)||n,r===n&&a.set(null,i),a.set(d,i),this.count++,n=Rr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var oi={$$typeof:O,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function Og(e,t,a,n,i,r,d,h){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.hiddenUpdates=gs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Jm(e,t,a,n,i,r,d,h,v,A,z,R){return e=new Og(e,t,a,d,h,v,A,R),t=1,r===!0&&(t|=24),r=jt(3,null,null,t),e.current=r,r.stateNode=e,t=Ws(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Eo(r),e}function eh(e){return e?(e=qn,e):qn}function th(e,t,a,n,i,r){i=eh(i),n.context===null?n.context=i:n.pendingContext=i,n=za(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Da(e,n,t),a!==null&&(lt(a,e,t),$l(a,e,t))}function ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function gu(e,t){ah(e,t),(e=e.alternate)&&ah(e,t)}function nh(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&lt(t,e,67108864),gu(e,67108864)}}var Hr=!0;function Cg(e,t,a,n){var i=W.T;W.T=null;var r=V.p;try{V.p=2,yu(e,t,a,n)}finally{V.p=r,W.T=i}}function kg(e,t,a,n){var i=W.T;W.T=null;var r=V.p;try{V.p=8,yu(e,t,a,n)}finally{V.p=r,W.T=i}}function yu(e,t,a,n){if(Hr){var i=bu(n);if(i===null)iu(e,t,n,Br,a),ih(e,n);else if(zg(i,e,t,a,n))n.stopPropagation();else if(ih(e,n),t&4&&-1<Mg.indexOf(e)){for(;i!==null;){var r=On(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=en(r.pendingLanes);if(d!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var v=1<<31-ct(d);h.entanglements[1]|=v,d&=~v}Gt(r),(Te&6)===0&&(_r=Rt()+500,ai(0))}}break;case 13:h=ja(r,2),h!==null&&lt(h,r,2),Nr(),gu(r,2)}if(r=bu(n),r===null&&iu(e,t,n,Br,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else iu(e,t,n,null,a)}}function bu(e){return e=As(e),vu(e)}var Br=null;function vu(e){if(Br=null,e=tn(e),e!==null){var t=ee(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=we(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Br=e,null}function lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yp()){case Ec:return 2;case Tc:return 8;case Di:case bp:return 32;case Oc:return 268435456;default:return 32}default:return 32}}var xu=!1,Ga=null,Xa=null,Ya=null,ui=new Map,ci=new Map,Va=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ih(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function fi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=On(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zg(e,t,a,n,i){switch(t){case"focusin":return Ga=fi(Ga,e,t,a,n,i),!0;case"dragenter":return Xa=fi(Xa,e,t,a,n,i),!0;case"mouseover":return Ya=fi(Ya,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return ui.set(r,fi(ui.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,ci.set(r,fi(ci.get(r)||null,e,t,a,n,i)),!0}return!1}function rh(e){var t=tn(e.target);if(t!==null){var a=ee(t);if(a!==null){if(t=a.tag,t===13){if(t=we(a),t!==null){e.blockedOn=t,Ep(e.priority,function(){if(a.tag===13){var n=pt(),i=ja(a,n);i!==null&&lt(i,a,n),gu(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=bu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);_s=n,a.target.dispatchEvent(n),_s=null}else return t=On(a),t!==null&&nh(t),e.blockedOn=a,!1;t.shift()}return!0}function sh(e,t,a){qr(e)&&a.delete(t)}function Dg(){xu=!1,Ga!==null&&qr(Ga)&&(Ga=null),Xa!==null&&qr(Xa)&&(Xa=null),Ya!==null&&qr(Ya)&&(Ya=null),ui.forEach(sh),ci.forEach(sh)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Dg)))}var Xr=null;function oh(e){Xr!==e&&(Xr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Xr===e&&(Xr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(vu(n||a)===null)continue;break}var r=On(a);r!==null&&(e.splice(t,3),t-=3,oo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function di(e){function t(v){return Gr(v,e)}Ga!==null&&Gr(Ga,e),Xa!==null&&Gr(Xa,e),Ya!==null&&Gr(Ya,e),ui.forEach(t),ci.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)rh(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],d=i[rt]||null;if(typeof r=="function")d||oh(a);else if(d){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[rt]||null)h=d.formAction;else if(vu(i)!==null)continue}else h=d.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),oh(a)}}}function wu(e){this._internalRoot=e}Yr.prototype.render=wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=pt();th(a,n,e,t,null,null)},Yr.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&nl(),th(e.current,2,null,e,null,null),Nr(),t[Tn]=null}};function Yr(e){this._internalRoot=e}Yr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&rh(e)}};var uh=s.version;if(uh!=="19.0.0")throw Error(o(527,uh,"19.0.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=U(t),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var Lg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:W,findFiberByHostInstance:tn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{yl=Vr.inject(Lg),ut=Vr}catch{}}return hi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var a=!1,n="",i=jd,r=Ed,d=Td,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Jm(e,1,!1,null,null,a,n,i,r,d,h,null),e[Tn]=t.current,lu(e.nodeType===8?e.parentNode:e),new wu(t)},hi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(o(299));var n=!1,i="",r=jd,d=Ed,h=Td,v=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),t=Jm(e,1,!0,t,a??null,n,i,r,d,h,v,A),t.context=eh(null),a=t.current,n=pt(),i=za(n),i.callback=null,Da(a,i,n),t.current.lanes=n,vl(t,n),Gt(t),e[Tn]=t.current,lu(e),new Yr(t)},hi.version="19.0.0",hi}var vh;function $g(){if(vh)return Su.exports;vh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Su.exports=Vg(),Su.exports}var Wg=$g(),pi={},xh;function Ig(){if(xh)return pi;xh=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.parse=b,pi.serialize=p;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,m=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function b(j,O){const C=new m,Y=j.length;if(Y<2)return C;const B=(O==null?void 0:O.decode)||x;let L=0;do{const G=j.indexOf("=",L);if(G===-1)break;const q=j.indexOf(";",L),le=q===-1?Y:q;if(G>le){L=j.lastIndexOf(";",G-1)+1;continue}const Q=g(j,L,G),je=y(j,G,Q),De=j.slice(Q,je);if(C[De]===void 0){let Ye=g(j,G+1,le),W=y(j,le,Ye);const ie=B(j.slice(Ye,W));C[De]=ie}L=le+1}while(L<Y);return C}function g(j,O,C){do{const Y=j.charCodeAt(O);if(Y!==32&&Y!==9)return O}while(++O<C);return C}function y(j,O,C){for(;O>C;){const Y=j.charCodeAt(--O);if(Y!==32&&Y!==9)return O+1}return C}function p(j,O,C){const Y=(C==null?void 0:C.encode)||encodeURIComponent;if(!l.test(j))throw new TypeError(`argument name is invalid: ${j}`);const B=Y(O);if(!s.test(B))throw new TypeError(`argument val is invalid: ${O}`);let L=j+"="+B;if(!C)return L;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);L+="; Max-Age="+C.maxAge}if(C.domain){if(!u.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);L+="; Domain="+C.domain}if(C.path){if(!o.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);L+="; Path="+C.path}if(C.expires){if(!M(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);L+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(L+="; HttpOnly"),C.secure&&(L+="; Secure"),C.partitioned&&(L+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return L}function x(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function M(j){return f.call(j)==="[object Date]"}return pi}Ig();var wh="popstate";function Qg(l={}){function s(o,f){let{pathname:m,search:b,hash:g}=o.location;return qu("",{pathname:m,search:b,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(o,f){return typeof f=="string"?f:Ai(f)}return Kg(s,u,null,l)}function Ce(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function $t(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Zg(){return Math.random().toString(36).substring(2,10)}function _h(l,s){return{usr:l.state,key:l.key,idx:s}}function qu(l,s,u=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?ml(s):s,state:u,key:s&&s.key||o||Zg()}}function Ai({pathname:l="/",search:s="",hash:u=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function ml(l){let s={};if(l){let u=l.indexOf("#");u>=0&&(s.hash=l.substring(u),l=l.substring(0,u));let o=l.indexOf("?");o>=0&&(s.search=l.substring(o),l=l.substring(0,o)),l&&(s.pathname=l)}return s}function Kg(l,s,u,o={}){let{window:f=document.defaultView,v5Compat:m=!1}=o,b=f.history,g="POP",y=null,p=x();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function x(){return(b.state||{idx:null}).idx}function M(){g="POP";let B=x(),L=B==null?null:B-p;p=B,y&&y({action:g,location:Y.location,delta:L})}function j(B,L){g="PUSH";let G=qu(Y.location,B,L);p=x()+1;let q=_h(G,p),le=Y.createHref(G);try{b.pushState(q,"",le)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(le)}m&&y&&y({action:g,location:Y.location,delta:1})}function O(B,L){g="REPLACE";let G=qu(Y.location,B,L);p=x();let q=_h(G,p),le=Y.createHref(G);b.replaceState(q,"",le),m&&y&&y({action:g,location:Y.location,delta:0})}function C(B){let L=f.location.origin!=="null"?f.location.origin:f.location.href,G=typeof B=="string"?B:Ai(B);return G=G.replace(/ $/,"%20"),Ce(L,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,L)}let Y={get action(){return g},get location(){return l(f,b)},listen(B){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(wh,M),y=B,()=>{f.removeEventListener(wh,M),y=null}},createHref(B){return s(f,B)},createURL:C,encodeLocation(B){let L=C(B);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:j,replace:O,go(B){return b.go(B)}};return Y}function f1(l,s,u="/"){return Pg(l,s,u,!1)}function Pg(l,s,u,o){let f=typeof s=="string"?ml(s):s,m=ya(f.pathname||"/",u);if(m==null)return null;let b=d1(l);Fg(b);let g=null;for(let y=0;g==null&&y<b.length;++y){let p=u2(m);g=s2(b[y],p,o)}return g}function d1(l,s=[],u=[],o=""){let f=(m,b,g)=>{let y={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};y.relativePath.startsWith("/")&&(Ce(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length));let p=ga([o,y.relativePath]),x=u.concat(y);m.children&&m.children.length>0&&(Ce(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),d1(m.children,s,x,p)),!(m.path==null&&!m.index)&&s.push({path:p,score:i2(p,m.index),routesMeta:x})};return l.forEach((m,b)=>{var g;if(m.path===""||!((g=m.path)!=null&&g.includes("?")))f(m,b);else for(let y of m1(m.path))f(m,b,y)}),s}function m1(l){let s=l.split("/");if(s.length===0)return[];let[u,...o]=s,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(o.length===0)return f?[m,""]:[m];let b=m1(o.join("/")),g=[];return g.push(...b.map(y=>y===""?m:[m,y].join("/"))),f&&g.push(...b),g.map(y=>l.startsWith("/")&&y===""?"/":y)}function Fg(l){l.sort((s,u)=>s.score!==u.score?u.score-s.score:r2(s.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var Jg=/^:[\w-]+$/,e2=3,t2=2,a2=1,n2=10,l2=-2,Ah=l=>l==="*";function i2(l,s){let u=l.split("/"),o=u.length;return u.some(Ah)&&(o+=l2),s&&(o+=t2),u.filter(f=>!Ah(f)).reduce((f,m)=>f+(Jg.test(m)?e2:m===""?a2:n2),o)}function r2(l,s){return l.length===s.length&&l.slice(0,-1).every((o,f)=>o===s[f])?l[l.length-1]-s[s.length-1]:0}function s2(l,s,u=!1){let{routesMeta:o}=l,f={},m="/",b=[];for(let g=0;g<o.length;++g){let y=o[g],p=g===o.length-1,x=m==="/"?s:s.slice(m.length)||"/",M=Jr({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},x),j=y.route;if(!M&&p&&u&&!o[o.length-1].route.index&&(M=Jr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},x)),!M)return null;Object.assign(f,M.params),b.push({params:f,pathname:ga([m,M.pathname]),pathnameBase:m2(ga([m,M.pathnameBase])),route:j}),M.pathnameBase!=="/"&&(m=ga([m,M.pathnameBase]))}return b}function Jr(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,o]=o2(l.path,l.caseSensitive,l.end),f=s.match(u);if(!f)return null;let m=f[0],b=m.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:o.reduce((p,{paramName:x,isOptional:M},j)=>{if(x==="*"){let C=g[j]||"";b=m.slice(0,m.length-C.length).replace(/(.)\/+$/,"$1")}const O=g[j];return M&&!O?p[x]=void 0:p[x]=(O||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:b,pattern:l}}function o2(l,s=!1,u=!0){$t(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,g,y)=>(o.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(o.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),o]}function u2(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return $t(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function ya(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,o=l.charAt(u);return o&&o!=="/"?null:l.slice(u)||"/"}function c2(l,s="/"){let{pathname:u,search:o="",hash:f=""}=typeof l=="string"?ml(l):l;return{pathname:u?u.startsWith("/")?u:f2(u,s):s,search:h2(o),hash:p2(f)}}function f2(l,s){let u=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Tu(l,s,u,o){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function d2(l){return l.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function h1(l){let s=d2(l);return s.map((u,o)=>o===s.length-1?u.pathname:u.pathnameBase)}function p1(l,s,u,o=!1){let f;typeof l=="string"?f=ml(l):(f={...l},Ce(!f.pathname||!f.pathname.includes("?"),Tu("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),Tu("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),Tu("#","search","hash",f)));let m=l===""||f.pathname==="",b=m?"/":f.pathname,g;if(b==null)g=u;else{let M=s.length-1;if(!o&&b.startsWith("..")){let j=b.split("/");for(;j[0]==="..";)j.shift(),M-=1;f.pathname=j.join("/")}g=M>=0?s[M]:"/"}let y=c2(f,g),p=b&&b!=="/"&&b.endsWith("/"),x=(m||b===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(p||x)&&(y.pathname+="/"),y}var ga=l=>l.join("/").replace(/\/\/+/g,"/"),m2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),h2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,p2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function g2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var g1=["POST","PUT","PATCH","DELETE"];new Set(g1);var y2=["GET",...g1];new Set(y2);var hl=T.createContext(null);hl.displayName="DataRouter";var is=T.createContext(null);is.displayName="DataRouterState";var y1=T.createContext({isTransitioning:!1});y1.displayName="ViewTransition";var b2=T.createContext(new Map);b2.displayName="Fetchers";var v2=T.createContext(null);v2.displayName="Await";var Wt=T.createContext(null);Wt.displayName="Navigation";var ji=T.createContext(null);ji.displayName="Location";var xa=T.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var oc=T.createContext(null);oc.displayName="RouteError";function x2(l,{relative:s}={}){Ce(Ei(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=T.useContext(Wt),{hash:f,pathname:m,search:b}=Ti(l,{relative:s}),g=m;return u!=="/"&&(g=m==="/"?u:ga([u,m])),o.createHref({pathname:g,search:b,hash:f})}function Ei(){return T.useContext(ji)!=null}function jn(){return Ce(Ei(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ji).location}var b1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v1(l){T.useContext(Wt).static||T.useLayoutEffect(l)}function w2(){let{isDataRoute:l}=T.useContext(xa);return l?D2():_2()}function _2(){Ce(Ei(),"useNavigate() may be used only in the context of a <Router> component.");let l=T.useContext(hl),{basename:s,navigator:u}=T.useContext(Wt),{matches:o}=T.useContext(xa),{pathname:f}=jn(),m=JSON.stringify(h1(o)),b=T.useRef(!1);return v1(()=>{b.current=!0}),T.useCallback((y,p={})=>{if($t(b.current,b1),!b.current)return;if(typeof y=="number"){u.go(y);return}let x=p1(y,JSON.parse(m),f,p.relative==="path");l==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:ga([s,x.pathname])),(p.replace?u.replace:u.push)(x,p.state,p)},[s,u,m,f,l])}T.createContext(null);function Ti(l,{relative:s}={}){let{matches:u}=T.useContext(xa),{pathname:o}=jn(),f=JSON.stringify(h1(u));return T.useMemo(()=>p1(l,JSON.parse(f),o,s==="path"),[l,f,o,s])}function A2(l,s){return x1(l,s)}function x1(l,s,u,o){var G;Ce(Ei(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:m}=T.useContext(Wt),{matches:b}=T.useContext(xa),g=b[b.length-1],y=g?g.params:{},p=g?g.pathname:"/",x=g?g.pathnameBase:"/",M=g&&g.route;{let q=M&&M.path||"";w1(p,!M||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let j=jn(),O;if(s){let q=typeof s=="string"?ml(s):s;Ce(x==="/"||((G=q.pathname)==null?void 0:G.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${q.pathname}" was given in the \`location\` prop.`),O=q}else O=j;let C=O.pathname||"/",Y=C;if(x!=="/"){let q=x.replace(/^\//,"").split("/");Y="/"+C.replace(/^\//,"").split("/").slice(q.length).join("/")}let B=!m&&u&&u.matches&&u.matches.length>0?u.matches:f1(l,{pathname:Y});$t(M||B!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),$t(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=T2(B&&B.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:ga([x,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?x:ga([x,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),b,u,o);return s&&L?T.createElement(ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},L):L}function S2(){let l=z2(),s=g2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},s),u?T.createElement("pre",{style:f},u):null,b)}var N2=T.createElement(S2,null),j2=class extends T.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?T.createElement(xa.Provider,{value:this.props.routeContext},T.createElement(oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function E2({routeContext:l,match:s,children:u}){let o=T.useContext(hl);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),T.createElement(xa.Provider,{value:l},u)}function T2(l,s=[],u=null,o=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let f=l,m=u==null?void 0:u.errors;if(m!=null){let y=f.findIndex(p=>p.route.id&&(m==null?void 0:m[p.route.id])!==void 0);Ce(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let b=!1,g=-1;if(u)for(let y=0;y<f.length;y++){let p=f[y];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=y),p.route.id){let{loaderData:x,errors:M}=u,j=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!M||M[p.route.id]===void 0);if(p.route.lazy||j){b=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((y,p,x)=>{let M,j=!1,O=null,C=null;u&&(M=m&&p.route.id?m[p.route.id]:void 0,O=p.route.errorElement||N2,b&&(g<0&&x===0?(w1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,C=null):g===x&&(j=!0,C=p.route.hydrateFallbackElement||null)));let Y=s.concat(f.slice(0,x+1)),B=()=>{let L;return M?L=O:j?L=C:p.route.Component?L=T.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=y,T.createElement(E2,{match:p,routeContext:{outlet:y,matches:Y,isDataRoute:u!=null},children:L})};return u&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?T.createElement(j2,{location:u.location,revalidation:u.revalidation,component:O,error:M,children:B(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):B()},null)}function uc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function O2(l){let s=T.useContext(hl);return Ce(s,uc(l)),s}function C2(l){let s=T.useContext(is);return Ce(s,uc(l)),s}function k2(l){let s=T.useContext(xa);return Ce(s,uc(l)),s}function cc(l){let s=k2(l),u=s.matches[s.matches.length-1];return Ce(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function M2(){return cc("useRouteId")}function z2(){var o;let l=T.useContext(oc),s=C2("useRouteError"),u=cc("useRouteError");return l!==void 0?l:(o=s.errors)==null?void 0:o[u]}function D2(){let{router:l}=O2("useNavigate"),s=cc("useNavigate"),u=T.useRef(!1);return v1(()=>{u.current=!0}),T.useCallback(async(f,m={})=>{$t(u.current,b1),u.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:s,...m}))},[l,s])}var Sh={};function w1(l,s,u){!s&&!Sh[l]&&(Sh[l]=!0,$t(!1,u))}T.memo(L2);function L2({routes:l,future:s,state:u}){return x1(l,void 0,u,s)}function ma(l){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function R2({basename:l="/",children:s=null,location:u,navigationType:o="POP",navigator:f,static:m=!1}){Ce(!Ei(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),g=T.useMemo(()=>({basename:b,navigator:f,static:m,future:{}}),[b,f,m]);typeof u=="string"&&(u=ml(u));let{pathname:y="/",search:p="",hash:x="",state:M=null,key:j="default"}=u,O=T.useMemo(()=>{let C=ya(y,b);return C==null?null:{location:{pathname:C,search:p,hash:x,state:M,key:j},navigationType:o}},[b,y,p,x,M,j,o]);return $t(O!=null,`<Router basename="${b}"> is not able to match the URL "${y}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:T.createElement(Wt.Provider,{value:g},T.createElement(ji.Provider,{children:s,value:O}))}function U2({children:l,location:s}){return A2(Gu(l),s)}function Gu(l,s=[]){let u=[];return T.Children.forEach(l,(o,f)=>{if(!T.isValidElement(o))return;let m=[...s,f];if(o.type===T.Fragment){u.push.apply(u,Gu(o.props.children,m));return}Ce(o.type===ma,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Gu(o.props.children,m)),u.push(b)}),u}var Zr="get",Kr="application/x-www-form-urlencoded";function rs(l){return l!=null&&typeof l.tagName=="string"}function H2(l){return rs(l)&&l.tagName.toLowerCase()==="button"}function B2(l){return rs(l)&&l.tagName.toLowerCase()==="form"}function q2(l){return rs(l)&&l.tagName.toLowerCase()==="input"}function G2(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function X2(l,s){return l.button===0&&(!s||s==="_self")&&!G2(l)}var $r=null;function Y2(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var V2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ou(l){return l!=null&&!V2.has(l)?($t(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kr}"`),null):l}function $2(l,s){let u,o,f,m,b;if(B2(l)){let g=l.getAttribute("action");o=g?ya(g,s):null,u=l.getAttribute("method")||Zr,f=Ou(l.getAttribute("enctype"))||Kr,m=new FormData(l)}else if(H2(l)||q2(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||g.getAttribute("action");if(o=y?ya(y,s):null,u=l.getAttribute("formmethod")||g.getAttribute("method")||Zr,f=Ou(l.getAttribute("formenctype"))||Ou(g.getAttribute("enctype"))||Kr,m=new FormData(g,l),!Y2()){let{name:p,type:x,value:M}=l;if(x==="image"){let j=p?`${p}.`:"";m.append(`${j}x`,"0"),m.append(`${j}y`,"0")}else p&&m.append(p,M)}}else{if(rs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Zr,o=null,f=Kr,b=l}return m&&f==="text/plain"&&(b=m,m=void 0),{action:o,method:u.toLowerCase(),encType:f,formData:m,body:b}}function fc(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}async function W2(l,s){if(l.id in s)return s[l.id];try{let u=await import(l.module);return s[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function I2(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Q2(l,s,u){let o=await Promise.all(l.map(async f=>{let m=s.routes[f.route.id];if(m){let b=await W2(m,u);return b.links?b.links():[]}return[]}));return F2(o.flat(1).filter(I2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Nh(l,s,u,o,f,m){let b=(y,p)=>u[p]?y.route.id!==u[p].route.id:!0,g=(y,p)=>{var x;return u[p].pathname!==y.pathname||((x=u[p].route.path)==null?void 0:x.endsWith("*"))&&u[p].params["*"]!==y.params["*"]};return m==="assets"?s.filter((y,p)=>b(y,p)||g(y,p)):m==="data"?s.filter((y,p)=>{var M;let x=o.routes[y.route.id];if(!x||!x.hasLoader)return!1;if(b(y,p)||g(y,p))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((M=u[0])==null?void 0:M.params)||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Z2(l,s,{includeHydrateFallback:u}={}){return K2(l.map(o=>{let f=s.routes[o.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function K2(l){return[...new Set(l)]}function P2(l){let s={},u=Object.keys(l).sort();for(let o of u)s[o]=l[o];return s}function F2(l,s){let u=new Set;return new Set(s),l.reduce((o,f)=>{let m=JSON.stringify(P2(f));return u.has(m)||(u.add(m),o.push({key:m,link:f})),o},[])}var J2=new Set([100,101,204,205]);function ey(l,s){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname="_root.data":s&&ya(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function _1(){let l=T.useContext(hl);return fc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function ty(){let l=T.useContext(is);return fc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var dc=T.createContext(void 0);dc.displayName="FrameworkContext";function A1(){let l=T.useContext(dc);return fc(l,"You must render this element inside a <HydratedRouter> element"),l}function ay(l,s){let u=T.useContext(dc),[o,f]=T.useState(!1),[m,b]=T.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:p,onMouseLeave:x,onTouchStart:M}=s,j=T.useRef(null);T.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let Y=L=>{L.forEach(G=>{b(G.isIntersecting)})},B=new IntersectionObserver(Y,{threshold:.5});return j.current&&B.observe(j.current),()=>{B.disconnect()}}},[l]),T.useEffect(()=>{if(o){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let O=()=>{f(!0)},C=()=>{f(!1),b(!1)};return u?l!=="intent"?[m,j,{}]:[m,j,{onFocus:gi(g,O),onBlur:gi(y,C),onMouseEnter:gi(p,O),onMouseLeave:gi(x,C),onTouchStart:gi(M,O)}]:[!1,j,{}]}function gi(l,s){return u=>{l&&l(u),u.defaultPrevented||s(u)}}function ny({page:l,...s}){let{router:u}=_1(),o=T.useMemo(()=>f1(u.routes,l,u.basename),[u.routes,l,u.basename]);return o?T.createElement(iy,{page:l,matches:o,...s}):null}function ly(l){let{manifest:s,routeModules:u}=A1(),[o,f]=T.useState([]);return T.useEffect(()=>{let m=!1;return Q2(l,s,u).then(b=>{m||f(b)}),()=>{m=!0}},[l,s,u]),o}function iy({page:l,matches:s,...u}){let o=jn(),{manifest:f,routeModules:m}=A1(),{basename:b}=_1(),{loaderData:g,matches:y}=ty(),p=T.useMemo(()=>Nh(l,s,y,f,o,"data"),[l,s,y,f,o]),x=T.useMemo(()=>Nh(l,s,y,f,o,"assets"),[l,s,y,f,o]),M=T.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let C=new Set,Y=!1;if(s.forEach(L=>{var q;let G=f.routes[L.route.id];!G||!G.hasLoader||(!p.some(le=>le.route.id===L.route.id)&&L.route.id in g&&((q=m[L.route.id])!=null&&q.shouldRevalidate)||G.hasClientLoader?Y=!0:C.add(L.route.id))}),C.size===0)return[];let B=ey(l,b);return Y&&C.size>0&&B.searchParams.set("_routes",s.filter(L=>C.has(L.route.id)).map(L=>L.route.id).join(",")),[B.pathname+B.search]},[b,g,o,f,p,s,l,m]),j=T.useMemo(()=>Z2(x,f),[x,f]),O=ly(x);return T.createElement(T.Fragment,null,M.map(C=>T.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...u})),j.map(C=>T.createElement("link",{key:C,rel:"modulepreload",href:C,...u})),O.map(({key:C,link:Y})=>T.createElement("link",{key:C,...Y})))}function ry(...l){return s=>{l.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var S1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S1&&(window.__reactRouterVersion="7.5.3")}catch{}function sy({basename:l,children:s,window:u}){let o=T.useRef();o.current==null&&(o.current=Qg({window:u,v5Compat:!0}));let f=o.current,[m,b]=T.useState({action:f.action,location:f.location}),g=T.useCallback(y=>{T.startTransition(()=>b(y))},[b]);return T.useLayoutEffect(()=>f.listen(g),[f,g]),T.createElement(R2,{basename:l,children:s,location:m.location,navigationType:m.action,navigator:f})}var N1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xi=T.forwardRef(function({onClick:s,discover:u="render",prefetch:o="none",relative:f,reloadDocument:m,replace:b,state:g,target:y,to:p,preventScrollReset:x,viewTransition:M,...j},O){let{basename:C}=T.useContext(Wt),Y=typeof p=="string"&&N1.test(p),B,L=!1;if(typeof p=="string"&&Y&&(B=p,S1))try{let W=new URL(window.location.href),ie=p.startsWith("//")?new URL(W.protocol+p):new URL(p),tt=ya(ie.pathname,C);ie.origin===W.origin&&tt!=null?p=tt+ie.search+ie.hash:L=!0}catch{$t(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=x2(p,{relative:f}),[q,le,Q]=ay(o,j),je=fy(p,{replace:b,state:g,target:y,preventScrollReset:x,relative:f,viewTransition:M});function De(W){s&&s(W),W.defaultPrevented||je(W)}let Ye=T.createElement("a",{...j,...Q,href:B||G,onClick:L||m?s:De,ref:ry(O,le),target:y,"data-discover":!Y&&u==="render"?"true":void 0});return q&&!Y?T.createElement(T.Fragment,null,Ye,T.createElement(ny,{page:G})):Ye});xi.displayName="Link";var oy=T.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:o="",end:f=!1,style:m,to:b,viewTransition:g,children:y,...p},x){let M=Ti(b,{relative:p.relative}),j=jn(),O=T.useContext(is),{navigator:C,basename:Y}=T.useContext(Wt),B=O!=null&&gy(M)&&g===!0,L=C.encodeLocation?C.encodeLocation(M).pathname:M.pathname,G=j.pathname,q=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;u||(G=G.toLowerCase(),q=q?q.toLowerCase():null,L=L.toLowerCase()),q&&Y&&(q=ya(q,Y)||q);const le=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Q=G===L||!f&&G.startsWith(L)&&G.charAt(le)==="/",je=q!=null&&(q===L||!f&&q.startsWith(L)&&q.charAt(L.length)==="/"),De={isActive:Q,isPending:je,isTransitioning:B},Ye=Q?s:void 0,W;typeof o=="function"?W=o(De):W=[o,Q?"active":null,je?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ie=typeof m=="function"?m(De):m;return T.createElement(xi,{...p,"aria-current":Ye,className:W,ref:x,style:ie,to:b,viewTransition:g},typeof y=="function"?y(De):y)});oy.displayName="NavLink";var uy=T.forwardRef(({discover:l="render",fetcherKey:s,navigate:u,reloadDocument:o,replace:f,state:m,method:b=Zr,action:g,onSubmit:y,relative:p,preventScrollReset:x,viewTransition:M,...j},O)=>{let C=hy(),Y=py(g,{relative:p}),B=b.toLowerCase()==="get"?"get":"post",L=typeof g=="string"&&N1.test(g),G=q=>{if(y&&y(q),q.defaultPrevented)return;q.preventDefault();let le=q.nativeEvent.submitter,Q=(le==null?void 0:le.getAttribute("formmethod"))||b;C(le||q.currentTarget,{fetcherKey:s,method:Q,navigate:u,replace:f,state:m,relative:p,preventScrollReset:x,viewTransition:M})};return T.createElement("form",{ref:O,method:B,action:Y,onSubmit:o?y:G,...j,"data-discover":!L&&l==="render"?"true":void 0})});uy.displayName="Form";function cy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j1(l){let s=T.useContext(hl);return Ce(s,cy(l)),s}function fy(l,{target:s,replace:u,state:o,preventScrollReset:f,relative:m,viewTransition:b}={}){let g=w2(),y=jn(),p=Ti(l,{relative:m});return T.useCallback(x=>{if(X2(x,s)){x.preventDefault();let M=u!==void 0?u:Ai(y)===Ai(p);g(l,{replace:M,state:o,preventScrollReset:f,relative:m,viewTransition:b})}},[y,g,p,u,o,s,l,f,m,b])}var dy=0,my=()=>`__${String(++dy)}__`;function hy(){let{router:l}=j1("useSubmit"),{basename:s}=T.useContext(Wt),u=M2();return T.useCallback(async(o,f={})=>{let{action:m,method:b,encType:g,formData:y,body:p}=$2(o,s);if(f.navigate===!1){let x=f.fetcherKey||my();await l.fetch(x,u,f.action||m,{preventScrollReset:f.preventScrollReset,formData:y,body:p,formMethod:f.method||b,formEncType:f.encType||g,flushSync:f.flushSync})}else await l.navigate(f.action||m,{preventScrollReset:f.preventScrollReset,formData:y,body:p,formMethod:f.method||b,formEncType:f.encType||g,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,u])}function py(l,{relative:s}={}){let{basename:u}=T.useContext(Wt),o=T.useContext(xa);Ce(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),m={...Ti(l||".",{relative:s})},b=jn();if(l==null){m.search=b.search;let g=new URLSearchParams(m.search),y=g.getAll("index");if(y.some(x=>x==="")){g.delete("index"),y.filter(M=>M).forEach(M=>g.append("index",M));let x=g.toString();m.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:ga([u,m.pathname])),Ai(m)}function gy(l,s={}){let u=T.useContext(y1);Ce(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=j1("useViewTransitionState"),f=Ti(l,{relative:s.relative});if(!u.isTransitioning)return!1;let m=ya(u.currentLocation.pathname,o)||u.currentLocation.pathname,b=ya(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Jr(f.pathname,b)!=null||Jr(f.pathname,m)!=null}new TextEncoder;[...J2];function yy({title:l,titleId:s,...u},o){return T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},u),l?T.createElement("title",{id:s},l):null,T.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const by=T.forwardRef(yy);function vy({title:l,titleId:s,...u},o){return T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},u),l?T.createElement("title",{id:s},l):null,T.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const xy=T.forwardRef(vy);var E1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jh=pa.createContext&&pa.createContext(E1),wy=["attr","size","title"];function _y(l,s){if(l==null)return{};var u=Ay(l,s),o,f;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);for(f=0;f<m.length;f++)o=m[f],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(u[o]=l[o])}return u}function Ay(l,s){if(l==null)return{};var u={};for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){if(s.indexOf(o)>=0)continue;u[o]=l[o]}return u}function es(){return es=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(l[o]=u[o])}return l},es.apply(this,arguments)}function Eh(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function ts(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Eh(Object(u),!0).forEach(function(o){Sy(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):Eh(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function Sy(l,s,u){return s=Ny(s),s in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function Ny(l){var s=jy(l,"string");return typeof s=="symbol"?s:s+""}function jy(l,s){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var o=u.call(l,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function T1(l){return l&&l.map((s,u)=>pa.createElement(s.tag,ts({key:u},s.attr),T1(s.child)))}function Re(l){return s=>pa.createElement(Ey,es({attr:ts({},l.attr)},s),T1(l.child))}function Ey(l){var s=u=>{var{attr:o,size:f,title:m}=l,b=_y(l,wy),g=f||u.size||"1em",y;return u.className&&(y=u.className),l.className&&(y=(y?y+" ":"")+l.className),pa.createElement("svg",es({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,b,{className:y,style:ts(ts({color:l.color||u.color},u.style),l.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),m&&pa.createElement("title",null,m),l.children)};return jh!==void 0?pa.createElement(jh.Consumer,null,u=>s(u)):s(E1)}function mc(l){return Re({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(l)}function hc(l){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function Ty(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function Oy(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"},child:[]}]})(l)}function O1(l){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(l)}function Cy(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(l)}function ky(l){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(l)}function My(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function zy(l){return Re({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(l)}function pc(l){return Re({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(l)}function Dy(l){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(l)}function Ly(l){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(l)}function Ry(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(l)}function Uy(l){return Re({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(l)}function Hy(l){return Re({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(l)}function By(l){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(l)}function qy(l){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(l)}function Th(l){return Re({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(l)}function Gy(l){return Re({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(l)}function Xy(){const[l,s]=T.useState(!1),u=[{path:"/pages/book",label:"Book",icon:c.jsx(O1,{className:"w-4 h-4"})},{path:"/pages/blog-post",label:"Blog Posts",icon:c.jsx(Oy,{className:"w-4 h-4"})},{path:"/pages/talk",label:"Talks",icon:c.jsx(Hy,{className:"w-4 h-4"})},{path:"/pages/workshop",label:"Workshop",icon:c.jsx(ky,{className:"w-4 h-4"})},{path:"/pages/publication",label:"Publications",icon:c.jsx(zy,{className:"w-4 h-4"})},{path:"/pages/coaching",label:"Coaching",icon:c.jsx(qy,{className:"w-4 h-4"})},{path:"/pages/ai-playbook",label:"AI Playbook",icon:c.jsx(By,{className:"w-4 h-4"})}];return c.jsx("header",{className:"bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg fixed w-full top-0 z-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsx(xi,{to:"/",className:"flex items-center space-x-2",children:c.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent",children:"ANUJ GUPTA"})}),c.jsx("nav",{className:"hidden md:flex items-center space-x-6",children:u.map(o=>c.jsxs(xi,{to:o.path,className:"flex items-center space-x-2 text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 px-2.5 py-1.5 rounded-md hover:bg-blue-700/50 text-sm",children:[o.icon,c.jsx("span",{className:"font-medium",children:o.label})]},o.path))}),c.jsx("button",{className:"md:hidden rounded-md p-1.5 text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none transition-all duration-200",onClick:()=>s(!l),children:l?c.jsx(xy,{className:"h-5 w-5"}):c.jsx(by,{className:"h-5 w-5"})})]}),l&&c.jsx("div",{className:"md:hidden bg-blue-800/95 rounded-lg shadow-xl mb-2",children:c.jsx("div",{className:"px-2 pt-1 pb-2 space-y-0.5",children:u.map(o=>c.jsxs(xi,{to:o.path,className:"flex items-center space-x-2 px-2.5 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-200 text-sm",onClick:()=>s(!1),children:[o.icon,c.jsx("span",{className:"font-medium",children:o.label})]},o.path))})})]})})}function Yy(){return c.jsx("div",{className:"w-full bg-white p-8 rounded-lg shadow-lg",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4",children:"Anuj Gupta"}),c.jsx("p",{className:"text-xl font-semibold mb-8 text-gray-800 border-l-4 border-blue-800 pl-4",children:"AI Executive | Board Advisor | AI Strategy & Innovation Leader"}),c.jsxs("div",{className:"space-y-10",children:[c.jsxs("section",{children:[c.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center",children:[c.jsx(Cy,{className:"mr-3 text-blue-800"}),"Current Engagements"]}),c.jsxs("ul",{className:"space-y-5",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Fractional Head of (Gen) AI"})," - Advising and steering AI initiatives for leading startups and multinational corporations across the US, Europe, and India."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Board & Executive Advisor on AI"})," - Partnering with Boards, CXOs, and investors to shape AI strategy at scale."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Architecting Enterprise AI Strategy"})," – Guiding MNCs in executing AI roadmaps that align with business objectives."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Masterclasses & Workshops"})," – Delivering high-impact AI workshops for board members, CXOs, and investment leaders."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Mentor to GCCs"})," – Advising on the establishment of world-class AI Centers of Excellence (CoEs) and AI teams."]})]})]})]}),c.jsxs("section",{children:[c.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center",children:[c.jsx(Ry,{className:"mr-3 text-blue-800"}),"Professional Journey"]}),c.jsxs("ul",{className:"space-y-8",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Advisor to YC-Backed AI Startups"})," – Recently mentored a YC company in developing mission-critical AI systems, showcased to Sam Altman & Vinod Khosla, securing Series B funding from Khosla Ventures."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI Thought Leader & Author"})," – Authored a landmark AI book, widely regarded in academia and industry:",c.jsxs("ul",{className:"mt-4 ml-6 space-y-3",children:[c.jsxs("li",{className:"flex items-start",children:[c.jsx(Dy,{className:"mt-1 mr-3 text-blue-800"}),"Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI, Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb, and YC-backed startups."]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx(Uy,{className:"mt-1 mr-3 text-blue-800"}),"Translated into five languages, with 260+ citations and adopted by 50+ global universities."]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx(Gy,{className:"mt-1 mr-3 text-blue-800"}),"Personally invited to present the book to Prof. Raj Reddy (Turing Award Winner, AI & Robotics luminary at CMU) and Dr. Srinivas Bangalore (Columbia, Princeton, Copenhagen Business School)."]})]})]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Strategic AI Leadership"})," – Led AI teams from inception to scale (5–100 members) across multiple geographies, developing AI systems in NLP, Vision, Speech, and Data Science."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"AI-Driven Business Impact"})," – Built and commercialized AI solutions that have directly contributed to multi-million-dollar revenues, driving AI-led growth at both startups and Fortune 50 enterprises."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"Pioneering AI-First Innovation"})," – Led AI efforts for one of the earliest AI-first startups (2013), culminating in acquisition by FreshWorks (NASDAQ: FRSH) in 2016."]})]}),c.jsxs("li",{className:"flex items-start",children:[c.jsx("span",{className:"flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-blue-800",children:"C-Suite & Board-Level Engagement"})," – Trusted advisor to Founders, Board Members, and C-suite executives across Business, Product, Engineering, Sales, and HR, driving AI adoption at an enterprise scale."]})]})]})]})]})]})})}function C1(l){return Re({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(l)}function Vy(l){return Re({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"},child:[]}]})(l)}const $y="/assets/Anuj_formal_high_res-Bd3n5HJQ.png";function Wy(){return c.jsxs("aside",{className:"w-1/5 bg-white p-8 rounded-lg shadow-lg py-2 h-fit pb-16",children:[c.jsx("div",{className:"author__avatar mb-4 flex flex-col items-center",children:c.jsx("img",{src:$y,className:"w-40 h-40 mx-auto rounded-full border-4 border-blue-100 shadow-lg object-cover mt-16",alt:"Anuj Gupta"})}),c.jsxs("div",{className:"author__content flex flex-col items-center",children:[c.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-3 text-center",children:"Anuj Gupta"}),c.jsxs("div",{className:"mb-4 text-center",children:[c.jsxs("p",{className:"text-md font-medium text-blue-700 tracking-tight flex items-center justify-center gap-2",children:[c.jsx(Th,{className:"text-blue-600"}),"On-Demand Head of AI | AI Advisor to Boards"]}),c.jsx("div",{className:"w-16 h-0.5 bg-blue-100 mx-auto mt-2"})]}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-3",children:[c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(Ly,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Helping Organizations"})," with their AI efforts."]})]}),c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(Th,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Coached 100+ CXOs"})," on AI adoption."]})]}),c.jsxs("p",{className:"leading-snug flex items-start gap-2",children:[c.jsx("span",{className:"mt-1 text-blue-600",children:c.jsx(O1,{})}),c.jsxs("span",{children:[c.jsx("span",{className:"font-medium text-gray-800",children:"Author"})," of Practical NLP (O'Reilly US) |",c.jsx("span",{className:"font-medium text-gray-800",children:" Angel Investor"})," |",c.jsx("span",{className:"font-medium text-gray-800",children:" Board Member"})]})]})]})]}),c.jsxs("div",{className:"author__urls-wrapper mt-16",children:[c.jsx("button",{className:"w-full bg-blue-800 hover:bg-blue-900 text-white py-2.5 px-4 rounded-md transition-all duration-300 mb-6 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Follow"}),c.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[c.jsxs("div",{className:"flex space-x-5",children:[c.jsx("a",{href:"https://www.linkedin.com/in/anujgupta-82/",className:"text-[#0077B5] hover:text-[#005582] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(hc,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://twitter.com/anujgupta82",className:"text-black hover:text-gray-800 transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:c.jsx(C1,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://github.com/anujgupta82",className:"text-[#333] hover:text-black transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:c.jsx(mc,{className:"w-7 h-7"})})]}),c.jsxs("div",{className:"flex space-x-5",children:[c.jsx("a",{href:"https://gradient-advisors.ai/",className:"text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Gradient Advisors",children:c.jsx(pc,{className:"w-7 h-7"})}),c.jsx("a",{href:"https://pragmaticai1.substack.com/",className:"text-[#FF6719] hover:text-[#e05a14] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Substack",children:c.jsx(Vy,{className:"w-7 h-7"})})]})]})]})]})}function Iy(){return c.jsx("footer",{className:"bg-blue-800 text-white py-12 relative",children:c.jsxs("div",{className:"container mx-auto px-4",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[c.jsxs("div",{className:"text-center md:text-left",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Anuj Gupta"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 Anuj Gupta | All Rights Reserved"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Get in Touch"}),c.jsx("p",{className:"text-gray-400 text-sm mb-6",children:"I'm always excited to meet new people. Let's connect and see where it takes us!"}),c.jsxs("a",{href:"mailto:contact@example.com",className:"inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600",children:[c.jsx(My,{className:"mr-2"}),"contact@example.com"]})]}),c.jsxs("div",{className:"text-center md:text-right",children:[c.jsx("h3",{className:"text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent",children:"Stay Connected"}),c.jsxs("div",{className:"flex justify-center md:justify-end space-x-6",children:[c.jsx("a",{href:"https://www.linkedin.com/in/anujgupta-82/",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(hc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://twitter.com/anujgupta82",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(Ty,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://gradient-advisors.ai/",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(pc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://github.com/yourusername",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform",target:"_blank",rel:"noopener noreferrer",children:c.jsx(mc,{className:"w-6 h-6"})})]})]})]}),c.jsx("div",{className:"border-gray-400 mt-12 pt-8 text-center",children:c.jsx("p",{className:"text-gray-400 text-sm",children:"Empowering businesses through AI innovation and strategic leadership"})})]})})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Qy={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Wa={prefix:"fas",iconName:"window-maximize",icon:[512,512,[128470],"f2d0","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ia={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Qa={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Zy={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Ky={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Py={prefix:"fas",iconName:"anchor",icon:[576,512,[9875],"f13d","M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 208-48 0c-53 0-96-43-96-96l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 88.4 71.6 160 160 160l80 0 80 0c88.4 0 160-71.6 160-160l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 53-43 96-96 96l-48 0 0-208 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0z"]},Fy={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Jy(l,s,u){return(s=tb(s))in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function Oh(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function H(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Oh(Object(u),!0).forEach(function(o){Jy(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):Oh(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function eb(l,s){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var o=u.call(l,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function tb(l){var s=eb(l,"string");return typeof s=="symbol"?s:s+""}const Ch=()=>{};let gc={},k1={},M1=null,z1={mark:Ch,measure:Ch};try{typeof window<"u"&&(gc=window),typeof document<"u"&&(k1=document),typeof MutationObserver<"u"&&(M1=MutationObserver),typeof performance<"u"&&(z1=performance)}catch{}const{userAgent:kh=""}=gc.navigator||{},Pa=gc,Se=k1,Mh=M1,Wr=z1;Pa.document;const wa=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",D1=~kh.indexOf("MSIE")||~kh.indexOf("Trident/");var ab=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,nb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,L1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},lb={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},R1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],et="classic",ss="duotone",ib="sharp",rb="sharp-duotone",U1=[et,ss,ib,rb],sb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ob={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ub=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),cb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},fb=["fak","fa-kit","fakd","fa-kit-duotone"],zh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},db=["kit"],mb={kit:{"fa-kit":"fak"}},hb=["fak","fakd"],pb={kit:{fak:"fa-kit"}},Dh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ir={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],yb=["fak","fa-kit","fakd","fa-kit-duotone"],bb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},vb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xb={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},wb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Yu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...gb,...wb],_b=["solid","regular","light","thin","duotone","brands"],H1=[1,2,3,4,5,6,7,8,9,10],Ab=H1.concat([11,12,13,14,15,16,17,18,19,20]),Sb=[...Object.keys(xb),..._b,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ir.GROUP,Ir.SWAP_OPACITY,Ir.PRIMARY,Ir.SECONDARY].concat(H1.map(l=>"".concat(l,"x"))).concat(Ab.map(l=>"w-".concat(l))),Nb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ba="___FONT_AWESOME___",Vu=16,B1="fa",q1="svg-inline--fa",Sn="data-fa-i2svg",$u="data-fa-pseudo-element",jb="data-fa-pseudo-element-pending",yc="data-prefix",bc="data-icon",Lh="fontawesome-i2svg",Eb="async",Tb=["HTML","HEAD","STYLE","SCRIPT"],G1=(()=>{try{return!0}catch{return!1}})();function Oi(l){return new Proxy(l,{get(s,u){return u in s?s[u]:s[et]}})}const X1=H({},L1);X1[et]=H(H(H(H({},{"fa-duotone":"duotone"}),L1[et]),zh.kit),zh["kit-duotone"]);const Ob=Oi(X1),Wu=H({},cb);Wu[et]=H(H(H(H({},{duotone:"fad"}),Wu[et]),Dh.kit),Dh["kit-duotone"]);const Rh=Oi(Wu),Iu=H({},Xu);Iu[et]=H(H({},Iu[et]),pb.kit);const vc=Oi(Iu),Qu=H({},vb);Qu[et]=H(H({},Qu[et]),mb.kit);Oi(Qu);const Cb=ab,Y1="fa-layers-text",kb=nb,Mb=H({},sb);Oi(Mb);const zb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Cu=lb,Db=[...db,...Sb],wi=Pa.FontAwesomeConfig||{};function Lb(l){var s=Se.querySelector("script["+l+"]");if(s)return s.getAttribute(l)}function Rb(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Se&&typeof Se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[u,o]=s;const f=Rb(Lb(u));f!=null&&(wi[o]=f)});const V1={styleDefault:"solid",familyDefault:et,cssPrefix:B1,replacementClass:q1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wi.familyPrefix&&(wi.cssPrefix=wi.familyPrefix);const dl=H(H({},V1),wi);dl.autoReplaceSvg||(dl.observeMutations=!1);const Z={};Object.keys(V1).forEach(l=>{Object.defineProperty(Z,l,{enumerable:!0,set:function(s){dl[l]=s,_i.forEach(u=>u(Z))},get:function(){return dl[l]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(l){dl.cssPrefix=l,_i.forEach(s=>s(Z))},get:function(){return dl.cssPrefix}});Pa.FontAwesomeConfig=Z;const _i=[];function Ub(l){return _i.push(l),()=>{_i.splice(_i.indexOf(l),1)}}const Za=Vu,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hb(l){if(!l||!wa)return;const s=Se.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=l;const u=Se.head.childNodes;let o=null;for(let f=u.length-1;f>-1;f--){const m=u[f],b=(m.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(b)>-1&&(o=m)}return Se.head.insertBefore(s,o),l}const Bb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Si(){let l=12,s="";for(;l-- >0;)s+=Bb[Math.random()*62|0];return s}function pl(l){const s=[];for(let u=(l||[]).length>>>0;u--;)s[u]=l[u];return s}function xc(l){return l.classList?pl(l.classList):(l.getAttribute("class")||"").split(" ").filter(s=>s)}function $1(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qb(l){return Object.keys(l||{}).reduce((s,u)=>s+"".concat(u,'="').concat($1(l[u]),'" '),"").trim()}function os(l){return Object.keys(l||{}).reduce((s,u)=>s+"".concat(u,": ").concat(l[u].trim(),";"),"")}function wc(l){return l.size!==Yt.size||l.x!==Yt.x||l.y!==Yt.y||l.rotate!==Yt.rotate||l.flipX||l.flipY}function Gb(l){let{transform:s,containerWidth:u,iconWidth:o}=l;const f={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(s.x*32,", ").concat(s.y*32,") "),b="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),y={transform:"".concat(m," ").concat(b," ").concat(g)},p={transform:"translate(".concat(o/2*-1," -256)")};return{outer:f,inner:y,path:p}}function Xb(l){let{transform:s,width:u=Vu,height:o=Vu,startCentered:f=!1}=l,m="";return f&&D1?m+="translate(".concat(s.x/Za-u/2,"em, ").concat(s.y/Za-o/2,"em) "):f?m+="translate(calc(-50% + ".concat(s.x/Za,"em), calc(-50% + ").concat(s.y/Za,"em)) "):m+="translate(".concat(s.x/Za,"em, ").concat(s.y/Za,"em) "),m+="scale(".concat(s.size/Za*(s.flipX?-1:1),", ").concat(s.size/Za*(s.flipY?-1:1),") "),m+="rotate(".concat(s.rotate,"deg) "),m}var Yb=`:root, :host {
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
}`;function W1(){const l=B1,s=q1,u=Z.cssPrefix,o=Z.replacementClass;let f=Yb;if(u!==l||o!==s){const m=new RegExp("\\.".concat(l,"\\-"),"g"),b=new RegExp("\\--".concat(l,"\\-"),"g"),g=new RegExp("\\.".concat(s),"g");f=f.replace(m,".".concat(u,"-")).replace(b,"--".concat(u,"-")).replace(g,".".concat(o))}return f}let Uh=!1;function ku(){Z.autoAddCss&&!Uh&&(Hb(W1()),Uh=!0)}var Vb={mixout(){return{dom:{css:W1,insertCss:ku}}},hooks(){return{beforeDOMElementCreation(){ku()},beforeI2svg(){ku()}}}};const va=Pa||{};va[ba]||(va[ba]={});va[ba].styles||(va[ba].styles={});va[ba].hooks||(va[ba].hooks={});va[ba].shims||(va[ba].shims=[]);var Vt=va[ba];const I1=[],Q1=function(){Se.removeEventListener("DOMContentLoaded",Q1),as=1,I1.map(l=>l())};let as=!1;wa&&(as=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),as||Se.addEventListener("DOMContentLoaded",Q1));function $b(l){wa&&(as?setTimeout(l,0):I1.push(l))}function Ci(l){const{tag:s,attributes:u={},children:o=[]}=l;return typeof l=="string"?$1(l):"<".concat(s," ").concat(qb(u),">").concat(o.map(Ci).join(""),"</").concat(s,">")}function Hh(l,s,u){if(l&&l[s]&&l[s][u])return{prefix:s,iconName:u,icon:l[s][u]}}var Mu=function(s,u,o,f){var m=Object.keys(s),b=m.length,g=u,y,p,x;for(o===void 0?(y=1,x=s[m[0]]):(y=0,x=o);y<b;y++)p=m[y],x=g(x,s[p],p,s);return x};function Wb(l){const s=[];let u=0;const o=l.length;for(;u<o;){const f=l.charCodeAt(u++);if(f>=55296&&f<=56319&&u<o){const m=l.charCodeAt(u++);(m&64512)==56320?s.push(((f&1023)<<10)+(m&1023)+65536):(s.push(f),u--)}else s.push(f)}return s}function Zu(l){const s=Wb(l);return s.length===1?s[0].toString(16):null}function Ib(l,s){const u=l.length;let o=l.charCodeAt(s),f;return o>=55296&&o<=56319&&u>s+1&&(f=l.charCodeAt(s+1),f>=56320&&f<=57343)?(o-55296)*1024+f-56320+65536:o}function Bh(l){return Object.keys(l).reduce((s,u)=>{const o=l[u];return!!o.icon?s[o.iconName]=o.icon:s[u]=o,s},{})}function Ku(l,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=u,f=Bh(s);typeof Vt.hooks.addPack=="function"&&!o?Vt.hooks.addPack(l,Bh(s)):Vt.styles[l]=H(H({},Vt.styles[l]||{}),f),l==="fas"&&Ku("fa",s)}const{styles:Ni,shims:Qb}=Vt,Z1=Object.keys(vc),Zb=Z1.reduce((l,s)=>(l[s]=Object.keys(vc[s]),l),{});let _c=null,K1={},P1={},F1={},J1={},ep={};function Kb(l){return~Db.indexOf(l)}function Pb(l,s){const u=s.split("-"),o=u[0],f=u.slice(1).join("-");return o===l&&f!==""&&!Kb(f)?f:null}const tp=()=>{const l=o=>Mu(Ni,(f,m,b)=>(f[b]=Mu(m,o,{}),f),{});K1=l((o,f,m)=>(f[3]&&(o[f[3]]=m),f[2]&&f[2].filter(g=>typeof g=="number").forEach(g=>{o[g.toString(16)]=m}),o)),P1=l((o,f,m)=>(o[m]=m,f[2]&&f[2].filter(g=>typeof g=="string").forEach(g=>{o[g]=m}),o)),ep=l((o,f,m)=>{const b=f[2];return o[m]=m,b.forEach(g=>{o[g]=m}),o});const s="far"in Ni||Z.autoFetchSvg,u=Mu(Qb,(o,f)=>{const m=f[0];let b=f[1];const g=f[2];return b==="far"&&!s&&(b="fas"),typeof m=="string"&&(o.names[m]={prefix:b,iconName:g}),typeof m=="number"&&(o.unicodes[m.toString(16)]={prefix:b,iconName:g}),o},{names:{},unicodes:{}});F1=u.names,J1=u.unicodes,_c=us(Z.styleDefault,{family:Z.familyDefault})};Ub(l=>{_c=us(l.styleDefault,{family:Z.familyDefault})});tp();function Ac(l,s){return(K1[l]||{})[s]}function Fb(l,s){return(P1[l]||{})[s]}function An(l,s){return(ep[l]||{})[s]}function ap(l){return F1[l]||{prefix:null,iconName:null}}function Jb(l){const s=J1[l],u=Ac("fas",l);return s||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function Fa(){return _c}const np=()=>({prefix:null,iconName:null,rest:[]});function ev(l){let s=et;const u=Z1.reduce((o,f)=>(o[f]="".concat(Z.cssPrefix,"-").concat(f),o),{});return U1.forEach(o=>{(l.includes(u[o])||l.some(f=>Zb[o].includes(f)))&&(s=o)}),s}function us(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=et}=s,o=Ob[u][l];if(u===ss&&!l)return"fad";const f=Rh[u][l]||Rh[u][o],m=l in Vt.styles?l:null;return f||m||null}function tv(l){let s=[],u=null;return l.forEach(o=>{const f=Pb(Z.cssPrefix,o);f?u=f:o&&s.push(o)}),{iconName:u,rest:s}}function qh(l){return l.sort().filter((s,u,o)=>o.indexOf(s)===u)}function cs(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=s;let o=null;const f=Yu.concat(yb),m=qh(l.filter(M=>f.includes(M))),b=qh(l.filter(M=>!Yu.includes(M))),g=m.filter(M=>(o=M,!R1.includes(M))),[y=null]=g,p=ev(m),x=H(H({},tv(b)),{},{prefix:us(y,{family:p})});return H(H(H({},x),iv({values:l,family:p,styles:Ni,config:Z,canonical:x,givenPrefix:o})),av(u,o,x))}function av(l,s,u){let{prefix:o,iconName:f}=u;if(l||!o||!f)return{prefix:o,iconName:f};const m=s==="fa"?ap(f):{},b=An(o,f);return f=m.iconName||b||f,o=m.prefix||o,o==="far"&&!Ni.far&&Ni.fas&&!Z.autoFetchSvg&&(o="fas"),{prefix:o,iconName:f}}const nv=U1.filter(l=>l!==et||l!==ss),lv=Object.keys(Xu).filter(l=>l!==et).map(l=>Object.keys(Xu[l])).flat();function iv(l){const{values:s,family:u,canonical:o,givenPrefix:f="",styles:m={},config:b={}}=l,g=u===ss,y=s.includes("fa-duotone")||s.includes("fad"),p=b.familyDefault==="duotone",x=o.prefix==="fad"||o.prefix==="fa-duotone";if(!g&&(y||p||x)&&(o.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(o.prefix="fab"),!o.prefix&&nv.includes(u)&&(Object.keys(m).find(j=>lv.includes(j))||b.autoFetchSvg)){const j=ub.get(u).defaultShortPrefixId;o.prefix=j,o.iconName=An(o.prefix,o.iconName)||o.iconName}return(o.prefix==="fa"||f==="fa")&&(o.prefix=Fa()||"fas"),o}class rv{constructor(){this.definitions={}}add(){for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];const f=u.reduce(this._pullDefinitions,{});Object.keys(f).forEach(m=>{this.definitions[m]=H(H({},this.definitions[m]||{}),f[m]),Ku(m,f[m]);const b=vc[et][m];b&&Ku(b,f[m]),tp()})}reset(){this.definitions={}}_pullDefinitions(s,u){const o=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(o).map(f=>{const{prefix:m,iconName:b,icon:g}=o[f],y=g[2];s[m]||(s[m]={}),y.length>0&&y.forEach(p=>{typeof p=="string"&&(s[m][p]=g)}),s[m][b]=g}),s}}let Gh=[],ul={};const fl={},sv=Object.keys(fl);function ov(l,s){let{mixoutsTo:u}=s;return Gh=l,ul={},Object.keys(fl).forEach(o=>{sv.indexOf(o)===-1&&delete fl[o]}),Gh.forEach(o=>{const f=o.mixout?o.mixout():{};if(Object.keys(f).forEach(m=>{typeof f[m]=="function"&&(u[m]=f[m]),typeof f[m]=="object"&&Object.keys(f[m]).forEach(b=>{u[m]||(u[m]={}),u[m][b]=f[m][b]})}),o.hooks){const m=o.hooks();Object.keys(m).forEach(b=>{ul[b]||(ul[b]=[]),ul[b].push(m[b])})}o.provides&&o.provides(fl)}),u}function Pu(l,s){for(var u=arguments.length,o=new Array(u>2?u-2:0),f=2;f<u;f++)o[f-2]=arguments[f];return(ul[l]||[]).forEach(b=>{s=b.apply(null,[s,...o])}),s}function Nn(l){for(var s=arguments.length,u=new Array(s>1?s-1:0),o=1;o<s;o++)u[o-1]=arguments[o];(ul[l]||[]).forEach(m=>{m.apply(null,u)})}function Ja(){const l=arguments[0],s=Array.prototype.slice.call(arguments,1);return fl[l]?fl[l].apply(null,s):void 0}function Fu(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:s}=l;const u=l.prefix||Fa();if(s)return s=An(u,s)||s,Hh(lp.definitions,u,s)||Hh(Vt.styles,u,s)}const lp=new rv,uv=()=>{Z.autoReplaceSvg=!1,Z.observeMutations=!1,Nn("noAuto")},cv={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wa?(Nn("beforeI2svg",l),Ja("pseudoElements2svg",l),Ja("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s}=l;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,$b(()=>{dv({autoReplaceSvgRoot:s}),Nn("watch",l)})}},fv={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:An(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const s=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],u=us(l[0]);return{prefix:u,iconName:An(u,s)||s}}if(typeof l=="string"&&(l.indexOf("".concat(Z.cssPrefix,"-"))>-1||l.match(Cb))){const s=cs(l.split(" "),{skipLookups:!0});return{prefix:s.prefix||Fa(),iconName:An(s.prefix,s.iconName)||s.iconName}}if(typeof l=="string"){const s=Fa();return{prefix:s,iconName:An(s,l)||l}}}},gt={noAuto:uv,config:Z,dom:cv,parse:fv,library:lp,findIconDefinition:Fu,toHtml:Ci},dv=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s=Se}=l;(Object.keys(Vt.styles).length>0||Z.autoFetchSvg)&&wa&&Z.autoReplaceSvg&&gt.dom.i2svg({node:s})};function fs(l,s){return Object.defineProperty(l,"abstract",{get:s}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(u=>Ci(u))}}),Object.defineProperty(l,"node",{get:function(){if(!wa)return;const u=Se.createElement("div");return u.innerHTML=l.html,u.children}}),l}function mv(l){let{children:s,main:u,mask:o,attributes:f,styles:m,transform:b}=l;if(wc(b)&&u.found&&!o.found){const{width:g,height:y}=u,p={x:g/y/2,y:.5};f.style=os(H(H({},m),{},{"transform-origin":"".concat(p.x+b.x/16,"em ").concat(p.y+b.y/16,"em")}))}return[{tag:"svg",attributes:f,children:s}]}function hv(l){let{prefix:s,iconName:u,children:o,attributes:f,symbol:m}=l;const b=m===!0?"".concat(s,"-").concat(Z.cssPrefix,"-").concat(u):m;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},f),{},{id:b}),children:o}]}]}function Sc(l){const{icons:{main:s,mask:u},prefix:o,iconName:f,transform:m,symbol:b,title:g,maskId:y,titleId:p,extra:x,watchable:M=!1}=l,{width:j,height:O}=u.found?u:s,C=hb.includes(o),Y=[Z.replacementClass,f?"".concat(Z.cssPrefix,"-").concat(f):""].filter(Q=>x.classes.indexOf(Q)===-1).filter(Q=>Q!==""||!!Q).concat(x.classes).join(" ");let B={children:[],attributes:H(H({},x.attributes),{},{"data-prefix":o,"data-icon":f,class:Y,role:x.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(O)})};const L=C&&!~x.classes.indexOf("fa-fw")?{width:"".concat(j/O*16*.0625,"em")}:{};M&&(B.attributes[Sn]=""),g&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(p||Si())},children:[g]}),delete B.attributes.title);const G=H(H({},B),{},{prefix:o,iconName:f,main:s,mask:u,maskId:y,transform:m,symbol:b,styles:H(H({},L),x.styles)}),{children:q,attributes:le}=u.found&&s.found?Ja("generateAbstractMask",G)||{children:[],attributes:{}}:Ja("generateAbstractIcon",G)||{children:[],attributes:{}};return G.children=q,G.attributes=le,b?hv(G):mv(G)}function Xh(l){const{content:s,width:u,height:o,transform:f,title:m,extra:b,watchable:g=!1}=l,y=H(H(H({},b.attributes),m?{title:m}:{}),{},{class:b.classes.join(" ")});g&&(y[Sn]="");const p=H({},b.styles);wc(f)&&(p.transform=Xb({transform:f,startCentered:!0,width:u,height:o}),p["-webkit-transform"]=p.transform);const x=os(p);x.length>0&&(y.style=x);const M=[];return M.push({tag:"span",attributes:y,children:[s]}),m&&M.push({tag:"span",attributes:{class:"sr-only"},children:[m]}),M}function pv(l){const{content:s,title:u,extra:o}=l,f=H(H(H({},o.attributes),u?{title:u}:{}),{},{class:o.classes.join(" ")}),m=os(o.styles);m.length>0&&(f.style=m);const b=[];return b.push({tag:"span",attributes:f,children:[s]}),u&&b.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),b}const{styles:zu}=Vt;function Ju(l){const s=l[0],u=l[1],[o]=l.slice(4);let f=null;return Array.isArray(o)?f={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Cu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Cu.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Cu.PRIMARY),fill:"currentColor",d:o[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:s,height:u,icon:f}}const gv={found:!1,width:512,height:512};function yv(l,s){!G1&&!Z.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(s,'" is missing.'))}function ec(l,s){let u=s;return s==="fa"&&Z.styleDefault!==null&&(s=Fa()),new Promise((o,f)=>{if(u==="fa"){const m=ap(l)||{};l=m.iconName||l,s=m.prefix||s}if(l&&s&&zu[s]&&zu[s][l]){const m=zu[s][l];return o(Ju(m))}yv(l,s),o(H(H({},gv),{},{icon:Z.showMissingIcons&&l?Ja("missingIconAbstract")||{}:{}}))})}const Yh=()=>{},tc=Z.measurePerformance&&Wr&&Wr.mark&&Wr.measure?Wr:{mark:Yh,measure:Yh},vi='FA "6.7.2"',bv=l=>(tc.mark("".concat(vi," ").concat(l," begins")),()=>ip(l)),ip=l=>{tc.mark("".concat(vi," ").concat(l," ends")),tc.measure("".concat(vi," ").concat(l),"".concat(vi," ").concat(l," begins"),"".concat(vi," ").concat(l," ends"))};var Nc={begin:bv,end:ip};const Pr=()=>{};function Vh(l){return typeof(l.getAttribute?l.getAttribute(Sn):null)=="string"}function vv(l){const s=l.getAttribute?l.getAttribute(yc):null,u=l.getAttribute?l.getAttribute(bc):null;return s&&u}function xv(l){return l&&l.classList&&l.classList.contains&&l.classList.contains(Z.replacementClass)}function wv(){return Z.autoReplaceSvg===!0?Fr.replace:Fr[Z.autoReplaceSvg]||Fr.replace}function _v(l){return Se.createElementNS("http://www.w3.org/2000/svg",l)}function Av(l){return Se.createElement(l)}function rp(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=l.tag==="svg"?_v:Av}=s;if(typeof l=="string")return Se.createTextNode(l);const o=u(l.tag);return Object.keys(l.attributes||[]).forEach(function(m){o.setAttribute(m,l.attributes[m])}),(l.children||[]).forEach(function(m){o.appendChild(rp(m,{ceFn:u}))}),o}function Sv(l){let s=" ".concat(l.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}const Fr={replace:function(l){const s=l[0];if(s.parentNode)if(l[1].forEach(u=>{s.parentNode.insertBefore(rp(u),s)}),s.getAttribute(Sn)===null&&Z.keepOriginalSource){let u=Se.createComment(Sv(s));s.parentNode.replaceChild(u,s)}else s.remove()},nest:function(l){const s=l[0],u=l[1];if(~xc(s).indexOf(Z.replacementClass))return Fr.replace(l);const o=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const m=u[0].attributes.class.split(" ").reduce((b,g)=>(g===Z.replacementClass||g.match(o)?b.toSvg.push(g):b.toNode.push(g),b),{toNode:[],toSvg:[]});u[0].attributes.class=m.toSvg.join(" "),m.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",m.toNode.join(" "))}const f=u.map(m=>Ci(m)).join(`
`);s.setAttribute(Sn,""),s.innerHTML=f}};function $h(l){l()}function sp(l,s){const u=typeof s=="function"?s:Pr;if(l.length===0)u();else{let o=$h;Z.mutateApproach===Eb&&(o=Pa.requestAnimationFrame||$h),o(()=>{const f=wv(),m=Nc.begin("mutate");l.map(f),m(),u()})}}let jc=!1;function op(){jc=!0}function ac(){jc=!1}let ns=null;function Wh(l){if(!Mh||!Z.observeMutations)return;const{treeCallback:s=Pr,nodeCallback:u=Pr,pseudoElementsCallback:o=Pr,observeMutationsRoot:f=Se}=l;ns=new Mh(m=>{if(jc)return;const b=Fa();pl(m).forEach(g=>{if(g.type==="childList"&&g.addedNodes.length>0&&!Vh(g.addedNodes[0])&&(Z.searchPseudoElements&&o(g.target),s(g.target)),g.type==="attributes"&&g.target.parentNode&&Z.searchPseudoElements&&o(g.target.parentNode),g.type==="attributes"&&Vh(g.target)&&~zb.indexOf(g.attributeName))if(g.attributeName==="class"&&vv(g.target)){const{prefix:y,iconName:p}=cs(xc(g.target));g.target.setAttribute(yc,y||b),p&&g.target.setAttribute(bc,p)}else xv(g.target)&&u(g.target)})}),wa&&ns.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Nv(){ns&&ns.disconnect()}function jv(l){const s=l.getAttribute("style");let u=[];return s&&(u=s.split(";").reduce((o,f)=>{const m=f.split(":"),b=m[0],g=m.slice(1);return b&&g.length>0&&(o[b]=g.join(":").trim()),o},{})),u}function Ev(l){const s=l.getAttribute("data-prefix"),u=l.getAttribute("data-icon"),o=l.innerText!==void 0?l.innerText.trim():"";let f=cs(xc(l));return f.prefix||(f.prefix=Fa()),s&&u&&(f.prefix=s,f.iconName=u),f.iconName&&f.prefix||(f.prefix&&o.length>0&&(f.iconName=Fb(f.prefix,l.innerText)||Ac(f.prefix,Zu(l.innerText))),!f.iconName&&Z.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function Tv(l){const s=pl(l.attributes).reduce((f,m)=>(f.name!=="class"&&f.name!=="style"&&(f[m.name]=m.value),f),{}),u=l.getAttribute("title"),o=l.getAttribute("data-fa-title-id");return Z.autoA11y&&(u?s["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(o||Si()):(s["aria-hidden"]="true",s.focusable="false")),s}function Ov(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ih(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:o,rest:f}=Ev(l),m=Tv(l),b=Pu("parseNodeAttributes",{},l);let g=s.styleParser?jv(l):[];return H({iconName:u,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:o,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:g,attributes:m}},b)}const{styles:Cv}=Vt;function up(l){const s=Z.autoReplaceSvg==="nest"?Ih(l,{styleParser:!1}):Ih(l);return~s.extra.classes.indexOf(Y1)?Ja("generateLayersText",l,s):Ja("generateSvgReplacementMutation",l,s)}function kv(){return[...fb,...Yu]}function Qh(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wa)return Promise.resolve();const u=Se.documentElement.classList,o=x=>u.add("".concat(Lh,"-").concat(x)),f=x=>u.remove("".concat(Lh,"-").concat(x)),m=Z.autoFetchSvg?kv():R1.concat(Object.keys(Cv));m.includes("fa")||m.push("fa");const b=[".".concat(Y1,":not([").concat(Sn,"])")].concat(m.map(x=>".".concat(x,":not([").concat(Sn,"])"))).join(", ");if(b.length===0)return Promise.resolve();let g=[];try{g=pl(l.querySelectorAll(b))}catch{}if(g.length>0)o("pending"),f("complete");else return Promise.resolve();const y=Nc.begin("onTree"),p=g.reduce((x,M)=>{try{const j=up(M);j&&x.push(j)}catch(j){G1||j.name==="MissingIcon"&&console.error(j)}return x},[]);return new Promise((x,M)=>{Promise.all(p).then(j=>{sp(j,()=>{o("active"),o("complete"),f("pending"),typeof s=="function"&&s(),y(),x()})}).catch(j=>{y(),M(j)})})}function Mv(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;up(l).then(u=>{u&&sp([u],s)})}function zv(l){return function(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(s||{}).icon?s:Fu(s||{});let{mask:f}=u;return f&&(f=(f||{}).icon?f:Fu(f||{})),l(o,H(H({},u),{},{mask:f}))}}const Dv=function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Yt,symbol:o=!1,mask:f=null,maskId:m=null,title:b=null,titleId:g=null,classes:y=[],attributes:p={},styles:x={}}=s;if(!l)return;const{prefix:M,iconName:j,icon:O}=l;return fs(H({type:"icon"},l),()=>(Nn("beforeDOMElementCreation",{iconDefinition:l,params:s}),Z.autoA11y&&(b?p["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(g||Si()):(p["aria-hidden"]="true",p.focusable="false")),Sc({icons:{main:Ju(O),mask:f?Ju(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:j,transform:H(H({},Yt),u),symbol:o,title:b,maskId:m,titleId:g,extra:{attributes:p,styles:x,classes:y}})))};var Lv={mixout(){return{icon:zv(Dv)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=Qh,l.nodeCallback=Mv,l}}},provides(l){l.i2svg=function(s){const{node:u=Se,callback:o=()=>{}}=s;return Qh(u,o)},l.generateSvgReplacementMutation=function(s,u){const{iconName:o,title:f,titleId:m,prefix:b,transform:g,symbol:y,mask:p,maskId:x,extra:M}=u;return new Promise((j,O)=>{Promise.all([ec(o,b),p.iconName?ec(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[Y,B]=C;j([s,Sc({icons:{main:Y,mask:B},prefix:b,iconName:o,transform:g,symbol:y,maskId:x,title:f,titleId:m,extra:M,watchable:!0})])}).catch(O)})},l.generateAbstractIcon=function(s){let{children:u,attributes:o,main:f,transform:m,styles:b}=s;const g=os(b);g.length>0&&(o.style=g);let y;return wc(m)&&(y=Ja("generateAbstractTransformGrouping",{main:f,transform:m,containerWidth:f.width,iconWidth:f.width})),u.push(y||f.icon),{children:u,attributes:o}}}},Rv={mixout(){return{layer(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=s;return fs({type:"layer"},()=>{Nn("beforeDOMElementCreation",{assembler:l,params:s});let o=[];return l(f=>{Array.isArray(f)?f.map(m=>{o=o.concat(m.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers"),...u].join(" ")},children:o}]})}}}},Uv={mixout(){return{counter(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:o=[],attributes:f={},styles:m={}}=s;return fs({type:"counter",content:l},()=>(Nn("beforeDOMElementCreation",{content:l,params:s}),pv({content:l.toString(),title:u,extra:{attributes:f,styles:m,classes:["".concat(Z.cssPrefix,"-layers-counter"),...o]}})))}}}},Hv={mixout(){return{text(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Yt,title:o=null,classes:f=[],attributes:m={},styles:b={}}=s;return fs({type:"text",content:l},()=>(Nn("beforeDOMElementCreation",{content:l,params:s}),Xh({content:l,transform:H(H({},Yt),u),title:o,extra:{attributes:m,styles:b,classes:["".concat(Z.cssPrefix,"-layers-text"),...f]}})))}}},provides(l){l.generateLayersText=function(s,u){const{title:o,transform:f,extra:m}=u;let b=null,g=null;if(D1){const y=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();b=p.width/y,g=p.height/y}return Z.autoA11y&&!o&&(m.attributes["aria-hidden"]="true"),Promise.resolve([s,Xh({content:s.innerHTML,width:b,height:g,transform:f,title:o,extra:m,watchable:!0})])}}};const Bv=new RegExp('"',"ug"),Zh=[1105920,1112319],Kh=H(H(H(H({},{FontAwesome:{normal:"fas",400:"fas"}}),ob),Nb),bb),nc=Object.keys(Kh).reduce((l,s)=>(l[s.toLowerCase()]=Kh[s],l),{}),qv=Object.keys(nc).reduce((l,s)=>{const u=nc[s];return l[s]=u[900]||[...Object.entries(u)][0][1],l},{});function Gv(l){const s=l.replace(Bv,""),u=Ib(s,0),o=u>=Zh[0]&&u<=Zh[1],f=s.length===2?s[0]===s[1]:!1;return{value:Zu(f?s[0]:s),isSecondary:o||f}}function Xv(l,s){const u=l.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(s),f=isNaN(o)?"normal":o;return(nc[u]||{})[f]||qv[u]}function Ph(l,s){const u="".concat(jb).concat(s.replace(":","-"));return new Promise((o,f)=>{if(l.getAttribute(u)!==null)return o();const b=pl(l.children).filter(j=>j.getAttribute($u)===s)[0],g=Pa.getComputedStyle(l,s),y=g.getPropertyValue("font-family"),p=y.match(kb),x=g.getPropertyValue("font-weight"),M=g.getPropertyValue("content");if(b&&!p)return l.removeChild(b),o();if(p&&M!=="none"&&M!==""){const j=g.getPropertyValue("content");let O=Xv(y,x);const{value:C,isSecondary:Y}=Gv(j),B=p[0].startsWith("FontAwesome");let L=Ac(O,C),G=L;if(B){const q=Jb(C);q.iconName&&q.prefix&&(L=q.iconName,O=q.prefix)}if(L&&!Y&&(!b||b.getAttribute(yc)!==O||b.getAttribute(bc)!==G)){l.setAttribute(u,G),b&&l.removeChild(b);const q=Ov(),{extra:le}=q;le.attributes[$u]=s,ec(L,O).then(Q=>{const je=Sc(H(H({},q),{},{icons:{main:Q,mask:np()},prefix:O,iconName:G,extra:le,watchable:!0})),De=Se.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?l.insertBefore(De,l.firstChild):l.appendChild(De),De.outerHTML=je.map(Ye=>Ci(Ye)).join(`
`),l.removeAttribute(u),o()}).catch(f)}else o()}else o()})}function Yv(l){return Promise.all([Ph(l,"::before"),Ph(l,"::after")])}function Vv(l){return l.parentNode!==document.head&&!~Tb.indexOf(l.tagName.toUpperCase())&&!l.getAttribute($u)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function Fh(l){if(wa)return new Promise((s,u)=>{const o=pl(l.querySelectorAll("*")).filter(Vv).map(Yv),f=Nc.begin("searchPseudoElements");op(),Promise.all(o).then(()=>{f(),ac(),s()}).catch(()=>{f(),ac(),u()})})}var $v={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=Fh,l}}},provides(l){l.pseudoElements2svg=function(s){const{node:u=Se}=s;Z.searchPseudoElements&&Fh(u)}}};let Jh=!1;var Wv={mixout(){return{dom:{unwatch(){op(),Jh=!0}}}},hooks(){return{bootstrap(){Wh(Pu("mutationObserverCallbacks",{}))},noAuto(){Nv()},watch(l){const{observeMutationsRoot:s}=l;Jh?ac():Wh(Pu("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}};const e1=l=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((u,o)=>{const f=o.toLowerCase().split("-"),m=f[0];let b=f.slice(1).join("-");if(m&&b==="h")return u.flipX=!0,u;if(m&&b==="v")return u.flipY=!0,u;if(b=parseFloat(b),isNaN(b))return u;switch(m){case"grow":u.size=u.size+b;break;case"shrink":u.size=u.size-b;break;case"left":u.x=u.x-b;break;case"right":u.x=u.x+b;break;case"up":u.y=u.y-b;break;case"down":u.y=u.y+b;break;case"rotate":u.rotate=u.rotate+b;break}return u},s)};var Iv={mixout(){return{parse:{transform:l=>e1(l)}}},hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-transform");return u&&(l.transform=e1(u)),l}}},provides(l){l.generateAbstractTransformGrouping=function(s){let{main:u,transform:o,containerWidth:f,iconWidth:m}=s;const b={transform:"translate(".concat(f/2," 256)")},g="translate(".concat(o.x*32,", ").concat(o.y*32,") "),y="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),p="rotate(".concat(o.rotate," 0 0)"),x={transform:"".concat(g," ").concat(y," ").concat(p)},M={transform:"translate(".concat(m/2*-1," -256)")},j={outer:b,inner:x,path:M};return{tag:"g",attributes:H({},j.outer),children:[{tag:"g",attributes:H({},j.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:H(H({},u.icon.attributes),j.path)}]}]}}}};const Du={x:0,y:0,width:"100%",height:"100%"};function t1(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||s)&&(l.attributes.fill="black"),l}function Qv(l){return l.tag==="g"?l.children:[l]}var Zv={hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-mask"),o=u?cs(u.split(" ").map(f=>f.trim())):np();return o.prefix||(o.prefix=Fa()),l.mask=o,l.maskId=s.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(s){let{children:u,attributes:o,main:f,mask:m,maskId:b,transform:g}=s;const{width:y,icon:p}=f,{width:x,icon:M}=m,j=Gb({transform:g,containerWidth:x,iconWidth:y}),O={tag:"rect",attributes:H(H({},Du),{},{fill:"white"})},C=p.children?{children:p.children.map(t1)}:{},Y={tag:"g",attributes:H({},j.inner),children:[t1(H({tag:p.tag,attributes:H(H({},p.attributes),j.path)},C))]},B={tag:"g",attributes:H({},j.outer),children:[Y]},L="mask-".concat(b||Si()),G="clip-".concat(b||Si()),q={tag:"mask",attributes:H(H({},Du),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,B]},le={tag:"defs",children:[{tag:"clipPath",attributes:{id:G},children:Qv(M)},q]};return u.push(le,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(G,")"),mask:"url(#".concat(L,")")},Du)}),{children:u,attributes:o}}}},Kv={provides(l){let s=!1;Pa.matchMedia&&(s=Pa.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const u=[],o={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:H(H({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const m=H(H({},f),{},{attributeName:"opacity"}),b={tag:"circle",attributes:H(H({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||b.children.push({tag:"animate",attributes:H(H({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},m),{},{values:"1;0;1;1;0;1;"})}),u.push(b),u.push({tag:"path",attributes:H(H({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:H(H({},m),{},{values:"1;0;0;0;0;1;"})}]}),s||u.push({tag:"path",attributes:H(H({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},m),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},Pv={hooks(){return{parseNodeAttributes(l,s){const u=s.getAttribute("data-fa-symbol"),o=u===null?!1:u===""?!0:u;return l.symbol=o,l}}}},Fv=[Vb,Lv,Rv,Uv,Hv,$v,Wv,Iv,Zv,Kv,Pv];ov(Fv,{mixoutsTo:gt});gt.noAuto;gt.config;gt.library;gt.dom;const lc=gt.parse;gt.findIconDefinition;gt.toHtml;const Jv=gt.icon;gt.layer;gt.text;gt.counter;var Lu={exports:{}},Ru,a1;function ex(){if(a1)return Ru;a1=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ru=l,Ru}var Uu,n1;function tx(){if(n1)return Uu;n1=1;var l=ex();function s(){}function u(){}return u.resetWarningCache=s,Uu=function(){function o(b,g,y,p,x,M){if(M!==l){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}o.isRequired=o;function f(){return o}var m={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:u,resetWarningCache:s};return m.PropTypes=m,m},Uu}var l1;function ax(){return l1||(l1=1,Lu.exports=tx()()),Lu.exports}var nx=ax();const ce=c1(nx);function i1(l,s){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);s&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,o)}return u}function Xt(l){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?i1(Object(u),!0).forEach(function(o){cl(l,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):i1(Object(u)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(u,o))})}return l}function ls(l){"@babel/helpers - typeof";return ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ls(l)}function cl(l,s,u){return s in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,l}function lx(l,s){if(l==null)return{};var u={},o=Object.keys(l),f,m;for(m=0;m<o.length;m++)f=o[m],!(s.indexOf(f)>=0)&&(u[f]=l[f]);return u}function ix(l,s){if(l==null)return{};var u=lx(l,s),o,f;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);for(f=0;f<m.length;f++)o=m[f],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(l,o)&&(u[o]=l[o])}return u}function ic(l){return rx(l)||sx(l)||ox(l)||ux()}function rx(l){if(Array.isArray(l))return rc(l)}function sx(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function ox(l,s){if(l){if(typeof l=="string")return rc(l,s);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return rc(l,s)}}function rc(l,s){(s==null||s>l.length)&&(s=l.length);for(var u=0,o=new Array(s);u<s;u++)o[u]=l[u];return o}function ux(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cx(l){var s,u=l.beat,o=l.fade,f=l.beatFade,m=l.bounce,b=l.shake,g=l.flash,y=l.spin,p=l.spinPulse,x=l.spinReverse,M=l.pulse,j=l.fixedWidth,O=l.inverse,C=l.border,Y=l.listItem,B=l.flip,L=l.size,G=l.rotation,q=l.pull,le=(s={"fa-beat":u,"fa-fade":o,"fa-beat-fade":f,"fa-bounce":m,"fa-shake":b,"fa-flash":g,"fa-spin":y,"fa-spin-reverse":x,"fa-spin-pulse":p,"fa-pulse":M,"fa-fw":j,"fa-inverse":O,"fa-border":C,"fa-li":Y,"fa-flip":B===!0,"fa-flip-horizontal":B==="horizontal"||B==="both","fa-flip-vertical":B==="vertical"||B==="both"},cl(s,"fa-".concat(L),typeof L<"u"&&L!==null),cl(s,"fa-rotate-".concat(G),typeof G<"u"&&G!==null&&G!==0),cl(s,"fa-pull-".concat(q),typeof q<"u"&&q!==null),cl(s,"fa-swap-opacity",l.swapOpacity),s);return Object.keys(le).map(function(Q){return le[Q]?Q:null}).filter(function(Q){return Q})}function fx(l){return l=l-0,l===l}function cp(l){return fx(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(s,u){return u?u.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var dx=["style"];function mx(l){return l.charAt(0).toUpperCase()+l.slice(1)}function hx(l){return l.split(";").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,u){var o=u.indexOf(":"),f=cp(u.slice(0,o)),m=u.slice(o+1).trim();return f.startsWith("webkit")?s[mx(f)]=m:s[f]=m,s},{})}function fp(l,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof s=="string")return s;var o=(s.children||[]).map(function(y){return fp(l,y)}),f=Object.keys(s.attributes||{}).reduce(function(y,p){var x=s.attributes[p];switch(p){case"class":y.attrs.className=x,delete s.attributes.class;break;case"style":y.attrs.style=hx(x);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?y.attrs[p.toLowerCase()]=x:y.attrs[cp(p)]=x}return y},{attrs:{}}),m=u.style,b=m===void 0?{}:m,g=ix(u,dx);return f.attrs.style=Xt(Xt({},f.attrs.style),b),l.apply(void 0,[s.tag,Xt(Xt({},f.attrs),g)].concat(ic(o)))}var dp=!1;try{dp=!0}catch{}function px(){if(!dp&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function r1(l){if(l&&ls(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(lc.icon)return lc.icon(l);if(l===null)return null;if(l&&ls(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function Hu(l,s){return Array.isArray(s)&&s.length>0||!Array.isArray(s)&&s?cl({},l,s):{}}var s1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ge=pa.forwardRef(function(l,s){var u=Xt(Xt({},s1),l),o=u.icon,f=u.mask,m=u.symbol,b=u.className,g=u.title,y=u.titleId,p=u.maskId,x=r1(o),M=Hu("classes",[].concat(ic(cx(u)),ic((b||"").split(" ")))),j=Hu("transform",typeof u.transform=="string"?lc.transform(u.transform):u.transform),O=Hu("mask",r1(f)),C=Jv(x,Xt(Xt(Xt(Xt({},M),j),O),{},{symbol:m,title:g,titleId:y,maskId:p}));if(!C)return px("Could not find icon",x),null;var Y=C.abstract,B={ref:s};return Object.keys(u).forEach(function(L){s1.hasOwnProperty(L)||(B[L]=u[L])}),gx(Y[0],B)});ge.displayName="FontAwesomeIcon";ge.propTypes={beat:ce.bool,border:ce.bool,beatFade:ce.bool,bounce:ce.bool,className:ce.string,fade:ce.bool,flash:ce.bool,mask:ce.oneOfType([ce.object,ce.array,ce.string]),maskId:ce.string,fixedWidth:ce.bool,inverse:ce.bool,flip:ce.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ce.oneOfType([ce.object,ce.array,ce.string]),listItem:ce.bool,pull:ce.oneOf(["right","left"]),pulse:ce.bool,rotation:ce.oneOf([0,90,180,270]),shake:ce.bool,size:ce.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ce.bool,spinPulse:ce.bool,spinReverse:ce.bool,symbol:ce.oneOfType([ce.bool,ce.string]),title:ce.string,titleId:ce.string,transform:ce.oneOfType([ce.string,ce.object]),swapOpacity:ce.bool};var gx=fp.bind(null,pa.createElement);const yx="/assets/PNLPbook-B4el14X1.jpg",bx="/assets/pnlpchinese-Ox1X-Lkj.jpg",vx="/assets/pnlppolish-KBj1IJSv.jpg",xx="/assets/pnlpjapanese-D4fJSOFy.jpg",yi=[{id:1,src:yx,alt:"PNLP Book Cover"},{id:2,src:xx,alt:"Japanese simplified translation"},{id:3,src:bx,alt:"Chinese Complex Translation"},{id:4,src:vx,alt:"Polish simplified translation"}];function wx(){const[l,s]=T.useState(0);T.useEffect(()=>{let g;return g=setInterval(()=>{s(y=>y===yi.length-1?0:y+1)},5e3),()=>clearInterval(g)},[]);const u=()=>{s(g=>g===yi.length-1?0:g+1)},o=()=>{s(g=>g===0?yi.length-1:g-1)},f=g=>{s(g)},m=({href:g,children:y})=>c.jsx("a",{href:g,className:"font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline decoration-2",target:"_blank",rel:"noopener noreferrer",children:y}),b=[{name:"Google",logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",url:"https://www.google.com/",brandColor:"#4285F4"},{name:"Microsoft",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png?20210729021049",url:"https://www.microsoft.com/",brandColor:"#00A4EF"},{name:"Amazon",logo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",url:"https://www.amazon.com/",brandColor:"#FF9900"},{name:"Meta",logo:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",url:"https://about.meta.com/",brandColor:"#1877F2"},{name:"Walmart",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png",url:"https://www.walmart.com/",brandColor:"#0071CE"},{name:"Arm",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ARM_Logo.svg/920px-ARM_Logo.svg.png?20110319160354",url:"https://www.arm.com/",brandColor:"#0091BD"},{name:"KPMG",logo:"https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",url:"https://home.kpmg/",brandColor:"#00338D"},{name:"Medium",logo:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",url:"https://medium.com/",brandColor:"#00AB6C"},{name:"Spotify",logo:"https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",url:"https://www.spotify.com/",brandColor:"#1DB954"},{name:"Intel",logo:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",url:"https://www.intel.com/",brandColor:"#0071C5"},{name:"Oracle",logo:"https://cdn.worldvectorlogo.com/logos/oracle-logo-1.svg",url:"https://www.oracle.com/",brandColor:"#F80000"},{name:"American Express",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",url:"https://www.americanexpress.com/",brandColor:"#006FCF"},{name:"Jio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/768px-Reliance_Jio_Logo.svg.png",brandColor:"#003F7F"},{name:"Google AI",logo:"https://wp.logos-download.com/wp-content/uploads/2024/09/Google_AI_Logo.png?dl",url:"https://ai.google/",brandColor:"#4285F4"},{name:"Microsoft Research",logo:"https://www.auai.org/uai2012/MS.png",url:"https://www.microsoft.com/en-us/research/about-microsoft-research/",brandColor:"#1a0dab"},{name:"TRUST YOU",logo:"https://www.hospitalitytechhub.com/wp-content/uploads/2021/04/TrustYou.png",url:"https://www.hospitalitytechhub.com/partners/trustyou/",brandColor:"1a0dab"},{name:"MetaMetrics",logo:"https://metametricsinc.com/wp-content/uploads/2019/01/MetaMetrics_Logo_Horizontal-1-768x227.png",url:"https://metametricsinc.com/",brandColor:"#1a0dab"},{name:"Wingify",logo:"https://wingify.com/wp-content/themes/wingify/images/media-kit/color/wingify-logo-color.svg",url:"https://wingify.com/",brandColor:"#1a0dab"},{name:"Meta AI",logo:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",brandColor:"#1a0dab"},{name:"Paloalto",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/PaloAltoNetworks_2020_Logo.svg/768px-PaloAltoNetworks_2020_Logo.svg.png?20210503173224",url:"https://www.paloaltonetworks.com/company/brand",brandColor:"#1a0dab"}];return c.jsx("div",{className:"min-h-screen bg-gradient-to-br to-blue-50 from-slate-50",children:c.jsxs("div",{className:"max-w-5xl px-4 py-8 mx-auto sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"mb-12 text-center",children:[c.jsx("h1",{className:"mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl",children:"Practical Natural Language Processing"}),c.jsx("p",{className:"max-w-3xl mx-auto text-xl italic font-light text-gray-600",children:"A Comprehensive Guide to Building Real-World NLP Systems"})]}),c.jsxs("div",{className:"overflow-hidden bg-white shadow-xl rounded-2xl",children:[c.jsxs("div",{className:"lg:flex",children:[c.jsxs("div",{className:"p-8 bg-gradient-to-br from-gray-50 to-gray-100 lg:w-2/5 xl:w-1/3",children:[c.jsx("div",{className:"relative aspect-[3/4] max-w-sm mx-auto",children:c.jsxs("div",{className:"absolute inset-0 overflow-hidden bg-white rounded-lg shadow-lg",children:[yi.map((g,y)=>c.jsx("div",{className:`absolute inset-0 transition-all duration-500 ease-in-out transform ${y===l?"opacity-100 scale-100 z-10":"opacity-0 scale-95 z-0"}`,children:c.jsx("img",{src:g.src,alt:g.alt,className:"object-cover w-full h-full"})},g.id)),c.jsx("button",{onClick:o,className:"absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md left-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110","aria-label":"Previous slide",children:c.jsx(ge,{icon:Zy,className:"text-sm"})}),c.jsx("button",{onClick:u,className:"absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md right-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110","aria-label":"Next slide",children:c.jsx(ge,{icon:Ky,className:"text-sm"})}),c.jsx("div",{className:"absolute left-0 right-0 z-20 flex justify-center space-x-2 bottom-4",children:yi.map((g,y)=>c.jsx("button",{onClick:()=>f(y),className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${y===l?"bg-blue-600 scale-125":"bg-blue-300 hover:bg-blue-400"}`,"aria-label":`Go to slide ${y+1}`},y))})]})}),c.jsx("div",{className:"flex flex-col items-center mt-6 space-y-2",children:c.jsxs("div",{className:"flex flex-wrap justify-center gap-3",children:[c.jsx("a",{href:"https://www.linkedin.com/company/practical-nlp/",className:"text-[#0077B5] hover:text-[#005582] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(hc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://x.com/practicalnlproc",className:"text-black hover:text-gray-800 transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:c.jsx(C1,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://www.practicalnlp.ai/",className:"text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"Gradient Advisors",children:c.jsx(pc,{className:"w-6 h-6"})}),c.jsx("a",{href:"https://github.com/practical-nlp",className:"text-[#333] hover:text-black transition-colors duration-300",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:c.jsx(mc,{className:"w-6 h-6"})})]})})]}),c.jsx("div",{className:"p-8 lg:w-3/5 xl:w-2/3 lg:p-12",children:c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{children:c.jsx("p",{className:"mb-4 text-lg leading-relaxed text-gray-700",children:"The book gives a unique perspective on how to do AI when you are part of startups and product teams as opposed to academia or research labs. It has been translated into multiple languages, including English, Polish, Chinese, and Japanese, received 285+ citations and 1350+ stars on Github. It has also been used by 50+ universities globally for their AI curriculum."})}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("p",{className:"text-gray-700",children:[c.jsx("span",{className:"font-semibold text-gray-900",children:"Endorsed by the topmost AI leaders globally:"})," ",c.jsx(m,{href:"https://www.acmilab.org/people/zachary-lipton/",children:"Zachary Lipton"})," (Professor, CS, Carnegie Mellon University; Director, Amazon Science),"," ",c.jsx(m,{href:"https://ruder.io/",children:"Sebastian Ruder"})," (Lead, Multilingual Team, Cohere),"," ",c.jsx(m,{href:"http://marc.najork.org/",children:"Marc Najork"})," (Director, DeepMind),"," ",c.jsx(m,{href:"https://www.microsoft.com/en-us/research/people/monojitc/",children:"Monojit Choudhury"})," (Professor, MBZUAI; Ex Principal Scientist, Microsoft Research),"," ",c.jsx(m,{href:"https://www.linkedin.com/in/vinayakh/",children:"Vinayak Hegde"})," (CTO, Microsoft for Startups),"," ",c.jsx(m,{href:"https://mengtingwan.github.io/",children:"Mengting Wan"})," (Principal Scientist, Airbnb),"," ",c.jsx(m,{href:"https://www.linkedin.com/in/siddharth-sharma-31140210/",children:"Siddharth Sharma"})," (Lead Applied Scientist, Amazon),"," ",c.jsx(m,{href:"https://www.linkedin.com/in/e10is/",children:"Edouard Harris"})," (Co-founder @Gladstone AI, YC’18) ."]}),c.jsxs("p",{className:"text-gray-600",children:[c.jsx("span",{className:"font-medium",children:"Forward by"})," ",c.jsx(m,{href:"https://cseweb.ucsd.edu/~jmcauley/",children:"Julian McAuley"})]}),c.jsx("p",{className:"font-medium text-gray-600",children:"Published by O'Reilly Media, US in June, 2020"})]}),c.jsxs("div",{className:"flex flex-wrap justify-center gap-4 pt-4",children:[" ",c.jsxs("a",{title:"O'Reilly",target:"_blank",href:"https://www.oreilly.com/library/view/practical-natural-language/9781492054047/",className:"group inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ge,{icon:Fy,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"O'Reilly"]}),c.jsxs("a",{title:"Amazon",target:"_blank",href:"https://www.amazon.in/Practical-Natural-Language-Processing-Gupta/dp/1492054054",className:"group inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ge,{icon:Py,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"Amazon"]})]})]})})]}),c.jsxs("div",{className:"p-8 border-t border-gray-100 bg-gradient-to-br from-gray-50 to-slate-100 lg:p-12",children:[c.jsx("h3",{className:"mb-8 text-2xl font-bold text-center text-gray-900",children:"Trusted by Professionals at Leading Companies"}),c.jsx("div",{className:"grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4",children:b.map((g,y)=>c.jsx("div",{className:"relative group",children:c.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"relative block overflow-hidden",children:c.jsx("div",{className:"flex items-center justify-center h-24 px-4 py-3 transition-all duration-300 bg-transparent rounded-xl group-hover:-translate-y-1",children:c.jsx("div",{className:"flex items-center justify-center",style:{width:"140px",height:"50px",position:"relative"},children:c.jsx("img",{src:g.logo,title:g.name,alt:`${g.name} logo`,style:{transition:"all 0.3s ease",backgroundColor:"transparent",maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",objectFit:"contain"},className:"transition-all duration-300 group-hover:scale-105"})})})})},y))}),c.jsx("div",{className:"mt-8 text-center",children:c.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Join thousands of professionals who trust our expertise"})})]}),c.jsx("div",{className:"border-t-2",children:c.jsxs("div",{className:"w-full p-6 border-l-4 border-indigo-600 rounded-lg shadow-sm bg-gradient-to-br from-gray-100 to-indigo-100",children:[c.jsx("h3",{className:"mb-3 text-xl font-semibold text-gray-900",children:"📘 Coming Soon"}),c.jsxs("p",{className:"mb-2 text-base text-gray-800",children:["I’m currently writing my second book titled"," ",c.jsx("strong",{className:"text-indigo-700",children:'"AI First by Design"'}),"."]}),c.jsx("p",{className:"mb-4 text-sm text-gray-700",children:"A practical guide to accelerating AI maturity and leading high-performance AI-driven initiatives and organizations."}),c.jsxs("a",{href:"https://github.com/Gradient-Advisors/AI-First-by-Design-Book",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",children:[c.jsx(ge,{icon:Qy,className:"mr-2 transition-transform duration-200 group-hover:rotate-12"}),"View on GitHub"]}),c.jsx("p",{className:"mt-2 text-xs italic text-gray-500",children:"This book is open-source and freely available to everyone."})]})})]})]})})}function bi({title:l,date:s,excerpt:u,onClick:o}){return c.jsx("div",{className:"blog-post-card bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-4 sm:mb-6",onClick:o,children:c.jsxs("article",{className:"archive__item",itemScope:!0,itemType:"http://schema.org/CreativeWork",children:[c.jsxs("h2",{className:"archive__item-title text-lg sm:text-xl font-semibold text-gray-800 mb-2",itemProp:"headline",children:[c.jsx("a",{href:"#",rel:"",className:"no-underline hover:underline",children:l})," "]}),c.jsxs("p",{className:"page__date text-gray-500 text-xs sm:text-sm mb-2",children:[c.jsxs("strong",{children:[c.jsx("i",{className:"fa fa-fw fa-calendar mr-1","aria-hidden":"true"}),"Published:"]}),c.jsxs("time",{dateTime:"2199-01-01T00:00:00-08:00",children:[" ",s]})," "]}),c.jsxs("div",{className:"archive__item-excerpt text-sm sm:text-base text-gray-700 leading-relaxed overflow-hidden",itemProp:"description",children:[" ",u," "]})]})})}function _x({isOpen:l,onClose:s,blog:u,onNext:o,onPrevious:f,hasNext:m,hasPrevious:b}){return T.useEffect(()=>{const g=y=>{y.key==="Escape"&&s()};return l&&(document.addEventListener("keydown",g),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",g),document.body.style.overflow="unset"}},[l,s]),!l||!u?null:c.jsx("div",{className:"fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 backdrop-blur-sm transition-all duration-300 ease-out",onClick:s,children:c.jsxs("div",{className:`bg-white w-full h-full flex flex-col shadow-2xl transform transition-all duration-500 ease-out overflow-hidden ${l?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`,onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50 backdrop-blur-lg shadow-sm",children:[c.jsx("h2",{className:"text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-4 leading-tight",children:u.title}),c.jsx("button",{onClick:s,className:"text-gray-400 text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full transition-colors duration-200 leading-none flex-shrink-0","aria-label":"Close modal",style:{lineHeight:"1"},children:"×"})]}),c.jsx("div",{className:"flex-1 overflow-y-auto bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 scroll-smooth",children:c.jsxs("div",{className:"w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 transition-all duration-300",children:[c.jsx("div",{className:"mb-4 sm:mb-6 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 w-full",children:c.jsxs("p",{className:"text-gray-600 text-xs sm:text-sm flex items-center flex-wrap",children:[c.jsx("span",{className:"inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"}),c.jsxs("strong",{className:"mr-1",children:[c.jsx("i",{className:"fa fa-fw fa-calendar mr-1","aria-hidden":"true"}),"Published:"]}),c.jsx("time",{className:"font-medium",children:u.date})]})}),c.jsx("div",{className:"prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full prose-ol:list-decimal prose-ol:ml-6 prose-ol:pl-2 prose-li:mb-2 prose-li:text-gray-700",children:c.jsx("div",{dangerouslySetInnerHTML:{__html:u.content}})})]})}),c.jsxs("div",{className:"flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200",children:[c.jsx("button",{onClick:o,disabled:!m,className:`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${m?"bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,"aria-label":"Next blog",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),c.jsx("span",{className:"text-xs text-gray-500 font-medium",children:u.date}),c.jsx("button",{onClick:f,disabled:!b,className:`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${b?"bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,"aria-label":"Previous blog",children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})})}function Ax(){const[l,s]=T.useState(null),[u,o]=T.useState(!1),f=[{id:1,title:"Innovation in AI Teams",date:"Oct 22, 2021",excerpt:"Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary...",content:`
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
      `}],m=[{id:1,title:"Computing Gradients that go into training Neural Nets",date:"Aug 22, 2016",excerpt:"Training neural nets is all about computing gradients. In case you are new to this idea, refer to this awesome post by Andrej Karpathy. Briefly, deep down every ML problem is an optimization problem....",content:`
        <h2><strong>Introduction</strong></h2>
          <p>Training neural nets is all about <a href="http://deeplearning.stanford.edu/wiki/index.php/Deriving_gradients_using_the_backpropagation_idea" target="_blank" style="color: blue; text-decoration: underline;">computing gradients</a>. In case you are new to this idea, refer to this awesome <a href="http://karpathy.github.io/neuralnets/" target="_blank" style="color: blue; text-decoration: underline;">post</a> by Andrej Karpathy.</p>
          <p>Briefly, deep down every ML problem is an optimization problem. We want to "learn" (find) the weights which will result in least average loss. The way we do it is - start with arbitrary weights and keep adjusting them in small quantities until we get them right i.e. arrive at a set of values for which loss function has least value. Gradients tell us by how much should we adjust each of the weights. Not clear? Check this <a href="https://www.youtube.com/watch?v=yFPLyDwVifc" target="_blank" style="color: blue; text-decoration: underline;">video</a> by Andrew NG and this <a href="http://www.offconvex.org/2016/12/20/backprop/" target="_blank" style="color: blue; text-decoration: underline;">blog</a> by Sanjeev Arora.</p>
          <br>

          <p>In this post we will focus on the maths that goes into computing these gradients - we will systematically derive gradients. The complexity of calculations depends on 3 things:</p><br>
          <ul>
            <li>1. Depth of the network</li>
            <li>2. Number of training examples (1 or more)</li>
            <li>3. Number of components in input (1=scalar, &gt;1=vector)</li><br>
          </ul>
          <p> Through out this post we assume:</p><br>
          <ul>
            <li>1. No bias term.</li>
            <li>2. . is matrix multiplication, * is element wise product, X is scalar multiplication.</li>
            <li>3. All activations are <a href="https://www.quora.com/What-is-the-sigmoid-function-and-what-is-its-use-in-machine-learnings-neural-networks" target="_blank" style="color: blue; text-decoration: underline;">sigmoid a.k.a logistic</a>. It is defined as ( f(u) = \frac{1}{1+e^{-u}}). If you plot it, it comes as:</li>
          </ul>

          <img src="assets/gradeints/logistic.png" height="200" width="270" alt="Sigmoid function"/>
          <div class="thecap">Sigmoid function</div>
          <p>It easy to see it is smooth and differentiable and bound between 0 and 1 [No? not straight forward - need to fix this].<p><br>

          <p><strong>Derivative</strong><p>
          <p>The derivative of logistic function \\(\\sigma\\) is simply:</p>

          <p>(A)
d
d
x
σ
(
x
)
=
σ
(
x
)
(
1
−
σ
(
x
)
)</p>


          <p>From where this comes ? read on:.</p>
          <p>$$ \begin{align}</p>

<p>\frac{d}{dx}sigma(x) &= \frac{d}{dx} \big[ \frac{1}{1+e^{-x}}\big] label{refB} 	ag{B}</p>

<p>&= \frac{d}{dx} (1+e^{-x})^{-1} </p>

<p>&= -(1+e^{-x})^{-2}(-e^{-x}) </p>

<p>&= \frac{e^{-x}}{(1+e^{-x})^2} </p>

<p>&= \frac{1}{(1+e^{-x})} . \frac{e^{-x}}{(1+e^{-x})} </p>

<p>&= \frac{1}{(1+e^{-x})} . \frac{1 + e^{-x} -1}{(1+e^{-x})} </p>

<p>&= \frac{1}{(1+e^{-x})} . \big( 1 - \frac{e^{-x}}{(1+e^{-x})} \big) </p>

<p>&= sigma(x)(1-sigma(x)) label{refC} 	ag{C}</p>

<p>end{align} $$</p>

<p>likewise,</p>

<p>(D)
d
d
x
σ
(
a
x
)
=
a
(
σ
(
a
x
)
)
(
1
−
σ
(
a
x
)
)<p/>

   <p>We will be using the above result a lot, so make sure you understand it. If it is not clear, have a look at this<a href="http://kawahara.ca/how-to-compute-the-derivative-of-a-sigmoid-function-fully-worked-example/" target="_blank" style="color: blue; text-decoration: underline;"> post</a>.</p>


          <p>To compute the gradients, we will start with the simplest case and increase the complexity gradually. To keep things simple we will complete it in 7 parts</p>

         <ol start="1">
            <li><a href="https://github.com/anujgupta82/anujgupta82.github.io_old/blob/master/_posts/2016-08-26-gradients-1.markdown" style="color: blue; text-decoration: underline;"> layer network, 1 training example (scalar)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (vector)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" style="color: blue; text-decoration: underline;">1 layer network, batch training (>1 training examples where each is a vector)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" style="color: blue; text-decoration: underline;">2 layer network with 1 node hidden layer, 1 training example (vector)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network with 2 node hidden layer, 1 training example (vector)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network, batch training (>1 training examples where each is a vector)</a></li>
            <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">Generalization and take home</a></li>
          </ol>
          <br>


          <a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Next</a>
      `},{id:2,title:"Gradients - Part 1",date:"Aug 26, 2016",excerpt:"Part 1 of computing gradients for training Neural Nets",content:`
      <h2><strong> 1 layer network, 1 training example (scalar)</strong></h2>
      <br>
      <p>Consider a simplest version of a neural net - 1 layer, 1 input node (scalar)</p>
      <img src="assets/gradients/NN_1_1.jpeg" height="200" width="270" alt="Neural Netwrok diagram"/>
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
      `}],b=O=>{s(O),o(!0)},g=()=>{s(null),o(!1)},y=[...f].sort((O,C)=>new Date(C.date)-new Date(O.date)),p=()=>{const O=y.findIndex(C=>C.id===l.id);if(O<y.length-1){const C=y[O+1];s(C)}},x=()=>{const O=y.findIndex(C=>C.id===l.id);if(O>0){const C=y[O-1];s(C)}},M=()=>l?y.findIndex(C=>C.id===l.id)<y.length-1:!1,j=()=>l?y.findIndex(C=>C.id===l.id)>0:!1;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"content container mx-auto py-6 sm:py-8 lg:py-10",children:[c.jsx("h1",{className:"page__title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4",children:"Blog Posts"}),c.jsxs("div",{className:"archive px-4 sm:px-6 md:px-8 lg:px-0",children:[c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2023"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(bi,{title:"Product management for AI products - old wine in new bottle?",date:"Aug 05, 2023",excerpt:"The answer lies in the specialized skill set required for product management in the realm of AI. The traditional principles and experiences in product management for standard software products do not suffice for AI products. Product management in AI development demands a significant upgrade."})}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2022"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(bi,{title:"Alexa AI and Layoffs",date:"Nov 23, 2022",excerpt:"Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."})}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2021"}),f.map(O=>c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(bi,{title:O.title,date:O.date,excerpt:O.excerpt,onClick:()=>b(O)})},O.id)),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2020"}),c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(bi,{title:"Alexa AI and Layoffs",date:"Nov 23, 2020",excerpt:"Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."})})]}),c.jsx("h2",{className:"archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2",children:"2016"}),m.map(O=>c.jsx("div",{className:"list__item mb-4 sm:mb-6",children:c.jsx(bi,{title:O.title,date:O.date,excerpt:O.excerpt,onClick:()=>b(O)})},O.id))]}),c.jsx(_x,{isOpen:u,onClose:g,blog:l,onNext:p,onPrevious:x,hasNext:M(),hasPrevious:j()})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nx=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,u,o)=>o?o.toUpperCase():u.toLowerCase()),o1=l=>{const s=Nx(l);return s.charAt(0).toUpperCase()+s.slice(1)},mp=(...l)=>l.filter((s,u,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===u).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=T.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:f="",children:m,iconNode:b,...g},y)=>T.createElement("svg",{ref:y,...jx,width:s,height:s,stroke:l,strokeWidth:o?Number(u)*24/Number(s):u,className:mp("lucide",f),...g},[...b.map(([p,x])=>T.createElement(p,x)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(l,s)=>{const u=T.forwardRef(({className:o,...f},m)=>T.createElement(Ex,{ref:m,iconNode:s,className:mp(`lucide-${Sx(o1(l))}`,`lucide-${l}`,o),...f}));return u.displayName=o1(l),u};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Bu=It("archive",Tx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ot=It("book",Ox);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ha=It("calendar",Cx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Mx=It("external-link",kx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Qr=It("file-check",zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Oe=It("file-text",Dx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Ka=It("link-2",Lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Ux=It("monitor",Rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],hp=It("search",Hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],qx=It("video",Bx);function Gx(){const[l,s]=T.useState(""),[u,o]=T.useState("All Talks"),f=["All Talks","Workshops","Keynotes","Panels"],b=[{year:"2021",title:"Practical AI: Is it all about building models?",venue:"In conversation with codebasics, Online Recording Website",description:"A discussion on the practical aspects of AI beyond model building, focusing on deployment, maintenance, and business value.",tags:["Practical AI","Industry Applications","AI Implementation"],date:"Jul 2021",type:"Panels",website:"https://www.youtube.com/watch?v=example1",slides:"https://speakerdeck.com/example/practical-ai",recording:"https://www.youtube.com/watch?v=example1"},{year:"2020",title:"Practical Natural Language Processing Book | NLP, ML/AI in Industry| GPT-3 & more",venue:"Deep Neural Notebooks podcast, Online Recording Website",description:"Discussion about the Practical Natural Language Processing book, current state of NLP, and applications in industry.",tags:["NLP","Book Discussion","GPT-3"],date:"Sep 2020",type:"Panels",website:"https://deepneuralnotebooks.com/example",slides:"https://speakerdeck.com/example/nlp-book",recording:"https://www.youtube.com/watch?v=example2"},{year:"2020",title:"Book Intro: Practical Natural Language Processing",venue:"Bay Area NLP meetup, Online Recording Website",description:"Introduction to the concepts and approaches presented in the Practical Natural Language Processing book.",tags:["NLP","Book Introduction","Applied ML"],date:"Aug 2020",type:"Keynotes",website:"https://www.meetup.com/bay-area-nlp/",slides:"https://speakerdeck.com/example/book-intro-nlp",recording:"https://www.youtube.com/watch?v=example3"},{year:"2020",title:"The New Business of AI",venue:"IIM Calcutta, Online Recording Website",description:"A talk focusing on the business implications of AI technologies and how they are reshaping industries.",tags:["Business of AI","AI Strategy","Digital Transformation"],date:"Aug 2020",type:"Keynotes",website:"https://www.iimcal.ac.in/events/example",slides:"https://speakerdeck.com/example/business-of-ai",recording:"https://www.youtube.com/watch?v=example4"},{year:"2018",title:"Sarcasm Detection : Achilles Heel of sentiment analysis",venue:"Open Data Science Conference (ODSC), Bengaluru, India Recording Website",description:"Exploring the challenges of detecting sarcasm in text and its impact on sentiment analysis accuracy.",tags:["Sarcasm Detection","Sentiment Analysis","NLP Challenges"],date:"Sep 2018",type:"Workshops",website:"https://odsc.com/bengaluru/2018",slides:"https://speakerdeck.com/example/sarcasm-detection",recording:"https://www.youtube.com/watch?v=example5"},{year:"2018",title:"Hubs and Spokes of AI",venue:"Anthill Inside, 2018, Bengaluru, India Website",description:"A comprehensive overview of the AI ecosystem and how different technologies connect and interact.",tags:["AI Ecosystem","Technology Integration","AI Architecture"],date:"Jul 2018",type:"Keynotes",website:"https://anthillinside.com/2018",slides:"https://speakerdeck.com/example/hubs-and-spokes",recording:"https://www.youtube.com/watch?v=example6"},{year:"2018",title:"Sarcasm Detection: Achilles Heel of sentiment analysis",venue:"Anthill Inside, Bengaluru, India Slides Recording Website",description:"Detailed exploration of techniques for detecting sarcasm in text and improving sentiment analysis systems.",tags:["Sarcasm Detection","Sentiment Analysis","NLP"],date:"Jul 2018",type:"Workshops",website:"https://anthillinside.com/2018/workshops",slides:"https://speakerdeck.com/example/sarcasm-detection-detailed",recording:"https://www.youtube.com/watch?v=example7"},{year:"2017",title:"Synthetic Gradients",venue:"Anthill Inside, Bengaluru, India Website",description:"An exploration of synthetic gradient techniques for improving neural network training efficiency.",tags:["Synthetic Gradients","Neural Networks","Deep Learning"],date:"Jul 2017",type:"Workshops",website:"https://anthillinside.com/2017",slides:"https://speakerdeck.com/example/synthetic-gradients",recording:"https://www.youtube.com/watch?v=example8"},{year:"2017",title:"CNNs for Text Classification",venue:"Nvidia Developer Conference, 2017, Chennai, India Website",description:"A technical deep dive into using Convolutional Neural Networks for effective text classification tasks.",tags:["CNNs","Text Classification","Deep Learning"],date:"Nov 2017",type:"Workshops",website:"https://developer.nvidia.com/events/2017/chennai",slides:"https://speakerdeck.com/example/cnns-for-text",recording:"https://www.youtube.com/watch?v=example9"},{year:"2017",title:"Recent Advances in NLP",venue:"PyData Delhi 2017, Delhi, India Website",description:"Overview of cutting-edge advancements in Natural Language Processing technologies and methodologies.",tags:["NLP","Research Advances","Language Models"],date:"Sep 2017",type:"Keynotes",website:"https://pydata.org/delhi2017",slides:"https://speakerdeck.com/example/recent-advances-nlp",recording:"https://www.youtube.com/watch?v=example10"},{year:"2017",title:"Products and AI",venue:"Anthill Inside, 2017, Bengaluru, India Website",description:"Exploring the integration of AI technologies into product development and enhancement.",tags:["AI Products","Product Development","Applied AI"],date:"Jul 2017",type:"Panels",website:"https://anthillinside.com/2017/panels",slides:"https://speakerdeck.com/example/products-and-ai",recording:"https://www.youtube.com/watch?v=example11"},{year:"2017",title:"When – and when not – to use Deep Learning, Machine Learning and AI",venue:"Anthill Inside, 2017, Bengaluru, India Website",description:"A practical guide to choosing the right technology approach for different problem domains.",tags:["Technology Selection","Deep Learning","AI Strategy"],date:"Jul 2017",type:"Panels",website:"https://anthillinside.com/2017/panels/tech-selection",slides:"https://speakerdeck.com/example/when-to-use-dl-ml-ai",recording:"https://www.youtube.com/watch?v=example12"},{year:"2016",title:"Building Continuous Learning Systems",venue:"PyData 2016, Washington, D.C. Slides Recording Website",description:"Strategies and architectures for creating AI systems that continuously learn and improve over time.",tags:["Continuous Learning","ML Systems","AI Architecture"],date:"Oct 2016",type:"Workshops",website:"https://pydata.org/dc2016",slides:"https://speakerdeck.com/example/continuous-learning-systems",recording:"https://www.youtube.com/watch?v=example13"},{year:"2010",title:"Authenticated Byzantine Generals in Dual Failure Model",venue:"ICDCN 2010, Kolkata, India Website",description:"Research presentation on fault-tolerant distributed systems and consensus algorithms.",tags:["Distributed Systems","Byzantine Failures","Authentication"],date:"Jan 2010",type:"Keynotes",website:"https://icdcn.org/2010",slides:"https://speakerdeck.com/example/byzantine-generals",recording:"https://www.youtube.com/watch?v=example14"},{year:"2010",title:"On Composability of Reliable Unicast and Broadcast",venue:"ICDCN 2010, Kolkata, India Website",description:"Technical discussion on composing reliable message passing protocols in distributed systems.",tags:["Distributed Computing","Reliability","Protocol Design"],date:"Jan 2010",type:"Keynotes",website:"https://icdcn.org/2010/sessions",slides:"https://speakerdeck.com/example/reliable-unicast",recording:"https://www.youtube.com/watch?v=example15"}].filter(g=>{const y=g.title.toLowerCase().includes(l.toLowerCase())||g.description.toLowerCase().includes(l.toLowerCase())||g.venue.toLowerCase().includes(l.toLowerCase()),p=u==="All Talks"||g.type===u;return y&&p});return c.jsxs("div",{className:"bg-blue-50 container mx-auto py-8 px-4 rounded-lg",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("h1",{className:"text-5xl font-bold text-blue-900 mb-2",children:"Talks"}),c.jsx("div",{className:"h-1 w-32 bg-blue-600 mx-auto mt-2 mb-4"}),c.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto mb-4",children:"Workshops, keynotes, and talks on AI, NLP, and Machine Learning"})]}),c.jsx("div",{className:"mb-8",children:c.jsxs("div",{className:"max-w-lg mx-auto relative",children:[c.jsx("input",{type:"text",placeholder:"Search talks...",className:"w-full px-4 py-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",value:l,onChange:g=>s(g.target.value)}),c.jsx(hp,{className:"absolute left-3 top-2.5 text-gray-400",size:18})]})}),c.jsx("div",{className:"flex justify-center flex-wrap gap-3 mb-10",children:f.map(g=>c.jsx("button",{className:`px-6 py-2 rounded-full font-medium transition-colors ${u===g?"bg-blue-600 text-white":"bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"}`,onClick:()=>o(g),children:g},g))}),c.jsx("div",{className:"space-y-6 max-w-4xl mx-auto",children:b.map((g,y)=>c.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-600 transition-all hover:shadow-lg",children:c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[c.jsxs("div",{className:"flex-grow",children:[c.jsx("div",{className:"inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3",children:g.year}),c.jsx("h2",{className:"text-xl font-semibold text-blue-800 mb-2",children:g.title}),c.jsx("p",{className:"text-gray-700 mb-2",children:g.venue}),c.jsx("p",{className:"text-gray-600",children:g.description}),c.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:g.tags.map((p,x)=>c.jsx("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm",children:p},x))})]}),c.jsxs("div",{className:"md:ml-6 mt-4 md:mt-0 md:min-w-[180px] md:text-right",children:[c.jsxs("p",{className:"flex items-center md:justify-end text-gray-500 text-sm mb-4",children:[c.jsx(ha,{size:16,className:"mr-1"}),g.date]}),c.jsxs("div",{className:"flex flex-col gap-2",children:[g.website&&c.jsxs("a",{href:g.website,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(Mx,{size:16,className:"mr-2"}),"Website"]}),g.slides&&c.jsxs("a",{href:g.slides,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(Ux,{size:16,className:"mr-2"}),"Slides"]}),g.recording&&c.jsxs("a",{href:g.recording,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors",children:[c.jsx(qx,{size:16,className:"mr-2"}),"Recording"]})]})]})]})})},y))})]})}function Xx(){return c.jsxs("div",{className:"content container mx-auto py-10",children:[c.jsx("h1",{className:"page__title text-4xl font-bold text-gray-900 mb-6 text-center",children:"Workshops & Bootcamps"})," ",c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Advanced NLP: From Essentials to Deep Transfer Learning"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC) Europe, Zurich (Online) "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUN 2021"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://odsc.com/europe/training/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Natural Language Processing Bootcamp"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC), Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," NOV 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Natural Language Processing Bootcamp - Zero to Hero"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Open Data Science Conference (ODSC), Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," AUG 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://confengine.com/conferences/odsc-india-2019/schedule",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Bootcamp for Natural Language Processing"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Hasgeek, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2019"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsx("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4"}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthill Inside, Bangalore"})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2018"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://anthillinside.in/2018-july-nlp-bootcamp/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthill Inside, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," MAY 2018"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://anthillinside.in/2018-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"#",className:"text-blue-800 hover:underline",children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]}),c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"list__item mb-8",children:[" ",c.jsxs("article",{className:"archive__item bg-white rounded-lg shadow-md p-6",children:[" ",c.jsxs("h2",{className:"archive__item-title text-xl font-semibold text-blue-800 mb-3",itemProp:"headline",children:[" ",c.jsx("a",{children:"Representations Learning of text for NLP"})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Anthil Inside, Bangalore "})," ",c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[" ",c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[" ",c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," JUL 2017"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[" ",c.jsxs("a",{href:"https://anthillinside.in/2017/nlp-workshop/",className:"text-blue-700 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp",className:"text-blue-800 hover:underline",children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]}),c.jsxs("div",{className:"workshop-info flex flex-col md:flex-row justify-between items-start mt-4",children:[" ",c.jsx("p",{className:"archive__item-excerpt text-gray-700 mb-2 md:mb-0",children:"Hasgeek, Bangalore"}),c.jsxs("div",{className:"vertical_side text-right md:text-left",children:[c.jsxs("p",{className:"page__meta text-gray-500 text-sm",children:[c.jsx(ge,{icon:Ia,className:"mr-1","aria-hidden":"true"})," APR 2017"]}),c.jsxs("p",{className:"archive__item-excerpt text-gray-700 text-sm mt-2",children:[c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/",className:"text-blue-800 hover:underline mr-2",children:[c.jsx(ge,{icon:Qa,className:"mr-1","aria-hidden":"true"})," Website"]}),c.jsxs("a",{href:"https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t",className:"text-blue-800 hover:underline",children:[c.jsx(ge,{icon:Wa,className:"mr-1","aria-hidden":"true"})," Slides"]})]})]})]})]})]})]})]})}const u1="/assets/ABG_thesis-DhLw8HTs.pdf";function Yx(){const[l,s]=T.useState(""),[u,o]=T.useState("all"),f=[{id:100,type:"article",title:"What Sam Altman's Role in OpenAI's Rise Teaches Us",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"The New Blueprint for Building Leadership at Deep Tech Labs",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",icon:Oe}]},{id:101,type:"article",title:'A special session to learn "How We Conceived the AI system that Won Over Sam Altman (OpenAI) & Vinod Khosla (Khosla Ventures)"',year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Special session on AI system development",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",icon:Oe}]},{id:102,type:"article",title:"10x Game in Business",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/10x-game-in-business",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"15 Years In Startups: Key Learnings",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/10x-game-in-business",icon:Oe}]},{id:103,type:"article",title:"AI Adoption & Human Expertise",year:"2025",month:"May",url:"https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Exploring the intersection of AI and human expertise",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",icon:Oe}]},{id:104,type:"article",title:"Founder/CEO's Playbook: How to Ride the AI Wave",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Guide for leaders on AI transformation",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",icon:Oe}]},{id:105,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 3",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 3 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",icon:Oe}]},{id:106,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 2",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 2 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",icon:Oe}]},{id:107,type:"article",title:"The Art (& Science) of finding the most important AI Use Cases - Part 1",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Part 1 of the series on AI use cases",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",icon:Oe}]},{id:108,type:"article",title:"Why the AI rush?",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-the-ai-rush",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Understanding the current AI revolution",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-the-ai-rush",icon:Oe}]},{id:109,type:"article",title:"Why Founders/CEOs must personally own AI transformation",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"The importance of leadership in AI transformation",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",icon:Oe}]},{id:110,type:"article",title:"AI Déjà Vu: Learning from the Internet Era",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Drawing parallels between AI and Internet revolutions",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",icon:Oe}]},{id:111,type:"article",title:"Unknowingly, CXO's are often the biggest bottleneck in AI adoption",year:"2025",month:"Apr",url:"https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Addressing leadership challenges in AI adoption",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",icon:Oe}]},{id:112,type:"article",title:"AI ≠ IT",year:"2025",month:"Mar",url:"https://pragmaticai1.substack.com/p/ai-vs-it",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Understanding the fundamental differences between AI and IT",links:[{type:"article",label:"Read Article",url:"https://pragmaticai1.substack.com/p/ai-vs-it",icon:Oe}]},{id:113,type:"article",title:"Podcast #1 | Somnath Biswas - Head of Product | Conversational AI",year:"2025",month:"Feb",url:"https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Conversation about Conversational AI with Somnath Biswas",links:[{type:"article",label:"Listen to Podcast",url:"https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",icon:Oe}]},{id:1,type:"paper",title:"Noisy Text Data: Achilles' Heel of popular transformer based NLP models",year:"2021",url:"https://arxiv.org/abs/2110.03353",authors:[{name:"Kartikay Bagla",url:"http://linkedin.com/in/kartikay-bagla-60638a167"},{name:"Ankit Kumar",url:"http://linkedin.com/in/ankit-ahlawat"},{name:"Shivam Gupta",url:"https://www.linkedin.com/in/shmgupta/"},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Investigates the impact of noisy text on transformer models performance across multiple NLP tasks.",links:[{type:"pdf",label:"PDF",url:"https://arxiv.org/pdf/2110.03353.pdf",icon:Oe},{type:"bibtex",label:"BibTeX",url:"https://arxiv2bibtex.org/?q=2110.03353",icon:Ot},{type:"arxiv",label:"arXiv:2110.03353",url:"https://arxiv.org/abs/2110.03353",icon:Bu}]},{id:2,type:"book",title:"Practical Natural Language Processing: A Comprehensive Guide to Building Real-World NLP Systems",year:"2020",url:"https://www.oreilly.com/library/view/practical-natural-language/9781492054047/",authors:[{name:"Sowmya Vajjala",url:null},{name:"Bodhisattwa Majumder",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Harshit Surana",url:null}],description:"Book on practical aspects of implementing NLP systems, published by O'Reilly Media.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10/gjzgqh",icon:Ot}]},{id:3,type:"paper",title:"hinglishNorm - A Corpus of Hindi-English Code Mixed Sentences for Text Normalization",year:"2020",url:"#",venue:"COLING in Online 2020",authors:[{name:"Piyush Makhija",url:null},{name:"Ankit Kumar",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Presents a corpus for text normalization of Hindi-English code-mixed text.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.18653/v1/2020.coling-main.1",icon:Ot},{type:"doi",label:"DOI: 10.18653/v1/2020.coling-main.1",url:"https://doi.org/10.18653/v1/2020.coling-main.1",icon:Ka},{type:"conference",label:"COLING 2020",url:"https://coling2020.org/",icon:ha}]},{id:4,type:"paper",title:"Noisy Text Data: Achilles' Heel of BERT",year:"2020",url:"#",venue:"W-NUT@EMNLP in Online 2020",authors:[{name:"Ankit Kumar",url:null},{name:"Piyush Makhija",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Examines how noisy text affects BERT performance.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.18653/v1/2020.wnut-1.1",icon:Ot},{type:"doi",label:"DOI: 10.18653/v1/2020.wnut-1.1",url:"https://doi.org/10.18653/v1/2020.wnut-1.1",icon:Ka},{type:"conference",label:"W-NUT@EMNLP 2020",url:"https://noisy-text.github.io/2020/",icon:ha}]},{id:5,type:"patent",title:"Noise Reduction And Smart Ticketing For Social Media-based Communication Systems",year:"2019",url:"#",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Navaneethan Santhanam",url:null}],description:"Patent for noise reduction in social media communications.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:Oe},{type:"article",label:"Article",url:"#",icon:Qr}]},{id:6,type:"patent",title:"Named entity recognition from short unstructured text",year:"2019",url:"#",authors:[{name:"Navaneethan Santhanam",url:null},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"Patent for named entity recognition in short texts.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:Oe},{type:"article",label:"Article",url:"#",icon:Qr}]},{id:7,type:"patent",title:"Automatic annotation of social media communications for noise cancellation",year:"2019",url:"#",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Saurabh Arora",url:null},{name:"Satyam Saxena",url:null},{name:"Navaneethan Santhanam",url:null}],description:"Patent for automatic annotation of social media communications.",organization:"Freshworks Inc",links:[{type:"pdf",label:"PDF",url:"#",icon:Oe},{type:"article",label:"Article",url:"#",icon:Qr}]},{id:8,type:"paper",title:"A New Look at Composition of Authenticated Byzantine Generals",year:"2013",url:"https://arxiv.org/abs/1203.1463",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Prasant Gopal",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"New perspective on authentication in Byzantine agreement protocols.",links:[{type:"pdf",label:"PDF",url:"https://arxiv.org/pdf/1203.1463.pdf",icon:Oe},{type:"bibtex",label:"BibTeX",url:"https://arxiv2bibtex.org/?q=1203.1463",icon:Ot},{type:"arxiv",label:"arXiv: 1203.1463",url:"https://arxiv.org/abs/1203.1463",icon:Bu}]},{id:9,type:"paper",title:"Byzantine Agreement Using Partial Authentication",year:"2011",url:"https://link.springer.com/chapter/10.1007/978-3-642-24100-0_38",venue:"25th International Symposium on DIStributed Computing (DISC) in Roma, Italy 2011",authors:[{name:"Piyush Bansal",url:null},{name:"Prasant Gopal",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Kannan Srinathan",url:null},{name:"Pranav Kumar Vasishta",url:null}],description:"Explores Byzantine agreement with partial authentication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-24100-0_38",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-24100-0_38",url:"https://doi.org/10.1007/978-3-642-24100-0_38",icon:Ka},{type:"conference",label:"DISC 2011",url:"https://www.disc-conference.org/wp/past-conferences/",icon:ha}]},{id:10,type:"paper",title:"On Composability of Reliable Unicast and Broadcast",year:"2010",url:"https://link.springer.com/chapter/10.1007/978-3-642-11322-2_10",venue:"International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Sandeep Hans",url:null},{name:"Kannan Srinathan",url:null},{name:"C. Pandu Rangan",url:null}],description:"Analysis of composability in reliable communication protocols.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_10",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-11322-2_10",url:"https://doi.org/10.1007/978-3-642-11322-2_10",icon:Ka},{type:"conference",label:"ICDCN 2010",url:"https://www.cucse.org/ICDCN2010.htm",icon:ha}]},{id:11,type:"paper",title:"Authenticated Byzantine Generals in Dual Failure Model",year:"2010",url:"https://link.springer.com/chapter/10.1007/978-3-642-11322-2_12",venue:"International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Prasant Gopal",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Byzantine agreement protocol for dual failure scenarios.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_12",icon:Ot},{type:"doi",label:"DOI: 10.1007/978-3-642-11322-2_12",url:"https://doi.org/10.1007/978-3-642-11322-2_12",icon:Ka},{type:"conference",label:"ICDCN 2010",url:"https://www.cucse.org/ICDCN2010.htm",icon:ha}]},{id:12,type:"thesis",title:"Authenticated Byzantine Generals",year:"2009",url:u1,authors:[{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"}],description:"MS thesis - Authentication in Byzantine agreement protocols.",organization:"IIIT Hyderabad",links:[{type:"pdf",label:"PDF",url:u1,icon:Oe}]},{id:13,type:"paper",title:"Topology Knowledge Affects Probabilistic Reliable Communication",year:"2009",url:"https://dl.acm.org/doi/10.1145/1582716.1582784",venue:"ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",authors:[{name:"Pranav K. Vasishta",url:null},{name:"Prasant Gopal",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Effects of topology knowledge on reliable communication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1145/1582716.1582784",icon:Ot},{type:"doi",label:"DOI: 10.1145/1582716.1582784",url:"https://doi.org/10.1145/1582716.1582784",icon:Ka},{type:"conference",label:"PODC 2009",url:"https://www.podc.org/podc2009/",icon:ha}]},{id:14,type:"paper",title:"Global Consistency can be Easier than Point-to-Point Communication",year:"2009",url:"https://dl.acm.org/doi/10.1145/1582716.1582782",venue:"ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",authors:[{name:"Prasant Gopal",url:"https://prasantgopal.com/"},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Pranav K. Vasishta",url:null},{name:"Piyush Bansal",url:null},{name:"Kannan Srinathan",url:null}],description:"Comparing global consistency and point-to-point communication.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1145/1582716.1582782",icon:Ot},{type:"doi",label:"DOI: 10.1145/1582716.1582782",url:"https://doi.org/10.1145/1582716.1582782",icon:Ka},{type:"conference",label:"PODC 2009",url:"https://www.podc.org/podc2009/",icon:ha}]},{id:15,type:"paper",title:"On Privacy Preserving Convex Hull",year:"2009",url:"https://ieeexplore.ieee.org/document/5066472",venue:"IEEE International Conference on Availability, Reliability and Security (ARES) in Fukuoka, Japan 2009",authors:[{name:"Sandeep Hans",url:"https://research.ibm.com/people/sandeep-hans"},{name:"Sarat C. Addepalli",url:null},{name:"Anuj Gupta",url:"https://anujgupta82.github.io/"},{name:"Kannan Srinathan",url:"https://www.iiit.ac.in/faculty/kannan-srinathan/"}],description:"Privacy-preserving algorithms for convex hull computation.",links:[{type:"bibtex",label:"BibTeX",url:"https://www.doi2bib.org/bib/10.1109/ARES.2009.159",icon:Ot},{type:"doi",label:"DOI: 10.1109/ARES.2009.159",url:"https://doi.org/10.1109/ARES.2009.159",icon:Ka},{type:"conference",label:"ARES 2009",url:"https://2009.ares-conference.eu/www.ares-conference.eu/conf/index.html",icon:ha}]}],m=x=>{switch(x){case"paper":return Oe;case"book":return Ot;case"patent":return Qr;case"thesis":return Bu;case"article":return Oe;default:return Oe}},b=f.filter(x=>{const M=x.title.toLowerCase().includes(l.toLowerCase())||x.description.toLowerCase().includes(l.toLowerCase())||x.authors.some(O=>O.name.toLowerCase().includes(l.toLowerCase())),j=u==="all"||x.type===u;return M&&j}),g=x=>{o(x)},y=[{id:"all",label:"All Publications"},{id:"paper",label:"Research Papers"},{id:"book",label:"Books"},{id:"patent",label:"Patents"},{id:"thesis",label:"Thesis"},{id:"article",label:"Articles"}],p={papers:f.filter(x=>x.type==="paper").length,books:f.filter(x=>x.type==="book").length,patents:f.filter(x=>x.type==="patent").length,thesis:f.filter(x=>x.type==="thesis").length,Articles:f.filter(x=>x.type==="article").length};return c.jsx("div",{className:"bg-gradient-to-b from-blue-50 to-white min-h-screen",children:c.jsxs("div",{className:"container mx-auto py-5 px-4 max-w-5xl",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("h1",{className:"text-5xl font-bold text-blue-900 mb-2",children:"Publications"}),c.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"}),c.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto mb-4",children:"Research papers, patents, books, and thesis in Natural Language Processing, Distributed Computing, and Security."})]}),c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"relative max-w-md mx-auto mb-6",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(hp,{className:"h-5 w-5 text-gray-400"})}),c.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out",placeholder:"Search publications...",value:l,onChange:x=>s(x.target.value)})]}),c.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-8",children:y.map(x=>c.jsx("button",{className:`px-5 py-2 rounded-full font-medium transition-all duration-200 ${u===x.id?"bg-blue-700 text-white shadow-md scale-105":"bg-white text-blue-800 border border-blue-200 hover:bg-blue-50"}`,onClick:()=>g(x.id),children:x.label},x.id))}),c.jsxs("div",{className:"mt-10 grid grid-cols-6 gap-2 mb-10",children:[c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:f.length}),c.jsx("div",{className:"text-xs text-gray-600",children:"Publications"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.papers}),c.jsx("div",{className:"text-xs text-gray-600",children:"Papers"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.books}),c.jsx("div",{className:"text-xs text-gray-600",children:"Books"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.patents}),c.jsx("div",{className:"text-xs text-gray-600",children:"Patents"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.thesis}),c.jsx("div",{className:"text-xs text-gray-600",children:"Thesis"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300",children:[c.jsx("div",{className:"text-2xl font-bold text-blue-700 mb-1",children:p.Articles}),c.jsx("div",{className:"text-xs text-gray-600",children:"Articles"})]})]})]}),c.jsx("div",{className:"space-y-8",children:b.length>0?b.map(x=>{const M=m(x.type);return c.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300",children:c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex items-start",children:[c.jsx("div",{className:"bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg mr-4 hidden md:flex items-center justify-center border border-blue-300 h-16 w-16 flex-shrink-0",children:c.jsx(M,{size:28,className:"text-blue-700"})}),c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex justify-between items-start flex-wrap md:flex-nowrap gap-2 mb-2",children:[c.jsx("h2",{className:"text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors flex-grow",children:x.url!=="#"?c.jsx("a",{href:x.url,className:"hover:underline",target:"_blank",rel:"noopener noreferrer",children:x.title}):x.title}),c.jsx("span",{className:"text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-3 py-1 font-medium shadow-sm flex-shrink-0",children:x.year})]}),x.type!=="article"&&c.jsxs("p",{className:"text-gray-700 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Authors:"})," ",x.authors.map((j,O)=>c.jsxs("span",{children:[j.url?c.jsx("a",{href:j.url,className:"text-gray-600 hover:text-blue-700 hover:underline",target:"_blank",rel:"noopener noreferrer",children:j.name}):c.jsx("span",{className:"text-gray-600",children:j.name}),O<x.authors.length-1&&c.jsx("span",{className:"text-gray-600",children:", "})]},O))]}),x.venue&&c.jsxs("p",{className:"text-gray-600 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Venue:"})," ",x.venue]}),x.organization&&c.jsxs("p",{className:"text-gray-600 mb-2",children:[c.jsx("span",{className:"font-semibold",children:"Organization:"})," ",x.organization]}),c.jsx("p",{className:"text-gray-600 mb-4",children:x.description}),c.jsx("div",{className:"flex flex-wrap items-center gap-4 text-sm",children:x.links&&x.links.map((j,O)=>c.jsxs("a",{className:"flex items-center text-blue-600 hover:text-blue-800 hover:underline",href:j.url,target:"_blank",rel:"noopener noreferrer",children:[c.jsx(j.icon,{size:16,className:"mr-1"})," ",j.label]},O))})]})]})})},x.id)}):c.jsx("div",{className:"text-center py-16",children:c.jsx("p",{className:"text-lg text-gray-500",children:"No publications found matching your search criteria."})})}),c.jsxs("div",{className:"mt-16 text-center",children:[c.jsx("div",{className:"w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-4"}),c.jsx("p",{className:"text-gray-500 text-sm",children:"Last updated: April 2025"})]})]})})}function Vx(){return c.jsxs("div",{className:"content container mx-auto py-10",children:[c.jsx("h1",{className:"page__title text-4xl font-bold text-gray-900 mb-6 text-center",children:"Coaching"})," ",c.jsxs("div",{className:"archive px-4 md:px-0",children:[" ",c.jsxs("div",{className:"button-column flex flex-col items-center",children:[" ",c.jsxs("button",{className:"button-column-button",children:[" ","Join my AI PM Bootcamp (Best AI Course)"]}),c.jsx("button",{className:"button-column-button",children:"My live AI Advanced AI Product Management Course on Maven"}),c.jsx("a",{href:"https://www.youtube.com/channel/UCN18Upb0gXm6EbNzHlHk_DQ",target:"_blank",className:"button-column-button",children:"My Youtube Channel about Product Management"})]})]})]})}function $x(){return c.jsxs("div",{className:"content right-column w-4/5 bg-white p-5 rounded-lg shadow-md",children:[c.jsx("h2",{className:"section-title text-3xl font-bold text-blue-800 mb-4",children:"Anuj Gupta"}),c.jsx("p",{className:"subtitle text-xl font-semibold mb-6 text-gray-800",children:c.jsx("strong",{children:"AI Executive | Board Advisor | AI Strategy & Innovation Leader"})}),c.jsx("h3",{children:"Current Engagements:"}),c.jsxs("ul",{className:"custom-list list-disc pl-6 mb-6 text-gray-700",children:[c.jsxs("li",{children:[c.jsx("span",{children:"Fractional Head of (Gen) AI"})," - Advising and steering AI initiatives for leading startups and multinational corporations across the US, Europe, and India."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Board & Executive Advisor on AI"})," - Partnering with Boards, CXOs, and investors to shape AI strategy at scale."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Architecting Enterprise AI Strategy"})," – Guiding MNCs in executing AI roadmaps that align with business objectives."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Masterclasses & Workshops"})," – Delivering high-impact AI workshops for board members, CXOs, and investment leaders."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Mentor to GCCs"})," – Advising on the establishment of world-class AI Centers of Excellence (CoEs) and AI teams."]})]}),c.jsx("h3",{children:"Professional Journey:"}),c.jsxs("ul",{className:"custom-list list-disc pl-6 text-gray-700",children:[c.jsxs("li",{children:[c.jsx("span",{children:"Advisor to YC-Backed AI Startups"})," – Recently mentored a YC company in developing mission-critical AI systems, showcased to Sam Altman & Vinod Khosla, securing Series B funding from Khosla Ventures."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI Thought Leader & Author"})," – Authored a landmark AI book, widely regarded in academia and industry:",c.jsxs("ul",{className:"nested-list list-disc pl-10 mt-2 text-gray-700",children:[c.jsx("li",{children:"Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI, Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb, and YC-backed startups."}),c.jsx("li",{children:"Translated into five languages, with 260+ citations and adopted by 50+ global universities."}),c.jsx("li",{children:"Personally invited to present the book to Prof. Raj Reddy (Turing Award Winner, AI & Robotics luminary at CMU) and Dr. Srinivas Bangalore (Columbia, Princeton, Copenhagen Business School)."})]})]}),c.jsxs("li",{children:[c.jsx("span",{children:"Strategic AI Leadership"})," – Led AI teams from inception to scale (5–100 members) across multiple geographies, developing AI systems in NLP, Vision, Speech, and Data Science."]}),c.jsxs("li",{children:[c.jsx("span",{children:"AI-Driven Business Impact"})," – Built and commercialized AI solutions that have directly contributed to multi-million-dollar revenues, driving AI-led growth at both startups and Fortune 50 enterprises."]}),c.jsxs("li",{children:[c.jsx("span",{children:"Pioneering AI-First Innovation"})," – Led AI efforts for one of the earliest AI-first startups (2013), culminating in acquisition by FreshWorks (NASDAQ: FRSH) in 2016."]}),c.jsxs("li",{children:[c.jsx("span",{children:"C-Suite & Board-Level Engagement"})," – Trusted advisor to Founders, Board Members, and C-suite executives across Business, Product, Engineering, Sales, and HR, driving AI adoption at an enterprise scale."]})]})]})}function Wx(){return c.jsx(sy,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[c.jsx(Xy,{}),c.jsx("main",{className:"flex-grow container mx-auto px-4 pt-24 pb-5",children:c.jsxs("div",{className:"flex flex-col md:flex-row gap-5",children:[c.jsx(Wy,{}),c.jsx("div",{className:"flex-grow",children:c.jsxs(U2,{children:[c.jsx(ma,{path:"/",element:c.jsx(Yy,{})}),c.jsx(ma,{path:"/pages/book",element:c.jsx(wx,{})}),c.jsx(ma,{path:"/pages/blog-post",element:c.jsx(Ax,{})}),c.jsx(ma,{path:"/pages/talk",element:c.jsx(Gx,{})}),c.jsx(ma,{path:"/pages/workshop",element:c.jsx(Xx,{})}),c.jsx(ma,{path:"/pages/publication",element:c.jsx(Yx,{})}),c.jsx(ma,{path:"/pages/coaching",element:c.jsx(Vx,{})}),c.jsx(ma,{path:"/pages/ai-playbook",element:c.jsx($x,{})})]})})]})}),c.jsx(Iy,{})]})})}Wg.createRoot(document.getElementById("root")).render(c.jsx(T.StrictMode,{children:c.jsx(Wx,{})}));
