document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TROCA DE ABAS COM TRANSIÇÃO INTELIGENTE
    const tabs = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            tab.classList.add('active');
            
            const targetSection = document.getElementById(tab.getAttribute('data-target'));
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // 2. CHATBOT INTERATIVO - CURIOSIDADES COM ANIMAÇÃO DE FLUXO
    const bancoCuriosidades = [
        "A tecnologia FakeCatcher já consegue escanear batimentos cardíacos falsos no rosto de vídeos clonados por IA com 96% de eficácia.",
        "Mídias e portais de notícias jovens pelo mundo já testam assinar fotos originais usando Blockchain para que ninguém consiga alterá-las de zoeira.",
        "As marcas d'água invisíveis em áudios mudam pequenos códigos matemáticos na onda sonora que o ouvido humano nem nota, mas os softwares pegam na hora.",
        "IAs generativas de Deepfake costumam vacilar muito nos movimentos involuntários, como piscar os olhos ou na sincronia perfeita dos dentes e língua.",
        "Muitas ferramentas de segurança agora usam 'IAs contra IAs' para prever como um golpe digital vai se espalhar nas redes sociais antes mesmo dele viralizar."
    ];

    const chatButton = document.getElementById('btn-chat-trigger');
    const chatBubbleText = document.getElementById('ai-response-text');
    let dynamicTyping = false;

    chatButton.addEventListener('click', () => {
        if (dynamicTyping) return;
        
        dynamicTyping = true;
        chatBubbleText.style.opacity = 0.5;
        chatBubbleText.innerText = "Pensando e gerando resposta...";

        setTimeout(() => {
            const randomPick = Math.floor(Math.random() * bancoCuriosidades.length);
            const rawMessage = bancoCuriosidades[randomPick];
            
            chatBubbleText.style.opacity = 1;
            typeWriterEffect(chatBubbleText, rawMessage);
        }, 600);
    });

    function typeWriterEffect(element, text) {
        element.innerHTML = "";
        let index = 0;
        
        const textTimer = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(textTimer);
                dynamicTyping = false;
            }
        }, 12); // Velocidade jovem e dinâmica de leitura
    }
});
