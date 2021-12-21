/*Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.*/
const prompt = require('prompt-sync')()
console.log('verificando se existem ou não elementos iguais no vetor')

function main(){
    let n = Number(prompt('Quantos elementos: '))
    let elementos = new Array(n)
    let repetido = 0
    for (let index = 0; index < n; index++) {
        elementos[index]= prompt('Elementos: ')
        
    }

    for (let index = 0; index < n; index++) {
        for (let index2 = 0; index2 < n; index2++) {
            if((index != index2) && (elementos[index] == elementos[index2])){
                repetido = true
                break
            }
        }
    }
    if(repetido == true){
        console.log('Elementos repetidos.')
    }else{
        console.log('Não há elementos repetidos.')
    }
}
main()