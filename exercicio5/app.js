/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

//ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!

const original = "exemplo";

const caracteres = original.split("");

let invertida = "";
for (let i = caracteres.length - 1; i >= 0; i--) {
  invertida += caracteres[i];
}

console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);

  //ABRIR O CÓDIGO NO CONSOLO DO NAVEGADOR!!