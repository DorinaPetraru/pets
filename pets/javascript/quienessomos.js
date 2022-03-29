window.onload = iniciar;

function iniciar() {
	document.querySelector('.menu-btn').addEventListener('click', mostrarMenu);
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
