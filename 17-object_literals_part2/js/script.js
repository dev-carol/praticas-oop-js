let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    acelerar(){
        console.log("VRUMMMM!")
    }
};

console.log(carro);

console.log(carro.rodas);
carro.acelerar();