# Auditoría SEO — Personal Website

Fecha: 27/11/2026. Issue: [#69](https://github.com/raullopezpenalva/Personal-Website/issues/69).

## Estado y alcance

**Auditoría completada; mejoras pendientes de implementación.** Este documento registra evidencia, criterios y una propuesta de entrega. No modifica metadatos, rutas, build, NGINX ni producción.

Revisión analizada: [`b81f3de1cc139cf921effab70c43289d13f99ff4`](https://github.com/raullopezpenalva/Personal-Website/commit/b81f3de1cc139cf921effab70c43289d13f99ff4), después del merge de #70.

Se revisaron los 51 archivos TypeScript/TSX de `src/` y cinco archivos de entrada/configuración: `index.html`, `package.json`, `vite.config.ts`, `Dockerfile` y `nginx/default.conf`. También se inventarió el árbol completo del repositorio. Se contrastó una muestra de rutas en el navegador público, incluido el cambio ES → EN de un case study.

La web pública fue accesible mediante navegador. Los intentos de acceso HTTP directo desde el entorno de comandos fallaron al resolver DNS; esto es una limitación del entorno y **no evidencia una caída del sitio**. No se capturaron códigos HTTP, headers, cadenas de redirección del servidor ni el HTML público antes de ejecutar JavaScript. Las observaciones de DOM, la lectura de código y las inferencias sobre el servidor se distinguen a continuación.

El bundle observado en las páginas públicas fue `/assets/index-KEgWiFZr.js`. Su nombre no permite demostrar qué commit o digest está desplegado. No se consultaron Search Console, índices de buscadores, métricas de tráfico ni herramientas de preview social; no se afirma un resultado de indexación o ranking.

## Inventario y política propuesta

Origen canónico propuesto: `https://raullopezpenalva.com`. Se conserva la forma de las rutas actuales: minúsculas, slugs compartidos y **sin barra final** después del idioma o slug. La normalización real de host, esquema y barra final debe verificarse antes de desplegarla.

| Contenido | Ruta ES | Ruta EN | Política propuesta |
| --- | --- | --- | --- |
| Home | `/es` | `/en` | Indexable |
| About | `/es/about` | `/en/about` | Indexable |
| Services | `/es/services` | `/en/services` | Indexable |
| Projects | `/es/projects` | `/en/projects` | Indexable |
| Contact | `/es/contact` | `/en/contact` | Indexable |
| Sonido directo | `/es/projects/sound-engineering-live-events` | `/en/projects/sound-engineering-live-events` | Indexable |
| Ominira | `/es/projects/touring-sound-ominira` | `/en/projects/touring-sound-ominira` | Indexable |
| Rodaje y postproducción | `/es/projects/location-sound-audio-postproduction` | `/en/projects/location-sound-audio-postproduction` | Indexable |
| AV corporativo | `/es/projects/corporate-av-hybrid-events` | `/en/projects/corporate-av-hybrid-events` | Indexable |
| Homelab | `/es/projects/homelab-self-hosted-infrastructure` | `/en/projects/homelab-self-hosted-infrastructure` | Indexable |
| Software | `/es/projects/personal-website-software-projects` | `/en/projects/personal-website-software-projects` | Indexable |
| Blog placeholder | `/es/blog` | `/en/blog` | Excluir de sitemap y alternates; noindex hasta #26 |

Hay **22 URLs indexables candidatas**, no 22 URLs cuya indexación se haya comprobado. La raíz `/` es un punto de selección/redirección por preferencia; no es otra página de contenido. Las URLs inválidas no son variantes de Home ni Projects.

Fuentes del inventario: [router](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/router.tsx) y [datos de case studies](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/data/case-studies.ts).

## HTML inicial frente a DOM renderizado

| Señal | HTML de entrada según el código/build | DOM público observado |
| --- | --- | --- |
| Contenido | `#root` vacío; Vite empaqueta una SPA, sin paso de prerender configurado | Contenido principal aparece tras ejecutar React |
| Title | `Raul Lopez Penalva` | El mismo en todas las páginas de la muestra |
| Description | Ausente | Ausente |
| Canonical y hreflang | Ausentes | Ausentes |
| Open Graph y Twitter Cards | Ausentes | Ausentes |
| html lang | `en` fijo en index.html | `es` o `en`, actualizado por LanguageRouteGuard |

La columna de HTML inicial es **evidencia del repositorio e inferencia del build**, no una captura de la respuesta cruda del proxy público.

Referencias: [index.html](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/index.html), [scripts npm](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/package.json), [Vite](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/vite.config.ts) y [LanguageRouteGuard](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/i18n/LanguageRouteGuard.tsx).

El barrido de fuentes no encontró gestión de title, description, canonical, alternates, OG o robots en runtime. Los `<title>` de dos iconos SVG son etiquetas de accesibilidad de esos dibujos, no el título SEO del documento.

## Hallazgos verificables

| ID | Prioridad | Hallazgo y evidencia | Implicación |
| --- | --- | --- | --- |
| SEO-01 | Alta | Title genérico y ausencia de description tanto en index.html como en el head público revisado | No hay una descripción editorial específica por página/idioma |
| SEO-02 | Alta | Canonical y hreflang ausentes en código y DOM | Faltan señales explícitas de URL preferida y correspondencia ES/EN |
| SEO-03 | Alta | OG ausente; tampoco hay imagen de compartición declarada | La web no proporciona una tarjeta social controlada; no se ha medido el fallback de LinkedIn |
| SEO-04 | Alta | Shell estático sin contenido; solo lang cambia en cliente | Los consumidores sin JavaScript no reciben el contenido generado por React; falta validar el head inicial público |
| SEO-05 | Alta | Rutas/slugs desconocidos navegan a Home o Projects | Se oculta que la página no existe y hay riesgo de soft 404; falta medir el estado HTTP real |
| SEO-06 | Media | No hay robots.txt ni sitemap.xml en el árbol; robots muestra un cuerpo “404 Not Found” y sitemap termina en Home | No se observó un sitemap XML utilizable; falta verificar respuesta HTTP y MIME |
| SEO-07 | Media | Solo Home tiene h1 en la muestra; Text usa p por defecto | Los títulos visuales de About, Services, Projects, CaseStudy y Contact no expresan la jerarquía principal |
| SEO-08 | Media | Blog es un placeholder inglés, enlazado desde navegación ES/EN, sin noindex | Debe mantenerse fuera del conjunto publicable hasta disponer de contenido |
| SEO-09 | Baja | El switcher de idioma usa botones y los featured case studies tienen el CTA comentado | El cambio de idioma requiere interacción y esas tarjetas no enlazan al detalle; Projects sí expone enlaces HTML |

La prioridad representa el orden técnico propuesto, no una estimación de impacto de ranking. Un robots.txt ausente no equivale a bloquear el rastreo; su utilidad aquí es declarar explícitamente la política y el sitemap.

### Muestra pública reproducida

| Entrada / acción | Resultado observado en navegador |
| --- | --- |
| `/es` | Home ES, lang=es, un h1, title genérico |
| `/es/about`, `/es/services`, `/es/contact` | Contenido ES y lang=es; ningún h1; mismo head SEO genérico |
| `/es/projects` | Seis enlaces reales a detalles; ningún h1 |
| `/es/projects/homelab-self-hosted-infrastructure` | Detalle ES y lang=es; ningún h1 |
| Pulsar EN en ese detalle | Mismo slug bajo `/en`, contenido EN y lang=en; el head sigue sin metadatos SEO específicos |
| `/es/blog` | “Blog coming soon!”, sin robots noindex |
| `/es/seo-audit-missing-page` | Termina en `/en` con la preferencia EN activa, sin vista NotFound |
| `/es/projects/seo-audit-missing-project` | Termina en `/es/projects`, sin vista NotFound |
| `/robots.txt` | Documento HTML visible con título y cuerpo “404 Not Found”; no se capturó el código HTTP |
| `/sitemap.xml` | Termina en Home `/en`, no en un documento XML |

En las páginas de aplicación revisadas, el head solo contenía charset, viewport, title, favicon, script y stylesheet. No había description, canonical, alternate, OG, Twitter Cards ni robots meta.

El código explica los errores de navegación: [fallback global](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/router.tsx#L33) y [slug desconocido](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/pages/CaseStudyPage.tsx#L20). [NGINX](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/nginx/default.conf) usa `try_files $uri $uri/ /index.html`: es compatible con devolver el shell en rutas desconocidas. Su efecto exacto tras el reverse proxy debe medirse, no darse por validado.

La falta de h1 se explica por [Text](https://github.com/raullopezpenalva/Personal-Website/blob/b81f3de1cc139cf921effab70c43289d13f99ff4/src/components/ui-primitives/Text.tsx), cuyo elemento por defecto es p. Para corregirla se puede utilizar su prop `as` existente.

## Criterios de metadatos e indexación

### Por página e idioma

- Un único title descriptivo: tema/servicio/proyecto + “Raúl López Penalva”. Home debe incluir el posicionamiento profesional. No usar un límite de caracteres como garantía de cómo lo mostrará un buscador.
- Description editorial, breve, veraz y localizada, sin copiar indiscriminadamente el texto de Home. Para case studies, partir del título y summary existentes, revisando el texto.
- Canonical absoluta, autorreferente y en el mismo idioma; nunca canonicalizar ES hacia EN. Excluir query y fragmento. La canonical no sustituye las redirecciones de normalización.
- Alternates es/en absolutos, recíprocos e incluyendo la versión actual. Publicarlos solo cuando existen ambas traducciones. En el MVP se puede omitir x-default; si se añade, apuntar al equivalente EN definido, sin enviar todos los proyectos a Home.
- html lang correcto también en el HTML inicial. Preferencias de navegador/localStorage no deben cambiar el contenido ni la canonical de una URL con idioma explícito.
- Un h1 descriptivo por página como convención de estructura y accesibilidad del proyecto; no se presenta como requisito aislado para posicionar.
- Páginas válidas: 200; inexistentes: 404 y una vista útil. En cliente, noindex como apoyo para errores; nunca un noindex global en el shell de páginas indexables.
- Blog: noindex y sin sitemap/alternates mientras sea placeholder. Revisar esta política al implementar #26.
- Sitemap generado desde las rutas publicables: 22 entradas candidatas hoy, sin errores, raíz de redirección, query/hash ni Blog. No inventar lastmod.

### Compartición social

Definir `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` e `og:image:alt`. Usar la canonical en og:url y una URL HTTPS absoluta para la imagen. La imagen debe ser pública, representativa y con MIME adecuado; reutilizar una foto propia revisada o una tarjeta de marca estática. No añadir una imagen generada automáticamente como requisito.

Servir estos metadatos en el HTML inicial de la URL compartida. Los tags añadidos solo después de ejecutar React no cubren a consumidores sin JavaScript. Las Twitter Cards son opcionales según canales; no se necesita una integración con APIs sociales para publicar metadatos.

Una tarjeta genérica de marca puede ser un fallback explícito para páginas generales, pero no se debe fingir que resuelve los títulos/descripciones propios de cada proyecto. Verificar Home y un detalle en los inspectores disponibles tras el despliegue autorizado.

## Solución propuesta y dependencias

La propuesta conserva React 19, Vite, React Router y el runtime estático de NGINX.

| Alternativa | Dependencias y mantenimiento | Evaluación |
| --- | --- | --- |
| Metadatos solo en cliente con React 19 | Sin nueva librería de runtime; exige controlar duplicados y navegación | Útil como primera capa; no resuelve por sí sola el head inicial |
| HTML con metadatos por ruta generado en build + SPA | Generador pequeño y determinista, registro compartido y pruebas de archivos/NGINX | Recomendación proporcional para las 22 URLs; el body seguiría dependiendo de React |
| Prerender completo de contenido | Adaptar routing/i18n/APIs de navegador, assets y posiblemente añadir herramienta de build | Valorar en una prueba separada si se necesita contenido inicial; no es lo mismo que generar solo el head |
| SSR o migración de framework | Nuevo runtime o arquitectura, más operación y cambios de entrega | No justificado por la evidencia actual; requiere una decisión distinta |

React 19 ya proporciona manejo de title/meta/link en head. Antes de adoptarlo, comprobar la convivencia con los tags estáticos: no mantener dos propietarios que creen títulos o canonicals duplicados. Si hace falta un actualizador pequeño con nodos identificados para la navegación, debe usar el mismo registro de datos y probar limpieza/reemplazo. No añadir Helmet por defecto.

Una librería de head no convierte una SPA en HTML indexable sin JavaScript. Un prerender completo tampoco puede añadirse suponiendo que los componentes actuales sean seguros en servidor: el router usa createBrowserRouter y la preferencia accede a localStorage/navigator.

La generación por ruta debe escapar correctamente texto/atributos, comprobar traducciones/slugs y fallar ante datos inconsistentes. Hay que validar la resolución de archivos y barras finales de NGINX antes de elegir el layout de dist: copiar index.html a carpetas puede introducir redirecciones a barra final.

La propuesta es una dirección para las siguientes tareas, **no una migración aprobada ni un cambio de build ya implementado**. No se añaden dependencias en esta auditoría.

## Reparto de responsabilidades

| Responsabilidad | Personal Website | Homelab |
| --- | --- | --- |
| Datos SEO, traducciones, canonical/alternates y h1 | Implementación y pruebas | Sin duplicar lógica editorial |
| HTML inicial, sitemap, robots y NGINX dentro de la imagen | Generación y validación local/CI | Comprobar que el proxy preserva la respuesta |
| Vista NotFound y contrato 404 de la imagen | Implementación y pruebas | No convertir errores en 200 en el borde |
| DNS, TLS, host público, redirecciones de host/esquema | Definir contrato esperado | Configuración y pruebas de infraestructura |
| Headers de borde, caché y protección de staging | Especificar necesidades y validar integración | Configuración, secretos y operación |
| Selección de imagen/digest y despliegue | Publicar imagen y recibo tras revisión | Selección, validación y despliegue autorizado |
| Search Console y validación social | Registrar resultados con acceso autorizado | Facilitar verificación de dominio si hace falta |

## Backlog de implementación

| Issue | Entrega | Prioridad / dependencia |
| --- | --- | --- |
| [#71](https://github.com/raullopezpenalva/Personal-Website/issues/71) | Datos compartidos, metadatos ES/EN en navegación y h1 semánticos | Alta; base de la siguiente tarea |
| [#72](https://github.com/raullopezpenalva/Personal-Website/issues/72) | HTML inicial con metadatos, sitemap, robots y errores 404 en imagen | Alta; reutiliza los datos de #71 |
| [#73](https://github.com/raullopezpenalva/Personal-Website/issues/73) | Validación HTTP pública, previews y coordinación con homelab | Tras implementación y despliegue autorizado |

#69 se limita a esta auditoría y definición. Las tareas #71–#73 siguen pendientes; #26 deberá aplicar el contrato cuando publique artículos. SEO-09 queda como observación secundaria y no bloquea estas entregas.

## Validación de las siguientes entregas

1. Generar el build y comprobar todas las rutas del inventario: metadatos únicos, canonical válida, alternates recíprocos, imágenes existentes y escape de caracteres.
2. Inspeccionar el HTML sin ejecutar JavaScript. Tras abrir React, comprobar coincidencia, cambio de ruta/idioma y ausencia de tags obsoletos.
3. Probar la imagen en red aislada: 200 de rutas reales; 404 de rutas/slugs/idiomas inexistentes; robots como texto y sitemap como XML. Incluir barra final, query/hash y archivos ausentes.
4. Revisar enlace directo, recarga, navegación por teclado y un h1 por página; verificar que Blog/errores no heredan la política indexable.
5. Ejecutar lint, tests relevantes, build y runtime checks. Tras despliegue autorizado, capturar estado/headers/cuerpo a través del dominio público e inspectores sociales.
6. Registrar comprobaciones no realizadas o inaccesibles; la validez técnica no garantiza ni demuestra indexación efectiva.

## Fuentes primarias consultadas

- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): renderizado, metadatos y soft 404 en SPA.
- [Google: versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions): alternates y reciprocidad.
- [Google: crear un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): incluir las URLs canónicas que se desean publicar.
- [React: title](https://react.dev/reference/react-dom/components/title), [meta](https://react.dev/reference/react-dom/components/meta) y [link](https://react.dev/reference/react-dom/components/link): gestión nativa del head.
- [Open Graph protocol](https://ogp.me/): propiedades del head para compartición.
- [NGINX: try_files](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files): selección de archivos, fallback y códigos de respuesta.

Estas referencias sustentan los criterios; no sustituyen la comprobación de la web concreta.
