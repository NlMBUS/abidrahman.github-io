const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const observerSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showSlide');
        } else {
            entry.target.classList.remove('showSlide');
        }
    });
});
const observerType = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('typewriter');
        } else {
            entry.target.classList.remove('typewriter');
        }
    });
});
const observerEase = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showEase');
        } else {
            entry.target.classList.remove('showEase');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const slideElements = document.querySelectorAll('.project');
slideElements.forEach((el) => observerSlide.observe(el));
const typeElements = document.querySelectorAll('.line');
typeElements.forEach((el) => observerType.observe(el));
const easeElements = document.querySelectorAll('.profile');
easeElements.forEach((el) => observerEase.observe(el));