//Leia um valor em real (R$), calcule e escreva 70% deste valor.

const prompt = require('prompt-sync')()

//entrada
console.log('Digite valor em real e veja 70% deste valor')
const valor_real = Number(prompt('Valor em real:$ '));

//processamento
const porcentagem = (valor_real*70) / 100;

//saída
console.log('70% deste valor corresponde a: $', porcentagem, 'reais');