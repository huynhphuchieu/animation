/* DARK MODE */
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* SCROLL SPY */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* SCROLL REVEAL */
const cards = document.querySelectorAll(".card, .premium-card");


const revealOnScroll = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

/* CURSOR EFFECT */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
/* REGISTER FORM */
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "🎉 Đăng ký thành công! Cảm ơn bạn.";
    form.reset();
});

