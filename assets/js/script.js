// Definire tre variabili, rispettivamente con var, let e const, per stampare la stringa di seguito:

var aldo = 'Aldo';
let cliente = 'cliente';
const numero = '3.14';

document.getElementById('concatena').innerHTML = `${aldo}, ${cliente}, ${numero}`;


// Concatenare le variabili precedenti per ottenere lo stesso risultato con un'unica variabile:

var testo = `${aldo}, ${cliente}, ${numero}`;

document.getElementById('concatena2').innerHTML = testo;

// Utilizzare le keyword dichiarative var e let con la stessa variabile, per ottenere i seguenti risultati:

var persona = 'Mario';
document.getElementById('var').innerHTML = persona;

{
    let persona = 'Carla';
    document.getElementById('let').innerHTML = persona;
}

document.getElementById('final').innerHTML = persona;

//--------------------------------------

var persona2 = 'Mario';
document.getElementById('let2').innerHTML = persona2;

{
    var persona2 = 'Carla';
    document.getElementById('let3').innerHTML = persona2;
}

document.getElementById('final2').innerHTML = persona2;


// Manipolare il valore di partenza per ottenere i seguenti risultati:

const inizio = 15; //numero iniziale
document.getElementById('iniziale').innerHTML += inizio;

let addizione = inizio + inizio; //numero addizione
document.getElementById('valore1').innerHTML += addizione;

let incremento = ++addizione; //numero incremento
document.getElementById('valore1').innerHTML += `, ${incremento}`;

let sottrazione = inizio - 10;
document.getElementById('valore2').innerHTML += sottrazione; //numero sottrazione

let decremento = --sottrazione; //numero decremento
document.getElementById('valore2').innerHTML += `, ${decremento}`;

let moltiplicazione = inizio * 3; //numero moltiplicazione
document.getElementById('valore3').innerHTML += moltiplicazione;

let divisione = inizio / 3; //numero divisione
document.getElementById('valore4').innerHTML += divisione;

document.getElementById('valore5').innerHTML += `${inizio} è un numero`; //concatenazione

