const navLinks = document.querySelector("nav .nav-links");
const openMenu = document.querySelector("nav .open-menu");
const closeMenu = document.querySelector("nav .close-menu");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
    navLinks.classList.add("open");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
});