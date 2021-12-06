/*Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.*/
const prompt = require('prompt-sync')()
console.log('MDC dois números')

function main() {
    const num_a = Number(prompt('Número A: '))
    const num_b = Number(prompt('Número B: '))

    let maior = num_a > num_b ? num_a : num_b
    let mdc = maior
 
    while (!(num_a % mdc  === 0 && num_b %  mdc  === 0)){
        mdc--
    }

    console.log('MDC:', mdc)
}

main()