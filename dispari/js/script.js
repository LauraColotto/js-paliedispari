// Chiedo all'utente d'inserire un numero da 1 a 5

var userN = parseInt(prompt("Ciao! Inserisci un numero da 1 a 5"));

console.log(userN);

if (userN <= 5 && userN > 1){
  // Genero un numero random da 1 a 5 per il pc
  function randomPc(){
    return Math.round(Math.random()*4+1);
  }

  var pcN = randomPc();
  console.log(pcN);

  // Sommo i due numeri

  var somma = userN + pcN;
  console.log(somma);

  // Stabilisco se il risultato è pari o dispari

  function checkpari(somma){
      return (somma % 2 == 0 ? true : false);
  }
console.log(checkpari(somma));
} else {
  alert("Attenzione! Il numero inserito non è compreso tra 1 e 5!")
}
