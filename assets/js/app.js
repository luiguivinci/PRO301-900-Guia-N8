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

//
// Label que controla excepciones
const labelCampoRequerido = document.getElementById("labelCampoRequerido");
const labelRut = document.getElementById("labelRut");

document.addEventListener("DOMContentLoaded", () => {
  //
  // Lógica de control de los inputs
  txtFormRut.addEventListener("input", () => {
    formatInputRut(txtFormRut);
    if (
      txtFormRut.value.length === 12 &&
      validatorRut(txtFormRut.value) === false
    ) {
      labelRut.classList.remove("d-none");
      txtFormRut.removeAttribute("disabled"); // QUEDÉ AQUI INTENTADO DESHABILITAR EL DISABLE CUANDO NO ES VALIDO EL RUT
      console.log(validatorRut(txtFormRut.value));
    } else {
      labelRut.classList.add("d-none");
    }
  });

  txtFormNombre.addEventListener("click", () => {});

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

      labelCampoRequerido.classList.add("d-none");

      console.log("ENVIADO");
    } else {
      Swal.fire({
        title: "Todos los campos son requeridos",
        text: "",
        icon: "warning",
        confirmButtonText: "ACEPTAR",
      });

      labelCampoRequerido.classList.remove("d-none");
      console.log("NO ENVIADO");
    }
  });
});
