// BÀI 1: AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// BÀI 3: GSAP Basic Tween
window.addEventListener('load', () => {
    gsap.to(".gsap-box", {
        x: 200,
        opacity: 1,
        duration: 1.5,
        delay: 0.5
    });
});

// BÀI 4: GSAP Timeline
const tl = gsap.timeline();
tl.from(".header-anim", { y: -50, opacity: 0 })
  .from(".hero-title", { y: 30, opacity: 0 })
  .from(".hero-cta", { scale: 0, opacity: 0 });

// BÀI 5: GSAP Stagger
window.addEventListener('scroll', () => {
    const section5 = document.querySelector('#bai5');
    const cards = document.querySelectorAll('.card');

    if (section5.getBoundingClientRect().top < window.innerHeight / 1.3) {
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2
        });
    }
});
