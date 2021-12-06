//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

const prompt = require('prompt-sync')();

//entrada
console.log('Valor da área de um triângulo')
const valor_base = Number(prompt('valor da base: '));
const valor_altura = Number(prompt('valor da altura: '));

//processamento
const área = (valor_base * valor_altura) / 2;

//saída
console.log('A área desse triângulo é: ', área,)
