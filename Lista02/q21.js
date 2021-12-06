/*Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/
const prompt = require('prompt-sync')()
console.log('**Arredondado parte fracionaria de um número**')
function main(){
    const numero = Number(prompt('Digite um número: '))
    
    const parte_fracionaria = numero - parseInt(numero)
    const inteiro = parseInt(numero)

    if ( parte_fracionaria >= 0.5){
        const arredondado = inteiro + 1
        console.log(arredondado)
    }else{
        console.log(inteiro)
    }
}
main()