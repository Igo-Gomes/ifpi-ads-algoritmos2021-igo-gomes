/*Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
de divisão (/ e %) sejam utilizados.*/
const prompt = require('prompt-sync')()
console.log('Divisão')

function main(){
    const Dividendo = Number(prompt('Dividendo: '))
    const Divisor = Number(prompt('Divisor: '))
    let num = 0;
    
    while((Divisor * num < Dividendo) || (Divisor*num !== Dividendo)){
        num++
    }
        console.log(`Quociente: ${num}`)
        console.log(`Resto: ${(Divisor * num) - Dividendo}`)
}
main()