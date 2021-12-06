//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

const prompt = require('prompt-sync')();

//entrada
console.log('Celsius para Fahrenheit')
const Celsius = Number(prompt('Temperatura em Celsius : '));

//processamento
const Fahrenheit = (9 * Celsius + 160) / 5

//saída
console.log('A temperatura em °C é equivalente a: ', Fahrenheit.toFixed(1),'°F')