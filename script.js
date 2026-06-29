// Navbar
const navLinks = document.querySelector("nav .nav-links");
const openMenu = document.querySelector("nav .open-menu");
const closeMenu = document.querySelector("nav .close-menu");
const overlay = document.querySelector(".overlay");

const openNav = () => {
    navLinks.classList.add("open");
    overlay.classList.add("active");
    openMenu.setAttribute("aria-expanded", "true");
};

const closeNav = () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
    openMenu.setAttribute("aria-expanded", "false");
};

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);


// Slides
const slides = document.querySelectorAll(".slide");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const prevSlide = () => {
    if (counter > 0) {
        counter--
    } else {
        counter = slides.length - 1;
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

const slideTitles = [...slides].map(s => s.querySelector(".title").textContent);
const slideStatus = document.getElementById("slide-status");

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });

    // Announce to screen readers
    slideStatus.textContent = `Slide ${counter + 1} of ${slides.length}: ${slideTitles[counter]}`;
};

slideLeft.addEventListener("click", prevSlide);
slideRight.addEventListener("click", nextSlide);


// Keyboard arrow support:-
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});