// Chiedo all'utente d'inserire una parola

var parola = prompt("Inserisci una parola");

// Divido i caratteri della parola, li ribalto e li unisco in una nuova strintga

function reverseParola(parola) {
  return parola.split("").reverse().join("");

}

// Salvo la nuova stringa creata in una variabile

var reverseP = (reverseParola(parola));

// Confronto le due variabili per capire se la parola è palindroma

if (parola == reverseP) {
  alert("La parola è palindroma");
} else {
  alert("La parola NON è palindroma");
}
