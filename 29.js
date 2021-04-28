let dado1;
let dado2;
let contador10=0;
function getRandom() {
  return Math.floor(Math.random() * 7) + 1;
}

function tirardado(){
  return getRandom();
}

for(let i=0; i<100; i++){
  dado1=tirardado();
  dado2=tirardado();
  if(dado1+dado2==10){
    contador10++;
  }
}
console.log("Los dados sumaron diez "+contador10+" veces");
