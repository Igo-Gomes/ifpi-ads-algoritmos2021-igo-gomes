//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

const prompt = require('prompt-sync')();
console.log('**Números iguais**')
function main(){
    const num1 = Number(prompt('Número 1: '))
    const num2 = Number(prompt('Número 2: '))
    const num3 = Number(prompt('Número 3: '))

    if (num1 === num2 && num2 === num3){
        console.log('Três números iguais.')
    } else if (num1 === num2 || num2 === num3 || num1 === num3){
        console.log('Dois números iguais.')
    } else{
        console.log('Não tem números iguais.')
    }
}
main()