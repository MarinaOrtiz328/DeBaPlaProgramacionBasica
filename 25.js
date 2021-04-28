const prompt = require('prompt-sync')();

function romanos(numero){

 const romanos = {
   _V_: 5000,
   _IV_: 4000,
   MMM: 3000,
   MM: 2000,
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
 }

 let resultado = "";
 for (let r in romanos) {

   resultado += r.repeat(Math.floor( numero/romanos[r]));
   numero = numero % romanos[r];
 }
 return resultado;
}

let numeroconvertido=prompt("Ingrese numero para convertir a romano: ");
numeroconvertido=Number(numeroconvertido);
console.log(romanos(numeroconvertido));
