document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. GESTÃO DE NAVEGAÇÃO DE PÁGINAS (SPA)
    // ==========================================
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove estados ativos
            navButtons.forEach(btn => btn.classList.remove('active'));
            pageSections.forEach(sec => sec.classList.remove('active'));

            // Aplica estado ativo ao gatilho atual
            button.classList.add('active');
            
            // Ativa a aba alvo
            const target = button.getAttribute('data-target');
            const activeSection = document.getElementById(target);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });

    // ==========================================
    // 2. MOTOR DA INTELIGÊNCIA ARTIFICIAL (TERMINAL)
    // ==========================================
    const baseCuriosidades = [
        "ANÁLISE_COMPLETA: A IA FakeCatcher desenvolvida pela Intel analisa o fluxo sanguíneo facial pixel por pixel e já possui taxa de precisão de 96% contra mídias manipuladas.",
        "SISTEMA_DADO: Consórcios globais de jornalismo usam criptografia em Blockchain nas lentes de câmeras comerciais para blindar a autoria de imagens contra adulteração generativa.",
        "MÉTRICA_IA: Algoritmos de Deepfakes modernos não falham mais apenas nos olhos; a nova fronteira de detecção analisa os movimentos involuntários dos músculos do pescoço e respiração.",
        "INFORMAÇÃO_REDES: A automação de notícias falsas por redes adversárias generativas (GANs) consegue criar perfis de comportamento psicométrico para enganar humanos em menos de 3 segundos.",
        "INOVAÇÃO_CONSCIÊNCIA: Softwares de marca d'água invisível injetam ruídos matemáticos em áudios oficiais. Humanos não escutam, mas as ferramentas de segurança identificam de imediato."
    ];

    const aiButton = document.getElementById('trigger-ai-btn');
    const aiOutput = document.getElementById('ai-output-text');
    let isProcessing = false;

    aiButton.addEventListener('click', () => {
        if (isProcessing) return; // Evita cliques simultâneos
        
        isProcessing = true;
        aiOutput.innerHTML = "<span style='color: #3a86ff;'>[ACESSANDO_BANCO_DE_DADOS...]</span> Conectando ao núcleo de inovação da IA...";

        setTimeout(() => {
            // Seleção algorítmica aleatória
            const indexAleatorio = Math.floor(Math.random() * baseCuriosidades.length);
            const textoFinal = baseCuriosidades[indexAleatorio];
            
            // Executa efeito de digitação real caractere por caractere
            animarDigitacao(aiOutput, textoFinal);
        }, 800);
    });

    // Função de animação de digitação por varredura
    function animarDigitacao(elemento, texto) {
        elemento.innerHTML = "";
        let i = 0;
        
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
            } else {
                clearInterval(intervalo);
                isProcessing = false; // Libera o terminal para novas consultas
            }
        }, 15); // Velocidade de renderização cibernética
    }
});
