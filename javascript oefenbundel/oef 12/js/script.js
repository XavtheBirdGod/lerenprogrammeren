function isPalindroom(woord){
    let omgekeerd = ""
    for(let i = woord.length - 1;i>=0;i--){
        omgekeerd += woord[i]
    }
    return woord === omgekeerd
}

let woord = prompt("geef een woord in")

document.querySelector("#meep").innerHTML =
    isPalindroom(woord)
? `"${woord}" is een palindroom`
: `"${woord}" is geen palindroom`

/*
bevraag
functie
ontvang
lengte
gebruik lengte om te reverse
 */