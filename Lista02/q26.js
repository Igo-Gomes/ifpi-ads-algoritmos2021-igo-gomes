//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.//
const prompt = require('prompt-sync')()
console.log('** Identificando hipotenusa e seus catetos de um triângulo**')
function main(){
    const lado_A = Number(prompt('Lado A: '))
    const lado_B = Number(prompt('Lado B: '))
    const lado_C = Number(prompt('Lado C: '))

    if (lado_A > lado_B && lado_A > lado_C){
        console.log('Catetos:', lado_B, 'e ',lado_C)
        console.log('Hipotenusa: ', lado_A)
    }else if (lado_B > lado_A && lado_B > lado_C){
        console.log('Catetos:', lado_A, 'e ',lado_C)
        console.log('Hipotenusa: ', lado_B)
    }else if(lado_C > lado_A && lado_C > lado_B){
        console.log('Catetos:', lado_A, 'e ',lado_B)
        console.log('Hipotenusa: ', lado_C)
    }
}
main()