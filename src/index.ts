let btn = document.getElementById("botoncito");
let numero = document.getElementById("numerote");
let valorUs = document.getElementById("valorIngresado");

btn.addEventListener("click", () => {
  numero.innerHTML = "El num ingresado es: " + Number(valorUs.value);
});
