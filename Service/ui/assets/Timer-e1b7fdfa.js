import{f as m,b as n,R as f,r as c,j as a}from"./index-fd44721e.js";import{c as v,S as x}from"./Second-a5dc0811.js";const y="/assets/LogoInner-47784d4a.svg",_="/assets/clock 1-e08ec899.svg",j="/assets/audio-08713a17.svg",R="/assets/mute-56f0bef5.svg",b="/assets/icon-alpha-238a33ad.svg",w="/assets/icon-beta-4ef108b5.svg",S="/assets/count-a05f5f45.mp3";const g=m({key:"PlaySound",default:!0}),A=()=>{const o=n(v),i=n(g),[r,s]=f(x),[l,u]=c.useState(5);c.useEffect(()=>{o===5&&s(!0);const e=setInterval(()=>{u(t=>t>0?(i===!0&&d(),t-1):(clearInterval(e),s(!1),t))},1e3);return()=>{clearInterval(e),s(!1)}},[r,s,o]);const d=()=>{new Audio(S).play()};return a.jsx("div",{className:"coutDown-container",children:a.jsx("div",{id:"timer",className:"timer",children:a.jsx("div",{className:"digit",children:`00:0${Math.max(l,0)}`})})})};export{b as A,w as B,g as P,A as T,j as a,_ as c,y as l,R as m};