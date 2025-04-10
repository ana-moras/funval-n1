let variable = document.querySelector("#dark")
variable.addEventListener("click", cambiocolor)
function cambiocolor() {
    document.documentElement.classList.toggle("dark")
}
