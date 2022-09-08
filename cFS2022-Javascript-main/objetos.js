const user = {
    firstName: "Victoria",
    lastName: "Di Liscia",
    age: 26,
    knownLanguages: ["spanish", "english", "french"]
}

user["firstName"] //devuelve "Victoria"
user.firstName //devuelve "Victoria"

user["age"] // devuelve 26 --> BRACKET NOTATION
user.age // devuelve 26 --> DOT NOTATION

user.knownLanguages //devuelve ["spanish", "english", "french"],
user.knownLanguages[0] //devuelve "spanish"

//Modificar propiedades
user.age = 27
user["age"] = 28

//crear propiedades
user.nationality = "argentina"
user["city"] = "Buenos Aires"


//DIFERENCIA ENTRE DOT Y BRACKET
const property = "city"
user[property] //devolver city
user.property //devuelve undefined