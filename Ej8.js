export function analizarTexto(texto) {
  let caracteres = texto.length;
  let palabras = texto.split(" ").length;

  let vocales = 0;
  let consonantes = 0;

  let t = texto.toLowerCase();

  for (let i = 0; i < t.length; i++) {
    let letra = t[i];

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales++;
    } else if (letra >= "a" && letra <= "z") {
      consonantes++;
    }
  }

  return {
    caracteres: caracteres,
    palabras: palabras,
    vocales: vocales,
    consonantes: consonantes
  };
}