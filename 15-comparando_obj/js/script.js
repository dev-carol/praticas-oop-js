function Ninja (nome,arma){
    this.nome = nome;
    this.arma = arma;
}


const naruto = new Ninja('Naruto', 'shuriken');
const rockLee = new Ninja ('Rock Lee', 'punhos');
const cloneDoNaruto = new Ninja ('Naruto', 'shuriken');
const cloneVerdadeiroDoNaruto = naruto;


console.log(naruto === rockLee); //false: pq não são ninjas iguais

console.log(naruto === cloneDoNaruto);// false: Mesmo que seja o clone, não é o clone verdadeiro de naruto

console.log(naruto === cloneVerdadeiroDoNaruto); //true: Pq passamos uma referência naruto para dentro do clone verdadeiro do naruto

console.log(cloneDoNaruto === cloneVerdadeiroDoNaruto); //false: Pois não é uma referência