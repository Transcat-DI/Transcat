// Script para manejar el desplazamiento suave
function setupSmoothScroll() {
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
          // Desplazarse suavemente al elemento
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupSmoothScroll);

// Como respaldo, también intentar ejecutar inmediatamente si el DOM ya está cargado
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  setupSmoothScroll();
}

// Exportar la función para uso en otros archivos si es necesario
export { setupSmoothScroll };
