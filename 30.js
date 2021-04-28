const prompt = require('prompt-sync')();

let num1= prompt("Ingrese el primer numero: ");
let num2= prompt("Ingrese el segundo numero: ");
num1=Number(num1);
num2=Number(num2);

function suma(n1,n2){
  return n1+n2;
}

function resta(n1,n2){
  return n1-n2;
}

function mult(n1,n2){
  return n1*n2;
}

function div(n1,n2){
  return n1/n2;
}

console.log("1.suma");
console.log("2.resta");
console.log("3.multiplicacion");
console.log("4.division");
let opcion=prompt("Ingrese opcion: ");
opcion= Number(opcion);

switch (opcion) {
  case 1:
      console.log(suma(num1,num2));
    break;
  case 2:
      console.log(resta(num1,num2));
    break;
  case 3:
      console.log(mult(num1,num2));
    break;
  case 4:
      console.log(div(num1,num2));
    break;
  default:
    console.log("no existe esa opcion");
  break;

}
