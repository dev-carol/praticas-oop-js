function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function(){
        console.log("Atirou a " + this.arma);
    };
}


let ninja1 = new Ninja('Naruto', 'shuriken');

console.log(ninja1.nome);

ninja1.atirarArma();

let ninja2 = new Ninja('Sasuke', 'kunai');

console.log(ninja2.nome);

ninja2.atirarArma();