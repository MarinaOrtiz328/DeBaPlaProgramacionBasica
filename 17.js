const prompt=require('prompt-sync')();

let num1=prompt("Ingrese el primer numero: ");
let num2=prompt("Ingrese el segundo numero: ");
let contador=0;
let sumamul2=0;
num1=Number(num1);
num2=Number(num2);

if(num1<=num2){
	for(let i=num1+1; i<num2; i++){
		if(i%2==0){
			console.log(i);
			contador++;
			sumamul2=sumamul2+i;
		}
	}
	console.log("Hay "+contador+" numeros multiplos de dos");
	console.log("La suma de los numeros multiplos de dos es "+sumamul2);
}else{
	console.log("El segundo numero debe ser mayor o igual que el primero");
	
}

