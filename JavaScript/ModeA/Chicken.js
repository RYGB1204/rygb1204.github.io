const Chicken = document.createElement("div");
const IdChicken = document.createAttribute("id");
IdChicken.value = "Chicken";
Chicken.setAttributeNode(IdChicken);

Contents.append(Chicken);

const StyleChicken = getComputedStyle(Chicken);

let XChicken, YChicken, WidthChicken, ScaleChicken;

let XCrub, YCrub, WidthCrab;

const KeyframesChickenAppear = {
    translate: ["0 -100vh", 0],
};
const OptionsChickenAppear = {
    duration: 1000,
    easing: "ease-in"
};

let KeyframesChikenMoveLeft, KeyframesChickenMoveRight;
const OptionsChickenMove = {
    duration: 100,
    fill: "both"
};

const KeyframesChickenFlickTranslate = {
    translate: []
};
const KeyframesChickenFlickRotate = {
    rotate: ["0deg", "360deg"]
};
const OptionsChickenFlickTranslate = {
    duration: 2000,
    fill: "both"
};
const OptionsChickenFlickRotate = {
    duration: 200,
    iterations: "Infinity"
};

const KeyframesChickenFly = {
    translate: []
};
const OptionsChickenFly = {
    duration: 2000,
    fill: "both"
}

const ManagerAudio = new AudioContext();

let SoundFlickChicken;

async function SetUpSoundSourceFlickChicken() {

  const Response = await fetch("../Sound/FlickChicken.mp3");
  const ResponseBuffer = await Response.arrayBuffer();

  const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

  return AudioBuffer;

}

function PlaySoundFlickChicken(SoundSourceFlickChicken) {

  SoundFlickChicken = ManagerAudio.createBufferSource();
  
  SoundFlickChicken.buffer = SoundSourceFlickChicken;

  SoundFlickChicken.connect(ManagerAudio.destination);

  SoundFlickChicken.start();

}

async function FlickChicken() {
    
    if (XChicken - XCrub < 0) {
        KeyframesChickenFlickTranslate.translate = [0, "-200vw -100vw"];
    }
    else {
        KeyframesChickenFlickTranslate.translate = [0, "+200vw -100vw"];
    }
    
    Chicken.animate(KeyframesChickenFlickTranslate, OptionsChickenFlickTranslate);
    Chicken.animate(KeyframesChickenFlickRotate, OptionsChickenFlickRotate);
    
    const SoundSourceFlickChicken = await SetUpSoundSourceFlickChicken();

    PlaySoundFlickChicken(SoundSourceFlickChicken);

}

function FlyChicken() {

    if (ScaleChicken.split(" ")[0] === "-1") {
        KeyframesChickenFly.translate = [0, "-10vw -100vh"];
    }
    else {
        KeyframesChickenFly.translate = [0, "+10vw -100vh"];
    }

    Chicken.animate(KeyframesChickenFly, OptionsChickenFly);

}

let TimeStartMove, PositionStartMove;
let TimeStartJump;

function MoveLeft(TimeNow) {

    if (!TimeStartMove) {
        TimeStartMove = TimeNow;
    }
    if (!PositionStartMove) {
        PositionStartMove = XChicken - WidthChicken / 2;
    }

    let TimeElapsedLeft = TimeNow - TimeStartMove;

    if (Number.isNaN(TimeElapsedLeft)) {
        TimeElapsedLeft = 0;
    }

    const DistanceMoveLeft = TimeElapsedLeft * WidthChicken / 200;

    Chicken.style.left = `${Math.max(PositionStartMove - DistanceMoveLeft, 0)}px`;

    if (StateGame === ObjectStateGame.AfterStart && IfKeyLeftOnOff) {
        requestAnimationFrame(MoveLeft);
    }
}

function MoveRight(TimeNow) {

    if (!TimeStartMove) {
        TimeStartMove = TimeNow;
    }
    if (!PositionStartMove) {
        PositionStartMove = XChicken - WidthChicken / 2;
    }

    let TimeElapsedRight = TimeNow - TimeStartMove;

    if (Number.isNaN(TimeElapsedRight)) {
        TimeElapsedRight = 0;
    }

    const DistanceMoveRight = TimeElapsedRight * WidthChicken / 200;

    Chicken.style.left = `${Math.min(PositionStartMove + DistanceMoveRight, WidthContents - WidthChicken)}px`;

    if (StateGame === ObjectStateGame.AfterStart && IfKeyRightOnOff) {
        requestAnimationFrame(MoveRight);
    }
}

function Jump(TimeNow) {

    const VelocityInitial = WidthChicken * 12;
    const Gravity = WidthChicken * 24;

    if (!TimeStartJump) {
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

let IfKeyLeftOnOff = false;
let IfKeyRightOnOff = false;
let IfJumpOnOff = false;

function Keydown(event) {

    if (StateGame === ObjectStateGame.AfterStart && !event.repeat) {
        
        if (event.key === "ArrowLeft") {

            IfKeyLeftOnOff = true;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

            requestAnimationFrame(MoveLeft);
            Chicken.animate(KeyframesChikenMoveLeft, OptionsChickenMove);

        }
        if (event.key === "ArrowRight") {

            IfKeyRightOnOff = true;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

            requestAnimationFrame(MoveRight);
            Chicken.animate(KeyframesChickenMoveRight, OptionsChickenMove);

        }

        if (event.key === " " && !IfJumpOnOff)  {

            IfJumpOnOff = true;

            TimeStartJump = undefined;

            requestAnimationFrame(Jump);

        }

    }

}

function Keyup(event) {

    if (StateGame === ObjectStateGame.AfterStart) {

        if (event.key === "ArrowLeft") {

            IfKeyLeftOnOff = false;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

        }
        if (event.key === "ArrowRight") {

            IfKeyRightOnOff = false;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

        }

    }
    
}

document.addEventListener("keydown", Keydown);
document.addEventListener("keyup", Keyup);

Chicken.animate(KeyframesChickenAppear, OptionsChickenAppear);

function ApdateChickenJS() {

    XChicken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    YChicken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    WidthChicken = Number.parseFloat(StyleChicken.getPropertyValue("width"));

    ScaleChicken = StyleChicken.getPropertyValue("scale");

    KeyframesChikenMoveLeft = {
        scale: [`${ScaleChicken}`, "-1 1"]
    };
    KeyframesChickenMoveRight = {
        scale: [`${ScaleChicken}`, "+1 1"]
    };

    for (const Crub of ArrayCrab) {

        const StyleCrab = getComputedStyle(Crub);

        XCrub = Number.parseFloat(StyleCrab.getPropertyValue("left")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.50;
        YCrub = Number.parseFloat(StyleCrab.getPropertyValue("bottom")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.32;//console.log(YCrub);
        WidthCrab = Number.parseFloat(StyleCrab.getPropertyValue("width"));

        if (StateGame === ObjectStateGame.AfterStart) {

            if (Math.abs(XChicken - XCrub) < (WidthChicken + WidthCrab) / 2 && Math.abs(YChicken - YCrub) < (WidthChicken + WidthCrab) / 2) {

                if ((XChicken - XCrub) ** 2 + (YChicken - YCrub) ** 2 < ((WidthChicken + WidthCrab) / 2) ** 2) {

                    FlickChicken();

                    StateGame = ObjectStateGame.Failure;

                }
                
            }

        }

    }

    if (StateGame !== StateGamePrevious.ChickenJS) {

        switch (StateGame) {

            case ObjectStateGame.Success:

                setTimeout(FlyChicken, 1000);

            break;

        }

    }

    StateGamePrevious.ChickenJS = StateGame;

}

setInterval(ApdateChickenJS, 5);