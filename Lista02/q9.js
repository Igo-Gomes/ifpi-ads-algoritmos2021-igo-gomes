//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

const prompt = require('prompt-sync')();

console.log('Verificando se número é ou não primo')

function main(){
    const num = Number(prompt('Digite um numero entre 0 e 100: '))
    const primos = ([2],[3],[5],[7],[11],[13],[17],[19],[23],[29],[31],[37],[41],[43],[47],[53],[59],[61],[67],[71],[73],[79],[83],[89],[97])

    if (num === primos){
        console.log('Números é primo')
    }else{
        console.log('Não é Primo')
    }
}
main()