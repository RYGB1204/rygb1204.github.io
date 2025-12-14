const ButtonOption = document.querySelector("#ButtonOption");
const MenuOption = document.querySelector("#MenuOption");
const MenuCrabP = document.querySelector(".MenuCrabP");
const MenuCrabR = document.querySelector(".MenuCrabR");
const MenuCrabB = document.querySelector(".MenuCrabB");
const MenuCrabY = document.querySelector(".MenuCrabY");
const MenuCrabG = document.querySelector(".MenuCrabG");

// const KeyframesMenuOption = {
//     opacity: [0, 1],
// };

// const KeyframesMenuCrabP = {
//     translate: [],
// };
// const KeyframesMenuCrabR = {
//     translate: [],
// };
// const KeyframesMenuCrabB = {
//     translate: [],
// };
// const KeyframesMenuCrabY = {
//     translate: [],
// };
// const KeyframesMenuCrabG = {
//     translate: [],
// };

// const OptionsMenuOption = {
//     direction: "",
//     duration: 200,
//     easing: "ease-out",
//     fill: "both",
// };

// const OptionsMenuCrab = {
//     direction: "",
//     duration: 500,
//     easing: "ease-out",
//     fill: "both",
// }

// let IfOptionOnOff = false;

ButtonOption.addEventListener("click", function() {

    // IfOptionOnOff = !IfOptionOnOff;

    // if (IfOptionOnOff) {
    //     MenuOption.style.pointerEvents = "auto";
    //     OptionsMenuOption.direction = "normal";
    //     OptionsMenuCrab.direction = "normal";
    // }
    // else {
    //     MenuOption.style.pointerEvents = "none";
    //     OptionsMenuOption.direction = "reverse";
    //     OptionsMenuCrab.direction = "reverse";
    // }

    // if (document.documentElement.clientWidth < 500) {
    //     KeyframesMenuCrabP.translate = [0, "0 -80vw"];
    // }
    // else if (document.documentElement.clientWidth < 1000) {
    //     KeyframesMenuCrabP.translate = [0, "0 -40vw"];
    //     KeyframesMenuCrabR.translate = [0, "+50vw calc(-40vw - 20vh)"];
    //     KeyframesMenuCrabB.translate = [0, "-50vw calc(-40vw - 20vh)"];
    // }
    // else {
    //     KeyframesMenuCrabP.translate = [0, "0 -30vw"];
    //     KeyframesMenuCrabR.translate = [0, "+40vw calc(-30vw - 10vh)"];
    //     KeyframesMenuCrabB.translate = [0, "-40vw calc(-30vw - 10vh)"];
    //     KeyframesMenuCrabY.translate = [0, "+50vw 0"];
    //     KeyframesMenuCrabG.translate = [0, "-50vw 0"];
    // }

    //MenuOption.animate(KeyframesMenuOption, OptionsMenuOption);

    // MenuCrabP.animate(KeyframesMenuCrabP, OptionsMenuCrab);
    // MenuCrabR.animate(KeyframesMenuCrabR, OptionsMenuCrab);
    // MenuCrabB.animate(KeyframesMenuCrabB, OptionsMenuCrab);
    // MenuCrabY.animate(KeyframesMenuCrabY, OptionsMenuCrab);
    // MenuCrabG.animate(KeyframesMenuCrabG, OptionsMenuCrab);
    MenuOption.classList.toggle("active");
    MenuCrabP.classList.toggle("active");
    MenuCrabR.classList.toggle("active");
    MenuCrabB.classList.toggle("active");
    MenuCrabY.classList.toggle("active");
    MenuCrabG.classList.toggle("active");
});