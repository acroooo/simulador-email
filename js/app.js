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
}
// Funciones
function initApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    // validar si hay texto
    if (e.target.value.length > 0) {
        console.log('Hay texto')
    } else {
        e.target.classList.add('border', 'border-red-500', 'border-solid',);
        verError('Todos los campos son obligatorios');
    }

    // validar email
    if (e.target.type === 'email') {
        const resultado = e.target.value.indexOf('@');
        if (resultado < 0) {
            verError('Por favor, ingrese un email válido');
        }

    
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

// function campoValidado(campo) {
//     campo.classList.add('border', 'border-green-500', 'border-solid',);
// }
