//Leia uma letra e verifique se a letra digitada é vogal ou consoante.//
const prompt = require('prompt-sync')()

console.log('** Verificando se a letra é (Vogal ou Consoante) **')

function main() {
    const  letra  =  prompt ( 'Digite uma letra vogal ou consoante): ' )
    
    if  ( letra  ===  'A'  || letra  ===  'a' || letra  ===  'E' || letra  ===  'e'  || letra  === 'I' || letra  ===  'i'  || letra  ===  'O' || letra  ===  'o'  ||  letra  ===  'U' || letra === 'u' ) {
        console . log ( letra  , 'é uma vogal.' )
    } else {
        console . log ( letra , 'é uma consoante.' )
    }
}
main()