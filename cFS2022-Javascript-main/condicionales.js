//Hacer un condicional que pregunte la nota de un examen y devuelva los siguientes mensajes:
//si se saco 7 o mas promociona
//si se saco 4 o mas aprueba
//si se saco menos de 4 desaprueba

let score = prompt("Cual fue la nota?")

if(score >= 7){
    alert("Promocionaste")
}else if(score >= 4){
    alert("Aprobaste")
}else{
    alert("Desaprobaste")
}

