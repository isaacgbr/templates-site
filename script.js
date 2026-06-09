const dataFinal = new Date("2026-06-09T18:20:00");

const timer = document.getElementById("timer");

function atualizar(){

const agora = new Date();

const diferenca = dataFinal - agora;

if(diferenca <= 0){

document.getElementById("countdown").style.display = "none";

document.getElementById("senha").style.display = "block";

clearInterval(intervalo);

return;
}

const horas = Math.floor(diferenca / 1000 / 60 / 60);

const minutos = Math.floor((diferenca / 1000 / 60) % 60);

const segundos = Math.floor((diferenca / 1000) % 60);

timer.innerHTML =
`${horas}h ${minutos}m ${segundos}s`;

}

const intervalo = setInterval(atualizar,1000);

atualizar();

function verificarSenha(){

const resposta =
document.getElementById("resposta").value.trim();

if(resposta === "05/10/2026"){

document.getElementById("senha").style.display = "none";

document.getElementById("surpresa").style.display = "block";

}else{

document.getElementById("erro").innerHTML =
"Resposta incorreta ❤️";

}

}
