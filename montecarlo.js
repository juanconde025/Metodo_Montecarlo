function calcular(coordenadas) {
    let dentrodelcirculo = 0;

    for (let i = 0; i < coordenadas; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1; 

        if (x * x + y * y <= 1) {
            dentrodelcirculo++;
        }
    }

    let pi= 4 * (dentrodelcirculo / coordenadas);
    return pi;
}

let coordenadas = 1000000;  
let pi = calcular(coordenadas);
console.log("valorde PI:", pi);
