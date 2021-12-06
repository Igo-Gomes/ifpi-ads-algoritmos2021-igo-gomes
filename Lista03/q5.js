/*Leia o de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.*/
const prompt = require('prompt-sync')();

console.log('** Produto mais barato **')
function main(){
    const preço_1 = Number(prompt('Valor do Produto 1: '))
    const preço_2 = Number(prompt('Valor do Produto 2: '))
    const preço_3 = Number(prompt('Valor do Produto 3: '))

    if ( preço_1  <  preço_2 &&  preço_1  <  preço_3){
        console . log ( 'Produto',preço_1,'é o mais barato.' )
    }
    else if  ( preço_2  <  preço_1 &&  preço_2  <  preço_3){
        console . log ('Produto',preço_2,'é o mais barato.' )
    }
    else if (preço_3 < preço_1 && preço_3 < preço_2){
        console.log('Produto',preço_3,'é o mais barato.' )
    }else {
        console . log ('Todos os produto mais barato.' )
        }
}
main()