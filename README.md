# Docentes Brown — página pública de acceso

Este repositorio contiene únicamente una página puente para GitHub Pages. El buscador y la lectura de Google Sheets continúan alojados en Google Apps Script.

## Antes de publicar

1. En Apps Script, reemplazá la función `doGet()` por la versión incluida en `Code.gs-actualizado-para-iframe.txt` (descargable por separado en esta entrega).
2. Guardá y actualizá la implementación existente con **Nueva versión**.
3. En GitHub, reemplazá el `index.html` de la raíz del repositorio por el de esta carpeta.
4. No subas la planilla original, datos reales, `Code.gs`, ni archivos de datos al repositorio público.
5. Activá GitHub Pages desde `Settings → Pages`, rama `main`, carpeta `/ (root)`.

La dirección compartible será la URL de GitHub Pages (por ejemplo, `https://USUARIO.github.io/REPOSITORIO/`). El navegador mostrará esa dirección; el iframe carga el motor de Apps Script internamente. La URL de Apps Script seguirá siendo visible para quien inspeccione el código fuente o las herramientas de desarrollo, por lo que no debe tratarse como un secreto.
