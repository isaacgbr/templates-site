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

const botao=
document.getElementById("btnCarta");

const erro=
document.getElementById("erro");

if(resposta==="05/10/2026"){

botao.classList.remove("btnAtivo");

botao.classList.add("btnSucesso");

botao.innerHTML="Resposta correta ❤️";

setTimeout(()=>{

document.getElementById("senha").style.display="none";

document.getElementById("surpresa").style.display="block";

criarCoracoes();

},1200);

}else{

botao.classList.remove("btnAtivo");

botao.classList.add("btnErro");

erro.innerHTML=
"😒 Não acredito que você não sabe a nossa data...";

setTimeout(()=>{

botao.classList.remove("btnErro");

botao.classList.add("btnAtivo");

},800);

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

function formatarData(){

let campo=document.getElementById("resposta");

let valor=campo.value.replace(/\D/g,'');

if(valor.length>2)
valor=valor.slice(0,2)+"/"+valor.slice(2);

if(valor.length>5)
valor=valor.slice(0,5)+"/"+valor.slice(5);

campo.value=valor;

}

function validarCampo(){

const campo=document.getElementById("resposta");

const botao=document.getElementById("btnCarta");

if(campo.value.length>0){

botao.disabled=false;

botao.classList.remove("btnDesabilitado");

botao.classList.add("btnAtivo");

}else{

botao.disabled=true;

botao.classList.remove("btnAtivo");

botao.classList.add("btnDesabilitado");

}

}

}
