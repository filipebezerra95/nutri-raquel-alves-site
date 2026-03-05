function Wy(l,r){for(var s=0;s<r.length;s++){const u=r[s];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in l)){const d=Object.getOwnPropertyDescriptor(u,c);d&&Object.defineProperty(l,c,d.get?d:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function Py(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Yc={exports:{}},dr={};var zp;function Iy(){if(zp)return dr;zp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(u,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:l,type:u,key:m,ref:c!==void 0?c:null,props:d}}return dr.Fragment=r,dr.jsx=s,dr.jsxs=s,dr}var Rp;function e1(){return Rp||(Rp=1,Yc.exports=Iy()),Yc.exports}var h=e1(),Gc={exports:{}},ze={};var jp;function t1(){if(jp)return ze;jp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),T=Symbol.iterator;function _(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,V={};function F(E,q,W){this.props=E,this.context=q,this.refs=V,this.updater=W||H}F.prototype.isReactComponent={},F.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},F.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function P(){}P.prototype=F.prototype;function k(E,q,W){this.props=E,this.context=q,this.refs=V,this.updater=W||H}var $=k.prototype=new P;$.constructor=k,G($,F.prototype),$.isPureReactComponent=!0;var ne=Array.isArray;function te(){}var Q={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function fe(E,q,W){var ae=W.ref;return{$$typeof:l,type:E,key:q,ref:ae!==void 0?ae:null,props:W}}function we(E,q){return fe(E.type,q,E.props)}function he(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function de(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(W){return q[W]})}var qe=/\/+/g;function Te(E,q){return typeof E=="object"&&E!==null&&E.key!=null?de(""+E.key):q.toString(36)}function be(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(te,te):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function N(E,q,W,ae,pe){var ye=typeof E;(ye==="undefined"||ye==="boolean")&&(E=null);var Ae=!1;if(E===null)Ae=!0;else switch(ye){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(E.$$typeof){case l:case r:Ae=!0;break;case w:return Ae=E._init,N(Ae(E._payload),q,W,ae,pe)}}if(Ae)return pe=pe(E),Ae=ae===""?"."+Te(E,0):ae,ne(pe)?(W="",Ae!=null&&(W=Ae.replace(qe,"$&/")+"/"),N(pe,q,W,"",function(_t){return _t})):pe!=null&&(he(pe)&&(pe=we(pe,W+(pe.key==null||E&&E.key===pe.key?"":(""+pe.key).replace(qe,"$&/")+"/")+Ae)),q.push(pe)),1;Ae=0;var at=ae===""?".":ae+":";if(ne(E))for(var Ye=0;Ye<E.length;Ye++)ae=E[Ye],ye=at+Te(ae,Ye),Ae+=N(ae,q,W,ye,pe);else if(Ye=_(E),typeof Ye=="function")for(E=Ye.call(E),Ye=0;!(ae=E.next()).done;)ae=ae.value,ye=at+Te(ae,Ye++),Ae+=N(ae,q,W,ye,pe);else if(ye==="object"){if(typeof E.then=="function")return N(be(E),q,W,ae,pe);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function J(E,q,W){if(E==null)return E;var ae=[],pe=0;return N(E,ae,"","",function(ye){return q.call(W,ye,pe++)}),ae}function oe(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(W){(E._status===0||E._status===-1)&&(E._status=1,E._result=W)},function(W){(E._status===0||E._status===-1)&&(E._status=2,E._result=W)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var le=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ee={map:J,forEach:function(E,q,W){J(E,function(){q.apply(this,arguments)},W)},count:function(E){var q=0;return J(E,function(){q++}),q},toArray:function(E){return J(E,function(q){return q})||[]},only:function(E){if(!he(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ze.Activity=x,ze.Children=Ee,ze.Component=F,ze.Fragment=s,ze.Profiler=c,ze.PureComponent=k,ze.StrictMode=u,ze.Suspense=v,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ze.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Q.H.useMemoCache(E)}},ze.cache=function(E){return function(){return E.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(E,q,W){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var ae=G({},E.props),pe=E.key;if(q!=null)for(ye in q.key!==void 0&&(pe=""+q.key),q)!A.call(q,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&q.ref===void 0||(ae[ye]=q[ye]);var ye=arguments.length-2;if(ye===1)ae.children=W;else if(1<ye){for(var Ae=Array(ye),at=0;at<ye;at++)Ae[at]=arguments[at+2];ae.children=Ae}return fe(E.type,pe,ae)},ze.createContext=function(E){return E={$$typeof:m,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},ze.createElement=function(E,q,W){var ae,pe={},ye=null;if(q!=null)for(ae in q.key!==void 0&&(ye=""+q.key),q)A.call(q,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(pe[ae]=q[ae]);var Ae=arguments.length-2;if(Ae===1)pe.children=W;else if(1<Ae){for(var at=Array(Ae),Ye=0;Ye<Ae;Ye++)at[Ye]=arguments[Ye+2];pe.children=at}if(E&&E.defaultProps)for(ae in Ae=E.defaultProps,Ae)pe[ae]===void 0&&(pe[ae]=Ae[ae]);return fe(E,ye,pe)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(E){return{$$typeof:y,render:E}},ze.isValidElement=he,ze.lazy=function(E){return{$$typeof:w,_payload:{_status:-1,_result:E},_init:oe}},ze.memo=function(E,q){return{$$typeof:g,type:E,compare:q===void 0?null:q}},ze.startTransition=function(E){var q=Q.T,W={};Q.T=W;try{var ae=E(),pe=Q.S;pe!==null&&pe(W,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(te,le)}catch(ye){le(ye)}finally{q!==null&&W.types!==null&&(q.types=W.types),Q.T=q}},ze.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ze.use=function(E){return Q.H.use(E)},ze.useActionState=function(E,q,W){return Q.H.useActionState(E,q,W)},ze.useCallback=function(E,q){return Q.H.useCallback(E,q)},ze.useContext=function(E){return Q.H.useContext(E)},ze.useDebugValue=function(){},ze.useDeferredValue=function(E,q){return Q.H.useDeferredValue(E,q)},ze.useEffect=function(E,q){return Q.H.useEffect(E,q)},ze.useEffectEvent=function(E){return Q.H.useEffectEvent(E)},ze.useId=function(){return Q.H.useId()},ze.useImperativeHandle=function(E,q,W){return Q.H.useImperativeHandle(E,q,W)},ze.useInsertionEffect=function(E,q){return Q.H.useInsertionEffect(E,q)},ze.useLayoutEffect=function(E,q){return Q.H.useLayoutEffect(E,q)},ze.useMemo=function(E,q){return Q.H.useMemo(E,q)},ze.useOptimistic=function(E,q){return Q.H.useOptimistic(E,q)},ze.useReducer=function(E,q,W){return Q.H.useReducer(E,q,W)},ze.useRef=function(E){return Q.H.useRef(E)},ze.useState=function(E){return Q.H.useState(E)},ze.useSyncExternalStore=function(E,q,W){return Q.H.useSyncExternalStore(E,q,W)},ze.useTransition=function(){return Q.H.useTransition()},ze.version="19.2.4",ze}var Tp;function vf(){return Tp||(Tp=1,Gc.exports=t1()),Gc.exports}var U=vf();const na=Py(U),a1=Wy({__proto__:null,default:na},[U]);var Xc={exports:{}},mr={},Qc={exports:{}},Vc={};var _p;function n1(){return _p||(_p=1,(function(l){function r(N,J){var oe=N.length;N.push(J);e:for(;0<oe;){var le=oe-1>>>1,Ee=N[le];if(0<c(Ee,J))N[le]=J,N[oe]=Ee,oe=le;else break e}}function s(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var J=N[0],oe=N.pop();if(oe!==J){N[0]=oe;e:for(var le=0,Ee=N.length,E=Ee>>>1;le<E;){var q=2*(le+1)-1,W=N[q],ae=q+1,pe=N[ae];if(0>c(W,oe))ae<Ee&&0>c(pe,W)?(N[le]=pe,N[ae]=oe,le=ae):(N[le]=W,N[q]=oe,le=q);else if(ae<Ee&&0>c(pe,oe))N[le]=pe,N[ae]=oe,le=ae;else break e}}return J}function c(N,J){var oe=N.sortIndex-J.sortIndex;return oe!==0?oe:N.id-J.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();l.unstable_now=function(){return m.now()-y}}var v=[],g=[],w=1,x=null,T=3,_=!1,H=!1,G=!1,V=!1,F=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function $(N){for(var J=s(g);J!==null;){if(J.callback===null)u(g);else if(J.startTime<=N)u(g),J.sortIndex=J.expirationTime,r(v,J);else break;J=s(g)}}function ne(N){if(G=!1,$(N),!H)if(s(v)!==null)H=!0,te||(te=!0,de());else{var J=s(g);J!==null&&be(ne,J.startTime-N)}}var te=!1,Q=-1,A=5,fe=-1;function we(){return V?!0:!(l.unstable_now()-fe<A)}function he(){if(V=!1,te){var N=l.unstable_now();fe=N;var J=!0;try{e:{H=!1,G&&(G=!1,P(Q),Q=-1),_=!0;var oe=T;try{t:{for($(N),x=s(v);x!==null&&!(x.expirationTime>N&&we());){var le=x.callback;if(typeof le=="function"){x.callback=null,T=x.priorityLevel;var Ee=le(x.expirationTime<=N);if(N=l.unstable_now(),typeof Ee=="function"){x.callback=Ee,$(N),J=!0;break t}x===s(v)&&u(v),$(N)}else u(v);x=s(v)}if(x!==null)J=!0;else{var E=s(g);E!==null&&be(ne,E.startTime-N),J=!1}}break e}finally{x=null,T=oe,_=!1}J=void 0}}finally{J?de():te=!1}}}var de;if(typeof k=="function")de=function(){k(he)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Te=qe.port2;qe.port1.onmessage=he,de=function(){Te.postMessage(null)}}else de=function(){F(he,0)};function be(N,J){Q=F(function(){N(l.unstable_now())},J)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_next=function(N){switch(T){case 1:case 2:case 3:var J=3;break;default:J=T}var oe=T;T=J;try{return N()}finally{T=oe}},l.unstable_requestPaint=function(){V=!0},l.unstable_runWithPriority=function(N,J){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=T;T=N;try{return J()}finally{T=oe}},l.unstable_scheduleCallback=function(N,J,oe){var le=l.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?le+oe:le):oe=le,N){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=oe+Ee,N={id:w++,callback:J,priorityLevel:N,startTime:oe,expirationTime:Ee,sortIndex:-1},oe>le?(N.sortIndex=oe,r(g,N),s(v)===null&&N===s(g)&&(G?(P(Q),Q=-1):G=!0,be(ne,oe-le))):(N.sortIndex=Ee,r(v,N),H||_||(H=!0,te||(te=!0,de()))),N},l.unstable_shouldYield=we,l.unstable_wrapCallback=function(N){var J=T;return function(){var oe=T;T=J;try{return N.apply(this,arguments)}finally{T=oe}}}})(Vc)),Vc}var Op;function l1(){return Op||(Op=1,Qc.exports=n1()),Qc.exports}var Zc={exports:{}},Lt={};var Dp;function i1(){if(Dp)return Lt;Dp=1;var l=vf();function r(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(v,g,w){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:v,containerInfo:g,implementation:w}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Lt.createPortal=function(v,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return d(v,g,null,w)},Lt.flushSync=function(v){var g=m.T,w=u.p;try{if(m.T=null,u.p=2,v)return v()}finally{m.T=g,u.p=w,u.d.f()}},Lt.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(v,g))},Lt.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Lt.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var w=g.as,x=y(w,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,_=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?u.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:T,fetchPriority:_}):w==="script"&&u.d.X(v,{crossOrigin:x,integrity:T,fetchPriority:_,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Lt.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=y(g.as,g.crossOrigin);u.d.M(v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(v)},Lt.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,x=y(w,g.crossOrigin);u.d.L(v,w,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Lt.preloadModule=function(v,g){if(typeof v=="string")if(g){var w=y(g.as,g.crossOrigin);u.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(v)},Lt.requestFormReset=function(v){u.d.r(v)},Lt.unstable_batchedUpdates=function(v,g){return v(g)},Lt.useFormState=function(v,g,w){return m.H.useFormState(v,g,w)},Lt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Lt.version="19.2.4",Lt}var Cp;function U0(){if(Cp)return Zc.exports;Cp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Zc.exports=i1(),Zc.exports}var Mp;function r1(){if(Mp)return mr;Mp=1;var l=l1(),r=vf(),s=U0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return v(i),e;if(o===n)return v(i),t;o=o.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=o;else{for(var f=!1,p=i.child;p;){if(p===a){f=!0,a=i,n=o;break}if(p===n){f=!0,n=i,a=o;break}p=p.sibling}if(!f){for(p=o.child;p;){if(p===a){f=!0,a=o,n=i;break}if(p===n){f=!0,n=o,a=i;break}p=p.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,T=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),we=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=he&&e[he]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case ne:return"Suspense";case te:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case k:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var be=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},le=[],Ee=-1;function E(e){return{current:e}}function q(e){0>Ee||(e.current=le[Ee],le[Ee]=null,Ee--)}function W(e,t){Ee++,le[Ee]=e.current,e.current=t}var ae=E(null),pe=E(null),ye=E(null),Ae=E(null);function at(e,t){switch(W(ye,t),W(pe,e),W(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jh(t),e=kh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(ae),W(ae,e)}function Ye(){q(ae),q(pe),q(ye)}function _t(e){e.memoizedState!==null&&W(Ae,e);var t=ae.current,a=kh(t,e.type);t!==a&&(W(pe,e),W(ae,a))}function Ta(e){pe.current===e&&(q(ae),q(pe)),Ae.current===e&&(q(Ae),ur._currentValue=oe)}var _a,et;function Gt(e){if(_a===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_a=t&&t[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_a+e+et}var El=!1;function bi(e,t){if(!e||El)return"";El=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(L){var C=L}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(L){C=L}e.call(Z.prototype)}}else{try{throw Error()}catch(L){C=L}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(L){if(L&&C&&typeof L.stack=="string")return[L.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],p=o[1];if(f&&p){var b=f.split(`
`),D=p.split(`
`);for(i=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;if(n===b.length||i===D.length)for(n=b.length-1,i=D.length-1;1<=n&&0<=i&&b[n]!==D[i];)i--;for(;1<=n&&0<=i;n--,i--)if(b[n]!==D[i]){if(n!==1||i!==1)do if(n--,i--,0>i||b[n]!==D[i]){var Y=`
`+b[n].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=n&&0<=i);break}}}finally{El=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Gt(a):""}function qa(e,t){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==t&&t!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return bi(e.type,!1);case 11:return bi(e.type.render,!1);case 1:return bi(e.type,!0);case 31:return Gt("Activity");default:return""}}function Ur(e){try{var t="",a=null;do t+=qa(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Si=Object.prototype.hasOwnProperty,Al=l.unstable_scheduleCallback,wi=l.unstable_cancelCallback,_u=l.unstable_shouldYield,Ou=l.unstable_requestPaint,Ht=l.unstable_now,Ya=l.unstable_getCurrentPriorityLevel,mn=l.unstable_ImmediatePriority,Ei=l.unstable_UserBlockingPriority,hn=l.unstable_NormalPriority,xa=l.unstable_LowPriority,la=l.unstable_IdlePriority,Lr=l.log,Du=l.unstable_setDisableYieldValue,Ga=null,qt=null;function zt(e){if(typeof Lr=="function"&&Du(e),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Ga,e)}catch{}}var Nt=Math.clz32?Math.clz32:Cu,Br=Math.log,Hr=Math.LN2;function Cu(e){return e>>>=0,e===0?32:31-(Br(e)/Hr|0)|0}var Jn=256,Xa=262144,kn=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?i=ba(n):(f&=p,f!==0?i=ba(f):a||(a=p&~e,a!==0&&(i=ba(a))))):(p=n&~o,p!==0?i=ba(p):f!==0?i=ba(f):a||(a=n&~e,a!==0&&(i=ba(a)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:i}function pn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ai(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function gn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qr(e,t,a,n,i,o){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,D=e.hiddenUpdates;for(a=f&~a;0<a;){var Y=31-Nt(a),Z=1<<Y;p[Y]=0,b[Y]=-1;var C=D[Y];if(C!==null)for(D[Y]=null,Y=0;Y<C.length;Y++){var L=C[Y];L!==null&&(L.lane&=-536870913)}a&=~Z}n!==0&&Yr(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function Yr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Gr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Nt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function S(e,t){var a=t&-t;return a=(a&42)!==0?1:R(a),(a&(e.suspendedLanes|t))!==0?0:a}function R(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function M(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function K(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:yp(e.type))}function I(e,t){var a=J.p;try{return J.p=e,t()}finally{J.p=a}}var ue=Math.random().toString(36).slice(2),ee="__reactFiber$"+ue,ie="__reactProps$"+ue,re="__reactContainer$"+ue,ge="__reactEvents$"+ue,xe="__reactListeners$"+ue,me="__reactHandles$"+ue,Xe="__reactResources$"+ue,Oe="__reactMarker$"+ue;function Pe(e){delete e[ee],delete e[ie],delete e[ge],delete e[xe],delete e[me]}function nt(e){var t=e[ee];if(t)return t;for(var a=e.parentNode;a;){if(t=a[re]||a[ee]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ap(e);e!==null;){if(a=e[ee])return a;e=ap(e)}return t}e=a,a=e.parentNode}return null}function st(e){if(e=e[ee]||e[re]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function He(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function wt(e){var t=e[Xe];return t||(t=e[Xe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Oe]=!0}var vn=new Set,Sa={};function Rt(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(Sa[e]=t,e=0;e<t.length;e++)vn.add(t[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ca={},Wn={};function Rl(e){return Si.call(Wn,e)?!0:Si.call(Ca,e)?!1:Fn.test(e)?Wn[e]=!0:(Ca[e]=!0,!1)}function De(e,t,a){if(Rl(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function dt(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ut(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jl(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tl(e){if(!e._valueTracker){var t=lt(e)?"checked":"value";e._valueTracker=jl(e,t,""+e[t])}}function Xr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=lt(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zg=/[\n"\\]/g;function ia(e){return e.replace(Zg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nu(e,t,a,n,i,o,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Uu(e,f,pt(t)):a!=null?Uu(e,f,pt(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+pt(p):e.removeAttribute("name")}function Xf(e,t,a,n,i,o,f,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Tl(e);return}a=a!=null?""+pt(a):"",t=t!=null?""+pt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Tl(e)}function Uu(e,t,a){t==="number"&&Qr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _l(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+pt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qf(e,t,a){if(t!=null&&(t=""+pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+pt(a):""}function Vf(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(be(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=pt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Tl(e)}function Ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Kg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zf(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Kg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Kf(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Zf(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&Zf(e,o,t[o])}function Lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $g=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vr(e){return Jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qa(){}var Bu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Cl=null;function $f(e){var t=st(e);if(t&&(e=t.stateNode)){var a=e[ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ia(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ie]||null;if(!i)throw Error(u(90));Nu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Xr(n)}break e;case"textarea":Qf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&_l(e,!!a.multiple,t,!1)}}}var qu=!1;function Jf(e,t,a){if(qu)return e(t,a);qu=!0;try{var n=e(t);return n}finally{if(qu=!1,(Dl!==null||Cl!==null)&&(Co(),Dl&&(t=Dl,e=Cl,Cl=Dl=null,$f(t),e)))for(t=0;t<e.length;t++)$f(e[t])}}function zi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ie]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=!1;if(Va)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Yu=!1}var yn=null,Gu=null,Zr=null;function kf(){if(Zr)return Zr;var e,t=Gu,a=t.length,n,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===i[o-n];n++);return Zr=i.slice(e,1<n?1-n:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function Ff(){return!1}function Xt(e){function t(a,n,i,o,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$r:Ff,this.isPropagationStopped=Ff,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jr=Xt(Pn),ji=x({},Pn,{view:0,detail:0}),kg=Xt(ji),Xu,Qu,Ti,kr=x({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(Xu=e.screenX-Ti.screenX,Qu=e.screenY-Ti.screenY):Qu=Xu=0,Ti=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Wf=Xt(kr),Fg=x({},kr,{dataTransfer:0}),Wg=Xt(Fg),Pg=x({},ji,{relatedTarget:0}),Vu=Xt(Pg),Ig=x({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=Xt(Ig),tv=x({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),av=Xt(tv),nv=x({},Pn,{data:0}),Pf=Xt(nv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rv[e])?!!t[e]:!1}function Zu(){return ov}var uv=x({},ji,{key:function(e){if(e.key){var t=lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=Xt(uv),cv=x({},kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Xt(cv),fv=x({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),dv=Xt(fv),mv=x({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Xt(mv),pv=x({},kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=Xt(pv),vv=x({},Pn,{newState:0,oldState:0}),yv=Xt(vv),xv=[9,13,27,32],Ku=Va&&"CompositionEvent"in window,_i=null;Va&&"documentMode"in document&&(_i=document.documentMode);var bv=Va&&"TextEvent"in window&&!_i,ed=Va&&(!Ku||_i&&8<_i&&11>=_i),td=" ",ad=!1;function nd(e,t){switch(e){case"keyup":return xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ml=!1;function Sv(e,t){switch(e){case"compositionend":return ld(t);case"keypress":return t.which!==32?null:(ad=!0,td);case"textInput":return e=t.data,e===td&&ad?null:e;default:return null}}function wv(e,t){if(Ml)return e==="compositionend"||!Ku&&nd(e,t)?(e=kf(),Zr=Gu=yn=null,Ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ev[e.type]:t==="textarea"}function rd(e,t,a,n){Dl?Cl?Cl.push(n):Cl=[n]:Dl=n,t=qo(t,"onChange"),0<t.length&&(a=new Jr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Oi=null,Di=null;function Av(e){Xh(e,0)}function Fr(e){var t=He(e);if(Xr(t))return e}function od(e,t){if(e==="change")return t}var ud=!1;if(Va){var $u;if(Va){var Ju="oninput"in document;if(!Ju){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Ju=typeof sd.oninput=="function"}$u=Ju}else $u=!1;ud=$u&&(!document.documentMode||9<document.documentMode)}function cd(){Oi&&(Oi.detachEvent("onpropertychange",fd),Di=Oi=null)}function fd(e){if(e.propertyName==="value"&&Fr(Di)){var t=[];rd(t,Di,e,Hu(e)),Jf(Av,t)}}function zv(e,t,a){e==="focusin"?(cd(),Oi=t,Di=a,Oi.attachEvent("onpropertychange",fd)):e==="focusout"&&cd()}function Rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(Di)}function jv(e,t){if(e==="click")return Fr(t)}function Tv(e,t){if(e==="input"||e==="change")return Fr(t)}function _v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:_v;function Ci(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Si.call(t,i)||!Jt(e[i],t[i]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var a=dd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dd(a)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ov=Va&&"documentMode"in document&&11>=document.documentMode,Nl=null,Fu=null,Mi=null,Wu=!1;function gd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wu||Nl==null||Nl!==Qr(n)||(n=Nl,"selectionStart"in n&&ku(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mi&&Ci(Mi,n)||(Mi=n,n=qo(Fu,"onSelect"),0<n.length&&(t=new Jr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Nl)))}function In(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ul={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},Pu={},vd={};Va&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ul.animationend.animation,delete Ul.animationiteration.animation,delete Ul.animationstart.animation),"TransitionEvent"in window||delete Ul.transitionend.transition);function el(e){if(Pu[e])return Pu[e];if(!Ul[e])return e;var t=Ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in vd)return Pu[e]=t[a];return e}var yd=el("animationend"),xd=el("animationiteration"),bd=el("animationstart"),Dv=el("transitionrun"),Cv=el("transitionstart"),Mv=el("transitioncancel"),Sd=el("transitionend"),wd=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function wa(e,t){wd.set(e,t),Rt(t,[e])}var Wr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ra=[],Ll=0,es=0;function Pr(){for(var e=Ll,t=es=Ll=0;t<e;){var a=ra[t];ra[t++]=null;var n=ra[t];ra[t++]=null;var i=ra[t];ra[t++]=null;var o=ra[t];if(ra[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}o!==0&&Ed(a,i,o)}}function Ir(e,t,a,n){ra[Ll++]=e,ra[Ll++]=t,ra[Ll++]=a,ra[Ll++]=n,es|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ts(e,t,a,n){return Ir(e,t,a,n),eo(e)}function tl(e,t){return Ir(e,null,null,t),eo(e)}function Ed(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-Nt(a),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),o):null}function eo(e){if(50<tr)throw tr=0,cc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bl={};function Nv(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,n){return new Nv(e,t,a,n)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ad(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function to(e,t,a,n,i,o){var f=0;if(n=e,typeof e=="function")as(e)&&(f=1);else if(typeof e=="string")f=qy(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=kt(31,a,t,i),e.elementType=fe,e.lanes=o,e;case G:return al(a.children,i,o,t);case V:f=8,i|=24;break;case F:return e=kt(12,a,t,i|2),e.elementType=F,e.lanes=o,e;case ne:return e=kt(13,a,t,i),e.elementType=ne,e.lanes=o,e;case te:return e=kt(19,a,t,i),e.elementType=te,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:f=10;break e;case P:f=9;break e;case $:f=11;break e;case Q:f=14;break e;case A:f=16,n=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=kt(f,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function al(e,t,a,n){return e=kt(7,e,n,t),e.lanes=a,e}function ns(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function zd(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function ls(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Rd=new WeakMap;function oa(e,t){if(typeof e=="object"&&e!==null){var a=Rd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ur(t)},Rd.set(e,t),t)}return{value:e,source:t,stack:Ur(t)}}var Hl=[],ql=0,ao=null,Ni=0,ua=[],sa=0,xn=null,Ma=1,Na="";function Ka(e,t){Hl[ql++]=Ni,Hl[ql++]=ao,ao=e,Ni=t}function jd(e,t,a){ua[sa++]=Ma,ua[sa++]=Na,ua[sa++]=xn,xn=e;var n=Ma;e=Na;var i=32-Nt(n)-1;n&=~(1<<i),a+=1;var o=32-Nt(t)+i;if(30<o){var f=i-i%5;o=(n&(1<<f)-1).toString(32),n>>=f,i-=f,Ma=1<<32-Nt(t)+i|a<<i|n,Na=o+e}else Ma=1<<o|a<<i|n,Na=e}function is(e){e.return!==null&&(Ka(e,1),jd(e,1,0))}function rs(e){for(;e===ao;)ao=Hl[--ql],Hl[ql]=null,Ni=Hl[--ql],Hl[ql]=null;for(;e===xn;)xn=ua[--sa],ua[sa]=null,Na=ua[--sa],ua[sa]=null,Ma=ua[--sa],ua[sa]=null}function Td(e,t){ua[sa++]=Ma,ua[sa++]=Na,ua[sa++]=xn,Ma=t.id,Na=t.overflow,xn=e}var Ot=null,it=null,Be=!1,bn=null,ca=!1,os=Error(u(519));function Sn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ui(oa(t,e)),os}function _d(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ee]=e,t[ie]=n,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<nr.length;a++)Ne(nr[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Xf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Vf(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Kh(t.textContent,a)?(n.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),n.onScroll!=null&&Ne("scroll",t),n.onScrollEnd!=null&&Ne("scrollend",t),n.onClick!=null&&(t.onclick=Qa),t=!0):t=!1,t||Sn(e,!0)}function Od(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:Ot=Ot.return}}function Yl(e){if(e!==Ot)return!1;if(!Be)return Od(e),Be=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zc(e.type,e.memoizedProps)),a=!a),a&&it&&Sn(e),Od(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));it=tp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));it=tp(e)}else t===27?(t=it,Un(e.type)?(e=Oc,Oc=null,it=e):it=t):it=Ot?da(e.stateNode.nextSibling):null;return!0}function nl(){it=Ot=null,Be=!1}function us(){var e=bn;return e!==null&&(Kt===null?Kt=e:Kt.push.apply(Kt,e),bn=null),e}function Ui(e){bn===null?bn=[e]:bn.push(e)}var ss=E(null),ll=null,$a=null;function wn(e,t,a){W(ss,t._currentValue),t._currentValue=a}function Ja(e){e._currentValue=ss.current,q(ss)}function cs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function fs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var f=i.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=i;for(var b=0;b<t.length;b++)if(p.context===t[b]){o.lanes|=a,p=o.alternate,p!==null&&(p.lanes|=a),cs(o.return,a,e),n||(f=null);break e}o=p.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=a,o=f.alternate,o!==null&&(o.lanes|=a),cs(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Gl(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var p=i.type;Jt(i.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(i===Ae.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ur):e=[ur])}i=i.return}e!==null&&fs(t,e,a,n),t.flags|=262144}function no(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){ll=e,$a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dt(e){return Dd(ll,e)}function lo(e,t){return ll===null&&il(e),Dd(e,t)}function Dd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$a===null){if(e===null)throw Error(u(308));$a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $a=$a.next=t;return a}var Uv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lv=l.unstable_scheduleCallback,Bv=l.unstable_NormalPriority,gt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new Uv,data:new Map,refCount:0}}function Li(e){e.refCount--,e.refCount===0&&Lv(Bv,function(){e.controller.abort()})}var Bi=null,ms=0,Xl=0,Ql=null;function Hv(e,t){if(Bi===null){var a=Bi=[];ms=0,Xl=gc(),Ql={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ms++,t.then(Cd,Cd),t}function Cd(){if(--ms===0&&Bi!==null){Ql!==null&&(Ql.status="fulfilled");var e=Bi;Bi=null,Xl=0,Ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qv(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Md=N.S;N.S=function(e,t){gh=Ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hv(e,t),Md!==null&&Md(e,t)};var rl=E(null);function hs(){var e=rl.current;return e!==null?e:Ie.pooledCache}function io(e,t){t===null?W(rl,rl.current):W(rl,t.pool)}function Nd(){var e=hs();return e===null?null:{parent:gt._currentValue,pool:e}}var Vl=Error(u(460)),ps=Error(u(474)),ro=Error(u(542)),oo={then:function(){}};function Ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ld(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qa,Qa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e;default:if(typeof t.status=="string")t.then(Qa,Qa);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e}throw ul=t,Vl}}function ol(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ul=a,Vl):a}}var ul=null;function Bd(){if(ul===null)throw Error(u(459));var e=ul;return ul=null,e}function Hd(e){if(e===Vl||e===ro)throw Error(u(483))}var Zl=null,Hi=0;function uo(e){var t=Hi;return Hi+=1,Zl===null&&(Zl=[]),Ld(Zl,e,t)}function qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function so(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qd(e){function t(j,z){if(e){var O=j.deletions;O===null?(j.deletions=[z],j.flags|=16):O.push(z)}}function a(j,z){if(!e)return null;for(;z!==null;)t(j,z),z=z.sibling;return null}function n(j){for(var z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function i(j,z){return j=Za(j,z),j.index=0,j.sibling=null,j}function o(j,z,O){return j.index=O,e?(O=j.alternate,O!==null?(O=O.index,O<z?(j.flags|=67108866,z):O):(j.flags|=67108866,z)):(j.flags|=1048576,z)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function p(j,z,O,X){return z===null||z.tag!==6?(z=ns(O,j.mode,X),z.return=j,z):(z=i(z,O),z.return=j,z)}function b(j,z,O,X){var ve=O.type;return ve===G?Y(j,z,O.props.children,X,O.key):z!==null&&(z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===A&&ol(ve)===z.type)?(z=i(z,O.props),qi(z,O),z.return=j,z):(z=to(O.type,O.key,O.props,null,j.mode,X),qi(z,O),z.return=j,z)}function D(j,z,O,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==O.containerInfo||z.stateNode.implementation!==O.implementation?(z=ls(O,j.mode,X),z.return=j,z):(z=i(z,O.children||[]),z.return=j,z)}function Y(j,z,O,X,ve){return z===null||z.tag!==7?(z=al(O,j.mode,X,ve),z.return=j,z):(z=i(z,O),z.return=j,z)}function Z(j,z,O){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=ns(""+z,j.mode,O),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _:return O=to(z.type,z.key,z.props,null,j.mode,O),qi(O,z),O.return=j,O;case H:return z=ls(z,j.mode,O),z.return=j,z;case A:return z=ol(z),Z(j,z,O)}if(be(z)||de(z))return z=al(z,j.mode,O,null),z.return=j,z;if(typeof z.then=="function")return Z(j,uo(z),O);if(z.$$typeof===k)return Z(j,lo(j,z),O);so(j,z)}return null}function C(j,z,O,X){var ve=z!==null?z.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ve!==null?null:p(j,z,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return O.key===ve?b(j,z,O,X):null;case H:return O.key===ve?D(j,z,O,X):null;case A:return O=ol(O),C(j,z,O,X)}if(be(O)||de(O))return ve!==null?null:Y(j,z,O,X,null);if(typeof O.then=="function")return C(j,z,uo(O),X);if(O.$$typeof===k)return C(j,z,lo(j,O),X);so(j,O)}return null}function L(j,z,O,X,ve){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return j=j.get(O)||null,p(z,j,""+X,ve);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return j=j.get(X.key===null?O:X.key)||null,b(z,j,X,ve);case H:return j=j.get(X.key===null?O:X.key)||null,D(z,j,X,ve);case A:return X=ol(X),L(j,z,O,X,ve)}if(be(X)||de(X))return j=j.get(O)||null,Y(z,j,X,ve,null);if(typeof X.then=="function")return L(j,z,O,uo(X),ve);if(X.$$typeof===k)return L(j,z,O,lo(z,X),ve);so(z,X)}return null}function se(j,z,O,X){for(var ve=null,Qe=null,ce=z,je=z=0,Le=null;ce!==null&&je<O.length;je++){ce.index>je?(Le=ce,ce=null):Le=ce.sibling;var Ve=C(j,ce,O[je],X);if(Ve===null){ce===null&&(ce=Le);break}e&&ce&&Ve.alternate===null&&t(j,ce),z=o(Ve,z,je),Qe===null?ve=Ve:Qe.sibling=Ve,Qe=Ve,ce=Le}if(je===O.length)return a(j,ce),Be&&Ka(j,je),ve;if(ce===null){for(;je<O.length;je++)ce=Z(j,O[je],X),ce!==null&&(z=o(ce,z,je),Qe===null?ve=ce:Qe.sibling=ce,Qe=ce);return Be&&Ka(j,je),ve}for(ce=n(ce);je<O.length;je++)Le=L(ce,j,je,O[je],X),Le!==null&&(e&&Le.alternate!==null&&ce.delete(Le.key===null?je:Le.key),z=o(Le,z,je),Qe===null?ve=Le:Qe.sibling=Le,Qe=Le);return e&&ce.forEach(function(Yn){return t(j,Yn)}),Be&&Ka(j,je),ve}function Se(j,z,O,X){if(O==null)throw Error(u(151));for(var ve=null,Qe=null,ce=z,je=z=0,Le=null,Ve=O.next();ce!==null&&!Ve.done;je++,Ve=O.next()){ce.index>je?(Le=ce,ce=null):Le=ce.sibling;var Yn=C(j,ce,Ve.value,X);if(Yn===null){ce===null&&(ce=Le);break}e&&ce&&Yn.alternate===null&&t(j,ce),z=o(Yn,z,je),Qe===null?ve=Yn:Qe.sibling=Yn,Qe=Yn,ce=Le}if(Ve.done)return a(j,ce),Be&&Ka(j,je),ve;if(ce===null){for(;!Ve.done;je++,Ve=O.next())Ve=Z(j,Ve.value,X),Ve!==null&&(z=o(Ve,z,je),Qe===null?ve=Ve:Qe.sibling=Ve,Qe=Ve);return Be&&Ka(j,je),ve}for(ce=n(ce);!Ve.done;je++,Ve=O.next())Ve=L(ce,j,je,Ve.value,X),Ve!==null&&(e&&Ve.alternate!==null&&ce.delete(Ve.key===null?je:Ve.key),z=o(Ve,z,je),Qe===null?ve=Ve:Qe.sibling=Ve,Qe=Ve);return e&&ce.forEach(function(Fy){return t(j,Fy)}),Be&&Ka(j,je),ve}function We(j,z,O,X){if(typeof O=="object"&&O!==null&&O.type===G&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case _:e:{for(var ve=O.key;z!==null;){if(z.key===ve){if(ve=O.type,ve===G){if(z.tag===7){a(j,z.sibling),X=i(z,O.props.children),X.return=j,j=X;break e}}else if(z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===A&&ol(ve)===z.type){a(j,z.sibling),X=i(z,O.props),qi(X,O),X.return=j,j=X;break e}a(j,z);break}else t(j,z);z=z.sibling}O.type===G?(X=al(O.props.children,j.mode,X,O.key),X.return=j,j=X):(X=to(O.type,O.key,O.props,null,j.mode,X),qi(X,O),X.return=j,j=X)}return f(j);case H:e:{for(ve=O.key;z!==null;){if(z.key===ve)if(z.tag===4&&z.stateNode.containerInfo===O.containerInfo&&z.stateNode.implementation===O.implementation){a(j,z.sibling),X=i(z,O.children||[]),X.return=j,j=X;break e}else{a(j,z);break}else t(j,z);z=z.sibling}X=ls(O,j.mode,X),X.return=j,j=X}return f(j);case A:return O=ol(O),We(j,z,O,X)}if(be(O))return se(j,z,O,X);if(de(O)){if(ve=de(O),typeof ve!="function")throw Error(u(150));return O=ve.call(O),Se(j,z,O,X)}if(typeof O.then=="function")return We(j,z,uo(O),X);if(O.$$typeof===k)return We(j,z,lo(j,O),X);so(j,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,z!==null&&z.tag===6?(a(j,z.sibling),X=i(z,O),X.return=j,j=X):(a(j,z),X=ns(O,j.mode,X),X.return=j,j=X),f(j)):a(j,z)}return function(j,z,O,X){try{Hi=0;var ve=We(j,z,O,X);return Zl=null,ve}catch(ce){if(ce===Vl||ce===ro)throw ce;var Qe=kt(29,ce,null,j.mode);return Qe.lanes=X,Qe.return=j,Qe}}}var sl=qd(!0),Yd=qd(!1),En=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function An(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ze&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=eo(e),Ed(e,null,a),t}return Ir(e,n,t,a),eo(e)}function Yi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gr(e,a)}}function ys(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=f:o=o.next=f,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xs=!1;function Gi(){if(xs){var e=Ql;if(e!==null)throw e}}function Xi(e,t,a,n){xs=!1;var i=e.updateQueue;En=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var b=p,D=b.next;b.next=null,f===null?o=D:f.next=D,f=b;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,p=Y.lastBaseUpdate,p!==f&&(p===null?Y.firstBaseUpdate=D:p.next=D,Y.lastBaseUpdate=b))}if(o!==null){var Z=i.baseState;f=0,Y=D=b=null,p=o;do{var C=p.lane&-536870913,L=C!==p.lane;if(L?(Ue&C)===C:(n&C)===C){C!==0&&C===Xl&&(xs=!0),Y!==null&&(Y=Y.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var se=e,Se=p;C=t;var We=a;switch(Se.tag){case 1:if(se=Se.payload,typeof se=="function"){Z=se.call(We,Z,C);break e}Z=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=Se.payload,C=typeof se=="function"?se.call(We,Z,C):se,C==null)break e;Z=x({},Z,C);break e;case 2:En=!0}}C=p.callback,C!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[C]:L.push(C))}else L={lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},Y===null?(D=Y=L,b=Z):Y=Y.next=L,f|=C;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;L=p,p=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);Y===null&&(b=Z),i.baseState=b,i.firstBaseUpdate=D,i.lastBaseUpdate=Y,o===null&&(i.shared.lanes=0),On|=f,e.lanes=f,e.memoizedState=Z}}function Gd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Xd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gd(a[e],t)}var Kl=E(null),co=E(0);function Qd(e,t){e=nn,W(co,e),W(Kl,t),nn=e|t.baseLanes}function bs(){W(co,nn),W(Kl,Kl.current)}function Ss(){nn=co.current,q(Kl),q(co)}var Ft=E(null),fa=null;function Rn(e){var t=e.alternate;W(mt,mt.current&1),W(Ft,e),fa===null&&(t===null||Kl.current!==null||t.memoizedState!==null)&&(fa=e)}function ws(e){W(mt,mt.current),W(Ft,e),fa===null&&(fa=e)}function Vd(e){e.tag===22?(W(mt,mt.current),W(Ft,e),fa===null&&(fa=e)):jn()}function jn(){W(mt,mt.current),W(Ft,Ft.current)}function Wt(e){q(Ft),fa===e&&(fa=null),q(mt)}var mt=E(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tc(a)||_c(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=0,Re=null,ke=null,vt=null,mo=!1,$l=!1,cl=!1,ho=0,Qi=0,Jl=null,Yv=0;function ct(){throw Error(u(321))}function Es(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Jt(e[a],t[a]))return!1;return!0}function As(e,t,a,n,i,o){return ka=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?jm:qs,cl=!1,o=a(n,i),cl=!1,$l&&(o=Kd(t,a,n,i)),Zd(e),o}function Zd(e){N.H=Ki;var t=ke!==null&&ke.next!==null;if(ka=0,vt=ke=Re=null,mo=!1,Qi=0,Jl=null,t)throw Error(u(300));e===null||yt||(e=e.dependencies,e!==null&&no(e)&&(yt=!0))}function Kd(e,t,a,n){Re=e;var i=0;do{if($l&&(Jl=null),Qi=0,$l=!1,25<=i)throw Error(u(301));if(i+=1,vt=ke=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Tm,o=t(a,n)}while($l);return o}function Gv(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Vi(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(Re.flags|=1024),t}function zs(){var e=ho!==0;return ho=0,e}function Rs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function js(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}ka=0,vt=ke=Re=null,$l=!1,Qi=ho=0,Jl=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Re.memoizedState=vt=e:vt=vt.next=e,vt}function ht(){if(ke===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=vt===null?Re.memoizedState:vt.next;if(t!==null)vt=t,ke=e;else{if(e===null)throw Re.alternate===null?Error(u(467)):Error(u(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},vt===null?Re.memoizedState=vt=e:vt=vt.next=e}return vt}function po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(e){var t=Qi;return Qi+=1,Jl===null&&(Jl=[]),e=Ld(Jl,e,t),t=Re,(vt===null?t.memoizedState:vt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?jm:qs),e}function go(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vi(e);if(e.$$typeof===k)return Dt(e)}throw Error(u(438,String(e)))}function Ts(e){var t=null,a=Re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=po(),Re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=we;return t.index++,a}function Fa(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=ht();return _s(t,ke,e)}function _s(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var p=f=null,b=null,D=t,Y=!1;do{var Z=D.lane&-536870913;if(Z!==D.lane?(Ue&Z)===Z:(ka&Z)===Z){var C=D.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Z===Xl&&(Y=!0);else if((ka&C)===C){D=D.next,C===Xl&&(Y=!0);continue}else Z={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},b===null?(p=b=Z,f=o):b=b.next=Z,Re.lanes|=C,On|=C;Z=D.action,cl&&a(o,Z),o=D.hasEagerState?D.eagerState:a(o,Z)}else C={lane:Z,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},b===null?(p=b=C,f=o):b=b.next=C,Re.lanes|=Z,On|=Z;D=D.next}while(D!==null&&D!==t);if(b===null?f=o:b.next=p,!Jt(o,e.memoizedState)&&(yt=!0,Y&&(a=Ql,a!==null)))throw a;e.memoizedState=o,e.baseState=f,e.baseQueue=b,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Os(e){var t=ht(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do o=e(o,f.action),f=f.next;while(f!==i);Jt(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function $d(e,t,a){var n=Re,i=ht(),o=Be;if(o){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!Jt((ke||i).memoizedState,a);if(f&&(i.memoizedState=a,yt=!0),i=i.queue,Ms(Fd.bind(null,n,i,e),[e]),i.getSnapshot!==t||f||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,kl(9,{destroy:void 0},kd.bind(null,n,i,a,t),null),Ie===null)throw Error(u(349));o||(ka&127)!==0||Jd(n,t,a)}return a}function Jd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Re.updateQueue,t===null?(t=po(),Re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function kd(e,t,a,n){t.value=a,t.getSnapshot=n,Wd(t)&&Pd(e)}function Fd(e,t,a){return a(function(){Wd(t)&&Pd(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Jt(e,a)}catch{return!0}}function Pd(e){var t=tl(e,2);t!==null&&$t(t,e,2)}function Ds(e){var t=Yt();if(typeof e=="function"){var a=e;if(e=a(),cl){zt(!0);try{a()}finally{zt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},t}function Id(e,t,a,n){return e.baseState=a,_s(e,ke,typeof n=="function"?n:Fa)}function Xv(e,t,a,n,i){if(bo(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};N.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,em(t,o)):(o.next=a.next,t.pending=a.next=o)}}function em(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=N.T,f={};N.T=f;try{var p=a(i,n),b=N.S;b!==null&&b(f,p),tm(e,t,p)}catch(D){Cs(e,t,D)}finally{o!==null&&f.types!==null&&(o.types=f.types),N.T=o}}else try{o=a(i,n),tm(e,t,o)}catch(D){Cs(e,t,D)}}function tm(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){am(e,t,n)},function(n){return Cs(e,t,n)}):am(e,t,a)}function am(e,t,a){t.status="fulfilled",t.value=a,nm(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,em(e,a)))}function Cs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,nm(t),t=t.next;while(t!==n)}e.action=null}function nm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lm(e,t){return t}function im(e,t){if(Be){var a=Ie.formState;if(a!==null){e:{var n=Re;if(Be){if(it){t:{for(var i=it,o=ca;i.nodeType!==8;){if(!o){i=null;break t}if(i=da(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){it=da(i.nextSibling),n=i.data==="F!";break e}}Sn(n)}n=!1}n&&(t=a[0])}}return a=Yt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:t},a.queue=n,a=Am.bind(null,Re,n),n.dispatch=a,n=Ds(!1),o=Hs.bind(null,Re,!1,n.queue),n=Yt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Xv.bind(null,Re,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function rm(e){var t=ht();return om(t,ke,e)}function om(e,t,a){if(t=_s(e,t,lm)[0],e=vo(Fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Vi(t)}catch(f){throw f===Vl?ro:f}else n=t;t=ht();var i=t.queue,o=i.dispatch;return a!==t.memoizedState&&(Re.flags|=2048,kl(9,{destroy:void 0},Qv.bind(null,i,a),null)),[n,o,e]}function Qv(e,t){e.action=t}function um(e){var t=ht(),a=ke;if(a!==null)return om(t,a,e);ht(),t=t.memoizedState,a=ht();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function kl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Re.updateQueue,t===null&&(t=po(),Re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function sm(){return ht().memoizedState}function yo(e,t,a,n){var i=Yt();Re.flags|=e,i.memoizedState=kl(1|t,{destroy:void 0},a,n===void 0?null:n)}function xo(e,t,a,n){var i=ht();n=n===void 0?null:n;var o=i.memoizedState.inst;ke!==null&&n!==null&&Es(n,ke.memoizedState.deps)?i.memoizedState=kl(t,o,a,n):(Re.flags|=e,i.memoizedState=kl(1|t,o,a,n))}function cm(e,t){yo(8390656,8,e,t)}function Ms(e,t){xo(2048,8,e,t)}function Vv(e){Re.flags|=4;var t=Re.updateQueue;if(t===null)t=po(),Re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fm(e){var t=ht().memoizedState;return Vv({ref:t,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function dm(e,t){return xo(4,2,e,t)}function mm(e,t){return xo(4,4,e,t)}function hm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pm(e,t,a){a=a!=null?a.concat([e]):null,xo(4,4,hm.bind(null,t,e),a)}function Ns(){}function gm(e,t){var a=ht();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Es(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function vm(e,t){var a=ht();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Es(t,n[1]))return n[0];if(n=e(),cl){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[n,t],n}function Us(e,t,a){return a===void 0||(ka&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yh(),Re.lanes|=e,On|=e,a)}function ym(e,t,a,n){return Jt(a,t)?a:Kl.current!==null?(e=Us(e,a,n),Jt(e,t)||(yt=!0),e):(ka&42)===0||(ka&1073741824)!==0&&(Ue&261930)===0?(yt=!0,e.memoizedState=a):(e=yh(),Re.lanes|=e,On|=e,t)}function xm(e,t,a,n,i){var o=J.p;J.p=o!==0&&8>o?o:8;var f=N.T,p={};N.T=p,Hs(e,!1,t,a);try{var b=i(),D=N.S;if(D!==null&&D(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var Y=qv(b,n);Zi(e,t,Y,ea(e))}else Zi(e,t,n,ea(e))}catch(Z){Zi(e,t,{then:function(){},status:"rejected",reason:Z},ea())}finally{J.p=o,f!==null&&p.types!==null&&(f.types=p.types),N.T=f}}function Zv(){}function Ls(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=bm(e).queue;xm(e,i,t,oe,a===null?Zv:function(){return Sm(e),a(n)})}function bm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sm(e){var t=bm(e);t.next===null&&(t=e.alternate.memoizedState),Zi(e,t.next.queue,{},ea())}function Bs(){return Dt(ur)}function wm(){return ht().memoizedState}function Em(){return ht().memoizedState}function Kv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ea();e=An(a);var n=zn(t,e,a);n!==null&&($t(n,t,a),Yi(n,t,a)),t={cache:ds()},e.payload=t;return}t=t.return}}function $v(e,t,a){var n=ea();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bo(e)?zm(t,a):(a=ts(e,t,a,n),a!==null&&($t(a,e,n),Rm(a,t,n)))}function Am(e,t,a){var n=ea();Zi(e,t,a,n)}function Zi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bo(e))zm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,p=o(f,a);if(i.hasEagerState=!0,i.eagerState=p,Jt(p,f))return Ir(e,t,i,0),Ie===null&&Pr(),!1}catch{}if(a=ts(e,t,i,n),a!==null)return $t(a,e,n),Rm(a,t,n),!0}return!1}function Hs(e,t,a,n){if(n={lane:2,revertLane:gc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bo(e)){if(t)throw Error(u(479))}else t=ts(e,a,n,2),t!==null&&$t(t,e,2)}function bo(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function zm(e,t){$l=mo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Rm(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gr(e,a)}}var Ki={readContext:Dt,use:go,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};Ki.useEffectEvent=ct;var jm={readContext:Dt,use:go,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:cm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yo(4194308,4,hm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){yo(4,2,e,t)},useMemo:function(e,t){var a=Yt();t=t===void 0?null:t;var n=e();if(cl){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Yt();if(a!==void 0){var i=a(t);if(cl){zt(!0);try{a(t)}finally{zt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=$v.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ds(e);var t=e.queue,a=Am.bind(null,Re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Yt();return Us(a,e,t)},useTransition:function(){var e=Ds(!1);return e=xm.bind(null,Re,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Re,i=Yt();if(Be){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ie===null)throw Error(u(349));(Ue&127)!==0||Jd(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,cm(Fd.bind(null,n,o,e),[e]),n.flags|=2048,kl(9,{destroy:void 0},kd.bind(null,n,o,a,t),null),a},useId:function(){var e=Yt(),t=Ie.identifierPrefix;if(Be){var a=Na,n=Ma;a=(n&~(1<<32-Nt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ho++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Yv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:im,useActionState:im,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hs.bind(null,Re,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ts,useCacheRefresh:function(){return Yt().memoizedState=Kv.bind(null,Re)},useEffectEvent:function(e){var t=Yt(),a={impl:e};return t.memoizedState=a,function(){if((Ze&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},qs={readContext:Dt,use:go,useCallback:gm,useContext:Dt,useEffect:Ms,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:mm,useMemo:vm,useReducer:vo,useRef:sm,useState:function(){return vo(Fa)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=ht();return ym(a,ke.memoizedState,e,t)},useTransition:function(){var e=vo(Fa)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:$d,useId:wm,useHostTransitionStatus:Bs,useFormState:rm,useActionState:rm,useOptimistic:function(e,t){var a=ht();return Id(a,ke,e,t)},useMemoCache:Ts,useCacheRefresh:Em};qs.useEffectEvent=fm;var Tm={readContext:Dt,use:go,useCallback:gm,useContext:Dt,useEffect:Ms,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:mm,useMemo:vm,useReducer:Os,useRef:sm,useState:function(){return Os(Fa)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=ht();return ke===null?Us(a,e,t):ym(a,ke.memoizedState,e,t)},useTransition:function(){var e=Os(Fa)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:$d,useId:wm,useHostTransitionStatus:Bs,useFormState:um,useActionState:um,useOptimistic:function(e,t){var a=ht();return ke!==null?Id(a,ke,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ts,useCacheRefresh:Em};Tm.useEffectEvent=fm;function Ys(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ea(),i=An(n);i.payload=t,a!=null&&(i.callback=a),t=zn(e,i,n),t!==null&&($t(t,e,n),Yi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ea(),i=An(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=zn(e,i,n),t!==null&&($t(t,e,n),Yi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ea(),n=An(a);n.tag=2,t!=null&&(n.callback=t),t=zn(e,n,a),t!==null&&($t(t,e,a),Yi(t,e,a))}};function _m(e,t,a,n,i,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,f):t.prototype&&t.prototype.isPureReactComponent?!Ci(a,n)||!Ci(i,o):!0}function Om(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function fl(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Dm(e){Wr(e)}function Cm(e){console.error(e)}function Mm(e){Wr(e)}function So(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Nm(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Xs(e,t,a){return a=An(a),a.tag=3,a.payload={element:null},a.callback=function(){So(e,t)},a}function Um(e){return e=An(e),e.tag=3,e}function Lm(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){Nm(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Nm(t,a,n),typeof i!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function Jv(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Gl(t,a,i,!0),a=Ft.current,a!==null){switch(a.tag){case 31:case 13:return fa===null?Mo():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===oo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),mc(e,n,i)),!1;case 22:return a.flags|=65536,n===oo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),mc(e,n,i)),!1}throw Error(u(435,a.tag))}return mc(e,n,i),Mo(),!1}if(Be)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==os&&(e=Error(u(422),{cause:n}),Ui(oa(e,a)))):(n!==os&&(t=Error(u(423),{cause:n}),Ui(oa(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=oa(n,a),i=Xs(e.stateNode,n,i),ys(e,i),ft!==4&&(ft=2)),!1;var o=Error(u(520),{cause:n});if(o=oa(o,a),er===null?er=[o]:er.push(o),ft!==4&&(ft=2),t===null)return!0;n=oa(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Xs(a.stateNode,n,e),ys(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Dn===null||!Dn.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Um(i),Lm(i,e,a,n),ys(a,i),!1}a=a.return}while(a!==null);return!1}var Qs=Error(u(461)),yt=!1;function Ct(e,t,a,n){t.child=e===null?Yd(t,null,a,n):sl(t,e.child,a,n)}function Bm(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var f={};for(var p in n)p!=="ref"&&(f[p]=n[p])}else f=n;return il(t),n=As(e,t,a,f,o,i),p=zs(),e!==null&&!yt?(Rs(e,t,i),Wa(e,t,i)):(Be&&p&&is(t),t.flags|=1,Ct(e,t,n,i),t.child)}function Hm(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!as(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,qm(e,t,o,n,i)):(e=to(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ws(e,i)){var f=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ci,a(f,n)&&e.ref===t.ref)return Wa(e,t,i)}return t.flags|=1,e=Za(o,n),e.ref=t.ref,e.return=t,t.child=e}function qm(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(Ci(o,n)&&e.ref===t.ref)if(yt=!1,t.pendingProps=n=o,Ws(e,i))(e.flags&131072)!==0&&(yt=!0);else return t.lanes=e.lanes,Wa(e,t,i)}return Vs(e,t,a,n,i)}function Ym(e,t,a,n){var i=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~o}else n=0,t.child=null;return Gm(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&io(t,o!==null?o.cachePool:null),o!==null?Qd(t,o):bs(),Vd(t);else return n=t.lanes=536870912,Gm(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(io(t,o.cachePool),Qd(t,o),jn(),t.memoizedState=null):(e!==null&&io(t,null),bs(),jn());return Ct(e,t,i,a),t.child}function $i(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gm(e,t,a,n,i){var o=hs();return o=o===null?null:{parent:gt._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&io(t,null),bs(),Vd(t),e!==null&&Gl(e,t,n,!0),t.childLanes=i,null}function wo(e,t){return t=Ao({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xm(e,t,a){return sl(t,e.child,null,a),e=wo(t,t.pendingProps),e.flags|=2,Wt(t),t.memoizedState=null,e}function kv(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Be){if(n.mode==="hidden")return e=wo(t,n),t.lanes=536870912,$i(null,e);if(ws(t),(e=it)?(e=ep(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Ma,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=zd(e),a.return=t,t.child=a,Ot=t,it=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return wo(t,n)}var o=e.memoizedState;if(o!==null){var f=o.dehydrated;if(ws(t),i)if(t.flags&256)t.flags&=-257,t=Xm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(yt||Gl(e,t,a,!1),i=(a&e.childLanes)!==0,yt||i){if(n=Ie,n!==null&&(f=S(n,a),f!==0&&f!==o.retryLane))throw o.retryLane=f,tl(e,f),$t(n,e,f),Qs;Mo(),t=Xm(e,t,a)}else e=o.treeContext,it=da(f.nextSibling),Ot=t,Be=!0,bn=null,ca=!1,e!==null&&Td(t,e),t=wo(t,n),t.flags|=4096;return t}return e=Za(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Eo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vs(e,t,a,n,i){return il(t),a=As(e,t,a,n,void 0,i),n=zs(),e!==null&&!yt?(Rs(e,t,i),Wa(e,t,i)):(Be&&n&&is(t),t.flags|=1,Ct(e,t,a,i),t.child)}function Qm(e,t,a,n,i,o){return il(t),t.updateQueue=null,a=Kd(t,n,a,i),Zd(e),n=zs(),e!==null&&!yt?(Rs(e,t,o),Wa(e,t,o)):(Be&&n&&is(t),t.flags|=1,Ct(e,t,a,o),t.child)}function Vm(e,t,a,n,i){if(il(t),t.stateNode===null){var o=Bl,f=a.contextType;typeof f=="object"&&f!==null&&(o=Dt(f)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Gs,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},gs(t),f=a.contextType,o.context=typeof f=="object"&&f!==null?Dt(f):Bl,o.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Ys(t,a,f,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&Gs.enqueueReplaceState(o,o.state,null),Xi(t,n,o,i),Gi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,b=fl(a,p);o.props=b;var D=o.context,Y=a.contextType;f=Bl,typeof Y=="object"&&Y!==null&&(f=Dt(Y));var Z=a.getDerivedStateFromProps;Y=typeof Z=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,Y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||D!==f)&&Om(t,o,n,f),En=!1;var C=t.memoizedState;o.state=C,Xi(t,n,o,i),Gi(),D=t.memoizedState,p||C!==D||En?(typeof Z=="function"&&(Ys(t,a,Z,n),D=t.memoizedState),(b=En||_m(t,a,b,n,C,D,f))?(Y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=D),o.props=n,o.state=D,o.context=f,n=b):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,vs(e,t),f=t.memoizedProps,Y=fl(a,f),o.props=Y,Z=t.pendingProps,C=o.context,D=a.contextType,b=Bl,typeof D=="object"&&D!==null&&(b=Dt(D)),p=a.getDerivedStateFromProps,(D=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==Z||C!==b)&&Om(t,o,n,b),En=!1,C=t.memoizedState,o.state=C,Xi(t,n,o,i),Gi();var L=t.memoizedState;f!==Z||C!==L||En||e!==null&&e.dependencies!==null&&no(e.dependencies)?(typeof p=="function"&&(Ys(t,a,p,n),L=t.memoizedState),(Y=En||_m(t,a,Y,n,C,L,b)||e!==null&&e.dependencies!==null&&no(e.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,L,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,L,b)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),o.props=n,o.state=L,o.context=b,n=Y):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Eo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=sl(t,e.child,null,i),t.child=sl(t,null,a,i)):Ct(e,t,a,i),t.memoizedState=o.state,e=t.child):e=Wa(e,t,i),e}function Zm(e,t,a,n){return nl(),t.flags|=256,Ct(e,t,a,n),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ks(e){return{baseLanes:e,cachePool:Nd()}}function $s(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=It),e}function Km(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(mt.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(i?Rn(t):jn(),(e=it)?(e=ep(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Ma,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=zd(e),a.return=t,t.child=a,Ot=t,it=null)):e=null,e===null)throw Sn(t);return _c(e)?t.lanes=32:t.lanes=536870912,null}var p=n.children;return n=n.fallback,i?(jn(),i=t.mode,p=Ao({mode:"hidden",children:p},i),n=al(n,i,a,null),p.return=t,n.return=t,p.sibling=n,t.child=p,n=t.child,n.memoizedState=Ks(a),n.childLanes=$s(e,f,a),t.memoizedState=Zs,$i(null,n)):(Rn(t),Js(t,p))}var b=e.memoizedState;if(b!==null&&(p=b.dehydrated,p!==null)){if(o)t.flags&256?(Rn(t),t.flags&=-257,t=ks(e,t,a)):t.memoizedState!==null?(jn(),t.child=e.child,t.flags|=128,t=null):(jn(),p=n.fallback,i=t.mode,n=Ao({mode:"visible",children:n.children},i),p=al(p,i,a,null),p.flags|=2,n.return=t,p.return=t,n.sibling=p,t.child=n,sl(t,e.child,null,a),n=t.child,n.memoizedState=Ks(a),n.childLanes=$s(e,f,a),t.memoizedState=Zs,t=$i(null,n));else if(Rn(t),_c(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var D=f.dgst;f=D,n=Error(u(419)),n.stack="",n.digest=f,Ui({value:n,source:null,stack:null}),t=ks(e,t,a)}else if(yt||Gl(e,t,a,!1),f=(a&e.childLanes)!==0,yt||f){if(f=Ie,f!==null&&(n=S(f,a),n!==0&&n!==b.retryLane))throw b.retryLane=n,tl(e,n),$t(f,e,n),Qs;Tc(p)||Mo(),t=ks(e,t,a)}else Tc(p)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,it=da(p.nextSibling),Ot=t,Be=!0,bn=null,ca=!1,e!==null&&Td(t,e),t=Js(t,n.children),t.flags|=4096);return t}return i?(jn(),p=n.fallback,i=t.mode,b=e.child,D=b.sibling,n=Za(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,D!==null?p=Za(D,p):(p=al(p,i,a,null),p.flags|=2),p.return=t,n.return=t,n.sibling=p,t.child=n,$i(null,n),n=t.child,p=e.child.memoizedState,p===null?p=Ks(a):(i=p.cachePool,i!==null?(b=gt._currentValue,i=i.parent!==b?{parent:b,pool:b}:i):i=Nd(),p={baseLanes:p.baseLanes|a,cachePool:i}),n.memoizedState=p,n.childLanes=$s(e,f,a),t.memoizedState=Zs,$i(e.child,n)):(Rn(t),a=e.child,e=a.sibling,a=Za(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Js(e,t){return t=Ao({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ao(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function ks(e,t,a){return sl(t,e.child,null,a),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $m(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cs(e.return,t,a)}function Fs(e,t,a,n,i,o){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:o}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=n,f.tail=a,f.tailMode=i,f.treeForkCount=o)}function Jm(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;n=n.children;var f=mt.current,p=(f&2)!==0;if(p?(f=f&1|2,t.flags|=128):f&=1,W(mt,f),Ct(e,t,n,a),n=Be?Ni:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,t);else if(e.tag===19)$m(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&fo(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Fs(t,!1,i,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Fs(t,!0,a,null,o,n);break;case"together":Fs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Gl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ws(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&no(e)))}function Fv(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),wn(t,gt,e.memoizedState.cache),nl();break;case 27:case 5:_t(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ws(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Rn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Km(e,t,a):(Rn(t),e=Wa(e,t,a),e!==null?e.sibling:null);Rn(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Gl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Jm(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(mt,mt.current),n)break;return null;case 22:return t.lanes=0,Ym(e,t,a,t.pendingProps);case 24:wn(t,gt,e.memoizedState.cache)}return Wa(e,t,a)}function km(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)yt=!0;else{if(!Ws(e,a)&&(t.flags&128)===0)return yt=!1,Fv(e,t,a);yt=(e.flags&131072)!==0}else yt=!1,Be&&(t.flags&1048576)!==0&&jd(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=ol(t.elementType),t.type=e,typeof e=="function")as(e)?(n=fl(e,n),t.tag=1,t=Vm(null,t,e,n,a)):(t.tag=0,t=Vs(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===$){t.tag=11,t=Bm(null,t,e,n,a);break e}else if(i===Q){t.tag=14,t=Hm(null,t,e,n,a);break e}}throw t=Te(e)||e,Error(u(306,t,""))}}return t;case 0:return Vs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=fl(n,t.pendingProps),Vm(e,t,n,i,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,vs(e,t),Xi(t,n,null,a);var f=t.memoizedState;if(n=f.cache,wn(t,gt,n),n!==o.cache&&fs(t,[gt],a,!0),Gi(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Zm(e,t,n,a);break e}else if(n!==i){i=oa(Error(u(424)),t),Ui(i),t=Zm(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,it=da(e.firstChild),Ot=t,Be=!0,bn=null,ca=!0,a=Yd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(nl(),n===i){t=Wa(e,t,a);break e}Ct(e,t,n,a)}t=t.child}return t;case 26:return Eo(e,t),e===null?(a=rp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Be||(a=t.type,e=t.pendingProps,n=Yo(ye.current).createElement(a),n[ee]=t,n[ie]=e,Mt(n,a,e),tt(n),t.stateNode=n):t.memoizedState=rp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _t(t),e===null&&Be&&(n=t.stateNode=np(t.type,t.pendingProps,ye.current),Ot=t,ca=!0,i=it,Un(t.type)?(Oc=i,it=da(n.firstChild)):it=i),Ct(e,t,t.pendingProps.children,a),Eo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((i=n=it)&&(n=Ry(n,t.type,t.pendingProps,ca),n!==null?(t.stateNode=n,Ot=t,it=da(n.firstChild),ca=!1,i=!0):i=!1),i||Sn(t)),_t(t),i=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,n=o.children,zc(i,o)?n=null:f!==null&&zc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=As(e,t,Gv,null,null,a),ur._currentValue=i),Eo(e,t),Ct(e,t,n,a),t.child;case 6:return e===null&&Be&&((e=a=it)&&(a=jy(a,t.pendingProps,ca),a!==null?(t.stateNode=a,Ot=t,it=null,e=!0):e=!1),e||Sn(t)),null;case 13:return Km(e,t,a);case 4:return at(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=sl(t,null,n,a):Ct(e,t,n,a),t.child;case 11:return Bm(e,t,t.type,t.pendingProps,a);case 7:return Ct(e,t,t.pendingProps,a),t.child;case 8:return Ct(e,t,t.pendingProps.children,a),t.child;case 12:return Ct(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,wn(t,t.type,n.value),Ct(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,il(t),i=Dt(i),n=n(i),t.flags|=1,Ct(e,t,n,a),t.child;case 14:return Hm(e,t,t.type,t.pendingProps,a);case 15:return qm(e,t,t.type,t.pendingProps,a);case 19:return Jm(e,t,a);case 31:return kv(e,t,a);case 22:return Ym(e,t,a,t.pendingProps);case 24:return il(t),n=Dt(gt),e===null?(i=hs(),i===null&&(i=Ie,o=ds(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},gs(t),wn(t,gt,i)):((e.lanes&a)!==0&&(vs(e,t),Xi(t,null,null,a),Gi()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wn(t,gt,n)):(n=o.cache,wn(t,gt,n),n!==i.cache&&fs(t,[gt],a,!0))),Ct(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Pa(e){e.flags|=4}function Ps(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wh())e.flags|=8192;else throw ul=oo,ps}else e.flags&=-16777217}function Fm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fp(t))if(wh())e.flags|=8192;else throw ul=oo,ps}function zo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ai():536870912,e.lanes|=t,Il|=t)}function Ji(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Wv(e,t,a){var n=t.pendingProps;switch(rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return rt(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ja(gt),Ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yl(t)?Pa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,us())),rt(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Pa(t),o!==null?(rt(t),Fm(t,o)):(rt(t),Ps(t,i,null,n,a))):o?o!==e.memoizedState?(Pa(t),rt(t),Fm(t,o)):(rt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pa(t),rt(t),Ps(t,i,e,n,a)),null;case 27:if(Ta(t),a=ye.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return rt(t),null}e=ae.current,Yl(t)?_d(t):(e=np(i,n,a),t.stateNode=e,Pa(t))}return rt(t),null;case 5:if(Ta(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return rt(t),null}if(o=ae.current,Yl(t))_d(t);else{var f=Yo(ye.current);switch(o){case 1:o=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=f.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?f.createElement("select",{is:n.is}):f.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?f.createElement(i,{is:n.is}):f.createElement(i)}}o[ee]=t,o[ie]=n;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)o.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=o;e:switch(Mt(o,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pa(t)}}return rt(t),Ps(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Pa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=ye.current,Yl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Ot,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ee]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Kh(e.nodeValue,a)),e||Sn(t,!0)}else e=Yo(e).createTextNode(n),e[ee]=t,t.stateNode=e}return rt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Yl(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ee]=t}else nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),e=!1}else a=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Wt(t),t):(Wt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return rt(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[ee]=t}else nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),i=!1}else i=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Wt(t),t):(Wt(t),null)}return Wt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zo(t,t.updateQueue),rt(t),null);case 4:return Ye(),e===null&&bc(t.stateNode.containerInfo),rt(t),null;case 10:return Ja(t.type),rt(t),null;case 19:if(q(mt),n=t.memoizedState,n===null)return rt(t),null;if(i=(t.flags&128)!==0,o=n.rendering,o===null)if(i)Ji(n,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Ji(n,!1),e=o.updateQueue,t.updateQueue=e,zo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ad(a,e),a=a.sibling;return W(mt,mt.current&1|2),Be&&Ka(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ht()>Oo&&(t.flags|=128,i=!0,Ji(n,!1),t.lanes=4194304)}else{if(!i)if(e=fo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zo(t,e),Ji(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!Be)return rt(t),null}else 2*Ht()-n.renderingStartTime>Oo&&a!==536870912&&(t.flags|=128,i=!0,Ji(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ht(),e.sibling=null,a=mt.current,W(mt,i?a&1|2:a&1),Be&&Ka(t,n.treeForkCount),e):(rt(t),null);case 22:case 23:return Wt(t),Ss(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),a=t.updateQueue,a!==null&&zo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&q(rl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ja(gt),rt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Pv(e,t){switch(rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(gt),Ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ta(t),null;case 31:if(t.memoizedState!==null){if(Wt(t),t.alternate===null)throw Error(u(340));nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(mt),null;case 4:return Ye(),null;case 10:return Ja(t.type),null;case 22:case 23:return Wt(t),Ss(),e!==null&&q(rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ja(gt),null;case 25:return null;default:return null}}function Wm(e,t){switch(rs(t),t.tag){case 3:Ja(gt),Ye();break;case 26:case 27:case 5:Ta(t);break;case 4:Ye();break;case 31:t.memoizedState!==null&&Wt(t);break;case 13:Wt(t);break;case 19:q(mt);break;case 10:Ja(t.type);break;case 22:case 23:Wt(t),Ss(),e!==null&&q(rl);break;case 24:Ja(gt)}}function ki(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,f=a.inst;n=o(),f.destroy=n}a=a.next}while(a!==i)}}catch(p){Je(t,t.return,p)}}function Tn(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var f=n.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,i=t;var b=a,D=p;try{D()}catch(Y){Je(i,b,Y)}}}n=n.next}while(n!==o)}}catch(Y){Je(t,t.return,Y)}}function Pm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xd(t,a)}catch(n){Je(e,e.return,n)}}}function Im(e,t,a){a.props=fl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Je(e,t,n)}}function Fi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Je(e,t,i)}}function Ua(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Je(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Je(e,t,i)}else a.current=null}function eh(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Je(e,e.return,i)}}function Is(e,t,a){try{var n=e.stateNode;by(n,e.type,a,t),n[ie]=t}catch(i){Je(e,e.return,i)}}function th(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qa));else if(n!==4&&(n===27&&Un(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tc(e,t,a),e=e.sibling;e!==null;)tc(e,t,a),e=e.sibling}function Ro(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Un(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ro(e,t,a),e=e.sibling;e!==null;)Ro(e,t,a),e=e.sibling}function ah(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Mt(t,n,a),t[ee]=e,t[ie]=a}catch(o){Je(e,e.return,o)}}var Ia=!1,xt=!1,ac=!1,nh=typeof WeakSet=="function"?WeakSet:Set,jt=null;function Iv(e,t){if(e=e.containerInfo,Ec=$o,e=pd(e),ku(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var f=0,p=-1,b=-1,D=0,Y=0,Z=e,C=null;t:for(;;){for(var L;Z!==a||i!==0&&Z.nodeType!==3||(p=f+i),Z!==o||n!==0&&Z.nodeType!==3||(b=f+n),Z.nodeType===3&&(f+=Z.nodeValue.length),(L=Z.firstChild)!==null;)C=Z,Z=L;for(;;){if(Z===e)break t;if(C===a&&++D===i&&(p=f),C===o&&++Y===n&&(b=f),(L=Z.nextSibling)!==null)break;Z=C,C=Z.parentNode}Z=L}a=p===-1||b===-1?null:{start:p,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},$o=!1,jt=t;jt!==null;)if(t=jt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,jt=e;else for(;jt!==null;){switch(t=jt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var se=fl(a.type,i);e=n.getSnapshotBeforeUpdate(se,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(Se){Je(a,a.return,Se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,jt=e;break}jt=t.return}}function lh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:tn(e,a),n&4&&ki(5,a);break;case 1:if(tn(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Je(a,a.return,f)}else{var i=fl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Je(a,a.return,f)}}n&64&&Pm(a),n&512&&Fi(a,a.return);break;case 3:if(tn(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xd(e,t)}catch(f){Je(a,a.return,f)}}break;case 27:t===null&&n&4&&ah(a);case 26:case 5:tn(e,a),t===null&&n&4&&eh(a),n&512&&Fi(a,a.return);break;case 12:tn(e,a);break;case 31:tn(e,a),n&4&&oh(e,a);break;case 13:tn(e,a),n&4&&uh(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=uy.bind(null,a),Ty(e,a))));break;case 22:if(n=a.memoizedState!==null||Ia,!n){t=t!==null&&t.memoizedState!==null||xt,i=Ia;var o=xt;Ia=n,(xt=t)&&!o?an(e,a,(a.subtreeFlags&8772)!==0):tn(e,a),Ia=i,xt=o}break;case 30:break;default:tn(e,a)}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ut=null,Qt=!1;function en(e,t,a){for(a=a.child;a!==null;)rh(e,t,a),a=a.sibling}function rh(e,t,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Ga,a)}catch{}switch(a.tag){case 26:xt||Ua(a,t),en(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xt||Ua(a,t);var n=ut,i=Qt;Un(a.type)&&(ut=a.stateNode,Qt=!1),en(e,t,a),ir(a.stateNode),ut=n,Qt=i;break;case 5:xt||Ua(a,t);case 6:if(n=ut,i=Qt,ut=null,en(e,t,a),ut=n,Qt=i,ut!==null)if(Qt)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(o){Je(a,t,o)}else try{ut.removeChild(a.stateNode)}catch(o){Je(a,t,o)}break;case 18:ut!==null&&(Qt?(e=ut,Ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),oi(e)):Ph(ut,a.stateNode));break;case 4:n=ut,i=Qt,ut=a.stateNode.containerInfo,Qt=!0,en(e,t,a),ut=n,Qt=i;break;case 0:case 11:case 14:case 15:Tn(2,a,t),xt||Tn(4,a,t),en(e,t,a);break;case 1:xt||(Ua(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Im(a,t,n)),en(e,t,a);break;case 21:en(e,t,a);break;case 22:xt=(n=xt)||a.memoizedState!==null,en(e,t,a),xt=n;break;default:en(e,t,a)}}function oh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oi(e)}catch(a){Je(t,t.return,a)}}}function uh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oi(e)}catch(a){Je(t,t.return,a)}}function ey(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nh),t;default:throw Error(u(435,e.tag))}}function jo(e,t){var a=ey(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=sy.bind(null,e,n);n.then(i,i)}})}function Vt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Un(p.type)){ut=p.stateNode,Qt=!1;break e}break;case 5:ut=p.stateNode,Qt=!1;break e;case 3:case 4:ut=p.stateNode.containerInfo,Qt=!0;break e}p=p.return}if(ut===null)throw Error(u(160));rh(o,f,i),ut=null,Qt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}var Ea=null;function sh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vt(t,e),Zt(e),n&4&&(Tn(3,e,e.return),ki(3,e),Tn(5,e,e.return));break;case 1:Vt(t,e),Zt(e),n&512&&(xt||a===null||Ua(a,a.return)),n&64&&Ia&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ea;if(Vt(t,e),Zt(e),n&512&&(xt||a===null||Ua(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Oe]||o[ee]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Mt(o,n,a),o[ee]=e,tt(o),n=o;break e;case"link":var f=sp("link","href",i).get(n+(a.href||""));if(f){for(var p=0;p<f.length;p++)if(o=f[p],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(p,1);break t}}o=i.createElement(n),Mt(o,n,a),i.head.appendChild(o);break;case"meta":if(f=sp("meta","content",i).get(n+(a.content||""))){for(p=0;p<f.length;p++)if(o=f[p],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(p,1);break t}}o=i.createElement(n),Mt(o,n,a),i.head.appendChild(o);break;default:throw Error(u(468,n))}o[ee]=e,tt(o),n=o}e.stateNode=n}else cp(i,e.type,e.stateNode);else e.stateNode=up(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?cp(i,e.type,e.stateNode):up(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Is(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vt(t,e),Zt(e),n&512&&(xt||a===null||Ua(a,a.return)),a!==null&&n&4&&Is(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vt(t,e),Zt(e),n&512&&(xt||a===null||Ua(a,a.return)),e.flags&32){i=e.stateNode;try{Ol(i,"")}catch(se){Je(e,e.return,se)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Is(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ac=!0);break;case 6:if(Vt(t,e),Zt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(se){Je(e,e.return,se)}}break;case 3:if(Qo=null,i=Ea,Ea=Go(t.containerInfo),Vt(t,e),Ea=i,Zt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(se){Je(e,e.return,se)}ac&&(ac=!1,ch(e));break;case 4:n=Ea,Ea=Go(e.stateNode.containerInfo),Vt(t,e),Zt(e),Ea=n;break;case 12:Vt(t,e),Zt(e);break;case 31:Vt(t,e),Zt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,jo(e,n)));break;case 13:Vt(t,e),Zt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_o=Ht()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,jo(e,n)));break;case 22:i=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,D=Ia,Y=xt;if(Ia=D||i,xt=Y||b,Vt(t,e),xt=Y,Ia=D,Zt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||b||Ia||xt||dl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(o=b.stateNode,i)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=b.stateNode;var Z=b.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;p.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(se){Je(b,b.return,se)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(se){Je(b,b.return,se)}}}else if(t.tag===18){if(a===null){b=t;try{var L=b.stateNode;i?Ih(L,!0):Ih(b.stateNode,!1)}catch(se){Je(b,b.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,jo(e,a))));break;case 19:Vt(t,e),Zt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,jo(e,n)));break;case 30:break;case 21:break;default:Vt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(th(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,o=ec(e);Ro(e,o,i);break;case 5:var f=a.stateNode;a.flags&32&&(Ol(f,""),a.flags&=-33);var p=ec(e);Ro(e,p,f);break;case 3:case 4:var b=a.stateNode.containerInfo,D=ec(e);tc(e,D,b);break;default:throw Error(u(161))}}catch(Y){Je(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ch(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ch(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lh(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tn(4,t,t.return),dl(t);break;case 1:Ua(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Im(t,t.return,a),dl(t);break;case 27:ir(t.stateNode);case 26:case 5:Ua(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function an(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:an(i,o,a),ki(4,o);break;case 1:if(an(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(D){Je(n,n.return,D)}if(n=o,i=n.updateQueue,i!==null){var p=n.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Gd(b[i],p)}catch(D){Je(n,n.return,D)}}a&&f&64&&Pm(o),Fi(o,o.return);break;case 27:ah(o);case 26:case 5:an(i,o,a),a&&n===null&&f&4&&eh(o),Fi(o,o.return);break;case 12:an(i,o,a);break;case 31:an(i,o,a),a&&f&4&&oh(i,o);break;case 13:an(i,o,a),a&&f&4&&uh(i,o);break;case 22:o.memoizedState===null&&an(i,o,a),Fi(o,o.return);break;case 30:break;default:an(i,o,a)}t=t.sibling}}function nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Li(a))}function lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Li(e))}function Aa(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fh(e,t,a,n),t=t.sibling}function fh(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Aa(e,t,a,n),i&2048&&ki(9,t);break;case 1:Aa(e,t,a,n);break;case 3:Aa(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Li(e)));break;case 12:if(i&2048){Aa(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,p=o.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Je(t,t.return,b)}}else Aa(e,t,a,n);break;case 31:Aa(e,t,a,n);break;case 13:Aa(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?Aa(e,t,a,n):Wi(e,t):o._visibility&2?Aa(e,t,a,n):(o._visibility|=2,Fl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&nc(f,t);break;case 24:Aa(e,t,a,n),i&2048&&lc(t.alternate,t);break;default:Aa(e,t,a,n)}}function Fl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,f=t,p=a,b=n,D=f.flags;switch(f.tag){case 0:case 11:case 15:Fl(o,f,p,b,i),ki(8,f);break;case 23:break;case 22:var Y=f.stateNode;f.memoizedState!==null?Y._visibility&2?Fl(o,f,p,b,i):Wi(o,f):(Y._visibility|=2,Fl(o,f,p,b,i)),i&&D&2048&&nc(f.alternate,f);break;case 24:Fl(o,f,p,b,i),i&&D&2048&&lc(f.alternate,f);break;default:Fl(o,f,p,b,i)}t=t.sibling}}function Wi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Wi(a,n),i&2048&&nc(n.alternate,n);break;case 24:Wi(a,n),i&2048&&lc(n.alternate,n);break;default:Wi(a,n)}t=t.sibling}}var Pi=8192;function Wl(e,t,a){if(e.subtreeFlags&Pi)for(e=e.child;e!==null;)dh(e,t,a),e=e.sibling}function dh(e,t,a){switch(e.tag){case 26:Wl(e,t,a),e.flags&Pi&&e.memoizedState!==null&&Yy(a,Ea,e.memoizedState,e.memoizedProps);break;case 5:Wl(e,t,a);break;case 3:case 4:var n=Ea;Ea=Go(e.stateNode.containerInfo),Wl(e,t,a),Ea=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Pi,Pi=16777216,Wl(e,t,a),Pi=n):Wl(e,t,a));break;default:Wl(e,t,a)}}function mh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];jt=n,ph(n,e)}mh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hh(e),e=e.sibling}function hh(e){switch(e.tag){case 0:case 11:case 15:Ii(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:Ii(e);break;case 12:Ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,To(e)):Ii(e);break;default:Ii(e)}}function To(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];jt=n,ph(n,e)}mh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tn(8,t,t.return),To(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,To(t));break;default:To(t)}e=e.sibling}}function ph(e,t){for(;jt!==null;){var a=jt;switch(a.tag){case 0:case 11:case 15:Tn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Li(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,jt=n;else e:for(a=e;jt!==null;){n=jt;var i=n.sibling,o=n.return;if(ih(n),n===a){jt=null;break e}if(i!==null){i.return=o,jt=i;break e}jt=o}}}var ty={getCacheForType:function(e){var t=Dt(gt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Dt(gt).controller.signal}},ay=typeof WeakMap=="function"?WeakMap:Map,Ze=0,Ie=null,Me=null,Ue=0,$e=0,Pt=null,_n=!1,Pl=!1,ic=!1,nn=0,ft=0,On=0,ml=0,rc=0,It=0,Il=0,er=null,Kt=null,oc=!1,_o=0,gh=0,Oo=1/0,Do=null,Dn=null,Et=0,Cn=null,ei=null,ln=0,uc=0,sc=null,vh=null,tr=0,cc=null;function ea(){return(Ze&2)!==0&&Ue!==0?Ue&-Ue:N.T!==null?gc():K()}function yh(){if(It===0)if((Ue&536870912)===0||Be){var e=Xa;Xa<<=1,(Xa&3932160)===0&&(Xa=262144),It=e}else It=536870912;return e=Ft.current,e!==null&&(e.flags|=32),It}function $t(e,t,a){(e===Ie&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(ti(e,0),Mn(e,Ue,It,!1)),Oa(e,a),((Ze&2)===0||e!==Ie)&&(e===Ie&&((Ze&2)===0&&(ml|=a),ft===4&&Mn(e,Ue,It,!1)),La(e))}function xh(e,t,a){if((Ze&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||pn(e,t),i=n?iy(e,t):dc(e,t,!0),o=n;do{if(i===0){Pl&&!n&&Mn(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!ny(a)){i=dc(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;i=er;var b=p.current.memoizedState.isDehydrated;if(b&&(ti(p,f).flags|=256),f=dc(p,f,!1),f!==2){if(ic&&!b){p.errorRecoveryDisabledLanes|=o,ml|=o,i=4;break e}o=Kt,Kt=i,o!==null&&(Kt===null?Kt=o:Kt.push.apply(Kt,o))}i=f}if(o=!1,i!==2)continue}}if(i===1){ti(e,0),Mn(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Mn(n,t,It,!_n);break e;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=_o+300-Ht(),10<i)){if(Mn(n,t,It,!_n),zl(n,0,!0)!==0)break e;ln=t,n.timeoutHandle=Fh(bh.bind(null,n,a,Kt,Do,oc,t,It,ml,Il,_n,o,"Throttled",-0,0),i);break e}bh(n,a,Kt,Do,oc,t,It,ml,Il,_n,o,null,-0,0)}}break}while(!0);La(e)}function bh(e,t,a,n,i,o,f,p,b,D,Y,Z,C,L){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qa},dh(t,o,Z);var se=(o&62914560)===o?_o-Ht():(o&4194048)===o?gh-Ht():0;if(se=Gy(Z,se),se!==null){ln=o,e.cancelPendingCommit=se(Th.bind(null,e,t,o,a,n,i,f,p,b,Y,Z,null,C,L)),Mn(e,o,f,!D);return}}Th(e,t,o,a,n,i,f,p,b)}function ny(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!Jt(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t,a,n){t&=~rc,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-Nt(i),f=1<<o;n[o]=-1,i&=~f}a!==0&&Yr(e,a,t)}function Co(){return(Ze&6)===0?(ar(0),!1):!0}function fc(){if(Me!==null){if($e===0)var e=Me.return;else e=Me,$a=ll=null,js(e),Zl=null,Hi=0,e=Me;for(;e!==null;)Wm(e.alternate,e),e=e.return;Me=null}}function ti(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ey(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ln=0,fc(),Ie=e,Me=a=Za(e.current,null),Ue=t,$e=0,Pt=null,_n=!1,Pl=pn(e,t),ic=!1,Il=It=rc=ml=On=ft=0,Kt=er=null,oc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Nt(n),o=1<<i;t|=e[i],n&=~o}return nn=t,Pr(),a}function Sh(e,t){Re=null,N.H=Ki,t===Vl||t===ro?(t=Bd(),$e=3):t===ps?(t=Bd(),$e=4):$e=t===Qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pt=t,Me===null&&(ft=1,So(e,oa(t,e.current)))}function wh(){var e=Ft.current;return e===null?!0:(Ue&4194048)===Ue?fa===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===fa:!1}function Eh(){var e=N.H;return N.H=Ki,e===null?Ki:e}function Ah(){var e=N.A;return N.A=ty,e}function Mo(){ft=4,_n||(Ue&4194048)!==Ue&&Ft.current!==null||(Pl=!0),(On&134217727)===0&&(ml&134217727)===0||Ie===null||Mn(Ie,Ue,It,!1)}function dc(e,t,a){var n=Ze;Ze|=2;var i=Eh(),o=Ah();(Ie!==e||Ue!==t)&&(Do=null,ti(e,t)),t=!1;var f=ft;e:do try{if($e!==0&&Me!==null){var p=Me,b=Pt;switch($e){case 8:fc(),f=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var D=$e;if($e=0,Pt=null,ai(e,p,b,D),a&&Pl){f=0;break e}break;default:D=$e,$e=0,Pt=null,ai(e,p,b,D)}}ly(),f=ft;break}catch(Y){Sh(e,Y)}while(!0);return t&&e.shellSuspendCounter++,$a=ll=null,Ze=n,N.H=i,N.A=o,Me===null&&(Ie=null,Ue=0,Pr()),f}function ly(){for(;Me!==null;)zh(Me)}function iy(e,t){var a=Ze;Ze|=2;var n=Eh(),i=Ah();Ie!==e||Ue!==t?(Do=null,Oo=Ht()+500,ti(e,t)):Pl=pn(e,t);e:do try{if($e!==0&&Me!==null){t=Me;var o=Pt;t:switch($e){case 1:$e=0,Pt=null,ai(e,t,o,1);break;case 2:case 9:if(Ud(o)){$e=0,Pt=null,Rh(t);break}t=function(){$e!==2&&$e!==9||Ie!==e||($e=7),La(e)},o.then(t,t);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:Ud(o)?($e=0,Pt=null,Rh(t)):($e=0,Pt=null,ai(e,t,o,7));break;case 5:var f=null;switch(Me.tag){case 26:f=Me.memoizedState;case 5:case 27:var p=Me;if(f?fp(f):p.stateNode.complete){$e=0,Pt=null;var b=p.sibling;if(b!==null)Me=b;else{var D=p.return;D!==null?(Me=D,No(D)):Me=null}break t}}$e=0,Pt=null,ai(e,t,o,5);break;case 6:$e=0,Pt=null,ai(e,t,o,6);break;case 8:fc(),ft=6;break e;default:throw Error(u(462))}}ry();break}catch(Y){Sh(e,Y)}while(!0);return $a=ll=null,N.H=n,N.A=i,Ze=a,Me!==null?0:(Ie=null,Ue=0,Pr(),ft)}function ry(){for(;Me!==null&&!_u();)zh(Me)}function zh(e){var t=km(e.alternate,e,nn);e.memoizedProps=e.pendingProps,t===null?No(e):Me=t}function Rh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qm(a,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Qm(a,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:js(t);default:Wm(a,t),t=Me=Ad(t,nn),t=km(a,t,nn)}e.memoizedProps=e.pendingProps,t===null?No(e):Me=t}function ai(e,t,a,n){$a=ll=null,js(t),Zl=null,Hi=0;var i=t.return;try{if(Jv(e,i,t,a,Ue)){ft=1,So(e,oa(a,e.current)),Me=null;return}}catch(o){if(i!==null)throw Me=i,o;ft=1,So(e,oa(a,e.current)),Me=null;return}t.flags&32768?(Be||n===1?e=!0:Pl||(Ue&536870912)!==0?e=!1:(_n=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),jh(t,e)):No(t)}function No(e){var t=e;do{if((t.flags&32768)!==0){jh(t,_n);return}e=t.return;var a=Wv(t.alternate,t,nn);if(a!==null){Me=a;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ft===0&&(ft=5)}function jh(e,t){do{var a=Pv(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);ft=6,Me=null}function Th(e,t,a,n,i,o,f,p,b){e.cancelPendingCommit=null;do Uo();while(Et!==0);if((Ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=es,qr(e,a,o,f,p,b),e===Ie&&(Me=Ie=null,Ue=0),ei=t,Cn=e,ln=a,uc=o,sc=i,vh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cy(hn,function(){return Mh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,i=J.p,J.p=2,f=Ze,Ze|=4;try{Iv(e,t,a)}finally{Ze=f,J.p=i,N.T=n}}Et=1,_h(),Oh(),Dh()}}function _h(){if(Et===1){Et=0;var e=Cn,t=ei,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=J.p;J.p=2;var i=Ze;Ze|=4;try{sh(t,e);var o=Ac,f=pd(e.containerInfo),p=o.focusedElem,b=o.selectionRange;if(f!==p&&p&&p.ownerDocument&&hd(p.ownerDocument.documentElement,p)){if(b!==null&&ku(p)){var D=b.start,Y=b.end;if(Y===void 0&&(Y=D),"selectionStart"in p)p.selectionStart=D,p.selectionEnd=Math.min(Y,p.value.length);else{var Z=p.ownerDocument||document,C=Z&&Z.defaultView||window;if(C.getSelection){var L=C.getSelection(),se=p.textContent.length,Se=Math.min(b.start,se),We=b.end===void 0?Se:Math.min(b.end,se);!L.extend&&Se>We&&(f=We,We=Se,Se=f);var j=md(p,Se),z=md(p,We);if(j&&z&&(L.rangeCount!==1||L.anchorNode!==j.node||L.anchorOffset!==j.offset||L.focusNode!==z.node||L.focusOffset!==z.offset)){var O=Z.createRange();O.setStart(j.node,j.offset),L.removeAllRanges(),Se>We?(L.addRange(O),L.extend(z.node,z.offset)):(O.setEnd(z.node,z.offset),L.addRange(O))}}}}for(Z=[],L=p;L=L.parentNode;)L.nodeType===1&&Z.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<Z.length;p++){var X=Z[p];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}$o=!!Ec,Ac=Ec=null}finally{Ze=i,J.p=n,N.T=a}}e.current=t,Et=2}}function Oh(){if(Et===2){Et=0;var e=Cn,t=ei,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=J.p;J.p=2;var i=Ze;Ze|=4;try{lh(e,t.alternate,t)}finally{Ze=i,J.p=n,N.T=a}}Et=3}}function Dh(){if(Et===4||Et===3){Et=0,Ou();var e=Cn,t=ei,a=ln,n=vh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Et=5:(Et=0,ei=Cn=null,Ch(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Dn=null),M(a),t=t.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Ga,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,i=J.p,J.p=2,N.T=null;try{for(var o=e.onRecoverableError,f=0;f<n.length;f++){var p=n[f];o(p.value,{componentStack:p.stack})}}finally{N.T=t,J.p=i}}(ln&3)!==0&&Uo(),La(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===cc?tr++:(tr=0,cc=e):tr=0,ar(0)}}function Ch(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Li(t)))}function Uo(){return _h(),Oh(),Dh(),Mh()}function Mh(){if(Et!==5)return!1;var e=Cn,t=uc;uc=0;var a=M(ln),n=N.T,i=J.p;try{J.p=32>a?32:a,N.T=null,a=sc,sc=null;var o=Cn,f=ln;if(Et=0,ei=Cn=null,ln=0,(Ze&6)!==0)throw Error(u(331));var p=Ze;if(Ze|=4,hh(o.current),fh(o,o.current,f,a),Ze=p,ar(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Ga,o)}catch{}return!0}finally{J.p=i,N.T=n,Ch(e,t)}}function Nh(e,t,a){t=oa(a,t),t=Xs(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(Oa(e,2),La(e))}function Je(e,t,a){if(e.tag===3)Nh(e,e,a);else for(;t!==null;){if(t.tag===3){Nh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dn===null||!Dn.has(n))){e=oa(a,e),a=Um(2),n=zn(t,a,2),n!==null&&(Lm(a,n,t,e),Oa(n,2),La(n));break}}t=t.return}}function mc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ay;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(ic=!0,i.add(a),e=oy.bind(null,e,t,a),t.then(e,e))}function oy(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Ue&a)===a&&(ft===4||ft===3&&(Ue&62914560)===Ue&&300>Ht()-_o?(Ze&2)===0&&ti(e,0):rc|=a,Il===Ue&&(Il=0)),La(e)}function Uh(e,t){t===0&&(t=Ai()),e=tl(e,t),e!==null&&(Oa(e,t),La(e))}function uy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Uh(e,a)}function sy(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Uh(e,a)}function cy(e,t){return Al(e,t)}var Lo=null,ni=null,hc=!1,Bo=!1,pc=!1,Nn=0;function La(e){e!==ni&&e.next===null&&(ni===null?Lo=ni=e:ni=ni.next=e),Bo=!0,hc||(hc=!0,dy())}function ar(e,t){if(!pc&&Bo){pc=!0;do for(var a=!1,n=Lo;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var f=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-Nt(42|e)+1)-1,o&=i&~(f&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,qh(n,o))}else o=Ue,o=zl(n,n===Ie?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||pn(n,o)||(a=!0,qh(n,o));n=n.next}while(a);pc=!1}}function fy(){Lh()}function Lh(){Bo=hc=!1;var e=0;Nn!==0&&wy()&&(e=Nn);for(var t=Ht(),a=null,n=Lo;n!==null;){var i=n.next,o=Bh(n,t);o===0?(n.next=null,a===null?Lo=i:a.next=i,i===null&&(ni=a)):(a=n,(e!==0||(o&3)!==0)&&(Bo=!0)),n=i}Et!==0&&Et!==5||ar(e),Nn!==0&&(Nn=0)}function Bh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-Nt(o),p=1<<f,b=i[f];b===-1?((p&a)===0||(p&n)!==0)&&(i[f]=Mu(p,t)):b<=t&&(e.expiredLanes|=p),o&=~p}if(t=Ie,a=Ue,a=zl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($e===2||$e===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&wi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&wi(n),M(a)){case 2:case 8:a=Ei;break;case 32:a=hn;break;case 268435456:a=la;break;default:a=hn}return n=Hh.bind(null,e),a=Al(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&wi(n),e.callbackPriority=2,e.callbackNode=null,2}function Hh(e,t){if(Et!==0&&Et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Uo()&&e.callbackNode!==a)return null;var n=Ue;return n=zl(e,e===Ie?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(xh(e,n,t),Bh(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?Hh.bind(null,e):null)}function qh(e,t){if(Uo())return null;xh(e,t,!0)}function dy(){Ay(function(){(Ze&6)!==0?Al(mn,fy):Lh()})}function gc(){if(Nn===0){var e=Xl;e===0&&(e=Jn,Jn<<=1,(Jn&261888)===0&&(Jn=256)),Nn=e}return Nn}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vr(""+e)}function Gh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function my(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=Yh((i[ie]||null).action),f=n.submitter;f&&(t=(t=f[ie]||null)?Yh(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var p=new Jr("action","action",null,n,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Nn!==0){var b=f?Gh(i,f):new FormData(i);Ls(a,{pending:!0,data:b,method:i.method,action:o},null,b)}}else typeof o=="function"&&(p.preventDefault(),b=f?Gh(i,f):new FormData(i),Ls(a,{pending:!0,data:b,method:i.method,action:o},o,b))},currentTarget:i}]})}}for(var vc=0;vc<Iu.length;vc++){var yc=Iu[vc],hy=yc.toLowerCase(),py=yc[0].toUpperCase()+yc.slice(1);wa(hy,"on"+py)}wa(yd,"onAnimationEnd"),wa(xd,"onAnimationIteration"),wa(bd,"onAnimationStart"),wa("dblclick","onDoubleClick"),wa("focusin","onFocus"),wa("focusout","onBlur"),wa(Dv,"onTransitionRun"),wa(Cv,"onTransitionStart"),wa(Mv,"onTransitionCancel"),wa(Sd,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr));function Xh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var f=n.length-1;0<=f;f--){var p=n[f],b=p.instance,D=p.currentTarget;if(p=p.listener,b!==o&&i.isPropagationStopped())break e;o=p,i.currentTarget=D;try{o(i)}catch(Y){Wr(Y)}i.currentTarget=null,o=b}else for(f=0;f<n.length;f++){if(p=n[f],b=p.instance,D=p.currentTarget,p=p.listener,b!==o&&i.isPropagationStopped())break e;o=p,i.currentTarget=D;try{o(i)}catch(Y){Wr(Y)}i.currentTarget=null,o=b}}}}function Ne(e,t){var a=t[ge];a===void 0&&(a=t[ge]=new Set);var n=e+"__bubble";a.has(n)||(Qh(t,e,2,!1),a.add(n))}function xc(e,t,a){var n=0;t&&(n|=4),Qh(a,e,n,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Ho]){e[Ho]=!0,vn.forEach(function(a){a!=="selectionchange"&&(gy.has(a)||xc(a,!1,e),xc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,xc("selectionchange",!1,t))}}function Qh(e,t,a,n){switch(yp(t)){case 2:var i=Vy;break;case 8:i=Zy;break;default:i=Uc}a=i.bind(null,t,a,e),i=void 0,!Yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Sc(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var p=n.stateNode.containerInfo;if(p===i)break;if(f===4)for(f=n.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;p!==null;){if(f=nt(p),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){n=o=f;continue e}p=p.parentNode}}n=n.return}Jf(function(){var D=o,Y=Hu(a),Z=[];e:{var C=wd.get(e);if(C!==void 0){var L=Jr,se=e;switch(e){case"keypress":if(Kr(a)===0)break e;case"keydown":case"keyup":L=sv;break;case"focusin":se="focus",L=Vu;break;case"focusout":se="blur",L=Vu;break;case"beforeblur":case"afterblur":L=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=dv;break;case yd:case xd:case bd:L=ev;break;case Sd:L=hv;break;case"scroll":case"scrollend":L=kg;break;case"wheel":L=gv;break;case"copy":case"cut":case"paste":L=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=If;break;case"toggle":case"beforetoggle":L=yv}var Se=(t&4)!==0,We=!Se&&(e==="scroll"||e==="scrollend"),j=Se?C!==null?C+"Capture":null:C;Se=[];for(var z=D,O;z!==null;){var X=z;if(O=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||O===null||j===null||(X=zi(z,j),X!=null&&Se.push(lr(z,X,O))),We)break;z=z.return}0<Se.length&&(C=new L(C,se,null,a,Y),Z.push({event:C,listeners:Se}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",C&&a!==Bu&&(se=a.relatedTarget||a.fromElement)&&(nt(se)||se[re]))break e;if((L||C)&&(C=Y.window===Y?Y:(C=Y.ownerDocument)?C.defaultView||C.parentWindow:window,L?(se=a.relatedTarget||a.toElement,L=D,se=se?nt(se):null,se!==null&&(We=d(se),Se=se.tag,se!==We||Se!==5&&Se!==27&&Se!==6)&&(se=null)):(L=null,se=D),L!==se)){if(Se=Wf,X="onMouseLeave",j="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(Se=If,X="onPointerLeave",j="onPointerEnter",z="pointer"),We=L==null?C:He(L),O=se==null?C:He(se),C=new Se(X,z+"leave",L,a,Y),C.target=We,C.relatedTarget=O,X=null,nt(Y)===D&&(Se=new Se(j,z+"enter",se,a,Y),Se.target=O,Se.relatedTarget=We,X=Se),We=X,L&&se)t:{for(Se=vy,j=L,z=se,O=0,X=j;X;X=Se(X))O++;X=0;for(var ve=z;ve;ve=Se(ve))X++;for(;0<O-X;)j=Se(j),O--;for(;0<X-O;)z=Se(z),X--;for(;O--;){if(j===z||z!==null&&j===z.alternate){Se=j;break t}j=Se(j),z=Se(z)}Se=null}else Se=null;L!==null&&Vh(Z,C,L,Se,!1),se!==null&&We!==null&&Vh(Z,We,se,Se,!0)}}e:{if(C=D?He(D):window,L=C.nodeName&&C.nodeName.toLowerCase(),L==="select"||L==="input"&&C.type==="file")var Qe=od;else if(id(C))if(ud)Qe=Tv;else{Qe=Rv;var ce=zv}else L=C.nodeName,!L||L.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Lu(D.elementType)&&(Qe=od):Qe=jv;if(Qe&&(Qe=Qe(e,D))){rd(Z,Qe,a,Y);break e}ce&&ce(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Uu(C,"number",C.value)}switch(ce=D?He(D):window,e){case"focusin":(id(ce)||ce.contentEditable==="true")&&(Nl=ce,Fu=D,Mi=null);break;case"focusout":Mi=Fu=Nl=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,gd(Z,a,Y);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":gd(Z,a,Y)}var je;if(Ku)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ml?nd(e,a)&&(Le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(ed&&a.locale!=="ko"&&(Ml||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ml&&(je=kf()):(yn=Y,Gu="value"in yn?yn.value:yn.textContent,Ml=!0)),ce=qo(D,Le),0<ce.length&&(Le=new Pf(Le,e,null,a,Y),Z.push({event:Le,listeners:ce}),je?Le.data=je:(je=ld(a),je!==null&&(Le.data=je)))),(je=bv?Sv(e,a):wv(e,a))&&(Le=qo(D,"onBeforeInput"),0<Le.length&&(ce=new Pf("onBeforeInput","beforeinput",null,a,Y),Z.push({event:ce,listeners:Le}),ce.data=je)),my(Z,e,D,a,Y)}Xh(Z,t)})}function lr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qo(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=zi(e,a),i!=null&&n.unshift(lr(e,i,o)),i=zi(e,t),i!=null&&n.push(lr(e,i,o))),e.tag===3)return n;e=e.return}return[]}function vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vh(e,t,a,n,i){for(var o=t._reactName,f=[];a!==null&&a!==n;){var p=a,b=p.alternate,D=p.stateNode;if(p=p.tag,b!==null&&b===n)break;p!==5&&p!==26&&p!==27||D===null||(b=D,i?(D=zi(a,o),D!=null&&f.unshift(lr(a,D,b))):i||(D=zi(a,o),D!=null&&f.push(lr(a,D,b)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var yy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function Zh(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(xy,"")}function Kh(e,t){return t=Zh(t),Zh(e)===t}function Fe(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ol(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ol(e,""+n);break;case"className":dt(e,"class",n);break;case"tabIndex":dt(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(e,a,n);break;case"style":Kf(e,n,o);break;case"data":if(t!=="object"){dt(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Vr(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Fe(e,t,"name",i.name,i,null),Fe(e,t,"formEncType",i.formEncType,i,null),Fe(e,t,"formMethod",i.formMethod,i,null),Fe(e,t,"formTarget",i.formTarget,i,null)):(Fe(e,t,"encType",i.encType,i,null),Fe(e,t,"method",i.method,i,null),Fe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Vr(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Qa);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Vr(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),De(e,"popover",n);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":De(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$g.get(a)||a,De(e,a,n))}}function wc(e,t,a,n,i,o){switch(a){case"style":Kf(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ol(e,n):(typeof n=="number"||typeof n=="bigint")&&Ol(e,""+n);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Qa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[ie]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):De(e,a,n)}}}function Mt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,o,f,a,null)}}i&&Fe(e,t,"srcSet",a.srcSet,a,null),n&&Fe(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var p=o=f=i=null,b=null,D=null;for(n in a)if(a.hasOwnProperty(n)){var Y=a[n];if(Y!=null)switch(n){case"name":i=Y;break;case"type":f=Y;break;case"checked":b=Y;break;case"defaultChecked":D=Y;break;case"value":o=Y;break;case"defaultValue":p=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Fe(e,t,n,Y,a,null)}}Xf(e,o,p,b,D,f,i,!1);return;case"select":Ne("invalid",e),n=f=o=null;for(i in a)if(a.hasOwnProperty(i)&&(p=a[i],p!=null))switch(i){case"value":o=p;break;case"defaultValue":f=p;break;case"multiple":n=p;default:Fe(e,t,i,p,a,null)}t=o,a=f,e.multiple=!!n,t!=null?_l(e,!!n,t,!1):a!=null&&_l(e,!!n,a,!0);return;case"textarea":Ne("invalid",e),o=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(p=a[f],p!=null))switch(f){case"value":n=p;break;case"defaultValue":i=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Fe(e,t,f,p,a,null)}Vf(e,n,i,o);return;case"option":for(b in a)a.hasOwnProperty(b)&&(n=a[b],n!=null)&&(b==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Fe(e,t,b,n,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(n=0;n<nr.length;n++)Ne(nr[n],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(n=a[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,D,n,a,null)}return;default:if(Lu(t)){for(Y in a)a.hasOwnProperty(Y)&&(n=a[Y],n!==void 0&&wc(e,t,Y,n,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(n=a[p],n!=null&&Fe(e,t,p,n,a,null))}function by(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,f=null,p=null,b=null,D=null,Y=null;for(L in a){var Z=a[L];if(a.hasOwnProperty(L)&&Z!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":b=Z;default:n.hasOwnProperty(L)||Fe(e,t,L,null,n,Z)}}for(var C in n){var L=n[C];if(Z=a[C],n.hasOwnProperty(C)&&(L!=null||Z!=null))switch(C){case"type":o=L;break;case"name":i=L;break;case"checked":D=L;break;case"defaultChecked":Y=L;break;case"value":f=L;break;case"defaultValue":p=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:L!==Z&&Fe(e,t,C,L,n,Z)}}Nu(e,f,p,b,D,Y,o,i);return;case"select":L=f=p=C=null;for(o in a)if(b=a[o],a.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":L=b;default:n.hasOwnProperty(o)||Fe(e,t,o,null,n,b)}for(i in n)if(o=n[i],b=a[i],n.hasOwnProperty(i)&&(o!=null||b!=null))switch(i){case"value":C=o;break;case"defaultValue":p=o;break;case"multiple":f=o;default:o!==b&&Fe(e,t,i,o,n,b)}t=p,a=f,n=L,C!=null?_l(e,!!a,C,!1):!!n!=!!a&&(t!=null?_l(e,!!a,t,!0):_l(e,!!a,a?[]:"",!1));return;case"textarea":L=C=null;for(p in a)if(i=a[p],a.hasOwnProperty(p)&&i!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Fe(e,t,p,null,n,i)}for(f in n)if(i=n[f],o=a[f],n.hasOwnProperty(f)&&(i!=null||o!=null))switch(f){case"value":C=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==o&&Fe(e,t,f,i,n,o)}Qf(e,C,L);return;case"option":for(var se in a)C=a[se],a.hasOwnProperty(se)&&C!=null&&!n.hasOwnProperty(se)&&(se==="selected"?e.selected=!1:Fe(e,t,se,null,n,C));for(b in n)C=n[b],L=a[b],n.hasOwnProperty(b)&&C!==L&&(C!=null||L!=null)&&(b==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":Fe(e,t,b,C,n,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)C=a[Se],a.hasOwnProperty(Se)&&C!=null&&!n.hasOwnProperty(Se)&&Fe(e,t,Se,null,n,C);for(D in n)if(C=n[D],L=a[D],n.hasOwnProperty(D)&&C!==L&&(C!=null||L!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Fe(e,t,D,C,n,L)}return;default:if(Lu(t)){for(var We in a)C=a[We],a.hasOwnProperty(We)&&C!==void 0&&!n.hasOwnProperty(We)&&wc(e,t,We,void 0,n,C);for(Y in n)C=n[Y],L=a[Y],!n.hasOwnProperty(Y)||C===L||C===void 0&&L===void 0||wc(e,t,Y,C,n,L);return}}for(var j in a)C=a[j],a.hasOwnProperty(j)&&C!=null&&!n.hasOwnProperty(j)&&Fe(e,t,j,null,n,C);for(Z in n)C=n[Z],L=a[Z],!n.hasOwnProperty(Z)||C===L||C==null&&L==null||Fe(e,t,Z,C,n,L)}function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],o=i.transferSize,f=i.initiatorType,p=i.duration;if(o&&p&&$h(f)){for(f=0,p=i.responseEnd,n+=1;n<a.length;n++){var b=a[n],D=b.startTime;if(D>p)break;var Y=b.transferSize,Z=b.initiatorType;Y&&$h(Z)&&(b=b.responseEnd,f+=Y*(b<p?1:(p-D)/(b-D)))}if(--n,t+=8*(o+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ec=null,Ac=null;function Yo(e){return e.nodeType===9?e:e.ownerDocument}function Jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=null;function wy(){var e=window.event;return e&&e.type==="popstate"?e===Rc?!1:(Rc=e,!0):(Rc=null,!1)}var Fh=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(zy)}:Fh;function zy(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function Ph(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),oi(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ir(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ir(a);for(var o=a.firstChild;o;){var f=o.nextSibling,p=o.nodeName;o[Oe]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=f}}else a==="body"&&ir(e.ownerDocument.body);a=i}while(a);oi(t)}function Ih(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jc(a),Pe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ry(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Oe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function jy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function ep(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=da(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$?"||e.data==="$~"}function _c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ty(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function tp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return da(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function np(e,t,a){switch(t=Yo(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ir(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pe(e)}var ma=new Map,lp=new Set;function Go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=J.d;J.d={f:_y,r:Oy,D:Dy,C:Cy,L:My,m:Ny,X:Ly,S:Uy,M:By};function _y(){var e=rn.f(),t=Co();return e||t}function Oy(e){var t=st(e);t!==null&&t.tag===5&&t.type==="form"?Sm(t):rn.r(e)}var li=typeof document>"u"?null:document;function ip(e,t,a){var n=li;if(n&&typeof t=="string"&&t){var i=ia(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),lp.has(i)||(lp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Mt(t,"link",e),tt(t),n.head.appendChild(t)))}}function Dy(e){rn.D(e),ip("dns-prefetch",e,null)}function Cy(e,t){rn.C(e,t),ip("preconnect",e,t)}function My(e,t,a){rn.L(e,t,a);var n=li;if(n&&e&&t){var i='link[rel="preload"][as="'+ia(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ia(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ia(a.imageSizes)+'"]')):i+='[href="'+ia(e)+'"]';var o=i;switch(t){case"style":o=ii(e);break;case"script":o=ri(e)}ma.has(o)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ma.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(rr(o))||t==="script"&&n.querySelector(or(o))||(t=n.createElement("link"),Mt(t,"link",e),tt(t),n.head.appendChild(t)))}}function Ny(e,t){rn.m(e,t);var a=li;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ia(n)+'"][href="'+ia(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ri(e)}if(!ma.has(o)&&(e=x({rel:"modulepreload",href:e},t),ma.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(or(o)))return}n=a.createElement("link"),Mt(n,"link",e),tt(n),a.head.appendChild(n)}}}function Uy(e,t,a){rn.S(e,t,a);var n=li;if(n&&e){var i=wt(n).hoistableStyles,o=ii(e);t=t||"default";var f=i.get(o);if(!f){var p={loading:0,preload:null};if(f=n.querySelector(rr(o)))p.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ma.get(o))&&Dc(e,a);var b=f=n.createElement("link");tt(b),Mt(b,"link",e),b._p=new Promise(function(D,Y){b.onload=D,b.onerror=Y}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Xo(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:p},i.set(o,f)}}}function Ly(e,t){rn.X(e,t);var a=li;if(a&&e){var n=wt(a).hoistableScripts,i=ri(e),o=n.get(i);o||(o=a.querySelector(or(i)),o||(e=x({src:e,async:!0},t),(t=ma.get(i))&&Cc(e,t),o=a.createElement("script"),tt(o),Mt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function By(e,t){rn.M(e,t);var a=li;if(a&&e){var n=wt(a).hoistableScripts,i=ri(e),o=n.get(i);o||(o=a.querySelector(or(i)),o||(e=x({src:e,async:!0,type:"module"},t),(t=ma.get(i))&&Cc(e,t),o=a.createElement("script"),tt(o),Mt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function rp(e,t,a,n){var i=(i=ye.current)?Go(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ii(a.href),a=wt(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ii(a.href);var o=wt(i).hoistableStyles,f=o.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=i.querySelector(rr(e)))&&!o._p&&(f.instance=o,f.state.loading=5),ma.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ma.set(e,a),o||Hy(i,e,a,f.state))),t&&n===null)throw Error(u(528,""));return f}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(a),a=wt(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ii(e){return'href="'+ia(e)+'"'}function rr(e){return'link[rel="stylesheet"]['+e+"]"}function op(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Hy(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Mt(t,"link",a),tt(t),e.head.appendChild(t))}function ri(e){return'[src="'+ia(e)+'"]'}function or(e){return"script[async]"+e}function up(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ia(a.href)+'"]');if(n)return t.instance=n,tt(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),tt(n),Mt(n,"style",i),Xo(n,a.precedence,e),t.instance=n;case"stylesheet":i=ii(a.href);var o=e.querySelector(rr(i));if(o)return t.state.loading|=4,t.instance=o,tt(o),o;n=op(a),(i=ma.get(i))&&Dc(n,i),o=(e.ownerDocument||e).createElement("link"),tt(o);var f=o;return f._p=new Promise(function(p,b){f.onload=p,f.onerror=b}),Mt(o,"link",n),t.state.loading|=4,Xo(o,a.precedence,e),t.instance=o;case"script":return o=ri(a.src),(i=e.querySelector(or(o)))?(t.instance=i,tt(i),i):(n=a,(i=ma.get(o))&&(n=x({},a),Cc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),tt(i),Mt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Xo(n,a.precedence,e));return t.instance}function Xo(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,f=0;f<n.length;f++){var p=n[f];if(p.dataset.precedence===t)o=p;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qo=null;function sp(e,t,a){if(Qo===null){var n=new Map,i=Qo=new Map;i.set(a,n)}else i=Qo,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[Oe]||o[ee]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var p=n.get(f);p?p.push(o):n.set(f,[o])}}return n}function cp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qy(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Yy(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=ii(n.href),o=t.querySelector(rr(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vo.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,tt(o);return}o=t.ownerDocument||t,n=op(n),(i=ma.get(i))&&Dc(n,i),o=o.createElement("link"),tt(o);var f=o;f._p=new Promise(function(p,b){f.onload=p,f.onerror=b}),Mt(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vo.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Mc=0;function Gy(e,t){return e.stylesheets&&e.count===0&&Ko(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Mc===0&&(Mc=62500*Sy());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Mc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ko(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zo=null;function Ko(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zo=new Map,t.forEach(Xy,e),Zo=null,Vo.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var a=Zo.get(e);if(a)var n=a.get(null);else{a=new Map,Zo.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var f=i[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),o=a.get(f)||n,o===n&&a.set(null,i),a.set(f,i),this.count++,n=Vo.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ur={$$typeof:k,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Qy(e,t,a,n,i,o,f,p,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.hiddenUpdates=gn(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function dp(e,t,a,n,i,o,f,p,b,D,Y,Z){return e=new Qy(e,t,a,f,b,D,Y,Z,p),t=1,o===!0&&(t|=24),o=kt(3,null,null,t),e.current=o,o.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},gs(o),e}function mp(e){return e?(e=Bl,e):Bl}function hp(e,t,a,n,i,o){i=mp(i),n.context===null?n.context=i:n.pendingContext=i,n=An(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=zn(e,n,t),a!==null&&($t(a,e,t),Yi(a,e,t))}function pp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Nc(e,t){pp(e,t),(e=e.alternate)&&pp(e,t)}function gp(e){if(e.tag===13||e.tag===31){var t=tl(e,67108864);t!==null&&$t(t,e,67108864),Nc(e,67108864)}}function vp(e){if(e.tag===13||e.tag===31){var t=ea();t=R(t);var a=tl(e,t);a!==null&&$t(a,e,t),Nc(e,t)}}var $o=!0;function Vy(e,t,a,n){var i=N.T;N.T=null;var o=J.p;try{J.p=2,Uc(e,t,a,n)}finally{J.p=o,N.T=i}}function Zy(e,t,a,n){var i=N.T;N.T=null;var o=J.p;try{J.p=8,Uc(e,t,a,n)}finally{J.p=o,N.T=i}}function Uc(e,t,a,n){if($o){var i=Lc(n);if(i===null)Sc(e,t,n,Jo,a),xp(e,n);else if($y(i,e,t,a,n))n.stopPropagation();else if(xp(e,n),t&4&&-1<Ky.indexOf(e)){for(;i!==null;){var o=st(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=ba(o.pendingLanes);if(f!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var b=1<<31-Nt(f);p.entanglements[1]|=b,f&=~b}La(o),(Ze&6)===0&&(Oo=Ht()+500,ar(0))}}break;case 31:case 13:p=tl(o,2),p!==null&&$t(p,o,2),Co(),Nc(o,2)}if(o=Lc(n),o===null&&Sc(e,t,n,Jo,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Sc(e,t,n,null,a)}}function Lc(e){return e=Hu(e),Bc(e)}var Jo=null;function Bc(e){if(Jo=null,e=nt(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jo=e,null}function yp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ya()){case mn:return 2;case Ei:return 8;case hn:case xa:return 32;case la:return 268435456;default:return 32}default:return 32}}var Hc=!1,Ln=null,Bn=null,Hn=null,sr=new Map,cr=new Map,qn=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function fr(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=st(t),t!==null&&gp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $y(e,t,a,n,i){switch(t){case"focusin":return Ln=fr(Ln,e,t,a,n,i),!0;case"dragenter":return Bn=fr(Bn,e,t,a,n,i),!0;case"mouseover":return Hn=fr(Hn,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return sr.set(o,fr(sr.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,cr.set(o,fr(cr.get(o)||null,e,t,a,n,i)),!0}return!1}function bp(e){var t=nt(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,I(e.priority,function(){vp(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,I(e.priority,function(){vp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Bu=n,a.target.dispatchEvent(n),Bu=null}else return t=st(a),t!==null&&gp(t),e.blockedOn=a,!1;t.shift()}return!0}function Sp(e,t,a){ko(e)&&a.delete(t)}function Jy(){Hc=!1,Ln!==null&&ko(Ln)&&(Ln=null),Bn!==null&&ko(Bn)&&(Bn=null),Hn!==null&&ko(Hn)&&(Hn=null),sr.forEach(Sp),cr.forEach(Sp)}function Fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Hc||(Hc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Jy)))}var Wo=null;function wp(e){Wo!==e&&(Wo=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Wo===e&&(Wo=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Bc(n||a)===null)continue;break}var o=st(a);o!==null&&(e.splice(t,3),t-=3,Ls(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function oi(e){function t(b){return Fo(b,e)}Ln!==null&&Fo(Ln,e),Bn!==null&&Fo(Bn,e),Hn!==null&&Fo(Hn,e),sr.forEach(t),cr.forEach(t);for(var a=0;a<qn.length;a++){var n=qn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<qn.length&&(a=qn[0],a.blockedOn===null);)bp(a),a.blockedOn===null&&qn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],f=i[ie]||null;if(typeof o=="function")f||wp(a);else if(f){var p=null;if(o&&o.hasAttribute("formAction")){if(i=o,f=o[ie]||null)p=f.formAction;else if(Bc(i)!==null)continue}else p=f.action;typeof p=="function"?a[n+1]=p:(a.splice(n,3),n-=3),wp(a)}}}function Ep(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function qc(e){this._internalRoot=e}Po.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=ea();hp(a,n,e,t,null,null)},Po.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hp(e.current,2,null,e,null,null),Co(),t[re]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=K();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qn.length&&t!==0&&t<qn[a].priority;a++);qn.splice(a,0,e),a===0&&bp(e)}};var Ap=r.version;if(Ap!=="19.2.4")throw Error(u(527,Ap,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var ky={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ga=Io.inject(ky),qt=Io}catch{}}return mr.createRoot=function(e,t){if(!c(e))throw Error(u(299));var a=!1,n="",i=Dm,o=Cm,f=Mm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=dp(e,1,!1,null,null,a,n,null,i,o,f,Ep),e[re]=t.current,bc(e),new qc(t)},mr.hydrateRoot=function(e,t,a){if(!c(e))throw Error(u(299));var n=!1,i="",o=Dm,f=Cm,p=Mm,b=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=dp(e,1,!0,t,a??null,n,i,b,o,f,p,Ep),t.context=mp(null),a=t.current,n=ea(),n=R(n),i=An(n),i.callback=null,zn(a,i,n),a=n,t.current.lanes=a,Oa(t,a),La(t),e[re]=t.current,bc(e),new Po(t)},mr.version="19.2.4",mr}var Np;function o1(){if(Np)return Xc.exports;Np=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Xc.exports=r1(),Xc.exports}var u1=o1(),Tt=function(){return Tt=Object.assign||function(r){for(var s,u=1,c=arguments.length;u<c;u++){s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(r[d]=s[d])}return r},Tt.apply(this,arguments)};function hi(l,r,s){if(s||arguments.length===2)for(var u=0,c=r.length,d;u<c;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return l.concat(d||Array.prototype.slice.call(r))}var ot="-ms-",Sr="-moz-",Ke="-webkit-",L0="comm",gu="rule",yf="decl",s1="@import",c1="@namespace",B0="@keyframes",f1="@layer",H0=Math.abs,xf=String.fromCharCode,lf=Object.assign;function d1(l,r){return At(l,0)^45?(((r<<2^At(l,0))<<2^At(l,1))<<2^At(l,2))<<2^At(l,3):0}function q0(l){return l.trim()}function un(l,r){return(l=r.exec(l))?l[0]:l}function _e(l,r,s){return l.replace(r,s)}function nu(l,r,s){return l.indexOf(r,s)}function At(l,r){return l.charCodeAt(r)|0}function yl(l,r,s){return l.slice(r,s)}function za(l){return l.length}function Y0(l){return l.length}function vr(l,r){return r.push(l),l}function m1(l,r){return l.map(r).join("")}function Up(l,r){return l.filter(function(s){return!un(s,r)})}var vu=1,pi=1,G0=0,pa=0,bt=0,yi="";function yu(l,r,s,u,c,d,m,y){return{value:l,root:r,parent:s,type:u,props:c,children:d,line:vu,column:pi,length:m,return:"",siblings:y}}function Gn(l,r){return lf(yu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function ui(l){for(;l.root;)l=Gn(l.root,{children:[l]});vr(l,l.siblings)}function h1(){return bt}function p1(){return bt=pa>0?At(yi,--pa):0,pi--,bt===10&&(pi=1,vu--),bt}function Ra(){return bt=pa<G0?At(yi,pa++):0,pi++,bt===10&&(pi=1,vu++),bt}function Vn(){return At(yi,pa)}function lu(){return pa}function xu(l,r){return yl(yi,l,r)}function Ar(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g1(l){return vu=pi=1,G0=za(yi=l),pa=0,[]}function v1(l){return yi="",l}function Kc(l){return q0(xu(pa-1,rf(l===91?l+2:l===40?l+1:l)))}function y1(l){for(;(bt=Vn())&&bt<33;)Ra();return Ar(l)>2||Ar(bt)>3?"":" "}function x1(l,r){for(;--r&&Ra()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return xu(l,lu()+(r<6&&Vn()==32&&Ra()==32))}function rf(l){for(;Ra();)switch(bt){case l:return pa;case 34:case 39:l!==34&&l!==39&&rf(bt);break;case 40:l===41&&rf(l);break;case 92:Ra();break}return pa}function b1(l,r){for(;Ra()&&l+bt!==57;)if(l+bt===84&&Vn()===47)break;return"/*"+xu(r,pa-1)+"*"+xf(l===47?l:Ra())}function S1(l){for(;!Ar(Vn());)Ra();return xu(l,pa)}function w1(l){return v1(iu("",null,null,null,[""],l=g1(l),0,[0],l))}function iu(l,r,s,u,c,d,m,y,v){for(var g=0,w=0,x=m,T=0,_=0,H=0,G=1,V=1,F=1,P=0,k="",$=c,ne=d,te=u,Q=k;V;)switch(H=P,P=Ra()){case 40:if(H!=108&&At(Q,x-1)==58){nu(Q+=_e(Kc(P),"&","&\f"),"&\f",H0(g?y[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:Q+=Kc(P);break;case 9:case 10:case 13:case 32:Q+=y1(H);break;case 92:Q+=x1(lu()-1,7);continue;case 47:switch(Vn()){case 42:case 47:vr(E1(b1(Ra(),lu()),r,s,v),v),(Ar(H||1)==5||Ar(Vn()||1)==5)&&za(Q)&&yl(Q,-1,void 0)!==" "&&(Q+=" ");break;default:Q+="/"}break;case 123*G:y[g++]=za(Q)*F;case 125*G:case 59:case 0:switch(P){case 0:case 125:V=0;case 59+w:F==-1&&(Q=_e(Q,/\f/g,"")),_>0&&(za(Q)-x||G===0&&H===47)&&vr(_>32?Bp(Q+";",u,s,x-1,v):Bp(_e(Q," ","")+";",u,s,x-2,v),v);break;case 59:Q+=";";default:if(vr(te=Lp(Q,r,s,g,w,c,y,k,$=[],ne=[],x,d),d),P===123)if(w===0)iu(Q,r,te,te,$,d,x,y,ne);else{switch(T){case 99:if(At(Q,3)===110)break;case 108:if(At(Q,2)===97)break;default:w=0;case 100:case 109:case 115:}w?iu(l,te,te,u&&vr(Lp(l,te,te,0,0,c,y,k,c,$=[],x,ne),ne),c,ne,x,y,u?$:ne):iu(Q,te,te,te,[""],ne,0,y,ne)}}g=w=_=0,G=F=1,k=Q="",x=m;break;case 58:x=1+za(Q),_=H;default:if(G<1){if(P==123)--G;else if(P==125&&G++==0&&p1()==125)continue}switch(Q+=xf(P),P*G){case 38:F=w>0?1:(Q+="\f",-1);break;case 44:y[g++]=(za(Q)-1)*F,F=1;break;case 64:Vn()===45&&(Q+=Kc(Ra())),T=Vn(),w=x=za(k=Q+=S1(lu())),P++;break;case 45:H===45&&za(Q)==2&&(G=0)}}return d}function Lp(l,r,s,u,c,d,m,y,v,g,w,x){for(var T=c-1,_=c===0?d:[""],H=Y0(_),G=0,V=0,F=0;G<u;++G)for(var P=0,k=yl(l,T+1,T=H0(V=m[G])),$=l;P<H;++P)($=q0(V>0?_[P]+" "+k:_e(k,/&\f/g,_[P])))&&(v[F++]=$);return yu(l,r,s,c===0?gu:y,v,g,w,x)}function E1(l,r,s,u){return yu(l,r,s,L0,xf(h1()),yl(l,2,-2),0,u)}function Bp(l,r,s,u,c){return yu(l,r,s,yf,yl(l,0,u),yl(l,u+1,-1),u,c)}function X0(l,r,s){switch(d1(l,r)){case 5103:return Ke+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ke+l+l;case 4855:return Ke+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return Sr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+l+Sr+l+ot+l+l;case 5936:switch(At(l,r+11)){case 114:return Ke+l+ot+_e(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Ke+l+ot+_e(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Ke+l+ot+_e(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Ke+l+ot+l+l;case 6165:return Ke+l+ot+"flex-"+l+l;case 5187:return Ke+l+_e(l,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+ot+"flex-$1$2")+l;case 5443:return Ke+l+ot+"flex-item-"+_e(l,/flex-|-self/g,"")+(un(l,/flex-|baseline/)?"":ot+"grid-row-"+_e(l,/flex-|-self/g,""))+l;case 4675:return Ke+l+ot+"flex-line-pack"+_e(l,/align-content|flex-|-self/g,"")+l;case 5548:return Ke+l+ot+_e(l,"shrink","negative")+l;case 5292:return Ke+l+ot+_e(l,"basis","preferred-size")+l;case 6060:return Ke+"box-"+_e(l,"-grow","")+Ke+l+ot+_e(l,"grow","positive")+l;case 4554:return Ke+_e(l,/([^-])(transform)/g,"$1"+Ke+"$2")+l;case 6187:return _e(_e(_e(l,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),l,"")+l;case 5495:case 3959:return _e(l,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return _e(_e(l,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+ot+"flex-pack:$3"),/space-between/,"justify")+Ke+l+l;case 4200:if(!un(l,/flex-|baseline/))return ot+"grid-column-align"+yl(l,r)+l;break;case 2592:case 3360:return ot+_e(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(u,c){return r=c,un(u.props,/grid-\w+-end/)})?~nu(l+(s=s[r].value),"span",0)?l:ot+_e(l,"-start","")+l+ot+"grid-row-span:"+(~nu(s,"span",0)?un(s,/\d+/):+un(s,/\d+/)-+un(l,/\d+/))+";":ot+_e(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(u){return un(u.props,/grid-\w+-start/)})?l:ot+_e(_e(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return _e(l,/(.+)-inline(.+)/,Ke+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(za(l)-1-r>6)switch(At(l,r+1)){case 109:if(At(l,r+4)!==45)break;case 102:return _e(l,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+Sr+(At(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~nu(l,"stretch",0)?X0(_e(l,"stretch","fill-available"),r,s)+l:l}break;case 5152:case 5920:return _e(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,d,m,y,v,g){return ot+c+":"+d+g+(m?ot+c+"-span:"+(y?v:+v-+d)+g:"")+l});case 4949:if(At(l,r+6)===121)return _e(l,":",":"+Ke)+l;break;case 6444:switch(At(l,At(l,14)===45?18:11)){case 120:return _e(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(At(l,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+ot+"$2box$3")+l;case 100:return _e(l,":",":"+ot)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _e(l,"scroll-","scroll-snap-")+l}return l}function fu(l,r){for(var s="",u=0;u<l.length;u++)s+=r(l[u],u,l,r)||"";return s}function A1(l,r,s,u){switch(l.type){case f1:if(l.children.length)break;case s1:case c1:case yf:return l.return=l.return||l.value;case L0:return"";case B0:return l.return=l.value+"{"+fu(l.children,u)+"}";case gu:if(!za(l.value=l.props.join(",")))return""}return za(s=fu(l.children,u))?l.return=l.value+"{"+s+"}":""}function z1(l){var r=Y0(l);return function(s,u,c,d){for(var m="",y=0;y<r;y++)m+=l[y](s,u,c,d)||"";return m}}function R1(l){return function(r){r.root||(r=r.return)&&l(r)}}function j1(l,r,s,u){if(l.length>-1&&!l.return)switch(l.type){case yf:l.return=X0(l.value,l.length,s);return;case B0:return fu([Gn(l,{value:_e(l.value,"@","@"+Ke)})],u);case gu:if(l.length)return m1(s=l.props,function(c){switch(un(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ui(Gn(l,{props:[_e(c,/:(read-\w+)/,":"+Sr+"$1")]})),ui(Gn(l,{props:[c]})),lf(l,{props:Up(s,u)});break;case"::placeholder":ui(Gn(l,{props:[_e(c,/:(plac\w+)/,":"+Ke+"input-$1")]})),ui(Gn(l,{props:[_e(c,/:(plac\w+)/,":"+Sr+"$1")]})),ui(Gn(l,{props:[_e(c,/:(plac\w+)/,ot+"input-$1")]})),ui(Gn(l,{props:[c]})),lf(l,{props:Up(s,u)});break}return""})}}var T1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ta={},gi=typeof process<"u"&&ta!==void 0&&(ta.REACT_APP_SC_ATTR||ta.SC_ATTR)||"data-styled",Q0="active",V0="data-styled-version",bu="6.3.11",bf=`/*!sc*/
`,wr=typeof window<"u"&&typeof document<"u",_1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ta!==void 0&&ta.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ta.REACT_APP_SC_DISABLE_SPEEDY!==""?ta.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ta.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ta!==void 0&&ta.SC_DISABLE_SPEEDY!==void 0&&ta.SC_DISABLE_SPEEDY!==""&&ta.SC_DISABLE_SPEEDY!=="false"&&ta.SC_DISABLE_SPEEDY),O1={};function xl(l){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var ru=new Map,du=new Map,ou=1,yr=function(l){if(ru.has(l))return ru.get(l);for(;du.has(ou);)ou++;var r=ou++;return ru.set(l,r),du.set(r,l),r},D1=function(l,r){ou=r+1,ru.set(l,r),du.set(r,l)},Sf=Object.freeze([]),vi=Object.freeze({});function Z0(l,r,s){return s===void 0&&(s=vi),l.theme!==s.theme&&l.theme||r||s.theme}var K0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),C1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M1=/(^-|-$)/g;function Hp(l){return l.replace(C1,"-").replace(M1,"")}var N1=/(a)(d)/gi,qp=function(l){return String.fromCharCode(l+(l>25?39:97))};function of(l){var r,s="";for(r=Math.abs(l);r>52;r=r/52|0)s=qp(r%52)+s;return(qp(r%52)+s).replace(N1,"$1-$2")}var $c,hl=function(l,r){for(var s=r.length;s;)l=33*l^r.charCodeAt(--s);return l},$0=function(l){return hl(5381,l)};function wf(l){return of($0(l)>>>0)}function U1(l){return l.displayName||l.name||"Component"}function Jc(l){return typeof l=="string"&&!0}var J0=typeof Symbol=="function"&&Symbol.for,k0=J0?Symbol.for("react.memo"):60115,L1=J0?Symbol.for("react.forward_ref"):60112,B1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q1=(($c={})[L1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$c[k0]=F0,$c);function Yp(l){return("type"in(r=l)&&r.type.$$typeof)===k0?F0:"$$typeof"in l?q1[l.$$typeof]:B1;var r}var Y1=Object.defineProperty,G1=Object.getOwnPropertyNames,Gp=Object.getOwnPropertySymbols,X1=Object.getOwnPropertyDescriptor,Q1=Object.getPrototypeOf,Xp=Object.prototype;function W0(l,r,s){if(typeof r!="string"){if(Xp){var u=Q1(r);u&&u!==Xp&&W0(l,u,s)}var c=G1(r);Gp&&(c=c.concat(Gp(r)));for(var d=Yp(l),m=Yp(r),y=0;y<c.length;++y){var v=c[y];if(!(v in H1||s&&s[v]||m&&v in m||d&&v in d)){var g=X1(r,v);try{Y1(l,v,g)}catch{}}}}return l}function bl(l){return typeof l=="function"}function Ef(l){return typeof l=="object"&&"styledComponentId"in l}function gl(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function mu(l,r){return l.join("")}function zr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function uf(l,r,s){if(s===void 0&&(s=!1),!s&&!zr(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)l[u]=uf(l[u],r[u]);else if(zr(r))for(var u in r)l[u]=uf(l[u],r[u]);return l}function Af(l,r){Object.defineProperty(l,"toString",{value:r})}var V1=(function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return l.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var s=this._cIndex;if(r>this._cGroup)for(var u=this._cGroup;u<r;u++)s+=this.groupSizes[u];else for(u=this._cGroup-1;u>=r;u--)s-=this.groupSizes[u];return this._cGroup=r,this._cIndex=s,s},l.prototype.insertRules=function(r,s){if(r>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,d=c;r>=d;)if((d<<=1)<0)throw xl(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var m=c;m<d;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(r+1),v=0,g=(m=0,s.length);m<g;m++)this.tag.insertRule(y,s[m])&&(this.groupSizes[r]++,y++,v++);v>0&&this._cGroup>r&&(this._cIndex+=v)},l.prototype.clearGroup=function(r){if(r<this.length){var s=this.groupSizes[r],u=this.indexOfGroup(r),c=u+s;this.groupSizes[r]=0;for(var d=u;d<c;d++)this.tag.deleteRule(u);s>0&&this._cGroup>r&&(this._cIndex-=s)}},l.prototype.getGroup=function(r){var s="";if(r>=this.length||this.groupSizes[r]===0)return s;for(var u=this.groupSizes[r],c=this.indexOfGroup(r),d=c+u,m=c;m<d;m++)s+=this.tag.getRule(m)+bf;return s},l})(),Z1="style[".concat(gi,"][").concat(V0,'="').concat(bu,'"]'),K1=new RegExp("^".concat(gi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qp=function(l){return typeof ShadowRoot<"u"&&l instanceof ShadowRoot||"host"in l&&l.nodeType===11},sf=function(l){if(!l)return document;if(Qp(l))return l;if("getRootNode"in l){var r=l.getRootNode();if(Qp(r))return r}return document},$1=function(l,r,s){for(var u,c=s.split(","),d=0,m=c.length;d<m;d++)(u=c[d])&&l.registerName(r,u)},J1=function(l,r){for(var s,u=((s=r.textContent)!==null&&s!==void 0?s:"").split(bf),c=[],d=0,m=u.length;d<m;d++){var y=u[d].trim();if(y){var v=y.match(K1);if(v){var g=0|parseInt(v[1],10),w=v[2];g!==0&&(D1(w,g),$1(l,w,v[3]),l.getTag().insertRules(g,c)),c.length=0}else c.push(y)}}},kc=function(l){for(var r=sf(l.options.target).querySelectorAll(Z1),s=0,u=r.length;s<u;s++){var c=r[s];c&&c.getAttribute(gi)!==Q0&&(J1(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function k1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(l){var r=document.head,s=l||r,u=document.createElement("style"),c=(function(y){var v=Array.from(y.querySelectorAll("style[".concat(gi,"]")));return v[v.length-1]})(s),d=c!==void 0?c.nextSibling:null;u.setAttribute(gi,Q0),u.setAttribute(V0,bu);var m=k1();return m&&u.setAttribute("nonce",m),s.insertBefore(u,d),u},F1=(function(){function l(r){this.element=P0(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){var u;if(s.sheet)return s.sheet;for(var c=(u=s.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,d=0,m=c.length;d<m;d++){var y=c[d];if(y.ownerNode===s)return y}throw xl(17)})(this.element),this.length=0}return l.prototype.insertRule=function(r,s){try{return this.sheet.insertRule(s,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var s=this.sheet.cssRules[r];return s&&s.cssText?s.cssText:""},l})(),W1=(function(){function l(r){this.element=P0(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,s){if(r<=this.length&&r>=0){var u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l})(),P1=(function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,s){return r<=this.length&&(r===this.length?this.rules.push(s):this.rules.splice(r,0,s),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l})(),Vp=wr,I1={isServer:!wr,useCSSOMInjection:!_1},hu=(function(){function l(r,s,u){r===void 0&&(r=vi),s===void 0&&(s={});var c=this;this.options=Tt(Tt({},I1),r),this.gs=s,this.names=new Map(u),this.server=!!r.isServer,!this.server&&wr&&Vp&&(Vp=!1,kc(this)),Af(this,function(){return(function(d){for(var m=d.getTag(),y=m.length,v="",g=function(x){var T=(function(F){return du.get(F)})(x);if(T===void 0)return"continue";var _=d.names.get(T);if(_===void 0||!_.size)return"continue";var H=m.getGroup(x);if(H.length===0)return"continue";var G=gi+".g"+x+'[id="'+T+'"]',V="";_.forEach(function(F){F.length>0&&(V+=F+",")}),v+=H+G+'{content:"'+V+'"}'+bf},w=0;w<y;w++)g(w);return v})(c)})}return l.registerId=function(r){return yr(r)},l.prototype.rehydrate=function(){!this.server&&wr&&kc(this)},l.prototype.reconstructWithOptions=function(r,s){s===void 0&&(s=!0);var u=new l(Tt(Tt({},this.options),r),this.gs,s&&this.names||void 0);return!this.server&&wr&&r.target!==this.options.target&&sf(this.options.target)!==sf(r.target)&&kc(u),u},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(s){var u=s.useCSSOMInjection,c=s.target;return s.isServer?new P1(c):u?new F1(c):new W1(c)})(this.options),new V1(r)));var r},l.prototype.hasNameForId=function(r,s){var u,c;return(c=(u=this.names.get(r))===null||u===void 0?void 0:u.has(s))!==null&&c!==void 0&&c},l.prototype.registerName=function(r,s){yr(r);var u=this.names.get(r);u?u.add(s):this.names.set(r,new Set([s]))},l.prototype.insertRules=function(r,s,u){this.registerName(r,s),this.getTag().insertRules(yr(r),u)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(yr(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l})(),ex=/&/g,sn=47,pl=42;function Zp(l){if(l.indexOf("}")===-1)return!1;for(var r=l.length,s=0,u=0,c=!1,d=0;d<r;d++){var m=l.charCodeAt(d);if(u!==0||c||m!==sn||l.charCodeAt(d+1)!==pl)if(c)m===pl&&l.charCodeAt(d+1)===sn&&(c=!1,d++);else if(m!==34&&m!==39||d!==0&&l.charCodeAt(d-1)===92){if(u===0){if(m===123)s++;else if(m===125&&--s<0)return!0}}else u===0?u=m:u===m&&(u=0);else c=!0,d++}return s!==0||u!==0}function I0(l,r){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(r," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(r," ")),s.props=s.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=I0(s.children,r)),s})}function tx(l){var r,s,u,c=vi,d=c.options,m=d===void 0?vi:d,y=c.plugins,v=y===void 0?Sf:y,g=function(H,G,V){return V.startsWith(s)&&V.endsWith(s)&&V.replaceAll(s,"").length>0?".".concat(r):H},w=v.slice();w.push(function(H){H.type===gu&&H.value.includes("&")&&(u||(u=new RegExp("\\".concat(s,"\\b"),"g")),H.props[0]=H.props[0].replace(ex,s).replace(u,g))}),m.prefix&&w.push(j1),w.push(A1);var x=[],T=z1(w.concat(R1(function(H){return x.push(H)}))),_=function(H,G,V,F){G===void 0&&(G=""),V===void 0&&(V=""),F===void 0&&(F="&"),r=F,s=G,u=void 0;var P=(function($){if(!Zp($))return $;for(var ne=$.length,te="",Q=0,A=0,fe=0,we=!1,he=0;he<ne;he++){var de=$.charCodeAt(he);if(fe!==0||we||de!==sn||$.charCodeAt(he+1)!==pl)if(we)de===pl&&$.charCodeAt(he+1)===sn&&(we=!1,he++);else if(de!==34&&de!==39||he!==0&&$.charCodeAt(he-1)===92){if(fe===0)if(de===123)A++;else if(de===125){if(--A<0){for(var qe=he+1;qe<ne;){var Te=$.charCodeAt(qe);if(Te===59||Te===10)break;qe++}qe<ne&&$.charCodeAt(qe)===59&&qe++,A=0,he=qe-1,Q=qe;continue}A===0&&(te+=$.substring(Q,he+1),Q=he+1)}else de===59&&A===0&&(te+=$.substring(Q,he+1),Q=he+1)}else fe===0?fe=de:fe===de&&(fe=0);else we=!0,he++}if(Q<ne){var be=$.substring(Q);Zp(be)||(te+=be)}return te})((function($){if($.indexOf("//")===-1)return $;for(var ne=$.length,te=[],Q=0,A=0,fe=0,we=0;A<ne;){var he=$.charCodeAt(A);if(he!==34&&he!==39||A!==0&&$.charCodeAt(A-1)===92)if(fe===0)if(he===sn&&A+1<ne&&$.charCodeAt(A+1)===pl){for(A+=2;A+1<ne&&($.charCodeAt(A)!==pl||$.charCodeAt(A+1)!==sn);)A++;A+=2}else if(he===40&&A>=3&&(32|$.charCodeAt(A-1))==108&&(32|$.charCodeAt(A-2))==114&&(32|$.charCodeAt(A-3))==117)we=1,A++;else if(we>0)he===41?we--:he===40&&we++,A++;else if(he===pl&&A+1<ne&&$.charCodeAt(A+1)===sn)A>Q&&te.push($.substring(Q,A)),Q=A+=2;else if(he===sn&&A+1<ne&&$.charCodeAt(A+1)===sn){for(A>Q&&te.push($.substring(Q,A));A<ne&&$.charCodeAt(A)!==10;)A++;Q=A}else A++;else A++;else fe===0?fe=he:fe===he&&(fe=0),A++}return Q===0?$:(Q<ne&&te.push($.substring(Q)),te.join(""))})(H)),k=w1(V||G?"".concat(V," ").concat(G," { ").concat(P," }"):P);return m.namespace&&(k=I0(k,m.namespace)),x=[],fu(k,T),x};return _.hash=v.length?v.reduce(function(H,G){return G.name||xl(15),hl(H,G.name)},5381).toString():"",_}var ax=new hu,cf=tx(),eg=na.createContext({shouldForwardProp:void 0,styleSheet:ax,stylis:cf});eg.Consumer;na.createContext(void 0);function ff(){return na.useContext(eg)}var tg=(function(){function l(r,s){var u=this;this.inject=function(c,d){d===void 0&&(d=cf);var m=u.name+d.hash;c.hasNameForId(u.id,m)||c.insertRules(u.id,m,d(u.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=s,Af(this,function(){throw xl(12,String(u.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=cf),this.name+r.hash},l})();function nx(l,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||l in T1||l.startsWith("--")?String(r).trim():"".concat(r,"px")}var lx=function(l){return l>="A"&&l<="Z"};function Kp(l){for(var r="",s=0;s<l.length;s++){var u=l[s];if(s===1&&u==="-"&&l[0]==="-")return l;lx(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var ag=function(l){return l==null||l===!1||l===""},ng=function(l){var r=[];for(var s in l){var u=l[s];l.hasOwnProperty(s)&&!ag(u)&&(Array.isArray(u)&&u.isCss||bl(u)?r.push("".concat(Kp(s),":"),u,";"):zr(u)?r.push.apply(r,hi(hi(["".concat(s," {")],ng(u),!1),["}"],!1)):r.push("".concat(Kp(s),": ").concat(nx(s,u),";")))}return r};function Kn(l,r,s,u,c){if(c===void 0&&(c=[]),typeof l=="string")return l&&c.push(l),c;if(ag(l))return c;if(Ef(l))return c.push(".".concat(l.styledComponentId)),c;if(bl(l)){if(!bl(m=l)||m.prototype&&m.prototype.isReactComponent||!r)return c.push(l),c;var d=l(r);return Kn(d,r,s,u,c)}var m;if(l instanceof tg)return s?(l.inject(s,u),c.push(l.getName(u))):c.push(l),c;if(zr(l)){for(var y=ng(l),v=0;v<y.length;v++)c.push(y[v]);return c}if(!Array.isArray(l))return c.push(l.toString()),c;for(v=0;v<l.length;v++)Kn(l[v],r,s,u,c);return c}function lg(l){for(var r=0;r<l.length;r+=1){var s=l[r];if(bl(s)&&!Ef(s))return!1}return!0}var ix=$0(bu),rx=(function(){function l(r,s,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&lg(r),this.componentId=s,this.baseHash=hl(ix,s),this.baseStyle=u,hu.registerId(s)}return l.prototype.generateAndInjectStyles=function(r,s,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,s,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))c=gl(c,this.staticRulesId);else{var d=mu(Kn(this.rules,r,s,u)),m=of(hl(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,m)){var y=u(d,".".concat(m),void 0,this.componentId);s.insertRules(this.componentId,m,y)}c=gl(c,m),this.staticRulesId=m}else{for(var v=hl(this.baseHash,u.hash),g="",w=0;w<this.rules.length;w++){var x=this.rules[w];if(typeof x=="string")g+=x;else if(x){var T=mu(Kn(x,r,s,u));v=hl(hl(v,String(w)),T),g+=T}}if(g){var _=of(v>>>0);if(!s.hasNameForId(this.componentId,_)){var H=u(g,".".concat(_),void 0,this.componentId);s.insertRules(this.componentId,_,H)}c=gl(c,_)}}return{className:c,css:typeof window>"u"?s.getTag().getGroup(yr(this.componentId)):""}},l})(),Rr=na.createContext(void 0);Rr.Consumer;function ox(l){var r=na.useContext(Rr),s=na.useMemo(function(){return(function(u,c){if(!u)throw xl(14);if(bl(u)){var d=u(c);return d}if(Array.isArray(u)||typeof u!="object")throw xl(8);return c?Tt(Tt({},c),u):u})(l.theme,r)},[l.theme,r]);return l.children?na.createElement(Rr.Provider,{value:s},l.children):null}var Fc={};function ux(l,r,s){var u=Ef(l),c=l,d=!Jc(l),m=r.attrs,y=m===void 0?Sf:m,v=r.componentId,g=v===void 0?(function($,ne){var te=typeof $!="string"?"sc":Hp($);Fc[te]=(Fc[te]||0)+1;var Q="".concat(te,"-").concat(wf(bu+te+Fc[te]));return ne?"".concat(ne,"-").concat(Q):Q})(r.displayName,r.parentComponentId):v,w=r.displayName,x=w===void 0?(function($){return Jc($)?"styled.".concat($):"Styled(".concat(U1($),")")})(l):w,T=r.displayName&&r.componentId?"".concat(Hp(r.displayName),"-").concat(r.componentId):r.componentId||g,_=u&&c.attrs?c.attrs.concat(y).filter(Boolean):y,H=r.shouldForwardProp;if(u&&c.shouldForwardProp){var G=c.shouldForwardProp;if(r.shouldForwardProp){var V=r.shouldForwardProp;H=function($,ne){return G($,ne)&&V($,ne)}}else H=G}var F=new rx(s,T,u?c.componentStyle:void 0);function P($,ne){return(function(te,Q,A){var fe=te.attrs,we=te.componentStyle,he=te.defaultProps,de=te.foldedComponentIds,qe=te.styledComponentId,Te=te.target,be=na.useContext(Rr),N=ff(),J=te.shouldForwardProp||N.shouldForwardProp,oe=Z0(Q,be,he)||vi,le=(function(ye,Ae,at){for(var Ye,_t=Tt(Tt({},Ae),{className:void 0,theme:at}),Ta=0;Ta<ye.length;Ta+=1){var _a=bl(Ye=ye[Ta])?Ye(_t):Ye;for(var et in _a)et==="className"?_t.className=gl(_t.className,_a[et]):et==="style"?_t.style=Tt(Tt({},_t.style),_a[et]):_t[et]=_a[et]}return"className"in Ae&&typeof Ae.className=="string"&&(_t.className=gl(_t.className,Ae.className)),_t})(fe,Q,oe),Ee=le.as||Te,E={};for(var q in le)le[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&le.theme===oe||(q==="forwardedAs"?E.as=le.forwardedAs:J&&!J(q,Ee)||(E[q]=le[q]));var W=(function(ye,Ae){var at=ff(),Ye=ye.generateAndInjectStyles(Ae,at.styleSheet,at.stylis);return Ye})(we,le),ae=W.className,pe=gl(de,qe);return ae&&(pe+=" "+ae),le.className&&(pe+=" "+le.className),E[Jc(Ee)&&!K0.has(Ee)?"class":"className"]=pe,A&&(E.ref=A),U.createElement(Ee,E)})(k,$,ne)}P.displayName=x;var k=na.forwardRef(P);return k.attrs=_,k.componentStyle=F,k.displayName=x,k.shouldForwardProp=H,k.foldedComponentIds=u?gl(c.foldedComponentIds,c.styledComponentId):"",k.styledComponentId=T,k.target=u?c.target:l,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=u?(function(ne){for(var te=[],Q=1;Q<arguments.length;Q++)te[Q-1]=arguments[Q];for(var A=0,fe=te;A<fe.length;A++)uf(ne,fe[A],!0);return ne})({},c.defaultProps,$):$}}),Af(k,function(){return".".concat(k.styledComponentId)}),d&&W0(k,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function $p(l,r){for(var s=[l[0]],u=0,c=r.length;u<c;u+=1)s.push(r[u],l[u+1]);return s}var Jp=function(l){return Object.assign(l,{isCss:!0})};function Su(l){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];if(bl(l)||zr(l))return Jp(Kn($p(Sf,hi([l],r,!0))));var u=l;return r.length===0&&u.length===1&&typeof u[0]=="string"?Kn(u):Jp(Kn($p(u,r)))}function df(l,r,s){if(s===void 0&&(s=vi),!r)throw xl(1,r);var u=function(c){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return l(r,s,Su.apply(void 0,hi([c],d,!1)))};return u.attrs=function(c){return df(l,r,Tt(Tt({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return df(l,r,Tt(Tt({},s),c))},u}var ig=function(l){return df(ux,l)},B=ig;K0.forEach(function(l){B[l]=ig(l)});var sx=(function(){function l(r,s){this.rules=r,this.componentId=s,this.isStatic=lg(r),hu.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,s,u,c){var d=c(mu(Kn(this.rules,s,u,c)),""),m=this.componentId+r;u.insertRules(m,m,d)},l.prototype.removeStyles=function(r,s){s.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,s,u,c){r>2&&hu.registerId(this.componentId+r);var d=this.componentId+r;this.isStatic?u.hasNameForId(d,d)||this.createStyles(r,s,u,c):(this.removeStyles(r,u),this.createStyles(r,s,u,c))},l})();function cx(l){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var u=Su.apply(void 0,hi([l],r,!1)),c="sc-global-".concat(wf(JSON.stringify(u))),d=new sx(u,c),m=new WeakMap,y=function(g){var w=ff(),x=na.useContext(Rr),T=m.get(w.styleSheet);return T===void 0&&(T=w.styleSheet.allocateGSInstance(c),m.set(w.styleSheet,T)),(typeof window>"u"||!w.styleSheet.server)&&v(T,g,w.styleSheet,x,w.stylis),na.useLayoutEffect(function(){return w.styleSheet.server||v(T,g,w.styleSheet,x,w.stylis),function(){var _;d.removeStyles(T,w.styleSheet),_=w.styleSheet.options.target,typeof document<"u"&&(_??document).querySelectorAll('style[data-styled-global="'.concat(c,'"]')).forEach(function(H){return H.remove()})}},[T,g,w.styleSheet,x,w.stylis]),null};function v(g,w,x,T,_){if(d.isStatic)d.renderStyles(g,O1,x,_);else{var H=Tt(Tt({},w),{theme:Z0(w,T,y.defaultProps)});d.renderStyles(g,H,x,_)}}return na.memo(y)}function Ge(l){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var u=mu(Su.apply(void 0,hi([l],r,!1))),c=wf(u);return new tg(c,u)}const fx=cx`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

 

  body {
    background: ${({theme:l})=>l.colors.background};
    background-size: cover;
    overflow-x: hidden;
  
    font-family: "Poppins", sans-serif;
    color: black;
  }

  h1 {
    text-shadow: 0 2px 3px #000;
  }
  h2{
    text-shadow: 0 2px 3px #000;
  }
  h3{
    text-shadow: 0 2px 3px #000;
  }

  span {
    text-shadow: 0 2px 3px #000;
  }

 @media (hover: none) {
  *:hover {
    transform: none !important;
  }
}
`;var rg=l=>{throw TypeError(l)},dx=(l,r,s)=>r.has(l)||rg("Cannot "+s),Wc=(l,r,s)=>(dx(l,r,"read from private field"),s?s.call(l):r.get(l)),mx=(l,r,s)=>r.has(l)?rg("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(l):r.set(l,s),kp="popstate";function Fp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function hx(l={}){function r(u,c){let d=c.state?.masked,{pathname:m,search:y,hash:v}=d||u.location;return jr("",{pathname:m,search:y,hash:v},c.state&&c.state.usr||null,c.state&&c.state.key||"default",d?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function s(u,c){return typeof c=="string"?c:Ba(c)}return gx(r,s,null,l)}function Ce(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function St(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function px(){return Math.random().toString(36).substring(2,10)}function Wp(l,r){return{usr:l.state,key:l.key,idx:r,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function jr(l,r,s=null,u,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?cn(r):r,state:s,key:r&&r.key||u||px(),unstable_mask:c}}function Ba({pathname:l="/",search:r="",hash:s=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function cn(l){let r={};if(l){let s=l.indexOf("#");s>=0&&(r.hash=l.substring(s),l=l.substring(0,s));let u=l.indexOf("?");u>=0&&(r.search=l.substring(u),l=l.substring(0,u)),l&&(r.pathname=l)}return r}function gx(l,r,s,u={}){let{window:c=document.defaultView,v5Compat:d=!1}=u,m=c.history,y="POP",v=null,g=w();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function w(){return(m.state||{idx:null}).idx}function x(){y="POP";let V=w(),F=V==null?null:V-g;g=V,v&&v({action:y,location:G.location,delta:F})}function T(V,F){y="PUSH";let P=Fp(V)?V:jr(G.location,V,F);g=w()+1;let k=Wp(P,g),$=G.createHref(P.unstable_mask||P);try{m.pushState(k,"",$)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;c.location.assign($)}d&&v&&v({action:y,location:G.location,delta:1})}function _(V,F){y="REPLACE";let P=Fp(V)?V:jr(G.location,V,F);g=w();let k=Wp(P,g),$=G.createHref(P.unstable_mask||P);m.replaceState(k,"",$),d&&v&&v({action:y,location:G.location,delta:0})}function H(V){return og(V)}let G={get action(){return y},get location(){return l(c,m)},listen(V){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(kp,x),v=V,()=>{c.removeEventListener(kp,x),v=null}},createHref(V){return r(c,V)},createURL:H,encodeLocation(V){let F=H(V);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:_,go(V){return m.go(V)}};return G}function og(l,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(s,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Ba(l);return u=u.replace(/ $/,"%20"),!r&&u.startsWith("//")&&(u=s+u),new URL(u,s)}var xr,Pp=class{constructor(l){if(mx(this,xr,new Map),l)for(let[r,s]of l)this.set(r,s)}get(l){if(Wc(this,xr).has(l))return Wc(this,xr).get(l);if(l.defaultValue!==void 0)return l.defaultValue;throw new Error("No value found for context")}set(l,r){Wc(this,xr).set(l,r)}};xr=new WeakMap;var vx=new Set(["lazy","caseSensitive","path","id","index","children"]);function yx(l){return vx.has(l)}var xx=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function bx(l){return xx.has(l)}function Sx(l){return l.index===!0}function Tr(l,r,s=[],u={},c=!1){return l.map((d,m)=>{let y=[...s,String(m)],v=typeof d.id=="string"?d.id:y.join("-");if(Ce(d.index!==!0||!d.children,"Cannot specify children on an index route"),Ce(c||!u[v],`Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`),Sx(d)){let g={...d,id:v};return u[v]=Ip(g,r(g)),g}else{let g={...d,id:v,children:void 0};return u[v]=Ip(g,r(g)),d.children&&(g.children=Tr(d.children,r,y,u,c)),g}})}function Ip(l,r){return Object.assign(l,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...l.lazy,...r.lazy}}:{}})}function Xn(l,r,s="/"){return br(l,r,s,!1)}function br(l,r,s,u){let c=typeof r=="string"?cn(r):r,d=ga(c.pathname||"/",s);if(d==null)return null;let m=ug(l);Ex(m);let y=null;for(let v=0;y==null&&v<m.length;++v){let g=Nx(d);y=Cx(m[v],g,u)}return y}function wx(l,r){let{route:s,pathname:u,params:c}=l;return{id:s.id,pathname:u,params:c,data:r[s.id],loaderData:r[s.id],handle:s.handle}}function ug(l,r=[],s=[],u="",c=!1){let d=(m,y,v=c,g)=>{let w={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(u)&&v)return;Ce(w.relativePath.startsWith(u),`Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(u.length)}let x=ja([u,w.relativePath]),T=s.concat(w);m.children&&m.children.length>0&&(Ce(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),ug(m.children,r,T,x,v)),!(m.path==null&&!m.index)&&r.push({path:x,score:Ox(x,m.index),routesMeta:T})};return l.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))d(m,y);else for(let v of sg(m.path))d(m,y,!0,v)}),r}function sg(l){let r=l.split("/");if(r.length===0)return[];let[s,...u]=r,c=s.endsWith("?"),d=s.replace(/\?$/,"");if(u.length===0)return c?[d,""]:[d];let m=sg(u.join("/")),y=[];return y.push(...m.map(v=>v===""?d:[d,v].join("/"))),c&&y.push(...m),y.map(v=>l.startsWith("/")&&v===""?"/":v)}function Ex(l){l.sort((r,s)=>r.score!==s.score?s.score-r.score:Dx(r.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}var Ax=/^:[\w-]+$/,zx=3,Rx=2,jx=1,Tx=10,_x=-2,e0=l=>l==="*";function Ox(l,r){let s=l.split("/"),u=s.length;return s.some(e0)&&(u+=_x),r&&(u+=Rx),s.filter(c=>!e0(c)).reduce((c,d)=>c+(Ax.test(d)?zx:d===""?jx:Tx),u)}function Dx(l,r){return l.length===r.length&&l.slice(0,-1).every((u,c)=>u===r[c])?l[l.length-1]-r[r.length-1]:0}function Cx(l,r,s=!1){let{routesMeta:u}=l,c={},d="/",m=[];for(let y=0;y<u.length;++y){let v=u[y],g=y===u.length-1,w=d==="/"?r:r.slice(d.length)||"/",x=pu({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},w),T=v.route;if(!x&&g&&s&&!u[u.length-1].route.index&&(x=pu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},w)),!x)return null;Object.assign(c,x.params),m.push({params:c,pathname:ja([d,x.pathname]),pathnameBase:Bx(ja([d,x.pathnameBase])),route:T}),x.pathnameBase!=="/"&&(d=ja([d,x.pathnameBase]))}return m}function pu(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,u]=Mx(l.path,l.caseSensitive,l.end),c=r.match(s);if(!c)return null;let d=c[0],m=d.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((g,{paramName:w,isOptional:x},T)=>{if(w==="*"){let H=y[T]||"";m=d.slice(0,d.length-H.length).replace(/(.)\/+$/,"$1")}const _=y[T];return x&&!_?g[w]=void 0:g[w]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:m,pattern:l}}function Mx(l,r=!1,s=!0){St(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],c="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,v,g,w)=>{if(u.push({paramName:y,isOptional:v!=null}),v){let x=w.charAt(g+m.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),c+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":l!==""&&l!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),u]}function Nx(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return St(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function ga(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,u=l.charAt(s);return u&&u!=="/"?null:l.slice(s)||"/"}function Ux({basename:l,pathname:r}){return r==="/"?l:ja([l,r])}var cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zf=l=>cg.test(l);function Lx(l,r="/"){let{pathname:s,search:u="",hash:c=""}=typeof l=="string"?cn(l):l,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=t0(s.substring(1),"/"):d=t0(s,r)):d=r,{pathname:d,search:Hx(u),hash:qx(c)}}function t0(l,r){let s=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Pc(l,r,s,u){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fg(l){return l.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function Rf(l){let r=fg(l);return r.map((s,u)=>u===r.length-1?s.pathname:s.pathnameBase)}function wu(l,r,s,u=!1){let c;typeof l=="string"?c=cn(l):(c={...l},Ce(!c.pathname||!c.pathname.includes("?"),Pc("?","pathname","search",c)),Ce(!c.pathname||!c.pathname.includes("#"),Pc("#","pathname","hash",c)),Ce(!c.search||!c.search.includes("#"),Pc("#","search","hash",c)));let d=l===""||c.pathname==="",m=d?"/":c.pathname,y;if(m==null)y=s;else{let x=r.length-1;if(!u&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),x-=1;c.pathname=T.join("/")}y=x>=0?r[x]:"/"}let v=Lx(c,y),g=m&&m!=="/"&&m.endsWith("/"),w=(d||m===".")&&s.endsWith("/");return!v.pathname.endsWith("/")&&(g||w)&&(v.pathname+="/"),v}var ja=l=>l.join("/").replace(/\/\/+/g,"/"),Bx=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,qx=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Or=class{constructor(l,r,s,u=!1){this.status=l,this.statusText=r||"",this.internal=u,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function _r(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Dr(l){return l.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function mg(l,r){let s=l;if(typeof s!="string"||!cg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let u=s,c=!1;if(dg)try{let d=new URL(window.location.href),m=s.startsWith("//")?new URL(d.protocol+s):new URL(s),y=ga(m.pathname,r);m.origin===d.origin&&y!=null?s=y+m.search+m.hash:c=!0}catch{St(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:c,to:s}}var Zn=Symbol("Uninstrumented");function Yx(l,r){let s={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};l.forEach(c=>c({id:r.id,index:r.index,path:r.path,instrument(d){let m=Object.keys(s);for(let y of m)d[y]&&s[y].push(d[y])}}));let u={};if(typeof r.lazy=="function"&&s.lazy.length>0){let c=di(s.lazy,r.lazy,()=>{});c&&(u.lazy=c)}if(typeof r.lazy=="object"){let c=r.lazy;["middleware","loader","action"].forEach(d=>{let m=c[d],y=s[`lazy.${d}`];if(typeof m=="function"&&y.length>0){let v=di(y,m,()=>{});v&&(u.lazy=Object.assign(u.lazy||{},{[d]:v}))}})}return["loader","action"].forEach(c=>{let d=r[c];if(typeof d=="function"&&s[c].length>0){let m=d[Zn]??d,y=di(s[c],m,(...v)=>a0(v[0]));y&&(c==="loader"&&m.hydrate===!0&&(y.hydrate=!0),y[Zn]=m,u[c]=y)}}),r.middleware&&r.middleware.length>0&&s.middleware.length>0&&(u.middleware=r.middleware.map(c=>{let d=c[Zn]??c,m=di(s.middleware,d,(...y)=>a0(y[0]));return m?(m[Zn]=d,m):c})),u}function Gx(l,r){let s={navigate:[],fetch:[]};if(r.forEach(u=>u({instrument(c){let d=Object.keys(c);for(let m of d)c[m]&&s[m].push(c[m])}})),s.navigate.length>0){let u=l.navigate[Zn]??l.navigate,c=di(s.navigate,u,(...d)=>{let[m,y]=d;return{to:typeof m=="number"||typeof m=="string"?m:m?Ba(m):".",...n0(l,y??{})}});c&&(c[Zn]=u,l.navigate=c)}if(s.fetch.length>0){let u=l.fetch[Zn]??l.fetch,c=di(s.fetch,u,(...d)=>{let[m,,y,v]=d;return{href:y??".",fetcherKey:m,...n0(l,v??{})}});c&&(c[Zn]=u,l.fetch=c)}return l}function di(l,r,s){return l.length===0?null:async(...u)=>{let c=await hg(l,s(...u),()=>r(...u),l.length-1);if(c.type==="error")throw c.value;return c.value}}async function hg(l,r,s,u){let c=l[u],d;if(c){let m,y=async()=>(m?console.error("You cannot call instrumented handlers more than once"):m=hg(l,r,s,u-1),d=await m,Ce(d,"Expected a result"),d.type==="error"&&d.value instanceof Error?{status:"error",error:d.value}:{status:"success",error:void 0});try{await c(y,r)}catch(v){console.error("An instrumentation function threw an error:",v)}m||await y(),await m}else try{d={type:"success",value:await s()}}catch(m){d={type:"error",value:m}}return d||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function a0(l){let{request:r,context:s,params:u,unstable_pattern:c}=l;return{request:Xx(r),params:{...u},unstable_pattern:c,context:Qx(s)}}function n0(l,r){return{currentUrl:Ba(l.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function Xx(l){return{method:l.method,url:l.url,headers:{get:(...r)=>l.headers.get(...r)}}}function Qx(l){if(Zx(l)){let r={...l};return Object.freeze(r),r}else return{get:r=>l.get(r)}}var Vx=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zx(l){if(l===null||typeof l!="object")return!1;const r=Object.getPrototypeOf(l);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===Vx}var pg=["POST","PUT","PATCH","DELETE"],Kx=new Set(pg),$x=["GET",...pg],Jx=new Set($x),gg=new Set([301,302,303,307,308]),kx=new Set([307,308]),Ic={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wx=l=>({hasErrorBoundary:!!l.hasErrorBoundary}),vg="remix-router-transitions",yg=Symbol("ResetLoaderData");function Px(l){const r=l.window?l.window:typeof window<"u"?window:void 0,s=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";Ce(l.routes.length>0,"You must provide a non-empty routes array to createRouter");let u=l.hydrationRouteProperties||[],c=l.mapRouteProperties||Wx,d=c;if(l.unstable_instrumentations){let S=l.unstable_instrumentations;d=R=>({...c(R),...Yx(S.map(M=>M.route).filter(Boolean),R)})}let m={},y=Tr(l.routes,d,void 0,m),v,g=l.basename||"/";g.startsWith("/")||(g=`/${g}`);let w=l.dataStrategy||nb,x={...l.future},T=null,_=new Set,H=null,G=null,V=null,F=l.hydrationData!=null,P=Xn(y,l.history.location,g),k=!1,$=null,ne,te;if(P==null&&!l.patchRoutesOnNavigation){let S=ha(404,{pathname:l.history.location.pathname}),{matches:R,route:M}=eu(y);ne=!0,te=!ne,P=R,$={[M.id]:S}}else if(P&&!l.hydrationData&&gn(P,y,l.history.location.pathname).active&&(P=null),P)if(P.some(S=>S.route.lazy))ne=!1,te=!ne;else if(!P.some(S=>jf(S.route)))ne=!0,te=!ne;else{let S=l.hydrationData?l.hydrationData.loaderData:null,R=l.hydrationData?l.hydrationData.errors:null,M=P;if(R){let K=P.findIndex(I=>R[I.route.id]!==void 0);M=M.slice(0,K+1)}te=!1,ne=M.every(K=>{let I=xg(K.route,S,R);return te=te||I.renderFallback,!I.shouldLoad})}else{ne=!1,te=!ne,P=[];let S=gn(null,y,l.history.location.pathname);S.active&&S.matches&&(k=!0,P=S.matches)}let Q,A={historyAction:l.history.action,location:l.history.location,matches:P,initialized:ne,renderFallback:te,navigation:Ic,restoreScrollPosition:l.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:l.hydrationData&&l.hydrationData.loaderData||{},actionData:l.hydrationData&&l.hydrationData.actionData||null,errors:l.hydrationData&&l.hydrationData.errors||$,fetchers:new Map,blockers:new Map},fe="POP",we=null,he=!1,de,qe=!1,Te=new Map,be=null,N=!1,J=!1,oe=new Set,le=new Map,Ee=0,E=-1,q=new Map,W=new Set,ae=new Map,pe=new Map,ye=new Set,Ae=new Map,at,Ye=null;function _t(){if(T=l.history.listen(({action:S,location:R,delta:M})=>{if(at){at(),at=void 0;return}St(Ae.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=kn({currentLocation:A.location,nextLocation:R,historyAction:S});if(K&&M!=null){let I=new Promise(ue=>{at=ue});l.history.go(M*-1),Xa(K,{state:"blocked",location:R,proceed(){Xa(K,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),I.then(()=>l.history.go(M))},reset(){let ue=new Map(A.blockers);ue.set(K,hr),et({blockers:ue})}}),we?.resolve(),we=null;return}return qa(S,R)}),s){Sb(r,Te);let S=()=>wb(r,Te);r.addEventListener("pagehide",S),be=()=>r.removeEventListener("pagehide",S)}return A.initialized||qa("POP",A.location,{initialHydration:!0}),Q}function Ta(){T&&T(),be&&be(),_.clear(),de&&de.abort(),A.fetchers.forEach((S,R)=>Ga(R)),A.blockers.forEach((S,R)=>Jn(R))}function _a(S){return _.add(S),()=>_.delete(S)}function et(S,R={}){S.matches&&(S.matches=S.matches.map(I=>{let ue=m[I.route.id],ee=I.route;return ee.element!==ue.element||ee.errorElement!==ue.errorElement||ee.hydrateFallbackElement!==ue.hydrateFallbackElement?{...I,route:ue}:I})),A={...A,...S};let M=[],K=[];A.fetchers.forEach((I,ue)=>{I.state==="idle"&&(ye.has(ue)?M.push(ue):K.push(ue))}),ye.forEach(I=>{!A.fetchers.has(I)&&!le.has(I)&&M.push(I)}),[..._].forEach(I=>I(A,{deletedFetchers:M,newErrors:S.errors??null,viewTransitionOpts:R.viewTransitionOpts,flushSync:R.flushSync===!0})),M.forEach(I=>Ga(I)),K.forEach(I=>A.fetchers.delete(I))}function Gt(S,R,{flushSync:M}={}){let K=A.actionData!=null&&A.navigation.formMethod!=null&&Bt(A.navigation.formMethod)&&A.navigation.state==="loading"&&S.state?._isRedirect!==!0,I;R.actionData?Object.keys(R.actionData).length>0?I=R.actionData:I=null:K?I=A.actionData:I=null;let ue=R.loaderData?m0(A.loaderData,R.loaderData,R.matches||[],R.errors):A.loaderData,ee=A.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((xe,me)=>ee.set(me,hr)));let ie=N?!1:Ai(S,R.matches||A.matches),re=he===!0||A.navigation.formMethod!=null&&Bt(A.navigation.formMethod)&&S.state?._isRedirect!==!0;v&&(y=v,v=void 0),N||fe==="POP"||(fe==="PUSH"?l.history.push(S,S.state):fe==="REPLACE"&&l.history.replace(S,S.state));let ge;if(fe==="POP"){let xe=Te.get(A.location.pathname);xe&&xe.has(S.pathname)?ge={currentLocation:A.location,nextLocation:S}:Te.has(S.pathname)&&(ge={currentLocation:S,nextLocation:A.location})}else if(qe){let xe=Te.get(A.location.pathname);xe?xe.add(S.pathname):(xe=new Set([S.pathname]),Te.set(A.location.pathname,xe)),ge={currentLocation:A.location,nextLocation:S}}et({...R,actionData:I,loaderData:ue,historyAction:fe,location:S,initialized:!0,renderFallback:!1,navigation:Ic,revalidation:"idle",restoreScrollPosition:ie,preventScrollReset:re,blockers:ee},{viewTransitionOpts:ge,flushSync:M===!0}),fe="POP",he=!1,qe=!1,N=!1,J=!1,we?.resolve(),we=null,Ye?.resolve(),Ye=null}async function El(S,R){if(we?.resolve(),we=null,typeof S=="number"){we||(we=v0());let Pe=we.promise;return l.history.go(S),Pe}let M=mf(A.location,A.matches,g,S,R?.fromRouteId,R?.relative),{path:K,submission:I,error:ue}=l0(!1,M,R),ee;R?.unstable_mask&&(ee={pathname:"",search:"",hash:"",...typeof R.unstable_mask=="string"?cn(R.unstable_mask):{...A.location.unstable_mask,...R.unstable_mask}});let ie=A.location,re=jr(ie,K,R&&R.state,void 0,ee);re={...re,...l.history.encodeLocation(re)};let ge=R&&R.replace!=null?R.replace:void 0,xe="PUSH";ge===!0?xe="REPLACE":ge===!1||I!=null&&Bt(I.formMethod)&&I.formAction===A.location.pathname+A.location.search&&(xe="REPLACE");let me=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,Xe=(R&&R.flushSync)===!0,Oe=kn({currentLocation:ie,nextLocation:re,historyAction:xe});if(Oe){Xa(Oe,{state:"blocked",location:re,proceed(){Xa(Oe,{state:"proceeding",proceed:void 0,reset:void 0,location:re}),El(S,R)},reset(){let Pe=new Map(A.blockers);Pe.set(Oe,hr),et({blockers:Pe})}});return}await qa(xe,re,{submission:I,pendingError:ue,preventScrollReset:me,replace:R&&R.replace,enableViewTransition:R&&R.viewTransition,flushSync:Xe,callSiteDefaultShouldRevalidate:R&&R.unstable_defaultShouldRevalidate})}function bi(){Ye||(Ye=v0()),hn(),et({revalidation:"loading"});let S=Ye.promise;return A.navigation.state==="submitting"?S:A.navigation.state==="idle"?(qa(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),S):(qa(fe||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:qe===!0}),S)}async function qa(S,R,M){de&&de.abort(),de=null,fe=S,N=(M&&M.startUninterruptedRevalidation)===!0,Mu(A.location,A.matches),he=(M&&M.preventScrollReset)===!0,qe=(M&&M.enableViewTransition)===!0;let K=v||y,I=M&&M.overrideNavigation,ue=M?.initialHydration&&A.matches&&A.matches.length>0&&!k?A.matches:Xn(K,R,g),ee=(M&&M.flushSync)===!0;if(ue&&A.initialized&&!J&&fb(A.location,R)&&!(M&&M.submission&&Bt(M.submission.formMethod))){Gt(R,{matches:ue},{flushSync:ee});return}let ie=gn(ue,K,R.pathname);if(ie.active&&ie.matches&&(ue=ie.matches),!ue){let{error:nt,notFoundMatches:st,route:He}=ba(R.pathname);Gt(R,{matches:st,loaderData:{},errors:{[He.id]:nt}},{flushSync:ee});return}de=new AbortController;let re=fi(l.history,R,de.signal,M&&M.submission),ge=l.getContext?await l.getContext():new Pp,xe;if(M&&M.pendingError)xe=[Qn(ue).route.id,{type:"error",error:M.pendingError}];else if(M&&M.submission&&Bt(M.submission.formMethod)){let nt=await Ur(re,R,M.submission,ue,ge,ie.active,M&&M.initialHydration===!0,{replace:M.replace,flushSync:ee});if(nt.shortCircuited)return;if(nt.pendingActionResult){let[st,He]=nt.pendingActionResult;if(aa(He)&&_r(He.error)&&He.error.status===404){de=null,Gt(R,{matches:nt.matches,loaderData:{},errors:{[st]:He.error}});return}}ue=nt.matches||ue,xe=nt.pendingActionResult,I=ef(R,M.submission),ee=!1,ie.active=!1,re=fi(l.history,re.url,re.signal)}let{shortCircuited:me,matches:Xe,loaderData:Oe,errors:Pe}=await Si(re,R,ue,ge,ie.active,I,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ee,xe,M&&M.callSiteDefaultShouldRevalidate);me||(de=null,Gt(R,{matches:Xe||ue,...h0(xe),loaderData:Oe,errors:Pe}))}async function Ur(S,R,M,K,I,ue,ee,ie={}){hn();let re=xb(R,M);if(et({navigation:re},{flushSync:ie.flushSync===!0}),ue){let me=await Oa(K,R.pathname,S.signal);if(me.type==="aborted")return{shortCircuited:!0};if(me.type==="error"){if(me.partialMatches.length===0){let{matches:Oe,route:Pe}=eu(y);return{matches:Oe,pendingActionResult:[Pe.id,{type:"error",error:me.error}]}}let Xe=Qn(me.partialMatches).route.id;return{matches:me.partialMatches,pendingActionResult:[Xe,{type:"error",error:me.error}]}}else if(me.matches)K=me.matches;else{let{notFoundMatches:Xe,error:Oe,route:Pe}=ba(R.pathname);return{matches:Xe,pendingActionResult:[Pe.id,{type:"error",error:Oe}]}}}let ge,xe=uu(K,R);if(!xe.route.action&&!xe.route.lazy)ge={type:"error",error:ha(405,{method:S.method,pathname:R.pathname,routeId:xe.route.id})};else{let me=mi(d,m,S,K,xe,ee?[]:u,I),Xe=await mn(S,me,I,null);if(ge=Xe[xe.route.id],!ge){for(let Oe of K)if(Xe[Oe.route.id]){ge=Xe[Oe.route.id];break}}if(S.signal.aborted)return{shortCircuited:!0}}if(vl(ge)){let me;return ie&&ie.replace!=null?me=ie.replace:me=c0(ge.response.headers.get("Location"),new URL(S.url),g,l.history)===A.location.pathname+A.location.search,await Ya(S,ge,!0,{submission:M,replace:me}),{shortCircuited:!0}}if(aa(ge)){let me=Qn(K,xe.route.id);return(ie&&ie.replace)!==!0&&(fe="PUSH"),{matches:K,pendingActionResult:[me.route.id,ge,xe.route.id]}}return{matches:K,pendingActionResult:[xe.route.id,ge]}}async function Si(S,R,M,K,I,ue,ee,ie,re,ge,xe,me,Xe){let Oe=ue||ef(R,ee),Pe=ee||ie||g0(Oe),nt=!N&&!ge;if(I){if(nt){let dt=Al(me);et({navigation:Oe,...dt!==void 0?{actionData:dt}:{}},{flushSync:xe})}let De=await Oa(M,R.pathname,S.signal);if(De.type==="aborted")return{shortCircuited:!0};if(De.type==="error"){if(De.partialMatches.length===0){let{matches:Ut,route:pt}=eu(y);return{matches:Ut,loaderData:{},errors:{[pt.id]:De.error}}}let dt=Qn(De.partialMatches).route.id;return{matches:De.partialMatches,loaderData:{},errors:{[dt]:De.error}}}else if(De.matches)M=De.matches;else{let{error:dt,notFoundMatches:Ut,route:pt}=ba(R.pathname);return{matches:Ut,loaderData:{},errors:{[pt.id]:dt}}}}let st=v||y,{dsMatches:He,revalidatingFetchers:wt}=i0(S,K,d,m,l.history,A,M,Pe,R,ge?[]:u,ge===!0,J,oe,ye,ae,W,st,g,l.patchRoutesOnNavigation!=null,me,Xe);if(E=++Ee,!l.dataStrategy&&!He.some(De=>De.shouldLoad)&&!He.some(De=>De.route.middleware&&De.route.middleware.length>0)&&wt.length===0){let De=Br();return Gt(R,{matches:M,loaderData:{},errors:me&&aa(me[1])?{[me[0]]:me[1].error}:null,...h0(me),...De?{fetchers:new Map(A.fetchers)}:{}},{flushSync:xe}),{shortCircuited:!0}}if(nt){let De={};if(!I){De.navigation=Oe;let dt=Al(me);dt!==void 0&&(De.actionData=dt)}wt.length>0&&(De.fetchers=wi(wt)),et(De,{flushSync:xe})}wt.forEach(De=>{zt(De.key),De.controller&&le.set(De.key,De.controller)});let tt=()=>wt.forEach(De=>zt(De.key));de&&de.signal.addEventListener("abort",tt);let{loaderResults:vn,fetcherResults:Sa}=await Ei(He,wt,S,K);if(S.signal.aborted)return{shortCircuited:!0};de&&de.signal.removeEventListener("abort",tt),wt.forEach(De=>le.delete(De.key));let Rt=tu(vn);if(Rt)return await Ya(S,Rt.result,!0,{replace:re}),{shortCircuited:!0};if(Rt=tu(Sa),Rt)return W.add(Rt.key),await Ya(S,Rt.result,!0,{replace:re}),{shortCircuited:!0};let{loaderData:Da,errors:Fn}=d0(A,M,vn,me,wt,Sa);ge&&A.errors&&(Fn={...A.errors,...Fn});let Ca=Br(),Wn=Hr(E),Rl=Ca||Wn||wt.length>0;return{matches:M,loaderData:Da,errors:Fn,...Rl?{fetchers:new Map(A.fetchers)}:{}}}function Al(S){if(S&&!aa(S[1]))return{[S[0]]:S[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function wi(S){return S.forEach(R=>{let M=A.fetchers.get(R.key),K=pr(void 0,M?M.data:void 0);A.fetchers.set(R.key,K)}),new Map(A.fetchers)}async function _u(S,R,M,K){zt(S);let I=(K&&K.flushSync)===!0,ue=v||y,ee=mf(A.location,A.matches,g,M,R,K?.relative),ie=Xn(ue,ee,g),re=gn(ie,ue,ee);if(re.active&&re.matches&&(ie=re.matches),!ie){la(S,R,ha(404,{pathname:ee}),{flushSync:I});return}let{path:ge,submission:xe,error:me}=l0(!0,ee,K);if(me){la(S,R,me,{flushSync:I});return}let Xe=l.getContext?await l.getContext():new Pp,Oe=(K&&K.preventScrollReset)===!0;if(xe&&Bt(xe.formMethod)){await Ou(S,R,ge,ie,Xe,re.active,I,Oe,xe,K&&K.unstable_defaultShouldRevalidate);return}ae.set(S,{routeId:R,path:ge}),await Ht(S,R,ge,ie,Xe,re.active,I,Oe,xe)}async function Ou(S,R,M,K,I,ue,ee,ie,re,ge){hn(),ae.delete(S);let xe=A.fetchers.get(S);xa(S,bb(re,xe),{flushSync:ee});let me=new AbortController,Xe=fi(l.history,M,me.signal,re);if(ue){let lt=await Oa(K,new URL(Xe.url).pathname,Xe.signal,S);if(lt.type==="aborted")return;if(lt.type==="error"){la(S,R,lt.error,{flushSync:ee});return}else if(lt.matches)K=lt.matches;else{la(S,R,ha(404,{pathname:M}),{flushSync:ee});return}}let Oe=uu(K,M);if(!Oe.route.action&&!Oe.route.lazy){let lt=ha(405,{method:re.formMethod,pathname:M,routeId:R});la(S,R,lt,{flushSync:ee});return}le.set(S,me);let Pe=Ee,nt=mi(d,m,Xe,K,Oe,u,I),st=await mn(Xe,nt,I,S),He=st[Oe.route.id];if(!He){for(let lt of nt)if(st[lt.route.id]){He=st[lt.route.id];break}}if(Xe.signal.aborted){le.get(S)===me&&le.delete(S);return}if(ye.has(S)){if(vl(He)||aa(He)){xa(S,on(void 0));return}}else{if(vl(He))if(le.delete(S),E>Pe){xa(S,on(void 0));return}else return W.add(S),xa(S,pr(re)),Ya(Xe,He,!1,{fetcherSubmission:re,preventScrollReset:ie});if(aa(He)){la(S,R,He.error);return}}let wt=A.navigation.location||A.location,tt=fi(l.history,wt,me.signal),vn=v||y,Sa=A.navigation.state!=="idle"?Xn(vn,A.navigation.location,g):A.matches;Ce(Sa,"Didn't find any matches after fetcher action");let Rt=++Ee;q.set(S,Rt);let Da=pr(re,He.data);A.fetchers.set(S,Da);let{dsMatches:Fn,revalidatingFetchers:Ca}=i0(tt,I,d,m,l.history,A,Sa,re,wt,u,!1,J,oe,ye,ae,W,vn,g,l.patchRoutesOnNavigation!=null,[Oe.route.id,He],ge);Ca.filter(lt=>lt.key!==S).forEach(lt=>{let jl=lt.key,Tl=A.fetchers.get(jl),Xr=pr(void 0,Tl?Tl.data:void 0);A.fetchers.set(jl,Xr),zt(jl),lt.controller&&le.set(jl,lt.controller)}),et({fetchers:new Map(A.fetchers)});let Wn=()=>Ca.forEach(lt=>zt(lt.key));me.signal.addEventListener("abort",Wn);let{loaderResults:Rl,fetcherResults:De}=await Ei(Fn,Ca,tt,I);if(me.signal.aborted)return;if(me.signal.removeEventListener("abort",Wn),q.delete(S),le.delete(S),Ca.forEach(lt=>le.delete(lt.key)),A.fetchers.has(S)){let lt=on(He.data);A.fetchers.set(S,lt)}let dt=tu(Rl);if(dt)return Ya(tt,dt.result,!1,{preventScrollReset:ie});if(dt=tu(De),dt)return W.add(dt.key),Ya(tt,dt.result,!1,{preventScrollReset:ie});let{loaderData:Ut,errors:pt}=d0(A,Sa,Rl,void 0,Ca,De);Hr(Rt),A.navigation.state==="loading"&&Rt>E?(Ce(fe,"Expected pending action"),de&&de.abort(),Gt(A.navigation.location,{matches:Sa,loaderData:Ut,errors:pt,fetchers:new Map(A.fetchers)})):(et({errors:pt,loaderData:m0(A.loaderData,Ut,Sa,pt),fetchers:new Map(A.fetchers)}),J=!1)}async function Ht(S,R,M,K,I,ue,ee,ie,re){let ge=A.fetchers.get(S);xa(S,pr(re,ge?ge.data:void 0),{flushSync:ee});let xe=new AbortController,me=fi(l.history,M,xe.signal);if(ue){let He=await Oa(K,new URL(me.url).pathname,me.signal,S);if(He.type==="aborted")return;if(He.type==="error"){la(S,R,He.error,{flushSync:ee});return}else if(He.matches)K=He.matches;else{la(S,R,ha(404,{pathname:M}),{flushSync:ee});return}}let Xe=uu(K,M);le.set(S,xe);let Oe=Ee,Pe=mi(d,m,me,K,Xe,u,I),st=(await mn(me,Pe,I,S))[Xe.route.id];if(le.get(S)===xe&&le.delete(S),!me.signal.aborted){if(ye.has(S)){xa(S,on(void 0));return}if(vl(st))if(E>Oe){xa(S,on(void 0));return}else{W.add(S),await Ya(me,st,!1,{preventScrollReset:ie});return}if(aa(st)){la(S,R,st.error);return}xa(S,on(st.data))}}async function Ya(S,R,M,{submission:K,fetcherSubmission:I,preventScrollReset:ue,replace:ee}={}){M||(we?.resolve(),we=null),R.response.headers.has("X-Remix-Revalidate")&&(J=!0);let ie=R.response.headers.get("Location");Ce(ie,"Expected a Location header on the redirect Response"),ie=c0(ie,new URL(S.url),g,l.history);let re=jr(A.location,ie,{_isRedirect:!0});if(s){let Pe=!1;if(R.response.headers.has("X-Remix-Reload-Document"))Pe=!0;else if(zf(ie)){const nt=og(ie,!0);Pe=nt.origin!==r.location.origin||ga(nt.pathname,g)==null}if(Pe){ee?r.location.replace(ie):r.location.assign(ie);return}}de=null;let ge=ee===!0||R.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:xe,formAction:me,formEncType:Xe}=A.navigation;!K&&!I&&xe&&me&&Xe&&(K=g0(A.navigation));let Oe=K||I;if(kx.has(R.response.status)&&Oe&&Bt(Oe.formMethod))await qa(ge,re,{submission:{...Oe,formAction:ie},preventScrollReset:ue||he,enableViewTransition:M?qe:void 0});else{let Pe=ef(re,K);await qa(ge,re,{overrideNavigation:Pe,fetcherSubmission:I,preventScrollReset:ue||he,enableViewTransition:M?qe:void 0})}}async function mn(S,R,M,K){let I,ue={};try{I=await ib(w,S,R,K,M,!1)}catch(ee){return R.filter(ie=>ie.shouldLoad).forEach(ie=>{ue[ie.route.id]={type:"error",error:ee}}),ue}if(S.signal.aborted)return ue;if(!Bt(S.method))for(let ee of R){if(I[ee.route.id]?.type==="error")break;!I.hasOwnProperty(ee.route.id)&&!A.loaderData.hasOwnProperty(ee.route.id)&&(!A.errors||!A.errors.hasOwnProperty(ee.route.id))&&ee.shouldCallHandler()&&(I[ee.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${ee.route.id}`)})}for(let[ee,ie]of Object.entries(I))if(pb(ie)){let re=ie.result;ue[ee]={type:"redirect",response:sb(re,S,ee,R,g)}}else ue[ee]=await ub(ie);return ue}async function Ei(S,R,M,K){let I=mn(M,S,K,null),ue=Promise.all(R.map(async re=>{if(re.matches&&re.match&&re.request&&re.controller){let xe=(await mn(re.request,re.matches,K,re.key))[re.match.route.id];return{[re.key]:xe}}else return Promise.resolve({[re.key]:{type:"error",error:ha(404,{pathname:re.path})}})})),ee=await I,ie=(await ue).reduce((re,ge)=>Object.assign(re,ge),{});return{loaderResults:ee,fetcherResults:ie}}function hn(){J=!0,ae.forEach((S,R)=>{le.has(R)&&oe.add(R),zt(R)})}function xa(S,R,M={}){A.fetchers.set(S,R),et({fetchers:new Map(A.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function la(S,R,M,K={}){let I=Qn(A.matches,R);Ga(S),et({errors:{[I.route.id]:M},fetchers:new Map(A.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function Lr(S){return pe.set(S,(pe.get(S)||0)+1),ye.has(S)&&ye.delete(S),A.fetchers.get(S)||Fx}function Du(S,R){zt(S,R?.reason),xa(S,on(null))}function Ga(S){let R=A.fetchers.get(S);le.has(S)&&!(R&&R.state==="loading"&&q.has(S))&&zt(S),ae.delete(S),q.delete(S),W.delete(S),ye.delete(S),oe.delete(S),A.fetchers.delete(S)}function qt(S){let R=(pe.get(S)||0)-1;R<=0?(pe.delete(S),ye.add(S)):pe.set(S,R),et({fetchers:new Map(A.fetchers)})}function zt(S,R){let M=le.get(S);M&&(M.abort(R),le.delete(S))}function Nt(S){for(let R of S){let M=Lr(R),K=on(M.data);A.fetchers.set(R,K)}}function Br(){let S=[],R=!1;for(let M of W){let K=A.fetchers.get(M);Ce(K,`Expected fetcher: ${M}`),K.state==="loading"&&(W.delete(M),S.push(M),R=!0)}return Nt(S),R}function Hr(S){let R=[];for(let[M,K]of q)if(K<S){let I=A.fetchers.get(M);Ce(I,`Expected fetcher: ${M}`),I.state==="loading"&&(zt(M),q.delete(M),R.push(M))}return Nt(R),R.length>0}function Cu(S,R){let M=A.blockers.get(S)||hr;return Ae.get(S)!==R&&Ae.set(S,R),M}function Jn(S){A.blockers.delete(S),Ae.delete(S)}function Xa(S,R){let M=A.blockers.get(S)||hr;Ce(M.state==="unblocked"&&R.state==="blocked"||M.state==="blocked"&&R.state==="blocked"||M.state==="blocked"&&R.state==="proceeding"||M.state==="blocked"&&R.state==="unblocked"||M.state==="proceeding"&&R.state==="unblocked",`Invalid blocker state transition: ${M.state} -> ${R.state}`);let K=new Map(A.blockers);K.set(S,R),et({blockers:K})}function kn({currentLocation:S,nextLocation:R,historyAction:M}){if(Ae.size===0)return;Ae.size>1&&St(!1,"A router only supports one blocker at a time");let K=Array.from(Ae.entries()),[I,ue]=K[K.length-1],ee=A.blockers.get(I);if(!(ee&&ee.state==="proceeding")&&ue({currentLocation:S,nextLocation:R,historyAction:M}))return I}function ba(S){let R=ha(404,{pathname:S}),M=v||y,{matches:K,route:I}=eu(M);return{notFoundMatches:K,route:I,error:R}}function zl(S,R,M){if(H=S,V=R,G=M||null,!F&&A.navigation===Ic){F=!0;let K=Ai(A.location,A.matches);K!=null&&et({restoreScrollPosition:K})}return()=>{H=null,V=null,G=null}}function pn(S,R){return G&&G(S,R.map(K=>wx(K,A.loaderData)))||S.key}function Mu(S,R){if(H&&V){let M=pn(S,R);H[M]=V()}}function Ai(S,R){if(H){let M=pn(S,R),K=H[M];if(typeof K=="number")return K}return null}function gn(S,R,M){if(l.patchRoutesOnNavigation)if(S){if(Object.keys(S[0].params).length>0)return{active:!0,matches:br(R,M,g,!0)}}else return{active:!0,matches:br(R,M,g,!0)||[]};return{active:!1,matches:null}}async function Oa(S,R,M,K){if(!l.patchRoutesOnNavigation)return{type:"success",matches:S};let I=S;for(;;){let ue=v==null,ee=v||y,ie=m;try{await l.patchRoutesOnNavigation({signal:M,path:R,matches:I,fetcherKey:K,patch:(xe,me)=>{M.aborted||r0(xe,me,ee,ie,d,!1)}})}catch(xe){return{type:"error",error:xe,partialMatches:I}}finally{ue&&!M.aborted&&(y=[...y])}if(M.aborted)return{type:"aborted"};let re=Xn(ee,R,g),ge=null;if(re){if(Object.keys(re[0].params).length===0)return{type:"success",matches:re};if(ge=br(ee,R,g,!0),!(ge&&I.length<ge.length&&qr(I,ge.slice(0,I.length))))return{type:"success",matches:re}}if(ge||(ge=br(ee,R,g,!0)),!ge||qr(I,ge))return{type:"success",matches:null};I=ge}}function qr(S,R){return S.length===R.length&&S.every((M,K)=>M.route.id===R[K].route.id)}function Yr(S){m={},v=Tr(S,d,void 0,m)}function Gr(S,R,M=!1){let K=v==null;r0(S,R,v||y,m,d,M),K&&(y=[...y],et({}))}return Q={get basename(){return g},get future(){return x},get state(){return A},get routes(){return y},get window(){return r},initialize:_t,subscribe:_a,enableScrollRestoration:zl,navigate:El,fetch:_u,revalidate:bi,createHref:S=>l.history.createHref(S),encodeLocation:S=>l.history.encodeLocation(S),getFetcher:Lr,resetFetcher:Du,deleteFetcher:qt,dispose:Ta,getBlocker:Cu,deleteBlocker:Jn,patchRoutes:Gr,_internalFetchControllers:le,_internalSetRoutes:Yr,_internalSetStateDoNotUseOrYouWillBreakYourApp(S){et(S)}},l.unstable_instrumentations&&(Q=Gx(Q,l.unstable_instrumentations.map(S=>S.router).filter(Boolean))),Q}function Ix(l){return l!=null&&("formData"in l&&l.formData!=null||"body"in l&&l.body!==void 0)}function mf(l,r,s,u,c,d){let m,y;if(c){m=[];for(let g of r)if(m.push(g),g.route.id===c){y=g;break}}else m=r,y=r[r.length-1];let v=wu(u||".",Rf(m),ga(l.pathname,s)||l.pathname,d==="path");if(u==null&&(v.search=l.search,v.hash=l.hash),(u==null||u===""||u===".")&&y){let g=_f(v.search);if(y.route.index&&!g)v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index";else if(!y.route.index&&g){let w=new URLSearchParams(v.search),x=w.getAll("index");w.delete("index"),x.filter(_=>_).forEach(_=>w.append("index",_));let T=w.toString();v.search=T?`?${T}`:""}}return s!=="/"&&(v.pathname=Ux({basename:s,pathname:v.pathname})),Ba(v)}function l0(l,r,s){if(!s||!Ix(s))return{path:r};if(s.formMethod&&!yb(s.formMethod))return{path:r,error:ha(405,{method:s.formMethod})};let u=()=>({path:r,error:ha(400,{type:"invalid-body"})}),d=(s.formMethod||"get").toUpperCase(),m=zg(r);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!Bt(d))return u();let x=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((T,[_,H])=>`${T}${_}=${H}
`,""):String(s.body);return{path:r,submission:{formMethod:d,formAction:m,formEncType:s.formEncType,formData:void 0,json:void 0,text:x}}}else if(s.formEncType==="application/json"){if(!Bt(d))return u();try{let x=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:r,submission:{formMethod:d,formAction:m,formEncType:s.formEncType,formData:void 0,json:x,text:void 0}}}catch{return u()}}}Ce(typeof FormData=="function","FormData is not available in this environment");let y,v;if(s.formData)y=pf(s.formData),v=s.formData;else if(s.body instanceof FormData)y=pf(s.body),v=s.body;else if(s.body instanceof URLSearchParams)y=s.body,v=f0(y);else if(s.body==null)y=new URLSearchParams,v=new FormData;else try{y=new URLSearchParams(s.body),v=f0(y)}catch{return u()}let g={formMethod:d,formAction:m,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(Bt(g.formMethod))return{path:r,submission:g};let w=cn(r);return l&&w.search&&_f(w.search)&&y.append("index",""),w.search=`?${y}`,{path:Ba(w),submission:g}}function i0(l,r,s,u,c,d,m,y,v,g,w,x,T,_,H,G,V,F,P,k,$){let ne=k?aa(k[1])?k[1].error:k[1].data:void 0,te=c.createURL(d.location),Q=c.createURL(v),A;if(w&&d.errors){let be=Object.keys(d.errors)[0];A=m.findIndex(N=>N.route.id===be)}else if(k&&aa(k[1])){let be=k[0];A=m.findIndex(N=>N.route.id===be)-1}let fe=k?k[1].statusCode:void 0,we=fe&&fe>=400,he={currentUrl:te,currentParams:d.matches[0]?.params||{},nextUrl:Q,nextParams:m[0].params,...y,actionResult:ne,actionStatus:fe},de=Dr(m),qe=m.map((be,N)=>{let{route:J}=be,oe=null;if(A!=null&&N>A)oe=!1;else if(J.lazy)oe=!0;else if(!jf(J))oe=!1;else if(w){let{shouldLoad:q}=xg(J,d.loaderData,d.errors);oe=q}else eb(d.loaderData,d.matches[N],be)&&(oe=!0);if(oe!==null)return hf(s,u,l,de,be,g,r,oe);let le=!1;typeof $=="boolean"?le=$:we?le=!1:(x||te.pathname+te.search===Q.pathname+Q.search||te.search!==Q.search||tb(d.matches[N],be))&&(le=!0);let Ee={...he,defaultShouldRevalidate:le},E=Er(be,Ee);return hf(s,u,l,de,be,g,r,E,Ee,$)}),Te=[];return H.forEach((be,N)=>{if(w||!m.some(ae=>ae.route.id===be.routeId)||_.has(N))return;let J=d.fetchers.get(N),oe=J&&J.state!=="idle"&&J.data===void 0,le=Xn(V,be.path,F);if(!le){if(P&&oe)return;Te.push({key:N,routeId:be.routeId,path:be.path,matches:null,match:null,request:null,controller:null});return}if(G.has(N))return;let Ee=uu(le,be.path),E=new AbortController,q=fi(c,be.path,E.signal),W=null;if(T.has(N))T.delete(N),W=mi(s,u,q,le,Ee,g,r);else if(oe)x&&(W=mi(s,u,q,le,Ee,g,r));else{let ae;typeof $=="boolean"?ae=$:we?ae=!1:ae=x;let pe={...he,defaultShouldRevalidate:ae};Er(Ee,pe)&&(W=mi(s,u,q,le,Ee,g,r,pe))}W&&Te.push({key:N,routeId:be.routeId,path:be.path,matches:W,match:Ee,request:q,controller:E})}),{dsMatches:qe,revalidatingFetchers:Te}}function jf(l){return l.loader!=null||l.middleware!=null&&l.middleware.length>0}function xg(l,r,s){if(l.lazy)return{shouldLoad:!0,renderFallback:!0};if(!jf(l))return{shouldLoad:!1,renderFallback:!1};let u=r!=null&&l.id in r,c=s!=null&&s[l.id]!==void 0;if(!u&&c)return{shouldLoad:!1,renderFallback:!1};if(typeof l.loader=="function"&&l.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!u};let d=!u&&!c;return{shouldLoad:d,renderFallback:d}}function eb(l,r,s){let u=!r||s.route.id!==r.route.id,c=!l.hasOwnProperty(s.route.id);return u||c}function tb(l,r){let s=l.route.path;return l.pathname!==r.pathname||s!=null&&s.endsWith("*")&&l.params["*"]!==r.params["*"]}function Er(l,r){if(l.route.shouldRevalidate){let s=l.route.shouldRevalidate(r);if(typeof s=="boolean")return s}return r.defaultShouldRevalidate}function r0(l,r,s,u,c,d){let m;if(l){let g=u[l];Ce(g,`No route found to patch children into: routeId = ${l}`),g.children||(g.children=[]),m=g.children}else m=s;let y=[],v=[];if(r.forEach(g=>{let w=m.find(x=>bg(g,x));w?v.push({existingRoute:w,newRoute:g}):y.push(g)}),y.length>0){let g=Tr(y,c,[l||"_","patch",String(m?.length||"0")],u);m.push(...g)}if(d&&v.length>0)for(let g=0;g<v.length;g++){let{existingRoute:w,newRoute:x}=v[g],T=w,[_]=Tr([x],c,[],{},!0);Object.assign(T,{element:_.element?_.element:T.element,errorElement:_.errorElement?_.errorElement:T.errorElement,hydrateFallbackElement:_.hydrateFallbackElement?_.hydrateFallbackElement:T.hydrateFallbackElement})}}function bg(l,r){return"id"in l&&"id"in r&&l.id===r.id?!0:l.index===r.index&&l.path===r.path&&l.caseSensitive===r.caseSensitive?(!l.children||l.children.length===0)&&(!r.children||r.children.length===0)?!0:l.children?.every((s,u)=>r.children?.some(c=>bg(s,c)))??!1:!1}var o0=new WeakMap,Sg=({key:l,route:r,manifest:s,mapRouteProperties:u})=>{let c=s[r.id];if(Ce(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let d=c.lazy[l];if(!d)return;let m=o0.get(c);m||(m={},o0.set(c,m));let y=m[l];if(y)return y;let v=(async()=>{let g=yx(l),x=c[l]!==void 0&&l!=="hasErrorBoundary";if(g)St(!g,"Route property "+l+" is not a supported lazy route property. This property will be ignored."),m[l]=Promise.resolve();else if(x)St(!1,`Route "${c.id}" has a static property "${l}" defined. The lazy property will be ignored.`);else{let T=await d();T!=null&&(Object.assign(c,{[l]:T}),Object.assign(c,u(c)))}typeof c.lazy=="object"&&(c.lazy[l]=void 0,Object.values(c.lazy).every(T=>T===void 0)&&(c.lazy=void 0))})();return m[l]=v,v},u0=new WeakMap;function ab(l,r,s,u,c){let d=s[l.id];if(Ce(d,"No route found in manifest"),!l.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof l.lazy=="function"){let w=u0.get(d);if(w)return{lazyRoutePromise:w,lazyHandlerPromise:w};let x=(async()=>{Ce(typeof l.lazy=="function","No lazy route function found");let T=await l.lazy(),_={};for(let H in T){let G=T[H];if(G===void 0)continue;let V=bx(H),P=d[H]!==void 0&&H!=="hasErrorBoundary";V?St(!V,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):P?St(!P,`Route "${d.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):_[H]=G}Object.assign(d,_),Object.assign(d,{...u(d),lazy:void 0})})();return u0.set(d,x),x.catch(()=>{}),{lazyRoutePromise:x,lazyHandlerPromise:x}}let m=Object.keys(l.lazy),y=[],v;for(let w of m){if(c&&c.includes(w))continue;let x=Sg({key:w,route:l,manifest:s,mapRouteProperties:u});x&&(y.push(x),w===r&&(v=x))}let g=y.length>0?Promise.all(y).then(()=>{}):void 0;return g?.catch(()=>{}),v?.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:v}}async function s0(l){let r=l.matches.filter(c=>c.shouldLoad),s={};return(await Promise.all(r.map(c=>c.resolve()))).forEach((c,d)=>{s[r[d].route.id]=c}),s}async function nb(l){return l.matches.some(r=>r.route.middleware)?wg(l,()=>s0(l)):s0(l)}function wg(l,r){return lb(l,r,u=>{if(vb(u))throw u;return u},mb,s);function s(u,c,d){if(d)return Promise.resolve(Object.assign(d.value,{[c]:{type:"error",result:u}}));{let{matches:m}=l,y=Math.min(Math.max(m.findIndex(g=>g.route.id===c),0),Math.max(m.findIndex(g=>g.shouldCallHandler()),0)),v=Qn(m,m[y].route.id).route.id;return Promise.resolve({[v]:{type:"error",result:u}})}}}async function lb(l,r,s,u,c){let{matches:d,request:m,params:y,context:v,unstable_pattern:g}=l,w=d.flatMap(T=>T.route.middleware?T.route.middleware.map(_=>[T.route.id,_]):[]);return await Eg({request:m,params:y,context:v,unstable_pattern:g},w,r,s,u,c)}async function Eg(l,r,s,u,c,d,m=0){let{request:y}=l;if(y.signal.aborted)throw y.signal.reason??new Error(`Request aborted: ${y.method} ${y.url}`);let v=r[m];if(!v)return await s();let[g,w]=v,x,T=async()=>{if(x)throw new Error("You may only call `next()` once per middleware");try{return x={value:await Eg(l,r,s,u,c,d,m+1)},x.value}catch(_){return x={value:await d(_,g,x)},x.value}};try{let _=await w(l,T),H=_!=null?u(_):void 0;return c(H)?H:x?H??x.value:(x={value:await T()},x.value)}catch(_){return await d(_,g,x)}}function Ag(l,r,s,u,c){let d=Sg({key:"middleware",route:u.route,manifest:r,mapRouteProperties:l}),m=ab(u.route,Bt(s.method)?"action":"loader",r,l,c);return{middleware:d,route:m.lazyRoutePromise,handler:m.lazyHandlerPromise}}function hf(l,r,s,u,c,d,m,y,v=null,g){let w=!1,x=Ag(l,r,s,c,d);return{...c,_lazyPromises:x,shouldLoad:y,shouldRevalidateArgs:v,shouldCallHandler(T){return w=!0,v?typeof g=="boolean"?Er(c,{...v,defaultShouldRevalidate:g}):typeof T=="boolean"?Er(c,{...v,defaultShouldRevalidate:T}):Er(c,v):y},resolve(T){let{lazy:_,loader:H,middleware:G}=c.route,V=w||y||T&&!Bt(s.method)&&(_||H),F=G&&G.length>0&&!H&&!_;return V&&(Bt(s.method)||!F)?rb({request:s,unstable_pattern:u,match:c,lazyHandlerPromise:x?.handler,lazyRoutePromise:x?.route,handlerOverride:T,scopedContext:m}):Promise.resolve({type:"data",result:void 0})}}}function mi(l,r,s,u,c,d,m,y=null){return u.map(v=>v.route.id!==c.route.id?{...v,shouldLoad:!1,shouldRevalidateArgs:y,shouldCallHandler:()=>!1,_lazyPromises:Ag(l,r,s,v,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:hf(l,r,s,Dr(u),v,d,m,!0,y))}async function ib(l,r,s,u,c,d){s.some(g=>g._lazyPromises?.middleware)&&await Promise.all(s.map(g=>g._lazyPromises?.middleware));let m={request:r,unstable_pattern:Dr(s),params:s[0].params,context:c,matches:s},v=await l({...m,fetcherKey:u,runClientMiddleware:g=>{let w=m;return wg(w,()=>g({...w,fetcherKey:u,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(s.flatMap(g=>[g._lazyPromises?.handler,g._lazyPromises?.route]))}catch{}return v}async function rb({request:l,unstable_pattern:r,match:s,lazyHandlerPromise:u,lazyRoutePromise:c,handlerOverride:d,scopedContext:m}){let y,v,g=Bt(l.method),w=g?"action":"loader",x=T=>{let _,H=new Promise((F,P)=>_=P);v=()=>_(),l.signal.addEventListener("abort",v);let G=F=>typeof T!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${w}" [routeId: ${s.route.id}]`)):T({request:l,unstable_pattern:r,params:s.params,context:m},...F!==void 0?[F]:[]),V=(async()=>{try{return{type:"data",result:await(d?d(P=>G(P)):G())}}catch(F){return{type:"error",result:F}}})();return Promise.race([V,H])};try{let T=g?s.route.action:s.route.loader;if(u||c)if(T){let _,[H]=await Promise.all([x(T).catch(G=>{_=G}),u,c]);if(_!==void 0)throw _;y=H}else{await u;let _=g?s.route.action:s.route.loader;if(_)[y]=await Promise.all([x(_),c]);else if(w==="action"){let H=new URL(l.url),G=H.pathname+H.search;throw ha(405,{method:l.method,pathname:G,routeId:s.route.id})}else return{type:"data",result:void 0}}else if(T)y=await x(T);else{let _=new URL(l.url),H=_.pathname+_.search;throw ha(404,{pathname:H})}}catch(T){return{type:"error",result:T}}finally{v&&l.signal.removeEventListener("abort",v)}return y}async function ob(l){let r=l.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?l.body==null?null:l.json():l.text()}async function ub(l){let{result:r,type:s}=l;if(Tf(r)){let u;try{u=await ob(r)}catch(c){return{type:"error",error:c}}return s==="error"?{type:"error",error:new Or(r.status,r.statusText,u),statusCode:r.status,headers:r.headers}:{type:"data",data:u,statusCode:r.status,headers:r.headers}}return s==="error"?p0(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:db(r),statusCode:_r(r)?r.status:void 0,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:_r(r)?r.status:void 0}:p0(r)?{type:"data",data:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function sb(l,r,s,u,c){let d=l.headers.get("Location");if(Ce(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!zf(d)){let m=u.slice(0,u.findIndex(y=>y.route.id===s)+1);d=mf(new URL(r.url),m,c,d),l.headers.set("Location",d)}return l}function c0(l,r,s,u){let c=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(zf(l)){let d=l,m=d.startsWith("//")?new URL(r.protocol+d):new URL(d);if(c.includes(m.protocol))throw new Error("Invalid redirect location");let y=ga(m.pathname,s)!=null;if(m.origin===r.origin&&y)return m.pathname+m.search+m.hash}try{let d=u.createURL(l);if(c.includes(d.protocol))throw new Error("Invalid redirect location")}catch{}return l}function fi(l,r,s,u){let c=l.createURL(zg(r)).toString(),d={signal:s};if(u&&Bt(u.formMethod)){let{formMethod:m,formEncType:y}=u;d.method=m.toUpperCase(),y==="application/json"?(d.headers=new Headers({"Content-Type":y}),d.body=JSON.stringify(u.json)):y==="text/plain"?d.body=u.text:y==="application/x-www-form-urlencoded"&&u.formData?d.body=pf(u.formData):d.body=u.formData}return new Request(c,d)}function pf(l){let r=new URLSearchParams;for(let[s,u]of l.entries())r.append(s,typeof u=="string"?u:u.name);return r}function f0(l){let r=new FormData;for(let[s,u]of l.entries())r.append(s,u);return r}function cb(l,r,s,u=!1,c=!1){let d={},m=null,y,v=!1,g={},w=s&&aa(s[1])?s[1].error:void 0;return l.forEach(x=>{if(!(x.route.id in r))return;let T=x.route.id,_=r[T];if(Ce(!vl(_),"Cannot handle redirect results in processLoaderData"),aa(_)){let H=_.error;if(w!==void 0&&(H=w,w=void 0),m=m||{},c)m[T]=H;else{let G=Qn(l,T);m[G.route.id]==null&&(m[G.route.id]=H)}u||(d[T]=yg),v||(v=!0,y=_r(_.error)?_.error.status:500),_.headers&&(g[T]=_.headers)}else d[T]=_.data,_.statusCode&&_.statusCode!==200&&!v&&(y=_.statusCode),_.headers&&(g[T]=_.headers)}),w!==void 0&&s&&(m={[s[0]]:w},s[2]&&(d[s[2]]=void 0)),{loaderData:d,errors:m,statusCode:y||200,loaderHeaders:g}}function d0(l,r,s,u,c,d){let{loaderData:m,errors:y}=cb(r,s,u);return c.filter(v=>!v.matches||v.matches.some(g=>g.shouldLoad)).forEach(v=>{let{key:g,match:w,controller:x}=v;if(x&&x.signal.aborted)return;let T=d[g];if(Ce(T,"Did not find corresponding fetcher result"),aa(T)){let _=Qn(l.matches,w?.route.id);y&&y[_.route.id]||(y={...y,[_.route.id]:T.error}),l.fetchers.delete(g)}else if(vl(T))Ce(!1,"Unhandled fetcher revalidation redirect");else{let _=on(T.data);l.fetchers.set(g,_)}}),{loaderData:m,errors:y}}function m0(l,r,s,u){let c=Object.entries(r).filter(([,d])=>d!==yg).reduce((d,[m,y])=>(d[m]=y,d),{});for(let d of s){let m=d.route.id;if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&d.route.loader&&(c[m]=l[m]),u&&u.hasOwnProperty(m))break}return c}function h0(l){return l?aa(l[1])?{actionData:{}}:{actionData:{[l[0]]:l[1].data}}:{}}function Qn(l,r){return(r?l.slice(0,l.findIndex(u=>u.route.id===r)+1):[...l]).reverse().find(u=>u.route.hasErrorBoundary===!0)||l[0]}function eu(l){let r=l.length===1?l[0]:l.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function ha(l,{pathname:r,routeId:s,method:u,type:c,message:d}={}){let m="Unknown Server Error",y="Unknown @remix-run/router error";return l===400?(m="Bad Request",u&&r&&s?y=`You made a ${u} request to "${r}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:c==="invalid-body"&&(y="Unable to encode submission body")):l===403?(m="Forbidden",y=`Route "${s}" does not match URL "${r}"`):l===404?(m="Not Found",y=`No route matches URL "${r}"`):l===405&&(m="Method Not Allowed",u&&r&&s?y=`You made a ${u.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:u&&(y=`Invalid request method "${u.toUpperCase()}"`)),new Or(l||500,m,new Error(y),!0)}function tu(l){let r=Object.entries(l);for(let s=r.length-1;s>=0;s--){let[u,c]=r[s];if(vl(c))return{key:u,result:c}}}function zg(l){let r=typeof l=="string"?cn(l):l;return Ba({...r,hash:""})}function fb(l,r){return l.pathname!==r.pathname||l.search!==r.search?!1:l.hash===""?r.hash!=="":l.hash===r.hash?!0:r.hash!==""}function db(l){return new Or(l.init?.status??500,l.init?.statusText??"Internal Server Error",l.data)}function mb(l){return l!=null&&typeof l=="object"&&Object.entries(l).every(([r,s])=>typeof r=="string"&&hb(s))}function hb(l){return l!=null&&typeof l=="object"&&"type"in l&&"result"in l&&(l.type==="data"||l.type==="error")}function pb(l){return Tf(l.result)&&gg.has(l.result.status)}function aa(l){return l.type==="error"}function vl(l){return(l&&l.type)==="redirect"}function p0(l){return typeof l=="object"&&l!=null&&"type"in l&&"data"in l&&"init"in l&&l.type==="DataWithResponseInit"}function Tf(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.headers=="object"&&typeof l.body<"u"}function gb(l){return gg.has(l)}function vb(l){return Tf(l)&&gb(l.status)&&l.headers.has("Location")}function yb(l){return Jx.has(l.toUpperCase())}function Bt(l){return Kx.has(l.toUpperCase())}function _f(l){return new URLSearchParams(l).getAll("index").some(r=>r==="")}function uu(l,r){let s=typeof r=="string"?cn(r).search:r.search;if(l[l.length-1].route.index&&_f(s||""))return l[l.length-1];let u=fg(l);return u[u.length-1]}function g0(l){let{formMethod:r,formAction:s,formEncType:u,text:c,formData:d,json:m}=l;if(!(!r||!s||!u)){if(c!=null)return{formMethod:r,formAction:s,formEncType:u,formData:void 0,json:void 0,text:c};if(d!=null)return{formMethod:r,formAction:s,formEncType:u,formData:d,json:void 0,text:void 0};if(m!==void 0)return{formMethod:r,formAction:s,formEncType:u,formData:void 0,json:m,text:void 0}}}function ef(l,r){return r?{state:"loading",location:l,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:l,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xb(l,r){return{state:"submitting",location:l,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function pr(l,r){return l?{state:"loading",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function bb(l,r){return{state:"submitting",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:r?r.data:void 0}}function on(l){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function Sb(l,r){try{let s=l.sessionStorage.getItem(vg);if(s){let u=JSON.parse(s);for(let[c,d]of Object.entries(u||{}))d&&Array.isArray(d)&&r.set(c,new Set(d||[]))}}catch{}}function wb(l,r){if(r.size>0){let s={};for(let[u,c]of r)s[u]=[...c];try{l.sessionStorage.setItem(vg,JSON.stringify(s))}catch(u){St(!1,`Failed to save applied view transitions in sessionStorage (${u}).`)}}}function v0(){let l,r,s=new Promise((u,c)=>{l=async d=>{u(d);try{await s}catch{}},r=async d=>{c(d);try{await s}catch{}}});return{promise:s,resolve:l,reject:r}}var Sl=U.createContext(null);Sl.displayName="DataRouter";var Cr=U.createContext(null);Cr.displayName="DataRouterState";var Rg=U.createContext(!1);function Eb(){return U.useContext(Rg)}var Of=U.createContext({isTransitioning:!1});Of.displayName="ViewTransition";var jg=U.createContext(new Map);jg.displayName="Fetchers";var Ab=U.createContext(null);Ab.displayName="Await";var ya=U.createContext(null);ya.displayName="Navigation";var Eu=U.createContext(null);Eu.displayName="Location";var fn=U.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var Df=U.createContext(null);Df.displayName="RouteError";var Tg="REACT_ROUTER_ERROR",zb="REDIRECT",Rb="ROUTE_ERROR_RESPONSE";function jb(l){if(l.startsWith(`${Tg}:${zb}:{`))try{let r=JSON.parse(l.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Tb(l){if(l.startsWith(`${Tg}:${Rb}:{`))try{let r=JSON.parse(l.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Or(r.status,r.statusText,r.data)}catch{}}function _b(l,{relative:r}={}){Ce(Mr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:u}=U.useContext(ya),{hash:c,pathname:d,search:m}=Nr(l,{relative:r}),y=d;return s!=="/"&&(y=d==="/"?s:ja([s,d])),u.createHref({pathname:y,search:m,hash:c})}function Mr(){return U.useContext(Eu)!=null}function dn(){return Ce(Mr(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(Eu).location}var _g="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Og(l){U.useContext(ya).static||U.useLayoutEffect(l)}function Cf(){let{isDataRoute:l}=U.useContext(fn);return l?Xb():Ob()}function Ob(){Ce(Mr(),"useNavigate() may be used only in the context of a <Router> component.");let l=U.useContext(Sl),{basename:r,navigator:s}=U.useContext(ya),{matches:u}=U.useContext(fn),{pathname:c}=dn(),d=JSON.stringify(Rf(u)),m=U.useRef(!1);return Og(()=>{m.current=!0}),U.useCallback((v,g={})=>{if(St(m.current,_g),!m.current)return;if(typeof v=="number"){s.go(v);return}let w=wu(v,JSON.parse(d),c,g.relative==="path");l==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:ja([r,w.pathname])),(g.replace?s.replace:s.push)(w,g.state,g)},[r,s,d,c,l])}U.createContext(null);function Nr(l,{relative:r}={}){let{matches:s}=U.useContext(fn),{pathname:u}=dn(),c=JSON.stringify(Rf(s));return U.useMemo(()=>wu(l,JSON.parse(c),u,r==="path"),[l,c,u,r])}function Db(l,r,s){Ce(Mr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=U.useContext(ya),{matches:c}=U.useContext(fn),d=c[c.length-1],m=d?d.params:{},y=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let V=g&&g.path||"";Cg(y,!g||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let w=dn(),x;x=w;let T=x.pathname||"/",_=T;if(v!=="/"){let V=v.replace(/^\//,"").split("/");_="/"+T.replace(/^\//,"").split("/").slice(V.length).join("/")}let H=Xn(l,{pathname:_});return St(g||H!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),St(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Lb(H&&H.map(V=>Object.assign({},V,{params:Object.assign({},m,V.params),pathname:ja([v,u.encodeLocation?u.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?v:ja([v,u.encodeLocation?u.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),c,s)}function Cb(){let l=Gb(),r=_r(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:d},"ErrorBoundary")," or"," ",U.createElement("code",{style:d},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},r),s?U.createElement("pre",{style:c},s):null,m)}var Mb=U.createElement(Cb,null),Dg=class extends U.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.onError?this.props.onError(l,r):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const s=Tb(l.digest);s&&(l=s)}let r=l!==void 0?U.createElement(fn.Provider,{value:this.props.routeContext},U.createElement(Df.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?U.createElement(Nb,{error:l},r):r}};Dg.contextType=Rg;var tf=new WeakMap;function Nb({children:l,error:r}){let{basename:s}=U.useContext(ya);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=jb(r.digest);if(u){let c=tf.get(r);if(c)throw c;let d=mg(u.location,s);if(dg&&!tf.get(r))if(d.isExternal||u.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:u.replace}));throw tf.set(r,m),m}return U.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function Ub({routeContext:l,match:r,children:s}){let u=U.useContext(Sl);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),U.createElement(fn.Provider,{value:l},s)}function Lb(l,r=[],s){let u=s?.state;if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let c=l,d=u?.errors;if(d!=null){let w=c.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);Ce(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,w+1))}let m=!1,y=-1;if(s&&u){m=u.renderFallback;for(let w=0;w<c.length;w++){let x=c[w];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=w),x.route.id){let{loaderData:T,errors:_}=u,H=x.route.loader&&!T.hasOwnProperty(x.route.id)&&(!_||_[x.route.id]===void 0);if(x.route.lazy||H){s.isStatic&&(m=!0),y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}}let v=s?.onError,g=u&&v?(w,x)=>{v(w,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Dr(u.matches),errorInfo:x})}:void 0;return c.reduceRight((w,x,T)=>{let _,H=!1,G=null,V=null;u&&(_=d&&x.route.id?d[x.route.id]:void 0,G=x.route.errorElement||Mb,m&&(y<0&&T===0?(Cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,V=null):y===T&&(H=!0,V=x.route.hydrateFallbackElement||null)));let F=r.concat(c.slice(0,T+1)),P=()=>{let k;return _?k=G:H?k=V:x.route.Component?k=U.createElement(x.route.Component,null):x.route.element?k=x.route.element:k=w,U.createElement(Ub,{match:x,routeContext:{outlet:w,matches:F,isDataRoute:u!=null},children:k})};return u&&(x.route.ErrorBoundary||x.route.errorElement||T===0)?U.createElement(Dg,{location:u.location,revalidation:u.revalidation,component:G,error:_,children:P(),routeContext:{outlet:null,matches:F,isDataRoute:!0},onError:g}):P()},null)}function Mf(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(l){let r=U.useContext(Sl);return Ce(r,Mf(l)),r}function Hb(l){let r=U.useContext(Cr);return Ce(r,Mf(l)),r}function qb(l){let r=U.useContext(fn);return Ce(r,Mf(l)),r}function Nf(l){let r=qb(l),s=r.matches[r.matches.length-1];return Ce(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function Yb(){return Nf("useRouteId")}function Gb(){let l=U.useContext(Df),r=Hb("useRouteError"),s=Nf("useRouteError");return l!==void 0?l:r.errors?.[s]}function Xb(){let{router:l}=Bb("useNavigate"),r=Nf("useNavigate"),s=U.useRef(!1);return Og(()=>{s.current=!0}),U.useCallback(async(c,d={})=>{St(s.current,_g),s.current&&(typeof c=="number"?await l.navigate(c):await l.navigate(c,{fromRouteId:r,...d}))},[l,r])}var y0={};function Cg(l,r,s){!r&&!y0[l]&&(y0[l]=!0,St(!1,s))}var x0={};function b0(l,r){!l&&!x0[r]&&(x0[r]=!0,console.warn(r))}var Qb="useOptimistic",S0=a1[Qb],Vb=()=>{};function Zb(l){return S0?S0(l):[l,Vb]}function Kb(l){let r={hasErrorBoundary:l.hasErrorBoundary||l.ErrorBoundary!=null||l.errorElement!=null};return l.Component&&(l.element&&St(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:U.createElement(l.Component),Component:void 0})),l.HydrateFallback&&(l.hydrateFallbackElement&&St(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:U.createElement(l.HydrateFallback),HydrateFallback:void 0})),l.ErrorBoundary&&(l.errorElement&&St(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:U.createElement(l.ErrorBoundary),ErrorBoundary:void 0})),r}var $b=["HydrateFallback","hydrateFallbackElement"],Jb=class{constructor(){this.status="pending",this.promise=new Promise((l,r)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",l(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",r(s))}})}};function kb({router:l,flushSync:r,onError:s,unstable_useTransitions:u}){u=Eb()||u;let[d,m]=U.useState(l.state),[y,v]=Zb(d),[g,w]=U.useState(),[x,T]=U.useState({isTransitioning:!1}),[_,H]=U.useState(),[G,V]=U.useState(),[F,P]=U.useState(),k=U.useRef(new Map),$=U.useCallback((A,{deletedFetchers:fe,newErrors:we,flushSync:he,viewTransitionOpts:de})=>{we&&s&&Object.values(we).forEach(Te=>s(Te,{location:A.location,params:A.matches[0]?.params??{},unstable_pattern:Dr(A.matches)})),A.fetchers.forEach((Te,be)=>{Te.data!==void 0&&k.current.set(be,Te.data)}),fe.forEach(Te=>k.current.delete(Te)),b0(he===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let qe=l.window!=null&&l.window.document!=null&&typeof l.window.document.startViewTransition=="function";if(b0(de==null||qe,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!de||!qe){r&&he?r(()=>m(A)):u===!1?m(A):U.startTransition(()=>{u===!0&&v(Te=>w0(Te,A)),m(A)});return}if(r&&he){r(()=>{G&&(_?.resolve(),G.skipTransition()),T({isTransitioning:!0,flushSync:!0,currentLocation:de.currentLocation,nextLocation:de.nextLocation})});let Te=l.window.document.startViewTransition(()=>{r(()=>m(A))});Te.finished.finally(()=>{r(()=>{H(void 0),V(void 0),w(void 0),T({isTransitioning:!1})})}),r(()=>V(Te));return}G?(_?.resolve(),G.skipTransition(),P({state:A,currentLocation:de.currentLocation,nextLocation:de.nextLocation})):(w(A),T({isTransitioning:!0,flushSync:!1,currentLocation:de.currentLocation,nextLocation:de.nextLocation}))},[l.window,r,G,_,u,v,s]);U.useLayoutEffect(()=>l.subscribe($),[l,$]),U.useEffect(()=>{x.isTransitioning&&!x.flushSync&&H(new Jb)},[x]),U.useEffect(()=>{if(_&&g&&l.window){let A=g,fe=_.promise,we=l.window.document.startViewTransition(async()=>{u===!1?m(A):U.startTransition(()=>{u===!0&&v(he=>w0(he,A)),m(A)}),await fe});we.finished.finally(()=>{H(void 0),V(void 0),w(void 0),T({isTransitioning:!1})}),V(we)}},[g,_,l.window,u,v]),U.useEffect(()=>{_&&g&&y.location.key===g.location.key&&_.resolve()},[_,G,y.location,g]),U.useEffect(()=>{!x.isTransitioning&&F&&(w(F.state),T({isTransitioning:!0,flushSync:!1,currentLocation:F.currentLocation,nextLocation:F.nextLocation}),P(void 0))},[x.isTransitioning,F]);let ne=U.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:A=>l.navigate(A),push:(A,fe,we)=>l.navigate(A,{state:fe,preventScrollReset:we?.preventScrollReset}),replace:(A,fe,we)=>l.navigate(A,{replace:!0,state:fe,preventScrollReset:we?.preventScrollReset})}),[l]),te=l.basename||"/",Q=U.useMemo(()=>({router:l,navigator:ne,static:!1,basename:te,onError:s}),[l,ne,te,s]);return U.createElement(U.Fragment,null,U.createElement(Sl.Provider,{value:Q},U.createElement(Cr.Provider,{value:y},U.createElement(jg.Provider,{value:k.current},U.createElement(Of.Provider,{value:x},U.createElement(Pb,{basename:te,location:y.location,navigationType:y.historyAction,navigator:ne,unstable_useTransitions:u},U.createElement(Fb,{routes:l.routes,future:l.future,state:y,isStatic:!1,onError:s})))))),null)}function w0(l,r){return{...l,navigation:r.navigation.state!=="idle"?r.navigation:l.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:l.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:l.actionData,fetchers:r.fetchers}}var Fb=U.memo(Wb);function Wb({routes:l,future:r,state:s,isStatic:u,onError:c}){return Db(l,void 0,{state:s,isStatic:u,onError:c})}function Pb({basename:l="/",children:r=null,location:s,navigationType:u="POP",navigator:c,static:d=!1,unstable_useTransitions:m}){Ce(!Mr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),v=U.useMemo(()=>({basename:y,navigator:c,static:d,unstable_useTransitions:m,future:{}}),[y,c,d,m]);typeof s=="string"&&(s=cn(s));let{pathname:g="/",search:w="",hash:x="",state:T=null,key:_="default",unstable_mask:H}=s,G=U.useMemo(()=>{let V=ga(g,y);return V==null?null:{location:{pathname:V,search:w,hash:x,state:T,key:_,unstable_mask:H},navigationType:u}},[y,g,w,x,T,_,u,H]);return St(G!=null,`<Router basename="${y}"> is not able to match the URL "${g}${w}${x}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:U.createElement(ya.Provider,{value:v},U.createElement(Eu.Provider,{children:r,value:G}))}var su="get",cu="application/x-www-form-urlencoded";function Au(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Ib(l){return Au(l)&&l.tagName.toLowerCase()==="button"}function eS(l){return Au(l)&&l.tagName.toLowerCase()==="form"}function tS(l){return Au(l)&&l.tagName.toLowerCase()==="input"}function aS(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function nS(l,r){return l.button===0&&(!r||r==="_self")&&!aS(l)}var au=null;function lS(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var iS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(l){return l!=null&&!iS.has(l)?(St(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`),null):l}function rS(l,r){let s,u,c,d,m;if(eS(l)){let y=l.getAttribute("action");u=y?ga(y,r):null,s=l.getAttribute("method")||su,c=af(l.getAttribute("enctype"))||cu,d=new FormData(l)}else if(Ib(l)||tS(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||y.getAttribute("action");if(u=v?ga(v,r):null,s=l.getAttribute("formmethod")||y.getAttribute("method")||su,c=af(l.getAttribute("formenctype"))||af(y.getAttribute("enctype"))||cu,d=new FormData(y,l),!lS()){let{name:g,type:w,value:x}=l;if(w==="image"){let T=g?`${g}.`:"";d.append(`${T}x`,"0"),d.append(`${T}y`,"0")}else g&&d.append(g,x)}}else{if(Au(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=su,u=null,c=cu,m=l}return d&&c==="text/plain"&&(m=d,d=void 0),{action:u,method:s.toLowerCase(),encType:c,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function oS(l,r,s,u){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${u}`:c.pathname=`${c.pathname}.${u}`:c.pathname==="/"?c.pathname=`_root.${u}`:r&&ga(c.pathname,r)==="/"?c.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function uS(l,r){if(l.id in r)return r[l.id];try{let s=await import(l.module);return r[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sS(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function cS(l,r,s){let u=await Promise.all(l.map(async c=>{let d=r.routes[c.route.id];if(d){let m=await uS(d,s);return m.links?m.links():[]}return[]}));return hS(u.flat(1).filter(sS).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function E0(l,r,s,u,c,d){let m=(v,g)=>s[g]?v.route.id!==s[g].route.id:!0,y=(v,g)=>s[g].pathname!==v.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==v.params["*"];return d==="assets"?r.filter((v,g)=>m(v,g)||y(v,g)):d==="data"?r.filter((v,g)=>{let w=u.routes[v.route.id];if(!w||!w.hasLoader)return!1;if(m(v,g)||y(v,g))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function fS(l,r,{includeHydrateFallback:s}={}){return dS(l.map(u=>{let c=r.routes[u.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function dS(l){return[...new Set(l)]}function mS(l){let r={},s=Object.keys(l).sort();for(let u of s)r[u]=l[u];return r}function hS(l,r){let s=new Set;return new Set(r),l.reduce((u,c)=>{let d=JSON.stringify(mS(c));return s.has(d)||(s.add(d),u.push({key:d,link:c})),u},[])}function Mg(){let l=U.useContext(Sl);return Uf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function pS(){let l=U.useContext(Cr);return Uf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Lf=U.createContext(void 0);Lf.displayName="FrameworkContext";function Ng(){let l=U.useContext(Lf);return Uf(l,"You must render this element inside a <HydratedRouter> element"),l}function gS(l,r){let s=U.useContext(Lf),[u,c]=U.useState(!1),[d,m]=U.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:g,onMouseLeave:w,onTouchStart:x}=r,T=U.useRef(null);U.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let G=F=>{F.forEach(P=>{m(P.isIntersecting)})},V=new IntersectionObserver(G,{threshold:.5});return T.current&&V.observe(T.current),()=>{V.disconnect()}}},[l]),U.useEffect(()=>{if(u){let G=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(G)}}},[u]);let _=()=>{c(!0)},H=()=>{c(!1),m(!1)};return s?l!=="intent"?[d,T,{}]:[d,T,{onFocus:gr(y,_),onBlur:gr(v,H),onMouseEnter:gr(g,_),onMouseLeave:gr(w,H),onTouchStart:gr(x,_)}]:[!1,T,{}]}function gr(l,r){return s=>{l&&l(s),s.defaultPrevented||r(s)}}function vS({page:l,...r}){let{router:s}=Mg(),u=U.useMemo(()=>Xn(s.routes,l,s.basename),[s.routes,l,s.basename]);return u?U.createElement(xS,{page:l,matches:u,...r}):null}function yS(l){let{manifest:r,routeModules:s}=Ng(),[u,c]=U.useState([]);return U.useEffect(()=>{let d=!1;return cS(l,r,s).then(m=>{d||c(m)}),()=>{d=!0}},[l,r,s]),u}function xS({page:l,matches:r,...s}){let u=dn(),{future:c,manifest:d,routeModules:m}=Ng(),{basename:y}=Mg(),{loaderData:v,matches:g}=pS(),w=U.useMemo(()=>E0(l,r,g,d,u,"data"),[l,r,g,d,u]),x=U.useMemo(()=>E0(l,r,g,d,u,"assets"),[l,r,g,d,u]),T=U.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let G=new Set,V=!1;if(r.forEach(P=>{let k=d.routes[P.route.id];!k||!k.hasLoader||(!w.some($=>$.route.id===P.route.id)&&P.route.id in v&&m[P.route.id]?.shouldRevalidate||k.hasClientLoader?V=!0:G.add(P.route.id))}),G.size===0)return[];let F=oS(l,y,c.unstable_trailingSlashAwareDataRequests,"data");return V&&G.size>0&&F.searchParams.set("_routes",r.filter(P=>G.has(P.route.id)).map(P=>P.route.id).join(",")),[F.pathname+F.search]},[y,c.unstable_trailingSlashAwareDataRequests,v,u,d,w,r,l,m]),_=U.useMemo(()=>fS(x,d),[x,d]),H=yS(x);return U.createElement(U.Fragment,null,T.map(G=>U.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),_.map(G=>U.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),H.map(({key:G,link:V})=>U.createElement("link",{key:G,nonce:s.nonce,...V,crossOrigin:V.crossOrigin??s.crossOrigin})))}function bS(...l){return r=>{l.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var SS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SS&&(window.__reactRouterVersion="7.13.1")}catch{}function wS(l,r){return Px({basename:r?.basename,getContext:r?.getContext,future:r?.future,history:hx({window:r?.window}),hydrationData:r?.hydrationData||ES(),routes:l,mapRouteProperties:Kb,hydrationRouteProperties:$b,dataStrategy:r?.dataStrategy,patchRoutesOnNavigation:r?.patchRoutesOnNavigation,window:r?.window,unstable_instrumentations:r?.unstable_instrumentations}).initialize()}function ES(){let l=window?.__staticRouterHydrationData;return l&&l.errors&&(l={...l,errors:AS(l.errors)}),l}function AS(l){if(!l)return null;let r=Object.entries(l),s={};for(let[u,c]of r)if(c&&c.__type==="RouteErrorResponse")s[u]=new Or(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let d=window[c.__subType];if(typeof d=="function")try{let m=new d(c.message);m.stack="",s[u]=m}catch{}}if(s[u]==null){let d=new Error(c.message);d.stack="",s[u]=d}}else s[u]=c;return s}var Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lg=U.forwardRef(function({onClick:r,discover:s="render",prefetch:u="none",relative:c,reloadDocument:d,replace:m,unstable_mask:y,state:v,target:g,to:w,preventScrollReset:x,viewTransition:T,unstable_defaultShouldRevalidate:_,...H},G){let{basename:V,navigator:F,unstable_useTransitions:P}=U.useContext(ya),k=typeof w=="string"&&Ug.test(w),$=mg(w,V);w=$.to;let ne=_b(w,{relative:c}),te=dn(),Q=null;if(y){let be=wu(y,[],te.unstable_mask?te.unstable_mask.pathname:"/",!0);V!=="/"&&(be.pathname=be.pathname==="/"?V:ja([V,be.pathname])),Q=F.createHref(be)}let[A,fe,we]=gS(u,H),he=TS(w,{replace:m,unstable_mask:y,state:v,target:g,preventScrollReset:x,relative:c,viewTransition:T,unstable_defaultShouldRevalidate:_,unstable_useTransitions:P});function de(be){r&&r(be),be.defaultPrevented||he(be)}let qe=!($.isExternal||d),Te=U.createElement("a",{...H,...we,href:(qe?Q:void 0)||$.absoluteURL||ne,onClick:qe?de:r,ref:bS(G,fe),target:g,"data-discover":!k&&s==="render"?"true":void 0});return A&&!k?U.createElement(U.Fragment,null,Te,U.createElement(vS,{page:ne})):Te});Lg.displayName="Link";var zS=U.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:u="",end:c=!1,style:d,to:m,viewTransition:y,children:v,...g},w){let x=Nr(m,{relative:g.relative}),T=dn(),_=U.useContext(Cr),{navigator:H,basename:G}=U.useContext(ya),V=_!=null&&MS(x)&&y===!0,F=H.encodeLocation?H.encodeLocation(x).pathname:x.pathname,P=T.pathname,k=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(P=P.toLowerCase(),k=k?k.toLowerCase():null,F=F.toLowerCase()),k&&G&&(k=ga(k,G)||k);const $=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let ne=P===F||!c&&P.startsWith(F)&&P.charAt($)==="/",te=k!=null&&(k===F||!c&&k.startsWith(F)&&k.charAt(F.length)==="/"),Q={isActive:ne,isPending:te,isTransitioning:V},A=ne?r:void 0,fe;typeof u=="function"?fe=u(Q):fe=[u,ne?"active":null,te?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let we=typeof d=="function"?d(Q):d;return U.createElement(Lg,{...g,"aria-current":A,className:fe,ref:w,style:we,to:m,viewTransition:y},typeof v=="function"?v(Q):v)});zS.displayName="NavLink";var RS=U.forwardRef(({discover:l="render",fetcherKey:r,navigate:s,reloadDocument:u,replace:c,state:d,method:m=su,action:y,onSubmit:v,relative:g,preventScrollReset:w,viewTransition:x,unstable_defaultShouldRevalidate:T,..._},H)=>{let{unstable_useTransitions:G}=U.useContext(ya),V=DS(),F=CS(y,{relative:g}),P=m.toLowerCase()==="get"?"get":"post",k=typeof y=="string"&&Ug.test(y),$=ne=>{if(v&&v(ne),ne.defaultPrevented)return;ne.preventDefault();let te=ne.nativeEvent.submitter,Q=te?.getAttribute("formmethod")||m,A=()=>V(te||ne.currentTarget,{fetcherKey:r,method:Q,navigate:s,replace:c,state:d,relative:g,preventScrollReset:w,viewTransition:x,unstable_defaultShouldRevalidate:T});G&&s!==!1?U.startTransition(()=>A()):A()};return U.createElement("form",{ref:H,method:P,action:F,onSubmit:u?v:$,..._,"data-discover":!k&&l==="render"?"true":void 0})});RS.displayName="Form";function jS(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bg(l){let r=U.useContext(Sl);return Ce(r,jS(l)),r}function TS(l,{target:r,replace:s,unstable_mask:u,state:c,preventScrollReset:d,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:v,unstable_useTransitions:g}={}){let w=Cf(),x=dn(),T=Nr(l,{relative:m});return U.useCallback(_=>{if(nS(_,r)){_.preventDefault();let H=s!==void 0?s:Ba(x)===Ba(T),G=()=>w(l,{replace:H,unstable_mask:u,state:c,preventScrollReset:d,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:v});g?U.startTransition(()=>G()):G()}},[x,w,T,s,u,c,r,l,d,m,y,v,g])}var _S=0,OS=()=>`__${String(++_S)}__`;function DS(){let{router:l}=Bg("useSubmit"),{basename:r}=U.useContext(ya),s=Yb(),u=l.fetch,c=l.navigate;return U.useCallback(async(d,m={})=>{let{action:y,method:v,encType:g,formData:w,body:x}=rS(d,r);if(m.navigate===!1){let T=m.fetcherKey||OS();await u(T,s,m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:w,body:x,formMethod:m.method||v,formEncType:m.encType||g,flushSync:m.flushSync})}else await c(m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:w,body:x,formMethod:m.method||v,formEncType:m.encType||g,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[u,c,r,s])}function CS(l,{relative:r}={}){let{basename:s}=U.useContext(ya),u=U.useContext(fn);Ce(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),d={...Nr(l||".",{relative:r})},m=dn();if(l==null){d.search=m.search;let y=new URLSearchParams(d.search),v=y.getAll("index");if(v.some(w=>w==="")){y.delete("index"),v.filter(x=>x).forEach(x=>y.append("index",x));let w=y.toString();d.search=w?`?${w}`:""}}return(!l||l===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:ja([s,d.pathname])),Ba(d)}function MS(l,{relative:r}={}){let s=U.useContext(Of);Ce(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Bg("useViewTransitionState"),c=Nr(l,{relative:r});if(!s.isTransitioning)return!1;let d=ga(s.currentLocation.pathname,u)||s.currentLocation.pathname,m=ga(s.nextLocation.pathname,u)||s.nextLocation.pathname;return pu(c.pathname,m)!=null||pu(c.pathname,d)!=null}var NS=U0();function US(l){return U.createElement(kb,{flushSync:NS.flushSync,...l})}const LS={colors:{background:"#90a784",whiteBackground:"#FFFaf1",greenButton:"#90a784",shodownButton:"#4f6654",premiumButton:"linear-gradient(180deg, #f7d37a 0%, #e6b85c 100%)",brownLight:"#9A7A67",goldBorder:"#c58b2b",brownDark:"#5d4b38",white1:"#f5f5ef",white:"#ffffff"},fonts:{primary:"'Poppins', sans-serif",secondary:"'Montserrat', sans-serif",tertiary:"'Anton', sans-serif"},fontSizes:{small:"12px",medium:"14px",large:"18px"},radius:{small:"8px",medium:"12px",large:"20px"}},gf=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,va=Ge`
    from {
    opacity: 0;
    transform: translateX(0);
    }
    to {
    opacity: 1;
    transform: translateX(100);
    }
`,BS=B.div`
  width: 100%;
  min-height: 100vh;
  background: #fff2da;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,HS=B.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,qS=B.div`
  margin-bottom: 10px;
  
`,YS=B.img`
  height: 130px;
  &.show {
      animation: ${gf} 1.5s ease-out forwards;
    }
`,GS=B.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;

 @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`,si=B.div`
  position: relative;
  width: 243px;
  height: 315px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  /* troca a ordem no mobile */
  &:nth-child(1) {
    @media (max-width: 768px) {
      order: -1;
    }
  }

  &:nth-child(2) {
    @media (max-width: 768px) {
      order: -2;
    }
  }
  
`,ci=B.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
 &.show {
      animation: ${gf} 2s ease-out forwards;
    }
    
    @media (max-width: 768px) {
      &.show {
      animation: ${gf} 1s ease-out forwards;
    }
    }
`,XS=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.premiumButton};
  border: ${({theme:l})=>l.colors.goldBorder};
  border-radius: 10px;
  box-shadow:
    inset 0 2px 0 #fff3c4,
    0 4px 0 #a9741f;
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:l})=>l.colors.brownDark};
  text-align: center;
  text-transform: uppercase;
  
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 
  
  &:hover {
    box-shadow:
      inset 0 2px 0 #fff3c4,
      0 6px 0 #a9741f;
  }
  &:active {
    box-shadow:
      inset 0 2px 0 #fff3c4,
      0 2px 0 #a9741f;
  }

  @media (max-width: 768px) {
    width: 17rem;
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
  

`,QS=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({theme:l})=>l.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 
  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }

   @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`,VS=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.brownLight};
  border: none;
  border-radius: 18px;
  font-weight: 700;
  font-size: 15px;
  color: ${({theme:l})=>l.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 
  &:hover {
    transform: translateX(-50%) translateY(-2px);
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`,ZS=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({theme:l})=>l.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`,KS=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.brownDark};
  border: none;
  border-radius: 18px;
  font-weight: 700;
  font-size: 15px;
  color: ${({theme:l})=>l.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
  }
  &:active {
    transform: translateX(-50%) translateY(2px);
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`,$S=B.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 13rem;
  height: 55px;
  background: ${({theme:l})=>l.colors.greenButton};
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 0 #4f6654;
  font-weight: 700;
  font-size: 15px;
  color: ${({theme:l})=>l.colors.white1};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
      animation: ${va} 2s ease-out forwards;
    } 

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 0 #4f6654;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6654;
  }
  @media (max-width: 768px) {
    width: 17rem;
    
    &.show {
      animation: ${va} 1.5s ease-out forwards;
    } 
     &:hover {
    box-shadow:none;
  }
    }
`,JS=B.nav`
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  position: relative;
  z-index: 300;
`,kS=B.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  opacity: ${({open:l})=>l?1:0};
  pointer-events: ${({open:l})=>l?"auto":"none"};
  transition: 0.3s;
`,FS=B.div`
   position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;

  background: rgba(144, 167, 132, 0.6);
  padding: 40px;

  transform: ${({open:l})=>l?"translateY(0)":"translateY(-100%)"};
    
  transition: transform 1s ease-in-out;

  a {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Anton", sans-serif;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  a:hover {
    color: #45372e;
    transform: translateX(5px);
  }
`,WS=B.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 200;

  span {
    width: 30px;
    height: 3px;
    
   background: ${({$active:l})=>l?"#5d4b38":"#fff"};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  /* ❌ quando estiver aberto */
  ${({open:l})=>l&&`
    

    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}

 
`;function xi(){const l=Cf(),[r,s]=U.useState(!1),u=m=>{l(m),s(!1)},d=dn().pathname==="/";return h.jsxs(JS,{$active:d,children:[h.jsx(kS,{open:r,onClick:()=>s(!1)}),h.jsxs(FS,{open:r,children:[h.jsx("a",{onClick:()=>u("/"),children:"HOME"}),h.jsx("a",{onClick:()=>u("/consultas"),children:"CONSULTAS"}),h.jsx("a",{onClick:()=>u("/e-book"),children:"E-BOOK"}),h.jsx("a",{onClick:()=>u("/sobre"),children:"SOBRE MIM"}),h.jsx("a",{onClick:()=>u("/virada360"),children:"VIRADA 360"}),h.jsxs("a",{onClick:()=>u("/series"),children:["NUTRIÇÃO ALÉM ",h.jsx("br",{}),"DO PRATO"]})]}),h.jsxs(WS,{$active:d,open:r,onClick:()=>s(!r),children:[h.jsx("span",{}),h.jsx("span",{}),h.jsx("span",{})]})]})}const PS="/nutri-raquel-alves-site/assets/logomarca-DSWmhhAI.svg",IS="/nutri-raquel-alves-site/assets/card-premium-Cg85LMrm.svg",ew="/nutri-raquel-alves-site/assets/card-agenda1-BvuuIlEV.svg",tw="/nutri-raquel-alves-site/assets/card-ebook-BMoLPjwj.svg",aw="/nutri-raquel-alves-site/assets/card360-CUzDDbaG.svg",nw="/nutri-raquel-alves-site/assets/card-serie-Cf_55Dio.svg",lw="/nutri-raquel-alves-site/assets/card-sobre1-z-2lufyV.svg";function iw(){const l=Cf(),r=c=>{l(c)};U.useEffect(()=>{const c=new IntersectionObserver(m=>{m.forEach(y=>{y.isIntersecting?y.target.classList.add("show"):y.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(m=>c.observe(m)),()=>c.disconnect()},[]);const s="Olá, vim pelo site e gostaria de agendar uma consulta!",u="5512991816453";return h.jsxs(BS,{children:[h.jsx(xi,{}),h.jsxs(HS,{children:[h.jsx(qS,{children:h.jsx(YS,{className:"animate",src:PS})}),h.jsxs(GS,{children:[h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:IS}),h.jsxs(XS,{className:"animate",onClick:()=>r("/consultas"),children:["Consulta Premium ",h.jsx("br",{})," Clique Aqui"]})]}),h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:ew}),h.jsxs(QS,{className:"animate",onClick:()=>window.open(`https://wa.me/${u}?text=${encodeURIComponent(s)}`,"_blank"),children:["Agendar Consulta",h.jsx("span",{style:{fontSize:"12px",fontWeight:500},children:"Presencial / Online"})]})]}),h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:tw}),h.jsxs(VS,{className:"animate",onClick:()=>r("/e-book"),children:["Meu Ebook ",h.jsx("br",{})," Clique aqui"]})]}),h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:aw}),h.jsxs(ZS,{className:"animate",onClick:()=>r("/virada360"),children:["Programa ",h.jsx("br",{})," virada 360"]})]}),h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:nw}),h.jsx(KS,{className:"animate",onClick:()=>r("/series"),children:"assistir a série"})]}),h.jsxs(si,{children:[h.jsx(ci,{className:"animate",src:lw}),h.jsxs($S,{className:"animate",onClick:()=>r("/sobre"),children:["quem sou eu ",h.jsx("br",{})," clique aqui"]})]})]})]})]})}const Bf=Ge`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Hg=Ge`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,qg=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,rw=Ge`
    from {
    opacity: 0;
    transform: translateY(-50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,ow=Ge`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
`,uw=Ge`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(-6deg);
  }
`,sw=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`,cw=B.div`
  display: flex;
  margin: 2rem auto auto auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,fw=B.div`
  margin-top: 2rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-right: 0;
  }
`,dw=B.h1`
  font-family: "anton";
  font-size: 3.5rem;
  color: #fffaf1;
  line-height: 1.5rem;
  &.show {
    animation: ${qg} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 0.5rem;
    margin-left: 1rem;
  }
`,mw=B.h2`
  font-family: "anton";
  font-size: 5.2rem;
  color: #fffaf1;
  &.show {
    animation: ${rw} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-left: 1rem;
  }
`,A0=B.p`
  width: 475px;
  font-family: "montserrat";
  font-size: 1.3rem;
  font-weight: bold;
  color: #fffaf1;
  margin-top: 2rem;
  &.show {
    animation: ${Bf} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 1rem;
    width: 350px;
  }
  @media (max-width: 370px) {
    width: 21rem;
  }
`,hw=B.div`
  display: flex;
  margin-top: 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
  }
`,pw=B.div`
  display: flex;
  flex-direction: column;
`,gw=B.h1`
  font-family: "anton";
  font-size: 65px;
  color: #fffaf1;
  text-align: center;
  line-height: 1rem;
  &.show {
    animation: ${Bf} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    line-height: 3.5rem;
  }
  @media (max-width: 370px) {
    font-size: 4rem;
  }
`,vw=B.h1`
  font-family: "anton";
  font-size: 89px;
  color: #fffaf1;
  &.show {
    animation: ${Hg} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 7rem;
    line-height: 7rem;
  }
  @media (max-width: 370px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`,yw=B.div`
  display: flex;
  justify-content: space-between;
  &.show {
    animation: ${Bf} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`,xw=B.img`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`,bw=B.img`
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`,Sw=B.img`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`,ww=B.img`
  cursor: pointer;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
`,Ew=B.img`
  width: 77px;
  margin-left: 10rem;
  &.show {
    animation:
      ${ow} 0.8s ease-out forwards,
      ${uw} 1.5s ease-in-out 1s infinite;
  }
`,Aw=B.div`
  display: flex;
  flex-direction: column;
`,zw=B.div`
  display: flex;
  &.show {
    animation: ${Hg} 1.5s ease-out forwards;
  }
  @media (max-width: 370px) {
   
  }
`,Rw=B.img`
  width: 400px;
  position: relative;
  bottom: 4rem;
  left: 2rem;
  cursor: pointer;
  &.show {
    animation: ${qg} 1.5s ease-out forwards;
  }
  &:hover {
    transform: translateY(-6px);
    filter: brightness(1.2);
  }
  @media (max-width: 768px) {
    width: 24rem;
    left: 0;
  }
  @media (max-width: 370px) {
    width: 22rem;
    left: 1rem;
  }
`,jw=B.img`
  width: 200px;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(0.9);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 11rem;
  }
  @media (max-width: 370px) {
    width: 10.5rem;
  }
`,Tw=B.img`
  width: 220px;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    filter: brightness(0.9);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 13rem;
  }
`,_w="data:image/svg+xml,%3csvg%20width='77'%20height='88'%20viewBox='0%200%2077%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='77'%20height='88'%20fill='url(%23pattern0_71_153)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_71_153'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_71_153'%20transform='matrix(0.0208333%200%200%200.0182292%200%20-0.00130208)'/%3e%3c/pattern%3e%3cimage%20id='image0_71_153'%20width='48'%20height='55'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA3CAYAAABKB8k/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXBSURBVGhD7Zl9TNVVGMc/tdq4Xa4EV7h6E1/yovjWqym7Yrq1bIRpMNcabdWs4eZLCL7mSq3BhtmsLZclm6OGTmnkctRYSUkow+VKtCXJIsQtWksuhLf+PP1z7t35PfcHXZDfxVaf7Yyd53nOOd/n3ud3fodz4X9GxCagHghKx7+B5wClW5d0aiYCl3SbK51jzSojAQXMkQHAEcPfIJ1jTYpIYKvwzxP+N4T/pqDJEHhK+D41fH8BPuFPGLcDs6VRs018yinanivsFWJcwkgGftMizgAPCv9cIXSptn9u2HqNxBLOU0KgAmoAvxHznbZfA+7Wtj4jfosRm3AygJ9tkjCFBYCXdGyEQuBPm51nCrAZ+FrPcR64TcSMOqnAPpsEFPCEDB6EHcBFm/EKKJLBTpEFnBCLR2p+KA7aiI6068B8OcBplurjw6vCfj9QCxQLe5WN8HPAK8BkETtmlAiB4w1fAPhYvxc2jOX7wA438JHNJ7xIBt6MzAU6bMQr4B4j7l69S00xbGNOkd4mpfBIm6TjMoS96mao+3elYL/fLxO4Q8fOkbG6vQ/cJeZ1nMnAt1JMZWWF2r//bSnQ5DU5RrcBUWqOkieOB8rn86nGxgYVDodUefluU9ivcrA+Wn9ik8QuGegEFXLhnJyFqqurQ4XDIRUOh1RZ2UbTf0lOYPCASGSeDBhN0vUZ3yK+pGR9VHikrV79vBlzRk5kw2xxIBx1gkCPKdztdqva2iMx4sPhkCosfNJMoF5OFg+3SsMNsEl/ihMihkBgOi0tTeTn51kjNX19fWY3ZHbiZTQS8Oj6fNM0FhSspKWliUBgumm20Ntr0TwmCcwD2oAVpnHv3kpqaqpxu92mOQbxDfSanXi5kQSKgAvAtIjB5/PR1HSStWvXWCMHYSxLqAo4bBpychZy9uxp5s+X//4OTl9fv9lNSALT9Kf+omksLS2hsbGB9HTzNDw0ov5JRAJ5ut6jLxGPx8Px47WUl++2RsaBKB+cfgb2AJ/pHQeA7OyZtLY2s2zZo9bIOLFJwJFvYILe2y3XfwUFKzl9+iumTh35UT0UitEbY4iHoRII6rsbyxX4vn17qampxuVymeZhEwrFfAM90hAPgyWwVb5V/X4/TU0nWbPG8vyOGJsSGhEyAY+u9T2mcfHiRcPeIv8JsYX+YnaGg5nAfXqLtBxcyso20tBQT1paqmm+YUQJjWgHArhF/52qt8hxwg9ASso4fD4fEydOID09HZ8vA58vg4yMDPx+P8FgzrCfiXXrSqiu/jDSbQYetkYMj0fk+X04zePxqPb2CzHH5aHaihXLzTlOSEHxEimhRn07NiIGBgZoa7sozUPS3295Bn43O8MhUkImfsALpOmbMq/RIv1U/Z+XF/C6XC7a2y8yfrw3Osnlyx3MmJFlmdgkGFxCW9uFSPctoMwa4SxLzBLatm2zpTyKip5WgMrPz1Pd3T/FlE84HFKZmZPMEtopF3Cac5HFvd401dNzJSqssbHB8nzk5gZjxIfDIZWcnGzGrZcLOInlZ9LKygqLsAULHrIkAKgNG9bGJCBinpGLOElnZGG/328RdezYYSks2g4dOhiN6+rqkP7H5SJOUWwuXFX1niWBWbOypbBoc7lcqrW1WYXDIXX+/DfSv1Au5ARJ+vZMASorK2ARf+DAO1JUBfCyacvMnKSuXu1Up059IWNnysWcYIe5aF3d0aj4a9d65EVtv/FWrzfH5eYGVV3dUZmA+UOfI3iBP0wR5qdfUfG6FFRqjHUDP5j+7OyZMt5xSs0FV60qVJ2dP6pwOKR6eq6o1NQ7TTFX5WD9c9F1ITrSBmSwEzwmF05KSlLbt29RxcUvSEHPysGafDmHbt0y0Cl22Swu2/dykGCnzZg2GeQkU4FDNiIibbkcYIO87/9SBiSCAPCBENIsgwZhHHDZGGe5U000WfqGrhvIls4hmK4vDLYOciL+7/A3UEJ4fpki9b4AAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",Ow="/nutri-raquel-alves-site/assets/facebook-DYP75GyA.svg",Dw="/nutri-raquel-alves-site/assets/instagram-C0B0VR5-.svg",Cw="/nutri-raquel-alves-site/assets/whatsapp--Jn61YCf.svg",Mw="/nutri-raquel-alves-site/assets/youtube-BWTRstPT.svg",Nw="/nutri-raquel-alves-site/assets/mockup-celFace-B1MvMUSM.svg",Uw="/nutri-raquel-alves-site/assets/mockup-cellinsta-B0hUzwXT.svg",Lw="/nutri-raquel-alves-site/assets/mockup-noteFace-C-gi-Naj.svg";function Bw(){return U.useEffect(()=>{const s=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting?d.target.classList.add("show"):d.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(c=>s.observe(c)),()=>s.disconnect()},[]),h.jsxs(sw,{children:[h.jsx(xi,{}),h.jsxs(cw,{children:[h.jsxs(fw,{children:[h.jsx(dw,{className:"animate",children:"QUEM SOU EU?"}),h.jsx(mw,{className:"animate",children:"RAQUEL ALVES"}),h.jsxs(A0,{className:"animate",children:["Nutricionista Funcional Integrativa – CRN 84541/3",h.jsx("br",{})," Pós-graduada em Gastroenterologia e Nutrigenômica",h.jsx("br",{})," Especialista em saúde intestinal, comportamento alimentar e condições",h.jsx("br",{})," inflamatórias crônicas.",h.jsx("br",{}),h.jsx("br",{})," Minha trajetória profissional nasceu da",h.jsx("br",{})," minha própria história. Convivi com",h.jsx("br",{}),"transtorno de imagem e alimentar na",h.jsx("br",{})," adolescência e juventude, além do",h.jsx("br",{}),"diagnóstico posterior de Síndrome do",h.jsx("br",{})," Intestino Irritável (SII) e Fibromialgia,",h.jsx("br",{})," experiências que me levaram a estudar",h.jsx("br",{})," profundamente o eixo intestino-cérebro,",h.jsx("br",{})," inflamação crônica, microbiota e a relação",h.jsx("br",{}),"entre emoções, metabolismo e",h.jsx("br",{})," comportamento alimentar."]})]}),h.jsxs(A0,{className:"animate",children:["Transformei dor em aprofundamento técnico.",h.jsx("br",{})," Busquei formação em Gastroenterologia",h.jsx("br",{})," para compreender o intestino como centro",h.jsx("br",{})," da imunidade, da absorção e do equilíbrio",h.jsx("br",{})," inflamatório.",h.jsx("br",{}),h.jsx("br",{})," Aprofundei-me em nutrigenômica para",h.jsx("br",{})," personalizar estratégias terapêuticas",h.jsx("br",{})," baseadas na individualidade biológica.",h.jsx("br",{})," Hoje atuo no tratamento integrativo de:",h.jsx("br",{})," • Obesidade e síndrome metabólica",h.jsx("br",{})," • Resistência insulínica",h.jsx("br",{})," • Disbiose e distúrbios digestivos",h.jsx("br",{})," • Dor crônica e inflamação de baixo grau",h.jsx("br",{})," • Compulsão alimentar e distorções na",h.jsx("br",{})," relação com a comida",h.jsx("br",{}),h.jsx("br",{})," Meu trabalho não se resume a prescrever dietas.",h.jsx("br",{})," Eu investigo causas, contexto e",h.jsx("br",{}),"comportamento.",h.jsx("br",{})," O objetivo não é apenas emagrecer é",h.jsx("br",{})," reconstruir saúde, autonomia e qualidade de",h.jsx("br",{})," vida de dentro para fora."]})]}),h.jsxs(hw,{children:[h.jsxs(pw,{children:[h.jsx(gw,{className:"animate",children:"ME SIGA NAS"}),h.jsx(vw,{className:"animate",children:"REDES SOCIAIS"}),h.jsxs(yw,{className:"animate",children:[h.jsx("a",{href:"https://www.instagram.com/nutriraquelalves/?hl=pt-br",target:"_blank",rel:"noopener noreferrer",children:h.jsx(xw,{src:Dw})}),h.jsx("a",{href:"https://www.facebook.com/nutriraquelalvess?locale=pt_BR",target:"_blank",rel:"noopener noreferrer",children:h.jsx(bw,{src:Ow})}),h.jsx("a",{href:`https://wa.me/5512991060495?text=${encodeURIComponent("Olá, vim pelo site e gostaria de  mais informações!")}`,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Sw,{className:"animate",src:Cw})}),h.jsx("a",{href:"https://www.youtube.com/@NutriRaquelAlves",target:"_blank",rel:"noopener noreferrer",children:h.jsx(ww,{src:Mw})})]}),h.jsx(Ew,{className:"animate",src:_w})]}),h.jsxs(Aw,{children:[h.jsxs(zw,{className:"animate",children:[h.jsx(jw,{className:"animate",src:Nw,alt:"mockup cel face"}),h.jsx(Tw,{className:"animate",src:Uw,alt:"mockup cell insta"})]}),h.jsx(Rw,{className:"animate",src:Lw})]})]})]})}const $n=Ge`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,wl=Ge`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,zu=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,Hw=Ge`
    from {
    opacity: 0;
    transform: translateY(-50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,qw=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`,Yw=B.div`
  margin-top: 36px;
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: row;
  position: relative;
  background: ${({theme:l})=>l.colors.brownDark};
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 98vw;
    height: 150px;
    border-radius: 0px 15px 15px 0;
    padding-left: 15px;
    &.show {
      animation: ${$n} 2.5s ease-out forwards;
    }
  }
  
`,Gw=B.div`
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`,Xw=B.h1`
  font-family: "poppins", "sans-serif";
  color: ${({theme:l})=>l.colors.white1};
  text-shadow: 0 2px 3px #000;
  font-weight: bold;
  font-size: 4.5rem;
  line-height: 3rem;
  &.show {
    animation: ${$n} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
    span {
      font-size: 2.9rem;
    }
  }
`,Qw=B.h2`
  font-family: "poppins", "sans-serif";
  color: ${({theme:l})=>l.colors.white1};
  font-weight: 300;
  font-size: 2rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${wl} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`,Vw=B.img`
  width: 168px;
  height: 167px;
  &.show {
    animation: ${zu} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    position: absolute;
    width: 7rem;
    right: 2%;
    bottom: 0.5rem;
  }
`,Zw=B.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 18px;
  }
`,Kw=B.div`
  margin: 56px auto;
  display: flex;
  gap: 140px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 5rem;
  }
`,$w=B.p`
  width: 472px;
  font-family: "montserrat";
  color: #f5f5ef;

  font-weight: 400;
  font-size: clamp(1.5rem, 4vw, 2.4rem);
  &.show {
    animation: ${$n} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 20rem;
  }
`,Jw=B.div`
  @media (max-width: 768px) {
  }
`,kw=B.h1`
  font-family: "poppins", "sans-serif";
  color: ${({theme:l})=>l.colors.white1};
  font-weight: bold;

  font-size: clamp(1.8rem, 4vw, 2.5rem);
  line-height: 2rem;
  &.show {
    animation: ${wl} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,Fw=B.p`
  width: 513px;
  font-family: "montserrat";
  color: ${({theme:l})=>l.colors.white1};
  font-weight: 400;
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  &.show {
    animation: ${$n} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 20rem;
    
  }
`,Ww=B.p`
  margin-top: 3rem;
  text-align: center;
  font-family: "arimo";
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 400;
  color: ${({theme:l})=>l.colors.white1};

  &.show {
    animation: ${Hw} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
    text-align: left;
    width: 100%;
  }
`,Pw=B.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  gap: 10%;
  margin: 0 auto 100px auto;
  @media (max-width: 768px) {
    margin: 0 18px;
    flex-direction: column;
    margin-left: 1rem;
  }
`,Iw=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`,eE=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }
`,tE=B.h1`
  width: 500px;
  font-family: "poppins";
  color: ${({theme:l})=>l.colors.white1};
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 3.5rem;
  margin-bottom: 1rem;
  margin-bottom: 3rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${$n} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 20rem;
    font-size: 2.2rem;
    line-height: 2.2rem;
    margin-left: 2rem;
    text-align: left;
  }
`,aE=B.p`
  width: 504px;
  font-family: "montserrat";
  color: ${({theme:l})=>l.colors.white1};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  &.show {
    animation: ${wl} 1.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1.3rem;
    margin-left: 2rem;
    line-height: 1.7rem;
  }
`,nE=B.h1`
  font-family: "poppins";
  color: ${({theme:l})=>l.colors.white1};
  font-size: 4rem;
  font-weight: 800;
  line-height: 5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${wl} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 2.2rem;
    line-height: 2.2rem;
    margin-left: 2rem;
    text-align: left;
  }
`,lE=B.p`
  width: 504px;
  font-family: "montserrat";
  color: ${({theme:l})=>l.colors.white1};
  font-size: 1.6rem;
  line-height: 3rem;
  font-weight: 400;
  &.show {
    animation: ${$n} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1.3rem;
    margin-left: 2rem;
    margin-bottom: 0;
    line-height: 1.7rem;
  }
`,iE=B.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 29rem;
  }
`,rE=B.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,oE=B.div`
  margin: 0 auto auto 0;
  width: 620px;
  min-height: 250px;
  background: #896751;
  border-radius: 0 18px 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 96px 0 49px;
  &.show {
    animation: ${$n} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 352px;
    height: 158px;
    padding: 10px 40px 020px;
  }
`,uE=B.div`
  margin: 103px 0 auto auto;
  width: 620px;
  min-height: 250px;
  background: #896751;
  border-radius: 18px 0 0 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 96px 0 49px;
  &.show {
    animation: ${wl} 2.5s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 352px;
    height: 158px;
    padding: 10px 40px 020px;
  }
`,z0=B.button`
  position: relative;
  top: 2rem;
  width: 26rem;
  height: 5rem;
  background: #dfe7dc; /* verde claro */
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 10px 0 #4f6f50; /* base verde escura */
  font-weight: 800;
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: #4b3f36; /* marrom escuro */
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  &.show {
    animation: ${zu} 2s ease-out forwards;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 0 #4f6f50;
  }

  &:active {
    transform: translateX(-50%) translateY(2px);
    box-shadow: 0 3px 0 #4f6f50;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
  }
`,R0=B.h1`
  font-family: "poppins";
  font-size: 3rem;
  font-weight: bold;
  color: #f5f5ef;
  margin-top: 3rem;
  &.show {
    animation: ${$n} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`,j0=B.p`
  font-family: "poppins";
  font-size: 1.5rem;
  color: #f5f5fe;
  line-height: 1.6rem;
  &.show {
    animation: ${wl} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,sE=B.p`
  margin-top: 100px;
  font-family: "poppins";
  color: #f5f5fe;
  line-height: 1.5rem;
  font-size: clamp(1.4rem, 4.5vw, 1.4rem);
  margin-left: 10rem;
  margin-bottom: 5rem;
  &.show {
    animation: ${zu} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
    width: 20rem;
  }
`,T0=B.span`
  font-weight: bold;
  &.show {
    animation: ${wl} 2s ease-out forwards;
  }
`,cE=B.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 5rem;
  &.show {
    animation: ${zu} 1.5s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }
`,fE="/nutri-raquel-alves-site/assets/selo-premium-Ccc5LA4w.svg";function dE(){U.useEffect(()=>{const u=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting?m.target.classList.add("show"):m.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(d=>u.observe(d)),()=>u.disconnect()},[]);const l="Olá, vim pelo site e gostaria de aderir ao plano trimestral!",r="Olá, vim pelo site e gostaria de aderir ao plano semestral!",s="5512991816453";return h.jsxs(qw,{children:[h.jsx(xi,{}),h.jsxs(Yw,{className:"animate",children:[h.jsxs(Gw,{children:[h.jsxs(Xw,{className:"animate",children:["CONSULTA ",h.jsx("span",{children:"PREMIUM"})]}),h.jsx(Qw,{className:"animate",children:"Acompanhamento Nutriconal Estratégico"})]}),h.jsx(Vw,{className:"animate",src:fE})]}),h.jsxs(Zw,{children:[h.jsxs(Kw,{children:[h.jsxs($w,{className:"animate",children:["Transformação real exige acompanhamento. Não é sobre uma consulta, é sobre direção, estratégia e constância.",h.jsx("br",{}),h.jsx("br",{})," Se você já começou e parou várias vezes, talvez o que faltou não foi força de vontade foi acompanhamento."]}),h.jsxs(Jw,{children:[h.jsxs(kw,{className:"animate",children:["ESSE PROGRAMA É ",h.jsx("br",{})," PARA VOCÊ QUE:"]}),h.jsxs(Fw,{className:"animate",children:["✔ Já tentou várias dietas e não conseguiu manter",h.jsx("br",{})," ✔ Sente que faz tudo “certo” mas não evolui",h.jsx("br",{})," ✔ Quer reduzir gordura, melhorar exames e ter energia",h.jsx("br",{})," ✔ Entende que saúde não se constrói em 30 dias",h.jsx("br",{})," ✔ Quer acompanhamento próximo e estratégia personalizada"]})]})]}),h.jsxs(Ww,{className:"animate",children:["Não é para quem quer uma orientação pontual, mas sim para quem quer",h.jsx("br",{}),"transformação consistente."]})]}),h.jsxs(Pw,{children:[h.jsxs(Iw,{children:[h.jsxs(tE,{className:"animate",children:["NO PROGRAMA ",h.jsx("br",{}),"CONSULTA PREMIUM",h.jsx("br",{})," VOCÊ TEM:"]}),h.jsxs(aE,{className:"animate",children:["•Consultas mensais individuais comigo",h.jsx("br",{})," • Avaliação corporal detalhada (InBody no presencial)",h.jsx("br",{})," • Análise estratégica de exames",h.jsx("br",{})," • Plano alimentar totalmente individualizado",h.jsx("br",{})," • Ajustes mensais conforme evolução",h.jsx("br",{})," • Direcionamento baseado na sua rotina real",h.jsx("br",{})," A primeira consulta tem duração média de 1h30, porque entender você profundamente é parte do processo."]})]}),h.jsxs(eE,{children:[h.jsx(nE,{className:"animate",children:"DIFERENCIAL"}),h.jsxs(lE,{className:"animate",children:["Aqui, a alimentação é parte central, mas nunca isolada. Eu considero:",h.jsx("br",{})," • Seu histórico metabólico",h.jsx("br",{})," • Seu intestino e padrão inflamatório ",h.jsx("br",{}),"• Sua rotina de trabalho",h.jsx("br",{})," • Seu nível de estresse",h.jsx("br",{})," • Seu sono",h.jsx("br",{})," • Sua composição corporal Você não sai com uma dieta. ",h.jsx("br",{}),"Você sai com estratégia."]})]})]}),h.jsxs(iE,{children:[h.jsxs(rE,{children:[h.jsxs(oE,{className:"animate",children:[h.jsx(R0,{className:"animate",children:"PLANO TRIMESTRAL"}),h.jsxs(j0,{className:"animate",children:["3 meses de acompanhamento",h.jsx("br",{})," Investimento: R$ 597",h.jsx("br",{})," ou parcelado no cartão"]}),h.jsx(z0,{onClick:()=>window.open(`https://wa.me/${s}?text=${encodeURIComponent(l)}`,"_blank"),className:"animate",children:"COMPRAR"})]}),h.jsxs(uE,{className:"animate",children:[h.jsx(R0,{className:"animate",children:"PLANO SEMESTRAL"}),h.jsxs(j0,{className:"animate",children:["6 meses de acompanhamento",h.jsx("br",{})," Investimento: R$ 1.097",h.jsx("br",{})," ou parcelado no cartão"]}),h.jsx(z0,{onClick:()=>window.open(`https://wa.me/${s}?text=${encodeURIComponent(r)}`,"_blank"),className:"animate",children:"COMPRAR"})]})]}),h.jsxs(sE,{className:"animate",children:[h.jsx(T0,{className:"animate",children:"Consulta avulsa"})," é para quem quer orientação pontual.",h.jsx("br",{}),h.jsx(T0,{children:"Consulta Premium"}),"é para quem quer transformação.",h.jsx("br",{}),h.jsx(cE,{className:"animate",children:"GARANTIA/ SEGURANÇA"})," ",h.jsx("br",{})," Compromisso, estratégia e acompanhamento contínuo.",h.jsx("br",{})," Você investe na sua saúde com clareza, direção e acompanhamento profissional.",h.jsx("br",{}),h.jsx("br",{})," Se você está pronta para parar de começar e parar, esse é o seu momento.",h.jsx("br",{})," Garanta sua vaga no Programa Consulta Premium."]})]})]})}const Ru=Ge`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Yg=Ge`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,ju=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,mE=Ge`
    from {
    opacity: 0;
    transform: translateY(-50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,hE=Ge`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
`,pE=Ge`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(-6deg);
  }
`,gE=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`,vE=B.div`
  display: flex;
  margin: 2rem auto 1rem auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 2rem;
  }
`,_0=B.div`
  margin-top: 2rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    
  }
`,Hf=B.h1`
  font-family: "anton";
  font-size: 3.5rem;
  color: #fffaf1;
  line-height: 1.5rem;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${ju} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,yE=B.h2`
  font-family: "anton";
  font-size: 4.2rem;
  color: #fffaf1;
  text-shadow: 0 2px 3px #000;
  &.show {
    animation: ${mE} 2s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,nf=B.p`
  width: 475px;
  font-family: "montserrat";
  font-size: 1.3rem;
  font-weight: bold;
  color: #fffaf1;
  margin-top: 2rem;
  &.show {
    animation: ${Ru} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 300px;
    font-size: 1rem;
    margin-bottom: 2rem;
    
  }
`,O0=B.div`
  @media (max-width: 768px) {
    margin-right: 10rem;
  }
`,D0=B(Hf)`
  font-size: 3.2rem;
  line-height: 4rem;
  &.show {
    animation: ${ju} 2s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1.7rem;
    line-height: 2rem;
    line-break: auto;
    
  }
`,xE=B.p`
  width: 475px;
  font-family: "montserrat";
  font-size: 1.3rem;
  font-weight: bold;
  color: #fffaf1;
  margin-top: 2rem;
  &.show {
    animation: ${Ru} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 300px;
    font-size: 1rem;
    margin-bottom: 1rem;   
  }
`,bE=B.div`
  display: flex;
  margin: 1rem auto auto auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0;
  }
`,SE=B.div`
  
`,wE=B.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 5rem;
  overflow: hidden; /* importante */
  @media (max-width: 768px) {
    flex-direction: column;
  padding-left: 2rem;
  justify-content: flex-start;
  }
`,EE=B.div`
  position: relative;
  margin-top: 2rem;
  z-index: 2; /* garante que fique na frente */
  max-width: 700px;
  @media (max-width: 768px){
    margin-bottom: 0;
  }
`,AE=B.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  z-index: 2;
  @media (max-width: 768px){
    margin-bottom: 7rem;
    margin-right: 5rem;
  }
`,zE=B(Hf)`
  margin-top: 5rem;
  margin-bottom: 2rem;
  &.show {
    animation: ${Ru} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    font-size: 3rem;
    
    width: 350px;
    line-height: 3rem;
    text-align: center;
  }
  @media (max-width: 370px) {
    width: 20rem;
    margin: 0 auto;
  }
`,RE=B.p`
  font-family: "montserrat";
  font-size: 1.5rem;
  font-weight: 600;
  color: #fffaf1;
  margin-bottom: 1rem;
  &.show {
    animation: ${Yg} 1.5s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1rem;
    margin-left: 1rem;
  }
  @media (max-width: 370px) {
    margin-top: 1rem;
  }
`,jE=B.h1`
  font-family: "anton";
  font-weight: 400;
  font-size: 3.9rem;
  line-height: 3.5rem;
  color: #fffaf1;
  max-width: 600px;
  &.show {
    animation: ${ju} 2.5s ease-out forwards;
  }
  @media (max-width: 768px){   
    font-size: 2.7rem;
    line-height: 2.5rem;
    margin-left: 1rem;
  }
  @media (max-width: 370px) {
    margin-left: 1rem;
    font-size: 2.5rem;
  }
`,TE=B.button`
  background: #f1eee7; /* bege claro */
  color: #3e2f25; /* marrom escuro */
  border: none;
  border-radius: 60px;
  padding: 10px 70px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  /* Base verde */
  box-shadow: 0px 12px 0px #75886b;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0px 8px 0px #75886b;
  }
  &:active {
    transform: translateY(8px);
    box-shadow: 0px 4px 0px #90a784;
  }
  .title {
    font-size: 32px;
    margin: 0;
    line-height: 1.2;
    &.show {
      animation: ${Ru} 2.5s ease-out forwards;
    }
  }
  .subtitle {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 4px;
    &.show {
      animation: ${Yg} 2.5s ease-out forwards;
    }
  }
  @media (max-width: 768px){
    width: 14rem;
    height: 3rem;
    padding: 0;
    position: relative;
    bottom: 4rem; 
    left: 1rem;
    .title {
      font-size: 1rem;
    }
    .subtitle {
      font-size: 0.7rem;
    }
    @media (max-width: 370px) {
      left: 0.5rem;
      bottom: 3rem;
  }
  }
`,_E=B.img`
  position: relative;
  bottom: 3rem;
  width: 78px;
  height: 120px;
  margin-left: 1rem;
  &.show {
    animation:
      ${hE} 0.8s ease-out forwards,
      ${pE} 1.6s ease-in-out 1s infinite;
  }
  @media (max-width: 768px) {
    width: 3rem;
    bottom: 7rem;
    margin-left: 0;
  }
`,OE=B.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 75dvh;
  width: auto;
  object-fit: contain;
  z-index: 1;
  &.show {
    animation: ${ju} 1.5s ease-out forwards;
  }
  @media (max-width: 768px){
    bottom: -4.5rem;   /* desce levemente */
  left: 14%;
  height: 47vh;
  }
  
`,DE="/nutri-raquel-alves-site/assets/foto1-DQDQvcxn.png",CE=Object.freeze(Object.defineProperty({__proto__:null,default:DE},Symbol.toStringTag,{value:"Module"})),ME="/nutri-raquel-alves-site/assets/foto10-CWOCV5su.png",NE=Object.freeze(Object.defineProperty({__proto__:null,default:ME},Symbol.toStringTag,{value:"Module"})),UE="/nutri-raquel-alves-site/assets/foto11-CAAJrZ6y.png",LE=Object.freeze(Object.defineProperty({__proto__:null,default:UE},Symbol.toStringTag,{value:"Module"})),BE="/nutri-raquel-alves-site/assets/foto12-DaEAdj-N.png",HE=Object.freeze(Object.defineProperty({__proto__:null,default:BE},Symbol.toStringTag,{value:"Module"})),qE="/nutri-raquel-alves-site/assets/foto13-CNX0IAwH.png",YE=Object.freeze(Object.defineProperty({__proto__:null,default:qE},Symbol.toStringTag,{value:"Module"})),GE="/nutri-raquel-alves-site/assets/foto14-DKtPDEM5.png",XE=Object.freeze(Object.defineProperty({__proto__:null,default:GE},Symbol.toStringTag,{value:"Module"})),QE="/nutri-raquel-alves-site/assets/foto15-BPDJQdye.png",VE=Object.freeze(Object.defineProperty({__proto__:null,default:QE},Symbol.toStringTag,{value:"Module"})),ZE="/nutri-raquel-alves-site/assets/foto16-CGCT8-SQ.png",KE=Object.freeze(Object.defineProperty({__proto__:null,default:ZE},Symbol.toStringTag,{value:"Module"})),$E="/nutri-raquel-alves-site/assets/foto17-Dunk95G9.png",JE=Object.freeze(Object.defineProperty({__proto__:null,default:$E},Symbol.toStringTag,{value:"Module"})),kE="/nutri-raquel-alves-site/assets/foto18-DjGlV9KM.png",FE=Object.freeze(Object.defineProperty({__proto__:null,default:kE},Symbol.toStringTag,{value:"Module"})),WE="/nutri-raquel-alves-site/assets/foto19-D4apngf-.png",PE=Object.freeze(Object.defineProperty({__proto__:null,default:WE},Symbol.toStringTag,{value:"Module"})),IE="/nutri-raquel-alves-site/assets/foto2-BZcgnTjq.png",e2=Object.freeze(Object.defineProperty({__proto__:null,default:IE},Symbol.toStringTag,{value:"Module"})),t2="/nutri-raquel-alves-site/assets/foto20-DEPklJIa.png",a2=Object.freeze(Object.defineProperty({__proto__:null,default:t2},Symbol.toStringTag,{value:"Module"})),n2="/nutri-raquel-alves-site/assets/foto21-9JjOwvMK.png",l2=Object.freeze(Object.defineProperty({__proto__:null,default:n2},Symbol.toStringTag,{value:"Module"})),i2="/nutri-raquel-alves-site/assets/foto3-C33H-zvB.png",r2=Object.freeze(Object.defineProperty({__proto__:null,default:i2},Symbol.toStringTag,{value:"Module"})),o2="/nutri-raquel-alves-site/assets/foto4-DBbIakpo.png",u2=Object.freeze(Object.defineProperty({__proto__:null,default:o2},Symbol.toStringTag,{value:"Module"})),s2="/nutri-raquel-alves-site/assets/foto5-D_FyxD4h.png",c2=Object.freeze(Object.defineProperty({__proto__:null,default:s2},Symbol.toStringTag,{value:"Module"})),f2="/nutri-raquel-alves-site/assets/foto6-DOpmOIaj.png",d2=Object.freeze(Object.defineProperty({__proto__:null,default:f2},Symbol.toStringTag,{value:"Module"})),m2="/nutri-raquel-alves-site/assets/foto7-CwkYlnAy.png",h2=Object.freeze(Object.defineProperty({__proto__:null,default:m2},Symbol.toStringTag,{value:"Module"})),p2="/nutri-raquel-alves-site/assets/foto8-F4CgQKF_.png",g2=Object.freeze(Object.defineProperty({__proto__:null,default:p2},Symbol.toStringTag,{value:"Module"})),v2="/nutri-raquel-alves-site/assets/foto9-Dx5k9UKu.png",y2=Object.freeze(Object.defineProperty({__proto__:null,default:v2},Symbol.toStringTag,{value:"Module"})),x2=B.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 4rem 6rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 2rem 1.5rem;
  }

`,b2=B.a`
  position: relative;
  display: block;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
  transform: translateY(40px);
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }

  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      transparent
    );
    color: white;
    font-weight: 600;
    font-family: 'Montserrat';
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {

  transform: none;
  animation: none;
  opacity: 1;

  &:hover img {
    transform: none;
  }

  div {
    opacity: 1;
  }
}
`,S2=[{title:"Episódio 1",link:"https://www.instagram.com/reel/DGX4wLTu_eP/?igsh=MnJhNW1vY2txMGdj"},{title:"Episódio 2",link:"https://www.instagram.com/reel/DGp6CaqO--v/?igsh=MTNkMjg2YmUxZmUwcw=="},{title:"Episódio 3",link:"https://www.instagram.com/reel/DG74vsnuc_p/?igsh=MTY4M3NmM3VucjhmOA=="},{title:"Episódio 4",link:"https://www.instagram.com/reel/DHOzFh-pOUz/?igsh=MW5wdXVvZTNpdnZmdw=="},{title:"Episódio 5",link:"https://www.instagram.com/reel/DHg_3A4hVsj/?igsh=MTkyc2pkZWM2ZXFsdA=="},{title:"Episódio 6",link:"https://www.instagram.com/reel/DHy8ov0pm5f/?igsh=MW9zOXIwNGxlMTN5Nw=="},{title:"Episódio 7",link:"https://www.instagram.com/reel/DIEO4U9O-Uw/?igsh=c3B4dXAxYjhmYWpx"},{title:"Episódio 8",link:"https://www.instagram.com/reel/DIXIH9cB7wo/?igsh=MXgyaWh1YWtmc2Z0ZQ=="},{title:"Episódio 9",link:"https://www.instagram.com/reel/DKCgc7BtnhW/?igsh=dGdwbG0xejA1ODBk"},{title:"Episódio 10",link:"https://www.instagram.com/reel/DKVFpTKJeNh/?igsh=MXBmZWQ1OW5pazJmag=="},{title:"Episódio 11",link:"https://www.instagram.com/reel/DLLe4VFJIR-/?igsh=MWN3a3plNm55eHduZA=="},{title:"Episódio 12",link:"https://www.instagram.com/reel/DLcSXx-u2tX/?igsh=MTdmdnM2cXFsbjhkcw=="},{title:"Episódio 13",link:"https://www.instagram.com/reel/DLx3CnmpM2Y/?igsh=MWxqMHo4eTY2aHhnaQ=="},{title:"Episódio 14",link:"https://www.instagram.com/reel/DMToWciJzno/?igsh=YWltaWZuZmRrNHg="},{title:"Episódio 15",link:"https://www.instagram.com/reel/DMBoPyuJPmL/?igsh=ajQxNmNsNnU1b2dh"},{title:"Episódio 16",link:"https://www.instagram.com/reel/DM2feZ_Ow3n/?igsh=MW43MWEzYnhhaXVzeA=="},{title:"Episódio 17",link:"https://www.instagram.com/reel/DNdA4B2NMau/?igsh=emZxa3FwMWZuOWFm"},{title:"Episódio 18",link:"https://www.instagram.com/reel/DORha0JASYy/?igsh=OWt3dmp1bWJ5cm1h"},{title:"Episódio 19",link:"https://www.instagram.com/reel/DORha0JASYy/?igsh=OWt3dmp1bWJ5cm1h"},{title:"Episódio 20",link:"https://www.instagram.com/reel/DRFNsFxjZpB/?igsh=c2JtNXcwczA5OHQz"},{title:"Episódio 21",link:"https://www.instagram.com/reel/DSx1iIWjReT/?igsh=bTVmOXh0a2Q2bm5z"}],w2=Object.assign({"../../assets/series-page/imgEpisodios/foto1.png":CE,"../../assets/series-page/imgEpisodios/foto10.png":NE,"../../assets/series-page/imgEpisodios/foto11.png":LE,"../../assets/series-page/imgEpisodios/foto12.png":HE,"../../assets/series-page/imgEpisodios/foto13.png":YE,"../../assets/series-page/imgEpisodios/foto14.png":XE,"../../assets/series-page/imgEpisodios/foto15.png":VE,"../../assets/series-page/imgEpisodios/foto16.png":KE,"../../assets/series-page/imgEpisodios/foto17.png":JE,"../../assets/series-page/imgEpisodios/foto18.png":FE,"../../assets/series-page/imgEpisodios/foto19.png":PE,"../../assets/series-page/imgEpisodios/foto2.png":e2,"../../assets/series-page/imgEpisodios/foto20.png":a2,"../../assets/series-page/imgEpisodios/foto21.png":l2,"../../assets/series-page/imgEpisodios/foto3.png":r2,"../../assets/series-page/imgEpisodios/foto4.png":u2,"../../assets/series-page/imgEpisodios/foto5.png":c2,"../../assets/series-page/imgEpisodios/foto6.png":d2,"../../assets/series-page/imgEpisodios/foto7.png":h2,"../../assets/series-page/imgEpisodios/foto8.png":g2,"../../assets/series-page/imgEpisodios/foto9.png":y2}),E2=Object.entries(w2).sort(([l],[r])=>{const s=l.match(/(\d+)/)?.[0]||0,u=r.match(/(\d+)/)?.[0]||0;return Number(s)-Number(u)}).map(([,l])=>l.default);function A2(){return h.jsx(x2,{children:S2.map((l,r)=>h.jsxs(b2,{href:l.link,target:"_blank",rel:"noopener noreferrer",style:{animationDelay:`${r*.05}s`},children:[h.jsx("img",{src:E2[r],alt:l.title}),h.jsx("div",{children:l.title})]},r))})}const z2="data:image/svg+xml,%3csvg%20width='99'%20height='135'%20viewBox='0%200%2099%20135'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='22.2048'%20width='78'%20height='122'%20transform='rotate(10.4867%2022.2048%200)'%20fill='url(%23pattern0_64_122)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_64_122'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_64_122'%20transform='matrix(0.0196078%200%200%200.0125362%200%20-0.00144648)'/%3e%3c/pattern%3e%3cimage%20id='image0_64_122'%20width='51'%20height='80'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABQCAYAAAC0wU3eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAWcSURBVHhe7ZtriFVVFMd/PYipzBx6WY1GVBrTg6ioaTIzgt5IFpjkgzS1GFIowgqH7MtQEcSQUVRSZGVlECWRhh8sTSKiLDJtsrSHYWhZNGMTZN6+rANr/nefe86995xzx5wfbGbftdbee+2z99lnn7XPwBAHDsdY2u+5HyhZuleVeXOwCurkXJe/wOULIevONJQDrjMjgM12H8xSZR3MsDp7gGZV5sUcd1OXgNlq4Fjm7F5VpWOm1Hm7GuTFGKBPGp+jRsYrzuY1VRqzpK6/gLFqlCft1qh3YoYa2XIc6UNLczS1fEcmqFERjAP6xZnb1Ai4wZIyVcr2A5erUZFcCvQ6hzaqQQW+cuX67OI0nIuBneZUlyor0GVldtlFGVScqoIU1FJmiHq5Edjk7osNMQtBbhykAqMdOEyFwLfAdpE1Ae8AV4o84hHgARUCxwOtKgT2Ah+qsFa+kSVUkz4wHw/YaOqQMlMCNj5tBY6VMjWhFWta5WxPF91S4BTgTOBtJ+9zZbDdgdar6RopUxNLAxX75Eemw8k3OHnEdqdvd/LCRqYaFjkHnlaljE5ot5ApaV4BKnGIy/e7fMS/Ll9vW4nU28ChLu8dj/CdDekzpd7OJDmbpM+UIjuz1+VzIe/OJE3DTMm7M0n6TBnqjCNpGv2v7pkkfabk3ZmkkcuUvDvj9R3AOhcUWR7zCtAwfJxsniqBLwKbSE1ztVCtZDkyoRvc6+N4BpgE3Aw8Bay2NEUN8+YNd4XvUKWLUUfpeXN8IbA7MEqaPgVatNK8eNM1HIpBf+3080V3VsD5UOoBhgGjLJD4oE3pYVJf3SS9r/jOnKdK4EtxvBO4GnhM5D8FOrkLuFMrDHEh8LkV+sFecyerkQUyosqnqzJFZ9Y7/TTRTQ50IJSelHIDuCVQIEo9wFXOdpXTTXXyiB6nT+pMmyoD7X8CdMvreAkYrgUjfglUoulRs13tZKHVp97O+ED9C04+XEb9bGKW5hNcfqLdC0ucDGCBBTaSluZN9rcP+F50mCOVaHL5h13+T1vSI0a4/AD8CPjhGwvscLpeibFNcrYRI4GHgPGqMNa68hepUnwZKTp/aBV7NOIdnCm6VmCPNBKliWKbhoVWdhtwuCoTOjPX6S4jZpr5s8hbXR6bNneLLGKfClLQZVd4fEx052+X1/r9FC+5/ADOkCtyohrErPvXq1EGRA/l9aoA7nJtjyNmZLbYEhihowOwWAUxddXLdOCKmAvlg/4lKjiwzOVDndHVjQonCvWwB3gf+EMV4nvqzpwPnOZ+Y5vEZ0UWV1delF28OAd22gMxIrTv6pbfcXXlReqRwV68IkJblc3Ae+73Vpcvgkq+l3GUbCcuUQNgNPCS7XSLxn9AEfKtjNddgYq70wawwPnWRoqh8lMttKo1ktQLQMQK4HfLNwPXib6RVLUARCx3+dBC0ChSPzQ9fqrdJNvyRlLme5kgwDp39t9kIaHBQE0jA/Cyyw+WqVb1AhDhp9q1wHHud6Pw030fVXRmo3sFxoIejeZkl/+HKjoD8KLLD4Znjo90hl7sKtLinrilQfDtmH9BrGnaf+Aq6FRlgWhoN02AvgwfRPhOlQXS6fxYocq0NMsVadT2xn+kFwrYp2aJq2iNKgtAPynWEFRVtEplRS/TP7u2Q19SVc1brsJfa11NaqDbtdub1TdpLfI5/cdqkAP3yIy4Tw3qYb5U/pwaZMhsaWutGmSBP20uAe9a7CBLFksbP+b5/zZrpLFtNQbRlTHykC7ZtuUcNcySIy3Y7hstASvtOLFaTrIpq/X9ljYKkwXzAg6UgI/s/gqdjEUcbYHGlYHyJTtfHaWF8ma0LNuhtAP4zL4q32IBE7XxaZE2UjQT7IMEdSxt6rOdRqH/vpVEG/CEHKbGpd12700DjtCKhtif+Q+BjlmKuA6bfgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",R2="/nutri-raquel-alves-site/assets/raquelSerie-DBT3ypdg.svg";function j2(){U.useEffect(()=>{const s=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting?d.target.classList.add("show"):d.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(c=>s.observe(c)),()=>s.disconnect()},[]);const l="Olá, vim pelo site e gostaria de  agendar minha consulta!",r="5512991060495";return h.jsxs(gE,{children:[h.jsx(xi,{}),h.jsxs(vE,{children:[h.jsxs(_0,{children:[h.jsx(Hf,{className:"animate",children:"NUTRIÇÃO"}),h.jsx(yE,{className:"animate",children:"ALÉM DO PRATO"}),h.jsxs(nf,{className:"animate",children:["Nutrição não é só sobre calorias, Não é só sobre emagrecimento E",h.jsx("br",{}),"definitivamente não é só sobre o que",h.jsx("br",{})," está no prato.",h.jsx("br",{}),h.jsx("br",{})," O Nutrição Além do Prato nasceu da minha própria história, uma trajetória marcada por transtorno alimentar e de imagem, Síndrome do Intestino Irritável (SII), Fibromialgia e a busca incansável por respostas.",h.jsx("br",{}),"Essa série é mais do que conteúdo.",h.jsx("br",{})," É uma construção de consciência sobre o que realmente sustenta a saúde: intestino, sistema nervoso, emoções, estilo de vida e propósito. O Nutrição Além do Prato é um projeto autoral que conecta ciência e vivência real."]})]}),h.jsxs(O0,{children:[h.jsxs(D0,{className:"animate",children:["AO LONGO DOS EPISÓDIOS,",h.jsx("br",{}),"COMPARTILHO:"]}),h.jsxs(xE,{className:"animate",children:["• Minha trajetória pessoal com",h.jsx("br",{})," transtorno alimentar, distorção de",h.jsx("br",{})," imagem, SII e dor crônica",h.jsx("br",{}),"• A relação entre intestino, inflamação e sistema nervoso",h.jsx("br",{}),"• Como o eixo intestino-cérebro",h.jsx("br",{})," influencia metabolismo, humor e",h.jsx("br",{})," comportamento alimentar",h.jsx("br",{}),"• A importância do sono, exercício,",h.jsx("br",{})," gestão emocional e espiritualidade",h.jsx("br",{}),"• A construção de uma abordagem",h.jsx("br",{})," terapêutica integrativa",h.jsx("br",{}),"Cada episódio une experiência, base",h.jsx("br",{})," científica e prática clínica.",h.jsx("br",{}),"Porque saúde não começa na dieta.",h.jsx("br",{}),"Começa no entendimento."]})]})]}),h.jsxs(bE,{children:[h.jsx(_0,{children:h.jsxs(nf,{className:"animate",children:["A primeira temporada é uma jornada em 23",h.jsx("br",{})," episódios. Ela começa na dor Transtorno alimentar,",h.jsx("br",{})," vazio emocional, conflitos com o corpo e",h.jsx("br",{})," evolui para o diagnóstico de Fibromialgia e",h.jsx("br",{})," SII.",h.jsx("br",{}),"Ao longo da série, mostro como transformei",h.jsx("br",{})," sofrimento em especialização técnica,",h.jsx("br",{})," aprofundando-me em Gastroenterologia,",h.jsx("br",{})," microbiota intestinal, inflamação crônica e",h.jsx("br",{})," estratégias nutricionais terapêuticas.",h.jsx("br",{}),"A temporada constrói, passo a passo, os",h.jsx("br",{})," pilares da saúde:",h.jsx("br",{}),h.jsx("br",{}),"• Alimentação estratégica",h.jsx("br",{}),"• Movimento como ferramenta terapêutica",h.jsx("br",{}),"• Ritmo circadiano e sono",h.jsx("br",{}),"• Regulação do estresse",h.jsx("br",{}),"• Gestão emocional",h.jsx("br",{}),"• Espiritualidade como base de sustentação",h.jsx("br",{}),h.jsx("br",{}),"O encerramento marca não o fim da história,",h.jsx("br",{})," mas o início de uma nova fase: maturidade,",h.jsx("br",{})," propósito e prática clínica estruturada."]})}),h.jsxs(O0,{children:[h.jsx(D0,{className:"animate",children:"se você convive com:"}),h.jsxs(nf,{className:"animate",children:["– Sintomas digestivos recorrentes",h.jsx("br",{}),"– Inflamação crônica",h.jsx("br",{}),"– Dor persistente",h.jsx("br",{}),"– Compulsão alimentar",h.jsx("br",{}),"– Relação difícil com o próprio corpo",h.jsx("br",{}),"Essa série pode ajudar você a",h.jsx("br",{})," compreender o que está por trás dos",h.jsx("br",{})," sintomas.",h.jsx("br",{}),"Abaixo, você encontra todos os",h.jsx("br",{})," episódios da 1ª temporada.",h.jsx("br",{}),"Assista na ordem, Permita-se refletir E,",h.jsx("br",{})," se fizer sentido, caminhe comigo."]})]})]}),h.jsx(SE,{children:h.jsx(A2,{})}),h.jsxs(wE,{children:[h.jsxs(EE,{children:[h.jsxs(AE,{children:[h.jsx(zE,{className:"animate",children:"NUTRIÇÃO ALÉM DO PRATO"}),h.jsxs(RE,{className:"animate",children:["NÃO É APENAS UMA SÉRIE.",h.jsx("br",{}),"É A BASE DA MINHA ATUAÇÃO PROFISSIONAL.",h.jsx("br",{}),"ELE REPRESENTA A UNIÃO ENTRE VIVÊNCIA E CIÊNCIA E A",h.jsx("br",{})," CERTEZA DE QUE A DOR PODE SE TRANSFORMAR EM",h.jsx("br",{})," PROPÓSITO QUANDO É COMPREENDIDA."]}),h.jsxs(jE,{className:"animate",children:["QUER APLICAR ISSO",h.jsx("br",{})," NA SUA REALIDADE?"]})]}),h.jsxs(TE,{className:"animate",onClick:()=>window.open(`https://wa.me/${r}?text=${encodeURIComponent(l)}`,"_blank"),children:[h.jsx("span",{className:"title animate",children:"AGENDE SUA CONSULTA"}),h.jsx("span",{className:"subtitle animate",children:"PRESENCIAL OU ONLINE"})]}),h.jsx(_E,{className:"animate",src:z2})]}),h.jsx(OE,{className:"animate",src:R2})]})]})}const qf=Ge`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ha=Ge`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,T2=Ge`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-50px, -110px) rotate(40deg);
  }

  70% {
    transform: translate(-160px, 80px) rotate(10deg);
  }

  85% {
    transform: translate(-150px, 150px) rotate(5deg);
  }

  100% {
    transform: translate(-160px, 270px) rotate(0deg);
  }
`,_2=Ge`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-60px, -130px) rotate(60deg);
  }

  70% {
    transform: translate(-90px, 150px) rotate(-15deg);
  }

  85% {
    transform: translate(-85px, 80px) rotate(5deg);
  }

  100% {
    transform: translate(-90px, 90px) rotate(0deg);
  }
`,O2=Ge`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.8);
  }

  30% {
    opacity: 1;
    transform: translate(-40px, -120px) rotate(-50deg);
  }

  70% {
    transform: translate(-30px, 120px) rotate(15deg);
  }

  85% {
    transform: translate(-25px, 95px) rotate(-5deg);
  }

  100% {
    transform: translate(-30px, 170px) rotate(0deg);
  }
 
`,D2=Ge`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(255,0,0,0));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(255,0,0,0.6));
  }
`,C2=Ge`
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(10px) scale(1.05);
  }
`,Tu=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,Gg=Ge`
    from {
    opacity: 0;
    transform: translateY(-50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,Yf=Su`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 80px;     /* ajuste fino pra boca do saco */
  right: 120px;  /* ajuste fino */
  z-index: 2;
  will-change: transform;
  @media (max-width:768px) {
    width: 60px;
    z-index: -2;
  }
`,M2=B.div`
  width: 100%;
  
  display: flex;
  flex-direction: column; 
  
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;B.div`
  position: relative;
  width: 600px; /* ajuste conforme layout */
  height: 500px;
  @media (max-width: 768px) {
    width: 390px;
    height: auto;
  }
`;const N2=B.img`
  width: 334px;
  height: 395px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 220px;
  }
`,U2=B.img`
  ${Yf};

  &.show {
    animation: ${T2} 1.5s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 0.2s;
  }
`,L2=B.img`
  ${Yf};

  &.show {
    animation: ${_2} 1.6s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 0.7s;
  }
  
`,B2=B.img`
  ${Yf};

 &.show {
    animation: ${O2} 1.7s cubic-bezier(.22,1,.36,1) forwards;
    animation-delay: 1.2s;
  }
  @media (max-width:768px){
    z-index: 2;
  }
  @media (max-width: 370px) {
    top: 40px;
  }
`,H2=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
  }
`,q2=B.div`
  margin-left: 66px;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`,Y2=B.h1`
  font-family: 'anton';
  font-size: 150px;
  font-weight: 400;
  color: #EBF1e4;
  text-shadow: 0 5px  10px #000 ;
   &.show {
    animation: ${qf} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 8rem;
    
  }
  @media (max-width: 370px) {
    font-size: 5rem;
  }
`,G2=B.h2`
  width: 430px;
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 30px;
  color: #Ebf1e4;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  @media (max-width:768px){
    width: 390px;
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    width: 25rem;
    font-size: 1.4rem;
  }
`,X2=B.h3`
  width: 531px;
  font-family: 'montserrat', 'sans-serif';
  font-size: 20px;
  color: #ebf1e4;
  font-weight: 300;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  span {
    font-weight: 700;
  }

  @media (max-width:7668px) {
    width: 380px;
    font-size: 1.1rem;
  }
  @media (max-width: 370px) {
    font-size: 1rem;
    width: 20rem;
    font-weight: 500;
  }
`,Q2=B.p`
  font-family: 'montserrat';
  font-size: 2rem;
  color: #ebf1e4;
  margin-top: 1rem;
   &.show {
    animation: ${Tu} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    width: 20rem;
  }
`,V2=B.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 768px){
    flex-direction: column;
  }
`,Z2=B.p`
  font-family: 'montserrat';
  font-size: 1.5rem;
  color: #F5f5ef;
  font-weight: bold;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
`,K2=B.img`
 &.show {
    animation: ${Ha} 2s ease-out forwards;
  }`,$2=B.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  @media (max-width:768px){
    justify-content: center;
  }
  
`,J2=B.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row;
  } 
`,k2=B.div`
  margin-left: 10rem;
  margin-bottom: 0;
  @media (max-width:768px) {
    margin-left:2rem;
  }
`,Xg=B.h1`
  font-family: 'poppins';
  font-weight: bold;
  color: #F5f5fe;
  font-size: 50px;
  line-height: 35px;
  margin-bottom: 1rem;
   &.show {
    animation: ${Tu} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.8rem;
    line-height: 25px;
    width: 25rem;
  }
  @media (max-width: 370px) {
    width: 24rem ;
    font-size: 1.7rem;
  }
`,Qg=B.p`
  font-family: 'montserrat';
  font-weight: bold;
  color: #f5f5ef;
  font-size: 30px;
  line-height: 30px; 
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    font-size: 1.2rem;
    line-height: 1rem;
    width: 165px;
  }
  @media (max-width: 370px) {
    line-height: 1.4rem;
  }
`,F2=B.div`
  margin-left: 10rem;
  margin-bottom: 0;
  @media (max-width:768px) {
    position: relative;
    margin-left: 0;
    right: 12rem;
    
  }
`,W2=B(Xg)`
  text-align: right;
   &.show {
    animation: ${qf} 2s ease-out forwards;
  }
  @media (max-width:768px) {
    position: relative;
    font-size: 1.9rem;
    line-height: 25px;
    width: 25rem;
    right: 3rem;   
  }
  @media (max-width: 370px){
    font-size: 1.8rem;
    width: 26rem;
    right: 6rem;
  }
`,P2=B(Qg)`
  text-align: right;
  margin-top: 3rem;
  font-weight: 500;
   &.show {
    animation: ${Ha} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    position: relative;
    left: 10.3rem;
    width: 182px;
    font-size: 18px;
  }
  @media (max-width: 370px) {
    left: 8rem;
  }
`,I2=B.img`
  width: 372px;
   &.show {
    animation: ${Gg} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 15rem;
    position: relative;
    top: 4rem;
    right: 15rem;
  }
`,eA=B.div`
  display: flex;
  justify-content: space-around;
  margin:5rem 5rem auto 0 ;
`,tA=B.img`
  width: 20rem; 
  margin-left: 1rem;
   &.show {
    animation: ${Tu} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    width: 13rem;
    position: relative;
    rotate: 23deg;
    top: 4rem;
    right: 6rem;
  }
`,aA=B.div`
   margin-top:2rem;
   display: flex;
   
   padding-left: 2rem;
   margin-bottom: 0;

   @media (max-width: 768px){
    flex-direction: column;
    margin-top: 5rem;
   }
   
 `,nA=B.div`
  display: flex;
  flex-direction: column;
  max-width: 638px;
  @media (max-width: 768px){
    max-width: 350px;
  }

 `,C0=B.h1`
  font-family: 'poppins';
  font-weight: bold;
  font-size: 62px;
  line-height: 50px;
  color: #f5f5fe;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 370px) {
    font-size: 2.7rem;
    line-height: 2.3rem;
  }
 `,M0=B.p`
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #f5f5ef;
  margin-bottom: 2rem;
   &.show {
    animation: ${qf} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1.3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
 `,lA=B.h1`
  font-family: 'poppins';
  font-weight: bold;
  font-size: 62px;
  line-height: 50px;
  color: #f5f5fe;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
 `,iA=B.img`
  width: 15rem;
  position: relative;
  left: 20rem;
  &.show {
    animation: ${C2} 1.8s ease-in-out infinite;
  }
  @media (max-width: 768px){
    width: 10rem;
    left: 2rem;
    top: 3rem;
    rotate: 90deg;
    z-index: 2;
  }
`,rA=B.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    position: relative;
    bottom: 15rem;
  }
  @media (max-width: 370px) {
    right: 1rem;
  }
 `,oA=B.img`
  position: relative;
  width: 321px;
  height: 318px;
  margin-left: 15rem;
  z-index: 1;

  &.show {
    animation: ${D2} 1.5s ease-in-out infinite;
  }
  @media (max-width: 768px){
    width: 12rem;
    margin-left: 10rem;
    position: relative;
    top: 8rem;
  }
`,uA=B.div`
  display: flex;
  position: relative;
  bottom: 10rem;
  align-items: center;
  @media (max-width:768px){
    bottom: 2rem;
  }
 `,sA=B.img`
  width: 30rem;
   &.show {
    animation: ${Tu} 1s ease-out forwards;
  }
  @media (max-width: 768px){
    width: 17rem;
    position: relative;
    top: 1rem;
    
  }
 `,cA=B.p`
  font-family: 'montserrat';
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-right: 2px;
  color: #f5f5ef;
   &.show {
    animation: ${Gg} 2s ease-out forwards;
  }
  @media (max-width: 768px){
    font-size: 1rem;
    line-height: 1rem;
    position: relative;
    top: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
    line-height: 0.8rem;
    top: 1.7rem;
  }
  
 `,fA=B.button`
  position: relative;
  width: 30rem;
  height: 6rem;
  z-index: 1;
  margin-top: -17rem;
  padding: 22px 60px;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #f2f2f2;
  background: #5f7f57;
   &.show {
    animation: ${Ha} 2s ease-out forwards;
  }

  border:none;
  border-radius: 25px;

  cursor: pointer;

  /* Profundidade */
  box-shadow:
    0 8px 0 #4e6b47,
    0 15px 25px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease;

  /* Hover */
  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 0 #4e6b47,
      0 20px 30px rgba(0, 0, 0, 0.3);
  }

  /* Clique */
  &:active {
    transform: translateY(6px);
    box-shadow:
      0 4px 0 #4e6b47,
      0 8px 15px rgba(0, 0, 0, 0.2);
  }

  /* Borda interna */
  &::before {
    content: "";
    position: absolute;
    inset: 8px;
    border: 5px solid #f2f2f2;
    border-radius: 18px;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 5rem;
    top: 12rem;
    font-size: 1rem;
  }
`,dA="/nutri-raquel-alves-site/assets/bag-BdTz0Mzs.svg",mA="/nutri-raquel-alves-site/assets/primary-8vUoR9K-.svg",hA="/nutri-raquel-alves-site/assets/sec-DT_VwJzX.svg",pA="/nutri-raquel-alves-site/assets/trd-D2bnXy8k.svg",gA="/nutri-raquel-alves-site/assets/redFruits-DiU3g2om.svg",vA="/nutri-raquel-alves-site/assets/kiwi-C9Ff-Goc.svg",yA="/nutri-raquel-alves-site/assets/stranberry-7QIP7iC4.svg",xA="/nutri-raquel-alves-site/assets/redArow-CFTyFNmD.svg",bA="/nutri-raquel-alves-site/assets/red-splash-iJYPeAyo.svg",SA="/nutri-raquel-alves-site/assets/mockup-pad-wUPTk7vW.svg";function wA(){return U.useEffect(()=>{const l=new IntersectionObserver(s=>{s.forEach(u=>{u.isIntersecting?u.target.classList.add("show"):u.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(s=>l.observe(s)),()=>l.disconnect()},[]),h.jsxs(M2,{children:[h.jsx(xi,{}),h.jsx(N2,{className:"animate",src:dA}),h.jsx(U2,{className:"animate",src:mA}),h.jsx(L2,{className:"animate",src:hA}),h.jsx(B2,{className:"animate",src:pA}),h.jsx(H2,{children:h.jsxs(q2,{children:[h.jsx(Y2,{className:"animate",children:"E-BOOK"}),h.jsx(G2,{className:"animate",children:"30 RECEITAS FUNCIONAIS"}),h.jsxs(X2,{className:"animate",children:["Sem Glúten • Sem Lactose • Sem Açúcar",h.jsx("br",{})," por ",h.jsx("span",{children:"Nutri Raquel Alves"})]}),h.jsxs(Q2,{className:"animate",children:["Você quer comer melhor…",h.jsx("br",{})," mas está cansada de receitas complicadas, caras e sem sabor?",h.jsx("br",{}),h.jsx("br",{})," Este e-book foi criado para quem quer:"]}),h.jsxs(V2,{children:[h.jsxs(Z2,{className:"animate",children:["✔ Emagrecer sem passar fome ",h.jsx("br",{})," ✔ Reduzir inchaço e desconforto",h.jsx("br",{}),"intestinal",h.jsx("br",{})," ✔ Comer doce sem culpa",h.jsx("br",{})," ✔ Ter opções práticas para o dia a dia",h.jsx("br",{})," ✔ Sair do “sempre a mesma coisa”"]}),h.jsx(K2,{className:"animate",src:gA})]})]})}),h.jsxs($2,{children:[h.jsxs(J2,{children:[h.jsxs(k2,{children:[h.jsxs(Xg,{className:"animate",children:["Nada de receitas",h.jsx("br",{})," aleatórias da internet."]}),h.jsxs(Qg,{className:"animate",children:["São preparações pensadas para:",h.jsx("br",{})," • melhorar digestão",h.jsx("br",{})," • estabilizar glicemia",h.jsx("br",{})," • aumentar saciedade",h.jsx("br",{})," • facilitar o processo de emagrecimento"]})]}),h.jsx(I2,{className:"animate",src:vA})]}),h.jsxs(eA,{children:[h.jsx(tA,{className:"animate",src:yA}),h.jsxs(F2,{children:[h.jsxs(W2,{className:"animate",children:["Aqui você encontra 30",h.jsx("br",{})," receitas testadas na",h.jsx("br",{})," prática, com:",h.jsx("br",{})]}),h.jsxs(P2,{className:"animate",children:["Salgadas low carb",h.jsx("br",{})," Doces funcionais",h.jsx("br",{})," Chás e sucos estratégicos",h.jsx("br",{}),"Informação nutricional completa",h.jsx("br",{})," (kcal, carbo, proteína e gordura)"]})]})]})]}),h.jsxs(aA,{children:[h.jsxs(nA,{children:[h.jsxs(C0,{className:"animate",children:["Para quem é",h.jsx("br",{})," esse e-book?"]}),h.jsxs(M0,{className:"animate",children:["✔ Homens e mulheres que vivem inchadas",h.jsx("br",{})," ✔ Quem quer reduzir açúcar sem sofrer",h.jsx("br",{})," ✔ Quem busca opções sem glúten e lactose",h.jsx("br",{})," ✔ Quem já tentou dieta e não conseguiu manter",h.jsx("br",{})]}),h.jsx(C0,{children:"O que você vai receber?"}),h.jsxs(M0,{className:"animate",children:["E-book digital completo (PDF)",h.jsx("br",{})," Acesso imediato após pagamento",h.jsx("br",{})," Pode usar no celular, tablet ou imprimir"]}),h.jsxs(lA,{className:"animate",children:["Quero minhas 30 receitas",h.jsx("br",{})," funcionais agora!"]}),h.jsx(iA,{className:"animate",src:xA})]}),h.jsxs(rA,{children:[h.jsx(oA,{className:"animate",src:bA}),h.jsxs(uA,{children:[h.jsx(sA,{className:"animate",src:SA}),h.jsxs(cA,{className:"animate",children:["Menos que",h.jsx("br",{})," um lanche",h.jsx("br",{})," no fim de",h.jsx("br",{})," semana e",h.jsx("br",{})," com",h.jsx("br",{})," impacto",h.jsx("br",{})," muito",h.jsx("br",{})," maior na",h.jsx("br",{})," sua saúde"]})]}),h.jsx(fA,{onClick:()=>window.open("https://hotmart.com/pt-br/marketplace/produtos/30-receitas-funcionais-para-emagrecimento-e-saude-intestinal/E104567025I"),className:"animate",children:"COMPRAR AGORA"})]})]})]})}const Gf=Ge`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,EA=Ge`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Vg=Ge`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`,AA=Ge`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
`,zA=Ge`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(-6deg);
  }
`,RA=Ge`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }
`,jA=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    overflow: hidden;
  }
  
`,TA=B.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }   
`,_A=B.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
`,OA=B.div`
    max-width: 782px;
    margin: 0 auto  1rem;

    @media (max-width: 768px) {
      width: 350px;
    }
`,DA=B.h1`
    font-family: 'anton';
    font-size:6rem;
    line-height: 9rem;
    color: #FFFaF1;
    &.show {
      animation: ${Gf} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 5rem;
    }
    @media (max-width: 370px) {
    font-size: 3rem;
    line-height: 4rem;
    margin-left: 1rem;
  }
`,CA=B.h2`
    font-family: 'anton';
    font-size: 9rem;
    line-height: 8rem;
    color: #FFFAF1;
    &.show {
      animation: ${EA} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      font-size: 5rem;
      line-height: 5rem;
    }
    @media (max-width: 370px) {
    font-size: 4.5rem;
    margin-left: 1rem;

  }
`,N0=B.p`
    font-family: 'montserrat';
    font-weight: 600;
    font-size: 1.5rem;
    color: #45372E;
    margin: 2rem auto;
    &.show {
      animation: ${Gf} 2s ease-out forwards;
    } 
    @media (max-width:768px) {
      width: 335px;
      line-height: 1rem;
      font-size: 0.95rem;
    }
    @media (max-width: 370px) {
    width: 25rem;
    margin-left: 0.5rem;
  }
`,MA=B.h1`
    font-family: 'anton';
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 50px;
    color: #45372e;
    &.show {
      animation: ${Vg} 2s ease-out forwards;
    } 
    @media (max-width:768px) {
      width: 340px;
      line-height: 1rem;
      font-size: 2.4rem;
    }
    @media (max-width: 370px) {
    width: 25rem;
    font-size: 2.3rem;
    margin-left: 0.5rem;
  }
`,NA=B.button`
  width: 100%;
  max-width: 500px;
  height: 100px ;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  &.show {
      animation: ${Gf} 2s ease-out forwards;
    } 

  background: linear-gradient(
    180deg,
    #ffc83d 0%,
    #ffb300 60%,
    #ffa000 100%
  );

  color: #3a2a00;

  box-shadow: 
    0 12px 0 #e69500,
    0 20px 30px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 15px 0 #e69500,
      0 25px 35px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(8px);
    box-shadow: 
      0 4px 0 #e69500,
      0 10px 15px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    width: 350px;
    font-size: 1.5rem;
  }
`,UA=B.img`
    width: 5rem;
    position: relative;
    left: 25rem;
    bottom: 2rem;
    z-index: 1;
    opacity: 0;

  &.show {
    animation: 
      ${AA} 0.8s ease-out forwards,
      ${zA} 1.6s ease-in-out 1s infinite,
      ${RA}  1.6s ease-in-out 1s infinite;
  }
  @media (max-width: 768px){
    width: 4rem;
    left: 15rem;
  }
`,LA=B.img`
    position: relative;
    width: 35rem;
    object-fit: cover;
    top: 0;
    left: 0rem;
    z-index: -1;
    &.show {
      animation: ${Vg} 2s ease-out forwards;
    } 
    @media (max-width: 768px) {
      width: 25rem;
    }
    
    
`,BA="data:image/svg+xml,%3csvg%20width='61'%20height='60'%20viewBox='0%200%2061%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='61'%20height='60'%20fill='url(%23pattern0_57_192)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_57_192'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_57_192'%20transform='scale(0.0163934%200.0166667)'/%3e%3c/pattern%3e%3cimage%20id='image0_57_192'%20width='61'%20height='60'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPMSURBVGhD5ZpbiE1RHMZ/eKIhg4aUQZLGJeTWIERu4cH9ViS5PSq5hIQHRJFQ3jyRSy4PRCi3hga5RAxyvw65JDxuL+vU6ut/jjPj7L3XzPzqa2at9a29vn3O2fusvc6CBkgTragBpcAi4CdQrY31kVZA5KmHGkKmsVbkySApT5Vy0NT2pP9IuY2UfZoDHbUyTXKddJlWeHyTcispZxgGvAZeAju0MTTuuGv1BNBMG4EOck2fVgPQy93kfF97NYXCTAl6D2grniLxVEh7e+CjeKrEExSDJWwEvAW6i89vf+zVt3RlPcZAzxMkK43QP4BRnidzCUTAFa++wug7xWsPmmVG+AgY6trHAU+AZ95X1kTDv9A7Zp1Ar+8IOKcmj6Xi3aqGusIY4Ld3IivVIJwBfgGbtaGu0R+4AKzXhoZISzcB6aANIdPI+78IKHffsSXuu7nE6RWwDXju+ZsC792JA9x2k5mTwEPPFyyjjRuW6pT0mW14Mnrqpp2DpU9QbDSCq65Ln3LDY6ka2A9MkP6po3Np1StghnYCbhjeXPoJHAHmAi30YEnhX9NDgRHAF/fufHJ/q91szGIycFwra8B5dx845e4PwTEGOOpeGJ/nxjtaG90AVgNd5fipMVYCdvPadBZWCD0CthgrNInR03gu1lnZVyN4ofQO2Oc+aYnQxq18aJBS8W0wPHHoO3AQmO7mFbFQaQw8U01AseFLQqfdMnSJBqote4xBVqnJY6/hT1LXgBVAFw2WL7ocFLkJRi46G33S0gP3lNdPQ+aisVzL1sKfxTEjQNp67T615RrWojdwEVinDTkYZAwakkZq4EJx1RgsFN3iH4v9tWW7VgTETa0oJFXGq5ymXgCLNWShWWQMnIbuA3M0XJx8MkIkpQpgkgZKgrVGmLh11q3ZpUaxLB3HqaNAXw2QFruNgIXU45CevzMkMTU9oIOGwGEjaKF1ye14CIYBRsg49ABop4OnyWUjZBx6E9JOJ+sn3Lj0AxiuAdIi6anpLA2QBguMYHFruYZIgzSmpv01RByPlrnYpRV58L+7GVprRdIUu92G+m5kU6XrN81oy0dnZPzU2GWEy6Y1Xr9yt+6tnmyqinNtvKaUGgGzSZdzy9yeNvWpvgGdpG/qHDKCqrLtZmgH3DX8voZopxDoawRVbdJOHkVua5f2iYB5ag6Ji0ZgX320g8EB6bNFDaEx3jjRjF6oOQergM/AEm0IFWvjbBT4MvJ/M9844Sjfn2DqMh/khGPfe5L0NNRip5RPSLleUiTvdi811FfK3Dp5gznhxPkL34Ih54DumUwAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",HA="/nutri-raquel-alves-site/assets/professionals-YEWoNsxw.svg";function qA(){return U.useEffect(()=>{const l=new IntersectionObserver(s=>{s.forEach(u=>{u.isIntersecting?u.target.classList.add("show"):u.target.classList.remove("show")})},{threshold:.1});return document.querySelectorAll(".animate").forEach(s=>l.observe(s)),()=>l.disconnect()},[]),h.jsxs(jA,{children:[h.jsx(xi,{}),h.jsxs(TA,{children:[h.jsxs(_A,{children:[h.jsxs(OA,{children:[h.jsx(DA,{className:"animate",children:"PROGRAMA"}),h.jsx(CA,{className:"animate",children:"VIRADA 360"}),h.jsxs(N0,{className:"animate",children:["O VIRADA 360° UNE PROFISSIONAIS PARA",h.jsx("br",{})," CUIDAR DE VOCÊ POR INTEIRO!"]}),h.jsx(MA,{className:"animate",children:"CORPO, MENTE & TREINO"}),h.jsxs(N0,{className:"animate",children:["É A CHANCE DE CONQUISTAR A",h.jsx("br",{})," TRANSFORMAÇÃO QUE VOCÊ JÁ TENTOU",h.jsx("br",{})," SOZINHO E NÃO CONSEGUIU."]})]}),h.jsx(NA,{onClick:()=>window.open("https://programavirada360.com.br/"),className:"animate",children:"Clique aqui e saiba mais"}),h.jsx(UA,{className:"animate",src:BA})]}),h.jsx(LA,{className:"animate",src:HA})]})]})}const YA=wS([{path:"/",element:h.jsx(iw,{})},{path:"/sobre",element:h.jsx(Bw,{})},{path:"/consultas",element:h.jsx(dE,{})},{path:"/series",element:h.jsx(j2,{})},{path:"/e-book",element:h.jsx(wA,{})},{path:"/virada360",element:h.jsx(qA,{})}],{basename:"/nutri-raquel-alves-site/"});u1.createRoot(document.getElementById("root")).render(h.jsx(ox,{theme:LS,children:h.jsxs(h.Fragment,{children:[h.jsx(fx,{}),h.jsx(US,{router:YA})]})}));
