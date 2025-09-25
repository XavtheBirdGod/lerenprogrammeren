//getallen tussen 1 en n die deelbaar zijn door 5
let getal = parseInt(window.prompt("geef een getal"))
for(let i = 1;i<=getal;i++){
    if(i%5==0){
        console.log(i)
    }
}
