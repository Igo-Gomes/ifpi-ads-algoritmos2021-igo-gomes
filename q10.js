// Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.*/
const prompt = require('prompt-sync')()
console.log('Números ímpares entre os limites lidos')

function main(){
    const Limite_Superior = Number(prompt('Limite Superior: '))
    const Limite_Inferior = Number(prompt('Limite Inferior: '))
    if(Limite_Inferior % 2 != 1){
        Limite_Inferior = Limite_Inferior + 1
    }
    for(i = Limite_Inferior; i <= Limite_Superior; i = i + 2){
        console.log(i)
    }
}

main()