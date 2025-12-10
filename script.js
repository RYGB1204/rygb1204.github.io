const KeyframesHeader = {
    opacity: [0, 1],
    translate: ["0 -50px", 0]
}

const KeyframesFooter = {
    opacity: [0, 1],
    //translate: ["0 +50px", 0]
}

const Options = {
    duration: 3000,
    easing: "ease"
}

const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

Header.animate(KeyframesHeader, Options);
Footer.animate(KeyframesFooter, Options);

const ButtonOption = document.querySelector("#ButtonOption");
const MenuOption = document.querySelector("#MenuOption");
const CrabY = document.querySelector("#CrabY");
const CrabR = document.querySelector("#CrabR");
const CrabP = document.querySelector("#CrabP");
const CrabB = document.querySelector("#CrabB");
const CrabG = document.querySelector("#CrabG");

ButtonOption.addEventListener("click", function() {
    MenuOption.classList.toggle("active");
    CrabY.classList.toggle("active");
    CrabR.classList.toggle("active");
    CrabP.classList.toggle("active");
    CrabB.classList.toggle("active");
    CrabG.classList.toggle("active");
});