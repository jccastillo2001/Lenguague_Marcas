/* =====================================================
   comun.js  ->  Código que usan TODAS las páginas
   Se carga en cada HTML antes que el JS propio de la página.
   ===================================================== */

// Marca en azul/negrita el enlace del menú de la página actual.
function marcarEnlaceActivo() {
  // location.pathname es la ruta actual, ej: "/login.html"
  const paginaActual = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(function (enlace) {
    // getAttribute("href") devuelve lo escrito en el HTML, ej: "login.html"
    if (enlace.getAttribute("href") === paginaActual) {
      enlace.classList.add("activo");
    }
  });
}

// Ejecutamos la función en cuanto la página termina de cargar
marcarEnlaceActivo();
