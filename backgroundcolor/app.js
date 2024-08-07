let number = document.querySelector(".number")
let bg = document.querySelector("body");
let color =["green","blue","black","yellow","red"]

function colorchanger (){
    const numRandom = Math.floor(Math.random() * color.length);
    bg.style.backgroundColor = color[numRandom];
    number.textContent = color[numRandom];
    number.style.color = color[numRandom];
}

colorchanger ()