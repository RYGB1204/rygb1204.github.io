const Chicken = document.createElement("div");
const IdChicken = document.createAttribute("id");
IdChicken.value = "Chicken";
Chicken.setAttributeNode(IdChicken);

Contents.append(Chicken);

const StyleChicken = getComputedStyle(Chicken);

let XChicken, YChicken, WidthChicken, ScaleChicken;

const KeyframesChickenAppear = {
    translate: ["0 -100vh", 0],
};
const OptionsChickenAppear = {
    duration: 1000,
    easing: "ease-in"
};

const KeyframesChickenTurnLeft = {
    scale: ["+1 1", "-1 1"]
};
const KeyframesChickenTurnRight = {
    scale: ["-1 1", "+1 1"]
};
const OptionsChickenTurn = {
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

async function FlickChicken(XChickenCrub) {
    
    if (XChickenCrub < 0) {
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
        KeyframesChickenFly.translate = [0, "-30vw -100vh"];console.log("-1");
    }
    else {
        KeyframesChickenFly.translate = [0, "+30vw -100vh"];console.log("+1");
    }

    Chicken.animate(KeyframesChickenFly, OptionsChickenFly);

}

Chicken.animate(KeyframesChickenAppear, OptionsChickenAppear);

function TurnChicken() {

    if (ScaleChicken.split(" ")[0] === "-1") {
        Chicken.animate(KeyframesChickenTurnRight, OptionsChickenTurn);
    }
    else {
        Chicken.animate(KeyframesChickenTurnLeft, OptionsChickenTurn);
    }

}

let IntervalTurnChicken;

function ApdateChickenJS() {

    XChicken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    YChicken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    WidthChicken = Number.parseFloat(StyleChicken.getPropertyValue("width"));
    ScaleChicken = StyleChicken.getPropertyValue("scale");

    for (const Crub of ArrayCrab) {

        const StyleCrab = getComputedStyle(Crub);

        const XCrub = Number.parseFloat(StyleCrab.getPropertyValue("left")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.50;
        const YCrub = Number.parseFloat(StyleCrab.getPropertyValue("bottom")) + Number.parseFloat(StyleCrab.getPropertyValue("width")) * 0.32;//console.log(YCrub);
        const WidthCrab = Number.parseFloat(StyleCrab.getPropertyValue("width"));

        if (StateGame === ObjectStateGame.AfterStart) {

            if (Math.abs(YChicken - YCrub) < (WidthChicken + WidthCrab) / 2 && Math.abs(XChicken - XCrub) < (WidthChicken + WidthCrab) / 2) {

                if ((XChicken - XCrub) ** 2 + (YChicken - YCrub) ** 2 < ((WidthChicken + WidthCrab) / 2) ** 2) {

                    FlickChicken(XChicken - XCrub);

                    StateGame = ObjectStateGame.Failure;

                }
                
            }

        }

    }

    if (StateGame !== StateGamePrevious.ChickenJS) {

        switch (StateGame) {

            case ObjectStateGame.AfterStart:

                IntervalTurnChicken = setInterval(TurnChicken, 1000);

                break;

            case ObjectStateGame.Success:

                clearInterval(IntervalTurnChicken);

                setTimeout(FlyChicken, 1000);

                break;

        }

    }

    StateGamePrevious.ChickenJS = StateGame;

}

setInterval(ApdateChickenJS, 5);