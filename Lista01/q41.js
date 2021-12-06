/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/
const prompt = require('prompt-sync')();

//entrada 
console.log('Custo de um carro novo ao consumidor');
const custo_fábrica = Number(prompt('Digite o custo da fábrica de um carro: '));

// Processamento
const distribuidor = (28*custo_fábrica) / 100;
const impostos = (45*custo_fábrica) /100;
const custo_consumidor = custo_fábrica + distribuidor + impostos

// Saída
console.log('O custo ao consumidor é: ','$',custo_consumidor.toFixed(2),'reais');