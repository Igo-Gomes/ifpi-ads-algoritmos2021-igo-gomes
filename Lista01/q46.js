/*Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/
const prompt = require('prompt-sync')();

//entrada 
console.log('valor da mercadoria com valor da entrada e duas prestações');
const valor_mercadoria = Number(prompt('Digite valor da mercadoria: '));

// Processamento
const entrada = (valor_mercadoria / 3);
const prestações_1 = entrada * 1
const prestações_2 = entrada * 1

// Saída
console.log('O valor de entrada: ',entrada.toFixed(2));
console.log('O valor da primeira prestação:$ ',prestações_1.toFixed(2));
console.log('O valor da segunda prestação:$ ',prestações_2.toFixed(2));