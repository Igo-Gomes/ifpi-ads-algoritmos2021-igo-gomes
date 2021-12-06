//Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.//
const prompt = require('prompt-sync')()

console.log('** Indique seu Sexo **')
function main() {
    const sexo = prompt('Feminino-(F) / Masculino-(M): ')
    
    if(sexo === 'M'){
        console.log('Masculino.')

    }else if(sexo === 'F'){
        console.log('Feminino.')

    }else{
        console.log('Sexo Inválido.')
    }
}
main()