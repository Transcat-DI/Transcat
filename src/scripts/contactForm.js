// Script para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const form = this;
      const formData = new FormData(form);
      const formStatus = document.getElementById('form-status');
      const sendingMessage = document.getElementById('sending-message');
      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');
      const submitButton = form.querySelector('button[type="submit"]');
      
      // Mostrar mensaje de enviando
      if (formStatus) formStatus.classList.remove('hidden');
      if (sendingMessage) sendingMessage.classList.remove('hidden');
      if (successMessage) successMessage.classList.add('hidden');
      if (errorMessage) errorMessage.classList.add('hidden');
      if (submitButton) submitButton.disabled = true;
      
      // Enviar el formulario
      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (sendingMessage) sendingMessage.classList.add('hidden');
        
        if (response.ok) {
          // Éxito
          form.reset();
          if (successMessage) successMessage.classList.remove('hidden');
          console.log('Formulario enviado con éxito');
          
          // Registrar el éxito en la consola para depuración
          console.log('Respuesta del servidor:', response);
          
          // Mostrar un mensaje en la consola para confirmar que el formulario se envió
          console.log('%cEl formulario se ha enviado correctamente', 'color: green; font-weight: bold');
          console.log('El correo debería llegar a carmen_consta@yahoo.com en breve');
        } else {
          // Error
          if (errorMessage) errorMessage.classList.remove('hidden');
          console.error('Error al enviar el formulario');
          
          // Registrar el error en la consola para depuración
          console.error('Error en la respuesta del servidor:', response);
          response.text().then(text => {
            console.error('Contenido de la respuesta:', text);
          });
        }
      })
      .catch(error => {
        // Error de red
        if (sendingMessage) sendingMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.remove('hidden');
        console.error('Error de red:', error);
      })
      .finally(() => {
        if (submitButton) submitButton.disabled = false;
      });
    });
  }
});
