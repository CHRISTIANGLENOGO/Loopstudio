const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector(".menuNav");

openMenu.addEventListener('click', () => {
    openMenu.classList.add("open");
    hamburger.classList.add("open");
    nav.classList.add("open");
    closeMenu.classList.add('open');
    closeMenu.style.visibility = "visible";
    menuNav.classList.add("open");
});

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove("open");
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    closeMenu.style.visibility = "hidden";
});