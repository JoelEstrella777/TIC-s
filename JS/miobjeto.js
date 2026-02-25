const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 12000,
  },

  {
    id: 2,
    nombre: "Mouse",
    precio: 300,
  },

  {
    id: 3,
    nombre: "Teclado",
    precio: 800,
  },
];

let miobj = {
  id: 1,
  nombre: "Laptop",
  precio: 12000,
};

console.log("Voy a recorrer un array");
const long_array = productos.length;

setTimeout(() => {
console.log(`El tamaño de mi array es ${long_array}`);
console.table(productos, ["nombre"]);

productos.forEach((valor, index) => {
  console.log(index, valor.nombre)
  console.log(valor.precio)
  let mensaje_estado = document.querySelector('#mensaje_estado');
console.log(mensaje_estado.textContent);
mensaje_estado.textContent = `Recorrí ${long_array} elementos`
}
)
}
);

