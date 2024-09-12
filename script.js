var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"

})



gsap.to(".star", {
    rotate: 1000,
    scrollTrigger: {
        trigger: ".page1 img",
        scrollar: "body",
        // markers:true,
        start: "top 1000%",
        end: "top -2000%",
        scrub: 4

    }
})

gsap.to(".main-bg", {
    scale: 1.1,
    scrollTrigger: {
        trigger: ".semicircle",
        scrollar: "body",
        // markers:true,
        start: "top 30%",
        end: "top 15%",
        scrub: 5,
    }
})


gsap.to(".semicircle", {
    scale: 1.1,
    scrollTrigger: {
        trigger: ".semicircle",
        scrollar: "body",
        // markers:true,
        start: "top 30%",
        end: "top 15%",
        scrub: 4,
    }
})

gsap.from(".img-2", {
    scale: 1.1,
    scrollTrigger: {
        trigger: ".img-2",
        scrollar: "body",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: 4,
    }
})


gsap.from(".img", {
    scale: 1.10,
    scrollTrigger: {
        trigger: ".img",
        scrollar: "body",
        // markers:true,
        start: "top 70%",
        end: "top 20%",
        scrub: 4,
    }
})


gsap.from(".main-bg1", {
    scale: 1.2,
    scrollTrigger: {
        trigger: ".page5",
        scrollar: "body",
        // markers:true,
        start: "top 40%",
        end: "top -200%",
        scrub: 4,
    }
})
gsap.from(".main-bg2", {
    scale: 1.09,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".page6",
        scrollar: "body",
        // markers:true,
        start: "top 70%",
        end: "top -10%",
        scrub: 4,

    }
})

gsap.from(".left2-img,.right2-img", {
    scale: 1.20,
    scrollTrigger: {
        trigger: ".page7",
        scrollar: "body",
        // markers: true,
        start: "top 70%",
        end: "top -100%",
        scrub: 4,

    }
})

gsap.from(".page8-bg", {
    scale: 1.20,
    scrollTrigger: {
        trigger: ".page8",
        scrollar: "body",
        // markers: true,
        start: "top 50%",
        end: "top -20",
        // start: "top 102%",
        // end: "top 300",
        scrub: 3,

    }
})



gsap.to(".text2-pg11>h1", {
    y: -70,
    duration: 2,
    opacity: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".text2-pg11>h1",
        scrollar: "body",
        // markers:true,
        start: "'top 95%",
        end: "top 60%",
        scrub: 3,
    }
})



gsap.from(".circle-pg11 ", {
    y: 80,
    duration: 1.5,
    delay: .8,
    opacity: 1,
    scrollTrigger: {
        trigger: ".circle-pg11 ",
        scrollar: "body",
        // markers:true,
        start: "'top 100%",
        end: "top 60%",
        scrub: 2,
    }
})

gsap.to(".smile2", {
    y: -50,
    duration: 3,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: ".page12",
        scrollar: "body",
        // markers:true,
        end: "top 85%",
        start: "'top 95%",
        scrub: 2,
    }
})


gsap.from(".pg-12centre,text-pg12", {
    y: 100,
    stagger:0.5,

    delay: 2,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".pg-12centre,text-pg12",
        scrollar: "body",
        // markers:true,
        end: "top 100%",
        start: "'top 100%",
        scrub: 3,
    }
})

gsap.from(".end-prt1>h3,.end-prt2>h3", {
    y:50,
    // stagger:0.5,

    // duration: 2,
    delay: 0,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".end",
        scrollar: "body",
        // markers:true,
        end: "top 110%",
        start: "'top 100%",
        scrub: 4,
    }
})