const prompt=require('prompt-sync')();

var numero=prompt("Ingrese numero para factorial: ");
numero=Number(numero);

function factorial(numero){

  let factorial=1;
  for(let i=1; i<=numero; i++){
    factorial*=i;

  }
  console.log("El factorial de "+ numero +" es "+ factorial);
}

factorial(numero);
