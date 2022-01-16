function ejercicio1(){

var numero
numero = prompt("Introduce un numero")

if(numero>10){
    alert("El numero es mayor que 10")
}else{
    alert("El numero es menor que 10")
}

}

function ejercicio2(){

var palabra
palabra = prompt("Introduce palabra")

if (palabra.includes("b") == true){
alert("contiene b")
}else{
    alert("no contiene b")
}

}

function ejercicio3(){

var d = new Date
d = prompt("Introduce tu fecha de nacimiento")
var year = d.getFullYear
if (2021-year>18){
    alert("Es mayor de 18")

}else{
    alert("Es menor de 18")
}

}

function ejercicio4(){

    var L = "Leche"
    var C = "Cacao"
    var A = "Avellanas"
    alert(+L +C +A)

    var producto
    producto = prompt("Elige un producto: /n-Leche /n-Cacao /n-Avellanas ")

    if (producto = "Leche"){
        alert("La leche vale 1 euro")
    }if (producto = "Cacao"){
        alert("El cacao vale 2 euros")
    }if (producto = "Avellanas"){
        alert("las avellanas valen 3 euros")
    }else{
        alert("El producto no esta en la lista")
    }

}

function ejercicio5(){
    var T = "triangulo"
    var R = "rectangulo"
    var P = "pentagono"
    var H = "hexagono"

    alert (+T +R +P +H)

    var forma
    froma = prompt ("Elige una forma")

    switch(forma){
        case "triangulo":
            var base
            base = prompt("Introduce la base")
            var altura
            altura = prompt("Introduce la altura")
            var area = (base * altura)/2
            alert("el resultado es" +area)
         break

      case "rectangulo":
             var base
             base = prompt("Introduce la base")
             var altura
             altura = prompt("Introduce la altura")
             var area = (base * altura)
             alert("el resultado es" +area)
    break

        case "pentagono":
        var apotema
        apotema = prompt("Introduce el apotema")
        var perimetro
        perimetro = prompt("Introduce el perímetro")
        var area = (apotema * perimetro)/2
        alert("el resultado es"+area)
        break

        case "hexagono":
            var apotema
        apotema = prompt("Introduce el apotema")
        var perimetro
        perimetro = prompt("Introduce el perímetro")
        var area = (apotema * perimetro)/2
        alert("el resultado es"+area)
        break

    }


}

function ejercicio6() {

var frase
frase = prompt("Introduce una frase")

if (frase.includes("b")) {
    if ((frase.includes("p"))&(frase.includes("b"))) {
        alert("Contiene b y p")

    }else {
         alert("Contiene b")  
    }

}
if (frase.includes("v")) {
    if ((frase.includes("u"))&(frase.includes("v"))) {
        alert("Contiene u y v")

    }else {
         alert("Contiene v")  
    }

}

}


function ejercicio7() {

var numero
numero = prompt("Introduce un numero")

resto = numero % 2
if (resto==0){
    alert("El numero es par")

}else {
    alert("El numero es impar")
}

}

function ejercicio8() {

var cadena
cadena = prompt("Introduce una cadena")
cadena.length
var a = cadena.length % 2

if (a == 0){
    alert("La cadena tiene un numero par de caracteres")

}else {
    alert("La cadena tiene un numero impar de caracteres")
}

}

function ejercicio9() {

ejercicio1()
ejercicio2()
ejercicio3()
ejercicio4()
ejercicio5()
ejercicio6()
ejercicio7()
ejercicio8()

}

ejercicio9()
