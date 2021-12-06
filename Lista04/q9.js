/*Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:

Lugar Pontos
1
2
3
4
Pontos
9
6
4
3

Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main(){
    let prova = Number(prompt('Prova: '))
    let qtd_nadadores = Number(prompt('Nadadores: '))
    let pontos_a = 0
    let pontos_b = 0

    while (prova !== 0 || qtd_nadadores !== 0){
        for (let i = 1; i <= qtd_nadadores; i++){
            // Receber os dados de cada nadador
            console.log(`Nadador ${i}/${qtd_nadadores}:`)
            const nome = prompt('Nome: ')
            const classificacao = Number(prompt('Classificação: '))
            const tempo = Number(prompt('Tempo(s): '))
            const clube = prompt('Clube: ')

            const pontos = calcular_pontuacao(classificacao)
            
            if (clube === 'a'){
                pontos_a += pontos
            }else{
                pontos_b += pontos
            }
        }

        prova = Number(prompt('Prova: '))
        qtd_nadadores = Number(prompt('Nadadores: '))
    }

    // Apresentar resultado do campeonato
    console.log('****** NATAÇÃO ******')
    console.log('---------------------')
    console.log(`Time A: ${pontos_a} pts`)
    console.log(`Time B: ${pontos_b} pts`)

    console.log('Resultado: ---')
    if (pontos_a > pontos_b){
        console.log('Vencedor Time A')
    }else if (pontos_b > pontos_a){
        console.log('Vencedor Time B')
    }else{
        console.log('Empate')
    }
}

function calcular_pontuacao(classificacao){
    if (classificacao === 1){
        return 9
    }else if (classificacao === 2){
        return 6
    }else if (classificacao === 3){
        return 4
    }else if (classificacao === 4){
        return 3
    }else{
        return 0
    }
}

main()