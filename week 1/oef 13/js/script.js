//laat user getal raden tussen 1 en 10, stop pas wanneer getal geraden

let teRadenGetal = 7
let getal = 0
let teller = 0
while(getal!==teRadenGetal){
    getal = parseInt(window.prompt("raad het getal"))
    teller=teller+1
}
console.log(`dit is het juiste getal: ${teRadenGetal}, u heeft geraden in ${teller} poging(en)`)

// for(let i = 1;i<=10;i++){
//     var getal = parseInt(window.prompt("geef een getal tussen 1 en 10"))
//     if(getal==6){
//         alert("juist")
//     }
// }
//
// let i = 1
// while(i<=10){
//     var getal = parseInt(window.prompt("geef een getal tussen 1 en 10"))
//     if(getal==6) {
//         alert("juist!")
//     }
// }
