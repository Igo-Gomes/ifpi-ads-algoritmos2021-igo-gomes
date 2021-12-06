/*Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros 
e dois últimos dígitos.Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.*/
const prompt = require('prompt-sync')()
console.log('Quadrado perfeito')

function main(){
    const num = Number(prompt('Número: '))
    const raiz = Math.sqrt(num)
    const dez_1 = parseInt(num / 100)
    const dez_2 = num % 100
    const s = (dez_1 + dez_2) === raiz

    if(s === raiz){
        console.log(num,'é um quadrado perfeito')
    }else{
        console.log('não um quadrado perfeito')
    }

}
main()