// a) Calcular hipotenusa
function hipotenusa(altura, base) {
    return Math.sqrt(Math.pow(altura, 2) + Math.pow(base, 2));
}

// b) Área de un cuadrado
function ACUADRA(lado) {
    return lado * lado;
}

// c) Área de cualquier triángulo (Fórmula de Herón)
function ATRIG(L1, L2, L3) {
    // Validación: La suma de dos lados debe ser mayor al tercero
    if ((L1 + L2 > L3) && (L1 + L3 > L2) && (L2 + L3 > L1)) {
        let p = (L1 + L2 + L3) / 2;
        let ar = Math.sqrt(p * (p - L1) * (p - L2) * (p - L3));
        return ar;
    } else {
        return -1;
    }
}

// d) Promedio de un vector
function calcularPromedio(vector) {
    if (vector.length === 0) return 0;
    let suma = vector.reduce((acc, num) => acc + num, 0);
    return suma / vector.length;
}

// e) Valor máximo de un vector
function calcularMaximo(vector) {
    if (vector.length === 0) return 0;
    return Math.max(...vector);
}