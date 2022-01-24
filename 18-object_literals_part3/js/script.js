let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let tipo = "tipo_de_"

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    [tipo+"carro"]: "Sedan",
    acelerar(){
        console.log("VRUMMMM!")
    }
};

let barco = {
    [tipo+"barco"]: "Lancha"
}


 let aviao = {
    [tipo+"aviao"]: "Boeing"
 }

console.log(carro.tipo_de_carro)
console.log(barco.tipo_de_barco)
console.log(aviao.tipo_de_aviao)