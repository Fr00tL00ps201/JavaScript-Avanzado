function calcular(){
    const a = parseFloat(document.getElementById('lado1').value);
    const b = parseFloat(document.getElementById('lado2').value);
    const c = parseFloat(document.getElementById('lado3').value);
    const txtRes = document.getElementById('resultado');
    const cajaImg = document.getElementById('contenedor-imagen');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        txtRes.value = "Error: Ingrese valores válidos mayores a 0.";
        return;
    }

    if((a + b > c) && (a + c > b) && (b + c > a)){
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);

        let tipo = "";
        let imagen = "";

        if(a === b && b === c){
            tipo = "Equilátero";
            imagen = "signo/equilatero.jpg";
        } else if(a === b || a === c || b === c){
            tipo = "Isósceles";
            imagen = "signo/isoceles.jpg";
        } else {
            tipo = "Escaleno";
            imagen = "signo/escaleno.jpg";
        }

        txtRes.value = `Tipo: ${tipo}\nÁrea: ${area} u²\nPerímetro: ${(a + b + c).toFixed(2)}`;
        cajaImg.innerHTML = `<img src="${imagen}" alt="${tipo}" style="width:100%;">`;
    } else{
        txtRes.value = "Error: Los lados ingresados no forman un triángulo.";
        cajaImg.innerHTML = "";
    }
}