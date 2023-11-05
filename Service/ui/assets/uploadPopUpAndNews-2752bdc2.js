import{r as n,d as U,h as _,j as s}from"./index-70e3bcd7.js";/* empty css                  */import{A as L,S as R}from"./Side-3a346d97.js";import{a as o}from"./axios-4a70c6fc.js";import{I as O,_ as l}from"./index-4ecd74d8.js";const i={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function M(){n.useState(-1);const[Q,v]=n.useState(null),k=Array(10).fill({name:"",winningAmount:0}),[c,u]=n.useState(k),[d,b]=n.useState(0),[m,h]=n.useState(""),[p,w]=n.useState(0),[g,S]=n.useState(0),[x,N]=n.useState(0),[T,y]=n.useState(null),r=U(_),[j,f]=n.useState(""),D=e=>{const t=e.target.files[0];y(t)},A=async()=>{const e=new FormData;e.append("image",T),console.log(e);try{let t=r.authToken;const a=await o.post("https://cosmotrade.live/api/admin/uploads",e,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"multipart/form-data"}});if(a.status===201)return l.success("Image uploaded!",{...i}),y(null),a}catch(t){t.response?t.response.data.message:t.message}},C=async e=>{e.preventDefault();try{let t=r.authToken;const a=await o.post("https://cosmotrade.live/api/admin/articles",{newsText:j},{headers:{Authorization:`Bearer ${t}`}});if(a.status===201)return l.success("News updated!",{...i}),f(""),a}catch(t){t.response?t.response.data.message:t.message}},W=async()=>{try{let e=r.authToken;const t=await o.delete("https://cosmotrade.live/api/admin/deleteImage",{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return l.success("Pop up image deleted!",{...i}),t}catch(e){e.response?e.response.data.message:e.message}},B=async()=>{try{let e=r.authToken;const t=await o.get("https://cosmotrade.live/api/admin/getWinningDocument",{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return v(t.data.documents),console.log(t.data.documents),t}catch(e){e.response?e.response.data.message:e.message}},$=async()=>{try{let e=r.authToken;const t=await o.post("https://cosmotrade.live/api/admin/fakePlayers",{totalPlayers:d,TotalBetting:p,onlinePlayers:g,todayTotalWithdrawal:x},{headers:{Authorization:`Bearer ${e}`}});if(t.status===201)return l.success("Successfully Updated!",{...i}),t}catch(e){e.response?e.response.data.message:e.message}},E=async()=>{try{let e=r.authToken;const t=await o.post("https://cosmotrade.live/api/admin/bankName",{bankName:m},{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return l.success("Bank Name Successfully Created!",{...i}),h(""),t}catch(e){e.response?e.response.data.message:e.message}},P=async()=>{try{let e=r.authToken;const t=await o.post("https://cosmotrade.live/api/admin/winningDoument",{documents:c},{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return l.success("Winners Successfully Created!",{...i}),u(null),t}catch(e){e.response?e.response.data.message:e.message}},I=async()=>{try{let e=r.authToken;const t=await o.delete("https://cosmotrade.live/api/admin/deleteWinningDocument",{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return l.success("Previous Winners Successfully Deleted!",{...i}),t}catch(e){e.response?e.response.data.message:e.message}},z=(e,t)=>{const a=[...c];a[e]={...a[e],name:t.target.value},u(a)},F=(e,t)=>{const a=[...c];a[e]={...a[e],winningAmount:parseInt(t.target.value,10)},u(a)};return n.useEffect(()=>{B()},[]),s.jsxs("div",{children:[s.jsx(L,{}),s.jsxs("div",{className:"flex-div",children:[s.jsx(R,{}),s.jsxs("div",{className:"admin-rightSection",children:[s.jsx(O,{}),s.jsxs("form",{onSubmit:C,className:"form-rechrge",children:[s.jsx("h3",{className:"text-centre",children:"Submit News"}),s.jsx("label",{children:"Enter Latest news"}),s.jsx("input",{type:"text",value:j,placeholder:"Enter News",onChange:e=>{f(e.target.value)}}),s.jsx("button",{type:"submit",children:"Submit"})]}),s.jsxs("div",{className:"form-rechrge",children:[s.jsx("h3",{className:"text-centre",children:"Upload Promo Image"}),s.jsx("label",{children:"Select Image"}),s.jsx("input",{type:"file",accept:".jpg, .jpeg, .png, .svg",onChange:D}),s.jsx("button",{onClick:A,children:"Submit"}),s.jsx("button",{onClick:W,style:{background:"red"},children:"Delete"})]}),s.jsxs("div",{className:"form-rechrge",children:[s.jsx("h3",{className:"text-centre",children:"Update Players & Total Withdraw"}),s.jsx("label",{htmlFor:"",children:"Enter Total Players "}),s.jsx("input",{type:"number",onChange:e=>{b(e.target.value)},placeholder:"Enter Total Players",value:d}),s.jsx("label",{htmlFor:"",children:"Enter Total Betting "}),s.jsx("input",{type:"number",onChange:e=>{w(e.target.value)},placeholder:"Enter Total Betting",value:p}),s.jsx("label",{htmlFor:"",children:"Enter Total Online Players"}),s.jsx("input",{type:"number",onChange:e=>{S(e.target.value)},placeholder:"Enter onlinePlayers",value:g}),s.jsx("label",{htmlFor:"",children:"Enter Total Withdraw "}),s.jsx("input",{type:"number",onChange:e=>{N(e.target.value)},placeholder:"Enter Total Withdraw",value:x}),s.jsx("button",{onClick:$,children:"Submit"})]}),s.jsxs("div",{className:"form-rechrge",children:[s.jsx("h3",{className:"text-centre",children:"Add Bank Name"}),s.jsx("label",{htmlFor:"",children:"Enter Bank Name"}),s.jsx("input",{type:"text",onChange:e=>{h(e.target.value)},placeholder:"Enter Bank Name",value:m}),s.jsx("button",{onClick:E,children:"Submit"})]}),s.jsxs("div",{className:"form-rechrge",children:[s.jsx("h2",{children:"Enter Winner IDs, Names, and Winning Amounts"}),s.jsx("form",{children:c&&c.map((e,t)=>s.jsxs("div",{className:"winner-input",children:[s.jsx("input",{type:"text",placeholder:`Winner ${t+1} Name`,value:e.name,onChange:a=>z(t,a)}),s.jsx("input",{type:"number",placeholder:`Winner ${t+1} Winning Amount`,value:e.winningAmount,onChange:a=>F(t,a),style:{marginLeft:"12rem"}})]},t))}),s.jsx("button",{onClick:()=>{P()},children:"Save Documents"}),s.jsx("button",{onClick:()=>{I()},style:{background:"red"},children:"Delete Previous Data"})]})]})]})]})}export{M as default,i as toastProps};