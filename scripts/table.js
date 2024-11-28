// Funciones de la tabla

// Función para calcular el salario
function calculateSalary() {
    const salary = prompt("Ingrese el salario:");
    const discount = prompt("Ingrese el descuento:");
  
    if (salary && discount && !isNaN(salary) && !isNaN(discount)) {
      const total = salary - discount;
      alert(`El salario total después del descuento es: ${total}`);
    } else {
      alert('Por favor, ingrese valores válidos para el salario y el descuento.');
    }
  }
  
  // Función para calcular el total de puntos
  function calculatePoints() {
    const points1 = parseFloat(prompt("Ingrese el primer puntaje:"));
    const points2 = parseFloat(prompt("Ingrese el segundo puntaje:"));
    const points3 = parseFloat(prompt("Ingrese el tercer puntaje:"));
  
    if (!isNaN(points1) && !isNaN(points2) && !isNaN(points3)) {
      const total = points1 + points2 + points3;
      alert(`El total de puntos es: ${total}`);
    } else {
      alert('Por favor, ingrese puntajes válidos (números).');
    }
  }
  
  // Función para calcular el porcentaje de un puntaje
  function calculatePercentage() {
    const score = parseFloat(prompt("Ingrese el puntaje:"));
  
    if (!isNaN(score)) {
      const percentage = score * 0.15;
      alert(`El 15% del puntaje es: ${percentage}`);
    } else {
      alert('Por favor, ingrese un puntaje válido.');
    }
  }