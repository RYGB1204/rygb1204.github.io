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

    const FileGameManager = document.createElement("script");
    FileGameManager.src = "JavaScript/GameManager.js";
    document.head.append(FileGameManager);

    const FileCountdown = document.createElement("script");
    FileCountdown.src = "JavaScript/Countdown.js";
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

    const FileGameManager = document.createElement("script");
    FileGameManager.src = "JavaScript/GameManager.js";
    document.head.append(FileGameManager);

    const FileCountdown = document.createElement("script");
    FileCountdown.src = "JavaScript/Countdown.js";
    document.head.append(FileCountdown);

    const FileChicken = document.createElement("script");
    FileChicken.src = "JavaScript/ModeB/Chicken.js";
    document.head.append(FileChicken);

    const FileCrab = document.createElement("script");
    FileCrab.src = "JavaScript/ModeB/Crab.js";
    document.head.append(FileCrab);

}

function CheckMode() {//console.log(AspectRatio);

    if (1.0 / 1.0 <= AspectRatio && AspectRatio < 4.0 / 1.0) {

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

function GetWidthHeightNewCoreJS() {

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
    HeightContents = Number.parseFloat(StyleContents.getPropertyValue("height"));
    AspectRatio = WidthContents / HeightContents;

    if (Mode !== CheckMode()) {
        window.location.reload();
    }

}

window.addEventListener("resize", GetWidthHeightNewCoreJS);

addEventListener("load", () => {
    Body.style.visibility = "visible";
})