import dayjs from "dayjs";

export function mostrarFechaHora() {
  let ahora = dayjs();

  console.log("Fecha:", ahora.format("DD/MM/YYYY"));
  console.log("Hora:", ahora.format("HH:mm"));
}