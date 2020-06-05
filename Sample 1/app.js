let navButton = document.querySelector('.nav-button');
let navOpen = document.querySelector('.nav-open');


let tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, 0.5) // 0.5 animation delay
.fromTo('.nav-open', 1, {
    x: 100,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    onComplete() {
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
})
navButton.addEventListener('click', (e) => {
    if (tl.isActive()) return e.preventDefault(); e.stopImmediatePropagation();
    toggleTeen(tl);
})

function toggleTeen(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}