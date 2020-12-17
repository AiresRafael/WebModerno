/*
    Ao utilizar o var, algumas linguagens de programaçao, reconheceria ele apenas dentro do escopo do codigo(onde for declarada)
    Ja no javascript, a variavel VAR tambem fica visivel fora do escopo (vaza do escopo)
*/
{
    {
        {
            {
                var sera = 'sera?'
                console.log(sera) 
            }
        }
    }
}
var sera = "sera2"
console.log(sera)

/*   Porem, ao utilizar a variavel VAR dentro de uma função, nao sera possivel acessar ela fora do escopo, apenas dentro
*/
function teste() {
    var local = 123
    console.log(local) //Dentro funciona
}
teste()
// console.log(local) //Fora nao funciona