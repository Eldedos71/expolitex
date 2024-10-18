document.getElementById("registroUsuario")
  .addEventListener("submit", function (event) {
    var contraseña = document.getElementById("contraseñaUsuario").value;
    var confirmarContraseña = document.getElementById(
      "confirmarContraseñaUsuario"
    ).value;
    var errorMessage = document.getElementById("error");

    if (contraseña !== confirmarContraseña) {
      errorMessage.textContent = "Las contraseñas no coinciden";
      event.preventDefault();
    } else {
      errorMessage.textContent = "";
    }
  });
