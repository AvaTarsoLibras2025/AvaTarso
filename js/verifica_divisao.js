// respostas dos exercícios
const respostasCorretasDivisao = {
    D0: "4",
    D1: "9",
    D2: "5",
    D3: "8",
    D4: "6",
    D5: "10",
    D6: "5",
    D7: "3",
    D8: "5",
    D9: "9",
    D10: "8"
};

// verifica resposta
function verificarRespostaDivisao(idInput, idBotao, idResultado, respostaCorreta) {
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
    for (let i = 0; i <= 10; i++) {
        const id = `D${i}`;
        
        // id diferente para primeiro exercício
        const idBotao = id === 'D0' ? 'Divisao_botao' : `Divisao_botao${id}`;
        
        verificarRespostaDivisao(
            `resposta_${id}`,
            idBotao,
            `resultado_${id}`,
            respostasCorretasDivisao[id]
        );
    }
    
    console.log('sistema de divisão configurado');
});