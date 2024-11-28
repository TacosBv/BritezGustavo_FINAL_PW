document.addEventListener('DOMContentLoaded', function() {
    // Aquí va todo tu código JavaScript que interactúa con el DOM
  
    // Formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional
      
      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();
  
      // Inicializar EmailJS
      emailjs.init("30PzRh_uThUa6RqC-");
  
      // Enviar correo con los datos del formulario
      emailjs.send("service_eb5hbwf", "template_e64mqmu", {
        user: "Usuario de prueba",  // Cambiar esto por el nombre de usuario si lo tienes
        login_time: new Date().toLocaleString(),
        name: name,                 // Nombre del usuario
        age: age                    // Edad del usuario
      })
      .then(() => {
        alert('Correo enviado correctamente.');
      })
      .catch(error => {
        alert('Error al enviar el correo.');
        console.error('Error:', error);
      });
    });
  
    // Función para cargar imágenes
    function loadMemes() {
      fetch('https://meme-api.com/gimme/6')  // Esta URL devuelve 6 memes aleatorios
        .then(response => response.json())
        .then(memes => {
          const apiContent = document.getElementById('api-content');
          apiContent.innerHTML = '';  // Limpia el contenido previo
    
          memes.memes.forEach(meme => {
            const imgElement = document.createElement('img');
            imgElement.src = meme.url;  // La URL de la imagen del meme
            imgElement.alt = meme.title;
            imgElement.style.width = '200px';
            imgElement.style.margin = '10px';
            apiContent.appendChild(imgElement);
          });
        })
        .catch(error => console.error('Error al cargar memes:', error));
    }
    
  
    // Función para obtener chistes
    function fetchJoke() {
      fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
        .then(response => response.json())
        .then(joke => {
          const apiContent = document.getElementById('api-content');
          apiContent.innerHTML = ''; // Limpiar contenido previo
  
          // Mostrar el chiste dependiendo de su tipo
          if (joke.type === 'single') {
            // Chiste simple (sin pregunta/respuesta)
            apiContent.innerHTML = `<p>${joke.joke}</p>`;
          } else if (joke.type === 'twopart') {
            // Chiste de tipo pregunta/respuesta
            apiContent.innerHTML = `<p><strong>${joke.setup}</strong></p><p>${joke.delivery}</p>`;
          } else {
            apiContent.innerHTML = `<p>No se pudo obtener un chiste.</p>`;
          }
        })
        .catch(error => console.error('Error al obtener chiste:', error));
    }
  
    // Asignar los eventos de clic a los botones
    document.getElementById('load-images-btn').addEventListener('click', loadImages);
    document.getElementById('fetch-joke-btn').addEventListener('click', fetchJoke);
  
  });
  