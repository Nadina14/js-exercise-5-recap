/* Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). 
Quindi simula un lancio per il computer e un lancio per l'utente. 
Mostra all'utente quanto è stato il risultato del computer e quanto è 
stato il risultato dell'utente e comunicagli se ha vinto o meno. */

function lancioDado (x){}
  let punteggioUtente = 0;
  let punteggioComputer = 0;
for(let i=0; i < 1; i++) {
    let valMin = 1
    let valMax = 6
    let totNum = (valMax - valMin) + 1
    let random = Math.random() * totNum
    let risultato = Math.floor(random) + valMin
    let risultatoN = Number(risultato)
    console.log('Hai tirato ' + risultato)

    let valMin1 = 1
    let valMax1 = 6
    let totNum1 = (valMax1 - valMin1) + 1
    let random1 = Math.random() * totNum1
    let risultato1 = Math.floor(random1) + valMin1
    let risultato1N = Number(risultato1)
    console.log('Il computer ha tirato ' + risultato1)

    if (risultatoN > risultato1N){
        punteggioUtente ++;
        console.log('Complimenti! Hai vinto!')
    }else if (risultatoN == risultato1N){
        console.log('Siete pari. Nessuno ha preso punto');
    }else if(risultatoN < risultato1N){
        punteggioComputer ++;
        console.log('Sará per la prossima volta, hai perso.')
    }
    console.log('Utente = ' + punteggioUtente + ' ' + 'Computer = ' + punteggioComputer)

} 
