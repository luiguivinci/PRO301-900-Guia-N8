function validatorRut(rut) {
  // Eliminar puntos y guión del RUT y convertir el dígito verificador a mayúscula
  rut = rut.replace(/\./g, "").replace("-", "").toUpperCase();

  // Separar el RUT en su parte numérica y su dígito verificador
  let rutNumerico = rut.slice(0, -1);
  let digitoVerificador = rut.slice(-1);

  // Verificar que el RUT tenga la longitud correcta
  if (rut.length !== 9 && rut.length !== 10) {
    return false;
  }

  // Verificar que la parte numérica del RUT sea un número válido
  if (isNaN(rutNumerico)) {
    return false;
  }

  // Verificar que el dígito verificador sea válido
  let suma = 0;
  let multiplo = 2;

  for (let i = rutNumerico.length - 1; i >= 0; i--) {
    suma += rutNumerico.charAt(i) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  let resto = suma % 11;
  let dvCalculado = resto === 1 ? "K" : resto === 0 ? "0" : 11 - resto;

  if (dvCalculado != digitoVerificador) {
    return false;
  }

  return true;
}
