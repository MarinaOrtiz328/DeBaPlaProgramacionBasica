const prompt=require('prompt-sync')();

var numero=[0,0,0,0,0];

for(let i=0; i<5; i++){
	numero[i]=prompt("Ingrese numero: ");
}

console.log("Maximo: "+Math.max.apply(null,numero));
console.log("Minimo: "+Math.min.apply(null,numero));
