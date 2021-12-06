/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.*/
const prompt = require('prompt-sync')();

// Entrada
console.log('distância entre 2 pontos');
const x1 = Number(prompt('x1: '))
const y1 = Number(prompt('y1: '))

const x2 = Number(prompt('x2: '))
const y2 = Number(prompt('y2: '))

// Processamento
const parcial = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)
const distancia = Math.sqrt(parcial)

// Saída
console.log('A distância entre eles é:', distancia)