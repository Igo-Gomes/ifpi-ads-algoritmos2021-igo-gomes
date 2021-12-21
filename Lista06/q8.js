/*Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. 
Ex.: substr(texto,10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.*/

const prompt = require('prompt-sync')()
function substr(nome, inicio, final){
    inicio = inicio - 1
    console.log(nome.substr(inicio,final))
    
}
function main(){
    const nome = prompt('Digite frase: ')
    const inicio = prompt('Início do corte: ')
    const final  = prompt('Fim do corte: ')

    substr(nome, inicio, final)
}
main()