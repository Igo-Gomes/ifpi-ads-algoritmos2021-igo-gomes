/*Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o numero de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).*/
const prompt = require('prompt-sync')();

//entrada 
console.log('Despesas de um fumante');
const anos_fuma = Number(prompt('Número de anos que fuma: '));
const cigarros_dias = Number(prompt('Número de cigarros fumados por dia: '));
const preço_carteira = Number(prompt('Preço de uma carteira de cigarros: '));

// Processamento
const total_cigarros = cigarros_dias * 365 * anos_fuma;
const despesas_cigarros = (total_cigarros / 20) * preço_carteira;

// Saída
console.log('O dinheiro gasto é: ','$',despesas_cigarros.toFixed(2),'reais');