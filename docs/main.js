(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{const e=(e,t)=>String(e).padStart(t,"0");let t=new Date;t.setDate(t.getDate()+8),setInterval((()=>{let n=(new Date).getTime(),o=t-n,r=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),d=Math.floor(o%36e5/6e4),c=Math.floor(o%6e4/1e3);document.querySelector(".days").innerHTML=e(r,2),document.querySelector(".hours").innerHTML=e(a,2),document.querySelector(".minutes").innerHTML=e(d,2),document.querySelector(".seconds").innerHTML=e(c,2)}),1e3)}))})();