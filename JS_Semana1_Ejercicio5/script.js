function calcular(){
    const inputEstatura = document.getElementById('estaturaMts');
    const inputPeso = document.getElementById('pesoKg');
    const areaTexto = document.getElementById('resultado');
    const contenedorImg = document.getElementById('contenedor-imagen');

    const peso = parseFloat(inputPeso.value);
    const estatura = parseFloat(inputEstatura.value);

    if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
        areaTexto.value = "Error: Ingrese valores válidos (Ej: 1.70 mts).";
        return;
    }

    const imc = (peso / Math.pow(estatura,2)).toFixed(2);

    let estado = "";
    let imagen = "";

    if(imc <= 15){
        estado = "flaco";
        imagen = "signo/flaco.jpg";
    } else if(imc > 15 && imc <= 22){
        estado = "normal";
        imagen = "signo/normal.jpg";
    } else{
        estado = "gordo";
        imagen = "signo/gordo.jpg";
    }
    areaTexto.value = `Estatura: ${estatura} m\nPeso: ${peso} kg\nIMC: ${imc}\nEstado: ${estado}`;
    contenedorImg.innerHTML = `<img src = "${imagen}" alt = "${estado}" style = "width : 100%;">`;
}