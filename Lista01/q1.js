//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

const prompt = require('prompt-sync')();

//entrada
const velocidade_ms = Number(prompt('velocidade (m/s): '));

//processamento
const velocidade_km = velocidade_ms * 3.6;

//saída
console.log('A velocidade', velocidade_ms, 'ms')
console.log('é igual a', velocidade_km, 'km') 