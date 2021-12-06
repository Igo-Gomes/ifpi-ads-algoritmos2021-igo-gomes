/*Leia um número e escreva se o número é inteiro ou decimal.*/
const prompt = require('prompt-sync')()

console.log('** Número é inteiro ou decimal**')

function main() {
    const numero = Number(prompt('Digite um número: '))

    if (numero === Math.trunc(numero)){
        console.log("Número inteiro.")
    }else{
        console.log("Número decimal")
    }
}
main()