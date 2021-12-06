//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
const prompt = require('prompt-sync')();

// Entrada
console.log('Informe sua idade');
const anos = Number(prompt('Anos : '));
const meses = Number(prompt('Meses : '));
const dias = Number(prompt('Dias : '));

// Processamento
const idade_dias = anos * 365 + meses * 30 + dias;

// Saída
console.log('Idade em dias é: ', idade_dias);