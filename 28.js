
function getRandom() {
  return Math.floor(Math.random() * 2) + 0;
}

function moneda(){
  let resultado=getRandom();
  if (resultado==0){
    return "cara";
  }else{
    return "cruz";
  }
}

console.log(moneda());
