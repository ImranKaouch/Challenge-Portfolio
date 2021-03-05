let bezoeker= {
    voornaam: "Welkom "+ prompt("Wat is uw voornaam?"),
    leeftijd: prompt("Wat is uw leeftijd?")
};
console.log(bezoeker);

document.getElementById("voornaam").innerHTML= bezoeker.voornaam;

if (bezoeker.leeftijd > 18){

    document.querySelector("h1"). style.color="green"
    }
    else if (bezoeker.leeftijd < 18) {
    document.querySelector("h1"). style.color="red"
    }
