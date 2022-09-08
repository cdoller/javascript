//////////////////////////EJERCICIO 1
let saludarBienvenido = (nombre, genero) =>{
    if(genero.toLowerCase() == "f"){
        alert("Bienvenida " + nombre + " a nuestra pagina!")
    }
    else if(genero.toLowerCase() == "m"){
        alert("Bienvenido " + nombre + " a nuestra pagina!")
    }
    else{
        alert("Bienvenidx " + nombre + " a nuestra pagina!")
    }
}

nombre = prompt("Por favor ingrese su nombre")
genero = prompt("F: femenino, M: masculino, X: otres")

saludarBienvenido(nombre,genero)