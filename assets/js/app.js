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
// Declaración de variables que contienen el booleano de rut válido
let rutValido;

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
    rutValido = validatorRut(txtFormRut.value);
    if (txtFormRut.value.length === 12 && rutValido === false) {
      labelRut.classList.remove("d-none");
      txtFormRut.removeAttribute("disabled");

      // QUEDÉ AQUI INTENTADO DESHABILITAR EL DISABLE CUANDO NO ES VALIDO EL RUT
      console.log(rutValido);
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
      const validated_txtFormRut =
        txtFormRut.value !== "" && rutValido === true ? true : false;

      // Validación del nombre
      const validated_txtFormNombre = txtFormNombre.value !== "" ? true : false;

      // Validación de edad
      const validated_intFormEdad = intFormEdad.value !== "" ? true : false;

      // Validación de fecha de nacimiento
      const validated_txtFormFechaNacimiento =
        txtFormFechaNacimiento.value !== ""
          ? txtFormFechaNacimiento.value
          : false;

      // Validación de email
      validated_txtFormEmail = txtFormEmail.value !== "" ? true : false;

      labelCampoRequerido.classList.add("d-none");

      Swal.fire({
        title: "Formulario enviado!",
        text: "",
        icon: "success",
        confirmButtonText: "AWCEPTAR",
      });
      txtFormRut.value = "-";
      txtFormNombre.value = "";
      intFormEdad.value = "";
      txtFormFechaNacimiento.value = "";
      txtFormEmail.value = "";
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
