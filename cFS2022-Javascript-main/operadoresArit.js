const a = 2
const b = 3
let c = 5
let d = 6

d+2 //NO CAMBIA EL VALOR DE D

d = d + 1 //AHORA SI D ES 7, PORQUE REASIGNO VALOR
c = c - a // AHORA C ES IGUAL A 3

let suma = a + b // 2 + 3 = 5
let resta = d - b // 6 - 3 = 3
let division = d / b // 6 / 3 = 2
let multiplicacion = b * c // 3 * 5 = 15
let restante = c % a // 5 % 2 = 1 (es lo que resta de la dividir 5 por 2)

//INCREMENTO
d++ //le suma uno a la variable d (le cambia valor a uno adicional)

//DECREMENTO
d-- //le resta uno a la variable d (le cambia valor a uno menos)

d+=2 //INCREMENTA DE A DOS
d-=3 //DECREMENTA DE A TRES

const multiplicarConversion = "3" * 2 //Me convierte el "3" a un numero y despues opera
typeof multiplicarConversion //DEVUELVE "number"

const sumaConverse = "2" + 2 //lo concatena como un string y devuelve "22"
typeof sumaConverse //devuelve "string"

Number("2") //devuelve 2
String(200) //devuelve "200"

Number("Victoria") // devuelve NaN

//BOOLEAN
Boolean("Victoria") //devuelve true
Boolean(4243234)  //devuelve true

//FALSEY - solo en estos 5 casos Boolean() devuelve false, en los demas devuelve true
Boolean(0)
Boolean("")
Boolean(null)
Boolean(undefined)
Boolean(false)