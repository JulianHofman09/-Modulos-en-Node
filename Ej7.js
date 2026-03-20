export function contador() {
  let numero = 1;

  let intervalo = setInterval(function () {
    console.log(numero);

    if (numero === 10) {
      console.log("Fin del contador");
      clearInterval(intervalo);
    }

    numero++;
  }, 1000);
}