import{d as c,h as d,r as l,j as e}from"./index-be84e0db.js";/* empty css                  */import{A as m,S as p}from"./Side-68c2372f.js";import{a as u}from"./axios-4a70c6fc.js";import{I as x,_ as h}from"./index-fa9b3787.js";const f={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function b(){const n=c(d),[a,r]=l.useState(""),i=async s=>{s.preventDefault();try{let t=n.authToken;const o=await u.post("https://cosmotrade.live/api/admin/articles",{newsText:a},{headers:{Authorization:`Bearer ${t}`}});if(o.status===201)return h.success("News updated!",{...f}),r(""),o}catch(t){t.response?t.response.data.message:t.message}};return e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(p,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(x,{}),e.jsxs("form",{onSubmit:i,className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit News"}),e.jsx("label",{children:"Enter Latest news"}),e.jsx("input",{type:"text",value:a,placeholder:"Enter News",onChange:s=>{r(s.target.value)}}),e.jsx("button",{type:"submit",children:"Submit"})]})]})]})]})}export{b as default,f as toastProps};
