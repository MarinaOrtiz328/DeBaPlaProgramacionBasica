const prompt = require('prompt-sync')();

let asignaturas=[
  "español",
  "matematicas",
  "ingles",
  "ciencias",
  "arte",
  "deportes",
  "fisica",
  "calculo",
  "musica",
  "orientacion"
];

let sumacalif=0;

for(let i=0; i<10; i++){
  console.log("Ingrese calificacion para "+ asignaturas[i]);
  let calif=prompt();
  calif=Number(calif);
  sumacalif=sumacalif+calif;
}

console.log("La media de las calificaciones es: "+sumacalif/10);
