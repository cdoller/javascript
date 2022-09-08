const a = 2
const b = 3
let c = 3
let d = "3"

const AmayorB = a > b //FALSE por a (2) no es mayor a b(3)
const AmayorOIgualB = a >= b //FALSE por a (2) no es mayor o igual a b(3)

const AmenorB = a < b //TRUE por a (2) es menor a b(3)
const AmenorOIgualB = a <= b //TRUE por a (2) es menor o igual a b(3)

const BmenorC = b<c //FALSE porque b(3) no es menor a c(3)
const BmenorOIgualC = b<=c  //TRUE porque b(3) es igual a c(3)

//IGUALDADES ESTRICTA

const AigualB = a === b //FALSE porque a(2) no es igual a b(3)
const BigualC = b === c //TRUE porque b(3) es igual a c(3)
const BigualD = b === d //FALSE porque b(3) no es igual d("3")

//IGUAL ABSTRACTA

const AigualAbstB = a == b //FALSE porque a(2) no es igual a b(3)
const BigualAbsC = b == c //TRUE porque b(3) es igual a c(3)
const BigualAbsD = b == d// TRUE porque convierte el tipo de c ("3" --> 3) y despues lo compara con b (3)

//DESIGUALDAD ESTRICTA

const AdesigualB = a !== b// TRUE porque a(2) es distinto de b(3)
const BdesigualC = b !== c //FALSE porque b(3) no es distinto de c(3)
const BdesigualD = b !== d //TRUE proque b(3) es distinto a c("3")