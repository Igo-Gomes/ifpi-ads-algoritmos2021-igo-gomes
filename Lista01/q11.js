//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

const prompt = require('prompt-sync')();

//entrada
console.log('digite três números inteiros para efetuar inversão')
const número_1 = Number(prompt('digite primeiro número: '));
const número_2 = Number(prompt('digite segundo número: '));
const número_3 = Number(prompt('digite terceiro número: '));
console.log('O número inteiro é', número_1, número_2, número_3);

//saída
console.log('A ordem inversa desse número é', número_3, número_2, número_1);