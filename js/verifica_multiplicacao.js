//respostas exercícios
const respostasCorretasMultiplicacao = {
    M0: "12",
    M1: "18",
    M2: "100",
    M3: "640",
    M4: "420",
    M5: "500",
    M6: "12",
    M7: "30",
    M8: "24",
    M9: "27",
    M10: "40"
};

//verifica resposta
function verificarRespostaMultiplicacao(idInput, idBotao, idResultado, respostaCorreta) {
    const botao = document.getElementById(idBotao);
    const input = document.getElementById(idInput);
    const resultado = document.getElementById(idResultado);
    
    //valida se elementos existem
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

//configura exercícios
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i <= 10; i++) {
        const id = `M${i}`;
        
        //id diferente para primeiro exercício
        const idBotao = id === 'M0' ? 'Multi_botao' : `Multi_botao${id}`;
        
        verificarRespostaMultiplicacao(
            `resposta_${id}`,
            idBotao,
            `resultado_${id}`,
            respostasCorretasMultiplicacao[id]
        );
    }
    
    console.log('sistema de multiplicação configurado');
});