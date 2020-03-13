exports.dniValidator = pDni => {
  const dni = pDni;
  const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

  if (expresion_regular_dni.test(dni) === true) {
    let numero = dni.substring(0, dni.length - 1);
    const letr = dni.charAt(dni.length - 1);
    numero = numero % 23;
    let letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero, numero + 1);
    if (letra !== letr.toUpperCase()) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
