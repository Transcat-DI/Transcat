import "@styles/lenis.css";
import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Función para animar el scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Iniciar la animación
requestAnimationFrame(raf);

// Función que intercepta el click y usa Lenis para hacer scroll
window.handleScroll = function (event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('data-scroll-to');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Ajustar para el navbar fijo (aproximadamente 70px de altura)
    const offset = 70;
    lenis.scrollTo(targetElement, { offset: -offset });
  }
};

// Si el usuario llega desde una URL con hash (#contacto)
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Esperar un poco para que Lenis esté listo
      setTimeout(() => {
        // Ajustar para el navbar fijo
        const offset = 70;
        lenis.scrollTo(targetElement, { offset: -offset });
      }, 300);
    }
  }
});