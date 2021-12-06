//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
const prompt = require('prompt-sync')();

//entrada
console.log('Digite três números inteiros e positivos (A, B, C)');
console.log('Cálculo da expressão D= R+S/2, onde R=(A+B)^2 e S=(B+C)^2');
const A = Number(prompt('Número (A): '));
const B = Number(prompt('Número (B): '));
const C = Number(prompt('Número (C): '));

// Processamento
const AB = A + B
const R = Math.pow(AB,2) 
const BC = B + C
const S = Math.pow(BC,2)
const D =  (R + S) / 2

// Saída
console.log('Resultado da expressão é: ', D)