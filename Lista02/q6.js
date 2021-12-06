/*Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).*/

const prompt = require('prompt-sync')();

function main(){
    const angulo1 = Number(prompt('Angulo 1: '))
    const angulo2 = Number(prompt('Angulo 2: '))
    const angulo3 = Number(prompt('Angulo 3: '))

    const soma_angulo = angulo1 + angulo2 + angulo3

    if (soma_angulo === 180) {
        console.log('É um triângulo')
        if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
        console.log('É acutângulo')
        }else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
        console.log('É retângulo')
        }else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
        console.log('É obtusângulo')}
    }else{
        console.log('Não é um triângulo')}
}
main()