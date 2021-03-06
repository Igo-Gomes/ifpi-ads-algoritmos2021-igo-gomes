/*Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.*/

const prompt = require('prompt-sync')({
    sigint: true
})

function main(){
    let pts_jogador1 = 0
    let pts_jogador2 = 0

    // Partida em Andamento
    while (pode_continuar(pts_jogador1, pts_jogador2)){
        let jogador = Number(prompt('ponto: '))
        if (jogador === 1){
            pts_jogador1++
        }else{
            pts_jogador2++
        }
    }

    // Resultado
    let vencedor = 'Vencedor: Jogador'
    if (pts_jogador1 > pts_jogador2){
        vencedor = vencedor + ' 01'
    }else{
        vencedor = vencedor + ' 02'
    }

    console.log(vencedor)
}

function pode_continuar(pts1, pts2){
    const alvo = 21
    const diff = Math.abs(pts2 - pts1)
    if (pts1 < alvo && pts2 < alvo){
        return true
    }else if (diff < 2){
        return true
    }else{
        return false
    } 
}

main()