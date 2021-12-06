/*Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.*/
const prompt = require('prompt-sync')();

function main(){
    const nota_1 = Number(prompt('Nota 1: '))
    const nota_2 = Number(prompt('Nota 2: '))

    const media = (nota_1 + nota_2) / 2
    

    if (media >= 7){
        console.log('Aprovado')
    }else{
        console.log('Você ficou em exame final')
        const nota_exame = Number(prompt('Nota exame final: '))
        const media_final = (nota_1 + nota_2 + nota_exame) / 3
        if(media_final >= 5){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
    }
}
main()