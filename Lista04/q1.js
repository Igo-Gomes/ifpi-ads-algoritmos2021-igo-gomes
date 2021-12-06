/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/

/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/

const prompt = require('prompt-sync')()

function main() {
    let num = Number(prompt('Digite um número: '))
    let divisores = 1

    while(num >= divisores){
        if(num % divisores === 0){
            console.log(`${num} é divisores por ${divisores}`)
        }
        divisores++
    }
    
}

main()