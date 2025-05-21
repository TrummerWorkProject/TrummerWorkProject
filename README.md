### TrummerWork Framework v1.2.0

<div>

`<h3>`Framework CSS minimalista para el aprendizaje y desarrollo web`</h3>`

</div>TrummerWork es un framework CSS ligero y educativo diseñado específicamente para estudiantes y desarrolladores que están comenzando en el mundo del desarrollo front-end. Combina simplicidad con funcionalidad moderna, proporcionando una base sólida para aprender y construir sitios web responsivos sin la complejidad de frameworks más grandes.

## 🚀 Novedades en la versión 1.2.0

- Mejora en el sistema de grillas para mayor flexibilidad
- Nuevos componentes: tarjetas, alertas y badges
- Optimización de rendimiento y reducción de tamaño
- Documentación ampliada con más ejemplos prácticos
- Compatibilidad mejorada con navegadores móviles


## 📋 Características principales

### 🎨 Diseño adaptable

- **Sistema de grillas intuitivo:** Estructura tu contenido fácilmente con nuestro sistema de 12 columnas
- **Mobile-first:** Diseñado para funcionar perfectamente en cualquier dispositivo


### 🧩 Componentes esenciales

- **Navegación:** Barras de navegación responsivas con soporte para móviles
- **Botones:** Variedad de estilos con efectos hover y estados activos
- **Formularios:** Inputs estilizados y validación visual
- **Tarjetas:** Contenedores versátiles para organizar información


### 🎭 Personalización sencilla

- **Variables CSS:** Personaliza colores, espaciados y más con nuestras variables predefinidas:


```css
:root {
  --colorgreen: #41B06E;
  --colorgreenHoover: #349159;
  --colorblue: #175ac7;
  --colorblueHover: #0E46A3;
  /* Más variables disponibles en la documentación */
}
```

## 📥 Instalación

### Opción 1: Descarga directa

1. Descarga la última versión desde nuestro repositorio:
[Descargar TrummerWork v1.2.0](releases/TrummerWorkProject-v1.2.0.zip)
2. Descomprime el archivo y añade el CSS a tu proyecto:

```html
<link rel="stylesheet" href="path/to/trummerwork.css">
```




### Opción 2: Usando Git

```shellscript
git clone https://github.com/ProyectoTrummerWork/Trummer-Work-Project.git
cd Trummer-Work-Project
# Opcional: cambiar a la versión 1.2.0
git checkout v1.2.0
```

### Opción 3: CDN (para pruebas rápidas)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ProyectoTrummerWork/Trummer-Work-Project@1.2.0/dist/trummerwork.min.css">
```

## 📚 Documentación

Nuestra documentación completa está disponible en varios formatos para facilitar tu aprendizaje:

- [Documentación en línea](Documentación.md) - Guía interactiva con ejemplos
- [Ejemplos prácticos](https://trummerworkproject.web.app) - Código de muestra para casos de uso comunes


### Guía rápida

Para comenzar rápidamente, sigue estos pasos:

1. **Incluye el CSS** en tu proyecto HTML
2. **Consulta la documentación** para familiarizarte con las clases disponibles
3. **Experimenta con los ejemplos** para entender cómo funciona cada componente


## 🌟 Ejemplo básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto con TrummerWork</title>
    <link rel="stylesheet" href="trummerwork.css">
</head>
<body>
    <!-- Barra de navegación -->
    <nav class="navbar-tw navbar-blue">
        <div class="nav-brand">TrummerWork</div>
        <input type="checkbox" id="nav-toggle">
        <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
        </label>
        <div class="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#caracteristicas">Características</a>
            <a href="#documentacion">Documentación</a>
            <a href="#contacto">Contacto</a>
        </div>
    </nav>

    <!-- Contenedor principal -->
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1 class="title-large">Aprende desarrollo web con TrummerWork</h1>
                <p class="tw-p">Un framework educativo diseñado para facilitar tu aprendizaje.</p>
                <button class="button-primary">Comenzar ahora</button>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">Características destacadas</div>
                    <div class="card-body">
                        <ul class="tw-list">
                            <li>Diseño responsivo</li>
                            <li>Componentes esenciales</li>
                            <li>Fácil personalización</li>
                            <li>Documentación completa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🤝 Contribuir al proyecto

TrummerWork es un proyecto de investigación académica y desarrollo tecnológico. Valoramos tus contribuciones:

1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad: `git checkout -b nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva funcionalidad'`
4. Sube tus cambios: `git push origin nueva-funcionalidad`
5. Envía un Pull Request


También puedes contribuir reportando bugs, sugiriendo mejoras o actualizando la documentación.

## 📬 Contacto

- **Email**: [trummerwork@maxtrummer.edu.co](mailto:trummerwork@maxtrummer.edu.co)
- **GitHub**: [ProyectoTrummerWork](https://github.com/ProyectoTrummerWork)
---

<div>`<p>`Desarrollado con ❤️ para la comunidad educativa`</p>`
`<p>`© 2024-2025 TrummerWork - Licencia MIT`</p>`

</div>
