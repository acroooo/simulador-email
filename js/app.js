// vars
const btnEnviar = document.querySelector('#enviar')
// event listeners
eventListeners();

function eventListeners() {
    console.log('eventListeners');
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    // // validate the form
    // document.querySelector('#enviar').addEventListener('click', validarFormulario);

    // // reset the form
    // document.querySelector('#resetBtn').addEventListener('click', resetForm);
}
