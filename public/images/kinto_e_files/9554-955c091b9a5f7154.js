(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9554],{16364:function(e,n,r){Promise.resolve().then(r.bind(r,15938)),Promise.resolve().then(r.bind(r,2709)),Promise.resolve().then(r.bind(r,72544))},15938:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(57437),o=r(61396),i=r.n(o),a=r(24033),l=r(2265),s=r(65604),u=r(32834),d=r(44546),c=r(75789),v=r(9173),m=r(9441),h=r(16289);function f(e){var n,r,o,f,p,g,w,b,k,x,j,C,M,y,E,L,P;let{hacker:D,partner:O,event:S,schedule:R,prizes:z,sponsors:H,people:I,faqs:B,pageLayout:A}=e,[U,N]=(0,l.useState)(!1),[W]=(0,l.useContext)(u.Il),Z=(0,c.QK)(null==S?void 0:S.style),V=(0,a.usePathname)(),{data:F}=(0,v.a)(m.C0.getAllowedWorkshopDuration,{variables:{sponsorUuid:null==O?void 0:O.sponsor.uuid},skip:!(null==O?void 0:O.sponsor.uuid)}),_=null==F?void 0:null===(n=F.getAllowedWorkshopDuration)||void 0===n?void 0:n.workshopDuration,q=()=>{window.scrollY>12*parseFloat(getComputedStyle(document.documentElement).fontSize)&&!U?N(!0):U||N(!1)},J=e=>!!(V&&V.startsWith("/events/".concat(S.slug,"/prizes")))&&"/prizes"===e||V==="/events/".concat(S.slug).concat(e);(0,l.useEffect)(()=>(window.addEventListener("scroll",q),()=>{window.removeEventListener("scroll",q)}),[]);let Q=(null===(r=S.squareLogo)||void 0===r?void 0:r.fullUrl)||S.squareLogoFullUrl||(null===(o=S.meta)||void 0===o?void 0:o.squareLogoUrl),T=(0,c.g_)(S),K=[...(null==Z?void 0:null===(w=Z.sections)||void 0===w?void 0:null===(g=w.documentation)||void 0===g?void 0:null===(p=g.options)||void 0===p?void 0:null===(f=p.links)||void 0===f?void 0:f.length)>0?[{name:"Documentation",href:"#docs"}]:[],...R&&R.length>0&&(null==A?void 0:A.find(e=>"schedule"===e.id))?[{name:"Schedule",href:"#schedule"}]:[],...T.isHackathon&&(null==S?void 0:S.slug)!=="ethindia2023"?[{name:"Info",href:"/info"}]:[],...I&&I.length>0&&(null==A?void 0:A.find(e=>"judges"===e.id))?[{name:T.isSummit?"Speakers":T.isCafe?"Mentors":"Speakers & Judges",href:T.isCafe?"#mentors":"#speakers"}]:[],...H&&H.length>0&&(null==A?void 0:A.find(e=>"sponsors"===e.id))?[{name:"Partners",href:T.isPragma?"/partners":"#partners"}]:[],...(T.isHackathon||T.isPragma)&&T.isPhysical&&(null==S?void 0:S.venueLocation)&&(null==A?void 0:A.find(e=>"venue"===e.id))?[{name:"Venue",href:"#venue"}]:[],...z&&z.length>0&&(null==A?void 0:A.find(e=>"prizes"===e.id))?[{name:"Prizes",href:"/prizes"}]:[],...B&&B.length>0?[{name:"FAQ",href:"#faq"}]:[]],Y={hacker:(null==S?void 0:S.slug)==="ethindia2023"?[{name:"Overview",href:""},{name:"Dashboard",href:"/home"},...K]:[{name:"Overview",href:""},{name:"Dashboard",href:"/home"},...T.isHackathon?[{name:"Project",href:"/project"},{name:"Team",href:"/team"},{name:"Mentors",href:"/mentors"}]:[],...T.isSummit&&(null==D?void 0:null===(k=D.submission)||void 0===k?void 0:null===(b=k.stage)||void 0===b?void 0:b.name.toLowerCase())==="confirmed"?[{name:"Attendees",href:"/attendees"}]:[],...K],representative:[{name:"Overview",href:""},{name:"Dashboard",href:"/partner"},...T.isHackathon||T.isPragma?[{name:"Organization Details",href:"/partner/organization"},...(null==O?void 0:O.sponsor.asks)&&O.sponsor.asks.length>0?[{name:"Promote",href:"/partner/promote"}]:[],...T.isHackathon?[{name:"Prize Builder",href:"/partner/prize-details"},{name:"Prize Applicants",href:"/partner/prize-applicants"}]:[],{name:"Invite team",href:"/partner/members"},T.isHackathon&&T.isVirtual&&{name:"Check-ins",href:"/partner/check-ins"},T.isPhysical&&(null===(x=S.flags)||void 0===x?void 0:x.enablePartnerShipments)&&{name:"Shipments",href:"/partner/shipment"},T.isHackathon&&(null===(j=S.flags)||void 0===j?void 0:j.enablePartnerWorkshop)&&O&&0!==_&&null!=_&&{name:"Workshop",href:"/partner/workshop"},T.isHackathon&&{name:"Logistics",href:"/partner/logistics"},...R&&R.length>0?[{name:"Schedule",href:"#schedule"}]:[],T.isPhysical&&(null==S?void 0:S.venueLocation)&&(null==A?void 0:A.find(e=>"venue"===e.id))&&{name:"Venue",href:"#venue"},{name:"Jobs",href:"/partner/jobs"},T.isPhysical&&{name:"Side Events",href:"/partner/side-events"}]:[]],mentor:[{name:"Overview",href:""},{name:"Dashboard",href:"/mentor"},...K],volunteer:[{name:"Overview",href:""},{name:"Dashboard",href:"/volunteer"},...K],speaker:[{name:"Overview",href:""},...K],guest:[{name:"Overview",href:""},...K],judge:[{name:"Overview",href:""},{name:"Dashboard",href:"/judging"},...K],"":[{name:"Overview",href:""},...K]};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"mt-8",children:(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:"flex items-center space-x-4 pt-4",children:[(0,t.jsx)(i(),{href:"/events/".concat(S.slug),legacyBehavior:!0,children:Q?(0,t.jsx)(h.Z,{urls:[(0,c.$B)(["events",S.slug,"square-logo"]),Q],alt:"".concat(S.name," logo"),className:"h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 rounded-full border-2 border-black/50 cursor-pointer hover:border-black transition"}):(0,t.jsx)(d.Z,{className:"h-10 w-10 rounded-full border-2 border-black/20"})}),(0,t.jsx)("span",{className:"text-xl font-semibold sm:text-2xl lg:text-3xl",children:S.name})]})})}),(0,t.jsx)("nav",{className:"sticky top-0 z-20 overflow-x-auto py-4 transition duration-300 ease-in-out ".concat(U&&"bg-white/70 backdrop-blur-lg border-b-2"),style:{borderColor:null==Z?void 0:null===(y=Z.sections)||void 0===y?void 0:null===(M=y.navigation)||void 0===M?void 0:null===(C=M.styles)||void 0===C?void 0:C.borderColor,color:null==Z?void 0:null===(P=Z.sections)||void 0===P?void 0:null===(L=P.navigation)||void 0===L?void 0:null===(E=L.styles)||void 0===E?void 0:E.primaryTextColor},children:W.SelectedRole&&Y[W.SelectedRole.role].length>1&&(0,t.jsx)(s.Z,{children:(0,t.jsx)("ul",{className:"flex flex-nowrap items-center text-md font-medium\n        text-black lg:text-[1.1rem]",children:Y[W.SelectedRole.role].map(e=>e&&(0,t.jsx)("li",{className:"inline-block whitespace-nowrap pr-6 transition-all ".concat(J(e.href)?"opacity-100 font-semibold":"opacity-50 hover:opacity-70"),children:(0,t.jsx)(i(),{scroll:!0,href:"/events/".concat(S.slug).concat(e.href),legacyBehavior:!0,children:e.name})},e.name))})})})]})}},24033:function(e,n,r){e.exports=r(50094)},60658:function(e,n,r){"use strict";r.d(n,{D:function(){return d}});var t=r(73656),o=r(2265),i=r(17466),a=r(51669),l=r(31617),s=r(17205),u=r(76261);function d(e,n){var r=(0,u.x)(null==n?void 0:n.client);(0,l.Vp)(e,l.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:r}),c=d[0],v=d[1],m=(0,o.useRef)({result:c,mutationId:0,isMounted:!0,client:r,mutation:e,options:n});Object.assign(m.current,{client:r,options:n,mutation:e});var h=(0,o.useCallback)(function(e){void 0===e&&(e={});var n=m.current,r=n.options,o=n.mutation,l=(0,t.pi)((0,t.pi)({},r),{mutation:o}),u=e.client||m.current.client;m.current.result.loading||l.ignoreResults||!m.current.isMounted||v(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:u});var d=++m.current.mutationId,c=(0,i.J)(l,e);return u.mutate(c).then(function(n){var r,t=n.data,o=n.errors,i=o&&o.length>0?new s.cA({graphQLErrors:o}):void 0;if(d===m.current.mutationId&&!c.ignoreResults){var l={called:!0,loading:!1,data:t,error:i,client:u};m.current.isMounted&&!(0,a.D)(m.current.result,l)&&v(m.current.result=l)}var h=e.onCompleted||(null===(r=m.current.options)||void 0===r?void 0:r.onCompleted);return null==h||h(n.data,c),n}).catch(function(n){if(d===m.current.mutationId&&m.current.isMounted){var r,t={loading:!1,error:n,data:void 0,called:!0,client:u};(0,a.D)(m.current.result,t)||v(m.current.result=t)}var o=e.onError||(null===(r=m.current.options)||void 0===r?void 0:r.onError);if(o)return o(n,c),{data:void 0,errors:n};throw n})},[]),f=(0,o.useCallback)(function(){m.current.isMounted&&v({called:!1,loading:!1,client:r})},[]);return(0,o.useEffect)(function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}},[]),[h,(0,t.pi)({reset:f},c)]}},31706:function(e,n,r){"use strict";var t=r(2265);let o=t.forwardRef(function({title:e,titleId:n,...r},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))});n.Z=o},35518:function(e,n,r){"use strict";var t=r(2265);let o=t.forwardRef(function({title:e,titleId:n,...r},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"}))});n.Z=o},89010:function(e,n,r){"use strict";var t=r(2265);let o=t.forwardRef(function({title:e,titleId:n,...r},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"}))});n.Z=o},74992:function(e,n,r){"use strict";var t=r(2265);let o=t.forwardRef(function({title:e,titleId:n,...r},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))});n.Z=o},11490:function(e,n){"use strict";/*! js-cookie v3.0.1 | MIT */function r(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)e[t]=r[t]}return e}var t=function e(n,t){function o(e,o,i){if("undefined"!=typeof document){"number"==typeof(i=r({},t,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in i)i[l]&&(a+="; "+l,!0!==i[l]&&(a+="="+i[l].split(";")[0]));return document.cookie=e+"="+n.write(o,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],t={},o=0;o<r.length;o++){var i=r[o].split("="),a=i.slice(1).join("=");try{var l=decodeURIComponent(i[0]);if(t[l]=n.read(a,l),e===l)break}catch(e){}}return e?t[e]:t}},remove:function(e,n){o(e,"",r({},n,{expires:-1}))},withAttributes:function(n){return e(this.converter,r({},this.attributes,n))},withConverter:function(n){return e(r({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});n.Z=t}}]);