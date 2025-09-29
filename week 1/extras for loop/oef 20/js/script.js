//omgekeerde van een getal
let number = parseInt(prompt("voer een getal in"))
let reverse = 0

for(let i = number;i>0;i = (i-(i%10)) / 10) {
    let laatsteCijfer = i%10 //haal het laaste cijfer
    reverse = reverse * 10 + laatsteCijfer
}

console.log(reverse)