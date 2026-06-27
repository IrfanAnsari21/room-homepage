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


// Slides
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

const prevSlide = () => {
    if (counter > 0) {
        counter--
    } else if (counter === 0) {
        counter = slides.length -1;
    }
    slideImage();
}

const nextSlide = () => {
    if (counter === (slides.length - 1)) {
        counter = 0;
    } else {
        counter++
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}