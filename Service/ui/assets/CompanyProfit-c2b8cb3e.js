import{u as y,r as i,b as v,h as N,j as e}from"./index-555ca70e.js";import{A as S,S as k}from"./Side-c730da09.js";import{a as d}from"./axios-4a70c6fc.js";import{a as P}from"./arr-8473bac8.js";import{t as h}from"./index-3c317d51.js";import{I as b}from"./index-697d60b7.js";import{r as C,l as D}from"./RightArr-753548b2.js";import"./setPrototypeOf-35303ce5.js";import"./warning-410441c5.js";function O(){const p=y(),[r,m]=i.useState(1),[n,x]=i.useState(new Date().toISOString().split("T")[0]),[o,j]=i.useState(new Date().toISOString().split("T")[0]),[t,c]=i.useState(null),l=v(N),f=async()=>{try{let s=l.authToken;const a=await d.get("https://cosmotrade.live/api/admin/getComapnyProfits",{params:{specificMonth:n,specificDay:null},headers:{Authorization:`Bearer ${s}`}});a.status===200&&c(a.data)}catch(s){s.response?s.response.data.message:s.message}},g=async()=>{try{let s=l.authToken;const a=await d.get("https://cosmotrade.live/api/admin/getComapnyProfits",{params:{specificDay:o,specificDate:null},headers:{Authorization:`Bearer ${s}`}});a.status===200&&c(a.data)}catch(s){s.response?s.response.data.message:s.message}},u=async()=>{try{let s=l.authToken;const a=await d.get("https://cosmotrade.live/api/admin/getComapnyProfits",{headers:{Authorization:`Bearer ${s}`}});a.status===200&&c(a.data)}catch(s){s.response?s.response.data.message:s.message}};return i.useEffect(()=>{f()},[n]),i.useEffect(()=>{g()},[o]),e.jsxs("div",{children:[e.jsx(S,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(k,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(b,{}),e.jsxs("div",{className:"container ",children:[e.jsxs("div",{className:"admin-total-head",children:[e.jsxs("div",{children:[" ",e.jsx("h4",{children:"Company Profit"})," "]}),e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx("h5",{style:{margin:"0"},children:"Search By Month : "}),e.jsx(h,{selected:new Date(n),onChange:s=>{x(s.toISOString().split("T")[0])},dateFormat:"yyyy-MM",showMonthYearPicker:!0,className:"calender-input"}),e.jsx("h5",{style:{margin:"0"},children:"Search By Day : "}),e.jsx(h,{className:"calender-input",selected:new Date(o),onChange:s=>{j(s.toISOString().split("T")[0])},dateFormat:"yyyy-MM-dd"}),e.jsx("button",{className:"back-btn",onClick:()=>{u()},style:{background:"#e44f4fed"},children:e.jsx("p",{children:"Reset"})}),e.jsxs("button",{className:"back-btn",onClick:()=>{p("/admin/home")},children:[e.jsx("img",{src:P,alt:""}),e.jsx("p",{children:"Back"})]})]})]}),e.jsxs("div",{className:"container total-table",children:[e.jsxs("div",{className:"total-table-heading row",children:[e.jsx("div",{className:"col-2 text-center",children:"Sl No"}),e.jsx("div",{className:"col-6 text-left ",children:"Date"}),e.jsx("div",{className:"col-4 text-right",children:"Amount"})]}),e.jsx("div",{className:"total-table-parent",children:t&&t.data&&t.data.map((s,a)=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-2 text-center",children:a+1}),e.jsx("div",{className:"col-6 text-left ",children:s._id}),e.jsx("div",{className:"col-4 text-right",children:s.totalProfit.toFixed(2)})]},a))}),t&&t.overallTotalProfit&&e.jsxs("div",{className:"total-profit row",children:[e.jsxs("div",{className:"col-10",children:[" ",e.jsx("h4",{children:"Total Profit : "})," "]}),e.jsxs("div",{className:"col-2",children:[" ",e.jsx("h4",{children:t&&t.overallTotalProfit.toFixed(2)})," "]})]}),e.jsx("div",{children:t&&t.totalPages&&e.jsxs("div",{className:"pagination-buttons-p2p",children:[e.jsxs("button",{onClick:()=>{m(Math.max(r-1,1))},className:"page-leftarr",children:["  ",e.jsx("img",{src:C,alt:""})," "]}),t&&e.jsx("div",{children:r}),e.jsxs("button",{onClick:()=>{m(Math.min(r+1,t.totalPages))},className:"page-rightarr",children:["  ",e.jsx("img",{src:D,alt:""})," "]})]})})]})]})]})]})]})}export{O as default};
