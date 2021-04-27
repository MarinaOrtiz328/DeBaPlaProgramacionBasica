const prompt=require('prompt-sync')();

let num1=prompt("Ingrese el primer numero: ");
let num2=prompt("Ingrese el segundo numero: ");
num1= Number(num1);
num2= Number(num2);
let contador=0;
let contadorpar=0;
let sumaimpar=0;

if(num1<num2){
	for(let i=(num1+1); i<num2; i++){
		console.log(i);
		contador++;
		if(i%2==0){
			contadorpar++;
		}else if(i%2==1){
			sumaimpar=sumaimpar+i;
		}
	}
	console.log("Hay "+contador+" numeros naturales entre ellos");
	console.log(contadorpar+" de ellos son pares");
	console.log("La suma de los impares es "+sumaimpar);
}else if(num1>num2){
	for(let i=(num2+1); i<num1; i++){
                console.log(i);
        	contador++;
                if(i%2==0){ 
                        contadorpar++;
                }else if(i%2==1){ 
                        sumaimpar=sumaimpar+i;
                }
	}
	console.log("Hay "+contador+" numeros naturales entre ellos");
        console.log(contadorpar+" de ellos son pares");
        console.log("La suma de los impares es "+sumaimpar);
}
