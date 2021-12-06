/*Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/
const prompt = require('prompt-sync')()
console.log('Valor da área de retângulo')
function main(){
    const x = Number(prompt('ponto x: '))
    const y = Number(prompt('ponto y: '))
    
    const area = x * y
    if(x >= 0  && y >= 0 ){
        console.log('Área:',area)
    }else{
        console.log('Valores inválidos')
        console.log('Valores da área não pode ser negativo')
    }

}
main()