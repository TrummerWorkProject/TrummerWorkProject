
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
        const sliders = document.querySelectorAll('.slider-basic');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = slidercontenedor.querySelector('.slider-prev');
            const nextButton = slidercontenedor.querySelector('.slider-next');
            
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
        const sliders = document.querySelectorAll('.slider-dots');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = slidercontenedor.querySelector('.slider-prev');
            const nextButton = slidercontenedor.querySelector('.slider-next');
            const dotscontenedor = slidercontenedor.querySelector('.slider-dots-contenedor');
            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 10000;
            
            // Configurar el ancho total del slider y de cada slide
            slider.style.width = `${slides.length * 100}%`;
            
            slides.forEach(slide => {
                slide.style.width = `${100 / slides.length}%`;
            });
            
            // Crear puntos indicadores
            dotscontenedor.innerHTML = ''; // Limpiar contenedor de puntos existentes
            
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    showSlide(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
                dotscontenedor.appendChild(dot);
            });
            
            const dots = dotscontenedor.querySelectorAll('.dot');
            
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
        const sliders = document.querySelectorAll('.slider-fade');
        
        sliders.forEach(slidercontenedor => {
            const slider = slidercontenedor.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = slidercontenedor.querySelector('.slider-prev');
            const nextButton = slidercontenedor.querySelector('.slider-next');
            
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
            const slider = slidercontenedor.querySelector('.slider-track');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = slidercontenedor.querySelector('.slider-prev');
            const nextButton = slidercontenedor.querySelector('.slider-next');
            
            // Asegurarnos de que cada slide tiene un contenedor para el zoom
            slides.forEach(slide => {
                // Verificar si ya existe un zoom-contenedor en el slide
                if (!slide.querySelector('.zoom-contenedor')) {
                    const img = slide.querySelector('img');
                    if (img) {
                        // Crear el contenedor de zoom y mover la imagen dentro
                        const zoomcontenedor = document.createElement('div');
                        zoomcontenedor.classList.add('zoom-contenedor');
                        
                        // Clonar la imagen para mantener sus atributos
                        const imgClone = img.cloneNode(true);
                        
                        // Eliminar la imagen original
                        img.parentNode.removeChild(img);
                        
                        // Agregar la imagen clonada al contenedor de zoom
                        zoomcontenedor.appendChild(imgClone);
                        
                        // Insertar el contenedor de zoom al principio del slide
                        slide.insertBefore(zoomcontenedor, slide.firstChild);
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
  const sliders = document.querySelectorAll(".slider-mini");

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("li"));
    if (!slides.length) return;

    const prevBtn = slider.querySelector(".slider-mini-prev");
    const nextBtn = slider.querySelector(".slider-mini-next");

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

/* NAVBAR — Cierre de menú al hacer clic en un enlace de navegación */
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu  = document.querySelector('.navbar-nav');

    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon?.classList.remove('active');
            navMenu?.classList.remove('active');
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