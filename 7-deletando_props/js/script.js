let carro ={
    tipo: "SUV",
    ligar: function(){
        console.log('ligou');
    }
}


console.log(carro.tipo);

delete carro.tipo;
delete carro.ligar;

console.log(carro.tipo);
console.log(carro.ligar);