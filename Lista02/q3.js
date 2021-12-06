//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
const prompt = require('prompt-sync')();

console.log('** Maior entre três números lidos **')

function main(){
    const num1 = Number(prompt('Digite um numero: '))
    const num2 = Number(prompt('Digite segundo numero: '))
    const num3 = Number(prompt('Digite terceiro numero: '))
   
    if (num1 > num2 && num1 > num3) {
        console.log('Maior é',num1)
    }else if (num2 > num1 && num2 > num3 ) {
        console.log('Maior é',num2)
    }else if (num3 > num1 && num3 > num2) {
        console.log('Maior é',num3)
    }else{
        console.log('Numeros Iguais')
    }
}
main()