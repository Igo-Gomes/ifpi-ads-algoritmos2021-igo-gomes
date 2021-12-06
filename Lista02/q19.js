/*Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea(IMC = peso / altura 2). 
Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/

const prompt = require('prompt-sync')();

function main(){
    const altura = Number(prompt('Altura(m): '))
    const peso = Number(prompt('Peso(kg): '))
    const imc = peso / Math.pow(altura,2)

    let categoria

    if (imc < 25){
        categoria = 'Peso Normal'
    }else if (imc <= 30){
        categoria = 'Obeso'
    }else{
        categoria = 'Obesidade Mórbida'
    }
    console.log('Seu IMC: ',imc.toFixed(2))
    console.log('Categoria: ',categoria)
}

main()