/*Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).*/
const prompt = require('prompt-sync')()
console.log('Maior quadrado menor ou igual a N')

function main(){
    const N = Number(prompt('Número N: '))

    let quadrado = 1

    for(let i = quadrado; i <= N; i = i + Math.pow(i, 2) ){

        quadrado = i * i
    }

    console.log(`O Menor quadrado próximo ao ${N} é ${quadrado}.`)

}

main()