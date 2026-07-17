// PROJECT LUNAR v1.0
// Beginning interaction


function startJourney(){

    const button = document.querySelector("button");

    const message = document.querySelector(".message");

    button.style.transform = "scale(0)";

    button.style.opacity = "0";


    setTimeout(()=>{

        message.innerHTML =
        `
        🌸 A little surprise is waiting...
        <br><br>
        Made especially for you ❤️
        `;


        message.style.fontSize="24px";


    },500);



    createSparkles();

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