function MoveCrabX(TimeNow) {

    const StyleCrab = getComputedStyle(this.Crab);

    if (!this.TimeStartX) {
    this.TimeStartX = TimeNow;
    }

    let TimeElapsed = TimeNow - this.TimeStartX;

    if (Number.isNaN(TimeElapsed)) {
        TimeElapsed = 0;
    }

    let DistanceMove;

    if (this.Crab.classList.contains("CrabP")) {
        DistanceMove = TimeElapsed * WidthChicken / 30;
    }
    else {
        DistanceMove = TimeElapsed * WidthChicken / 300;
    }

    if (this.Crab.classList.contains("Left")) {
        this.Crab.style.right = `${Number.parseFloat(StyleCrab.getPropertyValue("right")) - DistanceMove}px`;
    }
    if (this.Crab.classList.contains("Right")) {
        this.Crab.style.left = `${Number.parseFloat(StyleCrab.getPropertyValue("left")) - DistanceMove}px`;
    }

    this.TimeStartX = TimeNow;

    requestAnimationFrame(MoveCrabX.bind(this));

};

function MoveCrabY(TimeNow) {

    const VelocityInitial = WidthChicken * this.VelocityInitialRate;
    const Gravity = WidthChicken * this.VelocityInitialRate * this.GravityRate;

    if (!this.TimeStartY) {
        this.TimeStartY = TimeNow;
    }

    if (!this.AdjustmentStartY) {
        this.AdjustmentStartY = Math.random() * 1000 * 2 / this.GravityRate;
        this.TimeStartY -= this.AdjustmentStartY;
    }

    let TimeElapsed = TimeNow - this.TimeStartY;
    let TimeElapsedSecond = Math.min(TimeElapsed / 1000, 2 / this.GravityRate);

    if (Number.isNaN(TimeElapsedSecond)) {
        TimeElapsedSecond = 0;
    }

    const DistanceJump = VelocityInitial * TimeElapsedSecond - Gravity * TimeElapsedSecond ** 2 / 2;
    
    this.Crab.style.bottom = `${DistanceJump}px`;

    if (2 / this.GravityRate <= TimeElapsedSecond) {
        this.TimeStartY = undefined;
    }

    requestAnimationFrame(MoveCrabY.bind(this));

};

function DisplayCrab(Crab) {

    Contents.append(Crab);

    const ObjectCrab = {
        Crab: Crab,
        TimeStartX: undefined,
        TimeStartY: undefined,
        AdjustmentStartY: undefined,
        VelocityInitialRate: undefined,
        GravityRate: undefined,
    };

    if (Crab.classList.contains("CrabR") || Crab.classList.contains("CrabB")) {

        ObjectCrab.VelocityInitialRate = 10;
        ObjectCrab.GravityRate = 4;

    }
    if (Crab.classList.contains("CrabY") || Crab.classList.contains("CrabG")) {

        ObjectCrab.VelocityInitialRate = 6;
        ObjectCrab.GravityRate = 1;

    }
    if (Crab.classList.contains("CrabP")) {

        ObjectCrab.VelocityInitialRate = 16;
        ObjectCrab.GravityRate = 8;

    }

    requestAnimationFrame(MoveCrabX.bind(ObjectCrab));
    requestAnimationFrame(MoveCrabY.bind(ObjectCrab));

    ArrayCrab.push(Crab);

    setTimeout(() => {
        ArrayCrab.shift();
        Crab.remove();
    }, 5000);

}

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

    if (Seed < 1) {
        Crab.classList.add("CrabR", "Left");
    }
    else if (Seed < 2) {
        Crab.classList.add("CrabB", "Right");
    }
    else if (Seed < 3) {
        Crab.classList.add("CrabY", "Left");
    }
    else if (Seed < 4) {
        Crab.classList.add("CrabG", "Right");
    }
    else {

        Seed = Math.random();

        if (Seed < 0.5) {
            Crab.classList.add("CrabP", "Left");
        }
        else {
            Crab.classList.add("CrabP", "Right");
        }

    }

    DisplayCrab(Crab);

}

const IntervalChooseCrab = setInterval(ChooseCrab, 1000);

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