import{u as f,r,j as e}from"./index-607e5c7b.js";const x="/assets/Logo-0794dfa6.svg";function p(){const l=f(),o=new Date("2023-09-19T12:00:00"),[t,i]=r.useState(c(o));r.useEffect(()=>{const n=setInterval(()=>{const a=c(o);i(a),a.total<=0&&clearInterval(n)},1e3);return()=>{clearInterval(n)}},[o]);function c(n){const s=n-new Date,d=Math.floor(s/(1e3*60*60*24)),u=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(s%(1e3*60*60)/(1e3*60)),m=Math.floor(s%(1e3*60)/1e3);return{total:s,days:d,hours:u,minutes:h,seconds:m}}return e.jsx("div",{className:"launchBody",children:t.total>0?e.jsxs("div",{className:"launch-box",children:[e.jsx("img",{src:x,alt:"",style:{padding:"2rem 0"}}),e.jsx("p",{children:"Time left:"}),e.jsxs("p",{children:[t.days," days"]}),e.jsxs("p",{children:[t.hours," hours"]}),e.jsxs("p",{children:[t.minutes," minutes"]}),e.jsxs("p",{children:[t.seconds," seconds"]}),e.jsx("button",{onClick:()=>{l("/")},className:"back-to-home",children:"Back To Home"})]}):e.jsx("p",{children:"Launched!!!"})})}export{p as default};
