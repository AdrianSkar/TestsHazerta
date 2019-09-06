/*eslint-env jquery*/
window.onload = function() {
  $("#enviar").on("click", validarFormulario);
};

function validarFormulario() {
  $("#formulario").validate({
    rules: {
      dniVal: {
        required: true
      },
      nombreVal: {
        maxlength: 100,
        required: true
      },
      notaVal: {
        digits: true,
        min: 0,
        max: 10
      },
      edadVal: {
        digits: true,
        min: 0,
        max: 100
      },
      emailVal: {
        email: true,
        maxlength: 50
      }
    },
    messages: {
      dniVal: {
        required: "El dni es obligatorio"
      },
      nombreVal: {
        maxlength: "El nombre es muy largo",
        required: "El nombre es obligatorio"
      },
      notaVal: {
        digits: "La nota debe ser en numeros",
        min: "Debe ser mayor que 0",
        max: "Debe ser menor que 10"
      },
      edadVal: {
        digits: "La edad debe tener solo numeros",
        min: "Debe ser mayor que 0",
        max: "Debe ser menor que 100"
      },
      emailVal: {
        email: "Debe ser un email valido",
        maxlength: "Debe tener maximo 50 caracteres"
      }
    }
  });
}
