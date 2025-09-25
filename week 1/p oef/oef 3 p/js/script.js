var getal1 = window.prompt("Geef een jaartal")
var getal2 = window.prompt("Geef nog een jaartal")
console.log(getal1, getal2)

if(getal1 >= getal2) {
    var som1 = getal1 - getal2
    console.log(`${getal1} - ${getal2} = ${som1}`)
} else {
    var som2 = getal2 - getal1
    console.log(`${getal2} - ${getal1} = ${som2}`)
}