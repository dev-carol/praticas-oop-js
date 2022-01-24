let pessoa = {
    nome: "Ana",
    idade: 18,
    falar: function(){
        console.log("Oi, meu nome é Ana");
     },
     caracteristicas: {
         cnh: true,
         carteira: ['dinheiro', 'documento', 'moeda'],
         modeloDeCarta: 'A'
     }     
}


console.log(pessoa.caracteristicas)

console.log(pessoa.caracteristicas.carteira[1]);