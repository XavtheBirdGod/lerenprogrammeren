let getal1 = parseFloat(window.prompt("geef een getal"))
let getal2 = parseFloat(window.prompt("geef een tweede getal"))

if(getal1 > getal2){
    alert(`${getal1} is groter dan ${getal2}`)
} else if(getal1 == getal2){
    alert(`${getal1} is gelijk aan ${getal2}`)
} else{
    alert(`${getal1} is kleiner dan ${getal2}`)
}