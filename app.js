document.write("<h1>hola javaScript")
//comentarios de una linea
/*comentarios de bloque*/

let nombre ="Carlos"

console.log(nombre)

//array 

let datos=["ana","pablo","carlos"]

let edades=[23,17,44,15]

let objetoDatos={
    nombre:"ana",
    edad:25,
    cuenta:"Alumno",
    notas:[5.5,6.8,5.9]
}

console.log(datos)
console.log(edades)
console.log(objetoDatos)

//operadores relacionales
/*
>
<
>=
<=
==
!=
===
*/
let uno=1
let unoString="1"

console.log(uno==unoString)
console.log(uno===unoString)

//estructuras de control 

if(uno==unoString)
    console.log("son iguales")
if(uno===unoString){
    console.log("son iguales iguales")
}
else{
    console.log("no son iguales")
}

let tipoalumno
switch(tipoalumno){
    case'diurno':
    console.log("es un alumno de dia")
        break;
        case 'vespertino':
        console.log("es un alumno de noche")
        default:
            console.log("no es un alumno")
}

//ciclos

//while

/* mostrar los primeros 10 numeros positivos*/
let numero=1;

while(numero<10){
    console.log(numero)
    numero=numero+1

}

//For
let nombres=["ana","pablo","carlos"]
    for(let i=0;i<nombres.length;i++){
        console.log(nombres[i])
    }


    //funciones

    function  mensaje(){
        console.log("saludos")
    }

    //nota= if(numero %2==0)

    mensaje()

    /*
    muestra la cantidad de numeros pares que existen dentro de un arreglo 
    use una funcion que retorne si el numero es par o no 
    */

    let numeros=[45,33,14,23,20,4,7,12,68,3]

    let contP=0

    function es_par(num){
        if(num %2==0)
            return true
        return false 
    }

    for(let i=0;i<numeros.length;i++){
        if(es_par(numeros[i]))
            contP++
    }

    console.log("los pares son",contP)

    //modifique el ejercicio para mostrar la 
    //cantidad de impares 