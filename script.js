document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternador de Abas Dinâmico (Simula a abertura de novas páginas)
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove as classes ativas antigas
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Ativa o botão clicado
            button.classList.add('active');
            
            // Exibe a seção correspondente
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // 2. Banco de Dados Local da IA de Curiosidades
    const curiosidades = [
        "A IA atual já consegue descobrir novos materiais em laboratório 10 vezes mais rápido que os métodos humanos tradicionais.",
        "Cientistas criaram uma IA capaz de traduzir textos em línguas antigas e mortas (como o acádio) que poucos humanos conseguem ler.",
        "Sabia que algoritmos generativos conseguem criar designs de peças aeroespaciais mais leves e resistentes imitando estruturas biológicas de ossos?",
        "Modelos avançados de IA médica conseguem prever a estrutura tridimensional de proteínas em minutos, um problema que a biologia tentava resolver há 50 anos.",
        "Algumas IAs de detecção de deepfake analisam os micro-movimentos dos olhos e padrões de piscada, locais onde as manipulações de vídeo costumam falhar."
    ];

    const aiButton = document.getElementById('btn-generate-curiosity');
    const aiResponse = document.getElementById('ai-response');

    // Manipulação funcional do DOM com feedback visual de processamento
    aiButton.addEventListener('click', () => {
        aiResponse.innerText = "Processando dados do banco de inovações...";
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * curiosidades.length);
            aiResponse.innerText = curiosidades[randomIndex];
        }, 600);
    });
});
