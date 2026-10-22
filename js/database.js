// Base de datos inicial (NO cambiar estos valores)
const DB_INICIAL = {
    menu: [
        { id: 1, nombre: "Tacos al Pastor (Orden)", precio: 110.00 },
        { id: 2, nombre: "Enchiladas Verdes", precio: 135.00 },
        { id: 3, nombre: "Guacamole con Totopos", precio: 85.00 },
        { id: 4, nombre: "Agua de Horchata (Litro)", precio: 45.00 }
    ],
    comandas: []
};

// Inicialización
if (!localStorage.getItem('restauranteDB')) {
    localStorage.setItem('restauranteDB', JSON.stringify(DB_INICIAL));
}


function obtenerMenu() {
  const datos = localStorage.getItem("restauranteDB");

  if (!datos) {
    return [];
  }

  const db = JSON.parse(datos);
  return db.menu || [];
}

function guardarComanda(total) {
  // 1. Leer la base de datos actual de localStorage
  const datos = localStorage.getItem("restauranteDB");
  const db = datos ? JSON.parse(datos) : { menu: [], comandas: [] };

  // Si no existe el arreglo "comandas", lo creamos
  if (!Array.isArray(db.comandas)) {
    db.comandas = [];
  }

  // 2. Crear un objeto con la fecha actual y el total recibido
  const comanda = {
    fecha: new Date().toISOString(),
    total: total
  };

  // 3. Agregarlo al arreglo "comandas"
  db.comandas.push(comanda);

  // 4. Guardar el JSON actualizado (el menú se queda intacto)
  localStorage.setItem("restauranteDB", JSON.stringify(db));
}