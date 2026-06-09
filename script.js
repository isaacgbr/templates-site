const dataFinal = new Date("2000-01-01T00:00:00-03:00");

const timer = document.getElementById("timer");

function atualizar(){

document.getElementById("countdown").style.display="none";

document.getElementById("senha").style.display="block";

clearInterval(intervalo);

}

document.getElementById("countdown").style.display="none";
document.getElementById("senha").style.display="block";

clearInterval(intervalo);
return;
}

const horas = Math.floor(diferenca/(1000*60*60));
const minutos = Math.floor((diferenca/(1000*60))%60);
const segundos = Math.floor((diferenca/1000)%60);

timer.innerHTML=
`${horas}h ${minutos}m ${segundos}s`;

}

const intervalo=setInterval(atualizar,1000);

atualizar();

function verificarSenha(){

const resposta=
document.getElementById("resposta").value.trim();

if(resposta==="05/10/2026"){

document.getElementById("senha").style.display="none";
document.getElementById("surpresa").style.display="block";

criarCoracoes();

}else{

document.getElementById("erro").innerHTML=
"❤️ Tente lembrar da nossa data especial ❤️";

}

}

for(let i=0;i<80;i++){

const estrela=document.createElement("div");

estrela.className="star";

estrela.style.width=Math.random()*3+1+"px";
estrela.style.height=estrela.style.width;

estrela.style.left=Math.random()*100+"vw";
estrela.style.top=Math.random()*100+"vh";

estrela.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(estrela);

}

function criarCoracoes(){

for(let i=0;i<20;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDelay=
Math.random()*5+"s";

document.body.appendChild(heart);

}

}
