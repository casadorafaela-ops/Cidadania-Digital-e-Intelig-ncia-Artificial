// NAVEGAÇÃO SUAVE
function go(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// CURIOSIDADES
const facts=[
"IA já consegue criar músicas e imagens",
"Mais de 90% dos dados foram criados recentemente",
"Cyberbullying pode ser crime em muitos países",
"Internet surgiu para comunicação militar"
];

function newFact(){
document.getElementById("fact").innerText =
facts[Math.floor(Math.random()*facts.length)];
}

// SIMULAÇÃO SEGURANÇA
function safe(n){
document.getElementById("safeResult") =
document.getElementById("safeResult").innerText =
n===3 ? "✔ Você agiu corretamente!" :
"❌ Perigo: nunca envie senhas";
}

// QUIZ
const q={
text:"O que é IA?",
options:["Máquina inteligente","Jogo","Site","App"],
correct:0
};

document.getElementById("q").innerText=q.text;

document.querySelectorAll("#quiz button").forEach((b,i)=>{
b.innerText=q.options[i];
});

function answer(i){
document.getElementById("r").innerText =
i===q.correct?"✔ Correto":"❌ Errado";
}

// IA CHAT
function chat(){
let t=document.getElementById("input").value.toLowerCase();

let r=
t.includes("ia")?"IA aprende com dados":
t.includes("cyber")?"Cyberbullying é agressão online":
t.includes("privacidade")?"Proteja seus dados pessoais":
"Não entendi bem";

document.getElementById("out").innerText=r;
}
