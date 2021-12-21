/*Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.*/
const prompt = require('prompt-sync')()
console.log('Número de palavras de um texto digitado')

function main(){
const frase = prompt('Digite um texto: ')
palavras = frase.split(' ')
console.log(`Quantidade de palavras: ${palavras.length}`)
}
main()