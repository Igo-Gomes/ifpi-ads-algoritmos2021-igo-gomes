//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

const prompt = require('prompt-sync')();

//entrada
const número_A = Number(prompt('digite primeiro número(A): '));
const número_B = Number(prompt('digite segundo número:(B) '));

//saída
console.log('A ordem inversa desse número é', número_B, número_A);