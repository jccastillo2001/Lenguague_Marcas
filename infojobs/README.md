# MiEmpleo – Web estilo InfoJobs (HTML + CSS + JavaScript)

Proyecto didáctico para principiantes. Sin librerías ni instalación:
abre `index.html` con doble clic y funciona.

## 1. Estructura de carpetas

```
infojobs/
├── index.html          Portada
├── login.html          Iniciar sesión
├── registro.html       Crear cuenta
├── curriculum.html     Formulario del currículum
├── css/
│   ├── base.css          Variables, colores, tarjeta, layout general
│   ├── navegacion.css    Barra superior
│   └── formularios.css   Inputs, botones, barra de seguridad
└── js/
    ├── comun.js          Código compartido (marca el enlace activo)
    ├── login.js          Lógica de login.html
    ├── registro.js       Lógica de registro.html
    └── curriculum.js     Lógica de curriculum.html
```

**Regla de organización:** HTML = estructura, CSS = aspecto, JS = comportamiento.
Cada archivo hace una sola cosa.

## 2. Cómo se conecta todo (integración)

Cada HTML enlaza sus archivos con dos etiquetas:

| Qué | Etiqueta | Dónde va |
|---|---|---|
| CSS | `<link rel="stylesheet" href="css/base.css">` | Dentro de `<head>` |
| JS  | `<script src="js/login.js"></script>` | Al final de `<body>` |

Puntos importantes:

1. **Orden del CSS:** `base.css` va primero porque declara las variables
   (`--azul`, `--fondo`…) que usan los demás.
2. **Orden del JS:** `comun.js` primero (lo necesitan todas las páginas) y
   después el JS propio de esa página.
3. **Por qué el script va al final:** el navegador lee el HTML de arriba
   abajo. Si el script estuviera antes, `document.getElementById(...)` no
   encontraría nada porque el elemento aún no existe.
4. **Cómo se comunican HTML y JS:** mediante los `id`.
   Ejemplo: `<form id="form-login">` en el HTML ↔
   `document.getElementById("form-login")` en `login.js`.
5. **Cómo se comunican CSS y JS:** mediante clases.
   JS añade o quita una clase (`activo`) y el CSS decide cómo se ve.
6. **Navegar entre páginas:** con enlaces `<a href="login.html">` en HTML, o
   con `window.location.href = "curriculum.html"` desde JS.

## 3. Documentación de cada archivo

### HTML
- **index.html** – Portada con un mensaje y un botón (`<a class="boton">`) que lleva a registro.
- **login.html** – Formulario `#form-login` con email, contraseña y "mantener sesión".
- **registro.html** – Formulario `#form-registro` con nombre, apellido, email, contraseña,
  barra de seguridad `#seguridad` y casilla de aceptar condiciones (`required`).
- **curriculum.html** – Formulario `#form-cv` con datos personales (en 2 columnas),
  resumen, experiencia, formación y habilidades.

### CSS
- **base.css** – `:root` (variables de color), `body`, `main`, `.tarjeta` y `.tarjeta.ancha`.
- **navegacion.css** – `nav` con `display:flex`; `.activo` resalta la página actual.
- **formularios.css** – `label`, `input`, `textarea`, `.check`, `button`/`.boton`
  (forma de píldora), `.seguridad` (3 trocitos) y `.columnas` (grid responsive).

### JavaScript (funcionalidades)

| Archivo | Qué hace | Cómo |
|---|---|---|
| `comun.js` | Resalta en el menú la página donde estás | Compara `location.pathname` con el `href` de cada enlace y añade la clase `activo` |
| `login.js` | Da la bienvenida y va al currículum | `addEventListener("submit")` + `preventDefault()` + `alert()` + `window.location.href` |
| `registro.js` | Barra de seguridad + crear cuenta | Evento `input` mide la longitud (4/8/12) y activa 1/2/3 trocitos con `classList.toggle`; al enviar, alerta y redirección |
| `curriculum.js` | Guarda el CV (simulado) | Lee valores con `.value`, convierte habilidades con `split(",")` y muestra un resumen en `alert()` |

Conceptos clave usados:
- `document.getElementById("id")` → localiza un elemento.
- `addEventListener("evento", función)` → "cuando pase X, ejecuta esto".
- `evento.preventDefault()` → evita que el formulario recargue la página.
- `classList.add / remove / toggle` → cambia clases CSS desde JS.
- `.value` → texto que el usuario escribió en un campo.

## 4. Flujo de usuario

```
index.html ──► registro.html ──(crear cuenta)──► curriculum.html
     └──────► login.html    ──(iniciar sesión)──► curriculum.html
```

## 5. Paso a paso para probarlo

1. Abre `index.html`.
2. Pulsa **Crear cuenta**, escribe una contraseña y mira cómo se llena la barra.
3. Envía el formulario: verás una alerta y pasarás al currículum.
4. Rellena el CV y pulsa **Guardar currículum**.
5. Prueba **Iniciar sesión** desde el menú.

## 6. Limitaciones (es una maqueta)
- No hay servidor ni base de datos: nada se guarda de verdad.
- La contraseña no se valida contra nadie.

## 7. Ejercicios para ampliar
1. Cambia `--azul` en `base.css` y observa el efecto en todas las páginas.
2. Crea `ofertas.html` con su `css`/`js` y añádela al menú de cada página.
3. Guarda el CV con `localStorage.setItem` y recupéralo al abrir la página.
4. Valida en `registro.js` que la contraseña tenga al menos 8 caracteres.
