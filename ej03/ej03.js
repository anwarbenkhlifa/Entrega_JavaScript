// 3. Realiza un programa que vaya leyendo números positivos (igual o mayor que 1) y
// almacenándolos en un array. La entrada de datos termina cuando el usuario introduce un
// valor menor que 1 o un valor no numérico.
// El programa deberá mostrar el listado con los números introducidos y de ellos cuantos
// números son pares y cuantos son impares. Además, el programa, deberá mostrar la suma
// y la media de todos los números introducidos junto con el mayor y menor.

let n, pares = 0, impares = 0, suma = 0, media, mayor, menor;
let arr = [];

do {	//	Leer los números y guardarlos en un array
	n = parseInt(prompt("Introduce número positivo ( <= 0 para acabar): "));
	if(n < 1 || isNaN(n))
		alert("Valor no válido");
	else {
		arr.push(n);
		if(n % 2 == 0)
			pares++;
		else
			impares++;
		suma += n;
	}
} while(n >= 1 && !isNaN(n));

media = suma / (pares + impares);

mayor = menor = arr[0];		//	tomo el primer elemnto del array como mayor y menor

for(let i = 0; i < arr.length; i++) {
	if(arr[i] > mayor)
		mayor = arr[i];
	else if(arr[i] < menor)
		menor = arr[i];
}

// alert("Números introducidos: " + arr + "\nNúmero de pares: " + pares + "\nNúmero de impares: " + impares + 
// 	  "\nSuma total: " + suma + "\nMedia: " + media.toFixed(2) + "\nMayor: " + mayor + "\nMenor: " + menor);	// toFixed(2) es para mostrar solo dos decimales

//EcmaScript version (código más fácil para escribir y leer):
alert(`Números introducidos: ${arr}
Número de pares: ${pares}
Número de impares: ${impares}
Suma total: ${suma}
Media: ${media.toFixed(2)}
Mayor: ${mayor}
Menor: ${menor}
`);