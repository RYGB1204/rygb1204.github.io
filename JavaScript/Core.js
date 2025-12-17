let WidthView = document.documentElement.clientWidth;
let HeightView = document.documentElement.clientHeight;
let AspectRatio = WidthView / HeightView;

function LoadModeA() {

    const CssModeA = document.createElement("link");
    CssModeA.rel = "stylesheet";
    CssModeA.href = "../CSS/ModeA.css";
    document.head.append(CssModeA);

    const FileModeA = document.createElement("script");
    FileModeA.src = "JavaScript/ModeA/ModeA.js";
    document.head.append(FileModeA);

    const FileCountdown = document.createElement("script");
    FileCountdown.src = "JavaScript/ModeA/Countdown.js";
    document.head.append(FileCountdown);

    const FileChicken = document.createElement("script");
    FileChicken.src = "JavaScript/ModeA/Chicken.js";
    document.head.append(FileChicken);

    const FileCrab = document.createElement("script");
    FileCrab.src = "JavaScript/ModeA/Crab.js";
    document.head.append(FileCrab);

}

function CheckMode() {

    if (1 / 1 <= AspectRatio && AspectRatio <= 2 / 1) {

        if (600 < HeightView) {

            return "ModeA";

        }

    }
    else if (AspectRatio < 1 / 1) {

        

    }
    else {

    }

}

const Mode = CheckMode();

switch (Mode) {

    case "ModeA":
        LoadModeA();
        break;

}

const Body = document.querySelector("body");

const Contents = document.querySelector("#Contents");
const StyleContents = getComputedStyle(Contents);

let WidthContents;



function ApdateCoreJS() {

    WidthView = document.documentElement.clientWidth;
    HeightView = document.documentElement.clientHeight;
    AspectRatio = WidthView / HeightView;

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));

    if (Mode !== CheckMode()) {
        window.location.reload();
    }
    
}

setInterval(ApdateCoreJS, 100);

addEventListener("load", () => {
    Body.style.visibility = "visible";
})