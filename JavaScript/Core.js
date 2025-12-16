const ObjectStateGame = {
    BeforeStart: "BeforeStart",
    AfterStart: "AfterStart",
    Failure: "Failure",
    Success: "Success"
};

let StateGame = ObjectStateGame.BeforeStart;
const StateGamePrevious = {
    CountdownJS: "",
    ChickenJS: "",
    CrabJS: ""
};

const All = document.querySelectorAll(".Unvisible");

const Contents = document.querySelector("#Contents");
const StyleContents = getComputedStyle(Contents);

let WidthContents;

const ArrayCrab = [];

for (const Each of All) {
    Each.style.visibility = "visible";
}

function ApdateCoreJS() {

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
    
}

setInterval(ApdateCoreJS, 10);