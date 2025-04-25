/* let personas = {
    nombre: "diego",
    edad: 27,
    estudiante: "true",
    cursos: [{nCursos:"math",
        notas:[12,23,34], 
        nCursos:"english",
        notas:[12,23,34], 
        nCursos:"office",
        notas:[12,23,34]}],
}
for (let i = 0; i < personas.cursos[j].length; i++) {
   console.log(personas.cursos[i])
}
 */
/* let palabras = ["hola", "bye", "marco", "polo", "escuela"]

let mayus = palabras.map((palabra) => palabra.toUpperCase())
 */

/* let objs = [
    { nombre: "daniel", edad: 23 },
    { nombre: "migle", edad: 28 },
    { nombre: "gustavo", edad: 25 },
    { nombre: "domigo", edad: 20 },
]
let edades = objs.map((elemento) => elemento.edad)
console.log(edades) */

let objs = [
    { nombre: "daniel", puntos: 74 },
    { nombre: "migle", puntos: 22 },
    { nombre: "gustavo", puntos: 23 },
    { nombre: "domigo", puntos: 80 },
];

let masPuntos = objs.map((obj) => {
    return {
        nombre: objs.nombre,
        puntos: objs.puntos > 50 ? objs.puntos + 10 : objs.puntos,
    }
}
)
console.log(masPuntos)