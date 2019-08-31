/*eslint-env jquery*/
import "./styles.css";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

document.getElementById("app").innerHTML = `
<div style="margin-top: 1rem;">
  Cada botón conduce a un ejercicio.
</div>
`;
//Toggle hide/show using JQuery (commented) and Vanilla JS (in use)
$(".toggle").click(function() {
  // let $myThing = $(this)
  //   .parent()
  //   .find(".toggleContent");
  //  $(this).toggleClass("btn-info btn-success");
  console.log(this);

  let myThing = this.parentElement.querySelector(".toggleContent");
  if (myThing.style.display === "block") {
    myThing.style.display = "none";
    this.classList.toggle("btn-info");
    this.classList.toggle("btn-success");
  } else {
    myThing.style.display = "block";
    this.classList.toggle("btn-info");
    this.classList.toggle("btn-success");
  }
});
// Ejercicio area JQuery
$("#calcularArea").click(function() {
  let resultado = $("#datoUno").val() * $("#datoDos").val();
  $("#areaResultado").append(resultado + " ");
});

$("#resetArea").click(function() {
  $("#areaResultado").html("");
  $("#datoUno").val("");
  $("#datoDos").val("");
});
// Ejercicio area JS

function calculaArea() {
  document.getElementById("areaResultadoJS").innerHTML =
    parseFloat(document.getElementById("datoUnoJS").value) +
    parseFloat(document.getElementById("datoDosJS").value);
}
function resetJS() {
  document.getElementById("areaResultadoJS").innerHTML = "";
  document.getElementById("datoUnoJS").value = "";
  document.getElementById("datoDosJS").value = "";
}
document
  .getElementById("calcularAreaJS")
  .addEventListener("click", calculaArea);
document.getElementById("resetAreaJS").addEventListener("click", resetJS);

//calculadora simple

function resultadoCalc() {
  let uno = parseFloat($("#calcVal").val());
  let dos = parseFloat($("#calcVal2").val());
  switch (this.value) {
    default:
      // do nothing
      break;
    case "+":
      $("#calcResult").html(uno + dos);
      break;
    case "-":
      $("#calcResult").html(uno - dos);
      break;
    case "*":
      $("#calcResult").html(uno * dos);
      break;
    case "/":
      $("#calcResult").html(uno / dos);
      break;
  }
}
function resetCalc() {
  $(".calcClass").val("");
  $("#calcResult").html("");
}
// let resultado, suma, resta, multiplicacion, division, reset;

document.getElementById("resetCalc").addEventListener("click", resetCalc);
document.getElementById("suma").addEventListener("click", resultadoCalc);
document.getElementById("resta").addEventListener("click", resultadoCalc);
document.getElementById("mult").addEventListener("click", resultadoCalc);
document.getElementById("div").addEventListener("click", resultadoCalc);
// Inner elements
document.getElementById("inner2").addEventListener("click", innerFun2);
function innerFun2() {
  // $("#inner1").html(
  //   "Este párrafo se ha modificado utilizando el atributo <code>onclick</code> para llamar a una función externa."
  // );
  document.getElementById("objetivo").innerHTML =
    'En este caso se añade un evenListener al botón <code> document.getElementById("inner2").addEventListener("click", innerFun2);</code>';
}
document.getElementById("inner3").addEventListener("click", innerFun3);
function innerFun3() {
  document.getElementById("objetivo").innerHTML =
    "En este caso se modifican distintas propiedades CSS para cambiar el estilo del contenido y del contenedor.";
  let objetivoJQ = $("#objetivo");
  objetivoJQ.css("background-color", "salmon");
  let objetivo = document.getElementById("objetivo");
  objetivo.style.color = "#eee";
  objetivo.classList.add("claseNueva");
}

//Arrays
let notas = new Array(2);
$("#notas").click(function() {
  for (let i = 0; i < notas.length; i++) {
    notas[i] = prompt("Ingrese nota " + (i + 1));
    notas[i] = parseFloat(notas[i]); //Si se parsea en la línea anterior el mensaje del prompt es NaN en lugar del especificado
    $("#targetArrays").append(
      "<br>La nota en la posición " + i + " del array es: " + notas[i]
    );
  }
  console.log(typeof notas[0]);
});
//Arrays notas
let ventas = new Array(2);
let meses = [
  "Enero",
  "Febrero"
  // "Marzo",
  // "Abril",
  // "Mayo",
  // "Junio",
  // "Julio",
  // "Agosto",
  // "Septiembre",
  // "Octubre",
  // "Noviembre",
  // "Diciembre"
];
$("#ventasInput").click(function() {
  for (let i = 0; i < ventas.length; i++) {
    ventas[i] = prompt("Ingrese las ventas de " + meses[i]);
  }
});
