/** EJERCICIO FINAL
 * 
 * Armar un script y declarar un arreglo con los nombres de 5 personas. Utilizando los array  methods aprendidos hacer las siguientes acciones:
 * 
 * 1) Utilizando .forEach() loggear en la consola el nombre de las 5 personas.
 * 2) Utilizando .slice() guardar en una variable un nuevo arreglo que vaya desde la segunda  hasta la cuarta persona. Loggear ese arreglo.
 * 3) Utilizando .map() guardar en una variable un arreglo de números que indique la  cantidad de letras que tiene cada nombre. Loggear ese arreglo.
 * 4) Utilizando .join() guardar en una variable un string que contenga a todos los nombres  separados por un espacio. Loggear ese string.
 * 5) Utilizando .filter() guardar en una variable un arreglo de nombres que solo contenga a los nombres que terminan con la letra “a”.
 * 
*/

const nombresPersonas = ["Sofia", "Micaela", "Carlos", "Daniel", "Humita"]
///////////////////// 1 /////////////////////
nombresPersonas.forEach(persona =>{
    console.log(persona)
})

///////////////////// 2 /////////////////////
const personasElegidas = nombresPersonas.slice(1,4)
console.log(personasElegidas)

///////////////////// 3 /////////////////////
const largoNombres = nombresPersonas.map(persona =>{
    return persona.length
})
console.log(largoNombres)

///////////////////// 4 /////////////////////
const stringNombres = nombresPersonas.join(" ")
console.log(stringNombres)

///////////////////// 5 /////////////////////
const nombresQueTerminanEnA = nombresPersonas.filter(nombre =>{
    return nombre[nombre.length - 1].toLowerCase() === "a"
})
console.log(nombresQueTerminanEnA)
// como cada nombre es un string, con length - 1 entramos a su ultimo caracter y lo comparamos con el valor deseado, este caso "a"
