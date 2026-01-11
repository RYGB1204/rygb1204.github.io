// メニュー画面の切り替えに関する処理をまとめたファイル

const HomeMenu = document.querySelector("#HomeMenu");

const Palette = document.querySelector("#Palette");
const ArrayIcon = document.querySelectorAll("#Icon");

const ArrayMenuCrab = document.querySelectorAll("#MenuCrab");
const StyleMenuCrab = getComputedStyle(ArrayMenuCrab[0]);

let HeightMenuCrab = Number.parseFloat(StyleMenuCrab.getPropertyValue("height"));

const KeyframesIcon = {
    borderRadius: ["20%", "50%", "20%", "50%", "20%"]
};

const OptionsIcon = {
    duration: 5000,
    iterations: "Infinity",
    easing: "linear"
};

const KeyframesMenuCrabY = {
    offset: [0.0, 0.3, 0.4, 0.5, 1.0],
    translate: [0, 0, `0 -${HeightMenuCrab}px`, 0, 0]
};
const KeyframesMenuCrabR = {
    offset: [0.0, 0.4, 0.5, 0.6, 1.0],
    translate: [0, 0, `0 -${HeightMenuCrab}px`, 0, 0]
};
const KeyframesMenuCrabP = {
    offset: [0.0, 0.5, 0.6, 0.7, 1.0],
    translate: [0, 0, `0 -${HeightMenuCrab}px`, 0, 0]
};
const KeyframesMenuCrabB = {
    offset: [0.0, 0.6, 0.7, 0.8, 1.0],
    translate: [0, 0, `0 -${HeightMenuCrab}px`, 0, 0]
};
const KeyframesMenuCrabG = {
    offset: [0.0, 0.7, 0.8, 0.9, 1.0],
    translate: [0, 0, `0 -${HeightMenuCrab}px`, 0, 0]
};

const ArrayKeyframesMenuCrab = [
    KeyframesMenuCrabY, KeyframesMenuCrabR, KeyframesMenuCrabP, KeyframesMenuCrabB, KeyframesMenuCrabG
];

const OptionsMenuCrab = {
    duration: 2000,
    easing: "ease-in-out",
    iterations: "Infinity"
};

const ArrayAnimationMenuCrab = [];

let IfOptionOnOff = false;

// オプションボタンのクリックでメニュー画面を切り替える
ButtonOption.addEventListener("click", function() {

    IfOptionOnOff = !IfOptionOnOff;

    if (IfOptionOnOff) {

        for (let i = 0; i < ArrayMenuCrab.length; i++) {
            ArrayAnimationMenuCrab[i] = ArrayMenuCrab[i].animate(ArrayKeyframesMenuCrab[i], OptionsMenuCrab);
        }

    }
    else {

        for (let i = 0; i < ArrayMenuCrab.length; i++) {
            ArrayAnimationMenuCrab[i].cancel();
        }

    }

    HomeMenu.classList.toggle("Display");

    Palette.classList.toggle("Display");
    
    for (const MenuCrab of ArrayMenuCrab) {
        MenuCrab.classList.toggle("Display");
    }

});

// アイコンのクリックで別ページに移動
function NavigateToPage(event) {

    switch (event.currentTarget.classList[0]) {

        case "Fishing":
            open("https://rygb1204.github.io/game1");
            break;

        case "Gallery":
            open();
            break;

    }

}

for (const Icon of ArrayIcon) {
    Icon.addEventListener("click", NavigateToPage)
    Icon.animate(KeyframesIcon, OptionsIcon);
}

// ウィンドウの変形によって変化する情報を更新
function ResizeMenuOptionJS() {

    HeightMenuCrab = Number.parseFloat(StyleMenuCrab.getPropertyValue("height"));

    for (const KeyframesMenuCrab of ArrayKeyframesMenuCrab) {
        KeyframesMenuCrab.translate = [0, 0, `0 -${HeightMenuCrab}px`, 0, 0];
    }

}

window.addEventListener("resize", ResizeMenuOptionJS);