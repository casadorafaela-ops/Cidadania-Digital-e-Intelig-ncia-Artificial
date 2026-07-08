// ==========================================
// 1. FUNDO DE PARTÍCULAS (Configuração Cyber)
// ==========================================
if (typeof particlesJS !== 'undefined') {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#00f2fe" }, // Ciano Neon
      "shape": { "type": "circle" },
      "opacity": { "value": 0.4, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": { 
        "enable": true, 
        "distance": 150, 
        "color": "#7f00ff", // Roxo Neon
        "opacity": 0.3, 
        "width": 1 
      },
      "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
    }
  });
}

// ==========================================
// 2. GRÁFICO DINÂMICO (Chart.js)
// ==========================================
const ctx = document.getElementById('chart');
if (ctx) {
  new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['2022', '2023', '2024', '2025', '2026'],
      datasets: [{
        label: 'Processamento Global de IA (Zettabytes)',
        data: [15, 32, 64, 110, 185],
        borderColor: '#00f2fe',
        backgroundColor: 'rgba(0, 242, 254, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#ff007f',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#e2e8f0' } },
        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#e2e8f0' } }
      },
      plugins: {
        legend: { labels: { color: '#e2e8f0', font: { family: 'Poppins', size: 12 } } }
      }
    }
  });
}

// ==========================================
// 3. SISTEMA DO CYBER QUIZ
// ==========================================
const quizData = [
  {
    question: "O que caracteriza essencialmente um ataque de 'Engenharia Social'?",
    answers: ["Manipulação psicológica para fazer o usuário revelar dados.", "Invasão direta do hardware por meio de cabos USB.", "Criação de vírus que destrói o sistema operacional."],
    correct: 0
  },
  {
    question: "Qual é a principal utilidade do algoritmo de Deep Learning na IA?",
    answers: ["Limpar o cache do navegador automaticamente.", "Mimetizar redes neurais humanas para reconhecer padrões complexos.", "Aumentar a velocidade do sinal de Wi-Fi."],
    correct: 1
  },
  {
    question: "Por que a autenticação de dois fatores (2FA) é considerada crucial?",
    answers: ["Porque ela duplica a velocidade dos downloads.", "Porque adiciona uma camada extra de barreira além da senha básica.", "Porque impede que o computador pegue poeira."],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next');
const scoreEl = document.getElementById('score');

function loadQuiz() {
  if (currentQuestion >= quizData.length) {
    questionEl.innerHTML = "⚡ Diagnóstico concluído! Você finalizou o Cyber Quiz.";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    return;
  }

  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText = `${currentQuestion + 1}. ${currentQuiz.question}`;
  answersEl.innerHTML = "";

  currentQuiz.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn-cyber');
    button.style.display = "block";
    button.style.width = "100%";
    button.style.margin = "0.5rem 0";
    button.style.textAlign = "left";
    
    button.onclick = () => checkAnswer(index, button);
    answersEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex, clickedButton) {
  const correctIndex = quizData[currentQuestion].correct;
  const allButtons = answersEl.querySelectorAll('button');

  // Desabilita os outros botões após o clique
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === correctIndex) {
    clickedButton.style.borderColor = "#00ff66";
    clickedButton.style.boxShadow = "0 0 15px #00ff66";
    score += 100;
    scoreEl.innerText = score;
  } else {
    clickedButton.style.borderColor = "#ff007f";
    clickedButton.style.boxShadow = "0 0 15px #ff007f";
    allButtons[correctIndex].style.borderColor = "#00ff66"; // Mostra a certa
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  loadQuiz();
};

// Inicializa o quiz ao carregar a página
loadQuiz();

// ==========================================
// 4. SIMULADOR DO TERMINAL ASSISTENTE IA
// ==========================================
function send() {
  const input = document.getElementById('input');
  const chatBox = document.getElementById('chatBox');
  const text = input.value.trim();

  if (!text) return;

  // Renderiza mensagem do usuário (Estilo Rosa Cyber)
  chatBox.innerHTML += `<p style="color: #ff007f; margin: 0.6rem 0;"><strong>[USUÁRIO]:</strong> ${text}</p>`;
  input.value = "";

  // Respostas simuladas inteligentes baseadas em palavras-chave
  let reply = "[SISTEMA]: Consulta não encontrada na base de dados. Tente 'ia', 'segurança', 'deepfake' ou 'ética'.";
  const cleanText = text.toLowerCase();

  if (cleanText.includes('ia') || cleanText.includes('inteligência')) {
    reply = "[SISTEMA]: Sistemas autônomos operando normalmente. Modelos LLM e redes neurais estão redefinindo a automação global.";
  } else if (cleanText.includes('segurança') || cleanText.includes('senha') || cleanText.includes('hack')) {
    reply = "[SISTEMA]: Protocolo de proteção sugerido: Utilize chaves de criptografia assimétricas e evite redes Wi-Fi públicas sem VPN.";
  } else if (cleanText.includes('deepfake') || cleanText.includes('ética')) {
    reply = "[SISTEMA]: Alerta de integridade. A manipulação de mídia exige análise de metadados para validação da verdade digital.";
  }

  // Efeito de delay para simular "processamento" da IA
  setTimeout(() => {
    chatBox.innerHTML += `<p style="color: #00f2fe; margin: 0.6rem 0;"><strong>[IA]:</strong> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Permite enviar a mensagem do chat apertando "Enter"
document.getElementById('input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') send();
});

// ==========================================
// 5. BOTÃO VOLTAR AO TOPO (Efeito Suave)
// ==========================================
const topBtn = document.getElementById('top');
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
