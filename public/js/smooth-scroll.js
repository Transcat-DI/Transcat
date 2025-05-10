// Script mejorado para manejar el desplazamiento suave en todos los navegadores
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los enlaces que apuntan a anclas
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Añadir evento de clic a cada enlace
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevenir el comportamiento predeterminado
      e.preventDefault();
      
      // Obtener el destino del enlace
      const targetId = this.getAttribute('href');
      
      // Si el destino existe en la página
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Obtener la posición actual de desplazamiento
          const currentPosition = window.scrollY;
          
          // Obtener la posición del elemento objetivo
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          // Calcular la distancia a desplazar
          const distance = targetPosition - currentPosition;
          
          // Comprobar si el navegador soporta scrollBehavior
          const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
          
          if (supportsNativeSmoothScroll) {
            // Usar scrollTo nativo con comportamiento suave
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          } else {
            // Implementación de respaldo para navegadores que no soportan scroll suave nativo (como Firefox)
            smoothScrollTo(targetPosition, 500); // 500ms de duración
          }
        }
      }
    });
  });
});

// Función de respaldo para scroll suave en navegadores que no lo soportan nativamente
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}
