const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

const KeyframesHeaderFooter = {
    opacity: [0, 1],
};

const OptionsHeaderFooter = {
    duration: 1000,
    easing: "ease",
};

Header.animate(KeyframesHeaderFooter, OptionsHeaderFooter);
Footer.animate(KeyframesHeaderFooter, OptionsHeaderFooter);

const ButtonOption = document.querySelector("#ButtonOption");

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