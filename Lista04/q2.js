/*Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.*/

const prompt = require('prompt-sync')()
console.log('MMC dois números')

function main() {
    const num_a = Number(prompt('Número A: '))
    const num_b = Number(prompt('Número B: '))

    let maior = num_a > num_b ? num_a : num_b
    let mmc = maior
 
    while (!(mmc % num_a === 0 && mmc % num_b === 0)){
        mmc = mmc + maior
    }

    console.log('MMC:', mmc)
}

main()