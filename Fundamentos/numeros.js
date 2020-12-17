const peso1 = 1.2
const peso2 = Number('2.3')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// IsInteger eu verifico se o valor selecionado é inteirou ou nao, me retornando false pra nao e true pra sim

const avaliacao1 =  9.811
const avaliacao2 =  9.345

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //Em Binario
console.log(typeof(media))

// Usando o .tofixed() eu vou definir quantas casas decimais eu quero que ele mostre