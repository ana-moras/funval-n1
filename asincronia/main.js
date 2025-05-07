/* function prepararEnsalada (frutas, aderezo,accion,accion2){

} */


/* console.log("abro los ojos")
setTimeout(() => {
    console.log("me despierto")
}, 5000);
console.log("escucho musica")
console.log("me cepillo los dientes")
console.log("desayuno")
console.log("entro a la clase")
console.log("me duermo en clase") */

/* let pago = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["comerr"])
    }, 5000);
      
})
promesa */
/* 
function obtenerUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve([
                    { nombre: "Juan", edad: 25 },
                    { nombre: "María", edad: 30 },
                    { nombre: "Pedro", edad: 17 },
                ]);
            } else {
                reject("No se pudieron obtener los usuarios");
            }
        }, 1500)
    });
}

obtenerUsuarios()
    .then((item) => {
        let mayores = item.filter((elemento) => elemento.edad >= 18)
        mayores.forEach(element => {
            console.log(element.nombre)
        });
    }
    )
    .catch((error) => {
        console.log(error)
    }) */

/* function obtenerProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve([
                    { nombre: "Laptop", precio: 1200, stock: 5 },
                    { nombre: "Celular", precio: 800, stock: 0 },
                    { nombre: "Monitor", precio: 300, stock: 3 },
                    { nombre: "Teclado", precio: 50, stock: 10 },
                ]);
            } else {
                reject("Error al obtener los productos del servidor.");
            }
        }, 2000);
    });
}

obtenerProductos()
    .then((item) => {
        let mayores = item.filter((elemento) => elemento.stock >= 0)
        mayores.forEach(element => {
            console.log(element.nombre)
            console.log(element.precio)
        });
    }
    )
    .catch((error) => {
        console.log(error)
    })
 */

/* async function hola() {
    return "holaa"
}
hola(() => {
    console.log(msj);
})


async function fechData() {
    try {
        let information = await obtenerProductos
        console.log(information);
    } catch {
        ((error) => {
            console.log(error)
        })

    }
}
fechData(); */

let libros = [
    {
        titulo: "harry potter",
        año: 2002,
        autor: "JK ROWLING",
    },
    {
        titulo: "jesus el cristo",
        año: 1987,
        autor: "Talmage James",
    },
    {
        titulo: "la arrogancia fatal",
        año: 1988,
        autor: "Federick Haiek",
    },
];
function fetchLibros() {
    return new Promise((resolve, reject) => {
        let cumplio = false;
        if (cumplio) {
            setTimeout(() => {
                resolve(libros);
            }, 2000);
        } else {
            reject("los libros no pudieron ser extraidos ");
        }
    });
}
async function obtenAutor() {
    try {
        let information = await fetchLibros()
        let autores2000 = information.filter((elemento) => elemento.año >= 2000)
        autores2000.forEach((element) => {
            console.log(element.autor)
        });

    } catch (error) {
        console.log(error)
    }
}
obtenAutor();