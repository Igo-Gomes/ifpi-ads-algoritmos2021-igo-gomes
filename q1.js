//Leia N e escreva todos os números inteiros de 1 a N.
const prompt = require('prompt-sync')()

console.log('Números inteiros de 1 a N')
function main(){
    const n = Number(prompt('Digite um número: '))
    for(i = 1; i < n + 1; i++){
        console.log(i)
    }
}

main()