//Leia N e escreva todos os números inteiros pares de 1 a N.
const prompt = require('prompt-sync')()
console.log('Números inteiros pares de 1 a N')

function main(){
    const N = Number(prompt('Digite um número: '))
    for(i = 2; i < N + 1; i = i + 2){
        console.log(i)
    }
}

main()