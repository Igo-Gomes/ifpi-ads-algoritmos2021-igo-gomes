//Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

const prompt = require('prompt-sync')()
console.log('Frase sem espaços entre as palavras')

function main(){
    let frase = prompt('Escreva uma frase: ')
    let nova = ''
    let caractere = ''

    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        
        if(caractere.charCodeAt(0) !== 32){
            nova = nova + caractere
        }
    }
    console.log(nova)
}
main()