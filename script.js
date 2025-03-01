// Função para animações de Fade-In
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(element => fadeObserver.observe(element));

// Função para animações de Slide-In
const slideLeftElements = document.querySelectorAll('.slide-in-left');
const slideRightElements = document.querySelectorAll('.slide-in-right');

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

slideLeftElements.forEach(element => slideObserver.observe(element));
slideRightElements.forEach(element => slideObserver.observe(element));

// Animação ao carregar a página (Header e Main)
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const mainElements = document.querySelectorAll('.fade-in');
    
    if (header) header.classList.add('visible');
    mainElements.forEach(element => element.classList.add('visible'));
});

// Seleciona todos os elementos que devem ser animados
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll-trigger');

// Configura o Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe de animação quando o elemento entra na tela
            entry.target.classList.add('animate-on-scroll');
        } else {
            // Remove a classe de animação quando o elemento sai da tela
            entry.target.classList.remove('animate-on-scroll');
        }
    });
}, { threshold: 0.5 }); // Dispara quando 50% do elemento estiver visível

// Observa cada elemento
elementsToAnimate.forEach(element => {
    observer.observe(element);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
