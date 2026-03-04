/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
/


/*
variabili esterne -> costo al km
*/

let age = Number(prompt('Quanti anni hai?'))
let km = Number(prompt('Quale distanza devi percorrere?'))
/* blocchi IF ELSE */

/* if age<18 20%off*/
if (age < 18) {
    const cost = ((0,21 * km) - 20%)

} else if 
/*if age>65 40%off*/