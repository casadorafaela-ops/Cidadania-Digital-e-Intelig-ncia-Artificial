particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#4cc9f0" },
    size: { value: 3 },
    move: { speed: 2 }
  }
});

const topBtn = document.getElementById("top");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: ["2019","2020","2021","2022","2023"],
    datasets: [{
      label: "IA",
      data: [10, 25, 45, 70, 90],
      borderColor: "#4cc9f0",
      tension: 0.4
    }]
  }
});

const questions = [
  { q: "O que é IA?", a: ["Internet","Inteligência Artificial","App"], c: 1 },
  { q: "O que é phishing?", a: ["Golpe","Jogo","Rede social"], c: 0 }
];

let i = 0;
let score = 0;

function loadQuiz() {
  document.getElementById("question").innerText = questions[i].q;

  const box = document.getElementById("answers");
  box.innerHTML = "";

  questions[i].a.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.innerText = text;

    btn.onclick = () => {
      if (idx === questions[i].c) {
        score += 10;
        btn.style.background = "#00ff99";
      } else {
        btn.style.background = "#ff4d4d";
      }

      document.getElementById("score").innerText = score;
    };

    box.appendChild(btn);
  });
}

document.getElementById("next").onclick = () => {
  i++;
  if (i < questions.length) loadQuiz();
};

loadQuiz();

function send() {
  const input = document.getElementById("input");
  const box = document.getElementById("chatBox");

  if (!input.value.trim()) return;

  box.innerHTML += `<div>Você: ${input.value}</div>`;

  let res = "Não entendi.";

  if (input.value.toLowerCase().includes("ia")) {
    res = "IA é Inteligência Artificial.";
  }

  if (input.value.toLowerCase().includes("segurança")) {
    res = "Segurança digital protege seus dados.";
  }

  box.innerHTML += `<div>IA: ${res}</div>`;

  input.value = "";
}
