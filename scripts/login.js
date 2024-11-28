document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message'); // Mensaje de éxito

  console.log('Formulario enviado', { username, password });

  if (username === 'USER' && password === 'PASS') {
    console.log('Credenciales correctas');
  
    // Inicializa EmailJS
    emailjs.init("30PzRh_uThUa6RqC-");

    // Llamada para enviar el correo
    sendLoginNotification(username);

    // Guardar el estado de inicio de sesión exitoso en localStorage
    localStorage.setItem('loggedIn', true);

    // Mostrar el mensaje de éxito y ocultar el de error
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';

    // Redirección después de 1 segundo
    setTimeout(function() {
      window.location.href = 'main.html';
    }, 1000);

  } else {
    console.log('Credenciales incorrectas');
    // Mostrar el mensaje de error y ocultar el de éxito
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
});

function sendLoginNotification(user) {
  // Verifica que emailjs está inicializado correctamente
  console.log('Enviando notificación de inicio de sesión...');

  // Aquí estamos enviando el correo utilizando EmailJS
  emailjs.send("service_eb5hbwf", "template_e64mqmu", {
    user: user,
    login_time: new Date().toLocaleString()
  })
  .then(function(response) {
    console.log('Correo de notificación enviado.', response);
  })
  .catch(function(error) {
    console.error('Error al enviar el correo:', error);
    alert('Hubo un error al enviar el correo. Verifica la configuración de EmailJS.');
  });
}
