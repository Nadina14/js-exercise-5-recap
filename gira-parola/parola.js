/* Crea una funzione che crea la versione girata di una parola. 
Chiedi all'utente una parola e mostra la versione girata della parola. */

function giraParola (x){
    let parolaGirata = '';
    for (let i = x.length - 1; i >= 0; i--){
    parolaGirata += x[i]; 
    }
    return parolaGirata;
}

const inputUtente = prompt('Scrivi una parola da girare');
const risultato = giraParola(inputUtente);
console.log(risultato);
