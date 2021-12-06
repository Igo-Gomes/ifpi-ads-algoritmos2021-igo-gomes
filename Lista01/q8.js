//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

const prompt = require('prompt-sync')();

//entrada
console.log('digite dois números inteiros para efetuar divisão da soma pela subtração dos números lidos')
const número_1 = Number(prompt('digite primeiro número: '));
const número_2 = Number(prompt('digite segundo número: '));

//processamento
const resultado = (número_1 + número_2) / (número_1 - número_2)

//saída
console.log('A divisão da soma pela subtração dos números lidos é', resultado,);