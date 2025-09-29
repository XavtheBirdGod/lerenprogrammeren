function isEven(getal) {
    return getal%2===0
}

//
let getal = parseInt(prompt("geef een getal in"))
let resultaat = isEven(getal)
document.querySelector("#resultaat").innerText += resultaat