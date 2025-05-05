/* let nombres = ["pedro", "juan", "cristian"]
let listado = document.querySelector("#lista")
listado.innerHTML = "";

nombres.forEach((item) => {
    listado.innerHTML +=
        ` <li>   ${item}
            <button class="aprobado" >x</button>
        </li>`
});

listado.addEventListener("click", function (evento) {
    console.log(evento.target);
    if (evento.target.classList.contains("aprobado")) {
        let itemListado = evento.target.closest("li");
        itemListado.innerHTML = "estudiante aprobado"
    }
}) */
/* let estudiantes = [
    {
        name: "Cristian",
        cel: 77207634,
        pais: "bolivia",
    },
    {
        name: "Tomas",
        cel: 271236323,
        pais: "Argentina",
    },
    {
        name: "Gino",
        cel: 3220762,
        pais: "Chile",
    },
    {
        name: "Ana",
        cel: 98762235,
        pais: "Argentina",
    },
    {
        name: "Kevin",
        cel: 86243207634,
        pais: "Mexico",
    },
    {
        name: "Milton",

        cel: 89712350,
        pais: "Uruguay",
    },
    {
        name: "Ricardo",
        cel: 123987523,
        pais: "Mexico",
    },
    {
        name: "Rodrigo",
        cel: 77207634,
        pais: "Narnia",
    },
];
let tabla = document.querySelector("#tabla")
tabla.innerHTML = "";

estudiantes.forEach((item) => {
    tabla.innerHTML +=

        ` 
             <tr>
                <td>${item.name}
             </td>
            <td>${item.cel}</td>
            <td>${item.pais}</td>
            <td><button class="eliminacion">eliminar</button></td>
            </tr>
    `;

})
tabla.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("eliminacion")
    ) {
        let borrar = evento.target.closest("tr")
        borrar.innerHTML = "";

    }
}) */

/* let edades = [12, 12, 12, 123, 32, 36, 44, 11,]
edades.forEach((item) => {
    console.log(item * 2)
})

let nuevoArray = edades.map((item) => {
    return item * 2;
});

 */
/* let edades = [12, 12, 12, 123, 32, 36, 44, 11,]
let [primero, segundo, tercero] = edades



let estudiantes = [
    {
        name: "tomas",
        edad: 20,
        pais: "argentina",
    },
];

 */

/* const usuarios = [
    { id: 1, nombre: "Ana", roles: ["admin"] },
    { id: 2, nombre: "Gino", roles: ["user"] },
    { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
];
 */
/* let n = 5
let a = 0
let b = 1
let c = 0

for (let i = 0; i < n; i++) {
    if (i === 1) {
        console.log(a);
    } else {
        if (i === 2) {
            console.log(b)
        } else {
            c = a + b
            a = b
            b = c
            console.log(c)
        }
    }
} */


/* let nombres=["juan", "pedro","elias","carlos","luis"] */
/* let estudiantes = [
    {
        nombre: "Cristian",
        lenguajes: ["HTML”, “CSS”, “JS"]
    },
    {
        nombre: "Milton",
        lenguajes: ["HTML”, “CSS”, “JS”, “python”, “JAVA”, “C++"]
    },
    {
        nombre: "Ana",
        lenguajes: ["C#”, “JAVA”, “PYTHON"],
    },
];


for (let i = 0; i < estudiantes.length; i++) {
    console.log(`èl estudiante ${estudiantes.nombre} 
        sabe los lenguajes de programacion ${estudiantes[i].lenguajes}`)
} */

let profesores = [
    {
        nombre: "kevin",
        estudiantes: ["gino”, “ana”, “crisrian", "ricardo"]
    },
    {
        nombre: "diego",
        estudiantes: ["milton", "kevin", "elias", "luis"]
    },
    {
        nombre: "jorge",
        estudiantes: ["tomas”, “pedro”, “PYTHON"],
    },
];
function prof(est) {
    for (let profesor of profesores)
        if (profesor.estudiantes.includes(est)) {
            return profesor.nombre;
        }

}


const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Marta", edad: 30 },
];

let nombres = personas.map((nombress) => {
    console.log(nombress)
})