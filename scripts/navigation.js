const navbutton = document.querySelector('#ham-btn');
const nav = document.querySelector('nav');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    nav.classList.toggle('show');
    navbutton.setAttribute('aria-expanded', nav.classList.contains('show'));
});