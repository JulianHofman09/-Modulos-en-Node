import fs from "fs";

export function buscarProducto(nombre) {
  let texto = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(texto);

  let encontrado = null;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      encontrado = productos[i];
      break;
    }
  }

  if (encontrado) {
    console.log("Producto encontrado");
    console.log("Nombre:", encontrado.nombre);
    console.log("Precio:", encontrado.precio);
  } else {
    console.log("Producto no encontrado");
  }
}