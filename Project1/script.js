var crsr = document.querySelector('#cursor')
var blur = document.querySelector('#cursor-blur')
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x  + "px"
  crsr.style.top = dets.y  + "px"
  blur.style.left = dets.x - 200 + "px"
  blur.style.top = dets.y - 200  + "px"
})
// var h4 = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//   elem.addEventListener("mouseenter",function() {
//     crsr.style.scale = 2
//   })
// });

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2
  }
})
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -100%",
    scrub: 2
  }
})

gsap.from("#about-is img,#about-us-in",{
  y: 50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start: "top 60%",
    end:"Top 58%",
    scrub:2
  }
})
gsap.from(".cards",{
  y: 0.8,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:true,
    start: "top 70%",
    end:"Top 65%",
    scrub:2
  }
    
})