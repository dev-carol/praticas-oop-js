## Utilizando o this no objeto

 

- A palavra resevada this dentro de um objeto, vai se referir a própria instância;
- Podemos utilizar para resgatar as propriedades em um método;

```jsx
let pessoa = {
nome: 'Ana',

}

pessoa.idade = 26;

pessoa.falar = function(){
		console.log('Olá, eu tenho' + this.idade + 'anos');
}

pessoa.falar();
```

---

## Constructor functions

- Uma outra forma de criar objeto é pela constructor function;
- Uma grande vantagem é que este método aceita parâmetros para o obj;

```jsx
function Pessoa(nome){
 this.nome = nome;
}

let pessoa1 = new Pessoa ('Marcia');
let pessoa2 = new Pessoa ('João');

console.log(pessoa1.nome);
console.log(pessoa2.nome);
```

Outro exemplo, porém usando os métodos dentro da constructor function

```jsx
function Ninja (nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log("Naruto atirou a shuriken");
    }
}

let naruto = new Ninja ('Naruto');

console.log(naruto);
naruto.atirarShuriken();
```

---

## Funcões que retornam objetos

 

- Parecida com as constructor functions, porém não precisamos utilizar o new;
- O objeto é criado com retorno da função

```jsx
function criarPessoa(nome){
return {
 nome:nome
   };
}

let pessoa1 = criarPessoa('Marcia');
let pessoa2 = criarPessoa ('João');

console.log(pessoa1.nome);
console.log(pessoa2.nome);
```

## A propriedade constructor

- Quando um objeto é criado, sempre uma propriedade constructor é adicionada a ele;
- Contendo a referência como o objeto foi criado;
- Ou seja, conseguimos identificar a origem que o objeto foi criado

```jsx
function newObj(x){
 return {
  x: x;

  };
}

let y = newObj(1);

function newObjTwo(x){
	this.x = x;

}

let z = new NewObjetTwo(2);

console.log(y.constructor);
console.log(z.constructor);
```

## Operador instance of

- Uma maneira de saber de qual instância (pai) do objeto filho;
- Mais prático que utilizar constructor
- o retorno é booleano

```jsx
function Robo(nome,arma){
 this.nome = nome;
 this.arma = arma;
}

function Humano(nome){
 this.nome = nome;

}

let android = new Robo ('Xyz','Punhos');

console.log(android instanceof Robo); //true
console.log(android instanceof Humano); // false
```

---

## O objeto global

- Sempre que é iniciada uma página web traz um objeto chamado window;
- As variáveis globais são ficam atreladas a ele como propriedades;
- Os métodos da linguagem também podem ser invocados pela window;
- This no escopo global também é referenciado ao window;

```jsx
var teste = 'teste';

console.log(teste);
console.log(window.teste);
console.log(this.teste);
```

---

## Passando referência de objeto

- Quando você atribui um obj já criado para uma outra variável, você só está passando uma referência
- Se alterar a referência, o original também é alterado;

```jsx
let obj = {
 teste: 1;
}

let copia = obj;

copia.teste = 2;

console.log(obj.teste)

//Resultado: 2
```

---

## Comparando objetos

- Você só consegue ter objetos iguais, se forem referência um do outro e não os valores que são iguais de cada objeto
- Objetos criados a partir de um construtor, sempre serão diferentes;

```jsx
function Ninja (nome,arma){
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja('Naruto', 'shuriken');
const rockLee = new Ninja ('Rock Lee', 'punhos');
const cloneDoNaruto = new Ninja ('Naruto', 'shuriken');
const cloneVerdadeiroDoNaruto = naruto; //referência

console.log(naruto === rockLee); //false: pq não são ninjas iguais

console.log(naruto === cloneDoNaruto);// false: Mesmo que seja o clone, não é o verdadeiro naruto

console.log(naruto === cloneVerdadeiroDoNaruto); //true: Pq passamos uma referência naruto para dentro do cloneVerdadeiroDoNaruto

console.log(cloneDoNaruto === cloneVerdadeiroDoNaruto); //false: Pois não é uma referência
```

---

## Objetos literais

- Função do ES6, que permite criar objetos mais rapidamente
- Utilizando nomes de variáveis para nomes de propriedades

```jsx
let x = 1;
let y = 2;

let obj = {x,y}

console.log(obj.x);
```

### Objetos literais parte 2

- Também não precisamos declarar function para métodos no  ES6

```jsx
let megazord = {

nome: 'Megazord',
arma: 'espada laser',
	 explodirTudo(){     // não precisa colocar a palavra função
		console.log("BOOM!");
   }

}
```

### Objetos literais parte 3

- Podemos também criar propriedades com variáveis ou retorno de funções
- Ajudando a escrever menos código;
- De uma forma dinâmica, conseguimos criar uma variável fora do escopo, que pode ser utilizada em objetos diferentes

```jsx
let tipo = 'tipo_de_'; // Variavel criada fora do escopo, para que possa ser usada em outros objetos

let carro = {
[tipo+"caroo"]: "SUV" //Precisamos concatenar a variavel tipo +  objeto 

}

let barco = {
 [tipo+"barco"]: "Iate"
}

console.log(carro.tipo_de_carro); //Basta apenas navegar pelo objeto e informar o tipo_de...

console.log(barco.tipo_de_barco);

```

---

## Atributos das propriedades

- Toda propriedade tem atributos já criados pela linguagem, Enumerable e Configurable;
- Configurable, por exemplo, se estiver false, não deixa a propriedade ser editada  ou deletada
- 

```jsx
let pessoa= {
 nome: "Ana"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));
```

---

## Copiando propriedades

- Os objetos herdam métodos do objeto pai Object, e podemos utilizá-los;
- Podendo copiar propriedades e métodos
- Para copiar propriedades utilizamos o método assign

```jsx
let robo1 = {
arma: 'lança granada'

}

let robo2 = {
	operacao: '337'
}

Object.assign(robo2,robo1);

console.log(robo2);

//Resultado da propriedade cópia: Lança granada
```

Obs: a propriedade do robo2 (operacao), não será alterada, pois só pertence a ele. Se o robo1, tivesse a mesma propri “operação”, ai sim, poderia refletir no robo2. 

Ao invés de ficarmos repetindo propriedades, podemos pegar de outros objetos

---

## Comparando objetos

- Podemos comparar objetos com o método IS
- Teremos basicamente os mesmos resultados de ===
- Casos que dão resultados diferentes: NaN com NaN e +0 com -0 (que neste método são considerados como iguais)

```jsx
console.log(Object.is(robo1,robo2));

robo3 = robo1;

console.logo(Object.is(robo1,robo3));
```

---

## Destructuring (desestruturando objetos)

- Um outro recurso que veio com o ES6, trazendo algumas funcionalidades
- Podemos criar várias variáveis com uma linha só, desestruturando um objeto;

```jsx

let config = {
ip: '127.0.0.1',
port: '80',
blocked: true,
}

let {ip, port, blocked} = config

console.log(ip);
console.log(port);
console.log(blocked);
```

### Destructuring parte 2

- Há também a possibilidade de utilizar o destructuring para mudar o valor de variáveis já criadas

Sintaxe: ({  propriedade1, propriedade2} = nomeDoObjeto)

```jsx

let config = {
ip: '127.0.0.1',
port: '80',
blocked: true,
}

let ip = '192.168.0.60';
let port = '8000';

({ip, port} = config)

console.log(ip,port)

//Resultado: ip = '192.168.0.60' e port = '8000'
```

### Destructuring parte 3

- O destructuring funciona com arrays também

```jsx
let numeros = [1,2,3];

const [num1, num2, num3] = numeros;

console.log(num1,num2,num3);
```

### Destructuring com Rest Operator (...)

- O rest operator é utilizando quando não sabemos quantos argumentos virão para o destructuring
- Podendo criar um array com um tamanho infinito, com os restos dos elementos passados;

```jsx
let [a, ...b] = [1,2,3,4,5,6,7,8,9];

console.log(a,b);
```