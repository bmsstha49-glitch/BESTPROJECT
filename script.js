// PROJECT LUNAR v1.0
// Beginning interaction

function startJourney(){

    const intro = document.querySelector(".intro");

    intro.style.opacity = "0";


    setTimeout(()=>{

        intro.style.display = "none";


        document
        .getElementById("envelopeScene")
        .classList
        .remove("hidden");


    },800);


}





function openLetter(){

    const envelope =
    document.querySelector(".envelope");


    envelope.style.transform =
    "scale(0.8) rotateX(90deg)";


    setTimeout(()=>{


        alert("Letter scene coming next ❤️");


    },700);


}







function createSparkles(){

    for(let i=0;i<25;i++){


        let sparkle =
        document.createElement("div");


        sparkle.innerHTML="✨";


        sparkle.style.position="fixed";


        sparkle.style.left =
        Math.random()*100+"vw";


        sparkle.style.top =
        Math.random()*100+"vh";


        sparkle.style.fontSize =
        Math.random()*20+15+"px";


        sparkle.style.animation =
        "sparkle 2s ease forwards";


        document.body.appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },2000);


    }

}





const style =
document.createElement("style");


style.innerHTML=`

@keyframes sparkle{

0%{

opacity:0;

transform:scale(0);

}


50%{

opacity:1;

transform:scale(1.5);

}


100%{

opacity:0;

transform:scale(0);

}

}

`;


document.head.appendChild(style);
