// vars
const btnEnviar = document.querySelector('#enviar')

// variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');

// event listeners
eventListeners();

function eventListeners() {
    console.log('eventListeners');
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', initApp);

    // campos del formulario -> validacion cuando se sale del campo
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // enviar email
    formulario.addEventListener('submit', enviarEmail);
}
// Funciones
function initApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    // validar si hay texto
    if (e.target.value.length > 0) {
        // eliminar los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500', 'border-solid',);
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500', 'border-solid',);
        verError('Todos los campos son obligatorios');
    }

    // validar email
    if (e.target.type === 'email') {
        const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (expresionRegular.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500', 'border-solid',);
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500', 'border-solid',);
            verError('Email no valido');
        }

    
    }

    // pasar validacion
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

// error handling
function verError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0) {
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    }
}

// enviar email
function enviarEmail(e) {
    e.preventDefault();
    // spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // despues de 3 segundos ocultar el spinner
    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje enviado
        const parrafoNuevo = document.createElement('p');
        parrafoNuevo.textContent = 'El mensaje se envio correctamente';
        parrafoNuevo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafoNuevo, document.querySelector('.mb-10'))
    
        // resetear el formulario
        setTimeout(() => {
            parrafoNuevo.remove(); // resetear el mensaje de exito
            resetearFormulario();
        }
        , 5000);
    
    }, 3000);


}

// resetear formulario
function resetearFormulario() {
    formulario.reset();
    initApp();
}