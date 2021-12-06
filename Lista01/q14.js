//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

const entrada = require('prompt-sync')()

// Entrada
const nota1 = Number(entrada('Nota 1: '))
const peso1 = Number(entrada('Peso 1: '))

const nota2 = Number(entrada('Nota 2: '))
const peso2 = Number(entrada('Peso 2: '))

const nota3 = Number(entrada('Nota 3: '))
const peso3 = Number(entrada('Peso 3: '))

// Processamento
const soma_notas_pesos = nota1*peso1 + nota2*peso2 + nota3*peso3
const soma_pesos = peso1 + peso2 + peso3

const media_ponderada = soma_notas_pesos / soma_pesos

// Saída
console.log('Média Ponderada: ', media_ponderada,)