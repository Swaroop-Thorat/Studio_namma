let menuBtn = document.getElementById('menuBtn');
let menuOverlay = document.getElementById('menuOverlay');
let isOpen = false;

menuBtn.addEventListener('click', function() {

  if (isOpen == false) {

    menuOverlay.style.transition = 'transform 0.8s ease-in-out';

    menuOverlay.style.transform = 'translate(0%, 0%) rotate(0deg)';

    menuBtn.textContent = 'Close';

    isOpen = true;

  } else {

    menuOverlay.style.transition = 'transform 0.8s ease-in-out';

    menuOverlay.style.transform = 'translate(-100%, 100%) rotate(-25deg)';

    menuBtn.textContent = 'Menu';

    isOpen = false;

  }

});


let hero=document.querySelector(".hero");
let vid=document.querySelector("#followerVideo");
let dot=document.querySelector("#dot");
let nav=document.querySelector(".nav");


hero.addEventListener("mousemove" , (para)=>{
 
    vid.style.top = para.y + "px";
    
    vid.style.left = para.x + "px"; 

    vid.style.transform = "translate(10%,10%)";

    dot.style.display = "none";

    vid.style.transition = "all 0.2s linear";

    vid.style.display = "block";


});

hero.addEventListener("mouseenter", ()=>{
    vid.style.display = "block";

    vid.style.top = para.y + "px";
    
    vid.style.left = para.x + "px"; 

    vid.style.transform = "translate(10%,10%)";

    dot.style.display="none";

});

menuOverlay.addEventListener("mousemove" , (para)=>{

    dot.style.top = para.y + "px";
    
    dot.style.left = para.x + "px";

    dot.style.transform = "translate(90%,90%)";

    dot.style.display = "block";

    dot.style.transition = "all 0.2s linear";

});

nav.addEventListener("mousemove" , (para)=>{

    dot.style.display = "block";
    
    dot.style.top = para.y + "px";
    
    dot.style.left = para.x + "px";

    dot.style.transform = "translate(90%,90%)";

    vid.style.top = para.y + "px";
    
    vid.style.left = para.x + "px"; 

    vid.style.transform = "translate(10%,10%)";

    dot.style.transition = "all 0.2s linear";

});

let vidNamma = document.querySelector(".videoPlay");

vidNamma.addEventListener("mousemove" , (para)=>{
    
  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";

  dot.style.display = "block";

  vid.style.display = "none";

});

vidNamma.addEventListener("mouseenter", ()=>{
    vid.style.display = "none";

  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";
});

let sec3=document.querySelector(".sec3");

sec3.addEventListener("mousemove" , (para)=>{

  vid.style.display = "none";

  dot.style.display = "block";

  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";

  vid.style.transition = "all 0.1ms linear";

});

let span=document.querySelectorAll(".span");
let pop=document.querySelector(".popContainer");
let pops=document.querySelectorAll(".pop");
let cycleInterval = null;
let currentIndex = 0;

span.forEach(span=>{
span.addEventListener("mouseenter" ,()=>{

  pop.style.display="block";

  dot.style.zIndex="-1";

  dot.style.transition = "all 0.1ms linear";

  currentIndex = 0;

  clearInterval(cycleInterval);

  pops.forEach((pop,idx)=>{
    if(idx===0){
      pop.style.display="block";
      pop.style.transform="translateY(50px)"
      pops[currentIndex].style.transform='rotate(-5deg)';

    }
    else{
      pop.style.display="none";
    }
  });

  cycleInterval=setInterval(()=>{
    pops.forEach((pop)=>pop.style.display="none");
    currentIndex=(currentIndex+1)%pops.length;
    pops[currentIndex].style.display="block";


    let tilt=currentIndex%2===0?"-5deg":"5deg";
    pops[currentIndex].style.transition="transform 0.5s ease";
    pops[currentIndex].style.transform='translateY(50px)';

    setTimeout(() => {
        pops[currentIndex].style.transition = "transform 0.5s ease";
        pops[currentIndex].style.transform = `rotate(${tilt}) `;
        
      }, 10);
  },400);

  
});


span.addEventListener("mousemove" , (para)=>{

  pop.style.display="block";

  pop.style.left=para.clientX + "px";

  pop.style.top=para.clientY + "px";

  pop.style.transform="translate(-50%,-50%)";

  dot.style.transition = "all 0.1ms linear";
});

span.addEventListener("mouseleave", ()=>{
  pop.style.display="none";

  dot.style.display="block";

  dot.style.zIndex="1";

})

});

let sec4=document.querySelector(".sec4");

sec4.addEventListener("mouseenter" ,()=>{
    
  dot.style.display = "block";

});

sec4.addEventListener("mousemove" ,(para)=>{
    
  dot.style.display = "block";

  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";

});

let playground=document.querySelector("#playgnd");

playground.addEventListener("mouseenter" ,()=>{
  
  dot.style.borderRadius="10px";

  dot.textContent="PORTFOLIO"

  dot.style.width="auto";

  dot.style.height="auto";


});

playground.addEventListener("mouseleave" ,()=>{
  
  dot.style.borderRadius="50%";

  dot.textContent=" ";

  dot.style.width="20px";

  dot.style.height="20px";

});
let GRID=document.querySelector(".grid");

GRID.addEventListener("mousemove",(para)=>{

  dot.style.display = "block";

  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";
});


let gird=document.querySelectorAll(".gridBox");
let v1=document.querySelector("#v1");
let v2=document.querySelector("#v2");
let v3=document.querySelector("#v3");
let v4=document.querySelector("#v4");

gird.forEach((grid,idx)=>{
  grid.addEventListener("mouseenter",()=>{

    grid.style.scale="0.98";

    grid.style.transition="scale 0.2s linear";

    if(idx == 0){
      v1.style.display="block";

      dot.textContent="METERA"
    }
    else if(idx == 1){
      v2.style.display="block";

      dot.textContent="CHANCE"
    }
    else if(idx == 2){
      v3.style.display="block";

      dot.textContent="SILVR"
    }
    else{
      v4.style.display="block";

      dot.textContent="INTRAMUROS"
    }

  dot.style.borderRadius="10px";

  dot.style.width="auto";

  dot.style.height="auto";
    
  });

  grid.addEventListener("mouseleave",()=>{

    grid.style.scale="1";

    grid.style.transition="scale 0.2s linear";

    if(idx == 0){
      v1.style.display="none";
    }
    else if(idx == 1){
      v2.style.display="none";
    }
    else if(idx == 2){
      v3.style.display="none";
    }
    else{
      v4.style.display="none";
    }

    dot.style.borderRadius="50%";

    dot.style.width="20px";

    dot.style.height="20px";

    dot.textContent=" ";
    
  });

});

let sec5=document.querySelector(".sec5");

sec5.addEventListener("mousemove" ,(para)=>{
    
  dot.style.display = "block";

  dot.style.top = para.clientY + "px";
  
  dot.style.left = para.clientX + "px";

  dot.style.transform = "translate(90%,90%)";

  dot.style.transition = "all 0.2s linear";

});