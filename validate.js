window.onload = function() {
  $("#enviar").on("click", validarFormulario);
};

function validarFormulario() {
  $("#formulario").validate({
    rules: {
      dni: {
        required: true
      },
      nombre: {
        maxlength: 100
      },
      nota: {
        digits: true,
        min: 0,
        max: 10
      },
      edad: {
        digits: true
      },
      email: {
        email: true
      }
    },
    messages: {
      dni: {
        required: "El dni es obligatorio"
      },
      nombre: {
        maxlength: "El nombre es muy largo"
      }
    }
  });
}
