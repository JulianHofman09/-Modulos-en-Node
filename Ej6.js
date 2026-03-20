import fs from "fs";

export function generarCSV() {
  let texto = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(texto);

  let csv = "nombre,precio\n";

  for (let i = 0; i < productos.length; i++) {
    csv += productos[i].nombre + "," + productos[i].precio + "\n";
  }

  fs.writeFileSync("productos.csv", csv);

  console.log("CSV creado");
}