//Leia 3 números, calcule e escreva a média dos números.

const prompt = require('prompt-sync')()

// Entrada
console.log('A Média de 3 números')
const num_1 = Number(prompt('Digite primeiro número : '))
const num_2 = Number(prompt('Digite segundo número : '))
const num_3 = Number(prompt('Digite terceiro número : '))

// Processamento
const média = (num_1 + num_2 + num_3) / 3 

// Saída
console.log('Média dos 3 números é:  ', média,)