var Formulario = document.getElementById("form");
var nombre = Formulario.nombre,
	correo = Formulario.correo,
	genero = Formulario.genero,
	terminos = Formulario.terminos,
	mensaje = Formulario.mensaje;
var error = document.getElementById("error");

function validarName(e) {
	if (nombre.value == "" || nombre.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li> Ingresa tu nombre </li>";

		e.preventDefault();
	}
}

function validarEmail(e) {
	if (correo.value == "" || correo.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li>Ingreso un correo</li>";

		e.preventDefault();
	}
}

function validarMensaje(e) {
	if (mensaje.value == "" || mensaje.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li>Ingresa tu mensaje</li>";

		e.preventDefault();
	}
}

function validarGender(e) {
	if (genero.value == "" || genero.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li> Selecciona tu género </li>";
		e.preventDefault();
	}
}
function validarTerms(e) {
	if (terminos.checked == false) {
		error.style.display = "block";
		error.innerHTML += "<li> Acepta los términos y condiciones </li>";

		e.preventDefault();
	}
}

function validarFormulario(e) {
	error.innerHTML = "";
	validarName(e);
	validarEmail(e);
	validarMensaje(e);
	validarGender(e);
	validarTerms(e);

	if (error.innerHTML == "") {
		error.style.display = "none";
		alert("El formulario se ha enviado correctamente.");
	}
}

Formulario.addEventListener("submit", validarFormulario);
