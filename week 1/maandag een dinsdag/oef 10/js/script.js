let vraag = parseInt(window.prompt("bent u 1.zelfstandig, 2.arbeider, 3.bediende of 4.ambtenaar typ volledig antwoord"))
console.log(vraag)

switch(vraag){
    case 1:
        alert("u werkt zeer veel")
        break;
    case 2:
        alert("u werkt veel")
        break;
    case 3:
        alert("u werkt")
        break;
    case 4:
        alert("oh god")
        break;
    default:
        alert("typfout")
}

/* let onderwijs = "vdab"

 switch(onderwijs){
     case "vdab":
         alert('gegeven door de vdab')
         break;
     case "syntra":
         alert("gegeven doos syntra")
         break;
     default:
         alert("gegeven door andere instelling")
 }
*/
