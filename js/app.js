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
document.getElementById("btn-ordenar").addEventListener("click", function () {
  // 1. Validar que el total sea mayor a 0
  if (totalActual <= 0) {
    return; // no pasa nada
  }

  // 2. Guardar la comanda
  guardarComanda(totalActual);

  // 3. Avisar al usuario
  alert("Orden enviada");

  // 4. Reiniciar el total y actualizar la pantalla
  totalActual = 0;
  document.getElementById("total").textContent = totalActual.toFixed(2);
});

// Arranca la app inicial
cargarMenu();

