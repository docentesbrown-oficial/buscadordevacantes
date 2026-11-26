# Buscador de Vacantes 2027 · Docentes Brown

Versión inicial estática, responsive y mobile-first. No requiere React, Node, base de datos ni servidor propio.

## Archivos

- `index.html`: pantalla, estilos y filtros.
- `vacantes.js`: registros publicados en el buscador.

## Cómo probarlo

La forma más sencilla es publicar ambos archivos en un repositorio de GitHub y activar GitHub Pages:

1. Creá un repositorio nuevo en GitHub.
2. Subí `index.html` y `vacantes.js` a la raíz del repositorio.
3. Entrá en **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/ (root)`, y guardá.
6. GitHub Pages publicará el sitio en la dirección que indique esa pantalla.

También podés probarlo localmente con la extensión **Live Server** de Visual Studio Code. Abrí la carpeta y elegí **Open with Live Server**.

## Cómo cargar los registros reales

Editá `vacantes.js` y reemplazá los ejemplos por los registros reales previamente depurados. Conservá esta estructura:

```js
window.DEMO_MODE = false;

window.VACANTES = [
  {
    id: "registro-001",
    escuelaCodigo: "1234",
    pid: "CODIGO_PID",
    materiaCargo: "Biología",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Provisional",
    prestacion: "Módulos",
    dias: ["Lunes", "Miércoles"],
    horario: "08:00 a 10:00",
    turno: "Mañana",
    curso: "2.º año"
  }
];
```

Campos disponibles: `id`, `escuelaCodigo`, `pid`, `materiaCargo`, `nivel`, `modalidad`, `situacion`, `prestacion`, `dias`, `horario`, `turno` y `curso`.

Para `dias`, usá solamente: `Lunes`, `Martes`, `Miércoles`, `Jueves`, `Viernes`.

## Privacidad: leer antes de publicar

**Un repositorio público hace que sus archivos puedan ser consultados por cualquier persona.** `vacantes.js` es parte pública del sitio. No subas la planilla original ni incluyas nombres, DNI, CUIL, teléfonos, correos, domicilios, datos de postulantes/docentes ni observaciones que permitan identificar personas.

Prepará una copia de difusión con los campos estrictamente autorizados y publicá únicamente esa copia. La interfaz muestra una lista limitada de campos, pero eso no vuelve privado ningún dato que se haya escrito dentro de `vacantes.js`.

Esta versión no envía los datos a un servidor: el navegador carga la base pública y filtra localmente. Por eso, los registros que se incorporen al archivo serán visibles para todas las personas que visiten el sitio.

## Búsqueda por días

La selección de días usa coincidencia AND: si una persona selecciona lunes y miércoles, aparecen solamente los registros que incluyen ambos días. Sin selección de días, no se aplica ese filtro.
