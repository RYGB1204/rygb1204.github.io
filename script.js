const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

const KeyframesHeader = {
    opacity: [0, 1],
};

const KeyframesFooter = {
    opacity: [0, 1],
};

const Options = {
    duration: 1000,
    easing: "ease",
};

Header.animate(KeyframesHeader, Options);
Footer.animate(KeyframesFooter, Options);

const Button = document.querySelectorAll("button");

const KeyframesButton = {
    opacity: [0, 1],
    scale: [0, 1],
};

const OptionsButton = {
    delay: 1000,
    duration: 200,
    easing: "ease-out",
    fill: "both",
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

const KeyframesCrabP = {
    translate: [],
};
const KeyframesCrabR = {
    translate: [],
};
const KeyframesCrabB = {
    translate: [],
};
const KeyframesCrabY = {
    translate: [],
};
const KeyframesCrabG = {
    translate: [],
};

let OptionsMenuOption = {
    direction: "",
    duration: 200,
    easing: "ease-out",
    fill: "both",
};

let OptionsCrab = {
    direction: "",
    duration: 500,
    easing: "ease-out",
    fill: "both",
}

let IfOptionOnOff = false;

ButtonOption.addEventListener("click", function() {

    IfOptionOnOff = !IfOptionOnOff;

    if (IfOptionOnOff) {
        MenuOption.style.pointerEvents = "auto";
        OptionsMenuOption.direction = "normal";
        OptionsCrab.direction = "normal";
    }
    else {
        MenuOption.style.pointerEvents = "none";
        OptionsMenuOption.direction = "reverse";
        OptionsCrab.direction = "reverse";
    }

    MenuOption.animate(KeyframesMenuOption, OptionsMenuOption);

    if (document.documentElement.clientWidth < 500) {
        KeyframesCrabP.translate = [0, "0 -80vw"];
    }
    else if (document.documentElement.clientWidth < 1000) {
        KeyframesCrabP.translate = [0, "0 -40vw"];
        KeyframesCrabR.translate = [0, "+50vw calc(-40vw - 20vh)"];
        KeyframesCrabB.translate = [0, "-50vw calc(-40vw - 20vh)"];
    }
    else {
        KeyframesCrabP.translate = [0, "0 -30vw"];
        KeyframesCrabR.translate = [0, "+40vw calc(-30vw - 10vh)"];
        KeyframesCrabB.translate = [0, "-40vw calc(-30vw - 10vh)"];
        KeyframesCrabY.translate = [0, "+50vw 0"];
        KeyframesCrabG.translate = [0, "-50vw 0"];
    }


    CrabP.animate(KeyframesCrabP, OptionsCrab);console.log(KeyframesCrabP.translate);
    CrabR.animate(KeyframesCrabR, OptionsCrab);
    CrabB.animate(KeyframesCrabB, OptionsCrab);
    CrabY.animate(KeyframesCrabY, OptionsCrab);
    CrabG.animate(KeyframesCrabG, OptionsCrab);
       // MenuOption.classList.toggle("active");
    // CrabY.classList.toggle("active");
    // CrabR.classList.toggle("active");
    // CrabP.classList.toggle("active");
    // CrabB.classList.toggle("active");
    // CrabG.classList.toggle("active");
});