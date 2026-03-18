const botao = document.getElementById("menu");
const nav = document.querySelector("nav");

botao.onclick = function () {

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

}