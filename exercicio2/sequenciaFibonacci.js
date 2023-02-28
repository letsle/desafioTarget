/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */


//ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!

let num = parseInt(prompt("Digite um número: "));

if (num === 0 || num === 1) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  let fib1 = 0;
  let fib2 = 1;
  let pertence = false;
  
  while (fib2 <= num) {

    if (fib2 === num) {
      pertence = true;
      break;
    }

    [fib1, fib2] = [fib2, fib1 + fib2];
  }

  if (pertence) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }
}

//ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!



