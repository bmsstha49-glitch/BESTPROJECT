// PROJECT LUNAR v1.0
// Beginning interaction

function startJourney(){

    document.querySelector(".intro").style.display = "none";

    document
    .getElementById("envelopeScene")
    .classList
    .remove("hidden");

}



let letterIndex = 0;

const birthdayMessage = `

Happy 16th Birthday, My Girl ❤️


Happy birthday, my girl.

This is such a special day—one that deserves to be celebrated with all my heart. I hope this little birthday message makes your day even a little brighter.


May the seas run dry.

May the winds stop blowing.


Even then, my mind will always revolve around one person, and that's you, my beautiful girl.


Happiest birthday to you—my sweetheart, my charm, and my peace of mind.


I hope everything in your life goes well. Maybe one day you'll be my wife... of course, only with your consent, because I'm a respectful freak. 😭❤️


Anyways, listen na...


I miss you so, so much, Darlene. 🥹

Let's meet again soon.



I love...


Your hair.

Your smell.

Your presence.

Your voice.

Your thoughts.


The way you look into my eyes with that little glance full of feelings.


The way you pull me back for another kiss.


The way you care so much.


Even the way you scold me.


The way you love me.


Your eyes.

Your smile.

Your face—every little part of it.


The way your hair rests on your shoulders before gently falling back down.


Your ears.

Your favourite flower.

Your favourite food.


Your favourite shade of blush, eyeliner, lip gloss, and eyeshadow—not just because they're your favourites, but because seeing the things that bring you joy makes me happy too.



When we first started dating, yes... I was different.


Maybe I've changed. Maybe I haven't changed as much as we think.


But one thing I'll always reassure you of is this:


You fell first... but I fell harder.


We've been through so much together—through some really difficult times—and I'm grateful for every moment because it led us here, where I get to stand beside you today.


It's been 1 year, 3 months, and 7 days, and every single day has been worth it.


Never let go of my hand, and we'll face whatever life throws at us together. ❤️


Dreams don't come true unless we work for them. Otherwise, they'll always remain just dreams.


Let's never give up on each other, no matter what life brings.


I'll gladly be the sailor of our little ship through every storm and every calm sea, my love.


Let's build a life we're proud of.


Let's make our families proud.


Let's chase our dreams.


Let's earn, grow, and create a beautiful future together.


Let's travel the world just like we've always imagined—Italy, Japan, all across Europe, the USA, Australia... everywhere.


And at the end of the day, all I truly want is for you to be respected, safe, and genuinely happy.


Happy 16th Birthday once again, my beautiful girl.


Thank you for being you.


I love you. ❤️

`;


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


    showPage();

}




function typeLetter(){

    let text =
    document.getElementById("letterText");


    if(letterIndex < birthdayMessage.length){

        text.innerHTML += birthdayMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,25);

    }

    else{

        document
        .getElementById("continueBtn")
        .classList
        .remove("hidden");

    }

}
