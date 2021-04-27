const prompt=require('prompt-sync')();

function ponercero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myFunction() {
	let d = new Date();
 	let h = ponercero(d.getHours());
 	let m = ponercero(d.getMinutes());
 	let s = ponercero(d.getSeconds());
  	console.log( h + ":" + m + ":" + s);
} 


function myFunctioninput() {
	let hinput=prompt("Ingrese hora: ");
	let minput=prompt("Ingrese minutos: ");
	let sinput=prompt("Ingrese segundos: ");
	hinput=Number(hinput);
	minput=Number(minput);
	sinput=Number(sinput);
	let h = ponercero(hinput);
	let m = ponercero(minput);
	let s = ponercero(sinput);
	console.log("Nueva hora: ");
  	console.log( h + ":" + m + ":" + s);
} 

myFunction();
let respuesta=prompt("Desea cambiar la hora? s para si, n para no: ");
if(respuesta=="s"){
	myFunctioninput();
}

