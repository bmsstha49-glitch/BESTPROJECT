// PROJECT LUNAR v1.0
// Beginning interaction
function startJourney(){

    document.querySelector(".intro").style.display="none";

    document
    .getElementById("envelopeScene")
    .classList
    .remove("hidden");

}



function openLetter(){

    document
    .getElementById("envelopeScene")
    .classList
    .add("hidden");


    alert("Letter scene coming next ❤️");

}
