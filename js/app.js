let totalActual = 0;


function cargarMenu() {
  const contenedor = document.getElementById("menu-container");
  const menu = obtenerMenu();

  // Limpiamos por si se llama más de una vez
  contenedor.innerHTML = "";

  menu.forEach(function (platillo) {
    const item = document.createElement("div");
    item.classList.add("platillo");
    item.dataset.id = platillo.id;
    item.dataset.precio = platillo.precio;

    const nombre = document.createElement("h3");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("p");
    precio.textContent = "$" + Number(platillo.precio).toFixed(2);

    item.appendChild(nombre);
    item.appendChild(precio);
    contenedor.appendChild(item);
    
    item.addEventListener("click", function () {
      sumarAlTotal(Number(platillo.precio));
    });

    contenedor.appendChild(item);
  });
}


function sumarAlTotal(precio) {
  totalActual += precio;
  document.getElementById("total").textContent = totalActual.toFixed(2);
}


// Evento del botón enviar
document.getElementById('btn-ordenar').addEventListener('click', function() {
    /**
     * Finaliza la orden y reinicia el sistema.
     * 
     * - Valida que 'totalActual' sea mayor a 0 (si es 0, no hace nada o muestra alerta).
     * - Llama a guardarComanda(totalActual).
     * - Lanza un alert("Orden enviada").
     * - Reinicia 'totalActual' a 0.
     * - Actualiza el texto del id 'total' en el HTML a "0.00".
     */
    throw new Error("Equipo: implementen la lógica del botón enviar");
});


// Arranca la app inicial
cargarMenu();
