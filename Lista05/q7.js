// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
const prompt = require('prompt-sync')()
console.log('Soma de todos os números inteiros entre 1 e N')

function main(){
    let resultado = 0
    const fim = Number(prompt('Digite um número: '))
    for(i = 0; i <= fim; i++){
        resultado = resultado + i
    }
    console.log('Resultado obtido:',resultado)
}

main()