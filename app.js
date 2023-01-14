// SCROLL REVEAL
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = () => {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementsOnScreen =
      revealElements[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementsOnScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
// SCROLL REVEAL

// BACK TO TOP BUTTON
let backToTopBtn = document.querySelector(".back-to-top-btn");

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

backToTopBtn.addEventListener("click", topFunction);

// HAMBURGER MENU
// VARIABLES
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelectorAll(".navbar-item");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");

// TOGGLE MENU FUNCTION
const toggleMenu = () => {
  if (navbar.classList.contains("showMenu")) {
    navbar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  } else {
    navbar.classList.add("showMenu");
    closeIcon.style.display = "block";
    closeIcon.style.color = "hsl(232, 10%, 55%)";
    openIcon.style.display = "none";
  }
};

// ADDING EVENT LISTENER TO HAMBURGER MENU
hamburgerMenu.addEventListener("click", toggleMenu);

// HIDE THE MENU WHEN USER CLICK ON THE LINK
navbarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", toggleMenu);
});
