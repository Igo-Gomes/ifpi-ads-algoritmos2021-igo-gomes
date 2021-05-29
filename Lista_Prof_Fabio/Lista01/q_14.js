const  entrada  =  require ( 'prompt-sync' ) ( )

// Entrada
const  nota1  =  Número ( entrada ( 'Nota 1:' ) )
const  peso1  =  Número ( entrada ( 'Peso 1:' ) )

const  nota2  =  Número ( entrada ( 'Nota 2:' ) )
const  peso2  =  Número ( entrada ( 'Peso 3:' ) )

const  nota3  =  Número ( entrada ( 'Nota 3:' ) )
const  peso3  =  Número ( entrada ( 'Peso 3:' ) )

// Processamento
const  soma_notas_pesos  =  nota1 * peso1  +  nota2 * peso2  +  nota3 * peso3
const  soma_pesos  =  peso1  +  peso2  +  peso3

const  media_ponderada  =  soma_notas_pesos  /  soma_pesos

// Saída
console . log ( 'Média ponderada:' ,  media_ponderada . toFixed ( 2 ) )