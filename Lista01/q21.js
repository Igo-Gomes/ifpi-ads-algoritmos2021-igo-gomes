//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

const prompt = require('prompt-sync')();

//entrada
console.log('Fahrenheit para Celsius')
const Fahrenheit = Number(prompt('Temperatura em Fahrenheit : '));

//processamento
const Celsius = (5 * Fahrenheit - 160) / 9;

//saída
console.log('A temperatura em °F é equivalente a: ', Celsius.toFixed(1),'°C');