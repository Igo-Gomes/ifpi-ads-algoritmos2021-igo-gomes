//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

const entrada = require('prompt-sync')()

// Entrada
const meses = Number(entrada('Número inteiro em meses: '))

// Processamento
const qtd_anos = Math.trunc(meses / 12);
const sobras_meses = meses % 12;

// Saída
console.log('Anos:', qtd_anos);
console.log('Meses:', sobras_meses);