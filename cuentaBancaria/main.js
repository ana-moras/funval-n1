alert("bienvenidos")
let continuar = true
while (continuar) {
    let accion = prompt(`Elija el numero de la opcion q desea realizar:
     1- Ingresar dinero
     2- Retirar dinero
     3- Consultar el saldo disponible.
     4-salir`)
    switch (accion) {
        case "1":
            ingresarDinero()
            break;
        case "2":
            retirarDinero()
            break;
        case "3":
            consultarSaldoDisponible()
            break;
        case "4":
            alert("que tenga lindo dia!")
            continuar = false;
            break;
        default:
            alert("ingrese una opcion valida")
    }
}
function ingresarDinero() {
    prompt("ingrese la cantidad de dinero que desee depositar")

}
function retirarDinero() {
    prompt("ingrese contraseña")
    prompt("ingrese la cantidad de dinero que desee retirar")
}
function consultarSaldoDisponible() {
    prompt("ingrese contraseña")
    alert("su saldo disponible es 0 ")

}



