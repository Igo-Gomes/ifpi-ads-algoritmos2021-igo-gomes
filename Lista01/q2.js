//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

const prompt = require('prompt-sync')()

//entrada
const horas = Number(prompt('valor em horas: '));
const minutos = Number(prompt('valor em minutos: '));

//processamento
const equivalente_min = horas * 60 + minutos;

//saída
console.log('O valor equivalente a', equivalente_min.toFixed(2), 'minutos' );