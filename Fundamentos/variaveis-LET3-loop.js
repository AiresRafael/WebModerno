const funcs = []

for (let numero = 0; numero < 10; numero++) {
        funcs.push(function(){
        console.log(numero)
    })        
}
funcs[2]()
funcs[8]()