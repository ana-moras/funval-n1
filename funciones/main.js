/* let años;
function aumentarNAños(n) {
    edad = edad + n
}
console.log(edad)
aumentarNAños(3);
console.log(edad)
aumentarNAños(5);
console.log(edad)
 */
/* function adtition(num1, num2){
    return num1+num2
}
console.log(3,2)


function convert(min) {
    return min *60
    
}
console.log(adtion(2)); */

/* function triarea(base, altura) {
    return base * altura / 2
}
console.log(triarea(2, 3))

function lessThan100(num1, num2) {
    let result = num1 + num2
    if (result >= 100) {
        return false
    } else {
        return true
    }
}
console.log(lessThan100(22, 15))
console.log(lessThan100(60, 50))

 */

/* const points = function (num1, num2) {
    return (num1 * 2) +
        (num2 * 3)
}
console.log(points(7, 5))
 */

/* const animals = function (ch, cow, pig) {
    return (ch * 2) +
        (cow * 4) +
        (pig * 4)

}
console.log(animals(2, 3, 5)) */



let figura = prompt(`que figura desea realizar
    1 - cuadrado
    2 - circulo
    3 - rectangulo
    4 - triangulo
    5-salir`)
switch (figura) {
    case 1:
        cuadrado()

        break;
    case 2:
        circulo()


        break;
    case 3:
        rectangulo()


        break;
    case 4:
        triangulo()

        break;
    default:
        break;
        function cuadrado() {
            let lado = prompt("ingrese el lado:")
            alert = (lado * 4)
        }
        function circulo() {

            let radio = prompt("ingrese el radio")
            alert = (radio * 13, 1415)
        }
        function rectangulo() {
            let lado = prompt("ingrese el lado:")
            alert = (lado * 4)
        }
        function triangulo() {
            let lado = prompt("ingrese el lado:")
            alert = (lado * 4)
        }
}

