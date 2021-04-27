
let sumapar=0;
let sumaimpar=0;
for(let i=1; i<=100; i++){
	console.log(i);
	if(i%2==0){
		sumapar=sumapar+i;
	}else{
		sumaimpar=sumaimpar+i;
	}

}
console.log("La suma de los pares es "+sumapar);
console.log("La suma de los impares es "+sumaimpar);
