const prompt=require('prompt-sync')();

let contador=0;
let numero=prompt("introduzca un numero: ");

for(let i=1; i<=numero; i++){
	if(i%3==0){
		console.log(i);
		contador++;
	}
}

console.log(+contador+" numeros son multiplos de 3");
