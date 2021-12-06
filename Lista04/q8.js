/*Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X.*/
const prompt = require('prompt-sync')()

function main(){
    const numero_x = Number(prompt('Número: '))
    
    let anterior = numero_x
    let atual = Number(prompt('Número: '))
    let soma = anterior + atual

    while (soma !== numero_x){
        anterior = atual
        atual = Number(prompt('Número: '))
        
        soma = atual + anterior
    }
}

main()