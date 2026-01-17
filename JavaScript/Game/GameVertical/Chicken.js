// 縦画面ゲームのニワトリに関する処理をまとめたファイル

// ニワトリとなるHTML要素を生成、id属性を付ける、HTMLファイルに追加、スタイル情報を取得
const Chicken = document.createElement("div");
const IdChicken = document.createAttribute("id");
IdChicken.value = "Chicken";
Chicken.setAttributeNode(IdChicken);

Contents.append(Chicken);

const StyleChicken = getComputedStyle(Chicken);

// ニワトリのx座標、y座標、幅、を後で格納する
let xChicken, yChicken, WidthChicken;

// ロード後ニワトリが上から落ちてくるときのアニメーション情報を定義
const KeyframesChickenAppear = {
    translate: ["0 -100vh", 0],
};
const OptionsChickenAppear = {
    duration: 1000,
    easing: "ease-in"
};

// ニワトリがふっ飛ばされるときのアニメーション情報を定義（ゲームに負けたとき）
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

// ニワトリが上に羽ばたく時のアニメーション情報を定義（ゲームに勝ったとき）
const KeyframesChickenFly = {
    translate: []
};
const OptionsChickenFly = {
    duration: 2000,
    fill: "both"
};

// ニワトリがふっ飛ばされる効果音を鳴らす
function PlaySoundFlickChicken(SoundSourceFlickChicken) {

  SoundFlickChicken = ManagerAudio.createBufferSource();
  
  SoundFlickChicken.buffer = SoundSourceFlickChicken;

  SoundFlickChicken.connect(ManagerAudio.destination);

  SoundFlickChicken.start();

}

// ニワトリをふっ飛ばす（ゲームに負けたら呼び出される）
function FlickChicken(Difference_xChickenCrab) {
    
    // カニとの位置関係で左か右にふっ飛ばす
    if (Difference_xChickenCrab < 0) {
        KeyframesChickenFlickTranslate.translate = [0, "-200vw -100vw"];
    }
    else {
        KeyframesChickenFlickTranslate.translate = [0, "+200vw -100vw"];
    }
    
    Chicken.animate(KeyframesChickenFlickTranslate, OptionsChickenFlickTranslate);
    Chicken.animate(KeyframesChickenFlickRotate, OptionsChickenFlickRotate);
    
    PlaySoundFlickChicken(SoundSourceFlickChicken);

}

// ニワトリが上に羽ばたく（ゲームに勝ったら呼び出される）
function FlyChicken() {

    const ScaleChicken = StyleChicken.getPropertyValue("scale");

    // ニワトリの向いている方向に合うように左上か右上に羽ばたく
    if (ScaleChicken.split(" ")[0] === "-1") {
        KeyframesChickenFly.translate = [0, "-30vw -100vh"];console.log("-1");
    }
    else {
        KeyframesChickenFly.translate = [0, "+30vw -100vh"];console.log("+1");
    }

    Chicken.animate(KeyframesChickenFly, OptionsChickenFly);

}

// ニワトリを左右交互に向ける
function TurnChicken() {

    const ScaleChicken = StyleChicken.getPropertyValue("scale");

    if (ScaleChicken.split(" ")[0] === "-1") {
        Chicken.style.scale = "+1 1";
    }
    else {
        Chicken.style.scale = "-1 1";
    }

}

// ロード後ニワトリが上から落ちてくるときのアニメーションをする
window.addEventListener("load", () => {
    Chicken.animate(KeyframesChickenAppear, OptionsChickenAppear);
});

let IntervalTurnChicken;

// ゲームの状況を常に監視する　ニワトリ、カニ、の情報を常に取得し、当たり判定をする
setInterval(() => {
    
    // ニワトリの位置、幅、を取得
    xChicken = Number.parseFloat(StyleChicken.getPropertyValue("left")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    yChicken = Number.parseFloat(StyleChicken.getPropertyValue("bottom")) + Number.parseFloat(StyleChicken.getPropertyValue("width")) / 2;
    WidthChicken = Number.parseFloat(StyleChicken.getPropertyValue("width"));
    
    // ゲームに存在する全てのカニにそれぞれ処理
    for (const ObjectCrab of ArrayObjectCrab) {
    
        // カニの位置、幅を取得
        const xCrab = Number.parseFloat(ObjectCrab.StyleCrab.getPropertyValue("left")) + Number.parseFloat(ObjectCrab.StyleCrab.getPropertyValue("width")) * 0.50;
        const yCrab = Number.parseFloat(ObjectCrab.StyleCrab.getPropertyValue("bottom")) + Number.parseFloat(ObjectCrab.StyleCrab.getPropertyValue("width")) * 0.32;//console.log(YCrub);
        const WidthCrab = Number.parseFloat(ObjectCrab.StyleCrab.getPropertyValue("width"));
    
        if (StateGame === ObjectStateGame.AfterStart) {
    
            // 当たり判定をする　カニがニワトリに接触したらニワトリをふっ飛ばす
            if (Math.abs(yChicken - yCrab) < (WidthChicken + WidthCrab) / 2 && Math.abs(xChicken - xCrab) < (WidthChicken + WidthCrab) / 2) {
    
                if ((xChicken - xCrab) ** 2 + (yChicken - yCrab) ** 2 < ((WidthChicken + WidthCrab) / 2) ** 2) {
    
                    FlickChicken(xChicken - xCrab);
    
                    StateGame = ObjectStateGame.Failure;
    
                }
                
            }
    
        }
    
    }
    
     // ゲームの状況が変化したら１度だけcase内の処理を行う
    if (StateGame !== StateGamePrevious.ChickenJS) {
    
        // ゲーム開始後、ニワトリを左右交互に向ける　ゲームに勝ったらニワトリが上に羽ばたく
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

}, 5);