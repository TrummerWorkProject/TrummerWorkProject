
document.addEventListener('DOMContentLoaded', function() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        
    }
    
    // Slider Básico
    function initBasicSlider() {
        const sliders = document.querySelectorAll('.slider-basico');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-pista');
            if (!slider) return;
            const slides = slider.querySelectorAll('.slider-diapositiva');
            if (!slides.length) return;
            const prevButton = slidercontenedor.querySelector('.slider-anterior');
            const nextButton = slidercontenedor.querySelector('.slider-siguiente');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Ajusta la pista y el ancho de cada diapositiva.
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slideElement => {
                slideElement.style.width = `${100 / slides.length}%`;
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
                if (reduceMotion) return;
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
            slidercontenedor.addEventListener('mouseenter', stopAutoSlide);
            slidercontenedor.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            slidercontenedor.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            slidercontenedor.addEventListener('touchend', function(e) {
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
        const sliders = document.querySelectorAll('.slider-con-indicadores');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-pista');
            if (!slider) return;
            const slides = slider.querySelectorAll('.slider-diapositiva');
            if (!slides.length) return;
            const prevButton = slidercontenedor.querySelector('.slider-anterior');
            const nextButton = slidercontenedor.querySelector('.slider-siguiente');
            const dotscontenedor = slidercontenedor.querySelector('.slider-indicadores');
            if (!dotscontenedor) return;
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 10000;
            
            // Ajusta la pista y el ancho de cada diapositiva.
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slideElement => {
                slideElement.style.width = `${100 / slides.length}%`;
            });
            
            // Crear puntos indicadores
            dotscontenedor.innerHTML = ''; // Limpiar contenedor de puntos existentes
            
            slides.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.classList.add('slider-indicador');
                indicator.type = 'button';
                indicator.setAttribute('aria-label', `Mostrar diapositiva ${index + 1}`);
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => {
                    showSlide(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
                dotscontenedor.appendChild(indicator);
            });
            
            const dots = dotscontenedor.querySelectorAll('.slider-indicador');
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                
                // Actualizar puntos activos
                dots.forEach((indicator, i) => {
                    if (i === index) {
                        indicator.classList.add('active');
                        indicator.setAttribute('aria-current', 'true');
                    } else {
                        indicator.classList.remove('active');
                        indicator.removeAttribute('aria-current');
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
                if (reduceMotion) return;
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
            slidercontenedor.addEventListener('mouseenter', stopAutoSlide);
            slidercontenedor.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            slidercontenedor.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            slidercontenedor.addEventListener('touchend', function(e) {
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
        const sliders = document.querySelectorAll('.slider-fundido');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-pista');
            if (!slider) return;
            const slides = slider.querySelectorAll('.slider-diapositiva');
            if (!slides.length) return;
            const prevButton = slidercontenedor.querySelector('.slider-anterior');
            const nextButton = slidercontenedor.querySelector('.slider-siguiente');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Configurar diapositivas iniciales
            slides.forEach((slideElement, index) => {
                if (index === 0) {
                    slideElement.classList.add('active');
                } else {
                    slideElement.classList.remove('active');
                }
            });
            
            // Función para mostrar una diapositiva con fundido
            function showSlide(index) {
                slides.forEach((slideElement, i) => {
                    if (i === index) {
                        slideElement.classList.add('active');
                    } else {
                        slideElement.classList.remove('active');
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
                if (reduceMotion) return;
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
            slidercontenedor.addEventListener('mouseenter', stopAutoSlide);
            slidercontenedor.addEventListener('mouseleave', startAutoSlide);
            
            // Iniciar el slider
            showSlide(0);
            startAutoSlide();
        });
    }
    
    // Slider con Efecto de Zoom
    function initZoomSlider() {
        const sliders = document.querySelectorAll('.slider-zoom');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-pista');
            if (!slider) return;
            const slides = slider.querySelectorAll('.slider-diapositiva');
            if (!slides.length) return;
            const prevButton = slidercontenedor.querySelector('.slider-anterior');
            const nextButton = slidercontenedor.querySelector('.slider-siguiente');
            
            // Prepara cada diapositiva para aplicar el efecto de zoom.
            slides.forEach(slideElement => {
                // Evita envolver la imagen más de una vez.
                if (!slideElement.querySelector('.slider-zoom-imagen')) {
                    const img = slideElement.querySelector('img');
                    if (img) {
                        // Crear el contenedor de zoom y mover la imagen dentro
                        const zoomcontenedor = document.createElement('div');
                        zoomcontenedor.classList.add('slider-zoom-imagen');
                        
                        // Clonar la imagen para mantener sus atributos
                        const imgClone = img.cloneNode(true);
                        
                        // Eliminar la imagen original
                        img.parentNode.removeChild(img);
                        
                        // Agregar la imagen clonada al contenedor de zoom
                        zoomcontenedor.appendChild(imgClone);
                        
                        // Coloca el contenedor de zoom al inicio de la diapositiva.
                        slideElement.insertBefore(zoomcontenedor, slideElement.firstChild);
                    }
                }
            });
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000;
            
            // Ajusta la pista y el ancho de cada diapositiva.
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slideElement => {
                slideElement.style.width = `${100 / slides.length}%`;
            });
            
            // Marcar la primera diapositiva como activa
            slides[0].classList.add('active');
            
            // Función para mostrar una diapositiva
            function showSlide(index) {
                slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
                
                // Actualizar clases activas para el efecto de zoom
                slides.forEach((slideElement, i) => {
                    if (i === index) {
                        slideElement.classList.add('active');
                    } else {
                        slideElement.classList.remove('active');
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
                if (reduceMotion) return;
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
            slidercontenedor.addEventListener('mouseenter', stopAutoSlide);
            slidercontenedor.addEventListener('mouseleave', startAutoSlide);
            
            // Soporte táctil para deslizar
            let touchStartX = 0;
            let touchEndX = 0;
            
            slidercontenedor.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });
            
            slidercontenedor.addEventListener('touchend', function(e) {
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
    
});


document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sliders = document.querySelectorAll(".slider-compacto");

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("li"));
    if (!slides.length) return;

    const prevBtn = slider.querySelector(".slider-compacto-anterior");
    const nextBtn = slider.querySelector(".slider-compacto-siguiente");

    let currentIndex = slides.findIndex(s => s.classList.contains("active"));
    if (currentIndex < 0) currentIndex = 0;

    let autoplayId = null;
    const AUTOPLAY_MS = 6000;

    function applyZ() {
      slides.forEach((s, i) => {
        s.style.zIndex = s.classList.contains("active") ? "2" : "1";
      });
    }

    function showSlide(index) {
      index = (index + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      currentIndex = index;
      applyZ();
    }

    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }

    function startAutoplay() {
      stopAutoplay();
      if (reduceMotion) return;
      autoplayId = setInterval(nextSlide, AUTOPLAY_MS);
    }

    function stopAutoplay() {
      if (autoplayId) {
        clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    // eventos de botones (si existen)
    if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoplay(); });

    // pausa en hover / touch
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
    slider.addEventListener("touchstart", stopAutoplay, { passive: true });
    slider.addEventListener("touchend", () => setTimeout(startAutoplay, 250), { passive: true });

    // inicializa
    showSlide(currentIndex);
    startAutoplay();
  });
});



/* FIN SLIDERS */

/* Cierra el menú móvil al elegir un destino o pulsar Escape. */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar-toggle').forEach(toggle => {
        const navbar = toggle.closest('.navbar');
        if (!navbar) return;

        navbar.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.checked = false;
            });
        });

        navbar.addEventListener('keydown', event => {
            if (event.key === 'Escape' && toggle.checked) {
                toggle.checked = false;
                toggle.focus();
            }
        });
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
  
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "00:00:00";
      }
    }
  
    update();
    const interval = setInterval(update, 1000);
  }
  

  document.addEventListener('DOMContentLoaded', updateCountdown);

  /* Imprimir COPYRIGHT */
  console.log("===== Este sitio web fue creado con TrummerWork, visita https://trummerwork-project.web.app/ para más información. Gracias por usar TRUMMERWORK. =====")