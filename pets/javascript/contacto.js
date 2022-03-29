window.onload = iniciar;


function iniciar() {
	document.querySelector('.menu-btn').addEventListener('click', mostrarMenu);
	document.getElementById("enviar").addEventListener('click',validar);
	
	

	//Quitamos los errores cuando se van modificando los inputs del formulario
	var inputs = document.querySelectorAll("input[type=text],textarea");
	//console.log(inputs);
	inputs.forEach(function (elemento, posicion) {
		elemento.addEventListener("keyup", limpiarError);
	});

	//Quitamos los errores cuando se va a modificar el check y el select
	var selectCheckbox = document.querySelectorAll("input[type=checkbox],select");
	// console.log(selectCheckbox );
	selectCheckbox.forEach(function (elemento, posicion) {
		elemento.addEventListener("change", limpiarError)
	});

}
 
function mostrarMenu() {
	var menu = document.querySelector('.menu-container');
	var textoMenu = (this.textContent === 'Menu')? 'X' : 'Menu'; //this hace referencia al objeto al que hemos hecho click
	this.textContent = textoMenu;
	menu.classList.toggle('show')
}


function error(elemento) {
	elemento.classList.add("error");	
}
function limpiarError(evento) {
	evento.target.classList.remove("error");//event.target = elemento
}

function validarInput(elemento, patron) {
	if (elemento.value == "" || patron.test(elemento.value) == false || elemento.value.length > 500 ) {
		error(elemento);
		return false;
	}
	return true;
}

function validarSelect() {
	var elemento = document.getElementById("escribenos");
	if (elemento.value == "" ) {
		error(elemento);
		return false;
	} 
	return true;
}

function validarCheck() {
	var elemento = document.getElementById("politica-privacidad");
	if (elemento.checked == false ) {
		error(elemento);
		return false;
	} 
	return true;
}

function validar(e) {
	var enviar = true;
	var patron = "";

	var inputs = document.querySelectorAll("input[type=text],textarea");
	console.log(inputs)
	inputs.forEach(function (elemento, posicion) {

		switch (elemento.id) {
			case "nombre": case "apellidos": 
				patron = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóúü]{1,20}[\s]*){1,4}$/;
				break;
			case "email": 
				patron = /^[\w-\.]{3,20}@([\w-]{2,20}\.)*([\w-]{2,20}\.)[\w-]{2,4}$/;
				break;
			case "telefono":
				patron = /^\d{9}$/;
				break;
			case "comentarios":
				patron = /^\w[^$%&@=|<>#"\*]+$/;
			default:
				break;
		}

		if ( validarInput(elemento,patron) == false) {
			enviar = false;
		}

	});

	if( validarSelect() == false ) {
		enviar = false;
	}

	if( validarCheck() == false ) {
		enviar = false;
	}

	if ( enviar == true ){
		console.log("Enviar");
		return true;
	} else {
		console.log("No enviar");
		e.preventDefault();
		return false;
	}
}
