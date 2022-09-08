const products = [
    {
        producto: "galletitas",
        valor: 50,
        hayStock: true
    },
    {
        producto: "caramelos",
        valor: 10,
        hayStock: true
    },
    {
        producto: "coca-cola",
        valor: 25,
        hayStock: false
    }
]

function filterProducts(arregloObjetos, propiedad){
        let valores = []
        for(let i=0; i<arregloObjetos.length; i++){
            valores.push(arregloObjetos[i][propiedad])
        }
        return valores

        //con el indice i accedemos a la posicion del arreglo, en cada posicion hay guardado un objeto, luego con [propiedad] ingresamos al valor de la propiedad 
}

// llamados a funciones
console.log(filterProducts(products, "producto"))
console.log(filterProducts(products, "valor"))