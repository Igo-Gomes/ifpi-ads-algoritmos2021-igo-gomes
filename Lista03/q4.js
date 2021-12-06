/*Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.*/
const prompt = require('prompt-sync')();

console.log('Notas de um aluno')
function main(){
    const nota_1 = Number(prompt('Nota 1: '))
    const nota_2 = Number(prompt('Nota 2: '))

    const media = (nota_1 + nota_2) / 2
    

    if (media === 10){
        console.log('Aprovado com Distinção!')
    }else if (media >= 7){
        console.log('Aprovado!')
        }else{
            console.log('Reprovado!!')
        }
}
main()