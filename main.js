//Calculadora

//Solicitud de datos al usuario. Usé parsefloat porque entiendo abarca números con decimales y al ser una calculadora existen múltiples resultados

let numero1 = parseFloat (prompt("Por favor ingrese el primer número"))
let numero2 = parseFloat (prompt("Por favor ingrese el segundo número"))

//Esta variable sirve para identificar las opciones del menú
let numeroElegido = parseFloat(0)

//Esta variable booleana permite que funcione el bucle do while en cada iteración
let seguirOperando = true

//Este mensaje es la alerta para que el usuario recuerde los números ingresados
alert ("El primer número ingresado es " + numero1)

alert ("El segundo número ingresado es " + numero2)

//Función para sumar

function sumar (numero1,numero2){
return  numero1 + numero2
}

//Función para restar

function restar (numero1,numero2){
return numero1 - numero2

}

//Función para multiplicar

function multiplicar (numero1,numero2){
    return  numero1 * numero2
}

//Función para dividir. A esta función se le agregó un condicional para que devuelva un mensaje al usuario en caso que quiera dividir por cero

function dividir (numero1,numero2){
if (numero2!==0){
    return numero1 / numero2
}else
    return("No es posible dividir por cero")
}


    //Este bucle o ciclo realiza las iteraciones en cada condicional y en estos se han utilizado como llamada las funciones realizadas anteriormente
    do{
     numeroElegido = parseFloat (prompt("Por favor elija una de las siguientes opciones para realizar una operación : 1 Sumar, 2 Restar, 3 Multiplicar, 4 Dividir, 5 Salir "))
    seguirOperando = confirm ("Desea elegir otra opción")

    if(numeroElegido===1){
        resultado = sumar(numero1,numero2)
        alert("El resulatdo de la suma es: " + resultado)
    }
    if(numeroElegido===2){
        resultado = restar(numero1,numero2)
        alert("El resultado de la resta es: " + resultado)
    }
    if(numeroElegido===3){
        resultado = multiplicar(numero1,numero2)
        alert ("El resultado de la multiplicación es: " + resultado)
    }
    if(numeroElegido===4){
        resultado = dividir(numero1,numero2)
        alert ("El resultado de la división es: " + resultado)
    }else if(numeroElegido===5){
        seguirOperando = false
        alert ("Final de la calculadora ")
        alert ("...............")
    }
    }while (seguirOperando)
    



