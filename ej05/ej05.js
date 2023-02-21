class Carta {
	numero;
	palo;

	Constructor(numero, palo) {
		this.numero = numero;
		this.palo = palo;
	}

	getNumero() {
		return this.numero;
	}
	getPalo() {
		return this.palo;
	}

	setNumero(numero) {
		this.numero = numero;
	}
	setPalo(palo) {
		this.palo = palo;
	}

	mostrarCarta() {
		return this.numero + " de " + this.palo;
	}

	esMenorQue(c) {
		if(this.palo.toLowerCase() == c.palo.toLowerCase())
			return this.numero < c.numero;
		else {
			let pos1, pos2;
			let arr = ["Oros", "Copas", "Espadas", "Bastos"];
			for(let i = 0; i < arr.length; i++) {
				if(this.palo.toUpperCase() == arr[i].toUpperCase())
					pos1 = i;
				if(c.palo.toUpperCase() == arr[i].toUpperCase())
					pos2 = i;
			}
			return pos1 < pos2;
		}
	}

}

class Baraja {
	cartas;

	constructor() {
		this.cartas = new Array();
		for(let i = 0; i < 48; i++) {
			if(i < 12) {
				let carta = new Carta();
				// let carta = new Carta((i + 1), "Oros");
				carta.setNumero(i + 1);
				carta.setPalo("Oros");
				this.cartas.push(carta);
			} else if(i < 24) {
				let carta = new Carta();
				// let carta = new Carta((i + 1), "Copas");
				carta.setNumero(i + 1);
				carta.setPalo("Copas");
				this.cartas.push(carta);
			} else if(i < 36) {
				let carta = new Carta();
				// let carta = new Carta((i + 1), "Espadas");
				carta.setNumero(i + 1);
				carta.setPalo("Espadas");
				this.cartas.push(carta);
			} else if(i < 48) {
				let carta = new Carta();
				// let carta = new Carta((i + 1), "Bastos");
				carta.setNumero(i + 1);
				carta.setPalo("Espadas");
				this.cartas.push(carta);
			}
		}
	}

	mostrarBaraja() {
		for(let i = 0; i < this.cartas.length; i++) {
			console.log(this.cartas[i].mostrarCarta());
			if(i < this.cartas.length - 1)
				console.log("----------------------");
		}
	}

	barajar() {
		let rnd1, rnd2, aux, cont = 0;
		while(cont < 25) {
			rnd1 = parseInt(Math.random() * this.cartas.length);
			rnd2 = parseInt(Math.random() * this.cartas.length);
			aux = this.cartas[rnd1];
			this.cartas[rnd1] = this.cartas[rnd2];
			this.cartas[rnd2] = aux;
			cont++;
		}
	}

	jugar() {
		let continuar, ganadas = 0, perdidas = 0;

		do {
			let num;
			let rnd = this.cartas[parseInt(Math.random() * this.cartas.length)];
			do {
				num = parseInt(prompt("Introduce un número entre 1 y 48: "));
				if(num < 1 || num > 48)
				alert("Valor no válido");
			} while(num < 1 || num > 48);
			let carta = this.cartas[num - 1];
			if(rnd.esMenorQue(carta)) {
				alert("Has ganado! :)");
				ganadas++;
			}
			else {
				alert("Has perdido. :(");
				perdidas++;
			}

			alert(`Partidas ganadas: ${ganadas}
Partidas perdidas: ${perdidas}`);

			do{
				continuar = prompt("Deseas seguir jugando? (SI/NO):");
				if(!continuar.toUpperCase() == 'SI' && !continuar.toUpperCase() == 'NO')
					alert("Valor no válido");
			} while(!continuar.toUpperCase() == 'SI' && !continuar.toUpperCase() == 'NO');
		} while(continuar.toUpperCase() == 'SI');
	}
}

function main() {
	let miBaraja = new Baraja();
	console.log("----------------------------------------");
	console.log("Cartas Ordenadas:");
	console.log("----------------------------------------");
	miBaraja.mostrarBaraja();
	console.log("----------------------------------------");
	console.log("Cartas Barajadas:");
	console.log("----------------------------------------");
	miBaraja.barajar();
	miBaraja.mostrarBaraja();
	miBaraja.barajar();
	miBaraja.jugar();
}

main();