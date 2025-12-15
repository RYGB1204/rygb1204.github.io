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

const Contents = document.querySelector("#Contents");
const StyleContents = getComputedStyle(Contents);

let WidthContents;

const ArrayCrab = [];

function ApdateCoreJS() {

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
    
}

setInterval(ApdateCoreJS, 10);