# 🎨 TrummerWork CSS Framework

<div align="center">

![TrummerWork Logo](https://trummerwork-project.web.app/Assets/navlogo.png)

**El framework CSS simple, moderno y poderoso para crear sitios web increíbles**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.6-green.svg)](https://github.com/TrummerWorkProject/TrummerWorkProject)
[![CSS](https://img.shields.io/badge/CSS-framework-blueviolet.svg)](style.css)

[Demo en Vivo](https://trummerwork-project.web.app) • [Documentación](https://trummerwork-project.web.app/docs.html) • [Tutoriales](https://trummerwork-project.web.app/learn.html)

</div>

---

## 🌟 ¿Qué es TrummerWork?

**TrummerWork** es un framework CSS diseñado pensando en la **simplicidad** y **accesibilidad**. Si estás empezando en desarrollo web o buscas una herramienta que funcione sin complicaciones, TrummerWork es para ti.

> _"Una interfaz de usuario bien diseñada es la clave para una buena experiencia. Si no puedes usarlo, no importa lo poderoso que sea."_ — Jakob Nielsen

### ✨ Características Principales

- 🎯 **Fácil de Aprender** - Nombres de clases descriptivos en español
- 🚀 **Sin Dependencias** - Solo un archivo CSS
- 📱 **Responsive** - Diseño móvil primero
- 🎨 **Componentes Completos** - Navbar, sliders, tarjetas, formularios y más
- 🛠️ **Personalizable** - Variables CSS fáciles de modificar
- 💪 **Sistema Grid & Flexbox** - Layouts modernos sin esfuerzo
- 🌈 **Paleta de Colores Extensa** - 30+ colores predefinidos
- ⚡ **Animaciones Incluidas** - Efectos suaves y profesionales

---

## 📦 Instalación

### Opción 1: Descarga Directa

1. Descarga el archivo [`style.css`](style.css)
2. Colócalo en la carpeta de tu proyecto
3. Vincúlalo en tu HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Sitio Web</title>

    <!-- ✨ Vincula TrummerWork CSS -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="titulo-grande texto-azul texto-centro">¡Hola Mundo!</h1>
  </body>
</html>
```

### Opción 2: CDN (Próximamente)

```html
<link rel="stylesheet" href="https://cdn.trummerwork.com/style.css" />
```

### Opción 3: Clona el Repositorio

```bash
git clone https://github.com/TrummerWorkProject/TrummerWorkProject.git
cd TrummerWorkProject
```

---

## 🚀 Inicio Rápido

### Ejemplo: Tarjeta con Botón

```html
<div class="tarjetas tarjetas-medianas fondo-blanco">
  <h3 class="tarjetas-titulo texto-azul">Mi Proyecto</h3>
  <p class="tarjetas-cuerpo">Descripción del proyecto increíble.</p>
  <button class="boton boton-primario">Ver más</button>
</div>
```

### Ejemplo: Grid de 3 Columnas

```html
<div class="display-grid columna-3 gap-2">
  <div class="fondo-azul texto-blanco pd borde-redondo-mediano texto-centro">
    Columna 1
  </div>
  <div class="fondo-verde texto-blanco pd borde-redondo-mediano texto-centro">
    Columna 2
  </div>
  <div class="fondo-rojo texto-blanco pd borde-redondo-mediano texto-centro">
    Columna 3
  </div>
</div>
```

### Ejemplo: Navbar Responsive

```html
<nav class="navbar navbar-azul">
  <input type="checkbox" id="nav-check" class="nav-check" />
  <img class="navlogo" src="logo.png" alt="Logo" />

  <div class="nav-btn">
    <label for="nav-check" class="nav-btn-label">
      <span class="nav-btn-icon"></span>
    </label>
  </div>

  <div class="navbar-nav">
    <a href="#" class="nav-link">Inicio</a>
    <a href="#" class="nav-link">Documentación</a>
    <a href="#" class="nav-link">Contacto</a>
  </div>
</nav>
```

---

## 🎨 Componentes Principales

### 🧭 Navbar

Barra de navegación responsive con menú hamburguesa automático en móviles.

**Variantes de color disponibles:**

- `.navbar-negro`
- `.navbar-azul`
- `.navbar-verde`
- `.navbar-rojo`
- `.navbar-amarillo`

### 🃏 Tarjetas (Cards)

Contenedores versátiles para mostrar contenido organizado.

**Tamaños:**

- `.tarjetas-pequenas` (280px)
- `.tarjetas-medianas` (395px)
- `.tarjetas-grandes` (495px)
- `.tarjetas-extra` (850px)

### 🎞️ Sliders

Dos sistemas de carruseles:

- **Slider Principal** (`.tw-slider`) - Pantalla completa para cabeceras
- **Mini Slider** (`.tw-slider-mini`) - Compacto para secciones

**Efectos especiales:**

- `.tw-slider-fade` - Transición con fade
- `.tw-slider-zoom` - Efecto zoom
- `.tw-slider-dots` - Indicadores de puntos

### 🔘 Botones

Botones profesionales con efectos hover.

```html
<button class="boton boton-primario">Primario</button>
<button class="boton boton-azul">Azul</button>
<button class="boton boton-verde">Verde</button>
```

### 📝 Formularios

Sistema de formularios limpios y profesionales.

```html
<div class="formulario-simple">
  <label class="labeltxt">Nombre:</label>
  <input type="text" class="form-input" placeholder="Tu nombre" />

  <label class="labeltxt">Mensaje:</label>
  <textarea class="message-input" rows="4"></textarea>

  <button class="send-boton">Enviar</button>
</div>
```

---

## 📐 Sistema de Layout

### Grid System

Crea layouts de columnas fácilmente:

```html
<div class="display-grid columna-3 gap-2">
  <!-- Crea automáticamente 3 columnas iguales -->
</div>
```

**Opciones:** `.columna-2` hasta `.columna-6` y `.fila-1` hasta `.fila-6`

### Flexbox

Sistema flexible para alinear elementos:

```html
<div class="display-flex centro-horizontal centro-vertical">
  <!-- Contenido perfectamente centrado -->
</div>
```

**Clases de alineación:**

- `.centro-horizontal` - Centra horizontalmente
- `.centro-vertical` - Centra verticalmente
- `.centrado` - Centra en ambas direcciones
- `.inicio` / `.final` - Alinea al inicio/final
- `.gap-1` a `.gap-6` - Espaciado entre elementos

---

## 🎨 Sistema de Colores

### Colores de Texto

```html
<p class="texto-azul">Texto azul</p>
<p class="texto-verde">Texto verde</p>
<p class="texto-rojo">Texto rojo</p>
```

**30+ colores disponibles:** negro, blanco, gris, azul, verde, rojo, amarillo, naranja, morado, rosado, teal, turquesa, coral, indigo, oro, y más.

### Fondos de Color

```html
<div class="fondo-azul texto-blanco">Fondo azul con texto blanco</div>
```

### Colores Temáticos

```html
<p class="texto-primario">Color primario del tema</p>
<p class="texto-secundario">Color secundario</p>
<p class="texto-peligro">Alertas de peligro</p>
<p class="texto-exito">Mensajes de éxito</p>
```

---

## ✍️ Tipografía

### Tamaños de Título

```html
<h1 class="titulo-largo">Título Heroico (3.5em)</h1>
<h2 class="titulo-grande">Título de Sección (2.5em)</h2>
<h3 class="titulo-mediano">Subsección (2em)</h3>
<h4 class="titulo-pequeño">Título Menor (1.5em)</h4>
```

### Estilos de Texto

```html
<p class="texto-negrita">Negrita</p>
<p class="texto-cursiva">Cursiva</p>
<p class="texto-subrayado">Subrayado</p>
<p class="texto-mayusculas">Mayúsculas</p>
<p class="texto-minusculas">Minúsculas</p>
<p class="texto-capitalizado">Capitalizado</p>
```

### Fuentes Disponibles

- `.texto-inter` - Inter (Fuente primaria)
- `.texto-lato` - Lato (Fuente secundaria)
- `.texto-poppins` - Poppins
- `.texto-bebasneue` - Bebas Neue
- `.texto-merriweather` - Merriweather

---

## 🪄 Utilidades

### Espaciado

```html
<div class="margen-arriba">Margen superior</div>
<div class="margen-abajo">Margen inferior</div>
<div class="padding-mediano">Padding medio</div>
```

### Bordes Redondeados

```html
<div class="borde-redondo-small">Esquinas ligeramente redondeadas</div>
<div class="borde-redondo-mediano">Esquinas medianas</div>
<div class="borde-redondo-grande">Esquinas muy redondeadas</div>
```

### Animaciones

```html
<div class="deslizar-izquierda">Desliza desde la izquierda</div>
<div class="deslizar-derecha">Desliza desde la derecha</div>
<div class="aparecer-arriba">Aparece desde arriba</div>
<div class="aparecer-abajo">Aparece desde abajo</div>
```

---

## 📱 Responsive Design

TrummerWork está diseñado con un enfoque **mobile-first**. Todos los componentes se adaptan automáticamente a diferentes tamaños de pantalla.

### Puntos de Quiebre

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

El navbar se convierte automáticamente en menú hamburguesa en dispositivos móviles sin necesidad de JavaScript adicional.

---

## 🛠️ Personalización

TrummerWork utiliza variables CSS que puedes modificar fácilmente en la parte superior del archivo `style.css`:

```css
:root {
  /* Colores Principales */
  --colorgreen: #41b06e;
  --colorblue: #0e46a3;
  --colorred: #c40c0c;
  --coloryellow: #ffc100;

  /* Espaciado */
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;

  /* Border Radius */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 16px;

  /* Fuentes */
  --font-primary: "Inter", sans-serif;
  --font-secondary: "Lato", sans-serif;
}
```

---

## 📚 Documentación Completa

- **📖 [Documentación Oficial](https://trummerwork-project.web.app/docs.html)** - Guía completa de todas las clases y componentes
- **🎓 [Tutoriales](https://trummerwork-project.web.app/learn.html)** - Aprende paso a paso con ejemplos prácticos
- **🏠 [Sitio Web](https://trummerwork-project.web.app)** - Página oficial del proyecto

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar TrummerWork:

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/nuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nuevaCaracteristica`)
5. Abre un Pull Request

---

## 📞 Contacto

¿Tienes preguntas o sugerencias?

- **Email**: [trummerwork@maxtrummer.edu.co](mailto:trummerwork@maxtrummer.edu.co)
- **WhatsApp**: [+57 316 601 5580](https://wa.me/+573166015580)
- **GitHub**: [TrummerWorkProject](https://github.com/TrummerWorkProject/TrummerWorkProject)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 💡 Filosofía del Proyecto

TrummerWork nace con el objetivo de **democratizar el desarrollo web**. Creemos que crear sitios hermosos y profesionales no debería requerir años de experiencia.

### Nuestros Principios

1. **Accesibilidad** - Cualquiera puede aprender a usar TrummerWork
2. **Simplicidad** - Código limpio y fácil de entender
3. **Funcionalidad** - Herramientas que simplemente funcionan
4. **Comunidad** - Creado por y para estudiantes y desarrolladores

---

## 🎯 ¿Por Qué TrummerWork?

La mayoría de frameworks están hechos para expertos. **TrummerWork se diferencia** porque fue creado por y para estudiantes y nuevos desarrolladores. No necesitas saber todo, solo tener ganas de aprender. Te damos lo esencial, y tú construyes lo demás.

### Comparación Rápida

| Característica       | TrummerWork                  | Otros Frameworks  |
| -------------------- | ---------------------------- | ----------------- |
| Nomenclatura         | Español descriptivo          | Inglés técnico    |
| Curva de aprendizaje | Baja ⭐                      | Alta ⭐⭐⭐       |
| Documentación        | En español                   | Mayormente inglés |
| Peso del archivo     | ~48KB                        | 100KB+            |
| Componentes listos   | ✅ Navbar, Sliders, Cards... | ✅ Similares      |
| Personalización      | Variables CSS                | Variables/SASS    |
| Mobile-first         | ✅                           | ✅                |

---

## 🌐 Estructura del Proyecto

```
TrummerWork/
├── Assets/              # Recursos (imágenes, logos)
├── style.css            # ⭐ Framework principal
├── script.js            # JavaScript para componentes
├── index.html           # Página de inicio
├── docs.html            # Documentación completa
├── learn.html           # Tutoriales y guías
├── contacto.html        # Página de contacto
└── README.md            # Este archivo
```

---

## 🚧 Roadmap

### Versión 1.1 (Próximamente)

- [ ] Sistema de grid más avanzado
- [ ] Más componentes (modales, tooltips, tabs)
- [ ] Modo oscuro integrado
- [ ] Versión minificada

### Versión 2.0 (Futuro)

- [ ] CDN oficial
- [ ] Plugin para editores de código
- [ ] Temas preconstruidos
- [ ] Generador de componentes online

---

## ⭐ Apoya el Proyecto

Si TrummerWork te ha sido útil, considera:

- ⭐ Darle una estrella al repositorio
- 🐛 Reportar bugs o sugerir mejoras
- 📢 Compartir el proyecto con otros
- 🤝 Contribuir con código o documentación

---

## 🎓 Aprende Más

Visita nuestros tutoriales paso a paso para principiantes:

1. **[Cómo crear tu primera página](https://trummerwork-project.web.app/learn.html#proyecto-basico)**
2. **[Componentes esenciales](https://trummerwork-project.web.app/learn.html#componentes)**
3. **[Proyecto final: Landing Page](https://trummerwork-project.web.app/learn.html#proyecto-landing)**

---

<div align="center">

**Hecho con ❤️ por el equipo de TrummerWork**

_Diseña sin complicaciones, crea con propósito_

[⬆ Volver arriba](#-trummerwork-css-framework)

</div>
