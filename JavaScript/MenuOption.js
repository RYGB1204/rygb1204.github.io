// オプションメニュー画面の切り替えに関する処理をまとめたファイル
// このファイルで説明している「カニ」はゲームのカニではなくオプションメニュー画面の「カニ」（５匹並んで跳ねているやつ）です

// 制御したいHTML要素を取得
const HomeMenu = document.querySelector("#HomeMenu");

const Palette = document.querySelector("#Palette");
const ArrayIcon = document.querySelectorAll("#Icon");
const ArrayMenuCrab = document.querySelectorAll("#MenuCrab");

// オプションボタンのクリックでオプションメニュー画面を切り替える
ButtonOption.addEventListener("click", () => {

    // クリックするたびに、各要素に「Display」クラスを追加除去
    HomeMenu.classList.toggle("Display");

    Palette.classList.toggle("Display");
    
    for (const MenuCrab of ArrayMenuCrab) {
        MenuCrab.classList.toggle("Display");
    }

});

// アイコンのクリックで別ページに移動
for (const Icon of ArrayIcon) {

    Icon.addEventListener("click", (event) => {

        switch (event.currentTarget.classList[0]) {

            case "Fishing":
                open("https://rygb1204.github.io/game1");
                break;

            case "Gallery":
                open("https://rygb1204.github.io/gallery-pictures-ai");
                break;

        }

    });

}