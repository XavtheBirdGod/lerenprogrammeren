/*bereken volume kubus*/

var zijde = parseFloat(window.prompt("geef de zijde van uw kubus"))
console.log(zijde)

var som = zijde * zijde * zijde
/* zijde tot de derde
var som = zijde**3
*/
alert(`het volume is ${som}`)