export function obtenerPais(nombrePais) {
  fetch("https://restcountries.com/v3.1/name/" + nombrePais)
    .then(res => res.json())
    .then(data => {
      let pais = data[0];

      console.log("País:", pais.name.common);
      console.log("Capital:", pais.capital[0]);
      console.log("Región:", pais.region);
      console.log("Población:", pais.population);
    });
}