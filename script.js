const KeyframesHeader = {
    opacity: [0, 1],
    translate: ["0 -50px", 0]
}

const KeyframesFooter = {
    opacity: [0, 1],
    //translate: ["0 +50px", 0]
}

const Options = {
    duration: 3000,
    easing: "ease"
}

const Header = document.querySelector("header");
const Footer = document.querySelector("footer");

Header.animate(KeyframesHeader, Options);
Footer.animate(KeyframesFooter, Options);