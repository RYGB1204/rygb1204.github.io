// 両ゲームのカウントダウンに関する処理をまとめたファイル

// カウントダウンのテキスト　リトライボタン　となるHTML要素を生成、id属性を付ける、HTMLファイルに追加
const CountText = document.createElement("div");
const IdCountText = document.createAttribute("id");
IdCountText.value = "CountText";

CountText.setAttributeNode(IdCountText);

Contents.append(CountText);

const ButtonRetry = document.createElement("button");
const IdButtonRetry = document.createAttribute("id");
IdButtonRetry.value = "ButtonRetry";

ButtonRetry.setAttributeNode(IdButtonRetry);

Contents.append(ButtonRetry);

const StyleButtonRetry = getComputedStyle(ButtonRetry);

// カウントダウンのテキストのアニメーション情報を定義
const KeyframesCountdown = {
    offset: [0.8, 1],
    scale: [1, 1.5]
};
const OptionsCountdown = {
    duration: 1000,
};

const AnimationCountText = CountText.animate(KeyframesCountdown, OptionsCountdown);
AnimationCountText.cancel();

// カウントダウンの秒数を定義する＝３０
let CountInt = 30;

// カウントダウンの処理をする（１秒間隔で呼び出される）
function Countdown() {

    AnimationCountText.cancel();

    // ゲームに負けたらカウントダウンを止める　０秒になるまで逃げきったらカウントダウンを止め、１秒後「YOU WIN!」テキストを表示する
    if (StateGame === ObjectStateGame.Failure) {

        clearInterval(IntervalCountdown);
        
    }
    else if (0 < CountInt) {

        CountText.textContent = CountInt;
        AnimationCountText.play();

    }
    else {

        StateGame = ObjectStateGame.Success

        CountText.textContent = "Finish!"
        
        clearInterval(IntervalCountdown);

        setTimeout(DisplayWin, 1000);

    }

    CountInt--;
    
}

// 「YOU LOSE」「YOU WIN!」テキスト　リトライボタン　のアニメーション情報を定義
const KeyframesLoseText = {
    scale: [1, 2]
};
const KeyframesWinText = {
    scale: [1, 2]
};
const OptionsLoseText = {
    duration: 200,
    fill: "both"
};
const OptionsWinText = {
    duration: 200,
    fill: "both"
};

const KeyframesButtonRetry = {
    scale: [0, 1]
};
const OptionsButtonRetry = {
    duration: 200,
};

// 負け、勝ち、を示すテキストを表示する
function DisplayLose() {

    CountText.textContent = "YOU LOSE";

    ButtonRetry.style.visibility = "visible";

    CountText.animate(KeyframesLoseText, OptionsLoseText);
    ButtonRetry.animate(KeyframesButtonRetry, OptionsButtonRetry);

}
function DisplayWin() {

    CountText.textContent = "YOU WIN!";

    ButtonRetry.style.visibility = "visible";

    CountText.animate(KeyframesWinText, OptionsWinText);
    ButtonRetry.animate(KeyframesButtonRetry, OptionsButtonRetry);

}

// リトライボタンをクリック　または　Enterキーを押す　とページをリロードしてやり直せる
function ClickButtonRetry() {

    window.location.reload();

}
function KeydownButtonRetry(event) {

    if (!event.repeat) {
        
        if (event.key === "Enter") {

            ClickButtonRetry();

        }

    }

}

ButtonRetry.addEventListener("click", ClickButtonRetry);
document.addEventListener("keydown", KeydownButtonRetry);

// カウントダウンを１秒間隔で実行する
let IntervalCountdown;

setTimeout(() => {
    StateGame = ObjectStateGame.AfterStart
    IntervalCountdown = setInterval(Countdown, 1000);
}, 1000);

// ゲームの状況を常に監視する　状況が変化したら１度だけcase内の処理を行う
function ApdateCountdownJS() {

    if (StateGame !== StateGamePrevious.CountdownJS) {

        switch (StateGame) {

            // 負けたらカウントダウンを止め、１秒後「負け」テキストを表示
            case ObjectStateGame.Failure:

                AnimationCountText.cancel();

                setTimeout(DisplayLose, 1000);

            break;

        }

    }

    StateGamePrevious.CountdownJS = StateGame;

}

setInterval(ApdateCountdownJS, 10);