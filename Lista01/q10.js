//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

const prompt = require('prompt-sync')();

//entrada
console.log('digite dois números inteiros para efetuar a divisão')
const número_1 = Number(prompt('número inteiro: '));
const número_2 = Number(prompt('número inteiro: '));

//processamento
const divisão = número_1 / número_2
const resto_divisão = número_1 % número_2

//saída
console.log('A divisão é', divisão);
console.log('A quociente é', Math.trunc(divisão));
console.log('O resto da divisão é', resto_divisão,);