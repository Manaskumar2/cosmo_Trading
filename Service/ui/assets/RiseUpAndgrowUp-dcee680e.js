import{u as j,r,b as v,h as u,j as e}from"./index-fd44721e.js";import{A as f,S as N}from"./Side-4b0e3785.js";import{a as g}from"./axios-4a70c6fc.js";import{t as b,a as y}from"./arr-c18888ec.js";import{I as S}from"./index-3c233412.js";import"./setPrototypeOf-650efc58.js";import"./warning-77c69b98.js";function D(){const n=j(),[i,c]=r.useState(""),[o,w]=r.useState(1),[l,d]=r.useState(new Date().toISOString().split("T")[0]),[a,m]=r.useState(null),h=v(u),x=async()=>{try{let t=h.authToken;const s=await g.get("https://cosmotrade.live/api/admin/bettingHistory",{params:{date:l,page:o,gameType:i},headers:{Authorization:`Bearer ${t}`}});s.status===200&&(console.log(s.data),m(s.data))}catch(t){t.response?t.response.data.message:t.message}};r.useEffect(()=>{x()},[l,i,o]);const p=()=>a&&a.data?a.data.reduce((t,s)=>t+s.totalBettingAmount,0).toFixed(2):0;return e.jsxs("div",{children:[e.jsx(f,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(N,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(S,{}),e.jsxs("div",{className:"container ",children:[e.jsxs("div",{className:"admin-total-head",children:[e.jsxs("div",{children:[" ",e.jsx("h4",{children:"Rise Up & Grow Up Betting History"})]}),e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("h4",{children:"Search Month : "}),e.jsx(b,{className:"calender-input",selected:new Date(l),onChange:t=>{d(t.toISOString().split("T")[0])},dateFormat:"yyyy-MM",showMonthYearPicker:!0}),e.jsxs("button",{className:"back-btn",onClick:()=>{n("/admin/home")},children:[e.jsx("img",{src:y,alt:""}),e.jsx("p",{children:"Back"})]})]})]}),e.jsxs("div",{className:"profit-tab-btns",children:[e.jsx("div",{className:` ${i===""?"profit-tab-active":"profit-tab"}`,onClick:()=>{c("")},children:"All"}),e.jsx("div",{className:` ${i==="GrowUp"?"profit-tab-active":"profit-tab"}`,onClick:()=>{c("GrowUp")},children:"Grow Up"}),e.jsx("div",{className:` ${i==="RiseUp"?"profit-tab-active":"profit-tab"}`,onClick:()=>{c("RiseUp")},children:"Rise Up"})]}),e.jsxs("div",{className:"container total-table",children:[e.jsxs("div",{className:"total-table-heading row",children:[e.jsx("div",{className:"col-2 text-center",children:"Sl No"}),e.jsx("div",{className:"col-6 text-left ",children:"Date"}),e.jsx("div",{className:"col-4 text-right",children:"Amount"})]}),e.jsx("div",{className:"total-table-parent",children:a&&a.data.map((t,s)=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-2 text-center",children:s+1}),e.jsx("div",{className:"col-6 text-left ",children:t._id}),e.jsx("div",{className:"col-4 text-right",children:t.totalBettingAmount.toFixed(2)})]},s))}),a&&e.jsxs("div",{className:"total-profit row",children:[e.jsxs("div",{className:"col-10",children:[" ",e.jsx("h4",{children:"Total Bet : "})," "]}),e.jsxs("div",{className:"col-2",children:[" ",e.jsxs("h4",{children:[" ",p()," "]})," "]})]}),e.jsx("div",{})]})]})]})]})]})}export{D as default};
