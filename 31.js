const prompt=require('prompt-sync')();


function factorial(numero){

  let factorial=1;
  for(let i=1; i<=numero; i++){
    factorial*=i;

  }
  console.log("El factorial de "+ numero +" es "+ factorial);
}

function primo(numero){
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
}

function tabla(numero){
  for(let i=1; i<=10; i++){
    console.log(numero+" x "+ i + " = "+ i*numero);

  }
}

let numero=prompt("Introduzca numero: ");
numero= Number(numero);
console.log("1.factorial");
console.log("2.Primo");
console.log("3.tabla multiplicar");
let opcion=prompt("Introduzca una opcion: ");
opcion=Number(opcion);

switch (opcion) {
  case 1:
    factorial(numero);
    break;
  case 2:
    primo(numero);
    break;
  case 3:
    tabla(numero);
    break;
  default:
    console.log("opcion no valida");
    break;

}
