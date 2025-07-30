// ejercicio 1
/*
let listaGenerica = [];
console.log(listaGenerica);

listaGenerica.push(2);
console.log(listaGenerica);
*/

//ejercicio 2 y 3
/*
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//ejercicio 4
function elementosDeLaListaDeProgramacion() {
    console.log(lenguajesDeProgramacion);
};

elementosDeLaListaDeProgramacion();

//ejercicio 5
function ordenInversoListaDeProgramacion() {
    console.log(lenguajesDeProgramacion.reverse());
};

ordenInversoListaDeProgramacion();
*/

//ejercicio 6 
/*
let listaDeNumeros = [2,4,7,9,12];

function promedioNumeros() {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
    suma += listaDeNumeros[i];
    }
    suma = suma/listaDeNumeros.length
    console.log(suma); 
}

promedioNumeros();
*/

// ejercicio 7 , 8 y 9
/*
let listaDeNumeros = [2,4,7,9,12,72];

function extremosLista() {
    let max = Math.max(...listaDeNumeros);
    let min = Math.min(...listaDeNumeros);
    let extremos = `${max} y ${min}`;
    return extremos
}

console.log(extremosLista());

function sumaNumeros() {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
    suma += listaDeNumeros[i];
    }
    return suma; 
}

console.log(sumaNumeros());

function devolverPosicion(lista, elemento) {
   if (lista.includes(elemento)) {
    return console.log(lista.indexOf(elemento))
   } else {
    return console.log(-1);
   }
   
}

devolverPosicion(listaDeNumeros, 100);
*/

//ejercicio 10
/*
let listaUno = ['uno', 'dos', 'tres'];
let listaDos = ['a','b','c'];

function concatenarListas() {
    let listaTres = listaUno.concat(listaDos);
    return console.log(listaTres);
}

concatenarListas();
*/

//ejercicio 11

let listaNumeros = [2,4,6,8,10,12,14];

function cuadradosNumeros (a) {
    let listaNumeros2 = a.map(function(numero) {
        return numero * numero;
      });
      console.log(listaNumeros2);
}

cuadradosNumeros(listaNumeros);