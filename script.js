// COUNTERS
document.querySelectorAll(".num").forEach(el=>{
  let target = +el.dataset.target;
  let count = 0;

  let interval = setInterval(()=>{
    count += target/80;
    el.innerText = Math.floor(count);

    if(count >= target) clearInterval(interval);
  },20);
});

// QUIZ
const quiz = [
  {
    q:"O que é cidadania digital?",
    options:["Uso consciente","Jogos","Compras","Redes sociais"],
    correct:0
  }
];

let qIndex = 0;

function loadQuiz(){
  const q = quiz[qIndex];
  document.getElementById("quiz-question").innerText = q.q;

  document.querySelectorAll(".quiz-options button").forEach((b,i)=>{
    b.innerText = q.options[i];
  });
}

function answerQuiz(i){
  document.getElementById("quiz-result").innerText =
  i === quiz[qIndex].correct ? "Correto!" : "Errado!";
}

loadQuiz();

// GAME
function gameChoice(c){
  document.getElementById("game-result").innerText =
  c===3 ? "Boa escolha!" : "Cuidado com dados pessoais!";
}

// IA SIMPLE
function askAI(){
  let text = document.getElementById("ia-input").value.toLowerCase();
  document.getElementById("ia-response").innerText =
  text.includes("ia") ? "IA é inteligência artificial" :
  text.includes("cyber") ? "Cyberbullying é crime digital" :
  "Não entendi";
}

// PROGRESS
let progress=0;

function increaseProgress(){
  progress+=20;
  document.getElementById("progress").style.width=progress+"%";

  document.getElementById("badge").innerText =
  progress>=100 ? "Você concluiu!" : "Continue...";
}

// CERT
function generateCertificate(){
  document.getElementById("certificate").innerText =
  progress>=100 ? "Certificado aprovado!" : "Complete o progresso";
}

// FACTS
const facts=[
  "IA aprende com dados",
  "Internet mudou o mundo",
  "Cyberbullying deve ser denunciado"
];

function newFact(){
  document.getElementById("fact").innerText =
  facts[Math.floor(Math.random()*facts.length)];
}
