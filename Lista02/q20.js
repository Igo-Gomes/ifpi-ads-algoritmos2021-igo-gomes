/*Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/
const prompt = require('prompt-sync')()
function main(){
    console.log('** Verificando a medida de um ângulo (entre 0 e 360°) e determinando o quadrante em que esse ângulo se localiza**')
    const ângulo = Number(prompt('Ângulo entre ( 0 e 360° graus): '))
    
    if (ângulo <= 90){
        console.log('Primeiro Quadrante')
    }else if(ângulo > 90 && ângulo <= 180){
        console.log('Segundo Quadrante')
    }else if(ângulo > 180 && ângulo <= 270){
        console.log('Terceiro Quadrante')
    }else if(ângulo > 270 && ângulo <= 360){
        console.log('Quarto Quadrante')
    }else{
        console.log('Ângulo não válido')
    }
}
main()