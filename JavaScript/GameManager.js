const ObjectStateGame = {
    BeforeStart: "BeforeStart",
    AfterStart: "AfterStart",
    Failure: "Failure",
    Success: "Success"
};

let StateGame = ObjectStateGame.BeforeStart;
const StateGamePrevious = {
    CountdownJS: "",
    ChickenJS: "",
    CrabJS: ""
};

const ArrayCrab = [];

const ManagerAudio = new AudioContext();

let SoundFlickChicken, SoundSourceFlickChicken;

let SoundJumpChicken, SoundSourceJumpChicken;

let SoundFlickCrab, SoundSourceFlickCrab;

async function SetUpSoundSourceFlickChicken() {

  const Response = await fetch("../Sound/FlickChicken.mp3");
  const ResponseBuffer = await Response.arrayBuffer();

  const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

  return AudioBuffer;

}

async function SetUpSoundSourceJumpChicken() {

  const Response = await fetch("../Sound/JumpChicken.mp3");
  const ResponseBuffer = await Response.arrayBuffer();

  const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

  return AudioBuffer;

}

async function SetUpSoundSourceFlickCrab() {

  const Response = await fetch("../Sound/FlickCrab.mp3");
  const ResponseBuffer = await Response.arrayBuffer();

  const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

  return AudioBuffer;

}

addEventListener("load", async () => {
    SoundSourceFlickChicken = await SetUpSoundSourceFlickChicken();
    SoundSourceJumpChicken = await SetUpSoundSourceJumpChicken();
    SoundSourceFlickCrab = await SetUpSoundSourceFlickCrab();
});