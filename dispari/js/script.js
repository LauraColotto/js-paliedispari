// Chiedo all'utente d'inserire un numero da 1 a 5

var userN = parseInt(prompt("Ciao! Inserisci un numero da 1 a 5"));

if (userN <= 5 && userN > 1){
  // Genero un numero random da 1 a 5 per il pc
  function randomPc(){
    return Math.round(Math.random()*4+1);
  }


  console.log(randomPc());

} else {
  alert("Attenzione! Il numero inserito non è compreso tra 1 e 5!")
}
