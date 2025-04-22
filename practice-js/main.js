/* alert("Bienvenido")
while (true) {
    let edad = parseInt(prompt("indique su edad"));
    if (edad >= 18) {
        alert("puedes votar");
        break;
    } else if (edad < 18) {
        alert("eres menor de edad, no puedes votar");
        break;
    } else {
        alert("informacion incorrecta");
    }

} */
/* numero positivo negativo cero */
/* alert("Bienvenido")
let contador = 0
while (true) {
    let numero = parseFloat(prompt("ingrese un numero"))
    if (numero === 0) {
        alert("su numero es 0");
        break;
    } else if (numero < 0) {
        alert("su numero es negativo");
        break;
    } else if (numero > 0) {
        alert("su numero es positivo");
        break;
    } else {
        alert("informacion incorrecta")
        contador++
        if (contador > 3) {
            alert("intentos superados")
            break;

        }
    }
}
 */
/* let day = prompt("seleccione un numero del 1 al 7")
switch (day) {
    case 1:
        alert("elegiste lunes")
        break;
    case 2:
        alert("elegiste martes")
        break;
    case 3:
        alert("elegiste miercoels")
        break;
    case 4:
        alert("elegiste jueves")
        break;
    case 5:
        alert("elegiste viernes")
        break;
    case 6:
        alert("elegiste sabado")
        break;
    case 7:
        alert("elegiste domingo")
        break;

    default:
        alert("info incorrecta")
        break;
} */

let numero = prompt("ingrese un numero")
if (numero % 2 === 0) {
    alert("su numero es par")
} else if (numero % 2 != 0 || numero % 2 === -1) {
    alert("su numero es inpar")
}

/* let notas = prompt("ingrese su nota")
if (notas <= 10) {
    alert("desaprobado")

} else if (notas >= 10 && notas <= 13) {
    alert("regular")

} else if (notas >= 14 && notas <= 17) {
    alert("bueno")

} else if (notas > 18) {
    alert("exelente")

} */
