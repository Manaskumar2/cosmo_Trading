import{r as i,d as u,A as p,j as s}from"./index-405d8246.js";import{A as v,S as N}from"./Side-b938e5ba.js";import{a as l}from"./axios-4a70c6fc.js";function y(){const[o,c]=i.useState(null),[t,r]=i.useState(null),[d,m]=i.useState(null),n=u(p),h=async()=>{try{let e=n.authToken;const a=await l.get("https://cosmotrade.live/api/admin/companyDetails",{headers:{Authorization:`Bearer ${e}`}});if(a.status===200)return console.log(a),c(a),a}catch(e){e.response?e.response.data.message:e.message}},x=async()=>{try{let e=n.authToken;const a=await l.get("https://cosmotrade.live/api/admin/riseUpbet ",{headers:{Authorization:`Bearer ${e}`}});if(a.status===200)return r(a),console.log(a),a}catch(e){e.response?e.response.data.message:e.message}},j=async()=>{try{let e=n.authToken;const a=await l.get("https://cosmotrade.live/api/admin/growUpbetAmount",{headers:{Authorization:`Bearer ${e}`}});if(a.status===200)return m(a),console.log(a),a}catch(e){e.response?e.response.data.message:e.message}};return i.useEffect(()=>{h(),j(),x()},[]),s.jsxs("div",{children:[s.jsx(v,{}),s.jsxs("div",{className:"flex-div",children:[s.jsx(N,{}),s.jsx("div",{className:"admin-rightSection",children:s.jsxs("div",{className:"container admin-home",children:[o&&s.jsxs("div",{children:[s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("h2",{className:"heading",children:"Cosmo Trade"})})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Company Amount"}),s.jsx("p",{children:o.data.data[0].amount.toFixed(2)})]})}),s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Total Betting Amount"}),s.jsx("p",{children:o.data.data[0].totalBettingAmount.toFixed(2)})]})}),s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount"}),s.jsx("p",{children:o.data.data[0].everydayBettingAmount.toFixed(2)})]})})]})]}),d&&s.jsxs("div",{children:[s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("h2",{className:"heading",children:"Grow Up"})})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-3",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Beta"}),s.jsx("p",{children:d.data.data.todayBetAmounts.big.toFixed(2)})]})}),s.jsx("div",{className:"col-3 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Alpha"}),s.jsx("p",{children:d.data.data.todayBetAmounts.small.toFixed(2)})]})}),s.jsx("div",{className:"col-3 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Beta"}),s.jsx("p",{children:d.data.data.totalBetAmounts.big.toFixed(2)})]})}),s.jsx("div",{className:"col-3 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Alpha"}),s.jsx("p",{children:d.data.data.totalBetAmounts.small.toFixed(2)})]})})]})]}),t&&s.jsxs(s.Fragment,{children:["  ",s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("h2",{className:"heading",children:"Rise Up"})})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-4 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Total Betting Amount on Alpha"}),s.jsx("p",{children:t.data.data.totalBetAmounts.A.toFixed(2)})]})}),s.jsx("div",{className:"col-4 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Total Betting Amount on Beta"}),s.jsx("p",{children:t.data.data.totalBetAmounts.B.toFixed(2)})]})}),s.jsx("div",{className:"col-4 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Total Betting Amount on Gamma"}),s.jsx("p",{children:t.data.data.totalBetAmounts.C.toFixed(2)})]})}),s.jsx("div",{className:"col-4 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Alpha"}),s.jsx("p",{children:t.data.data.todayBetAmounts.A.toFixed(2)})]})}),s.jsx("div",{className:"col-4 ",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Beta"}),s.jsx("p",{children:t.data.data.todayBetAmounts.B.toFixed(2)})]})}),s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"admin-home-box",children:[s.jsx("h5",{children:"Today Betting Amount on Gamma"}),s.jsx("p",{children:t.data.data.todayBetAmounts.C.toFixed(2)})]})})]})]})]})})]})]})}export{y as default};
