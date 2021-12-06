/*Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/
const prompt = require('prompt-sync')()

console.log('** Classificação sobre a participação da pessoa no crime**')

function main(){
    console.log(" Responda com SIM=(s) ou NÃO=(n) !!!")
    const resp1= prompt("Telefonou para a vitima? ")
    const resp2= prompt("Esteve no local do crime? ")
    const resp3= prompt("Mora perto da vitima? ")
    const resp4= prompt("Devia para a vitima? ")
    const resp5= prompt("Ja trabalhou com a vitima? ")
    let nr=0
    if (resp1 == 's'){
        nr=nr+1
    }
    if (resp2 == 's'){
        nr=nr+1
    }
    if (resp3 == 's'){
        nr=nr+1
    }
    if (resp4 == 's'){
    nr=nr+1
    }
    if (resp5 == 's'){
        nr=nr+1
    }
    if (nr == 2){
        console.log("Voce é: Suspeito")
    }
    else if (nr == 3 || nr == 4){
        console.log("Voce é: Cumplice")
    }
    else if (nr == 5){
        console.log("Voce é: Assassino")
    }else{
        console.log("Voce é: Inocente")
    }

}
main()
