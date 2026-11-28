# Evolución visual de Personal Website

Fecha: 28/11/2026 · Seguimiento: [#77](https://github.com/raullopezpenalva/Personal-Website/issues/77)

## Estado y objetivo

Propuesta y demo local para revisión visual. El usuario ha aprobado explorar el diseño; la integración final queda pendiente de evaluar la demo. No es una release ni una aprobación de despliegue.

Base: `main`, commit `5f79438d7cd3485ae6c0d714234802a42982987d`. Rama: `codex/77-visual-redesign-demo`.

Recomponer la web con sus textos, imágenes, seis casos y navegación actuales. Mejorar jerarquía, lectura y precisión sin reescribir el posicionamiento ni añadir contenido profesional.

## Diagnóstico de partida

- Hero centrado, con claim en mayúsculas y entrada retardada mediante blur: ofrece poca diferenciación entre identidad y explicación.
- Gradiente repetido en cada sección; casi todos los bloques compiten con el mismo peso.
- Tarjetas con radios de 30 px, padding anidado y alineación central: reducen superficie de imagen y dificultan comparar texto.
- Projects dedica mucho espacio a su introducción y comprime seis casos en tres columnas.
- Detalle basado en seis tarjetas similares: contexto, reto y resultado parecen elementos independientes en vez de una lectura continua.
- Texto principal gris tenue, botones de 32 px y centrado automático de párrafos en móvil.
- Columnas del 60 % y 40 % más gap: la suma puede superar el espacio disponible.

## Referencia: Technical Production App

Se ha revisado su sistema de estilos actual en `apps/frontend/src/index.css` y los patrones de layout. Es una referencia de método visual: tokens semánticos, niveles de superficie, separación por bordes, tipografía sobria, espaciado consistente y foco visible.

La adaptación conserva la paleta de Personal Website. No importa la paleta turquesa exacta de TPA, su sidebar, tablas, formularios densos ni navegación de workspace. No se añaden dependencias compartidas entre repositorios ni se modifica TPA.

## Dirección propuesta

Una web de un profesional técnico con fotografías reales y una composición editorial. La estructura transmite precisión mediante alineaciones, proporciones y consistencia; la fotografía aporta el contexto de trabajo.

### Sistema visual

| Recurso | Decisión para la demo |
| --- | --- |
| Canvas | Negro actual `#08090a` |
| Superficie | Grafito actual `#151617`; superficie elevada `#1d2023` |
| Bordes | Grafito `#313131`; variación más clara para interacción |
| Texto | Títulos `#f7f8f8`, cuerpo `#c4c9cf`, secundario `#989fa8` |
| Acento | Cian existente `#02b8cc`; foco azul existente `#4ea6fb` |
| Tipografía | Inter con fallback de sistema, sin nuevas cargas de fuentes |
| Ancho | Máximo 1200 px, incluyendo gutters adaptativos de 20–48 px |
| Lectura | Párrafos largos limitados aproximadamente a 65–70 caracteres |
| Ritmo | Escala existente de 4/8/12/16/24/32/48/64/96 px; separación de secciones de 56–96 px |
| Radios | 8 px en controles, 12 px en fotografías y tarjetas |
| Controles | Altura mínima 44 px; foco visible de 2 px con offset |
| Movimiento | Transiciones cortas de color/borde, sin entrada que oculte contenido, zoom ni desplazamiento de tarjetas |

Los grises se ajustan para mejorar lectura dentro de la misma familia cromática. El cian se reserva para categorías, indicadores activos y detalles; el CTA principal conserva el contraste claro de la web actual. Se eliminan gradientes repetidos y sombras decorativas.

### Header y footer

Header horizontal, logo existente, enlaces con indicador de página activa, selector ES/EN y Contacto. En pantallas menores de 900 px aparece el menú móvil; panel vertical dentro del viewport, cierre al navegar y con Escape, foco visible. El enlace Inicio solo está activo en Home.

Footer con columnas alineadas y una base de copyright discreta. Se conservan enlaces y contenidos; no se incorpora información nueva.

### Home

1. **Hero:** dos columnas aproximadamente 55/45. Kicker actual, nombre grande, claim actual en caja normal y ancho de lectura limitado, dos CTA actuales. Fotografía existente de Sound Engineering como contrapunto; no se añade otro bloque de contenido. En móvil, texto seguido de imagen.
2. **Servicios:** encabezado con título y descripción; retícula 2 × 2. Imágenes sin marco interior excesivo, textos alineados a la izquierda y puntos como pequeñas etiquetas neutrales. Todas las tarjetas conservan su enlace a Services.
3. **Perfil híbrido:** texto a la izquierda y fotografía existente a la derecha, con gap real entre columnas. Se conservan tres párrafos, bullets y botones. En móvil se apila siguiendo el orden de lectura.
4. **Destacados:** tres columnas amplias en escritorio, una en tablet/móvil. Categoría cian, título, descripción y bloque final de valor separado por una línea. Se conservan como artículos informativos; no se inventan páginas para los destacados que carecen de caso propio.
5. **Contacto:** panel de fondo grafito, título alineado y lectura limitada. Kicker y botón actuales, sin centrado de todos los elementos.

Se mantiene el orden de secciones; esta entrega evalúa composición y estilo con el contenido existente.

### Projects

Introducción alineada a la izquierda, con título de página, subtítulo y descripción actuales. Reducir el espacio vacío anterior y posterior.

Seis casos en dos columnas desde 720 px y una por debajo. Imagen 16:10, categoría, título, resumen, etiquetas y acceso al caso. Todas las tarjetas tienen altura coherente dentro de su fila; la fotografía no se deforma. No se añaden filtros ni casos nuevos.

### Detalle de caso

Enlace de retorno, categoría, título, resumen y etiquetas junto a la imagen principal. El cuerpo pasa a una secuencia de filas con encabezado a la izquierda y texto a la derecha, separadas por líneas. En móvil, encabezado encima del texto. La información y su orden se conservan.

Herramientas y galería utilizan el mismo espaciado y radios. El CTA final comparte tratamiento con Home. Galerías de tres/dos/una columnas según espacio disponible.

### About, Services y Contact

- About: retrato existente en un marco rectangular suave, título y biografía alineados; secciones largas con lectura limitada; formación y experiencia en columnas adaptativas.
- Services: encabezado de página alineado, mismas tarjetas de Home y bloques alternos de texto/foto con columnas que respetan el gap.
- Contact: introducción y formulario en dos columnas, una en móvil. Panel de formulario diferenciado, controles cómodos y foco visible. No se modifica validación, envío, API ni mensajes.
- Blog y 404: heredan tipografía, espaciado y controles; no se desarrolla el blog ni se cambia el comportamiento de error.

## Responsive y accesibilidad

| Viewport | Composición |
| --- | --- |
| 1440 px | Contenedor de 1200 px, hero dividido, Projects a dos columnas, destacados a tres |
| 768 px | Menú móvil, hero y perfiles apilados, Projects y servicios a dos columnas cuando caben |
| 390 px | Una columna, gutters de 20 px, botones de al menos 44 px y párrafos alineados a la izquierda |
| 320 px / zoom | Reflujo sin scroll horizontal, panel de navegación con alto limitado y scroll propio |

Mantener un h1 por página, jerarquía semántica, orden DOM de lectura, alternativas de imagen y navegación por teclado. Ningún contenido depende del hover. Las transiciones se desactivan con `prefers-reduced-motion`. El foco no se elimina de inputs ni enlaces.

## Implementación y límites

- Utilizar componentes, CSS y CSS Modules existentes; los tokens siguen siendo propiedad de `src/index.css`.
- Modificar el CSS propietario de cada componente, evitando una hoja global de overrides que se convierta en una segunda implementación.
- Cambios de estructura limitados al hero y clases semánticas de página; conservar i18n, datos, slugs, routing y contrato SEO.
- Sin UI framework, librería de animación, imágenes nuevas ni datos de TPA.
- Fuera de alcance: nuevos casos, copy, #28, #26, #65, backend y despliegue.

## Evaluación de la demo

Revisar Home, Projects y al menos un detalle primero. Confirmar que la fotografía, proporciones, tamaño del nombre, radios y acento transmiten la identidad deseada. Después revisar consistencia en Services, About y Contact, ambos idiomas y móvil.

La demo puede evolucionar a partir del feedback. No cerrar #77 hasta revisar el resultado y acordar si se integra o necesita ajustes.

## Ejecutar localmente

Node.js 22.18+ y npm. Desde la raíz del repositorio:

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

Abrir `http://localhost:5173/es` o `/en`. El backend no es necesario para revisar el diseño. Envío real de contacto requiere el servicio configurado en el proxy de Vite.

## Registro de validación

Validación realizada el 28/11/2026 sobre la demo local:

| Comprobación | Resultado |
| --- | --- |
| `npm run lint` | Correcto |
| `npm run test:run` | 48 tests existentes correctos |
| `npm run build` | Correcto; genera 24 documentos de rutas y 22 entradas de sitemap |
| `git diff --check` | Correcto |
| Reflujo DOM | 56 combinaciones: 14 rutas × 1440/768/390/320 px; sin overflow horizontal y con un h1 por página |
| Idiomas | Home, About, Services, Projects, detalle y Contact en ES/EN; además Blog y 404 en ES |
| Imágenes | Sin imágenes fallidas observadas en las rutas revisadas; covers con `object-fit: cover` |
| Inspección visual | Home y servicios en escritorio; Projects en móvil y tablet; detalle en escritorio; About en tablet |
| Menú móvil | Apertura, cierre con Escape, recuperación de foco y acceso a Contacto en 320 px comprobados |
| Teclado | Tab desde menú a selector de idioma y outline azul de 2 px observados |
| Animación | Hero visible sin animación de entrada; regla de movimiento reducido revisada en CSS |

Se corrigió el overflow del header a 320 px y el espacio de las columnas de texto/foto. Las comprobaciones del build conservan los avisos existentes sobre imports JSON; los tests emiten el aviso conocido de `window.scrollTo` en jsdom sin fallar.

Límites: no se ha enviado el formulario a un backend real, ejecutado un contenedor NGINX ni validado producción. El reflujo a 320 px no sustituye una prueba manual de zoom de navegador. No se ha cambiado la preferencia de movimiento del sistema ni realizado una auditoría completa de accesibilidad. Quedan pendientes la valoración visual del usuario y cualquier ajuste que se acuerde antes de integrar.

La demo se deja accesible en `http://localhost:5173/es` y `/en` mientras permanezca activo el servidor local. Para futuras ediciones, reiniciar Vite si el entorno no detecta cambios de archivos.
