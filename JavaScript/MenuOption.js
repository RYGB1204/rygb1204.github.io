const ButtonOption = document.querySelector("#ButtonOption");

const HomeMenu = document.querySelector("#HomeMenu");

const MenuCrabP = document.querySelector(".MenuCrabP");
const MenuCrabR = document.querySelector(".MenuCrabR");
const MenuCrabB = document.querySelector(".MenuCrabB");
const MenuCrabY = document.querySelector(".MenuCrabY");
const MenuCrabG = document.querySelector(".MenuCrabG");

const MenuSelectors = document.querySelectorAll("#MenuSelector");

const StyleMenuCrabR = getComputedStyle(MenuCrabR);
const StyleMenuCrabB = getComputedStyle(MenuCrabB);
const StyleMenuCrabY = getComputedStyle(MenuCrabY);
const StyleMenuCrabG = getComputedStyle(MenuCrabG);
const StyleMenuCrabP = getComputedStyle(MenuCrabP);

let WidthMenuCrabR, WidthMenuCrabB, WidthMenuCrabY, WidthMenuCrabG, WidthMenuCrabP;
WidthMenuCrabP = Number.parseFloat(StyleMenuCrabP.getPropertyValue("width"));

const KeyframesMenuCrabY = {
    offset: [0.0, 0.3, 0.4, 0.5, 1.0],
    translate: [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0]
};
const KeyframesMenuCrabR = {
    offset: [0.0, 0.4, 0.5, 0.6, 1.0],
    translate: [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0]
};
const KeyframesMenuCrabP = {
    offset: [0.0, 0.5, 0.6, 0.7, 1.0],
    translate: [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0]
};
const KeyframesMenuCrabB = {
    offset: [0.0, 0.6, 0.7, 0.8, 1.0],
    translate: [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0]
};
const KeyframesMenuCrabG = {
    offset: [0.0, 0.7, 0.8, 0.9, 1.0],
    translate: [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0]
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

    HomeMenu.classList.toggle("Display");

    MenuCrabP.classList.toggle("Display");
    MenuCrabR.classList.toggle("Display");
    MenuCrabB.classList.toggle("Display");
    MenuCrabY.classList.toggle("Display");
    MenuCrabG.classList.toggle("Display");

    for (const MenuSelector of MenuSelectors) {
        MenuSelector.classList.toggle("Display");
    }

});

function NavigateToPage(event) {

    switch (event.currentTarget.classList[0]) {

        case "Game1":
            open("https://rygb1204.github.io/game1");
            break;

    }

}

for (const MenuSelector of MenuSelectors) {
    MenuSelector.addEventListener("click", NavigateToPage);
}

function GetWidthHeightNewMenuOptionJS() {

    WidthMenuCrabP = Number.parseFloat(StyleMenuCrabP.getPropertyValue("width"));
    KeyframesMenuCrabR.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabB.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabY.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabG.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];
    KeyframesMenuCrabP.translate = [0, 0, `0 -${WidthMenuCrabP}px`, 0, 0];

}

window.addEventListener("resize", GetWidthHeightNewMenuOptionJS);