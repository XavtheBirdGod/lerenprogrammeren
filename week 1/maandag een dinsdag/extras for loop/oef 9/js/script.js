//alle getallen deelbaar door 3
//correcte versie:
for(let i=1;i<=30;i++){
    if(i%3==0){
        console.log(i)
    }
}

//uitbreiding:
var resultaat = ""
for(let i=1;i<=30;i++){
    if(i%3==0){
        if(i==30){
            resultaat = resultaat + i
        } else {
            resultaat = resultaat + i + ","
        }
    }
}
console.log(resultaat)

/*
mijn werk:
for(let i=30;i>=1;i--){
    let som = i%3
    if(som === 0){
        let oplossing = i/3
        console.log(`${i} delen door drie is ${oplossing}`)
    }
}
 */