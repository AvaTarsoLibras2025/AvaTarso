// respostas dos exercícios
const respostasCorretasSubtracao = {
    S0: "5",
    S1: "9",
    S2: "12", 
    S3: "29",
    S4: "110",
    S5: "75",
    S6: "25",
    S7: "35",
    S8: "60",
    S9: "55",
    S10: "55",
    S11: "-20"
};

// verifica resposta
function verificarRespostaSubtracao(idInput, idBotao, idResultado, respostaCorreta) {
    const botao = document.getElementById(idBotao);
    const input = document.getElementById(idInput);
    const resultado = document.getElementById(idResultado);
    
    // verifica se elementos existem
    if (botao && input && resultado) {
        botao.addEventListener('click', function() {
            if (input.value.trim() === respostaCorreta) {
                resultado.textContent = "Correto! Parabéns!";
                resultado.style.color = "green";
            } else {
                resultado.textContent = "Tente novamente!";
                resultado.style.color = "red";
            }
        });
    } else {
        console.warn(`elementos não encontrados: ${idInput}, ${idBotao}, ${idResultado}`);
    }
}

// configura exercícios
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i <= 11; i++) {
        const id = `S${i}`;
        
        // id diferente para primeiro exercício
        const idBotao = id === 'S0' ? 'Subtracao_botao' : `Subtracao_botao${id}`;
        
        verificarRespostaSubtracao(
            `resposta_${id}`,
            idBotao,
            `resultado_${id}`,
            respostasCorretasSubtracao[id]
        );
    }
    
    console.log('sistema de subtração configurado');
});