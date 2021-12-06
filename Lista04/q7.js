/*Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.*/
const  prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Número: '))
    let igual = 0

    while(!(numero === igual)){
        igual = Number(prompt('Número: '))
    }
    console.log(`Número ${igual} é igual ao primeiro número lido.`)
    console.log('Fim !')

}

main()