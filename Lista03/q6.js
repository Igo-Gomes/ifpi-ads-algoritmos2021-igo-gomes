/*Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/
const prompt = require('prompt-sync')()

console.log('** Turno em que aluno estuda **')
function main() {
    const turno = prompt('Digite turno: (M)= Maturnino, (V)= Vespertino ou (N)= Noturno: ')
    
    if (turno === 'M' || turno  === 'm') {
    console.log('Bom dia!')
    }
    else if (turno === 'V' || turno  === 'v'){
        console.log('Boa tarde!')
    }
    else if (turno === 'N'|| turno  === 'n'){
        console.log('Boa noite!')
    }else{
        console.log('Valor Inválido!')
    }
}
main()