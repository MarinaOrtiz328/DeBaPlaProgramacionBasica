const prompt=require('prompt-sync')();

let frase="";
let contador=0;
while(frase!=null){
	frase=prompt("Introduzca una frase:");
	contador++;
	console.log("Frases ingresadas "+contador+"\n");
	
}
