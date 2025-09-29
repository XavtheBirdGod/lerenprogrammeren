let leeftijd = parseInt(prompt("geef uw leeftijd"))
if(leeftijd >= 18) {
    let vakje = parseInt(prompt("wilt u, 1. twaalf vakjes, 2. twee vakjes, 3. vier vakjes, 4. zes vakjes, 5. acht vakjes, 6. tien vakjes"))
if(vakje === 1){
    alert("dat is 20 euro")
} else if(vakje===2){
    alert("dat is 4 euro")
} else if (vakje===3){
    alert("dat is 8 euro")
} else if(vakje===4){
    alert("dat is 12 euro")
} else if(vakje===5){
    alert("dat is 16 euro")
} else{
    alert("dat is 18 euro")
}
} else {
    console.log(`u bent ${leeftijd} jaar, u mag niet meespelen`)
}