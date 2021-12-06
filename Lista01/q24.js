//Leia um valor em m, calcule e escreva o equivalente em cm.

const prompt = require('prompt-sync')();

//entrada
console.log('Metro para Centímetro')
const m = Number(prompt('Valor em metro  : '));

//processamento
const cm = m * 100

//saída
console.log('Valor em metros é equivalente a: ', cm.toFixed(2),'centímetros');