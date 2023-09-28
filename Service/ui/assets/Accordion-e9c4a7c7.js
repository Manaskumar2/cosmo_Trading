import{_ as z,T as V,b as q,c as h,s as R,E as J,d as Q,e as Y,f as Z,t as k,u as x}from"./TransitionWrapper-6fac8e16.js";import{r as c,R as I,j as p}from"./index-08afe73c.js";function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},C.apply(this,arguments)}function $(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function ee(t){var e=te(t,"string");return typeof e=="symbol"?e:String(e)}function te(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ne(t,e,n){var o=c.useRef(t!==void 0),r=c.useState(e),a=r[0],s=r[1],i=t!==void 0,l=o.current;return o.current=i,!i&&l&&a!==e&&s(e),[i?t:a,c.useCallback(function(m){for(var f=arguments.length,y=new Array(f>1?f-1:0),v=1;v<f;v++)y[v-1]=arguments[v];n&&n.apply(void 0,[m].concat(y)),s(m)},[n])]}function oe(t,e){return Object.keys(e).reduce(function(n,o){var r,a=n,s=a[$(o)],i=a[o],l=z(a,[$(o),o].map(ee)),m=e[o],f=ne(i,s,t[m]),y=f[0],v=f[1];return C({},l,(r={},r[o]=y,r[m]=v,r))},t)}function A(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...r){e.apply(this,r),n.apply(this,r)}},null)}const re={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function se(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,o=e[n],r=re[t];return o+parseInt(R(e,r[0]),10)+parseInt(R(e,r[1]),10)}const ce={[J]:"collapse",[Q]:"collapsing",[Y]:"collapsing",[Z]:"collapse show"},ae=I.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:o,onExiting:r,className:a,children:s,dimension:i="height",in:l=!1,timeout:m=300,mountOnEnter:f=!1,unmountOnExit:y=!1,appear:v=!1,getDimensionValue:w=se,...N},L)=>{const u=typeof i=="function"?i():i,_=c.useMemo(()=>A(d=>{d.style[u]="0"},t),[u,t]),G=c.useMemo(()=>A(d=>{const g=`scroll${u[0].toUpperCase()}${u.slice(1)}`;d.style[u]=`${d[g]}px`},e),[u,e]),F=c.useMemo(()=>A(d=>{d.style[u]=null},n),[u,n]),W=c.useMemo(()=>A(d=>{d.style[u]=`${w(u,d)}px`,k(d)},o),[o,w,u]),X=c.useMemo(()=>A(d=>{d.style[u]=null},r),[u,r]);return p.jsx(V,{ref:L,addEndListener:q,...N,"aria-expanded":N.role?l:null,onEnter:_,onEntering:G,onEntered:F,onExit:W,onExiting:X,childRef:s.ref,in:l,timeout:m,mountOnEnter:f,unmountOnExit:y,appear:v,children:(d,g)=>I.cloneElement(s,{...g,className:h(a,s.props.className,ce[d],u==="width"&&"collapse-horizontal")})})}),ie=ae;function B(t,e){return Array.isArray(t)?t.includes(e):t===e}const S=c.createContext({});S.displayName="AccordionContext";const E=S,b=c.forwardRef(({as:t="div",bsPrefix:e,className:n,children:o,eventKey:r,...a},s)=>{const{activeEventKey:i}=c.useContext(E);return e=x(e,"accordion-collapse"),p.jsx(ie,{ref:s,in:B(i,r),...a,className:h(n,e),children:p.jsx(t,{children:c.Children.only(o)})})});b.displayName="AccordionCollapse";const O=b,T=c.createContext({eventKey:""});T.displayName="AccordionItemContext";const j=T,M=c.forwardRef(({as:t="div",bsPrefix:e,className:n,onEnter:o,onEntering:r,onEntered:a,onExit:s,onExiting:i,onExited:l,...m},f)=>{e=x(e,"accordion-body");const{eventKey:y}=c.useContext(j);return p.jsx(O,{eventKey:y,onEnter:o,onEntering:r,onEntered:a,onExit:s,onExiting:i,onExited:l,children:p.jsx(t,{ref:f,...m,className:h(n,e)})})});M.displayName="AccordionBody";const le=M;function ue(t,e){const{activeEventKey:n,onSelect:o,alwaysOpen:r}=c.useContext(E);return a=>{let s=t===n?null:t;r&&(Array.isArray(n)?n.includes(t)?s=n.filter(i=>i!==t):s=[...n,t]:s=[t]),o==null||o(s,a),e==null||e(a)}}const P=c.forwardRef(({as:t="button",bsPrefix:e,className:n,onClick:o,...r},a)=>{e=x(e,"accordion-button");const{eventKey:s}=c.useContext(j),i=ue(s,o),{activeEventKey:l}=c.useContext(E);return t==="button"&&(r.type="button"),p.jsx(t,{ref:a,onClick:i,...r,"aria-expanded":Array.isArray(l)?l.includes(s):s===l,className:h(n,e,!B(l,s)&&"collapsed")})});P.displayName="AccordionButton";const U=P,D=c.forwardRef(({as:t="h2",bsPrefix:e,className:n,children:o,onClick:r,...a},s)=>(e=x(e,"accordion-header"),p.jsx(t,{ref:s,...a,className:h(n,e),children:p.jsx(U,{onClick:r,children:o})})));D.displayName="AccordionHeader";const de=D,H=c.forwardRef(({as:t="div",bsPrefix:e,className:n,eventKey:o,...r},a)=>{e=x(e,"accordion-item");const s=c.useMemo(()=>({eventKey:o}),[o]);return p.jsx(j.Provider,{value:s,children:p.jsx(t,{ref:a,...r,className:h(n,e)})})});H.displayName="AccordionItem";const fe=H,K=c.forwardRef((t,e)=>{const{as:n="div",activeKey:o,bsPrefix:r,className:a,onSelect:s,flush:i,alwaysOpen:l,...m}=oe(t,{activeKey:"onSelect"}),f=x(r,"accordion"),y=c.useMemo(()=>({activeEventKey:o,onSelect:s,alwaysOpen:l}),[o,s,l]);return p.jsx(E.Provider,{value:y,children:p.jsx(n,{ref:e,...m,className:h(a,f,i&&`${f}-flush`)})})});K.displayName="Accordion";const ye=Object.assign(K,{Button:U,Collapse:O,Item:fe,Header:de,Body:le});export{ye as A,oe as u};
