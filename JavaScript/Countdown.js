// 両ゲームのカウントダウンに関する処理をまとめたファイル

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

const KeyframesCountdown = {
    offset: [0.8, 1],
    scale: [1, 1.5]
};
const OptionsCountdown = {
    duration: 1000,
};

const AnimationCountText = CountText.animate(KeyframesCountdown, OptionsCountdown);
AnimationCountText.cancel();

let IntervalCountdown;
let CountInt = 30;

// １秒間隔でカウントダウン用の処理をする
function Countdown() {

    AnimationCountText.cancel();

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

setTimeout(() => {
    StateGame = ObjectStateGame.AfterStart
    IntervalCountdown = setInterval(Countdown, 1000);
}, 1000);

// ゲームの状況を常に監視する
function ApdateCountdownJS() {

    if (StateGame !== StateGamePrevious.CountdownJS) {

        switch (StateGame) {

            case ObjectStateGame.Failure:

                AnimationCountText.cancel();

                setTimeout(DisplayLose, 1000);

            break;

        }

    }

    StateGamePrevious.CountdownJS = StateGame;

}

setInterval(ApdateCountdownJS, 10);