let sumaimpar=0;
let sumapar=0;

function impares(){
  for(let i=1; i<=1000; i++){
    if(i%1==0){
      sumaimpar+=i;
    }
  }
  console.log("La suma de los impares es: "+sumaimpar);
}

function pares(){
  for(let i=1; i<=1000; i++){
    if(i%2==0){
      sumapar+=i;
    }
  }
  console.log("La suma de los pares es: "+sumapar);
}

pares();
impares();
