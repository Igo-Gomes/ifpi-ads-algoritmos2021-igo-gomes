/*Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.*/
const prompt = require('prompt-sync')()

console.log('** Programa dia da semana **')
function main() {
    const dia_semana = Number(prompt('Digite um número de (1 a 7): '))

if (dia_semana == 2){
    console.log('-> Segunda')
}
else if (dia_semana == 3){
    console.log('-> Terça')
}else if (dia_semana == 4){
    console.log('-> Quarta')
}
else if (dia_semana == 5){
    console.log('-> Quinta')
}
else if (dia_semana == 6){
    console.log('-> Sexta')
}else if (dia_semana == 7){
    console.log('-> Sabado')
}
else if (dia_semana == 1){
    console.log('-> Domingo')
}else{
    console.log('valor inválido.')
}
}
main()