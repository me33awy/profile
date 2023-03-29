const mobileMenu = document.querySelector("#mobile-menu");
const navigationBar = document.querySelector(".menu-links");

const closeBtn = document.querySelector(".menu-links > span");
function toggleNav() {
  document.body.style.backgroundColor = "rgb(124, 124, 124)";
  navigationBar.classList.toggle("open");
}
function closeMenu() {
  document.body.style.background = "none";
  navigationBar.classList.remove("open");
}
mobileMenu.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", closeMenu);

const logoText = document.querySelector("#logo h1");
// console.log(window.innerWidth);
// console.log(window.innerHeight);
function getWindowSize() {
  if (window.innerWidth <= 768) {
    logoText.innerHTML = "Menu";
  } else {
    logoText.innerHTML = "Mekkawy.";
    navigationBar.classList.remove("open");
    document.body.style.background = "none";
  }
}
getWindowSize();
window.addEventListener("resize", getWindowSize);
