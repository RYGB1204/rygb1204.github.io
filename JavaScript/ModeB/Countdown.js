const CountText = document.createElement("p");
const IdCountText = document.createAttribute("id");
IdCountText.value = "CountText";

CountText.setAttributeNode(IdCountText);

Contents.append(CountText);

const ButtonRetry = document.createElement("button");
const IdButtonRetry = document.createAttribute("id");
IdButtonRetry.value = "ButtonRetry";

ButtonRetry.setAttributeNode(IdButtonRetry);

Contents.append(ButtonRetry);



// const CountText = document.querySelector("#CountText");
// const ButtonRetry = document.querySelector("#ButtonRetry");

const StyleButtonRetry = getComputedStyle(ButtonRetry);

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
    fill: "both"
};

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

function ApdateCountdownJS() {

    if (StateGame !== StateGamePrevious.CountdownJS) {

        switch (StateGame) {

            case ObjectStateGame.Failure:

                AnimateCountText.cancel();

                setTimeout(DisplayLose, 1000);

            break;

        }

    }

    StateGamePrevious.CountdownJS = StateGame;

}

setInterval(ApdateCountdownJS, 10);