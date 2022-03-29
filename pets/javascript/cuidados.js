window.onload = iniciar;

function iniciar() {
	document.querySelector('.menu-btn').addEventListener('click', mostrarMenu);
	document.getElementById("btnprecios").addEventListener("click", verPrecios);
}

function mostrarMenu() {
	var menu = document.querySelector('.menu-container');
	var textoMenu = (this.textContent === 'Menu')? 'X' : 'Menu'; //this hace referencia al objeto al que hemos hecho click
	this.textContent = textoMenu;
	menu.classList.toggle('show')
}
	 /*tool-tip*/
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
		 );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
		  });
/*leer mas/leer menos */
function muestraOculta(posicion) {
	var elemContenido = document.getElementById("contenido_" + posicion);
	var enlace = document.getElementById("enlace_" + posicion);
	// console.log(elemContenido)
	// console.log(enlace)

	if (elemContenido.style.display == "block") {

		elemContenido.style.display = "none";
		enlace.innerHTML = "Leer más";

	} else {

		elemContenido.style.display = "block";
		enlace.innerHTML = "Leer menos";
	}
}
/*****Tabla ver precios peticion ajax****/
async function verPrecios() {
	try {
		const res = await fetch("precios_peticion.json");
		const precios = await res.json();
		console.log(precios);

		let tabla = "<tr><th>paseo_1h</th><th>paseo_media_hora</th><th>corte_uñas</th><th>peinado_diario</th><th>cuidados_24_horas</th><th>Cuidados_24h_10dias</th></tr>";

		for (let i = 0; i < precios.length; i++) {
			tabla += "<tr><td>" + precios[i].paseo_1h + "</td><td>" + precios[i].
			paseo_media_hora + "</td><td>" + precios[i].
			corte_uñas + "</td><td>" + precios[i].
			peinado_diario + "</td><td>" + precios[i].
			cuidados_24_horas + "</td><td>" + precios[i].
			cuidados_24h_10dias + "</td><tr>";

		}

		document.getElementById("tabla-precios").innerHTML = tabla;

	} catch (error) {
		console.log(error)
	}


	}

	
	