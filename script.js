document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONTROLADOR DE TRANSICÃO DE MÓDULOS (SPA PREMIUM)
    const matrixButtons = document.querySelectorAll('.matrix-btn');
    const matrixSections = document.querySelectorAll('.matrix-section');

    matrixButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Elimina estados ativos obsoletos
            matrixButtons.forEach(b => b.classList.remove('active'));
            matrixSections.forEach(s => s.classList.remove('active'));

            // Insere estado ativo no botão acionado
            btn.classList.add('active');
            
            // Renderiza o painel correspondente
            const targetModule = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetModule);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // 2. SISTEMA DE PROCESSAMENTO INTELECTUAL DA IA
    const datasetCuriosidades = [
        "MÉTRICA_CORE: O algoritmo de contra-inteligência FakeCatcher isola flutuações cromáticas causadas pela pulsação sanguínea no rosto humano e bloqueia deepfakes com 96% de exatidão factual.",
        "MÉTRICA_CORE: Arquiteturas descentralizadas de Blockchain aplicadas diretamente no firmware do sensor óptico geram assinaturas criptográficas nativas imutáveis contra edições generativas.",
        "MÉTRICA_CORE: Pesquisas do ecossistema IEEE provam que softwares de áudio sintético falham ao simular a ressonância harmônica da caixa torácica e respiração humana em ligações clonadas.",
        "MÉTRICA_CORE: Marcas d'água invisíveis de nível industrial adicionam ruídos de varredura matemática nas bordas das imagens. O olho humano não vê, mas sistemas de segurança barram imediatamente.",
        "MÉTRICA_CORE: Modelos adversários avançados (GANs) agora monitoram não apenas os olhos, mas o padrão biométrico de deglutição do pescoço, o novo calcanhar de aquiles dos clonadores de vídeo."
    ];

    const triggerBtn = document.getElementById('supremo-trigger-btn');
    const responseBox = document.getElementById('supremo-response-box');
    let processLock = false;

    triggerBtn.addEventListener('click', () => {
        if (processLock) return;
        
        processLock = true;
        responseBox.innerHTML = "<span style='color: #00f0ff;'>[STREAMS_FETCHING...]</span> Interrogando rede de conhecimento analítico...";

        setTimeout(() => {
            const randomID = Math.floor(Math.random() * datasetCuriosidades.length);
            const targetPayload = datasetCuriosidades[randomID];
            
            // Dispara efeito de varredura caractere por caractere
            renderSupremoText(responseBox, targetPayload);
        }, 700);
    });

    function renderSupremoText(targetElement, outputText) {
        targetElement.innerHTML = "";
        let charIndex = 0;
        
        const typingEngine = setInterval(() => {
            if (charIndex < outputText.length) {
                targetElement.innerHTML += outputText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingEngine);
                processLock = false; // Libera barramento de processos
            }
        }, 10); // Varredura de dados ultra-rápida
    }
});
