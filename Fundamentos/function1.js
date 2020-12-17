/*--------FUNCTION------
Uma funçao é um verbo, uma ação que execulta um processo baseado nas sentenças de codigo.

A função define um bloco{} associado que como uma receita de bolo recebe os igredientes e me retorna um resultado no final.
Uma função tambem pode nao receber um ingrediente
e tambem pode NAO retornar
*/

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) 
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 20, 30, 40)//Soma os primeros e ignora os nao declarados
imprimirSoma()//NaN

//Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))