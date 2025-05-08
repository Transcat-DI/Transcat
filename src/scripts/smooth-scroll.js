// Script para manejar el desplazamiento suave
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
          // Desplazarse suavemente al elemento
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
