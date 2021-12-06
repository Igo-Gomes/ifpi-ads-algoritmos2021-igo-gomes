// Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

const prompt = require('prompt-sync')()

// Entrada
console.log('Informe sua idade em dias');
const idade_dias = Number(prompt('Idade em dias:   '));

// Processamento
const anos = Math.trunc(idade_dias/365);
const resto_dias = idade_dias % 365;
const meses = Math.trunc(resto_dias / 30);
const dias = resto_dias % 30;


// Saída
console.log('Idade expressa em anos: ', anos,);
console.log('Idade expressa em meses: ', meses,);
console.log('Idade expressa em dias: ', dias,);
