function formatInputNombre(inputHtml, longitudMaxima = 50) {
  inputHtml.value = inputHtml.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");
  inputHtml.value = inputHtml.value.slice(0, longitudMaxima);
}
