const prompt = require('prompt-sync')();

let frase= prompt("Ingrese una frase: ");
let espacio=" ";

for(let i=0; i<5; i++){
  espacio=espacio+"     ";
  console.log(espacio+frase);

}
