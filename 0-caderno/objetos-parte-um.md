## Propriedades

As propriedades são as características dos objetos, podemos também iniciar um objeto com várias propriedades e acessá-las para resgatar os seus valores

```jsx
let carro = {
 portas: 4,
 cor: 'cinza'
}

console.log(carro.portas);
console.log(carro['cor]);
```

Para acessarmos as propriedades, podemos utilizar “.” ponto, que é uma forma comum e mais prático para conseguir pegar alguma propriedade. Ou com um array

### Tipos de dados e propriedades

As propriedades aceitam qualquer tipo de dados do Js: Booleanos, numbers, strings e arrays

```jsx
let carro = {
portas: 4,
cor: "verde",
opicionais: [
"testo solar", "blindagem", "ar condicionado"
],
 revisado: true
}

console.log(carro.portas);
console.log(carro["carro"]);
console.log(carro.revisado);
console.log(carro.opicionais);
```

## Acessando a propriedade por variável

- Podemos acessar uma propriedade por meio de uma variável;
- É importante que a variável contenha o texto da propriedade

```jsx
const robo = {
 bracos: 4,
 pernas: 2,
 arma: 'metralhadora',
 armaEspecial: 'foguete' 

}

let a = 'arma';

console.log(robo[a])
```

---

## Criando métodos

Os métodos são as ações dos objetos;

Podemos ter métodos de resgatar propriedades do objeto ou modificar o valor delas, por exemplo:

```jsx
const robo = {
 bracos: 4,
 pernas: 2,
 arma: 'metralhadora',
 armaEspecial: 'foguete',
  atirar: function (){
console.log('pew pew pew');
   }
}

robo.atirar();
```

### Criando mais métodos

- Os métodos podem realizar qualquer operação que uma função realiza;

```jsx
let pessoa = {
nome: 'Ana',
getNome: function(){
 console.log("O nome é" + this.nome);
},

setNome: function(novoNome){
 this.nome = novoNome;
}

}

pessoa.getNome();
pessoa.setNome('teste');
pessoa.getNome();
```

---

## Objetos dentro de objetos

- Como o objeto é também um tipo de dado, podemos ter objetos com objetos dentro;
- Utilizando como um array associativo, por exemplo:

```jsx
let pessoa = {
nome: 'Ana',
caracteristicas: {
 olhos: 'verdes',
 cabelo: 'castanhos',
 brincos: false,
 oculos: true
  }
}

console.log(pessoa.caracteristicas.cabelo);
```

### Criando props e metodos em objs existentes

- O objeto não é imutável, ele pode ganhar propriedades e métodos ao longo do código;

```jsx
let pessoa = {

nome: 'Ana',
}

pessoa.idade = 26;

pessoa.falar = function(){
	console.log('Olá');
}

console.log(pessoa);
```

---

## Deletando propriedades

- Como é possível adicionar, também podemos deletar as propriedades dos objetos ;

```jsx
let pessoa = {
nome: 'Bayner',

}

pessoa.idade = 29;

pessoa.falar = function (){
	console.log('Olá');
}

delete pessoa.idade;
delete pessoa.falar;

console.log(pessoa);
```

---