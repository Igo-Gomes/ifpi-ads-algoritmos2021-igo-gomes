const  prompt  =  require ( 'prompt-sync' ) ( )

// Entrada
console . log ( 'digite 3 notas e 3 pesos e veja a média ponderada' )

const  nota1  =  Número  ( prompt ( 'Digite a primeira nota:' ) )
const  nota2  =  Número  ( prompt ( 'Digite a segunda nota:' ) )
const  nota3  =  Número ( prompt ( 'Digite a terceira nota:' ) )
const  peso1  =  Número ( prompt ( 'digite o peso da 1 ° nota:' ) )
const  peso2  =  Número ( prompt ( 'digite o peso da 2 ° nota:' ) )
const  peso3  =  Número ( prompt ( 'digite o peso da 3 ° nota:' ) )

// Processamento
const  Mp  =  ( peso1  *  nota1 )   +  ( peso2  *  nota2 )  +  ( peso3  *  nota3 ) 
const  mp  =  peso1  +  peso2  +  peso3
const  total  =  Mp  /  mp

// Saída 
console . log ( `a média pomderada é: ', $ { total . toFixed ( 1 ) } ` )
