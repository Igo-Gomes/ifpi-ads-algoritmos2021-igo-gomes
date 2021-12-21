//Leia uma frase e mostre cada palavra da frase em uma linha separada*/
const prompt = require('prompt-sync')()
console.log('Leia uma frase e mostre cada palavra da frase em uma linha separada')

function main(){
const frase = prompt('Digite uma frase: ')
const palavas = frase.split(' ')
i = 0
for(i ; i < palavas.length; i++){
    console.log(palavas[i])
}
}
main()