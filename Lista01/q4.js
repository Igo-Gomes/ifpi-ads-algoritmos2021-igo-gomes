//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

const prompt = require('prompt-sync')()

//entrada
const valor_dolar = Number(prompt('cotação dolar atual: US$ '))
const conversor_dolar = Number(prompt('digite valor em dolar: US$ '))

//processamento
const valor_real = conversor_dolar * valor_dolar

//saída
console.log('O valor equivalente a $',valor_real.toFixed(2), 'reais' );