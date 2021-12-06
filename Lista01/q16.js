//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

const prompt = require('prompt-sync')();

//entrada
console.log('Valor da área de um quadrado')
const valor_lado = Number(prompt('valor do lado: '));

//processamento
const área = Math.pow(valor_lado, 2)

//saída
console.log('A área desse quadrado é: ', área,)