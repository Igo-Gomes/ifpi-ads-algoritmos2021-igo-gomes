// Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem.
const prompt = require('prompt-sync')()

// Entrada
console.log('A soma dos elementos que compõem um número (Ex: número = 9534 ; soma = 9+5+3+4 = 21.)')
const numero = prompt('digite um numero de 4 dígitos: ')

// Processamento
const Soma = (parseInt(numero[0])) + parseInt(numero[1]) + parseInt(numero[2]) + parseInt(numero[3])

// Saída
console.log('Soma dos elementos é: ', Soma)