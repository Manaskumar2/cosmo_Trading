import{u,r as i,j as e}from"./index-5edd455d.js";import{a as g}from"./axios-4a70c6fc.js";import{I as h,_ as c}from"./index-f0a88bba.js";const x="/assets/Logo-22-4d8734f6.png",m={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function w(){const d=u(),[o,n]=i.useState(""),[a,r]=i.useState(""),l=async t=>{t.preventDefault();try{const s=await g.post("https://cosmotrade.live/api/admin/signIn",{phoneNumber:o,password:a});if(s.status===200)return c.success("Welcome Admin",{...m}),console.log(s),sessionStorage.setItem("authToken",JSON.stringify(s.data.data)),n(""),r(""),d("/admin/home"),window.location.reload(),s}catch(s){const p=s.response?s.response.data.message:s.message;c.error(p||"Something went wrong",{...m})}};return e.jsxs("div",{className:"admin-login",children:[e.jsx(h,{}),e.jsxs("form",{onSubmit:l,className:"admin-form",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{src:x,alt:""})}),e.jsx("h2",{children:"Welcome Admin"}),e.jsx("p",{children:"Phone No"}),e.jsx("input",{type:"number",placeholder:"Enter Number",value:o,onChange:t=>{n(t.target.value)}}),e.jsx("p",{children:"Password"}),e.jsx("input",{type:"password",placeholder:"Enter Password",value:a,onChange:t=>{r(t.target.value)}}),e.jsx("br",{}),e.jsx("button",{class:"Btn",type:"submit",children:"LOGIN"})]})]})}export{w as default,m as toastProps};
