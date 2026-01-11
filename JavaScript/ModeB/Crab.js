const KeyframesFlickCrab = {
    rotate: ["0deg", "360deg"]
};
const OptionsFlickCrab = {
    duration: 200,
    iterations: "Infinity"
};

// カニを弾き飛ばす音を鳴らす
function PlaySoundFlickCrab(SoundSourceFlickCrab) {

  SoundFlickCrab = ManagerAudio.createBufferSource();
  
  SoundFlickCrab.buffer = SoundSourceFlickCrab;

  SoundFlickCrab.connect(ManagerAudio.destination);

  SoundFlickCrab.start();

}

// カニを弾き飛ばす（カニをタッチしたときに呼び出される）
function FlickCrab() {

    const PositionCrabHorizontalStart = this.StyleCrab.getPropertyValue("left");
    const PositionCrabVerticalStart = this.StyleCrab.getPropertyValue("bottom");
    const xCrabStart = Number.parseFloat(PositionCrabHorizontalStart) + Number.parseFloat(this.StyleCrab.getPropertyValue("width")) / 2;
    const yCrabStart = Number.parseFloat(PositionCrabVerticalStart) + Number.parseFloat(this.StyleCrab.getPropertyValue("width")) / 2;
    
    const PositionCrabHorizontalEnd = this.PositionHorizontalInitial;
    const PositionCrabVerticalEnd = this.PositionVerticalInitial;
    const xCrabEnd = Number.parseFloat(PositionCrabHorizontalEnd) + Number.parseFloat(this.StyleCrab.getPropertyValue("width")) / 2;
    const yCrabEnd = Number.parseFloat(PositionCrabVerticalEnd) + Number.parseFloat(this.StyleCrab.getPropertyValue("width")) / 2;

    const DistanceFlickCrab = Math.sqrt((xCrabEnd - xCrabStart) ** 2 + (yCrabEnd - yCrabStart) ** 2);

    let Duration;

    if (this.Crab.classList.contains("CrabP")) {
        Duration = DistanceFlickCrab / HeightContents * 500;
    }
    else {
        Duration = DistanceFlickCrab / HeightContents * 1500;
    }

    this.KeyframesCrab.left = [PositionCrabHorizontalStart, PositionCrabHorizontalEnd];
    this.KeyframesCrab.bottom = [PositionCrabVerticalStart, PositionCrabVerticalEnd];
    this.OptionsCrab.duration = Duration;

    this.Crab.animate(this.KeyframesCrab, this.OptionsCrab);
    this.Crab.animate(KeyframesFlickCrab, OptionsFlickCrab);

    PlaySoundFlickCrab(SoundSourceFlickCrab);

}

// カニをニワトリに向けて動かす
function DisplayCrab(Crab, StyleCrab) {

    const ObjectCrab = {
        Crab: Crab,
        StyleCrab: StyleCrab,
        PositionHorizontalInitial: "",
        PositionVerticalInitial: "",
        KeyframesCrab: {left: [], bottom: []},
        OptionsCrab: {duration: [], fill: "both"}
    }

    ObjectCrab.PositionHorizontalInitial = StyleCrab.getPropertyValue("left");
    ObjectCrab.PositionVerticalInitial = StyleCrab.getPropertyValue("bottom");
    
    const xCrabInitial = Number.parseFloat(ObjectCrab.PositionHorizontalInitial) + Number.parseFloat(StyleCrab.getPropertyValue("width")) / 2;
    const yCrabInitial = Number.parseFloat(ObjectCrab.PositionVerticalInitial) + Number.parseFloat(StyleCrab.getPropertyValue("width")) / 2;
    const WidthCrab = Number.parseFloat(StyleCrab.getPropertyValue("width"));
    
    const DistanceCrabChicken = Math.sqrt((xChicken - xCrabInitial) ** 2 + (yChicken - yCrabInitial) ** 2);
    
    const PositionCrabHorizontalStart = ObjectCrab.PositionHorizontalInitial;
    const PositionCrabVerticalStart = ObjectCrab.PositionVerticalInitial;
    
    const PositionCrabHorizontalEnd = `${xChicken - WidthCrab / 2}px`;
    const PositionCrabVerticalEnd = "0px";
    
    let Duration;
    
    if (Crab.classList.contains("CrabP")) {
        Duration = DistanceCrabChicken / HeightContents * 1000 * (Math.random() * 0.2 + 0.4);
    }
    else {
        Duration = DistanceCrabChicken / HeightContents * 1000 * (Math.random() * 0.5 + 1.0);
    }
    
    ObjectCrab.KeyframesCrab.left = [PositionCrabHorizontalStart, PositionCrabHorizontalEnd];
    ObjectCrab.KeyframesCrab.bottom = [PositionCrabVerticalStart, PositionCrabVerticalEnd];
    ObjectCrab.OptionsCrab.duration = Duration;
    
    Crab.animate(ObjectCrab.KeyframesCrab, ObjectCrab.OptionsCrab);
    
    Crab.addEventListener("pointerdown", FlickCrab.bind(ObjectCrab), { once: true });

    ArrayCrab.push(Crab);

    setTimeout(() => {
        Crab.remove();
        ArrayCrab.shift();
    }, 7000);

}

// カニが出現する位置を決める
function ChoosePosition(Crab) {

    Contents.append(Crab);
    const StyleCrab = getComputedStyle(Crab);

    Crab.style.bottom = "120%";

    if (Crab.classList.contains("CrabR")) {
        Crab.style.left = `${Math.random() * 50 -50}%`;
    }
    if (Crab.classList.contains("CrabB")) {
        Crab.style.right = `${Math.random() * 50 -50}%`;
    }
    if (Crab.classList.contains("CrabY")) {
        Crab.style.left = `${Math.random() * 50 -150}%`;
    }
    if (Crab.classList.contains("CrabG")) {
        Crab.style.right = `${Math.random() * 50 -150}%`;
    }
    if (Crab.classList.contains("CrabP")) {
        const WidthCrabP = Number.parseFloat(StyleCrab.getPropertyValue("width"));
        Crab.style.left = `${WidthContents / 2 - WidthCrabP / 2}px`;
    }

    DisplayCrab(Crab, StyleCrab);

}

// カニの色をランダムに決定する
function ChooseCrab() {

    const Crab = document.createElement("div");
    const IdCrab = document.createAttribute("id");
    IdCrab.value = "Crab";
    Crab.setAttributeNode(IdCrab);

    let Seed;

    if (0 < Number.parseInt(CountText.textContent) && Number.parseInt(CountText.textContent) < 20) {
        Seed = Math.random() * 4.1;
    }
    else {
        Seed = Math.random() * 4.0;
    }

    if (Seed < 1.0) {
        Crab.classList.add("CrabR");
    }
    else if (Seed < 2.0) {
        Crab.classList.add("CrabB");
    }
    else if (Seed < 3.0) {
        Crab.classList.add("CrabY");
    }
    else if (Seed < 4.0) {
        Crab.classList.add("CrabG");
    }
    else {
        Crab.classList.add("CrabP");
    }

    ChoosePosition(Crab);

}

const IntervalChooseCrab = setInterval(ChooseCrab, 1000);

// ゲームの状況を常に監視する
function ApdateCrabJS() {

    if (StateGame !== StateGamePrevious.CrabJS) {

        switch (StateGame) {

            case ObjectStateGame.Success:

                clearInterval(IntervalChooseCrab);

                break;

        }

    }

    StateGamePrevious.CrabJS = StateGame;

}

setInterval(ApdateCrabJS, 10);