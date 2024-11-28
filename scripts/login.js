document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageContainer = document.getElementById('login-message');

  if (username === 'USER' && password === 'PASS') {
    // Mensaje de éxito (en verde)
    messageContainer.style.color = 'green';
    messageContainer.textContent = 'Inicio de sesión exitoso. Redirigiendo...';

    // Inicializa EmailJS
    emailjs.init("30PzRh_uThUa6RqC-");

    // Llamada para enviar el correo
    sendLoginNotification(username);

    // Redirección después de 1.5 segundos
    setTimeout(function() {
      window.location.href = 'main.html';
    }, 1500);

  } else {
    // Mensaje de error (en rojo)
    messageContainer.style.color = 'red';
    messageContainer.textContent = 'Usuario o contraseña incorrecta.';
  }
});

function sendLoginNotification(user) {
  console.log('Enviando notificación de inicio de sesión...');

  emailjs.send("service_eb5hbwf", "template_e64mqmu", {
    user: user,
    login_time: new Date().toLocaleString()
  })
  .then(function(response) {
    console.log('Correo de notificación enviado.', response);
  })
  .catch(function(error) {
    console.error('Error al enviar el correo:', error);
  });
}
