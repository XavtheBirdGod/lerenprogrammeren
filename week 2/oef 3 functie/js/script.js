function printTafel(tafel){
    for(let i = 1;i<=10;i++){
  document.querySelector("#tafel").innerHTML += `<li>${i} x ${tafel} = ${i*tafel}</li>`
}
}

let getal = parseInt(prompt("geef een getal"))
printTafel(getal)