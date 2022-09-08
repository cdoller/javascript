const persona = ["Victoria", 26, true]
console.log(persona)
persona[0] //devuelve "Victoria"
persona[1] //devuelve 26
persona[2] //devuelve true


persona.length //devuelve el largo --> 3

//Array methods

persona.push("elemento") //agrega "elemento" al final del array
const lastElement = persona.pop() //saca el ultimo elemento del array

persona.unshift(10) //agrega 10 al principio del array
const first = persona.shift() //saca el primer elemento del array

//LOOP SOBRE TODOS LOS ELEMENTOS DE UN ARREGLO
for(let i = 0; i<persona.length; i++){
    console.log(persona[i])
}

