// ejercicio 1
/*
let imc = 0;

function indiceMasaCorporal (peso, altura) {
    imc = peso / (altura*altura);
    return;
}

let pesoUsuario = parseInt(prompt('Ingrese su peso en Kg:'));
console.log(pesoUsuario);
let alturaUsuario = parseFloat(prompt('Ingrese su altura en metros:'));
console.log(alturaUsuario);

indiceMasaCorporal(pesoUsuario, alturaUsuario);
console.log(imc);
*/

//ejercicio 2
/*
function factorialDeUnNumero(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

let a = parseInt(prompt('Ingrese un número:'));


    let resultado = factorialDeUnNumero(a);
    alert(`El factorial de ${a} es: ${resultado}`);
    console.log(resultado);
*/
//ejercicio 3
/*
let dolar = parseFloat(prompt('Ingrese cantidad de dolares a convertir en reales:'));
let real = 4.80; 
let totalReales = 0;

function conversionReales(dolares, reales) {
    totalReales = dolares * reales;
    return;
};

conversionReales(dolar, real);
alert(`Tienes ${totalReales} reales`);
*/

//ejercicio 4
/*
let pared1 = parseFloat(prompt('Ingrese la medida de una pared:'));
let pared2 = parseFloat(prompt('Ingrese la medida de pared perpendicular a la indicada anteriormente:'));
let area = 0;
let perimetro = 0;

function areaSala(a,b) {
    area = a*b;
    return
}

function perimetroSala(a,b) {
    perimetro = (a*2)+(b*2);
    return
}

areaSala(pared1,pared2);
perimetroSala(pared1,pared2);

alert (`El área de la sala indicada es ${area} m2 y el perimerto es ${perimetro} m`);
*/

//ejercicio 5
/*
let radio = parseFloat(prompt('Ingrese la medida del radio de la sala:'));
let pi = 3.14;
let area = 0;
let perimetro = 0;

function areaSala(a,b) {
    area = b*(a*a);
    return
}

function perimetroSala(a,b) {
    perimetro = 2*b*a;
    return
}

areaSala(radio,pi);
perimetroSala(radio,pi);

alert (`El área de la sala indicada es ${area} m2 y el perimerto es ${perimetro} m`);
*/

//ejercicio 6
let numeroElegido = parseInt(prompt('Ingrese el número deseado'));
let contador = 1;

function tablaMultiplicar(a,b) { 
    while (10 >= b) {
        resultado = a * b;
        b++
        console.log(resultado);
    }
}

tablaMultiplicar(numeroElegido,contador);
