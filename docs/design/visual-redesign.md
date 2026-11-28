# Evolución visual de Personal Website

Fecha: 28/11/2026 · Seguimiento: [#77](https://github.com/raullopezpenalva/Personal-Website/issues/77)

## Estado y objetivo

Diseño aprobado por Raúl tras la revisión de la demo local. La entrega de #77 tiene como destino la rama de integración `dev`. La release y la promoción mediante homelab se deciden por separado.

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

## Diseño aprobado

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

Header horizontal con el logo a la izquierda, los enlaces de navegación centrados y el selector ES/EN y Contacto a la derecha. Entre 900 y 1023 px los enlaces reducen su padding horizontal para mantener la separación de los controles laterales. Por debajo de 900 px, el panel móvil permite navegar, cerrar con Escape y recuperar el foco visible. El enlace Inicio solo está activo en Home.

Footer con columnas alineadas y una base de copyright discreta. Se conservan enlaces y contenidos; no se incorpora información nueva.

### Home

1. **Hero:** fotografía existente de Sound Engineering en blanco y negro a todo el ancho, con un degradado oscuro detrás del contenido. Kicker, nombre, claim y los dos CTA centrados. El nombre ajusta su tamaño para mantenerse en una línea en los anchos revisados.
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

- About: título y biografía a la izquierda y retrato a la derecha a partir de 720 px. Las secciones siguientes comparten un bloque centrado que, a partir de 900 px, coloca los títulos a la izquierda y el texto a la derecha. En móvil se apilan la biografía, el retrato y las secciones. Formación y experiencia se muestran en columnas desde 720 px.
- Services: encabezado de página alineado, mismas tarjetas de Home y bloques alternos de texto/foto con columnas que respetan el gap.
- Contact: introducción y formulario en dos columnas, una en móvil. Panel de formulario diferenciado, controles cómodos y foco visible. No se modifica validación, envío, API ni mensajes.
- Blog y 404: heredan tipografía, espaciado y controles; no se desarrolla el blog ni se cambia el comportamiento de error.

## Responsive y accesibilidad

| Viewport | Composición |
| --- | --- |
| 1440 px | Contenedor de hasta 1200 px, hero fotográfico a todo el ancho, Projects a dos columnas y destacados a tres |
| 768 px | Menú móvil, About con bio y retrato en paralelo, Projects y servicios a dos columnas cuando caben |
| 390 px | Una columna, gutters de 20 px, botones de al menos 44 px y hero centrado |
| 320 px | Reflujo sin scroll horizontal, panel de navegación con alto limitado y scroll propio |

Mantener un h1 por página, jerarquía semántica, orden DOM de lectura, alternativas de imagen y navegación por teclado. Ningún contenido depende del hover. Las transiciones se desactivan con `prefers-reduced-motion`. El foco no se elimina de inputs ni enlaces.

## Implementación y límites

- Utilizar componentes, CSS y CSS Modules existentes; los tokens siguen siendo propiedad de `src/index.css`.
- Modificar el CSS propietario de cada componente, evitando una hoja global de overrides que se convierta en una segunda implementación.
- Cambios de estructura para la presentación en Home, About y la navegación. Se conservan i18n, datos, slugs, routing y el contrato SEO.
- Sin UI framework, librería de animación, imágenes nuevas ni datos de TPA.
- Fuera de alcance: nuevos casos, copy, #28, #26, #65, backend y despliegue.

## Decisiones de la revisión

La revisión empezó en Home, Projects y el detalle de Sound Engineering. El feedback se aplicó al hero de Home, al centrado de la navegación de escritorio y a la composición de About. Raúl dio por concluida la revisión visual y autorizó integrar el resultado en `dev`.

## Ejecutar localmente

Node.js 22.18+ y npm. Desde la raíz del repositorio dentro del [devcontainer](../agents/environment.md):

```bash
npm ci
npm run dev
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

En la revisión final se volvió a comprobar en navegador el hero centrado de Home, la navegación de escritorio y su salto al menú móvil, y el reflujo de About. Las comprobaciones cubrieron ES y EN entre 320 y 1440 px, incluidos los cambios de columnas y del menú. El hero mantuvo el nombre en una sola línea.

Las comprobaciones locales de la demo cubren el frontend. El zoom real del navegador, la activación de la preferencia de movimiento reducido, el envío al backend y la validación pública quedan fuera de esa evidencia. Las comprobaciones de NGINX se registran en la CI del PR.
