# SEMÁFORO CYBER // Cyber Week // m4ch1n4

Micrositio interactivo de sensibilización sobre clasificación de información C1 / C2 / C3.

## Cómo jugar

Abrir `index.html` mediante GitHub Pages o un servidor HTTP local. La bienvenida y las reglas preceden a la partida. Se puede elegir una ronda de **6 casos** o una ronda completa de **12 casos**. Cada acierto vale 100 puntos. Las respuestas quedan registradas una sola vez; los errores no dan puntos. Los resultados y el progreso se guardan en el almacenamiento local del navegador.

## Estructura

- `index.html`: estructura semántica y terminales de la interfaz.
- `src/styles.css`: skin cyberpunk, CRT scanlines, ruido, glitch CSS, responsive, animaciones con modo accesible.
- `src/game.js`: motor de juego y contador derivado de respuestas.
- `data/cases.js`: 12 casos base y 3 de reserva del archivo de actividades de Cyber Week.
- Recursos visuales: imágenes integradas como `data:` en `src/styles.css` para funcionar sin archivos binarios adicionales.

## Efectos y rendimiento

Las scanlines, ruido, jitter, destello de cambio de caso y glitch tipográfico están programados en CSS puro; no dependen de CDN. Se puede apagar **FX** en cualquier momento. Respeta `prefers-reduced-motion`. `index.html` incluye enlace opcional a PowerGlitch, sin dependencia en la lógica de interacción; las animaciones principales funcionan sin red.

## Publicación en GitHub Pages

Publicar los archivos de esta carpeta en la raíz del repositorio o en la carpeta de publicación elegida y habilitar *Settings → Pages → Deploy from a branch* con `/ (root)`.

Proyecto frontend sin cookies de terceros ni backend; usa `localStorage` únicamente para guardar progreso y preferencia de efectos.
## Ruta en GitHub Pages

Este juego está dentro de `m4ch1n4/m4ch1n4.github.io`, en la ruta `/semaforo-cyber/`. Si GitHub Pages publica desde la rama `master` y la raíz del repositorio, la URL prevista es `https://m4ch1n4.github.io/semaforo-cyber/`.
