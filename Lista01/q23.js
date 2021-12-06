//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

const prompt = require('prompt-sync')();

//entrada
console.log('Quilograma para grama')
const kg = Number(prompt('Valor em Quilograma  : '));

//processamento
const g = kg * 1000

//saída
console.log('Valor em Quilograma é equivalente a: ', g.toFixed(2),'Gramas');