/*Leia um vetor A com 20 elementos, calcule e escreva o valor de S.
S = (A[1] - A[20])2 + (A[2] - A[19])2 + ... + (A[9] - A[12])2 + (A[10] - A[11])2*/
const prompt = require('prompt-sync')()

function main(){
    let a = new Array(20)
    let s = 0
    for (let index = 0; index < a.length; index++) {
        a[index] = Number(prompt('Digite um número: '))
    }
    for(index = 0; index < 10; index++){
        s = s + ((a[index] - a[a.length - 1 - index]) * (a[index] - a[a.length - 1 - index]))
    }
    console.log(s)

}
main()