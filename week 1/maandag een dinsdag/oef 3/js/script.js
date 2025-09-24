var eersteNummer = window.prompt("Geef een nummer (geen commas)");
var tweedeNummer = window.prompt("Geef een tweede nummer (geen commas)");
console.log(parseInt(eersteNummer) + parseInt(tweedeNummer)) //som

var getal1 = parseInt(eersteNummer)
var getal2 = parseInt(tweedeNummer)
var som = getal1 + getal2

console.log(`de som van ${getal1} + ${getal2} = ${som}`)

console.log(parseInt(eersteNummer) - parseInt(tweedeNummer)) //verschil
console.log(parseInt(eersteNummer) * parseInt(tweedeNummer)) //vermenigvuldiging
console.log(parseInt(eersteNummer) / parseInt(tweedeNummer)) //deel
console.log(parseInt(eersteNummer) % parseInt(tweedeNummer)) //rest van deling
console.log(parseInt(eersteNummer) ** parseInt(tweedeNummer)) //machtverdelng

console.log(getal1++); //deze doet niets
console.log(getal1--); //maar hier komt +1 bij, enkel als de vorige lijn er ook is, nets aan te doen