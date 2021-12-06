/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/
const prompt = require('prompt-sync')();

console.log('**Verificando se dezena é igual ou diferente do algarismo da unidade **')
console.log('Digite um número com 2 digitos')

function main(){
    const num = Number(prompt('Numero: '))
    
    const dezena = Math.trunc(num /  10 )
    const unidade = num % 10

    if (dezena === unidade){
        console.log('Dezena e Unidade são iguais!')
    }else{
        console.log('Dezena e Unidade são diferentes!')
    }
}
main()