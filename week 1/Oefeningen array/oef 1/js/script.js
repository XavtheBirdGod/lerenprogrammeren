let getallen = [4, 9, 6, 3, 8];
let som = 0
let teller = 0
for(getal of getallen){
    som+=getallen[teller]
    teller=teller+1
}
console.log(`de totale som van ${teller} getallen is ${som}`)

//werkt maar heeft een error?