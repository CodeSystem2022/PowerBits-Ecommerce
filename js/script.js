// Se obtienen referencias a elementos HTML mediante sus IDs y clases.
const btnSingIn = document.getElementById("sign-in"), // Botón para iniciar sesión.
      btnSingUp = document.getElementById("sign-up"), // Botón para registrarse.
      formRegister = document.querySelector(".register"), // Formulario de registro.
      formLogin = document.querySelector(".login"); // Formulario de inicio de sesión.

// Agrega un evento al botón 'Iniciar sesión' para cambiar de formularios.
btnSingIn.addEventListener("click", e => {

    // Oculta el formulario de registro y muestra el formulario de inicio de sesión.
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

// Agrega un evento al botón 'Registrarse' para cambiar de formularios.
btnSingUp.addEventListener("click", e => {

    // Oculta el formulario de inicio de sesión y muestra el formulario de registro.
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})