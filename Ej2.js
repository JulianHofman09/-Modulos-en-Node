import fs from "fs";

export function agregarProducto(nombre, precio) {
  let texto = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(texto);

  let nuevo = {
    nombre: nombre,
    precio: precio
  };

  productos.push(nuevo);

  let nuevoTexto = JSON.stringify(productos);
  fs.writeFileSync("productos.json", nuevoTexto);

  console.log("Producto agregado");
}