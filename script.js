const popSound= new
Audio("confetti.mp3");
const music= document.getElementById("bg");
const button= document.querySelector("button");

button.addEventListener("click", ()=>
    {const title = document.getElementById("title"); title.innerHTML = "Opening...";
        setTimeout(()=> {title.innerHTML= "Masterpiece loading 🗿✋"}, 4000) 
        button.style.opacity="0"; button.style.pointerEvents="none"; setTimeout(()=> {
            title.style.opacity= "0"
        }, 6000)
        const gift= document.getElementById("gift");
        setTimeout(()=> {gift.style.opacity="1"; gift.classList.add("pop");}, 6000)
    });


const gift= document.getElementById("gift");

gift.addEventListener("click", ()=>
    {confetti({
        particleCount: 190,
        spread: 100,
        origin: {y: 0.6}
    });

    popSound.currentTime=0;
    popSound.play();

    document.querySelectorAll(".star").forEach(star => {
        star.style.display = "none";
    });

    document.querySelector(".balloon").style.display = "none";
    document.querySelector(".bow").style.display = "none";
    document.querySelector(".heart").style.display = "none";
    document.querySelector(".fleur").style.display = "none";
    document.querySelector(".music").style.display = "none";

    if (music.paused){
        music.play();
    }

    document.querySelectorAll(".rat").forEach(rat => {
        rat.style.display = "block";
    });

    gift.innerHTML= '<img id="goat" src="goat.png" alt="Orthogoat">'; 
    const goat = document.getElementById("goat");

    setInterval(() => {

        const x = Math.random() * (window.innerWidth - 220);
        const y = Math.random() * (window.innerHeight - 220);

        goat.style.left = x+ "px";
        goat.style.top = y+ "px";

    }, 1000);});

music.addEventListener("ended", ()=> {
    music.loop=true;
    music.play();
});
