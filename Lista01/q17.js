//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)


const prompt = require('prompt-sync')();

//entrada
console.log('Valor da área de um retângulo')
const valor_base = Number(prompt('valor da base: '));
const valor_altura = Number(prompt('valor da altura: '));

//processamento
const área = (valor_base * valor_altura)

//saída
console.log('A área desse retângulo é: ', área,)
