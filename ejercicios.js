/* Index o Value

Crea una función llamada "min" que tome dos parámetros. 
Un arreglo de números desordenados y un string que va a valer "index" o "value".
Si el string es "value", la función deberá devolver el número más chico del array.
Si el string es "index", la función deberá devolver el índice (la posición) del número más chico en el array.

	Ejemplo:

- min([5,8,2,3,4,9,1,18], “index”) debe retornar 6 (porque es el índice del 1 que es el menor)
- min([5,8,2,3,4,9,1,18], “value”) debe retornar 1 (porque 1 es el menor número)

*/

// metodo Slice(): nos hace una copia del arreglo anterior o al que nosotros le indiquemos
// Metodo Sort(): ordenar los arreglos que nosotros queramos ; ESte metodo modifica el arreglo ordenandolo, devlviendo el mismo arreglo ordenado , pero no uno nuevo. (function(a,b){return a-b})
//Metodo indexOf(): es devolernos el indice de un elemento

function min(array, palabra) {
  let arrayOrdenado = array.slice().sort(function (a, b) {
    return a - b;
  });

  let menorNumero = arrayOrdenado[0];

  if (palabra === "value") {
    return menorNumero;
  } else {
    //index: posicion del menor numero

    let menorIndice = array.indexOf(menorNumero);
    return menorIndice;
  }
}

min(
  [5, 8, 2, 3, 4, 9, 1, 18],
  "index"
)(
  //La copia se realiza con slice.Luego esa copia se ordena con sort. La idea es obtener el elelemento de menor valor. No alteramos el arreglo original para poder tomar el indice de ese elemento si se pide string

  "----------------------------------------------------------------------------------------------------"
);

function min(array, string) {
  let minimo = array[0];
  //recorrer el largo de nuestro arreglo
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimo) {
      minimo = array[i];
    }
  }

  if (string == "value") {
    return minimo;
  }

  if (string == "index") {
    return array.indexOf(minimo);
  }
}
min(
  [5, 8, 2, 3, 4, 9, 1, 18],
  "index"
)(
  "-------------------------------------------------------------------------------------"
);

//SPREAD OPERATOR: es un operador que simplifica la suma o igulación de valores en una estructura de datos. Cvertir un array o un objeto en el conjunto de valores que puede contener.

//Su simbolo son los 3 puntitos: ...

//ejemplo con metodo Math.max:

let arr = [22, 3, 68, 0];
let max = Math.max(...arr);
console.log(max);

//Podemos usar este operador  para pasar elementos de un array como aprametros de una funcion!

let min = (arr, string) => {
  let min = Math.min(...arr);
  if (string == "value") {
    return min;
  }
  if (string == "index") {
    return arr.indexOf(min);
  }
};
min([5, 8, 2, 3, 4, 9, 1, 18], "index");

/* 
  Pares e Impares
  
  Deben crear una función llamada paresEimpares 
  que reciba 3 parámetros 
  los dos primeros que sean números y el tercero una palabra (string) 
  la función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe 
  pero debe en primer lugar mostrar todos los números pares 
  y luego los impares 
  además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 
  
  Ejemplo: 
  paresEImpares(10,7,’prueba’)
  ====> 
  0
  2
  4
  6
  8
  10
  ("---------------------------------------------------")
  1
  3
  5
  ’Prueba’
  9
  */

function paresEImpares(numeroA, numeroB, palabra) {
  //recorrer hasta nuestro primer parametro
  for (let i = 1; i <= numeroA; i++) {
    //sacar los numero pares
    if (i % 2 === 0) {
      //evaluamos con un condicional anidado si el elemento es divisible por numeroB
      /* if(i % numeroB == 0){
          console.log(palabra)
        }else{
          console.log(i)
        } */
      //if ternario: refactorizar ; (condicion) ? if : else
      i % numeroB == 0 ? console.log(palabra) : console.log(i);
    }
  }
  console.log("-----------------------------------------------");
  for (let i = 1; i <= numeroA; i++) {
    if (i % 2 !== 0) {
      /*  if(i % numeroB == 0){
          console.log(palabra)
        }else{
          console.log(i)
        } */
      i % numeroB == 0 ? console.log(palabra) : console.log(i);
    }
  }
}
paresEImpares(10, 7, "plataforma");

/* Similar String
  
  Debés crear una función llamada `split`
   que reciba un `string` 
   y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte..
  
  Importante: No podés usar el String.split()
  
  El método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.
  
  Ejemplo: 
  
  split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
  split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
   */

function split(palabra) {
  let array = [];

  for (let i = 0; i < palabra.length; i++) {
    array[i] = palabra[i];
  }
  return array;
}

("---------------------------------------------------------------");

//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

function split(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

split("Bienvenidos");

/* --------------------------------------- */

const split = (str) => {
  let array = [];
  for (c of str) {
    array.push(c);
  }
  return array;
};

console.log(split("hola"));
console.log(split("chau"));

/* for (inicializacion; condicion; incremenento/decremento) { // Bloque de código que indica lo que querés hacer dentro del for. } */

/* Nuevo Arreglo
  
  Debés crear una función llamada `nuevoArreglo`
  que reciba un número como parámetro
  y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
  
  Ejemplo: 
  
  nuevoArreglo(5) debe retornar [1,2,3,4,5]
  nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
   */

/* function nuevoArreglo(number) {
    let newArray = [];
  
    for (let i = 0; i < number; i++) {
      newArray[i] = i + 1;
    }
    return newArray;
  } */

// push: agregarme o pushiarme los numeros que estan en mi indice a la variable que yo le estoy indicando

/* function nuevoArreglo(number) {
    let newArray = [];
  
    for (let i = 0; i <= number - 1; i++) {
      newArray.push(i + 1);
    }
  
    return newArray;
  } */

function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

nuevoArreglo(10);
