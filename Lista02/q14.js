//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
const prompt = require('prompt-sync')();

function main(){
    const num1 = Number(prompt('Número 1: '))
    const num2 = Number(prompt('Número 2: '))
    const num3 = Number(prompt('Número 3: '))
    const num4 = Number(prompt('Número 4: '))
    const num5 = Number(prompt('Número 5: '))

    const media = (num1 + num2 + num3 + num4 + num5) / 5

    if (num1 > media){
        console.log(num1,'é maior que média dos 5 números')
    }
    if(num2 > media){
        console.log(num2,'é maior que média dos 5 números')
    }
    if(num3 > media){
        console.log(num3,'é maior que média dos 5 números')
    }
    if(num4 > media){
        console.log(num4,'é maior que média dos 5 números')
    }
    if(num5 > media){
        console.log(num5,'é maior que média dos 5 números')
    }else{
        console.log('Números são iguais a média')
    }
}
main()
