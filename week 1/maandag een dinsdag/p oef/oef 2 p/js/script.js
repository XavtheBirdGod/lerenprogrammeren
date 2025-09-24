/*
Je vraagt het geboortejaar van de gebruiker (bijv. 1973).
Je vraagt ook het huidige jaar (bijvoorbeeld 2025)
Je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var geboorteJaar = window.prompt("wat is uw geboortejaar?")
var huidigJaar = window.prompt("wat is het jaar?")

var leeftijd = parseInt(huidigJaar) - parseInt(geboorteJaar)

if (leeftijd >= 18) {
    console.log(`U bent ${leeftijd} jaar oud, u mag deelnemen`)
} else {
    console.log(`Sorry, u mag niet deelnemen, ${leeftijd} jaar is te jong`)
}

/* if (huidigJaar - geboorteJaar >= 18) {
     console.log(`U bent ${huidigJaar - geboorteJaar} jaar oud, u mag deelnemen`)
 } else {
     console.log(`Sorry, u mag niet deelnemen, ${huidigJaar - geboorteJaar} jaar is te jong`)
 }
 */
