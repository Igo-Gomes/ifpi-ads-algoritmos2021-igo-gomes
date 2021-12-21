// Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.*/
const prompt = require('prompt-sync')()
console.log('Duplicando cada caractere da frase digitada')

function main(){
const frase = prompt('Digite uma frase: ')
let i = 0
let f_duplicada = ''
 while(i < frase.length){
     f_duplicada = f_duplicada + (frase[i] + frase[i])
     i++
 }

    console.log(f_duplicada)
}
main()