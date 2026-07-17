// PROJECT LUNAR v1.0
// Beginning interaction
function startJourney(){

    document.querySelector(".intro").style.display="none";

    document
    .getElementById("envelopeScene")
    .classList
    .remove("hidden");

}



let letterIndex = 0;


const birthdayMessage = `

Happy birthday, my girl ❤️

This is such a special day and I hope this little message makes your day a little better.

May the seas run dry.
May the winds stop blowing.

My mind will always revolve around one person,
and that's you, beautiful girl.

Happiest birthday to you, my sweetheart,
my charm, and my peace of mind.

I hope everything goes well for you,
and I hope you always stay happy.

I miss you so much 🥹

Let's make beautiful memories together.

❤️

`;




function openLetter(){

    document
    .getElementById("envelopeScene")
    .classList
    .add("hidden");


    document
    .getElementById("letterScene")
    .classList
    .remove("hidden");


    typeLetter();

}





function typeLetter(){

    let text =
    document.getElementById("letterText");


    if(letterIndex < birthdayMessage.length){

        text.innerHTML += 
        birthdayMessage.charAt(letterIndex);


        letterIndex++;


        setTimeout(typeLetter,45);

    }

    else{

        document
        .getElementById("continueBtn")
        .classList
        .remove("hidden");

    }

}
