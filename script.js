// ==========================
// PROJECT LUNAR
// COMPLETE SCRIPT
// ==========================



// OPEN ENVELOPE

function openEnvelope(){

    document
    .getElementById("intro")
    .classList
    .add("hidden");


    document
    .getElementById("envelopeScene")
    .classList
    .remove("hidden");

}






// LETTER PAGES


let currentPage = 0;



const pages = [


`

<h2>
Happy 16th Birthday, My Girl ❤️
</h2>


Happy birthday, my girl.


This is such a special day—one that deserves to be celebrated with all my heart.


I hope this little birthday message makes your day even a little brighter.


May the seas run dry.

May the winds stop blowing.


Even then, my mind will always revolve around one person...


and that's you, my beautiful girl.

`,




`

<h2>
I Love...
</h2>


Your hair.


Your smell.


Your presence.


Your voice.


Your thoughts.


The way you look into my eyes with that little glance full of feelings.


The way you pull me back for another kiss.


The way you care so much.


Even the way you scold me.


Your eyes.

Your smile.

Your face—every little part of it.


`,




`

<h2>
Our Story ❤️
</h2>


When we first started dating, yes... I was different.


Maybe I've changed. Maybe I haven't changed as much as we think.


But one thing I'll always reassure you of:


You fell first...


but I fell harder.


We've been through so much together, and I'm grateful for every moment.


It's been 1 year, 3 months, and 7 days.


Never let go of my hand, and we'll face whatever life throws at us together ❤️


`,





`

<h2>
Our Dreams 🌍
</h2>


Dreams don't come true unless we work for them.


Let's build a life we're proud of.


Let's make our families proud.


Let's chase our dreams.


Italy.

Japan.

Europe.

USA.

Australia.


Let's travel the world just like we imagined.


`,





`

<h2>
Forever ❤️
</h2>


At the end of the day, I only want you to be respected, safe, and genuinely happy.


Happy 16th Birthday once again, my beautiful girl.


Thank you for being you.


I love you ❤️


`

];







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






function showPage(){


document
.getElementById("letterText")
.innerHTML =
pages[currentPage];



if(currentPage === pages.length-1){


document
.getElementById("nextPageBtn")
.classList
.add("hidden");


document
.getElementById("continueBtn")
.classList
.remove("hidden");


}

else{


document
.getElementById("nextPageBtn")
.classList
.remove("hidden");


}



}







function nextPage(){


currentPage++;


showPage();


}







// MEMORY PAGE


function openMemories(){


document
.getElementById("letterScene")
.classList
.add("hidden");



document
.getElementById("memoryScene")
.classList
.remove("hidden");


}
