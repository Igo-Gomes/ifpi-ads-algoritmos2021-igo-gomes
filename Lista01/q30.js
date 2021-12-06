//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

const entrada = require('prompt-sync')()

// Entrada
const minutos = Number(entrada('Número inteiro em minutos: '))

// Processamento
const qtd_dias = Math.trunc(minutos / 1440);
const sobras_dias = minutos % 1440;
const qtd_horas = Math.trunc(sobras_dias / 60)
const qtd_segundos = minutos % 60


// Saída
console.log('Dias:', qtd_dias);
console.log('Horas:', qtd_horas)
console.log('Minutos:', qtd_segundos)