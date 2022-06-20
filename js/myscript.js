// Generare una password per l'utente 

// 1-Recupero elemento
// 1- Variabile per contenere il nome dell'utente e chiedere il nome all'utente
// 2- Variabile per contenere il cognome dell'utente e chiedere il cognnome all'utente
// 3-Chiedere il suo colore preferito
// 4-Calcolare la password tramite funzione
// 5-Stampare in pagina la password generata


// 1-Recupero Elemento
const ResultParagraph = document.getElementById('password-generator');
console.log(ResultParagraph);

// 2- Variabile per contenere il nome dell'utente e chiedere il nome all'utente
const FirstName = prompt("Qual'è il tuo nome?", 'Pinco');
console.log(FirstName);


// 3- Variabile per contenere il cognome dell'utente e chiedere il cognnome all'utente
const surname = prompt("Qual'è il tuo cognome?", 'Pallino');
console.log(surname);

// 4-Chiedere il suo colore preferito
const FavCol = prompt("Qual'è il tuo colore preferito",'viola');
console.log(FavCol);

// 5-Calcolare la password tramite funzione
const PassGen = FirstName + surname + FavCol + 21;
console.log(PassGen);

// 6-Stampare in pagina la password generata
ResultParagraph.innerHTML = `La tua password è: <strong>${FirstName}${surname}${FavCol}21</strong>;` 