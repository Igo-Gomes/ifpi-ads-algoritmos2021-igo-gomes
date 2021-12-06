/*Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/
const prompt = require('prompt-sync')();
console.log ('**Verificando 3 números, se eles são iguias a (OPÇÃO')

function main(){
    const opcao = Number(prompt('Digite sua opção entre números 1 e 3: '))
    const num1 = Number(prompt('Número 1: '))
    const num2 = Number(prompt('Número 2: '))
    const num3 = Number(prompt('Número 3: '))

    const n1 = num1
    const n2 = num2
    const n3 = num3
    const opção = opcao

    if (opção === n1){
        console.log('Número',n1,'igual opção')
    } else if (opção === n2){
        console.log('Número',n2,'igual opção')
    } else if (opção === n3){
        console.log('Número',n3,'igual opção')
    } else{
        console.log('Opção diferentes dos números')
    }
}
main()