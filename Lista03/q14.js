/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/
const prompt = require('prompt-sync')()

console.log('** Número de litros vendidos e o tipo de combustível **')

function main(){
    console.log("Álcool é R$ 1,90: até 20 litros, desconto de 3% por litro, acima de 20 litros, desconto de 5% por litro")
    console.log("Gasolina é R$ 2,50: até 20 litros, desconto de 4% por litro, acima de 20 litros, desconto de 6% por litro")
    let preco_alcool= 1.90
    let preco_gasolina= 2.50
    const combustivel=prompt("Escolha (1)-Alcool ou (2)-Gasolina: ")
    const litros=prompt("Digite a quantidade de litros: ")
    
    if (litros <= 20 && combustivel == 1){
        const total_1 = preco_alcool * (litros * (1-(3/100)))
        console.log("Combustivel escolhido: Alcool")
        console.log("Litros vendidos: ",litros)
        console.log("Valor sem desconto: R$ ",litros*preco_alcool)
        console.log("Valor a pagar R$: ",total_1)
    }
    else if (litros > 20 && combustivel == 1){
        const total_2 = preco_alcool * (litros * (1-(5/100)))
        console.log("Combustivel escolhido: Alcool")
        console.log("Litros vendidos: ",litros)
        console.log("Valor sem desconto: R$ ",litros*preco_alcool)
        console.log("Valor a pagar R$: ",total_2)
    }
    if (litros <= 20 && combustivel == 2){
        const total_3 = preco_gasolina * (litros * (1-(4/100)))
        console.log("Combustivel escolhido: Gasolina")
        console.log("Litros vendidos: ",litros)
        console.log("Valor sem desconto R$: ",litros*preco_gasolina)
        console.log("Valor a pagar R$: ",total_3)
    }
    else if (litros > 20 && combustivel == 2){
        const total_4 = preco_gasolina * (litros * (1-(6/100)))
        console.log("Combustivel escolhido: Gasolina")
        console.log("Litros vendidos: ",litros)
        console.log("Valor sem desconto R$:",litros*preco_gasolina)
        console.log("Valor a pagar R$: ",total_4)
    }

}
main()