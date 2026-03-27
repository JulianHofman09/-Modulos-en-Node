export function validarPassword(password) {

  let tieneNumero = false;
  let tieneMayuscula = false;

  
  for (let i = 0; i < password.length; i++) {

    let letra = password[i];

    
    if (letra >= "0" && letra <= "9") {
      tieneNumero = true;
    }

    
    if (letra >= "A" && letra <= "Z") {
      tieneMayuscula = true;
    }
  }

  
  if (password.length >= 8 && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
  } else {
    console.log("Password inválida");
  }
}