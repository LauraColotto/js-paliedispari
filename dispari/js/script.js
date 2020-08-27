// Funzione check pari/dispari

function checkpari(n){
    return (n % 2 == 0 ? true : false);
}

// Funzione random

function randomPc(){
  return Math.round(Math.random()*4+1);
}

// Chiedo di scegliere tra pari(true) e dispari(false)

var scelta = confirm("Premi OK per scegliere un numero pari\nPremi ANNULLA per scegliere un numero dispari ");

console.log(scelta);

// Chiedo all'utente d'inserire un numero da 1 a 5

var userN = parseInt(prompt("Ciao! Inserisci un numero da 1 a 5"));

console.log(userN);

// Genero un numero random da 1 a 5 per il pc
var pcN = randomPc();
console.log(pcN);

if (userN <= 5 && userN > 1){

  // Sommo i due numeri

  var somma = userN + pcN;
  console.log(somma);

  console.log(checkpari(somma));

  // Confronto le variabili booleane

  if(scelta == checkpari(somma)){
    alert("Complimenti, hai vinto!");
  } else {
    alert("Mi dispiace, hai perso");
  }

} else {
  alert("Attenzione! Il numero inserito non è compreso tra 1 e 5!")
}
