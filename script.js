// GIOCO DEI DADI, CHIEDERE ALL UTENTE LA SUA EMAIL E VERIFICARE SE ESSA SIA ALL'INTERNO DELLA LISTA CONSENTITA


// Iniziamo col chiedere all'utente la tua email e assegnamo il dato ad una variabile

let emailUser = prompt("inserisci la tua email")
console.log(emailUser);

// Creiamo una lista di email consentite grazie ad un array

const emailApproved= ["giorgio@gmail.com", "mattia@gmail.com", "giorgia@gmail.com", "tommaso@gmail.com"];
console.log(emailApproved);

// Adesso confrontiamo le email e decidiamo se l'utente può entrare nel sito oppure no

const emailCheck = document.getElementById("email");

if (emailUser=emailApproved) { 
    emailCheck.innerHTML = "Complimenti rilsuti regisrato/a al sito, puoi accedere."
}
else {
    emailCheck.innerHTML = "Sfortunatamente non risulti registrato/a al sito, registrati per accedere."
}

console.log(emailCheck);