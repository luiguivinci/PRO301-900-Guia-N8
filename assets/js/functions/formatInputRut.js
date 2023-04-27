function formatInputRut(inputValidado) {
  inputValidado.addEventListener("input", function () {
    // Obtener el valor actual del input
    let rut = this.value;

    // Eliminar todos los caracteres que no sean números ni la letra "k"
    rut = rut.replace(/[^0-9kK]/g, "");

    // Separar el RUT en su parte numérica y su dígito verificador
    let rutNumerico = rut.slice(0, -1);
    let digitoVerificador = rut.slice(-1);

    // Agregar puntos y guión al número del RUT
    rutNumerico = rutNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Reunir el número del RUT formateado y el dígito verificador
    rut = rutNumerico + "-" + digitoVerificador.toUpperCase();

    // Verificar que se hayan ingresado todos los caracteres del RUT
    if (rut.length === 12) {
      // Desactivar el input para que no se puedan ingresar más caracteres

      this.disabled = false; // Mientras esto estará en false, ya que con el true se entorpece la eficacia de la validación, ya que si se ingresa un rut ya no puede ingresarse una nuevo sin antes refrescar la página.
    }

    // Actualizar el valor del input con el RUT formateado
    this.value = rut;
  });
}
