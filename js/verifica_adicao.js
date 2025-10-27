//corrigindo exercícios de soma
const respostasCorretasAdicao = {
    A0: "5",
    A1: "5", 
    A2: "15",
    A3: "40",
    A4: "579",
    A5: "150",
    A6: "8",
    A7: "20",
    A8: "210",
    A9: "1023",
    A10: "2221",
    A11: "4023"
};

//verifica respostas
function verificarRespostaAdicao(idInput, idBotao, idResultado, respostaCorreta) {
    const botao = document.getElementById(idBotao);
    const input = document.getElementById(idInput);
    const resultado = document.getElementById(idResultado);
    
    //confere se tds elementos existem
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
        console.warn(`Elementos não encontrados para: ${idInput}, ${idBotao}, ${idResultado}`);
    }
}

//configura o DOM
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i <= 11; i++) {
        const id = `A${i}`;
        
        //botão do exercício A0 é diferente
        const idBotao = id === 'A0' ? 'Adicao_botao' : `Adicao_botao${id}`;
        
        verificarRespostaAdicao(
            `resposta_${id}`,
            idBotao,
            `resultado_${id}`,
            respostasCorretasAdicao[id]
        );
    }
    
    console.log('Sistema de exercícios de adição configurado!');
});