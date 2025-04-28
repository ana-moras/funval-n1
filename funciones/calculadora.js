function calculadora() {
    alert("bienvenidos a la calculadora")
    let continuar = true
    while (continuar) {
        let op = prompt(`que operacion desea realizar
         1 - sumar
         2 - restar
         3 - multiplicar
         4 - divir
         5 - salir`
        )
        if (op != 5) {
            let a = prompt("ingrese el primer numero")
            let b = prompt("ingrese el segun numero")
        }
        switch (op) {
            case "1":
                alert("el resultado es " + sumar(a, b));

                break;
            case "2":
                alert("el resultado es " + restar(a, b));

                break;
            case "3":
                alert("el resultado es " + multiplicar(a, b));

                break;
            case "4":
                alert("el resultado es " + divir(a, b));

                break;
            case "5":
                alert("vuelva pronto")
                continuar = false;
                break;
            default:
                alert("ingrese una opcion valida")
        }
    }

    function sumar(a, b) {
        sumar = a + b

    }
    function restar(a, b) {
        restar = a - b

    } function multiplicar(a, b) {
        multiplicar = a * b
    } function divir(a, b) {
        dividir = a / b

    }
}



