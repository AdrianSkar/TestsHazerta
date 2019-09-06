//let test = document.getElementById("#id");
//test.addEventListener("click", funcion);
window.addEventListener("load", function() {
  console.log("Cargado");
  let showV = document.getElementById("muestraVars");
  showV.addEventListener("click", muestraVars);
});

//let arrUno = [100,87,90,105,10];
//if (posicion arrUno.length)

//1
let numero1 = 1;
let nombre1 = "nombre1";
function muestraVars() {
  document.getElementById("vars").innerHTML =
    "numero1 es: " + numero1 + " y nombre1 es: " + nombre1;
}
