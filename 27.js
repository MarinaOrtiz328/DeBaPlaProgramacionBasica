const prompt = require('prompt-sync')();

let numero=prompt("Introduzca numero para tabla de multiplicar: ");

for(let i=1; i<=10; i++){
  console.log(numero+" x "+ i + " = "+ i*numero);

}
