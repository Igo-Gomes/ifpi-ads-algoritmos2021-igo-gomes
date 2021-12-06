//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

const prompt = require('prompt-sync')();

//entrada
console.log('Volume de uma esfera')
const raio = Number(prompt('valor do raio: '));

//processamento
const volume_esf = (4 * 3.14 * Math.pow(raio, 3)) / 3

//saída
console.log('O Volume dessa esfera é: ', volume_esf.toFixed(2))