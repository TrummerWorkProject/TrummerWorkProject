# TrummerWork

<p align="center">
  <strong>Aprende a construir interfaces web mientras las construyes.</strong>
</p>

<p align="center">
  <a href="https://github.com/TrummerWorkProject/TrummerWorkProject/releases/tag/v2.0.0">
    <img alt="Versión 2.0.0" src="https://img.shields.io/badge/versi%C3%B3n-2.0.0-0e46a3">
  </a>
  <img alt="CSS y JavaScript nativo" src="https://img.shields.io/badge/CSS%20%2B%20JavaScript-nativo-349159">
  <img alt="Sin dependencias de ejecución" src="https://img.shields.io/badge/dependencias-de%20ejecuci%C3%B3n%3A%20ninguna-41b06e">
</p>

<p align="center">
  <a href="https://trummerwork-project.web.app/">Sitio oficial</a> ·
  <a href="https://trummerwork-project.web.app/">Documentación</a> ·
  <a href="./learn.html">Aprende paso a paso</a> ·
  <a href="https://github.com/TrummerWorkProject/TrummerWorkProject/releases/tag/v2.0.0">Descargar v2.0.0</a>
</p>

TrummerWork es un framework CSS educativo, creado como apoyo para estudiantes y personas que comienzan en el desarrollo front-end. Reúne estilos, componentes reutilizables y una pequeña capa de JavaScript para que puedas empezar desde HTML, entender cómo se construye una interfaz y avanzar paso a paso, sin instalar herramientas ni configurar un sistema de compilación.

Su prioridad no es que memorices cientos de clases: es que encuentres nombres descriptivos, ejemplos claros en español y una base que puedas explorar, modificar y usar en tus propios proyectos. TrummerWork acompaña el aprendizaje; no reemplaza los fundamentos de HTML, CSS ni las decisiones de diseño de quien crea la página.

> **¿Es tu primera vez?** Empieza por la [guía práctica de aprendizaje](./learn.html), que propone ejercicios para experimentar con el framework. Después, usa la [documentación](https://trummerwork-project.web.app/) como referencia de clases y componentes.

## Contenido

- [El enfoque de TrummerWork](#el-enfoque-de-trummerwork)
- [Instalación](#instalación)
- [Inicio rápido](#inicio-rápido)
- [Componentes](#componentes)
- [Utilidades CSS](#utilidades-css)
- [Diseño adaptable y accesibilidad](#diseño-adaptable-y-accesibilidad)
- [Ejemplos](#ejemplos)
- [Personalización](#personalización)
- [Desarrollo y contribuciones](#desarrollo-y-contribuciones)
- [Atribución y licencia](#atribución-y-licencia)
- [Contacto](#contacto)

## El enfoque de TrummerWork

TrummerWork nace para reducir algunas barreras con las que se encuentran quienes están aprendiendo a crear páginas web: convenciones difíciles de recordar, documentación extensa o en otro idioma e instalaciones que interrumpen la práctica. Por eso el framework y sus recursos priorizan:

- **Aprender haciendo:** empieza por textos, colores y espaciado; luego prueba layouts y combina componentes.
- **Nombres fáciles de explorar:** clases descriptivas, en su mayoría en español, para relacionar lo que escribes con el resultado visual.
- **Ejemplos reutilizables:** patrones de navbar, botones, tarjetas, formularios, avisos, sliders y footer que puedes copiar y adaptar.
- **Entrada directa:** enlaza `style.css` y, cuando necesites interacciones, `script.js`. No necesitas Node.js, npm ni un paso de compilación para empezar.
- **Personalización gradual:** modifica variables CSS o añade tus propios estilos cuando estés listo para dar identidad a tu proyecto.

El framework incluye estilos para tipografía, color, espaciado, bordes, visibilidad, Grid, Flexbox y distintos tamaños de pantalla. La [documentación](https://trummerwork-project.web.app/) sirve como referencia; la [guía de aprendizaje](./learn.html) te acompaña a practicar.

## Instalación

### Opción 1: CDN oficial

Agrega la hoja de estilos dentro de `<head>`. Carga el script con `defer` para que el HTML se procese antes de inicializar los componentes.

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi proyecto</title>

  <!-- Estilos, utilidades y componentes de TrummerWork -->
  <link rel="stylesheet" href="https://trummerwork-project.web.app/style.css">

  <!-- Interacciones de navbar y sliders -->
  <script src="https://trummerwork-project.web.app/script.js" defer></script>
</head>
<body>
  <!-- Tu página -->
</body>
</html>
```

### Opción 2: archivos locales

1. Descarga los archivos desde la [release 2.0.0](https://github.com/TrummerWorkProject/TrummerWorkProject/releases/tag/v2.0.0).
2. Copia `style.css` y `script.js` a tu proyecto.
3. Enlázalos usando la ruta relativa correspondiente:

```html
<!-- Ajusta las rutas a la ubicación real de los archivos -->
<link rel="stylesheet" href="./style.css">
<script src="./script.js" defer></script>
```

Incluye `script.js` cuando uses componentes interactivos, como el menú móvil o un slider. Las clases y los estilos visuales funcionan desde CSS.

> **Paquete npm:** este proyecto se distribuye como archivos estáticos y no documenta un paquete npm.

## Inicio rápido

Este ejemplo usa clases reales de TrummerWork para crear un encabezado, una presentación y tarjetas:

```html
<body class="texto-inter fondo-blancolight">
  <!-- Navbar: marca y enlaces a secciones existentes -->
  <header class="navbar-contenedor-seguimiento">
    <nav class="navbar navbar-blue navbar-seguimiento"
         aria-label="Navegación principal">
      <a class="navbar-brand" href="#inicio">Mi proyecto</a>

      <!-- El checkbox controla la apertura del menú en pantallas pequeñas -->
      <input type="checkbox" id="menu" class="navbar-toggle"
             aria-label="Alternar navegación" aria-controls="enlaces">
      <label class="navbar-toggle-label" for="menu" aria-hidden="true">
        <span class="navbar-toggle-icon"></span>
      </label>

      <ul class="navbar-menu" id="enlaces">
        <li><a class="navbar-link" href="#beneficios">Beneficios</a></li>
        <li><a class="navbar-link" href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main id="inicio">
    <!-- Presentación principal -->
    <section class="contenedor margen-vertical">
      <p class="texto texto-primario texto-negrita">UNA IDEA PARA COMPARTIR</p>
      <h1 class="titulo titulo-largo">Construye algo que importe.</h1>
      <p class="texto texto-grande">
        Explica en una frase qué hace tu proyecto y a quién ayuda.
      </p>
      <a class="boton boton-primario texto-blanco margen-vertical"
         href="#beneficios">Conocer más</a>
    </section>

    <!-- Grid: la clase de columnas se aplica al contenedor padre -->
    <section id="beneficios"
             class="contenedor display-grid columna-3 espacio-entre-2">
      <article class="tarjetas fondo-blanco">
        <div class="contenedor-cuerpo-tarjeta">
          <h2 class="titulo titulo-pequeño">Simple</h2>
          <p>Describe un beneficio concreto.</p>
        </div>
      </article>
      <article class="tarjetas fondo-blanco">
        <div class="contenedor-cuerpo-tarjeta">
          <h2 class="titulo titulo-pequeño">Flexible</h2>
          <p>Explica qué puede personalizar el usuario.</p>
        </div>
      </article>
      <article class="tarjetas fondo-blanco">
        <div class="contenedor-cuerpo-tarjeta">
          <h2 class="titulo titulo-pequeño">Adaptable</h2>
          <p>Muestra cómo responde a distintas pantallas.</p>
        </div>
      </article>
    </section>

    <!-- Añade aquí la sección de contacto y conecta el enlace del navbar -->
    <section id="contacto" class="contenedor margen-vertical">
      <h2 class="titulo titulo-mediano">Hablemos</h2>
      <a class="boton boton-secundario"
         href="https://trummerwork-project.web.app/">
        Ir al sitio del proyecto
      </a>
    </section>
  </main>
</body>
```

Las clases se combinan en el atributo `class`. Usa elementos HTML que describan el contenido y después añade clases para cambiar su presentación.

## Componentes

### Navbar responsive

Combina `navbar` con una variante visual como `navbar-blue`, `navbar-green` o `navbar-dark`. Para mantenerla visible al desplazarte, añade `navbar-seguimiento` y, en el contenedor, `navbar-contenedor-seguimiento`.

El patrón de menú móvil necesita el checkbox `.navbar-toggle`, su etiqueta `.navbar-toggle-label` y una lista `.navbar-menu` colocada después del control.

### Botones y enlaces

- `.boton` crea la base del botón.
- `.boton-primario` y `.boton-secundario` cambian su color.
- Usa un elemento `<a>` para crear un enlace de texto.
- Usa un `<button>` para ejecutar una acción y un `<a href="...">` para navegar.

### Tarjetas

Usa `.tarjetas` en el contenedor y `.contenedor-cuerpo-tarjeta` para espaciar el contenido. Para una imagen opcional, prueba `.tarjetas-imagen` o `.tarjetas-imagen-completas`.

### Formularios

`.formulario-simple` organiza campos, etiquetas y acciones. Asocia cada etiqueta con el campo usando `for` e `id`. Los estilos no envían ni guardan datos; conecta el formulario con el servicio que lo procesará.

### Avisos y citas

- `.aviso` presenta un mensaje de estado; `.titulo-aviso` marca su encabezado.
- `.cita` destaca una nota o cita. Puedes elegir `.cita-pequeña`, `.cita-mediana` o `.cita-grande`.

### Sliders

Las variantes con pista comparten la estructura `.slider` → `.slider-pista` → `.slider-diapositiva`. Elige **una** variante de comportamiento:

| Clase | Comportamiento |
| --- | --- |
| `.slider-basico` | Desplazamiento horizontal |
| `.slider-con-indicadores` | Desplazamiento con puntos de navegación |
| `.slider-fundido` | Transición de opacidad |
| `.slider-zoom` | Acercamiento progresivo de imágenes |
| `.slider-hero` | Presentación amplia; se combina con otra variante |

`.slider-compacto` es un carrusel distinto: utiliza una lista `<ul>` de elementos `<li>` y los controles `.slider-compacto-anterior` y `.slider-compacto-siguiente`. No mezcles sus clases con la estructura de pista.

```html
<!-- Hero con indicadores: los puntos se crean desde script.js -->
<section class="slider slider-con-indicadores slider-hero"
         aria-label="Presentación principal">
  <div class="slider-pista">
    <!-- Repite un article por cada diapositiva -->
    <article class="slider-diapositiva">
      <img src="equipo.jpg" alt="Equipo colaborando en un proyecto">
      <div class="slider-texto slider-texto-oscuro slider-texto-izquierda-abajo">
        <h1 class="titulo-largo texto-blanco">Una idea para avanzar.</h1>
        <p class="texto-grande texto-blanco">Una descripción breve y clara.</p>
        <a class="boton boton-primario texto-blanco" href="#contenido">
          Conocer más
        </a>
      </div>
    </article>
    <article class="slider-diapositiva">
      <img src="proyecto.jpg" alt="Personas revisando un proyecto">
      <div class="slider-texto slider-texto-vidrio slider-texto-centro">
        <h2 class="titulo-grande texto-blanco">Otra idea importante.</h2>
      </div>
    </article>
  </div>

  <!-- Controles opcionales y contenedor requerido para los indicadores -->
  <button class="slider-anterior" type="button"
          aria-label="Diapositiva anterior">‹</button>
  <button class="slider-siguiente" type="button"
          aria-label="Siguiente diapositiva">›</button>
  <div class="slider-indicadores"></div>
</section>
```

Para ver todas las variantes con ejemplos completos, consulta la sección de sliders en la [documentación](https://trummerwork-project.web.app/).

### Footer

El footer reutilizable se organiza con `.footer`, `.footer-contenido`, `.footer-superior`, `.footer-marca`, `.footer-columna` y `.footer-inferior`.

## Utilidades CSS

Estas clases son una muestra; el listado completo está en el [índice de clases de la documentación](https://trummerwork-project.web.app/).

| Necesidad | Ejemplos |
| --- | --- |
| Tipografía | `.titulo-largo`, `.titulo-mediano`, `.texto-grande`, `.texto-pequeño` |
| Familia y énfasis | `.texto-inter`, `.texto-lato`, `.texto-negrita`, `.texto-cursiva` |
| Alineación | `.texto-inicio`, `.texto-centro`, `.texto-final` |
| Color | `.texto-primario`, `.texto-secundario`, `.texto-blanco`, `.texto-rojo` |
| Fondo | `.fondo-primario`, `.fondo-secundario`, `.fondo-blanco`, `.fondo-gris` |
| Grid | `.display-grid`, `.columna-2`, `.columna-3`, `.espacio-entre-2` |
| Flexbox | `.display-flex`, `.fila`, `.columna`, `.centro-vertical` |
| Espaciado | `.margen-vertical`, `.margen-arriba`, `.padding-mediano` |
| Bordes | `.borde`, `.borde-redondo-mediano`, `.borde-circulo` |

## Diseño adaptable y accesibilidad

TrummerWork incluye reglas responsive y una preferencia de movimiento reducido para algunos efectos. Sus media queries contemplan anchos como `1024`, `900`, `768`, `640` y `576` píxeles. Son una base para adaptar la interfaz, no una garantía de que cualquier página creada con el framework funcione bien en todos los dispositivos o sea accesible.

La accesibilidad también depende de la estructura HTML, el contenido, los colores y las decisiones de implementación. Al crear tu página:

- Incluye `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Usa encabezados en orden, texto alternativo útil y etiquetas asociadas a los campos.
- Comprueba el contraste de cada combinación de texto y fondo; las clases de color permiten muchas combinaciones y no todas necesariamente tienen contraste suficiente.
- Recorre los controles con el teclado y confirma que el foco se vea y que los controles tengan nombres comprensibles.
- Revisa el contenido en tamaños de pantalla diferentes y no dependas solo del color o la animación para comunicar información.

Estos pasos son especialmente importantes antes de publicar: el uso de TrummerWork por sí solo no demuestra conformidad con WCAG. El proyecto toma WCAG 2.2 como referencia y continúa sujeto a comprobaciones técnicas y pruebas con usuarios.

## Ejemplos

- [Guía práctica de aprendizaje](./learn.html)
- [Documentación completa y buscador de clases](https://trummerwork-project.web.app/)
- [Nexo — startup de productividad](./Example%20Pags/01-nexo-startup.html)
- [Brújula — viajes](./Example%20Pags/02-brujula-viajes.html)
- [Raíz — mercado](./Example%20Pags/03-raiz-mercado.html)
- [Lumen — estudio](./Example%20Pags/04-lumen-estudio.html)

## Personalización

Puedes añadir una hoja propia después de TrummerWork para sobreescribir estilos:

```html
<!-- Primero carga el framework -->
<link rel="stylesheet" href="https://trummerwork-project.web.app/style.css">

<!-- Después carga tus ajustes para que puedan sobreescribirlo -->
<link rel="stylesheet" href="./mi-estilo.css">
```

También puedes modificar los archivos descargados. Mantén los cambios específicos de tu proyecto en una hoja separada cuando quieras actualizar el framework sin volver a aplicar cada ajuste.

## Desarrollo y contribuciones

TrummerWork se entrega como archivos estáticos: `style.css` y `script.js`. No requiere instalación de dependencias para usarlo en un sitio.

Para contribuir:

1. Crea un fork público del [repositorio](https://github.com/TrummerWorkProject/TrummerWorkProject).
2. Trabaja en una rama con un cambio concreto.
3. Comprueba los ejemplos en escritorio y móvil.
4. Abre un Pull Request describiendo qué cambiaste y cómo lo probaste.

Para reportar un error o proponer una mejora, abre un [issue en GitHub](https://github.com/TrummerWorkProject/TrummerWorkProject/issues).

## Atribución y licencia

El proyecto declara la licencia **CC BY-NC-SA 4.0**. Consulta los términos de la licencia antes de distribuir o usar el framework; si planeas un uso comercial, contacta al equipo.

Si publicas un proyecto construido con una versión modificada de TrummerWork:

1. Indica claramente que fue construido con TrummerWork y enlaza el [repositorio original](https://github.com/TrummerWorkProject/TrummerWorkProject).
2. Crea un **fork público** del proyecto en GitHub y publica allí el código modificado del framework.

## Contacto

- Sitio y formulario: [trummerwork-project.web.app](https://trummerwork-project.web.app/)
- Repositorio: [github.com/TrummerWorkProject/TrummerWorkProject](https://github.com/TrummerWorkProject/TrummerWorkProject)

---

<p align="center">
  Hecho para aprender, crear y compartir con TrummerWork.
</p>
