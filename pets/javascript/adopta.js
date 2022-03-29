window.onload = iniciar;

function iniciar() {
	document.getElementById('btnperros').addEventListener('click', verPerros);
	document.querySelector('.menu-btn').addEventListener('click', mostrarMenu);
	
}
/*menu*/
function mostrarMenu() {
	var menu = document.querySelector('.menu-container');
	var textoMenu = this.textContent === 'Menu' ? 'X' : 'Menu'; //this hace referencia al objeto al que hemos hecho click
	this.textContent = textoMenu;
	menu.classList.toggle('show');
}
function verContacto() {
	var contacto = document.querySelector('.verContacto');
	this.classList.toggle('show')
	// if (contacto.style.display == "none") {

	// 	contacto.style.display = "block";
		

	// } else {

	// 	elemContenido.style.display = "block";
	// 	enlace.innerHTML = "Leer menos";
	// }
}


/*tool-tip*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

/*la peticion perros_catalogo.json*/
async function verPerros() {
	try {
		const res = await fetch('perros_catalogo.json');
		const perros = await res.json();
		console.log(perros);

		let tabla =
			'<tr><th>Nombre</th><th>Raza</th><th>Leishmania</th><th>Protectora</th><th>Mail</th><th>Comentarios</th></tr>';

		for (let i = 0; i < perros.length; i++) {
			tabla +=
				'<tr><td>' +
				perros[i].nombre +
				'</td><td>' +
				perros[i].raza +
				'</td><td>' +
				perros[i].leishmania +
				'</td><td>' +
				perros[i].protectora +
				'</td><td>' +
				perros[i].mail +
				'</td><td>' +
				perros[i].comentarios +
				'</td></tr>';
		}

		document.getElementById('tabla-perros').innerHTML = tabla;
	} catch (error) {
		console.log(error);
	}
}

/*function utilizada en la galeria de adopta.html*/
let animado = document.querySelectorAll('.animado');

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado.length; i++) {
		let alturaAnimado = animado[i].offsetTop;
		if (alturaAnimado - 300 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add('mostrarArriba');
		}
	}
}
window.addEventListener('scroll', mostrarScroll);

/*function reloj*/
setInterval(visualizarReloj, 1000); //milisegundos

function visualizarReloj() {
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	var horaActual = hora + ':' + minutos + ':' + segundos;
	document.getElementById('reloj').innerHTML = horaActual;
}
