gsap.from('#image1', {
    duration: 1,
    y: 60,
    delay: 0.5,
    opacity: 0
})
gsap.from('#image2', {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.5
})
gsap.from('#image3', {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: 0.5
})

document.querySelector('#image1').addEventListener('mouseenter', function() {
    gsap.to('#image1', {
        y: -20,
        duration: 0.7,
        ease: Power4.out
    })
})
document.querySelector('#image1').addEventListener('mouseleave', function() {
    gsap.to('#image1', {
        y: 0,
        duration: 0.7,
        ease: Power4.out
    })
})


document.querySelector('#image2').addEventListener('mouseenter', function() {
    gsap.to('#image2', {
        y: -20,
        duration: 0.7,
        ease: Power4.out
    })
})
document.querySelector('#image2').addEventListener('mouseleave', function() {
    gsap.to('#image2', {
        y: 0,
        duration: 0.7,
        ease: Power4.out
    })
})


document.querySelector('#image3').addEventListener('mouseenter', function() {
    gsap.to('#image3', {
        y: -20,
        duration: 0.7,
        ease: Power4.out
    })
})
document.querySelector('#image3').addEventListener('mouseleave', function() {
    gsap.to('#image3', {
        y: 0,
        duration: 0.7,
        ease: Power4.out
    })
})

gsap.from('.main-text', {
    opacity: 0,
    duration: 0.9,
    delay: 1,
    ease: Power1.out,
    delay: 0.5
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",   
        start: "top 50%",   
        end: "top -100%",
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page3',
        start: 'top 70%',
        end: 'top -100%',
    }
})


tl.from('.top', {
    y: 100,
    opacity: 0,
    duration: 0.8,
}, 'same')


tl.from('.middle', {
    y: 100,
    opacity: 0,
    duration: 0.8
}, 'same')

tl.from('.bottom', {
    y: 100,
    opacity: 0,
    duration: 0.8
})

tl2.from('.image4', {
    y: 100,
    opacity: 0,
    duration: 0.4,
},'same2')

tl2.from('.image5', {
    y: 100,
    opacity: 0,
    duration: 0.4,
},'same2')

tl2.from('.image6', {
    y: 100,
    opacity: 0,
    duration: 0.4,
})

tl2.from('.image7', {
    y: 100,
    opacity: 0,
    duration: 0.4,
})

tl2.from('text-page3', {
    y: 100,
    opacity: 0,
    duration: 0.4,
}, 'same3')

tl2.from('.conent-page3', {
    y: 100,
    opacity: 0,
    duration: 0.4,
}, 'same3')

tl2.from('.arrow-page3', {
    y: 100,
    opacity: 0,
    duration: 0.4,
})