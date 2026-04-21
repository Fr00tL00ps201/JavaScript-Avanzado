function calcular(){
    const selCurso = document.getElementById('curso');
    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const inputNota3 = document.getElementById('nota3');
    const txtRes = document.getElementById('resultado');
    const cajaImg = document.getElementById('contenedor-imagen');

    const cursoNombre = selCurso.value;
    const n1 = parseFloat(inputNota1.value);
    const n2 = parseFloat(inputNota2.value);
    const n3 = parseFloat(inputNota3.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 < 0 || n2 < 0 || n3 < 0 || n1 > 20 || n2 > 20 || n3 > 20) {
        txtRes.value = "Error: Por favor ingrese notas válidas (entre 0 y 20) en todos los campos.";
        cajaImg.innerHTML = "";
        return;
    }

    const promedio = ((n1 + n2 + n3)/3).toFixed(1);

    let observacion = "";
    let imagen = "";

    if(promedio >= 12){
        observacion = "APROBADO";
        imagen = "imagen/feliz.jpg";
    }else{
        observacion = "DESAPROBADO";
        imagen = "imagen/triste.jpg";
    }

    txtRes.value = "Curso: " + cursoNombre + "\n" +
                   "--------------------\n" +
                   "Nota 1: " + n1 + "\n" +
                   "Nota 2: " + n2 + "\n" +
                   "Nota 3: " + n3 + "\n" +
                   "--------------------\n" +
                   "Promedio Final: " + promedio + "\n" +
                   "Observación: " + observacion;

    cajaImg.innerHTML = `<img src="${imagen}" alt="${observacion}" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; margin: 0 auto;">`;
}