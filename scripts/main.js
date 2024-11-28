document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const welcomeMessage = document.getElementById('welcome-message');

  // Función para mostrar el mensaje de bienvenida con el nombre
  function showWelcomeMessage(userName) {
    // Muestra el mensaje de bienvenida en el encabezado
    welcomeMessage.textContent = `Bienvenido, ${userName}!`;

    // Muestra el header con el mensaje de bienvenida
    header.style.display = 'block';

    // Muestra la bienvenida final en una ventana emergente
    alert(`Bienvenido, ${userName}!`);
  }

  // Función que pide el nombre al usuario
  function askForName() {
    let userName = '';

    // Primera ventana emergente: mensaje general de bienvenida
    alert('¡Bienvenido!');

    // Pedir el nombre al usuario (ventana emergente de prompt)
    while (!userName.trim()) {
      userName = prompt('Por favor, ingresa tu nombre:');
      
      if (userName && userName.trim() !== '') {
        // Si el nombre es válido, muestra la bienvenida
        showWelcomeMessage(userName);
      } else {
        alert('Por favor ingresa un nombre válido.');
      }
    }
  }

  askForName();  // Llama a la función para iniciar el flujo de ventanas emergentes
});
