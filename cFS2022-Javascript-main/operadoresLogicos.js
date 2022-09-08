//**********************OPERADOR OR******************************************

//EJEMPLO 1

"Palabra" || "" || 20

//Devuelve "Palabra" porque hace lo siguiente
//1) Evalua Boolean("Palabra") porque es el primer termino
//2)Boolean("Palabra") = true entonces devuelve "Palabra" y corta la lectura

//EJEMPLO 2

"" || 20 || "Palabra"

//1) Evaluar Boolean("")
//2) Boolean("") = false --> entonces pasa al siguiente termino
//3) Evalua Boolean(20)
//4) Boolean(20) = true --> entonces devuelve 20 para toda la expresion y corta la lectura de esta expresion


//EJEMPLO 3

"" || false || undefined || 0

//1) Evalua Boolean("") --> devuelve false y pasa al siguiente
//2) Evalua Boolean(false) --> devuelve false y pasa al siguiente
//2) Evalua Boolean(undefined) --> devuelve false y pasa al siguiente
//2) Evalua Boolean(0) --> devuelve false pero como es el ultimo de la cadena lo devuelve

//********************** OPERADOR AND ******************************************

//EJEMPLO 1

"Palabra" && "" && 20

//1)Evaluar Boolean("Palabra") --> devuelve true y pasa al siguiente
//2)Evalua Boolean("") --> devuelve false entonces devuelve "" para toda la expresion y corta la lectura de esta expresion


//EJEMPLO 2
"Palabra" && true && 20

//1)Evaluar Boolean("Palabra") --> devuelve true y pasa al siguiente
//2)Evaluar Boolean(true) --> devuelve true y pasa al siguiente
//1)Evaluar Boolean(20) --> devuelve true y como es el ultimo, devuelve 20 para toda la expresion.


//EJEMPLO 3

"" || false || undefined || 0

//1) Evalua Boolean("") --> devuelve false, entonces devuelve "" para toda la expresion y corta la lectura de la expresion.


//NOT

!true //devuelve false
!false //devuelve true

!0 //devuelve true
!"victoria" //Devuelve false
!(3 > 2)// Devuelve false

!!"expresion" //es igual a hacer Boolean("expresion")