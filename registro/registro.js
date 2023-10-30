

document.getElementById("formulario-registro").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;


    console.log("Dni:"+ dni);
    console.log("Nombre:"+ nombre);
    console.log("Apellido:"+ apellido);
    console.log("Correo:"+ correo);
    console.log("Password:"+ password);


    var mensaje = document.getElementById("mensaje-registro");
    mensaje.textContent = "Registro Exitoso"

});






