const timer = document.getElementById("timer");

// TIMER VISUAL (o que ela vê)

const dataExibida =
new Date("2026-06-13T00:00:00-03:00");

const dataDisparo =
new Date("2026-06-12T19:30:00-03:00");



const perguntas = [
{
pergunta: "Qual dessas cores eu sei que você gosta mais?",
alternativas: ["Verde","Azul","Roxo","Vermelho"],
correta: "Azul"
},
{
pergunta: "O que normalmente consegue melhorar seu humor?",
alternativas: ["Música","Doces","Filmes","Dormir"],
correta: "Doces"
},
{
pergunta: "Quando completaremos 1 ano de namoro?",
alternativas: ["05/09/2026","05/10/2026","10/05/2026","05/10/2025"],
correta: "05/10/2026"
},
{
pergunta: "Eu guardo roupas todos os dias, mas hoje estou guardando algo muito mais especial. Onde está a sua surpresa?",
alternativas: ["Debaixo da cama","Na estante","Dentro do guarda-roupa","Atrás da porta"],
correta: "Dentro do guarda-roupa"
}
];

let perguntaAtual = 0;

function atualizarTimer(){

    const agora = new Date();

    const diferenca =
    dataExibida - agora;

    if(agora >= dataDisparo){

        const musica =
        document.getElementById("innerbloom");

        if(musica){

            musica.pause();

            musica.currentTime = 0;

            musica.style.display = "none";
        }

        document.getElementById("countdownPage").style.display="none";

        document.getElementById("erroPage").style.display="block";

        clearInterval(intervalo);

        return;
    }

    const horas =
    Math.floor(diferenca/(1000*60*60));

    const minutos =
    Math.floor((diferenca/(1000*60))%60);

    const segundos =
    Math.floor((diferenca/1000)%60);

    timer.innerHTML =
    `${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(atualizarTimer,1000);

function abrirCarta(){

    document.getElementById("erroPage").style.display="none";
    document.getElementById("cartaPage").style.display="block";

    const interbloom =
    document.getElementById("interbloom");

    if(interbloom){
        interbloom.pause();
    }

    const musica =
    document.getElementById("musica");

    if(musica){
        musica.play().catch(() => {});
    }
}

function abrirQuiz(){

document.getElementById("cartaPage").style.display="none";
document.getElementById("quizPage").style.display="block";

mostrarPergunta();
}

function mostrarPergunta(){

const pergunta = perguntas[perguntaAtual];

document.getElementById("pergunta").innerHTML =
pergunta.pergunta;

const progresso =
((perguntaAtual + 1) / perguntas.length) * 100;

document.getElementById("progresso").style.width =
`${progresso}%`;

const alternativas =
document.getElementById("alternativas");

alternativas.innerHTML = "";

pergunta.alternativas.forEach(opcao => {

const btn = document.createElement("button");

btn.innerHTML = opcao;

btn.className = "alternativa";

btn.onclick = () => verificarResposta(opcao);

alternativas.appendChild(btn);

});
}

function verificarResposta(opcao){

const correta =
perguntas[perguntaAtual].correta;

const erro =
document.getElementById("erroQuiz");

if(opcao === correta){

erro.innerHTML = "💚 Correto!";

perguntaAtual++;

setTimeout(()=>{

erro.innerHTML = "";

if(perguntaAtual >= perguntas.length){

document.getElementById("quizPage").style.display="none";

soltarCoracoes();

setTimeout(()=>{

document.getElementById("finalPage").style.display="block";

},2500);

return;
}

mostrarPergunta();

},800);

}else{

erro.innerHTML =
"❤️ Quase... tenta novamente.";

}
}

function soltarCoracoes(){

for(let i=0;i<30;i++){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML =
Math.random() > 0.5 ? "❤️" : "🎉";

heart.style.left =
Math.random()*100+"vw";

heart.style.animationDuration =
(Math.random()*5+4)+"s";

document.body.appendChild(heart);
}
}

// ESTRELAS

for(let i=0;i<120;i++){

    const estrela = document.createElement("div");

    estrela.className = "star";

    estrela.style.left =
    Math.random()*100+"vw";

    estrela.style.top =
    Math.random()*100+"vh";

    estrela.style.width =
    Math.random()*3+1+"px";

    estrela.style.height =
    estrela.style.width;

    estrela.style.animationDelay =
    Math.random()*3+"s";

    document.body.appendChild(estrela);
}

// CORAÇÕES CONTÍNUOS

setInterval(()=>{

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
    Math.random() > .5 ? "❤️" : "✨";

    heart.style.left =
    Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

},800);

function tocarMusica(){

    const audio =
    document.getElementById("musica");

    if(audio){
        audio.play();
    }
}

let tocando = false;

function toggleInnerbloom(){

    const musica =
    document.getElementById("innerbloom");

    const botao =
    document.getElementById("btnInnerbloom");

    if(!tocando){

        musica.style.display = "block";

        musica.play();

        botao.innerHTML =
        "⏸️ Pausar Música";

        tocando = true;

    }else{

        musica.pause();

        botao.innerHTML =
        "🎵 Tocar Música";

        tocando = false;
    }
}