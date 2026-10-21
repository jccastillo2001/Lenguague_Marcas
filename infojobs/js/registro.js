/* =====================================================
   registro.js  ->  Solo para registro.html
   ===================================================== */

const formRegistro = document.getElementById("form-registro");
const campoPass = document.getElementById("reg-pass");
const trozos = document.querySelectorAll("#seguridad span");

// --- Barra de seguridad: se recalcula cada vez que se escribe ---
campoPass.addEventListener("input", function () {
  const longitud = campoPass.value.length;

  let nivel = 0;                 // cuántos trocitos se iluminan
  if (longitud >= 4)  nivel = 1;
  if (longitud >= 8)  nivel = 2;
  if (longitud >= 12) nivel = 3;

  // i es la posición del trocito (0,1,2). Se activa si i < nivel
  trozos.forEach(function (trozo, i) {
    trozo.classList.toggle("activo", i < nivel);
  });
});

// --- Envío del formulario ---
formRegistro.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById("reg-nombre").value;
  alert("¡Cuenta creada! Hola, " + nombre);
  window.location.href = "curriculum.html";
});
