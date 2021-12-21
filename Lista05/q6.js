// Escreva a tabuada dos números de 1 a 10.
const prompt = require('prompt-sync')()
console.log('Tabuada dos números de 1 a 10')

function main(){
    for(A = 0 ; A <= 10; A++){
        for(B = 0; B <= 10; B++){
            console.log(`${A} * ${B} = ${A*B}`)
        }
        console.log('Resolução')
    }
}

main()