const Object = {

    MoveCrabX:
    function MoveCrabX(TimeNow) {

        const StyleCrab = getComputedStyle(this.Crab);

        if (this.TimeStartX === undefined) {
        this.TimeStartX = TimeNow;
        }

        let TimeElapsed = TimeNow - this.TimeStartX;

        if (Number.isNaN(TimeElapsed)) {
            TimeElapsed = 0;
        }

        let DistanceMove;

        if (this.Crab.classList.contains("CrabP")) {
            DistanceMove = TimeElapsed * WidthChiken / 30;
        }
        else {
            DistanceMove = TimeElapsed * WidthChiken / 300;
        }

        if (this.Crab.classList.contains("Left")) {
            this.Crab.style.right = `${Number.parseFloat(StyleCrab.getPropertyValue("right")) - DistanceMove}px`;
        }
        if (this.Crab.classList.contains("Right")) {
            this.Crab.style.left = `${Number.parseFloat(StyleCrab.getPropertyValue("left")) - DistanceMove}px`;
        }

        this.TimeStartX = TimeNow;

        requestAnimationFrame(MoveCrabX.bind(this));

    },

    MoveCrabY: 
    function MoveCrabY(TimeNow) {

        const VelocityInitial = WidthChiken * this.VelocityInitialRate;
        const Gravity = WidthChiken * this.VelocityInitialRate * this.GravityRate;

        if (!this.TimeStartY) {
            this.TimeStartY = TimeNow;
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

    }
};

const KeyframesCrabLeft = {
    translate: [0, "+130vw 0"]
};
const KeyframesCrabRight = {
    translate: [0, "-130vw 0"]
};

const OptionsCrab = {
    duration: 5000,
    fill: "both"
};
const OptionsCrabFast = {
    duration: 500,
    fill: "both"
};

function DisplayCrab(Crab) {

    Contents.append(Crab);

    const ObjectCrab = {
        Crab: Crab,
        TimeStartX: undefined,
        TimeStartY: undefined,
        VelocityInitialRate: undefined,
        GravityRate: undefined,
    };

    switch (Crab.className) {

        case "CrabR Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 10;
            ObjectCrab.GravityRate = 4;

        break;
        case "CrabB Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 10;
            ObjectCrab.GravityRate = 4;

        break;
        case "CrabY Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 6;
            ObjectCrab.GravityRate = 1;

        break;
        case "CrabG Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrab);

            ObjectCrab.VelocityInitialRate = 6;
            ObjectCrab.GravityRate = 1;

        break;
        case "CrabP Left":

            // Crab.animate(KeyframesCrabLeft, OptionsCrabFast);

            ObjectCrab.VelocityInitialRate = 0;
            ObjectCrab.GravityRate = 0;

        break;
        case "CrabP Right":

            // Crab.animate(KeyframesCrabRight, OptionsCrabFast);

            ObjectCrab.VelocityInitialRate = 0;
            ObjectCrab.GravityRate = 0;

        break;
    }

    const FuncX = Object.MoveCrabX.bind(ObjectCrab);
    const FuncY = Object.MoveCrabY.bind(ObjectCrab);

    FuncX();
    setTimeout(FuncY, Math.random() * 2000);

    ArrayCrab.push(Crab);

    setTimeout(() => {
        ArrayCrab.shift();
        Crab.remove();
    }, 7000);

}

function SpawnCrabR(Crab) {

    Crab.classList.add("CrabR", "Left");

    DisplayCrab(Crab);

}
function SpawnCrabB(Crab) {

    Crab.classList.add("CrabB", "Right");

    DisplayCrab(Crab);

}
function SpawnCrabY(Crab) {

    Crab.classList.add("CrabY", "Left");

    DisplayCrab(Crab);

}
function SpawnCrabG(Crab) {

    Crab.classList.add("CrabG", "Right");

    DisplayCrab(Crab);

}
function SpawnCrabP(Crab) {

    const Seed = Math.random();

    if (Seed < 0.5) {
        Crab.classList.add("CrabP", "Left");
    }
    else {
        Crab.classList.add("CrabP", "Right");
    }

    DisplayCrab(Crab);

}

function ChooseCrab() {

    const Crab = document.createElement("div");
    const IdCrab = document.createAttribute("id");
    IdCrab.value = "Crab";

    Crab.setAttributeNode(IdCrab);

    let Seed;

    if (20 < CountInt) {
        Seed = Math.random() * 4.0;
    }
    else {
        Seed = Math.random() * 4.1;
    }

    if (Seed < 1) {
        SpawnCrabR(Crab);
    }
    else if (Seed < 2) {
        SpawnCrabB(Crab);
    }
    else if (Seed < 3) {
        SpawnCrabY(Crab);
    }
    else if (Seed < 4) {
        SpawnCrabG(Crab);
    }
    else {
        SpawnCrabP(Crab);
    }

}

const IntervalChooseCrab = setInterval(ChooseCrab, 1000);