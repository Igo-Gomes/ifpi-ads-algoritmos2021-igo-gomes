/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/
const prompt = require('prompt-sync')();

//entrada 
console.log('Quantidade de componentes de latão (em kg)');
const latão = Number(prompt('Digite quantidade de latão (em kg): '));

// Processamento
const cobre = (latão * 70) / 100;
const zinco = (latão * 30) /100;

// Saída
console.log('O latão em kg contém: ',cobre.toFixed(2),'% cobre', 'e', zinco.toFixed(2), '% zinco');
