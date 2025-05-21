# Documentación del Framework CSS TrummerWork

## Introducción

TrummerWork es un framework CSS minimalista y moderno diseñado para desarrolladores que desean crear interfaces limpias, potentes y completamente adaptables sin la necesidad de depender de frameworks como Bootstrap o Tailwind. Esta documentación describe detalladamente cada una de sus clases y componentes disponibles.

## Tabla de Contenidos

- [Documentación del Framework CSS TrummerWork](#documentación-del-framework-css-trummerwork)
  - [Introducción](#introducción)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Variables y Diseño Base](#variables-y-diseño-base)
    - [Variables de color](#variables-de-color)
    - [Espaciado y bordes](#espaciado-y-bordes)
    - [Tipografías](#tipografías)
    - [Temas y texto](#temas-y-texto)
  - [Colores y Fondos](#colores-y-fondos)
    - [Textos](#textos)
      - [Lista completa de clases de texto por color](#lista-completa-de-clases-de-texto-por-color)
    - [Fondos](#fondos)
      - [Lista completa de clases de fondo por color](#lista-completa-de-clases-de-fondo-por-color)
  - [Sistema de Grid y Flexbox](#sistema-de-grid-y-flexbox)
    - [Grid Layout](#grid-layout)
      - [Columnas](#columnas)
      - [Filas](#filas)
      - [Autogrid con altura automática](#autogrid-con-altura-automática)
    - [Flexbox](#flexbox)
      - [Dirección](#dirección)
      - [Alineación y distribución](#alineación-y-distribución)
      - [Crecimiento flexible](#crecimiento-flexible)
      - [Espaciado entre elementos (gap)](#espaciado-entre-elementos-gap)
      - [Márgenes útiles](#márgenes-útiles)
  - [Componentes](#componentes)
    - [Navbar](#navbar)
      - [Estructura base](#estructura-base)
      - [Clases disponibles](#clases-disponibles)
      - [Colores](#colores)
      - [Responsive con menú hamburguesa](#responsive-con-menú-hamburguesa)
  - [Este comportamiento puede complementarse con JavaScript básico para togglear la visibilidad de `.navbar-nav`.](#este-comportamiento-puede-complementarse-con-javascript-básico-para-togglear-la-visibilidad-de-navbar-nav)
    - [Sliders](#sliders)
    - [1. Slider Principal (`.tw-slider`)](#1-slider-principal-tw-slider)
      - [Estructura base](#estructura-base-1)
      - [Clases y funciones](#clases-y-funciones)
      - [Diferentes modeslos](#diferentes-modeslos)
      - [Posicionamiento de texto](#posicionamiento-de-texto)
    - [2. Slider Mini (`.tw-slider-mini`)](#2-slider-mini-tw-slider-mini)
      - [Estructura](#estructura)
      - [Clases destacadas](#clases-destacadas)
  - [Para ambos debes tener descargado el archivo .js en tu carpeta.](#para-ambos-debes-tener-descargado-el-archivo-js-en-tu-carpeta)
    - [Tarjetas (Cards)](#tarjetas-cards)
      - [Estructura base](#estructura-base-2)
      - [Tamaños disponibles](#tamaños-disponibles)
      - [Elementos internos](#elementos-internos)
      - [Variantes de disposición](#variantes-de-disposición)
      - [Estilos personalizados](#estilos-personalizados)
  - [Clases como `.shadow-light`, `.border-radius-8`, `.bg-white`, `.text-black` pueden mejorar la presentación.](#clases-como-shadow-light-border-radius-8-bg-white-text-black-pueden-mejorar-la-presentación)
    - [Botones](#botones)
      - [Estructura base](#estructura-base-3)
      - [Tipos de botón](#tipos-de-botón)
      - [Combinaciones de ejemplo](#combinaciones-de-ejemplo)
      - [Compatibilidad](#compatibilidad)
  - [Utilidades](#utilidades)
    - [Márgenes (`mg-*`)](#márgenes-mg-)
    - [Padding (`pd-*`)](#padding-pd-)
    - [Texto y alineación](#texto-y-alineación)
  - [Formularios](#formularios)
    - [Contenedor de formulario](#contenedor-de-formulario)
    - [Campos de entrada](#campos-de-entrada)
    - [Etiquetas](#etiquetas)
    - [Botón de envío](#botón-de-envío)
    - [Estilos adicionales para formularios tipo chat](#estilos-adicionales-para-formularios-tipo-chat)
    - [Ejemplo completo](#ejemplo-completo)
  - [Páginas de Error](#páginas-de-error)
    - [Estructura base](#estructura-base-4)
    - [Clases disponibles](#clases-disponibles-1)
    - [Personalización sugerida](#personalización-sugerida)

---

## Variables y Diseño Base

El framework define todas sus variables CSS dentro del selector `:root`, facilitando así la personalización y el mantenimiento del diseño.

### Variables de color

```css
--colorgreen: #41B06E;
--colorgreenHoover: #349159;
--colorblueHover: #0E46A3;
--colorblue: #175ac7;
--colorbluealt: #0443aa;
--colorRed: #C40C0C;
--colorRedHover: #a00909;
--colorYellow: #FFC100;
--colorYellowHover: #b48802;
--colorBlack: #151515;
--colorBlackHover: #424242;
--colorWhite: #ffffff;
--colorWhiteLight: #FFFFF7;
--colorWhiteLightComplementary: #f7f7ff;
--colorWhiteHover: #c0c0c0;
--colorGray: #B4B4B8;
--colorGrayLight: #D3D3D3;
--colorGrayHover: #8a8a8a;
--highlight-color: #e74c3c;
```

### Espaciado y bordes

```css
--spacing-small: 8px;
--spacing-medium: 16px;
--spacing-large: 32px;
--border-radius-small: 4px;
--border-radius-medium: 8px;
--border-radius-large: 16px;
```

### Tipografías

```css
--font-primary: 'Montserrat', sans-serif;
--font-secondary: 'Lato', sans-serif;
```

### Temas y texto

```css
--primary-color: #0E46A3;
--secondary-color: #349159;
--text-color: #424242;
```

Estas variables son la base del diseño coherente de todo el sistema.

---

## Colores y Fondos

TrummerWork ofrece una enorme variedad de clases utilitarias para aplicar colores tanto a textos como a fondos de forma directa. Esto permite adaptar el diseño visual rápidamente sin escribir una sola línea de CSS adicional.

### Textos

```html
<p class="text-red">Texto rojo</p>
<p class="text-success">Texto verde de éxito</p>
<p class="text-primary">Texto azul primario</p>
```

#### Lista completa de clases de texto por color

* `.text-black`, `.text-white`, `.text-gray`
* `.text-red`, `.text-green`, `.text-blue`, `.text-yellow`
* `.text-orange`, `.text-purple`, `.text-pink`, `.text-brown`
* `.text-teal`, `.text-navy`, `.text-olive`, `.text-maroon`
* `.text-electric-blue`, `.text-neon-green`, `.text-hot-pink`
* `.text-sun-yellow`, `.text-orange-red`, `.text-cyan`, `.text-magenta`, `.text-lime`, `.text-gold`, `.text-turquoise`, `.text-coral`, `.text-indigo`, `.text-emerald`, `.text-crimson`

### Fondos

```html
<div class="bg-blue">Fondo azul</div>
<div class="bg-coral">Fondo coral</div>
```

#### Lista completa de clases de fondo por color

* `.bg-black`, `.bg-white`, `.bg-gray`, `.bg-red`, `.bg-green`, `.bg-blue`, `.bg-yellow`
* `.bg-orange`, `.bg-purple`, `.bg-pink`, `.bg-brown`, `.bg-teal`, `.bg-navy`, `.bg-olive`, `.bg-maroon`
* `.bg-electric-blue`, `.bg-neon-green`, `.bg-hot-pink`, `.bg-sun-yellow`, `.bg-orange-red`, `.bg-cyan`, `.bg-magenta`, `.bg-lime`, `.bg-gold`, `.bg-turquoise`, `.bg-coral`, `.bg-indigo`, `.bg-emerald`, `.bg-crimson`

---

## Sistema de Grid y Flexbox

TrummerWork proporciona clases listas para estructurar el layout mediante **CSS Grid** y **Flexbox**, con nombres intuitivos y alto nivel de personalización.

### Grid Layout

Las clases grid permiten definir número de columnas y filas rápidamente:

#### Columnas

```html
<div class="display-g columna-3">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>
```

* `.columna-2` hasta `.columna-6`
* `.grid-1` hasta `.grid-6` (atajo con `grid-template-columns`)

#### Filas

```html
<div class="display-g fila-2">
  <div>Fila 1</div>
  <div>Fila 2</div>
</div>
```

* `.fila-1` hasta `.fila-6`

#### Autogrid con altura automática

```html
<div class="display-g auto-r-22">
  <div>Item</div>
</div>
```

* `.auto-r-22`: filas de 22rem, columnas automáticas con mínimo de 15rem

### Flexbox

Para layouts dinámicos y responsivos, TrummerWork incluye clases flex:

#### Dirección

* `.flex-row`, `.flex-row-reverse`
* `.flex-column`, `.flex-column-reverse`

#### Alineación y distribución

```html
<div class="d-flex jcontent-center aitems-center">
  <div>Elemento centrado</div>
</div>
```

* Justify content: `.jcontent-start`, `.jcontent-center`, `.jcontent-end`
* Align items: `.aitems-start`, `.aitems-center`, `.aitems-end`

#### Crecimiento flexible

```html
<div class="d-flex">
  <div class="fx-grow-1">Crece más</div>
  <div class="fx-grow-2">Crece aún más</div>
</div>
```

* `.fx-grow-1` a `.fx-grow-6`

#### Espaciado entre elementos (gap)

```html
<div class="d-flex gap-2">
  <div>Item A</div>
  <div>Item B</div>
</div>
```

* `.gap-1` a `.gap-5` (en `vw`)

#### Márgenes útiles

```html
<div class="mg-b">Margen inferior</div>
<div class="mg-lr-5">Margen horizontal</div>
```

* `.mg-0`, `.mg-b`, `.mg-lr-5`

---

## Componentes

### Navbar

TrummerWork ofrece un sistema de navegación completamente personalizable con diferentes variantes de tamaño, color y estructura.

#### Estructura base

```html
    <nav class="navbar-tw navbar-blue">
      <input type="checkbox" id="nav-check" class="nav-check">
      <img class="navlogo" src="Assets/navlogo.png" alt="navlogo">
      <div class="nav-btn">
        <label for="nav-check" class="nav-btn-label">
          <span class="nav-btn-icon"></span>
        </label>
      </div>
      <div class="navbar-nav">
        <a href="/ruta" class="nav-link navbar-a">Inicio</a>
        <a href="/ruta" class="nav-link navbar-a">Servicios</a>
        <a href="/ruta" class="nav-link navbar-a ">Contacto</a>
      </div>
    </nav>
```

#### Clases disponibles

* `.navbar-tw`: clase general para activar estilo navbar
* `.navbar-marca`: área de logo o marca principal
* `.navbar-nav`: contenedor de los links
* `.nav-link`: estilo de los enlaces

#### Colores

* `.navbar-blue`, `.navbar-red`, `.navbar-green`, `.navbar-black`, `.navbar-yellow`, `.navbar-white`

#### Responsive con menú hamburguesa

TrummerWork incluye un sistema básico de menú colapsable tipo hamburguesa para móviles.

```html
<div class="nav-btn">
    <label for="nav-check" class="nav-btn-label">
        <span class="nav-btn-icon"></span>
    </label>
</div>
```

Cuando se aplica en pantallas pequeñas:

* Los links se colapsan
* Se activa el botón `.nav-btn`

Este comportamiento puede complementarse con JavaScript básico para togglear la visibilidad de `.navbar-nav`.
---

### Sliders

TrummerWork incluye dos sistemas de slider: uno principal `.tw-slider` para uso destacado y otro compacto `.tw-slider-mini` para banners, encabezados o promociones.

### 1. Slider Principal (`.tw-slider`)

#### Estructura base

```html
<div class="tw-slider tw-slider-dots">
  <ul class="slider-track">
    <li class="slide"><img src="img1.jpg"></li>
    <li class="slide"><img src="img2.jpg"></li>
    <li class="slide"><img src="img3.jpg"></li>
  </ul>
  <button class="slider-prev">←</button>
  <button class="slider-next">→</button>
</div>
```

#### Clases y funciones

* `.tw-slider`: clase principal del componente
* `.slider-track`: contenedor de todas las diapositivas
* `.slide`: cada ítem del slider (puede contener imagen o HTML)
* `.slider-prev`, `.slider-next`: navegación manual

#### Diferentes modeslos

* `.tw-slider-fade`: transición de desvanecido
    ```html
    <div class="tw-slider-fade">
        <ul class="slider-track">
            <li class="slide">
                <img src="https://placehold.co/800x400" alt="Imagen 1">
                <div class="slide-content">
                    <h2>Título 1</h2>
                    <p>Descripción de la diapositiva 1</p>
                </div>
            </li>
            <li class="slide">
                <img src="https://placehold.co/800x400" alt="Imagen 2">
                <div class="slide-content">
                    <h2>Título 2</h2>
                    <p>Descripción de la diapositiva 2</p>
                </div>
            </li>
            <li class="slide">
                <img src="https://placehold.co/800x400" alt="Imagen 3">
                <div class="slide-content">
                    <h2>Título 3</h2>
                    <p>Descripción de la diapositiva 3</p>
                </div>
            </li>
        </ul>
        <button class="slider-prev">&#10094;</button>
        <button class="slider-next">&#10095;</button>
    </div>
    ```


* `.tw-slider-zoom`: efecto de zoom-in entre cambios
    ```html
    <div class="tw-slider-zoom">
    <ul class="slider-track">
        <li class="slide">
            <div class="zoom-container">
                <img src="https://placehold.co/800x400" alt="Imagen 1">
            </div>
            <div class="slide-content">
                <h2>Título 1</h2>
                <p>Descripción de la diapositiva 1</p>
            </div>
        </li>
        <li class="slide">
            <div class="zoom-container">
                <img src="https://placehold.co/800x400" alt="Imagen 2">
            </div>
            <div class="slide-content">
                <h2>Título 2</h2>
                <p>Descripción de la diapositiva 2</p>
            </div>
        </li>
        <li class="slide">
            <div class="zoom-container">
                <img src="https://placehold.co/800x400" alt="Imagen 3">
            </div>
            <div class="slide-content">
                <h2>Título 3</h2>
                <p>Descripción de la diapositiva 3</p>
                </div>
            </li>
        </ul>
        <button class="slider-prev">&#10094;</button>
        <button class="slider-next">&#10095;</button>
    </div>
    ```

* `.tw-slider-dots`: activa navegación con puntos
    ```html
    <div class="tw-slider-dots">
    <ul class="slider-track">
        <li class="slide">
            <img src="https://placehold.co/800x400" alt="Imagen 1">
            <div class="slide-content">
                <h2>Título 1</h2>
                <p>Descripción de la diapositiva 1</p>
            </div>
        </li>
        <li class="slide">
            <img src="https://placehold.co/800x400" alt="Imagen 2">
            <div class="slide-content">
                <h2>Título 2</h2>
                <p>Descripción de la diapositiva 2</p>
            </div>
        </li>
        <li class="slide">
            <img src="https://placehold.co/800x400" alt="Imagen 3">
            <div class="slide-content">
                <h2>Título 3</h2>
                <p>Descripción de la diapositiva 3</p>
            </div>
        </li>
    </ul>
        <div class="slider-dots-container"></div>
        <button class="slider-prev">&#10094;</button>
        <button class="slider-next">&#10095;</button>
    </div>
    ```

#### Posicionamiento de texto

Puedes añadir texto encima del slider con estilos personalizados:

```html
<div class="texto-slider-f2 tsli-center">
  <h1>Bienvenid@</h1>
  <p>Explora el sitio</p>
</div>
```

Posiciones soportadas:

* `.tsli-center`, `.tsli-lefttop`, `.tsli-rightdown`, `tsli-leftdown`, `.tsli-righttop`, ``

Estilos de texto:

* `.texto-slider-f1` hasta `.texto-slider-f5`: diferentes tamaños para encabezados o subtítulos.

---

### 2. Slider Mini (`.tw-slider-mini`)

Ideal para espacios reducidos o banners. Compacto, rápido y visualmente atractivo.

#### Estructura

```html
<div class="tw-slider-mini">
  <!-- Texto fijo que no se mueve con el slider -->
  <div class="tw-slider-mini-texto">
    <h2>Titulo</h2>
    <p>Descripción breve que permanece fija mientras las imágenes cambian debajo.</p>
  </div>
  
  <!-- Contenido del slider -->
  <ul>
    <li class="active"><img src="/ruta/de/la/imagen" alt="Imagen 1"></li>
    <li><img src="/ruta/de/la/imagen"" alt="Imagen 2"></li>
  </ul>
  
  <!-- Controles de navegación -->
  <button class="tw-slider-mini-prev">&#10094;</button>
  <button class="tw-slider-mini-next">&#10095;</button>
</div>
```

#### Clases destacadas

* `.tw-slider-mini`: clase base
* `.tw-slider-mini-prev`, `.tw-slider-mini-next`: navegación
* `.tw-slider-mini-texto`: capa de texto superpuesto
* `.active`: clase que indica el slide visible

Para ambos debes tener descargado el archivo .js en tu carpeta.
---

### Tarjetas (Cards)

El sistema de tarjetas de TrummerWork está pensado para crear bloques de contenido con estructura visual atractiva, combinable con grid/flex, imágenes, textos y botones.

#### Estructura base

```html
<div class="tarjetas tarjetas-pequenas">
  <img src="img.jpg" class="tarjetas-imagen" alt="Imagen">
  <h3 class="tarjetas-titulo">Título de la tarjeta</h3>
  <p class="tarjetas-cuerpo">Descripción o contenido breve.</p>
</div>
```

#### Tamaños disponibles

* `.tarjetas-pequenas`: ancho reducido, ideal para móviles o catálogos
* `.tarjetas-medianas`: ancho medio, uso general
* `.tarjetas-grandes`: tarjetas anchas, visualmente destacadas
* `.tarjetas-extra`: diseño extendido (mayor anchura y contenido)

#### Elementos internos

* `.tarjetas-imagen`: imagen superior o lateral
* `.tarjetas-titulo`: encabezado destacado (h3 por defecto)
* `.tarjetas-cuerpo`: contenido textual
* `.tarjetas-boton`: botón de acción dentro de la tarjeta

#### Variantes de disposición

Puedes utilizar grid/flex para alinear tarjetas:

```html
<div class="display-g columna-3">
  <div class="tarjetas tarjetas-pequenas">...</div>
  <div class="tarjetas tarjetas-pequenas">...</div>
  <div class="tarjetas tarjetas-pequenas">...</div>
</div>
```

O versión horizontal:

```html
<div class="tarjetas tarjetas-medianas d-flex flex-row aitems-center">
  <img src="img.jpg" class="tarjetas-imagen" />
  <div>
    <h3 class="tarjetas-titulo">Título</h3>
    <p class="tarjetas-cuerpo">Contenido</p>
  </div>
</div>
```

#### Estilos personalizados

Puedes usar combinaciones con colores y bordes:

```html
<div class="tarjetas tarjetas-grandes bg-white border-radius-8 shadow-light">
  ...
</div>
```

Clases como `.shadow-light`, `.border-radius-8`, `.bg-white`, `.text-black` pueden mejorar la presentación.
---

### Botones

TrummerWork incluye una gama de botones prediseñados con clases utilitarias para definir colores, estilos y tamaños. Son completamente personalizables y compatibles con todos los componentes.

#### Estructura base

```html
<button class="button-primary">Aceptar</button>
```

#### Tipos de botón

* `.button-primary`: botón azul por defecto
* `.button-secondary`: gris neutro
* `.button-success`: verde (confirmaciones)
* `.button-danger`: rojo (acciones destructivas)
* `.button-warning`: amarillo
* `.button-black`, `.button-white`

#### Combinaciones de ejemplo

```html
<button class="button-danger btn-lg button-shadow button-rounded">Eliminar</button>
<button class="button-secondary btn-sm button-outline">Cancelar</button>
```

#### Compatibilidad

* Puede usarse como `<button>`, `<a>`, o `<input type="submit">`
* 100% responsive, adaptables a grid, flex y tarjetas
---

## Utilidades

Las clases utilitarias de TrummerWork están pensadas para aplicar estilos rápidos sin escribir CSS manual. Estas clases permiten controlar márgenes, padding, alineación, visibilidad, texto, colores y más.

### Márgenes (`mg-*`)

```html
<div class="mg-0">Sin margen</div>
<div class="mg-b">Margen inferior estándar</div>
<div class="mg-lr-5">Margen horizontal de 5vw</div>
```

Clases disponibles:

* `.mg-0`: elimina márgenes
* `.mg-b`: agrega margen inferior (por defecto 1rem)
* `.mg-lr-5`: margen izquierdo y derecho de 5vw

### Padding (`pd-*`)

```html
<div class="pd">Padding estándar</div>
<div class="pd-lr">Padding horizontal</div>
<div class="pd-tb">Padding vertical</div>
```

Clases útiles:

* `.pd`: padding general (1rem)
* `.pd-lr`: izquierda y derecha
* `.pd-tb`: superior e inferior

### Texto y alineación

```html
<p class="text-center">Texto centrado</p>
<p class="text-right">Texto a la derecha</p>
<p class="text-left">Texto a la izquierda</p>
```

Manipulación de transformación:

```html
<p class="text-mayusculas">TEXTO EN MAYÚSCULAS</p>
<p class="text-minusculas">texto en minúsculas</p>
<p class="text-capitalizado">Texto Capitalizado</p>
```

Clases adicionales:

* `.border`: añade borde 1px sólido gris
* `.border-radius-4`, `.border-radius-8`, `.border-radius-16`
---

## Formularios

El sistema de formularios en TrummerWork está optimizado para una estética limpia, jerárquica y clara. Se adapta fácilmente a cualquier diseño y puede combinarse con otras utilidades del framework.

### Contenedor de formulario

```html
<div class="formcontent">
  <!-- contenido aquí -->
</div>
```

* `.formcontent`: estructura general del formulario, con padding y fondo opcional

### Campos de entrada

```html
<input type="text" class="form-input" placeholder="Escribe tu nombre">
<textarea class="message-input" rows="5" placeholder="Mensaje"></textarea>
```

* `.form-input`: inputs de texto, correo, teléfono, etc.
* `.message-input`: textarea adaptada, tamaño controlado, bordes suaves

### Etiquetas

```html
<label class="labeltxt">Nombre completo</label>
```

* `.labeltxt`: clase de estilo para etiquetas de campo

### Botón de envío

```html
<button class="send-button">Enviar</button>
```

* `.send-button`: botón principal para envío de formularios, con color azul y hover

### Estilos adicionales para formularios tipo chat

```html
<div class="chat-form">
  <h3 class="chat-titulo">Contáctanos</h3>
  <input class="form-input" type="text" placeholder="Tu nombre">
</div>
```

* `.chat-form`: diseño especial para formularios estilo "ventana de chat"
* `.chat-titulo`: encabezado del formulario, estilizado como widget

### Ejemplo completo

```html
<div class="formcontent">
  <label class="labeltxt">Correo Electrónico</label>
  <input class="form-input" type="email" placeholder="email@ejemplo.com">
  <label class="labeltxt">Mensaje</label>
  <textarea class="message-input"></textarea>
  <button class="send-button">Enviar</button>
</div>
```

## Páginas de Error

TrummerWork incluye una estructura visual clara y adaptable para mostrar páginas de error, como el clásico 404 o errores personalizados.

### Estructura base

```html
<div class="error-page">
  <div class="error-content">
    <h1 class="error-title">404</h1>
    <p class="error-message">Lo sentimos, la página que buscas no existe.</p>
    <a href="/" class="button-primary">Volver al inicio</a>
  </div>
</div>
```

### Clases disponibles

* `.error-page`: contenedor principal, centrado en pantalla con fondo neutro
* `.error-content`: contenido del error, alineado al centro, con padding amplio
* `.error-title`: número del error (ej. 404), en fuente grande y pesada
* `.error-message`: mensaje explicativo amigable

### Personalización sugerida

Puedes aplicar combinaciones con utilidades para mejorar el diseño:

```html
<div class="error-content text-center pd border-radius-8 shadow-light">
  ...
</div>
```

También se puede utilizar cualquier botón del sistema para acciones como volver o recargar:

```html
<a href="/" class="button-black">Ir a la página principal</a>
```
---
