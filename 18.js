const prompt=require("prompt-sync")();

let frase=prompt("Ingrese una frase: ");
let letra=prompt("Ingrese la letra que desea contar: ");
let contador=0;

for(let i=0; i<frase.length; i++){
	if(letra==frase.charAt(i)){
		contador++;
	}
}

console.log("La letra '"+letra+"' aparece "+contador+" veces");
