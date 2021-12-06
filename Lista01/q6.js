//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

const prompt = require('prompt-sync')();

//entrada
const velocidade_km = Number(prompt('velocidade (km/h): '));

//processamento
const velocidade_ms = velocidade_km / 3.6;

//saída
console.log('A velocidade', velocidade_km, 'km')
console.log('é igual a', velocidade_ms, 'ms') 