// 両ゲームに共通して必要な基本的なデータを定義するファイル

// ゲームの状況リスト
const ObjectStateGame = {
    BeforeStart: "BeforeStart",
    AfterStart: "AfterStart",
    Failure: "Failure",
    Success: "Success"
};

// 最初の状況を定義　各JavaScriptファイルで使うためのプロパティを準備
let StateGame = ObjectStateGame.BeforeStart;
const StateGamePrevious = {
    CountdownJS: "",
    ChickenJS: "",
    CrabJS: ""
};

// ゲームに存在しているカニのデータを配列にいれて管理する
const ArrayObjectCrab = [];

// 効果音の準備
const ManagerAudio = new AudioContext();

let SoundFlickChicken, SoundSourceFlickChicken;

let SoundJumpChicken, SoundSourceJumpChicken;

let SoundFlickCrab, SoundSourceFlickCrab;

async function SetUpSoundSourceFlickChicken() {

    const Response = await fetch("../../Sound/FlickChicken.mp3");
    const ResponseBuffer = await Response.arrayBuffer();

    const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

    return AudioBuffer;

}

async function SetUpSoundSourceJumpChicken() {

    const Response = await fetch("../../Sound/JumpChicken.mp3");
    const ResponseBuffer = await Response.arrayBuffer();

    const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

    return AudioBuffer;

}

async function SetUpSoundSourceFlickCrab() {

    const Response = await fetch("../../Sound/FlickCrab.mp3");
    const ResponseBuffer = await Response.arrayBuffer();

    const AudioBuffer = await ManagerAudio.decodeAudioData(ResponseBuffer);

    return AudioBuffer;

}

async function StartGameManagerJS() {
    SoundSourceFlickChicken = await SetUpSoundSourceFlickChicken();
    SoundSourceJumpChicken = await SetUpSoundSourceJumpChicken();
    SoundSourceFlickCrab = await SetUpSoundSourceFlickCrab();
}

StartGameManagerJS();