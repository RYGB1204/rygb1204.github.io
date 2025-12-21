const ButtonOption = document.querySelector("#ButtonOption");
const MenuOption = document.querySelector("#MenuOption");
const MenuCrabP = document.querySelector(".MenuCrabP");
const MenuCrabR = document.querySelector(".MenuCrabR");
const MenuCrabB = document.querySelector(".MenuCrabB");
const MenuCrabY = document.querySelector(".MenuCrabY");
const MenuCrabG = document.querySelector(".MenuCrabG");

const StyleMenuCrabR = getComputedStyle(MenuCrabR);
const StyleMenuCrabB = getComputedStyle(MenuCrabB);
const StyleMenuCrabY = getComputedStyle(MenuCrabY);
const StyleMenuCrabG = getComputedStyle(MenuCrabG);
const StyleMenuCrabP = getComputedStyle(MenuCrabP);

let WidthMenuCrabR, WidthMenuCrabB, WidthMenuCrabY, WidthMenuCrabG, WidthMenuCrabP;
WidthMenuCrabP = Number.parseFloat(StyleMenuCrabP.getPropertyValue("width"));

const KeyframesMenuCrabY = {
    offset: [0.0, 0.3, 0.4, 0.5, 1.0],
    translate: ""
};
const KeyframesMenuCrabR = {
    offset: [0.0, 0.4, 0.5, 0.6, 1.0],
    translate: ""
};
const KeyframesMenuCrabP = {
    offset: [0.0, 0.5, 0.6, 0.7, 1.0],
    translate: ""
};
const KeyframesMenuCrabB = {
    offset: [0.0, 0.6, 0.7, 0.8, 1.0],
    translate: ""
};
const KeyframesMenuCrabG = {
    offset: [0.0, 0.7, 0.8, 0.9, 1.0],
    translate: ""
};

const OptionsMenuCrab = {
    duration: 2000,
    easing: "ease-in-out",
    iterations: "Infinity"
};

let AnimationMenuCrabR = MenuCrabR.animate(KeyframesMenuCrabR, OptionsMenuCrab);
let AnimationMenuCrabB = MenuCrabB.animate(KeyframesMenuCrabB, OptionsMenuCrab);
let AnimationMenuCrabY = MenuCrabY.animate(KeyframesMenuCrabY, OptionsMenuCrab);
let AnimationMenuCrabG = MenuCrabG.animate(KeyframesMenuCrabG, OptionsMenuCrab);
let AnimationMenuCrabP = MenuCrabP.animate(KeyframesMenuCrabP, OptionsMenuCrab);
AnimationMenuCrabR.cancel();
AnimationMenuCrabB.cancel();
AnimationMenuCrabY.cancel();
AnimationMenuCrabG.cancel();
AnimationMenuCrabP.cancel();

let IfOptionOnOff = false;

ButtonOption.addEventListener("click", function() {

    IfOptionOnOff = !IfOptionOnOff;

    AnimationMenuCrabR.cancel();
    AnimationMenuCrabB.cancel();
    AnimationMenuCrabY.cancel();
    AnimationMenuCrabG.cancel();
    AnimationMenuCrabP.cancel();

    AnimationMenuCrabR = MenuCrabR.animate(KeyframesMenuCrabR, OptionsMenuCrab);
    AnimationMenuCrabB = MenuCrabB.animate(KeyframesMenuCrabB, OptionsMenuCrab);
    AnimationMenuCrabY = MenuCrabY.animate(KeyframesMenuCrabY, OptionsMenuCrab);
    AnimationMenuCrabG = MenuCrabG.animate(KeyframesMenuCrabG, OptionsMenuCrab);
    AnimationMenuCrabP = MenuCrabP.animate(KeyframesMenuCrabP, OptionsMenuCrab);
    AnimationMenuCrabR.cancel();
    AnimationMenuCrabB.cancel();
    AnimationMenuCrabY.cancel();
    AnimationMenuCrabG.cancel();
    AnimationMenuCrabP.cancel();

    if (IfOptionOnOff) {
        AnimationMenuCrabR.play();
        AnimationMenuCrabB.play();
        AnimationMenuCrabY.play();
        AnimationMenuCrabG.play();
        AnimationMenuCrabP.play();
    }

    MenuOption.classList.toggle("active");
    MenuCrabP.classList.toggle("active");
    MenuCrabR.classList.toggle("active");
    MenuCrabB.classList.toggle("active");
    MenuCrabY.classList.toggle("active");
    MenuCrabG.classList.toggle("active");
});

function ApdateMenuOptionJS() {

    WidthMenuCrabP = Number.parseFloat(StyleMenuCrabP.getPropertyValue("width"));
    KeyframesMenuCrabR.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabB.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabY.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabG.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabP.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];

}

setInterval(ApdateMenuOptionJS, 100);