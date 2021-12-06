//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

const prompt = require('prompt-sync')();

//entrada
console.log('Número inteiro em (metros) e (quilômetro)')
const número_int = Number(prompt('Digite o número inteiro em metros: '));

//processamento
const km = número_int / 1000
const m = número_int * 100

//saída
console.log('Valor em quilômetro: ', km,'km');
console.log('Valor em metros: ', m,'cm')