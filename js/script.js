// una funzione per capire se una parola è palindroma

// (    appunti     )

// una parola palindroma è una parola che ha le stesse lettere se le leggo da sinistra verso destra o da destra verso sinistra.

// nel caso della parola     radar r = (0) a = (1) d = (2) a = (3) r = (4)      da sinistra verso destra
//                           radar r = (0) a = (3) d = (2) a = (3) r = (4)      da destra verso sinistra 

// posizione 1 = posizione 5

// posizione 2 = posizione 4

// posizione 3 = posizione 3

//        (           fine appunti        )



// inserita una parola ne ricavo l'array

var parola = prompt('inserisci una parola');



// ciclo la parola per creare un array

// for (i = 0; i < parola.length; i++) {

//     var letteraCorrente = (parola[i]);

//     console.log(letteraCorrente);

//     parolaArray.push(letteraCorrente); 
// }


function leggiParola() {
    for (i = 0; i < parola.length; i++) {

        var parolaArray = [];
        var letteraCorrente = (parola[i]);
    
        console.log(letteraCorrente);
    
        parolaArray.push(letteraCorrente); 

        var risultato = parolaArray.push(letteraCorrente);

        return risultato

        
    }
}

function leggiParola();
console.log(risultato);