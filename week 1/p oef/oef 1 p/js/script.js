/* Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
Schrijf een prompt die de leeftijd vraagt en zorg ervoor dat je een number uitkomt */

var leeftijd = window.prompt("wat is uw leeftijd (in numbers)?");
// const is constand, zoals PI

if (leeftijd >= 18) {
console.log(`U bent ${leeftijd} jaar oud, u mag deelnemen`)
} else {
    console.log(`Sorry, u mag niet deelnemen, ${leeftijd} jaar is te jong`)
}

