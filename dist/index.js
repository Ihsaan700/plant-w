(()=>{var l=document.querySelector("main div.menu-tag_wrapper"),i=document.querySelector("main div.menu-tag_text "),a=document.querySelector("main.main-wrapper"),d=document.querySelector("div.nav_component"),u=function(){a.classList.toggle("is-open"),a.classList.contains("is-open")?i.innerHTML="CLOSE":i.innerHTML="OPEN"},t=document.querySelector("div.home-header_image-wrapper"),n=t.querySelectorAll("img"),e=0,s=1;t.addEventListener("click",function(){e+=1,s+=1,e>n.length-1&&(e=0),n[e].style.zIndex=s});l.addEventListener("click",function(){u()});t.addEventListener("mouseover",function(){n.forEach(o=>{let c=100*Math.random()-50,r=100*Math.random()-50;console.log(c),console.log(r),o.style.direction=`translate(${c}px, ${r}px)`})});t.addEventListener("mouseout",function(){n.forEach(o=>{o.style.transform=""})});})();
//# sourceMappingURL=index.js.map
