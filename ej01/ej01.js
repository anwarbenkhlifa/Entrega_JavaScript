function encontrarClave(texto, clave) {
	texto = texto.toUpperCase();
	clave = clave.toUpperCase();
	let pos, cont = 0, next;
	pos = texto.indexOf(clave);
	while(pos != -1) {
		if(pos != -1){
			cont++;
			next = pos + 1;
			pos = texto.indexOf(clave, next);
		}
	}
	
	return cont;
}

function totalClavesEncontradas(texto, arr) {
	let found = 0;
	for(let i = 0; i < arr.length; i++) {
		found += encontrarClave(texto, arr[i]);
	}
	return found;
}

let cadena = prompt("Introduce texto: ");
let arrKeys = ["AA","BCA","RBT","JT"];
let total = totalClavesEncontradas(cadena, arrKeys);
console.log("Cadena introducida: " + cadena);
console.log("Claves a buscar: " + arrKeys);
console.log("Aparecen: " + total + " veces");