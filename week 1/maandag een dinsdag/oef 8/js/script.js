/* leeftijd?
ouder dan 18 = volwassen
12-17 = tiener
-12 = kind
 */

let leeftijd = parseFloat(window.prompt("wat is uw leeftijd?"))

if(leeftijd >= 18){
    alert(`u bent volwassen`)
} else if (leeftijd <= 12) {
    alert("u bent een kind")
} else {
    alert("u bent een tiener")
}

/*
else if(leeftijd > 12 && leeftijd < 18){
alert("tiener")
}else {
alert("kind")
}
&& = logische operator
&& => and
|| => or
== => is gelijk aan - "5" == 5 - true
=== => is gelijk aan "5" === 5 - false (string en number - appels en peren)
niet gelijk aan, !== en !===
 */