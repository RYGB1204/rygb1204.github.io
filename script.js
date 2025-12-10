const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

const KeyframesHeader = {
    opacity: [0, 1],
    // translate: ["0 -50px", 0]
};

const KeyframesFooter = {
    opacity: [0, 1],
    //translate: ["0 +50px", 0]
};

const Options = {
    duration: 1000,
    easing: "ease"
};

Header.animate(KeyframesHeader, Options);
Footer.animate(KeyframesFooter, Options);

const Button = document.querySelectorAll("button");

const KeyframesButton = {
    opacity: [0, 1],
    transform: ["scale(0)", "scale(1)"]
};

const OptionsButton = {
    delay: 1000,
    duration: 200,
    easing: "ease-out",
    fill: "both"
};

for (let i = 0; i < Button.length; i++) {
    Button[i].animate(KeyframesButton, OptionsButton);
}

const ButtonOption = document.querySelector("#ButtonOption");
const MenuOption = document.querySelector("#MenuOption");
const CrabY = document.querySelector("#CrabY");
const CrabR = document.querySelector("#CrabR");
const CrabP = document.querySelector("#CrabP");
const CrabB = document.querySelector("#CrabB");
const CrabG = document.querySelector("#CrabG");

const KeyframesMenuOption = {
    opacity: [0, 1],
};

let OptionsMenuOption = {
    direction: "normal",
    duration: 200,
    easing: "ease-out",
    fill: "both"
};

let IfOptionOnOff = false;

ButtonOption.addEventListener("click", function() {

    IfOptionOnOff = !IfOptionOnOff;

    if (IfOptionOnOff) {
        OptionsMenuOption.direction = "normal";
    }
    else {
        OptionsMenuOption.direction = "reverse";
    }

    MenuOption.animate(KeyframesMenuOption, OptionsMenuOption);
    // MenuOption.classList.toggle("active");
    CrabY.classList.toggle("active");
    CrabR.classList.toggle("active");
    CrabP.classList.toggle("active");
    CrabB.classList.toggle("active");
    CrabG.classList.toggle("active");
});