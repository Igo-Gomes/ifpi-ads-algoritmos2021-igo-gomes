//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

const prompt = require('prompt-sync')()
console.log('Soma e a média de todos os números da lista')

function main(){
    let num = Number(prompt('Quantidade de números em sua lista: '))
    let soma = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(prompt('Número: '))

        soma = soma + numero
    }

    let media = soma / num

    console.log(`Soma dos número da lista é ${soma}`)
    console.log(`Média é igual a ${media}`)

}

main()