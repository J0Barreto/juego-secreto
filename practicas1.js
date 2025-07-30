//ejercicio 1
/*
function saludoConsola(texto){
    console.log(texto);
    return;
}

saludoConsola('Hola Mundo');
*/

//ejercicio 2 
/*
let nombreUsuario = prompt('Ingresa tu nombre:');

function saludoConsola(texto, nombre, texto2){
    console.log(texto, nombre, texto2);
    return;
}

saludoConsola('¡Hola,', nombreUsuario, '!');
*/

//ejercicio 3
/*
let numeroUsuario = parseInt(prompt('Ingrese un número por favor:'));

function dobleDelNumeroUsuario (numeroUsuario1) {
    console.log(numeroUsuario1*2);
    return;
};

dobleDelNumeroUsuario(numeroUsuario);
*/

//ejercicio 4
/*
function promedio(a, b, c) {
    return(a + b + c)/3;
};

let nro1 = parseInt(prompt('Ingrese un número:'));
let nro2 = parseInt(prompt('Ingrese otro número:'));
let nro3 = parseInt(prompt('Ingrese un número más:'));

let resultado = promedio(nro1,nro2,nro3);
console.log(resultado);
*/

//ejercicio 5
/*
function numeroMayor(a,b) {
    if (a>b) {
        console.log(a);
    } else {
        console.log(b);
    };
};

let nro1 = parseInt(prompt('Ingrese un número:'));
let nro2 = parseInt(prompt('Ingrese otro número:'));

let numeroMayorUsuario = numeroMayor(nro1,nro2);
*/

//ejercicio 6
let resultado 

function multiplicarNumero (a) {
    resultado = a * a;  
}

let nro1 = parseInt(prompt('Ingrese un número:'));

let numeroUsuarioMultiplicar = multiplicarNumero(nro1);
console.log(resultado);