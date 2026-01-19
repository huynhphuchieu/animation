document.addEventListener('DOMContentLoaded', () => {

    // --- BÀI 1: ĐỔI NỀN ---
    const btnToggle = document.getElementById('btn-toggle');
    btnToggle.onclick = () => document.body.classList.toggle('dark');

    // --- BÀI 3: HIỆU ỨNG XUẤT HIỆN (Intersection Observer - TỐI ƯU HƠN) ---
    const boxes = document.querySelectorAll('.box');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    boxes.forEach(box => observer.observe(box));

    // --- BÀI 4: NÚT NHẢY ---
    const jumpBtn = document.querySelector('.jump');
    jumpBtn.onmouseenter = () => {
        jumpBtn.classList.add('animate');
        setTimeout(() => jumpBtn.classList.remove('animate'), 500);
    };

    // --- BÀI 5: HÌNH TRÒN THEO CHUỘT (requestAnimationFrame - CỰC MƯỢT) ---
    const circle = document.querySelector('.circle');
    let mouseX = 0, mouseY = 0; // Tọa độ chuột thực tế
    let circleX = 0, circleY = 0; // Tọa độ hình tròn đang trượt theo

    window.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    function animateCircle() {
        // Thuật toán nội suy giúp vòng tròn bám theo mượt mà (Ease)
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;
        
        circle.style.left = circleX - 10 + 'px';
        circle.style.top = circleY - 10 + 'px';
        
        requestAnimationFrame(animateCircle);
    }
    animateCircle();

    // --- BÀI 2: MENU HIGHLIGHT ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.onscroll = () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };
});