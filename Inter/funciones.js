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
	} else {
		error.style.display = "none";
	}
}

function validarEmail(e) {
	if (correo.value == "" || correo.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li>Ingreso un correo</li>";

		e.preventDefault();
	} else {
		error.style.display = "none";
	}
}

function validarMensaje(e) {
	if (mensaje.value == "" || mensaje.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li>Ingresa tu mensaje</li>";

		e.preventDefault();
	} else {
		error.style.display = "none";
	}
}

function validarGender(e) {
	if (genero.value == "" || genero.value == null) {
		error.style.display = "block";
		error.innerHTML += "<li> Selecciona tu género </li>";
		e.preventDefault();
	} else {
		error.style.display = "none";
	}
}
function validarTerms(e) {
	if (terminos.checked == false) {
		error.style.display = "block";
		error.innerHTML += "<li> Acepta los términos y condiciones </li>";

		e.preventDefault();
	} else {
		error.style.display = "none";
	}
}

function validarFormulario(e) {
	error.innerHTML = "";
	validarName(e);
	validarEmail(e);
	validarMensaje(e);
	validarGender(e);
	validarTerms(e);
}

Formulario.addEventListener("submit", validarFormulario);
