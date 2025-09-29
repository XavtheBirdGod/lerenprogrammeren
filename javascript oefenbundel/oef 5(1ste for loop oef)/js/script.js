let aantalGetal = parseInt(prompt("hoeveel getal wilt u ingeven"))
let som=0;
for(let i = 1;i>=aantalGetal;i++){
    let getal = parseInt(prompt("geef een getal"))
    som += getal
}
console.log(som)
