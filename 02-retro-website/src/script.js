
const scroll = new LocomotiveScroll({
    el: document.querySelector('.total'),
    smooth: true
});

const tl = gsap.timeline();

// tl.to('.scroll ', {
//     y:'100vh',
//     duration: 0,
//     scale:0.3
// })

// tl.to('.scroll ', {
//     y:'-60vh',
//     delay: 1,
// })

// tl.to('.scroll ', {
//     rotate: '-360',
//     duration: 1,
//     delay: 1,
//     scale: 1,
//     y:'0vh',
//     ease: "power2.inOut"
// })