let hetAantal = parseInt(prompt("hoeveel getallen wilt u ingeven?"))
let getallen = []
let getallen2 = []
let somGetallen = []
for(let i = 0; i< hetAantal; i++){
    let input = parseFloat(prompt(`geef getal ${i+1}`))
    getallen.push(input)
    getallen2.push(input)
    somGetallen.push(getallen[i] + getallen2[i])
}
console.log("je array is", getallen)
console.log("je tweede array is", getallen2)
console.log(somGetallen)