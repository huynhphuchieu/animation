const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
// CONTACT FORM SUBMIT
const form = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYou");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // không reload

    thankYou.classList.add("show");

    form.reset();

    // tự ẩn sau 4 giây (tuỳ thích)
    setTimeout(() => {
      thankYou.classList.remove("show");
    }, 4000);
  });
}
const form = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYou");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    thankYou.style.display = "block";
    form.reset();
  });
}
