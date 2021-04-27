const prompt=require('prompt-sync')();

let numero=prompt("Ingrese numero: ");
if(numero<0){
	console.log("Su numero es negativo");
}else if(numero>0){
	console.log("Su numero es positivo");
}else{
	console.log("Su numero no es ni negativo ni positivo");
}
