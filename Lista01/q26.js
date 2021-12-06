//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

const prompt = require('prompt-sync')();

//entrada
console.log('Número inteiro em (dias) e (semanas)')
const número_dias = Number(prompt('Digite o número inteiro em dias: '));

//processamento
const semanas = Math.trunc(número_dias/7);
const dias = número_dias % 7;
//saída
console.log('Número de semanas: ', semanas,);
console.log('Número de dias: ',dias,);