//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

const prompt = require('prompt-sync')();

//entrada
console.log('binários para base decimal')
const binario = Number(prompt('Digite 4 dígitos binários(0)ou(1): '));

//processamento
const decimal = parseInt(binario, 2);

//saída
console.log('Base decimal: ',decimal,'Dec')
