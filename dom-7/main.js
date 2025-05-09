
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    kilometraje: 15000,
    combustible: "Híbrido",
    transmisión: "Automática",
    precio: 25000,
    dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
    especificaciones: {
        motor: {
            tipo: "4 cilindros",
            potencia: "140 HP",
            torque: "190 Nm",
        },
        seguridad: {
            airbags: 8,
            frenosABS: true,
            controlEstabilidad: true,
        },
        dimensiones: {
            largo: "4.63 m",
            ancho: "1.78 m",
            altura: "1.45 m",
        },
    },
    opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
    historialMantenimiento: [
        {
            fecha: "10/03/2023",
            servicio: "Cambio de aceite",
            costo: 120,
        },
        {
            fecha: "15/07/2023",
            servicio: "Rotación de llantas",
            costo: 50,
        },
    ],
    // Método para calcular depreciación
    calcularDepreciacion: function (añoActual) {
        return this.precio * 0.9 ** (añoActual - this.año);
    },
};

auto.historialMantenimiento.forEach(m => {
    console.log(`Fecha: ${m.fecha}, Servicio: ${m.servicio}, Costo: $${m.costo}`);
});

const infoAuto = document.getElementById("info-auto");
const claves = ["marca", "modelo", "año", "color", "kilometraje", "combustible", "transmisión", "precio"];

claves.forEach(clave => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded-xl p-4";
    card.innerHTML = `<h4 class="font-semibold capitalize">${clave}:</h4><p>${auto[clave]}</p>`;
    infoAuto.appendChild(card);
});

// 👉 Mostrar historial de mantenimiento
const mantenimientos = document.getElementById("mantenimientos");

auto.historialMantenimiento.forEach(m => {
    const card = document.createElement("div");
    card.className = "bg-gray-100 rounded-xl p-4 shadow";
    card.innerHTML = `
    <p><strong>Fecha:</strong> ${m.fecha}</p>
    <p><strong>Servicio:</strong> ${m.servicio}</p>
    <p><strong>Costo:</strong> $${m.costo}</p>
  `;
    mantenimientos.appendChild(card);
});

