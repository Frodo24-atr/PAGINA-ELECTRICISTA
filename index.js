document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('toggle-menu');
    const menuItems = document.querySelectorAll('.navbar-list li a');
  
    menuItems.forEach(item => {
      item.addEventListener('click', function (event) {
        // Obtener el href del enlace
        const targetId = this.getAttribute('href');
  
        if (targetId === '#') {
          // Si el href es '#', evitar el comportamiento por defecto y desplazarse al inicio
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else if (targetId.startsWith('#')) {
          // Prevenir el comportamiento por defecto del enlace
          event.preventDefault();
          
          // Desplazarse a la sección correspondiente
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        }
  
        // Cerrar el menú desmarcando el checkbox
        menuCheckbox.checked = false;
      });
    });
  });
  
