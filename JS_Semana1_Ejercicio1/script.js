function procesar() {
    const nombreInput = document.getElementById('nombre');
    const anioInput = document.getElementById('anio');
    const textRes = document.getElementById('resultado');
    const imgContainer = document.getElementById('contenedor-imagen');

    const nombre = nombreInput.value;
    const valorCapturado = anioInput.value;
    const anioNacimiento = parseInt(valorCapturado);

    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    if (!isNaN(edad) && edad >= 0) {
        let categoria = "";
        let imagen = "";

        if (edad <= 5) {
            categoria = "bebe";
            imagen = "signo/bebe.jpg";
        } else if (edad <= 12) {
            categoria = "nino";
            imagen = "signo/nino.jpg";
        } else if (edad < 18) {
            categoria = "adolecente";
            imagen = "signo/adolescente.jpg";
        } else if (edad < 25) {
            categoria = "joven";
            imagen = "signo/joven.jpg";
        } else {
            categoria = "adulto";
            imagen = "signo/adulto.jpg";
        }

        textRes.value = `Nombre: ${nombre}\nEdad: ${edad} años\nCategoría: ${categoria}`;
        
        imgContainer.innerHTML = `<img src="${imagen}" alt="${categoria}" style="width:100%;">`;

    } else {
        textRes.value = "Error: Año de nacimiento inválido (" + valorCapturado + ")";
    }
}