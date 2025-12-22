const Body = document.querySelector("body");

const Contents = document.querySelector("#Contents");
const StyleContents = getComputedStyle(Contents);

let WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
let HeightContents = Number.parseFloat(StyleContents.getPropertyValue("height"));
let AspectRatio = WidthContents / HeightContents;

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

function LoadModeB() {

    const CssModeB = document.createElement("link");
    CssModeB.rel = "stylesheet";
    CssModeB.href = "../CSS/ModeB.css";
    document.head.append(CssModeB);

    const FileModeB = document.createElement("script");
    FileModeB.src = "JavaScript/ModeB/ModeB.js";
    document.head.append(FileModeB);

    const FileCountdown = document.createElement("script");
    FileCountdown.src = "JavaScript/ModeB/Countdown.js";
    document.head.append(FileCountdown);

    const FileChicken = document.createElement("script");
    FileChicken.src = "JavaScript/ModeB/Chicken.js";
    document.head.append(FileChicken);

    const FileCrab = document.createElement("script");
    FileCrab.src = "JavaScript/ModeB/Crab.js";
    document.head.append(FileCrab);

}

function CheckMode() {//console.log(AspectRatio);

    if (1.0 / 1.0 <= AspectRatio && AspectRatio < 3.0 / 1.0) {

        return "ModeA";

    }
    else if (1.0 / 3.0 <= AspectRatio && AspectRatio < 1.0 / 1.0) {

        return "ModeB";

    }

}

const Mode = CheckMode();

switch (Mode) {

    case "ModeA":
        LoadModeA();
        break;

    case "ModeB":
        LoadModeB();
        break;

}

function ProhibitClickRight(event) {
    event.preventDefault();
}

Contents.addEventListener("contextmenu", ProhibitClickRight);

function ApdateCoreJS() {

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
    HeightContents = Number.parseFloat(StyleContents.getPropertyValue("height"));
    AspectRatio = WidthContents / HeightContents;

    if (Mode !== CheckMode()) {
        window.location.reload();
    }
    
}

setInterval(ApdateCoreJS, 100);

addEventListener("load", () => {
    Body.style.visibility = "visible";
})