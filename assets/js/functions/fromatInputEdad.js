function formatInputEdad(inputHtml) {
  inputHtml.value = !(inputHtml.value.length >= 3)
    ? inputHtml.value.replace(/[^0-9]/g, "")
    : inputHtml.value.slice(0, 3);
  inputHtml.value = inputHtml.value > 150 ? 150 : inputHtml.value;
  let inputResolve = inputHtml.value;

  let actualYear = new Date().getFullYear();
  let yearSegunEdad = Math.abs(inputHtml.value - actualYear);
  yearSegunEdad = yearSegunEdad.toString();

  return [inputResolve, yearSegunEdad];
}

function calcYearNacFormYearsOld(yearOld) {
  let actualYear = new Date().getFullYear();
  let yearSegunEdad = Math.abs(yearOld - actualYear);
  yearSegunEdad = yearSegunEdad.toString();

  return [yearSegunEdad];
}
