let cadastro = {
    name: "Ana",
    falar: function(){
        console.log("Oi, meu nome é Ana")
    }

}

console.log(cadastro)
cadastro.falar();

let pessoa = {
    nome: "Gabriel",
    idade: 15,
    estudante: true,
    materia:'matematica',
    apresentacao: function(){
        console.log('Oi, meu nome é Gabriel' )
    },

    aniversario(){
        this.idade +=1;
    },
    dizerIdade(){
        console.log("A minha idade é " + this.idade)
    },
    podeDirigir: function(){
        if(this.idade >= 18){
            console.log("Autorizado! Pode dirigir");
        }  else{
            console.log("Infelizmente ainda não pode dirigir")
        }
    },
    estaEstudando: function(){
        if(this.estudante === true) {
            console.log("Você é estudante")
        }else {
            console.log("Você não é estudante")
       }
    },
    materia(){
     console.log("Estou estudanto: " + this.materia);
    }
  
}

pessoa.apresentacao();
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
pessoa.dizerIdade();
pessoa.podeDirigir();
pessoa.estaEstudando();
pessoa.materia();

let calculadora = {
    numeros: 0,
    somar: function(a,b){
        this.numeros =  a +b;
    }
}

calculadora.somar(5,5);
console.log(calculadora.numeros);