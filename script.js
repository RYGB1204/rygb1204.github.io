const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

const KeyframesHeader = {
    opacity: [0, 1],
};

const KeyframesFooter = {
    opacity: [0, 1],
};

const OptionsHeaderFooter = {
    duration: 1000,
    easing: "ease",
};

Header.animate(KeyframesHeader, OptionsHeaderFooter);
Footer.animate(KeyframesFooter, OptionsHeaderFooter);

const Button = document.querySelectorAll("button");

const KeyframesButton = {
    opacity: [0, 1],
    scale: [0, 1],
};

const OptionsButton = {
    delay: 1000,
    duration: 200,
    easing: "ease-out",
    fill: "both",
};

for (let i = 0; i < Button.length; i++) {
    Button[i].animate(KeyframesButton, OptionsButton);
}

const ButtonOption = document.querySelector("#ButtonOption");
const MenuOption = document.querySelector("#MenuOption");
const CrabY = document.querySelector("#CrabY");
const CrabR = document.querySelector("#CrabR");
const CrabP = document.querySelector("#CrabP");
const CrabB = document.querySelector("#CrabB");
const CrabG = document.querySelector("#CrabG");

const KeyframesMenuOption = {
    opacity: [0, 1],
};

const KeyframesMenuCrabP = {
    translate: [],
};
const KeyframesMenuCrabR = {
    translate: [],
};
const KeyframesMenuCrabB = {
    translate: [],
};
const KeyframesMenuCrabY = {
    translate: [],
};
const KeyframesMenuCrabG = {
    translate: [],
};

let OptionsMenuOption = {
    direction: "",
    duration: 200,
    easing: "ease-out",
    fill: "both",
};

let OptionsMenuCrab = {
    direction: "",
    duration: 500,
    easing: "ease-out",
    fill: "both",
}

let IfOptionOnOff = false;

ButtonOption.addEventListener("click", function() {

    IfOptionOnOff = !IfOptionOnOff;

    if (IfOptionOnOff) {
        MenuOption.style.pointerEvents = "auto";
        OptionsMenuOption.direction = "normal";
        OptionsMenuCrab.direction = "normal";
    }
    else {
        MenuOption.style.pointerEvents = "none";
        OptionsMenuOption.direction = "reverse";
        OptionsMenuCrab.direction = "reverse";
    }

    MenuOption.animate(KeyframesMenuOption, OptionsMenuOption);

    if (document.documentElement.clientWidth < 500) {
        KeyframesMenuCrabP.translate = [0, "0 -80vw"];
    }
    else if (document.documentElement.clientWidth < 1000) {
        KeyframesMenuCrabP.translate = [0, "0 -40vw"];
        KeyframesMenuCrabR.translate = [0, "+50vw calc(-40vw - 20vh)"];
        KeyframesMenuCrabB.translate = [0, "-50vw calc(-40vw - 20vh)"];
    }
    else {
        KeyframesMenuCrabP.translate = [0, "0 -30vw"];
        KeyframesMenuCrabR.translate = [0, "+40vw calc(-30vw - 10vh)"];
        KeyframesMenuCrabB.translate = [0, "-40vw calc(-30vw - 10vh)"];
        KeyframesMenuCrabY.translate = [0, "+50vw 0"];
        KeyframesMenuCrabG.translate = [0, "-50vw 0"];
    }


    CrabP.animate(KeyframesMenuCrabP, OptionsMenuCrab);console.log(KeyframesMenuCrabP.translate);
    CrabR.animate(KeyframesMenuCrabR, OptionsMenuCrab);
    CrabB.animate(KeyframesMenuCrabB, OptionsMenuCrab);
    CrabY.animate(KeyframesMenuCrabY, OptionsMenuCrab);
    CrabG.animate(KeyframesMenuCrabG, OptionsMenuCrab);
       // MenuOption.classList.toggle("active");
    // CrabY.classList.toggle("active");
    // CrabR.classList.toggle("active");
    // CrabP.classList.toggle("active");
    // CrabB.classList.toggle("active");
    // CrabG.classList.toggle("active");
});

//ChikenStart

const Chicken = document.querySelector("#Chicken");
const StyleChicken = getComputedStyle(Chicken);

let XChiken, YChiken, WidthChiken;
let ScaleChiken;
let KeyframesChikenLeft, KeyframesChickenRight;

function Apdate() {

    XChiken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;//console.log(XNow);
    YChiken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;//console.log(YNow);
    WidthChiken = Number.parseFloat(StyleChicken.getPropertyValue("width"));

    ScaleChiken = StyleChicken.getPropertyValue("scale");//console.log(MatrixNow);
    KeyframesChikenLeft = {
        scale: [`${ScaleChiken}`, "-1 1"]
    };
    KeyframesChickenRight = {
        scale: [`${ScaleChiken}`, "+1 1"]
    };

}

setInterval(Apdate, 1);

let TimePreLeft, TimePreRight;
let TimeStartJump;

function MoveLeft(TimeNow) {

    if (TimePreLeft === undefined) {
        TimePreLeft = TimeNow;
    }

    let TimeElapsedLeft = TimeNow - TimePreLeft;

    if (Number.isNaN(TimeElapsedLeft)) {
        TimeElapsedLeft = 0;
    }

    const DistanceMoveLeft = TimeElapsedLeft * WidthChiken / 200;

    Chicken.style.left = `${XChiken - WidthChiken / 2 - DistanceMoveLeft}px`;

    TimePreLeft = TimeNow;

    if (IfKeyLeftOnOff) {
        requestAnimationFrame(MoveLeft);
    }
}

function MoveRight(TimeNow) {

    if (TimePreRight === undefined) {
        TimePreRight = TimeNow;
    }

    let TimeElapsedRight = TimeNow - TimePreRight;

    if (Number.isNaN(TimeElapsedRight)) {
        TimeElapsedRight = 0;
    }

    const DistanceMoveRight = TimeElapsedRight * WidthChiken / 200;

    Chicken.style.left = `${XChiken - WidthChiken / 2 + DistanceMoveRight}px`;

    TimePreRight = TimeNow;

    if (IfKeyRightOnOff) {
        requestAnimationFrame(MoveRight);
    }
}

function Jump(TimeNow) {

    const VelocityInitial = WidthChiken * 15;
    const Gravity = WidthChiken * 30;

    if (TimeStartJump === undefined) {
        TimeStartJump = TimeNow;
    }

    let TimeElapsedJump = TimeNow - TimeStartJump;
    let TimeElapsedJumpSecond = Math.min(TimeElapsedJump / 1000, 1);

    if (Number.isNaN(TimeElapsedJumpSecond)) {
        TimeElapsedJumpSecond = 0;
    }

    const DistanceJump = VelocityInitial * TimeElapsedJumpSecond - Gravity * TimeElapsedJumpSecond ** 2 / 2;

    Chicken.style.bottom = `${DistanceJump}px`;

    if (0 <= TimeElapsedJumpSecond && TimeElapsedJumpSecond < 1) {
        requestAnimationFrame(Jump);
    }
    else {
        IfJumpOnOff = false;
        TimeStartJump = undefined;
    }

}

const OptionsChicken = {
    duration: 100,
    fill: "both"
};

let IfKeyLeftOnOff = false;
let IfKeyRightOnOff = false;
let IfJumpOnOff = false;

function Keydown(event) {

    if (!event.repeat) {

        if (event.key === "ArrowLeft") {
            IfKeyLeftOnOff = true;
            MoveLeft();
            Chicken.animate(KeyframesChikenLeft, OptionsChicken);
        }
        if (event.key === "ArrowRight") {
            IfKeyRightOnOff = true;
            MoveRight();
            Chicken.animate(KeyframesChickenRight, OptionsChicken);
        }

        if (event.key === " " && !IfJumpOnOff)  {
            IfJumpOnOff = true;
            Jump();
        }

    }

}

function Keyup(event) {

    if (event.key === "ArrowLeft") {
        IfKeyLeftOnOff = false;
        TimePreLeft = undefined;
    }
    if (event.key === "ArrowRight") {
        IfKeyRightOnOff = false;
        TimePreRight = undefined;
    }
    
}

document.addEventListener("keydown", Keydown);
document.addEventListener("keyup", Keyup);

//ChikenEnd
//EnemyCrabStart

const Contents = document.querySelector("#Contents");

const ArrayCrab = [];

// function JumpCrab(TimeNow) {

//     const VelocityInitial = WidthChiken * 15;
//     const Gravity = WidthChiken * 30;

//     if (TimeStartJump === undefined) {
//         TimeStartJump = TimeNow;
//     }

//     let TimeElapsedJump = TimeNow - TimeStartJump;
//     let TimeElapsedJumpSecond = Math.min(TimeElapsedJump / 1000, 1);

//     if (Number.isNaN(TimeElapsedJumpSecond)) {
//         TimeElapsedJumpSecond = 0;
//     }

//     const DistanceJump = VelocityInitial * TimeElapsedJumpSecond - Gravity * TimeElapsedJumpSecond ** 2 / 2;

//     Chicken.style.bottom = `${DistanceJump}px`;

//     if (0 <= TimeElapsedJumpSecond && TimeElapsedJumpSecond < 1) {
//         requestAnimationFrame(Jump);
//     }
//     else {
//         IfJumpOnOff = false;
//         TimeStartJump = undefined;
//     }

// }

const KeyframesCrabLeft = {
    translate: [0, "+130vw 0"]
};
const KeyframesCrabRight = {
    translate: [0, "-130vw 0"]
};

const OptionsCrab = {
    duration: 5000,
    fill: "both"
};
const OptionsCrabFast = {
    duration: 500,
    fill: "both"
};

function DisplayCrab(Crab) {

    Contents.append(Crab);

    ArrayCrab.push(Crab);

    switch (Crab.className) {

        case "CrabR":
            Crab.animate(KeyframesCrabLeft, OptionsCrab);
        break;
        case "CrabB":
            Crab.animate(KeyframesCrabRight, OptionsCrab);
        break;
        case "CrabY":
            Crab.animate(KeyframesCrabLeft, OptionsCrab);
        break;
        case "CrabG":
            Crab.animate(KeyframesCrabRight, OptionsCrab);
        break;
        case "CrabP Left":
            Crab.animate(KeyframesCrabLeft, OptionsCrabFast);
        break;
        case "CrabP Right":
            Crab.animate(KeyframesCrabRight, OptionsCrabFast);
        break;
    }

    setTimeout(() => {
        Crab.remove();
    }, 5000);

}

function SpawnCrabR(Crab) {

    Crab.classList.add("CrabR");

    DisplayCrab(Crab);

}
function SpawnCrabB(Crab) {

    Crab.classList.add("CrabB");

    DisplayCrab(Crab);

}
function SpawnCrabY(Crab) {

    Crab.classList.add("CrabY");

    DisplayCrab(Crab);

}
function SpawnCrabG(Crab) {

    Crab.classList.add("CrabG");

    DisplayCrab(Crab);

}
function SpawnCrabP(Crab) {

    const Seed = Math.random();

    if (Seed < 0.5) {
        Crab.classList.add("CrabP", "Left");
    }
    else {
        Crab.classList.add("CrabP", "Right");
    }

    DisplayCrab(Crab);

}

function ChooseCrab() {

    const Crab = document.createElement("div");
    const IdCrab = document.createAttribute("id");
    IdCrab.value = "Crab";

    Crab.setAttributeNode(IdCrab);

    const Seed = Math.random() * 4.1;

    if (Seed < 1) {
        SpawnCrabR(Crab);
    }
    else if (Seed < 2) {
        SpawnCrabB(Crab);
    }
    else if (Seed < 3) {
        SpawnCrabY(Crab);
    }
    else if (Seed < 4) {
        SpawnCrabG(Crab);
    }
    else {
        SpawnCrabP(Crab);
    }

}

const IntervalChooseCrab = setInterval(ChooseCrab, 1000);

//EnemyCrabEnd
//CountdouwStart

const CountText = document.querySelector("#CountText");

let CountInt = 31;

function Countdown() {

    CountInt--;

    if (0 < CountInt) {
        CountText.textContent = CountInt;
    }
    else {
        CountText.textContent = "Finish!"
        clearInterval(IntervalChooseCrab);
        clearInterval(IntervalCountdown);
    }
    

}

const IntervalCountdown = setInterval(Countdown, 1000);

//CountdownEnd