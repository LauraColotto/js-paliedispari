// Chiedo all'utente d'inserire una parola

var parola = prompt("Inserisci una parola");

function reverseParola(parola) {
  return parola.split("").reverse().join("");

}

var reverseP = (reverseParola(parola));

if (parola == reverseP) {
  alert("La parola è palindroma");
} else {
  alert("La parola NON è palindroma");
}
