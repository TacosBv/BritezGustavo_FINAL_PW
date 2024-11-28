// Función para calcular el precio total (precio unitario * cantidad)
function calculateTotalPrice() {
    const price = parseFloat(prompt("Ingrese el precio unitario:"));
    const quantity = parseInt(prompt("Ingrese la cantidad:"));
  
    if (!isNaN(price) && !isNaN(quantity)) {
      const total = price * quantity;
      alert(`El precio total es: ${total.toFixed(2)}`);
    } else {
      alert('Por favor, ingrese valores válidos para el precio y la cantidad.');
    }
  }
  
  // Función para calcular el 30% de un precio
  function calculateThirtyPercent() {
    const price = parseFloat(prompt("Ingrese el precio:"));
  
    if (!isNaN(price)) {
      const percentage = price * 0.30;
      alert(`El 30% del precio es: ${percentage.toFixed(2)}`);
    } else {
      alert('Por favor, ingrese un precio válido.');
    }
  }
  
  // Función para aplicar un 25% de descuento a un precio y multiplicarlo por la cantidad
  function calculateDiscount() {
    const price = parseFloat(prompt("Ingrese el precio unitario:"));
    const quantity = parseInt(prompt("Ingrese la cantidad:"));
  
    if (!isNaN(price) && !isNaN(quantity)) {
      const discountedPrice = price * 0.75;  // Aplicar 25% de descuento
      const total = discountedPrice * quantity;
      alert(`El precio total con 25% de descuento es: ${total.toFixed(2)}`);
    } else {
      alert('Por favor, ingrese valores válidos para el precio y la cantidad.');
    }
  }
  