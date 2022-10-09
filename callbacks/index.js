// ///// PARTE 1 PETICION ASINCRONICA
// //const request = require('request')
// //console.log('Ola k ase pcpio')

// // cuando terminemos de cargar wikipedia.com va a ejecutar la funcion anonima
// // el objetivo de la PETICION ASINCRONICA es que sigamos ejecutando codigo mientras esperamos que se cargue lo que queremos, cuando termina la espera se ejecuta el CALLBACK

// // request('https://wikipedia.com',function(){
// //     console.log('Ya se todo de wikipedia')
// //     request('https://google.com',function(){
// //         console.log('Ya se todo de google')
// //     })
// // })

// // console.log('Ola k ase final')

// // encadenar callbacks no es lo optimo, para ello se utilizan promesas

// ///// PARTE 2 PROMESAS
// // llamamos a la libreria para poder hacer uso de la misma
// // const promesa = require('request-promise')

// // // usamos el then para lanzar el callback, cuando la promesa finaliza se ejecuta el then el cual tiene una funcion anonima
// // promesa('https://wikipedia.com').then(function(html){
// //     console.log('Ya se todo de wikipedia')
// // }).catch(function(err){
// //     console.log(err)
// // })
// // // la promesa tiene un catch para capturar un eventual error
// // console.log('Ola k ase final')

// ///// PARTE 3 PROMESAS CUSTOM
// // const request = require('request')

// // function llamada(url){
// //     return new Promise(function(resolve,reject){
// //         request(url, function(err, response){
// //             if(err){
// //                 reject(err)
// //             }
// //             else{
// //                 resolve(response)
// //             }
// //         })
// //     })
// // }

// // llamada('https://wikipedia.com').then(function(resolve){
// //     console.log(resolve)
// // }).catch(function(reject){
// //     console.log(reject)
// // })

// // request('https://wikipedia.com',function(){
// //     console.log('Ya se todo de wikipedia')
// // })

// ///// PARTE 4 MULTIPLES PROMESAS

// let promesaA = new Promise((resolve,reject)=> setTimeout(resolve,500,'Hola soy la promesa A'))
// let promesaB = new Promise((resolve,reject)=> setTimeout(resolve,800,'Hola soy la promesa B'))
// let promesaC = Promise.reject() // metodo estatico que devuelve una promesa con estado de reject, lo hacemos para hacer fallar a proposito el Promise.all

// // manera mas vieja para encadenar promesas
// // promesaA.then(function(){
// //     promesaB.then(function(){
// //         console.log('termino todo')
// //     })
// // })

// // usamos un metodo estatico de la clase Promise
// // al colocar 'e' estoy capturando el evento, en este caso me da el resultado de cada una de las promesas, el cual me lo devuelve en un arreglo
// Promise.all([promesaA,promesaB,promesaC]).then(function(e){
//     console.log('termino todo',e)
// }).catch(function(err){
//     console.log(err, 'todo mal')
// })
// // el promise.all genera una promesa que esta esperando que se cumplan todas las demas promesas
// // si alguna promesa no se cumple, el metodo falla

// // EJEMPLO DE CUANDO USAR: cuando tengamos una aplicacion la cual necesita consumir multiples API que solamente se renderice cuando se hayan cargado correctamente todas las API para ello podemos usar un Promise.all

// ///// PARTE 5 ENCADENAR PROMESAS
// Tenemos casos en los cuales una promesa necesita informacion de una promesa anterior, entonces necesitamos que se lance cuando la anterior se haya completado correctamente

// manera de hacerla correctamente sin poner callbacks tras callbacks

// 1er promesa, returna un objeto de tipo promesa con 2 parametros, un resolve y un reject con una arrow function lanzamos una funcion, el settimeout, a los 200ms va a llamar a resolve con 'Pepe'
function PromesaA() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "Pepe");
  });
}

// 2da promesa que espera a que se resuelva la promesa A para poder continuar, espera un parametro y a los 400ms llama a resolve con 'mi nombre es...'
function PromesaB(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1400, "Mi nombre es " + nombre);
  });
}

PromesaA().then(PromesaB).then(console.log);

// sin pasarle el parametro explicitamente, se lo pasamos de manera implicita, porque la promesaB espera un nombre y la promesaA devuelve una respuesta con su resolve, en este caso es el nombre
