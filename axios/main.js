/* axios
    .get(" https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => console.log(respuesta.data))
    .catch((error) => console.log(error)); */

/* async function traerDatosUsuarios() {
    const datos = await axios.get(" https://jsonplaceholder.typicode.com/users")
    const informacion = datos.data;
    console.log(informacion)
}
traerDatosUsuarios(); */


let tabla = document.querySelector("#tabla-cuerpo")
async function traerDatosUsuarios() {
    const { data } = await axios.get(" https://jsonplaceholder.typicode.com/users")
    data.forEach(element => {
        let tr = document.createElement("tr")
        tr.classList.add("bg-white",
            "dark:bg-gray-800",
            "dark:border-gray-700",
            "border-gray-200")
        let th = document.createElement("th")
        tr.classList.add(
            "px-6",
            "py-4",
            "font-medium",
            "text-gray-900",
            "whitespace-nowrap",
            "dark:text-white")
        th.scope = "row"
        th.TextContent = `${element.name}`
        let td = document.createElement("td")
        td.TextContent = `${element.phone}`
        td.classList.add("px-6", " py-3")
        let td1 = document.createElement("td")
        th1.TextContent = `${element.website}`
        th1.classList.add("px-6 ", "py-3")
        let td2 = document.createElement("td")
        th2.TextContent = `${element.company.name}`
        th2.classList.add("px-6", " py-3")
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tabla.appendChild(tr);

    });
}