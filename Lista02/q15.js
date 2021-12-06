/*Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/
const prompt = require('prompt-sync')();

function main(){
    console.log('Primeiro Professor')
    const horas_aula1 = Number(prompt('Quantidade de horas-aula: '))
    const valor_hora1= Number(prompt('Valor hora-aula: '))

    console.log('Segundo Professor')
    const horas_aula2 = Number(prompt('Quantidade de horas-aula: '))
    const valor_hora2= Number(prompt('Valor hora-aula: '))
    
    const salário_1 = horas_aula1 * valor_hora1
    const salário_2 = horas_aula2 * valor_hora2

    if(salário_1 > salário_2){
        console.log('Maior Salário é do Primeiro Professor: $',salário_1)
    }else if(salário_1 < salário_2){
        console.log('Maior Salário é do Segundo Professor: $',salário_2)
    }else{
        console.log('Salários são iguais')
    }
}

main()