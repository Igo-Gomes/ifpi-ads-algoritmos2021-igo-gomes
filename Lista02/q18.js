/*Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o const resultado dessa operação
sobre os dois valores lidos.*/
const prompt = require('prompt-sync')()
console.log('**Executando operação matemática com dois valores**')
function main(){
    console.log('1 - Adicao')
    console.log('2 - Subtração')
    console.log('3 - Multiplicação')
    console.log('4 - Divisão')
    const num1 = Number(prompt('Digite primeiro valor: '))
    const num2 = Number(prompt('Digite segundo valor: '))
    const operação = Number(prompt('Digite operação que deseja executar: '))
    
     if (operação === 1){
        const resultado = num1 + num2
        console.log(resultado)
    }else if(operação === 2){
        const resultado = num1 - num2
        console.log(resultado)
    }else if(operação === 3){
        const resultado = num1 * num2
        console.log(resultado)
    }else if(operação === 4){
        const resultado = num1 / num2
        console.log(resultado)
    }
}
main()