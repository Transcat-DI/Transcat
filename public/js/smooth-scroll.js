/**
 * Script mejorado para manejar el desplazamiento suave en todos los navegadores y entornos
 * Compatible con Firefox, Chrome, Edge y Safari
 * Funciona tanto en desarrollo como en producción
 */

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Función para manejar el scroll suave
  function handleSmoothScroll(e) {
    // Obtener el destino del enlace
    const href = this.getAttribute('href');
    
    // Solo procesar enlaces con anclas
    if (href && href.startsWith('#')) {
      // Prevenir el comportamiento predeterminado del navegador
      e.preventDefault();
      
      // Obtener el ID del elemento objetivo
      const targetId = href;
      
      // Buscar el elemento objetivo en el DOM
      const targetElement = document.querySelector(targetId);
      
      // Si el elemento existe, realizar el scroll
      if (targetElement) {
        // Obtener la posición actual del scroll
        const startY = window.pageYOffset;
        
        // Calcular la posición del elemento objetivo
        const targetY = targetElement.getBoundingClientRect().top + startY;
        
        // Ajustar para el navbar fijo (aproximadamente 80px)
        const offset = 80;
        const targetPosition = targetY - offset;
        
        // Comprobar si el navegador soporta scrollBehavior
        const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        
        if (supportsNativeSmoothScroll) {
          // Usar el método nativo de scroll suave
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          // Implementación personalizada para navegadores que no soportan scroll suave
          smoothScrollPolyfill(targetPosition, 500);
        }
      }
    }
  }
  
  // Función de respaldo para navegadores sin soporte nativo
  function smoothScrollPolyfill(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Función de easing para un movimiento más natural
      const easing = function(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      window.scrollTo(0, startPosition + distance * easing(progress));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    
    requestAnimationFrame(step);
  }
  
  // Aplicar el evento de clic a todos los enlaces internos
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', handleSmoothScroll);
  });
  
  // También aplicar a los enlaces del menú de navegación
  const navLinks = document.querySelectorAll('.navbar a, nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes('#')) {
      link.addEventListener('click', handleSmoothScroll);
    }
  });
});
