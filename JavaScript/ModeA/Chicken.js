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

let KeyframesChickenMoveLeft, KeyframesChickenMoveRight;
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
    
    if (StateGame === ObjectStateGame.AfterStart && IfKeyLeftOnOff && !IfKeyRightOnOff) {

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

        requestAnimationFrame(MoveLeft);

    }

}

function MoveRight(TimeNow) {

    if (StateGame === ObjectStateGame.AfterStart && IfKeyRightOnOff && !IfKeyLeftOnOff) {

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

        requestAnimationFrame(MoveRight);

    }

}

function PlaySoundJumpChicken(SoundSourceJumpChicken) {

  SoundJumpChicken = ManagerAudio.createBufferSource();
  
  SoundJumpChicken.buffer = SoundSourceJumpChicken;

  SoundJumpChicken.connect(ManagerAudio.destination);

  SoundJumpChicken.start();

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
            Chicken.animate(KeyframesChickenMoveLeft, OptionsChickenMove);

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
            PlaySoundJumpChicken(SoundSourceJumpChicken);

        }

    }

}

function Keyup(event) {

    if (StateGame === ObjectStateGame.AfterStart) {

        if (event.key === "ArrowLeft") {

            IfKeyLeftOnOff = false;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

            if (IfKeyRightOnOff) {

                requestAnimationFrame(MoveRight);
                Chicken.animate(KeyframesChickenMoveRight, OptionsChickenMove);

            }

        }
        if (event.key === "ArrowRight") {

            IfKeyRightOnOff = false;

            TimeStartMove = undefined;
            PositionStartMove = undefined;

            if (IfKeyLeftOnOff) {
                
                requestAnimationFrame(MoveLeft);
                Chicken.animate(KeyframesChickenMoveLeft, OptionsChickenMove);
                
            }

        }

    }
    
}

let PointerLeft, PointerRight;

function PointerdownContents(event) {

    const RectContents = event.currentTarget.getBoundingClientRect();
    const PointerX = event.clientX - RectContents.left;

    if (StateGame === ObjectStateGame.AfterStart) {

        if (PointerX < XChicken - WidthChicken) {
    
            IfKeyLeftOnOff = true;
    
            TimeStartMove = undefined;
            PositionStartMove = undefined;
    
            requestAnimationFrame(MoveLeft);
            Chicken.animate(KeyframesChickenMoveLeft, OptionsChickenMove);

            PointerLeft = event.pointerId;
    
        }
        else if (XChicken + WidthChicken < PointerX) {
    
            IfKeyRightOnOff = true;
    
            TimeStartMove = undefined;
            PositionStartMove = undefined;
    
            requestAnimationFrame(MoveRight);
            Chicken.animate(KeyframesChickenMoveRight, OptionsChickenMove);

            PointerRight = event.pointerId;
    
        }
        else {

            if (!IfJumpOnOff)  {
    
                IfJumpOnOff = true;
        
                TimeStartJump = undefined;
        
                requestAnimationFrame(Jump);
                PlaySoundJumpChicken(SoundSourceJumpChicken);
        
            }

        }

    }

}

async function PointerupContents(event) {

    if (StateGame === ObjectStateGame.AfterStart) {

        if (event.pointerId === PointerLeft) {

            IfKeyLeftOnOff = false;
    
            TimeStartMove = undefined;
            PositionStartMove = undefined;

            if (IfKeyRightOnOff) {

                requestAnimationFrame(MoveRight);
                Chicken.animate(KeyframesChickenMoveRight, OptionsChickenMove);

            }

        }
        else if (event.pointerId === PointerRight) {

            IfKeyRightOnOff = false;
    
            TimeStartMove = undefined;
            PositionStartMove = undefined;

            if (IfKeyLeftOnOff) {
                
                requestAnimationFrame(MoveLeft);
                Chicken.animate(KeyframesChickenMoveLeft, OptionsChickenMove);
                
            }

        }

    }

}

document.addEventListener("keydown", Keydown);
document.addEventListener("keyup", Keyup);
Contents.addEventListener("pointerdown", PointerdownContents);
Contents.addEventListener("pointerup", PointerupContents);

Chicken.animate(KeyframesChickenAppear, OptionsChickenAppear);

function ApdateChickenJS() {

    XChicken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    YChicken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    WidthChicken = Number.parseFloat(StyleChicken.getPropertyValue("width"));

    ScaleChicken = StyleChicken.getPropertyValue("scale");

    KeyframesChickenMoveLeft = {
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