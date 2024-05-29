const color =["green","blue","black","yellow","red"]
function colorchanger (){
    const numRandom = Math.floor(Math.random() * color.length)
    console.log(numRandom)
    const result = document.querySelector(".heading")
    result.style.backgroundColor = color[numRandom];
}