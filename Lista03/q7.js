/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.*/
const prompt = require('prompt-sync')()

console.log('** Salário de um colaborador **')
function main() {
    const salario = Number(prompt('Digite o seu salário: '))
    let salario_reajustado,porc_reajuste,valor_reajuste

    if (salario <= 280){
    salario_reajustado = ((salario/100)*20) + salario
    porc_reajuste = '20%'
    valor_reajuste = (salario/100)*20
    }
    else if (salario > 280 && salario <= 700){
    salario_reajustado = salario + (salario/100)*15
    porc_reajuste = '15%'
    valor_reajuste = (salario/100)*15
    }
    else if (salario > 700 && salario <= 1500){
    salario_reajustado = salario + (salario/100)*10
    porc_reajuste = '10%'
    valor_reajuste = (salario/100)*10
    }else{
    salario_reajustado = salario + (salario/100)*5
    porc_reajuste = '5%'
    valor_reajuste = (salario/100)*5
    }
    console.log('Salário antes do reajuste: ', salario)
    console.log('Salário reajustado: ', salario_reajustado)
    console.log('Valor do reajuste: ', valor_reajuste)
    console.log('Porcentagem do reajuste: ', porc_reajuste)

}
main()