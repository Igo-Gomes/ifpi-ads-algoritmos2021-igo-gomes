//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

const prompt = require('prompt-sync')()

//entrada
console.log('novo salário com um aumento de 25%')
const salário_atual = Number(prompt('salário atual:$ '));

//processamento
const salário_aum = (salário_atual*25) /100 + (salário_atual);

//saída
console.log('O novo salário com um aumento de 25%: $', salário_aum, 'reais');
