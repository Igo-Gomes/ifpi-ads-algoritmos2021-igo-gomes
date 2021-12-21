/*Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme seguinte condição:
se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.*/
const prompt = require('prompt-sync')()

function main(){
    let n = Number(prompt('Quantidade de elemento: '))
    let vetor_a = new Array(n)
    let vetor_b = new Array(n)
    let elementos_repetido = 0
    for (let index = 0; index < n; index++) {
        vetor_a[index]= prompt('Elementos: ')
        
    }

    for (let index = 0; index < n; index++) {
        if(vetor_a[index]%2 == 0){
            vetor_b[index] = 0
        }
        else{
            vetor_b[index] = 1
        }
    }
    console.log(vetor_a)
    console.log(vetor_b)
}
main()