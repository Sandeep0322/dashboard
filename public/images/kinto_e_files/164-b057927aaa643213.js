"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{79198:function(t,e,n){n.d(e,{j:function(){return s}});var r=n(42996),i=n(40300),s=new class extends r.l{#t;#e;#n;constructor(){super(),this.#n=t=>{if(!i.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#n=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.#t!==t;e&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},17987:function(t,e,n){n.d(e,{V:function(){return r}});var r=function(){let t=[],e=0,n=t=>{t()},r=t=>{t()},i=t=>setTimeout(t,0),s=r=>{e?t.push(r):i(()=>{n(r)})},u=()=>{let e=t;t=[],e.length&&i(()=>{r(()=>{e.forEach(t=>{n(t)})})})};return{batch:t=>{let n;e++;try{n=t()}finally{--e||u()}return n},batchCalls:t=>(...e)=>{s(()=>{t(...e)})},schedule:s,setNotifyFunction:t=>{n=t},setBatchNotifyFunction:t=>{r=t},setScheduler:t=>{i=t}}}()},20436:function(t,e,n){n.d(e,{N:function(){return s}});var r=n(42996),i=n(40300),s=new class extends r.l{#r=!0;#e;#n;constructor(){super(),this.#n=t=>{if(!i.sk&&window.addEventListener){let e=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#n=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){let e=this.#r!==t;e&&(this.#r=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#r}}},57501:function(t,e,n){n.d(e,{z:function(){return c}});var r=n(40300),i=n(17987),s=n(79198),u=n(42996),o=n(11640),c=class extends u.l{constructor(t,e){super(),this.options=e,this.#i=t,this.#s=null,this.bindMethods(),this.setOptions(e)}#i;#u=void 0;#o=void 0;#c=void 0;#h;#a;#s;#l;#f;#d;#p;#y;#v;#b=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#u.addObserver(this),h(this.#u,this.options)?this.#R():this.updateResult(),this.#m())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return a(this.#u,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return a(this.#u,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#w(),this.#O(),this.#u.removeObserver(this)}setOptions(t,e){let n=this.options,i=this.#u;if(this.options=this.#i.defaultQueryOptions(t),(0,r.VS)(n,this.options)||this.#i.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#u,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.#E();let s=this.hasListeners();s&&l(this.#u,i,this.options,n)&&this.#R(),this.updateResult(e),s&&(this.#u!==i||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&this.#g();let u=this.#Q();s&&(this.#u!==i||this.options.enabled!==n.enabled||u!==this.#v)&&this.#S(u)}getOptimisticResult(t){let e=this.#i.getQueryCache().build(this.#i,t),n=this.createResult(e,t);return(0,r.VS)(this.getCurrentResult(),n)||(this.#c=n,this.#a=this.options,this.#h=this.#u.state),n}getCurrentResult(){return this.#c}trackResult(t){let e={};return Object.keys(t).forEach(n=>{Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:()=>(this.#b.add(n),t[n])})}),e}getCurrentQuery(){return this.#u}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#i.defaultQueryOptions(t),n=this.#i.getQueryCache().build(this.#i,e);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,e))}fetch(t){return this.#R({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#c))}#R(t){this.#E();let e=this.#u.fetch(this.options,t);return t?.throwOnError||(e=e.catch(r.ZT)),e}#g(){if(this.#w(),r.sk||this.#c.isStale||!(0,r.PN)(this.options.staleTime))return;let t=(0,r.Kp)(this.#c.dataUpdatedAt,this.options.staleTime);this.#p=setTimeout(()=>{this.#c.isStale||this.updateResult()},t+1)}#Q(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#u):this.options.refetchInterval)??!1}#S(t){this.#O(),this.#v=t,!r.sk&&!1!==this.options.enabled&&(0,r.PN)(this.#v)&&0!==this.#v&&(this.#y=setInterval(()=>{(this.options.refetchIntervalInBackground||s.j.isFocused())&&this.#R()},this.#v))}#m(){this.#g(),this.#S(this.#Q())}#w(){this.#p&&(clearTimeout(this.#p),this.#p=void 0)}#O(){this.#y&&(clearInterval(this.#y),this.#y=void 0)}createResult(t,e){let n;let i=this.#u,s=this.options,u=this.#c,c=this.#h,a=this.#a,d=t!==i,p=d?t.state:this.#o,{state:y}=t,{error:v,errorUpdatedAt:b,fetchStatus:R,status:m}=y,w=!1;if(e._optimisticResults){let n=this.hasListeners(),r=!n&&h(t,e),u=n&&l(t,i,e,s);(r||u)&&(R=(0,o.Kw)(t.options.networkMode)?"fetching":"paused",y.dataUpdatedAt||(m="pending")),"isRestoring"===e._optimisticResults&&(R="idle")}if(e.select&&void 0!==y.data){if(u&&y.data===c?.data&&e.select===this.#l)n=this.#f;else try{this.#l=e.select,n=e.select(y.data),n=(0,r.oE)(u?.data,n,e),this.#f=n,this.#s=null}catch(t){this.#s=t}}else n=y.data;if(void 0!==e.placeholderData&&void 0===n&&"pending"===m){let t;if(u?.isPlaceholderData&&e.placeholderData===a?.placeholderData)t=u.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#d?.state.data,this.#d):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#s=null}catch(t){this.#s=t}void 0!==t&&(m="success",n=(0,r.oE)(u?.data,t,e),w=!0)}this.#s&&(v=this.#s,n=this.#f,b=Date.now(),m="error");let O="fetching"===R,E="pending"===m,g="error"===m,Q=E&&O,S={status:m,fetchStatus:R,isPending:E,isSuccess:"success"===m,isError:g,isInitialLoading:Q,isLoading:Q,data:n,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>p.dataUpdateCount||y.errorUpdateCount>p.errorUpdateCount,isFetching:O,isRefetching:O&&!E,isLoadingError:g&&0===y.dataUpdatedAt,isPaused:"paused"===R,isPlaceholderData:w,isRefetchError:g&&0!==y.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch};return S}updateResult(t){let e=this.#c,n=this.createResult(this.#u,this.options);if(this.#h=this.#u.state,this.#a=this.options,void 0!==this.#h.data&&(this.#d=this.#u),(0,r.VS)(n,e))return;this.#c=n;let i={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,n="function"==typeof t?t():t;if("all"===n||!n&&!this.#b.size)return!0;let r=new Set(n??this.#b);return this.options.throwOnError&&r.add("error"),Object.keys(this.#c).some(t=>{let n=this.#c[t]!==e[t];return n&&r.has(t)})})()&&(i.listeners=!0),this.#I({...i,...t})}#E(){let t=this.#i.getQueryCache().build(this.#i,this.options);if(t===this.#u)return;let e=this.#u;this.#u=t,this.#o=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#m()}#I(t){i.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#c)}),this.#i.getQueryCache().notify({query:this.#u,type:"observerResultsUpdated"})})}};function h(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)||t.state.dataUpdatedAt>0&&a(t,e,e.refetchOnMount)}function a(t,e,n){if(!1!==e.enabled){let r="function"==typeof n?n(t):n;return"always"===r||!1!==r&&f(t,e)}return!1}function l(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&(!n.suspense||"error"!==t.state.status)&&f(t,n)}function f(t,e){return t.isStaleByTime(e.staleTime)}},11640:function(t,e,n){n.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return a}});var r=n(79198),i=n(20436),s=n(40300);function u(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||i.N.isOnline()}var c=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof c}function a(t){let e,n,h,a=!1,l=0,f=!1,d=new Promise((t,e)=>{n=t,h=e}),p=()=>!r.j.isFocused()||"always"!==t.networkMode&&!i.N.isOnline(),y=r=>{f||(f=!0,t.onSuccess?.(r),e?.(),n(r))},v=n=>{f||(f=!0,t.onError?.(n),e?.(),h(n))},b=()=>new Promise(n=>{e=t=>{let e=f||!p();return e&&n(t),e},t.onPause?.()}).then(()=>{e=void 0,f||t.onContinue?.()}),R=()=>{let e;if(!f){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(f)return;let n=t.retry??(s.sk?0:3),r=t.retryDelay??u,i="function"==typeof r?r(l,e):r,o=!0===n||"number"==typeof n&&l<n||"function"==typeof n&&n(l,e);if(a||!o){v(e);return}l++,t.onFail?.(l,e),(0,s._v)(i).then(()=>{if(p())return b()}).then(()=>{a?v(e):R()})})}};return o(t.networkMode)?R():b().then(R),{promise:d,cancel:e=>{f||(v(new c(e)),t.abort?.())},continue:()=>{let t=e?.();return t?d:Promise.resolve()},cancelRetry:()=>{a=!0},continueRetry:()=>{a=!1}}}},42996:function(t,e,n){n.d(e,{l:function(){return r}});var r=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},40300:function(t,e,n){n.d(e,{Ht:function(){return O},Kp:function(){return o},PN:function(){return u},Q$:function(){return d},Rm:function(){return a},SE:function(){return s},VS:function(){return p},VX:function(){return w},X7:function(){return h},Ym:function(){return l},ZT:function(){return i},_v:function(){return R},_x:function(){return c},oE:function(){return m},sk:function(){return r},to:function(){return f}});var r="undefined"==typeof window||"Deno"in window;function i(){}function s(t,e){return"function"==typeof t?t(e):t}function u(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function c(t,e){let{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:u,stale:o}=t;if(u){if(r){if(e.queryHash!==a(u,e.options))return!1}else if(!f(e.queryKey,u))return!1}if("all"!==n){let t=e.isActive();if("active"===n&&!t||"inactive"===n&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===i||i===e.state.fetchStatus)&&(!s||!!s(e))}function h(t,e){let{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(l(e.options.mutationKey)!==l(s))return!1}else if(!f(e.options.mutationKey,s))return!1}return(!r||e.state.status===r)&&(!i||!!i(e))}function a(t,e){let n=e?.queryKeyHashFn||l;return n(t)}function l(t){return JSON.stringify(t,(t,e)=>v(e)?Object.keys(e).sort().reduce((t,n)=>(t[n]=e[n],t),{}):e)}function f(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(n=>!f(t[n],e[n]))}function d(t,e){if(t===e)return t;let n=y(t)&&y(e);if(n||v(t)&&v(e)){let r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),u=s.length,o=n?[]:{},c=0;for(let i=0;i<u;i++){let u=n?i:s[i];!n&&void 0===t[u]&&void 0===e[u]&&r.includes(u)?(o[u]=void 0,c++):(o[u]=d(t[u],e[u]),o[u]===t[u]&&void 0!==t[u]&&c++)}return i===u&&c===i?t:o}return e}function p(t,e){if(t&&!e||e&&!t)return!1;for(let n in t)if(t[n]!==e[n])return!1;return!0}function y(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function v(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let n=e.prototype;return!!(b(n)&&n.hasOwnProperty("isPrototypeOf"))}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function R(t){return new Promise(e=>{setTimeout(e,t)})}function m(t,e,n){return"function"==typeof n.structuralSharing?n.structuralSharing(t,e):!1!==n.structuralSharing?d(t,e):e}function w(t,e,n=0){let r=[...t,e];return n&&r.length>n?r.slice(1):r}function O(t,e,n=0){let r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}},38038:function(t,e,n){n.d(e,{NL:function(){return s},aH:function(){return u}});var r=n(2265),i=r.createContext(void 0),s=t=>{let e=r.useContext(i);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=({client:t,children:e})=>(r.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),r.createElement(i.Provider,{value:t},e))},63141:function(t,e,n){let r;n.d(e,{_:function(){return u}});var i=n(2265),s=i.createContext((r=!1,{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r})),u=()=>i.useContext(s)},66851:function(t,e,n){n.d(e,{JN:function(){return u},KJ:function(){return o},pf:function(){return s}});var r=n(2265),i=n(14805),s=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},u=t=>{r.useEffect(()=>{t.clearReset()},[t])},o=({result:t,errorResetBoundary:e,throwOnError:n,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&(0,i.L)(n,[t.error,r])},49328:function(t,e,n){n.d(e,{S:function(){return s}});var r=n(2265),i=r.createContext(!1),s=()=>r.useContext(i);i.Provider},51852:function(t,e,n){n.d(e,{Fb:function(){return r},SB:function(){return s},Z$:function(){return i},j8:function(){return u}});var r=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},i=(t,e)=>t.isLoading&&t.isFetching&&!e,s=(t,e)=>t?.suspense&&e.isPending,u=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()})},14805:function(t,e,n){n.d(e,{L:function(){return r}});function r(t,e){return"function"==typeof t?t(...e):!!t}}}]);