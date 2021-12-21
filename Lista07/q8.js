/*Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas
posições no vetor.*/
const prompt = require('prompt-sync')()
console.log('O maior e o menor elemento e suas respectivas posições no vetor')

function main(){
    const n = Number(prompt('Quantos elementos: '))

    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = Number(prompt(`Elemento ${i}: `))
    }

    let posicao_maior = 0
    let posicao_menor = 0

    for (let i = 1; i < n; i++){
        if (vetor[i] > vetor[posicao_maior]){
            posicao_maior = i
        }else if (vetor[i] < vetor[posicao_menor]){
            posicao_menor = i
        }
    }

    console.log(`Maior elemento: ${vetor[posicao_maior]} (i: ${posicao_maior})`)
    console.log(`Menor elemento: ${vetor[posicao_menor]} (i: ${posicao_menor})`)
}

main()