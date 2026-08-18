let tamanhoFonte = 16;
const corpo = document.body;

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

aumentar.addEventListener("click", function (){
        tamanhoFonte += 2;
        corpo.style.fontSize = tamanhoFonte + "px";
});

diminuir.addEventListener("click", function () {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        corpo.style.fontSize = tamanhoFonte + "px";   
    }
});
