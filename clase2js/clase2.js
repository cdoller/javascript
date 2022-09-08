//////////////////////////Sintaxis basica de una funcion
// function saludar(nombre){
//     alert("Bienvenido " + nombre + "!")
// }
// saludar("Pedro")

//////////////////////////Sintaxis de tipo Arrow Function
// let duplicarNumero = (numero) =>{
//     return numero * 2
// }
//console.log("El doble de 10 es: " + duplicarNumero(10))

//////////////////////////CALLBACK
// function saludar(nombre){
//     alert("Bienvenido " + nombre + "!")
// }
// function procesarEntradaUsuario(callback){
//     var nombre = prompt('Por favor ingresa tu nombre.')
//     callback(nombre)
// }
// procesarEntradaUsuario(saludar)

//////////////////////////FOR EACH
// const numbers = [1,4,6,7,8]

// numbers.forEach(number => {
//     console.log(number*2)
// })

//////////////////////////MAP
// const numbers = [1,4,6,7,10]

// let numerosTriples = numbers.map(number => {
//     return number*3
// })

//////////////////////////FILTER
// const numbers = [1,4,6,7,10]

// let numerosPares = numbers.filter(number => {
//     return number % 2 === 0
// })

//////////////////////////REDUCE
const numbers = [1,4,6,7,10]

let suma = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

