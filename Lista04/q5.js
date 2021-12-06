/*5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/
const prompt = require('prompt-sync')()

function main(){
    const X = Number(prompt('Número X: '))
    const N = Number(prompt('Número N: '))

    const divisao = X / N

    while(N <= 2){
        X = divisao
        N--
    }
    console.log(`Resultado das divisões ${divisao}`)

}

main()