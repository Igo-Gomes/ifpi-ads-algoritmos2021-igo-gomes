/* Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/

const prompt = require('prompt-sync')()

console.log('** Média de Aproveitamento (ABCDE) **')
function main() {
    const nota_1 = Number(prompt('Digite a primeira nota: '))
    const nota_2 = Number(prompt('Digite a segunda nota: '))
    const media = (nota_1 + nota_2)/2
    
    if (media > 0 && media <= 4.0){
    console.log('Reprovado')
    }
    else if (media > 4.0 && media <= 6.0){
        console.log('Reprovado')
    }
    else if (media > 6.0 && media <= 7.5){
        console.log('Aprovado')
    }
    else if (media > 7.5 && media < 9.0){
        console.log('Aprovado')
    }
    else if (media > 9.0 && media <= 10.0){
        console.log('Aprovado')
    }else{
        console.log('Nota inválida')
    }
}
main()