import{r as e,j as t,c as s,B as n,C as a,T as r,a as i,I as l,P as o,R as c,b as d,A as h,F as u,d as p,S as x,M as m,e as g,D as f,f as v,g as j,h as y,i as b,k as z,L as C,l as w,u as k,m as S}from"./vendor-Dke9GD8G.js";class M extends Error{}function A(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(e){return decodeURIComponent(atob(e).replace(/(.)/g,((e,t)=>{let s=t.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s})))}(t)}catch(s){return atob(t)}}M.prototype.name="InvalidTokenError";const H="https://c3d9fde3531e.vps.myjino.ru",$=H.includes("localhost")?H:H.replace("http://","https://");async function T(e,t="GET",s,n=!0){const a={method:t,headers:n?{Authorization:`Bearer ${localStorage.getItem("access_token")}`,"Content-Type":"application/json"}:{"Content-Type":"application/json"},body:s?JSON.stringify(s):void 0,redirect:"follow"},r=await fetch(`${$}${e}`,a);if(!r.ok){401===r.status&&(localStorage.removeItem("access_token"),window.location.href="/login");const e=await r.text();throw new Error(`API error (${r.status}): ${e}`)}const i=await r.text();return i?JSON.parse(i):{}}async function I(e,t,s=!0){const n=s?{Authorization:`Bearer ${localStorage.getItem("access_token")}`}:{},a=new FormData;a.append("file",t);const r={method:"POST",headers:n,body:a},i=await fetch(`${$}${e}`,r);if(!i.ok){401===i.status&&(localStorage.removeItem("access_token"),window.location.href="/login");const e=await i.text();throw new Error(`API error (${i.status}): ${e}`)}return i.json()}const L={auth:{telegramWebApp:async e=>T("/auth/telegram/webapp","POST",e,!1),telegramWidget:async e=>T("/auth/telegram/widget","POST",e,!1),me:async()=>T("/auth/me")},users:{getAll:async(e=0,t=100,s,n)=>{let a=`/users/?skip=${e}&limit=${t}`;return s&&(a+=`&search=${encodeURIComponent(s)}`),n&&(a+=`&role=${encodeURIComponent(n)}`),T(a)},getById:async e=>T(`/users/${e}`),updateRole:async(e,t)=>T(`/users/${e}`,"PATCH",t),getCount:async()=>T("/users/count")},tags:{getAll:async(e=0,t=100)=>T(`/tags/?skip=${e}&limit=${t}`),getById:async e=>T(`/tags/${e}`),create:async e=>T("/tags/","POST",e),update:async(e,t)=>T(`/tags/${e}`,"PATCH",t),delete:async e=>T(`/tags/${e}`,"DELETE"),getCount:async()=>T("/tags/count")},tasks:{getAll:async(e=0,t=100,s,n)=>{let a=`/tasks/?skip=${e}&limit=${t}`;return s&&(a+=`&search=${encodeURIComponent(s)}`),n&&(a+=`&tag_ids=${encodeURIComponent(n)}`),T(a)},getById:async e=>T(`/tasks/${e}`),create:async e=>T("/tasks/","POST",e),update:async(e,t)=>T(`/tasks/${e}`,"PUT",t),delete:async e=>T(`/tasks/${e}`,"DELETE"),getCount:async()=>T("/tasks/count")},works:{getAll:async(e=0,t=100,s,n,a)=>{let r=`/works/?skip=${e}&limit=${t}`;return s&&"all"!==s&&(r+=`&status=${encodeURIComponent(s)}`),n&&(r+=`&student_id=${encodeURIComponent(n)}`),a&&(r+=`&teacher_id=${encodeURIComponent(a)}`),T(r)},getById:async e=>T(`/works/${e}`),create:async e=>T("/works/","POST",e),update:async(e,t)=>T(`/works/${e}`,"PUT",t),delete:async e=>T(`/works/${e}`,"DELETE"),getCount:async()=>T("/works/count"),updateTaskStatus:async(e,t,s)=>T(`/works/${e}/tasks/${t}/status`,"PUT",s)},contracts:{getAll:async(e=0,t=100,s)=>{let n=`/contracts/?skip=${e}&limit=${t}`;return s&&(n+=`&status=${encodeURIComponent(s)}`),T(n)},getById:async e=>T(`/contracts/${e}`),create:async e=>T("/contracts/","POST",e),update:async(e,t)=>T(`/contracts/${e}`,"PUT",t),updateStatus:async(e,t)=>T(`/contracts/${e}`,"PATCH",t),getCount:async()=>T("/contracts/count")},files:{uploadImage:async e=>I("/files/image",e),uploadAudio:async e=>I("/files/audio",e),getAudioUrl:async(e,t=!1)=>T(`/files/audio/${e}?redirect=${t}`)}},E=()=>localStorage.getItem("access_token"),V=e=>localStorage.setItem("access_token",e),R=()=>localStorage.removeItem("access_token"),W=e.createContext({user:null,isAuthenticated:!1,isLoading:!0,error:null,logout:()=>{},authenticateWithTelegramWebApp:async()=>{},authenticateWithTelegramWidget:async()=>{},telegramWebApp:null,getAccessToken:()=>null,setAccessToken:()=>{},removeAccessToken:()=>{}}),P=({children:s})=>{const[n,a]=e.useState(null),[r,i]=e.useState(!1),[l,o]=e.useState(!0),[c,d]=e.useState(null),h=e.useCallback((()=>{var e,t;return"undefined"!=typeof window&&(null==(e=window.Telegram)?void 0:e.WebApp)&&(null==(t=window.Telegram)?void 0:t.WebApp.initData)?window.Telegram.WebApp:null}),[]),u=e.useCallback((()=>E()),[]),p=e.useCallback((e=>{V(e)}),[]),x=e.useCallback((()=>{R()}),[]),m=e.useCallback((()=>{x(),a(null),i(!1)}),[x]),g=e.useCallback((async()=>{try{const e=await L.auth.me();e&&(a(e),i(!0))}catch(e){throw d(e||"Failed to fetch user data. Please try again."),e}}),[]),f=e.useCallback((e=>{try{const t=function(e,t){if("string"!=typeof e)throw new M("Invalid token specified: must be a string");t||(t={});const s=!0===t.header?0:1,n=e.split(".")[s];if("string"!=typeof n)throw new M(`Invalid token specified: missing part #${s+1}`);let a;try{a=A(n)}catch(r){throw new M(`Invalid token specified: invalid base64 for part #${s+1} (${r.message})`)}try{return JSON.parse(a)}catch(r){throw new M(`Invalid token specified: invalid json for part #${s+1} (${r.message})`)}}(e),s=Date.now()/1e3;return Boolean(t.exp&&t.exp>s)}catch{return!1}}),[]),v=e.useCallback((async()=>{o(!0),d(null);const e=h();if(!e)return d("Telegram WebApp not available. Please try opening the app from Telegram."),void o(!1);if(!e.initData)return d("No authentication data available from Telegram."),void o(!1);try{const t={init_data:e.initData},s=await L.auth.telegramWebApp(t);p(s.access_token),await g()}catch(t){d("Failed to authenticate with Telegram WebApp: "+(t instanceof Error?t.message:String(t)))}finally{o(!1)}}),[g,h,p]),j=e.useCallback((async e=>{o(!0),d(null);try{const t=await L.auth.telegramWidget(e);p(t.access_token),await g()}catch(t){d("Failed to authenticate with Telegram Widget: "+(t instanceof Error?t.message:String(t)))}finally{o(!1)}}),[g,p]),y=e.useCallback((async()=>{o(!0),d(null);try{const e=u();if(!e){const e=h();return(null==e?void 0:e.initData)&&await v(),void o(!1)}if(!f(e))return m(),void o(!1);await g()}catch(e){d("Authentication error: "+(e instanceof Error?e.message:String(e)))}finally{o(!1)}}),[m,g,h,f,v,u]);e.useEffect((()=>{y()}),[y]);const b=e.useCallback((()=>{m()}),[m]);return t.jsx(W.Provider,{value:{user:n,isAuthenticated:r,isLoading:l,error:c,logout:b,authenticateWithTelegramWebApp:v,authenticateWithTelegramWidget:j,telegramWebApp:h(),getAccessToken:u,setAccessToken:p,removeAccessToken:x},children:s})},B=()=>e.useContext(W),_=s(t.jsx("path",{d:"M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"}),"AccountBalance"),U=s(t.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),D=s(t.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4z"}),"AddComment"),O=s(t.jsx("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"}),"Archive"),F=s(t.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),Q=s(t.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment"),N=s(t.jsx("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile"),q=s(t.jsx("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4"}),"AttachMoney"),G=s(t.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4zm-3-4V3.5L18.5 9z"}),"AudioFile"),K=s(t.jsx("path",{d:"m2 22 14-5-9-9zm12.53-9.47 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76m7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0m-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77"}),"Celebration"),J=s(t.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Y=s(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),Z=s(t.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),X=s(t.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ee=s(t.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Comment"),te=s(t.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),se=s(t.jsx("path",{d:"M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"}),"CopyAll"),ne=s(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),ae=s(t.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description"),re=s(t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),ie=s(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error"),le=s(t.jsx("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList"),oe=s(t.jsx("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"}),"FormatBold"),ce=s(t.jsx("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}),"FormatItalic"),de=s(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help"),he=s(t.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),ue=s(t.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),pe=s(t.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),xe=s(t.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp"),me=s(t.jsx("path",{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}),"KeyboardReturn"),ge=s(t.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link"),fe=s(t.jsx("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List"),ve=s(t.jsx("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7"}),"LocalOffer"),je=s(t.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"}),"Lock"),ye=s(t.jsx("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"}),"Mic"),be=s(t.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),ze=s(t.jsx("path",{d:"M6 19h4V5H6zm8-14v14h4V5z"}),"Pause"),Ce=s(t.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People"),we=s(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),ke=s(t.jsx("path",{d:"M8 5v14l11-7z"}),"PlayArrow"),Se=s(t.jsx("path",{d:"M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z"}),"PlaylistAdd"),Me=s(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked"),Ae=s(t.jsx("path",{d:"M18 17H6v-2h12zm0-4H6v-2h12zm0-4H6V7h12zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2z"}),"Receipt"),He=s(t.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School"),$e=s(t.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),Te=s(t.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),Ie=s(t.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),Le=s(t.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),Ee=({message:e="Loading..."})=>t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"200px",width:"100%",children:[t.jsx(a,{color:"primary",size:40,thickness:4}),e&&t.jsx(r,{variant:"body1",color:"textSecondary",sx:{mt:2},children:e})]}),Ve=({title:e,actionButton:s,onClose:a})=>t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:4,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[t.jsx(r,{variant:"h4",component:"h1",children:e}),t.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[s&&t.jsx(i,{variant:"contained",startIcon:s.icon,onClick:s.onClick,sx:{mr:a?1:0},children:s.label}),a&&t.jsx(l,{onClick:a,children:t.jsx(X,{})})]})]}),Re=({size:e=24,color:s="#2AABEE"})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 240 240",fill:"none",children:[t.jsx("path",{d:"M120 240c66.274 0 120-53.726 120-120S186.274 0 120 0 0 53.726 0 120s53.726 120 120 120Z",fill:s}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55 117.45c31.733-13.9 52.933-23.05 63.6-27.45 30.35-12.5 36.65-14.65 40.75-14.7 9.025-.075 5.95 20 3.6 30.45-.6 2.7-4.05 23.55-7.35 43.25-2.2 13.25-6.5 14.85-10.7 9.65-4.5-5.6-14.5-17.85-16.65-20.5-12.25-15.05-7.8-17.05.85-28.1 2.25-2.9 11.55-16.55 12.1-19.65.05-3.1-1.7-3.65-4.9-1.15-2.55 2-16.6 10.5-39.15 25.5-4.95 3.2-9.4 4.75-13.35 4.65-4.4-.1-12.85-2.5-19.15-4.55-7.7-2.5-8.85-3.75-6.95-8.95.5-1.35 4.2-4.4 11.05-9.45Z",fill:"#fff"})]}),We=({direction:e="horizontal",spacing:s=2,color:a="divider"})=>t.jsx(n,{sx:{width:"horizontal"===e?"100%":1,height:"vertical"===e?"100%":1,backgroundColor:a,my:"horizontal"===e?s:0,mx:"vertical"===e?s:0}}),Pe=({onConfirm:s,buttonText:a="Delete",message:c="Are you sure?",isIconButton:d=!1,buttonColor:h="error"})=>{const[u,p]=e.useState(null),x=e=>{e.stopPropagation(),p(e.currentTarget)},m=()=>{p(null)},g=Boolean(u),f=g?"confirm-delete-popover":void 0;return t.jsxs(t.Fragment,{children:[d?t.jsx(l,{"aria-describedby":f,onClick:x,size:"small",color:h,sx:{padding:"2px","&:hover":{backgroundColor:"error"===h?"rgba(211, 47, 47, 0.04)":void 0}},children:t.jsx(X,{fontSize:"small"})}):t.jsx(i,{"aria-describedby":f,variant:"outlined",color:h,onClick:x,startIcon:t.jsx(ne,{}),size:"small",children:a}),t.jsx(o,{id:f,open:g,anchorEl:u,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},sx:{"& .MuiPopover-paper":{borderRadius:1,boxShadow:2,p:1}},children:t.jsxs(n,{sx:{p:1,maxWidth:200},children:[t.jsx(r,{variant:"body2",sx:{mb:1},children:c}),t.jsxs(n,{sx:{display:"flex",justifyContent:"flex-end",gap:1},children:[t.jsx(i,{variant:"text",size:"small",onClick:m,children:"No"}),t.jsx(i,{variant:"contained",color:"error",size:"small",onClick:e=>{e.stopPropagation(),s(),m()},children:"Yes"})]})]})})]})},Be=c.createContext({registerQuiz:()=>{},unregisterQuiz:()=>{},hasQuizzes:!1}),_e=({children:s,hasQuizzes:a})=>{const r=e.useRef(new Map),l=e.useCallback(((e,t)=>{r.current.set(e,t)}),[]),o=e.useCallback((e=>{r.current.delete(e)}),[]),c=e.useCallback((()=>{r.current.forEach((e=>e()))}),[]);return t.jsxs(Be.Provider,{value:{registerQuiz:l,unregisterQuiz:o,hasQuizzes:a},children:[s,a&&t.jsx(n,{sx:{mt:2,display:"flex",justifyContent:"center"},children:t.jsx(i,{variant:"contained",color:"primary",onClick:c,startIcon:t.jsx(Y,{}),children:"Validate Answers"})})]})},Ue=({hiddenText:s})=>{const[a,r]=e.useState(""),[l,o]=e.useState(!0),[c,d]=e.useState("editing"),[h,x]=e.useState(0),m=e.useRef(null),g=e.useRef(null),{registerQuiz:f,unregisterQuiz:v}=e.useContext(Be),j=e.useRef(`spoiler-${Math.random().toString(36).substr(2,9)}`);e.useEffect((()=>{if(g.current){const e=g.current.offsetWidth;x(1.2*e)}}),[s]);const y=e.useCallback((()=>{a.trim().toLowerCase()===s.trim().toLowerCase()?(d("success"),o(!1)):d("error")}),[a,s]);e.useEffect((()=>(f(j.current,y),()=>v(j.current))),[f,v,y]);return t.jsxs(n,{className:"spoiler-quiz","data-validate":"validate",sx:{display:"inline-flex",alignItems:"center",position:"relative",mx:.5,my:.5,minWidth:"120px"},children:[t.jsx(n,{ref:g,sx:{position:"absolute",visibility:"hidden",whiteSpace:"nowrap",fontSize:"inherit",fontFamily:"inherit",padding:"0 6px"},children:s}),t.jsxs(n,{sx:{position:"relative",display:"flex",alignItems:"center"},children:[t.jsx(u,{size:"small",error:"error"===c,sx:{width:h||80,minWidth:80,".MuiInputBase-root":{height:"28px",fontSize:"inherit",fontFamily:"inherit",color:"success"===c||"error"===c?"inherit":"revealed"===c?"warning.main":"inherit",padding:"0 6px",border:"1px solid",borderColor:"error"===c?"error.main":"success"===c?"success.main":"revealed"===c?"warning.main":"divider",borderRadius:1,"&:hover":{borderColor:l?"error"===c?"error.main":"primary.main":void 0},"&.Mui-focused":{borderColor:l?"error"===c?"error.main":"primary.main":void 0}}},children:t.jsx(p,{inputRef:m,value:l?a:s,onChange:e=>{r(e.target.value),"error"===c&&d("editing")},onKeyPress:e=>{"Enter"===e.key&&a&&y()},onBlur:()=>{a&&y()},placeholder:"?",size:"small",disabled:!l,autoComplete:"off",sx:{"&:before, &:after":{display:"none"}}})}),t.jsx(n,{sx:{display:"flex",ml:1},children:t.jsx(i,{size:"small",color:"secondary",onClick:()=>{o(!1),d("revealed")},disabled:!l,sx:{minWidth:"auto",padding:"0px 6px",height:"28px",fontSize:"0.7rem"},children:"?"})})]})]})},De=({correctAnswer:s,options:a})=>{const[r,l]=e.useState(""),[o,c]=e.useState(!0),[d,h]=e.useState("editing"),[p,f]=e.useState([]),[v,j]=e.useState(0),y=e.useRef(null),b=e.useRef(null),{registerQuiz:z,unregisterQuiz:C}=e.useContext(Be),w=e.useRef(`multichoice-${Math.random().toString(36).substr(2,9)}`);e.useEffect((()=>{const e=[...a].sort((()=>Math.random()-.5)),t=Array.from(new Set(e));f(t)}),[a]),e.useEffect((()=>{y.current&&o&&j(y.current.offsetWidth)}),[o]);const k=e.useCallback((()=>{r.trim()===s.trim()?(h("success"),c(!1)):h("error")}),[r,s]);e.useEffect((()=>(z(w.current,k),()=>C(w.current))),[z,C,k]);return t.jsx(n,{className:"multi-choice-quiz","data-correct-answer":s,"data-validate":"validate",sx:{display:"inline-flex",alignItems:"center",position:"relative",mx:.5,my:.5,minWidth:"120px",width:!o&&v?`${v}px`:"auto"},children:o?t.jsxs(n,{ref:y,sx:{position:"relative",display:"flex",alignItems:"center"},children:[t.jsx(u,{size:"small",error:"error"===d,sx:{minWidth:120,".MuiSelect-select":{padding:"2px 6px",fontSize:"0.875rem"}},children:t.jsxs(x,{ref:b,value:r,onChange:e=>{const t=e.target.value;l(t),"error"===d&&h("editing")},displayEmpty:!0,variant:"outlined",autoComplete:"off",sx:{height:"28px",fontSize:"inherit",backgroundColor:"error"===d?"error.lighter":"transparent"},children:[t.jsx(m,{value:"",disabled:!0,children:"?"}),p.map(((e,s)=>t.jsx(m,{value:e,children:e},s)))]})}),t.jsx(n,{sx:{display:"flex",ml:1},children:t.jsx(i,{size:"small",color:"secondary",onClick:()=>{c(!1),h("revealed")},sx:{minWidth:"auto",padding:"0px 6px",height:"28px",fontSize:"0.7rem"},children:"?"})})]}):t.jsx(n,{sx:{width:"100%"},children:t.jsx(g,{size:"small",icon:"success"===d?t.jsx(Y,{fontSize:"small"}):"error"===d?t.jsx(ie,{fontSize:"small"}):t.jsx(de,{fontSize:"small"}),label:s,color:"success"===d?"success":"error"===d?"error":"warning",variant:"outlined",sx:{display:"inline-flex",width:"100%",justifyContent:"flex-start"}})})})},Oe=({text:e})=>{const s=(()=>{if(!e)return[];return e.split(/\n\s*\n/).map(((e,s)=>{let n=(e=>{const s=/\*\*(.*?)\*\*/g;let n,a=0;const r=[];for(;null!==(n=s.exec(e));)n.index>a&&r.push(e.substring(a,n.index)),r.push(t.jsx("strong",{children:n[1]},`bold-${n.index}`)),a=n.index+n[0].length;return a<e.length&&r.push(e.substring(a)),r})(e);return n=n.map(((e,s)=>{if("string"!=typeof e)return e;const n=/\*(.*?)\*/g;let a,r=0;const i=[];for(;null!==(a=n.exec(e));){const n=e[a.index-1],l=e[a.index+1];"*"!==n&&"*"!==l?(a.index>r&&i.push(e.substring(r,a.index)),i.push(t.jsx("em",{children:a[1]},`italic-${s}-${a.index}`)),r=a.index+a[0].length):(i.push(e.substring(r,a.index+1)),r=a.index+1)}return r<e.length&&i.push(e.substring(r)),1===i.length?i[0]:i})).flat(),n=(e=>e.map(((e,s)=>{if("string"!=typeof e)return e;const n=/~~(.*?)~~/g;let a,r=0;const i=[];for(;null!==(a=n.exec(e));)a.index>r&&i.push(e.substring(r,a.index)),i.push(t.jsx("del",{children:a[1]},`strike-${s}-${a.index}`)),r=a.index+a[0].length;return r<e.length&&i.push(e.substring(r)),1===i.length?i[0]:i})).flat())(n),n=(e=>e.map(((e,s)=>{if("string"!=typeof e)return e;const n=/\|\|(.*?)\|\|/g;let a,r=0;const i=[];for(;null!==(a=n.exec(e));)a.index>r&&i.push(e.substring(r,a.index)),i.push(t.jsx(Ue,{hiddenText:a[1]},`spoiler-${s}-${a.index}`)),r=a.index+a[0].length;return r<e.length&&i.push(e.substring(r)),1===i.length?i[0]:i})).flat())(n),n=(e=>e.map(((e,s)=>{if("string"!=typeof e)return e;const n=/\[\[(.*?)\]\]/g;let a,r=0;const i=[];for(;null!==(a=n.exec(e));){a.index>r&&i.push(e.substring(r,a.index));const n=a[1],l=n.split("|");if(l.length>=2){const e=l[0].trim(),n=[...l];i.push(t.jsx(De,{correctAnswer:e,options:n},`multichoice-${s}-${a.index}`))}else i.push(n);r=a.index+a[0].length}return r<e.length&&i.push(e.substring(r)),1===i.length?i[0]:i})).flat())(n),t.jsx("p",{children:n},`p-${s}`)}))})();return t.jsx(n,{sx:{whiteSpace:"pre-wrap",wordBreak:"break-word","& strong, & b":{fontWeight:"bold"},"& em, & i":{fontStyle:"italic"},"& del, & s":{textDecoration:"line-through"}},children:s})},Fe=({task:s,note:a,urlHeight:l,urlMaxHeight:o})=>{var c;const h=e.useRef(null),u=e.useRef(null),p=e.useRef(null),[x,m]=e.useState(null),[g,f]=e.useState(!1),[v,j]=e.useState(!1),y=null==(c=s.url)?void 0:c.includes("/files/audio/");e.useEffect((()=>{p.current&&(v?p.current.play():p.current.pause())}),[v]);return e.useEffect((()=>{if(s.text){const e=/\|\|.*?\|\|/.test(s.text),t=/\[\[.*?\]\]/.test(s.text);f(e||t)}}),[s.text]),e.useEffect((()=>{if(!l&&s.url&&h.current&&u.current){const e=()=>{var e,t;const s=(null==(e=u.current)?void 0:e.clientHeight)||0,n=(null==(t=h.current)?void 0:t.clientHeight)||0,a=Math.max(s-n-40,350);m(`${a}px`)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}}),[l,s.url,s.text]),t.jsxs(n,{ref:u,sx:{height:"100%",display:"flex",flexDirection:"column"},children:[a&&t.jsx(d,{variant:"outlined",sx:{p:2,backgroundColor:"primary.lighter",borderColor:"primary.light"},children:t.jsx(r,{variant:"body2",children:a})}),t.jsxs(n,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[s.text&&t.jsx(n,{ref:h,sx:{mb:3},children:t.jsx(_e,{hasQuizzes:g,children:t.jsx(Oe,{text:s.text})})}),y?t.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:1,p:2,justifyContent:"center"},children:[t.jsx("audio",{ref:p,src:s.url||"",onEnded:()=>j(!1),style:{display:"none"}}),t.jsx(i,{onClick:()=>{y&&j(!v)},variant:"contained",color:"primary",startIcon:v?t.jsx(ze,{}):t.jsx(ke,{}),children:v?"Pause":"Play"})]}):s.url?t.jsx(Qe,{url:s.url,height:l||x||"100%",maxHeight:o}):null]})]})},Qe=({url:s,maxHeight:r,height:l="calc(100vh - 350px)"})=>{const[o,c]=e.useState(!0),[d,u]=e.useState(!1),[p,x]=e.useState(null);e.useEffect((()=>{var e;u((e=s,[".jpg",".jpeg",".png",".gif",".webp",".svg"].some((t=>e.toLowerCase().endsWith(t)))))}),[s]);const m=e.useCallback((()=>{c(!1),x(null)}),[]),g=e.useCallback((()=>{c(!1),x("Failed to load content. Please check the URL.")}),[]);return t.jsxs(n,{sx:{mt:2,position:"relative",height:l,minHeight:200,maxHeight:r,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper",borderRadius:1,border:1,borderColor:"divider",flexGrow:1},children:[o&&t.jsx(n,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"action.hover",borderRadius:1},children:t.jsx(a,{})}),p?t.jsxs(h,{severity:"error",sx:{mt:2},children:[p,t.jsx(i,{component:"a",href:s,target:"_blank",rel:"noopener noreferrer",size:"small",sx:{ml:2},children:"Open URL"})]}):d?t.jsx(n,{component:"img",src:s,alt:"Task content",onLoad:m,onError:g,sx:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",display:o?"none":"block",borderRadius:1}}):t.jsx(n,{sx:{width:"100%",height:"100%",display:o?"none":"block"},children:t.jsx("iframe",{src:s,title:"Task content",width:"100%",height:"100%",style:{border:"none",display:"block"},onLoad:m,onError:g,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:"allow-scripts allow-same-origin allow-forms"})})]})},Ne={"@keyframes pulse":{"0%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(1.2)",opacity:.7},"100%":{transform:"scale(1)",opacity:1}},animation:"pulse 1.5s infinite"},qe=({value:s,onChange:r,label:o="URL (optional)",error:c=!1,helperText:d,disabled:h=!1,compact:u=!1})=>{const[p,x]=e.useState(null),[g,k]=e.useState(!1),[S,M]=e.useState(null),[A,H]=e.useState(!1),[T,I]=e.useState([]),[E,V]=e.useState(!1),R=e.useRef(null),[W,P]=e.useState(!1),B=e.useRef(null),_=e.useRef(null),U=null==s?void 0:s.includes("/files/audio/"),D=(null==s?void 0:s.includes("imgur.com"))||(null==s?void 0:s.includes(".png"))||(null==s?void 0:s.includes(".jpg"))||(null==s?void 0:s.includes(".jpeg"));e.useEffect((()=>{R.current&&(E?R.current.play():R.current.pause())}),[E]);const O=()=>{U&&V(!E)},F=()=>{x(null)},Q=async(e,t)=>{var s;const n=null==(s=e.target.files)?void 0:s[0];if(n){k(!0);try{if("image"===t){const e=await L.files.uploadImage(n);r(e.url)}else{const e=await L.files.uploadAudio(n),t=`${$}/files/audio/${e.file_id}?redirect=true`;r(t)}}catch(a){!(a instanceof Error)||a.message}finally{k(!1)}}},q=()=>{s&&(U?O():D?P(!0):window.open(s,"_blank"))};return u&&s?t.jsxs(t.Fragment,{children:[t.jsx(f,{open:W,onClose:()=>P(!1),maxWidth:"md",fullWidth:!0,children:t.jsx(v,{children:t.jsx("img",{src:s,alt:"Preview",style:{width:"100%",height:"auto"}})})}),U&&t.jsx("audio",{ref:R,src:s,onEnded:()=>V(!1),style:{display:"none"}}),t.jsx(j,{title:U?E?"Pause":"Play":D?"View image":"Open link",children:t.jsx(l,{onClick:q,color:"primary",size:"small",disabled:h,children:U?E?t.jsx(ze,{}):t.jsx(ke,{}):D?t.jsx(y,{src:s,variant:"rounded",sx:{width:24,height:24},children:t.jsx(ue,{})}):t.jsx(ge,{})})})]}):t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"file",ref:B,style:{display:"none"},accept:"image/*",onChange:e=>Q(e,"image")}),t.jsx("input",{type:"file",ref:_,style:{display:"none"},accept:"audio/*",onChange:e=>Q(e,"audio")}),U&&t.jsx("audio",{ref:R,src:s||"",onEnded:()=>V(!1),style:{display:"none"}}),t.jsx(b,{margin:"normal",autoComplete:"off",name:"url",label:o,type:"url",fullWidth:!0,variant:"outlined",value:s||"",onChange:e=>r(e.target.value),error:c,helperText:d,disabled:h,sx:{"& .MuiInputBase-input":{visibility:U?"hidden":"visible"}},InputProps:{startAdornment:U?t.jsxs(n,{sx:{display:"flex",alignItems:"center",mr:1},children:[t.jsx(l,{size:"small",onClick:O,color:"primary",sx:{mr:1},children:E?t.jsx(ze,{}):t.jsx(ke,{})}),t.jsx("span",{children:"Audio"})]}):D?t.jsx(n,{sx:{display:"flex",alignItems:"center",mr:1},children:t.jsx(l,{size:"small",onClick:()=>window.open(s||"","_blank"),color:"primary",children:t.jsx(y,{src:s||"",variant:"rounded",sx:{width:32,height:32},children:t.jsx(ue,{})})})}):s?t.jsx(n,{sx:{display:"flex",alignItems:"center",mr:1},children:t.jsx(l,{size:"small",onClick:()=>window.open(s||"","_blank"),color:"primary",children:t.jsx(ge,{})})}):null,endAdornment:t.jsx(n,{children:g?t.jsx(a,{size:20}):A?t.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:1},children:[t.jsx(i,{size:"small",onClick:()=>{S&&A&&(S.stop(),H(!1),S.stream.getTracks().forEach((e=>e.stop())),M(null),I([]),F())},color:"error",startIcon:t.jsx(Z,{}),children:"Cancel"}),t.jsx(ye,{sx:Ne,color:"success"}),t.jsx(i,{size:"small",onClick:async()=>{if(S&&A){if(k(!0),await new Promise((e=>setTimeout(e,3e3))),S.stop(),H(!1),S.stream.getTracks().forEach((e=>e.stop())),0===T.length)return void k(!1);const t=new Blob(T,{type:S.mimeType}),s=new File([t],"voice-recording.ogg",{type:S.mimeType});try{const e=await L.files.uploadAudio(s),t=`${$}/files/audio/${e.file_id}?redirect=true`;r(t)}catch(e){!(e instanceof Error)||e.message}finally{k(!1),M(null),I([])}}},color:"primary",startIcon:t.jsx(Y,{}),children:"Save"})]}):s?t.jsx(j,{title:"Clear URL",children:t.jsx(l,{onClick:()=>{r("")},size:"small",children:t.jsx(Z,{})})}):t.jsxs(t.Fragment,{children:[t.jsx(j,{title:"Attach file",children:t.jsx(l,{onClick:e=>{x(e.currentTarget)},size:"small",children:t.jsx(N,{})})}),t.jsxs(z,{anchorEl:p,open:Boolean(p),onClose:F,children:[t.jsxs(m,{onClick:()=>{var e;null==(e=B.current)||e.click(),F()},children:[t.jsx(C,{children:t.jsx(ue,{fontSize:"small"})}),t.jsx(w,{children:"Upload Image"})]}),t.jsxs(m,{onClick:()=>{var e;null==(e=_.current)||e.click(),F()},children:[t.jsx(C,{children:t.jsx(G,{fontSize:"small"})}),t.jsx(w,{children:"Upload Audio"})]}),t.jsxs(m,{onClick:async()=>{try{const e=["audio/ogg;codecs=opus","audio/ogg","audio/webm;codecs=opus","audio/webm","audio/mp4"];let t="";for(const a of e)if(MediaRecorder.isTypeSupported(a)){t=a;break}const s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,sampleRate:44100,channelCount:1}}),n=new MediaRecorder(s,{mimeType:t||void 0});I([]),n.ondataavailable=e=>{e.data.size>0&&I((t=>[...t,e.data]))},n.start(1e3),M(n),H(!0),F()}catch(e){Error,!(e instanceof Error)||e.message}},children:[t.jsx(C,{children:t.jsx(ye,{fontSize:"small"})}),t.jsx(w,{children:"Record Voice"})]})]})]})})}})]})},Ge=({botName:s,onAuth:n,size:a="large",requestAccess:r="write"})=>(e.useEffect((()=>{let e=document.getElementById("telegram-login-container");e||(e=document.createElement("div"),e.id="telegram-login-container",document.body.appendChild(e)),window.TelegramLoginWidget={dataOnauth:e=>{n(e)}};const t=document.createElement("script");return t.src="https://telegram.org/js/telegram-widget.js?22",t.setAttribute("data-telegram-login",s),t.setAttribute("data-size",a),t.setAttribute("data-request-access",r),t.setAttribute("data-onauth","window.TelegramLoginWidget.dataOnauth(user)"),t.async=!0,e.appendChild(t),()=>{e&&e.contains(t)&&e.removeChild(t)}}),[s,n,a,r]),t.jsx("div",{id:"telegram-login-container"})),Ke=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{authenticateWithTelegramWebApp:s,authenticateWithTelegramWidget:a,isAuthenticated:i,isLoading:l,error:o}=B(),c=k();e.useEffect((()=>{s().catch((()=>{}))}),[s]),e.useEffect((()=>{i&&c("/")}),[i,c]);return t.jsx(S,{maxWidth:"sm",sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[t.jsx(n,{component:"img",src:"/icon-192x192.png",alt:"TeaChear",sx:{width:96,height:96,marginBottom:2}}),t.jsx(r,{component:"h1",variant:"h5",sx:{marginBottom:4},children:"Welcome to Tea Chair!"}),!l&&o&&t.jsx(t.Fragment,{children:t.jsx(Ge,{botName:"tea_chair_bot",onAuth:e=>{a(e)},size:"large",requestAccess:"write"})})]})})}},Symbol.toStringTag,{value:"Module"})),Je=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const e=k();return t.jsx(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 80px)",p:2},children:t.jsxs(d,{elevation:0,sx:{p:4,borderRadius:3,textAlign:"center",maxWidth:400,width:"100%",boxShadow:1},children:[t.jsx(n,{sx:{textAlign:"center",mb:2},children:t.jsx(Re,{size:60,color:"#2AABEE"})}),t.jsx(je,{sx:{fontSize:48,color:"warning.main",mb:2}}),t.jsx(r,{variant:"h5",gutterBottom:!0,children:"Access Denied"}),t.jsx(r,{variant:"body1",color:"textSecondary",sx:{mb:3},children:"You don't have permission to access this page. Please contact your administrator if you believe this is an error."}),t.jsx(i,{variant:"contained",color:"primary",onClick:()=>e("/"),children:"Go to Dashboard"})]})})}},Symbol.toStringTag,{value:"Module"}));export{Q as A,_ as B,Ae as C,ne as D,re as E,le as F,xe as G,pe as H,ee as I,D as J,me as K,Ee as L,be as M,K as N,he as O,Ve as P,Te as Q,P as R,We as S,ve as T,Ce as U,Le as V,He as W,Ke as X,Je as Y,L as a,ke as b,Y as c,Me as d,qe as e,se as f,U as g,X as h,J as i,Se as j,q as k,ae as l,O as m,Z as n,$e as o,ge as p,Fe as q,te as r,F as s,oe as t,B as u,ce as v,fe as w,Ie as x,Pe as y,we as z};
