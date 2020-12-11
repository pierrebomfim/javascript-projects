const header = document.querySelector("header > h1");
let br_span = document.getElementById("br");
let en_span = document.getElementById("en");
let clock_div = document.getElementById("clock");
let temp_div = document.getElementById("temp");
let rock_div = document.getElementById("rock");
let footer = document.querySelector("footer > p");


function translateBr() {
    header.innerHTML = "Aplicativos em Javascript";
    clock_div.innerHTML = "Relógio Digital";
    temp_div.innerHTML = "Conversor de Temp.";
    rock_div.innerHTML = "Pedra Papel Tesoura";
    footer.innerHTML = "© 2020 Portifólio 2.0 - Desenvolvido por Pierre Bomfim";
}

function translateEn() {
    header.innerHTML = "Basic Javascript Applications";
    clock_div.innerHTML = "Digital Clock";
    temp_div.innerHTML = "Temperature Converter";
    rock_div.innerHTML = "Rock Paper Scissor";
    footer.innerHTML = "© 2020 Portifolio 2.0 - Developed by Pierre Bomfim";
}

function main() {   
    br_span.addEventListener('click', translateBr);
    en_span.addEventListener('click', translateEn);
}
main();