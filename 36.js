function getRandom(){
  return Math.floor((Math.random()*100)+1);

}


for(let i=0; i<4; i++){
  for(let j=0; j<5; j++){

    process.stdout.write(getRandom()+" ");
  }
  process.stdout.write("\n");


}

console.log("transpuesta:");

for(let i=0; i<4; i++){
  for(let j=0; j<5; j++){

    process.stdout.write(getRandom()+" ");
  }
  process.stdout.write("\n");


}
