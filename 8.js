const prompt=require('prompt-sync')();

let letra="";
do{
	letra=prompt("Introduzca S o N: ");
	if(letra!="S" && letra!="N"){
		console.log("Error, solo puede introducir S o N, intente de nuevo:");
	}
}while(letra!="S" && letra!="N");
