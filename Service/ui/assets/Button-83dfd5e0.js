import{r as B}from"./setPrototypeOf-cf8dc84d.js";import{r as $,j as l}from"./index-3900eb01.js";import{u as N}from"./Button-e11e431e.js";import{u as j}from"./TransitionWrapper-3677d0bf.js";const e=$.forwardRef(({as:m,bsPrefix:n,variant:s="primary",size:a,active:f=!1,disabled:t=!1,className:u,...o},p)=>{const r=j(n,"btn"),[c,{tagName:i}]=N({tagName:m,disabled:t,...o}),x=i;return l.jsx(x,{...c,...o,ref:p,disabled:t,className:B(u,r,f&&"active",s&&`${r}-${s}`,a&&`${r}-${a}`,o.href&&t&&"disabled")})});e.displayName="Button";const y=e;export{y as B};
