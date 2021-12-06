//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
const prompt = require('prompt-sync')()

// Entrada
console.log('A soma dos elementos (C+D+U)')
const numero = prompt('digite um numero de 3 dígitos: ')

// Processamento
const  centenas  =  Math.trunc(numero  /  100 )
const  resto  =  numero  %  100
const  dezenas  = Math.trunc(resto  /  10 )
const unidades =  resto  %  10
const soma = centenas + dezenas + unidades
// Saída
console . log('A soma é: ',soma);
console . log('Centena: ',centenas);
console . log('Dezena: ',dezenas);
console . log('Unidade: ',unidades);