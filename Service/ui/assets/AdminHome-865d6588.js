import{r as i,d as N,A as g,j as e}from"./index-cbf14f70.js";import{A,S as B}from"./Side-ed4e3304.js";import{a as c}from"./axios-4a70c6fc.js";function w(){const[o,r]=i.useState(null),[n,h]=i.useState(null),[t,m]=i.useState(null),[d,x]=i.useState(null),l=N(g),j=async()=>{try{let s=l.authToken;const a=await c.get("https://cosmotrade.live/api/admin/companyDetails",{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return console.log(a),r(a),a}catch(s){s.response?s.response.data.message:s.message}},u=async()=>{try{let s=l.authToken;const a=await c.get("https://cosmotrade.live/api/admin/totalTransactions",{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return h(a.data.data),console.log(a),a}catch(s){s.response?s.response.data.message:s.message}},v=async()=>{try{let s=l.authToken;const a=await c.get("https://cosmotrade.live/api/admin/riseUpbet ",{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return m(a),console.log(a),a}catch(s){s.response?s.response.data.message:s.message}},p=async()=>{try{let s=l.authToken;const a=await c.get("https://cosmotrade.live/api/admin/growUpbetAmount",{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return x(a),console.log(a),a}catch(s){s.response?s.response.data.message:s.message}};return i.useEffect(()=>{const s=()=>{u(),j(),p(),v()};s();const a=setInterval(s,5e3);return()=>{clearInterval(a)}},[]),e.jsxs("div",{children:[e.jsx(A,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(B,{}),e.jsx("div",{className:"admin-rightSection",children:e.jsxs("div",{className:"container admin-home",children:[o&&e.jsxs("div",{children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("h2",{className:"heading",children:"Cosmo Trade"})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Company Profit"}),e.jsx("p",{children:o.data.data[0].amount.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Total Betting Amount"}),e.jsx("p",{children:o.data.data[0].totalBettingAmount.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount"}),e.jsx("p",{children:o.data.data[0].everydayBettingAmount.toFixed(2)})]})})]})]}),n&&e.jsx("div",{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Recharge"}),e.jsx("p",{children:n.todayTotalRecharge.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Total Recharge"}),e.jsx("p",{children:n.overallTotalRecharge.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Withdraw"}),e.jsx("p",{children:n.todayTotalWithdraw.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Total Withdraw"}),e.jsx("p",{children:n.overallTotalWithdraw.toFixed(2)})]})})]})}),d&&e.jsxs("div",{children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("h2",{className:"heading",children:"Grow Up"})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-3 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount on Alpha"}),e.jsx("p",{children:d.data.data.todayBetAmounts.small.toFixed(2)})]})}),e.jsx("div",{className:"col-3",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount on Beta"}),e.jsx("p",{children:d.data.data.todayBetAmounts.big.toFixed(2)})]})}),e.jsx("div",{className:"col-3 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Current Betting Amount on Alpha"}),e.jsx("p",{children:d.data.data.totalBetAmounts.small.toFixed(2)})]})})]}),e.jsx("div",{className:"col-3 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Current Betting Amount on Beta"}),e.jsx("p",{children:d.data.data.totalBetAmounts.big.toFixed(2)})]})})]}),t&&e.jsxs(e.Fragment,{children:["  ",e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("h2",{className:"heading",children:"Rise Up"})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-4 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Current Betting Amount on Alpha"}),e.jsx("p",{children:t.data.data.totalBetAmounts.A.toFixed(2)})]})}),e.jsx("div",{className:"col-4 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Current Betting Amount on Beta"}),e.jsx("p",{children:t.data.data.totalBetAmounts.B.toFixed(2)})]})}),e.jsx("div",{className:"col-4 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Current Betting Amount on Gamma"}),e.jsx("p",{children:t.data.data.totalBetAmounts.C.toFixed(2)})]})}),e.jsx("div",{className:"col-4 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount on Alpha"}),e.jsx("p",{children:t.data.data.todayBetAmounts.A.toFixed(2)})]})}),e.jsx("div",{className:"col-4 ",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount on Beta"}),e.jsx("p",{children:t.data.data.todayBetAmounts.B.toFixed(2)})]})}),e.jsx("div",{className:"col-4",children:e.jsxs("div",{className:"admin-home-box",children:[e.jsx("h5",{children:"Today Betting Amount on Gamma"}),e.jsx("p",{children:t.data.data.todayBetAmounts.C.toFixed(2)})]})})]})]})]})})]})]})}export{w as default};
