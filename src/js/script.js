const mobileMenu = document.querySelector("#mobile-menu");
// console.log(mobileMenu)
const mobileNav = document.querySelector(".menu-links");
// console.log(mobileNav);
mobileMenu.addEventListener("click", () => {
     mobileNav.classList.toggle("open-close");
     mobileMenu.classList.toggle("style-menu");
});
const windowWidth = window.innerWidth;
const logo = document.querySelector("#logo h1");
// console.log(windowWidth);
window.addEventListener("resize", changeName());

function changeName() {
     if (windowWidth <= 678) {
          logo.innerText = "Menu";
     } else {
          logo.innerText = "Mekkawy.";
     }
}
changeName();
