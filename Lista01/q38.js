/* Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, 
escrevendo o resultado em forma de fração.*/
const prompt = require('prompt-sync')()

// Entrada
console.log('Soma de duas fração com denominadores diferentes');
const numerador_1 = Number(prompt('Primeiro numerador:   '));
const denominador_1 = Number(prompt('Primeiro denominador:   '));

const numerador_2 = Number(prompt('Segundo Numerador:   '))
const denominador_2 = Number(prompt('Segundo denominador:   '));

// Processamento
const numerador = (numerador_1 * denominador_2) + (numerador_2 * denominador_1)
const denominador = denominador_1 * denominador_2

// Saída
console.log(numerador,'/', denominador)
