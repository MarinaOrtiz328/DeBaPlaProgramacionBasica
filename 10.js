const prompt=require('prompt-sync')();

let numero=prompt("Ingrese un numero: ");
if(numero%2==0){
	console.log("Su numero es par");
}else{
	console.log("Su numero es impar")
}
