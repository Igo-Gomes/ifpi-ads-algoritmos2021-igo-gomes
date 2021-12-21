//Leia N e uma lista de N números e escreva o maior número da lista.
const prompt = require('prompt-sync')()

function main(){
    let num = Number(prompt('Quantidade de números em sua lista: '))
    let maior = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(prompt('Número: '))

        if(numero > maior){
            maior = numero
        }
    }
    console.log(`Maior número da lista é ${maior}`)

}

main()