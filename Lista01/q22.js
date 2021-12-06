//Leia um valor em km, calcule e escreva o equivalente em m.

const prompt = require('prompt-sync')();

//entrada
console.log('Quilômetro para Metro')
const km = Number(prompt('Valor em Quilómetros  : '));

//processamento
const M = km * 1000

//saída
console.log('Valor em Quilómetros é equivalente a: ', M.toFixed(2),'Metros');