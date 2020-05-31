// esercizio 1

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// l'utente inserisce due parole
var parola = prompt('inserisci una parola di almeno 4 lettere');
var parolaDue = prompt('inserisci una parola di almeno 4 lettere');

var stringaVuota = '';

// primo ciclo for
for (i = 0; i < parola.length; i++) {

    stringaVuota = stringaVuota + parola[i];
}

console.log(stringaVuota);

var stringaVuotaDue = '';


// secondo ciclo for
for (var i = parolaDue.length - 1; i >= 0; i--) {

    stringaVuotaDue = stringaVuotaDue + parolaDue[i];

}

console.log(stringaVuotaDue);

// l'if
if (stringaVuota === stringaVuotaDue) {
    alert('parola palindroma');
} else {
    alert('parola non palindroma');
}




// esercizio 2

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

// l'utente sceglie se pari o dispari
var pariODispari = prompt('scegli e scrivi se pari o dispari');
console.log(pariODispari);

// l'utente sceglie un numero
var numeroUtente = parseInt(prompt('scegli e scrivi un numero compreso tra 1 e 5'));
console.log(numeroUtente);

// numero computer
var numeroPC = Math.floor(Math.random() * 5) + 1;
console.log(numeroPC);

// il risultato
var risultato = somma(numeroUtente, numeroPC);
console.log(risultato);

// l'if
if (((pariODispari === 'pari') && (risultato % 2 === 0)) || ((pariODispari === 'dispari') && (risultato % 2 != 0))) { 
    alert('hai vinto');
} else {
   alert('hai perso');
}


// la funzione
function somma(numeroUtente, numeroPC) {

    var addizione = numeroUtente + numeroPC;

    return addizione;
}