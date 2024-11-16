"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5789],{88761:function(e,t,n){var r=n(86264);class u{log(e){console.info(e)}warn(e){console.warn(e)}error(e,t,n){var u;(null===(u=e.message)||void 0===u?void 0:u.includes("Access denied!"))||(n?r.Tb(e,n):r.Tb(e),t&&r.uT(t),console.error(e))}}let i=new u;t.Z=i},75789:function(e,t,n){n.d(t,{$B:function(){return er},$Z:function(){return I},$h:function(){return X},A1:function(){return N},Ah:function(){return D},Az:function(){return x},C2:function(){return q},C_:function(){return T},Ck:function(){return y},Cx:function(){return R},Ds:function(){return f},G:function(){return $},JT:function(){return O},KV:function(){return A},Kh:function(){return g},Ng:function(){return p},PX:function(){return F},Pc:function(){return Y},Po:function(){return b},QK:function(){return B},TJ:function(){return W},Uz:function(){return Q},Vq:function(){return m},_Y:function(){return H},bK:function(){return P},cn:function(){return J},en:function(){return d},f$:function(){return ee},fJ:function(){return G},gJ:function(){return V},g_:function(){return Z},gv:function(){return S},jw:function(){return h},kC:function(){return C},lM:function(){return M},lO:function(){return L},lq:function(){return v},mC:function(){return eu},nE:function(){return et},qS:function(){return U},tv:function(){return k},xG:function(){return z},xl:function(){return E},yI:function(){return K},z0:function(){return w}});var r=n(57042);n(7106);var u=n(29099),i=n.n(u),o=n(62067),l=n.n(o),c=n(74769),a=n(88761);let s=n(40727);function f(e,t){let n;return function(){for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];clearTimeout(n),n=setTimeout(()=>{e(...u)},t)}}let d=e=>e.startsWith("https://")||e.startsWith("http://")?e:"https://".concat(e);i()();let p=e=>{"Enter"===e.code&&e.preventDefault()},g=(e,t)=>"10"===t?"https://optimistic.etherscan.io/tx/".concat(e):"137"===t?"https://polygonscan.com/tx/".concat(e):"42161"===t?"https://arbiscan.io/tx/".concat(e):"8453"===t?"https://basescan.org//tx/".concat(e):"https://etherscan.io/tx/".concat(e),h=e=>{let t=e.map(e=>({value:e.id,label:e.name,item:e}));return t},v=(e,t)=>void 0!==t&&t.length&&t.length>0?e.map(e=>t.find(t=>t.id===e)):[],m=(e,t)=>{let n=document.createElement("a"),r=new Blob([e],{type:"text/csv"});n.href=URL.createObjectURL(r),n.download="".concat(t,".csv"),document.body.appendChild(n),n.click()},y=e=>(Object.keys(e).forEach(t=>void 0===e[t]?delete e[t]:{}),e),b=e=>e.filter(e=>void 0!==e.value),w=(e,t,n)=>{var r,u;return Array.isArray(e)&&Array.isArray(null===(r=e.find(e=>e.slug===t))||void 0===r?void 0:r.value)?null===(u=e.find(e=>e.slug===t))||void 0===u?void 0:u.value.map(e=>{var t;let r=null==n?void 0:n.find(t=>t.value===e);return void 0===r&&a.Z.error("Selected option is undefined"),{value:e,label:null==n?void 0:null===(t=n.find(t=>t.value===e))||void 0===t?void 0:t.label}}):[]},k=()=>{var e={};return Object.keys(window.localStorage).filter(e=>e.startsWith("ethglobal-")).forEach(t=>{e[t]=window.localStorage.getItem(t)}),e},C=e=>e.charAt(0).toUpperCase()+e.slice(1),x=(e,t)=>{var n;let r=window.screenLeft,u=window.screenTop,i=window.innerWidth,o=window.innerHeight,l="width=600,height=500,resizable=no,top=".concat(o/2-200+u,",left=").concat(i/2-250+r);null===(n=window.open(t,e,l))||void 0===n||n.focus()},S=e=>({1:"first",2:"second",3:"third"})[e],j=e=>null!=e&&""!==e.trim(),A=e=>{let t=e.filter(e=>j(e));return!!t.length},O=e=>e.sort((e,t)=>void 0===e.rank||void 0===t.rank?0:e.rank<t.rank?-1:e.rank>t.rank?1:0),T=(e,t)=>t?"Hacker"===t?"/events/".concat(e.slug,"/home"):"Judge"===t?"/events/".concat(e.slug,"/judging"):"Speaker"===t?"/events/".concat(e.slug,"/apply?role=speaker"):"/events/".concat(e.slug,"/").concat(null==t?void 0:t.toLowerCase()):"/events/".concat(e.slug),L=(e,t,n)=>{if(null===n)return e;let r=RegExp("([?&])"+t+"=.*?(&|$)","i"),u=-1!==e.indexOf("?")?"&":"?";return e.match(r)?e.replace(r,"$1"+t+"="+n+"$2"):e+u+t+"="+n},E=(e,t)=>{let n=RegExp("([?&])"+t+"=.*?(&|$)","i");return e.replace(n,"")},U=e=>{let t=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&11==t[2].length?t[2]:""},D=(e,t)=>{if(e.rank!==t.rank)return e.rank-t.rank;let n=e.name.split(" ")[0],r=t.name.split(" ")[0];return n>r?1:-1},I=e=>{let t=e.definitions[0];return t.name.value},N=(e,t,n,r)=>{var u,i,o,c;let a=(null==e?void 0:null===(u=e.startTime)||void 0===u?void 0:u.slice(0,10))===(null==e?void 0:null===(i=e.endTime)||void 0===i?void 0:i.slice(0,10)),s=(null==e?void 0:null===(o=e.startTime)||void 0===o?void 0:o.slice(0,7))===(null==e?void 0:null===(c=e.endTime)||void 0===c?void 0:c.slice(0,7)),f="".concat(t," – ").concat(n);if("en"!==r)return a?t:f;if(a)f=n;else if(s){let t=l()(null==e?void 0:e.startTime.substring(0,10)).format("MMMM");f=f.replace("– ".concat(t)," –")}return f};function R(e){let t="".concat(e[0]).concat(e[1]),n=e.split(" ");return n.length>1&&(t=n[0].substring(0,1)+n[n.length-1].substring(0,1)),t.toUpperCase()}function W(e){let t=Math.floor(e/60),n=e-60*t;return t>0?"".concat(t).concat(t>1?"hrs":"hr"," ").concat(n,"m"):"".concat(n,"m")}function $(e){return"cafe"===e.type?"Co-working":"meetup"===e.type?"Meetup":"summit"===e.type?"physical"===e.medium?"Conference":"Summit":"hackathon"===e.type?"physical"===e.medium?"Hackathon":"Virtual":"physical"===e.type?"In-person":e.type.startsWith("virtual")?"Async":e.type}let M=e=>{let t=Z(e);return t.isSummit?"pink":t.isCafe?"yellow":t.isMeetup?"blue":t.isHackathon&&t.isVirtual?"purple":"green"};function J(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.m6)((0,r.W)(t))}let P=e=>{let t=e.toUpperCase().split("").map(e=>127397+e.charCodeAt(0));return String.fromCodePoint(...t)},_=(e,t)=>{for(let n of Object.keys(e))"object"!=typeof e[n]||Array.isArray(e[n])||("styles"===n&&(e[n]={...t,...e[n]}),_(e[n],t))},B=e=>{if(null!=e){var t;let n=JSON.parse(JSON.stringify(e)),r=n.global,u=n.layout,i=n.sections,o=null===(t=n.global)||void 0===t?void 0:t.styles;return _(i,o),{global:r,layout:u,sections:i}}},q=(e,t)=>Object.hasOwnProperty.call(t,e)?t[e]:t.lg,z=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),F=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ignoreDataBuffers:!0};return!(t.ignoreDataBuffers&&e&&e.startsWith("data:"))&&s(e)},H=e=>{let t=RegExp("^(https?:\\/\\/)?(([\\p{L}\\p{N}-]+)(\\.[\\p{L}\\p{N}-]+)*|(\\[[:a-fA-F0-9.\\]]*))(:\\d+)?(\\/[^\\s]*)?$","u");t.test(e)||(e="https://".concat(e)),e=(e=e.toLowerCase()).startsWith("www.")?e.slice(4):e;let n="";try{let{hostname:t}=new URL(e);n=t}catch(t){return e}return(n=n.toLowerCase()).startsWith("www.")?n.slice(4):n},K=e=>Number.isInteger(e)?e:Number.isInteger(parseInt(e))?parseInt(e):null,V=(e,t)=>{let n=[];for(let r=0;r<e.length;r++){let u=e[r];"select"===u.type?n.push({fieldSlug:u.slug,value:t[u.slug].value}):"multiselect"===u.type?n.push({fieldSlug:u.slug,value:t[u.slug].map(e=>e.value)}):"boolean"===u.type?n.push({fieldSlug:u.slug,value:"yes"===t[u.slug]}):["number","file","video"].includes(u.type)?n.push({fieldSlug:u.slug,value:K(t[u.slug])}):n.push({fieldSlug:u.slug,value:t[u.slug]})}return n},Z=e=>{let t="physical"===e.type||"physical"===e.medium,n="virtual"===e.type||"virtual"===e.medium,r=e.name.toLowerCase().includes("pragma"),u="cafe"===e.type,i="summit"===e.type,o="meetup"===e.type,l=!(r||u||i||o)||"hackathon"===e.type;return{isPhysical:t,isVirtual:n,isPragma:r,isCafe:u,isSummit:i,isMeetup:o,isHackathon:l}},G=e=>{let t={};return e&&e.forEach((e,n)=>{t[n]=e}),t},Q=()=>{let e=new URLSearchParams(window.location.search);return G(e)},X=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["ref"],n=Q();if(Object.keys(n).length){let r=(e=>{if(Object.keys(e).length){let n=Object.keys(e).filter(e=>t.includes(e.toLowerCase())).reduce((t,n)=>(t[n]=e[n],t),{});return n}return e})(n);if(Object.keys(r).length)return"/"!=e[0]&&(e="/".concat(e)),"".concat(e,"?").concat((e=>{let t=[];for(let n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")})(r))}return e},Y=(e,t)=>null===e.rank&&null===t.rank?0:null===e.rank||void 0===e.rank?1:null===t.rank||void 0===t.rank?-1:e.rank-t.rank,ee={137:"0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",80001:"0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa"},et={1:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",10:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",42161:"0xaf88d065e77c8cc2239327c5edb3a432268e5831",8453:"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",137:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",11155111:"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"},en=e=>{let t={format:"png",extension:"png",mimeType:"image/png"},n=e.split("/"),r=n[0];if("events"===r){let e=n[2];if(["logo","square-logo","banner"].includes(e))return t}if("organizations"===r){let e=n[2];if(["logo","square-logo"].includes(e))return t}return{format:"jpeg",extension:"jpg",mimeType:"image/jpeg"}},er=(e,t,n)=>{let r=e.join("/"),u=t||"default";if("original"===n)return"https://ethglobal.storage/".concat(r,"/").concat(u);let i=en(r),o=n||i.extension;return"https://ethglobal.b-cdn.net/".concat(r,"/").concat(u,".").concat(o)},eu=e=>e.replace(/[\\{^}%`\]"'>[~<#|:]/g,"").replace(/\s{2,}/g," ").trim()}}]);