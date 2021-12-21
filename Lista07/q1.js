/*Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que
estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último elemento de B; o 2o
elemento de A deve ser o penúltimo elemento de B e assim por diante.*/

const prompt = require('prompt-sync')()

function main(){
    const N = Number(prompt('Quantidade de elementos: '))
    
    const vetor_a = Array(N)
    const vetor_b = Array(N)

    for(let i = 0; i < N; i++){
        vetor_a[i] = Number(prompt(`Elemento ${i}: `))
    }

    let j = vetor_b.length -1 
    for(item of vetor_a){
        vetor_b[j] = item
        j--
    }

    console.log(vetor_a)
    console.log(vetor_b)
    
}
main()