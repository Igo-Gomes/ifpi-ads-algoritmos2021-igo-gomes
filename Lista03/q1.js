//Leia um número e mostre na tela se o número é positivo ou negativo.//
const prompt = require('prompt-sync')();

console.log('** Número (Positivo ou Negativo) **')
function main(){
    console.log(' ### Número positivo ou negativo ###')

    const num = Number(prompt('Digite um número: '))

    if(num > 0 ){
        console.log(num,'é positivo')
    }else if(num < 0 ){
        console.log(num,'é negativo')
    }else{
        console.log('Não é um número positivo nem negativo.')
    }
}
main()