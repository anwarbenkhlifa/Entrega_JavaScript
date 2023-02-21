// 2. Realiza un programa que vaya calculando los números que son a la vez primos y
// palíndromos hasta X, siendo X un número introducido por el usuario mediante una ventana
// de diálogo. Los números que cumplan una o ambas condiciones se guardarán en arrays
// distintos y se mostrarán mediante una ventana.
//  El programa debe contener dos funciones para comprobar que un número es primo y un
//  número es palíndromo.
//  function esPrimo(numero) y function esPalindromo(cadena) ambas devuelven true/false.

function esPrimo(num) {
	let prime = true;
	for(let i = 2; i < num && prime; i++) {
		if(num % i == 0)
			prime = false;
	}
	return prime;
}

function esPalindromo(num) {		// sacamos el inverso del número y si es igual al número entonces es palíndromo
	if(num > 0 && num < 10)		// si el número tiene solo una cifra devuelve true sin entrar al bucle (para optimizar el programa)
		return true;
	let cifras = calcularCifras(num);
	let power, inverso = 0, aux = num;		//	guardamos el valor del número en aux

	while(cifras > 0) {
		power = Math.pow(10, cifras-- - 1);
		inverso += num % 10 * power;
		num = parseInt(num / 10);//	num / 10 da float así que quitamos los decimales con parseInt. Se puede también con Math.floor o Math.trunc
	}
	return inverso == aux;
}

function calcularCifras(num) {		//	método para calcular cifras de un número
	let cifras = 0;
	while(num != 0) {
		num = Math.floor(num / 10);
		cifras++;
	}
	return cifras;
}

let x = parseInt(prompt("Introduce X: (se comprobará desde 1 hasta X):"));

let primos = [], palindromos = [], ambos = [];

for(let i = 1; i <= x; i++) {
	if(esPrimo(i)) {
		primos.push(i);
		if(esPalindromo(i))
			ambos.push(i);
	}
	if(esPalindromo(i)){
		palindromos.push(i);
	}
}

// alert("Primos: " + primos + "\nPalíndromos: " + palindromos + "\nPrimos y palíndromos: " + ambos);

// Version EcmaScript:
alert(`Primos: ${primos}
Palíndromos: ${palindromos}
Primos y palíndromos: ${ambos}
`);