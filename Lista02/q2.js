//Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
const prompt = require('prompt-sync')();

console.log('** Menor e o Maior entre dois números lidos **')

function main(){
    const num1 = Number(prompt('Número 1: '))
    const num2 = Number(prompt('Número 2: '))
    
    if (num1 > num2){
        console.log(num1,'Maior número', 'e o',num2,'Menor Número.',)
    }else if (num2 > num1){
        console.log(num2,'Maior Número', 'e o',num1,'Menor Número.')
    } else{
        console.log('Números Iguais.')
    }
}
main()