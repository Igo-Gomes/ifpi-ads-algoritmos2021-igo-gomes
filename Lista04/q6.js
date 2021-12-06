/*Escreva um algoritmo para determinar o número de dígitos de um número informado.*/
const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Número: '))
    let digito = numero

    while (resultado >= 1){
        resultado = resultado / 2
        contador++
    }

    console.log('Último resultado', resultado)
    console.log('Qtd divisões:', contador)
}

main()