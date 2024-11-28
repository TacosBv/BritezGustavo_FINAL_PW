// scripts/form.js

// Evento para manejar el envío del formulario
document.getElementById('employee-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evitar el envío tradicional del formulario

  const name = document.getElementById('name').value.trim();
  const grade = document.getElementById('grade').value.trim();
  const message = document.getElementById('message').value.trim();

  // Inicializar EmailJS
  emailjs.init("30PzRh_uThUa6RqC-");

  // Enviar correo con EmailJS usando la plantilla configurada
  emailjs.send("service_eb5hbwf", "template_8e66mpl", {
    user: name,              // Nombre y Apellido
    grade: grade,            // Calificación
    observation: message     // Observación sobre el empleado
  })
  .then(() => {
    alert('Formulario enviado correctamente.');
  })
  .catch(error => {
    alert('Error al enviar el formulario.');
    console.error('Error:', error);
  });
});
