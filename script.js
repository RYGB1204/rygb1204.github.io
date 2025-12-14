const All = document.querySelectorAll(".Unvisible");
for (const Each of All) {
    Each.style.visibility = "visible";
}

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

const ObjectStateGame = {
    BeforeStart: "BeforeStart",
    AfterStart: "AfterStart",
    Failure: "Failure",
    Success: "Success"
};

let StateGame = ObjectStateGame.BeforeStart;

// let IfGameSuccessFailure;
// let IfYouOperateCanCannot = false;

const Chicken = document.querySelector("#Chicken");
const StyleChicken = getComputedStyle(Chicken);

let XChiken, YChiken, WidthChiken;
let ScaleChicken;

let XCrub, YCrub;

const KeyframesChickenAppear = {
    translate: ["0 -100vh", 0],
};
const OptionsChickenAppear = {
    duration: 1000,
    easing: "ease-in"
};

Chicken.animate(KeyframesChickenAppear, OptionsChickenAppear);

let KeyframesChikenLeft, KeyframesChickenRight;

const KeyframesChickenAttackedTranslate = {
    translate: []
};
const KeyframesChickenAttackedRotate = {
    rotate: ["0deg", "360deg"]
};

const KeyframesChickenSuccess = {
    translate: []
};

const OptionsChickenAttackedTranslate = {
    duration: 2000,
    fill: "both"

};
const OptionsChickenAttackedRotate = {
    duration: 200,
    iterations: "Infinity"

};

const OptionsChickenSuccess = {
    duration: 2000,
    fill: "both"
}

function FlickChicken() {

    if (XChiken - XCrub < 0) {
        KeyframesChickenAttackedTranslate.translate = [0, "-200vw -100vw"];
    }
    else {
        KeyframesChickenAttackedTranslate.translate = [0, "+200vw -100vw"];
    }

    const AnimateChickenAttacked = Chicken.animate(KeyframesChickenAttackedTranslate, OptionsChickenAttackedTranslate);
    Chicken.animate(KeyframesChickenAttackedRotate, OptionsChickenAttackedRotate);

    StateGame = ObjectStateGame.Failure;

    AnimateChickenAttacked.finished.then(() => {
        DisplayLose();
    })
}

function FlyChicken() {

    if (ScaleChicken.split(" ")[0] === "-1") {
        KeyframesChickenSuccess.translate = [0, "-10vw -100vh"];
    }
    else {
        KeyframesChickenSuccess.translate = [0, "+10vw -100vh"];
    }

    Chicken.animate(KeyframesChickenSuccess, OptionsChickenSuccess);

}

function Apdate() {

    XChiken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;//console.log(XNow);
    YChiken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;//console.log(YNow);
    WidthChiken = Number.parseFloat(StyleChicken.getPropertyValue("width"));

    ScaleChicken = StyleChicken.getPropertyValue("scale");//console.log(MatrixNow);
    KeyframesChikenLeft = {
        scale: [`${ScaleChicken}`, "-1 1"]
    };
    KeyframesChickenRight = {
        scale: [`${ScaleChicken}`, "+1 1"]
    };

    for (const Object of ArrayCrab) {

        const StyleCrab = getComputedStyle(Object);

        XCrub = Number.parseFloat(StyleCrab.getPropertyValue("left")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) / 2;
        YCrub = Number.parseFloat(StyleCrab.getPropertyValue("bottom")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) / 2;//console.log(YCrub);

        if (StateGame === ObjectStateGame.AfterStart) {

            if (Math.abs(XChiken - XCrub) < WidthChiken && Math.abs(YChiken - YCrub) < WidthChiken) {

                if ((XChiken - XCrub) ** 2 + (YChiken - YCrub) ** 2 < WidthChiken ** 2) {

                    FlickChicken();

                }
                
            }

        }

    }

}

setInterval(Apdate, 5);

setInterval(() => {
    if (ScaleChicken == "-1 +1") console.log(`${ScaleChicken}`);
    //console.log(`${ScaleChiken}`);
    //console.log(ArrayCrab);
    //console.log(XChiken - document.documentElement.clientWidth / 2);
    //console.log(XChiken - Number.parseFloat(document.clientWidth) / 2);
}, 1000);

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

    if (StateGame === ObjectStateGame.AfterStart && IfKeyLeftOnOff) {
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

    if (StateGame === ObjectStateGame.AfterStart && IfKeyRightOnOff) {
        requestAnimationFrame(MoveRight);
    }
}

function Jump(TimeNow) {

    const VelocityInitial = WidthChiken * 12;
    const Gravity = WidthChiken * 24;

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

    if (StateGame !== ObjectStateGame.Failure && 0 <= TimeElapsedJumpSecond && TimeElapsedJumpSecond < 1) {
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

    if (StateGame === ObjectStateGame.AfterStart && !event.repeat) {

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

    if (StateGame === ObjectStateGame.AfterStart) {

        if (event.key === "ArrowLeft") {
            IfKeyLeftOnOff = false;
            TimePreLeft = undefined;
        }
        if (event.key === "ArrowRight") {
            IfKeyRightOnOff = false;
            TimePreRight = undefined;
        }

    }
    
}

document.addEventListener("keydown", Keydown);
document.addEventListener("keyup", Keyup);

//ChikenEnd
//EnemyCrabStart

const Contents = document.querySelector("#Contents");

const ArrayCrab = [];

const Object = {

    MoveCrabX:
    function MoveCrabX(TimeNow) {

        const StyleCrab = getComputedStyle(this.Crab);

        if (this.TimeStartX === undefined) {
        this.TimeStartX = TimeNow;
        }

        let TimeElapsed = TimeNow - this.TimeStartX;

        if (Number.isNaN(TimeElapsed)) {
            TimeElapsed = 0;
        }

        let DistanceMove;

        if (this.Crab.classList.contains("CrabP")) {
            DistanceMove = TimeElapsed * WidthChiken / 30;
        }
        else {
            DistanceMove = TimeElapsed * WidthChiken / 300;
        }

        if (this.Crab.classList.contains("Left")) {
            this.Crab.style.right = `${Number.parseFloat(StyleCrab.getPropertyValue("right")) - DistanceMove}px`;
        }
        if (this.Crab.classList.contains("Right")) {
            this.Crab.style.left = `${Number.parseFloat(StyleCrab.getPropertyValue("left")) - DistanceMove}px`;
        }

        this.TimeStartX = TimeNow;

        requestAnimationFrame(MoveCrabX.bind(this));

    },

    MoveCrabY: 
    function MoveCrabY(TimeNow) {

        const VelocityInitial = WidthChiken * this.VelocityInitialRate;
        const Gravity = WidthChiken * this.VelocityInitialRate * this.GravityRate;

        if (!this.TimeStartY) {
            this.TimeStartY = TimeNow;
        }

        let TimeElapsed = TimeNow - this.TimeStartY;
        let TimeElapsedSecond = Math.min(TimeElapsed / 1000, 2 / this.GravityRate);

        if (Number.isNaN(TimeElapsedSecond)) {
            TimeElapsedSecond = 0;
        }

        const DistanceJump = VelocityInitial * TimeElapsedSecond - Gravity * TimeElapsedSecond ** 2 / 2;
        
        this.Crab.style.bottom = `${DistanceJump}px`;

        if (2 / this.GravityRate <= TimeElapsedSecond) {
            this.TimeStartY = undefined;
        }

        requestAnimationFrame(MoveCrabY.bind(this));

    }
};

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

    const ObjectCrab = {
        Crab: Crab,
        TimeStartX: undefined,
        TimeStartY: undefined,
        VelocityInitialRate: undefined,
        GravityRate: undefined,
    };

    switch (Crab.className) {

        case "CrabR Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 10;
            ObjectCrab.GravityRate = 4;

        break;
        case "CrabB Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 10;
            ObjectCrab.GravityRate = 4;

        break;
        case "CrabY Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 6;
            ObjectCrab.GravityRate = 1;

        break;
        case "CrabG Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 6;
            ObjectCrab.GravityRate = 1;

        break;
        case "CrabP Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrabFast);

            ObjectCrab.VelocityInitialRate = 0;
            ObjectCrab.GravityRate = 0;

        break;
        case "CrabP Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrabFast);

            ObjectCrab.VelocityInitialRate = 0;
            ObjectCrab.GravityRate = 0;

        break;
    }

    const FuncX = Object.MoveCrabX.bind(ObjectCrab);
    const FuncY = Object.MoveCrabY.bind(ObjectCrab);
    FuncX();
    setTimeout(FuncY, Math.random() * 2000)

    ArrayCrab.push(Crab);

    setTimeout(() => {
        ArrayCrab.shift();
        Crab.remove();
    }, 7000);

}

function SpawnCrabR(Crab) {

    Crab.classList.add("CrabR", "Left");

    DisplayCrab(Crab);

}
function SpawnCrabB(Crab) {

    Crab.classList.add("CrabB", "Right");

    DisplayCrab(Crab);

}
function SpawnCrabY(Crab) {

    Crab.classList.add("CrabY", "Left");

    DisplayCrab(Crab);

}
function SpawnCrabG(Crab) {

    Crab.classList.add("CrabG", "Right");

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

    let Seed;

    if (20 < CountInt) {
        Seed = Math.random() * 4.0;
    }
    else {
        Seed = Math.random() * 4.1;
    }

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

let IntervalCountdown;

const CountText = document.querySelector("#CountText");

const KeyframesCountdown = {
    offset: [0.8, 1],
    scale: [1, 1.5]
}

const OptionsCountdown = {
    duration: 1000
}

let CountInt = 6;

function Countdown() {

    CountInt--;

    const AnimateCountText = CountText.animate(KeyframesCountdown, OptionsCountdown);
    AnimateCountText.cancel();

    if (StateGame === ObjectStateGame.Failure) {

        clearInterval(IntervalCountdown);
        
    }
    else if (0 < CountInt) {

        CountText.textContent = CountInt;
        AnimateCountText.play();

    }
    else {

        StateGame = ObjectStateGame.Success

        CountText.textContent = "Finish!"
        
        clearInterval(IntervalCountdown);

        clearInterval(IntervalChooseCrab);

        setTimeout(DisplayWin, 1000);

        setTimeout(FlyChicken, 1000);

    }
    
}

setTimeout(() => {
    StateGame = ObjectStateGame.AfterStart
    IntervalCountdown = setInterval(Countdown, 1000);
}, 1500);

const KeyframesLoseText = {
    scale: [1, 2]
}
const KeyframesWinText = {
    scale: [1, 2]
}

const OptionsLoseText = {
    duration: 200,
    fill: "both"
}
const OptionsWinText = {
    duration: 200,
    fill: "both"
}

function DisplayLose() {
    CountText.textContent = "YOU LOSE"
    CountText.animate(KeyframesLoseText, OptionsLoseText);
}
function DisplayWin() {
    CountText.textContent = "YOU WIN!"
    CountText.animate(KeyframesWinText, OptionsWinText);
}

//CountdownEnd