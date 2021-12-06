/*Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado.*/
const prompt = require('prompt-sync')()
console.log('Multiplicação')

function main(){
    const  num_1 = Number(prompt('Digite o primeiro número: '));   
    const  num_2 = Number(prompt('Digite o segundo número: ')); 
    
    let soma = 0
    let num = 0
    
    while( num < num_1 ){
        soma = soma + num_2
        num++
    }
    console.log(soma)
}
main()