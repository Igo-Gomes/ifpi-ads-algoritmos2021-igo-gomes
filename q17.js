//Leia N, calcule e escreva o valor de S.

const prompt = require('prompt-sync')()

function main(){
    let numero = Number(prompt('Número: '))

    let S = 0

    for(i = 1; i <= numero; i++){

        S = S + 1/i
    }

    console.log(`Valor de S: ${S}`)


}

main()