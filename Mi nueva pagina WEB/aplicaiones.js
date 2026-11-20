document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener valores
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var mensaje = document.getElementById("mensaje").value;

    // Mostrar resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";

    resultadoDiv.innerHTML = `
        <h3>Datos Ingresados:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;
});