const mobileMenu = document.querySelector("#mobile-menu");
// console.log(mobileMenu)
const mobileNav = document.querySelector(".menu-links");
// console.log(mobileNav);
mobileMenu.addEventListener("click", () => {
     mobileNav.classList.toggle("open-close");
     mobileMenu.classList.toggle("style-menu");
});

