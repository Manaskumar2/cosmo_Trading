import{u as p,r as i,b as f,h as j,j as e}from"./index-2588f213.js";import{A as v,S as u}from"./Side-1df3d515.js";import{a as n}from"./axios-4a70c6fc.js";import{t as y,a as N}from"./arr-08ead214.js";import{I as g}from"./index-87c62b3c.js";import"./setPrototypeOf-e8d3391c.js";import"./warning-619ce91d.js";function T(){const d=p();i.useState(1);const[r,m]=i.useState(new Date),[c,D]=i.useState(new Date),[t,o]=i.useState(null),l=f(j),h=async()=>{try{let a=l.authToken;const s=await n.get("https://cosmotrade.live/api/admin/getComapnyProfits",{params:{specificDate:r,specificDay:null},headers:{Authorization:`Bearer ${a}`}});s.status===200&&(console.log(s.data),o(s.data))}catch(a){a.response?a.response.data.message:a.message}},x=async()=>{try{let a=l.authToken;const s=await n.get("https://cosmotrade.live/api/admin/getComapnyProfits",{params:{specificDay:c,specificDate:null},headers:{Authorization:`Bearer ${a}`}});s.status===200&&o(s.data)}catch(a){a.response?a.response.data.message:a.message}};return i.useEffect(()=>{h()},[r]),i.useEffect(()=>{x()},[c]),e.jsxs("div",{children:[e.jsx(v,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(u,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(g,{}),e.jsxs("div",{className:"container ",children:[e.jsxs("div",{className:"admin-total-head",children:[e.jsxs("div",{children:[" ",e.jsx("h4",{children:"Company Profit"})," "]}),e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx("h5",{style:{margin:"0"},children:"Search By Day : "}),e.jsx(y,{className:"calender-input",selected:new Date(r),onChange:a=>{m(a.toISOString().split("T")[0])},dateFormat:"yyyy-MM-dd"}),e.jsxs("button",{className:"back-btn",onClick:()=>{d("/admin/home")},children:[e.jsx("img",{src:N,alt:""}),e.jsx("p",{children:"Back"})]})]})]}),e.jsxs("div",{className:"container total-table",children:[e.jsxs("div",{className:"total-table-heading row",children:[e.jsx("div",{className:"col-2 text-center",children:"Sl No"}),e.jsx("div",{className:"col-6 text-left ",children:"Date"}),e.jsx("div",{className:"col-4 text-right",children:"Amount"})]}),e.jsx("div",{className:"total-table-parent",children:t&&t.data&&t.data.map((a,s)=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-2 text-center",children:s+1}),e.jsx("div",{className:"col-6 text-left ",children:a._id}),e.jsx("div",{className:"col-4 text-right",children:a.totalProfit.toFixed(2)})]},s))}),t&&t.overallTotalProfit&&e.jsxs("div",{className:"total-profit row",children:[e.jsxs("div",{className:"col-10",children:[" ",e.jsx("h4",{children:"Total Profit : "})," "]}),e.jsxs("div",{className:"col-2",children:[" ",e.jsx("h4",{children:t&&t.overallTotalProfit.toFixed(2)})," "]})]}),e.jsx("div",{})]})]})]})]})]})}export{T as default};
