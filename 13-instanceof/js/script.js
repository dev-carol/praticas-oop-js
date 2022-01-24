function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto,
    }
}

    let laranjeira = criarArvore('Laranjeira', true);

  

  function Heroi(nome,classe){
      this.nome = nome;
      this.classe = classe;
  }

  let jaspion = new Heroi ('Jaspion', 'robô')



  let obj = {
      teste:' teste',

  }

  console.log(laranjeira instanceof criarArvore); //false: pq a função não é um objeto
  console.log(laranjeira instanceof Object); //True: Pq a função está retornando um objeto
  console.log( jaspion instanceof Heroi); // true: Pq está criando um objeto novo (classe)
  console.log(obj instanceof Object);

  let array = [

  ];

  console.log(array instanceof Array);

