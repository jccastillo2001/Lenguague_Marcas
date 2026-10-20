// ============================================
// SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================
const titulo = document.getElementById("titulo");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const botonAnadir = document.getElementById("anadir");
const botonCambiarTitulo = document.getElementById("cambiar-titulo");
const botonTema = document.getElementById("tema");

// ============================================
// FUNCIÓN PRINCIPAL: AÑADIR TAREA (Ejercicio 2)
// ============================================
function anadirTarea() {
  // 1. Leer el texto escrito por el usuario
  const textoTarea = inputTarea.value.trim();

  // 2. Comprobar que no está vacío
  if (textoTarea === "") {
    alert("Escribe una tarea");
    return;
  }

  // 3. Crear un elemento <li>
  const li = document.createElement("li");

  // 4. Introducir el texto de la tarea
  // Usamos un span para poder tachar solo el texto y no los botones
  const spanTexto = document.createElement("span");
  spanTexto.textContent = textoTarea;
  li.appendChild(spanTexto);

  // 5. Crear el botón «Completar»
  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Completar";

  // 6. Crear el botón «Eliminar»
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  // 7. Añadir los botones a la tarea
  li.appendChild(botonCompletar);
  li.appendChild(botonEliminar);

  // 8. Insertar la tarea en la lista
  lista.appendChild(li);

  // 9. Limpiar el campo de texto
  inputTarea.value = "";
  inputTarea.focus(); // Mejora de usabilidad

  // --- Eventos de los botones de esta tarea ---

  // Ejercicio 3: Marcar como completada (toggle)
  botonCompletar.addEventListener("click", function () {
    li.classList.toggle("completada");
  });

  // Ejercicio 5: Eliminar solo esta tarea
  botonEliminar.addEventListener("click", function () {
    li.remove();
  });
}

// ============================================
// EJERCICIO 4: CAMBIAR EL TÍTULO
// ============================================
function cambiarTitulo() {
  titulo.textContent = "Mis tareas pendientes";
}

// ============================================
// EJERCICIO 6: CAMBIAR TEMA (CLARO / OSCURO)
// ============================================
function cambiarTema() {
  document.body.classList.toggle("oscuro");
}

// ============================================
// ASIGNACIÓN DE EVENTOS
// ============================================
botonAnadir.addEventListener("click", anadirTarea);

// Permitir añadir tarea con la tecla Enter
inputTarea.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    anadirTarea();
  }
});

botonCambiarTitulo.addEventListener("click", cambiarTitulo);
botonTema.addEventListener("click", cambiarTema);