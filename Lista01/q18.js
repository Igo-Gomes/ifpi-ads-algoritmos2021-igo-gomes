//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

const prompt = require('prompt-sync')();

//entrada
console.log('Comprimento de uma circunferência')
const raio = Number(prompt('valor do raio: '));

//processamento
const comprimento_circ = 2 * 3.14 * raio

//saída
console.log('O Comprimento dessa circunferência é: ', comprimento_circ .toFixed(2),)