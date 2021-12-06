/*Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/
const prompt = require('prompt-sync')()
console.log('**Digite a senha de acesso**')

function main(){
    const senha = Number(prompt('Senha: ')) 

    if(senha === 1234){
        console.log('Acesso permitido')
    }else{
        console.log('Acesso negado!!')
    }

}
main()