class Conductor {
	// nombre;
	// licencia;

	constructor(nombre, licencia) {
		this.nombre = nombre;
		this.licencia = licencia;
	}

	getNombre() {
		return this.nombre;
	}

	getLicencia() {
		return this.licencia;
	}

	setNombre(nombre) {
		this.nombre = nombre;
	}

	setLicencia(licencia) {
		this.licencia = licencia;
	}

	mostrarDatosConductor() {
		console.log(`Nombre de conductor: ${this.nombre}`);
		console.log(`Licencia de conductor: ${this.licencia}`);
	}

	equals(obj) {
		return this.licencia.equalsIgnoreCase(obj.licencia);
	}
}

class Autobus {
	// capacidad;
	// pasajeros;
	// matricula;
	// listadoConductores;

	// 	Constructors

	constructor(capacidad, pasajeros, matricula, listadoConductores) {
		this.capacidad = capacidad;
		this.pasajeros = pasajeros;
		this.matricula = matricula;
		this.listadoConductores = listadoConductores;
	}

	//	Getters

	getCapacidad() {
		return this.capacidad;
	}

	getPasajeros() {
		return this.pasajeros;
	}

	getMatricula() {
		return this.matricula;
	}

	getListadoConductores() {
		return this.listadoConductores;
	}

	//	Setters
	
	setCapacidad(capacidad) {
		this.capacidad = capacidad;
	}

	setPasajeros(pasajeros) {
		this.pasajeros = pasajeros;
	}
	
	setMatricula(matricula) {
		this.matricula = matricula;
	}
	
	setListadoConductores(listadoConductores) {
		this.listadoConductores = new Array(listadoConductores);
	}

	mostrarDatosAutobus() {
		console.log(`Capacidad: ${this.capacidad}`);
		console.log(`Pasajeros: ${this.pasajeros}`);
		console.log(`Matricula: ${this.matricula}`);
		console.log("----------------------");
		for(let i = 0; i < this.listadoConductores.length; i++) {
			console.log(`Conductor ${i + 1}: `);
			this.listadoConductores[i].mostrarDatosConductor();
			if(i < this.listadoConductores.length - 1)
				console.log("-------------------------------------------");
		}
	}

	subir(pasajeros) {
		if(this.pasajeros + pasajeros <= 50)
			this.pasajeros += pasajeros;
		else
			this.pasajeros = 50;
	}

	bajar(pasajeros) {
		if(this.pasajeros >= pasajeros)
			this.pasajeros -= pasajeros;
		else
			this.pasajeros = 0;
	}

	buscarConductor(licencia) {
		let encontrado = false;
		for(let i = 0; i < this.listadoConductores.length && !encontrado; i++) {
			if(this.listadoConductores[i].getLicencia().toUpperCase() == licencia.toUpperCase())
				encontrado = true;
		}
		return encontrado;
	}

}

function main() {
	let c1 = new Conductor("Samuel", "1025C");
	let c2 = new Conductor("Anouar", "4005J");
	let c3 = new Conductor("Marta", "2011F");
	let conductores = Array(c1, c2, c3);
	let bus = new Autobus(50, 30, "1201JNK", conductores);
	
	bus.mostrarDatosAutobus();
	// c1.mostrarDatosConductor();
	// let licencia = prompt("Licencia: ");
	if(bus.buscarConductor("2011F"))
		console.log("Conductor encontrado.");
	else
	console.log("Conductor no existe.");
	
	bus.subir(5);
	console.log("----------------------------------");
	bus.mostrarDatosAutobus();
	bus.bajar(15);
	console.log("----------------------------------");
	bus.mostrarDatosAutobus();
}

main();