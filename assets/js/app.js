//
// Declaración de variables que captuarán valores de los inputs
const txtFormRut = document.getElementById("txtFormRut");
const txtFormNombre = document.getElementById("txtFormNombre");
const intFormEdad = document.getElementById("intFormEdad");
const txtFormFechaNacimiento = document.getElementById(
  "txtFormFechaNacimiento"
);
const txtFormEmail = document.getElementById("txtFormEmail");

//
// Declaración de variables que capturarán los botones
const btnFormEnviar = document.getElementById("btnFormEnviar");

document.addEventListener("DOMContentLoaded", () => {
  //
  // Lógica del botón enviar
  btnFormEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      txtFormRut.value !== "" &&
      txtFormNombre.value !== "" &&
      intFormEdad.value !== "" &&
      txtFormFechaNacimiento.value !== "" &&
      txtFormEmail.value !== ""
    ) {
      // Validación del Rut
      validated_txtFormRut = txtFormRut.value !== "" ? true : false;

      // Validación del nombre
      validated_txtFormNombre = txtFormNombre.value !== "" ? true : false;

      // Validación de edad
      validated_intFormEdad = intFormEdad.value !== "" ? true : false;

      // Validación de fecha de nacimiento
      validated_txtFormFechaNacimiento =
        txtFormFechaNacimiento.value !== ""
          ? txtFormFechaNacimiento.value
          : false;

      // Validación de email
      validated_txtFormEmail = txtFormEmail.value !== "" ? true : false;

      console.log("ENVIADO");
    } else {
      console.log("NO ENVIADO");
    }
  });
});
