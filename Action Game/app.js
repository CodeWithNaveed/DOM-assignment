
// let music = new Audio("music.mp3")
// music.play()

let move1 = 0;
let move2 = 0;


function player1() {
    console.log(event.keyCode);
    let character1=document.getElementById("character1");
    if(event.keyCode === 68 && move1 < 1200){
        move1 = move1 + 20;
        character1.style.left = `${move1}px`
        character1.src = "Omega_Red/omegared-walk.gif"
        character1.style.width = "200px"
        character1.style.height = "250px"
        setTimeout(function(){
            character1.src = "Omega_Red/m-omega.gif"
            character1.style.width = "200px"
            character1.style.height = "250px"
        },1000)
    }
    if(event.keyCode === 65 && move1 > -30){
        move1 = move1 - 15;
        character1.style.left = `${move1}px`
        character1.src = "Omega_Red/m-omega.gif"
        character1.style.width = "200px"
        character1.style.height = "250px"
        setTimeout(function(){
            character1.src = "Omega_Red/m-omega.gif"
            character1.style.width = "200px"
            character1.style.height = "250px"
        },1000)
    }
    if(event.keyCode === 87){
        character1.src = "Omega_Red/omega-jumpkicks.gif"
        character1.style.width = "300px"
        character1.style.height = "350px"
        setTimeout(function(){
            character1.src = "Omega_Red/m-omega.gif"
            character1.style.width = "200px"
            character1.style.height = "250px"
        },1000)
    }
    if(event.keyCode === 83){
        character1.src = "Omega_Red/omegared-crouch.gif"
        character1.style.width = "200px"
        character1.style.height = "250px"
        character1.style.bottom = "-50px"
        setTimeout(function(){
            character1.src = "Omega_Red/m-omega.gif"
            character1.style.bottom = "20px"
        },1000)
    }
    if(event.keyCode === 32){
        character1.src = "Omega_Red/omega-red-intro.gif"
        character1.style.width = "300px"
        character1.style.height = "350px"
        setTimeout(function(){
            character1.src = "Omega_Red/m-omega.gif"
            character1.style.width = "200px"
            character1.style.height = "250px"
        },3000)
    }
    if(event.keyCode === 13){
        window.onkeydown = player2;
    }
}







function player2() {
    console.log(event.keyCode);
    let character2=document.getElementById("character2");
    if(event.keyCode === 37 && move2 < 1000){
        move2 = move2 + 40;
        character2.src = "./asura/asra-run.gif"
        character2.style.right = `${move2}px`
        character2.style.width = "400px"
        character2.style.height = "450px"
        character2.style.bottom = "-80px"
        setTimeout(function(){
            character2.src = "./Asura/azrabc.gif"
            character2.style.width = "200px"
            character2.style.height = "250px"
            character2.style.bottom = "20px"
        },1300)
    }
    if(event.keyCode === 39 && move2 > 10){
        move2 = move2 - 20;
        character2.style.right = `${move2}px`
        setTimeout(function(){
            character2.src = "./Asura/azrabc.gif"
        },5000)
    }
    if(event.keyCode === 38){
        character2.src = "./Asura/asra-jump.gif"
        character2.style.width = "300px"
        character2.style.height = "350px"
        setTimeout(function(){
            character2.src = "./Asura/azrabc.gif"
            character2.style.width = "200px"
            character2.style.height = "250px"
        },1000)
    }
    if(event.keyCode === 40){
        character2.src = "./Asura/asra-ckick.gif"
        character2.style.width = "400px"
        character2.style.height = "450px"
        character2.style.bottom = "-100px"
        setTimeout(function(){
            character2.src = "./Asura/azrabc.gif"
            character2.style.width = "200px"
            character2.style.height = "250px"
            character2.style.bottom = "20px"
        },1000)
    }
    if(event.keyCode === 32){
        setInterval(function(){
            character2.src = "./Asura/asra-roj.gif"
            character2.style.width = "400px"
            character2.style.height = "450px"
        },)
        setTimeout(function(){
            character2.src = "./Asura/azrabc.gif"
            character2.style.width = "200px"
            character2.style.height = "250px"
        },5000)
    }
    if(event.keyCode === 13){
        window.onkeydown = player1;
    }
}




window.onkeydown = player1;









 