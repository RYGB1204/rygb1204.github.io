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

function CheckMode() {

    if (1.5 / 1 <= AspectRatio && AspectRatio <= 3.0 / 1) {

        if (500 <= WidthContents) {
            
            return "ModeA";

        }

    }
    else if (AspectRatio < 1.5 / 1) {

        

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

function ApdateCoreJS() {console.log(AspectRatio);

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