import{i as se,n as Pe,f as ae,u as oe,A as I,s as A,o as E,v as de,j as ce,d as Y,q as x,P as U,N as T,b as Ce,x as ke,y as fe,I as X,m as Me,e as j,g as He,h as Ne,w as Be,_ as xe,z as je,B as re,p as ue,a as We}from"./transition-dbb1d324.js";import{d as q,r as g,s as c,y as O,z as P,D as S,F as Ue,v as Z,C as V,W as Ye,x as ee,A as _,u as Ie,$ as qe}from"./app-d05ed321.js";function Ve(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let D=[];Ve(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ve(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let a=E(n);a instanceof HTMLElement&&t.add(a)}return t}var pe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(pe||{});let M=Object.assign(q({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let l=g(null);a({el:l,$el:l});let o=c(()=>se(l)),u=g(!1);O(()=>u.value=!0),P(()=>u.value=!1),ze({ownerDocument:o},c(()=>u.value&&!!(e.features&16)));let i=Ge({ownerDocument:o,container:l,initialFocus:c(()=>e.initialFocus)},c(()=>u.value&&!!(e.features&2)));Ke({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:i},c(()=>u.value&&!!(e.features&8)));let r=Pe();function s(f){let m=E(l);m&&(w=>w())(()=>{Y(r.value,{[x.Forwards]:()=>{U(m,T.First,{skipElements:[f.relatedTarget]})},[x.Backwards]:()=>{U(m,T.Last,{skipElements:[f.relatedTarget]})}})})}let p=g(!1);function y(f){f.key==="Tab"&&(p.value=!0,requestAnimationFrame(()=>{p.value=!1}))}function h(f){if(!u.value)return;let m=ve(e.containers);E(l)instanceof HTMLElement&&m.add(E(l));let w=f.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(me(m,w)||(p.value?U(E(l),Y(r.value,{[x.Forwards]:()=>T.Next,[x.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&A(f.target)))}return()=>{let f={},m={ref:l,onKeydown:y,onFocusout:h},{features:w,initialFocus:b,containers:C,...R}=e;return S(Ue,[!!(w&4)&&S(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:oe.Focusable}),I({ourProps:m,theirProps:{...t,...R},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&S(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:oe.Focusable})])}}}),{features:pe});function _e(e){let t=g(D.slice());return V([e],([n],[a])=>{a===!0&&n===!1?de(()=>{t.value.splice(0)}):a===!1&&n===!0&&(t.value=D.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(a=>a!=null&&a.isConnected))!=null?n:null}}function ze({ownerDocument:e},t){let n=_e(t);O(()=>{Z(()=>{var a,l;t.value||((a=e.value)==null?void 0:a.activeElement)===((l=e.value)==null?void 0:l.body)&&A(n())},{flush:"post"})}),P(()=>{t.value&&A(n())})}function Ge({ownerDocument:e,container:t,initialFocus:n},a){let l=g(null),o=g(!1);return O(()=>o.value=!0),P(()=>o.value=!1),O(()=>{V([t,n,a],(u,i)=>{if(u.every((s,p)=>(i==null?void 0:i[p])===s)||!a.value)return;let r=E(t);r&&de(()=>{var s,p;if(!o.value)return;let y=E(n),h=(s=e.value)==null?void 0:s.activeElement;if(y){if(y===h){l.value=h;return}}else if(r.contains(h)){l.value=h;return}y?A(y):U(r,T.First|T.NoScroll)===Ce.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(p=e.value)==null?void 0:p.activeElement})},{immediate:!0,flush:"post"})}),l}function Ke({ownerDocument:e,container:t,containers:n,previousActiveElement:a},l){var o;ce((o=e.value)==null?void 0:o.defaultView,"focus",u=>{if(!l.value)return;let i=ve(n);E(t)instanceof HTMLElement&&i.add(E(t));let r=a.value;if(!r)return;let s=u.target;s&&s instanceof HTMLElement?me(i,s)?(a.value=s,A(s)):(u.preventDefault(),u.stopPropagation(),A(r)):A(a.value)},!0)}function me(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function Qe(e){let t=Ye(e.getSnapshot());return P(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Je(e,t){let n=e(),a=new Set;return{getSnapshot(){return n},subscribe(l){return a.add(l),()=>a.delete(l)},dispatch(l,...o){let u=t[l].call(n,...o);u&&(n=u,a.forEach(i=>i()))}}}function Xe(){let e;return{before({doc:t}){var n;let a=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-a.clientWidth},after({doc:t,d:n}){let a=t.documentElement,l=a.clientWidth-a.offsetWidth,o=e-l;n.style(a,"paddingRight",`${o}px`)}}}function Ze(){return ke()?{before({doc:e,d:t,meta:n}){function a(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=fe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,u=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let r=i.target.closest("a");if(!r)return;let{hash:s}=new URL(r.href),p=e.querySelector(s);p&&!a(p)&&(u=p)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(a(i.target)){let r=i.target;for(;r.parentElement&&a(r.parentElement);)r=r.parentElement;t.style(r,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(a(i.target)){let r=i.target;for(;r.parentElement&&r.dataset.headlessuiPortal!==""&&!(r.scrollHeight>r.clientHeight||r.scrollWidth>r.clientWidth);)r=r.parentElement;r.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let r=(i=window.scrollY)!=null?i:window.pageYOffset;o!==r&&window.scrollTo(0,o),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})})}}:{}}function et(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function tt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let F=Je(()=>new Map,{PUSH(e,t){var n;let a=(n=this.get(e))!=null?n:{doc:e,count:0,d:fe(),meta:new Set};return a.count++,a.meta.add(t),this.set(e,a),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let a={doc:e,d:t,meta:tt(n)},l=[Ze(),Xe(),et()];l.forEach(({before:o})=>o==null?void 0:o(a)),l.forEach(({after:o})=>o==null?void 0:o(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});F.subscribe(()=>{let e=F.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let a=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!a||!l&&a)&&F.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&F.dispatch("TEARDOWN",n)}});function nt(e,t,n){let a=Qe(F),l=c(()=>{let o=e.value?a.value.get(e.value):void 0;return o?o.count>0:!1});return V([e,t],([o,u],[i],r)=>{if(!o||!u)return;F.dispatch("PUSH",o,n);let s=!1;r(()=>{s||(F.dispatch("POP",i??o,n),s=!0)})},{immediate:!0}),l}let K=new Map,H=new Map;function ie(e,t=g(!0)){Z(n=>{var a;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var u;if(!l)return;let i=(u=H.get(l))!=null?u:1;if(i===1?H.delete(l):H.set(l,i-1),i!==1)return;let r=K.get(l);r&&(r["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",r["aria-hidden"]),l.inert=r.inert,K.delete(l))});let o=(a=H.get(l))!=null?a:0;H.set(l,o+1),o===0&&(K.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let ge=Symbol("StackContext");var Q=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Q||{});function lt(){return _(ge,()=>{})}function at({type:e,enabled:t,element:n,onUpdate:a}){let l=lt();function o(...u){a==null||a(...u),l(...u)}O(()=>{V(t,(u,i)=>{u?o(0,e,n):i===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),P(()=>{t.value&&o(1,e,n)}),ee(ge,o)}let he=Symbol("DescriptionContext");function ot(){let e=_(he,null);if(e===null)throw new Error("Missing parent");return e}function rt({slot:e=g({}),name:t="Description",props:n={}}={}){let a=g([]);function l(o){return a.value.push(o),()=>{let u=a.value.indexOf(o);u!==-1&&a.value.splice(u,1)}}return ee(he,{register:l,slot:e,name:t,props:n}),c(()=>a.value.length>0?a.value.join(" "):void 0)}let dt=q({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var a;let l=(a=e.id)!=null?a:`headlessui-description-${X()}`,o=ot();return O(()=>P(o.register(l))),()=>{let{name:u="Description",slot:i=g({}),props:r={}}=o,{...s}=e,p={...Object.entries(r).reduce((y,[h,f])=>Object.assign(y,{[h]:Ie(f)}),{}),id:l};return I({ourProps:p,theirProps:s,slot:i.value,attrs:t,slots:n,name:u})}}});var ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ut||{});let J=Symbol("DialogContext");function we(e){let t=_(J,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,we),n}return t}let W="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ct=q({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:W},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){var o,u;let i=(o=e.id)!=null?o:`headlessui-dialog-${X()}`,r=g(!1);O(()=>{r.value=!0});let s=!1,p=c(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${p}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),y=g(0),h=Me(),f=c(()=>e.open===W&&h!==null?(h.value&j.Open)===j.Open:e.open),m=g(null),w=c(()=>se(m));if(l({el:m,$el:m}),!(e.open!==W||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===W?void 0:e.open}`);let b=c(()=>r.value&&f.value?0:1),C=c(()=>b.value===0),R=c(()=>y.value>1),te=_(J,null)!==null,[Ee,ye]=He(),{resolveContainers:z,mainTreeNodeRef:ne,MainTreeNode:be}=Ne({portals:Ee,defaultContainers:[c(()=>{var d;return(d=k.panelRef.value)!=null?d:m.value})]}),$e=c(()=>R.value?"parent":"leaf"),le=c(()=>h!==null?(h.value&j.Closing)===j.Closing:!1),Le=c(()=>te||le.value?!1:C.value),Se=c(()=>{var d,v,$;return($=Array.from((v=(d=w.value)==null?void 0:d.querySelectorAll("body > *"))!=null?v:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(E(ne))&&L instanceof HTMLElement))!=null?$:null});ie(Se,Le);let Te=c(()=>R.value?!0:C.value),De=c(()=>{var d,v,$;return($=Array.from((v=(d=w.value)==null?void 0:d.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(L=>L.contains(E(ne))&&L instanceof HTMLElement))!=null?$:null});ie(De,Te),at({type:"Dialog",enabled:c(()=>b.value===0),element:m,onUpdate:(d,v)=>{if(v==="Dialog")return Y(d,{[Q.Add]:()=>y.value+=1,[Q.Remove]:()=>y.value-=1})}});let Fe=rt({name:"DialogDescription",slot:c(()=>({open:f.value}))}),N=g(null),k={titleId:N,panelRef:g(null),dialogState:b,setTitleId(d){N.value!==d&&(N.value=d)},close(){t("close",!1)}};ee(J,k);let Ae=c(()=>!(!C.value||R.value));Be(z,(d,v)=>{d.preventDefault(),k.close(),qe(()=>v==null?void 0:v.focus())},Ae);let Oe=c(()=>!(R.value||b.value!==0));ce((u=w.value)==null?void 0:u.defaultView,"keydown",d=>{Oe.value&&(d.defaultPrevented||d.key===We.Escape&&(d.preventDefault(),d.stopPropagation(),k.close()))});let Re=c(()=>!(le.value||b.value!==0||te));return nt(w,Re,d=>{var v;return{containers:[...(v=d.containers)!=null?v:[],z]}}),Z(d=>{if(b.value!==0)return;let v=E(m);if(!v)return;let $=new ResizeObserver(L=>{for(let G of L){let B=G.target.getBoundingClientRect();B.x===0&&B.y===0&&B.width===0&&B.height===0&&k.close()}});$.observe(v),d(()=>$.disconnect())}),()=>{let{open:d,initialFocus:v,...$}=e,L={...n,ref:m,id:i,role:p.value,"aria-modal":b.value===0?!0:void 0,"aria-labelledby":N.value,"aria-describedby":Fe.value},G={open:b.value===0};return S(re,{force:!0},()=>[S(xe,()=>S(je,{target:m.value},()=>S(re,{force:!1},()=>S(M,{initialFocus:v,containers:z,features:C.value?Y($e.value,{parent:M.features.RestoreFocus,leaf:M.features.All&~M.features.FocusLock}):M.features.None},()=>S(ye,{},()=>I({ourProps:L,theirProps:{...$,...n},slot:G,attrs:n,slots:a,visible:b.value===0,features:ue.RenderStrategy|ue.Static,name:"Dialog"})))))),S(be)])}}}),ft=q({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var l;let o=(l=e.id)!=null?l:`headlessui-dialog-panel-${X()}`,u=we("DialogPanel");a({el:u.panelRef,$el:u.panelRef});function i(r){r.stopPropagation()}return()=>{let{...r}=e,s={id:o,ref:u.panelRef,onClick:i};return I({ourProps:s,theirProps:r,slot:{open:u.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});export{ft as G,dt as K,ct as Y,rt as k};