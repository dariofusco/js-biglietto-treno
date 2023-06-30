// Assegno le costanti

const kmToGo = prompt ("Quanti Km vuoi percorrere?");
const agePassenger = prompt ("Quanti anni hai?");

// Assegno la variabile
let ticketPrice = (0.21 * kmToGo);

// Verifico funzionalità delle mie costanti e variabili
console.log (kmToGo)
console.log (agePassenger)
console.log (ticketPrice)

// Creo una funzione
if (agePassenger < 18) {
    // Assegno variabili relative a questa funzione
    let coupon = (ticketPrice * 0.2);
    let discountedPrice = (ticketPrice - coupon);
    // Verifico funzionalità delle variabili
    console.log (coupon)
    console.log (discountedPrice)
    // Stampo in HTML i risultati
    document.getElementById("discount") .innerHTML = "Complimenti, hai diritto ad uno sconto del 20%"
    document.getElementById("final-price") .innerHTML = "il costo del tuo biglietto è di " + discountedPrice + "€"
} else if (agePassenger > 65) {
    // Assegno variabili relative a questa funzione
    let coupon = (ticketPrice * 0.4);
    let discountedPrice = (ticketPrice - coupon);
    // Verifico funzionalità delle variabili
    console.log (coupon)
    console.log (discountedPrice)
    // Stampo in HTML i risultati
    document.getElementById("discount") .innerHTML = "Complimenti, hai diritto ad uno sconto del 40%"
    document.getElementById("final-price") .innerHTML = "il costo del tuo biglietto è di " + discountedPrice + "€"
} else {
    document.getElementById("final-price") .innerHTML = "il costo del tuo biglietto è di " + ticketPrice + "€"
}