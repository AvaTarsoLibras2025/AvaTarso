// js/verifica_decimal_naturais.js

// mapa dos exercícios conforme seu HTML
const exercicios = [
  { inputId: 'resposta',  botaoId: 'botao',  resultadoId: 'resultado',  respostaCorreta: '-5' },
  { inputId: 'resposta1', botaoId: 'botao1', resultadoId: 'resultado1', respostaCorreta: '-2' },
  { inputId: 'resposta2', botaoId: 'botao2', resultadoId: 'resultado2', respostaCorreta: '0' },
  { inputId: 'resposta3', botaoId: 'botao3', resultadoId: 'resultado3', respostaCorreta: '0 1 2' },
  { inputId: 'resposta4', botaoId: 'botao4', resultadoId: 'resultado4', respostaCorreta: '-6 -5 -4' },
  { inputId: 'resposta5', botaoId: 'botao5', resultadoId: 'resultado5', respostaCorreta: '-12 -13 -14 -15 -16' }
];

function normalizeResposta(text) {
  if (!text && text !== '') return '';
  // remove espaços extras, troca vírgula por espaço (se quiser aceitar vírgulas)
  return text.trim().replace(/\s+/g, ' ').replace(/,/g, ' ');
}

function attachVerificacao(inputId, botaoId, resultadoId, respostaCorreta) {
  const input = document.getElementById(inputId);
  const botao = document.getElementById(botaoId);
  const resultado = document.getElementById(resultadoId);

  if (!input || !botao || !resultado) {
    console.warn(`Elementos não encontrados: ${inputId}, ${botaoId}, ${resultadoId}`);
    return;
  }

  botao.addEventListener('click', function () {
    const valor = normalizeResposta(input.value);
    const correta = normalizeResposta(respostaCorreta);

    if (valor === correta) {
      resultado.textContent = 'Correto! Parabéns!';
      resultado.style.color = 'green';
      input.style.border = '2px solid green';
    } else {
      resultado.textContent = 'Tente novamente!';
      resultado.style.color = 'red';
      input.style.border = '2px solid red';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  exercicios.forEach(ex => {
    attachVerificacao(ex.inputId, ex.botaoId, ex.resultadoId, ex.respostaCorreta);
  });
  console.log('verifica_decimal_naturais.js carregado e listeners anexados.');
});