//controle da navegação nas pags de mat
function adicionarListener(idBotao, idResposta, idResultado, respostaCorreta) {
  const botao = document.getElementById(idBotao);
  if (botao) {
    botao.addEventListener("click", function() {
      const r = document.getElementById(idResposta).value.trim();
      const numeros = r.replace(/[\s,]/g, '');
      const resultado = document.getElementById(idResultado);
      resultado.innerText = numeros === respostaCorreta ? "Correto!" : "Errado!";
    });
  }
}

//pag Conjuntos Numéricos
adicionarListener("botao", "resposta", "resultado", "-5");
adicionarListener("botao1", "resposta1", "resultado1", "-2");
adicionarListener("botao2", "resposta2", "resultado2", "0");
adicionarListener("botao3", "resposta3", "resultado3", "012");
adicionarListener("botao4", "resposta4", "resultado4", "-6-5-4");
adicionarListener("botao5", "resposta5", "resultado5", "-12-13-14-15-16");


//pag Adição
adicionarListener("Adicao_botao", "resposta_A0", "resultado_A0", "5");
adicionarListener("Adicao_botaoA1", "resposta_A1", "resultado_A1", "5");
adicionarListener("Adicao_botaoA2", "resposta_A2", "resultado_A2", "15");
adicionarListener("Adicao_botaoA3", "resposta_A3", "resultado_A3", "40");
adicionarListener("Adicao_botaoA4", "resposta_A4", "resultado_A4", "579");
adicionarListener("Adicao_botaoA5", "resposta_A5", "resultado_A5", "150");
adicionarListener("Adicao_botaoA6", "resposta_A6", "resultado_A6", "8");
adicionarListener("Adicao_botaoA7", "resposta_A7", "resultado_A7", "20");
adicionarListener("Adicao_botaoA8", "resposta_A8", "resultado_A8", "210");
adicionarListener("Adicao_botaoA9", "resposta_A9", "resultado_A9", "1023");
adicionarListener("Adicao_botaoA10", "resposta_A10", "resultado_A10", "2221");
adicionarListener("Adicao_botaoA11", "resposta_A11", "resultado_A11", "4023");

//pag subtração
adicionarListener("Subtracao_botao", "resposta_S0", "resultado_S0", "5");
adicionarListener("Subtracao_botaoS1", "resposta_S1", "resultado_S1", "9");
adicionarListener("Subtracao_botaoS2", "resposta_S2", "resultado_S2", "12");
adicionarListener("Subtracao_botaoS3", "resposta_S3", "resultado_S3", "29");
adicionarListener("Subtracao_botaoS4", "resposta_S4", "resultado_S4", "110");
adicionarListener("Subtracao_botaoS5", "resposta_S5", "resultado_S5", "75");
adicionarListener("Subtracao_botaoS6", "resposta_S6", "resultado_S6", "25");
adicionarListener("Subtracao_botaoS7", "resposta_S7", "resultado_S7", "35");
adicionarListener("Subtracao_botaoS8", "resposta_S8", "resultado_S8", "60");
adicionarListener("Subtracao_botaoS9", "resposta_S9", "resultado_S9", "55");
adicionarListener("Subtracao_botaoS10", "resposta_S10", "resultado_S10", "55");
adicionarListener("Subtracao_botaoS11", "resposta_S11", "resultado_S11", "-20");

//pag multiplicação
adicionarListener("Multi_botaoM0", "resposta_M0", "resultado_M0", "12");
adicionarListener("Multi_botaoM1", "resposta_M1", "resultado_M1", "18");
adicionarListener("Multi_botaoM2", "resposta_M2", "resultado_M2", "100");
adicionarListener("Multi_botaoM3", "resposta_M3", "resultado_M3", "640");
adicionarListener("Multi_botaoM4", "resposta_M4", "resultado_M4", "420");
adicionarListener("Multi_botaoM5", "resposta_M5", "resultado_M5", "500");
adicionarListener("Multi_botaoM6", "resposta_M6", "resultado_M6", "12");
adicionarListener("Multi_botaoM7", "resposta_M7", "resultado_M7", "30");
adicionarListener("Multi_botaoM8", "resposta_M8", "resultado_M8", "24");
adicionarListener("Multi_botaoM9", "resposta_M9", "resultado_M9", "27");
adicionarListener("Multi_botaoM10", "resposta_M10", "resultado_M10", "40");