function formatInputEmail(inputHtml) {
  let inputValue = inputHtml.value;
  inputValue = inputValue.replace(/[^a-zA-Z0-9@._-]/g, "");
  inputHtml.value = inputValue;

  // Validar si el email tiene una arroba
  if (!/@/.test(inputValue)) {
    Swal.fire("El correo electrónico debe contener una arroba (@)");
    return false;
  }

  // Validar si el email tiene una extensión de dominio correcta (ejemplo: .com, .org, .edu, etc.)
  if (!/\.[a-zA-Z]{2,}$/.test(inputValue)) {
    Swal.fire(
      "El correo electrónico debe tener una extensión de dominio válida (ejemplo: .com, .org, .edu, etc.)"
    );
    return false;
  } else {
    return inputValue;
  }
}
