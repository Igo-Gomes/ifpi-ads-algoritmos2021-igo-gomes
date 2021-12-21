/*Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.*/

const prompt = require('prompt-sync')()
console.log('Verificando se uma palavra digitada é palíndroma')

function main(){
    let palavra = prompt('Digite uma palavra: ')
    let inverso = ''
    let caractere = ''

    for (let i = palavra.length - 1; i >= 0; i--){
        caractere = palavra[i]
        inverso = inverso + caractere
    }

    if(palavra === inverso){
        console.log(`${palavra} é um palíndromo!`)
    }else{
        console.log(`${palavra} não é um palíndromo!`)
    }
}
main()