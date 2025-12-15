const CountText = document.querySelector("#CountText");

const KeyframesCountdown = {
    offset: [0.8, 1],
    scale: [1, 1.5]
}
const OptionsCountdown = {
    duration: 1000,
}

const AnimateCountText = CountText.animate(KeyframesCountdown, OptionsCountdown);
AnimateCountText.cancel();

let IntervalCountdown;
let CountInt = 30;

function Countdown() {

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

        setTimeout(DisplayWin, 1000);

    }

    CountInt--;
    
}

setTimeout(() => {
    StateGame = ObjectStateGame.AfterStart
    IntervalCountdown = setInterval(Countdown, 1000);
}, 1000);

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

function ApdateCountdownJS() {

    if (StateGame !== StateGamePrevious.CountdownJS) {

        switch (StateGame) {

            case ObjectStateGame.Failure:

                AnimateCountText.cancel();

                setTimeout(DisplayLose, 2000);

            break;

        }

    }

    StateGamePrevious.CountdownJS = StateGame;

}

setInterval(ApdateCountdownJS, 10);