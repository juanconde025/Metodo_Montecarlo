function calcularPI(numPuntos) {
    let puntosDentroDelCirculo = 0;

    for (let i = 0; i < numPuntos; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1; 

        if (x * x + y * y <= 1) {
            puntosDentroDelCirculo++;
        }
    }

    let piEstimado = 4 * (puntosDentroDelCirculo / numPuntos);
    return piEstimado;
}

let numPuntos = 1000000;  
let pi = calcularPI(numPuntos);
console.log("Valor estimado de PI:", pi);
