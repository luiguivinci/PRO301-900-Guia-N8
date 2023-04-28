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
// Declaración de variables auxiliares
let yearNacimiento;
let dataFormulario = new Array();

//
// Declaración de variables ya validadas en el formulario
// Validación del Rut
let validated_txtFormRut;

// Validación del nombre
let validated_txtFormNombre;

// Validación de edad
let validated_intFormEdad;

// Validación de fecha de nacimiento
let validated_txtFormFechaNacimiento;

// Validación de email
let validated_txtFormEmail;

//
// Declaración de variables que capturarán los botones
let btnFormEnviar = document.getElementById("btnFormEnviar");

//
// Label que controla excepciones
let labelCampoRequerido = document.getElementById("labelCampoRequerido");
let labelRut = document.getElementById("labelRut");

document.addEventListener("DOMContentLoaded", () => {
  //
  // Lógica de control de los inputs

  // validador rut
  txtFormRut.addEventListener("input", () => {
    formatInputRut(txtFormRut);
    if (!formatInputRut(txtFormRut)) {
      labelRut.classList.remove("d-none");
      txtFormRut.removeAttribute("disabled");
    } else {
      labelRut.classList.add("d-none");
      validated_txtFormRut = txtFormRut.value;
    }
  });

  // validador nombre
  txtFormNombre.addEventListener("input", () => {
    validated_txtFormNombre = formatInputNombre(txtFormNombre);
  });

  // validador edad
  intFormEdad.addEventListener("input", () => {
    yearNacimiento = formatInputEdad(intFormEdad)[1];
    txtFormFechaNacimiento.value = `${yearNacimiento}-01-01`;
    validated_intFormEdad = intFormEdad.value;
  });

  // validador fecha de nacimiento
  txtFormFechaNacimiento.addEventListener("input", () => {
    let fechaNac = txtFormFechaNacimiento.value.slice(4);
    txtFormFechaNacimiento.value =
      txtFormFechaNacimiento.value === ""
        ? `${yearNacimiento}${"-01-01"}`
        : `${yearNacimiento}${fechaNac}`;
    validated_txtFormFechaNacimiento = txtFormFechaNacimiento.value;
  });

  // validador email
  txtFormEmail.addEventListener("change", () => {
    validated_txtFormEmail = formatInputEmail(txtFormEmail);
    txtFormEmail.value =
      validated_txtFormEmail !== false
        ? validated_txtFormEmail
        : txtFormEmail.value;
  });

  //
  // Lógica para mostrar/ocular el botón enviar
  document.addEventListener("input", () => {
    if (
      txtFormRut.value !== "" &&
      txtFormNombre.value !== "" &&
      intFormEdad.value !== "" &&
      txtFormFechaNacimiento.value !== "" &&
      txtFormEmail.value !== "" &&
      txtFormEmail.value.includes("@") &&
      txtFormEmail.value.includes(".")
    ) {
      btnFormEnviar.classList.remove("d-none");
    } else {
      btnFormEnviar.classList.add("d-none");
    }
  });
  //
  // Lógica del botón enviar
  btnFormEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      txtFormRut.value !== "" &&
      txtFormNombre.value !== "" &&
      intFormEdad.value !== "" &&
      txtFormFechaNacimiento.value !== "" &&
      txtFormEmail.value !== "" &&
      txtFormEmail.value.includes("@") &&
      txtFormEmail.value.includes(".")
    ) {
      labelCampoRequerido.classList.add("d-none");

      // Mostrando en consola los datos enviados por el formulario
      let persona = {
        rut: validated_txtFormRut,
        nombre: validated_txtFormNombre,
        edad: validated_intFormEdad,
        fechaNacimiento: validated_txtFormFechaNacimiento,
        email: validated_txtFormEmail,
      };
      dataFormulario.push(persona);
      console.log(dataFormulario);
      persona = {};
      dataFormulario = new Array();

      Swal.fire({
        title: "Formulario enviado!",
        text: "",
        icon: "success",
        confirmButtonText: "ACEPTAR",
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
