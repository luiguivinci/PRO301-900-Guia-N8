function formatInputRut(elemento) {
  // Obtener el valor actual del input
  let rut = elemento.value;

  // Eliminar todos los caracteres que no sean números ni la letra "k"
  rut = rut.replace(/[^0-9kK]/g, "");

  // Separar el RUT en su parte numérica y su dígito verificador
  let rutNumerico = rut.slice(0, -1);
  let digitoVerificador = rut.slice(-1);

  // Agregar puntos y guión al número del RUT
  rutNumerico = rutNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Reunir el número del RUT formateado y el dígito verificador
  rut = rutNumerico + "-" + digitoVerificador.toUpperCase();

  // Verificar que el rut sea válido
  let esValido = validarDigitoVerificador(rut);

  // Actualizar el valor del input con el RUT formateado
  elemento.value = rut;

  // Retornar si el rut es válido o no
  return esValido;
}

function validarDigitoVerificador(rutCompleto) {
  let rutSinDV = rutCompleto.slice(0, -2).replace(/\D/g, "");
  let dv = rutCompleto.slice(-1).toUpperCase();
  let m = 0,
    s = 1;
  for (; rutSinDV; rutSinDV = Math.floor(rutSinDV / 10)) {
    s = (s + (rutSinDV % 10) * (9 - (m++ % 6))) % 11;
  }
  return dv === (s ? s - 1 + "" : "K");
}
