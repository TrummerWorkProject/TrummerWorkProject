
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los sliders
    initSliders();
    
    function initSliders() {
        // Slider Básico
        initBasicSlider();
        
        // Slider con Puntos
        initDotsSlider();
        
        // Slider con Efecto de Fundido
        initFadeSlider();
        
        // Slider con Efecto de Zoom
        initZoomSlider();
        
        // Slider con Miniaturas
        initThumbsSlider();
    }
    
    // Slider Básico
    function initBasicSlider() {
        const sliders = document.querySelectorAll('.tw-slider-basic');
        
        sliders.forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = sliderContainer.querySelector('.slider-prev');
            const nextButton = sliderContainer.querySelector('.slider-next');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar el ancho total del slider y de cada slide
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slide => {
                slide.style.width = `${100 / slides.length}%`;
            });
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                currentIndex = index;
            }
            
            // Funciones de navegación
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
            
            // Reproducción automática
            function startAutoSlide() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function stopAutoSlide() {
                clearInterval(intervalId);
            }
            
            // Event listeners para botones
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            // Event listeners para detener la reproducción automática al pasar el mouse
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                }
            }
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Slider con Puntos
    function initDotsSlider() {
        const sliders = document.querySelectorAll('.tw-slider-dots');
        
        sliders.forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = sliderContainer.querySelector('.slider-prev');
            const nextButton = sliderContainer.querySelector('.slider-next');
            const dotsContainer = sliderContainer.querySelector('.slider-dots-container');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar el ancho total del slider y de cada slide
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slide => {
                slide.style.width = `${100 / slides.length}%`;
            });
            
            // Crear puntos indicadores
            dotsContainer.innerHTML = ''; // Limpiar contenedor de puntos existentes
            
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    showSlide(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
                dotsContainer.appendChild(dot);
            });
            
            const dots = dotsContainer.querySelectorAll('.dot');
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                
                // Actualizar puntos activos
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                currentIndex = index;
            }
            
            // Funciones de navegación
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
            
            // Reproducción automática
            function startAutoSlide() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function stopAutoSlide() {
                clearInterval(intervalId);
            }
            
            // Event listeners para botones
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            // Event listeners para detener la reproducción automática al pasar el mouse
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                }
            }
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Slider con Efecto de Fundido
    function initFadeSlider() {
        const sliders = document.querySelectorAll('.tw-slider-fade');
        
        sliders.forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = sliderContainer.querySelector('.slider-prev');
            const nextButton = sliderContainer.querySelector('.slider-next');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar diapositivas iniciales
            slides.forEach((slide, index) => {
                if (index === 0) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            // Función para mostrar una diapositiva con fundido
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
                
                currentIndex = index;
            }
            
            // Funciones de navegación
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
            
            // Reproducción automática
            function startAutoSlide() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function stopAutoSlide() {
                clearInterval(intervalId);
            }
            
            // Event listeners para botones
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            // Event listeners para detener la reproducción automática al pasar el mouse
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Slider con Efecto de Zoom
    function initZoomSlider() {
        const sliders = document.querySelectorAll('.tw-slider-zoom');
        
        sliders.forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = sliderContainer.querySelector('.slider-prev');
            const nextButton = sliderContainer.querySelector('.slider-next');
            
            // Asegurarnos de que cada slide tiene un contenedor para el zoom
            slides.forEach(slide => {
                // Verificar si ya existe un zoom-container en el slide
                if (!slide.querySelector('.zoom-container')) {
                    const img = slide.querySelector('img');
                    if (img) {
                        // Crear el contenedor de zoom y mover la imagen dentro
                        const zoomContainer = document.createElement('div');
                        zoomContainer.classList.add('zoom-container');
                        
                        // Clonar la imagen para mantener sus atributos
                        const imgClone = img.cloneNode(true);
                        
                        // Eliminar la imagen original
                        img.parentNode.removeChild(img);
                        
                        // Agregar la imagen clonada al contenedor de zoom
                        zoomContainer.appendChild(imgClone);
                        
                        // Insertar el contenedor de zoom al principio del slide
                        slide.insertBefore(zoomContainer, slide.firstChild);
                    }
                }
            });
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar el ancho total del slider y de cada slide
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slide => {
                slide.style.width = `${100 / slides.length}%`;
            });
            
            // Marcar la primera diapositiva como activa
            slides[0].classList.add('active');
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                
                // Actualizar clases activas para el efecto de zoom
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
                
                currentIndex = index;
            }
            
            // Funciones de navegación
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
            
            // Reproducción automática
            function startAutoSlide() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function stopAutoSlide() {
                clearInterval(intervalId);
            }
            
            // Event listeners para botones
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            // Event listeners para detener la reproducción automática al pasar el mouse
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                }
            }
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Slider con Miniaturas
    function initThumbsSlider() {
        const sliders = document.querySelectorAll('.tw-slider-thumbs');
        
        sliders.forEach(sliderContainer => {
            // Verificar si el slider está correctamente estructurado
            const mainSlider = sliderContainer.querySelector('.main-slider');
            if (!mainSlider) {
                // Crear la estructura correcta si no existe
                restructureThumbsSlider(sliderContainer);
            }
            
            // Obtener elementos después de posible reestructuración
            const slider = sliderContainer.querySelector('.main-slider .slider-track');
            const slides = slider ? slider.querySelectorAll('.slide') : [];
            const prevButton = sliderContainer.querySelector('.slider-prev');
            const nextButton = sliderContainer.querySelector('.slider-next');
            const thumbs = sliderContainer.querySelectorAll('.thumb');
            
            if (!slider || slides.length === 0) return;
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar el ancho total del slider y de cada slide
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slide => {
                slide.style.width = `${100 / slides.length}%`;
            });
            
            // Activar la primera miniatura
            if (thumbs.length > 0) {
                thumbs[0].classList.add('active');
            }
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                
                // Actualizar miniaturas activas
                thumbs.forEach((thumb, i) => {
                    if (i === index) {
                        thumb.classList.add('active');
                    } else {
                        thumb.classList.remove('active');
                    }
                });
                
                currentIndex = index;
            }
            
            // Funciones de navegación
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
            
            // Reproducción automática
            function startAutoSlide() {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function stopAutoSlide() {
                clearInterval(intervalId);
            }
            
            // Event listeners para botones
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    prevSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                });
            }
            
            // Event listeners para miniaturas
            thumbs.forEach((thumb, index) => {
                thumb.addEventListener('click', () => {
                    showSlide(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
            });
            
            // Event listeners para detener la reproducción automática al pasar el mouse
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                }
            }
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Función para reestructurar el slider con miniaturas si no tiene la estructura correcta
    function restructureThumbsSlider(container) {
        const originalTrack = container.querySelector('.slider-track');
        const originalSlides = originalTrack ? originalTrack.querySelectorAll('.slide') : [];
        
        if (!originalTrack || originalSlides.length === 0) return;
        
        // Crear la estructura principal
        const mainSlider = document.createElement('div');
        mainSlider.classList.add('main-slider');
        
        // Mover el track original al main-slider
        container.insertBefore(mainSlider, originalTrack);
        mainSlider.appendChild(originalTrack);
        
        // Crear el contenedor de miniaturas si no existe
        let thumbsContainer = container.querySelector('.thumbs-container');
        if (!thumbsContainer) {
            thumbsContainer = document.createElement('div');
            thumbsContainer.classList.add('thumbs-container');
            container.appendChild(thumbsContainer);
        }
        
        // Crear miniaturas basadas en las diapositivas
        originalSlides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                const thumb = document.createElement('div');
                thumb.classList.add('thumb');
                if (index === 0) thumb.classList.add('active');
                
                const thumbImg = document.createElement('img');
                thumbImg.src = img.src;
                thumbImg.alt = img.alt || `Miniatura ${index + 1}`;
                
                thumb.appendChild(thumbImg);
                thumbsContainer.appendChild(thumb);
            }
        });
        
        // Mover los botones de navegación al main-slider si están en el contenedor principal
        const prevButton = container.querySelector('.slider-prev');
        const nextButton = container.querySelector('.slider-next');
        
        if (prevButton && !mainSlider.contains(prevButton)) {
            mainSlider.appendChild(prevButton);
        }
        
        if (nextButton && !mainSlider.contains(nextButton)) {
            mainSlider.appendChild(nextButton);
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar todos los sliders mini
  const sliders = document.querySelectorAll(".tw-slider-mini")

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll("li")
    const prevBtn = slider.querySelector(".tw-slider-mini-prev")
    const nextBtn = slider.querySelector(".tw-slider-mini-next")
    let currentIndex = 0

    // Función para mostrar un slide específico
    function showSlide(index) {
      // Ocultar todos los slides
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })

      // Mostrar el slide actual
      slides[index].classList.add("active")
    }

    // Evento para el botón anterior
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length
      showSlide(currentIndex)
    })

    // Evento para el botón siguiente
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length
      showSlide(currentIndex)
    })

    // Iniciar autoplay (opcional)
    let autoplay = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length
      showSlide(currentIndex)
    }, 2000)

    // Detener autoplay al pasar el mouse (opcional)
    slider.addEventListener("mouseenter", () => {
      clearInterval(autoplay)
    })

    // Reanudar autoplay al quitar el mouse (opcional)
    slider.addEventListener("mouseleave", () => {
      autoplay = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length
        showSlide(currentIndex)
      }, 5000)
    })
  })
})


/* FIN SLIDERS */

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.navbar-nav');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.navbar-nav a').forEach(n => n.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navMenu.classList.remove('active');
    }));
});



document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.navbar-nav');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.navbar-nav a').forEach(n => n.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navMenu.classList.remove('active');
    }));
});

/*NAVBAR*/
document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.getElementById('navBtn');
    const navLinks = document.getElementById('navLinks');

    navBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

/*CONTADOR*/
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date().getTime() + 8 * 60 * 60 * 1000;
  
    function update() {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "00:00:00";
      }
    }
  
    update();
    const interval = setInterval(update, 1000);
  }
  

  document.addEventListener('DOMContentLoaded', updateCountdown);