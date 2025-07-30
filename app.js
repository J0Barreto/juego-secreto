//variables
let numMaxElegido = 100;
let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto) {
        //el usuario acertó
        asignarTextoElemento('p', `¡Muy bien!, Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarImput();
    }
    return;
};

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
};

function limpiarImput() {
    let valorImput = document.querySelector('#valorUsuario').value = '';
};

function reiniciarJuego() {
    //limpiar imput
    limpiarImput();
    //indicar mensajes de intervalos, genera nro secreto e inicializa intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
};

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Selecciona un número entre 1 y ${numMaxElegido}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

condicionesIniciales();

