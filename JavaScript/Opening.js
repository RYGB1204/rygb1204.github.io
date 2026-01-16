// ロード後のヘッダーやフッターのアニメーションに関する処理をまとめたファイル

// ヘッダーとフッターのHTML要素を取得
const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

// ヘッダーとフッターのアニメーション情報を定義　アニメーションする
const KeyframesHeaderFooter = {
    opacity: [0, 1],
};

const OptionsHeaderFooter = {
    duration: 1000,
    easing: "ease",
};

Header.animate(KeyframesHeaderFooter, OptionsHeaderFooter);
Footer.animate(KeyframesHeaderFooter, OptionsHeaderFooter);

// オプションボタンのHTML要素を取得
const ButtonOption = document.querySelector("#ButtonOption");

// オプションボタンのアニメーション情報を定義　アニメーションする
const KeyframesButtonOption = {
    scale: [0, 1],
};

const OptionsButtonOption = {
    delay: 1000,
    duration: 200,
    easing: "ease-out",
    fill: "backwards"
};

ButtonOption.animate(KeyframesButtonOption, OptionsButtonOption);