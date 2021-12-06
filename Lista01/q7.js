//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

const prompt = require('prompt-sync')();

//entrada
const número_1 = Number(prompt('digite primeiro número: '));
const número_2 = Number(prompt('digite segundo número: '));
const número_3 = Number(prompt('digite terceiro número: '));

//processamento
const soma_número = número_1 + número_2;
const diferença = número_2 - número_3;

//saída
console.log('A soma dos 2 primeiros números é', soma_número,);
console.log('A diferença entre os 2 últimos números é', diferença,);