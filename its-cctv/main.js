const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");
  const isOpen = navlinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
// product container
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});
// article container
ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});
