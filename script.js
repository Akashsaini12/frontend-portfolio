
gsap.to("#work-strip h1",{
    x: "-10%",
    duration:10,
    scrollTrigger: {
        trigger: "#work-strip h1",
        scroller: "body",
        start: "top 50%",
        end: "top 20%",
        scurb:1
    }  
})