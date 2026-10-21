/* =====================================================
   curriculum.js  ->  Solo para curriculum.html
   ===================================================== */

const formCV = document.getElementById("form-cv");

formCV.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const puesto = document.getElementById("cv-puesto").value;
  // Convertimos "HTML, CSS" en una lista ["HTML","CSS"] con split
  const habilidades = document.getElementById("cv-habilidades").value
    .split(",")
    .filter(function (h) { return h.trim() !== ""; });

  alert("Currículum guardado.\nPuesto: " + puesto +
        "\nHabilidades: " + habilidades.length);
});
