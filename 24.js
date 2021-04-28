const prompt = require('prompt-sync')();

let numero=prompt("Ingrese un numero: ");
numero= Number(numero);

function esPrimo(numero) {

  if (numero == 0 || numero == 1 || numero == 4)
    return false;
  for (let x = 2; x < (numero / 2); x++) {
    if (numero % x == 0)
      return false;
  }

  return true;
}

if(numero>=1){
  let booleano=esPrimo(numero);
  if(booleano==true){
    console.log("Es primo");
  }else{
    console.log("No es primo");
  }
}
