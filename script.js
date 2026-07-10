let vidaJogador = 100;
let vidaInimigo = 100;
let posX        = 260;
let posY        = 380;

document.addEventListener("keydown",(e) => {
    if (e.key === "ArrowLeft" && posX > 10) posX -= 20;
    if (e.key === "ArrowRight" && posX < 510) posX += 20;
    document.getElementById("player").style.left = posX + "px";
    if (e.key === "ArrowUp" && posY > 10) posY -= 20;
    if (e.key === "ArrowDown" && posY < 380) posY += 20;
    document.getElementById("player").style.top = posY + "px"
});

function alterarVida(valor){
    vidaJogador += valor;
    if(vidaJogador > 100) vidaJogador = 100;
    if(vidaJogador < 0) vidaJogador = 0;

    let barra =  document.getElementById("vida-player");
    barra.style.width = vidaJogador + "%";
    barra.style.background = vidaJogador > 60 ? "green" : vidaJogador > 30 ? "yellow" : "red";

    if(vidaJogador == 0) document.getElementById("dialogo").innerText = "Você perdeu :(";
   
}

function abrirLoja(){
    let escolha = confirm("Deseja comprar uma poção de cura por 10 moedas?");
    if(escolha) alterarVida(30);
}

function ataqueEspecial(){
    vidaInimigo -= 25;
    if(vidaInimigo <0) vidaInimigo = 0;

    let barra = document.getElementById("vida-inimigo");
    barra.style.width = vidaInimigo + "%";
    document.getElementById("enemy").style.transform = "scale(1.2)";

    setTimeout(() => document.getElementById("enemy").style.transform = "scale(1)", 200);

    if(vidaInimigo === 0) document.getElementById("dialogo").innerText = "Você venceu!";
}

