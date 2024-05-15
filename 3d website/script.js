function valuesetter(){
   gsap.set(" #page1-content .parent .child ",{
      y:"100%"
   })
   gsap.set(" .row img ",{
      opacity:0
   })
//  document.querySelectorAll("#Visual>g")
// .forEach(function(e){
//    var character = e.childNodes[1].childNodes[1];
//    character.style.strokeDasharray =character.getTotalLength() +'px';
//    character.style.strokeDashoffset =character.getTotalLength() +'px';
// })
  
}
function revealTospan(){ 
document.querySelectorAll(".reveal")
.forEach(function (elem){
   let spanparent =document.createElement("span");
   let spanchild =document.createElement("span");
   spanparent.classList.add("parent");
   spanchild.classList.add("child");
spanchild.innerHTML =elem.innerHTML;
  spanparent.appendChild(spanchild);
  elem.appendChild(spanparent);
elem.innerHTML ="";
elem.appendChild(spanparent)

});
}
function timeline(){
var tl = gsap.timeline();

tl.from(" #loader .child span" , {
   x :"100" ,
   duration:1,
   delay :.4,
   stagger: .2 ,
   ease: Power3.easeInOut
})
tl.to(" #loader .parent  .child" , {
   y :"-100%" ,
   duration:1,
   ease: Circ.easeInOut
})
tl.to("#loader" , {
  height:0 ,
   duration:1,
   ease: Circ.easeInOut
})
tl.to("#orange" , {
   height:"100%" ,
   top:0,
    duration:1,
    delay:-.8,
    ease: Circ.easeInOut
 })
 tl.to("#orange" , {
   height:"0%" ,
    duration:1,
    delay:-.5,
    ease: Circ.easeInOut,
    onComplete: function(){
      animatehomepage();
    }
 })
}
function cursereffect(){
   var page1Content = document.querySelector("#page1-content")
   var cursor = document.querySelector("#cursor")
   document.addEventListener("mousemove" , function(dets){
  gsap.to(cursor,{
     x:dets.x ,
     y:dets.y    
  }) 
   })
  document.addEventListener("mouseenter", function(){
     gsap.to(cursor ,{
        scale :1,
        opacity:1
           })        
  })

}
function animatehomepage(){
   var t1 =gsap.timeline();
    t1 
    .to("#page1-content .row .parent .child" ,{
      y:0,
      stagger: .1,
      duration :2 ,
      ease:Expo.easeInOut
    })
    .to(".row img" ,{
     opacity:1,
      ease:Expo.easeInOut ,
      onComplete:function(){
         left();
      }
      })
      
    }
    function left()    { 
      gsap.set("#imagery #imglef",{
         y:"100%"
      })
        gsap.to("#imagery #imglef",{
      y:0,
      duration :2 ,
      ease:Expo.easeInOut,
      scrollTrigger:{
         trigger:" #imagery  imglef " ,
         scroller:"body",
         markers:true,
         start:"top 60%"
   }
})
}
   function animateSvg(){
   
      gsap.to("#Visual>g>g>path" ,{
        strokrDashoffset : 0,
        duration:2 ,
        ease: Expo .easeInOut ,
        delay: .5
      
      })
      }
revealTospan();
valuesetter();
cursereffect();
timeline();


