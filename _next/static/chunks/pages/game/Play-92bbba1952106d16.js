(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{4956:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/Play",function(){return n(6791)}])},6791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var i=n(4848),s=n(3368),o=n.n(s),r=n(8133),a=n.n(r);let l=e=>{let{setCurrentScreen:t,saveData:n,func:s}=e,r=0,l=null,d=e=>document.getElementById(e),c=()=>{var e=new XMLHttpRequest;e.open("HEAD","#",!1),e.send(null),r=new Date(e.getResponseHeader("Date"))-new Date},m=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60),i;i=t<100?"00".concat(t).slice(-2):t;let s="00".concat(n).slice(-2),o="00".concat(e%60).slice(-2);return 0!==t?"".concat(i,":").concat(s,":").concat(o):"".concat(s,":").concat(o)},p=e=>{let t=document.createElement("style");t.textContent=e,document.head.appendChild(t)},u=e=>{l?map.removeLayer(l):(d("guess").innerText="GUESS",d("guess").disabled=null,p(":root{--color3:var(--color1);--color4:var(--color2);}")),l=L.marker(e.latlng).addTo(map)},h=e=>{e.setView([35.4,136],5),e.on("click",u),L.tileLayer("https://www.google.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i693439125!3m12!2sja!3sJP!5e289!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2",{attribution:"\xa9️ <a href='https://www.google.com/maps/' target='_blank'>Google</a>",maxZoom:20,maxNativeZoom:20}).addTo(e),L.control.zoom({position:"bottomleft"}).addTo(e),new ResizeObserver(()=>{e.invalidateSize()}).observe(e._container)},x=()=>{c(),d("view").src="https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1s"+n.p_id+"!2m2!1d0!2d0!3f0!4f0!5f0"},v=()=>{let e=L.map("mapcontainer",{zoomControl:!1});console.log(e),h(e),c(),d("nav_points").innerText="POINTS : "+n.points,d("nav_count").innerText=n.stage+" / 5",e.setView([35.4,136],5);let t=new Date().getTime()+r,i=!1;x(),setInterval(()=>{if(d("view").setAttribute("style","margin-top: -70px !important;"),t){if(0==n.limit){d("timer").innerText="∞";return}let e=Math.floor(n.limit-(new Date().getTime()+r-t)/1e3);e<0?i||(i=!0,guess()):d("timer").innerText=m(e)}},1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.3.0/dist/leaflet.css"})}),(0,i.jsx)(a(),{src:"https://unpkg.com/leaflet@1.3.0/dist/leaflet.js",strategy:"afterInteractive",onLoad:()=>{v()}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:"street",children:(0,i.jsx)("iframe",{id:"view",src:null,style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),(0,i.jsxs)("div",{id:"map",children:[(0,i.jsxs)("div",{id:"size",children:[(0,i.jsx)("button",{title:"地図を縮小",id:"min",children:"↙︎"}),(0,i.jsx)("button",{title:"地図を展開",id:"max",children:"↗︎"}),(0,i.jsx)("button",{title:"地図のサイズを固定",id:"lock",children:"\uD83D\uDD12"})]}),(0,i.jsx)("div",{id:"mapcontainer"}),(0,i.jsx)("button",{id:"guess",className:"buttonRound",disabled:!0,children:"PLACE YOUR PIN ON THE MAP"})]}),(0,i.jsx)("div",{id:"go_to_start",children:(0,i.jsx)("button",{title:"スタートに戻る",id:"back",children:(0,i.jsx)("span",{children:"⚐"})})}),(0,i.jsx)("div",{id:"timer"}),(0,i.jsxs)("div",{id:"navi",children:[(0,i.jsx)("button",{id:"back_home",children:"←"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"FreeGuessr JP"}),(0,i.jsx)("span",{id:"nav_count",children:"1 / 5"}),(0,i.jsx)("span",{id:"nav_points",children:"POINTS : 0"})]})]})]})]})}},3368:(e,t,n)=>{e.exports=n(6085)},8133:(e,t,n)=>{e.exports=n(7610)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(4956)),_N_E=e.O()}]);