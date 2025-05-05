/* let titulo = document.getElementById("idtitulo")
console.log(titulo)
let boton = document.querySelector("#btn");
let kevin = document.querySelector("#ana")
boton.addEventListener("click", function () {
    kevin.textContent = "hola mi nombre es antonela"
});
let contador = 0;
boton.addEventListener("click", function () {
    contador++;
    ana.textContent = contador;
});
let dia = true
let boton2 = document.querySelector("#fiona")
boton2.addEventListener("click", function () {
    let po = document.querySelector("#princess")
    if (dia) {
        boton2.textContent = "dia"
        po.textContent = "princesa"
    } else {
        boton2.textContent = "noche"
        po.textContent = "ogra fiona"
    }
    dia = !dia
})
 */
/* let parrafo = document.querySelector("#parrafoloco");
parrafo.addEventListener("click", function () {

})

let formulario = document.querySelector("#elias");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let ana = new FormData(formulario)
    console.log(ana.get("nombre"));
}) */

/* let form = document.querySelector("#juego");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let ana = new FormData(form);
    console.log(ana.get("nombre"));
    if (ana.get("nombre") === "") {
        alert("por favor, introduce un nombre de usuario");
    }
    if (ana.get("edad") <= 18) {
        alert("eres menor de edad")
    }
    if (ana.get("pais") != "chile") {
        alert("no sos de chi chi chi le le le ");
    }

}); */

/* let botoncito = document.querySelector("#btn");
botoncito.addEventListener("mouseover", function (evento) {
    botoncito.style.backgroundColor = "gray"
})
botoncito.addEventListener("mouseout", function (evento) {
    botoncito.style.backgroundColor = ""
})
let caja = document.querySelector("#caja");
let cordenadas = document.querySelector("#cord")

caja.addEventListener("mousemove", function (evento) {
    console.log(evento);
    cordenadas.textContent = `cordenadas: ${evento.clientX}, ${evento.clienty}`
}) */
/*    let dia = true
   let boton2 = document.querySelector("#fiona")
   boton2.addEventListener("click", function () {
       let po = document.querySelector("#princess")
       if (dia) {
           boton2.textContent = "dia"
           po.textContent = "princesa"
       } else {
           boton2.textContent = "noche"
           po.textContent = "ogra fiona"
       }
       dia = !dia
   }) */
let megainput = document.querySelector("#inputCadena");

let cuenta = document.querySelector("#supercontador");

megainput.addEventListener("keyup", function (evento) {
    console.log(evento.target.value);
    contador = evento.target.value.lenght;
    cuenta.textContent = `contador: $(contador)`;

})
/*  input de filtrado
ul, li
 

*/