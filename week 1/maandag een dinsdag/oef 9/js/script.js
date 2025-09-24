let vraag = parseInt(window.prompt("bent u 1.ambtenaar, 2.arbeider, 3.bediende of 4.zelfstandig, typ volledig antwoord"))
console.log(vraag)

if (vraag === 4) {
    alert("u werkt zeer veel")
} else if (vraag === 2) {
    alert("u werkt veel")
} else if (vraag === 3) {
    alert("u werkt")
} else if(vraag === 1){
    alert("oei oei")
} else {
    alert("u heeft een typfout of een onjuist antwoord")
}
