const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";

  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "black",
  height: "100px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10",
    end: "top -11",
    scrub: 1
  }
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1
  }
});

gsap.to(".scroller-in", {
  x: "-100%",
  duration: 30,
  ease: "none",
  repeat: -1
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 20,
  speed: 600,
  glare: true,
  "max-glare": 0.5,
});

 gsap.from("#about-us",{
  y: 50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 78%",
    scrub: 3
  }
 })

 gsap.from(".card",{
  y: 50,
  scale : 0.98,
  opacity: 0,
  duration: 1.5,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 62%",
    end: "top 65%",
    scrub: 2
  }
 })

 gsap.from("#colon1", {
  y: -30,
  x: -30,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 80%", // more natural entry
    end: "top 60%",
    scrub: 4
  }
});

gsap.from("#colon2", {
  y: -20,
  x: -10,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 30%", // same pattern
    end: "top 40%",
    scrub: 3
  }
});

gsap.from("#page4 h1",{
  y: 50,
  
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2
  }
 })

