var formulario = document.getElementById('form'),
    nombre = form.nombre,
    correo = form.correo,
    genero = form.genero,
    terminos = form.terminos,
    error = document.getElementById('error');

function validarName(e){
    if(nombre.value== ''||nombre.value==null){
        error.style.display='block';
        error.innerHTML += '<li> Complete name </li>';
        console.log('Please add a name');

        e.preventDefault();
    } else{
        error.style.display='none';
    }
}

function validarEmail(e){
        if(correo.value == '' || correo.value == null){
        error.style.display='block';
        error.innerHTML += '<li>Complete email</li>';
        console.log('Please add an email');

        e.preventDefault();
    } else{
        error.style.display='none';
    }
}
function validarGender(e){
    if(genero.value == '' || genero.value == null){
        error.style.display='block';
        error.innerHTML+='<li> Select gender </li>';
        console.log('Please select gender');
        e.preventDefault();
    } else{
        error.style.display='none';
    }
}
function validarTerms(e){
    if(terminos.checked == false){
        error.style.display = 'block';
        error.innerHTML+= '<li> Agree terms and conditions </li>';
        console.log("Please agree terms & conditions");
        e.preventDefault();
    } else{
        error.style.display='none';
    }
}

function validarForm(e){

    error.innerHTML = '';
    validarName(e);
    validarEmail(e);
    validarGender(e);
    validarTerms(e);
}

formulario.addEventListener('submit',validarForm);