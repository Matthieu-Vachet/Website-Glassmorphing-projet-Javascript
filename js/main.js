const burgerMenuButton = document.querySelector(".burger-menu-button");
const burgerMenuButtonIcon = document.querySelector(".burger-menu-button i");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenuButton.onclick = function () {
  burgerMenu.classList.toggle("open");
  const isOpen = burgerMenu.classList.contains("open");
  burgerMenuButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}
let bk0 = document.getElementById("bk0");
let bk1 = document.getElementById("bk1");
let bk2 = document.getElementById("bk2");
let bk3 = document.getElementById("bk3");
let bk4 = document.getElementById("bk4");
let bk5 = document.getElementById("bk5");
let header = document.querySelector("header");
let title = document.getElementById("title-parallaxe");

window.addEventListener("scroll", function () {

  let value = window.scrollY;
  bk0.style.marginLeft = value * 0.1 + "px";
  bk2.style.top = value * 0.30 + "px";
  bk3.style.top = value * 0.20 + "px";
  bk4.style.top = value * 0.50 + "px";
  bk5.style.top = value * 0.20 + "px";
  header.style.top = value * 0.6 + "px";
  title.style.marginRight = value * 3 + "px";


})