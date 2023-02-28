/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
  */

//ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor);
  
  const representacaoPorEstado = {};
  for (let estado in faturamentoPorEstado) {
    const percentual = ((faturamentoPorEstado[estado] / valorTotal) * 100).toFixed(2);
    representacaoPorEstado[estado] = percentual;
  }
  
  console.log("Faturamento por estado:");
  for (let estado in faturamentoPorEstado) {
    console.log(`${estado} - R$${faturamentoPorEstado[estado].toFixed(2)}`);
  }
  console.log(`Valor total: R$${valorTotal.toFixed(2)}`);
  
  console.log("\nPercentual de representação por estado:");
  for (let estado in representacaoPorEstado) {
    console.log(`${estado} - ${representacaoPorEstado[estado]}%`);
  }
  

  //ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!