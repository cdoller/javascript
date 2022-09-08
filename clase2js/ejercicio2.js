//////////////////////////EJERCICIO 2
let listOfNames = ["Iron Man", "Thor", "The Incredible Hulk", "Captain America"]
let countCharacters = (nombres) =>{
    let objetoNombres = new Object()

    // Ciclo for para recorrer el arreglo que recibe la funcion y cargar el objeto
    for(let i=0; i<nombres.length; i++){
        objetoNombres[nombres[i]] = nombres[i].length
    }

    return objetoNombres
}

console.log(countCharacters(listOfNames))