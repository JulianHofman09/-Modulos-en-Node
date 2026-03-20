export function validarPassword(password) {

  let tieneNumero = false;
  let tieneMayuscula = false;

  // recorrer la contraseña
  for (let i = 0; i < password.length; i++) {

    let letra = password[i];

    // verificar número
    if (letra >= "0" && letra <= "9") {
      tieneNumero = true;
    }

    // verificar mayúscula
    if (letra >= "A" && letra <= "Z") {
      tieneMayuscula = true;
    }
  }

  // verificar condiciones
  if (password.length >= 8 && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
  } else {
    console.log("Password inválida");
  }
}