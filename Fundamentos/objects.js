// ------ OBJETOS--------

const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco= 4000

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 25,
}
    console.log(prod2)

/*---------ANOTAÇOES OBJETOS----------
Um objeto é uma coleçao de chaves {} e valores
Voce pode cria um objeto vazio e ir atribuindo valores a ele depois.
Voce pode tambem, criar um objeto e ja ir atribuindo valores ao objeto utilizando a declaraçao: iten e terminando com a virgula
Voce tambem pode criar um objeto dentro do outro ex:
*/

const itens1 = {
    itens: {
    calça: 'gucci',
    camisa: 'tommy',

        corpo: {
            creme: 'protetor solar',
            perfume: 'armani',

                carro: {
                    marca:'honda',
                    modelo: 'civic', 
             }
        }
    }
}
console.log(itens1)
console.log(typeof(itens1))
