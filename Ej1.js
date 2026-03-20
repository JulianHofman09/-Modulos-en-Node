import fs from "fs";

export function mostrarProductos() {
  let texto = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(texto);

  console.log(productos);
}