//No. 1 Realizar un programa que permita el ingreso de un número y muestre su tabla de multiplicar (Los primeros 10 múltiplos). 
//  let numero = Number (prompt("Ingrese un numero"))

//  for ( let i = 1 ; i <= 10 ; i++ ) {
//      console.log(`${i} x ${numero} = ${i * numero}`)
//  }

// No. 2 Realizar un programa que permita el ingreso de números los cuales se tienen que ir acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. 

//  let numeroIngresado = Number (prompt ("Ingrese un numero"))
//  const numeros = [  ]


//  while ( numeroIngresado ) {
//      numeros.push ( numeroIngresado )
//      numeroIngresado = Number ( prompt ("Ingrese un numero")) 
//  }

//  console.log (numeroIngresado)
//  console.log (numeros)

// No.3 Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un  rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor  guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle al  usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario adivine el  número secreto. Por último mostrar un mensaje de felicitaciones y decirle en cuantos  intentos lo ha realizado. 


// let  numeroSecreto = 10;
// let contadorBucle = 1;
// let numero = Number (prompt ("Ingresa un numero"));

// while (numero !== numeroSecreto) {
//     contadorBucle++;
//     if (numero > numeroSecreto) {
//         alert ("Su numero es mayor al numero secreto")
//         numero = Number (prompt ("Ingresa un numero"))
//     }else if ( numero < numeroSecreto) {
//         alert ("Su numero es menor al numero secreto")
//         numero = Number (prompt ("Ingresa un numero"))
//     }  
// }
// alert ( ` Felicitaciones, adivinaste el numero secreto. Cantidad de intentos realizados: ${contadorBucle}` )


// No.4 Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible por el valor 1 y por sí mismo. 

// let numero = Number (prompt ("Ingrese un numero"))
// let numeroPrimo = true;

// for (let i = 2; i < numero ; i++) {
    
//     if ( numero % i === 0 ) {
//         numeroPrimo = false;
//     }

// }
// if (numeroPrimo) { 
//     alert ( ` El numero: ${numero} si es primo` )
// }else {
//     alert ( ` El numero: ${numero} no es primo` )
// }


// No. 5  Realizar un programa que reciba un número y muestre de alguna forma todos sus divisores

// let numero = Number ( prompt ("Ingrese un numero"))
// console.log (` El numero elegido es: ${numero} y sus divisores son:` )


// for ( let i = 1; i <= numero ; i++) {
//     if ( numero % i == 0)
//     console.log (i)
// }

//No. 6  Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array. 

// const frutas = [ "Sandia", "Cereza", "Fresa", "Banano", "Manzana", "Pera", "Mora", "Mango", "Papaya", "Piña" ]

// console.log (frutas)

// for ( let i = 0; i < frutas.length; i++) {
//     // console.log (frutas [i]);
//     console.log (` Entre las frutas que mas me gusta esta: ${frutas[i]}` ) 
// }

// No. 7 Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de los elementos

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log (numeros)

// for ( let i = 0; i < numeros.length; i++) {
//     console.log (` el doble de ${numeros[i]} es ${numeros[i] * 2}`)
    
// }

//No. 8 Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por cada elemento del array

// const familia = [
//     {nombre: "Astrid", edad: 53, parentesco: "mamá", pais: "colombia"},
//     {nombre: "Ivan", edad: 55, parentesco: "papá", pais: "colombia"},
//     {nombre: "Javier", edad: 30, parentesco: "hijo", pais: "colombia"},
//     {nombre: "Natalia", edad: 25, parentesco: "hija", pais: "colombia"},
//     {nombre: "Canela", edad: 12, parentesco: "mascota", pais: "colombia"},
// ]
// console.log (familia)

// for ( let persona of familia) {
//     console.log ( "Hola soy" + " " + persona.nombre + " " + "tengo" + " " + persona.edad + " " +"años y soy" + " "+ persona.parentesco + " " + "nosotros vivimos en" + " " + persona.pais)
// }

//No. 9  Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números impares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log (numeros)
// console.log ("los numeros impares del array son:")

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros [i] % 2 !==0 ) {
//         console.log (numeros [i]);       
//     }   
// }

//No. 10  Realizar un programa que permita la entrada de números y calcule la suma de los números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0. 


// let sumaNumeroPares = 0;
// let sumaNumeroImpares = 0;
// let numero = Number (prompt ("ingrese un numero"))

// const numeros = [  ]

// while (numero !==00) {
//     numeros.push (numero)
//     if (numero % 2 ===0) {
//         // console.log (sumaNumeroPares+= numero);
//         sumaNumeroPares += numero;
//     }else {
//         // console.log (sumaNumeroImpares += numero)
//         sumaNumeroImpares += numero;
//     }
//     numero = Number (prompt ("ingrese un numero"))
// }
// console.log (numero)
// console.log (numeros)

// console.log ( "la suma de los numeros pares es" + " " + sumaNumeroPares)
// console.log ( "la suma de los numeros impares es" + " "+ sumaNumeroImpares)



//No. 11 Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande.

// const numeros = [ 11, 22, 5, 10, 9, 7, 6, 3, 18, 14]
// let numeroMayor = numeros [0];

// console.log (numeros)

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > numeroMayor) {
//         (numeroMayor = numeros[i])
        
//     }
// }
// console.log (` El numero mayor del array es: ${numeroMayor}` )

//No.12 Dado un array de 10 números, realizar un programa que imprima por pantalla el número más pequeño

//  const numeros = [ 11, 22, 5, 10, 9, 7, 6, 3, 18, 14]
//  let numeroMenor = numeros [0];

//  console.log (numeros)

//  for (let i = 0; i < numeros.length; i++) {
//      if (numeros[i] < numeroMenor) {
//          (numeroMenor = numeros[i])
        
//      }
//  }
// console.log (` El numero menor del array es: ${numeroMenor}` )


//No. 14 Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado.

// for (let i = 1; i <= 5; i++) {
//     let triangulo = " ";

//     for (let j = 1; j <= i; j++) {
//         triangulo += " * ";
        
//     }
//     console.log (triangulo)
// }
  

//No. 15  Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado pero invertido.

//  for (let i = 5; i >= 1; i--) {
//       let triangulo = " ";

//       for (let j = 1; j <= i; j++) {
//           triangulo += " * ";
        
//       }
//       console.log (triangulo)
//   }


//No. 16 Dado un array de 10 números desordenados, realizar un programa que imprima por pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

// const numerosDesordenados = [ 9, 4, 7, 2, 10, 3, 5, 8, 1, 6];

// console.log (numerosDesordenados)

