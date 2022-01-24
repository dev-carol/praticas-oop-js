let arr = [1,3,45,6,7,90,'sds','dvd'];

let [a,b, ...c]= arr;

console.log(a); //armazenou o número: 1
console.log(b);//armazenou o número: 2
console.log(c);  // Ficou com o restante do array: 45,6,7,90,'sds','dvd'