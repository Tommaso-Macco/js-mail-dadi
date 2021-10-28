// GIOCO DEI DADI, CHIEDERE ALL UTENTE LA SUA EMAIL E VERIFICARE SE ESSA SIA ALL'INTERNO DELLA LISTA CONSENTITA


// Iniziamo col chiedere all'utente la tua email e assegnamo il dato ad una variabile

let emailUser = prompt("inserisci l'email")

// Creiamo una lista di email consentite grazie ad un array

const emailApproved= ["giorgio@gmail.com", "mattia@gmail.com", "giorgia@gmail.com", "tommaso@gmail.com"];

// Adesso confrontiamo le email e decidiamo se l'utente può entrare nel sito oppure no

const emailCheck = document.getElementById("email");

for (let i = 0; i <= emailApproved.length; i++) {
    if (emailUser != emailApproved[i]) {
        emailCheck.innerHTML = "Sfortunatamente non risulti registrato/a al sito, registrati per accedere."
    }
    else {
        emailCheck.innerHTML = "Complimenti rilsuti regisrato/a al sito, puoi accedere."
    }
}

console.log(emailUser);
console.log(emailApproved);
console.log(emailCheck);



// GIOCO DEI DADI 

const riceCheck = document.getElementById("email2");
// Chiedere all'utente un numero

let numUtente = parseInt(prompt("Digita un Numero"));

// Generare un numero al pc 
let numPc = Math.floor(Math.random() * 100) 
console.log(numUtente);
console.log(numPc);

// Confrontare i numeri

if (numUtente > numPc) {
    riceCheck.innerHTML = `Complimenti hai vitno il gioco il PC ha scelto ${numPc} `
}
else {
    riceCheck.innerHTML = `Ha vinto il computer! il suo numero è: ${numPc} `
}