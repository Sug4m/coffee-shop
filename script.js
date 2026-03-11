const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav a');

// 1. Toggle menu pag clinick ang hamburger
hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation(); // Iwasan ang "bubbling" para hindi agad mag-close
});

// 2. Isara ang menu pag clinick ang labas ng nav
document.addEventListener('click', (e) => {
    // I-check kung ang click ay wala sa loob ng nav at wala sa hamburger
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// 3. Isara ang menu pag may clinick na link sa loob
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});