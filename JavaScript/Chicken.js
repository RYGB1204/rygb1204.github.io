const Chicken = document.querySelector("#Chicken");
const StyleChicken = getComputedStyle(Chicken);

let XChiken, YChiken, WidthChiken;

const TranslateChicken = StyleChicken.getPropertyValue("translate");
let ScaleChicken;

let XCrub, YCrub, WidthCrab;

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

    ScaleChicken = StyleChicken.getPropertyValue("scale");

    KeyframesChikenLeft = {
        scale: [`${ScaleChicken}`, "-1 1"]
    };
    KeyframesChickenRight = {
        scale: [`${ScaleChicken}`, "+1 1"]
    };

    for (const Crub of ArrayCrab) {

        const StyleCrab = getComputedStyle(Crub);

        XCrub = Number.parseFloat(StyleCrab.getPropertyValue("left")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.50;
        YCrub = Number.parseFloat(StyleCrab.getPropertyValue("bottom")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.32;//console.log(YCrub);
        WidthCrab = Number.parseFloat(StyleCrab.getPropertyValue("width"));

        if (StateGame === ObjectStateGame.AfterStart) {

            if (Math.abs(XChiken - XCrub) < WidthChiken && Math.abs(YChiken - YCrub) < (WidthChiken + WidthCrab) / 2) {

                if ((XChiken - XCrub) ** 2 + (YChiken - YCrub) ** 2 < ((WidthChiken + WidthCrab) / 2) ** 2) {

                    FlickChicken();

                }
                
            }

        }

    }

}

setInterval(Apdate, 5);

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