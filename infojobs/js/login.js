/* =====================================================
   login.js  ->  Solo para login.html
   ===================================================== */

// 1. Buscamos el formulario por su id
const formLogin = document.getElementById("form-login");

// 2. "Escuchamos" el evento submit (cuando se pulsa "Iniciar sesión")
formLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();  // evita que la página se recargue

  const email = document.getElementById("login-email").value;
  alert("Bienvenido/a, " + email);

  window.location.href = "curriculum.html";  // vamos a otra página
});
