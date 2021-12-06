//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
const prompt = require('prompt-sync')()

//entrada
console.log('Digite um valor em minutos')
const valor_minutos = Number(prompt('Valor em minutos: '));

// Processamento
const horas = Math.trunc(valor_minutos / 60);
const minutos = valor_minutos % 60

//saída
console.log('Equivalente')
console.log(horas, 'horas' );
console.log(minutos, 'minutos' );