document
  .getElementById("formularioIniciodesesión")
  .addEventListener("submit", function (event) {
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contraseñaUsuario = document.getElementById("contraseñaUsuario").value;
    var errorMessage = document.getElementById("errorr");

    // Validar que el nombre de usuario sea 'admin' y la contraseña sea '1234'
    if (nombreUsuario === "admin" && contraseñaUsuario === "1234") {
      // Redirigir a la siguiente página
      window.location.href = "pagina1.html"; // Cambia 'paginaSiguiente.html' por la página que desees mostrar
    } else {
      // Mostrar mensaje de error si no coincide
      errorMessage.textContent = "Nombre de usuario o contraseña incorrectos";
      event.preventDefault(); // Detener el envío del formulario
    }
  });
