//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

const entrada = require('prompt-sync')();

// Entrada
const segundos = Number(entrada('Segundos: '));

// Processamento
const horas_seg = Math.trunc(segundos / 3600);
const sobras_horas = segundos % horas_seg;
const min_seg = Math.trunc(segundos / 60);
const sobras_min = segundos % min_seg;
const qtd_segundos = segundos % 60;


// Saída
console.log('Horas:', horas_seg);
console.log('Minutos:', min_seg);
console.log('Segundos:', qtd_segundos);