const ObjectStateGame = {
    BeforeStart: "BeforeStart",
    AfterStart: "AfterStart",
    Failure: "Failure",
    Success: "Success"
};

let StateGame = ObjectStateGame.BeforeStart;

const Contents = document.querySelector("#Contents");
const StyleContents = getComputedStyle(Contents);

let WidthContents;

const ArrayCrab = [];

function Apdate() {

    WidthContents = Number.parseFloat(StyleContents.getPropertyValue("width"));
    
}