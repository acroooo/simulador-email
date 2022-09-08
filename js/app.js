// vars
const btnEnviar = document.querySelector('#enviar')

// variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

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
    e.preventDefault();

    if (e.target.value.length > 0) {
        console.log('Hay texto')
    } else {
        e.target.style.color = 'white'
        e.target.classList.add('opacity-50', 'border', 'border-red-500', 'border-solid',);
    }
}
